import type { Lesson } from '../../types'

export const lesson101PresentContinuousAff: Lesson = {
  id: 'a1-m10-l1',
  moduleId: 'm10-present-continuous',
  order: 0,
  title: 'Present Continuous (afirmativo)',
  objective: 'Aprender a hablar de acciones que están ocurriendo ahora usando to be + verbo -ing.',
  explanation_es: `El **Present Continuous** (presente continuo) se usa para hablar de algo que está pasando **ahora**, en este momento.

En español: "Estoy trabajando", "Ella está leyendo". En inglés: "I am working", "She is reading".

Se forma con dos partes:
1. El verbo **to be** (am / is / are), según el sujeto.
2. El verbo principal con **-ing**.

- I **am** + working
- He / She / It **is** + working
- You / We / They **are** + working

Recuerda el verbo "to be": I am, you are, he/she/it is, we are, they are.

En el inglés hablado usamos mucho las contracciones: I'm working, She's reading, They're watching TV.

### Cómo añadir -ing (reglas de ortografía)

- Normalmente solo añadimos -ing: **work → working**, **read → reading**, **watch → watching**.
- Si el verbo termina en **-e muda** (una -e que no se pronuncia), la quitamos: **make → making**, **write → writing**.
- Si el verbo tiene **una sílaba** y termina en **consonante + vocal + consonante** (CVC), doblamos la última consonante: **run → running**, **sit → sitting**, **swim → swimming**.

Con sujeto + to be + verbo -ing ya tienes la frase completa.`,
  examples: [
    { english: 'I am working.', spanish: 'Estoy trabajando.', note: "I'm working." },
    { english: 'She is reading.', spanish: 'Ella está leyendo.', note: "She's reading." },
    { english: 'They are watching TV.', spanish: 'Ellos están viendo la tele.' },
    { english: 'He is cooking dinner.', spanish: 'Él está cocinando la cena.' },
    { english: 'I am studying English now.', spanish: 'Estoy estudiando inglés ahora.' },
    { english: 'We are running in the park.', spanish: 'Estamos corriendo en el parque.', note: 'run → running: doblamos la consonante.' },
  ],
  rule: `Estructura: Sujeto + to be (am/is/are) + verbo + -ing

**Tabla con el verbo *work*:**

| Pronombre | to be | Verbo -ing | Ejemplo |
|-----------|-------|-----------|---------|
| I | am | working | I am working. |
| He | is | working | He is working. |
| She | is | working | She is working. |
| It | is | working | It is working. |
| You | are | working | You are working. |
| We | are | working | We are working. |
| They | are | working | They are working. |

**Regla de oro:**
- I → **am**
- He / She / It → **is**
- You / We / They → **are**

Contracciones: I'm, He's, She's, It's, We're, They're.

Ortografía del -ing:
- Normal: work → working
- -e muda: make → making (quitamos la -e)
- CVC (consonante-vocal-consonante): run → running (doblamos la última consonante)`,
  commonMistakes: [
    { wrong: '❌ I working.', correct: '✅ I am working.', explanation: 'El Present Continuous necesita "to be" + verbo -ing. Faltaría el "am".' },
    { wrong: '❌ She is runing.', correct: '✅ She is running.', explanation: 'En "run" (CVC) doblamos la consonante: run → running.' },
    { wrong: '❌ He is makeing.', correct: '✅ He is making.', explanation: 'Quitamos la -e muda: make → making (no "makeing").' },
  ],
  vocabulary: [
    { word: 'work', translation_es: 'trabajar', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'I am working now.', exampleTranslation: 'Estoy trabajando ahora.' },
    { word: 'read', translation_es: 'leer', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'She is reading a book.', exampleTranslation: 'Ella está leyendo un libro.' },
    { word: 'watch', translation_es: 'ver (la tele, una película)', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'They are watching TV.', exampleTranslation: 'Ellos están viendo la tele.' },
    { word: 'cook', translation_es: 'cocinar', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'He is cooking dinner.', exampleTranslation: 'Él está cocinando la cena.' },
    { word: 'study', translation_es: 'estudiar', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'I am studying English.', exampleTranslation: 'Estoy estudiando inglés.' },
    { word: 'run', translation_es: 'correr', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'We are running in the park.', exampleTranslation: 'Estamos corriendo en el parque.' },
    { word: 'swim', translation_es: 'nadar', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'He is swimming in the pool.', exampleTranslation: 'Él está nadando en la piscina.' },
    { word: 'make', translation_es: 'hacer', level: 'A1', category: 'actions', partOfSpeech: 'verb', example: 'She is making a cake.', exampleTranslation: 'Ella está haciendo una tarta.' },
  ],
  grammarPoints: [
    {
      id: 'gp-present-continuous-affirmative',
      level: 'A1',
      name: 'Present Continuous — affirmative',
      explanation_es: 'Se usa para acciones que están ocurriendo ahora. Se forma con to be (am/is/are) + verbo + -ing.',
      formula: 'Subject + am/is/are + verb + -ing',
      examples: ['I am working.', 'She is reading.', 'They are watching TV.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m10-l1-ex1',
      type: 'multiple_choice',
      concept: 'present continuous - to be (am/is/are)',
      difficulty: 1,
      prompt: 'Completa: "I ___ working."',
      promptTranslation: 'Estoy trabajando.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am". → I am working. = Estoy trabajando.',
    },
    {
      id: 'a1-m10-l1-ex2',
      type: 'multiple_choice',
      concept: 'present continuous - to be (am/is/are)',
      difficulty: 1,
      prompt: 'Completa: "She ___ reading."',
      promptTranslation: 'Ella está leyendo.',
      correctAnswer: 'is',
      options: ['am', 'is', 'are'],
      explanation: 'Con "she" usamos "is". → She is reading. = Ella está leyendo.',
    },
    {
      id: 'a1-m10-l1-ex3',
      type: 'multiple_choice',
      concept: 'present continuous - to be (am/is/are)',
      difficulty: 2,
      prompt: 'Completa: "They ___ watching TV."',
      promptTranslation: 'Ellos están viendo la tele.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "they" (plural) usamos "are". → They are watching TV.',
    },
    {
      id: 'a1-m10-l1-ex4',
      type: 'fill_blank',
      concept: 'present continuous - verb + -ing',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "She is ___ dinner." (verbo: cook)',
      promptTranslation: 'Ella está cocinando la cena.',
      correctAnswer: 'cooking',
      acceptedAnswers: ['Cooking'],
      explanation: 'cook → cooking (solo añadimos -ing). → She is cooking dinner.',
    },
    {
      id: 'a1-m10-l1-ex5',
      type: 'fill_blank',
      concept: 'present continuous - spelling (silent e)',
      difficulty: 2,
      prompt: 'Completa: "He is ___ a cake." (verbo: make)',
      promptTranslation: 'Él está haciendo una tarta.',
      correctAnswer: 'making',
      acceptedAnswers: ['Making'],
      explanation: 'make termina en -e muda: quitamos la -e → making. → He is making a cake.',
    },
    {
      id: 'a1-m10-l1-ex6',
      type: 'fill_blank',
      concept: 'present continuous - spelling (double consonant)',
      difficulty: 3,
      prompt: 'Completa: "They are ___ in the park." (verbo: run)',
      promptTranslation: 'Están corriendo en el parque.',
      correctAnswer: 'running',
      acceptedAnswers: ['Running'],
      explanation: 'run termina en CVC → doblamos la n → running. → They are running in the park.',
    },
    {
      id: 'a1-m10-l1-ex7',
      type: 'error_correction',
      concept: 'present continuous - to be + -ing',
      difficulty: 3,
      prompt: 'Corrige el error: "I working now."',
      correctAnswer: 'I am working now.',
      acceptedAnswers: ["I'm working now", 'I am working now', "I'm working now."],
      acceptApproximate: true,
      explanation: 'Falta "to be". → I am working now. (También: I\'m working now.)',
    },
    {
      id: 'a1-m10-l1-ex8',
      type: 'error_correction',
      concept: 'present continuous - spelling (silent e)',
      difficulty: 4,
      prompt: 'Corrige el error: "She is makeing a cake."',
      correctAnswer: 'She is making a cake.',
      acceptedAnswers: ['She is making a cake', 'she is making a cake.'],
      acceptApproximate: true,
      explanation: 'make → making (quitamos la -e muda). No es "makeing".',
    },
    {
      id: 'a1-m10-l1-ex9',
      type: 'translate',
      concept: 'present continuous - affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Estoy trabajando."',
      correctAnswer: 'I am working.',
      acceptedAnswers: ["I'm working", 'I am working', "I'm working."],
      acceptApproximate: true,
      explanation: '"Estoy" → I am (I\'m) + working. → I am working.',
    },
    {
      id: 'a1-m10-l1-ex10',
      type: 'translate',
      concept: 'present continuous - spelling (double consonant)',
      difficulty: 3,
      prompt: 'Traduce: "Él está corriendo."',
      correctAnswer: 'He is running.',
      acceptedAnswers: ["He's running", 'He is running', "He's running."],
      acceptApproximate: true,
      explanation: '"Él está" → He is (He\'s). run → running (doble n). → He is running.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m10-l1-mt1',
      type: 'multiple_choice',
      concept: 'present continuous - to be (am/is/are)',
      difficulty: 1,
      prompt: 'Completa: "We ___ studying English."',
      promptTranslation: 'Estamos estudiando inglés.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "we" usamos "are". → We are studying English.',
    },
    {
      id: 'a1-m10-l1-mt2',
      type: 'multiple_choice',
      concept: 'present continuous - to be with it',
      difficulty: 2,
      prompt: 'Completa: "It ___ raining."',
      promptTranslation: 'Está lloviendo.',
      correctAnswer: 'is',
      options: ['am', 'is', 'are'],
      explanation: 'Con "it" usamos "is". → It is raining. = Está lloviendo.',
    },
    {
      id: 'a1-m10-l1-mt3',
      type: 'fill_blank',
      concept: 'present continuous - spelling (silent e)',
      difficulty: 2,
      prompt: 'Completa: "She is ___ a letter." (verbo: write)',
      promptTranslation: 'Ella está escribiendo una carta.',
      correctAnswer: 'writing',
      acceptedAnswers: ['Writing'],
      explanation: 'write termina en -e muda: quitamos la -e → writing.',
    },
    {
      id: 'a1-m10-l1-mt4',
      type: 'fill_blank',
      concept: 'present continuous - spelling (double consonant)',
      difficulty: 3,
      prompt: 'Completa: "He is ___ in the pool." (verbo: swim)',
      promptTranslation: 'Él está nadando en la piscina.',
      correctAnswer: 'swimming',
      acceptedAnswers: ['Swimming'],
      explanation: 'swim termina en CVC → doblamos la m → swimming.',
    },
    {
      id: 'a1-m10-l1-mt5',
      type: 'translate',
      concept: 'present continuous - affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Ellos están viendo la tele."',
      correctAnswer: 'They are watching TV.',
      acceptedAnswers: ["They're watching TV", 'They are watching TV', "They're watching TV."],
      acceptApproximate: true,
      explanation: '"Ellos están" → They are (They\'re) + watching TV. → They are watching TV.',
    },
  ],
  reviewItems: [],
  prerequisites: ['a1-m9-l4'],
}
