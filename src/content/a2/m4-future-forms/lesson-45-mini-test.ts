import type { Lesson } from '../../types'

export const lesson45MiniTest: Lesson = {
  id: 'a2-m4-l5',
  moduleId: 'm4-future-forms',
  order: 4,
  title: 'Mini-test: el futuro en inglés y primer condicional',
  objective: 'Repasar todas las formas de futuro (will, going to, present continuous, shall) e introducir el primer condicional.',
  explanation_es: `En este mini-test repasamos todas las formas de hablar del futuro:

1. WILL → decisiones espontáneas, predicciones generales, promesas y ofertas.
2. GOING TO → planes e intenciones decididas + predicciones con evidencia.
3. PRESENT CONTINUOUS → planes ya fijados (agenda, vuelos, citas).
4. SHALL → sugerencias y ofertas con I/we.

Y añadimos una novedad: el PRIMER CONDICIONAL. Se usa para hablar de algo que probablemente pasará si se cumple una condición.

Estructura: If + present simple, will + verbo
- If it rains, we will stay at home. = Si llueve, nos quedaremos en casa.
- If you study, you will pass. = Si estudias, aprobarás.

En español diríamos "si + presente, futuro". La condición va con "if" (si) y el resultado con "will". Lo veremos con más detalle en el módulo de condicionales.

¡Buena suerte!`,
  examples: [
    { english: 'If it rains, we will stay at home.', spanish: 'Si llueve, nos quedaremos en casa.', note: 'primer condicional: if + present simple + will' },
    { english: 'If you study, you will pass.', spanish: 'Si estudias, aprobarás.' },
    { english: "I'll buy the tickets if I have time.", spanish: 'Compraré las entradas si tengo tiempo.' },
    { english: 'If we don\'t hurry, we will miss the bus.', spanish: 'Si no nos damos prisa, perderemos el autobús.' },
  ],
  rule: `Repaso del futuro:
- will → espontáneo, predicción general, promesa, oferta.
- going to → plan decidido, predicción con evidencia.
- present continuous → plan fijado con fecha/hora.
- shall + I/we → sugerencia u oferta.

Primer condicional:
- If + present simple, will + verbo.
- If it rains, we will stay at home.
- If you study, you will pass.`,
  commonMistakes: [
    { wrong: '❌ If it will rain, we will stay at home.', correct: '✅ If it rains, we will stay at home.', explanation: 'Después de "if" usamos present simple, NO "will".' },
    { wrong: '❌ I will going to buy a house.', correct: "✅ I'm going to buy a house.", explanation: 'No mezcles "will" y "going to" en la misma frase.' },
    { wrong: '❌ Shall you come with me?', correct: '✅ Will you come with me? / Can you come with me?', explanation: '"Shall" solo se usa con I/we.' },
  ],
  vocabulary: [
    { word: 'if', translation_es: 'si (condición)', level: 'A2', category: 'conditional', partOfSpeech: 'conjunction', example: 'If it rains, we stay at home.', exampleTranslation: 'Si llueve, nos quedamos en casa.' },
    { word: 'to pass', translation_es: 'aprobar', level: 'A2', category: 'conditional', partOfSpeech: 'verb', example: 'If you study, you will pass.', exampleTranslation: 'Si estudias, aprobarás.' },
    { word: 'to stay', translation_es: 'quedarse', level: 'A1', category: 'conditional', partOfSpeech: 'verb', example: 'We will stay at home.', exampleTranslation: 'Nos quedaremos en casa.' },
    { word: 'to miss', translation_es: 'perder (autobús, tren)', level: 'A2', category: 'conditional', partOfSpeech: 'verb', example: 'We will miss the bus.', exampleTranslation: 'Perderemos el autobús.' },
    { word: 'to hurry', translation_es: 'darse prisa', level: 'A2', category: 'conditional', partOfSpeech: 'verb', example: "If we don't hurry, we will be late.", exampleTranslation: 'Si no nos damos prisa, llegaremos tarde.' },
  ],
  grammarPoints: [
    {
      id: 'gp-first-conditional-intro',
      level: 'A2',
      name: 'First conditional (introduction)',
      explanation_es: 'El primer condicional expresa una condición real y probable. La parte con "if" usa present simple; el resultado usa "will".',
      formula: 'If + present simple, will + verbo',
      examples: ['If it rains, we will stay at home.', 'If you study, you will pass.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m4-l5-ex1',
      type: 'multiple_choice',
      concept: 'future forms review',
      difficulty: 1,
      prompt: 'El teléfono suena y lo contestas. ¿Qué forma usas?',
      correctAnswer: 'will',
      options: ['will', 'going to', 'present continuous'],
      explanation: 'Es una decisión espontánea → will: I\'ll answer it!',
    },
    {
      id: 'a2-m4-l5-ex2',
      type: 'multiple_choice',
      concept: 'future forms review',
      difficulty: 2,
      prompt: 'Ya tienes el vuelo reservado para el viernes. ¿Qué dices?',
      correctAnswer: "We're flying to London on Friday.",
      options: ["We're flying to London on Friday.", "We will fly to London!", 'We are go to fly to London.'],
      explanation: 'Plan fijado con fecha → present continuous: We\'re flying to London on Friday.',
    },
    {
      id: 'a2-m4-l5-ex3',
      type: 'fill_blank',
      concept: 'first conditional - if + present',
      difficulty: 2,
      prompt: 'Completa: "If it ___, we will stay at home." (rain)',
      promptTranslation: 'Si llueve, nos quedaremos en casa.',
      correctAnswer: 'rains',
      acceptedAnswers: ['rains', 'rain'],
      explanation: 'Después de "if" usamos present simple. Con "it" → rains: If it rains, we will stay at home.',
    },
    {
      id: 'a2-m4-l5-ex4',
      type: 'fill_blank',
      concept: 'first conditional - will',
      difficulty: 2,
      prompt: 'Completa: "If you study, you ___ pass."',
      promptTranslation: 'Si estudias, aprobarás.',
      correctAnswer: 'will',
      acceptedAnswers: ["'ll", 'will'],
      explanation: 'El resultado del condicional lleva "will": If you study, you will pass.',
    },
    {
      id: 'a2-m4-l5-ex5',
      type: 'true_false',
      concept: 'first conditional - no will after if',
      difficulty: 3,
      prompt: '"If it will rain, we will stay at home" es correcta.',
      correctAnswer: 'false',
      explanation: 'Falso. Después de "if" usamos present simple (it rains), nunca "will".',
    },
    {
      id: 'a2-m4-l5-ex6',
      type: 'reorder',
      concept: 'first conditional - order',
      difficulty: 3,
      prompt: 'Ordena las palabras: stay / if / at / we / home / will / it / rains',
      promptTranslation: 'Si llueve, nos quedaremos en casa.',
      correctAnswer: 'If it rains, we will stay at home.',
      words: ['If', 'it', 'rains', 'we', 'will', 'stay', 'at', 'home'],
      explanation: 'Primero la condición con "if" (If it rains) y luego el resultado con "will" (we will stay at home).',
    },
    {
      id: 'a2-m4-l5-ex7',
      type: 'translate',
      concept: 'future forms - translate',
      difficulty: 3,
      prompt: 'Traduce: "¿Vamos al cine?" (sugerencia)',
      correctAnswer: 'Shall we go to the cinema?',
      acceptedAnswers: ['Shall we go to the cinema', 'Shall we go to the cinema?', 'Shall we go to the movies?'],
      acceptApproximate: true,
      explanation: 'Sugerencia conjunta → Shall we + verbo: Shall we go to the cinema?',
    },
    {
      id: 'a2-m4-l5-ex8',
      type: 'error_correction',
      concept: 'first conditional - no will after if',
      difficulty: 4,
      prompt: 'Corrige el error: "If you will study, you will pass."',
      correctAnswer: 'If you study, you will pass.',
      acceptedAnswers: ['If you study, you will pass', "If you study, you'll pass", 'If you study, you will pass.', "If you study, you'll pass."],
      acceptApproximate: true,
      explanation: 'Después de "if" no va "will": If you study, you will pass.',
    },
    {
      id: 'a2-m4-l5-ex9',
      type: 'reading',
      concept: 'future plans reading',
      difficulty: 4,
      prompt: 'Lee el texto sobre planes futuros y responde:',
      reading: {
        text: 'Next weekend is busy for me. On Saturday, I am going to help my brother move to his new flat. We are meeting at 9 in the morning. On Sunday, I have a date with my cousin: we are going to watch a film at the cinema. The film starts at 5 p.m. If we are late, we will miss the beginning. I think it will be a great weekend!',
        translation: 'El próximo fin de semana es ajetreado para mí. El sábado voy a ayudar a mi hermano a mudarse a su nuevo piso. Quedamos a las 9 de la mañana. El domingo tengo un plan con mi primo: vamos a ver una película en el cine. La película empieza a las 5 de la tarde. Si llegamos tarde, nos perderemos el principio. ¡Creo que será un gran fin de semana!',
        questions: [
          {
            id: 'a2-m4-l5-ex9-q1',
            type: 'multiple_choice',
            concept: 'future plans reading',
            difficulty: 4,
            prompt: '¿Qué va a hacer el narrador el sábado?',
            correctAnswer: 'help his brother move',
            options: ['go to the cinema', 'help his brother move', 'visit his cousin'],
            explanation: 'El texto dice: "On Saturday, I am going to help my brother move."',
          },
          {
            id: 'a2-m4-l5-ex9-q2',
            type: 'multiple_choice',
            concept: 'future plans reading',
            difficulty: 4,
            prompt: '¿Cuándo empieza la película?',
            correctAnswer: 'at 5 p.m.',
            options: ['at 9 a.m.', 'at 5 p.m.', 'on Saturday'],
            explanation: 'El texto dice: "The film starts at 5 p.m."',
          },
          {
            id: 'a2-m4-l5-ex9-q3',
            type: 'multiple_choice',
            concept: 'future plans reading',
            difficulty: 4,
            prompt: '¿Qué pasará si llegan tarde?',
            correctAnswer: 'They will miss the beginning.',
            options: ['They will miss the film.', 'They will miss the beginning.', 'They will miss the bus.'],
            explanation: 'El texto dice: "If we are late, we will miss the beginning."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Lee con atención: el sábado ayuda a su hermano, la película es el domingo a las 5 y llegar tarde significa perderse el principio.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m4-l5-mt1',
      type: 'multiple_choice',
      concept: 'future forms review',
      difficulty: 1,
      prompt: 'Ves nubes negras y dices: "It ___ going to rain."',
      promptTranslation: 'Va a llover.',
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      explanation: 'Hay evidencia (nubes) → going to con "it": is going to rain.',
    },
    {
      id: 'a2-m4-l5-mt2',
      type: 'fill_blank',
      concept: 'first conditional',
      difficulty: 2,
      prompt: 'Completa: "If we don\'t hurry, we ___ miss the bus."',
      promptTranslation: 'Si no nos damos prisa, perderemos el autobús.',
      correctAnswer: 'will',
      acceptedAnswers: ["'ll", 'will'],
      explanation: 'El resultado lleva "will": we will miss the bus.',
    },
    {
      id: 'a2-m4-l5-mt3',
      type: 'translate',
      concept: 'future forms - translate',
      difficulty: 3,
      prompt: 'Traduce: "Si estudias, aprobarás."',
      correctAnswer: 'If you study, you will pass.',
      acceptedAnswers: ['If you study, you will pass', "If you study, you'll pass", 'If you study, you will pass.', "If you study, you'll pass."],
      acceptApproximate: true,
      explanation: 'Primer condicional: If + present (you study) + will (you will pass).',
    },
    {
      id: 'a2-m4-l5-mt4',
      type: 'error_correction',
      concept: 'future forms - no mixing',
      difficulty: 4,
      prompt: 'Corrige el error: "I will going to buy tickets."',
      correctAnswer: "I'm going to buy tickets.",
      acceptedAnswers: ["I'm going to buy tickets", 'I will buy tickets', "I'm going to buy tickets.", 'I will buy tickets.', 'I am going to buy tickets', 'I am going to buy tickets.'],
      acceptApproximate: true,
      explanation: 'Elige una forma: o "will buy" o "going to buy". Nunca las dos juntas.',
    },
    {
      id: 'a2-m4-l5-mt5',
      type: 'true_false',
      concept: 'first conditional',
      difficulty: 4,
      prompt: 'En el primer condicional, después de "if" usamos "will".',
      correctAnswer: 'false',
      explanation: 'Falso. Después de "if" usamos present simple. "Will" va en la otra parte: If it rains, we will stay.',
    },
  ],
  reviewItems: ['a2-m4-l4'],
  prerequisites: ['a2-m4-l4'],
}
