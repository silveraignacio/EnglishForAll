import type { Lesson } from '../../types'

export const lesson111DiscourseMarkers: Lesson = {
  id: 'b2-m11-l1',
  moduleId: 'm11-discourse-hedging',
  order: 0,
  title: 'Discourse Markers: Opening, Closing & Conclusion',
  objective: 'Usar marcadores formales de discurso para estructurar un texto: apertura (To begin with...), cierre (In conclusion...), resumen (In short...) y comparación (Similarly..., By contrast...).',
  explanation_es: `Ya conocés palabras de conexión básicas (and, but, because). Ahora vamos a trabajar con marcadores de DISCURSO más formales: expresiones que te ayudan a estructurar un texto académico o profesional, señalando dónde comienza un argumento, dónde se resume, y cómo comparas ideas.

Los marcadores de discurso son "señales viales" del texto — el lector sabe qué esperar después de cada uno.

**Marcadores de APERTURA / INTRODUCCIÓN:**
- To begin with... = Para empezar...
- First of all... = Antes que nada...
- To start with... = Para comenzar...
- Initially... = Inicialmente...

Función: introducen el PRIMER argumento o idea en un párrafo o texto.

Ejemplo: To begin with, we need to consider the cost of the project. = Para empezar, necesitamos considerar el costo del proyecto.

**Marcadores de CIERRE / TRANSICIÓN FINAL:**
- In conclusion... = En conclusión...
- To conclude... = Para concluir...
- In summary... = En resumen...
- To sum up... = En pocas palabras...
- Finally... = Finalmente...

Función: introducen la CONCLUSIÓN o el argumento final. Marcan que estamos terminando.

Ejemplo: In conclusion, we recommend a gradual approach. = En conclusión, recomendamos un enfoque gradual.

**Marcadores de RESUMEN / SÍNTESIS:**
- In short... = En pocas palabras...
- Briefly... = Brevemente...
- In a nutshell... = En pocas palabras, en síntesis...
- To put it another way... = Dicho de otra manera...

Función: resumen lo dicho en pocas palabras.

Ejemplo: In short, the data shows a clear trend. = En pocas palabras, los datos muestran una tendencia clara.

**Marcadores de COMPARACIÓN:**
- Similarly... = De manera similar...
- In the same way... = Del mismo modo...
- Likewise... = Igualmente...
- In contrast... = En contraste...
- By contrast... = Por el contrario...
- However... = Sin embargo...
- On the other hand... = Por otro lado...

Función: comparan o contrastan dos ideas.

Ejemplo: Japan had similar economic challenges. In contrast, South Korea took a different approach. = Japón enfrentó desafíos económicos similares. Por el contrario, Corea del Sur adoptó un enfoque diferente.

**Puntos importantes:**

1. Los marcadores de discurso van TÍPICAMENTE al inicio de un enunciado, seguidos de una coma: "To begin with, ..." "In conclusion, ..."

2. Algunos pueden ir en medio de la oración sin cambiar mucho el sentido: "However, we can argue..." vs "We can, however, argue..." (este último es más enfático y literario, menos común en escritura académica estándar).

3. Diferencia entre "In conclusion" y "To conclude": ambos significan lo mismo, pero "In conclusion" es ligeramente más formal y se usa más en essays; "To conclude" es más de uso hablado.

4. Nunca uses DOS marcadores juntos de la misma categoría: ❌ "To begin with, first of all..." ✅ "To begin with..." en una frase, y si necesitas agregar otro punto, usas un nuevo párrafo.

5. El marcador NO reemplaza la puntuación normal — sigue siendo necesario poner un punto al final de la idea.

6. En escritura académica formal (B2), estos marcadores son ESPERADOS — el lector espera una estructura clara. En conversación informal, no usas tantos.`,
  examples: [
    { english: 'To begin with, let\'s examine the historical context.', spanish: 'Para empezar, examinemos el contexto histórico.', note: 'Abre el primer argumento de un análisis.' },
    { english: 'First of all, it\'s important to note that this is a new phenomenon.', spanish: 'Antes que nada, es importante notar que este es un fenómeno nuevo.', note: 'Introduce la idea principal.' },
    { english: 'Similarly, the United Kingdom faced comparable challenges in the 1970s.', spanish: 'De manera similar, el Reino Unido enfrentó desafíos comparables en los 70.', note: 'Compara con un ejemplo anterior.' },
    { english: 'By contrast, the government took a completely different approach.', spanish: 'Por el contrario, el gobierno adoptó un enfoque completamente diferente.', note: 'Contrasta dos posturas.' },
    { english: 'In short, the evidence suggests a clear correlation.', spanish: 'En pocas palabras, la evidencia sugiere una correlación clara.', note: 'Resume lo presentado.' },
    { english: 'In conclusion, we recommend implementing these reforms immediately.', spanish: 'En conclusión, recomendamos implementar estas reformas inmediatamente.', note: 'Cierra con la conclusión final.' },
  ],
  rule: `Fórmula:
MARCADOR DE DISCURSO, + resto de la frase

Categorías principales:
1. Apertura: To begin with / First of all / To start with / Initially
2. Cierre: In conclusion / To conclude / Finally / In summary / To sum up
3. Resumen: In short / Briefly / In a nutshell / To put it another way
4. Comparación: Similarly / In the same way / Likewise / In contrast / By contrast / However / On the other hand

Reglas:
1. El marcador va al inicio de la oración, seguido de una coma.
2. No usar dos marcadores de la misma categoría consecutivamente.
3. El marcador estructural, pero NO reemplaza la gramática — la oración después debe ser completa.
4. En escritura formal (ensayos, reportes, emails profesionales) se espera usar estos marcadores. En conversación casual, no.`,
  formation: {
    title: 'Cómo se estructuran los marcadores del discurso',
    intro: 'Los marcadores del discurso van típicamente al inicio del enunciado seguidos de coma, y estructuran el texto señalando apertura, cierre, resumen o comparación.',
    patterns: [
      {
        name: 'Apertura — introducir el primer argumento',
        formula: '[To begin with / First of all / Initially], + oración completa',
        examples: [
          { english: 'To begin with, we need to consider the cost of the project.', spanish: 'Para empezar, necesitamos considerar el costo del proyecto.' },
          { english: 'First of all, it\'s important to note that this is a new phenomenon.', spanish: 'Antes que nada, es importante notar que este es un fenómeno nuevo.' },
        ],
        note: 'Introduce la primera idea o argumento de un párrafo o texto.',
      },
      {
        name: 'Cierre — introducir la conclusión',
        formula: '[In conclusion / To conclude / Finally], + oración completa',
        examples: [
          { english: 'In conclusion, we recommend implementing these reforms immediately.', spanish: 'En conclusión, recomendamos implementar estas reformas inmediatamente.' },
          { english: 'To sum up, the evidence suggests a clear correlation.', spanish: 'En pocas palabras, la evidencia sugiere una correlación clara.' },
        ],
        note: 'Marca que estamos terminando el argumento.',
      },
      {
        name: 'Resumen — sintetizar lo dicho',
        formula: '[In short / Briefly / In a nutshell], + oración completa',
        examples: [
          { english: 'In short, the data shows a clear trend.', spanish: 'En pocas palabras, los datos muestran una tendencia clara.' },
          { english: 'To put it another way, the results speak for themselves.', spanish: 'Dicho de otra manera, los resultados hablan por sí mismos.' },
        ],
        note: 'Resume lo presentado en pocas palabras.',
      },
      {
        name: 'Comparación — contrastar o comparar ideas',
        formula: '[Similarly / In contrast / By contrast / On the other hand], + oración completa',
        examples: [
          { english: 'Japan had similar economic challenges. By contrast, South Korea took a different approach.', spanish: 'Japón enfrentó desafíos económicos similares. Por el contrario, Corea del Sur adoptó un enfoque diferente.' },
          { english: 'Similarly, the United Kingdom faced comparable challenges in the 1970s.', spanish: 'De manera similar, el Reino Unido enfrentó desafíos comparables en los años 70.' },
        ],
        note: 'Compara o contrasta dos ideas consecutivas.',
      },
    ],
    notes: [
      'Siempre va una coma después del marcador.',
      'No uses dos marcadores de la misma categoría juntos ("To begin with, first of all..." es incorrecto).',
      'En escritura formal estos marcadores son esperados; en conversación casual no se usan tanto.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ To begin with, first of all, we need to...', correct: '✅ To begin with, we need to...', explanation: 'No se usan DOS marcadores de apertura juntos. Cada uno inicia su propio párrafo o punto.' },
    { wrong: '❌ In conclusion the government should act.', correct: '✅ In conclusion, the government should act.', explanation: 'Siempre se pone coma después del marcador.' },
    { wrong: '❌ Similarly with Japan, the UK had problems too.', correct: '✅ Similarly, the UK faced comparable challenges to Japan.', explanation: '"Similarly" no se usa como preposición (no "similar with"). Es un adverbio que inicia una comparación limpia.' },
    { wrong: '❌ In short, to sum up, the answer is yes.', correct: '✅ In short, the answer is yes.', explanation: 'No se combinan dos marcadores de resumen de la misma oración.' },
  ],
  vocabulary: [
    { word: 'discourse marker', translation_es: 'marcador de discurso', level: 'B2', category: 'academic writing', partOfSpeech: 'noun', example: 'We use discourse markers to structure our writing.', exampleTranslation: 'Usamos marcadores de discurso para estructurar la escritura.' },
    { word: 'to conclude', translation_es: 'concluir', level: 'B2', category: 'academic writing', partOfSpeech: 'verb', example: 'To conclude, let\'s recap the key points.', exampleTranslation: 'Para concluir, recapitulemos los puntos clave.' },
    { word: 'correlation', translation_es: 'correlación', level: 'B2', category: 'academic', partOfSpeech: 'noun', example: 'There is a clear correlation between X and Y.', exampleTranslation: 'Hay una correlación clara entre X e Y.' },
    { word: 'similarly', translation_es: 'de manera similar', level: 'B2', category: 'discourse', partOfSpeech: 'adverb', example: 'France had similar policies; similarly, Germany adopted them.', exampleTranslation: 'Francia tuvo políticas similares; igualmente, Alemania las adoptó.' },
    { word: 'in contrast', translation_es: 'en contraste', level: 'B2', category: 'discourse', partOfSpeech: 'adverbial phrase', example: 'The first study showed growth; in contrast, the second showed decline.', exampleTranslation: 'El primer estudio mostró crecimiento; en contraste, el segundo mostró declive.' },
    { word: 'by contrast', translation_es: 'por el contrario', level: 'B2', category: 'discourse', partOfSpeech: 'adverbial phrase', example: 'By contrast, the latest data tells a different story.', exampleTranslation: 'Por el contrario, los datos recientes cuentan una historia diferente.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-discourse-markers-opening',
      level: 'B2',
      name: 'Discourse markers: opening and introduction',
      explanation_es: 'To begin with / First of all / To start with / Initially introducen la primera idea o argumento de un párrafo o texto.',
      formula: '[Opening marker], [complete sentence]',
      examples: ['To begin with, we must understand the problem.', 'First of all, let\'s clarify the terminology.', 'Initially, the approach seemed viable.'],
    },
    {
      id: 'gp-b2-discourse-markers-closing',
      level: 'B2',
      name: 'Discourse markers: closing and conclusion',
      explanation_es: 'In conclusion / To conclude / Finally / In summary / To sum up cierran un argumento o introducen la conclusión final.',
      formula: '[Closing marker], [complete sentence]',
      examples: ['In conclusion, the evidence is clear.', 'To sum up, we recommend three key changes.', 'Finally, it\'s worth noting that...'],
    },
    {
      id: 'gp-b2-discourse-markers-contrast',
      level: 'B2',
      name: 'Discourse markers: contrast and comparison',
      explanation_es: 'Similarly / In the same way / By contrast / In contrast comparan o contrastan dos ideas consecutivas.',
      formula: '[Contrast marker], [sentence about one idea or contrast to the previous]',
      examples: ['Similarly, the UK had comparable challenges.', 'By contrast, France took a different path.', 'In the same way, other countries adopted similar policies.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m11-l1-ex1',
      type: 'multiple_choice',
      concept: 'discourse marker opening',
      difficulty: 2,
      prompt: 'Completa: "___ we need to consider the budget constraints."',
      promptTranslation: 'Para empezar, necesitamos considerar las limitaciones presupuestarias.',
      correctAnswer: 'To begin with,',
      options: ['To begin with,', 'In conclusion,', 'In contrast,'],
      explanation: 'Para introducir el PRIMER argumento usamos "To begin with" (Para empezar).',
    },
    {
      id: 'b2-m11-l1-ex2',
      type: 'multiple_choice',
      concept: 'discourse marker conclusion',
      difficulty: 2,
      prompt: 'Completa: "___ we should implement these recommendations."',
      promptTranslation: 'En conclusión, deberíamos implementar estas recomendaciones.',
      correctAnswer: 'In conclusion,',
      options: ['To begin with,', 'In conclusion,', 'Similarly,'],
      explanation: 'Para cerrar con la conclusión final usamos "In conclusion" (En conclusión).',
    },
    {
      id: 'b2-m11-l1-ex3',
      type: 'select_correct',
      concept: 'discourse marker contrast',
      difficulty: 3,
      prompt: 'Primera idea: "Japan had severe economic problems in the 1990s." ¿Cuál es el marcador correcto para contrastar con: "Korea pursued aggressive export strategies"?',
      correctAnswer: 'By contrast, Korea pursued aggressive export strategies.',
      options: [
        'By contrast, Korea pursued aggressive export strategies.',
        'Similarly, Korea pursued aggressive export strategies.',
        'To begin with, Korea pursued aggressive export strategies.',
      ],
      explanation: '"By contrast" introduce un CONTRASTE. "Similarly" indica comparación (similitud). Aquí necesitamos contraste.',
    },
    {
      id: 'b2-m11-l1-ex4',
      type: 'fill_blank',
      concept: 'discourse marker summary',
      difficulty: 2,
      prompt: 'Completa: "___ the study shows three main findings about climate change."',
      promptTranslation: 'En pocas palabras, el estudio muestra tres hallazgos principales sobre el cambio climático.',
      correctAnswer: 'In short,',
      acceptedAnswers: ['In short,', 'Briefly,', 'In a nutshell,'],
      explanation: 'Para resumir en pocas palabras se usa "In short" o "In a nutshell". Ambas son correctas.',
    },
    {
      id: 'b2-m11-l1-ex5',
      type: 'error_correction',
      concept: 'discourse marker punctuation',
      difficulty: 3,
      prompt: 'Encuentra el error: "To begin with we need to clarify the problem."',
      correctAnswer: 'To begin with, we need to clarify the problem.',
      acceptedAnswers: [
        'To begin with, we need to clarify the problem.',
        'To begin with, we need to clarify the problem',
      ],
      acceptApproximate: true,
      explanation: 'Después de un marcador de discurso SIEMPRE va una coma antes de la oración principal.',
    },
    {
      id: 'b2-m11-l1-ex6',
      type: 'reorder',
      concept: 'discourse marker word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'De manera similar, el gobierno adoptó medidas de apoyo.',
      words: ['Similarly,', 'the', 'government', 'adopted', 'supportive', 'measures.'],
      correctAnswer: 'Similarly, the government adopted supportive measures.',
      explanation: 'El marcador de discurso va primero, luego la coma, luego el sujeto + verbo normales.',
    },
    {
      id: 'b2-m11-l1-ex7',
      type: 'true_false',
      concept: 'discourse marker use',
      difficulty: 2,
      prompt: 'Es correcto usar "To begin with" y "First of all" en la misma oración: "To begin with, first of all, we should..."',
      correctAnswer: 'false',
      explanation: 'NO se usan DOS marcadores de apertura juntos. Cada uno inicia su propio párrafo o punto.',
    },
    {
      id: 'b2-m11-l1-ex8',
      type: 'match',
      concept: 'discourse marker function',
      difficulty: 3,
      prompt: 'Emparejar marcador con su función:',
      correctAnswer: '',
      pairs: [
        { left: 'To begin with', right: 'Introduce el primer argumento' },
        { left: 'In conclusion', right: 'Marca la conclusión final' },
        { left: 'By contrast', right: 'Contrasta dos ideas' },
        { left: 'In short', right: 'Resume en pocas palabras' },
      ],
      explanation: 'Cada marcador tiene una función clara en la estructura del discurso académico.',
    },
    {
      id: 'b2-m11-l1-ex9',
      type: 'listening',
      concept: 'discourse markers in context',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un profesor presenta un tema con marcadores de discurso para estructurar su explicación.',
      listening: {
        audioText:
          'Today we\'re going to discuss the impact of technology on education. To begin with, let\'s consider the advantages. Technology provides access to unlimited resources, and students can learn at their own pace. Similarly, teachers can use digital tools to create more interactive lessons. However, there are also disadvantages. By contrast, some argue that technology reduces face-to-face interaction. In conclusion, we must balance both perspectives to create an effective learning environment.',
        audioUrl: '/audio/tts/b2-m11-l1-ex9.mp3',
        questions: [
          {
            id: 'b2-m11-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: '¿Cuál fue el primer tema que mencionó el profesor?',
            promptTranslation: 'What was the first topic the professor mentioned?',
            correctAnswer: 'The advantages of technology in education',
            options: ['The advantages of technology in education', 'The disadvantages of technology', 'Face-to-face interaction'],
            explanation: '"To begin with, let\'s consider the advantages."',
          },
          {
            id: 'b2-m11-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'El profesor dijo que la tecnología reduce la interacción cara a cara.',
            correctAnswer: 'true',
            explanation: '"By contrast, some argue that technology reduces face-to-face interaction."',
          },
          {
            id: 'b2-m11-l1-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is the professor\'s conclusion?',
            correctAnswer: 'We must balance both perspectives',
            options: [
              'Technology is always good',
              'We must balance both perspectives',
              'Face-to-face learning is better',
            ],
            explanation: '"In conclusion, we must balance both perspectives to create an effective learning environment."',
          },
        ],
      },
    },
    {
      id: 'b2-m11-l1-ex10',
      type: 'writing',
      concept: 'discourse markers in essay',
      difficulty: 4,
      prompt: 'Escribí un breve ensayo (essay, ~150 palabras) argumentando SI la educación online es tan efectiva como la presencial. Usá al menos 3 marcadores de discurso: uno de apertura (To begin with...), uno de contraste (In contrast... o By contrast...), y uno de conclusión (In conclusion...).',
      promptTranslation: 'Write a brief essay arguing whether online education is as effective as face-to-face learning. Use at least 3 discourse markers.',
      correctAnswer: '',
      explanation: 'Un buen essay estructura claramente sus ideas con marcadores: introducción → argumentos → contraste → conclusión.',
      taskType: 'essay',
      targetReader: 'your teacher',
      register: 'formal',
      contentPoints: [
        'Postura clara sobre educación online vs. presencial',
        'Al menos 2 argumentos apoyando tu postura',
        'Un contraste con la postura opuesta',
        'Conclusión clara usando "In conclusion"',
      ],
      requiresOwnIdea: true,
      minWords: 120,
      maxWords: 150,
    },
    {
      id: 'b2-m11-l1-ex11',
      type: 'speaking',
      concept: 'discourse markers pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta. Pronunciá claramente el marcador y la coma natural que lo sigue.',
      correctAnswer: 'To begin with, we need to understand the problem before proposing any solutions.',
      explanation: 'Practicá la entonación natural al enunciar un marcador de discurso: suele bajar levemente después de "with," para marcar la pausa.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m11-l1-mt1',
      type: 'multiple_choice',
      concept: 'discourse marker opening',
      difficulty: 2,
      prompt: 'Elige el marcador correcto para ABRIR tu argumento:',
      correctAnswer: 'To begin with, it\'s important to note that...',
      options: [
        'To begin with, it\'s important to note that...',
        'In conclusion, it\'s important to note that...',
        'By contrast, it\'s important to note that...',
      ],
      explanation: '"To begin with" introduce el PRIMER argumento. Los otros cierran o contrastan.',
    },
    {
      id: 'b2-m11-l1-mt2',
      type: 'error_correction',
      concept: 'discourse marker structure',
      difficulty: 3,
      prompt: 'Corrige: "Similarly the UK experienced similar economic shifts."',
      correctAnswer: 'Similarly, the UK experienced similar economic shifts.',
      acceptedAnswers: [
        'Similarly, the UK experienced similar economic shifts.',
        'Similarly, the UK experienced similar economic shifts',
      ],
      acceptApproximate: true,
      explanation: 'SIEMPRE coma después del marcador de discurso.',
    },
    {
      id: 'b2-m11-l1-mt3',
      type: 'select_correct',
      concept: 'discourse marker choice',
      difficulty: 3,
      prompt: 'Primera frase: "Education is traditionally delivered in classrooms." Elige el marcador para introducir CONTRASTE:',
      correctAnswer: 'By contrast, online learning offers flexibility.',
      options: [
        'To begin with, online learning offers flexibility.',
        'By contrast, online learning offers flexibility.',
        'In short, online learning offers flexibility.',
      ],
      explanation: '"By contrast" introduce CONTRASTE. "To begin with" abre, "In short" resume.',
    },
    {
      id: 'b2-m11-l1-mt4',
      type: 'true_false',
      concept: 'discourse marker use formal context',
      difficulty: 2,
      prompt: 'En un ensayo formal, es obligatorio usar marcadores de discurso como "To begin with" e "In conclusion".',
      correctAnswer: 'false',
      explanation: 'No es obligatorio, pero es RECOMENDADO en escritura formal. Estructura el texto claramente, lo que lo hace más profesional.',
    },
  ],
  reviewItems: ['b1-m11-l1', 'b1-m11-l2'],
  prerequisites: ['b1-m11-l1'],
}
