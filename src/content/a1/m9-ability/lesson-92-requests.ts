import type { Lesson } from '../../types'

export const lesson92Requests: Lesson = {
  id: 'a1-m9-l2',
  moduleId: 'm9-ability',
  order: 1,
  title: 'Can para pedir permiso y hacer peticiones',
  objective: 'Pedir permiso con "Can I...?" y hacer peticiones a otras personas con "Can you...?".',
  explanation_es: `En inglés usamos "can" también para pedir permiso y hacer peticiones. Es una forma educada y muy común en la vida diaria.

**"Can I...?" = pedir permiso.** Lo usamos para preguntar si podemos hacer algo nosotros mismos:
- Can I go to the bathroom? = ¿Puedo ir al baño?
- Can I open the window? = ¿Puedo abrir la ventana?

**"Can you...?" = pedir a otra persona que haga algo:**
- Can you help me? = ¿Puedes ayudarme?

Recuerda la estructura: Can + I/you + verbo (sin "to") + ...?
- Can I have a coffee, please? (NO: Can I to have a coffee?)
- Can I have a coffee? (NO: Can I a coffee? — el verbo "have" es obligatorio)

Añadir "please" al final hace la petición más educada.`,
  examples: [
    { english: 'Can I have a coffee, please?', spanish: '¿Puedo tomar un café, por favor?', note: 'Can I + verbo? = pedir permiso.' },
    { english: 'Can I go to the bathroom?', spanish: '¿Puedo ir al baño?', note: 'Petición de permiso muy típica en clase.' },
    { english: 'Can you help me, please?', spanish: '¿Puedes ayudarme, por favor?', note: 'Can you + verbo? = pedir a otra persona.' },
    { english: "Can I open the window? It's hot.", spanish: '¿Puedo abrir la ventana? Hace calor.', note: 'Se explica el motivo después.' },
  ],
  rule: `**Permiso y peticiones con "can":**
- **Can I...?** → pedir permiso para hacer algo yo: Can I go to the bathroom?
- **Can you...?** → pedir a alguien que haga algo: Can you help me?

**Estructura:** Can + I/you + verbo (sin "to") + ...?
- Can I have a coffee, please?

**Recuerda:** el verbo es obligatorio (Can I have...? — nunca "Can I a coffee?").`,
  formation: {
    title: 'Cómo se forman permiso y peticiones con "can"',
    intro: 'Usamos "can" para pedir permiso (Can I...?) y para pedir a otra persona que haga algo (Can you...?). Es una forma educada y muy común.',
    patterns: [
      {
        name: 'Pedir permiso',
        formula: 'Can I + verbo en infinitivo (sin "to") + ...?',
        examples: [
          { english: 'Can I go to the bathroom?', spanish: '¿Puedo ir al baño?' },
          { english: 'Can I open the window?', spanish: '¿Puedo abrir la ventana?' },
          { english: 'Can I have a coffee, please?', spanish: '¿Puedo tomar un café, por favor?' },
        ],
        note: 'Para pedir cosas usamos el verbo "have": Can I have a coffee? (nunca "Can I a coffee?").',
      },
      {
        name: 'Petición a otra persona',
        formula: 'Can you + verbo en infinitivo (sin "to") + ...?',
        examples: [
          { english: 'Can you help me, please?', spanish: '¿Puedes ayudarme, por favor?' },
          { english: 'Can you close the door?', spanish: '¿Puedes cerrar la puerta?' },
        ],
        note: '"Can you...?" pide a otra persona que haga algo por nosotros.',
      },
    ],
    notes: [
      'Después de "can" el verbo va sin "to": Can you help me? (no "Can you to help me?").',
      'Añadir "please" (al final o al principio) hace la petición más educada: Can I have a coffee, please?',
    ],
  },
  commonMistakes: [
    { wrong: '❌ Can you to help me?', correct: '✅ Can you help me?', explanation: 'Después de "can" usamos el verbo sin "to": Can you help me? = ¿Puedes ayudarme?' },
    { wrong: '❌ Can I a coffee?', correct: '✅ Can I have a coffee?', explanation: 'La estructura necesita el verbo "have": Can I have + cosa? No podemos omitir el verbo.' },
  ],
  vocabulary: [
    { word: 'help', translation_es: 'ayudar', level: 'A1', category: 'requests', partOfSpeech: 'verb', example: 'Can you help me, please?', exampleTranslation: '¿Puedes ayudarme, por favor?' },
    { word: 'open', translation_es: 'abrir', level: 'A1', category: 'requests', partOfSpeech: 'verb', example: 'Can I open the window?', exampleTranslation: '¿Puedo abrir la ventana?' },
    { word: 'close', translation_es: 'cerrar', level: 'A1', category: 'requests', partOfSpeech: 'verb', example: 'Can you close the door?', exampleTranslation: '¿Puedes cerrar la puerta?' },
    { word: 'bathroom', translation_es: 'baño', level: 'A1', category: 'requests', partOfSpeech: 'noun', example: 'Can I go to the bathroom?', exampleTranslation: '¿Puedo ir al baño?' },
    { word: 'window', translation_es: 'ventana', level: 'A1', category: 'requests', partOfSpeech: 'noun', example: 'Can I open the window?', exampleTranslation: '¿Puedo abrir la ventana?' },
    { word: 'coffee', translation_es: 'café', level: 'A1', category: 'requests', partOfSpeech: 'noun', example: 'Can I have a coffee, please?', exampleTranslation: '¿Puedo tomar un café, por favor?' },
    { word: 'water', translation_es: 'agua', level: 'A1', category: 'requests', partOfSpeech: 'noun', example: 'Can I have some water?', exampleTranslation: '¿Puedo tomar un poco de agua?' },
    { word: 'phone', translation_es: 'teléfono', level: 'A1', category: 'requests', partOfSpeech: 'noun', example: 'Can I use your phone?', exampleTranslation: '¿Puedo usar tu teléfono?' },
  ],
  grammarPoints: [
    {
      id: 'gp-can-permission-requests',
      level: 'A1',
      name: 'Can for permission and requests',
      explanation_es: '"Can I...?" pide permiso para hacer algo y "Can you...?" pide a otra persona que haga algo. Ambos van seguidos del verbo en infinitivo sin "to".',
      formula: 'Can I + verb...? | Can you + verb...?',
      examples: ['Can I have a coffee, please?', 'Can I go to the bathroom?', 'Can you help me?', 'Can I open the window?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m9-l2-ex1',
      type: 'multiple_choice',
      concept: 'requests - Can I have',
      difficulty: 1,
      prompt: 'Completa: "Can I ___ a coffee, please?"',
      promptTranslation: '¿Puedo tomar un café, por favor?',
      correctAnswer: 'have',
      options: ['have', 'to have', 'has'],
      explanation: 'La petición es "Can I have + cosa?" — siempre con "have". → Can I have a coffee, please?',
    },
    {
      id: 'a1-m9-l2-ex2',
      type: 'multiple_choice',
      concept: 'requests - Can you',
      difficulty: 1,
      prompt: 'Completa: "___ you help me, please?"',
      promptTranslation: '¿Puedes ayudarme, por favor?',
      correctAnswer: 'Can',
      options: ['Can', 'Does', 'Are'],
      explanation: 'Para pedir a otra persona que haga algo usamos "Can you...?": Can you help me?',
    },
    {
      id: 'a1-m9-l2-ex3',
      type: 'multiple_choice',
      concept: 'requests - permission Can I',
      difficulty: 2,
      prompt: 'Estás en clase y quieres ir al baño. ¿Qué dices?',
      promptTranslation: 'You are in class and you want to go to the bathroom. What do you say?',
      correctAnswer: 'Can I go to the bathroom?',
      options: ['Can I go to the bathroom?', 'Can you go to the bathroom?', 'I go to the bathroom?'],
      explanation: 'Para pedir permiso para hacer algo yo mismo uso "Can I...?": Can I go to the bathroom? ("Can you...?" pediría a otra persona que fuera.)',
    },
    {
      id: 'a1-m9-l2-ex4',
      type: 'reorder',
      concept: 'requests - can I have coffee',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / I / have / a coffee / please',
      promptTranslation: '¿Puedo tomar un café, por favor?',
      correctAnswer: 'Can I have a coffee, please?',
      words: ['Can', 'I', 'have', 'a coffee', 'please'],
      explanation: 'La petición educada: Can I have + cosa + please. → Can I have a coffee, please?',
    },
    {
      id: 'a1-m9-l2-ex5',
      type: 'reorder',
      concept: 'requests - can you help me',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / you / help / me / please',
      promptTranslation: '¿Puedes ayudarme, por favor?',
      correctAnswer: 'Can you help me, please?',
      words: ['Can', 'you', 'help', 'me', 'please'],
      explanation: 'Pedir a otra persona: Can you + verbo + me + please. → Can you help me, please?',
    },
    {
      id: 'a1-m9-l2-ex6',
      type: 'match',
      concept: 'requests - request and response',
      difficulty: 2,
      prompt: 'Relaciona cada petición con la respuesta adecuada.',
      promptTranslation: 'Match each request with the right response.',
      correctAnswer: '',
      pairs: [
        { left: 'Can I have a coffee?', right: 'Of course. Here you are.' },
        { left: 'Can I go to the bathroom?', right: 'Yes, go ahead.' },
        { left: 'Can you help me?', right: 'Sure, no problem.' },
        { left: 'Can I open the window?', right: 'Yes, of course.' },
        { left: 'Can you say that again?', right: 'Of course.' },
      ],
      explanation: 'Cada petición tiene una respuesta lógica: pedir un café → "here you are"; pedir permiso para ir al baño → "go ahead"; pedir ayuda → "no problem"; abrir la ventana → "of course"; pedir que repitan → "of course".',
    },
    {
      id: 'a1-m9-l2-ex7',
      type: 'error_correction',
      concept: 'requests - no to after can',
      difficulty: 3,
      prompt: 'Corrige el error: "Can you to help me?"',
      correctAnswer: 'Can you help me?',
      acceptedAnswers: ['Can you help me', 'can you help me?'],
      acceptApproximate: true,
      explanation: 'Después de "can" usamos el verbo sin "to": Can you help me?',
    },
    {
      id: 'a1-m9-l2-ex8',
      type: 'error_correction',
      concept: 'requests - need the verb have',
      difficulty: 3,
      prompt: 'Corrige el error: "Can I a coffee?"',
      correctAnswer: 'Can I have a coffee?',
      acceptedAnswers: ['Can I have a coffee', 'can i have a coffee?'],
      acceptApproximate: true,
      explanation: 'Falta el verbo "have": la estructura es Can I have + cosa? → Can I have a coffee?',
    },
    {
      id: 'a1-m9-l2-ex9',
      type: 'translate',
      concept: 'requests - translate permission',
      difficulty: 3,
      prompt: 'Traduce: "¿Puedo ir al baño?"',
      correctAnswer: 'Can I go to the bathroom?',
      acceptedAnswers: ['Can I go to the bathroom', 'can i go to the bathroom?', 'Can I go to the bathroom please?'],
      acceptApproximate: true,
      explanation: '"¿Puedo ir al baño?" → Can I go to the bathroom? ("ir" → go, "baño" → bathroom).',
    },
  ],
  miniTest: [
    {
      id: 'a1-m9-l2-mt1',
      type: 'multiple_choice',
      concept: 'requests - Can I permission',
      difficulty: 1,
      prompt: 'Completa: "___ I go to the bathroom?"',
      promptTranslation: '¿Puedo ir al baño?',
      correctAnswer: 'Can',
      options: ['Can', 'Do', 'Am'],
      explanation: 'Para pedir permiso usamos "Can I...?": Can I go to the bathroom?',
    },
    {
      id: 'a1-m9-l2-mt2',
      type: 'reorder',
      concept: 'requests - can you help',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / you / help / me / please',
      promptTranslation: '¿Puedes ayudarme, por favor?',
      correctAnswer: 'Can you help me, please?',
      words: ['Can', 'you', 'help', 'me', 'please'],
      explanation: 'Can you + verbo + me + please. → Can you help me, please?',
    },
    {
      id: 'a1-m9-l2-mt3',
      type: 'error_correction',
      concept: 'requests - no to',
      difficulty: 3,
      prompt: 'Corrige el error: "Can I to have a coffee?"',
      correctAnswer: 'Can I have a coffee?',
      acceptedAnswers: ['Can I have a coffee', 'can i have a coffee?'],
      acceptApproximate: true,
      explanation: 'Después de "can" usamos el verbo sin "to": Can I have a coffee?',
    },
    {
      id: 'a1-m9-l2-mt4',
      type: 'translate',
      concept: 'requests - translate open window',
      difficulty: 3,
      prompt: 'Traduce: "¿Puedo abrir la ventana?"',
      correctAnswer: 'Can I open the window?',
      acceptedAnswers: ['Can I open the window', 'can i open the window?', 'Can I open the window please?'],
      acceptApproximate: true,
      explanation: '"¿Puedo...?" → Can I + verbo. "abrir" → open, "la ventana" → the window.',
    },
  ],
  reviewItems: ['a1-m9-l1'],
  prerequisites: ['a1-m9-l1'],
}
