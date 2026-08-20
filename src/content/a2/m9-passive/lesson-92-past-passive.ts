import type { Lesson } from '../../types'

export const lesson92PastPassive: Lesson = {
  id: 'a2-m9-l2',
  moduleId: 'm9-passive',
  order: 1,
  title: 'La voz pasiva en pasado simple',
  objective: 'Formar la voz pasiva en pasado simple con was/were + participio.',
  explanation_es: `Para hablar de acciones pasadas en voz pasiva, usamos was/were + participio pasado.

Estructura (past simple passive):

> sujeto + was/were + participio pasado

- **was** → singular (I, he, she, it, o un nombre singular).
- **were** → plural (you, we, they, o nombres plurales).

Ejemplos:
- "This house was built in 1980." = Esta casa fue construida en 1980.
- "The window was broken last night." = La ventana se rompió anoche.
- "These photos were taken in 2010." = Estas fotos fueron tomadas en 2010.

El participio es el mismo que en el presente pasivo:
- Regulares: -ed (painted, designed, cancelled).
- Irregulares: forma propia (build → built, break → broken, take → taken, write → written).

OJO con el participio:
- ❌ was build → ✅ was built. ("build" es irregular: built.)
- ❌ were builted → ✅ were built. (No añadimos -ed a "built"; ya es el participio.)
- ❌ was broke → ✅ was broken. ("break" → "broken".)

Fíjate en el número: con sujeto plural usamos "were":
- ✅ These photos were taken in 2010.
- ❌ These photos was taken in 2010.`,
  examples: [
    { english: 'This house was built in 1980.', spanish: 'Esta casa fue construida en 1980.', note: 'was + built (singular).' },
    { english: 'The window was broken last night.', spanish: 'La ventana se rompió anoche.', note: 'was + broken.' },
    { english: 'These photos were taken in 2010.', spanish: 'Estas fotos fueron tomadas en 2010.', note: 'were + taken (plural).' },
    { english: 'The concert was cancelled because of the rain.', spanish: 'El concierto fue cancelado por la lluvia.', note: 'was + cancelled (regular -ed).' },
    { english: 'The letters were sent yesterday.', spanish: 'Las cartas fueron enviadas ayer.', note: 'were + sent (plural).' },
    { english: 'This song was written in 1995.', spanish: 'Esta canción fue escrita en 1995.', note: 'was + written.' },
  ],
  rule: `Regla de la pasiva en pasado:

- sujeto + was/were + participio pasado.
- was → singular. were → plural.
- El participio no cambia con was/were.
- Verbos irregulares comunes: build → built, break → broken, take → taken, write → written, send → sent.`,
  formation: {
    title: 'Cómo se forma la voz pasiva en pasado',
    intro: 'Para acciones pasadas en pasiva usamos was/were + participio pasado. El foco está en la acción, no en quién la hizo.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + was / were + participio pasado + complemento',
        examples: [
          { english: 'This house was built in 1980.', spanish: 'Esta casa fue construida en 1980.' },
          { english: 'The window was broken last night.', spanish: 'La ventana se rompió anoche.' },
          { english: 'These photos were taken in 2010.', spanish: 'Estas fotos fueron tomadas en 2010.' },
          { english: 'The letters were sent yesterday.', spanish: 'Las cartas fueron enviadas ayer.' },
        ],
        note: 'was → singular (I, he, she, it). were → plural (you, we, they). El participio no cambia con was/were.',
      },
    ],
    notes: [
      'El participio es el mismo que en la pasiva de presente: regulares -ed (cancelled, painted); irregulares forma propia.',
      'Irregulares comunes: build → built, break → broken, take → taken, write → written, send → sent.',
      'Ojo: no añadas -ed a un participio irregular: were built (no "were builded") y no uses el pasado simple: was broken (no "was broke").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ This house was build in 1980.', correct: '✅ This house was built in 1980.', explanation: '"Build" es irregular; el participio es "built", no "build".' },
    { wrong: '❌ The window was broke last night.', correct: '✅ The window was broken last night.', explanation: 'El participio de "break" es "broken", no el pasado simple "broke".' },
    { wrong: '❌ These photos was taken in 2010.', correct: '✅ These photos were taken in 2010.', explanation: '"Photos" es plural → usamos "were", no "was".' },
  ],
  vocabulary: [
    { word: 'built', translation_es: 'construido (participio de build)', level: 'A2', category: 'grammar', partOfSpeech: 'verb', example: 'This house was built in 1980.', exampleTranslation: 'Esta casa fue construida en 1980.' },
    { word: 'broken', translation_es: 'roto (participio de break)', level: 'A2', category: 'grammar', partOfSpeech: 'verb', example: 'The window was broken last night.', exampleTranslation: 'La ventana se rompió anoche.' },
    { word: 'taken', translation_es: 'tomado (participio de take)', level: 'A2', category: 'grammar', partOfSpeech: 'verb', example: 'These photos were taken in 2010.', exampleTranslation: 'Estas fotos fueron tomadas en 2010.' },
    { word: 'cancel', translation_es: 'cancelar', level: 'A2', category: 'events', partOfSpeech: 'verb', example: 'The concert was cancelled because of the rain.', exampleTranslation: 'El concierto fue cancelado por la lluvia.' },
    { word: 'last night', translation_es: 'anoche', level: 'A2', category: 'time', partOfSpeech: 'phrase', example: 'The window was broken last night.', exampleTranslation: 'La ventana se rompió anoche.' },
  ],
  grammarPoints: [
    {
      id: 'gp-past-passive',
      level: 'A2',
      name: 'Past simple passive',
      explanation_es: 'Para acciones pasadas en pasiva: was/were + participio.',
      formula: 'subject + was/were + past participle',
      examples: ['This house was built in 1980.', 'These photos were taken in 2010.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m9-l2-ex1',
      type: 'multiple_choice',
      concept: 'past simple passive',
      difficulty: 1,
      prompt: 'Completa: "This house ___ built in 1980."',
      promptTranslation: 'Esta casa fue construida en 1980.',
      correctAnswer: 'was',
      options: ['was', 'were', 'is'],
      explanation: '"This house" es singular → was. → This house was built in 1980.',
    },
    {
      id: 'a2-m9-l2-ex2',
      type: 'fill_blank',
      concept: 'past simple passive',
      difficulty: 1,
      prompt: 'Completa: "These photos ___ taken in 2010."',
      promptTranslation: 'Estas fotos fueron tomadas en 2010.',
      correctAnswer: 'were',
      acceptedAnswers: ['were', 'Were'],
      explanation: '"These photos" es plural → were. → These photos were taken in 2010.',
    },
    {
      id: 'a2-m9-l2-ex3',
      type: 'multiple_choice',
      concept: 'past simple passive',
      difficulty: 2,
      prompt: 'Completa: "The window was ___ last night."',
      promptTranslation: 'La ventana se rompió anoche.',
      correctAnswer: 'broken',
      options: ['broken', 'broke', 'break'],
      explanation: 'El participio de "break" es "broken". → The window was broken last night.',
    },
    {
      id: 'a2-m9-l2-ex4',
      type: 'reorder',
      concept: 'past simple passive',
      difficulty: 2,
      prompt: 'Ordena la frase:',
      promptTranslation: 'Esta casa fue construida en 1980.',
      correctAnswer: 'This house was built in 1980.',
      words: ['This', 'house', 'was', 'built', 'in', '1980.'],
      explanation: 'Sujeto (This house) + was + participio (built) + in 1980.',
    },
    {
      id: 'a2-m9-l2-ex5',
      type: 'select_correct',
      concept: 'past simple passive',
      difficulty: 3,
      prompt: 'Selecciona la frase pasiva correcta.',
      promptTranslation: 'Estas fotos fueron tomadas en 2010.',
      correctAnswer: 'These photos were taken in 2010.',
      options: ['These photos were taken in 2010.', 'These photos was taken in 2010.', 'These photos were taked in 2010.'],
      explanation: '"Photos" es plural → were, y el participio de "take" es "taken" (irregular).',
    },
    {
      id: 'a2-m9-l2-ex6',
      type: 'error_correction',
      concept: 'past simple passive',
      difficulty: 3,
      prompt: 'Corrige el error: "This house was build in 1980."',
      correctAnswer: 'This house was built in 1980.',
      acceptedAnswers: ['This house was built in 1980', 'This house was built in 1980.'],
      acceptApproximate: true,
      explanation: '"Build" es irregular; el participio es "built", no "build".',
    },
    {
      id: 'a2-m9-l2-ex7',
      type: 'true_false',
      concept: 'past simple passive',
      difficulty: 3,
      prompt: '"These photos were taken in 2010" is a correct sentence.',
      promptTranslation: '"Estas fotos fueron tomadas en 2010" es una frase correcta.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. "Photos" es plural → were + participio (taken).',
    },
    {
      id: 'a2-m9-l2-ex8',
      type: 'match',
      concept: 'past simple passive',
      difficulty: 3,
      prompt: 'Relaciona cada sujeto con su frase pasiva.',
      promptTranslation: 'Match each subject with its passive sentence.',
      correctAnswer: '',
      pairs: [
        { left: 'This house', right: 'was built in 1980.' },
        { left: 'The window', right: 'was broken last night.' },
        { left: 'These photos', right: 'were taken in 2010.' },
        { left: 'The letters', right: 'were sent yesterday.' },
        { left: 'This song', right: 'was written in 1995.' },
      ],
      explanation: 'Sujeto singular → was + participio. Sujeto plural → were + participio.',
    },
    {
      id: 'a2-m9-l2-ex9',
      type: 'translate',
      concept: 'past simple passive',
      difficulty: 3,
      prompt: 'Traduce: "Esta casa fue construida en 1980."',
      correctAnswer: 'This house was built in 1980.',
      acceptedAnswers: ['This house was built in 1980', 'This house was built in 1980.'],
      acceptApproximate: true,
      explanation: '"Fue construida" = was built (pasado pasivo). → This house was built in 1980.',
    },
    {
      id: 'a2-m9-l2-ex10',
      type: 'translate',
      concept: 'past simple passive',
      difficulty: 4,
      prompt: 'Traduce: "La ventana se rompió anoche."',
      correctAnswer: 'The window was broken last night.',
      acceptedAnswers: ['The window was broken last night', 'The window was broken last night.'],
      acceptApproximate: true,
      explanation: '"Se rompió" = was broken (pasado pasivo); "anoche" = last night.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m9-l2-mt1',
      type: 'multiple_choice',
      concept: 'past simple passive',
      difficulty: 1,
      prompt: 'Completa: "The letters ___ sent yesterday."',
      promptTranslation: 'Las cartas fueron enviadas ayer.',
      correctAnswer: 'were',
      options: ['were', 'was', 'is'],
      explanation: '"The letters" es plural → were. → The letters were sent yesterday.',
    },
    {
      id: 'a2-m9-l2-mt2',
      type: 'fill_blank',
      concept: 'past simple passive',
      difficulty: 2,
      prompt: 'Completa: "The window was ___ last night." (rota)',
      promptTranslation: 'La ventana se rompió anoche.',
      correctAnswer: 'broken',
      acceptedAnswers: ['broken', 'Broken'],
      explanation: 'Participio de "break" = broken. → The window was broken last night.',
    },
    {
      id: 'a2-m9-l2-mt3',
      type: 'multiple_choice',
      concept: 'past simple passive',
      difficulty: 2,
      prompt: 'Completa: "This song was ___ in 1995." (escrita)',
      promptTranslation: 'Esta canción fue escrita en 1995.',
      correctAnswer: 'written',
      options: ['written', 'wrote', 'write'],
      explanation: 'Participio de "write" = written. → This song was written in 1995.',
    },
    {
      id: 'a2-m9-l2-mt4',
      type: 'translate',
      concept: 'past simple passive',
      difficulty: 3,
      prompt: 'Traduce: "Estas fotos fueron tomadas en 2010."',
      correctAnswer: 'These photos were taken in 2010.',
      acceptedAnswers: ['These photos were taken in 2010', 'These photos were taken in 2010.'],
      acceptApproximate: true,
      explanation: '"Fueron tomadas" = were taken (plural); "en 2010" = in 2010.',
    },
    {
      id: 'a2-m9-l2-mt5',
      type: 'error_correction',
      concept: 'past simple passive',
      difficulty: 4,
      prompt: 'Corrige el error: "The window was broke last night."',
      correctAnswer: 'The window was broken last night.',
      acceptedAnswers: ['The window was broken last night', 'The window was broken last night.'],
      acceptApproximate: true,
      explanation: 'El participio de "break" es "broken", no el pasado simple "broke".',
    },
  ],
  reviewItems: ['a2-m9-l1'],
  workbookRefs: [
    { levelId: 'a2', page: 9, exercises: [1, 2, 4, 5, 6], note: 'Práctica de la voz pasiva en presente y pasado' },
  ],
  prerequisites: ['a2-m9-l1'],
}
