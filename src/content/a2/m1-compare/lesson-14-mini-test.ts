import type { Lesson } from '../../types'

export const lesson14MiniTest: Lesson = {
  id: 'a2-m1-l4',
  moduleId: 'm1-compare',
  order: 3,
  title: 'Mini-test: Comparativos y superlativos',
  objective: 'Repasar todo el módulo: comparativos (-er/more), superlativos (-est/the most), as...as y modificadores.',
  explanation_es: `Este es el repaso final del módulo de comparativos. Resumen de todo lo aprendido:

### 1. Comparativos (comparar DOS cosas)

- Adjetivos cortos: adjetivo + -er + than → "bigger than", "cheaper than".
- Adjetivos largos: more + adjetivo + than → "more expensive than".
- Irregulares: good → better, bad → worse, far → farther.

### 2. Superlativos (el grado máximo, 3+ cosas)

- Adjetivos cortos: the + adjetivo + -est → "the biggest".
- Adjetivos largos: the most + adjetivo → "the most expensive".
- Irregulares: good → the best, bad → the worst.
- Después del superlativo usamos "in": "the tallest building in the city".

### 3. Igualdad y modificadores

- Igualdad: as + adjetivo + as → "as tall as" (tan alto como).
- Negación: not as + adjetivo + as → "not as expensive as".
- Intensidad: much / a lot (mucho), a little (un poco) + comparativo.

### Errores que debes evitar

- ❌ more bigger → ✅ bigger.
- ❌ more better → ✅ better.
- ❌ the most biggest → ✅ the biggest.
- ❌ as big than → ✅ as big as.
- ❌ the most ... of the city → ✅ the most ... in the city.`,
  examples: [
    { english: 'This is the biggest city in the country.', spanish: 'Esta es la ciudad más grande del país.', note: 'Superlativo: the biggest + in.' },
    { english: 'The new hotel is more expensive than the old one.', spanish: 'El hotel nuevo es más caro que el antiguo.', note: 'Comparativo largo: more expensive than.' },
    { english: 'My car is not as fast as yours.', spanish: 'Mi coche no es tan rápido como el tuyo.', note: 'Igualdad negativa: not as fast as.' },
    { english: 'This dress is a little cheaper than that one.', spanish: 'Este vestido es un poco más barato que ese.', note: 'Modificador: a little + cheaper.' },
    { english: 'She is the best singer in the world.', spanish: 'Ella es la mejor cantante del mundo.', note: 'Irregular: the best (good).' },
    { english: 'Madrid is much bigger than my city.', spanish: 'Madrid es mucho más grande que mi ciudad.', note: 'Modificador: much + bigger.' },
  ],
  rule: `1. Comparativo (2 cosas): adj + -er + than / more + adj + than → bigger, more expensive.
2. Superlativo (3+ cosas): the + adj + -est / the most + adj + in + lugar → the biggest, the most expensive.
3. Irregulares: better/worse (comparativo), the best/the worst (superlativo).
4. Igualdad: as + adj + as. Negación: not as + adj + as.
5. Modificadores: much/a lot (mucho), a little (un poco) + comparativo.
6. Prohibido: doble comparativo/superlativo (more bigger, the most biggest) y "as...than".`,
  commonMistakes: [
    { wrong: '❌ This is the most best restaurant in town.', correct: '✅ This is the best restaurant in town.', explanation: '"Best" ya es el superlativo de "good"; no añadimos "the most".' },
    { wrong: '❌ My phone is more newer than yours.', correct: '✅ My phone is newer than yours.', explanation: 'Nunca doble comparativo: "newer" es suficiente, sin "more".' },
    { wrong: '❌ She is as tall than me.', correct: '✅ She is as tall as me.', explanation: 'La igualdad se forma con as...as, no con "than".' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-a2m1-review',
      level: 'A2',
      name: 'Comparatives and superlatives review',
      explanation_es: 'Repaso de comparativos (-er/more), superlativos (-est/the most), irregulares (better/best, worse/worst), as...as y modificadores (much, a lot, a little).',
      formula: 'adj + -er + than | the + adj + -est | as + adj + as | (much/a lot/a little) + comparative',
      examples: ['bigger than', 'the biggest', 'as tall as', 'much bigger'],
    },
  ],
  exercises: [
    {
      id: 'a2-m1-l4-ex1',
      type: 'multiple_choice',
      concept: 'comparatives -er',
      difficulty: 1,
      prompt: 'Completa: "This street is ___ than the main avenue." (quiet)',
      promptTranslation: 'Esta calle es más tranquila que la avenida principal.',
      correctAnswer: 'quieter',
      options: ['quieter', 'more quiet', 'quietest'],
      explanation: '"Quiet" es corto: añadimos -er → quieter. → This street is quieter than the main avenue.',
    },
    {
      id: 'a2-m1-l4-ex2',
      type: 'fill_blank',
      concept: 'superlatives',
      difficulty: 2,
      prompt: 'Completa: "It is the ___ restaurant in town." (cheap)',
      promptTranslation: 'Es el restaurante más barato de la ciudad.',
      correctAnswer: 'cheapest',
      acceptedAnswers: ['cheapest', 'Cheapest'],
      explanation: '"Cheap" es corto: the + cheap + -est → the cheapest.',
    },
    {
      id: 'a2-m1-l4-ex3',
      type: 'multiple_choice',
      concept: 'comparatives with more',
      difficulty: 2,
      prompt: 'Completa: "This laptop is ___ than the old one." (powerful)',
      promptTranslation: 'Este portátil es más potente que el antiguo.',
      correctAnswer: 'more powerful',
      options: ['more powerful', 'powerfuler', 'most powerful'],
      explanation: '"Powerful" es un adjetivo largo, así que usamos "more": more powerful.',
    },
    {
      id: 'a2-m1-l4-ex4',
      type: 'error_correction',
      concept: 'never double comparative',
      difficulty: 3,
      prompt: 'Corrige el error: "This café is more cheaper than the other one."',
      correctAnswer: 'This café is cheaper than the other one.',
      acceptedAnswers: ['This café is cheaper than the other one', 'This café is cheaper than the other one.', 'this café is cheaper than the other one'],
      acceptApproximate: true,
      explanation: 'Nunca "more cheaper": "cheap" es corto, usamos -er → cheaper.',
    },
    {
      id: 'a2-m1-l4-ex5',
      type: 'translate',
      concept: 'as...as equality',
      difficulty: 3,
      prompt: 'Traduce: "Este hotel no es tan caro como el otro."',
      correctAnswer: 'This hotel is not as expensive as the other one.',
      acceptedAnswers: ['This hotel is not as expensive as the other one', 'This hotel is not as expensive as the other one.', 'This hotel is not as expensive as the other'],
      acceptApproximate: true,
      explanation: '"No es tan caro como" = is not as expensive as. "El otro" = the other one.',
    },
    {
      id: 'a2-m1-l4-ex6',
      type: 'reorder',
      concept: 'superlative structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: the / is / beach / This / most / in / beautiful / the / country',
      promptTranslation: 'Esta es la playa más bonita del país.',
      correctAnswer: 'This is the most beautiful beach in the country.',
      words: ['This', 'is', 'the', 'most', 'beautiful', 'beach', 'in', 'the', 'country'],
      explanation: 'Orden: sujeto + to be + the most + adjetivo + sustantivo + in + lugar. → This is the most beautiful beach in the country.',
    },
    {
      id: 'a2-m1-l4-ex7',
      type: 'reading',
      concept: 'comparatives and superlatives reading',
      difficulty: 4,
      prompt: 'Lee el texto sobre dos ciudades y responde:',
      reading: {
        text: 'Two cities: Valencia and Madrid\nMadrid and Valencia are two important cities in Spain. Madrid is bigger than Valencia and it has more people. Madrid is also more expensive than Valencia.\nValencia is cheaper and it is near the beach. The weather in Valencia is warmer than in Madrid. Madrid has more museums and theatres, and it is the capital of Spain. Some people think Valencia is more beautiful than Madrid, but Madrid is the best city for work.\nFor me, Valencia is the most relaxing city, and Madrid is the most exciting. Both are great places to visit.',
        translation: 'Dos ciudades: Valencia y Madrid\nMadrid y Valencia son dos ciudades importantes de España. Madrid es más grande que Valencia y tiene más gente. Madrid también es más caro que Valencia.\nValencia es más barata y está cerca de la playa. El clima en Valencia es más cálido que en Madrid. Madrid tiene más museos y teatros, y es la capital de España. Algunas personas creen que Valencia es más bonita que Madrid, pero Madrid es la mejor ciudad para trabajar.\nPara mí, Valencia es la ciudad más relajante, y Madrid es la más emocionante. Ambas son grandes lugares para visitar.',
        questions: [
          {
            id: 'a2-m1-l4-ex7-q1',
            type: 'multiple_choice',
            concept: 'comparatives reading',
            difficulty: 4,
            prompt: '¿Qué ciudad es más grande?',
            correctAnswer: 'Madrid',
            options: ['Madrid', 'Valencia', 'Las dos son iguales'],
            explanation: 'El texto dice: "Madrid is bigger than Valencia". Madrid es más grande.',
          },
          {
            id: 'a2-m1-l4-ex7-q2',
            type: 'multiple_choice',
            concept: 'comparatives reading',
            difficulty: 4,
            prompt: '¿Qué ciudad es más barata?',
            correctAnswer: 'Valencia',
            options: ['Valencia', 'Madrid', 'Ninguna'],
            explanation: 'El texto dice: "Valencia is cheaper and it is near the beach".',
          },
          {
            id: 'a2-m1-l4-ex7-q3',
            type: 'multiple_choice',
            concept: 'superlatives reading',
            difficulty: 4,
            prompt: 'Según el texto, ¿cuál es la mejor ciudad para trabajar?',
            correctAnswer: 'Madrid',
            options: ['Madrid', 'Valencia', 'Las dos por igual'],
            explanation: 'El texto dice: "Madrid is the best city for work".',
          },
          {
            id: 'a2-m1-l4-ex7-q4',
            type: 'multiple_choice',
            concept: 'superlatives reading',
            difficulty: 4,
            prompt: '¿Qué ciudad es la más relajante según el autor?',
            correctAnswer: 'Valencia',
            options: ['Valencia', 'Madrid', 'Ninguna'],
            explanation: 'El autor dice: "Valencia is the most relaxing city".',
          },
          {
            id: 'a2-m1-l4-ex7-q5',
            type: 'multiple_choice',
            concept: 'comparatives reading',
            difficulty: 4,
            prompt: '¿Cómo es el clima en Valencia comparado con Madrid?',
            correctAnswer: 'más cálido',
            options: ['más cálido', 'más frío', 'igual'],
            explanation: 'El texto dice: "The weather in Valencia is warmer than in Madrid".',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'El texto compara Madrid y Valencia: Madrid es más grande, más cara y la mejor para trabajar; Valencia es más barata, más cálida y la más relajante.',
    },
    {
      id: 'a2-m1-l4-ex8',
      type: 'translate',
      concept: 'comparatives review',
      difficulty: 4,
      prompt: 'Traduce: "Este vestido es un poco más barato que ese."',
      correctAnswer: 'This dress is a little cheaper than that one.',
      acceptedAnswers: ['This dress is a little cheaper than that one', 'This dress is a little cheaper than that one.', 'this dress is a little cheaper than that one'],
      acceptApproximate: true,
      explanation: '"Un poco" = a little, "más barato que" = cheaper than. → This dress is a little cheaper than that one.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m1-l4-mt1',
      type: 'multiple_choice',
      concept: 'comparatives -er',
      difficulty: 1,
      prompt: 'Completa: "My house is ___ than yours." (big)',
      promptTranslation: 'Mi casa es más grande que la tuya.',
      correctAnswer: 'bigger',
      options: ['bigger', 'more big', 'biggest'],
      explanation: '"Big" duplica la -g: bigger. Comparamos dos casas, así que usamos comparativo, no superlativo.',
    },
    {
      id: 'a2-m1-l4-mt2',
      type: 'fill_blank',
      concept: 'superlatives',
      difficulty: 2,
      prompt: 'Completa: "This is the ___ building in the city." (tall)',
      promptTranslation: 'Este es el edificio más alto de la ciudad.',
      correctAnswer: 'tallest',
      acceptedAnswers: ['tallest', 'Tallest'],
      explanation: '"Tall" es corto: the + tall + -est → the tallest.',
    },
    {
      id: 'a2-m1-l4-mt3',
      type: 'multiple_choice',
      concept: 'more vs the most',
      difficulty: 2,
      prompt: 'Completa: "She is the ___ student in the class." (good)',
      promptTranslation: 'Ella es la mejor estudiante de la clase.',
      correctAnswer: 'best',
      options: ['best', 'better', 'most good'],
      explanation: '"Good" es irregular: el superlativo es "the best". "Better" sería solo para comparar dos personas.',
    },
    {
      id: 'a2-m1-l4-mt4',
      type: 'translate',
      concept: 'as...as equality',
      difficulty: 3,
      prompt: 'Traduce: "Mi hermano es tan alto como yo."',
      correctAnswer: 'My brother is as tall as me.',
      acceptedAnswers: ['My brother is as tall as me', 'My brother is as tall as me.', 'my brother is as tall as me', 'My brother is as tall as I am'],
      acceptApproximate: true,
      explanation: '"Tan alto como" = as tall as. → My brother is as tall as me.',
    },
    {
      id: 'a2-m1-l4-mt5',
      type: 'error_correction',
      concept: 'superlative + in',
      difficulty: 4,
      prompt: 'Corrige el error: "It is the most expensive restaurant of the city."',
      correctAnswer: 'It is the most expensive restaurant in the city.',
      acceptedAnswers: ['It is the most expensive restaurant in the city', 'It is the most expensive restaurant in the city.', 'it is the most expensive restaurant in the city'],
      acceptApproximate: true,
      explanation: 'Después del superlativo usamos "in", no "of": the most expensive restaurant in the city.',
    },
    {
      id: 'a2-m1-l4-mt6',
      type: 'reorder',
      concept: 'comparative structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: is / than / This / cheaper / phone / that one',
      promptTranslation: 'Este teléfono es más barato que ese.',
      correctAnswer: 'This phone is cheaper than that one.',
      words: ['This', 'phone', 'is', 'cheaper', 'than', 'that one'],
      explanation: 'Orden: sujeto + to be + comparativo + than + ... → This phone is cheaper than that one.',
    },
  ],
  reviewItems: ['a2-m1-l3'],
  prerequisites: ['a2-m1-l3'],
}
