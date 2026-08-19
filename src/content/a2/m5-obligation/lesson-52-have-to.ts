import type { Lesson } from '../../types'

export const lesson52HaveTo: Lesson = {
  id: 'a2-m5-l2',
  moduleId: 'm5-obligation',
  order: 1,
  title: '"Have to" y "don\'t have to": obligación y ausencia de obligación',
  objective: 'Expresar obligación externa con "have to" y ausencia de obligación con "don\'t have to".',
  explanation_es: `"Have to" también expresa obligación, como "must". La diferencia es sutil:

- MUST = obligación fuerte, a menudo personal o del que habla: "I must study." (me lo exijo yo o es muy importante).
- HAVE TO = obligación que viene de fuera (reglas, trabajo, leyes): "I have to work tomorrow." (mi trabajo me lo exige).

En el día a día, la diferencia casi no se nota. Lo importante es dominar las formas:

Estructura: Sujeto + have to / has to + verbo (sin "to")
- I have to work tomorrow. = Tengo que trabajar mañana.
- She has to study. = Ella tiene que estudiar. (con he/she/it → has to)

La NEGATIVA es "don't have to" / "doesn't have to" y significa AUSENCIA DE OBLIGACIÓN (no es necesario, pero puedes hacerlo):
- You don't have to come if you're tired. = No hace falta que vengas si estás cansado.
- They don't have to pay. = No tienen que pagar (no es obligatorio, pero pueden).

¡IMPORTANTE! No confundas:
- mustn't = prohibido (NO lo hagas).
- don't have to = no es obligatorio (puedes hacerlo o no).

Ejemplo: "You mustn't drive." (está prohibido conducir) vs "You don't have to drive." (no hace falta que conduzcas, podemos ir andando).`,
  examples: [
    { english: 'I have to work tomorrow.', spanish: 'Tengo que trabajar mañana.', note: 'obligación externa (el trabajo)' },
    { english: 'She has to study.', spanish: 'Ella tiene que estudiar.', note: 'con he/she/it → has to' },
    { english: "You don't have to come if you're tired.", spanish: 'No hace falta que vengas si estás cansado.', note: "don't have to = no es obligatorio" },
    { english: "They don't have to pay.", spanish: 'No tienen que pagar.', note: 'no es obligatorio (pueden pagar o no)' },
    { english: 'He has to get up early on weekdays.', spanish: 'Él tiene que levantarse temprano entre semana.' },
    { english: "We don't have to cook tonight. Let's order pizza.", spanish: 'No hace falta cocinar esta noche. Pidamos una pizza.' },
  ],
  rule: `Obligación: Sujeto + have to / has to + verbo (sin "to")
- I have to work. / She has to study. (he/she/it → has to)

Ausencia de obligación: Sujeto + don't/doesn't have to + verbo
- You don't have to come.
- She doesn't have to pay.

DIFERENCIA CLAVE:
- mustn't = prohibición (no lo hagas).
- don't have to = no es obligatorio (puedes hacerlo o no).`,
  formation: {
    title: 'Cómo se forma have to / don\'t have to',
    intro: 'have to expresa una obligación (a menudo externa: reglas, trabajo) y don\'t have to expresa ausencia de obligación (no es necesario, pero puedes hacerlo).',
    patterns: [
      {
        name: 'Afirmativo (obligación)',
        formula: 'Sujeto + have to / has to + verbo en forma base + complemento',
        examples: [
          { english: 'I have to work tomorrow.', spanish: 'Tengo que trabajar mañana.' },
          { english: 'She has to study.', spanish: 'Ella tiene que estudiar.' },
          { english: 'He has to get up early on weekdays.', spanish: 'Él tiene que levantarse temprano entre semana.' },
        ],
        note: 'Con I/you/we/they → have to. Con he/she/it → has to. No confundas: I have to (no "I has to").',
      },
      {
        name: 'Negativo (ausencia de obligación)',
        formula: 'Sujeto + don\'t / doesn\'t + have to + verbo en forma base + complemento',
        examples: [
          { english: "You don't have to come if you're tired.", spanish: 'No hace falta que vengas si estás cansado.' },
          { english: "They don't have to pay.", spanish: 'No tienen que pagar.' },
          { english: "We don't have to cook tonight.", spanish: 'No hace falta cocinar esta noche.' },
        ],
        note: "don't have to = no es obligatorio (puedes hacerlo o no). Con he/she/it: doesn't have to. Ojo: no es una prohibición.",
      },
    ],
    notes: [
      'Diferencia clave: mustn\'t = prohibido (no lo hagas) · don\'t have to = no es obligatorio (puedes hacerlo o no).',
      'No olvides el "to" de have to: I have to go (no "I have go").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I has to work tomorrow.', correct: '✅ I have to work tomorrow.', explanation: 'Con "I" usamos "have to". "Has to" solo con he/she/it.' },
    { wrong: '❌ I have go home now.', correct: '✅ I have to go home now.', explanation: 'No olvides el "to": have to + verbo.' },
    { wrong: '❌ "You don\'t have to smoke here" (en un lugar con prohibición)', correct: "✅ You mustn't smoke here.", explanation: 'Si está prohibido, usamos "mustn\'t". "Don\'t have to" solo significa que no es obligatorio.' },
  ],
  vocabulary: [
    { word: 'to have to', translation_es: 'tener que (obligación)', level: 'A2', category: 'obligation', partOfSpeech: 'modal-like verb', example: 'I have to work tomorrow.', exampleTranslation: 'Tengo que trabajar mañana.' },
    { word: 'external', translation_es: 'externo, de fuera', level: 'A2', category: 'obligation', partOfSpeech: 'adjective', example: 'It is an external obligation.', exampleTranslation: 'Es una obligación externa.' },
    { word: 'to be tired', translation_es: 'estar cansado', level: 'A1', category: 'obligation', partOfSpeech: 'verb phrase', example: "You don't have to come if you're tired.", exampleTranslation: 'No hace falta que vengas si estás cansado.' },
    { word: 'to pay', translation_es: 'pagar', level: 'A1', category: 'obligation', partOfSpeech: 'verb', example: 'They don\'t have to pay.', exampleTranslation: 'No tienen que pagar.' },
    { word: 'to cook', translation_es: 'cocinar', level: 'A1', category: 'obligation', partOfSpeech: 'verb', example: "We don't have to cook tonight.", exampleTranslation: 'No hace falta cocinar esta noche.' },
    { word: 'necessary', translation_es: 'necesario', level: 'A2', category: 'obligation', partOfSpeech: 'adjective', example: 'It is not necessary.', exampleTranslation: 'No es necesario.' },
  ],
  grammarPoints: [
    {
      id: 'gp-have-to',
      level: 'A2',
      name: 'Have to — external obligation',
      explanation_es: '"Have to" expresa una obligación, a menudo externa (reglas, trabajo, leyes). Con he/she/it cambia a "has to".',
      formula: 'Sujeto + have to/has to + verbo',
      examples: ['I have to work tomorrow.', 'She has to study.'],
    },
    {
      id: 'gp-dont-have-to',
      level: 'A2',
      name: "Don't have to — absence of obligation",
      explanation_es: '"Don\'t have to" significa que no es obligatorio (puedes hacerlo o no). No es una prohibición.',
      formula: "Sujeto + don't/doesn't have to + verbo",
      examples: ["You don't have to come.", "They don't have to pay."],
    },
  ],
  exercises: [
    {
      id: 'a2-m5-l2-ex1',
      type: 'multiple_choice',
      concept: 'have to - form',
      difficulty: 1,
      prompt: 'Completa: "I ___ to work tomorrow."',
      promptTranslation: 'Tengo que trabajar mañana.',
      correctAnswer: 'have',
      options: ['have', 'has', 'haved'],
      explanation: 'Con "I" usamos "have": I have to work tomorrow.',
    },
    {
      id: 'a2-m5-l2-ex2',
      type: 'fill_blank',
      concept: 'has to - 3rd person',
      difficulty: 1,
      prompt: 'Completa: "She ___ to study."',
      promptTranslation: 'Ella tiene que estudiar.',
      correctAnswer: 'has',
      acceptedAnswers: ['has', "has't"],
      explanation: 'Con "she" (3ª persona) usamos "has": She has to study.',
    },
    {
      id: 'a2-m5-l2-ex3',
      type: 'multiple_choice',
      concept: "don't have to - meaning",
      difficulty: 2,
      prompt: '¿Qué significa "You don\'t have to come."?',
      correctAnswer: 'No es obligatorio que vengas.',
      options: ['No es obligatorio que vengas.', 'Está prohibido venir.', 'Tienes que venir sí o sí.'],
      explanation: "\"Don't have to\" = no es obligatorio. No es una prohibición.",
    },
    {
      id: 'a2-m5-l2-ex4',
      type: 'true_false',
      concept: "mustn't vs don't have to",
      difficulty: 2,
      prompt: '"You mustn\'t smoke here" y "You don\'t have to smoke here" significan lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. "Mustn\'t" = prohibido. "Don\'t have to" = no es obligatorio (no fumar no es obligatorio, ¡pero puedes fumar si quieres!).',
    },
    {
      id: 'a2-m5-l2-ex5',
      type: 'reorder',
      concept: 'have to - sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras: early / get / has / up / she / to',
      promptTranslation: 'Ella tiene que levantarse temprano.',
      correctAnswer: 'She has to get up early.',
      words: ['She', 'has', 'to', 'get', 'up', 'early'],
      explanation: 'Orden: Sujeto + has to + verbo + complemento: She has to get up early.',
    },
    {
      id: 'a2-m5-l2-ex6',
      type: 'match',
      concept: "mustn't vs don't have to",
      difficulty: 3,
      prompt: 'Relaciona cada frase con su significado:',
      pairs: [
        { left: "You mustn't drive.", right: 'Está prohibido conducir.' },
        { left: "You don't have to drive.", right: 'No hace falta que conduzcas.' },
        { left: 'I have to pay.', right: 'Tengo que pagar (obligatorio).' },
        { left: "I don't have to pay.", right: 'No tengo que pagar (no es obligatorio).' },
        { left: 'She has to study.', right: 'Ella tiene que estudiar.' },
        { left: 'We must be quiet.', right: 'Debemos estar en silencio.' },
      ],
      correctAnswer: "You mustn't drive.=prohibido, You don't have to drive.=no obligatorio, I have to pay.=obligatorio, I don't have to pay.=no obligatorio, She has to study.=obligación, We must be quiet.=obligación",
      explanation: "mustn't=prohibición; don't have to=no es obligatorio; have to/has to/must=obligación.",
    },
    {
      id: 'a2-m5-l2-ex7',
      type: 'translate',
      concept: 'have to - translate',
      difficulty: 3,
      prompt: 'Traduce: "No hace falta que vengas si estás cansado."',
      correctAnswer: "You don't have to come if you're tired.",
      acceptedAnswers: ["You don't have to come if you're tired", 'You do not have to come if you are tired', "You don't have to come if you're tired.", 'You do not have to come if you are tired.'],
      acceptApproximate: true,
      explanation: '"No hace falta" → don\'t have to. → You don\'t have to come if you\'re tired.',
    },
    {
      id: 'a2-m5-l2-ex8',
      type: 'error_correction',
      concept: 'have to - form',
      difficulty: 3,
      prompt: 'Corrige el error: "I has to finish this today."',
      correctAnswer: 'I have to finish this today.',
      acceptedAnswers: ['I have to finish this today', 'I have to finish this today.', "I've got to finish this today", "I've got to finish this today."],
      acceptApproximate: true,
      explanation: 'Con "I" usamos "have to", no "has to": I have to finish this today.',
    },
    {
      id: 'a2-m5-l2-ex9',
      type: 'select_correct',
      concept: "mustn't vs don't have to",
      difficulty: 3,
      prompt: 'La entrada al museo es gratuita hoy. ¿Qué dices?',
      correctAnswer: "We don't have to pay.",
      options: ["We don't have to pay.", "We mustn't pay.", 'We have to pay.'],
      explanation: 'Si no es obligatorio pagar (es gratis) → don\'t have to: We don\'t have to pay.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m5-l2-mt1',
      type: 'fill_blank',
      concept: 'has to - 3rd person',
      difficulty: 1,
      prompt: 'Completa: "He ___ to get up early."',
      promptTranslation: 'Él tiene que levantarse temprano.',
      correctAnswer: 'has',
      acceptedAnswers: ['has'],
      explanation: 'Con "he" usamos "has": He has to get up early.',
    },
    {
      id: 'a2-m5-l2-mt2',
      type: 'multiple_choice',
      concept: "don't have to - absence",
      difficulty: 2,
      prompt: '"You don\'t have to pay" significa...',
      correctAnswer: 'que pagar no es obligatorio',
      options: ['que pagar no es obligatorio', 'que está prohibido pagar', 'que debes pagar'],
      explanation: "Don't have to = no es obligatorio. Puedes pagar o no.",
    },
    {
      id: 'a2-m5-l2-mt3',
      type: 'translate',
      concept: 'have to - translate',
      difficulty: 3,
      prompt: 'Traduce: "No tienen que pagar."',
      correctAnswer: "They don't have to pay.",
      acceptedAnswers: ["They don't have to pay", 'They do not have to pay', "They don't have to pay.", 'They do not have to pay.'],
      acceptApproximate: true,
      explanation: '"No tienen que (no es obligatorio)" → don\'t have to. → They don\'t have to pay.',
    },
    {
      id: 'a2-m5-l2-mt4',
      type: 'error_correction',
      concept: 'have to - missing "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "I have go home now."',
      correctAnswer: 'I have to go home now.',
      acceptedAnswers: ['I have to go home now', 'I have to go home now.', "I've got to go home now", "I've got to go home now."],
      acceptApproximate: true,
      explanation: 'No olvides el "to": have to + verbo. → I have to go home now.',
    },
    {
      id: 'a2-m5-l2-mt5',
      type: 'true_false',
      concept: "mustn't vs don't have to",
      difficulty: 4,
      prompt: 'Para decir que algo está prohibido usamos "mustn\'t".',
      correctAnswer: 'true',
      explanation: 'Verdadero. "Mustn\'t" expresa prohibición. "Don\'t have to" solo expresa que algo no es obligatorio.',
    },
  ],
  reviewItems: ['a2-m5-l1'],
  prerequisites: ['a2-m5-l1'],
}
