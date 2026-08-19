import type { Lesson } from '../../types'

export const lesson62MayMight: Lesson = {
  id: 'a2-m6-l2',
  moduleId: 'm6-possibility',
  order: 1,
  title: '"May" y "might": expresar posibilidad',
  objective: 'Expresar posibilidad con "may" (más probable o formal) y "might" (menos probable).',
  explanation_es: `Para hablar de posibilidad usamos "may" y "might". Ambos significan "quizás", "puede que", "a lo mejor".

Estructura: Sujeto + may/might + verbo (sin "to")
- It may rain later. = Puede que llueva más tarde.
- She might be at home. = Puede que ella esté en casa.
- We might go to the beach this weekend. = A lo mejor vamos a la playa este fin de semana.

¿Cuál es la diferencia?
- MAY = un poco más probable, y más formal.
- MIGHT = menos probable, más incierto.

En muchas situaciones son intercambiables:
- It may rain. = Puede que llueva. (más probable)
- It might rain. = Puede que llueva (aunque no estoy seguro).

Ninguno de los dos cambia con la persona:
- I may, you may, he may, she may... siempre igual.
- Nunca llevan "to": may rain (no "may to rain").

Consejo práctico: cuando no sepas cuál elegir, "might" es la opción más segura para expresar duda.`,
  examples: [
    { english: 'It may rain later.', spanish: 'Puede que llueva más tarde.', note: 'may = posibilidad (más probable)' },
    { english: 'She might be at home.', spanish: 'Puede que ella esté en casa.', note: 'might = posibilidad menos segura' },
    { english: 'We might go to the beach this weekend.', spanish: 'A lo mejor vamos a la playa este fin de semana.', note: 'plan incierto' },
    { english: 'He may arrive late.', spanish: 'Puede que él llegue tarde.' },
    { english: 'They might not come.', spanish: 'A lo mejor no vienen.', note: "negativa: may not / might not" },
    { english: "I may study medicine next year.", spanish: 'Quizás estudie medicina el año que viene.' },
  ],
  rule: `Posibilidad: Sujeto + may/might + verbo (sin "to")
- It may rain. / She might be at home.

may = más probable / formal | might = menos probable / incierto

Negativa: may not / might not
- They might not come. = A lo mejor no vienen.

Nunca "to": ✅ may rain  ❌ may to rain
No cambian con la persona: ✅ she may  ❌ she mays`,
  formation: {
    title: 'Cómo se forma may / might',
    intro: 'may y might expresan posibilidad (quizás, puede que). may sugiere un poco más de probabilidad y es más formal; might es más incierto.',
    patterns: [
      {
        name: 'Afirmativo (posibilidad)',
        formula: 'Sujeto + may / might + verbo en forma base (sin "to") + complemento',
        examples: [
          { english: 'It may rain later.', spanish: 'Puede que llueva más tarde.' },
          { english: 'She might be at home.', spanish: 'Puede que ella esté en casa.' },
          { english: 'We might go to the beach this weekend.', spanish: 'A lo mejor vamos a la playa este fin de semana.' },
          { english: 'He may arrive late.', spanish: 'Puede que él llegue tarde.' },
        ],
        note: 'may/might no cambian con la persona (she may, no "she mays") y nunca llevan "to": may rain (no "may to rain").',
      },
      {
        name: 'Negativo (posibilidad negativa)',
        formula: 'Sujeto + may not / might not + verbo en forma base + complemento',
        examples: [
          { english: 'They might not come.', spanish: 'A lo mejor no vienen.' },
        ],
        note: 'la negativa se forma con may not / might not, sin contracción habitual.',
      },
    ],
    notes: [
      'may = más probable / más formal · might = menos probable / más incierto.',
      'Cuando no sepas cuál elegir para expresar duda, might es la opción más segura.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ It may to rain later.', correct: '✅ It may rain later.', explanation: 'Después de "may" el verbo va sin "to": may rain.' },
    { wrong: '❌ She might to be at home.', correct: '✅ She might be at home.', explanation: 'Después de "might" el verbo va sin "to": might be.' },
    { wrong: '❌ He mays arrive late.', correct: '✅ He may arrive late.', explanation: '"May" y "might" no añaden -s en tercera persona.' },
  ],
  vocabulary: [
    { word: 'possibility', translation_es: 'posibilidad', level: 'A2', category: 'possibility', partOfSpeech: 'noun', example: 'There is a possibility of rain.', exampleTranslation: 'Hay posibilidad de lluvia.' },
    { word: 'uncertain', translation_es: 'incierto, no seguro', level: 'A2', category: 'possibility', partOfSpeech: 'adjective', example: 'The plan is uncertain.', exampleTranslation: 'El plan es incierto.' },
    { word: 'beach', translation_es: 'playa', level: 'A1', category: 'possibility', partOfSpeech: 'noun', example: 'We might go to the beach.', exampleTranslation: 'A lo mejor vamos a la playa.' },
    { word: 'maybe', translation_es: 'quizás, a lo mejor', level: 'A2', category: 'possibility', partOfSpeech: 'adverb', example: 'Maybe she is at home.', exampleTranslation: 'Quizás esté en casa.' },
    { word: 'to be at home', translation_es: 'estar en casa', level: 'A1', category: 'possibility', partOfSpeech: 'verb phrase', example: 'She might be at home.', exampleTranslation: 'Puede que ella esté en casa.' },
  ],
  grammarPoints: [
    {
      id: 'gp-may-might',
      level: 'A2',
      name: 'May / might — possibility',
      explanation_es: '"May" y "might" expresan posibilidad. "May" sugiere un poco más de probabilidad y es más formal; "might" es menos probable. No cambian con la persona.',
      formula: 'Sujeto + may/might + verbo (sin "to")',
      examples: ['It may rain later.', 'She might be at home.', 'We might go to the beach.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m6-l2-ex1',
      type: 'multiple_choice',
      concept: 'may - possibility',
      difficulty: 1,
      prompt: 'Completa: "It ___ rain later." (posibilidad)',
      promptTranslation: 'Puede que llueva más tarde.',
      correctAnswer: 'may',
      options: ['may', 'mays', 'may to'],
      explanation: 'Posibilidad → may + verbo sin "to": It may rain later.',
    },
    {
      id: 'a2-m6-l2-ex2',
      type: 'fill_blank',
      concept: 'might - possibility',
      difficulty: 1,
      prompt: 'Completa: "She ___ be at home." (no estás seguro)',
      promptTranslation: 'Puede que ella esté en casa.',
      correctAnswer: 'might',
      acceptedAnswers: ['might', 'may', 'could'],
      explanation: '"Might" expresa posibilidad incierta: She might be at home.',
    },
    {
      id: 'a2-m6-l2-ex3',
      type: 'multiple_choice',
      concept: 'may vs might - probability',
      difficulty: 2,
      prompt: '¿Cuál de las dos suena MÁS probable?',
      correctAnswer: 'It may rain.',
      options: ['It may rain.', 'It might rain.', 'Ambas son prohibiciones.'],
      explanation: '"May" sugiere un poco más de probabilidad que "might".',
    },
    {
      id: 'a2-m6-l2-ex4',
      type: 'true_false',
      concept: 'may/might - no -s',
      difficulty: 2,
      prompt: '"She mays be tired" es correcta.',
      correctAnswer: 'false',
      explanation: 'Falso. "May" no añade -s: She may be tired.',
    },
    {
      id: 'a2-m6-l2-ex5',
      type: 'reorder',
      concept: 'might - sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras: the / go / beach / might / we / to / weekend / this',
      promptTranslation: 'A lo mejor vamos a la playa este fin de semana.',
      correctAnswer: 'We might go to the beach this weekend.',
      words: ['We', 'might', 'go', 'to', 'the', 'beach', 'this', 'weekend'],
      explanation: 'Orden: Sujeto + might + verbo + complemento: We might go to the beach this weekend.',
    },
    {
      id: 'a2-m6-l2-ex6',
      type: 'match',
      concept: 'possibility vocabulary',
      difficulty: 2,
      prompt: 'Relaciona cada palabra con su significado:',
      pairs: [
        { left: 'may', right: 'puede que (más probable)' },
        { left: 'might', right: 'a lo mejor (menos probable)' },
        { left: 'possibility', right: 'posibilidad' },
        { left: 'maybe', right: 'quizás' },
        { left: 'uncertain', right: 'incierto' },
        { left: 'beach', right: 'playa' },
      ],
      correctAnswer: 'may=puede que (más probable), might=a lo mejor (menos probable), possibility=posibilidad, maybe=quizás, uncertain=incierto, beach=playa',
      explanation: 'may=más probable, might=menos probable, possibility=posibilidad, maybe=quizás, uncertain=incierto, beach=playa.',
    },
    {
      id: 'a2-m6-l2-ex7',
      type: 'translate',
      concept: 'may - translate',
      difficulty: 3,
      prompt: 'Traduce: "Puede que llueva más tarde."',
      correctAnswer: 'It may rain later.',
      acceptedAnswers: ['It may rain later', 'It might rain later', 'It may rain later.', 'It might rain later.'],
      acceptApproximate: true,
      explanation: '"Puede que" → may/might + verbo sin "to": It may rain later.',
    },
    {
      id: 'a2-m6-l2-ex8',
      type: 'error_correction',
      concept: 'might - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "She might to be at home."',
      correctAnswer: 'She might be at home.',
      acceptedAnswers: ['She might be at home', 'She might be at home.', 'She may be at home', 'She may be at home.'],
      acceptApproximate: true,
      explanation: 'Después de "might" el verbo va sin "to": She might be at home.',
    },
    {
      id: 'a2-m6-l2-ex9',
      type: 'select_correct',
      concept: 'may/might - correct form',
      difficulty: 3,
      prompt: '¿Cuál de estas frases es correcta?',
      correctAnswer: 'He may arrive late.',
      options: ['He may arrive late.', 'He mays arrive late.', 'He may to arrive late.'],
      explanation: '"May" no añade -s ni "to": He may arrive late.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m6-l2-mt1',
      type: 'multiple_choice',
      concept: 'might - possibility',
      difficulty: 1,
      prompt: 'Completa: "We ___ go to the beach this weekend." (incierto)',
      promptTranslation: 'A lo mejor vamos a la playa este fin de semana.',
      correctAnswer: 'might',
      options: ['might', 'mights', 'might to'],
      explanation: 'Posibilidad incierta → might + verbo sin "to": We might go to the beach.',
    },
    {
      id: 'a2-m6-l2-mt2',
      type: 'fill_blank',
      concept: 'may - more likely',
      difficulty: 2,
      prompt: 'Completa: "It ___ snow tonight. There\'s a 70% chance."',
      promptTranslation: 'Puede que nieve esta noche. Hay un 70% de probabilidad.',
      correctAnswer: 'may',
      acceptedAnswers: ['may', 'might'],
      explanation: 'Con alta probabilidad, "may" es más adecuado que "might".',
    },
    {
      id: 'a2-m6-l2-mt3',
      type: 'translate',
      concept: 'might - translate',
      difficulty: 3,
      prompt: 'Traduce: "A lo mejor vamos a la playa este fin de semana."',
      correctAnswer: 'We might go to the beach this weekend.',
      acceptedAnswers: ['We might go to the beach this weekend', 'We may go to the beach this weekend', 'We might go to the beach this weekend.', 'We may go to the beach this weekend.'],
      acceptApproximate: true,
      explanation: '"A lo mejor" → might (o may): We might go to the beach this weekend.',
    },
    {
      id: 'a2-m6-l2-mt4',
      type: 'error_correction',
      concept: 'may - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "It may to rain later."',
      correctAnswer: 'It may rain later.',
      acceptedAnswers: ['It may rain later', 'It might rain later', 'It may rain later.', 'It might rain later.'],
      acceptApproximate: true,
      explanation: 'Después de "may" el verbo va sin "to": It may rain later.',
    },
    {
      id: 'a2-m6-l2-mt5',
      type: 'true_false',
      concept: 'may vs might',
      difficulty: 4,
      prompt: '"May" suele sonar más formal que "might".',
      correctAnswer: 'true',
      explanation: 'Verdadero. "May" es más formal y sugiere algo más probable; "might" es más informal e incierto.',
    },
  ],
  reviewItems: ['a2-m6-l1'],
  prerequisites: ['a2-m6-l1'],
}
