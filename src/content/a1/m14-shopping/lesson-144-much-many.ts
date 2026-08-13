import type { Lesson } from '../../types'

export const lesson144MuchMany: Lesson = {
  id: 'a1-m14-l4',
  moduleId: 'm14-shopping',
  order: 3,
  title: 'much / many / a lot of',
  objective: 'Usar much, many y a lot of para hablar de cantidades y repasar cómo preguntar por cantidades con how much y how many.',
  explanation_es: `En esta lección aprenderás a hablar de cantidades con **much**, **many** y **a lot of**.

Recuerda la diferencia entre **contable** (se puede contar) e **incontable** (no se puede contar):
- Contables: apples (manzanas), shirts (camisas), friends (amigos), shops (tiendas).
- Incontables: water (agua), money (dinero), time (tiempo), food (comida).

**much** + incontable:
- How much money do you have? = ¿Cuánto dinero tienes?
- I don't have much time. = No tengo mucho tiempo.

**many** + contable en plural:
- How many shirts do you want? = ¿Cuántas camisas quieres?
- There are many shops in the city. = Hay muchas tiendas en la ciudad.

**a lot of** + contable o incontable (significa "mucho/a/os/as"):
- She has a lot of friends. = Ella tiene muchos amigos.
- We bought a lot of water. = Compramos mucha agua.

En frases afirmativas es muy común usar "a lot of" en lugar de "much"/"many". En preguntas, usamos "how much" o "how many" según la palabra sea incontable o contable.`,
  examples: [
    { english: 'How much money do you have?', spanish: '¿Cuánto dinero tienes?', note: 'money es incontable \u2192 how much.' },
    { english: 'How many shirts do you want?', spanish: '¿Cuántas camisas quieres?', note: 'shirts es contable en plural \u2192 how many.' },
    { english: 'She has a lot of friends.', spanish: 'Ella tiene muchos amigos.', note: 'a lot of + plural contable.' },
    { english: "I don't have much time.", spanish: 'No tengo mucho tiempo.', note: 'much + incontable (time).' },
    { english: 'There are many shops in the city.', spanish: 'Hay muchas tiendas en la ciudad.', note: 'many + plural contable.' },
    { english: 'We bought a lot of food.', spanish: 'Compramos mucha comida.', note: 'a lot of + incontable (food).' },
  ],
  rule: `**Cantidades:**
- **much** + incontable: How much water? / I don't have much time.
- **many** + contable en plural: How many apples? / many friends.
- **a lot of** + contable o incontable: a lot of water / a lot of friends.
- En frases afirmativas preferimos "a lot of" antes de "much" o "many".

**Preguntar cantidades:**
- How much + incontable? \u2192 How much money do you have?
- How many + contable en plural? \u2192 How many shirts do you want?`,
  commonMistakes: [
    { wrong: '❌ How much apples?', correct: '✅ How many apples?', explanation: '"Apples" es contable y plural: usamos "how many". "How much" es solo para incontables (water, money, time).' },
    { wrong: '❌ There are much people.', correct: '✅ There are many people.', explanation: '"People" es contable en plural (personas), así que usamos "many", no "much".' },
    { wrong: '❌ She has much friends.', correct: '✅ She has a lot of friends.', explanation: 'En frases afirmativas con "friends" (contable plural) usamos "a lot of" o "many", no "much".' },
    { wrong: '❌ How many money do you have?', correct: '✅ How much money do you have?', explanation: '"Money" (dinero) es incontable, así que usamos "how much", no "how many".' },
  ],
  vocabulary: [
    { word: 'much', translation_es: 'mucho (con incontables)', level: 'A1', category: 'quantity', partOfSpeech: 'determiner', example: "I don't have much money.", exampleTranslation: 'No tengo mucho dinero.' },
    { word: 'many', translation_es: 'muchos (con contables)', level: 'A1', category: 'quantity', partOfSpeech: 'determiner', example: 'How many shirts do you want?', exampleTranslation: '¿Cuántas camisas quieres?' },
    { word: 'a lot of', translation_es: 'mucho/a/os/as (con ambos)', level: 'A1', category: 'quantity', partOfSpeech: 'determiner', example: 'She has a lot of friends.', exampleTranslation: 'Ella tiene muchos amigos.' },
    { word: 'money', translation_es: 'dinero', level: 'A1', category: 'quantity', partOfSpeech: 'noun', example: 'How much money do you have?', exampleTranslation: '¿Cuánto dinero tienes?' },
    { word: 'time', translation_es: 'tiempo', level: 'A1', category: 'quantity', partOfSpeech: 'noun', example: "I don't have much time.", exampleTranslation: 'No tengo mucho tiempo.' },
    { word: 'water', translation_es: 'agua', level: 'A1', category: 'quantity', partOfSpeech: 'noun', example: 'We bought a lot of water.', exampleTranslation: 'Compramos mucha agua.' },
  ],
  grammarPoints: [
    {
      id: 'gp-much-many-a-lot-of',
      level: 'A1',
      name: 'much / many / a lot of',
      explanation_es: '"Much" se usa con sustantivos incontables, "many" con contables en plural, y "a lot of" con ambos. Para preguntar cantidades: "how much" + incontable y "how many" + contable en plural.',
      formula: 'much + uncountable | many + plural countable | a lot of + both | How much + uncountable? | How many + plural?',
      examples: ["I don't have much time.", 'There are many shops.', 'She has a lot of friends.', 'How many shirts do you want?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m14-l4-ex1',
      type: 'fill_blank',
      concept: 'much/many - how much water',
      difficulty: 1,
      prompt: 'Completa: "How ___ water do you have?"',
      promptTranslation: '¿Cuánta agua tienes?',
      correctAnswer: 'much',
      acceptedAnswers: ['much', 'Much'],
      explanation: '"Water" (agua) es incontable, así que usamos "how much": How much water do you have?',
    },
    {
      id: 'a1-m14-l4-ex2',
      type: 'fill_blank',
      concept: 'much/many - how many apples',
      difficulty: 2,
      prompt: 'Completa: "How ___ apples do you want?"',
      promptTranslation: '¿Cuántas manzanas quieres?',
      correctAnswer: 'many',
      acceptedAnswers: ['many', 'Many'],
      explanation: '"Apples" es contable y plural, así que usamos "how many": How many apples do you want?',
    },
    {
      id: 'a1-m14-l4-ex3',
      type: 'fill_blank',
      concept: 'a lot of - affirmative',
      difficulty: 2,
      prompt: 'Completa: "She has ___ friends."',
      promptTranslation: 'Ella tiene muchos amigos.',
      correctAnswer: 'a lot of',
      acceptedAnswers: ['a lot of', 'A lot of', 'many'],
      explanation: 'En frases afirmativas usamos "a lot of" (o "many") con "friends". \u2192 She has a lot of friends.',
    },
    {
      id: 'a1-m14-l4-ex4',
      type: 'multiple_choice',
      concept: 'much - negative uncountable',
      difficulty: 2,
      prompt: "Completa: \"I don't have ___ money.\"",
      promptTranslation: 'No tengo mucho dinero.',
      correctAnswer: 'much',
      options: ['much', 'many', 'a lot of'],
      explanation: '"Money" es incontable y es una frase negativa: usamos "much". \u2192 I don\'t have much money.',
    },
    {
      id: 'a1-m14-l4-ex5',
      type: 'multiple_choice',
      concept: 'many - plural countable',
      difficulty: 2,
      prompt: 'Completa: "There are ___ shops in the city."',
      promptTranslation: 'Hay muchas tiendas en la ciudad.',
      correctAnswer: 'many',
      options: ['many', 'much', 'a lot of'],
      explanation: '"Shops" es contable y plural: usamos "many". \u2192 There are many shops in the city.',
    },
    {
      id: 'a1-m14-l4-ex6',
      type: 'multiple_choice',
      concept: 'a lot of - uncountable food',
      difficulty: 2,
      prompt: 'Completa: "We bought ___ food."',
      promptTranslation: 'Compramos mucha comida.',
      correctAnswer: 'a lot of',
      options: ['a lot of', 'much', 'many'],
      explanation: '"Food" es incontable y es una frase afirmativa: usamos "a lot of". \u2192 We bought a lot of food.',
    },
    {
      id: 'a1-m14-l4-ex7',
      type: 'reorder',
      concept: 'how many - question',
      difficulty: 3,
      prompt: 'Ordena las palabras: How / many / shirts / do / you / want?',
      promptTranslation: '¿Cuántas camisas quieres?',
      correctAnswer: 'How many shirts do you want?',
      words: ['How', 'many', 'shirts', 'do', 'you', 'want?'],
      explanation: 'Para preguntar con un contable en plural: How many + plural + do + sujeto + verbo? \u2192 How many shirts do you want?',
    },
    {
      id: 'a1-m14-l4-ex8',
      type: 'reorder',
      concept: 'a lot of - sentence',
      difficulty: 3,
      prompt: 'Ordena las palabras: She / has / a lot of / friends.',
      promptTranslation: 'Ella tiene muchos amigos.',
      correctAnswer: 'She has a lot of friends.',
      words: ['She', 'has', 'a lot of', 'friends.'],
      explanation: '"A lot of" va delante del nombre: She has a lot of friends. = Ella tiene muchos amigos.',
    },
    {
      id: 'a1-m14-l4-ex9',
      type: 'error_correction',
      concept: 'how much vs how many',
      difficulty: 3,
      prompt: 'Corrige el error: "How much apples do you have?"',
      correctAnswer: 'How many apples do you have?',
      acceptedAnswers: ['How many apples do you have', 'How many apples do you have?', 'how many apples do you have?'],
      acceptApproximate: true,
      explanation: '"Apples" es contable y plural: usamos "how many", no "how much".',
    },
    {
      id: 'a1-m14-l4-ex10',
      type: 'error_correction',
      concept: 'much vs many - people',
      difficulty: 3,
      prompt: 'Corrige el error: "There are much people."',
      correctAnswer: 'There are many people.',
      acceptedAnswers: ['There are many people', 'There are many people.', 'there are many people.'],
      acceptApproximate: true,
      explanation: '"People" es contable en plural (personas): usamos "many", no "much". \u2192 There are many people.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m14-l4-mt1',
      type: 'fill_blank',
      concept: 'much - money',
      difficulty: 1,
      prompt: 'Completa: "How ___ money do you have?"',
      promptTranslation: '¿Cuánto dinero tienes?',
      correctAnswer: 'much',
      acceptedAnswers: ['much', 'Much'],
      explanation: '"Money" es incontable: usamos "how much". \u2192 How much money do you have?',
    },
    {
      id: 'a1-m14-l4-mt2',
      type: 'fill_blank',
      concept: 'a lot of - friends',
      difficulty: 2,
      prompt: 'Completa: "She has ___ friends."',
      promptTranslation: 'Ella tiene muchos amigos.',
      correctAnswer: 'a lot of',
      acceptedAnswers: ['a lot of', 'A lot of', 'many'],
      explanation: 'En afirmativa usamos "a lot of" (o "many") con "friends". \u2192 She has a lot of friends.',
    },
    {
      id: 'a1-m14-l4-mt3',
      type: 'multiple_choice',
      concept: 'how many - shirts',
      difficulty: 2,
      prompt: 'Completa: "How ___ shirts do you want?"',
      promptTranslation: '¿Cuántas camisas quieres?',
      correctAnswer: 'many',
      options: ['many', 'much', 'a lot of'],
      explanation: '"Shirts" es contable en plural: usamos "how many". \u2192 How many shirts do you want?',
    },
    {
      id: 'a1-m14-l4-mt4',
      type: 'error_correction',
      concept: 'how much vs how many',
      difficulty: 3,
      prompt: 'Corrige el error: "How much apples do you have?"',
      correctAnswer: 'How many apples do you have?',
      acceptedAnswers: ['How many apples do you have', 'How many apples do you have?', 'how many apples do you have?'],
      acceptApproximate: true,
      explanation: '"Apples" es contable y plural: "how many apples", no "how much apples".',
    },
    {
      id: 'a1-m14-l4-mt5',
      type: 'translate',
      concept: 'translate a lot of friends',
      difficulty: 3,
      prompt: 'Traduce: "Ella tiene muchos amigos."',
      correctAnswer: 'She has a lot of friends.',
      acceptedAnswers: ['She has a lot of friends', 'She has many friends.', 'she has a lot of friends.'],
      acceptApproximate: true,
      explanation: '"Ella tiene" \u2192 She has. "muchos amigos" \u2192 a lot of friends (o many friends).',
    },
  ],
  reviewItems: ['a1-m14-l3'],
  prerequisites: ['a1-m14-l3'],
}
