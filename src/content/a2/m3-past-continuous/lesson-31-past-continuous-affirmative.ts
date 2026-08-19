import type { Lesson } from '../../types'

export const lesson31PastContinuousAffirmative: Lesson = {
  id: 'a2-m3-l1',
  moduleId: 'm3-past-continuous',
  order: 0,
  title: 'Past Continuous (afirmativo)',
  objective: 'Describir acciones que estaban en progreso en el pasado con was/were + verbo -ing.',
  explanation_es: `En esta lección aprenderás a describir acciones que ESTABAN OCURRIENDO en un momento del pasado.

### ¿Qué es el Past Continuous?

El Past Continuous describe una acción que estaba en progreso (a medio hacer) en un momento del pasado. En español equivale al "estaba + gerundio": "yo estaba viendo la tele".

Se forma con: was / were + verbo + -ing.

- was → con I, he, she, it: "I was watching..."
- were → con you, we, they: "They were playing..."

### ¿Cómo se forma el verbo con -ing?

Mismas reglas que el Present Continuous (ya lo conoces de A1):

- watch → watching, read → reading, play → playing (añade -ing).
- make → making (si termina en -e, se quita la -e).
- run → running (si termina en consonante + vocal + consonante, duplicas la consonante).

### ¿Para qué lo usamos?

1. Para una acción que estaba en progreso en un momento concreto del pasado:
   - "I was watching TV at 8 p.m." = Estaba viendo la tele a las 8 de la tarde.

2. Para describir el "fondo" o la escena cuando algo ocurrió:
   - "She was reading when I arrived." = Ella estaba leyendo cuando llegué.

3. Para dos acciones en progreso a la vez:
   - "They were playing football." = Ellos estaban jugando al fútbol.`,
  examples: [
    { english: 'I was watching TV at 8 p.m.', spanish: 'Estaba viendo la tele a las 8 de la tarde.', note: 'Con I usamos was. watch → watching.' },
    { english: 'She was reading when I arrived.', spanish: 'Ella estaba leyendo cuando llegué.', note: 'was + reading. Acción en progreso.' },
    { english: 'They were playing football.', spanish: 'Ellos estaban jugando al fútbol.', note: 'Con they usamos were.' },
    { english: 'We were having dinner at 9.', spanish: 'Estábamos cenando a las 9.', note: 'were + having.' },
    { english: 'He was cooking dinner.', spanish: 'Él estaba cocinando la cena.', note: 'was + cooking.' },
    { english: 'It was raining all day.', spanish: 'Estaba lloviendo todo el día.', note: 'Con it usamos was.' },
  ],
  rule: `1. Fórmula: was/were + verbo + -ing.
2. was → I, he, she, it. were → you, we, they.
3. -ing: watch → watching, make → making (quita -e), run → running (duplica consonante).
4. Se usa para: acciones en progreso en un momento del pasado, y para describir la escena de fondo.
5. ¡No confundas con el pasado simple! El pasado simple es una acción terminada; el Past Continuous es una acción en curso.`,
  formation: {
    title: 'Cómo se forma el Past Continuous — Afirmativo',
    intro: 'El Past Continuous describe una acción en progreso en el pasado: was/were + verbo con -ing. En español equivale a "estaba + gerundio".',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + was / were + verbo + -ing + complemento',
        examples: [
          { english: 'I was watching TV at 8 p.m.', spanish: 'Estaba viendo la tele a las 8 de la tarde.' },
          { english: 'She was reading when I arrived.', spanish: 'Ella estaba leyendo cuando llegué.' },
          { english: 'He was cooking dinner.', spanish: 'Él estaba cocinando la cena.' },
          { english: 'They were playing football.', spanish: 'Ellos estaban jugando al fútbol.' },
          { english: 'We were having dinner at 9.', spanish: 'Estábamos cenando a las 9.' },
          { english: 'It was raining all day.', spanish: 'Estaba lloviendo todo el día.' },
        ],
        note: 'was → I/he/she/it. were → you/we/they. Después de was/were el verbo SIEMPRE lleva -ing.',
      },
    ],
    notes: [
      'Reglas del -ing: añade -ing (watch → watching); si termina en -e, quítala (make → making); si termina en consonante + vocal + consonante, duplica la consonante (run → running).',
      'En afirmativo no hay contracción habitual para was/were: se escribe siempre I was, they were.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I was watch TV at 8 p.m.', correct: '✅ I was watching TV at 8 p.m.', explanation: 'Después de was/were el verbo SIEMPRE lleva -ing: watching, no watch.' },
    { wrong: '❌ I were watching TV.', correct: '✅ I was watching TV.', explanation: 'Con "I" usamos "was", no "were".' },
    { wrong: '❌ They was playing football.', correct: '✅ They were playing football.', explanation: 'Con "they" (plural) usamos "were", no "was".' },
  ],
  vocabulary: [
    { word: 'watch', translation_es: 'ver (televisión)', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'I was watching TV at 8 p.m.', exampleTranslation: 'Estaba viendo la tele a las 8 de la tarde.' },
    { word: 'read', translation_es: 'leer', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'She was reading when I arrived.', exampleTranslation: 'Ella estaba leyendo cuando llegué.' },
    { word: 'play', translation_es: 'jugar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'They were playing football.', exampleTranslation: 'Ellos estaban jugando al fútbol.' },
    { word: 'cook', translation_es: 'cocinar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'He was cooking dinner.', exampleTranslation: 'Él estaba cocinando la cena.' },
    { word: 'drive', translation_es: 'conducir', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'She was driving to work.', exampleTranslation: 'Ella estaba conduciendo al trabajo.' },
    { word: 'sleep', translation_es: 'dormir', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'The baby was sleeping all afternoon.', exampleTranslation: 'El bebé estaba durmiendo toda la tarde.' },
    { word: 'run', translation_es: 'correr', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'They were running in the park.', exampleTranslation: 'Ellos estaban corriendo en el parque.' },
    { word: 'listen', translation_es: 'escuchar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'I was listening to music.', exampleTranslation: 'Estaba escuchando música.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m3-past-continuous-affirmative',
      level: 'A2',
      name: 'Past Continuous — affirmative',
      explanation_es: 'Acciones en progreso en el pasado: was/were + verbo -ing. Describe escenas y acciones en curso.',
      formula: 'I/He/She/It + was + verb-ing | You/We/They + were + verb-ing',
      examples: ['I was watching TV.', 'She was reading.', 'They were playing football.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m3-l1-ex1',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "I ___ watching TV at 8 p.m."',
      promptTranslation: 'Estaba viendo la tele a las 8 de la tarde.',
      correctAnswer: 'was',
      options: ['was', 'were', 'am'],
      explanation: 'Con "I" usamos "was". → I was watching TV at 8 p.m.',
    },
    {
      id: 'a2-m3-l1-ex2',
      type: 'fill_blank',
      concept: 'verb + -ing',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "She was ___ when I arrived." (read)',
      promptTranslation: 'Ella estaba leyendo cuando llegué.',
      correctAnswer: 'reading',
      acceptedAnswers: ['reading', 'Reading'],
      explanation: 'Después de was/were el verbo lleva -ing: read → reading. → She was reading when I arrived.',
    },
    {
      id: 'a2-m3-l1-ex3',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 2,
      prompt: 'Completa: "They ___ playing football."',
      promptTranslation: 'Ellos estaban jugando al fútbol.',
      correctAnswer: 'were',
      options: ['were', 'was', 'are'],
      explanation: 'Con "they" (plural) usamos "were". → They were playing football.',
    },
    {
      id: 'a2-m3-l1-ex4',
      type: 'match',
      concept: 'subject + was/were + -ing',
      difficulty: 2,
      prompt: 'Une cada sujeto con la forma correcta del Past Continuous.',
      correctAnswer: 'I→was watching, She→was reading, They→were playing, We→were having dinner, He→was cooking, You→were sleeping',
      pairs: [
        { left: 'I', right: 'was watching' },
        { left: 'She', right: 'was reading' },
        { left: 'They', right: 'were playing' },
        { left: 'We', right: 'were having dinner' },
        { left: 'He', right: 'was cooking' },
        { left: 'You', right: 'were sleeping' },
      ],
      explanation: 'I/he/she/it → was. You/we/they → were. Después siempre el verbo con -ing.',
    },
    {
      id: 'a2-m3-l1-ex5',
      type: 'translate',
      concept: 'past continuous affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Estaba viendo la tele a las 8."',
      correctAnswer: 'I was watching TV at 8.',
      acceptedAnswers: ['I was watching TV at 8', 'I was watching TV at 8.', 'i was watching TV at 8'],
      acceptApproximate: true,
      explanation: '"Yo estaba viendo" = I was watching, "la tele" = TV, "a las 8" = at 8.',
    },
    {
      id: 'a2-m3-l1-ex6',
      type: 'error_correction',
      concept: 'verb + -ing',
      difficulty: 3,
      prompt: 'Corrige el error: "I was watch TV when you called."',
      correctAnswer: 'I was watching TV when you called.',
      acceptedAnswers: ['I was watching TV when you called', 'I was watching TV when you called.', 'i was watching TV when you called'],
      acceptApproximate: true,
      explanation: 'Después de "was" el verbo lleva -ing: watching, no watch. → I was watching TV when you called.',
    },
    {
      id: 'a2-m3-l1-ex7',
      type: 'reorder',
      concept: 'past continuous structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: was / TV / at / 8 p.m. / watching / I',
      promptTranslation: 'Estaba viendo la tele a las 8 de la tarde.',
      correctAnswer: 'I was watching TV at 8 p.m.',
      words: ['I', 'was', 'watching', 'TV', 'at', '8 p.m.'],
      explanation: 'Orden: sujeto + was/were + verbo-ing + ... → I was watching TV at 8 p.m.',
    },
    {
      id: 'a2-m3-l1-ex8',
      type: 'multiple_choice',
      concept: '-ing spelling',
      difficulty: 4,
      prompt: 'Completa: "He was ___." (run)',
      promptTranslation: 'Él estaba corriendo.',
      correctAnswer: 'running',
      options: ['running', 'runing', 'runned'],
      explanation: '"Run" termina en consonante + vocal + consonante: duplicamos la -n → running.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m3-l1-mt1',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "She ___ reading when I arrived."',
      promptTranslation: 'Ella estaba leyendo cuando llegué.',
      correctAnswer: 'was',
      options: ['was', 'were', 'is'],
      explanation: 'Con "she" usamos "was". → She was reading when I arrived.',
    },
    {
      id: 'a2-m3-l1-mt2',
      type: 'fill_blank',
      concept: 'verb + -ing',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "They were ___ football." (play)',
      promptTranslation: 'Ellos estaban jugando al fútbol.',
      correctAnswer: 'playing',
      acceptedAnswers: ['playing', 'Playing'],
      explanation: 'play → playing. → They were playing football.',
    },
    {
      id: 'a2-m3-l1-mt3',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 2,
      prompt: 'Completa: "We ___ having dinner at 9."',
      promptTranslation: 'Estábamos cenando a las 9.',
      correctAnswer: 'were',
      options: ['were', 'was', 'are'],
      explanation: 'Con "we" usamos "were". → We were having dinner at 9.',
    },
    {
      id: 'a2-m3-l1-mt4',
      type: 'translate',
      concept: 'past continuous affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Ellos estaban jugando al fútbol."',
      correctAnswer: 'They were playing football.',
      acceptedAnswers: ['They were playing football', 'They were playing football.', 'they were playing football'],
      acceptApproximate: true,
      explanation: '"Ellos estaban jugando" = They were playing (were + -ing), "al fútbol" = football.',
    },
    {
      id: 'a2-m3-l1-mt5',
      type: 'error_correction',
      concept: 'was / were',
      difficulty: 4,
      prompt: 'Corrige el error: "I were watching TV."',
      correctAnswer: 'I was watching TV.',
      acceptedAnswers: ['I was watching TV', 'I was watching TV.', 'i was watching TV'],
      acceptApproximate: true,
      explanation: 'Con "I" usamos "was", no "were". → I was watching TV.',
    },
  ],
  reviewItems: [],
  prerequisites: ['a2-m2-l5'],
}
