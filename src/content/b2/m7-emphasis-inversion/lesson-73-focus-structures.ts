import type { Lesson } from '../../types'

export const lesson73FocusStructures: Lesson = {
  id: 'b2-m7-l3',
  moduleId: 'm7-emphasis-inversion',
  order: 2,
  title: 'Focus structures: the thing/fact/point/reason is..., formal negation',
  objective: 'Usar estructuras de focalización (the thing is, the fact is, the problem is) y negación formal (do not, will not) para enfatizar ideas clave en registro formal.',
  explanation_es: `Existen formas de dar FOCO o ÉNFASIS a una idea SIN usar inversión del sujeto y auxiliar. En su lugar, introducimos la idea con expresiones como "The thing is...", "The fact is...", "The problem is..." Las cuales DIRECCIONAN la atención del lector hacia lo que sigue. Además, en registro formal, evitamos contracciones y escribimos "not" de forma explícita.

1. **Estructuras de foco (cleft sentences o pseudo-cleft sentences)**
   Son oraciones donde dividimos una idea en dos partes para dar énfasis a una de ellas.

   Patrón básico: "The [noun] is (that)...idea importante"
   - The thing is (that) we simply don't have time. = El asunto es que simplemente no tenemos tiempo.
   - The problem is (that) nobody listened to the warning. = El problema es que nadie escuchó la advertencia.
   - The fact is (that) she was not ready. = La realidad es que ella no estaba lista.
   - The point is (that) we need to act now. = El punto es que necesitamos actuar ahora.
   - The reason is (that) the roads were closed. = La razón es que las rutas estaban cerradas.

   Estos focus nouns pueden variar mucho: thing, fact, point, problem, reason, issue, reality, truth, matter, etc.

2. **Negación formal (sin contraer)**
   En registro formal y académico, NO se usan contracciones. Escribimos formas plenas:
   - I do not agree. (NO "I don't agree")
   - She will not attend. (NO "She won't attend")
   - They have not finished. (NO "They haven't finished")
   - He is not ready. (NO "He isn't ready")
   - We cannot proceed. (NO "We can't proceed") — aunque "cannot" ya es una palabra sin contracción

   Este uso de "not" explícito es muy formal y suena serio, enfático, a veces incluso desaprobatorio.

3. **Combinación: focus structure + formal negation**
   - The problem is that I do not agree with this decision. = El problema es que no estoy de acuerdo con esta decisión.
   - The fact is (that) he will not cooperate. = La realidad es que no cooperará.
   - The issue is that we cannot find a solution. = El asunto es que no podemos encontrar una solución.

Puntos importantes:

1. "The thing is" es la más informal de estas expresiones. "The fact is" es más formal. "The problem is" carga connotación negativa.

2. El "that" después del noun es OPCIONAL pero recomendado en B2 para claridad:
   ✅ The fact is that we need more time. (Con "that")
   ✅ The fact is we need more time. (Sin "that", también válido)

3. En inglés hablado cotidiano, TODO el mundo usa contracciones ("don't", "won't", "haven't"). El "not" sin contraer es EXCLUSIVO de registro formal/escrito/académico.

4. No confundir "not" con otros adjetivos o palabras negativas:
   - Not ready ≠ Unready (aunque ambas significan lo mismo, "not ready" es más común)
   - Not good ≠ Bad (similar pero "not good" es más neutro, "bad" es más fuerte)

5. Comparación con niveles anteriores:
   - B1: Conocés contracciones ("don't", "can't", "won't") que son estándar en inglés hablado.
   - B2: Ahora sabés CUÁNDO evitar contracciones (registro formal), y usás estructuras de foco para dirigir la atención.`,
  examples: [
    { english: 'The thing is (that) we simply do not have enough budget.', spanish: 'El asunto es que simplemente no tenemos presupuesto suficiente.', note: 'Énfasis en la razón fundamental del problema.' },
    { english: 'The fact is that she was not prepared for the interview.', spanish: 'La realidad es que ella no estaba preparada para la entrevista.', note: 'Afirmación clara y formal de un hecho.' },
    { english: 'The problem is (that) nobody will listen to us.', spanish: 'El problema es que nadie nos escuchará.', note: 'Énfasis en la dificultad central.' },
    { english: 'The point is (that) we must act now, not later.', spanish: 'El punto es que debemos actuar ahora, no después.', note: 'Énfasis en lo urgente y esencial.' },
    { english: 'I do not agree with the proposal, nor do I see any way to improve it.', spanish: 'No estoy de acuerdo con la propuesta, ni veo forma de mejorarla.', note: 'Negación formal de dos cosas, con énfasis.' },
    { english: 'The reason is (that) we cannot continue without proper authorization.', spanish: 'La razón es que no podemos continuar sin la debida autorización.', note: 'Énfasis en la restricción o límite.' },
  ],
  rule: `Fórmula de estructuras de foco:

1. The [noun] is (that) + afirmación importante
   → The thing is (that) we need time.
   → The fact is (that) she was not ready.
   → The problem is (that) they will not cooperate.

2. Negación formal (sin contraer):
   → I do not agree. (NO "I don't agree")
   → She will not attend. (NO "She won't attend")
   → They have not finished. (NO "They haven't finished")
   → He is not ready. (NO "He isn't ready")

3. Focus structures comunes:
   The thing is / The fact is / The problem is / The issue is / The point is / The reason is / The matter is / The reality is / The truth is

Reglas:
1. "That" después del noun es opcional pero recomendado.
2. La estructura de foco dirige la atención: lo que viene después es lo más importante.
3. La negación formal (sin contraer) suena seria, enfática, académica, a veces desaprobadora.
4. Es registro FORMAL Y ESCRITO. En habla cotidiana se usan contracciones.
5. Funciona para introducir problemas, razones, hechos o puntos clave en argumentos.`,
  commonMistakes: [
    { wrong: '❌ The fact is that we don\'t have time.', correct: '✅ The fact is that we do not have time.', explanation: 'En registro formal, evitamos contracciones. Escribimos "do not", no "don\'t".' },
    { wrong: '❌ The problem is we need more money.', correct: '✅ The problem is (that) we need more money.', explanation: 'Recomendado agregar "that" para claridad, aunque técnicamente es opcional.' },
    { wrong: '❌ The issue is that he won\'t cooperate with us.', correct: '✅ The issue is that he will not cooperate with us.', explanation: 'Formal "will not", no contracción "won\'t".' },
    { wrong: '❌ The thing is, we haven\'t received the documents yet.', correct: '✅ The thing is (that) we have not received the documents yet.', explanation: 'Incluso con "thing" (menos formal), evitamos contracciones en contexto académico/formal.' },
  ],
  vocabulary: [
    { word: 'focus', translation_es: 'foco, atención', level: 'B2', category: 'general', partOfSpeech: 'noun', example: 'The focus of this essay is the environmental crisis.', exampleTranslation: 'El foco de este ensayo es la crisis ambiental.' },
    { word: 'to emphasize', translation_es: 'enfatizar', level: 'B2', category: 'general', partOfSpeech: 'verb', example: 'This structure emphasizes the key point.', exampleTranslation: 'Esta estructura enfatiza el punto clave.' },
    { word: 'formal', translation_es: 'formal', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'This is formal academic writing.', exampleTranslation: 'Esta es escritura académica formal.' },
    { word: 'contraction', translation_es: 'contracción', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'Don\'t, won\'t, and can\'t are contractions.', exampleTranslation: '"Don\'t", "won\'t" y "can\'t" son contracciones.' },
    { word: 'authorization', translation_es: 'autorización', level: 'B2', category: 'general', partOfSpeech: 'noun', example: 'We need proper authorization to proceed.', exampleTranslation: 'Necesitamos la debida autorización para proceder.' },
    { word: 'to cooperate', translation_es: 'cooperar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'The team will not cooperate with the plan.', exampleTranslation: 'El equipo no cooperará con el plan.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-focus-structures',
      level: 'B2',
      name: 'Focus structures (cleft/pseudo-cleft sentences)',
      explanation_es: 'Estructuras que dirigen la atención a una idea clave usando "The [noun] is (that)...". Son comunes en escritura formal y académica.',
      formula: 'The [noun] is (that) + important idea',
      examples: [
        'The fact is (that) we need more time.',
        'The problem is (that) nobody listened.',
        'The point is (that) we must act now.',
      ],
    },
    {
      id: 'gp-b2-formal-negation',
      level: 'B2',
      name: 'Formal negation (without contractions)',
      explanation_es: 'En registro formal/académico, se escriben formas plenas sin contraer: "do not" (no "don\'t"), "will not" (no "won\'t"), "have not" (no "haven\'t"), "is not" (no "isn\'t").',
      formula: 'Auxiliar + not (forma plena, nunca contraída en formal writing)',
      examples: [
        'I do not agree.',
        'She will not attend.',
        'They have not finished.',
        'He is not ready.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m7-l3-ex1',
      type: 'multiple_choice',
      concept: 'focus structure selection',
      difficulty: 3,
      prompt: 'Completa: "The ___ is that we do not have enough resources."',
      promptTranslation: 'El problema es que no tenemos suficientes recursos.',
      correctAnswer: 'problem',
      options: ['problem', 'thing', 'point'],
      explanation: '"The problem is" es la opción más natural para expresar una dificultad o obstáculo.',
    },
    {
      id: 'b2-m7-l3-ex2',
      type: 'multiple_choice',
      concept: 'formal negation',
      difficulty: 3,
      prompt: 'En registro formal, ¿cuál es CORRECTA?',
      promptTranslation: '¿Cuál es correcta en formal writing?',
      correctAnswer: 'I will not attend the meeting.',
      options: [
        'I will not attend the meeting.',
        'I won\'t attend the meeting.',
        'I don\'t attend the meeting.',
      ],
      explanation: 'En formal writing: "will not" (NO "won\'t"). "Don\'t attend" significaría una costumbre, no una decisión futura.',
    },
    {
      id: 'b2-m7-l3-ex3',
      type: 'fill_blank',
      concept: 'focus structure that',
      difficulty: 2,
      prompt: 'Completa: "The fact is ___ we are not ready."',
      promptTranslation: 'La realidad es que no estamos listos.',
      correctAnswer: 'that',
      acceptedAnswers: ['that', '(blank)'],
      explanation: '"That" es opcional pero recomendado para claridad: "The fact is that we are not ready."',
    },
    {
      id: 'b2-m7-l3-ex4',
      type: 'error_correction',
      concept: 'formal negation contraction',
      difficulty: 3,
      prompt: 'Corrige para que sea formal: "The issue is that he doesn\'t cooperate."',
      correctAnswer: 'The issue is that he does not cooperate.',
      acceptedAnswers: [
        'The issue is that he does not cooperate',
        'The issue is that he does not cooperate.',
      ],
      acceptApproximate: true,
      explanation: 'En formal writing: "does not" en lugar de "doesn\'t".',
    },
    {
      id: 'b2-m7-l3-ex5',
      type: 'reorder',
      concept: 'focus structure word order',
      difficulty: 3,
      prompt: 'Ordena las palabras (estructura de foco):',
      promptTranslation: 'El punto es que no hemos recibido los documentos.',
      words: ['The', 'point', 'is', 'that', 'we', 'have', 'not', 'received', 'the', 'documents.'],
      correctAnswer: 'The point is that we have not received the documents.',
      explanation: 'Orden: The noun + is + that + sujeto + auxiliar + not + verbo. "Have not" en formal.',
    },
    {
      id: 'b2-m7-l3-ex6',
      type: 'translate',
      concept: 'focus structure translation',
      difficulty: 4,
      prompt: 'Traduce a inglés (formal): "La razón es que no podemos garantizar el resultado."',
      correctAnswer: 'The reason is (that) we cannot guarantee the result.',
      acceptedAnswers: [
        'The reason is (that) we cannot guarantee the result',
        'The reason is that we cannot guarantee the result.',
      ],
      acceptApproximate: true,
      explanation: '"The reason is" + "cannot" (ya sin contracción en su forma base).',
    },
    {
      id: 'b2-m7-l3-ex7',
      type: 'select_correct',
      concept: 'register formality',
      difficulty: 4,
      prompt: 'Cuál opción es más FORMAL y ACADÉMICA?',
      correctAnswer: 'I do not agree with the proposal, nor can I recommend it.',
      options: [
        'I do not agree with the proposal, nor can I recommend it.',
        'I don\'t agree with the proposal, and I can\'t recommend it.',
        'I don\'t agree, and I can\'t recommend it.',
      ],
      explanation: 'La primera usa "not" sin contraer y "nor" (más formal). Las otras usan contracciones (cotidiano).',
    },
    {
      id: 'b2-m7-l3-ex8',
      type: 'true_false',
      concept: 'focus structure function',
      difficulty: 3,
      prompt: '"The thing is..." es una estructura formal para dirigir la atención a una idea clave.',
      correctAnswer: 'true',
      explanation: 'Correcto. Las focus structures dirigen la atención hacia lo que sigue.',
    },
    {
      id: 'b2-m7-l3-ex9',
      type: 'listening',
      concept: 'focus structures in formal speech',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un profesor o conferenciante presenta argumentos usando focus structures y negación formal.',
      listening: {
        audioText:
          'Good morning, students. Let me address the issue of your final project. The problem is that many of you have not submitted your proposals on time. The fact is that we cannot extend the deadline further. The point is that you must show commitment to your studies. I do not agree with excuses, nor will I accept late submissions without proper documentation. The reason we enforce these rules is that academic discipline matters.',
        questions: [
          {
            id: 'b2-m7-l3-ex9-q1',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is the main problem the professor mentions?',
            correctAnswer: 'Many students have not submitted their proposals on time.',
            options: [
              'Many students have not submitted their proposals on time.',
              'The deadline is too early.',
              'The project is too difficult.',
            ],
            explanation: '"The problem is that many of you have not submitted your proposals on time."',
          },
          {
            id: 'b2-m7-l3-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The professor is willing to extend the deadline if asked.',
            correctAnswer: 'false',
            explanation: '"The fact is that we cannot extend the deadline further."',
          },
          {
            id: 'b2-m7-l3-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Under what condition will the professor accept late submissions?',
            correctAnswer: 'With proper documentation.',
            options: [
              'With proper documentation.',
              'Never, under any circumstance.',
              'If the reason is an emergency.',
            ],
            explanation: '"I...will not accept late submissions without proper documentation" = with proper documentation, it may be possible.',
          },
        ],
      },
    },
    {
      id: 'b2-m7-l3-ex10',
      type: 'writing',
      concept: 'focus structures in formal argument',
      difficulty: 4,
      prompt: 'Escribí un párrafo formal argumentando a favor o en contra de algo (una política escolar, una decisión laboral, una propuesta comunitaria). Usá al menos 2 focus structures (The [noun] is...) y mantén negación formal (do not, will not, etc.).',
      promptTranslation: 'Write a formal paragraph arguing for or against something using at least 2 focus structures and formal negation.',
      correctAnswer: '',
      explanation: 'Un buen argumento formal usa focus structures para organizar puntos clave y evita contracciones.',
      taskType: 'essay',
      targetReader: 'a decision maker or authority',
      register: 'formal',
      contentPoints: [
        'Al menos 2 focus structures distintas (The problem is, The fact is, The point is, etc.)',
        'Negación formal (do not, will not, have not) sin contracciones',
        'Un argumento claro con razones y conclusión',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m7-l3-ex11',
      type: 'speaking',
      concept: 'focus structures pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'The fact is that we do not have the resources to continue this project.',
      explanation: 'Practicá la entonación formal: "The fact is" con énfasis inicial, luego "we do not have" en tono de certeza académica.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m7-l3-mt1',
      type: 'multiple_choice',
      concept: 'focus structure in context',
      difficulty: 3,
      prompt: 'Completa: "The ___ is (that) we must make a decision now."',
      promptTranslation: 'El punto es que debemos tomar una decisión ahora.',
      correctAnswer: 'point',
      options: ['point', 'thing', 'problem'],
      explanation: '"The point is" es natural para expresar lo esencial o lo urgente.',
    },
    {
      id: 'b2-m7-l3-mt2',
      type: 'error_correction',
      concept: 'formal negation',
      difficulty: 4,
      prompt: 'Corrige para que sea formal: "The issue is that we haven\'t discussed this with the team."',
      correctAnswer: 'The issue is that we have not discussed this with the team.',
      acceptedAnswers: [
        'The issue is that we have not discussed this with the team',
        'The issue is that we have not discussed this with the team.',
      ],
      acceptApproximate: true,
      explanation: 'Formal: "have not" en lugar de "haven\'t".',
    },
    {
      id: 'b2-m7-l3-mt3',
      type: 'true_false',
      concept: 'focus structure that optional',
      difficulty: 2,
      prompt: '"The reason is we cannot proceed" es válida sin el "that", aunque "The reason is that we cannot proceed" es más clara.',
      correctAnswer: 'true',
      explanation: 'Correcto. "That" es opcional pero recomendado para claridad formal.',
    },
  ],
  reviewItems: ['b2-m7-l1', 'b2-m7-l2'],
  prerequisites: ['b2-m7-l2'],
}
