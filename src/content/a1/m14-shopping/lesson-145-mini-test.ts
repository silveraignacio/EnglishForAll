import type { Lesson } from '../../types'

export const lesson145MiniTest: Lesson = {
  id: 'a1-m14-l5',
  moduleId: 'm14-shopping',
  order: 4,
  title: 'Mini-test: compras',
  objective: 'Repasar todo el módulo 14: colores, adjetivos, ropa, frases de tienda y cantidades con much, many y a lot of.',
  explanation_es: `Esta es la lección final del Módulo 14. Repasemos lo más importante:

**Colores y adjetivos:**
- Colores: red, blue, green, yellow, black, white, orange, purple, pink, brown, grey.
- Adjetivos: big, small, new, old, nice, beautiful, cheap, expensive.
- Orden: TAMAÑO + COLOR + nombre → a big red car.

**Ropa (clothes):**
- shirt, t-shirt, dress, skirt, jacket, coat, hat, scarf, jumper.
- Siempre en plural (sin "a", con "are"): trousers, jeans, shoes, boots, socks.

**En la tienda:**
- How much is this shirt? (singular) / How much are these shoes? (plural)
- Can I try it on, please? = ¿Puedo probármelo?
- Do you have this in size large? = ¿Tienen esto en talla grande?
- I'll take it. = Me lo llevo.

**Cantidades:**
- much + incontable: How much money?
- many + contable en plural: How many apples?
- a lot of + ambos: She has a lot of friends.

Haz los ejercicios y después el mini-test. ¡Suerte!`,
  examples: [
    { english: 'How much is this blue shirt?', spanish: '¿Cuánto cuesta esta camisa azul?', note: 'How much is + singular.' },
    { english: "I'll take these boots.", spanish: 'Me llevo estas botas.', note: 'these + plural (boots).' },
    { english: 'She has a lot of nice dresses.', spanish: 'Ella tiene muchos vestidos bonitos.', note: 'a lot of + plural contable.' },
    { english: 'How many coats do you have?', spanish: '¿Cuántos abrigos tienes?', note: 'How many + plural contable.' },
    { english: 'He is wearing a small black hat.', spanish: 'Él lleva un sombrero negro pequeño.', note: 'Tamaño (small) + color (black).' },
  ],
  rule: `**Resumen del módulo 14:**
1. Adjetivos antes del nombre: the blue shirt. Con dos: tamaño + color + nombre: a big red car.
2. Prendas siempre plurales: trousers, jeans, shoes, boots, socks (con "are", sin "a").
3. Precio: How much is this...? (singular) / How much are these...? (plural).
4. Tienda: Can I try it on? / Do you have this in size + small/medium/large? / I'll take it.
5. Cantidades: much + incontable, many + contable plural, a lot of + ambos.`,
  commonMistakes: [
    { wrong: '❌ How much is the shoes?', correct: '✅ How much are the shoes?', explanation: '"shoes" es plural: usamos "are".' },
    { wrong: '❌ I have a red big car.', correct: '✅ I have a big red car.', explanation: 'El tamaño va antes que el color: big red car.' },
    { wrong: '❌ How much apples?', correct: '✅ How many apples?', explanation: '"apples" es contable y plural: how many apples.' },
  ],
  vocabulary: [
    { word: 'shopping', translation_es: 'compras, ir de compras', level: 'A1', category: 'shopping', partOfSpeech: 'noun', example: 'I like shopping.', exampleTranslation: 'Me gusta ir de compras.' },
    { word: 'changing room', translation_es: 'probador', level: 'A1', category: 'shopping', partOfSpeech: 'noun', example: 'The changing room is over there.', exampleTranslation: 'El probador está allí.' },
    { word: 'bag', translation_es: 'bolsa', level: 'A1', category: 'shopping', partOfSpeech: 'noun', example: 'Do you need a bag?', exampleTranslation: '¿Necesita una bolsa?' },
    { word: 'pay', translation_es: 'pagar', level: 'A1', category: 'shopping', partOfSpeech: 'verb', example: 'I want to pay.', exampleTranslation: 'Quiero pagar.' },
    { word: 'euro', translation_es: 'euro', level: 'A1', category: 'shopping', partOfSpeech: 'noun', example: "It's forty euros.", exampleTranslation: 'Son cuarenta euros.' },
  ],
  grammarPoints: [
    {
      id: 'gp-m14-review',
      level: 'A1',
      name: 'Module 14 review',
      explanation_es: 'Repaso del módulo 14: orden de adjetivos (tamaño + color), prendas siempre plurales (trousers, jeans, shoes...), preguntas de precio (How much is/are...?), frases de tienda y cantidades (much/many/a lot of).',
      formula: 'size + colour + noun | trousers/shoes + are | How much is/are...? | much + uncountable | many + plural | a lot of + both',
      examples: ['a big red car', 'My trousers are black.', 'How much are these shoes?', 'She has a lot of friends.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m14-l5-ex1',
      type: 'match',
      concept: 'module 14 review - colours',
      difficulty: 1,
      prompt: 'Relaciona cada color con su traducción:',
      promptTranslation: 'Match each colour with its translation.',
      correctAnswer: 'purple=morado, pink=rosa, brown=marrón, grey=gris, orange=naranja, black=negro',
      pairs: [
        { left: 'purple', right: 'morado' },
        { left: 'pink', right: 'rosa' },
        { left: 'brown', right: 'marrón' },
        { left: 'grey', right: 'gris' },
        { left: 'orange', right: 'naranja' },
        { left: 'black', right: 'negro' },
      ],
      explanation: 'purple=morado, pink=rosa, brown=marrón, grey=gris, orange=naranja, black=negro. Son los colores del módulo 14.',
    },
    {
      id: 'a1-m14-l5-ex2',
      type: 'match',
      concept: 'module 14 review - clothes',
      difficulty: 1,
      prompt: 'Relaciona cada prenda con su traducción:',
      promptTranslation: 'Match each item of clothing with its translation.',
      correctAnswer: 'scarf=bufanda, jumper=jersey, coat=abrigo, jeans=vaqueros, boots=botas, skirt=falda',
      pairs: [
        { left: 'scarf', right: 'bufanda' },
        { left: 'jumper', right: 'jersey' },
        { left: 'coat', right: 'abrigo' },
        { left: 'jeans', right: 'vaqueros' },
        { left: 'boots', right: 'botas' },
        { left: 'skirt', right: 'falda' },
      ],
      explanation: 'scarf=bufanda, jumper=jersey, coat=abrigo, jeans=vaqueros, boots=botas, skirt=falda. Recuerda: jeans y boots siempre van en plural.',
    },
    {
      id: 'a1-m14-l5-ex3',
      type: 'multiple_choice',
      concept: 'module 14 review - adjective order',
      difficulty: 2,
      prompt: 'Completa: "She has a ___ bag." (grande y negro)',
      promptTranslation: 'Ella tiene un bolso grande y negro.',
      correctAnswer: 'big black',
      options: ['big black', 'black big', 'black'],
      explanation: 'El orden es tamaño + color: big black. \u2192 She has a big black bag.',
    },
    {
      id: 'a1-m14-l5-ex4',
      type: 'fill_blank',
      concept: 'module 14 review - how much is',
      difficulty: 2,
      prompt: 'Completa: "How ___ is this coat?"',
      promptTranslation: '¿Cuánto cuesta este abrigo?',
      correctAnswer: 'much',
      acceptedAnswers: ['much', 'Much'],
      explanation: 'Para preguntar el precio usamos "How much": How much is this coat?',
    },
    {
      id: 'a1-m14-l5-ex5',
      type: 'fill_blank',
      concept: 'module 14 review - new shoes',
      difficulty: 2,
      prompt: 'Completa: "I need new ___." (zapatos)',
      promptTranslation: 'Necesito zapatos nuevos.',
      correctAnswer: 'shoes',
      acceptedAnswers: ['shoes', 'Shoes'],
      explanation: '"Zapatos" es "shoes" y siempre va en plural. \u2192 I need new shoes.',
    },
    {
      id: 'a1-m14-l5-ex6',
      type: 'multiple_choice',
      concept: 'module 14 review - how much are',
      difficulty: 2,
      prompt: 'Completa: "How much ___ these shoes?"',
      promptTranslation: '¿Cuánto cuestan estos zapatos?',
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: '"Shoes" es plural: usamos "are". \u2192 How much are these shoes?',
    },
    {
      id: 'a1-m14-l5-ex7',
      type: 'multiple_choice',
      concept: 'module 14 review - try it on',
      difficulty: 2,
      prompt: 'Completa: "Can I try it ___?"',
      promptTranslation: '¿Puedo probármelo?',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'La expresión es "try on" (probarse ropa). \u2192 Can I try it on?',
    },
    {
      id: 'a1-m14-l5-ex8',
      type: 'reading',
      concept: 'module 14 review - shopping dialogue',
      difficulty: 4,
      prompt: 'Lee el diálogo de compras y responde:',
      reading: {
        text: "Buying a jacket\nA: Good morning! How much is this jacket?\nB: It's forty euros.\nA: OK. Do you have it in size medium?\nB: Yes, here you are.\nA: Can I try it on, please?\nB: Of course. The changing room is over there.\nA: Great! And how much are these socks?\nB: They're three euros.\nA: OK, I'll take the jacket and the socks.\nB: Perfect! That's forty-three euros.",
        translation: 'Comprando una chaqueta\nA: ¡Buenos días! ¿Cuánto cuesta esta chaqueta?\nB: Son cuarenta euros.\nA: Vale. ¿La tiene en talla mediana?\nB: Sí, aquí tiene.\nA: ¿Puedo probármela, por favor?\nB: Por supuesto. El probador está allí.\nA: ¡Genial! ¿Y cuánto cuestan estos calcetines?\nB: Son tres euros.\nA: Vale, me llevo la chaqueta y los calcetines.\nB: ¡Perfecto! Son cuarenta y tres euros.',
        questions: [
          {
            id: 'a1-m14-l5-ex8-q1',
            type: 'multiple_choice',
            concept: 'module 14 review - reading price',
            difficulty: 4,
            prompt: '¿Cuánto cuesta la chaqueta?',
            correctAnswer: "It's forty euros",
            options: ["It's forty euros", "It's three euros", "It's forty-three euros"],
            explanation: 'El vendedor dice: "It\'s forty euros." (Son cuarenta euros.)',
          },
          {
            id: 'a1-m14-l5-ex8-q2',
            type: 'multiple_choice',
            concept: 'module 14 review - reading size',
            difficulty: 4,
            prompt: '¿Qué talla pide la persona A?',
            correctAnswer: 'medium',
            options: ['small', 'medium', 'large'],
            explanation: 'La persona A dice: "Do you have it in size medium?" → pide la talla mediana.',
          },
          {
            id: 'a1-m14-l5-ex8-q3',
            type: 'multiple_choice',
            concept: 'module 14 review - reading socks',
            difficulty: 4,
            prompt: '¿Cuánto cuestan los calcetines?',
            correctAnswer: 'three euros',
            options: ['three euros', 'forty euros', 'forty-three euros'],
            explanation: 'El vendedor dice: "They\'re three euros." (Son tres euros.) Fíjate: "they\'re" porque "socks" es plural.',
          },
          {
            id: 'a1-m14-l5-ex8-q4',
            type: 'multiple_choice',
            concept: 'module 14 review - reading total',
            difficulty: 4,
            prompt: '¿Cuánto paga la persona A en total?',
            correctAnswer: "forty-three euros",
            options: ["forty-three euros", "forty euros", "three euros"],
            explanation: 'El vendedor dice: "That\'s forty-three euros." (Son cuarenta y tres euros: 40 + 3.)',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Lee el diálogo con atención: la persona A compra una chaqueta de 40 euros (talla mediana) y unos calcetines de 3 euros. En total paga 43 euros.',
    },
    {
      id: 'a1-m14-l5-ex9',
      type: 'error_correction',
      concept: 'module 14 review - a jeans',
      difficulty: 3,
      prompt: 'Corrige el error: "I have a jeans."',
      correctAnswer: 'I have jeans.',
      acceptedAnswers: ['I have jeans', 'I have jeans.', 'i have jeans.'],
      acceptApproximate: true,
      explanation: '"jeans" siempre va en plural y no lleva "a". \u2192 I have jeans.',
    },
    {
      id: 'a1-m14-l5-ex10',
      type: 'translate',
      concept: 'module 14 review - translate I\'ll take it',
      difficulty: 3,
      prompt: 'Traduce: "Me lo llevo."',
      correctAnswer: "I'll take it.",
      acceptedAnswers: ["I'll take it", 'I will take it.', "i'll take it."],
      acceptApproximate: true,
      explanation: '"Me lo llevo" \u2192 I\'ll take it. ("I\'ll" = I will, para decidir comprar.)',
    },
  ],
  miniTest: [
    {
      id: 'a1-m14-l5-mt1',
      type: 'multiple_choice',
      concept: 'module 14 review - adjective order',
      difficulty: 2,
      prompt: 'Completa: "It is a ___ car."',
      promptTranslation: 'Es un coche rojo grande.',
      correctAnswer: 'big red',
      options: ['big red', 'red big', 'red'],
      explanation: 'El orden es tamaño + color: big red. \u2192 It is a big red car.',
    },
    {
      id: 'a1-m14-l5-mt2',
      type: 'fill_blank',
      concept: 'module 14 review - how much are',
      difficulty: 2,
      prompt: 'Completa: "How ___ are these shoes?"',
      promptTranslation: '¿Cuánto cuestan estos zapatos?',
      correctAnswer: 'much',
      acceptedAnswers: ['much', 'Much'],
      explanation: 'El precio se pregunta con "How much", y como "shoes" es plural: How much are these shoes?',
    },
    {
      id: 'a1-m14-l5-mt3',
      type: 'multiple_choice',
      concept: 'module 14 review - this shirt in blue',
      difficulty: 2,
      prompt: "Completa: \"I'd like this shirt ___ blue.\"",
      promptTranslation: 'Quisiera esta camisa en azul.',
      correctAnswer: 'in',
      options: ['in', 'on', 'at'],
      explanation: 'Para el color usamos "in": this shirt in blue = esta camisa en azul.',
    },
    {
      id: 'a1-m14-l5-mt4',
      type: 'error_correction',
      concept: 'module 14 review - how much is/are',
      difficulty: 3,
      prompt: 'Corrige el error: "How much is the shoes?"',
      correctAnswer: 'How much are the shoes?',
      acceptedAnswers: ['How much are the shoes', 'How much are the shoes?', 'how much are the shoes?'],
      acceptApproximate: true,
      explanation: '"Shoes" es plural: usamos "are", no "is". \u2192 How much are the shoes?',
    },
    {
      id: 'a1-m14-l5-mt5',
      type: 'translate',
      concept: 'module 14 review - translate how many shirts',
      difficulty: 4,
      prompt: 'Traduce: "¿Cuántas camisas quieres?"',
      correctAnswer: 'How many shirts do you want?',
      acceptedAnswers: ['How many shirts do you want', 'How many shirts do you want?', 'how many shirts do you want?'],
      acceptApproximate: true,
      explanation: '"¿Cuántas?" \u2192 How many (contable plural). "camisas" \u2192 shirts. "¿quieres?" \u2192 do you want? \u2192 How many shirts do you want?',
    },
  ],
  reviewItems: ['a1-m14-l4'],
  prerequisites: ['a1-m14-l4'],
}
