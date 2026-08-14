import type { Lesson } from '../../types'

export const lesson43PastDeduction: Lesson = {
  id: 'b1-m4-l3',
  moduleId: 'm4-modals-deduction',
  order: 2,
  title: 'Deducción en pasado: must have / can\'t have / might have',
  objective: 'Hacer deducciones sobre el pasado con "must have", "can\'t have" y "might have" + participio.',
  explanation_es: `Ya sabemos deducir sobre el presente (must be, can't be, might be). Ahora vamos a deducir sobre el PASADO.

Para deducir qué pasó (o qué no pasó) usamos los modales con "have" + PARTICIPIO pasado:

- MUST HAVE + participio = "seguro que / debe de haber..." (deducción pasada positiva)
  - They must have missed the train. = Deben de haber perdido el tren.
  - She must have been tired. = Debió de estar cansada.

- CAN'T HAVE + participio = "no puede haber / seguro que no..." (deducción pasada negativa)
  - She can't have forgotten your birthday. = No puede haber olvidado tu cumpleaños.
  - He can't have left early — his coat is here. = No puede haberse ido temprano — su abrigo está aquí.

- MIGHT HAVE + participio = "quizá haya / es posible que haya..." (deducción pasada de posibilidad)
  - He might have taken the wrong bus. = Quizá haya cogido el autobús equivocado.
  - She might have gone to the bank. = Quizá haya ido al banco.

En español:
- must have = "debe de haber" / "seguramente + pretérito"
- can't have = "no puede haber" / "seguro que no + pretérito"
- might have = "quizá haya" / "es posible que + subjuntivo pasado"

¡OJO con el participio!
- Después de "have" SIEMPRE va el participio pasado: go → gone, take → taken, forget → forgotten.
- ❌ must have went → ✅ must have gone.
- Tras el modal no se conjuga el "have": ❌ must has gone → ✅ must have gone.`,
  examples: [
    { english: 'They must have missed the train.', spanish: 'Deben de haber perdido el tren.', note: 'must have + participio (missed).' },
    { english: 'She can\'t have forgotten your birthday.', spanish: 'No puede haber olvidado tu cumpleaños.', note: 'can\'t have + participio (forgotten).' },
    { english: 'He might have taken the wrong bus.', spanish: 'Quizá haya cogido el autobús equivocado.', note: 'might have + participio (taken).' },
    { english: 'The floor is wet. It must have rained.', spanish: 'El suelo está mojado. Debe de haber llovido.', note: 'Evidencia → must have rained.' },
    { english: 'She must have been tired after the flight.', spanish: 'Debió de estar cansada después del vuelo.', note: 'must have been + adjetivo.' },
    { english: 'He might have gone to the bank.', spanish: 'Quizá haya ido al banco.', note: 'might have gone.' },
  ],
  rule: `Fórmula:
sujeto + must / can't / might + have + participio
- They must have missed the train. (seguro que SÍ pasó)
- She can't have forgotten your birthday. (seguro que NO pasó)
- He might have taken the wrong bus. (quizá pasó)

Reglas:
- Después de "have" va el PARTICIPIO pasado: gone, taken, forgotten, missed.
- "Have" no cambia con la persona: he must have, they must have (nunca "must has").
- Usos:
  - must have → deducción positiva segura del pasado.
  - can't have → deducción negativa segura del pasado.
  - might have → posibilidad en el pasado.`,
  commonMistakes: [
    { wrong: '❌ They must has missed the train.', correct: '✅ They must have missed the train.', explanation: 'Tras "must" siempre "have", nunca "has": must have.' },
    { wrong: '❌ He must have went home.', correct: '✅ He must have gone home.', explanation: 'Después de "have" va el participio (gone), no el pasado (went).' },
    { wrong: '❌ She can\'t have forget your birthday.', correct: '✅ She can\'t have forgotten your birthday.', explanation: 'El participio de "forget" es "forgotten": can\'t have forgotten.' },
    { wrong: '❌ He might has taken the wrong bus.', correct: '✅ He might have taken the wrong bus.', explanation: 'Tras "might" va "have", no "has": might have taken.' },
  ],
  vocabulary: [
    { word: 'miss the train', translation_es: 'perder el tren', level: 'B1', category: 'travel', partOfSpeech: 'phrase', example: 'They must have missed the train.', exampleTranslation: 'Deben de haber perdido el tren.' },
    { word: 'forget', translation_es: 'olvidar', level: 'A2', category: 'verbs', partOfSpeech: 'verb', example: "She can't have forgotten your birthday.", exampleTranslation: 'No puede haber olvidado tu cumpleaños.' },
    { word: 'wrong bus', translation_es: 'autobús equivocado', level: 'B1', category: 'travel', partOfSpeech: 'phrase', example: 'He might have taken the wrong bus.', exampleTranslation: 'Quizá haya cogido el autobús equivocado.' },
    { word: 'floor', translation_es: 'suelo, piso', level: 'A2', category: 'home', partOfSpeech: 'noun', example: 'The floor is wet.', exampleTranslation: 'El suelo está mojado.' },
    { word: 'wet', translation_es: 'mojado', level: 'A2', category: 'adjectives', partOfSpeech: 'adjective', example: 'The floor is wet.', exampleTranslation: 'El suelo está mojado.' },
    { word: 'flight', translation_es: 'vuelo', level: 'B1', category: 'travel', partOfSpeech: 'noun', example: 'She must have been tired after the flight.', exampleTranslation: 'Debió de estar cansada después del vuelo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-past-deduction',
      level: 'B1',
      name: 'Past deduction with must / can\'t / might + have',
      explanation_es: 'Para deducir sobre el pasado usamos modal + have + participio: must have (seguro que sí), can\'t have (seguro que no), might have (posible).',
      formula: 'subject + must / can\'t / might + have + past participle',
      examples: ['They must have missed the train.', "She can't have forgotten your birthday.", 'He might have taken the wrong bus.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m4-l3-ex1',
      type: 'multiple_choice',
      concept: 'past deduction must have',
      difficulty: 1,
      prompt: 'Completa (deducción pasada positiva): "They ___ have missed the train."',
      promptTranslation: 'Deben de haber perdido el tren.',
      correctAnswer: 'must',
      options: ['must', "can't", 'might'],
      explanation: 'Deducción pasada positiva segura → "must have". → They must have missed the train.',
    },
    {
      id: 'b1-m4-l3-ex2',
      type: 'multiple_choice',
      concept: 'past deduction can\'t have',
      difficulty: 2,
      prompt: 'Completa (deducción pasada negativa): "She ___ have forgotten your birthday."',
      promptTranslation: 'No puede haber olvidado tu cumpleaños.',
      correctAnswer: "can't",
      options: ["can't", 'must', 'may'],
      explanation: 'Deducción pasada negativa segura → "can\'t have". → She can\'t have forgotten your birthday.',
    },
    {
      id: 'b1-m4-l3-ex3',
      type: 'fill_blank',
      concept: 'past deduction might have',
      difficulty: 2,
      prompt: 'Completa (posibilidad pasada): "He ___ have taken the wrong bus."',
      promptTranslation: 'Quizá haya cogido el autobús equivocado.',
      correctAnswer: 'might',
      acceptedAnswers: ['might', 'may', 'could'],
      explanation: 'Posibilidad en el pasado → "might have" (también may/could have). → He might have taken the wrong bus.',
    },
    {
      id: 'b1-m4-l3-ex4',
      type: 'fill_blank',
      concept: 'past deduction participle',
      difficulty: 2,
      prompt: 'Completa con el participio: "They must have ___ (miss) the train."',
      promptTranslation: 'Deben de haber perdido el tren.',
      correctAnswer: 'missed',
      acceptedAnswers: ['missed'],
      explanation: 'Después de "have" va el participio: "miss" → "missed". → must have missed.',
    },
    {
      id: 'b1-m4-l3-ex5',
      type: 'select_correct',
      concept: 'past deduction form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Deben de haber perdido el tren.',
      correctAnswer: 'They must have missed the train.',
      options: [
        'They must have missed the train.',
        'They must has missed the train.',
        'They must have miss the train.',
        'They must have missd the train.',
      ],
      explanation: 'Estructura correcta: must + have + participio (missed). "Must has", "have miss" y "missd" son incorrectos.',
    },
    {
      id: 'b1-m4-l3-ex6',
      type: 'true_false',
      concept: 'past deduction participle',
      difficulty: 2,
      prompt: 'Después de "must have" usamos el participio pasado del verbo.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. Tras "have" va el participio: must have gone, must have missed, must have taken.',
    },
    {
      id: 'b1-m4-l3-ex7',
      type: 'reorder',
      concept: 'past deduction might have',
      difficulty: 3,
      prompt: 'Ordena la frase (deducción pasada de posibilidad):',
      promptTranslation: 'Quizá haya cogido el autobús equivocado.',
      words: ['He', 'might', 'have', 'taken', 'the', 'wrong', 'bus.'],
      correctAnswer: 'He might have taken the wrong bus.',
      explanation: 'Estructura: sujeto + might + have + participio (taken) + complemento. → He might have taken the wrong bus.',
    },
    {
      id: 'b1-m4-l3-ex8',
      type: 'translate',
      concept: 'past deduction must have',
      difficulty: 3,
      prompt: 'Traduce: "Deben de haber perdido el tren."',
      correctAnswer: 'They must have missed the train.',
      acceptedAnswers: [
        'They must have missed the train',
        'They must have missed the train.',
        'they must have missed the train',
      ],
      acceptApproximate: true,
      explanation: '"Deben de haber" = must have. "perdido el tren" = missed the train (participio).',
    },
    {
      id: 'b1-m4-l3-ex9',
      type: 'translate',
      concept: 'past deduction can\'t have',
      difficulty: 4,
      prompt: 'Traduce: "No puede haber olvidado tu cumpleaños."',
      correctAnswer: "She can't have forgotten your birthday.",
      acceptedAnswers: [
        "She can't have forgotten your birthday",
        "She can't have forgotten your birthday.",
        'She cannot have forgotten your birthday',
        'He can\'t have forgotten your birthday',
        'she cant have forgotten your birthday',
      ],
      acceptApproximate: true,
      explanation: '"No puede haber" = can\'t have. "olvidado" = forgotten (participio). → She can\'t have forgotten your birthday.',
    },
    {
      id: 'b1-m4-l3-ex10',
      type: 'error_correction',
      concept: 'past deduction have',
      difficulty: 4,
      prompt: 'Corrige el error: "He must has gone home."',
      correctAnswer: 'He must have gone home.',
      acceptedAnswers: ['He must have gone home', 'He must have gone home.', 'he must have gone home'],
      acceptApproximate: true,
      explanation: 'Tras "must" va "have", nunca "has": must have gone home.',
    },
    {
      id: 'b1-m4-l3-ex11',
      type: 'error_correction',
      concept: 'past deduction participle',
      difficulty: 4,
      prompt: 'Corrige el error: "They must have went to the party."',
      correctAnswer: 'They must have gone to the party.',
      acceptedAnswers: [
        'They must have gone to the party',
        'They must have gone to the party.',
        'they must have gone to the party',
      ],
      acceptApproximate: true,
      explanation: 'Después de "have" va el participio (gone), no el pasado (went). → They must have gone to the party.',
    },
    {
      id: 'b1-m4-l3-ex12',
      type: 'match',
      concept: 'past deduction match',
      difficulty: 4,
      prompt: 'Relaciona cada evidencia con su deducción pasada:',
      pairs: [
        { left: 'The floor is wet.', right: 'It must have rained.' },
        { left: "His coat is still here.", right: "He can't have left." },
        { left: 'She is crying.', right: 'She might have got bad news.' },
        { left: 'They arrived very late.', right: 'They must have missed the bus.' },
        { left: 'Nobody answered the phone.', right: 'They might have been asleep.' },
      ],
      correctAnswer: 'The floor is wet.=It must have rained., His coat is still here.=He can\'t have left., She is crying.=She might have got bad news., They arrived very late.=They must have missed the bus., Nobody answered the phone.=They might have been asleep.',
      explanation: 'La evidencia firme apoya deducciones con must have / can\'t have; la evidencia débil solo sugiere posibilidad con might have.',
    },
    {
      id: 'b1-m4-l3-ex13',
      type: 'listening',
      concept: 'past deduction listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Linda está averiguando qué pasó con Sarah el fin de semana pasado. Deduce que algo malo debe de haber pasado porque no respondió mensajes, que posiblemente estuvo fuera, y que no puede haber olvidado su cumpleaños porque es muy importante.',
      listening: {
        audioText:
          "I haven\'t heard from Sarah since Friday. Something must have happened — she always responds to my messages. She might have gone away for the weekend without telling anyone. Maybe she went to the beach or the mountains. But one thing is sure: she can\'t have forgotten about my birthday party! I invited her personally. She must have been really busy or something went wrong. I hope she\'s okay.",
        questions: [
          {
            id: 'b1-m4-l3-ex13-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Why does Linda think something must have happened?',
            correctAnswer: 'Because Sarah always responds to messages and hasn\'t responded',
            options: ['Because Sarah always responds to messages and hasn\'t responded', 'Because it\'s her birthday', 'Because it\'s Friday'],
            explanation: '"Something must have happened — she always responds to my messages."',
          },
          {
            id: 'b1-m4-l3-ex13-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Linda is certain that Sarah went away for the weekend.',
            correctAnswer: 'false',
            explanation: '"She might have gone away for the weekend" — esto es posibilidad, no certeza.',
          },
          {
            id: 'b1-m4-l3-ex13-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What deduction is Linda absolutely sure about?',
            correctAnswer: 'Sarah can\'t have forgotten the birthday party',
            options: ['Sarah can\'t have forgotten the birthday party', 'Sarah went to the beach', 'Sarah is sick'],
            explanation: '"One thing is sure: she can\'t have forgotten about my birthday party!"',
          },
        ],
      },
    },
    {
      id: 'b1-m4-l3-ex14',
      type: 'writing',
      concept: 'past deduction writing',
      difficulty: 3,
      prompt: 'Escribile un email informal a un amigo especulando sobre qué debe de haber pasado en una situación del pasado (usá "must have", "can\'t have", "might have").',
      promptTranslation: 'Write an informal email to a friend speculating about what must have happened in a past situation.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con must have (deducciones positivas pasadas), can\'t have (negativas pasadas) y might have (posibilidades pasadas).',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Una situación pasada específica que explicar', 'Al menos 2 deducciones sobre lo que pasó (must have / might have)', 'Al menos 1 deducción negativa (can\'t have) sobre lo que NO pasó'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m4-l3-ex15',
      type: 'speaking',
      concept: 'past deduction pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'They must have missed the train because they arrived late.',
      explanation: 'Practicá la pronunciación de "must have" (el "have" es casi inaudible) y la entonación de la deducción pasada segura.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m4-l3-mt1',
      type: 'multiple_choice',
      concept: 'past deduction must have',
      difficulty: 1,
      prompt: 'Completa (deducción pasada positiva): "It ___ have rained — the floor is wet."',
      promptTranslation: 'Debe de haber llovido — el suelo está mojado.',
      correctAnswer: 'must',
      options: ['must', "can't", 'might'],
      explanation: 'Evidencia firme (suelo mojado) → deducción pasada segura → "must have rained".',
    },
    {
      id: 'b1-m4-l3-mt2',
      type: 'fill_blank',
      concept: 'past deduction participle',
      difficulty: 2,
      prompt: 'Completa con el participio: "She can\'t have ___ (forget) your birthday."',
      promptTranslation: 'No puede haber olvidado tu cumpleaños.',
      correctAnswer: 'forgotten',
      acceptedAnswers: ['forgotten'],
      explanation: 'El participio de "forget" es "forgotten": can\'t have forgotten.',
    },
    {
      id: 'b1-m4-l3-mt3',
      type: 'error_correction',
      concept: 'past deduction participle',
      difficulty: 4,
      prompt: 'Corrige el error: "He must have took the wrong bus."',
      correctAnswer: 'He must have taken the wrong bus.',
      acceptedAnswers: ['He must have taken the wrong bus', 'He must have taken the wrong bus.', 'he must have taken the wrong bus'],
      acceptApproximate: true,
      explanation: 'Después de "have" va el participio (taken), no el pasado (took).',
    },
    {
      id: 'b1-m4-l3-mt4',
      type: 'translate',
      concept: 'past deduction might have',
      difficulty: 3,
      prompt: 'Traduce: "Quizá haya cogido el autobús equivocado."',
      correctAnswer: 'He might have taken the wrong bus.',
      acceptedAnswers: ['He might have taken the wrong bus', 'He might have taken the wrong bus.', 'he might have taken the wrong bus'],
      acceptApproximate: true,
      explanation: '"Quizá haya" = might have. "cogido" = taken (participio). "el autobús equivocado" = the wrong bus.',
    },
    {
      id: 'b1-m4-l3-mt5',
      type: 'select_correct',
      concept: 'past deduction form',
      difficulty: 4,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'No puede haber olvidado tu cumpleaños.',
      correctAnswer: "She can't have forgotten your birthday.",
      options: [
        "She can't have forgotten your birthday.",
        "She can't has forgotten your birthday.",
        "She can't have forgot your birthday.",
        "She can't have forgetting your birthday.",
      ],
      explanation: 'Estructura correcta: can\'t + have + participio (forgotten). "Can\'t has", "have forgot" y "have forgetting" son incorrectos.',
    },
  ],
  reviewItems: ['b1-m4-l2'],
  prerequisites: ['b1-m4-l2'],
}
