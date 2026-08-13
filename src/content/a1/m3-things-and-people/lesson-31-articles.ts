import type { Lesson } from '../../types'

export const lesson31Articles: Lesson = {
  id: 'a1-m3-l1',
  moduleId: 'm3-things-and-people',
  order: 0,
  title: 'Artículos indeterminados: a / an',
  objective: 'Aprender a usar a/an con sustantivos singulares y cuándo omitir el artículo.',
  explanation_es: `En español tenemos un, una, unos, unas. En inglés solo tenemos DOS artículos indeterminados: **"a"** y **"an"**. Significan lo mismo ("un/una") y se usan con sustantivos singulares contables.

La diferencia NO es de género (no existe masculino/femenino en el artículo inglés); es de SONIDO:

- "**a**" se usa antes de un sonido CONSONANTE.
- "**an**" se usa antes de un sonido VOCAL.

Ejemplos con "a" (sonido consonante):
- a book (la "b" es consonante)
- a car (la "k" es consonante)
- a dog (la "d" es consonante)
- a house (la "h" es consonante)

Ejemplos con "an" (sonido vocal):
- an apple (sonido /æ/, vocal)
- an egg (sonido /e/, vocal)
- an orange (sonido /ɒ/, vocal)
- an umbrella (sonido /ʌ/, vocal)

Frase clave: **"We use a/an when the noun is indefinite, not specified, single and countable."** Usamos a/an con un sustantivo no especificado, singular y contable (uno entre muchos).

⚠️ ¡Atención al SONIDO, no a la letra! Hay dos trampas comunes:

1. **Vocal escrita, sonido consonante → "a":**
   - "**a** university" — la "u" se pronuncia /ju/, empieza con sonido consonante /j/.
   - "**a** useful book", "**a** unicorn", "**a** European country".

2. **Consonante escrita, sonido vocal → "an":**
   - "**an** hour" — la "h" es muda; se pronuncia /aʊə/, empieza con vocal.
   - "**an** honest person", "**an** heir".

🔑 IMPORTANTE: "a/an" van con sustantivos SINGULARES CONTABLES. NO se usan con plurales:
- ✅ I have a book. / ✅ I have books.
- ❌ I have a books. (Nunca combinamos "a" con plural.)

Tampoco usamos a/an con sustantivos incontables como "water", "rice", "money": no decimos "a water" sino "a glass of water" (un vaso de agua).`,
  examples: [
    { english: 'I have a book.', spanish: 'Tengo un libro.', note: 'Sonido consonante /b/ → "a".' },
    { english: 'She is an engineer.', spanish: 'Ella es ingeniera.', note: 'Sonido vocal /e/ → "an".' },
    { english: 'It is an apple.', spanish: 'Es una manzana.', note: 'Sonido vocal /æ/.' },
    { english: 'He is a teacher.', spanish: 'Él es profesor.', note: 'Sonido consonante /t/.' },
    { english: 'It is a university.', spanish: 'Es una universidad.', note: 'La "u" suena /ju/ → "a".' },
    { english: "I'll see you in an hour.", spanish: 'Te veo en una hora.', note: 'La "h" es muda → "an".' },
    { english: 'There is an egg in the fridge.', spanish: 'Hay un huevo en la nevera.', note: 'Sonido vocal /e/.' },
    { english: 'Take an umbrella.', spanish: 'Coge un paraguas.', note: 'Sonido vocal /ʌ/.' },
  ],
  rule: `Regla general:
- **a** + sonido CONSONANTE → a book, a car, a university (sonido /j/)
- **an** + sonido VOCAL → an apple, an egg, an hour (h muda)

Solo con sustantivos SINGULARES CONTABLES. No se combina con plurales (no "a books").`,
  commonMistakes: [
    {
      wrong: '❌ I am engineer.',
      correct: '✅ I am an engineer.',
      explanation: '"engineer" empieza con sonido vocal /e/; necesitamos "an". En inglés no se omite el artículo con profesiones.',
    },
    {
      wrong: '❌ I am a engineer.',
      correct: '✅ I am an engineer.',
      explanation: 'Aunque "a" se escribe con consonante, el sonido siguiente es vocal /e/, así que usamos "an".',
    },
    {
      wrong: '❌ I have an book.',
      correct: '✅ I have a book.',
      explanation: '"book" empieza con consonante /b/, así que usamos "a", no "an".',
    },
    {
      wrong: '❌ I have a apple.',
      correct: '✅ I have an apple.',
      explanation: '"apple" empieza con vocal /æ/, así que usamos "an".',
    },
    {
      wrong: '❌ I have a books.',
      correct: '✅ I have books. (o "I have a book.")',
      explanation: 'No se combina "a" con un plural. O singular ("a book") o solo plural ("books").',
    },
    {
      wrong: '❌ an university',
      correct: '✅ a university',
      explanation: 'La "u" de "university" se pronuncia /ju/, sonido consonante. Va con "a".',
    },
    {
      wrong: '❌ an European country',
      correct: '✅ a European country',
      explanation: '"European" empieza con /ju/, sonido consonante. Va con "a".',
    },
  ],
  vocabulary: [
    { word: 'book', translation_es: 'libro', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'I have a book.', exampleTranslation: 'Tengo un libro.' },
    { word: 'pen', translation_es: 'bolígrafo', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'Can I have a pen?', exampleTranslation: '¿Puedo tener un bolígrafo?' },
    { word: 'car', translation_es: 'coche', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'That is a car.', exampleTranslation: 'Ese es un coche.' },
    { word: 'apple', translation_es: 'manzana', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'It is an apple.', exampleTranslation: 'Es una manzana.' },
    { word: 'egg', translation_es: 'huevo', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'I want an egg.', exampleTranslation: 'Quiero un huevo.' },
    { word: 'orange', translation_es: 'naranja', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'I eat an orange.', exampleTranslation: 'Como una naranja.' },
    { word: 'bag', translation_es: 'bolso', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'She has a bag.', exampleTranslation: 'Ella tiene un bolso.' },
    { word: 'chair', translation_es: 'silla', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'This is a chair.', exampleTranslation: 'Esta es una silla.' },
    { word: 'house', translation_es: 'casa', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'I live in a house.', exampleTranslation: 'Vivo en una casa.' },
    { word: 'umbrella', translation_es: 'paraguas', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'Take an umbrella.', exampleTranslation: 'Coge un paraguas.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a-an',
      level: 'A1',
      name: 'Articles a/an (indefinite)',
      explanation_es: '"a" se usa antes de un sonido consonante; "an" antes de un sonido vocal. Se usan con sustantivos singulares contables no especificados.',
      formula: 'a + consonant sound | an + vowel sound',
      examples: ['a book', 'an apple', 'an hour', 'a university'],
    },
  ],
  exercises: [
    {
      id: 'a1-m3-l1-ex1',
      type: 'multiple_choice',
      concept: 'a vs an — basic',
      difficulty: 1,
      prompt: 'Elige el artículo correcto: "___ book"',
      promptTranslation: 'Elige el artículo correcto: "___ book".',
      correctAnswer: 'a',
      options: ['a', 'an'],
      explanation: '"book" empieza con consonante /b/, así que usamos "a". → a book.',
    },
    {
      id: 'a1-m3-l1-ex2',
      type: 'multiple_choice',
      concept: 'a vs an — vowel sound',
      difficulty: 1,
      prompt: 'Elige el artículo correcto: "___ apple"',
      promptTranslation: 'Elige el artículo correcto: "___ apple".',
      correctAnswer: 'an',
      options: ['a', 'an'],
      explanation: '"apple" empieza con vocal /æ/, así que usamos "an". → an apple.',
    },
    {
      id: 'a1-m3-l1-ex3',
      type: 'fill_blank',
      concept: 'a vs an — sentence context',
      difficulty: 2,
      prompt: 'Completa con a o an: "I have ___ egg."',
      promptTranslation: 'Completa con a o an: "I have ___ egg."',
      correctAnswer: 'an',
      explanation: '"egg" empieza con vocal /e/, usamos "an". → I have an egg.',
    },
    {
      id: 'a1-m3-l1-ex4',
      type: 'fill_blank',
      concept: 'a vs an — consonant sound',
      difficulty: 2,
      prompt: 'Completa con a o an: "She is ___ teacher."',
      promptTranslation: 'Completa con a o an: "She is ___ teacher."',
      correctAnswer: 'a',
      explanation: '"teacher" empieza con consonante /t/, usamos "a". → She is a teacher.',
    },
    {
      id: 'a1-m3-l1-ex5',
      type: 'multiple_choice',
      concept: 'a vs an — tricky "u"',
      difficulty: 3,
      prompt: "Elige el artículo correcto: '___ university'",
      promptTranslation: 'Elige el artículo correcto: "___ university".',
      correctAnswer: 'a',
      options: ['a', 'an'],
      explanation: 'La "u" de "university" se pronuncia /ju/, sonido consonante. Va con "a". → a university.',
    },
    {
      id: 'a1-m3-l1-ex6',
      type: 'multiple_choice',
      concept: 'a vs an — silent h',
      difficulty: 3,
      prompt: "Elige el artículo correcto: '___ hour'",
      promptTranslation: 'Elige el artículo correcto: "___ hour".',
      correctAnswer: 'an',
      options: ['a', 'an'],
      explanation: 'La "h" de "hour" es muda; se pronuncia /aʊə/, sonido vocal. Va con "an". → an hour.',
    },
    {
      id: 'a1-m3-l1-ex7',
      type: 'match',
      concept: 'a vs an — vowel/consonant sounds',
      difficulty: 2,
      prompt: 'Une cada palabra con el artículo correcto.',
      promptTranslation: 'Match each word with the correct article.',
      correctAnswer: '',
      pairs: [
        { left: 'book', right: 'a' },
        { left: 'orange', right: 'an' },
        { left: 'car', right: 'a' },
        { left: 'umbrella', right: 'an' },
        { left: 'university', right: 'a' },
        { left: 'hour', right: 'an' },
      ],
      explanation: 'Recuerda: lo que importa es el SONIDO, no la letra. "university" (sonido /j/) y "hour" (h muda) son los casos especiales.',
    },
    {
      id: 'a1-m3-l1-ex8',
      type: 'error_correction',
      concept: 'a vs an — wrong article',
      difficulty: 3,
      prompt: 'Corrige el error: "I have an book."',
      promptTranslation: 'Corrige el error: "I have an book."',
      correctAnswer: 'I have a book.',
      acceptedAnswers: ['I have a book'],
      acceptApproximate: true,
      explanation: '"book" empieza con consonante /b/, así que usamos "a", no "an". → I have a book.',
    },
    {
      id: 'a1-m3-l1-ex9',
      type: 'translate',
      concept: 'a/an — basic translation',
      difficulty: 3,
      prompt: 'Traduce: "Es una manzana."',
      promptTranslation: 'Traduce: "Es una manzana."',
      correctAnswer: 'It is an apple.',
      acceptedAnswers: ["It's an apple.", "It's an apple", 'It is an apple', "It's a apple."],
      acceptApproximate: true,
      explanation: '"Es" = "It is". "manzana" empieza con vocal → "an apple". → It is an apple.',
    },
    {
      id: 'a1-m3-l1-ex10',
      type: 'error_correction',
      concept: 'a + plural — wrong',
      difficulty: 4,
      prompt: 'Corrige el error: "I have a books."',
      promptTranslation: 'Corrige el error: "I have a books."',
      correctAnswer: 'I have books.',
      acceptedAnswers: ['I have a book.', 'I have books', 'I have a book'],
      acceptApproximate: true,
      explanation: 'No se combina "a" con un plural. O usamos singular ("a book") o solo plural ("books"). → I have books.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m3-l1-mt1',
      type: 'multiple_choice',
      concept: 'a vs an — basic',
      difficulty: 2,
      prompt: 'Elige: "___ orange"',
      promptTranslation: 'Elige el artículo correcto: "___ orange".',
      correctAnswer: 'an',
      options: ['a', 'an'],
      explanation: '"orange" empieza con vocal /ɒ/, usamos "an". → an orange.',
    },
    {
      id: 'a1-m3-l1-mt2',
      type: 'fill_blank',
      concept: 'a vs an — sentence',
      difficulty: 2,
      prompt: 'Completa: "He is ___ doctor." (a o an)',
      promptTranslation: 'Completa: "He is ___ doctor." (a or an)',
      correctAnswer: 'a',
      explanation: '"doctor" empieza con consonante /d/, usamos "a". → He is a doctor.',
    },
    {
      id: 'a1-m3-l1-mt3',
      type: 'multiple_choice',
      concept: 'a vs an — tricky u sound',
      difficulty: 3,
      prompt: 'Elige: "___ useful book"',
      promptTranslation: 'Elige el artículo correcto: "___ useful book".',
      correctAnswer: 'a',
      options: ['a', 'an'],
      explanation: '"useful" empieza con /ju/, sonido consonante. Va con "a". → a useful book.',
    },
    {
      id: 'a1-m3-l1-mt4',
      type: 'translate',
      concept: 'a/an — sentence translate',
      difficulty: 3,
      prompt: 'Traduce: "Es un coche."',
      promptTranslation: 'Traduce: "Es un coche."',
      correctAnswer: 'It is a car.',
      acceptedAnswers: ["It's a car.", "It's a car", 'It is a car'],
      acceptApproximate: true,
      explanation: '"coche" = "car" empieza con consonante /k/, usamos "a". → It is a car.',
    },
    {
      id: 'a1-m3-l1-mt5',
      type: 'error_correction',
      concept: 'a + plural',
      difficulty: 4,
      prompt: 'Corrige: "She has a pens."',
      promptTranslation: 'Corrige: "She has a pens."',
      correctAnswer: 'She has pens.',
      acceptedAnswers: ['She has a pen.', 'She has pens', 'She has a pen'],
      acceptApproximate: true,
      explanation: 'No se combina "a" con plural. → She has pens. (o "She has a pen.")',
    },
  ],
  reviewItems: ['a1-m2-l5'],
  prerequisites: ['a1-m2-l5'],
}