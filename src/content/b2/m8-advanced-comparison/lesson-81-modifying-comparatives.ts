import type { Lesson } from '../../types'

export const lesson81ModifyingComparatives: Lesson = {
  id: 'b2-m8-l1',
  moduleId: 'm8-advanced-comparison',
  order: 0,
  title: 'Modificadores del comparativo: a lot, much, slightly',
  objective: 'Usar modificadores adverbiales (a lot, much, slightly, far, considerably) para graduar comparativos, en contextos predicativos y atributivos.',
  explanation_es: `Ya conocés comparativos: "bigger", "more interesting", "better". Ahora vamos a aprender a "modularlos" — hacerlos más intensos o más suaves — agregando palabras que gradúen la diferencia.

Hay dos posiciones principales donde ponen estos modificadores:

**1. Predicativos (después del verbo ser):**
- It's a lot bigger. (Es mucho más grande.)
- She's much more intelligent. (Es mucho más inteligente.)
- They're slightly taller. (Son un poco más altos.)
- The weather is far better today. (El clima está mucho mejor hoy.)
- He's considerably richer now. (Es considerablemente más rico ahora.)

En esta posición, los modificadores van ENTRE "to be" y el comparativo:
"is" + modificador + comparativo

**2. Atributivos (antes del sustantivo):**
- much more time (mucho más tiempo)
- considerably greater effort (un esfuerzo considerablemente mayor)
- far more people (muchísima más gente)

Aquí va: much/far/considerably/slightly + more/less + sustantivo

**Puntos importantes:**

1. "Much" y "a lot" son casi intercambiables en predicativos, pero "a lot" suena más informal. En atributivos, "much" es lo normal (no decimos "a lot more time", decimos "much more time").

2. "Slightly", "rather", "considerably", "far" funcionan en ambas posiciones.

3. "Rather" es más formal y lleva + adjetivo o + sustantivo, pero NO comparativo: "rather beautiful" (bastante hermoso), pero "rather more beautiful" existe en inglés formal.

4. Con comparativos de un solo sílabo (bigger, faster, warmer), a veces combinas modificador + -er (much bigger), a veces + "more" (much more expensive). La regla es: si el comparativo base lleva -er, el modificador va directo; si lleva "more", el modificador va antes de "more".

5. "Far better", "far more" son muy comunes para expresar una diferencia grande. "Slightly better" para pequeñas diferencias.

6. Comparar: "This coffee is much hotter than yesterday" (predicativo) vs. "much hotter coffee" (atributivo — aunque es menos natural, la estructura existe en literatura).`,
  examples: [
    { english: 'This job is a lot more interesting than my previous one.', spanish: 'Este trabajo es mucho más interesante que el anterior.', note: 'Predicativo: a lot modifica al comparativo more interesting.' },
    { english: 'She has much more experience than he does.', spanish: 'Ella tiene mucho más experiencia que él.', note: 'Atributivo: much + more + sustantivo.' },
    { english: 'The weather is slightly better today.', spanish: 'El clima es un poco mejor hoy.', note: 'Diferencia pequeña con slightly.' },
    { english: 'He\'s considerably older than his wife.', spanish: 'Él es considerablemente mayor que su mujer.', note: 'considerably gradúa la diferencia de edad.' },
    { english: 'Far fewer people attended this year.', spanish: 'Muchas menos personas asistieron este año.', note: 'far + fewer (comparativo); fewer es la forma comparativa de "few".' },
    { english: 'The new building is far more impressive than I expected.', spanish: 'El nuevo edificio es mucho más impresionante de lo que esperaba.', note: 'far modifica more impressive (predicativo).' },
  ],
  rule: `Estructura de comparativos modificados:

**Predicativos (be + modificador + comparativo):**
is/are + [a lot / much / slightly / far / considerably] + comparativo
- It's a lot better.
- They're slightly taller.
- She's far more intelligent.

**Atributivos (modificador + more/less + sustantivo):**
[much / far / considerably / slightly] + more/less + sustantivo
- much more time
- far fewer problems
- considerably less stress

**Regla de colocación:**
1. Modificador + comparativo de dos+ palabras: "much more interesting", "slightly less important"
2. Modificador + comparativo de un sílabo: "much bigger", "far warmer"
3. Atributivos: modificador + more/less + sustantivo (NO se coloca entre el modificador y sustantivo)

**Modificadores comunes:**
- a lot, much (intensidad media-alta)
- far (intensidad alta)
- considerably (intensidad media, formal)
- slightly, rather (intensidad baja)`,
  formation: {
    title: 'Cómo se gradúan los comparativos',
    intro: 'Para modular la intensidad de un comparativo, agregamos modificadores (a lot, much, slightly, far, considerably). La colocación cambia según el contexto sea predicativo (después de be) o atributivo (antes del sustantivo).',
    patterns: [
      {
        name: 'Predicativo — be + modificador + comparativo',
        formula: 'Sujeto + be + [a lot / much / slightly / far / considerably] + comparativo',
        examples: [
          { english: 'This job is a lot more interesting than my previous one.', spanish: 'Este trabajo es mucho más interesante que el anterior.' },
          { english: 'The weather is slightly better today.', spanish: 'El clima está un poco mejor hoy.' },
        ],
        note: 'El modificador va entre "be" y el comparativo.',
      },
      {
        name: 'Atributivo — modificador + more/less + sustantivo',
        formula: '[much / far / considerably / slightly] + more/less + sustantivo',
        examples: [
          { english: 'She has much more experience than he does.', spanish: 'Ella tiene mucha más experiencia que él.' },
          { english: 'Far fewer people attended this year.', spanish: 'Muchas menos personas asistieron este año.' },
        ],
        note: 'En atributivos se usa "much", no "a lot" ("much more time", no "a lot more time" en formal).',
      },
      {
        name: 'Con comparativo de un sílabo (-er)',
        formula: 'Modificador + comparativo en -er',
        examples: [
          { english: 'The new building is far taller than the old one.', spanish: 'El nuevo edificio es mucho más alto que el antiguo.' },
          { english: 'This coffee is much hotter than yesterday\'s.', spanish: 'Este café está mucho más caliente que el de ayer.' },
        ],
        note: 'Con -er, el modificador va directo antes del comparativo.',
      },
    ],
    notes: [
      '"Much" y "a lot" son casi intercambiables en predicativos, pero "a lot" es más informal.',
      '"Far" expresa una diferencia muy grande; "slightly", una pequeña.',
      'Estos modificadores gradúan comparativos, no adjetivos positivos ("very hot", pero "much hotter").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ This coffee is much hot.', correct: '✅ This coffee is much hotter.', explanation: 'Necesitas el comparativo (hotter), no el adjetivo positivo (hot).' },
    { wrong: '❌ She has much time more than he does.', correct: '✅ She has much more time than he does.', explanation: 'En atributivos (before noun), el orden es: much + more + sustantivo. No: much + sustantivo + more.' },
    { wrong: '❌ The new version is far more good than the old one.', correct: '✅ The new version is far better than the old one.', explanation: 'No se dice "more good" — se dice "better" (comparativo irregular). far modifica "better".' },
    { wrong: '❌ He works considerably hard.', correct: '✅ He works considerably harder. / He works very hard.', explanation: 'considerably gradúa comparativos (harder), no adjetivos positivos. Para adjetivos positivos, usa "very".' },
  ],
  vocabulary: [
    { word: 'considerably', translation_es: 'considerablemente', level: 'B2', category: 'adverbs of degree', partOfSpeech: 'adverb', example: 'The situation is considerably better.', exampleTranslation: 'La situación es considerablemente mejor.' },
    { word: 'to modulate', translation_es: 'modular, graduar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'You can modulate your tone of voice.', exampleTranslation: 'Podes modular tu tono de voz.' },
    { word: 'intensity', translation_es: 'intensidad', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'The intensity of the pain decreased.', exampleTranslation: 'La intensidad del dolor disminuyó.' },
    { word: 'slightly', translation_es: 'levemente, un poco', level: 'B2', category: 'adverbs of degree', partOfSpeech: 'adverb', example: 'The weather is slightly warmer today.', exampleTranslation: 'El clima está un poco más cálido hoy.' },
    { word: 'attribute', translation_es: 'atributo', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'Honesty is an important attribute.', exampleTranslation: 'La honestidad es un atributo importante.' },
    { word: 'predicative', translation_es: 'predicativo', level: 'B2', category: 'grammar terms', partOfSpeech: 'adjective', example: 'In "She is tall", "tall" is predicative.', exampleTranslation: 'En "She is tall", "tall" es predicativo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-modifying-comparatives',
      level: 'B2',
      name: 'Modifying comparatives with adverbs of degree',
      explanation_es: 'Intensificar o suavizar comparativos con a lot, much, slightly, far, considerably. Colocación diferente según contexto predicativo (be + modificador + comp) o atributivo (modificador + more + noun).',
      formula: 'be + [a lot/much/slightly/far/considerably] + comparative; [much/far/considerably/slightly] + more/less + noun',
      examples: [
        'The new job is much more interesting.',
        'She has considerably less free time.',
        'They\'re slightly taller than their parents.',
        'Far fewer people attended this time.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m8-l1-ex1',
      type: 'multiple_choice',
      concept: 'modifying comparatives - predicative',
      difficulty: 2,
      prompt: 'Completa: "This coffee is ___ better than yesterday\'s."',
      promptTranslation: 'Este café es mucho mejor que el de ayer.',
      correctAnswer: 'much',
      options: ['much', 'very', 'most'],
      explanation: 'Con comparativos, usas "much" (no "very"). "Much better" = mucho mejor.',
    },
    {
      id: 'b2-m8-l1-ex2',
      type: 'fill_blank',
      concept: 'modifying comparatives - attributive',
      difficulty: 2,
      prompt: 'Completa: "She has ___ more experience than her colleague."',
      promptTranslation: 'Ella tiene mucha más experiencia que su colega.',
      correctAnswer: 'much',
      explanation: 'En atributivos (before noun), "much" es el modificador estándar: much more experience.',
    },
    {
      id: 'b2-m8-l1-ex3',
      type: 'select_correct',
      concept: 'modifying comparatives - intensity',
      difficulty: 3,
      prompt: 'Si la diferencia de precio es PEQUEÑA, ¿cuál es la mejor opción?',
      correctAnswer: 'The new model is slightly more expensive.',
      options: [
        'The new model is far more expensive.',
        'The new model is slightly more expensive.',
        'The new model is much more expensive.',
      ],
      explanation: '"Slightly" expresa una diferencia pequeña. "Far" y "much" expresan diferencias grandes.',
    },
    {
      id: 'b2-m8-l1-ex4',
      type: 'error_correction',
      concept: 'modifying comparatives - very vs much',
      difficulty: 3,
      prompt: 'Encuentra el error: "Her new job is very more interesting than the old one."',
      correctAnswer: 'Her new job is much more interesting than the old one.',
      acceptedAnswers: [
        'Her new job is much more interesting than the old one',
        'Her new job is much more interesting than the old one.',
      ],
      acceptApproximate: true,
      explanation: 'Con comparativos se usa "much" (no "very"): much more interesting.',
    },
    {
      id: 'b2-m8-l1-ex5',
      type: 'reorder',
      concept: 'modifying comparatives - word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'El clima es considerablemente mejor hoy.',
      words: ['The', 'weather', 'is', 'considerably', 'better', 'today'],
      correctAnswer: 'The weather is considerably better today.',
      explanation: 'Orden: sujeto + is + modificador (considerably) + comparativo (better) + resto.',
    },
    {
      id: 'b2-m8-l1-ex6',
      type: 'translate',
      concept: 'modifying comparatives - translation',
      difficulty: 4,
      prompt: 'Traduce: "Mucha menos gente asistió este año."',
      correctAnswer: 'Far fewer people attended this year.',
      acceptedAnswers: [
        'Far fewer people attended this year',
        'Far fewer people attended this year.',
        'Much fewer people attended this year',
        'Much fewer people attended this year.',
      ],
      acceptApproximate: true,
      explanation: '"Mucha menos gente" = far/much fewer people (far/much modifica fewer). "Fewer" es el comparativo de "few".',
    },
    {
      id: 'b2-m8-l1-ex7',
      type: 'match',
      concept: 'modifying comparatives - matching',
      difficulty: 3,
      prompt: 'Relaciona cada modificador con su intensidad correspondiente.',
      promptTranslation: 'Match each modifier with its corresponding intensity.',
      correctAnswer: '',
      pairs: [
        { left: 'slightly', right: 'pequeña diferencia' },
        { left: 'far', right: 'diferencia muy grande' },
        { left: 'much', right: 'diferencia media-alta' },
        { left: 'considerably', right: 'diferencia media, formal' },
      ],
      explanation: 'Los modificadores gradúan la intensidad del comparativo: slightly (pequeño cambio), considerably (cambio notable), much (cambio importante), far (cambio muy grande).',
    },
    {
      id: 'b2-m8-l1-ex8',
      type: 'true_false',
      concept: 'modifying comparatives - usage rules',
      difficulty: 3,
      prompt: 'En atributivos (before noun), se dice "a lot more time" tanto como "much more time".',
      correctAnswer: 'false',
      explanation: 'Falso. En atributivos, "much more time" es lo estándar. "A lot more time" se oye informal/regional, pero no es lo preferible en inglés formal.',
    },
    {
      id: 'b2-m8-l1-ex9',
      type: 'listening',
      concept: 'modifying comparatives - listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Dos personas comparan dos trabajos y usan modificadores del comparativo para expresar diferencias de intensidad.',
      listening: {
        audioText:
          'A: How does your new job compare to your old one? B: Well, the salary is much higher, which is great. But the hours are considerably longer, so I\'m quite tired. The work itself is slightly more interesting, though the team is far friendlier than my previous colleagues. Overall, I think it\'s a bit better, but not by much.',
        audioUrl: '/audio/tts/b2-m8-l1-ex9.mp3',
        questions: [
          {
            id: 'b2-m8-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'How much higher is the salary in the new job?',
            correctAnswer: 'Much higher',
            options: ['Much higher', 'Slightly higher', 'Not mentioned'],
            explanation: '"The salary is much higher" — usa "much" para enfatizar la diferencia.',
          },
          {
            id: 'b2-m8-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The work in the new job is far more interesting than in the old one.',
            correctAnswer: 'false',
            explanation: 'Falso. Dice "slightly more interesting", no "far more interesting".',
          },
          {
            id: 'b2-m8-l1-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does B say about the team?',
            correctAnswer: 'The team is far friendlier than previous colleagues',
            options: [
              'The team is far friendlier than previous colleagues',
              'The team is slightly friendlier',
              'The team is as unfriendly as before',
            ],
            explanation: '"The team is far friendlier than my previous colleagues." — Usa "far" para enfatizar.',
          },
        ],
      },
    },
    {
      id: 'b2-m8-l1-ex10',
      type: 'writing',
      concept: 'modifying comparatives - writing',
      difficulty: 4,
      prompt: 'Escribí un breve email a tu jefe comparando dos propuestas de proyecto. Usá al menos 4 modificadores diferentes (much, slightly, far, considerably) para graduar tus comparativas.',
      promptTranslation: 'Write an email comparing two project proposals using at least 4 modifiers to grade your comparatives.',
      correctAnswer: '',
      explanation: 'Un buen email usa modificadores variados de forma natural para expresar diferencias de intensidad entre los proyectos.',
      taskType: 'email',
      targetReader: 'your manager',
      register: 'formal',
      contentPoints: [
        'Comparación de al menos dos aspectos (costo, tiempo, calidad, etc.)',
        'Uso de 4 modificadores diferentes (much, slightly, far, considerably)',
        'Recomendación final basada en las comparativas',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m8-l1-ex11',
      type: 'speaking',
      concept: 'modifying comparatives - speaking',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'The new apartment is considerably more spacious, though the rent is far higher than my previous place.',
      explanation: 'Practicá la entonación natural de dos comparativas modificadas en la misma frase.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m8-l1-mt1',
      type: 'multiple_choice',
      concept: 'modifying comparatives - predicative',
      difficulty: 2,
      prompt: 'Completa: "This version is ___ faster than the previous one."',
      promptTranslation: 'Esta versión es mucho más rápida que la anterior.',
      correctAnswer: 'much',
      options: ['much', 'very', 'more'],
      explanation: 'Con comparativos, "much" es lo correcto (no "very").',
    },
    {
      id: 'b2-m8-l1-mt2',
      type: 'fill_blank',
      concept: 'modifying comparatives - attributive',
      difficulty: 2,
      prompt: 'Completa: "The new plan requires ___ more effort."',
      promptTranslation: 'El nuevo plan requiere considerablemente más esfuerzo.',
      correctAnswer: 'considerably',
      explanation: 'En atributivos: considerably + more + sustantivo (effort).',
    },
    {
      id: 'b2-m8-l1-mt3',
      type: 'true_false',
      concept: 'modifying comparatives - small differences',
      difficulty: 3,
      prompt: 'Si quieres expresar una diferencia pequeña, usas "far" en lugar de "slightly".',
      correctAnswer: 'false',
      explanation: 'Falso. "Slightly" expresa diferencias pequeñas; "far" expresa diferencias grandes.',
    },
  ],
  reviewItems: [],
  prerequisites: [],
}
