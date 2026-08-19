import type { Lesson } from '../../types'

export const lesson12Superlatives: Lesson = {
  id: 'a2-m1-l2',
  moduleId: 'm1-compare',
  order: 1,
  title: 'Superlativos: -est / the most',
  objective: 'Expresar el grado máximo de una cualidad: the + adjetivo + -est y the most + adjetivo largo.',
  explanation_es: `En esta lección aprenderás a expresar que algo es EL MÁS de un grupo: el más grande, la más cara, el mejor...

### ¿Qué es un superlativo?

El superlativo expresa el grado máximo: de un grupo de tres o más cosas, una destaca sobre las demás. En español decimos "el más...", "la más...". En inglés siempre llevan "the" delante.

### 1. Adjetivos cortos: the + adjetivo + -est

Como con los comparativos, los adjetivos cortos añaden -est, y delante ponemos "the":

- big → the biggest (el más grande)
- tall → the tallest (el más alto)
- easy → the easiest (el más fácil)

Las mismas reglas de ortografía que en los comparativos: big → biggest (duplica la -g), easy → easiest (y → iest).

### 2. Adjetivos largos: the most + adjetivo

- expensive → the most expensive (el más caro)
- beautiful → the most beautiful (el más bonito)
- interesting → the most interesting (el más interesante)

### 3. Irregulares

- good → the best (el mejor)
- bad → the worst (el peor)

### La fórmula y la preposición "in"

Usamos: the + superlativo + in + lugar o grupo. La preposición correcta es "in", no "of":

- "This is the tallest building in the city." = Este es el edificio más alto de la ciudad.
- "She is the best student in the class." = Ella es la mejor estudiante de la clase.

### Comparativo vs superlativo — ¡ojo!

- Comparativo (2 cosas): more → "This is more expensive than that." (más que)
- Superlativo (3+ cosas): the most → "This is the most expensive in the shop." (el más)
  No los mezcles: "more" compara dos, "the most" es para el máximo de un grupo.`,
  examples: [
    { english: 'This is the tallest building in the city.', spanish: 'Este es el edificio más alto de la ciudad.', note: 'tall → the tallest. in = de/en (lugar).' },
    { english: 'It is the most expensive restaurant in town.', spanish: 'Es el restaurante más caro de la ciudad.', note: 'Expensive es largo: the most expensive.' },
    { english: 'She is the best student in the class.', spanish: 'Ella es la mejor estudiante de la clase.', note: 'best = el mejor (irregular de good).' },
    { english: 'Mount Everest is the highest mountain in the world.', spanish: 'El Everest es la montaña más alta del mundo.', note: 'high → the highest.' },
    { english: 'This is the easiest exercise of the lesson.', spanish: 'Este es el ejercicio más fácil de la lección.', note: 'easy → the easiest (y → iest).' },
    { english: 'That was the worst film I have ever seen.', spanish: 'Esa fue la peor película que he visto.', note: 'worst = el peor (irregular de bad).' },
  ],
  rule: `1. Adjetivos cortos: the + adjetivo + -est → the biggest, the tallest.
2. Adjetivos largos: the most + adjetivo → the most expensive.
3. Irregulares: the best (good), the worst (bad).
4. Fórmula: the + superlativo + in + lugar/grupo → "the tallest building in the city".
5. more (2 cosas) vs the most (3+ cosas): ¡no los confundas!
6. Nunca doble superlativo: ❌ the most biggest → ✅ the biggest.`,
  formation: {
    title: 'Cómo se forman los superlativos',
    intro: 'El superlativo expresa el grado máximo dentro de un grupo de tres o más. Siempre lleva "the" delante y, después, la preposición "in" con el lugar o el grupo.',
    patterns: [
      {
        name: 'Adjetivos cortos (the + -est)',
        formula: 'the + adjetivo + -est + in + lugar/grupo',
        examples: [
          { english: 'This is the tallest building in the city.', spanish: 'Este es el edificio más alto de la ciudad.' },
          { english: 'This is the easiest exercise of the lesson.', spanish: 'Este es el ejercicio más fácil de la lección.' },
        ],
        note: 'Las mismas reglas de ortografía que en los comparativos: big → the biggest, easy → the easiest.',
      },
      {
        name: 'Adjetivos largos (the most)',
        formula: 'the + most + adjetivo + in + lugar/grupo',
        examples: [
          { english: 'It is the most expensive restaurant in town.', spanish: 'Es el restaurante más caro de la ciudad.' },
          { english: 'This is the most interesting book I have read.', spanish: 'Este es el libro más interesante que he leído.' },
        ],
        note: 'Con adjetivos largos usamos "the most", nunca "the mostest".',
      },
      {
        name: 'Irregulares',
        formula: 'good → the best / bad → the worst',
        examples: [
          { english: 'She is the best student in the class.', spanish: 'Ella es la mejor estudiante de la clase.' },
          { english: 'That was the worst film I have ever seen.', spanish: 'Esa fue la peor película que he visto.' },
        ],
        note: 'Como en los comparativos, good y bad tienen superlativos irregulares.',
      },
    ],
    notes: [
      'Después del superlativo usamos "in" (lugar o grupo), no "of": the tallest building in the city.',
      'Comparativo (2 cosas) = more / -er. Superlativo (3+ cosas) = the most / -est. No los mezcles.',
      'Nunca doble superlativo: ❌ the most biggest → ✅ the biggest.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ This is the most biggest building in the city.', correct: '✅ This is the biggest building in the city.', explanation: 'Nunca doble superlativo: con adjetivos cortos usamos -est, no "the most".' },
    { wrong: '❌ She is more beautiful girl in the class.', correct: '✅ She is the most beautiful girl in the class.', explanation: 'Con tres o más personas usamos "the most", no "more". Además el superlativo lleva "the".' },
    { wrong: '❌ It is the most expensive restaurant of the city.', correct: '✅ It is the most expensive restaurant in the city.', explanation: 'Después del superlativo usamos "in" (lugar/grupo), no "of".' },
  ],
  vocabulary: [
    { word: 'city', translation_es: 'ciudad', level: 'A1', category: 'superlatives places', partOfSpeech: 'noun', example: 'This is the tallest building in the city.', exampleTranslation: 'Este es el edificio más alto de la ciudad.' },
    { word: 'building', translation_es: 'edificio', level: 'A2', category: 'superlatives places', partOfSpeech: 'noun', example: 'That skyscraper is the highest building here.', exampleTranslation: 'Ese rascacielos es el edificio más alto de aquí.' },
    { word: 'country', translation_es: 'país', level: 'A1', category: 'superlatives places', partOfSpeech: 'noun', example: 'It is the largest country in South America.', exampleTranslation: 'Es el país más grande de Sudamérica.' },
    { word: 'restaurant', translation_es: 'restaurante', level: 'A1', category: 'superlatives places', partOfSpeech: 'noun', example: 'It is the most expensive restaurant in town.', exampleTranslation: 'Es el restaurante más caro de la ciudad.' },
    { word: 'town', translation_es: 'pueblo, ciudad pequeña', level: 'A2', category: 'superlatives places', partOfSpeech: 'noun', example: 'This café is the cheapest in town.', exampleTranslation: 'Este café es el más barato del pueblo.' },
    { word: 'class', translation_es: 'clase (grupo de alumnos)', level: 'A1', category: 'superlatives places', partOfSpeech: 'noun', example: 'She is the best student in the class.', exampleTranslation: 'Ella es la mejor estudiante de la clase.' },
    { word: 'world', translation_es: 'mundo', level: 'A1', category: 'superlatives places', partOfSpeech: 'noun', example: 'The Amazon is the biggest river in the world.', exampleTranslation: 'El Amazonas es el río más grande del mundo.' },
    { word: 'museum', translation_es: 'museo', level: 'A2', category: 'superlatives places', partOfSpeech: 'noun', example: 'This is the most famous museum in Madrid.', exampleTranslation: 'Este es el museo más famoso de Madrid.' },
    { word: 'hotel', translation_es: 'hotel', level: 'A1', category: 'superlatives places', partOfSpeech: 'noun', example: 'It is the cheapest hotel near the beach.', exampleTranslation: 'Es el hotel más barato cerca de la playa.' },
    { word: 'river', translation_es: 'río', level: 'A1', category: 'superlatives places', partOfSpeech: 'noun', example: 'The Nile is the longest river in the world.', exampleTranslation: 'El Nilo es el río más largo del mundo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m1-superlatives',
      level: 'A2',
      name: 'Superlatives: -est / the most',
      explanation_es: 'Expresamos el grado máximo: the + adj + -est, the most + adj largo. Irregulares: the best, the worst.',
      formula: 'the + (adj + -est) / (most + adj) + in + place/group',
      examples: ['the tallest building in the city', 'the most expensive restaurant', 'the best student'],
    },
  ],
  exercises: [
    {
      id: 'a2-m1-l2-ex1',
      type: 'multiple_choice',
      concept: 'superlatives -est',
      difficulty: 1,
      prompt: 'Completa: "This is the ___ building in the city." (tall)',
      promptTranslation: 'Este es el edificio más alto de la ciudad.',
      correctAnswer: 'tallest',
      options: ['tallest', 'taller', 'most tall'],
      explanation: '"Tall" es corto: the + tall + -est → the tallest. → This is the tallest building in the city.',
    },
    {
      id: 'a2-m1-l2-ex2',
      type: 'fill_blank',
      concept: 'superlatives with the most',
      difficulty: 2,
      prompt: 'Completa: "It is the ___ restaurant in town." (expensive)',
      promptTranslation: 'Es el restaurante más caro de la ciudad.',
      correctAnswer: 'most expensive',
      acceptedAnswers: ['most expensive', 'Most expensive'],
      explanation: '"Expensive" es largo: the most + expensive. → the most expensive restaurant.',
    },
    {
      id: 'a2-m1-l2-ex3',
      type: 'multiple_choice',
      concept: 'irregular superlatives',
      difficulty: 2,
      prompt: 'Completa: "She is the ___ student in the class." (good)',
      promptTranslation: 'Ella es la mejor estudiante de la clase.',
      correctAnswer: 'best',
      options: ['best', 'better', 'most good'],
      explanation: '"Good" es irregular: su superlativo es "the best" (el mejor).',
    },
    {
      id: 'a2-m1-l2-ex4',
      type: 'match',
      concept: 'superlative forms',
      difficulty: 2,
      prompt: 'Une cada adjetivo con su superlativo correcto.',
      correctAnswer: 'big→the biggest, easy→the easiest, good→the best, bad→the worst, expensive→the most expensive, beautiful→the most beautiful',
      pairs: [
        { left: 'big', right: 'the biggest' },
        { left: 'easy', right: 'the easiest' },
        { left: 'good', right: 'the best' },
        { left: 'bad', right: 'the worst' },
        { left: 'expensive', right: 'the most expensive' },
        { left: 'beautiful', right: 'the most beautiful' },
      ],
      explanation: 'Cortos: big→the biggest, easy→the easiest. Irregulares: good→the best, bad→the worst. Largos: the most + expensive / beautiful.',
    },
    {
      id: 'a2-m1-l2-ex5',
      type: 'translate',
      concept: 'superlatives',
      difficulty: 3,
      prompt: 'Traduce: "Ella es la mejor estudiante de la clase."',
      correctAnswer: 'She is the best student in the class.',
      acceptedAnswers: ['She is the best student in the class', 'She is the best student in the class.', 'she is the best student in the class'],
      acceptApproximate: true,
      explanation: '"La mejor" = the best (irregular de good), "estudiante de la clase" = student in the class (usamos in).',
    },
    {
      id: 'a2-m1-l2-ex6',
      type: 'error_correction',
      concept: 'never double superlative',
      difficulty: 3,
      prompt: 'Corrige el error: "This is the most biggest city in Mexico."',
      correctAnswer: 'This is the biggest city in Mexico.',
      acceptedAnswers: ['This is the biggest city in Mexico', 'This is the biggest city in Mexico.', 'this is the biggest city in Mexico'],
      acceptApproximate: true,
      explanation: 'Nunca doble superlativo: "big" es corto, así que usamos "the biggest", no "the most biggest".',
    },
    {
      id: 'a2-m1-l2-ex7',
      type: 'reorder',
      concept: 'superlative sentence structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: This / is / the / tallest / building / in / the / city',
      promptTranslation: 'Este es el edificio más alto de la ciudad.',
      correctAnswer: 'This is the tallest building in the city.',
      words: ['This', 'is', 'the', 'tallest', 'building', 'in', 'the', 'city'],
      explanation: 'Orden: sujeto + to be + the + superlativo + sustantivo + in + lugar. → This is the tallest building in the city.',
    },
    {
      id: 'a2-m1-l2-ex8',
      type: 'multiple_choice',
      concept: 'more vs the most',
      difficulty: 3,
      prompt: 'Completa: "She is ___ beautiful girl in the class." (3+ personas)',
      promptTranslation: 'Ella es la chica más bonita de la clase.',
      correctAnswer: 'the most',
      options: ['the most', 'more', 'most'],
      explanation: 'Con un grupo de tres o más y adjetivo largo usamos "the most", no "more" (que es para comparar dos).',
    },
    {
      id: 'a2-m1-l2-ex9',
      type: 'fill_blank',
      concept: 'superlative + in',
      difficulty: 4,
      prompt: 'Completa: "Mount Everest is ___ highest mountain in the world."',
      promptTranslation: 'El Everest es la montaña más alta del mundo.',
      correctAnswer: 'the',
      acceptedAnswers: ['the', 'The'],
      explanation: 'Todo superlativo lleva "the" delante: the highest mountain.',
    },
    {
      id: 'a2-m1-l2-ex10',
      type: 'translate',
      concept: 'superlatives',
      difficulty: 4,
      prompt: 'Traduce: "Es el restaurante más caro de la ciudad."',
      correctAnswer: 'It is the most expensive restaurant in the city.',
      acceptedAnswers: ['It is the most expensive restaurant in the city', 'It is the most expensive restaurant in the city.', 'It\'s the most expensive restaurant in the city'],
      acceptApproximate: true,
      explanation: '"Es" = It is (o It\'s), "el más caro" = the most expensive, "de la ciudad" = in the city.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m1-l2-mt1',
      type: 'multiple_choice',
      concept: 'superlatives -est',
      difficulty: 1,
      prompt: 'Completa: "This is the ___ day of the year." (hot)',
      promptTranslation: 'Este es el día más caluroso del año.',
      correctAnswer: 'hottest',
      options: ['hottest', 'hotter', 'most hot'],
      explanation: '"Hot" termina en consonante + vocal + consonante: duplicamos la -t → the hottest.',
    },
    {
      id: 'a2-m1-l2-mt2',
      type: 'fill_blank',
      concept: 'superlatives with the most',
      difficulty: 2,
      prompt: 'Completa: "It is the ___ restaurant in town." (cheap → usa la forma con -est)',
      promptTranslation: 'Es el restaurante más barato de la ciudad.',
      correctAnswer: 'cheapest',
      acceptedAnswers: ['cheapest', 'Cheapest'],
      explanation: '"Cheap" es corto: the + cheap + -est → the cheapest.',
    },
    {
      id: 'a2-m1-l2-mt3',
      type: 'multiple_choice',
      concept: 'irregular superlatives',
      difficulty: 2,
      prompt: 'Completa: "That was the ___ film of my life." (bad)',
      promptTranslation: 'Esa fue la peor película de mi vida.',
      correctAnswer: 'worst',
      options: ['worst', 'baddest', 'worse'],
      explanation: '"Bad" es irregular: el superlativo es "the worst" (el peor).',
    },
    {
      id: 'a2-m1-l2-mt4',
      type: 'translate',
      concept: 'superlatives',
      difficulty: 3,
      prompt: 'Traduce: "Este es el edificio más alto de la ciudad."',
      correctAnswer: 'This is the tallest building in the city.',
      acceptedAnswers: ['This is the tallest building in the city', 'This is the tallest building in the city.', 'this is the tallest building in the city'],
      acceptApproximate: true,
      explanation: '"El más alto" = the tallest, "edificio de la ciudad" = building in the city.',
    },
    {
      id: 'a2-m1-l2-mt5',
      type: 'error_correction',
      concept: 'more vs the most',
      difficulty: 4,
      prompt: 'Corrige el error: "She is the more interesting person in the office."',
      correctAnswer: 'She is the most interesting person in the office.',
      acceptedAnswers: ['She is the most interesting person in the office', 'She is the most interesting person in the office.', 'she is the most interesting person in the office'],
      acceptApproximate: true,
      explanation: 'Con el grado máximo (3+ personas) usamos "the most", no "more" (que es para comparar dos cosas).',
    },
  ],
  reviewItems: ['a2-m1-l1'],
  prerequisites: ['a2-m1-l1'],
}
