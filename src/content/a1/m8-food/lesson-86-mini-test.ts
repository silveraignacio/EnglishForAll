import type { Lesson } from '../../types'

export const lesson86MiniTest: Lesson = {
  id: 'a1-m8-l6',
  moduleId: 'm8-food',
  order: 5,
  title: 'Mini-test: comida, restaurante y cantidades',
  objective: 'Evaluar el dominio del vocabulario de comida, las expresiones del restaurante y las cantidades (some/any, how much/how many).',
  explanation_es: `Esta es la lección de evaluación final del Módulo 8. Antes del mini-test, repasemos lo esencial:

**Vocabulario de comida y bebida:** apple, banana, bread, cheese, chicken, fish, meat, rice, pasta, salad, soup, vegetables, fruit, tomatoes, potatoes, eggs... y bebidas: milk, water, coffee, tea, juice, beer, wine.

**Las comidas del día:** have breakfast (desayunar), have lunch (almorzar), have dinner (cenar), snack.

**Gustos y preferencias:** I like / I love / I don't like / I hate + sustantivo o verbo -ing. Con he/she/it: likes, loves, hates, doesn't like.

**En el restaurante:** Can I have a coffee, please? / I'd like a pizza. / A table for two, please. / The bill, please. / How much is it? / Are you ready to order?

**Cantidades:** some (afirmativo), any (preguntas y negativos), How much + incontable, How many + contable en plural.

**Errores típicos a evitar:**
- ❌ I am like coffee → ✅ I like coffee.
- ❌ I breakfast at 7 → ✅ I have breakfast at 7.
- ❌ Can I a coffee? → ✅ Can I have a coffee?
- ❌ Do you have some milk? → ✅ Do you have any milk?
- ❌ How much apples? → ✅ How many apples?`,
  examples: [
    { english: 'I have breakfast at 7.', spanish: 'Desayuno a las 7.' },
    { english: "I'd like a pizza, please.", spanish: 'Me gustaría una pizza, por favor.' },
    { english: 'She likes swimming.', spanish: 'A ella le gusta nadar.' },
    { english: 'There are some apples.', spanish: 'Hay algunas manzanas.' },
    { english: 'How many apples do you have?', spanish: '¿Cuántas manzanas tienes?' },
  ],
  rule: `**Resumen del módulo:**
- Comida y bebida: eat + comida sólida, drink + bebidas, have + comida del día.
- Gustos: like / love / don't like / hate + sustantivo o verbo -ing.
- Restaurante: Can I have...? / I'd like... / A table for two, please. / The bill, please.
- Cantidades: some (✓), any (? / -), How much + incontable, How many + plural contable.
- "like" es un verbo: nunca "I am like".`,
  commonMistakes: [
    { wrong: '❌ I am like coffee.', correct: '✅ I like coffee.', explanation: '"like" es un verbo, no se usa con "to be".' },
    { wrong: '❌ I breakfast at 7.', correct: '✅ I have breakfast at 7.', explanation: 'Para desayunar usamos "have breakfast", no un verbo "breakfast".' },
    { wrong: '❌ How much apples?', correct: '✅ How many apples?', explanation: '"Apples" es contable y plural: "how many".' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m8-l6-ex1',
      type: 'multiple_choice',
      concept: 'module 8 - have + meal',
      difficulty: 1,
      prompt: 'Completa: "I ___ breakfast at 7."',
      promptTranslation: 'Desayuno a las 7.',
      correctAnswer: 'have',
      options: ['have', 'take', 'am'],
      explanation: 'Para las comidas usamos "have": have breakfast = desayunar.',
    },
    {
      id: 'a1-m8-l6-ex2',
      type: 'multiple_choice',
      concept: 'module 8 - 3rd person negative',
      difficulty: 2,
      prompt: 'Completa: "She ___ like fish."',
      promptTranslation: 'A ella no le gusta el pescado.',
      correctAnswer: "doesn't",
      options: ["don't", "doesn't", 'not'],
      explanation: 'Con "she" (3ª persona) la negativa es "doesn\'t". → She doesn\'t like fish.',
    },
    {
      id: 'a1-m8-l6-ex3',
      type: 'fill_blank',
      concept: 'module 8 - some',
      difficulty: 1,
      prompt: 'Completa: "There are ___ apples."',
      promptTranslation: 'Hay algunas manzanas.',
      correctAnswer: 'some',
      acceptedAnswers: ['some', 'Some'],
      explanation: 'Frase afirmativa → some. → There are some apples.',
    },
    {
      id: 'a1-m8-l6-ex4',
      type: 'fill_blank',
      concept: 'module 8 - how much',
      difficulty: 2,
      prompt: 'Completa: "How ___ water do you have?"',
      promptTranslation: '¿Cuánta agua tienes?',
      correctAnswer: 'much',
      acceptedAnswers: ['much', 'Much'],
      explanation: '"Water" es incontable → how much. → How much water do you have?',
    },
    {
      id: 'a1-m8-l6-ex5',
      type: 'reorder',
      concept: 'module 8 - restaurant',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / I / have / a table / for two / please',
      promptTranslation: '¿Me pone una mesa para dos, por favor?',
      correctAnswer: 'Can I have a table for two, please?',
      words: ['Can', 'I', 'have', 'a table', 'for two', 'please'],
      explanation: 'Pedido educado: Can I have + cosa + please. → Can I have a table for two, please?',
    },
    {
      id: 'a1-m8-l6-ex6',
      type: 'match',
      concept: 'module 8 - restaurant phrases',
      difficulty: 2,
      prompt: 'Relaciona cada frase del restaurante con su respuesta.',
      promptTranslation: 'Match each restaurant phrase with its response.',
      correctAnswer: '',
      pairs: [
        { left: 'Can I have the menu, please?', right: 'Of course, here you are.' },
        { left: "I'd like a pizza.", right: 'Great choice!' },
        { left: 'How much is it?', right: "It's eight euros." },
        { left: 'The bill, please.', right: 'Sure, here you are.' },
        { left: 'Are you ready to order?', right: 'Yes, I am.' },
      ],
      explanation: 'Cada frase tiene una respuesta lógica: pedir la carta → "here you are"; decir lo que quieres → "great choice"; preguntar el precio → el precio; pedir la cuenta → "sure"; la pregunta del camarero → "yes, I am".',
    },
    {
      id: 'a1-m8-l6-ex7',
      type: 'error_correction',
      concept: 'module 8 - like is a verb',
      difficulty: 3,
      prompt: 'Corrige el error: "I am like coffee."',
      correctAnswer: 'I like coffee.',
      acceptedAnswers: ['I like coffee', 'I like coffee.'],
      acceptApproximate: true,
      explanation: '"like" es un verbo, no un adjetivo: no usamos "to be". → I like coffee.',
    },
    {
      id: 'a1-m8-l6-ex8',
      type: 'translate',
      concept: 'module 8 - how many',
      difficulty: 3,
      prompt: 'Traduce: "¿Cuántas manzanas tienes?"',
      correctAnswer: 'How many apples do you have?',
      acceptedAnswers: ['How many apples do you have', 'how many apples do you have?', 'how many apples do you have'],
      acceptApproximate: true,
      explanation: '"Apples" es contable y plural → How many + apples + do you have?',
    },
    {
      id: 'a1-m8-l6-ex9',
      type: 'true_false',
      concept: 'module 8 - restaurant phrase',
      difficulty: 3,
      prompt: 'Frase correcta: "In a restaurant, The bill, please means La cuenta, por favor."',
      promptTranslation: 'En un restaurante, "The bill, please" significa "La cuenta, por favor".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE'],
      explanation: 'Verdadero. "The bill" es la cuenta y se usa para pedirla al final de la comida.',
    },
    {
      id: 'a1-m8-l6-ex10',
      type: 'multiple_choice',
      concept: 'module 8 - I\'d like',
      difficulty: 3,
      prompt: "Completa: \"I'd ___ a pizza.\"",
      promptTranslation: 'Me gustaría una pizza.',
      correctAnswer: 'like',
      options: ['like', 'liked', 'liking'],
      explanation: "I'd like (I would like) = me gustaría. Después de \"I'd\" usamos el verbo en infinitivo: like.",
    },
  ],
  miniTest: [
    {
      id: 'a1-m8-l6-mt1',
      type: 'multiple_choice',
      concept: 'module 8 final - like + -ing',
      difficulty: 2,
      prompt: 'Completa: "I like ___." (nadar)',
      promptTranslation: 'Me gusta nadar.',
      correctAnswer: 'swimming',
      options: ['swimming', 'swim', 'to swimming'],
      explanation: 'Después de "like" usamos el verbo en -ing: swim → swimming.',
    },
    {
      id: 'a1-m8-l6-mt2',
      type: 'fill_blank',
      concept: 'module 8 final - any question',
      difficulty: 2,
      prompt: 'Completa: "Do you have ___ milk?"',
      promptTranslation: '¿Tienes leche?',
      correctAnswer: 'any',
      acceptedAnswers: ['any', 'Any'],
      explanation: 'Es una pregunta → any. → Do you have any milk?',
    },
    {
      id: 'a1-m8-l6-mt3',
      type: 'multiple_choice',
      concept: 'module 8 final - how many',
      difficulty: 2,
      prompt: 'Completa: "How ___ eggs do you need?"',
      promptTranslation: '¿Cuántos huevos necesitas?',
      correctAnswer: 'many',
      options: ['much', 'many'],
      explanation: '"Eggs" es contable y plural → how many.',
    },
    {
      id: 'a1-m8-l6-mt4',
      type: 'error_correction',
      concept: 'module 8 final - have breakfast',
      difficulty: 3,
      prompt: 'Corrige el error: "I breakfast at 7."',
      correctAnswer: 'I have breakfast at 7.',
      acceptedAnswers: ['I have breakfast at 7', 'i have breakfast at 7.'],
      acceptApproximate: true,
      explanation: 'Para decir "desayuno" usamos "have breakfast": no existe el verbo "breakfast".',
    },
    {
      id: 'a1-m8-l6-mt5',
      type: 'translate',
      concept: 'module 8 final - restaurant',
      difficulty: 3,
      prompt: 'Traduce: "Me gustaría un café, por favor."',
      correctAnswer: "I'd like a coffee, please.",
      acceptedAnswers: ["I'd like a coffee please", "I would like a coffee, please.", "I'd like a coffee, please"],
      acceptApproximate: true,
      explanation: '"Me gustaría" → I\'d like (I would like). → I\'d like a coffee, please.',
    },
    {
      id: 'a1-m8-l6-mt6',
      type: 'match',
      concept: 'module 8 final - restaurant dialogue',
      difficulty: 3,
      prompt: 'Relaciona cada frase del camarero o del cliente con la respuesta lógica.',
      promptTranslation: 'Match each restaurant line with its logical response.',
      correctAnswer: '',
      pairs: [
        { left: 'Are you ready to order?', right: 'Yes, I am. I\'d like a salad.' },
        { left: "I'd like a pizza.", right: 'Great choice!' },
        { left: 'How much is the pizza?', right: "It's ten euros." },
        { left: 'The bill, please.', right: 'Of course, here you are.' },
      ],
      explanation: 'Es un mini-diálogo de restaurante: el camarero pregunta si estás listo → pides; el cliente pide → respuesta positiva; preguntas el precio → el precio; pides la cuenta → "here you are".',
    },
  ],
  reviewItems: ['a1-m8-l5'],
  prerequisites: ['a1-m8-l5'],
}
