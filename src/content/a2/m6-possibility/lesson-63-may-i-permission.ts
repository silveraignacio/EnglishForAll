import type { Lesson } from '../../types'

export const lesson63MayIPermission: Lesson = {
  id: 'a2-m6-l3',
  moduleId: 'm6-possibility',
  order: 2,
  title: '"May I...?": pedir permiso de forma formal',
  objective: 'Pedir permiso de manera formal con "May I...?" y responder con "You may...".',
  explanation_es: `Para pedir permiso en situaciones formales usamos "May I...?" Significa "¿Puedo...?" o "¿Me permite...?" y suena mucho más educado y formal que "Can I...?".

- May I come in? = ¿Puedo pasar? (formal)
- May I ask a question? = ¿Puedo hacer una pregunta?

Para dar permiso formalmente respondemos:
- You may leave now. = Puede retirarse ahora (formal).

La escala de cortesía para pedir permiso:
1. Can I...? = informal (amigos, familia).
2. Could I...? = un poco más educado.
3. May I...? = formal (desconocidos, lugares formales, el profesor).

DIFERENCIA IMPORTANTE:
- "May I...?" se usa para pedir permiso para UNO MISMO (I).
- NO se dice "May you...?" para pedir permiso propio. "May you...?" no se usa así en inglés.

Estructura: May + I + verbo (sin "to")
- May I come in?
- May I ask a question?

Características: "may" no cambia con la persona y no lleva "to" después del verbo.`,
  examples: [
    { english: 'May I come in?', spanish: '¿Puedo pasar?', note: 'pedir permiso formal' },
    { english: 'May I ask a question?', spanish: '¿Puedo hacer una pregunta?', note: 'en clase o reunión' },
    { english: 'You may leave now.', spanish: 'Puede retirarse ahora.', note: 'dar permiso de forma formal' },
    { english: 'May I use your computer?', spanish: '¿Podría usar su ordenador?', note: 'formal' },
    { english: 'May I open the window?', spanish: '¿Podría abrir la ventana?', note: 'en un lugar formal' },
    { english: 'Yes, you may.', spanish: 'Sí, puede.', note: 'respuesta formal' },
  ],
  rule: `Pedir permiso (formal) → May + I + verbo?
- May I come in?
- May I ask a question?

Dar permiso (formal) → You may + verbo.
- You may leave now.

Nunca "May you...?" para pedir permiso propio.
Escala de cortesía: Can I? (informal) < Could I? < May I? (formal)`,
  formation: {
    title: 'Cómo se forma May I...? / Can I...? (permiso)',
    intro: 'Para pedir permiso usamos Can I...? (informal) o May I...? (formal). Para dar permiso formal, respondemos con You may...',
    patterns: [
      {
        name: 'Pregunta (pedir permiso)',
        formula: 'May / Can + I + verbo en forma base + ...?',
        examples: [
          { english: 'May I come in?', spanish: '¿Puedo pasar? (formal)' },
          { english: 'May I ask a question?', spanish: '¿Puedo hacer una pregunta?' },
          { english: 'Can I use your phone?', spanish: '¿Puedo usar tu teléfono? (informal)' },
          { english: 'May I open the window?', spanish: '¿Podría abrir la ventana? (formal)' },
        ],
        note: 'May I...? pide permiso para uno mismo (I). No se usa "May you...?" para pedir permiso propio.',
      },
      {
        name: 'Respuesta (dar permiso)',
        formula: 'You may + verbo en forma base. / Yes, you may. / No, you may not.',
        examples: [
          { english: 'You may leave now.', spanish: 'Puede retirarse ahora (formal).' },
          { english: 'Yes, you may.', spanish: 'Sí, puede.' },
        ],
        note: 'Forma formal. En contextos informales se responde con Can/Could o Of course!',
      },
    ],
    notes: [
      'Escala de cortesía: Can I...? (informal) < Could I...? (un poco más educado) < May I...? (formal).',
      'Después de may/can, el verbo va en forma base, sin "to": May I come in? (no "May I to come in").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ May you open the window? (para pedir permiso para ti)', correct: '✅ May I open the window?', explanation: '"May I...?" pide permiso para uno mismo. "May you...?" no se usa así.' },
    { wrong: '❌ May I to come in?', correct: '✅ May I come in?', explanation: 'Después de "may" el verbo va sin "to".' },
    { wrong: '❌ May I comes in?', correct: '✅ May I come in?', explanation: '"May" no añade -s al verbo.' },
  ],
  vocabulary: [
    { word: 'to come in', translation_es: 'entrar, pasar', level: 'A1', category: 'permission', partOfSpeech: 'phrasal verb', example: 'May I come in?', exampleTranslation: '¿Puedo pasar?' },
    { word: 'to leave', translation_es: 'irse, retirarse', level: 'A1', category: 'permission', partOfSpeech: 'verb', example: 'You may leave now.', exampleTranslation: 'Puede retirarse ahora.' },
    { word: 'formal', translation_es: 'formal', level: 'A2', category: 'permission', partOfSpeech: 'adjective', example: 'May is more formal than can.', exampleTranslation: '"May" es más formal que "can".' },
    { word: 'to ask', translation_es: 'preguntar', level: 'A1', category: 'permission', partOfSpeech: 'verb', example: 'May I ask a question?', exampleTranslation: '¿Puedo hacer una pregunta?' },
    { word: 'to allow', translation_es: 'permitir', level: 'A2', category: 'permission', partOfSpeech: 'verb', example: 'They allow photos.', exampleTranslation: 'Permiten fotos.' },
  ],
  grammarPoints: [
    {
      id: 'gp-may-i-permission',
      level: 'A2',
      name: 'May I...? — formal permission',
      explanation_es: '"May I...?" pide permiso de forma formal. Se usa para uno mismo. Para dar permiso formal: "You may...".',
      formula: 'May + I + verbo ...? | You may + verbo.',
      examples: ['May I come in?', 'May I ask a question?', 'You may leave now.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m6-l3-ex1',
      type: 'multiple_choice',
      concept: 'may I - formal permission',
      difficulty: 1,
      prompt: 'Completa: "___ I come in?"',
      promptTranslation: '¿Puedo pasar?',
      correctAnswer: 'May',
      options: ['May', 'Mays', 'May I to'],
      explanation: 'Pedir permiso formal → May + I + verbo: May I come in?',
    },
    {
      id: 'a2-m6-l3-ex2',
      type: 'fill_blank',
      concept: 'may I - question',
      difficulty: 1,
      prompt: 'Completa: "May I ___ a question?" (preguntar)',
      promptTranslation: '¿Puedo hacer una pregunta?',
      correctAnswer: 'ask',
      acceptedAnswers: ['ask'],
      explanation: '"To ask" = preguntar. → May I ask a question?',
    },
    {
      id: 'a2-m6-l3-ex3',
      type: 'multiple_choice',
      concept: 'may I - not "may you"',
      difficulty: 2,
      prompt: 'Quieres pedir permiso formal para abrir la ventana. ¿Qué dices?',
      correctAnswer: 'May I open the window?',
      options: ['May I open the window?', 'May you open the window?', 'May I to open the window?'],
      explanation: '"May I...?" pide permiso para uno mismo. No decimos "May you...?" en este sentido.',
    },
    {
      id: 'a2-m6-l3-ex4',
      type: 'true_false',
      concept: 'may - formal',
      difficulty: 2,
      prompt: '"May I...?" es más formal que "Can I...?".',
      correctAnswer: 'true',
      explanation: 'Verdadero. "May I...?" es la forma más formal de pedir permiso.',
    },
    {
      id: 'a2-m6-l3-ex5',
      type: 'reorder',
      concept: 'may I - question order',
      difficulty: 2,
      prompt: 'Ordena las palabras: use / I / your / computer / may',
      promptTranslation: '¿Podría usar su ordenador?',
      correctAnswer: 'May I use your computer?',
      words: ['May', 'I', 'use', 'your', 'computer'],
      explanation: 'May + I + verbo + complemento: May I use your computer?',
    },
    {
      id: 'a2-m6-l3-ex6',
      type: 'match',
      concept: 'permission forms',
      difficulty: 2,
      prompt: 'Relaciona cada expresión con su nivel de formalidad:',
      pairs: [
        { left: 'Can I...?', right: 'informal' },
        { left: 'Could I...?', right: 'un poco más educado' },
        { left: 'May I...?', right: 'formal' },
        { left: 'You may leave now.', right: 'dar permiso (formal)' },
        { left: 'Yes, you may.', right: 'respuesta formal' },
        { left: 'Of course!', right: 'respuesta informal' },
      ],
      correctAnswer: 'Can I?=informal, Could I?=más educado, May I?=formal, You may leave=dar permiso formal, Yes you may=respuesta formal, Of course=respuesta informal',
      explanation: 'Can I?=informal, Could I?=más educado, May I?=formal. "You may" y "Yes, you may" son respuestas formales.',
    },
    {
      id: 'a2-m6-l3-ex7',
      type: 'translate',
      concept: 'may I - translate',
      difficulty: 3,
      prompt: 'Traduce: "¿Puedo hacer una pregunta?" (formal)',
      correctAnswer: 'May I ask a question?',
      acceptedAnswers: ['May I ask a question', 'May I ask a question?', 'Can I ask a question?', 'Could I ask a question?'],
      acceptApproximate: true,
      explanation: 'Formal → May I + verbo: May I ask a question?',
    },
    {
      id: 'a2-m6-l3-ex8',
      type: 'error_correction',
      concept: 'may I - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "May I to come in?"',
      correctAnswer: 'May I come in?',
      acceptedAnswers: ['May I come in', 'May I come in?', 'Can I come in?'],
      acceptApproximate: true,
      explanation: 'Después de "may" el verbo va sin "to": May I come in?',
    },
    {
      id: 'a2-m6-l3-ex9',
      type: 'select_correct',
      concept: 'may - give permission',
      difficulty: 3,
      prompt: 'Un profesor da permiso formal a un alumno para salir. ¿Qué dice?',
      correctAnswer: 'You may leave now.',
      options: ['You may leave now.', 'May you leave now.', 'You may to leave now.'],
      explanation: 'Dar permiso formal → You may + verbo: You may leave now.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m6-l3-mt1',
      type: 'multiple_choice',
      concept: 'may I - formal',
      difficulty: 1,
      prompt: 'Completa: "___ I ask a question?"',
      promptTranslation: '¿Puedo hacer una pregunta?',
      correctAnswer: 'May',
      options: ['May', 'Mays', 'May to'],
      explanation: 'Formal → May + I + verbo: May I ask a question?',
    },
    {
      id: 'a2-m6-l3-mt2',
      type: 'fill_blank',
      concept: 'may I - self permission',
      difficulty: 2,
      prompt: 'Completa: "May ___ use your computer?"',
      promptTranslation: '¿Podría usar su ordenador?',
      correctAnswer: 'I',
      acceptedAnswers: ['I'],
      explanation: '"May I...?" pide permiso para uno mismo. Nunca "May you...?" para esto.',
    },
    {
      id: 'a2-m6-l3-mt3',
      type: 'translate',
      concept: 'may - translate',
      difficulty: 3,
      prompt: 'Traduce: "Puede retirarse ahora." (formal)',
      correctAnswer: 'You may leave now.',
      acceptedAnswers: ['You may leave now', 'You may leave now.', 'You can leave now', 'You can leave now.'],
      acceptApproximate: true,
      explanation: 'Dar permiso formal → You may + verbo: You may leave now.',
    },
    {
      id: 'a2-m6-l3-mt4',
      type: 'error_correction',
      concept: 'may I - not "may you"',
      difficulty: 4,
      prompt: 'Corrige el error: "May you ask a question?" (pides permiso para ti)',
      correctAnswer: 'May I ask a question?',
      acceptedAnswers: ['May I ask a question', 'May I ask a question?', 'Can I ask a question?', 'Could I ask a question?'],
      acceptApproximate: true,
      explanation: 'Para pedir permiso para uno mismo usamos "May I...?", no "May you...?".',
    },
    {
      id: 'a2-m6-l3-mt5',
      type: 'true_false',
      concept: 'may - formal',
      difficulty: 4,
      prompt: '"May I...?" es la forma más informal de pedir permiso.',
      correctAnswer: 'false',
      explanation: 'Falso. "May I...?" es la forma más FORMAL. "Can I...?" es la informal.',
    },
  ],
  reviewItems: ['a2-m6-l2'],
  prerequisites: ['a2-m6-l2'],
}
