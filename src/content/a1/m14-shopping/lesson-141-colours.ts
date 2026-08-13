import type { Lesson } from '../../types'

export const lesson141Colours: Lesson = {
  id: 'a1-m14-l1',
  moduleId: 'm14-shopping',
  order: 0,
  title: 'Colores y adjetivos de descripción',
  objective: 'Aprender los colores y los adjetivos más útiles para describir ropa y objetos, y usar el orden correcto de los adjetivos.',
  explanation_es: `En esta lección aprenderás los colores y algunos adjetivos muy útiles para describir ropa y objetos. Los usarás en el módulo de compras y en la vida diaria.

**Los colores (colours):**
- red (rojo), blue (azul), green (verde), yellow (amarillo)
- black (negro), white (blanco), orange (naranja), purple (morado)
- pink (rosa), brown (marrón), grey (gris)

**Adjetivos para describir (adjectives):**
- big (grande), small (pequeño), new (nuevo), old (viejo)
- nice (bonito), beautiful (hermoso), cheap (barato), expensive (caro)

**¿Dónde va el adjetivo?**
En inglés, el adjetivo va ANTES del nombre. Decimos "the blue shirt" (la camisa azul), no "the shirt blue". También decimos "an expensive watch" (un reloj caro).

**El orden de los adjetivos (adjetive order):**
Cuando usamos dos adjetivos, primero va el tamaño y después el color:
- a big red car = un coche rojo grande (big = tamaño, red = color)
- a small blue bag = un bolso azul pequeño
- an old black watch = un reloj negro viejo

En español decimos "un coche rojo grande", pero en inglés el orden es al revés: "a big red car" (grande rojo coche). Recuerda: ¡tamaño antes que color!`,
  examples: [
    { english: 'I like the blue shirt.', spanish: 'Me gusta la camisa azul.', note: 'Adjetivo antes del nombre: the blue shirt.' },
    { english: 'She has a big black bag.', spanish: 'Ella tiene un bolso grande y negro.', note: 'Tamaño (big) antes que color (black).' },
    { english: 'This is an expensive watch.', spanish: 'Este es un reloj caro.', note: 'expensive va antes del nombre.' },
    { english: 'The cheap shoes are in the shop.', spanish: 'Los zapatos baratos están en la tienda.' },
    { english: 'It is a small white cat.', spanish: 'Es un gato pequeño y blanco.', note: 'small (tamaño) + white (color).' },
  ],
  rule: `**Regla de los adjetivos:**
- El adjetivo va ANTES del nombre: the blue shirt, a cheap watch.
- Con dos adjetivos: TAMAÑO + COLOR + nombre: a big red car, a small blue bag.
- El adjetivo no cambia con singular o plural: a blue shirt / blue shirts.
- "grey" (gris) también se escribe "gray" en inglés americano.`,
  commonMistakes: [
    { wrong: '❌ I have a red big car.', correct: '✅ I have a big red car.', explanation: 'El orden de los adjetivos en inglés es: tamaño (big) primero y color (red) después. → a big red car.' },
    { wrong: '❌ The colour blue is my favourite.', correct: '✅ Blue is my favourite.', explanation: '"blue" ya es un adjetivo; no necesitas añadir "colour". Decimos "blue is my favourite colour" o simplemente "blue is my favourite".' },
    { wrong: '❌ The shirt is red colour.', correct: '✅ The shirt is red.', explanation: 'No digas "red colour". El adjetivo "red" ya significa rojo: The shirt is red.' },
    { wrong: '❌ She has a bag big black.', correct: '✅ She has a big black bag.', explanation: 'Los adjetivos van antes del nombre, y el tamaño antes que el color: a big black bag.' },
  ],
  vocabulary: [
    { word: 'red', translation_es: 'rojo', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'I like the red shirt.', exampleTranslation: 'Me gusta la camisa roja.' },
    { word: 'blue', translation_es: 'azul', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'The sky is blue.', exampleTranslation: 'El cielo es azul.' },
    { word: 'green', translation_es: 'verde', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'The apple is green.', exampleTranslation: 'La manzana es verde.' },
    { word: 'yellow', translation_es: 'amarillo', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'The banana is yellow.', exampleTranslation: 'El plátano es amarillo.' },
    { word: 'black', translation_es: 'negro', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'She has a black bag.', exampleTranslation: 'Ella tiene un bolso negro.' },
    { word: 'white', translation_es: 'blanco', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'The cat is white.', exampleTranslation: 'El gato es blanco.' },
    { word: 'orange', translation_es: 'naranja', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'I like the orange shirt.', exampleTranslation: 'Me gusta la camisa naranja.' },
    { word: 'purple', translation_es: 'morado, púrpura', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'The dress is purple.', exampleTranslation: 'El vestido es morado.' },
    { word: 'pink', translation_es: 'rosa', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'She has a pink phone.', exampleTranslation: 'Ella tiene un teléfono rosa.' },
    { word: 'brown', translation_es: 'marrón', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'My shoes are brown.', exampleTranslation: 'Mis zapatos son marrones.' },
    { word: 'grey', translation_es: 'gris', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'His car is grey.', exampleTranslation: 'Su coche es gris.' },
    { word: 'big', translation_es: 'grande', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'She has a big house.', exampleTranslation: 'Ella tiene una casa grande.' },
    { word: 'small', translation_es: 'pequeño', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'I have a small dog.', exampleTranslation: 'Tengo un perro pequeño.' },
    { word: 'new', translation_es: 'nuevo', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'This is my new phone.', exampleTranslation: 'Este es mi teléfono nuevo.' },
    { word: 'old', translation_es: 'viejo', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'He drives an old car.', exampleTranslation: 'Él conduce un coche viejo.' },
    { word: 'nice', translation_es: 'bonito, agradable', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'That is a nice jacket.', exampleTranslation: 'Esa es una chaqueta bonita.' },
    { word: 'beautiful', translation_es: 'hermoso, bonito', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'What a beautiful dress!', exampleTranslation: '¡Qué vestido tan hermoso!' },
    { word: 'cheap', translation_es: 'barato', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'These shoes are cheap.', exampleTranslation: 'Estos zapatos son baratos.' },
    { word: 'expensive', translation_es: 'caro', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'This watch is expensive.', exampleTranslation: 'Este reloj es caro.' },
  ],
  grammarPoints: [
    {
      id: 'gp-adjective-order',
      level: 'A1',
      name: 'Adjective order: size before colour',
      explanation_es: 'En inglés, cuando usamos dos adjetivos para describir un nombre, primero va el tamaño (big, small) y después el color (red, blue). Además, los adjetivos siempre van antes del nombre.',
      formula: 'size + colour + noun | a big red car',
      examples: ['a big red car', 'a small blue bag', 'an old black watch'],
    },
  ],
  exercises: [
    {
      id: 'a1-m14-l1-ex1',
      type: 'match',
      concept: 'colours - vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada color con su traducción:',
      promptTranslation: 'Match each colour with its translation.',
      correctAnswer: 'red=rojo, blue=azul, green=verde, yellow=amarillo, black=negro, white=blanco',
      pairs: [
        { left: 'red', right: 'rojo' },
        { left: 'blue', right: 'azul' },
        { left: 'green', right: 'verde' },
        { left: 'yellow', right: 'amarillo' },
        { left: 'black', right: 'negro' },
        { left: 'white', right: 'blanco' },
      ],
      explanation: 'red=rojo, blue=azul, green=verde, yellow=amarillo, black=negro, white=blanco. Son los colores más básicos del inglés.',
    },
    {
      id: 'a1-m14-l1-ex2',
      type: 'match',
      concept: 'adjectives - vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada adjetivo con su traducción:',
      promptTranslation: 'Match each adjective with its translation.',
      correctAnswer: 'big=grande, small=pequeño, cheap=barato, expensive=caro, new=nuevo, old=viejo',
      pairs: [
        { left: 'big', right: 'grande' },
        { left: 'small', right: 'pequeño' },
        { left: 'cheap', right: 'barato' },
        { left: 'expensive', right: 'caro' },
        { left: 'new', right: 'nuevo' },
        { left: 'old', right: 'viejo' },
      ],
      explanation: 'big=grande, small=pequeño, cheap=barato, expensive=caro, new=nuevo, old=viejo. Son adjetivos muy útiles para describir ropa y objetos.',
    },
    {
      id: 'a1-m14-l1-ex3',
      type: 'multiple_choice',
      concept: 'colours - the blue shirt',
      difficulty: 1,
      prompt: 'Completa: "I like the ___ shirt." (azul)',
      promptTranslation: 'Me gusta la camisa azul.',
      correctAnswer: 'blue',
      options: ['blue', 'red', 'green'],
      explanation: '"Azul" es "blue". El adjetivo va antes del nombre: the blue shirt. \u2192 I like the blue shirt.',
    },
    {
      id: 'a1-m14-l1-ex4',
      type: 'multiple_choice',
      concept: 'adjectives - expensive watch',
      difficulty: 2,
      prompt: 'Completa: "This is ___ expensive watch."',
      promptTranslation: 'Este es un reloj caro.',
      correctAnswer: 'an',
      options: ['an', 'a', 'the'],
      explanation: '"Expensive" empieza con sonido de vocal, así que usamos "an": an expensive watch. \u2192 This is an expensive watch.',
    },
    {
      id: 'a1-m14-l1-ex5',
      type: 'multiple_choice',
      concept: 'adjective order - size before colour',
      difficulty: 2,
      prompt: 'Completa: "She has a ___ bag." (grande y negro)',
      promptTranslation: 'Ella tiene un bolso grande y negro.',
      correctAnswer: 'big black',
      options: ['big black', 'black big', 'black'],
      explanation: 'El orden en inglés es tamaño + color: big black. \u2192 She has a big black bag.',
    },
    {
      id: 'a1-m14-l1-ex6',
      type: 'fill_blank',
      concept: 'colours - yellow banana',
      difficulty: 2,
      prompt: 'Completa: "The banana is ___." (amarillo)',
      promptTranslation: 'El plátano es amarillo.',
      correctAnswer: 'yellow',
      acceptedAnswers: ['yellow', 'Yellow'],
      explanation: '"Amarillo" es "yellow". \u2192 The banana is yellow.',
    },
    {
      id: 'a1-m14-l1-ex7',
      type: 'fill_blank',
      concept: 'adjectives - cheap jacket',
      difficulty: 2,
      prompt: 'Completa: "This jacket is very ___." (barato)',
      promptTranslation: 'Esta chaqueta es muy barata.',
      correctAnswer: 'cheap',
      acceptedAnswers: ['cheap', 'Cheap'],
      explanation: '"Barato" es "cheap". El adjetivo va después del verbo "is": This jacket is very cheap.',
    },
    {
      id: 'a1-m14-l1-ex8',
      type: 'error_correction',
      concept: 'adjective order - size before colour',
      difficulty: 3,
      prompt: 'Corrige el error: "I have a red big car."',
      correctAnswer: 'I have a big red car.',
      acceptedAnswers: ['I have a big red car', 'I have a big red car.', 'i have a big red car.'],
      acceptApproximate: true,
      explanation: 'En inglés el tamaño (big) va antes que el color (red): a big red car. \u2192 I have a big red car.',
    },
    {
      id: 'a1-m14-l1-ex9',
      type: 'translate',
      concept: 'colours - translate blue shirt',
      difficulty: 3,
      prompt: 'Traduce: "Me gusta la camisa azul."',
      correctAnswer: 'I like the blue shirt.',
      acceptedAnswers: ['I like the blue shirt', 'I like the blue shirt.', 'i like the blue shirt.'],
      acceptApproximate: true,
      explanation: '"Me gusta" \u2192 I like. "la camisa azul" \u2192 the blue shirt (adjetivo antes del nombre).',
    },
    {
      id: 'a1-m14-l1-ex10',
      type: 'translate',
      concept: 'adjective order - translate big black bag',
      difficulty: 3,
      prompt: 'Traduce: "Ella tiene un bolso grande y negro."',
      correctAnswer: 'She has a big black bag.',
      acceptedAnswers: ['She has a big black bag', 'She has a big black bag.', 'she has a big black bag.'],
      acceptApproximate: true,
      explanation: '"Ella tiene" \u2192 She has. "un bolso grande y negro" \u2192 a big black bag (tamaño + color + nombre).',
    },
  ],
  miniTest: [
    {
      id: 'a1-m14-l1-mt1',
      type: 'multiple_choice',
      concept: 'colours - green grass',
      difficulty: 1,
      prompt: 'Completa: "The grass is ___." (verde)',
      promptTranslation: 'La hierba es verde.',
      correctAnswer: 'green',
      options: ['green', 'yellow', 'blue'],
      explanation: '"Verde" es "green". \u2192 The grass is green.',
    },
    {
      id: 'a1-m14-l1-mt2',
      type: 'fill_blank',
      concept: 'colours - red shirt',
      difficulty: 2,
      prompt: 'Completa: "I like the ___ shirt." (rojo)',
      promptTranslation: 'Me gusta la camisa roja.',
      correctAnswer: 'red',
      acceptedAnswers: ['red', 'Red'],
      explanation: '"Rojo" es "red". \u2192 I like the red shirt.',
    },
    {
      id: 'a1-m14-l1-mt3',
      type: 'multiple_choice',
      concept: 'adjective order - big red car',
      difficulty: 2,
      prompt: 'Completa: "It is a ___ car."',
      promptTranslation: 'Es un coche rojo grande.',
      correctAnswer: 'big red',
      options: ['big red', 'red big', 'red'],
      explanation: 'El orden en inglés es tamaño + color: big red. \u2192 It is a big red car.',
    },
    {
      id: 'a1-m14-l1-mt4',
      type: 'translate',
      concept: 'adjectives - translate expensive watch',
      difficulty: 3,
      prompt: 'Traduce: "Este es un reloj caro."',
      correctAnswer: 'This is an expensive watch.',
      acceptedAnswers: ['This is an expensive watch', 'This is an expensive watch.', 'this is an expensive watch.'],
      acceptApproximate: true,
      explanation: '"Este es" \u2192 This is. "un reloj caro" \u2192 an expensive watch (expensive empieza con sonido de vocal \u2192 an).',
    },
    {
      id: 'a1-m14-l1-mt5',
      type: 'error_correction',
      concept: 'adjective order - small black bag',
      difficulty: 3,
      prompt: 'Corrige el error: "She has a black small bag."',
      correctAnswer: 'She has a small black bag.',
      acceptedAnswers: ['She has a small black bag', 'She has a small black bag.', 'she has a small black bag.'],
      acceptApproximate: true,
      explanation: 'El tamaño (small) va antes que el color (black): a small black bag.',
    },
  ],
  reviewItems: ['a1-m13-l4'],
  prerequisites: ['a1-m13-l4'],
}
