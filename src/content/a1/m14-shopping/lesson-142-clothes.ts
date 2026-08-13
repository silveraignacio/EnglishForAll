import type { Lesson } from '../../types'

export const lesson142Clothes: Lesson = {
  id: 'a1-m14-l2',
  moduleId: 'm14-shopping',
  order: 1,
  title: 'Ropa (Clothes)',
  objective: 'Aprender el vocabulario de la ropa y usarlo para hablar de lo que llevas puesto y pedir prendas en una tienda.',
  explanation_es: `En esta lección aprenderás el vocabulario de la ropa (clothes). Son palabras que usarás en la tienda y para describir lo que llevas puesto.

**La ropa:**
- shirt (camisa), t-shirt (camiseta), dress (vestido), skirt (falda)
- jacket (chaqueta), coat (abrigo), jumper (jersey), también "sweater" (suéter)
- hat (sombrero), scarf (bufanda)
- shoes (zapatos), boots (botas), socks (calcetines)
- trousers (pantalones), también "pants" en inglés americano
- jeans (vaqueros, tejanos)

**¡Cuidado con las palabras que SIEMPRE van en plural!**
Algunas prendas llevan dos partes (una pierna, un pie...), así que en inglés siempre van en plural y NO llevan "a" ni "an":
- trousers (pantalones), jeans (vaqueros), shoes (zapatos), boots (botas), socks (calcetines).

Por eso decimos "my trousers ARE black" (no "my trousers is black") y "I have jeans" (no "a jeans"). En cambio, prendas como "coat", "shirt" o "dress" son contables y sí llevan "a/an": "I have a coat".

Para hablar de lo que llevas puesto usamos el verbo **wear** (llevar puesto): She is wearing a red dress. = Ella lleva un vestido rojo.

En la tienda puedes decir:
- I'd like this shirt in blue. = Quisiera esta camisa en azul.
- Do you have these trousers in black? = ¿Tienen estos pantalones en negro?`,
  examples: [
    { english: "I'd like this shirt in blue.", spanish: 'Quisiera esta camisa en azul.', note: "I'd like = I would like (forma educada)." },
    { english: 'Do you have these trousers in black?', spanish: '¿Tienen estos pantalones en negro?', note: 'trousers siempre en plural.' },
    { english: 'She is wearing a red dress.', spanish: 'Ella lleva un vestido rojo.', note: 'wear = llevar puesto.' },
    { english: 'I need new shoes.', spanish: 'Necesito zapatos nuevos.', note: 'shoes siempre en plural.' },
    { english: 'He wears a hat and a scarf in winter.', spanish: 'Él lleva sombrero y bufanda en invierno.', note: 'hat y scarf son contables: a hat, a scarf.' },
  ],
  rule: `**Reglas de la ropa:**
- Prendas que SIEMPRE van en plural (sin "a/an", con "are"): trousers, jeans, shoes, boots, socks.
- Prendas contables (con "a/an", con "is"): shirt, t-shirt, dress, skirt, jacket, coat, jumper, hat, scarf.
- Para decir lo que llevas puesto: wear (she is wearing... / he wears...).
- En la tienda: I'd like this + prenda + in + color. / Do you have these + plural + in + color?`,
  commonMistakes: [
    { wrong: '❌ My trousers is black.', correct: '✅ My trousers are black.', explanation: '"trousers" (pantalones) siempre va en plural, así que usamos "are", no "is".' },
    { wrong: '❌ I have a jeans.', correct: '✅ I have jeans.', explanation: '"jeans" siempre va en plural y no lleva "a". Decimos "I have jeans", no "a jeans".' },
    { wrong: '❌ She is wearing a shoes.', correct: '✅ She is wearing shoes.', explanation: '"shoes" (zapatos) siempre va en plural y no lleva "a". Lo mismo pasa con boots, socks y trousers.' },
    { wrong: '❌ My coat are black. (aplicar la regla de plural a todas las prendas)', correct: '✅ My coat is black.', explanation: 'No todas las prendas son plurales: coat, shirt, dress, hat y scarf son contables y usan "is" y "a/an". "I have a coat" es correcto.' },
  ],
  vocabulary: [
    { word: 'shirt', translation_es: 'camisa', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: "I'd like this shirt in blue.", exampleTranslation: 'Quisiera esta camisa en azul.' },
    { word: 't-shirt', translation_es: 'camiseta', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'I wear a t-shirt in summer.', exampleTranslation: 'Llevo una camiseta en verano.' },
    { word: 'dress', translation_es: 'vestido', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'She is wearing a red dress.', exampleTranslation: 'Ella lleva un vestido rojo.' },
    { word: 'skirt', translation_es: 'falda', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'This skirt is cheap.', exampleTranslation: 'Esta falda es barata.' },
    { word: 'jacket', translation_es: 'chaqueta', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'That is a nice jacket.', exampleTranslation: 'Esa es una chaqueta bonita.' },
    { word: 'coat', translation_es: 'abrigo', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'I have a black coat.', exampleTranslation: 'Tengo un abrigo negro.' },
    { word: 'trousers', translation_es: 'pantalones', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'Do you have these trousers in black?', exampleTranslation: '¿Tienen estos pantalones en negro?', phonetic: '/ˈtraʊzəz/' },
    { word: 'shoes', translation_es: 'zapatos', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'I need new shoes.', exampleTranslation: 'Necesito zapatos nuevos.' },
    { word: 'boots', translation_es: 'botas', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'My boots are brown.', exampleTranslation: 'Mis botas son marrones.' },
    { word: 'socks', translation_es: 'calcetines', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'I wear white socks.', exampleTranslation: 'Llevo calcetines blancos.' },
    { word: 'hat', translation_es: 'sombrero', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'He wears a hat in summer.', exampleTranslation: 'Él lleva sombrero en verano.' },
    { word: 'scarf', translation_es: 'bufanda', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'She has a red scarf.', exampleTranslation: 'Ella tiene una bufanda roja.' },
    { word: 'jumper', translation_es: 'jersey, suéter', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'This jumper is warm.', exampleTranslation: 'Este jersey es de abrigo.' },
    { word: 'jeans', translation_es: 'vaqueros, tejanos', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'I wear jeans every day.', exampleTranslation: 'Llevo vaqueros todos los días.' },
  ],
  grammarPoints: [
    {
      id: 'gp-clothes-plural',
      level: 'A1',
      name: 'Clothes: always-plural nouns',
      explanation_es: 'Algunas prendas van SIEMPRE en plural en inglés porque llevan dos partes (piernas, pies...): trousers, jeans, shoes, boots, socks. No usan "a/an" y van con "are". Otras prendas (shirt, dress, coat...) son contables y usan "is" y "a/an".',
      formula: 'trousers / jeans / shoes / socks + are | a shirt / a dress / a coat + is',
      examples: ['My trousers are black.', 'I have jeans.', 'I need new shoes.', 'I have a coat.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m14-l2-ex1',
      type: 'match',
      concept: 'clothes - vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada prenda con su traducción:',
      promptTranslation: 'Match each item of clothing with its translation.',
      correctAnswer: 'shirt=camisa, dress=vestido, jacket=chaqueta, coat=abrigo, hat=sombrero, skirt=falda',
      pairs: [
        { left: 'shirt', right: 'camisa' },
        { left: 'dress', right: 'vestido' },
        { left: 'jacket', right: 'chaqueta' },
        { left: 'coat', right: 'abrigo' },
        { left: 'hat', right: 'sombrero' },
        { left: 'skirt', right: 'falda' },
      ],
      explanation: 'shirt=camisa, dress=vestido, jacket=chaqueta, coat=abrigo, hat=sombrero, skirt=falda. Son prendas contables: "a shirt", "a coat"...',
    },
    {
      id: 'a1-m14-l2-ex2',
      type: 'match',
      concept: 'clothes - plural vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada prenda con su traducción:',
      promptTranslation: 'Match each item of clothing with its translation.',
      correctAnswer: 'trousers=pantalones, jeans=vaqueros, shoes=zapatos, boots=botas, socks=calcetines, scarf=bufanda',
      pairs: [
        { left: 'trousers', right: 'pantalones' },
        { left: 'jeans', right: 'vaqueros' },
        { left: 'shoes', right: 'zapatos' },
        { left: 'boots', right: 'botas' },
        { left: 'socks', right: 'calcetines' },
        { left: 'scarf', right: 'bufanda' },
      ],
      explanation: 'trousers=pantalones, jeans=vaqueros, shoes=zapatos, boots=botas, socks=calcetines. Estas van siempre en plural. scarf=bufanda (contable).',
    },
    {
      id: 'a1-m14-l2-ex3',
      type: 'multiple_choice',
      concept: 'clothes - this shirt in blue',
      difficulty: 1,
      prompt: 'Completa: "I\'d like this ___ in blue."',
      promptTranslation: 'Quisiera esta camisa en azul.',
      correctAnswer: 'shirt',
      options: ['shirt', 'trousers', 'jeans'],
      explanation: 'En la frase usamos "this" (singular) + "in blue", así que la prenda es contable: "this shirt". Con trousers o jeans usaríamos "these".',
    },
    {
      id: 'a1-m14-l2-ex4',
      type: 'multiple_choice',
      concept: 'clothes - wearing a dress',
      difficulty: 2,
      prompt: 'Completa: "She is ___ a red dress."',
      promptTranslation: 'Ella lleva un vestido rojo.',
      correctAnswer: 'wearing',
      options: ['wearing', 'wear', 'wears'],
      explanation: 'Con "is" (to be) usamos "wearing" (present continuous): She is wearing a red dress. = Ella lleva puesto un vestido rojo.',
    },
    {
      id: 'a1-m14-l2-ex5',
      type: 'fill_blank',
      concept: 'clothes - these trousers',
      difficulty: 2,
      prompt: 'Completa: "Do you have these ___ in black?" (pantalones)',
      promptTranslation: '¿Tienen estos pantalones en negro?',
      correctAnswer: 'trousers',
      acceptedAnswers: ['trousers', 'Trousers'],
      explanation: '"Pantalones" es "trousers". Con "these" (plural) usamos trousers: Do you have these trousers in black?',
    },
    {
      id: 'a1-m14-l2-ex6',
      type: 'fill_blank',
      concept: 'clothes - new shoes',
      difficulty: 2,
      prompt: 'Completa: "I need new ___." (zapatos)',
      promptTranslation: 'Necesito zapatos nuevos.',
      correctAnswer: 'shoes',
      acceptedAnswers: ['shoes', 'Shoes'],
      explanation: '"Zapatos" es "shoes" y siempre va en plural (no "a shoe" en general). \u2192 I need new shoes.',
    },
    {
      id: 'a1-m14-l2-ex7',
      type: 'error_correction',
      concept: 'clothes - a jeans',
      difficulty: 3,
      prompt: 'Corrige el error: "I have a jeans."',
      correctAnswer: 'I have jeans.',
      acceptedAnswers: ['I have jeans', 'I have jeans.', 'i have jeans.'],
      acceptApproximate: true,
      explanation: '"jeans" va siempre en plural y no lleva "a". \u2192 I have jeans.',
    },
    {
      id: 'a1-m14-l2-ex8',
      type: 'error_correction',
      concept: 'clothes - trousers are',
      difficulty: 3,
      prompt: 'Corrige el error: "My trousers is black."',
      correctAnswer: 'My trousers are black.',
      acceptedAnswers: ['My trousers are black', 'My trousers are black.', 'my trousers are black.'],
      acceptApproximate: true,
      explanation: '"trousers" siempre va en plural, así que usamos "are", no "is". \u2192 My trousers are black.',
    },
    {
      id: 'a1-m14-l2-ex9',
      type: 'translate',
      concept: 'clothes - translate this shirt in blue',
      difficulty: 3,
      prompt: 'Traduce: "Quisiera esta camisa en azul."',
      correctAnswer: "I'd like this shirt in blue.",
      acceptedAnswers: ["I'd like this shirt in blue", 'I would like this shirt in blue.', "i'd like this shirt in blue."],
      acceptApproximate: true,
      explanation: '"Quisiera" \u2192 I\'d like (I would like). "esta camisa en azul" \u2192 this shirt in blue.',
    },
    {
      id: 'a1-m14-l2-ex10',
      type: 'translate',
      concept: 'clothes - translate wearing a red dress',
      difficulty: 3,
      prompt: 'Traduce: "Ella lleva un vestido rojo."',
      correctAnswer: 'She is wearing a red dress.',
      acceptedAnswers: ['She is wearing a red dress', 'She is wearing a red dress.', 'she is wearing a red dress.'],
      acceptApproximate: true,
      explanation: '"Ella lleva puesto" \u2192 She is wearing. "un vestido rojo" \u2192 a red dress (color antes del nombre).',
    },
  ],
  miniTest: [
    {
      id: 'a1-m14-l2-mt1',
      type: 'multiple_choice',
      concept: 'clothes - hat and scarf',
      difficulty: 1,
      prompt: 'Completa: "He wears a ___ and a scarf in winter." (sombrero)',
      promptTranslation: 'Él lleva sombrero y bufanda en invierno.',
      correctAnswer: 'hat',
      options: ['hat', 'jeans', 'shoes'],
      explanation: '"Sombrero" es "hat" y es contable: a hat. \u2192 He wears a hat and a scarf in winter.',
    },
    {
      id: 'a1-m14-l2-mt2',
      type: 'fill_blank',
      concept: 'clothes - new dress',
      difficulty: 2,
      prompt: 'Completa: "She has a new ___." (vestido)',
      promptTranslation: 'Ella tiene un vestido nuevo.',
      correctAnswer: 'dress',
      acceptedAnswers: ['dress', 'Dress'],
      explanation: '"Vestido" es "dress" y es contable: a new dress. \u2192 She has a new dress.',
    },
    {
      id: 'a1-m14-l2-mt3',
      type: 'fill_blank',
      concept: 'clothes - plural boots',
      difficulty: 2,
      prompt: 'Completa: "My ___ are new." (botas)',
      promptTranslation: 'Mis botas son nuevas.',
      correctAnswer: 'boots',
      acceptedAnswers: ['boots', 'Boots'],
      explanation: '"Botas" es "boots" y siempre va en plural, por eso usamos "are". \u2192 My boots are new.',
    },
    {
      id: 'a1-m14-l2-mt4',
      type: 'multiple_choice',
      concept: 'clothes - trousers are',
      difficulty: 2,
      prompt: 'Completa: "My trousers ___ black."',
      promptTranslation: 'Mis pantalones son negros.',
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: '"trousers" siempre va en plural, así que usamos "are". \u2192 My trousers are black.',
    },
    {
      id: 'a1-m14-l2-mt5',
      type: 'translate',
      concept: 'clothes - translate trousers in black',
      difficulty: 3,
      prompt: 'Traduce: "¿Tienen estos pantalones en negro?"',
      correctAnswer: 'Do you have these trousers in black?',
      acceptedAnswers: ['Do you have these trousers in black', 'Do you have these trousers in black?', 'do you have these trousers in black?'],
      acceptApproximate: true,
      explanation: '"¿Tienen...?" \u2192 Do you have...? "estos pantalones" \u2192 these trousers (plural). "en negro" \u2192 in black.',
    },
  ],
  reviewItems: ['a1-m14-l1'],
  prerequisites: ['a1-m14-l1'],
}
