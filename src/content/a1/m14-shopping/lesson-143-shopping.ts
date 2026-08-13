import type { Lesson } from '../../types'

export const lesson143Shopping: Lesson = {
  id: 'a1-m14-l3',
  moduleId: 'm14-shopping',
  order: 2,
  title: 'Comprar en una tienda',
  objective: 'Usar las frases esenciales para comprar en una tienda: preguntar precios, tallas y decidir comprar.',
  explanation_es: `En esta lección aprenderás las frases esenciales para comprar en una tienda. Son expresiones que usarás con el vendedor (shop assistant).

**Preguntar el precio:**
- How much is this? = ¿Cuánto cuesta esto? (para una cosa singular)
- How much are these? = ¿Cuánto cuestan estos? (para varias cosas)
- How much is this shirt? = ¿Cuánto cuesta esta camisa?

¡Cuidado! Si la cosa es plural, usamos "are": How much ARE these shoes? = ¿Cuánto cuestan estos zapatos?

**Probarse ropa:**
- Can I try it on, please? = ¿Puedo probármelo, por favor?
- "try on" significa "probarse" (ropa). No olvides el "on".

**Preguntar por la talla (size):**
- Do you have this in size large? = ¿Tienen esto en talla grande?
- Las tallas: small (pequeño), medium (mediano), large (grande).

**Decidir comprar:**
- I'll take it. = Me lo llevo. ("I'll" = I will)

Un pequeño diálogo:
- A: How much is this jacket? (¿Cuánto cuesta esta chaqueta?)
- B: It's forty euros. (Son cuarenta euros.)
- A: Do you have it in size medium? (¿La tiene en talla mediana?)
- B: Yes, here you are. (Sí, aquí tiene.)
- A: Can I try it on, please? (¿Puedo probármela, por favor?)
- B: Of course. (Por supuesto.)
- A: I'll take it. (Me la llevo.)`,
  examples: [
    { english: 'How much is this shirt?', spanish: '¿Cuánto cuesta esta camisa?', note: 'Singular: How much is...?' },
    { english: 'How much are these shoes?', spanish: '¿Cuánto cuestan estos zapatos?', note: 'Plural: How much are...?' },
    { english: 'Can I try it on, please?', spanish: '¿Puedo probármelo, por favor?', note: 'try on = probarse (ropa).' },
    { english: 'Do you have this in size large?', spanish: '¿Tienen esto en talla grande?', note: 'sizes: small, medium, large.' },
    { english: "I'll take it.", spanish: 'Me lo llevo.', note: "I'll = I will (decisión de comprar)." },
  ],
  rule: `**Frases clave para comprar:**
- Precio (singular): How much is this + prenda? → How much is this shirt?
- Precio (plural): How much are these + prenda? → How much are these shoes?
- Probarse: Can I try it on, please?
- Talla: Do you have this in size + small / medium / large?
- Comprar: I'll take it. (Me lo llevo.)
- Respuestas del vendedor: It's + precio. / Here you are. / Of course.`,
  commonMistakes: [
    { wrong: '❌ How much is the shoes?', correct: '✅ How much are the shoes?', explanation: '"shoes" es plural, así que usamos "are", no "is": How much are the shoes? = ¿Cuánto cuestan los zapatos?' },
    { wrong: '❌ How cost this?', correct: '✅ How much is this?', explanation: 'Para preguntar el precio NO usamos el verbo "cost" así. La expresión correcta es "How much is this?" (¿Cuánto cuesta esto?).' },
    { wrong: '❌ Can I try it?', correct: '✅ Can I try it on?', explanation: '"try on" significa probarse la ropa. No olvides la palabra "on": Can I try it on?' },
    { wrong: '❌ I take it. (para decidir comprar ahora)', correct: "✅ I'll take it.", explanation: 'Para decir "me lo llevo" usamos "I\'ll" (I will): I\'ll take it.' },
  ],
  vocabulary: [
    { word: 'shop', translation_es: 'tienda', level: 'A1', category: 'shopping', partOfSpeech: 'noun', example: 'The shop is next to the bank.', exampleTranslation: 'La tienda está al lado del banco.' },
    { word: 'price', translation_es: 'precio', level: 'A1', category: 'shopping', partOfSpeech: 'noun', example: 'What is the price?', exampleTranslation: '¿Cuál es el precio?' },
    { word: 'size', translation_es: 'talla', level: 'A1', category: 'shopping', partOfSpeech: 'noun', example: 'Do you have this in my size?', exampleTranslation: '¿Tienen esto en mi talla?' },
    { word: 'small', translation_es: 'pequeño (talla S)', level: 'A1', category: 'shopping', partOfSpeech: 'adjective', example: 'I need a small.', exampleTranslation: 'Necesito una talla pequeña.' },
    { word: 'medium', translation_es: 'mediano (talla M)', level: 'A1', category: 'shopping', partOfSpeech: 'adjective', example: 'Do you have this in medium?', exampleTranslation: '¿Tienen esto en mediana?' },
    { word: 'large', translation_es: 'grande (talla L)', level: 'A1', category: 'shopping', partOfSpeech: 'adjective', example: 'I want the large one.', exampleTranslation: 'Quiero el grande.' },
    { word: 'try on', translation_es: 'probarse (ropa)', level: 'A1', category: 'shopping', partOfSpeech: 'verb', example: 'Can I try it on?', exampleTranslation: '¿Puedo probármelo?' },
    { word: 'take', translation_es: 'llevarse, coger', level: 'A1', category: 'shopping', partOfSpeech: 'verb', example: "I'll take it.", exampleTranslation: 'Me lo llevo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-how-much-is-are',
      level: 'A1',
      name: 'How much is...? / How much are...?',
      explanation_es: 'Para preguntar el precio usamos "How much is" con una cosa singular (How much is this shirt?) y "How much are" con cosas en plural (How much are these shoes?).',
      formula: "How much is + singular? | How much are + plural? | I'll take it.",
      examples: ['How much is this shirt?', 'How much are these shoes?', "I'll take it."],
    },
  ],
  exercises: [
    {
      id: 'a1-m14-l3-ex1',
      type: 'multiple_choice',
      concept: 'shopping - how much is',
      difficulty: 1,
      prompt: 'Completa: "How ___ is this shirt?"',
      promptTranslation: '¿Cuánto cuesta esta camisa?',
      correctAnswer: 'much',
      options: ['much', 'many', 'cost'],
      explanation: 'Para preguntar el precio usamos "How much": How much is this shirt? = ¿Cuánto cuesta esta camisa?',
    },
    {
      id: 'a1-m14-l3-ex2',
      type: 'multiple_choice',
      concept: 'shopping - how much are',
      difficulty: 2,
      prompt: 'Completa: "How much ___ these shoes?"',
      promptTranslation: '¿Cuánto cuestan estos zapatos?',
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: '"Shoes" es plural, así que usamos "are": How much are these shoes?',
    },
    {
      id: 'a1-m14-l3-ex3',
      type: 'reorder',
      concept: 'shopping - how much is this shirt',
      difficulty: 1,
      prompt: 'Ordena las palabras: How / much / is / this / shirt?',
      promptTranslation: '¿Cuánto cuesta esta camisa?',
      correctAnswer: 'How much is this shirt?',
      words: ['How', 'much', 'is', 'this', 'shirt?'],
      explanation: 'Para preguntar el precio de una cosa singular: How much is + this + prenda? \u2192 How much is this shirt?',
    },
    {
      id: 'a1-m14-l3-ex4',
      type: 'reorder',
      concept: 'shopping - size large',
      difficulty: 2,
      prompt: 'Ordena las palabras: Do / you / have / this / in / size / large?',
      promptTranslation: '¿Tienen esto en talla grande?',
      correctAnswer: 'Do you have this in size large?',
      words: ['Do', 'you', 'have', 'this', 'in', 'size', 'large?'],
      explanation: 'Para preguntar por la talla: Do you have this in size + talla? \u2192 Do you have this in size large?',
    },
    {
      id: 'a1-m14-l3-ex5',
      type: 'match',
      concept: 'shopping - phrase and response',
      difficulty: 2,
      prompt: 'Relaciona cada frase de la tienda con la respuesta adecuada.',
      promptTranslation: 'Match each shop phrase with the right response.',
      correctAnswer: 'How much is this shirt?=It\'s fifteen euros. | Do you have this in size large?=Yes, here you are. | Can I try it on?=Of course. | I\'ll take it.=Great! Do you need a bag? | How much are these shoes?=They\'re forty euros.',
      pairs: [
        { left: 'How much is this shirt?', right: "It's fifteen euros." },
        { left: 'Do you have this in size large?', right: 'Yes, here you are.' },
        { left: 'Can I try it on?', right: 'Of course.' },
        { left: "I'll take it.", right: 'Great! Do you need a bag?' },
        { left: 'How much are these shoes?', right: "They're forty euros." },
      ],
      explanation: 'Al preguntar el precio (singular) → "It\'s..." (es...). Al pedir la talla → "Yes, here you are." (sí, aquí tiene). Al querer probarte → "Of course." (por supuesto). Al decir que compras → "Do you need a bag?" (¿necesita una bolsa?).',
    },
    {
      id: 'a1-m14-l3-ex6',
      type: 'multiple_choice',
      concept: 'shopping - try it on',
      difficulty: 2,
      prompt: 'Completa: "Can I ___ it on, please?"',
      promptTranslation: '¿Puedo probármelo, por favor?',
      correctAnswer: 'try',
      options: ['try', 'try on', 'trying'],
      explanation: 'La expresión es "try on" (probarse). Aquí "on" ya está en la frase: Can I try it on? \u2192 completa con "try".',
    },
    {
      id: 'a1-m14-l3-ex7',
      type: 'multiple_choice',
      concept: 'shopping - I\'ll take it',
      difficulty: 2,
      prompt: "Completa: \"I'll ___ it.\"",
      promptTranslation: 'Me lo llevo.',
      correctAnswer: 'take',
      options: ['take', 'try', 'buy'],
      explanation: 'Para decir "me lo llevo" usamos "I\'ll take it". \u2192 "take" = llevarse.',
    },
    {
      id: 'a1-m14-l3-ex8',
      type: 'error_correction',
      concept: 'shopping - how much is this',
      difficulty: 3,
      prompt: 'Corrige el error: "How cost this?"',
      correctAnswer: 'How much is this?',
      acceptedAnswers: ['How much is this', 'How much is this?', 'how much is this?'],
      acceptApproximate: true,
      explanation: 'Para preguntar el precio decimos "How much is this?", no "How cost this?".',
    },
    {
      id: 'a1-m14-l3-ex9',
      type: 'translate',
      concept: 'shopping - translate I\'ll take it',
      difficulty: 3,
      prompt: 'Traduce: "Me lo llevo."',
      correctAnswer: "I'll take it.",
      acceptedAnswers: ["I'll take it", 'I will take it.', "i'll take it."],
      acceptApproximate: true,
      explanation: '"Me lo llevo" \u2192 I\'ll take it. ("I\'ll" = I will, para decidir comprar.)',
    },
    {
      id: 'a1-m14-l3-ex10',
      type: 'translate',
      concept: 'shopping - translate try it on',
      difficulty: 3,
      prompt: 'Traduce: "¿Puedo probármelo, por favor?"',
      correctAnswer: 'Can I try it on, please?',
      acceptedAnswers: ['Can I try it on, please', 'Can I try it on please?', 'can i try it on please?'],
      acceptApproximate: true,
      explanation: '"¿Puedo...?" \u2192 Can I...? "probármelo" \u2192 try it on. "por favor" \u2192 please. \u2192 Can I try it on, please?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m14-l3-mt1',
      type: 'multiple_choice',
      concept: 'shopping - how much is',
      difficulty: 1,
      prompt: 'Completa: "How ___ is this coat?"',
      promptTranslation: '¿Cuánto cuesta este abrigo?',
      correctAnswer: 'much',
      options: ['much', 'many', 'are'],
      explanation: 'Para preguntar el precio usamos "How much". \u2192 How much is this coat?',
    },
    {
      id: 'a1-m14-l3-mt2',
      type: 'reorder',
      concept: 'shopping - I\'ll take it',
      difficulty: 2,
      prompt: "Ordena las palabras: I'll / take / it.",
      promptTranslation: 'Me lo llevo.',
      correctAnswer: "I'll take it.",
      words: ["I'll", 'take', 'it.'],
      explanation: 'Para decir que compras algo: I\'ll take it. = Me lo llevo.',
    },
    {
      id: 'a1-m14-l3-mt3',
      type: 'fill_blank',
      concept: 'shopping - try it on',
      difficulty: 2,
      prompt: 'Completa: "Can I try it ___, please?"',
      promptTranslation: '¿Puedo probármelo, por favor?',
      correctAnswer: 'on',
      acceptedAnswers: ['on', 'On'],
      explanation: 'La expresión es "try on" (probarse ropa). \u2192 Can I try it on, please?',
    },
    {
      id: 'a1-m14-l3-mt4',
      type: 'multiple_choice',
      concept: 'shopping - how much are',
      difficulty: 2,
      prompt: 'Completa: "How much ___ these boots?"',
      promptTranslation: '¿Cuánto cuestan estas botas?',
      correctAnswer: 'are',
      options: ['are', 'is', 'be'],
      explanation: '"Boots" es plural, así que usamos "are": How much are these boots?',
    },
    {
      id: 'a1-m14-l3-mt5',
      type: 'translate',
      concept: 'shopping - translate how much is',
      difficulty: 3,
      prompt: 'Traduce: "¿Cuánto cuesta esta camisa?"',
      correctAnswer: 'How much is this shirt?',
      acceptedAnswers: ['How much is this shirt', 'How much is this shirt?', 'how much is this shirt?'],
      acceptApproximate: true,
      explanation: '"¿Cuánto cuesta?" \u2192 How much is...? "esta camisa" \u2192 this shirt. \u2192 How much is this shirt?',
    },
  ],
  reviewItems: ['a1-m14-l2'],
  prerequisites: ['a1-m14-l2'],
}
