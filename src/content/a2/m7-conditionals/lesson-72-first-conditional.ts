import type { Lesson } from '../../types'

export const lesson72FirstConditional: Lesson = {
  id: 'a2-m7-l2',
  moduleId: 'm7-conditionals',
  order: 1,
  title: 'First conditional: situaciones posibles',
  objective: 'Hablar de situaciones posibles en el futuro con el first conditional.',
  explanation_es: `El first conditional (condicional primero) se usa para hablar de situaciones posibles en el futuro: si pasa una cosa, pasará otra.

La estructura es:

> if + present simple, will + verbo (en forma base)

La parte con "if" lleva presente simple (igual que el zero conditional). La parte del resultado lleva "will" + el verbo en forma base (sin "to" y sin -s).

Por ejemplo:
- "If it rains, we will stay at home." = Si llueve, nos quedaremos en casa.
- "If you study hard, you will pass the exam." = Si estudias mucho, aprobarás el examen.
- "I will call you if I arrive late." = Te llamaré si llego tarde.

La diferencia con el zero conditional:
- Zero conditional = 100% seguro, hechos generales: "If you heat water, it boils."
- First conditional = posible en el futuro: "If it rains, we will stay at home."

Recuerda: "will" va en la parte del resultado, NUNCA en la parte con "if". En la parte con "if" usamos presente simple.

También podemos usar la forma negativa "won't" (will not): "We won't go out if it rains." = No saldremos si llueve.`,
  examples: [
    { english: 'If it rains, we will stay at home.', spanish: 'Si llueve, nos quedaremos en casa.', note: 'if + presente simple → will + verbo.' },
    { english: 'If you study hard, you will pass the exam.', spanish: 'Si estudias mucho, aprobarás el examen.', note: 'Posibilidad futura con will.' },
    { english: 'I will call you if I arrive late.', spanish: 'Te llamaré si llego tarde.', note: 'Orden invertido: will + if.' },
    { english: 'If she has time, she will come to the party.', spanish: 'Si tiene tiempo, vendrá a la fiesta.', note: 'Con she: has (presente simple).' },
    { english: "We will miss the bus if we don't hurry.", spanish: 'Perderemos el autobús si no nos apuramos.', note: "Negativo con don't en la if-clause." },
    { english: "If you don't eat breakfast, you will be hungry.", spanish: 'Si no desayunas, tendrás hambre.', note: 'if + don\'t + verbo → will.' },
  ],
  rule: `Regla del first conditional:

- if + presente simple, will + verbo en forma base.
- "will" va en la parte del resultado, NUNCA en la if-clause.
- Con "will" el verbo va en forma base (sin -s): you will pass.
- El orden puede invertirse: "I will call you if I arrive late."
- Negativo: won't (will not) en el resultado, don't/doesn't en la if-clause.`,
  commonMistakes: [
    { wrong: '❌ If it will rain, we will stay at home.', correct: '✅ If it rains, we will stay at home.', explanation: 'En la parte con "if" usamos presente simple, nunca "will". El "will" va en la parte del resultado.' },
    { wrong: '❌ If you study hard, you pass the exam.', correct: '✅ If you study hard, you will pass the exam.', explanation: 'Para una posibilidad futura, el resultado lleva "will": you will pass.' },
    { wrong: '❌ If I will have time, I call you.', correct: '✅ If I have time, I will call you.', explanation: 'La if-clause lleva presente simple (have) y el resultado lleva will (will call).' },
  ],
  vocabulary: [
    { word: 'will', translation_es: 'partícula de futuro (haré, harás...)', level: 'A2', category: 'grammar', partOfSpeech: 'modal verb', example: 'If it rains, we will stay home.', exampleTranslation: 'Si llueve, nos quedaremos en casa.' },
    { word: 'pass', translation_es: 'aprobar', level: 'A2', category: 'education', partOfSpeech: 'verb', example: 'If you study, you will pass the exam.', exampleTranslation: 'Si estudias, aprobarás el examen.' },
    { word: 'exam', translation_es: 'examen', level: 'A2', category: 'education', partOfSpeech: 'noun', example: 'The exam is on Friday.', exampleTranslation: 'El examen es el viernes.' },
    { word: 'arrive', translation_es: 'llegar', level: 'A2', category: 'travel', partOfSpeech: 'verb', example: 'I will call you if I arrive late.', exampleTranslation: 'Te llamaré si llego tarde.' },
    { word: 'hurry', translation_es: 'darse prisa', level: 'A2', category: 'daily life', partOfSpeech: 'verb', example: "We will miss the bus if we don't hurry.", exampleTranslation: 'Perderemos el autobús si no nos apuramos.' },
    { word: 'hungry', translation_es: 'con hambre', level: 'A2', category: 'feelings', partOfSpeech: 'adjective', example: 'If you don\'t eat, you will be hungry.', exampleTranslation: 'Si no comes, tendrás hambre.' },
  ],
  grammarPoints: [
    {
      id: 'gp-first-conditional',
      level: 'A2',
      name: 'First conditional',
      explanation_es: 'Para situaciones posibles futuras: if + presente simple, will + verbo en forma base.',
      formula: 'If + present simple, will + base verb',
      examples: ['If it rains, we will stay at home.', 'I will call you if I arrive late.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m7-l2-ex1',
      type: 'multiple_choice',
      concept: 'first conditional',
      difficulty: 1,
      prompt: 'Completa: "If it rains, we ___ at home."',
      promptTranslation: 'Si llueve, nos quedaremos en casa.',
      correctAnswer: 'will stay',
      options: ['will stay', 'stay', 'stays'],
      explanation: 'En el resultado de una posibilidad futura usamos "will" + verbo: will stay.',
    },
    {
      id: 'a2-m7-l2-ex2',
      type: 'fill_blank',
      concept: 'first conditional',
      difficulty: 1,
      prompt: 'Completa: "If you study hard, you ___ pass the exam."',
      promptTranslation: 'Si estudias mucho, aprobarás el examen.',
      correctAnswer: 'will',
      acceptedAnswers: ['will', "'ll"],
      explanation: 'El resultado lleva "will" (o contracción \'ll): you will pass the exam.',
    },
    {
      id: 'a2-m7-l2-ex3',
      type: 'select_correct',
      concept: 'first conditional',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'Si llueve, nos quedaremos en casa.',
      correctAnswer: 'If it rains, we will stay at home.',
      options: ['If it will rains, we will stay at home.', 'If it rains, we will stay at home.', 'If it will rain, we stay at home.'],
      explanation: 'La if-clause lleva presente simple (rains) y el resultado lleva will (will stay).',
    },
    {
      id: 'a2-m7-l2-ex4',
      type: 'reorder',
      concept: 'first conditional',
      difficulty: 2,
      prompt: 'Ordena la frase:',
      promptTranslation: 'Si estudias mucho, aprobarás el examen.',
      correctAnswer: 'If you study hard, you will pass the exam.',
      words: ['If', 'you', 'study', 'hard,', 'you', 'will', 'pass', 'the', 'exam.'],
      explanation: 'Condición (If you study hard) + resultado (you will pass the exam).',
    },
    {
      id: 'a2-m7-l2-ex5',
      type: 'true_false',
      concept: 'first conditional',
      difficulty: 3,
      prompt: '"In the first conditional, we use "will" in the if-clause."',
      promptTranslation: 'En el first conditional, usamos "will" en la parte con "if".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'Falso', 'false.'],
      explanation: 'Es FALSO. En la if-clause usamos presente simple. "will" va solo en la parte del resultado.',
    },
    {
      id: 'a2-m7-l2-ex6',
      type: 'translate',
      concept: 'first conditional',
      difficulty: 3,
      prompt: 'Traduce: "Si llueve, nos quedaremos en casa."',
      correctAnswer: 'If it rains, we will stay at home.',
      acceptedAnswers: ['If it rains, we will stay at home', 'If it rains, we will stay home.', 'If it rains we will stay at home.'],
      acceptApproximate: true,
      explanation: '"Si llueve" = if it rains (presente simple); "nos quedaremos" = we will stay at home.',
    },
    {
      id: 'a2-m7-l2-ex7',
      type: 'error_correction',
      concept: 'first conditional',
      difficulty: 3,
      prompt: 'Corrige el error: "If it will rain, we will stay at home."',
      correctAnswer: 'If it rains, we will stay at home.',
      acceptedAnswers: ['If it rains, we will stay at home', 'if it rains, we will stay at home.', "If it rains, we'll stay at home."],
      acceptApproximate: true,
      explanation: 'En la if-clause usamos presente simple (rains), no "will". El "will" va en el resultado.',
    },
    {
      id: 'a2-m7-l2-ex8',
      type: 'match',
      concept: 'first conditional',
      difficulty: 3,
      prompt: 'Relaciona cada condición con su resultado.',
      promptTranslation: 'Match each condition with its result.',
      correctAnswer: '',
      pairs: [
        { left: 'If you study hard,', right: 'you will pass the exam.' },
        { left: 'If we leave now,', right: 'we will catch the bus.' },
        { left: 'If she is busy,', right: "she won't come to the party." },
        { left: 'If I arrive late,', right: 'I will call you.' },
        { left: 'If it snows,', right: 'the roads will be dangerous.' },
      ],
      explanation: 'Cada condición (if + presente simple) se une a un resultado posible (will/won\'t + verbo).',
    },
    {
      id: 'a2-m7-l2-ex9',
      type: 'translate',
      concept: 'first conditional',
      difficulty: 4,
      prompt: 'Traduce: "Te llamaré si llego tarde."',
      correctAnswer: 'I will call you if I arrive late.',
      acceptedAnswers: ['I will call you if I arrive late', "I'll call you if I arrive late", "I'll call you if I arrive late."],
      acceptApproximate: true,
      explanation: '"Te llamaré" = I will call you (resultado); "si llego tarde" = if I arrive late (if + presente simple).',
    },
    {
      id: 'a2-m7-l2-ex10',
      type: 'reorder',
      concept: 'first conditional',
      difficulty: 4,
      prompt: 'Ordena la frase (orden invertido):',
      promptTranslation: 'Perderemos el autobús si no nos apuramos.',
      correctAnswer: "We will miss the bus if we don't hurry.",
      words: ['We', 'will', 'miss', 'the', 'bus', 'if', 'we', "don't", 'hurry.'],
      explanation: 'Resultado (We will miss the bus) + if + condición negativa (we don\'t hurry).',
    },
  ],
  miniTest: [
    {
      id: 'a2-m7-l2-mt1',
      type: 'multiple_choice',
      concept: 'first conditional',
      difficulty: 1,
      prompt: 'Completa: "If she has time, she ___ to the party."',
      promptTranslation: 'Si tiene tiempo, vendrá a la fiesta.',
      correctAnswer: 'will come',
      options: ['will come', 'comes', 'came'],
      explanation: 'Resultado posible futuro: will + verbo. → she will come to the party.',
    },
    {
      id: 'a2-m7-l2-mt2',
      type: 'fill_blank',
      concept: 'first conditional',
      difficulty: 2,
      prompt: 'Completa: "If we ___ now, we will catch the bus." (salimos)',
      promptTranslation: 'Si salimos ahora, cogeremos el autobús.',
      correctAnswer: 'leave',
      acceptedAnswers: ['leave', 'Leave'],
      explanation: 'La if-clause lleva presente simple: If we leave now. (El resultado lleva will.)',
    },
    {
      id: 'a2-m7-l2-mt3',
      type: 'multiple_choice',
      concept: 'first conditional',
      difficulty: 2,
      prompt: 'Completa: "We won\'t go out if it ___."',
      promptTranslation: 'No saldremos si llueve.',
      correctAnswer: 'rains',
      options: ['rains', 'will rain', 'rained'],
      explanation: 'La if-clause lleva presente simple, no "will": if it rains.',
    },
    {
      id: 'a2-m7-l2-mt4',
      type: 'translate',
      concept: 'first conditional',
      difficulty: 3,
      prompt: 'Traduce: "Si estudias mucho, aprobarás el examen."',
      correctAnswer: 'If you study hard, you will pass the exam.',
      acceptedAnswers: ['If you study hard, you will pass the exam', 'If you study hard you will pass the exam.', "If you study hard, you'll pass the exam."],
      acceptApproximate: true,
      explanation: '"Si estudias mucho" = if you study hard; "aprobarás el examen" = you will pass the exam.',
    },
    {
      id: 'a2-m7-l2-mt5',
      type: 'error_correction',
      concept: 'first conditional',
      difficulty: 4,
      prompt: 'Corrige el error: "If I will have time, I call you."',
      correctAnswer: 'If I have time, I will call you.',
      acceptedAnswers: ['If I have time, I will call you', 'If I have time I will call you.', "If I have time, I'll call you."],
      acceptApproximate: true,
      explanation: 'La if-clause lleva presente simple (have) y el resultado lleva will (will call).',
    },
  ],
  reviewItems: ['a2-m7-l1'],
  prerequisites: ['a2-m7-l1'],
}
