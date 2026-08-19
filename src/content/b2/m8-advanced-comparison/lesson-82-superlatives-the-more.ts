import type { Lesson } from '../../types'

export const lesson82SuperlativesTheMore: Lesson = {
  id: 'b2-m8-l2',
  moduleId: 'm8-advanced-comparison',
  order: 1,
  title: 'Superlativos avanzados: by far, (one of) the, the more...the more',
  objective: 'Usar superlativos con énfasis (by far), elipsis de sustantivo, y estructuras "the more...the more/less" para expresar relaciones de causa-efecto.',
  explanation_es: `Conocés "the biggest", "the most interesting". Ahora vamos más lejos con tres usos avanzados:

**1. "By far" + superlativo (énfasis extremo):**
- This is by far the best restaurant in the city. (Es con mucho el mejor restaurante de la ciudad.)
- She\'s by far the most talented student. (Es con mucho la estudiante más talentosa.)

"By far" refuerza el superlativo: significa "sin competencia", "de lejos el mejor/peor". Va después del superlativo (the best by far) o antes (by far the best). Ambas son correctas, pero "by far the best" es más natural.

**2. Superlativo con elipsis del sustantivo:**
- "One of the best" (uno de los mejores) — omites el sustantivo si está claro del contexto:
  - "Which restaurant did you like?" "The Italian one — it was one of the best." (Omites "restaurants".)
  - It\'s one of the oldest buildings in Europe. (Es uno de los edificios más antiguos de Europa.)

- "The best" sin sustantivo:
  - "She\'s the best." (Ella es la mejor — se entiende como persona, actriz, etc. por contexto.)
  - "These are the worst." (Estos son los peores.)

**3. "The more... the more/less..." (relaciones proporcionales):**
Esta estructura expresa: "cuanto más X, más Y" (o menos Y). Es una RELACIÓN DE CAUSA, no una comparación:

- The more you practice, the better you get. (Cuanto más practicas, mejor te vuelves.)
- The more expensive the car, the more features it has. (Cuanto más caro el coche, más características tiene.)
- The more he talks, the less people listen. (Cuanto más habla, menos lo escuchan.)
- The older I get, the faster time passes. (Cuanto mayor me hago, más rápido pasa el tiempo.)

Estructura gramatical: the + comparativo + sujeto + verbo, the + comparativo + sujeto + verbo

Importante: NO es "more and more" (que significa "cada vez más"), sino una relación de dos variables.

**Puntos importantes:**

1. "By far" es muy común en inglés oral y escrito formal. Es la forma más fuerte de enfatizar un superlativo.

2. La elipsis del sustantivo funciona solo cuando está claro del contexto. "The tallest" (necesita contexto) vs. "the tallest student" (claro, no hay elipsis necesaria).

3. En "the more...the more", AMBAS partes son comparativos (more + adjetivo o -er), NO superlativos. Es común confundir: "the more expensive" (comparativo), no "the most expensive" (superlativo).

4. "The more...the more" es muy común en refranes y afirmaciones generales:
   - The more, the merrier. (Cuanta más gente, mejor — más divertido.)
   - The older, the wiser. (Cuanta más edad, más sabiduría.)

5. Puedes combinar varios modificadores: "by far one of the best" (con mucho, uno de los mejores).`,
  examples: [
    { english: 'This is by far the most beautiful city I\'ve ever visited.', spanish: 'Esta es con mucho la ciudad más hermosa que he visitado.', note: '"by far" enfatiza extremadamente el superlativo.' },
    { english: 'She\'s one of the most talented musicians in the world.', spanish: 'Es una de las músicas más talentosas del mundo.', note: '"one of the" + superlativo (sin omitir el sustantivo acá, pero se puede).' },
    { english: 'Which pizza was best? The vegetarian one was one of the best.', spanish: '¿Cuál pizza fue la mejor? La vegetariana fue una de las mejores.', note: 'Elipsis: omites "pizzas" en la segunda parte porque está claro.' },
    { english: 'The more you sleep, the better you feel.', spanish: 'Cuanto más duermes, mejor te sientes.', note: '"The more...the more" expresa una relación de causa-efecto entre dos variables.' },
    { english: 'The older I get, the faster time seems to pass.', spanish: 'Cuanto mayor me hago, más rápido parece pasar el tiempo.', note: 'Ambas cláusulas son comparativos (older, faster), no superlativos.' },
    { english: 'The less you worry, the happier you\'ll be.', spanish: 'Cuanto menos te preocupes, más feliz serás.', note: '"The less...the more" también es posible (la primera variable disminuye, la segunda aumenta).' },
  ],
  rule: `**1. By far + superlativo:**
the + superlativo + by far  /  by far + the + superlativo
- The best by far = This is by far the best.
- Significa: "sin competencia", "de lejos el mejor".

**2. (One of) the + superlativo [sin sustantivo]:**
- the + superlativo [+ sustantivo, opcional]
- one of the + superlativo [+ sustantivo, opcional]
- Ejemplos: the best, one of the oldest, the worst

**3. The more/less... the more/less... (relaciones proporcionales):**
the + comparativo + sujeto + verbo, the + comparativo + sujeto + verbo
- The more + comparative adjective + subject + verb, the + comparative adjective + subject + verb
- The more you practice, the better you get.
- The less time we have, the more focused we need to be.

**Reglas críticas:**
1. "By far" acompaña al superlativo SOLAMENTE.
2. En "the more...the more", ambas partes son comparativos, no superlativos.
3. La elipsis del sustantivo solo funciona si el referente está claro.
4. "The more...the more" es una relación causal/proporcional, no una simple comparación.`,
  formation: {
    title: 'Cómo se forman los superlativos avanzados',
    intro: 'Tres usos avanzados: "by far" para enfatizar un superlativo, "one of the" con elipsis del sustantivo, y la estructura proporcional "the more...the more/less".',
    patterns: [
      {
        name: 'By far + superlativo — énfasis extremo',
        formula: 'by far + the + superlativo (+ sustantivo)',
        examples: [
          { english: 'This is by far the best restaurant in the city.', spanish: 'Este es con mucho el mejor restaurante de la ciudad.' },
          { english: 'She\'s by far the most talented student in the class.', spanish: 'Es con mucho la estudiante más talentosa de la clase.' },
        ],
        note: '"By far" acompaña solo a superlativos, nunca a comparativos.',
      },
      {
        name: 'One of the + superlativo — con elipsis del sustantivo',
        formula: 'one of the + superlativo (+ sustantivo opcional)',
        examples: [
          { english: 'It\'s one of the oldest buildings in Europe.', spanish: 'Es uno de los edificios más antiguos de Europa.' },
          { english: 'Which pizza was best? The vegetarian one was one of the best.', spanish: '¿Cuál pizza fue la mejor? La vegetariana fue una de las mejores.' },
        ],
        note: 'El sustantivo se omite cuando está claro por el contexto.',
      },
      {
        name: 'The more...the more/less — relación proporcional',
        formula: 'the + comparativo + sujeto + verbo, the + comparativo + sujeto + verbo',
        examples: [
          { english: 'The more you practice, the better you get.', spanish: 'Cuanto más practicas, mejor te vuelves.' },
          { english: 'The older I get, the faster time seems to pass.', spanish: 'Cuanto mayor me hago, más rápido parece pasar el tiempo.' },
        ],
        note: 'Ambas partes son comparativos, nunca superlativos.',
      },
    ],
    notes: [
      'En "the more...the more", ambas cláusulas usan comparativo (-er o more), no superlativo (most).',
      'La elipsis del sustantivo solo funciona si el referente está claro del contexto.',
      'Puedes combinar estructuras: "by far one of the best".',
    ],
  },
  commonMistakes: [
    { wrong: '❌ This is the best by far, but far more interesting than that.', correct: '✅ This is by far the best. / This is far more interesting than that.', explanation: '"By far" solo acompaña superlativos, no comparativos. "Far more interesting" es un comparativo modificado; no son intercambiables.' },
    { wrong: '❌ The more you practice, the most you improve.', correct: '✅ The more you practice, the more you improve.', explanation: 'Ambas partes de "the more...the more" llevan comparativos (-er, more), no superlativos (most).' },
    { wrong: '❌ The more expensive the car, it has more features.', correct: '✅ The more expensive the car, the more features it has.', explanation: 'Estructura: "the more...the more..." — ambas cláusulas incluyen "the".' },
    { wrong: '❌ She\'s the most talented one.', correct: '✅ She\'s one of the most talented. / She is the most talented.', explanation: '"One of the most" es una construcción común para suavizar el superlativo. Sin "one of", es "the most talented" (sin artículo individual).' },
  ],
  vocabulary: [
    { word: 'ellipsis', translation_es: 'elipsis', level: 'B2', category: 'grammar terms', partOfSpeech: 'noun', example: 'Ellipsis allows us to omit words that are clear from context.', exampleTranslation: 'La elipsis nos permite omitir palabras claras por contexto.' },
    { word: 'proportional', translation_es: 'proporcional', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'The cost is proportional to the size of the project.', exampleTranslation: 'El costo es proporcional al tamaño del proyecto.' },
    { word: 'to emphasize', translation_es: 'enfatizar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'By far emphasizes the superlative form.', exampleTranslation: '"By far" enfatiza la forma superlativa.' },
    { word: 'causal relationship', translation_es: 'relación causal', level: 'B2', category: 'grammar terms', partOfSpeech: 'noun phrase', example: 'The sentence shows a causal relationship between two events.', exampleTranslation: 'La oración muestra una relación causal entre dos eventos.' },
    { word: 'referent', translation_es: 'referente', level: 'B2', category: 'grammar terms', partOfSpeech: 'noun', example: 'The pronoun "it" needs a clear referent.', exampleTranslation: 'El pronombre "it" necesita un referente claro.' },
    { word: 'merrier', translation_es: 'más alegre', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'The more, the merrier! (common saying)', exampleTranslation: '¡Cuanta más gente, mejor!' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-superlatives-advanced',
      level: 'B2',
      name: 'Advanced superlatives: by far, ellipsis, the more...the more',
      explanation_es: 'Enfatizar superlativos con "by far", omitir sustantivos cuando está claro por contexto, y expresar relaciones proporcionales con "the more...the more/less".',
      formula: 'by far + the + superlative; the + comparative, the + comparative',
      examples: [
        'by far the best',
        'one of the oldest buildings',
        'The more you practice, the better you get.',
        'The less time we have, the more focused we need to be.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m8-l2-ex1',
      type: 'multiple_choice',
      concept: 'by far superlative',
      difficulty: 2,
      prompt: 'Completa: "This is ___ the best restaurant in town."',
      promptTranslation: 'Este es con mucho el mejor restaurante de la ciudad.',
      correctAnswer: 'by far',
      options: ['by far', 'very', 'so'],
      explanation: '"By far" + superlativo para enfatizar extremadamente: by far the best.',
    },
    {
      id: 'b2-m8-l2-ex2',
      type: 'fill_blank',
      concept: 'the more the more structure',
      difficulty: 2,
      prompt: 'Completa: "The more you read, ___ you learn."',
      promptTranslation: 'Cuanto más lees, más aprendes.',
      correctAnswer: 'the more',
      explanation: 'Estructura "the more...the more": the + comparativo, the + comparativo.',
    },
    {
      id: 'b2-m8-l2-ex3',
      type: 'select_correct',
      concept: 'superlative with ellipsis',
      difficulty: 3,
      prompt: '"¿Cuál hotel fue el mejor?" "El de la playa fue uno de los mejores." ¿Cómo completas esta respuesta?',
      correctAnswer: 'The beachfront one was one of the best.',
      options: [
        'The beachfront one was one of the best.',
        'The beachfront one was one of the most.',
        'The beachfront was one of the bests.',
      ],
      explanation: 'Elipsis: omites "hotels" porque está claro. "One of the best" (sin sustantivo).',
    },
    {
      id: 'b2-m8-l2-ex4',
      type: 'error_correction',
      concept: 'the more the more structure',
      difficulty: 3,
      prompt: 'Encuentra el error: "The more you practice, the most you improve."',
      correctAnswer: 'The more you practice, the more you improve.',
      acceptedAnswers: [
        'The more you practice, the more you improve',
        'The more you practice, the more you improve.',
      ],
      acceptApproximate: true,
      explanation: 'Ambas partes usan comparativo (more), no superlativo (most): the more...the more.',
    },
    {
      id: 'b2-m8-l2-ex5',
      type: 'reorder',
      concept: 'the more the more word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Cuanto mayor me hago, más rápido pasa el tiempo.',
      words: ['The', 'older', 'I', 'get', 'the', 'faster', 'time', 'passes'],
      correctAnswer: 'The older I get, the faster time passes.',
      explanation: 'Estructura: The + comparativo + sujeto + verbo, the + comparativo + sujeto + verbo.',
    },
    {
      id: 'b2-m8-l2-ex6',
      type: 'translate',
      concept: 'by far superlative',
      difficulty: 4,
      prompt: 'Traduce: "Es con mucho la película más emocionante que he visto."',
      correctAnswer: 'It\'s by far the most exciting film I\'ve ever seen.',
      acceptedAnswers: [
        'It\'s by far the most exciting film I\'ve ever seen',
        'It\'s by far the most exciting film I have ever seen',
        'It is by far the most exciting film I have ever watched',
        'It is by far the most exciting film I\'ve ever watched',
      ],
      acceptApproximate: true,
      explanation: '"Con mucho" = by far (énfasis). "La más emocionante" = the most exciting film.',
    },
    {
      id: 'b2-m8-l2-ex7',
      type: 'match',
      concept: 'the more the more relationships',
      difficulty: 3,
      prompt: 'Relaciona cada "the more/less" con su continuación lógica.',
      promptTranslation: 'Match each "the more/less" with its logical continuation.',
      correctAnswer: '',
      pairs: [
        { left: 'The more you sleep', right: 'the healthier you become.' },
        { left: 'The less time you have', right: 'the more focused you need to be.' },
        { left: 'The older you get', right: 'the more experience you gain.' },
        { left: 'The less money you spend', right: 'the more you save.' },
      ],
      explanation: 'Estructura de proporcionalidad: cuando una variable aumenta (o disminuye), la otra también cambia de forma proporcional.',
    },
    {
      id: 'b2-m8-l2-ex8',
      type: 'true_false',
      concept: 'by far vs very',
      difficulty: 3,
      prompt: '"Very" y "by far" se pueden usar indistintamente con superlativos.',
      correctAnswer: 'false',
      explanation: 'Falso. "By far" acompaña SOLO a superlativos (the best by far). "Very" acompaña adjetivos positivos (very good), no superlativos.',
    },
    {
      id: 'b2-m8-l2-ex9',
      type: 'listening',
      concept: 'superlatives advanced - listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Dos personas hablan sobre experiencias de viaje, usando superlativos avanzados (by far, one of the, the more...the more).',
      listening: {
        audioText:
          'A: Have you traveled much? B: Yes, quite a bit. By far the best experience was my trip to Japan. It was by far the most memorable adventure. A: What made it so special? B: The more I explored, the more I fell in love with the culture. The food was one of the best aspects — simple but incredible. A: Would you go back? B: Absolutely! The older I get, the more I appreciate travel.',
        audioUrl: '/audio/tts/b2-m8-l2-ex9.mp3',
        questions: [
          {
            id: 'b2-m8-l2-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What was by far the best experience for B?',
            correctAnswer: 'A trip to Japan',
            options: ['A trip to Japan', 'A visit to Europe', 'A beach vacation'],
            explanation: '"By far the best experience was my trip to Japan."',
          },
          {
            id: 'b2-m8-l2-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'B says that one of the best aspects was the food.',
            correctAnswer: 'true',
            explanation: '"The food was one of the best aspects — simple but incredible."',
          },
          {
            id: 'b2-m8-l2-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'What relationship does B describe with "the more I explored, the more I fell in love"?',
            correctAnswer: 'A proportional relationship between exploration and love for the culture',
            options: [
              'A proportional relationship between exploration and love for the culture',
              'A cause-and-effect where exploration prevented love',
              'A simple comparison of two experiences',
            ],
            explanation: '"The more...the more" expresa una relación proporcional/causal.',
          },
        ],
      },
    },
    {
      id: 'b2-m8-l2-ex10',
      type: 'writing',
      concept: 'superlatives advanced - writing',
      difficulty: 4,
      prompt: 'Escribí un artículo breve (article) sobre un logro personal destacado, usando al menos: "by far the [superlativo]", una frase con "one of the [superlativo]" y una relación "the more...the more".',
      promptTranslation: 'Write a brief article about a personal achievement, using: "by far the [superlative]", "one of the [superlative]", and a "the more...the more" structure.',
      correctAnswer: '',
      explanation: 'Un buen artículo combina superlativos avanzados de forma natural mientras cuenta sobre un logro personal.',
      taskType: 'article',
      targetReader: 'readers of a personal blog',
      register: 'neutral',
      contentPoints: [
        'Descripción del logro personal',
        'Al menos una frase con "by far the [superlativo]"',
        'Una frase con "one of the [superlativo]" con posible elipsis',
        'Una relación "the more...the more" que muestre la progresión del aprendizaje',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m8-l2-ex11',
      type: 'speaking',
      concept: 'superlatives advanced - speaking',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'By far the most challenging part was learning that the more I practiced, the better I became at expressing myself.',
      explanation: 'Practicá la entonación de una frase que combina "by far" con "the more...the more".',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m8-l2-mt1',
      type: 'multiple_choice',
      concept: 'by far superlative',
      difficulty: 2,
      prompt: 'Completa: "She is ___ the smartest person I know."',
      promptTranslation: 'Es con mucho la persona más inteligente que conozco.',
      correctAnswer: 'by far',
      options: ['by far', 'very', 'far'],
      explanation: '"By far" + superlativo: by far the smartest.',
    },
    {
      id: 'b2-m8-l2-mt2',
      type: 'fill_blank',
      concept: 'the more the more',
      difficulty: 2,
      prompt: 'Completa: "The more you study, ___ you understand."',
      promptTranslation: 'Cuanto más estudias, más entiendes.',
      correctAnswer: 'the more',
      explanation: '"The more...the more" (ambas con comparativo): the more you study, the more you understand.',
    },
    {
      id: 'b2-m8-l2-mt3',
      type: 'true_false',
      concept: 'the more the more vs most',
      difficulty: 3,
      prompt: '"The more you practice, the most you improve" es la forma correcta.',
      correctAnswer: 'false',
      explanation: 'Falso. Ambas partes usan comparativo (more), no superlativo (most).',
    },
  ],
  reviewItems: ['b1-m2-l2', 'b1-m2-l3'],
  prerequisites: ['b2-m8-l1'],
}
