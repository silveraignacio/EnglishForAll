import type { Lesson } from '../../types'

export const lesson82WhoseWhereWhenWhy: Lesson = {
  id: 'b1-m8-l2',
  moduleId: 'm8-relative-clauses-ext',
  order: 1,
  title: 'whose, where, when y why',
  objective: 'Usar whose (posesión), where (lugar), when (tiempo) y why (razón) en oraciones de relativo.',
  explanation_es: `En B1 ampliamos las oraciones de relativo con cuatro palabras nuevas:

1) whose = cuyo / cuya (posesión):
- The man whose car was stolen is angry. = El hombre cuyo coche fue robado está enfadado.
- Fíjate: "whose" va seguido directamente del objeto poseído (whose car), no de un pronombre.

2) where = donde (lugar):
- That's the town where I grew up. = Esa es la ciudad donde crecí.

3) when = cuando (tiempo):
- I remember the day when we met. = Recuerdo el día cuando nos conocimos.

4) why = por qué / por lo que (razón):
- The reason why he left is unknown. = La razón por la que se fue es desconocida.

¡CUIDADO!
- ❌ The man who his car was stolen is angry. → ✅ The man whose car was stolen is angry.
- ❌ the place where I was born in → ✅ the place where I was born. (No añadimos preposición al final con "where".)`,
  examples: [
    { english: 'The man whose car was stolen is angry.', spanish: 'El hombre cuyo coche fue robado está enfadado.', note: 'whose = posesión' },
    { english: 'That\'s the town where I grew up.', spanish: 'Esa es la ciudad donde crecí.', note: 'where = lugar' },
    { english: 'I remember the day when we met.', spanish: 'Recuerdo el día cuando nos conocimos.', note: 'when = tiempo' },
    { english: 'The reason why he left is unknown.', spanish: 'La razón por la que se fue es desconocida.', note: 'why = razón' },
    { english: 'She\'s the woman whose daughter teaches music.', spanish: 'Ella es la mujer cuya hija enseña música.' },
  ],
  rule: `Regla:
- whose + objeto poseído = cuyo/cuya: The man whose car was stolen...
- where = lugares: the town where I grew up.
- when = tiempos: the day when we met.
- why = razón (suele ir con "the reason"): the reason why he left.

Con "where" no se añade preposición al final: ❌ "where I was born in" → ✅ "where I was born".`,
  commonMistakes: [
    { wrong: '❌ The man who his car was stolen is angry.', correct: '✅ The man whose car was stolen is angry.', explanation: 'Para posesión usamos "whose" (cuyo), no "who his".' },
    { wrong: '❌ That\'s the town where I grew up in.', correct: '✅ That\'s the town where I grew up.', explanation: 'Con "where" no añadimos la preposición al final; "where" ya significa "en el que".' },
    { wrong: '❌ The reason that why he left is unknown.', correct: '✅ The reason why he left is unknown.', explanation: 'Con "the reason" usamos "why", sin "that".' },
  ],
  vocabulary: [
    { word: 'grow up', translation_es: 'crecer, criarse', level: 'B1', category: 'life events', partOfSpeech: 'phrasal verb', example: 'That\'s the town where I grew up.', exampleTranslation: 'Esa es la ciudad donde crecí.' },
    { word: 'steal', translation_es: 'robar', level: 'B1', category: 'crimes', partOfSpeech: 'verb', example: 'The man whose car was stolen is angry.', exampleTranslation: 'El hombre cuyo coche fue robado está enfadado.' },
    { word: 'unknown', translation_es: 'desconocido/a', level: 'B1', category: 'adjectives', partOfSpeech: 'adjective', example: 'The reason why he left is unknown.', exampleTranslation: 'La razón por la que se fue es desconocida.' },
    { word: 'reason', translation_es: 'razón, motivo', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'The reason why I called is simple.', exampleTranslation: 'La razón por la que llamé es simple.' },
  ],
  grammarPoints: [
    {
      id: 'gp-whose-where-when-why',
      level: 'B1',
      name: 'whose, where, when and why in relative clauses',
      explanation_es: 'whose indica posesión (cuyo/cuya) e va seguido del objeto poseído; where se usa para lugares, when para tiempos y why para razones.',
      formula: 'whose + objeto poseído | the place/town + where | the day/time + when | the reason + why',
      examples: ['The man whose car was stolen is angry.', 'That\'s the town where I grew up.', 'The reason why he left is unknown.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m8-l2-ex1',
      type: 'multiple_choice',
      concept: 'relative whose',
      difficulty: 1,
      prompt: 'Completa: "The man ___ car was stolen is angry."',
      promptTranslation: 'El hombre cuyo coche fue robado está enfadado.',
      correctAnswer: 'whose',
      options: ['whose', 'who', 'that'],
      explanation: 'Para posesión (cuyo coche) usamos "whose".',
    },
    {
      id: 'b1-m8-l2-ex2',
      type: 'fill_blank',
      concept: 'relative where',
      difficulty: 2,
      prompt: 'Completa: "That\'s the town ___ I grew up."',
      promptTranslation: 'Esa es la ciudad donde crecí.',
      correctAnswer: 'where',
      acceptedAnswers: ['where', 'Where'],
      explanation: 'Para lugares usamos "where". → the town where I grew up.',
    },
    {
      id: 'b1-m8-l2-ex3',
      type: 'multiple_choice',
      concept: 'relative when',
      difficulty: 2,
      prompt: 'Completa: "I remember the day ___ we met."',
      promptTranslation: 'Recuerdo el día cuando nos conocimos.',
      correctAnswer: 'when',
      options: ['when', 'where', 'whose'],
      explanation: 'Para tiempos usamos "when". → the day when we met.',
    },
    {
      id: 'b1-m8-l2-ex4',
      type: 'error_correction',
      concept: 'relative whose',
      difficulty: 3,
      prompt: 'Corrige el error: "The man who his car was stolen is angry."',
      promptTranslation: 'El hombre cuyo coche fue robado está enfadado.',
      correctAnswer: 'The man whose car was stolen is angry.',
      acceptedAnswers: ['The man whose car was stolen is angry', 'The man whose car was stolen is angry.', 'the man whose car was stolen is angry'],
      acceptApproximate: true,
      explanation: 'Para posesión usamos "whose" + objeto poseído: whose car, no "who his car".',
    },
    {
      id: 'b1-m8-l2-ex5',
      type: 'fill_blank',
      concept: 'relative why',
      difficulty: 3,
      prompt: 'Completa: "The reason ___ he left is unknown."',
      promptTranslation: 'La razón por la que se fue es desconocida.',
      correctAnswer: 'why',
      acceptedAnswers: ['why', 'Why'],
      explanation: 'Con "the reason" usamos "why". → The reason why he left is unknown.',
    },
    {
      id: 'b1-m8-l2-ex6',
      type: 'translate',
      concept: 'relative where',
      difficulty: 3,
      prompt: 'Traduce: "Esa es la ciudad donde crecí."',
      promptTranslation: 'That\'s the town where I grew up.',
      correctAnswer: 'That\'s the town where I grew up.',
      acceptedAnswers: ["That's the town where I grew up", "That's the town where I grew up.", "thats the town where i grew up"],
      acceptApproximate: true,
      explanation: '"La ciudad donde" = the town where. → That\'s the town where I grew up.',
    },
    {
      id: 'b1-m8-l2-ex7',
      type: 'match',
      concept: 'relative words',
      difficulty: 3,
      prompt: 'Relaciona cada palabra de relativo con su uso.',
      promptTranslation: 'Match each relative word with its use.',
      correctAnswer: 'whose=posesión (cuyo/cuya); where=lugar; when=tiempo; why=razón; who=persona',
      pairs: [
        { left: 'whose', right: 'posesión: cuyo / cuya' },
        { left: 'where', right: 'lugar: donde' },
        { left: 'when', right: 'tiempo: cuando' },
        { left: 'why', right: 'razón: por lo que' },
        { left: 'who', right: 'persona: que / quien' },
      ],
      explanation: 'Cada palabra de relativo tiene un uso: whose (posesión), where (lugar), when (tiempo), why (razón) y who (persona).',
    },
    {
      id: 'b1-m8-l2-ex8',
      type: 'true_false',
      concept: 'relative where',
      difficulty: 3,
      prompt: '"Where" se usa para hablar de tiempo.',
      promptTranslation: '"Where" is used to talk about time.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. Para tiempo usamos "when"; "where" es para lugares.',
    },
    {
      id: 'b1-m8-l2-ex9',
      type: 'reorder',
      concept: 'relative whose',
      difficulty: 3,
      prompt: 'Ordena las palabras: The / whose / man / angry / car / was / is / stolen',
      promptTranslation: 'El hombre cuyo coche fue robado está enfadado.',
      correctAnswer: 'The man whose car was stolen is angry.',
      words: ['The', 'man', 'whose', 'car', 'was', 'stolen', 'is', 'angry'],
      explanation: 'Orden: sujeto + whose + objeto poseído + verbo pasivo + verbo principal. → The man whose car was stolen is angry.',
    },
    {
      id: 'b1-m8-l2-ex10',
      type: 'multiple_choice',
      concept: 'relative where no preposition',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'That\'s the place where I was born.',
      options: ["That's the place where I was born.", "That's the place where I was born in.", "That's the place where I born."],
      explanation: 'Con "where" no añadimos preposición al final: where I was born.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m8-l2-mt1',
      type: 'multiple_choice',
      concept: 'relative whose',
      difficulty: 2,
      prompt: 'Completa: "The woman ___ daughter is a teacher is my neighbour."',
      promptTranslation: 'La mujer cuya hija es profesora es mi vecina.',
      correctAnswer: 'whose',
      options: ['whose', 'who', 'where'],
      explanation: 'Posesión → whose + objeto poseído (daughter).',
    },
    {
      id: 'b1-m8-l2-mt2',
      type: 'fill_blank',
      concept: 'relative where',
      difficulty: 2,
      prompt: 'Completa: "That\'s the house ___ I lived."',
      promptTranslation: 'Esa es la casa donde viví.',
      correctAnswer: 'where',
      acceptedAnswers: ['where', 'Where'],
      explanation: 'Lugar → where. → the house where I lived.',
    },
    {
      id: 'b1-m8-l2-mt3',
      type: 'error_correction',
      concept: 'relative whose',
      difficulty: 3,
      prompt: 'Corrige el error: "The boy who his wallet was lost is sad."',
      promptTranslation: 'El chico cuya cartera se perdió está triste.',
      correctAnswer: 'The boy whose wallet was lost is sad.',
      acceptedAnswers: ['The boy whose wallet was lost is sad', 'The boy whose wallet was lost is sad.', 'the boy whose wallet was lost is sad'],
      acceptApproximate: true,
      explanation: 'Posesión → whose + wallet, no "who his wallet".',
    },
    {
      id: 'b1-m8-l2-mt4',
      type: 'translate',
      concept: 'relative when',
      difficulty: 3,
      prompt: 'Traduce: "Recuerdo el día cuando nos conocimos."',
      promptTranslation: 'I remember the day when we met.',
      correctAnswer: 'I remember the day when we met.',
      acceptedAnswers: ['I remember the day when we met', 'I remember the day when we met.', 'i remember the day when we met'],
      acceptApproximate: true,
      explanation: '"El día cuando" = the day when. → I remember the day when we met.',
    },
    {
      id: 'b1-m8-l2-mt5',
      type: 'multiple_choice',
      concept: 'relative why',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'The reason why he left is unknown.',
      options: ['The reason why he left is unknown.', 'The reason who he left is unknown.', 'The reason where he left is unknown.'],
      explanation: 'Con "the reason" usamos "why".',
    },
  ],
  reviewItems: ['b1-m8-l1'],
  prerequisites: ['b1-m8-l1'],
}
