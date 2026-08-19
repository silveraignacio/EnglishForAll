import type { Lesson } from '../../types'

export const lesson61CanCould: Lesson = {
  id: 'a2-m6-l1',
  moduleId: 'm6-possibility',
  order: 0,
  title: '"Can" y "could" para habilidad y peticiones',
  objective: 'Repasar "can" para habilidad y permiso, e introducir "could" como forma más educada de pedir.',
  explanation_es: `En el nivel A1 ya viste "can" para habilidad (saber hacer algo) y para pedir cosas. Ahora vamos a repasarlo y a añadir una forma más educada: "could".

"Can" se usa para:
1. Habilidad (saber hacer algo):
   I can swim. = Sé nadar.
2. Peticiones y permiso (informal):
   Can I use your phone? = ¿Puedo usar tu teléfono?
   Can you help me? = ¿Puedes ayudarme?

"Could" se usa para:
1. Peticiones más educadas y formales:
   Could I open the window, please? = ¿Podría abrir la ventana, por favor?
   Could you help me? = ¿Podrías ayudarme?

La diferencia principal entre "Can you...?" y "Could you...?" es de cortesía. "Could" suena más educado y respetuoso.

Características de "can" y "could":
1. No cambian con la persona: I can, she can, he could...
2. Nunca llevan "to": can help (no "can to help").
3. No añaden -s: she can (no "she cans").

Estructura: Sujeto + can/could + verbo (sin "to")`,
  examples: [
    { english: 'Can I use your phone?', spanish: '¿Puedo usar tu teléfono?', note: 'pedir permiso (informal)' },
    { english: 'Could I open the window, please?', spanish: '¿Podría abrir la ventana, por favor?', note: 'petición más educada' },
    { english: 'Could you help me?', spanish: '¿Podrías ayudarme?', note: 'could + you = más cortés' },
    { english: 'I can swim.', spanish: 'Sé nadar.', note: 'habilidad' },
    { english: 'She could call the office.', spanish: 'Ella podría llamar a la oficina.', note: 'posibilidad (otro uso de could)' },
    { english: "Can you pass me the salt?", spanish: '¿Me pasas la sal?', note: 'petición cotidiana' },
  ],
  rule: `Habilidad / permiso / petición → can + verbo
- I can swim. / Can I use your phone? / Can you help me?

Petición educada → could + verbo
- Could I open the window? / Could you help me?

Nunca "to" después de can/could, y nunca -s:
✅ She can swim.  ❌ She cans swim.
✅ He could help. ❌ He could to help.`,
  formation: {
    title: 'Cómo se forma can / could',
    intro: 'can expresa habilidad, permiso y peticiones; could es la versión más educada para peticiones y también expresa posibilidad. Ambos van seguidos del verbo en forma base, sin "to".',
    patterns: [
      {
        name: 'Afirmativo (habilidad / posibilidad)',
        formula: 'Sujeto + can / could + verbo en forma base (sin "to") + complemento',
        examples: [
          { english: 'I can swim.', spanish: 'Sé nadar.' },
          { english: 'She can speak two languages.', spanish: 'Ella sabe hablar dos idiomas.' },
          { english: 'She could call the office.', spanish: 'Ella podría llamar a la oficina.' },
        ],
        note: 'can/could no cambian con la persona (she can, no "she cans") y nunca llevan "to": can help (no "can to help").',
      },
      {
        name: 'Pregunta (petición / permiso)',
        formula: 'Can / Could + I / you + verbo en forma base + ...?',
        examples: [
          { english: 'Can I use your phone?', spanish: '¿Puedo usar tu teléfono?' },
          { english: 'Can you help me?', spanish: '¿Puedes ayudarme?' },
          { english: 'Could I open the window, please?', spanish: '¿Podría abrir la ventana, por favor?' },
          { english: 'Could you help me?', spanish: '¿Podrías ayudarme?' },
        ],
        note: 'Can I...?/Can you...? = directo e informal. Could I...?/Could you...? = más educado y respetuoso.',
      },
    ],
    notes: [
      'La diferencia entre Can you...? y Could you...? es de cortesía: could suena más formal.',
      'Para responder a una petición: Yes, I can. / Sure. / Of course. (en negativo: Sorry, I can\'t).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ Could you to help me?', correct: '✅ Could you help me?', explanation: 'Después de "could" el verbo va sin "to": could help.' },
    { wrong: '❌ She cans swim.', correct: '✅ She can swim.', explanation: '"Can" no añade -s en tercera persona.' },
    { wrong: '❌ I can to drive.', correct: '✅ I can drive.', explanation: '"Can" + verbo sin "to".' },
  ],
  vocabulary: [
    { word: 'polite', translation_es: 'educado, cortés', level: 'A2', category: 'permission', partOfSpeech: 'adjective', example: 'Could is more polite than can.', exampleTranslation: '"Could" es más educado que "can".' },
    { word: 'request', translation_es: 'petición', level: 'A2', category: 'permission', partOfSpeech: 'noun', example: 'This is a polite request.', exampleTranslation: 'Esta es una petición educada.' },
    { word: 'permission', translation_es: 'permiso', level: 'A2', category: 'permission', partOfSpeech: 'noun', example: 'Can I have permission to leave?', exampleTranslation: '¿Puedo tener permiso para irme?' },
    { word: 'to help', translation_es: 'ayudar', level: 'A1', category: 'permission', partOfSpeech: 'verb', example: 'Could you help me?', exampleTranslation: '¿Podrías ayudarme?' },
    { word: 'please', translation_es: 'por favor', level: 'A1', category: 'permission', partOfSpeech: 'adverb', example: 'Could I open the window, please?', exampleTranslation: '¿Podría abrir la ventana, por favor?' },
  ],
  grammarPoints: [
    {
      id: 'gp-can-review',
      level: 'A2',
      name: 'Can — ability, permission, requests',
      explanation_es: '"Can" expresa habilidad (sé hacer algo), permiso y peticiones. Es la forma más directa e informal.',
      formula: 'Sujeto + can + verbo (sin "to")',
      examples: ['I can swim.', 'Can I use your phone?', 'Can you help me?'],
    },
    {
      id: 'gp-could-polite',
      level: 'A2',
      name: 'Could — polite requests',
      explanation_es: '"Could" es la versión más educada de "can" para peticiones y permiso. Suena más respetuoso y formal.',
      formula: 'Could + I/you + verbo ...?',
      examples: ['Could I open the window, please?', 'Could you help me?'],
    },
  ],
  exercises: [
    {
      id: 'a2-m6-l1-ex1',
      type: 'multiple_choice',
      concept: 'can - ability',
      difficulty: 1,
      prompt: 'Completa: "I ___ swim." (habilidad)',
      promptTranslation: 'Sé nadar.',
      correctAnswer: 'can',
      options: ['can', 'cans', 'can to'],
      explanation: 'Habilidad → can + verbo sin "to": I can swim.',
    },
    {
      id: 'a2-m6-l1-ex2',
      type: 'multiple_choice',
      concept: 'could - polite request',
      difficulty: 1,
      prompt: 'Quieres pedir ayuda de forma muy educada. ¿Qué dices?',
      correctAnswer: 'Could you help me?',
      options: ['Could you help me?', 'Could you to help me?', 'Cans you help me?'],
      explanation: '"Could you...?" es una petición educada. Después va el verbo sin "to".',
    },
    {
      id: 'a2-m6-l1-ex3',
      type: 'fill_blank',
      concept: 'could - polite',
      difficulty: 2,
      prompt: 'Completa: "___ I open the window, please?"',
      promptTranslation: '¿Podría abrir la ventana, por favor?',
      correctAnswer: 'Could',
      acceptedAnswers: ['Could', 'Can', 'could'],
      explanation: '"Could I...?" es una forma muy educada de pedir permiso.',
    },
    {
      id: 'a2-m6-l1-ex4',
      type: 'true_false',
      concept: 'could - more polite',
      difficulty: 2,
      prompt: '"Could you help me?" es más educado que "Can you help me?".',
      correctAnswer: 'true',
      explanation: 'Verdadero. "Could" suena más cortés y respetuoso que "can" en las peticiones.',
    },
    {
      id: 'a2-m6-l1-ex5',
      type: 'reorder',
      concept: 'could - question order',
      difficulty: 2,
      prompt: 'Ordena las palabras: the / salt / you / pass / could / me',
      promptTranslation: '¿Podrías pasarme la sal?',
      correctAnswer: 'Could you pass me the salt?',
      words: ['Could', 'you', 'pass', 'me', 'the', 'salt'],
      explanation: 'Petición educada: Could + you + verbo + complemento.',
    },
    {
      id: 'a2-m6-l1-ex6',
      type: 'match',
      concept: 'can/could - functions',
      difficulty: 2,
      prompt: 'Relaciona cada frase con su función:',
      pairs: [
        { left: 'I can swim.', right: 'habilidad' },
        { left: 'Can I use your phone?', right: 'pedir permiso (informal)' },
        { left: 'Could I open the window?', right: 'pedir permiso (educado)' },
        { left: 'Could you help me?', right: 'pedir ayuda (educado)' },
        { left: 'Can you help me?', right: 'pedir ayuda (informal)' },
        { left: 'She could call the office.', right: 'posibilidad' },
      ],
      correctAnswer: 'I can swim.=habilidad, Can I use your phone?=permiso informal, Could I open the window?=permiso educado, Could you help me?=ayuda educado, Can you help me?=ayuda informal, She could call.=posibilidad',
      explanation: 'can=habilidad/permiso informal; could=petición educada o posibilidad.',
    },
    {
      id: 'a2-m6-l1-ex7',
      type: 'translate',
      concept: 'could - translate',
      difficulty: 3,
      prompt: 'Traduce: "¿Podrías ayudarme?"',
      correctAnswer: 'Could you help me?',
      acceptedAnswers: ['Could you help me', 'Could you help me?', 'Can you help me?'],
      acceptApproximate: true,
      explanation: '"¿Podrías...?" → Could you...? (más educado que Can you...?).',
    },
    {
      id: 'a2-m6-l1-ex8',
      type: 'error_correction',
      concept: 'could - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "Could you to open the window?"',
      correctAnswer: 'Could you open the window?',
      acceptedAnswers: ['Could you open the window', 'Could you open the window?', 'Could you open the window, please?'],
      acceptApproximate: true,
      explanation: 'Después de "could" el verbo va sin "to": Could you open the window?',
    },
    {
      id: 'a2-m6-l1-ex9',
      type: 'select_correct',
      concept: 'can - no -s',
      difficulty: 3,
      prompt: '¿Cuál de estas frases es correcta?',
      correctAnswer: 'She can drive a car.',
      options: ['She can drive a car.', 'She cans drive a car.', 'She can to drive a car.'],
      explanation: '"Can" no añade -s ni "to": She can drive a car.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m6-l1-mt1',
      type: 'multiple_choice',
      concept: 'can - ability',
      difficulty: 1,
      prompt: 'Completa: "She ___ speak two languages." (habilidad)',
      promptTranslation: 'Ella sabe hablar dos idiomas.',
      correctAnswer: 'can',
      options: ['can', 'cans', 'can to'],
      explanation: 'Habilidad → can + verbo sin "to": She can speak two languages.',
    },
    {
      id: 'a2-m6-l1-mt2',
      type: 'fill_blank',
      concept: 'could - polite',
      difficulty: 2,
      prompt: 'Completa: "___ you help me, please?" (muy educado)',
      promptTranslation: '¿Podrías ayudarme, por favor?',
      correctAnswer: 'Could',
      acceptedAnswers: ['Could', 'Can', 'could'],
      explanation: '"Could you...?" es la forma más educada de pedir ayuda.',
    },
    {
      id: 'a2-m6-l1-mt3',
      type: 'translate',
      concept: 'can - translate',
      difficulty: 3,
      prompt: 'Traduce: "¿Puedo usar tu teléfono?"',
      correctAnswer: 'Can I use your phone?',
      acceptedAnswers: ['Can I use your phone', 'Can I use your phone?', 'Could I use your phone?'],
      acceptApproximate: true,
      explanation: 'Pedir permiso → Can I...? (o Could I...? más educado).',
    },
    {
      id: 'a2-m6-l1-mt4',
      type: 'error_correction',
      concept: 'can - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "I can to swim."',
      correctAnswer: 'I can swim.',
      acceptedAnswers: ['I can swim', 'I can swim.'],
      acceptApproximate: true,
      explanation: 'Después de "can" el verbo va sin "to": I can swim.',
    },
    {
      id: 'a2-m6-l1-mt5',
      type: 'true_false',
      concept: 'could - more formal',
      difficulty: 4,
      prompt: '"Could" suena más educado que "can" en las peticiones.',
      correctAnswer: 'true',
      explanation: 'Verdadero. "Could" es la forma más cortés y formal para hacer peticiones.',
    },
  ],
  reviewItems: ['a2-m5-l4'],
  prerequisites: ['a2-m5-l4'],
}
