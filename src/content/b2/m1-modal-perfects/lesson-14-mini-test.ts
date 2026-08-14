import type { Lesson } from '../../types'

export const lesson14MiniTest: Lesson = {
  id: 'b2-m1-l4',
  moduleId: 'm1-modal-perfects',
  order: 3,
  title: 'Mini-test: Modal Perfects & Be Expressions',
  objective: 'Repasar los modales de pasado (must have, can\'t have, may/might/could have) y las expresiones modales con "be" (supposed to, bound to, likely to, due to).',
  explanation_es: `Este mini-test repasa todo lo aprendido en el módulo de modales perfects.

Recuerda las claves:

1. Modales de pasado (deducción):
   - must have + participio: Estoy seguro de que algo SÍ pasó (pruebas fuertes).
   - can't have + participio: Estoy seguro de que algo NO pasó (imposible).
   - may/might/could have + participio: Es POSIBLE que haya pasado (sin certeza).

2. "Could have" tiene DOS usos:
   a) Posibilidad: He could have left (es posible que se haya ido).
   b) Arrepentimiento: You could have told me! (tenías la capacidad pero no lo hiciste).

3. Expresiones modales con "be" (presente/futuro):
   - be supposed to: Qué se ESPERA que hagas (expectativa).
   - be bound to: SEGURO que pasará (certeza futura).
   - be likely to / unlikely to: PROBABILIDAD.
   - be due to: Evento PROGRAMADO (calendarios).

4. Diferencias clave:
   - "Must have" (certeza pasada) ≠ "Must" (obligación presente).
   - "Be supposed to" (expectativa) ≠ "Must" (obligación más fuerte).
   - "Be bound to" (certeza futura) ≠ "Be likely to" (probabilidad, no certeza).
   - "Could have" + arrepentimiento vs. posibilidad (el contexto diferencia).

Resolvé estos ejercicios con cuidado y repasá cualquier concepto que no entiendas.`,
  examples: [
    { english: 'The lights are off. They must have left.', spanish: 'Las luces están apagadas. Deben de haberse ido.', note: 'Deducción segura sobre el pasado (prueba = luces apagadas).' },
    { english: 'She can\'t have forgotten, she wrote it down.', spanish: 'No puede haberse olvidado, lo escribió.', note: 'Negación segura sobre el pasado (imposible).' },
    { english: 'He might have taken the earlier train.', spanish: 'Podría haber tomado el tren más temprano.', note: 'Posibilidad sin certeza.' },
    { english: 'You could have told me about it!', spanish: '¡Me podrías haber dicho sobre eso!', note: 'Arrepentimiento: tenías la capacidad pero no lo hiciste.' },
    { english: 'You\'re supposed to be at work by 8 am.', spanish: 'Se espera que estés en el trabajo a las 8.', note: 'Expectativa presente.' },
    { english: 'If you study, you\'re bound to succeed.', spanish: 'Si estudiás, seguro que tenés éxito.', note: 'Certeza futura.' },
    { english: 'The meeting is likely to be postponed.', spanish: 'Es probable que la reunión se posponga.', note: 'Probabilidad.' },
  ],
  rule: `Repaso:

Modales de pasado (deducción):
- must have + participio: Certeza total (He must have left).
- can't have + participio: Certeza negativa (She can't have done it).
- may/might/could have + participio: Posibilidad (They may have arrived).

Expresiones con "be" (presente/futuro):
- be supposed to + infinitivo: Expectativa (You're supposed to call).
- be bound to + infinitivo: Certeza futura (You're bound to win).
- be likely to + infinitivo: Probabilidad (It's likely to rain).
- be due to + infinitivo: Programado (The meeting is due at 3).

Nunca: "mustn't have" para negar deducción; "would" después de "if"; mezclar modales sin razón.`,
  commonMistakes: [
    { wrong: '❌ He mustn\'t have seen the sign.', correct: '✅ He can\'t have seen the sign.', explanation: 'Para negar una deducción pasada, usamos "can\'t have", nunca "mustn\'t have".' },
    { wrong: '❌ She could of forgotten the keys.', correct: '✅ She could have forgotten the keys.', explanation: '"Could have", nunca "could of". "Have" es el auxiliar.' },
    { wrong: '❌ You\'re supposed arrive on time.', correct: '✅ You\'re supposed to arrive on time.', explanation: '"Supposed to" + infinitivo con "to": supposed to arrive.' },
    { wrong: '❌ It\'s likely happens tomorrow.', correct: '✅ It\'s likely to happen tomorrow.', explanation: '"Likely to" + infinitivo: likely to happen.' },
    { wrong: '❌ If I would have known, I would tell you.', correct: '✅ If I had known, I would have told you.', explanation: 'En hipótesis pasada: if + past perfect, would have + participio. Nunca "would" después de "if".' },
  ],
  vocabulary: [
    { word: 'deduction', translation_es: 'deducción', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'That\'s a logical deduction.', exampleTranslation: 'Esa es una deducción lógica.' },
    { word: 'to regret', translation_es: 'arrepentirse', level: 'B2', category: 'modals', partOfSpeech: 'verb', example: 'I regret not calling you.', exampleTranslation: 'Me arrepiento de no haberte llamado.' },
    { word: 'expectation', translation_es: 'expectativa', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'There\'s a high expectation.', exampleTranslation: 'Hay una alta expectativa.' },
    { word: 'bound', translation_es: 'destinado, seguro', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'Success is bound to come.', exampleTranslation: 'El éxito seguramente vendrá.' },
    { word: 'likely', translation_es: 'probable', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'It\'s likely to rain.', exampleTranslation: 'Es probable que llueva.' },
    { word: 'to schedule', translation_es: 'programar', level: 'B2', category: 'modals', partOfSpeech: 'verb', example: 'The meeting is scheduled for Friday.', exampleTranslation: 'La reunión está programada para el viernes.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-modal-perfects-review',
      level: 'B2',
      name: 'Modal perfects & be expressions (review)',
      explanation_es: 'Repaso de modales de pasado (must have, can\'t have, may/might/could have) y expresiones con "be" (supposed to, bound to, likely to, due to).',
      formula: 'must have / can\'t have / may have + past participle; be + modal expression + infinitive',
      examples: [
        'She must have left early.',
        'They couldn\'t have seen us.',
        'You\'re supposed to call by 5 pm.',
        'It\'s likely to rain tomorrow.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m1-l4-ex1',
      type: 'multiple_choice',
      concept: 'must have deduction',
      difficulty: 2,
      prompt: 'Completa: "The ground is wet. It ___ last night."',
      promptTranslation: 'El suelo está mojado. Debe de haber llovido anoche.',
      correctAnswer: 'must have rained',
      options: ['must have rained', 'may have rained', 'might have rained'],
      explanation: 'Prueba fuerte (suelo mojado) → "must have" (deducción segura).',
    },
    {
      id: 'b2-m1-l4-ex2',
      type: 'fill_blank',
      concept: 'cant have negation',
      difficulty: 3,
      prompt: 'Completa: "She ___ (see) us. She was asleep the whole time."',
      promptTranslation: 'No puede habernos visto. Estuvo dormida todo el tiempo.',
      correctAnswer: 'can\'t have seen',
      acceptedAnswers: ['can\'t have seen', 'couldn\'t have seen'],
      explanation: 'Deducción negativa segura: "can\'t have" o "couldn\'t have". → can\'t have seen.',
    },
    {
      id: 'b2-m1-l4-ex3',
      type: 'true_false',
      concept: 'could have two meanings',
      difficulty: 3,
      prompt: '"You could have told me!" expresa arrepentimiento: tenías la capacidad pero no lo hiciste.',
      correctAnswer: 'true',
      explanation: 'Correcto. En este contexto, "could have" + arrepentimiento = tenías la oportunidad/capacidad.',
    },
    {
      id: 'b2-m1-l4-ex4',
      type: 'multiple_choice',
      concept: 'be supposed to expectation',
      difficulty: 3,
      prompt: 'Completa: "You\'re ___ arrive at 9 am for the interview."',
      promptTranslation: 'Se espera que llegues a las 9 para la entrevista.',
      correctAnswer: 'supposed to',
      options: ['supposed to', 'bound to', 'likely to'],
      explanation: '"Supposed to" = expectativa (se espera). "Bound to" = certeza. "Likely to" = probabilidad.',
    },
    {
      id: 'b2-m1-l4-ex5',
      type: 'select_correct',
      concept: 'be bound to certainty',
      difficulty: 3,
      prompt: 'Si trabajás duro, ¿cuál frase expresa la MAYOR certeza sobre el resultado?',
      correctAnswer: 'You\'re bound to succeed.',
      options: ['You\'re likely to succeed.', 'You\'re bound to succeed.', 'You might succeed.'],
      explanation: '"Bound to" expresa certeza TOTAL. "Likely to" = probabilidad (más débil). "Might" = posibilidad (la más débil).',
    },
    {
      id: 'b2-m1-l4-ex6',
      type: 'error_correction',
      concept: 'may have vs must have',
      difficulty: 4,
      prompt: 'Corrige: "She must have forgotten about the meeting, but I\'m not sure."',
      correctAnswer: 'She may have forgotten about the meeting, but I\'m not sure.',
      acceptedAnswers: [
        'She may have forgotten about the meeting, but I\'m not sure',
        'She may have forgotten about the meeting, but I\'m not sure.',
        'She might have forgotten about the meeting, but I\'m not sure',
        'She might have forgotten about the meeting, but I\'m not sure.',
      ],
      acceptApproximate: true,
      explanation: 'Si no estás seguro, usas "may have" o "might have" (posibilidad), no "must have" (certeza).',
    },
    {
      id: 'b2-m1-l4-ex7',
      type: 'translate',
      concept: 'be due to scheduled',
      difficulty: 4,
      prompt: 'Traduce: "El examen está previsto para el próximo viernes."',
      correctAnswer: 'The exam is due next Friday.',
      acceptedAnswers: [
        'The exam is due next Friday',
        'The exam is due next Friday.',
        'The exam is due to be held next Friday',
        'The exam is due to be held next Friday.',
      ],
      acceptApproximate: true,
      explanation: '"Está previsto" = is due. "Para el próximo viernes" = next Friday.',
    },
    {
      id: 'b2-m1-l4-ex8',
      type: 'match',
      concept: 'modal expressions matching',
      difficulty: 4,
      prompt: 'Relaciona cada expresión con su significado:',
      pairs: [
        { left: 'must have left', right: 'deducción segura sobre el pasado' },
        { left: 'might have known', right: 'posibilidad sobre el pasado (sin certeza)' },
        { left: 'be supposed to call', right: 'expectativa de lo que se espera que hagas' },
        { left: 'be bound to win', right: 'certeza total de que ganará' },
        { left: 'be likely to rain', right: 'probabilidad de que llueva' },
      ],
      correctAnswer: '',
      explanation: 'Mustn\'t confundir deducción (must have) con expectativa (be supposed to), ni probabilidad (likely) con certeza (bound to).',
    },
    {
      id: 'b2-m1-l4-ex9',
      type: 'reorder',
      concept: 'modal expression word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Es muy probable que llueva mañana.',
      words: ['It\'s', 'very', 'likely', 'to', 'rain', 'tomorrow.'],
      correctAnswer: 'It\'s very likely to rain tomorrow.',
      explanation: 'Orden: subject + intensifier + likely to + verbo + tiempo. → It\'s very likely to rain tomorrow.',
    },
    {
      id: 'b2-m1-l4-ex10',
      type: 'true_false',
      concept: 'must have vs had to',
      difficulty: 3,
      prompt: '"He had to work late" y "He must have worked late" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. "Had to" = obligación pasada. "Must have" = deducción sobre el pasado. Significados muy diferentes.',
    },
  ],
  miniTest: [
    {
      id: 'b2-m1-l4-mt1',
      type: 'multiple_choice',
      concept: 'must have vs may have',
      difficulty: 3,
      prompt: 'Tenés pruebas: viste a Ana salir de casa. Completa: "Ana ___ home."',
      promptTranslation: 'Ana debe de haberse ido de casa.',
      correctAnswer: 'must have left',
      options: ['may have left', 'must have left', 'might have left'],
      explanation: 'Con pruebas fuertes → "must have". Sin certeza → "may/might have".',
    },
    {
      id: 'b2-m1-l4-mt2',
      type: 'error_correction',
      concept: 'be supposed to form',
      difficulty: 4,
      prompt: 'Corrige: "You are supposed arrive on time."',
      correctAnswer: 'You are supposed to arrive on time.',
      acceptedAnswers: [
        'You are supposed to arrive on time',
        'You are supposed to arrive on time.',
        'You\'re supposed to arrive on time',
        'You\'re supposed to arrive on time.',
      ],
      acceptApproximate: true,
      explanation: '"Supposed to" + infinitivo con "to": are supposed to arrive.',
    },
    {
      id: 'b2-m1-l4-mt3',
      type: 'fill_blank',
      concept: 'could have arrepentimiento',
      difficulty: 4,
      prompt: 'Completa con el significado de arrepentimiento: "You ___ (tell) me you were moving away!"',
      promptTranslation: '¡Me podrías haber dicho que te mudabas!',
      correctAnswer: 'could have told',
      acceptedAnswers: ['could have told'],
      explanation: '"Could have" + arrepentimiento: tenías la capacidad pero no lo hiciste. → could have told.',
    },
    {
      id: 'b2-m1-l4-mt4',
      type: 'select_correct',
      concept: 'likely vs bound to',
      difficulty: 3,
      prompt: '¿Cuál expresa MAYOR certeza sobre el futuro?',
      correctAnswer: 'You\'re bound to get the job.',
      options: ['You\'re likely to get the job.', 'You\'re bound to get the job.', 'You might get the job.'],
      explanation: '"Bound to" = certeza total. "Likely to" = probabilidad (más débil). "Might" = posibilidad (la más débil).',
    },
  ],
  reviewItems: ['b2-m1-l1', 'b2-m1-l2', 'b2-m1-l3'],
  prerequisites: ['b2-m1-l3'],
}
