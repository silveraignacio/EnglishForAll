import type { Lesson } from '../../types'

export const lesson43WillVsGoingTo: Lesson = {
  id: 'a2-m4-l3',
  moduleId: 'm4-future-forms',
  order: 2,
  title: '"Will" vs "going to": ¿cuándo usar cada uno?',
  objective: 'Diferenciar "will" y "going to" para elegir la forma correcta según la situación.',
  explanation_es: `Tanto "will" como "going to" sirven para el futuro, pero no son intercambiables. La regla principal es muy sencilla:

- WILL = decisión en el momento + predicción general (sin evidencia).
- GOING TO = plan ya decidido + predicción con evidencia.

Veamos el contraste:

1. Decisión en el momento (will) vs plan previo (going to):
   - "The phone is ringing!" "I'll answer it!" = ¡Está sonando! ¡Lo contesto! (decisión espontánea, en ese momento)
   - "I'm going to study law." = Voy a estudiar Derecho. (plan decidido hace tiempo)

2. Predicción general (will) vs predicción con evidencia (going to):
   - I think it will rain. = Creo que lloverá. (mi opinión, sin señales)
   - Look, it's going to rain. = Mira, va a llover. (veo las nubes, hay evidencia)

Un truco práctico:
- Si la decisión se toma "ahora mismo" (in the moment) → will.
- Si la decisión ya estaba tomada antes de hablar → going to.
- Si "ves" la causa (nubes, semáforo, agua hirviendo...) → going to.
- Si es una opinión, esperanza o suposición → will.

Muchas veces con "I think", "I hope", "probably" usamos "will".`,
  examples: [
    { english: '"I\'ll answer the phone!"', spanish: '"¡Lo contesto!" (decisión en el momento)', note: 'will = decisión espontánea' },
    { english: "I'm going to study law.", spanish: 'Voy a estudiar Derecho.', note: 'going to = plan decidido antes' },
    { english: 'I think it will rain.', spanish: 'Creo que lloverá.', note: 'will = opinión o predicción general' },
    { english: "Look, it's going to rain.", spanish: 'Mira, va a llover.', note: 'going to = hay evidencia (las nubes)' },
    { english: "Don't worry, I'll help you with that.", spanish: 'No te preocupes, te ayudaré con eso.', note: 'oferta hecha en el momento' },
    { english: "We're going to have dinner at home tonight.", spanish: 'Vamos a cenar en casa esta noche.', note: 'plan ya organizado' },
  ],
  rule: `WILL → decisión espontánea / predicción general / promesa / oferta.
- I think it will be sunny. (opinión)
- OK, I'll come with you. (decisión ahora mismo)

GOING TO → plan previo / intención / predicción con evidencia.
- I'm going to learn German. (plan)
- It's going to rain. (veo las nubes)

Pregúntate: ¿la decisión existía antes de hablar? Si SÍ → going to. Si NO (la tomo ahora) → will.`,
  formation: {
    title: 'Cómo se forman "will" y "going to"',
    intro: 'Los dos sirven para el futuro, pero cada uno se usa en una situación distinta: will para decisiones del momento y opiniones, going to para planes previos y predicciones con evidencia.',
    patterns: [
      {
        name: 'will (decisión espontánea / opinión)',
        formula: 'sujeto + will + verbo (forma base)',
        examples: [
          { english: 'I\'ll answer the phone!', spanish: '¡Lo contesto!' },
          { english: 'I think it will rain.', spanish: 'Creo que lloverá.' },
        ],
        note: 'will + verbo en forma base, sin cambios. Contracción: I will → I\'ll.',
      },
      {
        name: 'going to (plan previo / evidencia)',
        formula: 'sujeto + to be + going to + verbo (forma base)',
        examples: [
          { english: 'I\'m going to study law.', spanish: 'Voy a estudiar Derecho.' },
          { english: 'Look, it\'s going to rain.', spanish: 'Mira, va a llover.' },
        ],
        note: 'Necesita el verbo "to be" conjugado: I am going to, she is going to, they are going to.',
      },
    ],
    notes: [
      'Pregúntate: ¿la decisión existía antes de hablar? Si SÍ → going to. Si NO (la tomo ahora) → will.',
      'Si "ves" la causa (nubes, tráfico...) → going to. Si es opinión, esperanza o suposición → will.',
      'Nunca mezcles las dos formas: ❌ I will going to buy → ✅ I\'m going to buy.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ "I think I\'m going to help you" (acabas de decidirlo)', correct: '✅ "I think I\'ll help you"', explanation: 'Si la oferta se hace en el momento, usamos "will", no "going to".' },
    { wrong: '❌ "Tomorrow I will visit my mother" (plan ya fijado)', correct: '✅ "Tomorrow I\'m going to visit my mother"', explanation: 'Para un plan ya decidido usamos "going to".' },
    { wrong: '❌ It\'s going to be a great film (sin evidencia, solo opinión)', correct: '✅ I think it will be a great film.', explanation: 'Las opiniones sin evidencia se expresan con "will".' },
  ],
  vocabulary: [
    { word: 'spontaneous', translation_es: 'espontáneo', level: 'A2', category: 'future', partOfSpeech: 'adjective', example: 'It was a spontaneous decision.', exampleTranslation: 'Fue una decisión espontánea.' },
    { word: 'to decide', translation_es: 'decidir', level: 'A1', category: 'future', partOfSpeech: 'verb', example: 'I decided to study English.', exampleTranslation: 'Decidí estudiar inglés.' },
    { word: 'evidence', translation_es: 'evidencia, señal', level: 'A2', category: 'future', partOfSpeech: 'noun', example: 'The clouds are evidence of rain.', exampleTranslation: 'Las nubes son señal de lluvia.' },
    { word: 'probably', translation_es: 'probablemente', level: 'A2', category: 'future', partOfSpeech: 'adverb', example: 'It will probably rain.', exampleTranslation: 'Probablemente lloverá.' },
    { word: 'I think', translation_es: 'creo que', level: 'A1', category: 'future', partOfSpeech: 'phrase', example: 'I think it will rain.', exampleTranslation: 'Creo que lloverá.' },
  ],
  grammarPoints: [
    {
      id: 'gp-will-vs-going-to',
      level: 'A2',
      name: 'Will vs going to',
      explanation_es: 'will = decisión en el momento, predicción general, promesa, oferta. going to = plan previo, intención, predicción con evidencia.',
      formula: 'will + verbo (espontáneo) | to be + going to + verbo (plan/evidencia)',
      examples: ["I'll answer it. (ahora)", "I'm going to study law. (plan)", 'I think it will rain.', "Look, it's going to rain."],
    },
  ],
  exercises: [
    {
      id: 'a2-m4-l3-ex1',
      type: 'multiple_choice',
      concept: 'will vs going to - spontaneous decision',
      difficulty: 1,
      prompt: 'El teléfono suena y decides contestarlo en el momento. ¿Qué dices?',
      correctAnswer: "I'll answer it!",
      options: ["I'll answer it!", "I'm going to answer it!", 'I answer it!'],
      explanation: 'Es una decisión espontánea (en el momento), así que usamos "will": I\'ll answer it!',
    },
    {
      id: 'a2-m4-l3-ex2',
      type: 'multiple_choice',
      concept: 'will vs going to - plan',
      difficulty: 1,
      prompt: 'Ya habías decidido estudiar Derecho. ¿Qué dices?',
      promptTranslation: 'Voy a estudiar Derecho.',
      correctAnswer: "I'm going to study law.",
      options: ["I'm going to study law.", "I'll study law!", 'I study law.'],
      explanation: 'Es un plan decidido antes de hablar → going to: I\'m going to study law.',
    },
    {
      id: 'a2-m4-l3-ex3',
      type: 'true_false',
      concept: 'will vs going to - prediction',
      difficulty: 2,
      prompt: '"I think it will rain" se usa cuando vemos nubes en el cielo.',
      correctAnswer: 'false',
      explanation: 'Falso. Con evidencia (nubes) usamos "going to": "Look, it\'s going to rain." "Will" es una opinión general.',
    },
    {
      id: 'a2-m4-l3-ex4',
      type: 'fill_blank',
      concept: 'will vs going to - evidence',
      difficulty: 2,
      prompt: 'Completa (evidencia): "Look at the traffic! We ___ going to be late."',
      promptTranslation: '¡Mira el tráfico! Vamos a llegar tarde.',
      correctAnswer: 'are',
      acceptedAnswers: ["'re", 'are'],
      explanation: 'Hay evidencia (el tráfico), así que usamos "going to" con "we": are going to be late.',
    },
    {
      id: 'a2-m4-l3-ex5',
      type: 'fill_blank',
      concept: 'will vs going to - opinion',
      difficulty: 2,
      prompt: 'Completa (opinión, sin evidencia): "I think it ___ rain tonight."',
      promptTranslation: 'Creo que lloverá esta noche.',
      correctAnswer: 'will',
      acceptedAnswers: ["'ll", 'will'],
      explanation: 'Es una opinión ("I think"), sin evidencia → will: I think it will rain tonight.',
    },
    {
      id: 'a2-m4-l3-ex6',
      type: 'reorder',
      concept: 'will vs going to - plan',
      difficulty: 2,
      prompt: 'Ordena las palabras: visit / I / to / my / mother / am / going / tomorrow',
      promptTranslation: 'Voy a visitar a mi madre mañana.',
      correctAnswer: 'I am going to visit my mother tomorrow.',
      words: ['I', 'am', 'going', 'to', 'visit', 'my', 'mother', 'tomorrow'],
      explanation: 'Plan fijado → going to: I am going to visit my mother tomorrow.',
    },
    {
      id: 'a2-m4-l3-ex7',
      type: 'translate',
      concept: 'will vs going to - translate',
      difficulty: 3,
      prompt: 'Traduce: "¡Lo llevo yo!" (te ofreces en el momento)',
      correctAnswer: "I'll carry it!",
      acceptedAnswers: ["I'll carry it", "I will carry it", "I'll carry it!", "I will carry it!", "I'll take it!"],
      acceptApproximate: true,
      explanation: 'Oferta espontánea → will. → I\'ll carry it!',
    },
    {
      id: 'a2-m4-l3-ex8',
      type: 'error_correction',
      concept: 'will vs going to - no mixing',
      difficulty: 3,
      prompt: 'Corrige el error: "I will going to buy a house."',
      correctAnswer: "I'm going to buy a house.",
      acceptedAnswers: ["I'm going to buy a house", 'I will buy a house', "I'm going to buy a house.", 'I will buy a house.', 'I am going to buy a house', 'I am going to buy a house.'],
      acceptApproximate: true,
      explanation: 'Nunca mezclamos "will" y "going to". Elegimos uno: I\'m going to buy a house.',
    },
    {
      id: 'a2-m4-l3-ex9',
      type: 'select_correct',
      concept: 'will vs going to - correct choice',
      difficulty: 3,
      prompt: '¿Cuál es la opción correcta para "I think it ___ be sunny tomorrow."?',
      correctAnswer: 'will',
      options: ['will', 'am going to', 'is going to'],
      explanation: 'Con "I think" (opinión) usamos "will": I think it will be sunny tomorrow.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m4-l3-mt1',
      type: 'multiple_choice',
      concept: 'will vs going to - spontaneous',
      difficulty: 2,
      prompt: 'Decides en este momento invitar a alguien. ¿Qué dices?',
      correctAnswer: "I'll invite you!",
      options: ["I'll invite you!", "I'm going to invite you!", 'I invite you!'],
      explanation: 'Decisión tomada ahora mismo → will: I\'ll invite you!',
    },
    {
      id: 'a2-m4-l3-mt2',
      type: 'fill_blank',
      concept: 'will vs going to - evidence',
      difficulty: 2,
      prompt: 'Completa (evidencia): "It ___ going to rain. Look at the sky!"',
      promptTranslation: 'Va a llover. ¡Mira el cielo!',
      correctAnswer: 'is',
      acceptedAnswers: ["'s", 'is'],
      explanation: 'Hay evidencia visible (el cielo) → going to: It is going to rain.',
    },
    {
      id: 'a2-m4-l3-mt3',
      type: 'translate',
      concept: 'will vs going to - translate',
      difficulty: 3,
      prompt: 'Traduce: "Creo que ganaremos el partido."',
      correctAnswer: 'I think we will win the match.',
      acceptedAnswers: ['I think we will win the match', "I think we'll win the match", 'I think we will win the match.', "I think we'll win the match."],
      acceptApproximate: true,
      explanation: 'Opinión sin evidencia ("I think") → will: I think we will win the match.',
    },
    {
      id: 'a2-m4-l3-mt4',
      type: 'true_false',
      concept: 'will vs going to - plans',
      difficulty: 3,
      prompt: 'Para un plan ya decidido antes de hablar usamos "will".',
      correctAnswer: 'false',
      explanation: 'Falso. Para planes previos usamos "going to". "Will" es para decisiones espontáneas.',
    },
    {
      id: 'a2-m4-l3-mt5',
      type: 'error_correction',
      concept: 'will vs going to - no mixing',
      difficulty: 4,
      prompt: 'Corrige el error: "She is going to will study English."',
      correctAnswer: "She's going to study English.",
      acceptedAnswers: ['She is going to study English', "She's going to study English", 'She is going to study English.', "She's going to study English."],
      acceptApproximate: true,
      explanation: 'No mezcles "going to" con "will". → She\'s going to study English.',
    },
  ],
  reviewItems: ['a2-m4-l2'],
  workbookRefs: [
    { levelId: 'a2', page: 4, exercises: [1, 2, 5], note: 'Práctica de will vs going to y futuro' },
  ],
  prerequisites: ['a2-m4-l2'],
}
