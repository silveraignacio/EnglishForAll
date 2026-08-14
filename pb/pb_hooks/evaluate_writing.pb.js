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

  const systemPrompt = [
    "You are a CEFR English writing examiner (A1-C2 scale).",
    "Evaluate the learner's text for the given topic and respond ONLY with strict JSON",
    '(no markdown, no code fences) matching exactly this shape:',
    '{"score": <0-100 integer>, "level": "<A1|A2|B1|B2|C1|C2>", "grammar": "<1 short sentence, in Spanish>", "vocabulary": "<1 short sentence, in Spanish>", "coherence": "<1 short sentence, in Spanish>", "feedback_es": "<2-3 sentences of actionable feedback, in Spanish>"}',
    "Be encouraging but honest. Base the level estimate on grammar accuracy, vocabulary range, and task achievement for the given topic.",
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
          { role: "user", content: "Topic: " + topic + "\n\nText:\n" + text },
        ],
        max_tokens: 500,
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
    return e.json(422, { error: { message: "No se pudo interpretar la respuesta del modelo." } })
  }

  return e.json(200, parsed)
})
