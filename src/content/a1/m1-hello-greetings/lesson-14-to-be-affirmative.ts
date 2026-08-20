import type { Lesson } from '../../types'

export const lesson14ToBeAffirmative: Lesson = {
  id: 'a1-m1-l4',
  moduleId: 'm1-hello-greetings',
  order: 3,
  title: 'El verbo "to be" (afirmativo)',
  objective: 'Aprender a conjugar el verbo "to be" (ser o estar) en afirmativo y presentarte en inglés.',
  explanation_es: `El verbo "to be" es probablemente el verbo más importante del inglés.

Significa "ser" o "estar". En español tenemos dos verbos diferentes — "ser" y "estar" — pero en inglés usamos solo uno: "to be".

Veamos cómo conjuga con los pronombres personales:

- I am  → I'm      (Yo soy / estoy)
- You are → You're (Tú eres / estás, usted es / está)
- He is → He's      (Él es / está)
- She is → She's   (Ella es / está)
- It is → It's      (Eso es / está)
- We are → We're   (Nosotros somos / estamos)
- They are → They're (Ellos son / están)

IMPORTANTE: En inglés puedes contraer y unir dos palabras con un apóstrofo ('). Es muy común en el inglés hablado. Las dos formas — "I am" o "I'm" — son correctas, pero la forma corta (I'm, You're, He's...) es mucho más frecuente en conversación.

Atención a "it": lo usamos para cosas, animales, ideas y situaciones impersonales. Por ejemplo, "It is a book" (Es un libro) o "It is cold" (está frío). En español, "it" no tiene una traducción directa; suele omitirse.`,
  examples: [
    { english: 'I am Ignacio.', spanish: 'Yo soy Ignacio.', note: 'O también: I\'m Ignacio.' },
    { english: 'You are María.', spanish: 'Tú eres María.', note: 'O también: You\'re María.' },
    { english: 'He is John.', spanish: 'Él es John.', note: 'O también: He\'s John.' },
    { english: 'She is a teacher.', spanish: 'Ella es profesora.' },
    { english: 'It is a book.', spanish: 'Es un libro.', note: 'En inglés siempre necesitamos sujeto. No decimos solo "is a book".' },
    { english: 'We are friends.', spanish: 'Nosotros somos amigos.' },
    { english: 'They are from Spain.', spanish: 'Ellos son de España.' },
  ],
  rule: `**Tabla del verbo "to be" (ser / estar):**

| Pronombre | Afirmativo | Contracción | Ejemplo |
|-----------|------------|-------------|---------|
| I | am | I'm | I am Ignacio. |
| You | are | You're | You are María. |
| He | is | He's | He is John. |
| She | is | She's | She is a teacher. |
| It | is | It's | It is a book. |
| We | are | We're | We are friends. |
| They | are | They're | They are from Spain. |

**Regla de oro:**
- I + **am**
- You / We / They + **are**
- He / She / It + **is**

En inglés, SIEMPRE necesitamos un sujeto. No podemos decir solo "am Ignacio" — hay que decir "I am Ignacio".`,
  formation: {
    title: 'Cómo se forma el verbo "to be" — Afirmativo',
    intro: 'El verbo "to be" (ser o estar) tiene tres formas en presente: am, is y are. La forma corta (I\'m, You\'re, He\'s...) es la más usada en conversación.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + am / is / are + complemento',
        examples: [
          { english: 'I am Ignacio.', spanish: 'Yo soy Ignacio.' },
          { english: 'You are María.', spanish: 'Tú eres María.' },
          { english: 'He is John.', spanish: 'Él es John.' },
          { english: 'She is a teacher.', spanish: 'Ella es profesora.' },
          { english: 'We are friends.', spanish: 'Nosotros somos amigos.' },
          { english: 'They are from Spain.', spanish: 'Ellos son de España.' },
        ],
        note: 'I → am · You/We/They → are · He/She/It → is. Con "you" siempre usamos "are", sea singular o plural.',
      },
    ],
    notes: [
      'Contracciones: I am → I\'m, You are → You\'re, He/She/It is → He\'s/She\'s/It\'s, We are → We\'re, They are → They\'re.',
      'En inglés el sujeto es obligatorio: no decimos "am Ignacio", sino "I am Ignacio".',
      '"It" se usa para cosas, animales e ideas: It is a book.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I no am from Spain.', correct: '✅ I am not from Spain.', explanation: 'La negativa de "to be" se forma con "not", no con "no" antes del verbo.' },
    { wrong: '❌ She no is happy.', correct: '✅ She is not happy.', explanation: 'Para negar, usamos "not" después del verbo, no "no" antes.' },
    { wrong: '❌ You is my friend.', correct: '✅ You are my friend.', explanation: 'Con "you" usamos "are", no "is".' },
    { wrong: '❌ They is students.', correct: '✅ They are students.', explanation: 'Con "they" (plural) usamos "are", no "is".' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-to-be-affirmative',
      level: 'A1',
      name: 'Verb to be — affirmative',
      explanation_es: 'El verbo "to be" significa "ser" o "estar". Tres formas: am, is, are.',
      formula: 'I + am | He/She/It + is | You/We/They + are',
      examples: ['I am a student.', 'She is happy.', 'We are friends.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m1-l4-ex1',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 1,
      prompt: 'Completa: "I ___ Ignacio."',
      promptTranslation: 'Yo soy Ignacio.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am". \u2192 I am Ignacio. = Yo soy Ignacio.',
    },
    {
      id: 'a1-m1-l4-ex2',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 1,
      prompt: 'Completa: "She ___ a teacher."',
      promptTranslation: 'Ella es profesora.',
      correctAnswer: 'is',
      options: ['am', 'is', 'are'],
      explanation: 'Con "she" usamos "is". \u2192 She is a teacher. = Ella es profesora.',
    },
    {
      id: 'a1-m1-l4-ex3',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 2,
      prompt: 'Completa: "They ___ from Spain."',
      promptTranslation: 'Ellos son de España.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "they" (plural) usamos "are". \u2192 They are from Spain.',
    },
    {
      id: 'a1-m1-l4-ex4',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 2,
      prompt: 'Completa: "We ___ friends."',
      promptTranslation: 'Nosotros somos amigos.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "we" usamos "are". \u2192 We are friends.',
    },
    {
      id: 'a1-m1-l4-ex5',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 2,
      prompt: 'Completa: "It ___ a book."',
      promptTranslation: 'Es un libro.',
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      explanation: 'Con "it" usamos "is". \u2192 It is a book. = Es un libro. (Para cosas, animales e ideas usamos "it".)',
    },
    {
      id: 'a1-m1-l4-ex6',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 2,
      prompt: 'Completa: "He ___ a doctor."',
      promptTranslation: 'Él es médico.',
      correctAnswer: 'is',
      options: ['is', 'are', 'am'],
      explanation: 'Con "he" usamos "is". \u2192 He is a doctor. = Él es médico.',
    },
    {
      id: 'a1-m1-l4-ex7',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 2,
      prompt: 'Completa: "You ___ my friend."',
      promptTranslation: 'Tú eres mi amigo.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "you" usamos "are" (siempre, sea singular o plural). \u2192 You are my friend.',
    },
    {
      id: 'a1-m1-l4-ex8',
      type: 'translate',
      concept: 'verb to be affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Yo soy María."',
      correctAnswer: 'I am Maria.',
      acceptedAnswers: ['I am María', "I'm Maria", "I'm María", 'I am Maria', 'I am Maria.', "I'm Maria."],
      acceptApproximate: true,
      explanation: 'Para "Yo soy" usamos "I am" (o la contracción "I\'m"). \u2192 I am María.',
    },
    {
      id: 'a1-m1-l4-ex9',
      type: 'translate',
      concept: 'verb to be affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Ellos son estudiantes."',
      correctAnswer: 'They are students.',
      acceptedAnswers: ["They're students", 'They are students', "They're students."],
      acceptApproximate: true,
      explanation: '"They are" \u2192 Ellos son. \u2192 They are students. (También válido: They\'re students.)',
    },
    {
      id: 'a1-m1-l4-ex10',
      type: 'error_correction',
      concept: 'verb to be affirmative',
      difficulty: 3,
      prompt: 'Encuentra el error: "You is my brother."',
      correctAnswer: 'You are my brother.',
      acceptedAnswers: ["You're my brother", "You are my brother", "You're my brother."],
      acceptApproximate: true,
      explanation: 'Con "you" usamos "are", no "is". \u2192 You are my brother. = Tú eres mi hermano.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m1-l4-mt1',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 2,
      prompt: '"___ are very nice." (plural)',
      promptTranslation: '___ son muy simpáticos.',
      correctAnswer: 'They',
      options: ['He', 'She', 'They'],
      explanation: 'Para un plural ("son") usamos "they". \u2192 They are very nice.',
    },
    {
      id: 'a1-m1-l4-mt2',
      type: 'fill_blank',
      concept: 'verb to be affirmative',
      difficulty: 2,
      prompt: 'John ___ my brother. (Affirmative: usa la forma correcta de "to be".)',
      correctAnswer: 'is',
      acceptedAnswers: ["'s"],
      explanation: 'Con "John" (he) usamos "is". \u2192 John is my brother. (También: John\'s my brother.)',
    },
    {
      id: 'a1-m1-l4-mt3',
      type: 'multiple_choice',
      concept: 'verb to be affirmative',
      difficulty: 3,
      prompt: 'Which sentence is correct?',
      correctAnswer: 'It is a beautiful day.',
      options: ['It are a beautiful day.', 'It is a beautiful day.', 'It am a beautiful day.'],
      explanation: 'Con "it" siempre usamos "is". \u2192 It is a beautiful day. = Es un día hermoso.',
    },
    {
      id: 'a1-m1-l4-mt4',
      type: 'translate',
      concept: 'verb to be affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Ella es mi hermana."',
      correctAnswer: 'She is my sister.',
      acceptedAnswers: ["She's my sister", 'She is my sister.', "She's my sister."],
      acceptApproximate: true,
      explanation: 'Para "Ella es" usamos "She is" (o "She\'s"). \u2192 She is my sister. = Ella es mi hermana.',
    },
    {
      id: 'a1-m1-l4-mt5',
      type: 'error_correction',
      concept: 'verb to be affirmative',
      difficulty: 4,
      prompt: 'Corrige el error: "He are my teacher."',
      correctAnswer: 'He is my teacher.',
      acceptedAnswers: ["He's my teacher", "He is my teacher", "He's my teacher."],
      acceptApproximate: true,
      explanation: 'Con "he" usamos "is", no "are". \u2192 He is my teacher. (También: He\'s my teacher.)',
    },
  ],
  reviewItems: [],
  prerequisites: ['a1-m1-l3'],
  workbookRefs: [
    { levelId: 'a1', page: 1, exercises: [2, 3, 4, 5], note: 'Práctica del verbo to be en afirmativo' },
  ],
}