import type { Lesson } from '../../types'

export const lesson11Comparatives: Lesson = {
  id: 'a2-m1-l1',
  moduleId: 'm1-compare',
  order: 0,
  title: 'Comparativos: -er / more',
  objective: 'Comparar dos cosas o personas usando comparativos: -er (adjetivos cortos) y more (adjetivos largos).',
  explanation_es: `En esta lección vas a aprender a comparar dos cosas o personas en inglés.

### ¿Qué es un comparativo?

Un comparativo es la forma del adjetivo que usamos para comparar DOS cosas o personas. En español lo expresamos con "más... que": "más grande que", "más caro que". En inglés hay dos formas principales.

### 1. Adjetivos cortos: adjetivo + -er

Los adjetivos cortos (de una sílaba, como big, tall, fast, cheap) añaden -er:

- big → bigger (más grande)
- tall → taller (más alto)
- fast → faster (más rápido)

Atención a tres reglas de ortografía:
- Si el adjetivo termina en -e, solo añadimos -r: large → larger.
- Si termina en consonante + vocal + consonante, duplicamos la última consonante: big → bigger, hot → hotter.
- Si termina en -y, cambiamos la -y por -ier: easy → easier, happy → happier.

### 2. Adjetivos largos: more + adjetivo

Los adjetivos largos (de dos o más sílabas, como expensive, beautiful, interesting) NO añaden -er; ponemos "more" delante:

- beautiful → more beautiful (más bonito)
- expensive → more expensive (más caro)
- interesting → more interesting (más interesante)

### 3. Comparativos irregulares

Tres adjetivos son irregulares y no siguen ninguna regla:

- good → better (mejor)
- bad → worse (peor)
- far → farther / further (más lejos)

### La fórmula

Para comparar usamos: sujeto + to be + comparativo + than + ...

"than" significa "que". Ejemplo: "My house is bigger than yours." = Mi casa es más grande que la tuya.`,
  examples: [
    { english: 'My house is bigger than yours.', spanish: 'Mi casa es más grande que la tuya.', note: 'big → bigger. than = que.' },
    { english: 'This phone is more expensive than that one.', spanish: 'Este teléfono es más caro que ese.', note: 'Expensive es largo: more + expensive.' },
    { english: 'She is better at English than me.', spanish: 'Ella es mejor en inglés que yo.', note: 'better es el comparativo irregular de good.' },
    { english: 'My car is faster than your bike.', spanish: 'Mi coche es más rápido que tu bicicleta.', note: 'fast → faster.' },
    { english: 'This exercise is easier than the last one.', spanish: 'Este ejercicio es más fácil que el anterior.', note: 'easy → easier (y → ier).' },
    { english: 'Your brother is younger than you.', spanish: 'Tu hermano es más joven que tú.', note: 'young → younger.' },
  ],
  rule: `1. Adjetivos cortos (1 sílaba): adjetivo + -er → big → bigger, tall → taller.
2. Adjetivos largos (2+ sílabas): more + adjetivo → more expensive, more beautiful.
3. Irregulares: good → better, bad → worse, far → farther.
4. Fórmula: sujeto + to be + comparativo + than + ...
5. Nunca uses "more" con adjetivos cortos: ❌ more bigger → ✅ bigger.
6. Ortografía: easy → easier (la -y se convierte en -ier).`,
  commonMistakes: [
    { wrong: '❌ My house is more bigger than yours.', correct: '✅ My house is bigger than yours.', explanation: 'Nunca doble comparativo: con adjetivos cortos usamos -er, no "more".' },
    { wrong: '❌ Her English is more better than mine.', correct: '✅ Her English is better than mine.', explanation: '"Better" ya es el comparativo de "good"; no le añadimos "more".' },
    { wrong: '❌ This phone is more cheap than that one.', correct: '✅ This phone is cheaper than that one.', explanation: '"Cheap" es un adjetivo corto, así que usamos -er: cheaper.' },
  ],
  vocabulary: [
    { word: 'big', translation_es: 'grande', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'My house is bigger than yours.', exampleTranslation: 'Mi casa es más grande que la tuya.' },
    { word: 'small', translation_es: 'pequeño', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'My phone is smaller than yours.', exampleTranslation: 'Mi teléfono es más pequeño que el tuyo.' },
    { word: 'tall', translation_es: 'alto', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'She is taller than her brother.', exampleTranslation: 'Ella es más alta que su hermano.' },
    { word: 'short', translation_es: 'bajo, corto', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'He is shorter than me.', exampleTranslation: 'Él es más bajo que yo.' },
    { word: 'cheap', translation_es: 'barato', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'This bag is cheaper than that one.', exampleTranslation: 'Este bolso es más barato que ese.' },
    { word: 'expensive', translation_es: 'caro', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'This restaurant is more expensive than the other.', exampleTranslation: 'Este restaurante es más caro que el otro.' },
    { word: 'fast', translation_es: 'rápido', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'A car is faster than a bike.', exampleTranslation: 'Un coche es más rápido que una bicicleta.' },
    { word: 'slow', translation_es: 'lento', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'The bus is slower than the train.', exampleTranslation: 'El autobús es más lento que el tren.' },
    { word: 'young', translation_es: 'joven', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'My sister is younger than me.', exampleTranslation: 'Mi hermana es más joven que yo.' },
    { word: 'old', translation_es: 'viejo, mayor', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'My grandfather is older than my father.', exampleTranslation: 'Mi abuelo es mayor que mi padre.' },
    { word: 'easy', translation_es: 'fácil', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'This test is easier than the last one.', exampleTranslation: 'Este examen es más fácil que el anterior.' },
    { word: 'difficult', translation_es: 'difícil', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'English is not more difficult than maths.', exampleTranslation: 'El inglés no es más difícil que las matemáticas.' },
    { word: 'good', translation_es: 'bueno', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'Her English is better than mine.', exampleTranslation: 'Su inglés es mejor que el mío.' },
    { word: 'bad', translation_es: 'malo', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'This film is worse than the other one.', exampleTranslation: 'Esta película es peor que la otra.' },
    { word: 'beautiful', translation_es: 'bonito, hermoso', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'That city is more beautiful than mine.', exampleTranslation: 'Esa ciudad es más bonita que la mía.' },
    { word: 'interesting', translation_es: 'interesante', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'This book is more interesting than that one.', exampleTranslation: 'Este libro es más interesante que ese.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m1-comparatives',
      level: 'A2',
      name: 'Comparatives: -er / more',
      explanation_es: 'Comparamos dos cosas: adjetivos cortos + -er, adjetivos largos con more. Irregulares: better, worse, farther.',
      formula: 'subject + to be + (adj + -er) / (more + adj) + than + ...',
      examples: ['My house is bigger than yours.', 'This phone is more expensive.', 'She is better at English.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m1-l1-ex1',
      type: 'multiple_choice',
      concept: 'comparatives -er',
      difficulty: 1,
      prompt: 'Completa: "This box is ___ than that one." (big)',
      promptTranslation: 'Esta caja es más grande que esa.',
      correctAnswer: 'bigger',
      options: ['bigger', 'more big', 'bigest'],
      explanation: '"Big" es corto y termina en consonante + vocal + consonante, así que duplicamos la -g: bigger. → This box is bigger than that one.',
    },
    {
      id: 'a2-m1-l1-ex2',
      type: 'fill_blank',
      concept: 'comparatives -er',
      difficulty: 1,
      prompt: 'Completa con el comparativo: "She is ___ than me." (tall)',
      promptTranslation: 'Ella es más alta que yo.',
      correctAnswer: 'taller',
      acceptedAnswers: ['taller', 'Taller'],
      explanation: '"Tall" es corto: añadimos -er → taller. → She is taller than me.',
    },
    {
      id: 'a2-m1-l1-ex3',
      type: 'multiple_choice',
      concept: 'comparatives with more',
      difficulty: 2,
      prompt: 'Completa: "This phone is ___ than that one." (expensive)',
      promptTranslation: 'Este teléfono es más caro que ese.',
      correctAnswer: 'more expensive',
      options: ['more expensive', 'expensiver', 'most expensive'],
      explanation: '"Expensive" es un adjetivo largo, así que usamos "more" delante: more expensive.',
    },
    {
      id: 'a2-m1-l1-ex4',
      type: 'match',
      concept: 'comparative forms',
      difficulty: 2,
      prompt: 'Une cada adjetivo con su comparativo correcto.',
      correctAnswer: 'big→bigger, easy→easier, good→better, bad→worse, expensive→more expensive, fast→faster',
      pairs: [
        { left: 'big', right: 'bigger' },
        { left: 'easy', right: 'easier' },
        { left: 'good', right: 'better' },
        { left: 'bad', right: 'worse' },
        { left: 'expensive', right: 'more expensive' },
        { left: 'fast', right: 'faster' },
      ],
      explanation: 'big→bigger (duplica -g), easy→easier (y→ier), good→better y bad→worse (irregulares), expensive→more expensive (largo), fast→faster (-er).',
    },
    {
      id: 'a2-m1-l1-ex5',
      type: 'fill_blank',
      concept: 'comparatives y → ier',
      difficulty: 2,
      prompt: 'Completa con el comparativo: "This exercise is ___ than lesson 1." (easy)',
      promptTranslation: 'Este ejercicio es más fácil que la lección 1.',
      correctAnswer: 'easier',
      acceptedAnswers: ['easier', 'Easier'],
      explanation: 'Cuando un adjetivo termina en -y, la cambiamos por -ier: easy → easier.',
    },
    {
      id: 'a2-m1-l1-ex6',
      type: 'translate',
      concept: 'comparatives',
      difficulty: 3,
      prompt: 'Traduce: "Mi casa es más grande que la tuya."',
      correctAnswer: 'My house is bigger than yours.',
      acceptedAnswers: ['My house is bigger than yours', 'My house is bigger than yours.', 'my house is bigger than yours'],
      acceptApproximate: true,
      explanation: '"Mi casa" = My house, "es más grande que" = is bigger than, "la tuya" = yours. → My house is bigger than yours.',
    },
    {
      id: 'a2-m1-l1-ex7',
      type: 'error_correction',
      concept: 'never double comparative',
      difficulty: 3,
      prompt: 'Corrige el error: "This bag is more cheaper than that one."',
      correctAnswer: 'This bag is cheaper than that one.',
      acceptedAnswers: ['This bag is cheaper than that one', 'This bag is cheaper than that one.', 'this bag is cheaper than that one'],
      acceptApproximate: true,
      explanation: '"Cheap" es corto: usamos -er (cheaper), no "more cheaper". Nunca se combinan "more" y "-er".',
    },
    {
      id: 'a2-m1-l1-ex8',
      type: 'reorder',
      concept: 'comparative sentence structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: is / taller / than / She / her brother',
      promptTranslation: 'Ella es más alta que su hermano.',
      correctAnswer: 'She is taller than her brother.',
      words: ['She', 'is', 'taller', 'than', 'her brother'],
      explanation: 'Orden: sujeto + to be + comparativo + than + ... → She is taller than her brother.',
    },
    {
      id: 'a2-m1-l1-ex9',
      type: 'multiple_choice',
      concept: 'irregular comparatives',
      difficulty: 3,
      prompt: 'Completa: "Her English is ___ than mine." (good)',
      promptTranslation: 'Su inglés es mejor que el mío.',
      correctAnswer: 'better',
      options: ['better', 'gooder', 'more good'],
      explanation: '"Good" es irregular: su comparativo es "better" (mejor), nunca "gooder" ni "more good".',
    },
    {
      id: 'a2-m1-l1-ex10',
      type: 'translate',
      concept: 'comparatives with more',
      difficulty: 4,
      prompt: 'Traduce: "Este teléfono es más caro que ese."',
      correctAnswer: 'This phone is more expensive than that one.',
      acceptedAnswers: ['This phone is more expensive than that one', 'This phone is more expensive than that one.', 'This phone is more expensive than that'],
      acceptApproximate: true,
      explanation: '"Este teléfono" = This phone, "es más caro que" = is more expensive than (expensive es largo), "ese" = that one.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m1-l1-mt1',
      type: 'multiple_choice',
      concept: 'comparatives -er',
      difficulty: 1,
      prompt: 'Completa: "My car is ___ than your bike." (fast)',
      promptTranslation: 'Mi coche es más rápido que tu bicicleta.',
      correctAnswer: 'faster',
      options: ['faster', 'more fast', 'fastest'],
      explanation: '"Fast" es corto: fast → faster. → My car is faster than your bike.',
    },
    {
      id: 'a2-m1-l1-mt2',
      type: 'fill_blank',
      concept: 'comparatives with more',
      difficulty: 2,
      prompt: 'Completa: "This hotel is ___ than that one." (expensive)',
      promptTranslation: 'Este hotel es más caro que ese.',
      correctAnswer: 'more expensive',
      acceptedAnswers: ['more expensive', 'More expensive'],
      explanation: '"Expensive" es largo, así que usamos "more": more expensive.',
    },
    {
      id: 'a2-m1-l1-mt3',
      type: 'multiple_choice',
      concept: 'irregular comparatives',
      difficulty: 2,
      prompt: 'Completa: "The weather today is ___ than yesterday." (bad)',
      promptTranslation: 'El clima de hoy es peor que el de ayer.',
      correctAnswer: 'worse',
      options: ['worse', 'badder', 'more bad'],
      explanation: '"Bad" es irregular: su comparativo es "worse" (peor).',
    },
    {
      id: 'a2-m1-l1-mt4',
      type: 'translate',
      concept: 'comparatives',
      difficulty: 3,
      prompt: 'Traduce: "El café es más barato que el zumo."',
      correctAnswer: 'Coffee is cheaper than juice.',
      acceptedAnswers: ['Coffee is cheaper than juice', 'Coffee is cheaper than juice.', 'The coffee is cheaper than the juice.'],
      acceptApproximate: true,
      explanation: '"El café" = Coffee, "es más barato que" = is cheaper than, "el zumo" = juice.',
    },
    {
      id: 'a2-m1-l1-mt5',
      type: 'error_correction',
      concept: 'never double comparative',
      difficulty: 4,
      prompt: 'Corrige el error: "This film is more better than the other one."',
      correctAnswer: 'This film is better than the other one.',
      acceptedAnswers: ['This film is better than the other one', 'This film is better than the other one.', 'this film is better than the other one'],
      acceptApproximate: true,
      explanation: '"Better" ya es un comparativo. Nunca decimos "more better". → This film is better.',
    },
  ],
  reviewItems: [],
  prerequisites: ['a1-m15-l4'],
}
