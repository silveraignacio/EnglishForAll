import type { Lesson } from '../../types'

export const lesson44PresentContinuousFutureShall: Lesson = {
  id: 'a2-m4-l4',
  moduleId: 'm4-future-forms',
  order: 3,
  title: 'Present continuous para planes y "shall"',
  objective: 'Usar el present continuous para planes ya fijados (agenda) y "shall" para sugerencias y ofertas.',
  explanation_es: `En inglés hay una tercera forma de hablar del futuro: el present continuous (to be + verbo + -ing). Lo usamos para planes YA FIJADOS, con día y hora concretos. Son citas, reservas, vuelos... cosas que ya están en la agenda.

Estructura: Sujeto + to be (am/is/are) + verbo + -ing

- I'm meeting my friends tomorrow at 7. = Quedo con mis amigos mañana a las 7.
- We're flying to London on Friday. = Volamos a Londres el viernes.

Se usa con marcadores de tiempo como: tomorrow, on Friday, at 7, next week, this weekend.

Diferencias rápidas:
- going to = plan e intención (a veces sin fecha concreta).
- present continuous = plan fijado (con fecha, hora, reserva).
- En muchos casos son casi iguales: "I'm going to see the doctor" ≈ "I'm seeing the doctor". La diferencia es lo concreto que está el plan.

Por otro lado, "shall" se usa para sugerencias y ofertas, PERO solo con "I" y "we":
- Shall I open the window? = ¿Abro la ventana?
- Shall we go to the cinema? = ¿Vamos al cine?

Ojo: "shall" nunca se usa con "you", "he", "she" para este sentido. Es similar a "should" en escritura, pero el significado es diferente.`,
  examples: [
    { english: "I'm meeting my friends tomorrow at 7.", spanish: 'Quedo con mis amigos mañana a las 7.', note: 'plan fijado con hora → present continuous' },
    { english: "We're flying to London on Friday.", spanish: 'Volamos a Londres el viernes.', note: 'viaje ya reservado' },
    { english: 'Shall I open the window?', spanish: '¿Abro la ventana?', note: 'shall I? = ofrecimiento' },
    { english: 'Shall we go to the cinema?', spanish: '¿Vamos al cine?', note: 'shall we? = sugerencia' },
    { english: "She's having dinner with her parents tonight.", spanish: 'Ella cena con sus padres esta noche.', note: 'cita ya acordada' },
    { english: 'They are arriving at 6 p.m.', spanish: 'Ellos llegan a las 6 de la tarde.', note: 'horario fijado' },
  ],
  rule: `Plan fijado (agenda) → present continuous: Sujeto + to be + verbo + -ing
- I'm meeting my friends tomorrow at 7.
- We're flying to London on Friday.

Sugerencias y ofertas → shall + I / we
- Shall I open the window? (ofrezco hacerlo yo)
- Shall we go to the cinema? (sugiero ir nosotros)

"Shall" solo con I/we. Nunca "Shall you...?"`,
  commonMistakes: [
    { wrong: '❌ I am meet my friends tomorrow.', correct: '✅ I am meeting my friends tomorrow.', explanation: 'Para un plan fijado usamos to be + verbo + -ing: I am meeting.' },
    { wrong: '❌ Shall you help me?', correct: '✅ Can you help me? / Will you help me?', explanation: '"Shall" solo se usa con I/we. Para preguntar a otra persona usamos can/will.' },
    { wrong: '❌ We are fly to London on Friday.', correct: '✅ We are flying to London on Friday.', explanation: 'El verbo lleva -ing en el present continuous: are flying.' },
  ],
  vocabulary: [
    { word: 'arrangement', translation_es: 'plan fijado, acuerdo', level: 'A2', category: 'future', partOfSpeech: 'noun', example: 'I have an arrangement for Friday.', exampleTranslation: 'Tengo un plan fijado para el viernes.' },
    { word: 'to meet', translation_es: 'quedar con, encontrarse con', level: 'A1', category: 'future', partOfSpeech: 'verb', example: "I'm meeting my friends at 7.", exampleTranslation: 'Quedo con mis amigos a las 7.' },
    { word: 'to fly', translation_es: 'volar', level: 'A2', category: 'future', partOfSpeech: 'verb', example: "We're flying to London on Friday.", exampleTranslation: 'Volamos a Londres el viernes.' },
    { word: 'to arrive', translation_es: 'llegar', level: 'A1', category: 'future', partOfSpeech: 'verb', example: 'They are arriving at 6 p.m.', exampleTranslation: 'Llegan a las 6 de la tarde.' },
    { word: 'suggestion', translation_es: 'sugerencia', level: 'A2', category: 'future', partOfSpeech: 'noun', example: 'That is a good suggestion.', exampleTranslation: 'Esa es una buena sugerencia.' },
    { word: 'cinema', translation_es: 'cine', level: 'A1', category: 'future', partOfSpeech: 'noun', example: 'Shall we go to the cinema?', exampleTranslation: '¿Vamos al cine?' },
  ],
  grammarPoints: [
    {
      id: 'gp-present-continuous-future',
      level: 'A2',
      name: 'Present continuous for future arrangements',
      explanation_es: 'Usamos el present continuous para planes ya fijados con fecha u hora (agenda, citas, viajes reservados).',
      formula: 'Sujeto + to be (am/is/are) + verbo + -ing + (tiempo)',
      examples: ["I'm meeting my friends tomorrow at 7.", "We're flying to London on Friday."],
    },
    {
      id: 'gp-shall',
      level: 'A2',
      name: 'Shall — suggestions & offers (I/we)',
      explanation_es: '"Shall I...?" ofrece hacer algo; "Shall we...?" sugiere hacer algo juntos. Solo se usa con I/we.',
      formula: 'Shall + I/we + verbo ...?',
      examples: ['Shall I open the window?', 'Shall we go to the cinema?'],
    },
  ],
  exercises: [
    {
      id: 'a2-m4-l4-ex1',
      type: 'multiple_choice',
      concept: 'present continuous - future arrangement',
      difficulty: 1,
      prompt: 'Completa: "I\'m ___ my friends tomorrow at 7."',
      promptTranslation: 'Quedo con mis amigos mañana a las 7.',
      correctAnswer: 'meeting',
      options: ['meeting', 'meet', 'meets'],
      explanation: 'Con present continuous usamos verbo + -ing: I\'m meeting.',
    },
    {
      id: 'a2-m4-l4-ex2',
      type: 'multiple_choice',
      concept: 'shall - suggestions',
      difficulty: 1,
      prompt: 'Quieres sugerir ir al cine. ¿Qué dices?',
      correctAnswer: 'Shall we go to the cinema?',
      options: ['Shall we go to the cinema?', 'Shall you go to the cinema?', 'Shall he go to the cinema?'],
      explanation: '"Shall we...?" sugiere hacer algo juntos. No se usa "shall you" ni "shall he".',
    },
    {
      id: 'a2-m4-l4-ex3',
      type: 'fill_blank',
      concept: 'present continuous - -ing',
      difficulty: 2,
      prompt: 'Completa: "We\'re ___ to London on Friday." (volar)',
      promptTranslation: 'Volamos a Londres el viernes.',
      correctAnswer: 'flying',
      acceptedAnswers: ['flying', 'going to fly'],
      explanation: '"To fly" → flying. → We\'re flying to London on Friday. (plan fijado)',
    },
    {
      id: 'a2-m4-l4-ex4',
      type: 'true_false',
      concept: 'shall - only I/we',
      difficulty: 2,
      prompt: '"Shall" se puede usar con "he" y "she" para sugerencias.',
      correctAnswer: 'false',
      explanation: 'Falso. "Shall" para sugerencias y ofertas solo se usa con "I" y "we".',
    },
    {
      id: 'a2-m4-l4-ex5',
      type: 'reorder',
      concept: 'shall - question order',
      difficulty: 2,
      prompt: 'Ordena las palabras: the / open / I / window / shall',
      promptTranslation: '¿Abro la ventana?',
      correctAnswer: 'Shall I open the window?',
      words: ['Shall', 'I', 'open', 'the', 'window'],
      explanation: 'Shall + I + verbo: Shall I open the window? (ofrezco hacerlo yo)',
    },
    {
      id: 'a2-m4-l4-ex6',
      type: 'translate',
      concept: 'present continuous - translate',
      difficulty: 3,
      prompt: 'Traduce: "Ceno con mis padres esta noche." (cita fijada)',
      correctAnswer: "I'm having dinner with my parents tonight.",
      acceptedAnswers: ['I am having dinner with my parents tonight', "I'm having dinner with my parents tonight", "I'm having dinner with my parents tonight.", 'I am having dinner with my parents tonight.'],
      acceptApproximate: true,
      explanation: 'Cita fijada → present continuous: I\'m having dinner with my parents tonight.',
    },
    {
      id: 'a2-m4-l4-ex7',
      type: 'error_correction',
      concept: 'present continuous - -ing',
      difficulty: 3,
      prompt: 'Corrige el error: "I am meet my friends tomorrow."',
      correctAnswer: "I'm meeting my friends tomorrow.",
      acceptedAnswers: ['I am meeting my friends tomorrow', "I'm meeting my friends tomorrow", "I'm meeting my friends tomorrow.", 'I am meeting my friends tomorrow.'],
      acceptApproximate: true,
      explanation: 'Para planes fijados usamos to be + verbo + -ing: I am meeting my friends tomorrow.',
    },
    {
      id: 'a2-m4-l4-ex8',
      type: 'match',
      concept: 'shall - functions',
      difficulty: 2,
      prompt: 'Relaciona cada expresión con su función:',
      pairs: [
        { left: 'Shall I open the window?', right: 'ofrecer ayuda (yo)' },
        { left: 'Shall we go?', right: 'sugerir ir juntos' },
        { left: "I'm flying to London.", right: 'plan fijado (vuelo)' },
        { left: "I'm meeting my friends.", right: 'plan fijado (cita)' },
        { left: "I'll call you.", right: 'promesa con will' },
        { left: "I'm going to study law.", right: 'plan decidido (going to)' },
      ],
      correctAnswer: 'Shall I open the window?=ofrecer ayuda, Shall we go?=sugerir ir juntos, I\'m flying to London.=plan fijado (vuelo), I\'m meeting my friends.=plan fijado (cita), I\'ll call you.=promesa con will, I\'m going to study law.=plan decidido (going to)',
      explanation: 'Shall I?=ofrezco hacer algo; Shall we?=sugerencia conjunta; present continuous=plan fijado; I\'ll=promesa/oferta espontánea; going to=plan decidido.',
    },
    {
      id: 'a2-m4-l4-ex9',
      type: 'select_correct',
      concept: 'shall - not with you',
      difficulty: 3,
      prompt: '¿Cuál de estas frases es correcta?',
      correctAnswer: 'Shall we have lunch together?',
      options: ['Shall we have lunch together?', 'Shall you have lunch together?', 'Shall I we have lunch together?'],
      explanation: '"Shall we...?" es la forma correcta de sugerir. "Shall you" no existe en este uso.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m4-l4-mt1',
      type: 'multiple_choice',
      concept: 'present continuous - arrangement',
      difficulty: 1,
      prompt: 'Completa: "They ___ arriving at 6 p.m."',
      promptTranslation: 'Llegan a las 6 de la tarde.',
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: 'Con "they" usamos "are": They are arriving at 6 p.m.',
    },
    {
      id: 'a2-m4-l4-mt2',
      type: 'fill_blank',
      concept: 'shall - offer',
      difficulty: 2,
      prompt: 'Completa: "___ I carry your bag?" (ofreces ayuda)',
      promptTranslation: '¿Te llevo la bolsa?',
      correctAnswer: 'Shall',
      acceptedAnswers: ['Shall', 'shall'],
      explanation: '"Shall I...?" se usa para ofrecer hacer algo por otra persona.',
    },
    {
      id: 'a2-m4-l4-mt3',
      type: 'translate',
      concept: 'shall - translate',
      difficulty: 3,
      prompt: 'Traduce: "¿Vamos a tomar un café?" (sugerencia)',
      correctAnswer: 'Shall we have a coffee?',
      acceptedAnswers: ['Shall we have a coffee', 'Shall we have a coffee?', 'Shall we get a coffee?'],
      acceptApproximate: true,
      explanation: 'Sugerencia conjunta → Shall we + verbo: Shall we have a coffee?',
    },
    {
      id: 'a2-m4-l4-mt4',
      type: 'error_correction',
      concept: 'present continuous - -ing',
      difficulty: 3,
      prompt: 'Corrige el error: "She is fly to Madrid tomorrow."',
      correctAnswer: "She's flying to Madrid tomorrow.",
      acceptedAnswers: ['She is flying to Madrid tomorrow', "She's flying to Madrid tomorrow", "She's flying to Madrid tomorrow.", 'She is flying to Madrid tomorrow.'],
      acceptApproximate: true,
      explanation: 'El verbo necesita -ing: She is flying to Madrid tomorrow.',
    },
    {
      id: 'a2-m4-l4-mt5',
      type: 'true_false',
      concept: 'future forms review',
      difficulty: 4,
      prompt: '"I\'m meeting my friends tomorrow at 7" expresa un plan fijado con hora.',
      correctAnswer: 'true',
      explanation: 'Verdadero. "At 7" es un horario concreto, por eso usamos present continuous para el plan fijado.',
    },
  ],
  reviewItems: ['a2-m4-l3'],
  prerequisites: ['a2-m4-l3'],
}
