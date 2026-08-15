# Speaking libre con evaluación por IA — spec

> Estado actual: `speaking` solo soporta `speakingMode: 'repeat'` (repetir una frase modelo, corregido por fuzzy-match local, sin IA). Este documento especifica el modo `'free'` (producción libre, evaluado por IA) — **todavía no implementado**.

## 1. Por qué separado del modo `repeat`

El modo `repeat` es determinista y gratis: la respuesta esperada se conoce de antemano, así que se corrige con normalización + distancia de edición (mismo mecanismo que `translate`/`reorder`). El modo `free` no tiene una única respuesta correcta — el alumno responde una pregunta o describe algo con sus propias palabras — así que necesita transcripción + evaluación por IA, como `writing`.

**Restricción real de plataforma:** `SpeechRecognition` (ASR del navegador) solo existe en Chrome/Edge/Safari — **Firefox no lo soporta**, y en escritorio Chrome necesita conexión (manda audio a servidores de Google). El modo `repeat` ya degrada a autoevaluación cuando `SpeechRecognition` no existe (botón "Lo dije correctamente"); `free` necesita la misma degradación, **pero sin transcripción automática no hay nada que evaluar por IA** — en ese caso, la única opción es autoevaluación pura (sin feedback de IA) o bloquear el ejercicio con un mensaje claro. Recomendación: tratar `free` como ejercicio **opcional/bonus**, nunca obligatorio para avanzar de lección, exactamente como recomendaba la investigación previa de B1/B2.

## 2. Campos nuevos en `Exercise` (content/types.ts)

```typescript
speakingMode?: 'repeat' | 'free'   // ya existe, default 'repeat'

// Nuevos, solo para speakingMode: 'free':
taskType?: 'photo_description' | 'opinion' | 'comparison' | 'roleplay'
targetDurationSeconds?: number      // sugerido: 60 (long turn de examen real)
usefulLanguage?: string[]           // 3-5 expresiones sugeridas, opcional (andamiaje)
modelResponse?: string              // respuesta ejemplar, reproducible con SpeakButton tras evaluar
```

`prompt` ya cubre la consigna ("Describí tu ciudad natal", "¿Estás de acuerdo con...?"). No hace falta un campo nuevo para eso.

**Nota sobre fotos:** el diseño ideal de examen real (Cambridge B1: 1 foto; B2: comparar 2 fotos) requiere subir/alojar imágenes, y `Exercise` hoy no tiene ningún campo de imagen — es una dependencia nueva (hosting + campo `imageUrl`/`imageUrls`). **Recomendación: no bloquear el lanzamiento de `free` por esto.** Empezar con `taskType: 'opinion'` y `'comparison'` (dos ideas abstractas a comparar, sin fotos) y `'roleplay'` (responder a una situación descrita en texto), y dejar `'photo_description'` para cuando haya presupuesto de tiempo para el hosting de imágenes.

## 3. Flujo del componente `Speaking` (ExerciseRenderer.tsx)

```
1. Mostrar prompt + taskInstruction + usefulLanguage (si existe) + tiempo sugerido.
2. Si hay SpeechRecognition:
   a. Botón "🎤 Grabar respuesta" → arranca reconocimiento con interimResults:true
      (a diferencia de 'repeat', acá SÍ conviene mostrar la transcripción en vivo
      para que el alumno vea que está siendo escuchado).
   b. Botón "Detener y enviar" → corta el reconocimiento, junta el texto final.
   c. POST a un hook nuevo (ver §4) con { transcript, prompt, taskType, level }.
   d. Mostrar resultado (misma UI que Writing: subescalas + feedback_es).
3. Si NO hay SpeechRecognition:
   Fallback a autoevaluación pura (igual que 'repeat' hoy): botón
   "Ya grabé mi respuesta en voz alta" → onResult(true, '(autoevaluado, sin IA)').
   Sin esto, el ejercicio bloquea a todo un navegador entero (mismo error que
   ya se evitó en 'repeat').
4. Ejercicios speaking free NUNCA deben ser obligatorios para pasar la lección
   con silentMode/strictMode — considerar excluirlos del cálculo de "aprobado"
   de LessonView, igual que hoy pasa implícitamente con writing (no hay
   corrección binaria clara, el score de IA decide, pero writing SÍ cuenta
   para el puntaje total — decisión de producto pendiente: ¿speaking free
   también cuenta, o es puramente práctica sin nota?). Recomendado: que
   cuente igual que writing (score IA >= 60 = correcto), para consistencia.
```

## 4. Hook de PocketBase: `evaluate_speaking.pb.js`

Mismo patrón que `pb/pb_hooks/evaluate_writing.pb.js` (ya en producción): ruta `POST /api/evaluate-speaking`, key de OpenCode Go server-side vía `$os.getenv`, mismo endpoint `zen/go/v1/chat/completions`.

```
Request:  { transcript: string, prompt: string, taskType?: string, level?: string }
Response: { score: number (0-100), level: string,
            grammarVocabulary: string, discourseManagement: string,
            interactiveCommunication: string, feedback_es: string }
```

**Diferencia clave con writing:** la rúbrica de speaking de Cambridge tiene 4 subescalas (Grammar & Vocabulary, Discourse Management, Pronunciation, Interactive Communication) — pero **nunca se debe pedir un score de Pronunciation basado en una transcripción de ASR**. El reconocedor de voz ya normaliza el audio a texto limpio; si transcribió bien, no sabés si sonó bien. Pedirle a la IA "puntuá la pronunciación" sobre texto plano es inventar un número sin fundamento. Usar solo 3 subescalas: Grammar & Vocabulary, Discourse Management, y una versión reducida de Interactive Communication (basada en si la respuesta es relevante y desarrollada, no en interacción real — no hay interlocutor).

System prompt (borrador, mismo tono que `evaluate_writing.pb.js`):

```
You are a CEFR English speaking examiner (A1-C2), evaluating a TRANSCRIPT of
spoken English (not the audio itself — never comment on pronunciation,
intonation, or accent, since none of that survives transcription).
Rate three subscales 0-5: grammarVocabulary (range and accuracy),
discourseManagement (coherence, relevant development of the response,
appropriate length for the task), interactiveCommunication (how directly
and appropriately it answers the prompt). Non-impeding disfluencies
(false starts, "um", repeated words typical of speech) should not be
penalised — this is spoken language, not writing. Respond ONLY with JSON:
{"score": <0-100>, "level": "<A1-C2>", "grammarVocabulary": "...",
"discourseManagement": "...", "interactiveCommunication": "...",
"feedback_es": "..."}
```

## 5. Validador de contenido

Agregar a `scripts/validate-content-semantic.mjs`:
- `speaking` con `speakingMode: 'free'`: no requiere `correctAnswer` (ya cubierto — ver commit de `gradedByCorrectAnswer`), pero si querés forzar calidad: `prompt` no vacío y `taskType` debe ser uno de los 4 valores válidos.
- Igual que `writing`, no hay forma de validar semánticamente "es una buena consigna de speaking" — eso queda en manos de quien escribe el contenido.

## 6. Plan de implementación (orden sugerido)

1. `content/types.ts`: agregar los campos nuevos de `speakingMode: 'free'`.
2. `pb/pb_hooks/evaluate_speaking.pb.js`: copiar `evaluate_writing.pb.js` y adaptar (10 min si se sigue el patrón).
3. `ExerciseRenderer.tsx`: extender el componente `Speaking` existente con la rama `free` (fetch + render de resultado, reusando el mismo bloque de UI que `Writing` para las subescalas).
4. Probar el hook en vivo — **esto vuelve a depender de la cuota de OpenCode Go**, igual que `writing`. Se puede probar el plumbing (curl directo) sin esperar cuota, igual que se hizo con `evaluate_writing`.
5. Pilotear en 2-3 lecciones (una por nivel B1 y B2) antes de generalizar, mismo criterio que se usó para listening/writing/speaking `repeat`.
6. Deploy: copiar el hook nuevo al servidor (`scp` a `pb_hooks/`), reiniciar el servicio systemd, verificar con curl igual que se hizo con `evaluate_writing.pb.js`.

## 7. Lo que NO se recomienda hacer todavía

- **No** agregar `photo_description` sin resolver hosting de imágenes primero (dependencia nueva, no urgente).
- **No** hacer `free` obligatorio para pasar una lección — arriesga bloquear alumnos de Firefox o sin micrófono.
- **No** inventar un score de pronunciación — ver §4.
