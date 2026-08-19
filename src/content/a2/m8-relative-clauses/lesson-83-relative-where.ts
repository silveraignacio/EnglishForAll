import type { Lesson } from '../../types'

export const lesson83RelativeWhere: Lesson = {
  id: 'a2-m8-l3',
  moduleId: 'm8-relative-clauses',
  order: 2,
  title: 'Oraciones relativas de lugar: where',
  objective: 'Definir lugares con la palabra relativa "where".',
  explanation_es: `Para definir lugares usamos la palabra relativa "where" (= donde).

- "This is the city where I was born." = Esta es la ciudad donde nací.
- "The restaurant where we ate is famous." = El restaurante donde comimos es famoso.
- "That's the park where I play football." = Ese es el parque donde juego al fútbol.

La estructura es:

> lugar + where + sujeto + verbo

- the city + where + I was born.
- the park + where + I play football.
- the restaurant + where + we ate.

OJO con las preposiciones: "where" ya incluye la idea de "en/ donde". NO añadimos una preposición extra al final:
- ❌ the city where I was born in → ✅ the city where I was born.
- ❌ the park where I play football in → ✅ the park where I play football.
- (Otra forma, más formal: "the city in which I was born". Pero "where" es la forma natural y más común.)

Para lugares usamos "where", no "which":
- ❌ The restaurant which we ate is famous. (queriendo decir "donde") → ✅ The restaurant where we ate is famous.`,
  examples: [
    { english: 'This is the city where I was born.', spanish: 'Esta es la ciudad donde nací.', note: 'lugar + where + frase.' },
    { english: 'The restaurant where we ate is famous.', spanish: 'El restaurante donde comimos es famoso.', note: 'where define el restaurante.' },
    { english: "That's the park where I play football.", spanish: 'Ese es el parque donde juego al fútbol.', note: 'sin preposición extra al final.' },
    { english: 'The school where she teaches is very old.', spanish: 'La escuela donde ella enseña es muy antigua.', note: 'where + she teaches.' },
    { english: 'This is the shop where I buy my bread.', spanish: 'Esta es la tienda donde compro mi pan.', note: 'where = en la que / donde.' },
    { english: 'The office where I work is near my home.', spanish: 'La oficina donde trabajo está cerca de mi casa.', note: 'donde trabajo = where I work.' },
  ],
  rule: `Regla de "where":

- where = donde (para lugares).
- Estructura: lugar + where + sujeto + verbo.
- NO añadir preposición extra: ❌ where I was born in → ✅ where I was born.
- Para lugares usamos where, no which/who.`,
  formation: {
    title: 'Cómo se forman las relativas de lugar con where',
    intro: 'Para definir lugares usamos la palabra relativa "where" (= donde). "Where" ya incluye la preposición de lugar, así que no añadimos "in" ni "at" al final.',
    patterns: [
      {
        name: 'Lugar (where)',
        formula: 'lugar + where + sujeto + verbo',
        examples: [
          { english: 'This is the city where I was born.', spanish: 'Esta es la ciudad donde nací.' },
          { english: 'The restaurant where we ate is famous.', spanish: 'El restaurante donde comimos es famoso.' },
          { english: 'That\'s the park where I play football.', spanish: 'Ese es el parque donde juego al fútbol.' },
        ],
        note: 'where + sujeto + verbo: the city where I was born, the park where I play.',
      },
    ],
    notes: [
      'No añadas una preposición extra: ❌ where I was born in → ✅ where I was born.',
      'Para lugares usamos "where", no "which": ❌ the restaurant which we ate (queriendo decir "donde").',
      'Otra forma más formal es "in which", pero "where" es la forma natural y más común.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ This is the city where I was born in.', correct: '✅ This is the city where I was born.', explanation: '"Where" ya significa "en donde". No añadimos "in" al final.' },
    { wrong: "❌ That's the park where I play football in.", correct: "✅ That's the park where I play football.", explanation: 'No añadimos "in" después del verbo. "Where" ya lo incluye.' },
    { wrong: '❌ The restaurant which we ate is famous.', correct: '✅ The restaurant where we ate is famous.', explanation: 'Para lugares usamos "where", no "which".' },
  ],
  vocabulary: [
    { word: 'city', translation_es: 'ciudad', level: 'A2', category: 'places', partOfSpeech: 'noun', example: 'This is the city where I was born.', exampleTranslation: 'Esta es la ciudad donde nací.' },
    { word: 'born', translation_es: 'nacido/a', level: 'A2', category: 'life events', partOfSpeech: 'adjective', example: 'I was born in a small town.', exampleTranslation: 'Nací en un pueblo pequeño.' },
    { word: 'famous', translation_es: 'famoso/a', level: 'A2', category: 'description', partOfSpeech: 'adjective', example: 'The restaurant where we ate is famous.', exampleTranslation: 'El restaurante donde comimos es famoso.' },
    { word: 'teach', translation_es: 'enseñar', level: 'A2', category: 'education', partOfSpeech: 'verb', example: 'The school where she teaches is very old.', exampleTranslation: 'La escuela donde ella enseña es muy antigua.' },
    { word: 'near', translation_es: 'cerca de', level: 'A2', category: 'places', partOfSpeech: 'preposition', example: 'The office where I work is near my home.', exampleTranslation: 'La oficina donde trabajo está cerca de mi casa.' },
  ],
  grammarPoints: [
    {
      id: 'gp-relative-where',
      level: 'A2',
      name: 'Relative clauses: where',
      explanation_es: 'where define lugares y ya incluye la preposición de lugar.',
      formula: 'place + where + subject + verb',
      examples: ['This is the city where I was born.', "That's the park where I play football."],
    },
  ],
  exercises: [
    {
      id: 'a2-m8-l3-ex1',
      type: 'multiple_choice',
      concept: 'relative clauses where',
      difficulty: 1,
      prompt: 'Completa: "This is the city ___ I was born."',
      promptTranslation: 'Esta es la ciudad donde nací.',
      correctAnswer: 'where',
      options: ['where', 'who', 'which'],
      explanation: 'Para lugares usamos "where". → the city where I was born.',
    },
    {
      id: 'a2-m8-l3-ex2',
      type: 'fill_blank',
      concept: 'relative clauses where',
      difficulty: 1,
      prompt: "Completa: \"That's the park ___ I play football.\"",
      promptTranslation: 'Ese es el parque donde juego al fútbol.',
      correctAnswer: 'where',
      acceptedAnswers: ['where', 'Where'],
      explanation: '"El parque donde" = the park where. Usamos "where" para lugares.',
    },
    {
      id: 'a2-m8-l3-ex3',
      type: 'multiple_choice',
      concept: 'relative clauses where',
      difficulty: 2,
      prompt: 'Completa: "The restaurant ___ we ate is famous."',
      promptTranslation: 'El restaurante donde comimos es famoso.',
      correctAnswer: 'where',
      options: ['where', 'which', 'who'],
      explanation: 'Para lugares usamos "where": the restaurant where we ate.',
    },
    {
      id: 'a2-m8-l3-ex4',
      type: 'reorder',
      concept: 'relative clauses where',
      difficulty: 2,
      prompt: 'Ordena la frase:',
      promptTranslation: 'Esta es la ciudad donde nací.',
      correctAnswer: 'This is the city where I was born.',
      words: ['This', 'is', 'the', 'city', 'where', 'I', 'was', 'born.'],
      explanation: 'This is the city + where + I was born. (Sin preposición extra al final.)',
    },
    {
      id: 'a2-m8-l3-ex5',
      type: 'select_correct',
      concept: 'relative clauses where',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'Esta es la ciudad donde nací.',
      correctAnswer: 'This is the city where I was born.',
      options: ['This is the city where I was born.', 'This is the city where I was born in.', 'This is the city which I was born in.'],
      explanation: '"Where" ya incluye "en donde". No añadimos "in" al final. La forma con "which...in" es aceptable pero menos natural.',
    },
    {
      id: 'a2-m8-l3-ex6',
      type: 'error_correction',
      concept: 'relative clauses where',
      difficulty: 3,
      prompt: 'Corrige el error: "This is the city where I was born in."',
      correctAnswer: 'This is the city where I was born.',
      acceptedAnswers: ['This is the city where I was born', 'This is the city where I was born.', 'This is the city in which I was born.'],
      acceptApproximate: true,
      explanation: 'No añadimos "in" al final. "Where" ya significa "en donde". (También correcto: the city in which I was born.)',
    },
    {
      id: 'a2-m8-l3-ex7',
      type: 'match',
      concept: 'relative clauses where',
      difficulty: 3,
      prompt: 'Relaciona cada comienzo con su final.',
      promptTranslation: 'Match each beginning with its ending.',
      correctAnswer: '',
      pairs: [
        { left: 'This is the city', right: 'where I was born.' },
        { left: 'The restaurant where we ate', right: 'is famous.' },
        { left: "That's the park", right: 'where I play football.' },
        { left: 'The school where she teaches', right: 'is very old.' },
        { left: 'This is the shop', right: 'where I buy my bread.' },
      ],
      explanation: 'Cada relativa con "where" describe un lugar (ciudad, restaurante, parque, escuela, tienda).',
    },
    {
      id: 'a2-m8-l3-ex8',
      type: 'translate',
      concept: 'relative clauses where',
      difficulty: 3,
      prompt: 'Traduce: "Esta es la ciudad donde nací."',
      correctAnswer: 'This is the city where I was born.',
      acceptedAnswers: ['This is the city where I was born', 'This is the city where I was born.', 'This is the city in which I was born.'],
      acceptApproximate: true,
      explanation: '"Esta es la ciudad donde nací" = This is the city where I was born.',
    },
    {
      id: 'a2-m8-l3-ex9',
      type: 'translate',
      concept: 'relative clauses where',
      difficulty: 4,
      prompt: 'Traduce: "El restaurante donde comimos es famoso."',
      correctAnswer: 'The restaurant where we ate is famous.',
      acceptedAnswers: ['The restaurant where we ate is famous', 'The restaurant where we ate is famous.', 'the restaurant where we ate is famous.'],
      acceptApproximate: true,
      explanation: '"El restaurante donde comimos" = the restaurant where we ate; "es famoso" = is famous.',
    },
    {
      id: 'a2-m8-l3-ex10',
      type: 'error_correction',
      concept: 'relative clauses where',
      difficulty: 4,
      prompt: "Corrige el error: \"That's the park where I play football in.\"",
      correctAnswer: "That's the park where I play football.",
      acceptedAnswers: ["That's the park where I play football", 'That is the park where I play football.', "That's the park where I play football."],
      acceptApproximate: true,
      explanation: 'No añadimos "in" al final. "Where" ya incluye la preposición de lugar.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m8-l3-mt1',
      type: 'multiple_choice',
      concept: 'relative clauses where',
      difficulty: 1,
      prompt: 'Completa: "The school ___ she teaches is very old."',
      promptTranslation: 'La escuela donde ella enseña es muy antigua.',
      correctAnswer: 'where',
      options: ['where', 'who', 'that'],
      explanation: 'Para lugares usamos "where": the school where she teaches.',
    },
    {
      id: 'a2-m8-l3-mt2',
      type: 'fill_blank',
      concept: 'relative clauses where',
      difficulty: 2,
      prompt: 'Completa: "The office ___ I work is near my home."',
      promptTranslation: 'La oficina donde trabajo está cerca de mi casa.',
      correctAnswer: 'where',
      acceptedAnswers: ['where', 'Where'],
      explanation: '"La oficina donde trabajo" = the office where I work.',
    },
    {
      id: 'a2-m8-l3-mt3',
      type: 'true_false',
      concept: 'relative clauses where',
      difficulty: 2,
      prompt: '"We use "where" for places."',
      promptTranslation: 'Usamos "where" para lugares.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. "Where" (donde) se usa para definir lugares.',
    },
    {
      id: 'a2-m8-l3-mt4',
      type: 'translate',
      concept: 'relative clauses where',
      difficulty: 3,
      prompt: 'Traduce: "Ese es el parque donde juego al fútbol."',
      correctAnswer: "That's the park where I play football.",
      acceptedAnswers: ["That's the park where I play football", 'That is the park where I play football.', "That's the park where I play football."],
      acceptApproximate: true,
      explanation: '"Ese es el parque" = that\'s the park; "donde juego al fútbol" = where I play football.',
    },
    {
      id: 'a2-m8-l3-mt5',
      type: 'error_correction',
      concept: 'relative clauses where',
      difficulty: 4,
      prompt: 'Corrige el error: "This is the city where I was born in."',
      correctAnswer: 'This is the city where I was born.',
      acceptedAnswers: ['This is the city where I was born', 'This is the city where I was born.', 'This is the city in which I was born.'],
      acceptApproximate: true,
      explanation: 'No añadimos "in" al final. "Where" ya significa "en donde".',
    },
  ],
  reviewItems: ['a2-m8-l2'],
  prerequisites: ['a2-m8-l2'],
}
