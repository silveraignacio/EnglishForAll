import type { Lesson } from '../../types'

export const lesson73UnlessWhenIf: Lesson = {
  id: 'a2-m7-l3',
  moduleId: 'm7-conditionals',
  order: 2,
  title: 'Unless, when y if',
  objective: 'Usar "unless" (a menos que) y diferenciar "when" (cuando) de "if" (si).',
  explanation_es: `Vamos a aprender tres palabras que unen condiciones y resultados: unless, when e if.

### Unless = a menos que / si no

"Unless" es una forma negativa de decir "if... not". Significa "a menos que" o "si no".

- "Unless you study, you won't pass." = A menos que estudies, no aprobarás. (= Si no estudias, no aprobarás.)
- "You won't succeed unless you try." = No tendrás éxito a menos que lo intentes.

IMPORTANTE: "unless" YA es negativo. NO digas "unless you don't study". "Unless you study" ya significa "si no estudias".

Cuando usamos "unless", el resto del first conditional no cambia: la otra parte lleva will/won't.

### When vs If

- "when" = cuando. Lo usamos cuando estamos SEGUROS de que la situación pasará.
  - "When I get home, I'll eat." = Cuando llegue a casa, comeré. (Es casi seguro que llegaré a casa.)
- "if" = si. Lo usamos cuando hay una POSIBILIDAD, no certeza.
  - "If I get home early, I'll eat." = Si llego a casa temprano, comeré. (No es seguro que llegue temprano.)

La estructura es la misma que el first conditional: when/if/unless + presente simple, will + verbo.`,
  examples: [
    { english: "Unless you study, you won't pass.", spanish: 'A menos que estudies, no aprobarás.', note: 'unless = si no. Ya es negativo.' },
    { english: "You won't succeed unless you try.", spanish: 'No tendrás éxito a menos que lo intentes.', note: 'unless al final de la frase.' },
    { english: "When I get home, I'll eat.", spanish: 'Cuando llegue a casa, comeré.', note: 'when = casi seguro de que pasará.' },
    { english: "If I get home early, I'll eat.", spanish: 'Si llego a casa temprano, comeré.', note: 'if = solo una posibilidad.' },
    { english: "We'll go out unless it rains.", spanish: 'Saldremos a menos que llueva.', note: 'unless it rains = si no llueve.' },
    { english: 'If you visit Madrid, I\'ll show you the city.', spanish: 'Si visitas Madrid, te enseñaré la ciudad.', note: 'Posibilidad futura con if.' },
  ],
  rule: `Regla de unless, when e if:

- unless = a menos que / si no. Ya es negativo: unless you study = si no estudias. No añadimos "don't".
- when + presente simple = cuando (estamos seguros).
- if + presente simple = si (posibilidad).
- La estructura es la misma que el first conditional: (when/if/unless) + presente simple, will/won't + verbo.`,
  formation: {
    title: 'Cómo se forman unless, when e if',
    intro: 'Las tres unen una condición con un resultado futuro. La estructura es la misma: unless/when/if + presente simple, y en la otra parte will/won\'t + verbo.',
    patterns: [
      {
        name: 'unless (a menos que / si no)',
        formula: 'unless + presente simple, will/won\'t + verbo',
        examples: [
          { english: 'Unless you study, you won\'t pass.', spanish: 'A menos que estudies, no aprobarás.' },
          { english: 'You won\'t succeed unless you try.', spanish: 'No tendrás éxito a menos que lo intentes.' },
        ],
        note: '"Unless" ya es negativo (= if not): no añadas "don\'t". También puede ir al final de la frase.',
      },
      {
        name: 'when (cuando, casi seguro)',
        formula: 'when + presente simple, will + verbo',
        examples: [
          { english: 'When I get home, I\'ll eat.', spanish: 'Cuando llegue a casa, comeré.' },
          { english: 'When it stops raining, we\'ll go out.', spanish: 'Cuando deje de llover, saldremos.' },
        ],
        note: '"When" se usa cuando estamos seguros de que la situación pasará.',
      },
      {
        name: 'if (si, posibilidad)',
        formula: 'if + presente simple, will + verbo',
        examples: [
          { english: 'If I get home early, I\'ll eat.', spanish: 'Si llego a casa temprano, comeré.' },
          { english: 'If you visit Madrid, I\'ll show you the city.', spanish: 'Si visitas Madrid, te enseñaré la ciudad.' },
        ],
        note: '"If" expresa una posibilidad, no una certeza.',
      },
    ],
    notes: [
      'Después de unless, when e if usamos presente simple, nunca "will".',
      'when = casi seguro de que pasará. if = solo una posibilidad.',
      'unless + verbo en positivo ya significa "si no...": unless you study = si no estudias.',
    ],
  },
  commonMistakes: [
    { wrong: "❌ Unless you don't study, you won't pass.", correct: "✅ Unless you study, you won't pass.", explanation: '"Unless" ya significa "si no"; no añadimos "don\'t".' },
    { wrong: '❌ Unless you will study, you won\'t pass.', correct: "✅ Unless you study, you won't pass.", explanation: 'Tras "unless" usamos presente simple, no "will".' },
    { wrong: '❌ When I will get home, I\'ll eat.', correct: "✅ When I get home, I'll eat.", explanation: 'Tras "when" usamos presente simple: When I get home.' },
  ],
  vocabulary: [
    { word: 'unless', translation_es: 'a menos que', level: 'A2', category: 'grammar', partOfSpeech: 'conjunction', example: 'Unless you study, you won\'t pass.', exampleTranslation: 'A menos que estudies, no aprobarás.' },
    { word: 'when', translation_es: 'cuando', level: 'A2', category: 'grammar', partOfSpeech: 'conjunction', example: 'When I get home, I\'ll eat.', exampleTranslation: 'Cuando llegue a casa, comeré.' },
    { word: 'succeed', translation_es: 'tener éxito', level: 'A2', category: 'general', partOfSpeech: 'verb', example: "You won't succeed unless you try.", exampleTranslation: 'No tendrás éxito a menos que lo intentes.' },
    { word: 'try', translation_es: 'intentar', level: 'A2', category: 'general', partOfSpeech: 'verb', example: 'You should try again.', exampleTranslation: 'Deberías intentarlo de nuevo.' },
    { word: 'early', translation_es: 'temprano', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: 'If I get home early, I\'ll eat.', exampleTranslation: 'Si llego a casa temprano, comeré.' },
    { word: 'succeed', translation_es: 'éxito', level: 'A2', category: 'general', partOfSpeech: 'noun', example: 'Hard work brings success.', exampleTranslation: 'El trabajo duro trae éxito.' },
  ],
  grammarPoints: [
    {
      id: 'gp-unless',
      level: 'A2',
      name: 'unless',
      explanation_es: 'unless = a menos que / si no. Ya es negativo y va seguido de presente simple.',
      formula: "unless + present simple, will/won't + verb",
      examples: ["Unless you study, you won't pass.", "You won't succeed unless you try."],
    },
    {
      id: 'gp-when-vs-if',
      level: 'A2',
      name: 'when vs if',
      explanation_es: 'when = cuando (casi seguro). if = si (posibilidad).',
      formula: 'when/if + present simple, will + verb',
      examples: ["When I get home, I'll eat.", "If I get home early, I'll eat."],
    },
  ],
  exercises: [
    {
      id: 'a2-m7-l3-ex1',
      type: 'multiple_choice',
      concept: 'unless',
      difficulty: 1,
      prompt: "Completa: \"You won't pass ___ you study.\"",
      promptTranslation: 'No aprobarás a menos que estudies.',
      correctAnswer: 'unless',
      options: ['unless', 'if', 'when'],
      explanation: '"A menos que estudies" = unless you study. (unless = if not.)',
    },
    {
      id: 'a2-m7-l3-ex2',
      type: 'fill_blank',
      concept: 'unless',
      difficulty: 1,
      prompt: "Completa: \"You won't succeed ___ you try.\"",
      promptTranslation: 'No tendrás éxito a menos que lo intentes.',
      correctAnswer: 'unless',
      acceptedAnswers: ['unless', 'Unless'],
      explanation: '"A menos que lo intentes" = unless you try. Tras "unless" el verbo va en presente simple.',
    },
    {
      id: 'a2-m7-l3-ex3',
      type: 'multiple_choice',
      concept: 'when vs if',
      difficulty: 2,
      prompt: 'Completa: "___ I get home, I\'ll eat." (es casi seguro que llegaré a casa)',
      promptTranslation: 'Cuando llegue a casa, comeré.',
      correctAnswer: 'When',
      options: ['When', 'If', 'Unless'],
      explanation: 'Cuando estamos seguros de que algo pasará, usamos "when" (cuando).',
    },
    {
      id: 'a2-m7-l3-ex4',
      type: 'select_correct',
      concept: 'unless',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'A menos que estudies, no aprobarás.',
      correctAnswer: "Unless you study, you won't pass.",
      options: ["Unless you don't study, you won't pass.", 'Unless you will study, you won\'t pass.', "Unless you study, you won't pass."],
      explanation: '"Unless" ya es negativo: unless you study = si no estudias. Tras "unless" usamos presente simple.',
    },
    {
      id: 'a2-m7-l3-ex5',
      type: 'reorder',
      concept: 'unless',
      difficulty: 3,
      prompt: 'Ordena la frase:',
      promptTranslation: 'A menos que estudies, no aprobarás.',
      correctAnswer: "Unless you study, you won't pass.",
      words: ['Unless', 'you', 'study,', 'you', "won't", 'pass.'],
      explanation: 'Unless + presente simple (you study) → resultado negativo (you won\'t pass).',
    },
    {
      id: 'a2-m7-l3-ex6',
      type: 'true_false',
      concept: 'unless',
      difficulty: 3,
      prompt: '"Unless you don\'t study" is a correct sentence.',
      promptTranslation: '"A menos que no estudies" es una frase correcta.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'Falso', 'false.'],
      explanation: 'Es FALSO. "Unless" ya significa "si no"; añadir "don\'t" es un error. Correcto: Unless you study.',
    },
    {
      id: 'a2-m7-l3-ex7',
      type: 'translate',
      concept: 'unless',
      difficulty: 3,
      prompt: 'Traduce: "A menos que estudies, no aprobarás."',
      correctAnswer: "Unless you study, you won't pass.",
      acceptedAnswers: ["Unless you study, you won't pass", 'Unless you study you will not pass.', "Unless you study, you will not pass."],
      acceptApproximate: true,
      explanation: '"A menos que" = unless; "no aprobarás" = you won\'t pass. → Unless you study, you won\'t pass.',
    },
    {
      id: 'a2-m7-l3-ex8',
      type: 'match',
      concept: 'unless when if',
      difficulty: 3,
      prompt: 'Relaciona la primera parte con su continuación.',
      promptTranslation: 'Match the first part with its continuation.',
      correctAnswer: '',
      pairs: [
        { left: 'Unless you hurry,', right: 'we will miss the bus.' },
        { left: 'When I get home,', right: "I'll call you." },
        { left: 'If it snows tomorrow,', right: 'we will stay inside.' },
        { left: "You won't feel well", right: 'unless you rest.' },
        { left: 'If you need help,', right: "I'll be there." },
      ],
      explanation: 'unless = si no; when = cuando (seguro); if = si (posible). Todas siguen la estructura + presente simple → will.',
    },
    {
      id: 'a2-m7-l3-ex9',
      type: 'translate',
      concept: 'unless',
      difficulty: 4,
      prompt: 'Traduce: "No tendrás éxito a menos que lo intentes."',
      correctAnswer: "You won't succeed unless you try.",
      acceptedAnswers: ["You won't succeed unless you try", 'You will not succeed unless you try.', 'You won\'t succeed unless you try it.'],
      acceptApproximate: true,
      explanation: '"No tendrás éxito" = you won\'t succeed; "a menos que lo intentes" = unless you try.',
    },
    {
      id: 'a2-m7-l3-ex10',
      type: 'error_correction',
      concept: 'unless',
      difficulty: 4,
      prompt: 'Corrige el error: "Unless you don\'t study, you won\'t pass."',
      correctAnswer: "Unless you study, you won't pass.",
      acceptedAnswers: ["Unless you study, you won't pass", 'Unless you study you will not pass.'],
      acceptApproximate: true,
      explanation: '"Unless" ya significa "si no"; eliminamos "don\'t": Unless you study, you won\'t pass.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m7-l3-mt1',
      type: 'multiple_choice',
      concept: 'unless',
      difficulty: 1,
      prompt: 'Completa: "___ you rest, you won\'t feel well."',
      promptTranslation: 'A menos que descanses, no te sentirás bien.',
      correctAnswer: 'Unless',
      options: ['Unless', 'Because', 'So'],
      explanation: '"A menos que descanses" = unless you rest. (unless = if not.)',
    },
    {
      id: 'a2-m7-l3-mt2',
      type: 'multiple_choice',
      concept: 'when vs if',
      difficulty: 2,
      prompt: '¿Cuál usamos cuando estamos SEGUROS de que algo pasará?',
      promptTranslation: 'Which one do we use when we are SURE something will happen?',
      correctAnswer: 'when',
      options: ['when', 'if', 'unless'],
      explanation: '"When" (cuando) se usa para situaciones casi seguras. "If" (si) expresa solo una posibilidad.',
    },
    {
      id: 'a2-m7-l3-mt3',
      type: 'true_false',
      concept: 'unless',
      difficulty: 2,
      prompt: '"Unless" means "si no" / "a menos que".',
      promptTranslation: '"Unless" significa "si no" / "a menos que".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. "Unless" equivale a "if... not": unless you study = si no estudias.',
    },
    {
      id: 'a2-m7-l3-mt4',
      type: 'translate',
      concept: 'unless',
      difficulty: 3,
      prompt: 'Traduce: "Saldremos a menos que llueva."',
      correctAnswer: "We'll go out unless it rains.",
      acceptedAnswers: ['We will go out unless it rains', "We'll go out unless it rains", 'We will go out unless it rains.'],
      acceptApproximate: true,
      explanation: '"Saldremos" = we will go out (will); "a menos que llueva" = unless it rains.',
    },
    {
      id: 'a2-m7-l3-mt5',
      type: 'error_correction',
      concept: 'when vs if',
      difficulty: 4,
      prompt: 'Corrige el error: "When I will get home, I\'ll eat."',
      correctAnswer: "When I get home, I'll eat.",
      acceptedAnswers: ['When I get home, I will eat', "When I get home, I'll eat.", 'when I get home, I will eat.'],
      acceptApproximate: true,
      explanation: 'Tras "when" usamos presente simple, no "will": When I get home, I\'ll eat.',
    },
  ],
  reviewItems: ['a2-m7-l2'],
  prerequisites: ['a2-m7-l2'],
}
