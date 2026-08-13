import type { Lesson } from '../../types'

export const lesson84Restaurant: Lesson = {
  id: 'a1-m8-l4',
  moduleId: 'm8-food',
  order: 3,
  title: 'En el restaurante',
  objective: 'Aprender a pedir comida en un restaurante y a comunicarse en situaciones sencillas con el camarero.',
  explanation_es: `En un restaurante necesitas algunas frases clave. Estas son las más importantes:

- **Can I have...?** = ¿Me pone...? / ¿Puedo tomar...? — Can I have a coffee, please?
- **I'd like...** (I would like) = Me gustaría... / Quisiera... — I'd like a pizza.
- **A table for two, please.** = Una mesa para dos, por favor.
- **How much is it?** = ¿Cuánto cuesta?
- **The bill, please.** = La cuenta, por favor.
- **Are you ready to order?** = ¿Está listo para pedir? (lo dice el camarero)

Fíjate en algo importante: la estructura **"Can I have...?"** necesita SIEMPRE el verbo "have". No podemos decir "Can I a coffee?" — falta el verbo. La estructura completa es: Can I have + cosa + please?

**"I'd like"** es la forma educada de pedir algo. Es mucho mejor que "I want" (quiero), que suena demasiado directo. "I'd" es la contracción de "I would".`,
  examples: [
    { english: 'Can I have a coffee, please?', spanish: '¿Me pone un café, por favor?', note: 'Can I have + cosa, please?' },
    { english: "I'd like a pizza.", spanish: 'Me gustaría una pizza.', note: "I'd like = I would like (forma educada)." },
    { english: 'The bill, please.', spanish: 'La cuenta, por favor.', note: 'Para pedir la cuenta al final de la comida.' },
    { english: 'A table for two, please.', spanish: 'Una mesa para dos, por favor.', note: 'for + número de personas.' },
    { english: 'Are you ready to order?', spanish: '¿Está listo para pedir?', note: 'Lo dice el camarero (waiter).' },
  ],
  rule: `**Frases clave del restaurante:**
- Petición: **Can I have + cosa, please?** → Can I have a coffee, please?
- Deseo educado: **I'd like + cosa** → I'd like a pizza.
- Mesa: **A table for + número** → A table for two.
- Precio: **How much is it?** → ¿Cuánto cuesta?
- Cuenta: **The bill, please.**
- El camarero pregunta: **Are you ready to order?**

Recordatorio: "Can I have...?" siempre lleva el verbo "have".`,
  commonMistakes: [
    { wrong: '❌ Can I a coffee?', correct: '✅ Can I have a coffee?', explanation: 'La estructura necesita el verbo "have": Can I have + cosa, please? No podemos omitir "have".' },
    { wrong: '❌ I want a pizza. (directo)', correct: "✅ I'd like a pizza.", explanation: '"I want" suena demasiado directo en inglés. "I\'d like" (I would like) es la forma educada de pedir.' },
    { wrong: '❌ A table of two.', correct: '✅ A table for two.', explanation: 'Para el número de personas usamos "for", no "of": a table for two.' },
    { wrong: '❌ The bill, please. Is how much?', correct: '✅ How much is it?', explanation: 'Para preguntar el precio la estructura correcta es "How much is it?", con el verbo "is" al final de la pregunta.' },
  ],
  vocabulary: [
    { word: 'menu', translation_es: 'menú, carta', level: 'A1', category: 'restaurant', partOfSpeech: 'noun', example: 'Can I have the menu, please?', exampleTranslation: '¿Me puede traer la carta, por favor?' },
    { word: 'bill', translation_es: 'cuenta', level: 'A1', category: 'restaurant', partOfSpeech: 'noun', example: 'The bill, please.', exampleTranslation: 'La cuenta, por favor.' },
    { word: 'waiter', translation_es: 'camarero', level: 'A1', category: 'restaurant', partOfSpeech: 'noun', example: 'The waiter is very nice.', exampleTranslation: 'El camarero es muy simpático.' },
    { word: 'table', translation_es: 'mesa', level: 'A1', category: 'restaurant', partOfSpeech: 'noun', example: 'A table for two, please.', exampleTranslation: 'Una mesa para dos, por favor.' },
    { word: 'order', translation_es: 'pedir', level: 'A1', category: 'restaurant', partOfSpeech: 'verb', example: 'Are you ready to order?', exampleTranslation: '¿Está listo para pedir?' },
  ],
  grammarPoints: [
    {
      id: 'gp-restaurant-requests',
      level: 'A1',
      name: 'Polite requests: Can I have...? / I\'d like...',
      explanation_es: 'Para pedir de forma educada usamos "Can I have...?" (¿me pone...?) o "I\'d like..." (me gustaría). "I\'d like" es la contracción de "I would like".',
      formula: "Can I have + noun, please? | I'd like + noun",
      examples: ['Can I have a coffee, please?', "I'd like a pizza.", 'The bill, please.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m8-l4-ex1',
      type: 'multiple_choice',
      concept: 'restaurant - Can I have',
      difficulty: 1,
      prompt: 'Completa: "Can I ___ a coffee, please?"',
      promptTranslation: '¿Me pone un café, por favor?',
      correctAnswer: 'have',
      options: ['have', 'want', 'take'],
      explanation: 'La estructura para pedir es "Can I have + cosa, please?" — siempre con "have". → Can I have a coffee, please?',
    },
    {
      id: 'a1-m8-l4-ex2',
      type: 'multiple_choice',
      concept: 'restaurant - I\'d like',
      difficulty: 2,
      prompt: 'Completa: "___ like a pizza."',
      promptTranslation: 'Me gustaría una pizza.',
      correctAnswer: "I'd",
      options: ["I'd", 'I', "I'm"],
      explanation: '"Me gustaría" se dice "I\'d like" (contracción de I would like). → I\'d like a pizza.',
    },
    {
      id: 'a1-m8-l4-ex3',
      type: 'reorder',
      concept: 'restaurant - ordering a coffee',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / I / have / a coffee / please',
      promptTranslation: '¿Me pone un café, por favor?',
      correctAnswer: 'Can I have a coffee, please?',
      words: ['Can', 'I', 'have', 'a coffee', 'please'],
      explanation: 'La petición educada: Can I have + cosa + please. → Can I have a coffee, please?',
    },
    {
      id: 'a1-m8-l4-ex4',
      type: 'reorder',
      concept: 'restaurant - table for two',
      difficulty: 3,
      prompt: "Ordena las palabras: I'd / like / a table / for / two",
      promptTranslation: 'Me gustaría una mesa para dos.',
      correctAnswer: "I'd like a table for two.",
      words: ["I'd", 'like', 'a table', 'for', 'two'],
      explanation: '"I\'d like + cosa + for + número de personas". → I\'d like a table for two.',
    },
    {
      id: 'a1-m8-l4-ex5',
      type: 'match',
      concept: 'restaurant - phrase and response',
      difficulty: 2,
      prompt: 'Relaciona cada frase del restaurante con la respuesta adecuada.',
      promptTranslation: 'Match each restaurant phrase with the right response.',
      correctAnswer: '',
      pairs: [
        { left: 'Can I have the menu, please?', right: 'Of course, here you are.' },
        { left: "I'd like a pizza.", right: 'Great choice!' },
        { left: 'How much is it?', right: "It's eight euros." },
        { left: 'The bill, please.', right: 'Sure, here you are.' },
        { left: 'A table for two, please.', right: 'This way, please.' },
      ],
      explanation: 'Cada frase se responde de forma lógica: al pedir la carta → "here you are"; al preguntar el precio → el precio; al pedir la cuenta → "sure"; para la mesa → "this way".',
    },
    {
      id: 'a1-m8-l4-ex6',
      type: 'multiple_choice',
      concept: 'restaurant - ready to order',
      difficulty: 3,
      prompt: 'Completa: "Are you ready to ___?"',
      promptTranslation: '¿Está listo para pedir?',
      correctAnswer: 'order',
      options: ['order', 'ordered', 'ordering'],
      explanation: 'Después de "ready to" usamos el verbo en infinitivo: ready to order. Lo pregunta el camarero.',
    },
    {
      id: 'a1-m8-l4-ex7',
      type: 'translate',
      concept: 'restaurant - the bill',
      difficulty: 3,
      prompt: 'Traduce: "La cuenta, por favor."',
      correctAnswer: 'The bill, please.',
      acceptedAnswers: ['The bill please', 'The bill, please', 'the bill, please.'],
      acceptApproximate: true,
      explanation: '"La cuenta" → the bill. "por favor" → please. → The bill, please.',
    },
    {
      id: 'a1-m8-l4-ex8',
      type: 'translate',
      concept: 'restaurant - I\'d like',
      difficulty: 3,
      prompt: 'Traduce: "Me gustaría una pizza."',
      correctAnswer: "I'd like a pizza.",
      acceptedAnswers: ["I'd like a pizza", "I would like a pizza.", "i'd like a pizza."],
      acceptApproximate: true,
      explanation: '"Me gustaría" → I\'d like (I would like). → I\'d like a pizza.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m8-l4-mt1',
      type: 'multiple_choice',
      concept: 'restaurant - table for',
      difficulty: 1,
      prompt: 'Completa: "A table ___ two, please."',
      promptTranslation: 'Una mesa para dos, por favor.',
      correctAnswer: 'for',
      options: ['for', 'to', 'of'],
      explanation: 'Para el número de personas usamos "for": a table for two.',
    },
    {
      id: 'a1-m8-l4-mt2',
      type: 'reorder',
      concept: 'restaurant - the bill',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / I / have / the bill / please',
      promptTranslation: '¿Me trae la cuenta, por favor?',
      correctAnswer: 'Can I have the bill, please?',
      words: ['Can', 'I', 'have', 'the bill', 'please'],
      explanation: 'Can I have + cosa + please. → Can I have the bill, please?',
    },
    {
      id: 'a1-m8-l4-mt3',
      type: 'translate',
      concept: 'restaurant - Can I have',
      difficulty: 3,
      prompt: 'Traduce: "¿Me pone un café, por favor?"',
      correctAnswer: 'Can I have a coffee, please?',
      acceptedAnswers: ['Can I have a coffee, please', 'can i have a coffee please?', 'Can I have a coffee please?'],
      acceptApproximate: true,
      explanation: 'Pedir algo: Can I have + a coffee + please. → Can I have a coffee, please?',
    },
    {
      id: 'a1-m8-l4-mt4',
      type: 'match',
      concept: 'restaurant - phrase and response',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su respuesta.',
      promptTranslation: 'Match each phrase with its response.',
      correctAnswer: '',
      pairs: [
        { left: "I'd like a salad.", right: 'Good choice!' },
        { left: 'How much is it?', right: "It's ten euros." },
        { left: 'The bill, please.', right: 'Of course.' },
        { left: 'Are you ready to order?', right: 'Yes, I am.' },
      ],
      explanation: 'Al decir qué quieres → una respuesta positiva; al preguntar el precio → el precio; al pedir la cuenta → "of course"; el camarero pregunta si estás listo → "yes, I am".',
    },
  ],
  reviewItems: ['a1-m8-l3'],
  prerequisites: ['a1-m8-l3'],
}
