import type { Lesson } from '../../types'

export const lesson51Must: Lesson = {
  id: 'a2-m5-l1',
  moduleId: 'm5-obligation',
  order: 0,
  title: '"Must" y "mustn\'t": obligación y prohibición',
  objective: 'Expresar obligación fuerte con "must" y prohibición con "mustn\'t".',
  explanation_es: `"Must" es un verbo modal que expresa una obligación fuerte. Equivale a "hay que", "tener que" (de forma muy fuerte) o "debe(s)".

Estructura: Sujeto + must + verbo (sin "to")

- You must wear a seatbelt. = Tienes que llevar el cinturón de seguridad.
- I must study for the exam. = Tengo que estudiar para el examen.

La NEGATIVA de "must" es "mustn't" (must not) y significa PROHIBICIÓN:
- You mustn't smoke here. = Está prohibido fumar aquí. / No debes fumar aquí.

Cuidado con la diferencia:
- must = obligación (hay que hacerlo).
- mustn't = prohibición (está prohibido hacerlo).

Características de "must":
1. No cambia con la persona: I must, you must, he must, she must... siempre igual.
2. Nunca lleva "to": must go (no "must to go").
3. La negativa es "mustn't", nunca "don't must".

En español, "must" es más fuerte que "should" (deberías) y que "have to" (tener que, obligación a menudo externa). Lo veremos en las próximas lecciones.`,
  examples: [
    { english: 'You must wear a seatbelt.', spanish: 'Tienes que llevar el cinturón de seguridad.', note: 'obligación fuerte (norma de seguridad)' },
    { english: "You mustn't smoke here.", spanish: 'Está prohibido fumar aquí.', note: "mustn't = prohibición" },
    { english: 'I must study for the exam.', spanish: 'Tengo que estudiar para el examen.', note: 'obligación personal fuerte' },
    { english: 'You must be quiet in the library.', spanish: 'Hay que estar en silencio en la biblioteca.' },
    { english: "You mustn't tell anyone.", spanish: 'No debes contárselo a nadie.', note: 'prohibición: no lo hagas' },
    { english: 'She must finish the report today.', spanish: 'Ella tiene que terminar el informe hoy.' },
  ],
  rule: `Sujeto + must + verbo (sin "to")
- I must study. / She must study. (nunca "must to" ni "musts")

Prohibición: Sujeto + mustn't + verbo
- You mustn't smoke here. = Está prohibido fumar aquí.

Pregunta: Must + sujeto + verbo?
- Must I pay now? = ¿Debo pagar ahora?

must = obligación | mustn't = prohibición`,
  formation: {
    title: 'Cómo se forma must / mustn\'t',
    intro: 'must expresa obligación fuerte y mustn\'t (must not) expresa prohibición. Ambos van seguidos del verbo en forma base, sin "to".',
    patterns: [
      {
        name: 'Afirmativo (obligación)',
        formula: 'Sujeto + must + verbo en forma base (sin "to") + complemento',
        examples: [
          { english: 'You must wear a seatbelt.', spanish: 'Tienes que llevar el cinturón de seguridad.' },
          { english: 'I must study for the exam.', spanish: 'Tengo que estudiar para el examen.' },
          { english: 'She must finish the report today.', spanish: 'Ella tiene que terminar el informe hoy.' },
        ],
        note: 'must no cambia con la persona (I must, she must) y nunca lleva "to": must study (no "must to study").',
      },
      {
        name: 'Negativo (prohibición)',
        formula: 'Sujeto + mustn\'t + verbo en forma base (sin "to") + complemento',
        examples: [
          { english: "You mustn't smoke here.", spanish: 'Está prohibido fumar aquí.' },
          { english: "You mustn't tell anyone.", spanish: 'No debes contárselo a nadie.' },
        ],
        note: `mustn't = must not y significa PROHIBICIÓN, no "ausencia de obligación". Nunca "don't must".`,
      },
      {
        name: 'Pregunta',
        formula: 'Must + sujeto + verbo en forma base + ...?',
        examples: [
          { english: 'Must I pay now?', spanish: '¿Debo pagar ahora?' },
        ],
      },
    ],
    notes: [
      'must = obligación (hay que hacerlo) · mustn\'t = prohibición (está prohibido hacerlo).',
      'No confundir con don\'t have to (no es obligatorio): eso lo verás en la próxima lección.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ You must to wear a seatbelt.', correct: '✅ You must wear a seatbelt.', explanation: 'Después de "must" el verbo va sin "to": must wear.' },
    { wrong: "❌ You don't must smoke here.", correct: "✅ You mustn't smoke here.", explanation: 'La negativa de "must" es "mustn\'t", no "don\'t must".' },
    { wrong: '❌ She musts go now.', correct: '✅ She must go now.', explanation: '"Must" no añade -s en tercera persona.' },
  ],
  vocabulary: [
    { word: 'obligation', translation_es: 'obligación', level: 'A2', category: 'obligation', partOfSpeech: 'noun', example: 'Wearing a seatbelt is an obligation.', exampleTranslation: 'Llevar el cinturón es una obligación.' },
    { word: 'prohibition', translation_es: 'prohibición', level: 'A2', category: 'obligation', partOfSpeech: 'noun', example: "Smoking here is a prohibition.", exampleTranslation: 'Fumar aquí está prohibido.' },
    { word: 'seatbelt', translation_es: 'cinturón de seguridad', level: 'A2', category: 'obligation', partOfSpeech: 'noun', example: 'You must wear a seatbelt.', exampleTranslation: 'Tienes que llevar el cinturón de seguridad.' },
    { word: 'to smoke', translation_es: 'fumar', level: 'A2', category: 'obligation', partOfSpeech: 'verb', example: "You mustn't smoke here.", exampleTranslation: 'Está prohibido fumar aquí.' },
    { word: 'quiet', translation_es: 'silencioso, en silencio', level: 'A1', category: 'obligation', partOfSpeech: 'adjective', example: 'You must be quiet in the library.', exampleTranslation: 'Hay que estar en silencio en la biblioteca.' },
  ],
  grammarPoints: [
    {
      id: 'gp-must',
      level: 'A2',
      name: 'Must — obligation',
      explanation_es: '"Must" expresa una obligación fuerte (hay que...). No cambia con la persona y va seguido del verbo sin "to".',
      formula: 'Sujeto + must + verbo (sin "to")',
      examples: ['You must wear a seatbelt.', 'I must study for the exam.'],
    },
    {
      id: 'gp-mustnt',
      level: 'A2',
      name: "Mustn't — prohibition",
      explanation_es: '"Mustn\'t" (must not) expresa prohibición: está prohibido hacer algo. No confundir con "don\'t have to" (no es obligatorio).',
      formula: "Sujeto + mustn't + verbo",
      examples: ["You mustn't smoke here.", "You mustn't tell anyone."],
    },
  ],
  exercises: [
    {
      id: 'a2-m5-l1-ex1',
      type: 'multiple_choice',
      concept: 'must - obligation',
      difficulty: 1,
      prompt: 'Completa: "You ___ wear a seatbelt."',
      promptTranslation: 'Tienes que llevar el cinturón de seguridad.',
      correctAnswer: 'must',
      options: ['must', 'must to', 'musts'],
      explanation: 'Después de "must" el verbo va sin "to": You must wear a seatbelt.',
    },
    {
      id: 'a2-m5-l1-ex2',
      type: 'fill_blank',
      concept: "mustn't - prohibition",
      difficulty: 1,
      prompt: 'Completa: "You ___ smoke here." (prohibido)',
      promptTranslation: 'Está prohibido fumar aquí.',
      correctAnswer: "mustn't",
      acceptedAnswers: ["mustn't", 'must not', "mustn't smoke"],
      explanation: "La prohibición se expresa con \"mustn't\": You mustn't smoke here.",
    },
    {
      id: 'a2-m5-l1-ex3',
      type: 'multiple_choice',
      concept: 'must vs mustn\'t',
      difficulty: 2,
      prompt: '¿Qué significa "You mustn\'t be late."?',
      correctAnswer: 'Está prohibido llegar tarde / No debes llegar tarde.',
      options: ['Está prohibido llegar tarde / No debes llegar tarde.', 'Es obligatorio llegar tarde.', 'Puedes llegar tarde si quieres.'],
      explanation: "\"Mustn't\" expresa prohibición: no debes llegar tarde.",
    },
    {
      id: 'a2-m5-l1-ex4',
      type: 'true_false',
      concept: 'must - no -s',
      difficulty: 2,
      prompt: '"She musts finish the report" es correcta.',
      correctAnswer: 'false',
      explanation: 'Falso. "Must" no añade -s: She must finish the report.',
    },
    {
      id: 'a2-m5-l1-ex5',
      type: 'reorder',
      concept: 'must - sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras: study / must / the / I / for / exam',
      promptTranslation: 'Tengo que estudiar para el examen.',
      correctAnswer: 'I must study for the exam.',
      words: ['I', 'must', 'study', 'for', 'the', 'exam'],
      explanation: 'Orden: Sujeto + must + verbo + complemento: I must study for the exam.',
    },
    {
      id: 'a2-m5-l1-ex6',
      type: 'match',
      concept: 'obligation vocabulary',
      difficulty: 2,
      prompt: 'Relaciona cada palabra con su significado:',
      pairs: [
        { left: 'must', right: 'hay que / obligación' },
        { left: "mustn't", right: 'prohibido' },
        { left: 'seatbelt', right: 'cinturón de seguridad' },
        { left: 'to smoke', right: 'fumar' },
        { left: 'quiet', right: 'en silencio' },
        { left: 'obligation', right: 'obligación' },
      ],
      correctAnswer: 'must=hay que, mustn\'t=prohibido, seatbelt=cinturón de seguridad, to smoke=fumar, quiet=en silencio, obligation=obligación',
      explanation: 'must=hay que, mustn\'t=prohibido, seatbelt=cinturón, to smoke=fumar, quiet=en silencio, obligation=obligación.',
    },
    {
      id: 'a2-m5-l1-ex7',
      type: 'translate',
      concept: 'must - translate',
      difficulty: 3,
      prompt: 'Traduce: "Tengo que estudiar para el examen."',
      correctAnswer: 'I must study for the exam.',
      acceptedAnswers: ['I must study for the exam', 'I have to study for the exam', 'I must study for the exam.', 'I have to study for the exam.'],
      acceptApproximate: true,
      explanation: '"Tengo que" → must (obligación fuerte). → I must study for the exam.',
    },
    {
      id: 'a2-m5-l1-ex8',
      type: 'error_correction',
      concept: 'must - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "You must to be quiet in the library."',
      correctAnswer: 'You must be quiet in the library.',
      acceptedAnswers: ['You must be quiet in the library', 'You must be quiet in the library.', 'You have to be quiet in the library', 'You have to be quiet in the library.'],
      acceptApproximate: true,
      explanation: 'Después de "must" el verbo va sin "to": You must be quiet in the library.',
    },
    {
      id: 'a2-m5-l1-ex9',
      type: 'select_correct',
      concept: 'must vs mustn\'t',
      difficulty: 3,
      prompt: 'Estás en un hospital. ¿Cuál es la frase correcta?',
      correctAnswer: "You mustn't smoke here.",
      options: ["You mustn't smoke here.", 'You must smoke here.', "You don't must smoke here."],
      explanation: 'Fumar en el hospital está prohibido → mustn\'t. La forma "don\'t must" no existe.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m5-l1-mt1',
      type: 'multiple_choice',
      concept: 'must - obligation',
      difficulty: 1,
      prompt: 'Completa: "I ___ study for the exam."',
      promptTranslation: 'Tengo que estudiar para el examen.',
      correctAnswer: 'must',
      options: ['must', 'musts', 'must to'],
      explanation: 'Con "I" usamos "must" + verbo sin "to": I must study.',
    },
    {
      id: 'a2-m5-l1-mt2',
      type: 'fill_blank',
      concept: 'must - prohibition',
      difficulty: 2,
      prompt: 'Completa: "You ___ tell anyone." (prohibido)',
      promptTranslation: 'No debes contárselo a nadie.',
      correctAnswer: "mustn't",
      acceptedAnswers: ["mustn't", 'must not'],
      explanation: "Prohibición → \"mustn't\": You mustn't tell anyone.",
    },
    {
      id: 'a2-m5-l1-mt3',
      type: 'translate',
      concept: 'must - translate',
      difficulty: 3,
      prompt: 'Traduce: "Está prohibido fumar aquí."',
      correctAnswer: "You mustn't smoke here.",
      acceptedAnswers: ["You mustn't smoke here", "Smoking is forbidden here", "You mustn't smoke here.", 'Smoking is not allowed here', 'Smoking is not allowed here.'],
      acceptApproximate: true,
      explanation: "Prohibición → \"mustn't\": You mustn't smoke here.",
    },
    {
      id: 'a2-m5-l1-mt4',
      type: 'error_correction',
      concept: 'must - no -s',
      difficulty: 3,
      prompt: 'Corrige el error: "She musts wear the uniform."',
      correctAnswer: 'She must wear the uniform.',
      acceptedAnswers: ['She must wear the uniform', 'She must wear the uniform.', 'She has to wear the uniform', 'She has to wear the uniform.'],
      acceptApproximate: true,
      explanation: '"Must" no añade -s con he/she: She must wear the uniform.',
    },
    {
      id: 'a2-m5-l1-mt5',
      type: 'true_false',
      concept: 'must vs mustn\'t',
      difficulty: 4,
      prompt: '"Mustn\'t" significa que no es obligatorio hacer algo.',
      correctAnswer: 'false',
      explanation: 'Falso. "Mustn\'t" significa prohibición (no lo hagas). "No es obligatorio" se dice con "don\'t have to".',
    },
  ],
  reviewItems: ['a2-m4-l5'],
  workbookRefs: [
    { levelId: 'a2', page: 5, exercises: [1, 2, 3, 5], note: 'Práctica de must, have to y don\'t have to' },
  ],
  prerequisites: ['a2-m4-l5'],
}
