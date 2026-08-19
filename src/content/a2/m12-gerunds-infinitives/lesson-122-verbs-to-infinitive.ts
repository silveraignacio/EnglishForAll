import type { Lesson } from '../../types'

export const lesson122VerbsToInfinitive: Lesson = {
  id: 'a2-m12-l2',
  moduleId: 'm12-gerunds-infinitives',
  order: 1,
  title: 'Verbos + to + infinitivo: want, need, decide, hope...',
  objective: 'Usar verbos como want, need, decide, plan, hope y would like seguidos de "to" + verbo en infinitivo.',
  explanation_es: `En inglés, algunos verbos se construyen con "to" + infinitivo. Es decir, después del verbo añadimos "to" y luego el verbo en su forma base.

Los verbos más importantes que llevan "to + infinitivo":
- want → I want to learn English. = Quiero aprender inglés.
- need → I need to rest. = Necesito descansar.
- decide → She decided to move. = Ella decidió mudarse.
- plan → They plan to travel. = Ellos planean viajar.
- hope → We hope to see you soon. = Esperamos verte pronto.
- would like → I'd like to order. = Me gustaría pedir.

Regla: verbo + to + verbo(base):
- want + to learn, decide + to move, hope + to see...

¡OJO con estos errores típicos!
- ❌ I want learn English. → ✅ I want to learn English.
- ❌ I would like go. → ✅ I would like to go.`,
  examples: [
    { english: 'I want to learn English.', spanish: 'Quiero aprender inglés.', note: 'want + to + verbo' },
    { english: 'She decided to move to Valencia.', spanish: 'Ella decidió mudarse a Valencia.' },
    { english: 'We hope to see you soon.', spanish: 'Esperamos verte pronto.' },
    { english: "I'd like to order.", spanish: 'Me gustaría pedir.', note: "I'd like = I would like" },
    { english: 'They need to buy some food.', spanish: 'Necesitan comprar algo de comida.' },
    { english: 'He plans to start a new course.', spanish: 'Él planea empezar un curso nuevo.' },
  ],
  rule: `Regla:
- Después de want, need, decide, plan, hope y would like usamos "to" + verbo en infinitivo.
- Estructura: want/need/decide/plan/hope/would like + to + verbo.
- "I'd like" = "I would like" (forma educada de "quiero/quisiera").

Contraste con el módulo anterior: enjoy/hate/finish van con -ing; want/need/decide van con to + verbo.`,
  formation: {
    title: 'Cómo se forma "to" + infinitivo tras ciertos verbos',
    intro: 'Después de verbos como want, need, decide, plan, hope y would like usamos "to" + verbo en forma base. El "to" es obligatorio, nunca se omite.',
    patterns: [
      {
        name: 'Verbo + to + infinitivo',
        formula: 'sujeto + want/need/decide/plan/hope + to + verbo (forma base)',
        examples: [
          { english: 'I want to learn English.', spanish: 'Quiero aprender inglés.' },
          { english: 'She decided to move to Valencia.', spanish: 'Ella decidió mudarse a Valencia.' },
          { english: 'They need to buy some food.', spanish: 'Necesitan comprar algo de comida.' },
        ],
        note: 'El segundo verbo va SIEMPRE en forma base, después de "to": want to learn, decided to move.',
      },
      {
        name: 'would like + to + infinitivo',
        formula: 'sujeto + would like + to + verbo (forma base)',
        examples: [
          { english: 'I\'d like to order.', spanish: 'Me gustaría pedir.' },
          { english: 'We would like to see you soon.', spanish: 'Nos gustaría verte pronto.' },
        ],
        note: '"I\'d like" = "I would like". Es la forma educada de "quiero".',
      },
    ],
    notes: [
      'Nunca omitas el "to": ❌ I want learn English → ✅ I want to learn English.',
      'Contraste con el módulo anterior: enjoy/hate/finish van con -ing; want/need/decide van con to + verbo.',
      '"Would like" lleva "to": ❌ I would like go → ✅ I would like to go.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I want learn English.', correct: '✅ I want to learn English.', explanation: '"Want" necesita "to" antes del segundo verbo: want to learn.' },
    { wrong: '❌ I would like go.', correct: '✅ I would like to go.', explanation: '"Would like" se construye con "to" + verbo: would like to go.' },
    { wrong: '❌ She decided move.', correct: '✅ She decided to move.', explanation: '"Decide" también lleva "to" + verbo: decided to move.' },
  ],
  vocabulary: [
    { word: 'want', translation_es: 'querer', level: 'A1', category: 'verbs', partOfSpeech: 'verb', example: 'I want to learn English.', exampleTranslation: 'Quiero aprender inglés.' },
    { word: 'need', translation_es: 'necesitar', level: 'A1', category: 'verbs', partOfSpeech: 'verb', example: 'I need to rest.', exampleTranslation: 'Necesito descansar.' },
    { word: 'decide', translation_es: 'decidir', level: 'A2', category: 'verbs', partOfSpeech: 'verb', example: 'She decided to move.', exampleTranslation: 'Ella decidió mudarse.' },
    { word: 'hope', translation_es: 'esperar, tener esperanza', level: 'A2', category: 'verbs', partOfSpeech: 'verb', example: 'We hope to see you soon.', exampleTranslation: 'Esperamos verte pronto.' },
    { word: "I'd like", translation_es: 'me gustaría', level: 'A1', category: 'expressions', partOfSpeech: 'phrase', example: "I'd like to order.", exampleTranslation: 'Me gustaría pedir.' },
  ],
  grammarPoints: [
    {
      id: 'gp-verbs-to-infinitive',
      level: 'A2',
      name: 'Verbs + to + infinitive',
      explanation_es: 'Tras verbos como want, need, decide, plan, hope y would like usamos "to" + verbo en infinitivo.',
      formula: 'want/need/decide/plan/hope/would like + to + verb',
      examples: ['I want to learn English.', 'She decided to move.', 'We hope to see you soon.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m12-l2-ex1',
      type: 'multiple_choice',
      concept: 'verbs + to infinitive',
      difficulty: 1,
      prompt: 'Completa: "I want ___ English."',
      promptTranslation: 'Quiero aprender inglés.',
      correctAnswer: 'to learn',
      options: ['to learn', 'learn', 'learning'],
      explanation: '"Want" lleva "to" + verbo: want to learn.',
    },
    {
      id: 'a2-m12-l2-ex2',
      type: 'fill_blank',
      concept: 'verbs + to infinitive',
      difficulty: 2,
      prompt: 'Completa: "She decided ___."',
      promptTranslation: 'Ella decidió mudarse.',
      correctAnswer: 'to move',
      acceptedAnswers: ['to move', 'To move'],
      explanation: '"Decide" + to + verbo: decided to move.',
    },
    {
      id: 'a2-m12-l2-ex3',
      type: 'multiple_choice',
      concept: 'verbs + to infinitive',
      difficulty: 2,
      prompt: 'Completa: "We hope ___ you soon."',
      promptTranslation: 'Esperamos verte pronto.',
      correctAnswer: 'to see',
      options: ['to see', 'see', 'seeing'],
      explanation: '"Hope" + to + verbo: hope to see you soon.',
    },
    {
      id: 'a2-m12-l2-ex4',
      type: 'fill_blank',
      concept: 'verbs + to infinitive',
      difficulty: 2,
      prompt: 'Completa: "I\'d like ___."',
      promptTranslation: 'Me gustaría pedir.',
      correctAnswer: 'to order',
      acceptedAnswers: ['to order', 'To order'],
      explanation: '"Would like" + to + verbo: I\'d like to order.',
    },
    {
      id: 'a2-m12-l2-ex5',
      type: 'error_correction',
      concept: 'verbs + to infinitive',
      difficulty: 3,
      prompt: 'Corrige el error: "I want learn English."',
      promptTranslation: 'Quiero aprender inglés.',
      correctAnswer: 'I want to learn English.',
      acceptedAnswers: ['I want to learn English', 'I want to learn English.', 'i want to learn english'],
      acceptApproximate: true,
      explanation: '"Want" necesita "to" antes del segundo verbo: I want to learn English.',
    },
    {
      id: 'a2-m12-l2-ex6',
      type: 'error_correction',
      concept: 'verbs + to infinitive',
      difficulty: 3,
      prompt: 'Corrige el error: "I would like go to the cinema."',
      promptTranslation: 'Me gustaría ir al cine.',
      correctAnswer: 'I would like to go to the cinema.',
      acceptedAnswers: ['I would like to go to the cinema', "I'd like to go to the cinema", 'I would like to go to the cinema.', 'i would like to go to the cinema'],
      acceptApproximate: true,
      explanation: '"Would like" + to + verbo: would like to go. → I would like to go to the cinema.',
    },
    {
      id: 'a2-m12-l2-ex7',
      type: 'match',
      concept: 'verbs + to infinitive',
      difficulty: 2,
      prompt: 'Relaciona cada frase con su traducción.',
      promptTranslation: 'Match each sentence with its translation.',
      correctAnswer: 'I want to learn English.=Quiero aprender inglés; She decided to move.=Ella decidió mudarse; We hope to see you soon.=Esperamos verte pronto; I need to rest.=Necesito descansar; They plan to travel.=Planean viajar',
      pairs: [
        { left: 'I want to learn English.', right: 'Quiero aprender inglés.' },
        { left: 'She decided to move.', right: 'Ella decidió mudarse.' },
        { left: 'We hope to see you soon.', right: 'Esperamos verte pronto.' },
        { left: 'I need to rest.', right: 'Necesito descansar.' },
        { left: 'They plan to travel.', right: 'Planean viajar.' },
      ],
      explanation: 'Todos usan la estructura verbo + to + infinitivo: want, decide, hope, need y plan.',
    },
    {
      id: 'a2-m12-l2-ex8',
      type: 'translate',
      concept: 'verbs + to infinitive',
      difficulty: 3,
      prompt: 'Traduce: "Necesito descansar."',
      promptTranslation: 'I need to rest.',
      correctAnswer: 'I need to rest.',
      acceptedAnswers: ['I need to rest', 'I need to rest.', 'i need to rest'],
      acceptApproximate: true,
      explanation: '"Necesitar + verbo" = need to + verbo. → I need to rest.',
    },
    {
      id: 'a2-m12-l2-ex9',
      type: 'reorder',
      concept: 'verbs + to infinitive',
      difficulty: 3,
      prompt: 'Ordena las palabras: to / English / want / learn / I',
      promptTranslation: 'Quiero aprender inglés.',
      correctAnswer: 'I want to learn English.',
      words: ['I', 'want', 'to', 'learn', 'English'],
      explanation: 'Orden: sujeto + want + to + verbo + objeto. → I want to learn English.',
    },
    {
      id: 'a2-m12-l2-ex10',
      type: 'multiple_choice',
      concept: 'verbs + to infinitive',
      difficulty: 3,
      prompt: 'Completa: "They plan ___ next month."',
      promptTranslation: 'Ellos planean viajar el próximo mes.',
      correctAnswer: 'to travel',
      options: ['to travel', 'travel', 'traveling'],
      explanation: '"Plan" + to + verbo: plan to travel.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m12-l2-mt1',
      type: 'multiple_choice',
      concept: 'verbs + to infinitive',
      difficulty: 1,
      prompt: 'Completa: "We want ___ a new car."',
      promptTranslation: 'Queremos comprar un coche nuevo.',
      correctAnswer: 'to buy',
      options: ['to buy', 'buy', 'buying'],
      explanation: '"Want" + to + verbo: want to buy.',
    },
    {
      id: 'a2-m12-l2-mt2',
      type: 'fill_blank',
      concept: 'verbs + to infinitive',
      difficulty: 2,
      prompt: 'Completa: "He decided ___ his job."',
      promptTranslation: 'Él decidió cambiar de trabajo.',
      correctAnswer: 'to change',
      acceptedAnswers: ['to change', 'To change'],
      explanation: '"Decide" + to + verbo: decided to change.',
    },
    {
      id: 'a2-m12-l2-mt3',
      type: 'error_correction',
      concept: 'verbs + to infinitive',
      difficulty: 3,
      prompt: 'Corrige el error: "We hope see you soon."',
      promptTranslation: 'Esperamos verte pronto.',
      correctAnswer: 'We hope to see you soon.',
      acceptedAnswers: ['We hope to see you soon', 'We hope to see you soon.', 'we hope to see you soon'],
      acceptApproximate: true,
      explanation: '"Hope" necesita "to" antes del verbo: hope to see you soon.',
    },
    {
      id: 'a2-m12-l2-mt4',
      type: 'translate',
      concept: 'verbs + to infinitive',
      difficulty: 3,
      prompt: 'Traduce: "Ella decidió mudarse."',
      promptTranslation: 'She decided to move.',
      correctAnswer: 'She decided to move.',
      acceptedAnswers: ['She decided to move', 'She decided to move.', 'she decided to move'],
      acceptApproximate: true,
      explanation: '"Decidir + verbo" = decide to + verbo. → She decided to move.',
    },
    {
      id: 'a2-m12-l2-mt5',
      type: 'multiple_choice',
      concept: 'verbs + to infinitive',
      difficulty: 4,
      prompt: '¿Cuál es la forma correcta?',
      promptTranslation: 'Which is the correct form?',
      correctAnswer: "I'd like to order a coffee.",
      options: ["I'd like order a coffee.", "I'd like to order a coffee.", "I'd like ordering a coffee."],
      explanation: '"Would like" + to + verbo: I\'d like to order a coffee.',
    },
  ],
  reviewItems: ['a2-m12-l1'],
  prerequisites: ['a2-m12-l1'],
}
