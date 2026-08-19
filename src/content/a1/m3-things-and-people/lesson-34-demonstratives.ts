import type { Lesson } from '../../types'

export const lesson34Demonstratives: Lesson = {
  id: 'a1-m3-l4',
  moduleId: 'm3-things-and-people',
  order: 3,
  title: 'This / That + Mini-Test',
  objective: 'Aprender a usar this (cerca) y that (lejos) para señalar cosas, y completar el módulo.',
  explanation_es: `Los demostrativos sirven para SEÑALAR algo. En A1 vemos solo formas SINGULARES: **this** y **that**.

- **this** = este/esta — algo CERCA de mí (aquí).
- **that** = ese/esa — algo LEJOS de mí (allí).

Van con el verbo "to be":
- "This IS [singular]." → "This is my book." = Este es mi libro. (cerca)
- "That IS [singular]." → "That is your car." = Ese es tu coche. (lejos)

Ejemplos:
- "This is my house." (señalando una casa cerca de ti)
- "That is your bike." (señalando una bici lejos)
- "Is this your pen?" (preguntando por un bolígrafo cercano)

🔍 Diferencia con el español: en español "este/esa" cambian con el género (este libro / esta casa). En inglés **"this" y "that" no cambian** con el género — valen para masculino y femenino.

| Cerca | Lejos | Número |
|---|---|---|
| this | that | Singular |
| these | those | Plural (A2 — se verán más adelante) |

**Mención breve a los plurales** (A2, fuera del foco A1):
- "These are my books." (cerca, plural) → "Estos son mis libros."
- "Those are your cars." (lejos, plural) → "Esos son tus coches."
- Con plural usamos "are", no "is". Lo veremos en módulos posteriores.

⚠️ En respuestas cortas, usamos "it", no el demostrativo:
- "Is this your pen?" → "Yes, **it** is." (no "Yes, this is").

En esta lección nos enfocamos en singular: **this is / that is**.`,
  examples: [
    { english: 'This is my house.', spanish: 'Esta es mi casa.', note: 'Señalando una casa cerca.' },
    { english: 'That is your bike.', spanish: 'Ese es tu bicicleta.', note: 'Señalando algo lejos.' },
    { english: 'Is this your pen?', spanish: '¿Es este tu bolígrafo?', note: 'Pregunta sobre un objeto cercano.' },
    { english: 'That is not a book.', spanish: 'Ese no es un libro.', note: 'Lejos: that.' },
    { english: 'This is my friend, John.', spanish: 'Este es mi amigo, John.', note: 'Presentando a alguien a tu lado.' },
    { english: 'That is a big tree.', spanish: 'Ese es un árbol grande.', note: 'Un árbol a lo lejos.' },
  ],
  rule: `Regla:
- **this** = aquí / cerca — singular. Va con "is": "This is..."
- **that** = allí / lejos — singular. Va con "is": "That is..."
- No cambian con el género (this/that valen para masculino y femenino).
- Plurales (A2): "these" (cerca) y "those" (lejos) van con "are".`,
  formation: {
    title: 'Cómo se usan this / that',
    intro: 'Los demostrativos sirven para señalar. "this" indica algo cerca de mí (aquí) y "that" algo lejos (allí). En A1 usamos las formas singulares con "is".',
    patterns: [
      {
        name: 'Cerca: this',
        formula: 'This + is + sustantivo singular',
        examples: [
          { english: 'This is my house.', spanish: 'Esta es mi casa.' },
          { english: 'This is my friend, John.', spanish: 'Este es mi amigo, John.' },
        ],
        note: '"this" = cerca de mí (aquí).',
      },
      {
        name: 'Lejos: that',
        formula: 'That + is + sustantivo singular',
        examples: [
          { english: 'That is your bike.', spanish: 'Ese es tu bicicleta.' },
          { english: 'That is a big tree.', spanish: 'Ese es un árbol grande.' },
        ],
        note: '"that" = lejos de mí (allí).',
      },
      {
        name: 'Pregunta',
        formula: 'Is this/that + sustantivo singular?',
        examples: [
          { english: 'Is this your pen?', spanish: '¿Es este tu bolígrafo?' },
        ],
        note: 'En las respuestas cortas usamos "it", no el demostrativo: Yes, it is.',
      },
    ],
    notes: [
      '"this" y "that" no cambian con el género: valen para masculino y femenino.',
      'En plural (A2) se usan "these" (cerca) y "those" (lejos) con "are".',
    ],
  },
  commonMistakes: [
    { wrong: '❌ This are my book.', correct: '✅ This is my book.', explanation: '"This" es singular, va con "is", no "are". → This is my book.' },
    { wrong: '❌ That are a car.', correct: '✅ That is a car.', explanation: '"That" es singular, va con "is", no "are". → That is a car.' },
    { wrong: '❌ This is my books. (plural)', correct: '✅ These are my books.', explanation: 'Para plural usamos "these" (A2), no "this" + plural.' },
    { wrong: '❌ Is this a book? — Yes, this is.', correct: '✅ Yes, it is.', explanation: 'En respuestas cortas usamos "it", no el demostrativo. → Yes, it is.' },
    { wrong: '❌ This is one book beautiful.', correct: '✅ This is a beautiful book.', explanation: 'El adjetivo va antes del sustantivo en inglés: "a beautiful book". → This is a beautiful book.' },
  ],
  vocabulary: [
    { word: 'this', translation_es: 'este/a (cerca)', level: 'A1', category: 'demonstratives', partOfSpeech: 'pronoun', example: 'This is my bag.', exampleTranslation: 'Este es mi bolso.' },
    { word: 'that', translation_es: 'ese/a (lejos)', level: 'A1', category: 'demonstratives', partOfSpeech: 'pronoun', example: 'That is your car.', exampleTranslation: 'Ese es tu coche.' },
    { word: 'here', translation_es: 'aquí', level: 'A1', category: 'place', partOfSpeech: 'adverb', example: 'Come here.', exampleTranslation: 'Ven aquí.' },
    { word: 'there', translation_es: 'allí', level: 'A1', category: 'place', partOfSpeech: 'adverb', example: 'Look there!', exampleTranslation: '¡Mira allí!' },
    { word: 'near', translation_es: 'cerca', level: 'A1', category: 'place', partOfSpeech: 'adjective', example: 'The shop is near.', exampleTranslation: 'La tienda está cerca.' },
    { word: 'far', translation_es: 'lejos', level: 'A1', category: 'place', partOfSpeech: 'adjective', example: 'The airport is far.', exampleTranslation: 'El aeropuerto está lejos.' },
  ],
  grammarPoints: [
    {
      id: 'gp-this-that',
      level: 'A1',
      name: 'Demonstratives: this/that',
      explanation_es: '"this" = algo cerca (aquí); "that" = algo lejos (allí). Van con "is": This is / That is (singular). No cambian con el género.',
      formula: 'this + is | that + is',
      examples: ['This is my book.', 'That is your car.', 'Is this your pen?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m3-l4-ex1',
      type: 'multiple_choice',
      concept: 'this vs that — distance',
      difficulty: 1,
      prompt: 'Señalas un lápiz CERCA de ti. ¿Cómo empezar?',
      promptTranslation: 'You point to a pen NEAR you. How do you start?',
      correctAnswer: 'This is',
      options: ['This is', 'That is'],
      explanation: 'Cerca → "this". → This is my pen.',
    },
    {
      id: 'a1-m3-l4-ex2',
      type: 'multiple_choice',
      concept: 'this vs that — distance',
      difficulty: 1,
      prompt: 'Señalas una casa LEJOS. ¿Cómo empezar?',
      promptTranslation: 'You point to a house FAR away. How do you start?',
      correctAnswer: 'That is',
      options: ['This is', 'That is'],
      explanation: 'Lejos → "that". → That is my house.',
    },
    {
      id: 'a1-m3-l4-ex3',
      type: 'fill_blank',
      concept: 'this/that + is agreement',
      difficulty: 2,
      prompt: 'Completa con is o are: "This ___ my book."',
      promptTranslation: 'Completa con is o are: "This ___ my book."',
      correctAnswer: 'is',
      explanation: '"This" es singular → "is", no "are". → This is my book.',
    },
    {
      id: 'a1-m3-l4-ex4',
      type: 'error_correction',
      concept: 'this/that + are — wrong agreement',
      difficulty: 3,
      prompt: 'Corrige: "That are a car."',
      promptTranslation: 'Corrige: "That are a car."',
      correctAnswer: 'That is a car.',
      acceptedAnswers: ["That's a car.", "That's a car", 'That is a car'],
      acceptApproximate: true,
      explanation: '"That" es singular → "is", no "are". → That is a car.',
    },
    {
      id: 'a1-m3-l4-ex5',
      type: 'translate',
      concept: 'this — statement',
      difficulty: 2,
      prompt: 'Traduce: "Este es mi coche."',
      promptTranslation: 'Traduce: "This is my car."',
      correctAnswer: 'This is my car.',
      acceptedAnswers: ["This is my car", "This's my car."],
      acceptApproximate: true,
      explanation: 'Cerca → "this"; con "coche" usamos "is". → This is my car.',
    },
    {
      id: 'a1-m3-l4-ex6',
      type: 'match',
      concept: 'this/that — distance meanings',
      difficulty: 2,
      prompt: 'Une cada demostrativo con su significado de distancia.',
      promptTranslation: 'Match each demonstrative with its distance meaning.',
      correctAnswer: '',
      pairs: [
        { left: 'this', right: 'cerca / aquí' },
        { left: 'that', right: 'lejos / allí' },
        { left: 'This is', right: 'singular + is (cerca)' },
        { left: 'That is', right: 'singular + is (lejos)' },
      ],
      explanation: '"this" = cerca; "that" = lejos. Ambos van con "is" en singular.',
    },
    {
      id: 'a1-m3-l4-ex7',
      type: 'true_false',
      concept: 'short answer it — not demonstrative',
      difficulty: 3,
      prompt: 'La respuesta correcta a "Is this your bag?" es "Yes, this is."',
      promptTranslation: 'La respuesta correcta a "Is this your bag?" es "Yes, this is."',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'F'],
      explanation: 'Falso. En respuestas cortas usamos "it", no el demostrativo. → "Yes, it is."',
    },
    {
      id: 'a1-m3-l4-ex8',
      type: 'multiple_choice',
      concept: 'module 3 — plurals + articles (mini-test preview)',
      difficulty: 3,
      prompt: 'Elige la oración correcta (artículo + plural):',
      promptTranslation: 'Elige la oración correcta (artículo + plural):',
      correctAnswer: 'I have three books.',
      options: ['I have a books.', 'I have three books.', 'I have three book.'],
      explanation: 'No combinamos "a" con plural. La cantidad (three) no sustituye al "-s". → I have three books.',
    },
    {
      id: 'a1-m3-l4-ex9',
      type: 'multiple_choice',
      concept: 'module 3 — articles + demonstrative',
      difficulty: 3,
      prompt: 'Elige: "This is ___ umbrella." (cerca)',
      promptTranslation: 'Elige el artículo correcto: "This is ___ umbrella." (cerca)',
      correctAnswer: 'an',
      options: ['a', 'an', 'the'],
      explanation: '"umbrella" empieza con vocal /ʌ/ → "an". → This is an umbrella.',
    },
    {
      id: 'a1-m3-l4-ex10',
      type: 'select_correct',
      concept: 'module 3 — full sentence',
      difficulty: 4,
      prompt: 'Elige la oración completamente correcta:',
      promptTranslation: 'Elige la oración completamente correcta:',
      correctAnswer: 'This is an apple.',
      options: ['This is a apple.', 'This is an apple.', 'This are an apple.', 'That are an apple.'],
      explanation: '"This" → "is" (singular). "apple" → "an" (vocal). → This is an apple.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m3-l4-mt1',
      type: 'multiple_choice',
      concept: 'this/that — distance',
      difficulty: 2,
      prompt: 'Señalas una tienda LEJOS. Dices: "___ is the shop."',
      promptTranslation: 'You point to a shop FAR away. You say: "___ is the shop."',
      correctAnswer: 'That',
      options: ['This', 'That'],
      explanation: 'Lejos → "that". → That is the shop.',
    },
    {
      id: 'a1-m3-l4-mt2',
      type: 'fill_blank',
      concept: 'plural — bus',
      difficulty: 3,
      prompt: 'Escribe el plural de "bus":',
      promptTranslation: 'Escribe el plural de "bus"',
      correctAnswer: 'buses',
      explanation: 'Después de "-s" añadimos "-es". → buses. (Pregunta de plurales del módulo.)',
    },
    {
      id: 'a1-m3-l4-mt3',
      type: 'multiple_choice',
      concept: 'a/an + articles',
      difficulty: 3,
      prompt: 'Elige: "She is ___ engineer."',
      promptTranslation: 'Elige el artículo correcto: "She is ___ engineer."',
      correctAnswer: 'an',
      options: ['a', 'an', 'the'],
      explanation: '"engineer" empieza con vocal /e/ → "an". (Pregunta de artículos del módulo.)',
    },
    {
      id: 'a1-m3-l4-mt4',
      type: 'translate',
      concept: 'this/that — translation',
      difficulty: 3,
      prompt: 'Traduce: "Ese no es un libro."',
      promptTranslation: 'Traduce: "That is not a book."',
      correctAnswer: 'That is not a book.',
      acceptedAnswers: ["That's not a book.", "That is not a book", "That's not a book"],
      acceptApproximate: true,
      explanation: '"Ese" (lejos) → "that"; "libro" empieza con consonante → "a". → That is not a book.',
    },
    {
      id: 'a1-m3-l4-mt5',
      type: 'error_correction',
      concept: 'module 3 — plural agreement',
      difficulty: 4,
      prompt: 'Corrige: "Where is the keys?"',
      promptTranslation: 'Corrige: "Where is the keys?"',
      correctAnswer: 'Where are the keys?',
      acceptedAnswers: ['Where are the keys', "Where're the keys?", "Where're the keys"],
      acceptApproximate: true,
      explanation: '"keys" es plural → "are", no "is". → Where are the keys? (Pregunta de "Where is/are".)',
    },
  ],
  reviewItems: ['a1-m3-l3'],
  prerequisites: ['a1-m3-l3'],
}