import type { Lesson } from '../../types'

export const lesson11Alphabet: Lesson = {
  id: 'a1-m1-l1',
  moduleId: 'm1-hello-greetings',
  order: 0,
  title: 'El alfabeto en inglés',
  objective: 'Aprender las 26 letras del alfabeto inglés y su pronunciación básica.',
  explanation_es: `El alfabeto inglés tiene **26 letras**, de la A a la Z. A diferencia del español, el inglés no tiene la "Ñ" ni la "CH" como letras separadas.

De esas 26 letras, **5 son vocales**: A, E, I, O, U. Las demás 21 son **consonantes**.

Vocabulario clave:
- **letter** = letra
- **alphabet** = alfabeto
- **vowel** = vocal
- **consonant** = consonante
- **word** = palabra
- **name** = nombre
- **spell** = deletrear

Muchas letras se pronuncian de manera muy diferente a como las decimos en español. Las más difíciles para hispanohablantes son:

- **H** se dice "eitch" (/eɪtʃ/), NO "hache". ¡Es una de las más confusas!
- **J** se dice "jey" (/dʒeɪ/), NO "jota".
- **G** se dice "ji" (/dʒiː/), NO "ge".
- **Y** se dice "wai" (/waɪ/), NO "ye" o "i griega".
- **I** se dice "ai" (/aɪ/), NO "i".
- **E** se dice "i" (/iː/), NO "e".
- **U** se dice "yu" (/juː/), NO "u".

Atención: la letra **I** se pronuncia exactamente igual que el pronombre personal "I" (yo). Aunque se escriben igual, su función es distinta: la letra es solo una letra del alfabeto, y "I" como pronombre significa "yo".

Nota importante: en inglés, una misma letra puede sonar diferente en palabras distintas. Por ejemplo, la letra 'a' suena distinta en "cat", "car" y "cake". Sin embargo, en esta lección solo vamos a aprender **el nombre de cada letra** (cómo se deletrea el alfabeto). Los sonidos de las letras dentro de las palabras se verán más adelante.`,
  examples: [
    { english: 'A is for apple.', spanish: 'La A es de manzana.', note: '"A is for..." es una forma común de enseñar el alfabeto con una palabra de ejemplo.' },
    { english: 'My name starts with M.', spanish: 'Mi nombre empieza con M.', note: 'start = empezar; start with... = empezar por...' },
    { english: 'How do you spell your name?', spanish: '¿Cómo deletreas tu nombre?', note: 'Pregunta muy común al darse a conocer.' },
    { english: 'My name is Ignacio. I-G-N-A-C-I-O.', spanish: 'Mi nombre es Ignacio. I-G-N-A-C-I-O.', note: 'Para deletrear decimos cada letra por separado.' },
    { english: 'The English alphabet has 26 letters.', spanish: 'El alfabeto inglés tiene 26 letras.', note: 'has = tiene (del verbo "to have").' },
    { english: 'A, E, I, O, U are vowels.', spanish: 'A, E, I, O, U son vocales.' },
  ],
  rule: `El alfabeto inglés tiene 26 letras:

A B C D E F G H I J K L M
N O P Q R S T U V W X Y Z

Cinco vocales: A, E, I, O, U.
Las demás son consonantes.

Letras difíciles para hispanohablantes (¡memoriza su nombre!):
- H = "eitch" (NO "hache")
- J = "jey" (NO "jota")
- G = "ji" (NO "ge")
- Y = "wai" (NO "i griega")
- I = "ai" (igual que el pronombre "I" = yo)
- E = "i" (NO "e")
- U = "yu" (NO "u")`,
  commonMistakes: [
    { wrong: '❌ Decir "hache" para la letra H.', correct: '✅ Decir "eitch" (/eɪtʃ/).', explanation: 'La H inglesa se pronuncia muy distinto a la "hache" española. Suena como "eitch".' },
    { wrong: '❌ Decir "jota" para la letra J.', correct: '✅ Decir "jey" (/dʒeɪ/).', explanation: 'La J no se llama "jota" en inglés. Se pronuncia "jey".' },
    { wrong: '❌ Confundir la letra "I" con el pronombre "I".', correct: '✅ Se pronuncian igual (/ai/), pero la "I" es una letra y "I" como pronombre significa "yo".', explanation: 'Mismo sonido, distinta función. Letra I = letra del alfabeto; pronombre I = yo.' },
    { wrong: '❌ Pensar que I y E suenan parecido.', correct: '✅ I = "ai" (/aɪ/) y E = "i" (/iː/).', explanation: 'Suenan completamente diferente. I suena como "ai" y E suena como una "i" española alargada.' },
    { wrong: '❌ Decir "i griega" para la Y.', correct: '✅ Decir "wai" (/waɪ/).', explanation: 'La Y en inglés no es "i griega". Su nombre es "wai".' },
  ],
  vocabulary: [
    { word: 'letter', translation_es: 'letra', level: 'A1', category: 'alphabet', partOfSpeech: 'noun', example: 'The first letter of the alphabet is A.', exampleTranslation: 'La primera letra del alfabeto es A.' },
    { word: 'alphabet', translation_es: 'alfabeto', level: 'A1', category: 'alphabet', partOfSpeech: 'noun', example: 'The English alphabet has 26 letters.', exampleTranslation: 'El alfabeto inglés tiene 26 letras.' },
    { word: 'vowel', translation_es: 'vocal', level: 'A1', category: 'alphabet', partOfSpeech: 'noun', example: 'A, E, I, O, U are vowels.', exampleTranslation: 'A, E, I, O, U son vocales.' },
    { word: 'consonant', translation_es: 'consonante', level: 'A1', category: 'alphabet', partOfSpeech: 'noun', example: 'B is a consonant.', exampleTranslation: 'B es una consonante.' },
    { word: 'word', translation_es: 'palabra', level: 'A1', category: 'alphabet', partOfSpeech: 'noun', example: 'Apple is a word.', exampleTranslation: 'Apple es una palabra.' },
    { word: 'name', translation_es: 'nombre', level: 'A1', category: 'alphabet', partOfSpeech: 'noun', example: 'My name is Ignacio.', exampleTranslation: 'Mi nombre es Ignacio.' },
    { word: 'spell', translation_es: 'deletrear', level: 'A1', category: 'alphabet', partOfSpeech: 'verb', example: 'How do you spell your name?', exampleTranslation: '¿Cómo deletreas tu nombre?' },
  ],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m1-l1-ex1',
      type: 'multiple_choice',
      concept: 'alphabet order',
      difficulty: 1,
      prompt: 'Which letter comes after B in the alphabet?',
      promptTranslation: '¿Qué letra va después de B en el alfabeto?',
      correctAnswer: 'C',
      options: ['A', 'C', 'D'],
      explanation: 'B va seguida de C. → A, B, C, D...',
    },
    {
      id: 'a1-m1-l1-ex2',
      type: 'fill_blank',
      concept: 'alphabet order',
      difficulty: 1,
      prompt: 'Escribe la letra que va después de C: __',
      promptTranslation: 'Write the letter that comes after C.',
      correctAnswer: 'D',
      acceptedAnswers: ['d'],
      explanation: 'C va seguida de D. → A, B, C, D, E...',
    },
    {
      id: 'a1-m1-l1-ex3',
      type: 'true_false',
      concept: 'alphabet facts',
      difficulty: 1,
      prompt: 'There are 26 letters in the English alphabet.',
      promptTranslation: 'Hay 26 letras en el alfabeto inglés.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE'],
      explanation: 'El alfabeto inglés tiene 26 letras, de la A a la Z.',
    },
    {
      id: 'a1-m1-l1-ex4',
      type: 'multiple_choice',
      concept: 'vowels',
      difficulty: 2,
      prompt: 'How many vowels are in the English alphabet?',
      promptTranslation: '¿Cuántas vocales hay en el alfabeto inglés?',
      correctAnswer: '5',
      options: ['4', '5', '6', '7'],
      explanation: 'El inglés tiene 5 vocales: A, E, I, O, U.',
    },
    {
      id: 'a1-m1-l1-ex5',
      type: 'multiple_choice',
      concept: 'alphabet letters',
      difficulty: 2,
      prompt: 'Which is the 5th letter in the English alphabet?',
      promptTranslation: '¿Cuál es la quinta letra del alfabeto inglés?',
      correctAnswer: 'E',
      options: ['D', 'E', 'F', 'G'],
      explanation: 'Contando desde A: A(1), B(2), C(3), D(4), E(5). La quinta letra es E.',
    },
    {
      id: 'a1-m1-l1-ex6',
      type: 'match',
      concept: 'alphabet knowledge',
      difficulty: 2,
      prompt: 'Relaciona cada letra con su descripción.',
      promptTranslation: 'Match each letter with its description.',
      correctAnswer: '',
      pairs: [
        { left: 'A', right: 'Primera letra del alfabeto' },
        { left: 'Z', right: 'Última letra del alfabeto' },
        { left: 'H', right: 'Difícil para hispanohablantes (se dice "eitch")' },
        { left: 'I', right: 'Se pronuncia como el pronombre "I" (= yo)' },
        { left: 'U', right: 'Vocal que se dice "yu"' },
        { left: 'B', right: 'Consonante (segunda letra)' },
      ],
      explanation: 'A es la primera, Z es la última, H es difícil para hispanohablantes, I suena igual que el pronombre "I", U se dice "yu", y B es una consonante.',
    },
    {
      id: 'a1-m1-l1-ex7',
      type: 'translate',
      concept: 'spelling',
      difficulty: 3,
      prompt: 'Traduce: "¿Cómo deletreas tu nombre?"',
      correctAnswer: 'How do you spell your name?',
      acceptedAnswers: ['How do you spell your name', 'how do you spell your name?'],
      acceptApproximate: true,
      explanation: 'spell = deletrear. → How do you spell your name?',
    },
    {
      id: 'a1-m1-l1-ex8',
      type: 'multiple_choice',
      concept: 'vowels',
      difficulty: 2,
      prompt: 'The English alphabet has 26 letters. The vowels are...',
      promptTranslation: 'El alfabeto inglés tiene 26 letras. Las vocales son...',
      correctAnswer: 'A, E, I, O, U',
      options: ['A, E, I, O, U', 'A, B, C, D, E', 'A, E, I, O, Y', 'A, E, I, O, U, Y'],
      explanation: 'Las 5 vocales en inglés son A, E, I, O, U. La Y no es vocal, es consonante.',
    },
    {
      id: 'a1-m1-l1-ex9',
      type: 'error_correction',
      concept: 'alphabet letters',
      difficulty: 3,
      prompt: 'Corrige el error: "La H en inglés se dice hache."',
      promptTranslation: 'Correct the mistake: "The letter H in English is called hache."',
      correctAnswer: 'La H en inglés se dice eitch.',
      acceptedAnswers: ['La H se dice eich', 'La H se dice "eitch"', 'La H en inglés se dice "eitch"'],
      acceptApproximate: true,
      explanation: 'La H NO se dice "hache" en inglés. Se pronuncia "eitch" (/eɪtʃ/).',
    },
    {
      id: 'a1-m1-l1-ex10',
      type: 'multiple_choice',
      concept: 'alphabet order',
      difficulty: 3,
      prompt: 'Which letter comes BEFORE H in the alphabet?',
      promptTranslation: '¿Qué letra va ANTES de H en el alfabeto?',
      correctAnswer: 'G',
      options: ['F', 'G', 'I', 'J'],
      explanation: 'Antes de H viene G. → ..., F, G, H, ...',
    },
  ],
  miniTest: [
    {
      id: 'a1-m1-l1-mt1',
      type: 'multiple_choice',
      concept: 'alphabet order',
      difficulty: 1,
      prompt: 'Which letter comes after A?',
      promptTranslation: '¿Qué letra va después de A?',
      correctAnswer: 'B',
      options: ['C', 'B', 'D'],
      explanation: 'A va seguida de B.',
    },
    {
      id: 'a1-m1-l1-mt2',
      type: 'fill_blank',
      concept: 'alphabet order',
      difficulty: 2,
      prompt: 'Escribe la letra que va ANTES de Z: __',
      promptTranslation: 'Write the letter that comes BEFORE Z.',
      correctAnswer: 'Y',
      acceptedAnswers: ['y'],
      explanation: 'Antes de Z viene Y. → ..., X, Y, Z.',
    },
    {
      id: 'a1-m1-l1-mt3',
      type: 'multiple_choice',
      concept: 'vowels',
      difficulty: 2,
      prompt: 'Which group contains ONLY vowels?',
      promptTranslation: '¿Qué grupo contiene SOLO vocales?',
      correctAnswer: 'A, E, I, O, U',
      options: ['A, E, I, O, U', 'B, C, D, E, F', 'A, E, H, O, U', 'A, E, I, O, B'],
      explanation: 'Solo A, E, I, O, U son las cinco vocales. Las demás letras del listón son consonantes.',
    },
    {
      id: 'a1-m1-l1-mt4',
      type: 'translate',
      concept: 'spelling',
      difficulty: 3,
      prompt: 'Traduce: "Mi nombre empieza con M."',
      correctAnswer: 'My name starts with M.',
      acceptedAnswers: ['My name starts with M', 'my name starts with m.'],
      acceptApproximate: true,
      explanation: 'start with... = empezar por... → My name starts with M.',
    },
    {
      id: 'a1-m1-l1-mt5',
      type: 'true_false',
      concept: 'alphabet facts',
      difficulty: 2,
      prompt: 'The English alphabet has the letter Ñ.',
      promptTranslation: 'El alfabeto inglés tiene la letra Ñ.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Falso. El alfabeto inglés NO tiene la Ñ. Solo tiene 26 letras: A-Z.',
    },
  ],
  reviewItems: [],
  prerequisites: [],
}