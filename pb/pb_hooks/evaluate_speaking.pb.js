/// <reference path="../pb_data/types.d.ts" />

// POST /api/evaluate-speaking — evaluates a learner's spoken response
// (transcribed client-side with the Web Speech API) against a CEFR rubric.
//
// Reuses the SAME provider + key as evaluate_writing (opencode.ai/zen/go,
// OPENCODE_API_KEY env var) so no extra key is needed. The frontend never
// sees the key; it lives server-side only.
//
// Request body:  { topic: string, text: string, concept?: string, difficulty?: number }
// Response body: { score: number, level: string, feedback_es: string,
//                   fluency_es: string, language_es: string }

routerAdd("POST", "/api/evaluate-speaking", (e) => {
  e.response.header().set("Access-Control-Allow-Origin", "*")

  const info = e.requestInfo()
  const body = info.body || {}
  const topic = String(body.topic || "").trim()
  const text = String(body.text || "").trim()
  const concept = body.concept ? String(body.concept) : null

  if (!topic || !text) {
    return e.json(400, { error: { message: "Faltan 'topic' o 'text' en la petición." } })
  }
  if (text.split(/\s+/).length > 300) {
    return e.json(400, { error: { message: "La respuesta es demasiado larga para evaluar." } })
  }

  const apiKey = $os.getenv("OPENCODE_API_KEY")
  if (!apiKey) {
    return e.json(500, { error: { message: "El servidor no tiene configurada la clave de evaluación (OPENCODE_API_KEY)." } })
  }

  const systemPrompt = [
    "You are a patient, encouraging English teacher and CEFR speaking examiner (A1-C2 scale).",
    "The learner's spoken answer was transcribed automatically with speech recognition, so ignore minor transcription artifacts and do not penalise punctuation.",
    "Score based on what they said: communicative success, fluency, range of vocabulary and grammar, and coherence with the topic. Be kind and encouraging.",
    "Respond ONLY with strict JSON (no markdown, no code fences) matching exactly this shape:",
    '{"score": <0-100 integer>, "level": "<A1|A2|B1|B2|C1|C2>", "feedback_es": "<2-3 encouraging, actionable sentences in Spanish, referencing what they said>", "fluency_es": "<1 short sentence in Spanish on fluency/flow>", "language_es": "<1 short sentence in Spanish on vocabulary and grammar range and accuracy>"}',
  ].join(" ")

  const userPrompt = "Topic: " + topic + (concept ? "\nGrammar focus: " + concept : "") + "\n\nLearner's spoken response (transcript):\n" + text

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
          { role: "user", content: userPrompt },
        ],
        max_tokens: 1000,
        reasoning_effort: "none",
      }),
      timeout: 30,
    })
  } catch (err) {
    return e.json(503, { error: { message: "No se pudo contactar al servicio de evaluación: " + err } })
  }

  if (res.statusCode !== 200) {
    // Surface the upstream error (e.g. usage/credits limit) legibly so the
    // frontend can show the friendly fallback message.
    const upstreamMsg = (res.json && res.json.error && res.json.error.message) || "Error del servicio de evaluación."
    return e.json(422, { error: { message: upstreamMsg, upstreamType: res.json && res.json.error && res.json.error.type } })
  }

  const content = res.json && res.json.choices && res.json.choices[0] && res.json.choices[0].message && res.json.choices[0].message.content
  if (!content) {
    return e.json(422, { error: { message: "Respuesta vacía del modelo de evaluación." } })
  }

  let parsed
  try {
    const cleaned = String(content).replace(/^```json\s*|^```\s*|```\s*$/g, "").trim()
    parsed = JSON.parse(cleaned)
  } catch (err) {
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