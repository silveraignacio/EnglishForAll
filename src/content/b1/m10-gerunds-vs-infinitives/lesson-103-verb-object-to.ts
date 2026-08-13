import type { Lesson } from '../../types'

export const lesson103VerbObjectTo: Lesson = {
  id: 'b1-m10-l3',
  moduleId: 'm10-gerunds-vs-infinitives',
  order: 2,
  title: 'Verbo + objeto + "to" + infinitivo (want, need, tell, ask...)',
  objective: 'Aprender la estructura verbo + persona/objeto + to + verbo con want, need, tell, ask, advise y encourage, y evitar la interferencia del español.',
  explanation_es: `En inglés hay una estructura muy común para expresar que queremos o necesitamos que ALGUIEN haga algo:

verbo + persona (objeto) + to + verbo

Mira estos ejemplos:
- I want you to help me. = Quiero que me ayudes.
- She advised him to rest. = Ella le aconsejó que descansara.
- They encouraged us to try. = Ellos nos animaron a intentarlo.
- He told me to wait. = Él me dijo que esperara.

Los verbos más frecuentes con esta estructura son: want (querer), need (necesitar), tell (decir), ask (pedir), advise (aconsejar), encourage (animar), invite (invitar) y expect (esperar que).

¡CUIDADO con el español! En español decimos "quiero QUE tú me ayudes". En inglés NO usamos "that" aquí: ❌ I want that you help me → ✅ I want you to help me.

La persona es la que va entre el verbo y "to": want + you + to help.

Recuerda la diferencia entre tell y ask:
- tell + persona + to = decirle a alguien que haga algo.
- ask + persona + to = pedirle a alguien que haga algo.`,
  examples: [
    { english: 'I want you to help me.', spanish: 'Quiero que me ayudes.', note: 'want + persona + to + verbo.' },
    { english: 'She advised him to rest.', spanish: 'Ella le aconsejó que descansara.', note: 'advise + persona + to + verbo.' },
    { english: 'They encouraged us to try.', spanish: 'Ellos nos animaron a intentarlo.' },
    { english: 'He told me to wait.', spanish: 'Él me dijo que esperara.' },
    { english: 'We need you to arrive early.', spanish: 'Necesitamos que llegues temprano.' },
    { english: 'The teacher asked us to write an essay.', spanish: 'La profesora nos pidió que escribiéramos una redacción.' },
  ],
  rule: `Estructura: verbo + persona/objeto + to + infinitivo.

Verbos comunes: want, need, tell, ask, advise, encourage, invite, expect.

- I want you to help me. = Quiero que me ayudes.
- He told me to wait. = Él me dijo que esperara.
- She asked him to leave. = Ella le pidió que se fuera.

NO uses "that" como en español: ❌ I want that you help me → ✅ I want you to help me.`,
  commonMistakes: [
    { wrong: '❌ I want that you help me.', correct: '✅ I want you to help me.', explanation: 'En inglés esta estructura no usa "that". La persona va directamente después del verbo, seguida de "to + verbo".' },
    { wrong: '❌ She told to me wait.', correct: '✅ She told me to wait.', explanation: 'Después de "told" la persona va directa: told me + to wait. No necesitamos "to" antes de la persona.' },
    { wrong: '❌ I want you help me.', correct: '✅ I want you to help me.', explanation: 'Falta "to" entre la persona y el verbo: you to help me.' },
    { wrong: '❌ He advised her rest.', correct: '✅ He advised her to rest.', explanation: 'Tras advise + persona va siempre "to + verbo": advised her to rest.' },
  ],
  vocabulary: [
    { word: 'advise', translation_es: 'aconsejar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'My doctor advised me to sleep more.', exampleTranslation: 'Mi médico me aconsejó que durmiera más.' },
    { word: 'encourage', translation_es: 'animar, alentar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'My parents encouraged me to study.', exampleTranslation: 'Mis padres me animaron a estudiar.' },
    { word: 'invite', translation_es: 'invitar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'We invited them to come for dinner.', exampleTranslation: 'Los invitamos a venir a cenar.' },
    { word: 'expect', translation_es: 'esperar (que algo pase)', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'I expect you to be on time.', exampleTranslation: 'Espero que llegues a tiempo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-verb-object-to-infinitive',
      level: 'B1',
      name: 'Verb + object + to-infinitive',
      explanation_es: 'Con want, need, tell, ask, advise, encourage, invite y expect, ponemos la persona (objeto) entre el verbo y "to + infinitivo".',
      formula: 'verbo + persona + to + verbo  (want you to help)',
      examples: ['I want you to help me.', 'He told me to wait.', 'She advised him to rest.', 'They encouraged us to try.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m10-l3-ex1',
      type: 'multiple_choice',
      concept: 'want + person + to',
      difficulty: 1,
      prompt: 'Completa: "I want ___ to help me."',
      promptTranslation: 'Quiero que me ayudes.',
      correctAnswer: 'you',
      options: ['you', 'that you', 'your'],
      explanation: 'La persona va directamente después de "want": want you to help me. No se usa "that".',
    },
    {
      id: 'b1-m10-l3-ex2',
      type: 'multiple_choice',
      concept: 'tell + person + to',
      difficulty: 2,
      prompt: 'Completa: "He told me ___ wait."',
      promptTranslation: 'Él me dijo que esperara.',
      correctAnswer: 'to',
      options: ['to', 'that', 'for'],
      explanation: 'Tras tell + persona va "to + verbo": told me to wait.',
    },
    {
      id: 'b1-m10-l3-ex3',
      type: 'fill_blank',
      concept: 'advise + person + to',
      difficulty: 2,
      prompt: 'Completa: "The doctor advised him ___ (rest) for a week."',
      promptTranslation: 'El médico le aconsejó que descansara una semana.',
      correctAnswer: 'to rest',
      acceptedAnswers: ['to rest', 'To rest'],
      explanation: 'advise + persona + to + verbo: advised him to rest.',
    },
    {
      id: 'b1-m10-l3-ex4',
      type: 'error_correction',
      concept: 'no "that" after want',
      difficulty: 3,
      prompt: 'Corrige el error: "I want that you call me later."',
      promptTranslation: 'Quiero que me llames más tarde.',
      correctAnswer: 'I want you to call me later.',
      acceptedAnswers: ['I want you to call me later', 'I want you to call me later.', 'i want you to call me later'],
      acceptApproximate: true,
      explanation: 'No usamos "that" en esta estructura: want + persona + to + verbo → want you to call me.',
    },
    {
      id: 'b1-m10-l3-ex5',
      type: 'reorder',
      concept: 'ask + person + to',
      difficulty: 3,
      prompt: 'Ordena las palabras: asked / She / him / to / leave / quietly',
      promptTranslation: 'Ella le pidió que se fuera en silencio.',
      correctAnswer: 'She asked him to leave quietly.',
      words: ['She', 'asked', 'him', 'to', 'leave', 'quietly'],
      explanation: 'Orden: sujeto + ask + persona + to + verbo + complemento. → She asked him to leave quietly.',
    },
    {
      id: 'b1-m10-l3-ex6',
      type: 'translate',
      concept: 'want + person + to',
      difficulty: 3,
      prompt: 'Traduce: "Quiero que me ayudes."',
      promptTranslation: 'I want you to help me.',
      correctAnswer: 'I want you to help me.',
      acceptedAnswers: ['I want you to help me', 'I want you to help me.', 'i want you to help me'],
      acceptApproximate: true,
      explanation: 'Nada de "that": I want you to help me. La persona "you" va entre "want" y "to help".',
    },
    {
      id: 'b1-m10-l3-ex7',
      type: 'true_false',
      concept: 'encourage + person + to',
      difficulty: 3,
      prompt: 'La frase "They encouraged us to try again" es correcta.',
      promptTranslation: 'The sentence "They encouraged us to try again" is correct.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. encourage + persona + to + verbo: encouraged us to try again.',
    },
    {
      id: 'b1-m10-l3-ex8',
      type: 'match',
      concept: 'verb + object + to — matching',
      difficulty: 3,
      prompt: 'Relaciona cada verbo con el ejemplo correcto.',
      promptTranslation: 'Match each verb with the correct example.',
      correctAnswer: 'want=I want you to come early.; tell=He told us to wait outside.; ask=She asked me to open the window.; advise=I advised them to be careful.; encourage=They encouraged me to continue.; invite=We invited her to join us.',
      pairs: [
        { left: 'want', right: 'I want you to come early.' },
        { left: 'tell', right: 'He told us to wait outside.' },
        { left: 'ask', right: 'She asked me to open the window.' },
        { left: 'advise', right: 'I advised them to be careful.' },
        { left: 'encourage', right: 'They encouraged me to continue.' },
        { left: 'invite', right: 'We invited her to join us.' },
      ],
      explanation: 'Todos estos verbos siguen la estructura verbo + persona + to + infinitivo.',
    },
    {
      id: 'b1-m10-l3-ex9',
      type: 'fill_blank',
      concept: 'need + person + to',
      difficulty: 4,
      prompt: 'Completa: "We need you ___ (sign) this document today."',
      promptTranslation: 'Necesitamos que firmes este documento hoy.',
      correctAnswer: 'to sign',
      acceptedAnswers: ['to sign', 'To sign'],
      explanation: 'need + persona + to + verbo: need you to sign.',
    },
    {
      id: 'b1-m10-l3-ex10',
      type: 'multiple_choice',
      concept: 'expect + person + to',
      difficulty: 4,
      prompt: 'Completa: "The manager expects ___ to finish the report today."',
      promptTranslation: 'El director espera que termines el informe hoy.',
      correctAnswer: 'you',
      options: ['you', 'that', 'your'],
      explanation: 'expect + persona + to + verbo: expects you to finish. Sin "that".',
    },
  ],
  miniTest: [
    {
      id: 'b1-m10-l3-mt1',
      type: 'multiple_choice',
      concept: 'want + person + to',
      difficulty: 1,
      prompt: 'Completa: "I need you ___ help me with the boxes."',
      promptTranslation: 'Necesito que me ayudes con las cajas.',
      correctAnswer: 'to',
      options: ['to', 'that', 'for'],
      explanation: 'need + persona + to + verbo: need you to help.',
    },
    {
      id: 'b1-m10-l3-mt2',
      type: 'fill_blank',
      concept: 'tell + person + to',
      difficulty: 2,
      prompt: 'Completa: "My boss told me ___ (come) at 8 o\'clock."',
      promptTranslation: 'Mi jefe me dijo que viniera a las 8.',
      correctAnswer: 'to come',
      acceptedAnswers: ['to come', 'To come'],
      explanation: 'tell + persona + to + verbo: told me to come.',
    },
    {
      id: 'b1-m10-l3-mt3',
      type: 'error_correction',
      concept: 'ask + person + to',
      difficulty: 3,
      prompt: 'Corrige el error: "She asked that I close the door."',
      promptTranslation: 'Ella me pidió que cerrara la puerta.',
      correctAnswer: 'She asked me to close the door.',
      acceptedAnswers: ['She asked me to close the door', 'She asked me to close the door.', 'she asked me to close the door'],
      acceptApproximate: true,
      explanation: 'ask + persona + to + verbo: asked me to close the door. Sin "that".',
    },
    {
      id: 'b1-m10-l3-mt4',
      type: 'translate',
      concept: 'advise + person + to',
      difficulty: 3,
      prompt: 'Traduce: "Le aconsejé que descansara."',
      promptTranslation: 'I advised him to rest.',
      correctAnswer: 'I advised him to rest.',
      acceptedAnswers: ['I advised him to rest', 'I advised him to rest.', 'i advised him to rest'],
      acceptApproximate: true,
      explanation: 'advise + persona + to + verbo: advised him to rest.',
    },
    {
      id: 'b1-m10-l3-mt5',
      type: 'multiple_choice',
      concept: 'encourage + person + to',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'They encouraged us to keep trying.',
      options: ['They encouraged us to keep trying.', 'They encouraged that we keep trying.', 'They encouraged us keep trying.'],
      explanation: 'encourage + persona + to + verbo: encouraged us to keep trying.',
    },
  ],
  reviewItems: ['b1-m10-l2'],
  prerequisites: ['b1-m10-l2'],
}
