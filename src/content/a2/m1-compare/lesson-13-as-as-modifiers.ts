import type { Lesson } from '../../types'

export const lesson13AsAsModifiers: Lesson = {
  id: 'a2-m1-l3',
  moduleId: 'm1-compare',
  order: 2,
  title: 'Igualdad: as...as + modificadores',
  objective: 'Comparar igualdad con as...as, la forma negativa not as...as, e intensificar comparativos con much, a lot y a little.',
  explanation_es: `En esta lección aprenderás a comparar cuando dos cosas son IGUALES, y a hacer que tus comparaciones sean más precisas.

### 1. Igualdad: as + adjetivo + as

Para decir que dos cosas son iguales usamos: as + adjetivo + as. En español equivale a "tan... como".

- "My brother is as tall as me." = Mi hermano es tan alto como yo.
- "This phone is as fast as that one." = Este teléfono es tan rápido como ese.

### 2. Negativo: not as + adjetivo + as

Para decir que algo NO es tan... como otra cosa:

- "This phone is not as expensive as that one." = Este teléfono no es tan caro como ese.
- "My house is not as big as yours." = Mi casa no es tan grande como la tuya.

Recuerda: siempre "as...as", nunca "as...than". El "than" solo se usa con comparativos (-er / more).

### 3. Modificadores de comparativos

Podemos decir CUÁNTO más grande o más caro es algo usando modificadores antes del comparativo:

- much / a lot = mucho: "Our house is much bigger." (Nuestra casa es mucho más grande.)
- a little / a bit = un poco: "This bag is a little cheaper." (Este bolso es un poco más barato.)

Estos modificadores van delante del comparativo: much bigger, a lot more expensive, a little faster.

### Resumen

- Igualdad: as + adj + as → "as tall as" (tan alto como).
- Desigualdad: not as + adj + as → "not as cheap as" (no tan barato como).
- Intensidad: much / a lot + comparativo (mucho), a little + comparativo (un poco).`,
  examples: [
    { english: 'My brother is as tall as me.', spanish: 'Mi hermano es tan alto como yo.', note: 'as + tall + as = tan alto como.' },
    { english: 'This phone is not as expensive as that one.', spanish: 'Este teléfono no es tan caro como ese.', note: 'Negativo: not as + adj + as.' },
    { english: 'Our house is much bigger.', spanish: 'Nuestra casa es mucho más grande.', note: 'much + comparativo = mucho más.' },
    { english: 'This bag is a little cheaper than that one.', spanish: 'Este bolso es un poco más barato que ese.', note: 'a little + comparativo = un poco más.' },
    { english: 'She is as old as my sister.', spanish: 'Ella tiene la misma edad que mi hermana.', note: 'as old as = de la misma edad que.' },
    { english: 'Madrid is a lot more expensive than my city.', spanish: 'Madrid es mucho más cara que mi ciudad.', note: 'a lot + more + adjetivo largo.' },
  ],
  rule: `1. Igualdad: as + adjetivo + as → "as tall as" (tan alto como).
2. Negativo: not as + adjetivo + as → "not as expensive as" (no tan caro como).
3. SIEMPRE "as...as", NUNCA "as...than".
4. Modificadores: much / a lot (mucho) y a little / a bit (un poco) delante del comparativo.
5. Los modificadores también sirven con "more": a lot more expensive, much more interesting.`,
  formation: {
    title: 'Cómo se forma la igualdad (as...as) y los modificadores',
    intro: 'Para decir que dos cosas son iguales usamos as + adjetivo + as (= tan... como). Para decir cuánto más, añadimos much, a lot o a little delante del comparativo.',
    patterns: [
      {
        name: 'Igualdad (as + adjetivo + as)',
        formula: 'sujeto + to be + as + adjetivo + as + ...',
        examples: [
          { english: 'My brother is as tall as me.', spanish: 'Mi hermano es tan alto como yo.' },
          { english: 'She is as old as my sister.', spanish: 'Ella tiene la misma edad que mi hermana.' },
        ],
        note: 'Entre as...as va el adjetivo en su forma normal, sin -er ni more.',
      },
      {
        name: 'Negativo (not as + adjetivo + as)',
        formula: 'sujeto + to be + not + as + adjetivo + as + ...',
        examples: [
          { english: 'This phone is not as expensive as that one.', spanish: 'Este teléfono no es tan caro como ese.' },
          { english: 'My house is not as big as yours.', spanish: 'Mi casa no es tan grande como la tuya.' },
        ],
        note: 'La negación solo añade "not" delante: is not as tall as.',
      },
      {
        name: 'Modificadores del comparativo',
        formula: 'much / a lot + comparativo | a little / a bit + comparativo',
        examples: [
          { english: 'Our house is much bigger.', spanish: 'Nuestra casa es mucho más grande.' },
          { english: 'Madrid is a lot more expensive than my city.', spanish: 'Madrid es mucho más cara que mi ciudad.' },
          { english: 'This bag is a little cheaper.', spanish: 'Este bolso es un poco más barato.' },
        ],
        note: 'Los modificadores van siempre delante del comparativo y también sirven con "more".',
      },
    ],
    notes: [
      'SIEMPRE "as...as", NUNCA "as...than". "Than" es solo para los comparativos con -er/more.',
      '"Much" y "a lot" = mucho. "A little" y "a bit" = un poco.',
      'No uses "more" para intensificar: ❌ more taller → ✅ much taller.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ My brother is as tall than me.', correct: '✅ My brother is as tall as me.', explanation: 'Con as...as usamos "as" al final, no "than". "Than" es solo para comparativos con -er/more.' },
    { wrong: '❌ He is more taller than me.', correct: '✅ He is much taller than me.', explanation: 'Nunca doble comparativo. Para intensificar usamos "much": much taller, no "more taller".' },
    { wrong: '❌ This phone is more as expensive as that one.', correct: '✅ This phone is as expensive as that one.', explanation: 'La igualdad se forma solo con as...as; no añadimos "more".' },
  ],
  vocabulary: [
    { word: 'as...as', translation_es: 'tan... como', level: 'A2', category: 'equality comparison', partOfSpeech: 'phrase', example: 'My brother is as tall as me.', exampleTranslation: 'Mi hermano es tan alto como yo.' },
    { word: 'not as...as', translation_es: 'no tan... como', level: 'A2', category: 'equality comparison', partOfSpeech: 'phrase', example: 'This phone is not as expensive as that one.', exampleTranslation: 'Este teléfono no es tan caro como ese.' },
    { word: 'much', translation_es: 'mucho (intensificador)', level: 'A2', category: 'comparative modifiers', partOfSpeech: 'adverb', example: 'Our house is much bigger.', exampleTranslation: 'Nuestra casa es mucho más grande.' },
    { word: 'a lot', translation_es: 'mucho (intensificador)', level: 'A2', category: 'comparative modifiers', partOfSpeech: 'phrase', example: 'Madrid is a lot more expensive than my city.', exampleTranslation: 'Madrid es mucho más cara que mi ciudad.' },
    { word: 'a little', translation_es: 'un poco', level: 'A2', category: 'comparative modifiers', partOfSpeech: 'phrase', example: 'This bag is a little cheaper.', exampleTranslation: 'Este bolso es un poco más barato.' },
    { word: 'brother', translation_es: 'hermano', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My brother is as tall as me.', exampleTranslation: 'Mi hermano es tan alto como yo.' },
    { word: 'same', translation_es: 'el mismo, igual', level: 'A1', category: 'equality comparison', partOfSpeech: 'adjective', example: 'We are the same age.', exampleTranslation: 'Tenemos la misma edad.' },
    { word: 'cheap', translation_es: 'barato', level: 'A1', category: 'comparatives', partOfSpeech: 'adjective', example: 'This bag is a little cheaper.', exampleTranslation: 'Este bolso es un poco más barato.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m1-as-as-modifiers',
      level: 'A2',
      name: 'Equality (as...as) and modifiers',
      explanation_es: 'Igualdad con as + adjetivo + as, negación con not as...as, e intensificadores much/a lot y a little delante del comparativo.',
      formula: 'as + adj + as | not as + adj + as | (much / a lot / a little) + comparative',
      examples: ['He is as tall as me.', 'It is not as expensive as that.', 'Our house is much bigger.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m1-l3-ex1',
      type: 'multiple_choice',
      concept: 'as...as equality',
      difficulty: 1,
      prompt: 'Completa: "My brother is ___ tall ___ me."',
      promptTranslation: 'Mi hermano es tan alto como yo.',
      correctAnswer: 'as ... as',
      options: ['as ... as', 'as ... than', 'more ... as'],
      explanation: 'La igualdad se forma con as + adjetivo + as: as tall as. → My brother is as tall as me.',
    },
    {
      id: 'a2-m1-l3-ex2',
      type: 'fill_blank',
      concept: 'not as...as',
      difficulty: 2,
      prompt: 'Completa: "This book is not as ___ as that one." (interesting)',
      promptTranslation: 'Este libro no es tan interesante como ese.',
      correctAnswer: 'interesting',
      acceptedAnswers: ['interesting', 'Interesting'],
      explanation: 'Entre as...as va el adjetivo en su forma normal (sin -er ni more): as interesting as.',
    },
    {
      id: 'a2-m1-l3-ex3',
      type: 'multiple_choice',
      concept: 'modifiers (much / a little)',
      difficulty: 2,
      prompt: 'Completa: "Our house is ___ bigger."',
      promptTranslation: 'Nuestra casa es mucho más grande.',
      correctAnswer: 'much',
      options: ['much', 'more', 'most'],
      explanation: '"Much" intensifica el comparativo: much bigger = mucho más grande. "More" no se usa delante de un comparativo en -er.',
    },
    {
      id: 'a2-m1-l3-ex4',
      type: 'match',
      concept: 'equality and modifiers',
      difficulty: 2,
      prompt: 'Une cada expresión con su significado en español.',
      correctAnswer: 'as tall as→tan alto como, not as cheap as→no es tan barato como, much bigger→mucho más grande, a little older→un poco mayor, as fast as→tan rápido como, a lot more expensive→mucho más caro',
      pairs: [
        { left: 'as tall as', right: 'tan alto como' },
        { left: 'not as cheap as', right: 'no es tan barato como' },
        { left: 'much bigger', right: 'mucho más grande' },
        { left: 'a little older', right: 'un poco mayor' },
        { left: 'as fast as', right: 'tan rápido como' },
        { left: 'a lot more expensive', right: 'mucho más caro' },
      ],
      explanation: 'as...as = tan...como; not as...as = no tan...como; much/a lot = mucho; a little = un poco; todos van delante del comparativo.',
    },
    {
      id: 'a2-m1-l3-ex5',
      type: 'error_correction',
      concept: 'as...as not as...than',
      difficulty: 3,
      prompt: 'Corrige el error: "This phone is as big than that one."',
      correctAnswer: 'This phone is as big as that one.',
      acceptedAnswers: ['This phone is as big as that one', 'This phone is as big as that one.', 'this phone is as big as that one'],
      acceptApproximate: true,
      explanation: 'La igualdad usa "as...as", no "than". → This phone is as big as that one.',
    },
    {
      id: 'a2-m1-l3-ex6',
      type: 'translate',
      concept: 'as...as equality',
      difficulty: 3,
      prompt: 'Traduce: "Mi hermano es tan alto como yo."',
      correctAnswer: 'My brother is as tall as me.',
      acceptedAnswers: ['My brother is as tall as me', 'My brother is as tall as me.', 'my brother is as tall as me', 'My brother is as tall as I am'],
      acceptApproximate: true,
      explanation: '"Mi hermano" = My brother, "tan alto como yo" = as tall as me. (También se acepta "as tall as I am".)',
    },
    {
      id: 'a2-m1-l3-ex7',
      type: 'reorder',
      concept: 'not as...as structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: is / not / This / phone / as / expensive / as / that one',
      promptTranslation: 'Este teléfono no es tan caro como ese.',
      correctAnswer: 'This phone is not as expensive as that one.',
      words: ['This', 'phone', 'is', 'not', 'as', 'expensive', 'as', 'that one'],
      explanation: 'Orden: sujeto + to be + not + as + adjetivo + as + ... → This phone is not as expensive as that one.',
    },
    {
      id: 'a2-m1-l3-ex8',
      type: 'select_correct',
      concept: 'as...as vs as...than',
      difficulty: 4,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Elige la frase correcta.',
      correctAnswer: 'This hotel is as expensive as that one.',
      options: [
        'This hotel is as expensive than that one.',
        'This hotel is as expensive as that one.',
        'This hotel is more expensive as that one.',
      ],
      explanation: 'La igualdad se forma con "as...as" (as expensive as). La opción con "than" y la opción con "more...as" son incorrectas.',
    },
    {
      id: 'a2-m1-l3-ex9',
      type: 'translate',
      concept: 'modifiers with comparatives',
      difficulty: 4,
      prompt: 'Traduce: "Nuestra casa es mucho más grande."',
      correctAnswer: 'Our house is much bigger.',
      acceptedAnswers: ['Our house is much bigger', 'Our house is much bigger.', 'our house is much bigger', 'Our house is a lot bigger.'],
      acceptApproximate: true,
      explanation: '"Nuestra casa" = Our house, "es mucho más grande" = is much bigger. (También válido: a lot bigger.)',
    },
  ],
  miniTest: [
    {
      id: 'a2-m1-l3-mt1',
      type: 'multiple_choice',
      concept: 'as...as equality',
      difficulty: 1,
      prompt: 'Completa: "She is ___ tall ___ her sister."',
      promptTranslation: 'Ella es tan alta como su hermana.',
      correctAnswer: 'as ... as',
      options: ['as ... as', 'as ... than', 'more ... as'],
      explanation: 'Igualdad: as + tall + as. → She is as tall as her sister.',
    },
    {
      id: 'a2-m1-l3-mt2',
      type: 'fill_blank',
      concept: 'modifiers (a little)',
      difficulty: 2,
      prompt: 'Completa: "This bag is ___ cheaper than that one." (un poco)',
      promptTranslation: 'Este bolso es un poco más barato que ese.',
      correctAnswer: 'a little',
      acceptedAnswers: ['a little', 'A little'],
      explanation: '"Un poco" con comparativo = a little: a little cheaper.',
    },
    {
      id: 'a2-m1-l3-mt3',
      type: 'multiple_choice',
      concept: 'not as...as',
      difficulty: 2,
      prompt: 'Completa: "This phone is not ___ expensive ___ that one."',
      promptTranslation: 'Este teléfono no es tan caro como ese.',
      correctAnswer: 'as ... as',
      options: ['as ... as', 'so ... than', 'as ... than'],
      explanation: 'Negación de igualdad: not as + adjetivo + as. → not as expensive as.',
    },
    {
      id: 'a2-m1-l3-mt4',
      type: 'translate',
      concept: 'as...as equality',
      difficulty: 3,
      prompt: 'Traduce: "Este teléfono no es tan caro como ese."',
      correctAnswer: 'This phone is not as expensive as that one.',
      acceptedAnswers: ['This phone is not as expensive as that one', 'This phone is not as expensive as that one.', 'this phone is not as expensive as that one'],
      acceptApproximate: true,
      explanation: '"No es tan caro como" = is not as expensive as. → This phone is not as expensive as that one.',
    },
    {
      id: 'a2-m1-l3-mt5',
      type: 'error_correction',
      concept: 'never double comparative',
      difficulty: 4,
      prompt: 'Corrige el error: "He is more taller than me."',
      correctAnswer: 'He is much taller than me.',
      acceptedAnswers: ['He is much taller than me', 'He is much taller than me.', 'he is much taller than me', 'He is a lot taller than me.'],
      acceptApproximate: true,
      explanation: 'Para intensificar un comparativo usamos "much" o "a lot", nunca "more" (no hay doble comparativo).',
    },
  ],
  reviewItems: ['a2-m1-l2'],
  prerequisites: ['a2-m1-l2'],
}
