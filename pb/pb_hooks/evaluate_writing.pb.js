/// <reference path="../pb_data/types.d.ts" />

// POST /api/evaluate-writing — evaluates a learner's English writing text
// against a CEFR rubric using OpenCode Go (opencode.ai/zen/go). The API key
// lives server-side only (OPENCODE_API_KEY env var); the frontend never
// sees it. This is the only place that should ever hold that key.
//
// Request body:  { topic: string, text: string, concept?: string, difficulty?: number }
// Response body: { score: number, level: string, grammar: string,
//                   vocabulary: string, coherence: string, feedback_es: string }

routerAdd("POST", "/api/evaluate-writing", (e) => {
  e.response.header().set("Access-Control-Allow-Origin", "*")

  const info = e.requestInfo()
  const body = info.body || {}
  const topic = String(body.topic || "").trim()
  const text = String(body.text || "").trim()
  const taskType = body.taskType ? String(body.taskType) : null
  const targetReader = body.targetReader ? String(body.targetReader) : null
  const register = body.register ? String(body.register) : null
  const contentPoints = Array.isArray(body.contentPoints) ? body.contentPoints.map(String) : []
  const requiresOwnIdea = !!body.requiresOwnIdea

  if (!topic || !text) {
    return e.json(400, { error: { message: "Faltan 'topic' o 'text' en la petición." } })
  }
  if (text.split(/\s+/).length > 400) {
    return e.json(400, { error: { message: "El texto es demasiado largo para evaluar." } })
  }

  const apiKey = $os.getenv("OPENCODE_API_KEY")
  if (!apiKey) {
    return e.json(500, { error: { message: "El servidor no tiene configurada la clave de evaluación (OPENCODE_API_KEY)." } })
  }

  // Mirrors the Cambridge B1 Preliminary / B2 First writing rubric: four
  // subscales (Content, Communicative Achievement, Organisation, Language),
  // each scored 0-5, used at every CEFR level for consistency. Per the
  // official marking guidance: non-impeding errors should not be penalised
  // heavily, and ambitious language use (even with minor mistakes) should
  // score higher than a trivially correct but simple text.
  const taskContext = [
    taskType ? `Task type: ${taskType}.` : null,
    targetReader ? `Target reader: ${targetReader}.` : null,
    register ? `Required register: ${register}.` : null,
    contentPoints.length ? `Content points to cover: ${contentPoints.join("; ")}.` : null,
    requiresOwnIdea ? "The learner must add one own idea beyond the given content points." : null,
  ].filter(Boolean).join(" ")

  const systemPrompt = [
    "You are a patient, encouraging English teacher and CEFR examiner (A1-C2 scale), using the same 4-subscale rubric as Cambridge B1 Preliminary / B2 First writing (Content, Communicative Achievement, Organisation, Language — each scored 0-5).",
    "Non-impeding errors (spelling/punctuation that doesn't break communication) should NOT be penalised heavily. Ambitious language use with minor mistakes should score HIGHER than a trivially correct but simple text — reward range and complexity, not just accuracy.",
    "IMPORTANT: besides scoring, you must CORRECT every error in the learner's text. Scan the text carefully for grammar, vocabulary, spelling and punctuation errors and list them one by one.",
    "As a teacher, you must also give personalized recommendations like a real tutor: point out the recurring patterns, remind the learner of the specific grammar rule they misapplied, and tell them what to focus on to improve. Be specific (reference the actual mistake), kind, and concrete. Never generic advice.",
    "Respond ONLY with strict JSON (no markdown, no code fences) matching exactly this shape:",
    '{"score": <0-100 integer, roughly (content+communicativeAchievement+organisation+language)*5>, "level": "<A1|A2|B1|B2|C1|C2>", "content": "<1 short sentence in Spanish: did it cover the task/content points>", "communicativeAchievement": "<1 short sentence in Spanish: register and appropriateness for the target reader>", "organisation": "<1 short sentence in Spanish: coherence and cohesive devices>", "language": "<1 short sentence in Spanish: vocabulary range and grammar accuracy>", "feedback_es": "<2-3 sentences of actionable, encouraging feedback in Spanish>", "correctedText": "<the learner text rewritten with ALL errors fixed, preserving its meaning and level>", "corrections": [{"original": "<exact wrong word or phrase as written>", "corrected": "<the correction>", "explanation_es": "<1 short sentence in Spanish explaining the error and the fix>"}], "recommendations": ["<1-3 personalized teacher recommendations in Spanish, each referencing a specific mistake made and its rule, e.g. \"Este es tu error más repetido: recordá que después de \'must have\' el verbo va en participio pasado (broke → broken).\""]}',
    'The "corrections" array MUST include every real error found (grammar, spelling, vocabulary, punctuation). If the text is already correct, return an empty array "corrections": [].',
  ].join(" ")

  let res
  try {
    res = $http.send({
      url: "https://opencode.ai/zen/go/v1/chat/completions",
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: "deepseek-v4-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: "Topic: " + topic + (taskContext ? "\n" + taskContext : "") + "\n\nText:\n" + text },
        ],
        // DeepSeek V4 razona antes de responder (reasoning_content). Con un
        // max_tokens bajo el JSON quedaba cortado (finish_reason "length").
        // "none" desactiva el razonamiento explícito (más barato y rápido) y
        // 2000 tokens alcanzan de sobra para el JSON de la evaluación.
        max_tokens: 2000,
        reasoning_effort: "none",
      }),
      timeout: 30,
    })
  } catch (err) {
    return e.json(422, { error: { message: "No se pudo contactar al servicio de evaluación: " + err } })
  }

  if (res.statusCode !== 200) {
    // Surface the upstream error (e.g. GoUsageLimitError, CreditsError)
    // legibly instead of a bare 500, so the frontend can show something
    // useful and we can tell auth/quota/model errors apart at a glance.
    const upstreamMsg = (res.json && res.json.error && res.json.error.message) || "Error del servicio de evaluación."
    return e.json(422, { error: { message: upstreamMsg, upstreamType: res.json && res.json.error && res.json.error.type } })
  }

  const content = res.json && res.json.choices && res.json.choices[0] && res.json.choices[0].message && res.json.choices[0].message.content
  if (!content) {
    return e.json(422, { error: { message: "Respuesta vacía del modelo de evaluación." } })
  }

  let parsed
  try {
    // Models sometimes wrap JSON in ```json fences despite instructions.
    const cleaned = String(content).replace(/^```json\s*|^```\s*|```\s*$/g, "").trim()
    parsed = JSON.parse(cleaned)
  } catch (err) {
    // If strict parse fails, try to extract the first {...} block (the model
    // may have added trailing/leading prose despite the instructions).
    const first = String(content).match(/\{[\s\S]*\}/)
    if (!first) {
      return e.json(422, { error: { message: "No se pudo interpretar la respuesta del modelo." } })
    }
    try {
      parsed = JSON.parse(first[0].replace(/^```json\s*|^```\s*|```\s*$/g, "").trim())
    } catch (err2) {
      return e.json(422, { error: { message: "No se pudo interpretar la respuesta del modelo." } })
    }
  }

  return e.json(200, parsed)
})
