import type { Lesson } from '../../types'

export const lesson133FutureTime: Lesson = {
  id: 'a1-m13-l3',
  moduleId: 'm13-future',
  order: 2,
  title: 'Expresiones de tiempo futuro + repaso',
  objective: 'Usar expresiones de tiempo futuro (tomorrow, next week, on Monday...) con "going to" y repasar el módulo.',
  explanation_es: `Para hablar de planes futuros, es muy útil saber decir **cuándo** ocurrirá algo. Estas son las expresiones de tiempo más comunes en A1:

- **tomorrow** = mañana
- **tonight** = esta noche
- **next week** = la próxima semana
- **next month** = el próximo mes
- **next year** = el próximo año
- **soon** = pronto
- **on Monday** = el lunes (día)
- **in July** = en julio (mes)
- **in 2025** = en 2025 (año)

Recuerda: usamos **on** con días (on Monday) e **in** con meses y años (in July, in 2025).

La expresión de tiempo normalmente va al final de la frase:

- I'm going to call her **tomorrow**. = Voy a llamarla mañana.
- They are going to move **next year**. = Van a mudarse el próximo año.
- We're going to have a meeting **on Monday**. = Vamos a tener una reunión el lunes.`,
  examples: [
    { english: "I'm going to call her tomorrow.", spanish: 'Voy a llamarla mañana.' },
    { english: 'They are going to move next year.', spanish: 'Van a mudarse el próximo año.' },
    { english: "We're going to have a meeting on Monday.", spanish: 'Vamos a tener una reunión el lunes.' },
    { english: "She's going to arrive soon.", spanish: 'Ella va a llegar pronto.' },
    { english: 'I am going to start my course in September.', spanish: 'Voy a empezar mi curso en septiembre.' },
    { english: 'They are going to travel to Italy in 2025.', spanish: 'Van a viajar a Italia en 2025.' },
  ],
  rule: `Expresiones de tiempo futuro:
- tomorrow, tonight, soon → I'm going to call her tomorrow.
- next + week/month/year → They are going to move next year.
- on + día → We're going to have a meeting on Monday.
- in + mes/año → I'm going to travel in July / in 2025.

Posición: normalmente al final de la frase.`,
  formation: {
    title: 'Cómo se usan las expresiones de tiempo futuro',
    intro: 'Las expresiones de tiempo futuro (tomorrow, next week, on Monday...) nos dicen CUÁNDO ocurrirá algo y normalmente van al final de la frase, con "going to".',
    patterns: [
      {
        name: 'Expresiones de tiempo futuro',
        formula: 'tomorrow | tonight | soon | next + semana/mes/año | on + día | in + mes/año',
        examples: [
          { english: "I'm going to call her tomorrow.", spanish: 'Voy a llamarla mañana.' },
          { english: 'They are going to move next year.', spanish: 'Van a mudarse el próximo año.' },
          { english: "We're going to have a meeting on Monday.", spanish: 'Vamos a tener una reunión el lunes.' },
          { english: "She's going to arrive soon.", spanish: 'Ella va a llegar pronto.' },
        ],
        note: 'on + días (on Monday); in + meses y años (in July, in 2025).',
      },
      {
        name: 'Posición en la frase',
        formula: 'Sujeto + am/is/are + going to + verbo + expresión de tiempo',
        examples: [
          { english: 'I am going to study tomorrow.', spanish: 'Voy a estudiar mañana.' },
          { english: 'They are going to travel to Italy in 2025.', spanish: 'Van a viajar a Italia en 2025.' },
        ],
        note: 'La expresión de tiempo normalmente va al final de la frase.',
      },
    ],
    notes: [
      'Con "next" no se usa preposición: next year, no "in next year".',
      'Recuerda el verbo "to be": I am going to... (no "I going to...").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I going to call her tomorrow.', correct: '✅ I\'m going to call her tomorrow.', explanation: 'Recuerda el verbo "to be": I am going to... (repaso del afirmativo).' },
    { wrong: '❌ We are going to have a meeting in Monday.', correct: '✅ We are going to have a meeting on Monday.', explanation: 'Con días usamos "on", no "in": on Monday.' },
    { wrong: '❌ I am going to travel in next year.', correct: '✅ I am going to travel next year.', explanation: 'Con "next" no usamos preposición: next year, no "in next year".' },
  ],
  vocabulary: [
    {
      word: 'tomorrow',
      translation_es: 'mañana',
      level: 'A1',
      category: 'future time',
      partOfSpeech: 'adverb',
      example: 'I am going to study tomorrow.',
      exampleTranslation: 'Voy a estudiar mañana.',
    },
    {
      word: 'tonight',
      translation_es: 'esta noche',
      level: 'A1',
      category: 'future time',
      partOfSpeech: 'adverb',
      example: "I'm not going to go out tonight.",
      exampleTranslation: 'No voy a salir esta noche.',
    },
    {
      word: 'next week',
      translation_es: 'la próxima semana',
      level: 'A1',
      category: 'future time',
      partOfSpeech: 'phrase',
      example: 'We are going to move next week.',
      exampleTranslation: 'Vamos a mudarnos la próxima semana.',
    },
    {
      word: 'soon',
      translation_es: 'pronto',
      level: 'A1',
      category: 'future time',
      partOfSpeech: 'adverb',
      example: "She's going to arrive soon.",
      exampleTranslation: 'Ella va a llegar pronto.',
    },
  ],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m13-l3-ex1',
      type: 'multiple_choice',
      concept: 'future time expressions',
      difficulty: 1,
      prompt: 'Completa: "I\'m going to call her ___."',
      promptTranslation: 'Voy a llamarla mañana.',
      correctAnswer: 'tomorrow',
      options: ['tomorrow', 'yesterday', 'last week'],
      explanation: '"tomorrow" = mañana (futuro). "yesterday" y "last week" son pasado.',
    },
    {
      id: 'a1-m13-l3-ex2',
      type: 'fill_blank',
      concept: 'future time expressions (next)',
      difficulty: 1,
      prompt: 'Completa: "They are going to move ___ year." (next)',
      promptTranslation: 'Van a mudarse el próximo año.',
      correctAnswer: 'next',
      acceptedAnswers: ['Next'],
      explanation: 'Usamos "next" + year/month/week para hablar del futuro: next year.',
    },
    {
      id: 'a1-m13-l3-ex3',
      type: 'multiple_choice',
      concept: 'prepositions in/on with time',
      difficulty: 2,
      prompt: 'Completa: "We\'re going to have a meeting ___ Monday."',
      promptTranslation: 'Vamos a tener una reunión el lunes.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Con días usamos "on": on Monday.',
    },
    {
      id: 'a1-m13-l3-ex4',
      type: 'fill_blank',
      concept: 'prepositions in/on with time',
      difficulty: 2,
      prompt: 'Completa: "I\'m going to travel ___ July." (in)',
      promptTranslation: 'Voy a viajar en julio.',
      correctAnswer: 'in',
      acceptedAnswers: ['In'],
      explanation: 'Con meses usamos "in": in July.',
    },
    {
      id: 'a1-m13-l3-ex5',
      type: 'reorder',
      concept: 'going to + future time word order',
      difficulty: 3,
      prompt: 'Ordena: I / am going to / call her / tomorrow',
      promptTranslation: 'Voy a llamarla mañana.',
      correctAnswer: 'I am going to call her tomorrow.',
      words: ['I', 'am going to', 'call her', 'tomorrow'],
      explanation: 'Orden: sujeto + going to + verbo + tiempo. → I am going to call her tomorrow.',
    },
    {
      id: 'a1-m13-l3-ex6',
      type: 'translate',
      concept: 'going to + future time',
      difficulty: 3,
      prompt: 'Traduce: "Van a mudarse el próximo año."',
      correctAnswer: 'They are going to move next year.',
      acceptedAnswers: ["They're going to move next year", 'They are going to move next year', "They're going to move next year."],
      acceptApproximate: true,
      explanation: '"Van a" → They are (They\'re) going to + move next year.',
    },
    {
      id: 'a1-m13-l3-ex7',
      type: 'multiple_choice',
      concept: 'going to - review affirmative',
      difficulty: 3,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Vamos a tener una reunión el lunes.',
      correctAnswer: "We're going to have a meeting on Monday.",
      options: [
        "We're going to have a meeting on Monday.",
        'We are going have a meeting on Monday.',
        "We're going to have a meeting in Monday.",
      ],
      explanation: 'Orden correcto: We\'re + going to + have + on Monday (día → on).',
    },
    {
      id: 'a1-m13-l3-ex8',
      type: 'reorder',
      concept: 'going to + future time word order',
      difficulty: 3,
      prompt: 'Ordena: They / are going to / move / next year',
      promptTranslation: 'Van a mudarse el próximo año.',
      correctAnswer: 'They are going to move next year.',
      words: ['They', 'are going to', 'move', 'next year'],
      explanation: 'Orden: They + are going to + move + next year.',
    },
    {
      id: 'a1-m13-l3-ex9',
      type: 'translate',
      concept: 'going to + future time (on Monday)',
      difficulty: 4,
      prompt: 'Traduce: "Vamos a tener una reunión el lunes."',
      correctAnswer: "We're going to have a meeting on Monday.",
      acceptedAnswers: ["We're going to have a meeting on Monday", 'We are going to have a meeting on Monday', "We are going to have a meeting on Monday."],
      acceptApproximate: true,
      explanation: '"Vamos a" → We\'re (We are) going to + have a meeting + on Monday.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m13-l3-mt1',
      type: 'multiple_choice',
      concept: 'future time expressions',
      difficulty: 2,
      prompt: 'Completa: "She\'s going to arrive ___."',
      promptTranslation: 'Ella va a llegar pronto.',
      correctAnswer: 'soon',
      options: ['soon', 'yesterday', 'last month'],
      explanation: '"soon" = pronto (futuro). Las otras opciones son de pasado.',
    },
    {
      id: 'a1-m13-l3-mt2',
      type: 'fill_blank',
      concept: 'prepositions in/on with time',
      difficulty: 2,
      prompt: 'Completa: "They are going to travel to Italy ___ 2025." (in)',
      promptTranslation: 'Van a viajar a Italia en 2025.',
      correctAnswer: 'in',
      acceptedAnswers: ['In'],
      explanation: 'Con años usamos "in": in 2025.',
    },
    {
      id: 'a1-m13-l3-mt3',
      type: 'reorder',
      concept: 'going to + future time word order',
      difficulty: 3,
      prompt: 'Ordena: We / are going to / have a meeting / on Monday',
      promptTranslation: 'Vamos a tener una reunión el lunes.',
      correctAnswer: 'We are going to have a meeting on Monday.',
      words: ['We', 'are going to', 'have a meeting', 'on Monday'],
      explanation: 'Orden: We + are going to + have a meeting + on Monday.',
    },
    {
      id: 'a1-m13-l3-mt4',
      type: 'translate',
      concept: 'going to + future time',
      difficulty: 3,
      prompt: 'Traduce: "Voy a llamarla mañana."',
      correctAnswer: "I'm going to call her tomorrow.",
      acceptedAnswers: ["I'm going to call her tomorrow", 'I am going to call her tomorrow', "I am going to call her tomorrow."],
      acceptApproximate: true,
      explanation: '"Voy a" → I\'m (I am) going to + call her + tomorrow.',
    },
  ],
  reviewItems: ['a1-m13-l2'],
  prerequisites: ['a1-m13-l2'],
}
