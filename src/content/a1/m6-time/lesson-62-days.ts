import type { Lesson } from '../../types'

export const lesson62Days: Lesson = {
  id: 'a1-m6-l2',
  moduleId: 'm6-time',
  order: 1,
  title: 'Días de la semana',
  objective: 'Aprender los días de la semana en inglés y las preposiciones de tiempo con días (on, at the weekend).',
  explanation_es: `Los días de la semana en inglés se escriben SIEMPRE con mayúscula inicial.

### Los siete días

- Monday = lunes
- Tuesday = martes
- Wednesday = miércoles
- Thursday = jueves
- Friday = viernes
- Saturday = sábado
- Sunday = domingo

### weekend y weekday

- The weekend = el fin de semana (sábado y domingo).
- A weekday = un día laborable (de lunes a viernes).
- The weekend is Saturday and Sunday. = El fin de semana es sábado y domingo.

### La preposición con días: "on"

Con los días de la semana usamos la preposición "on":
- I work on Monday. = Trabajo el lunes.
- She goes to the gym on Tuesday and Thursday. = Ella va al gimnasio los martes y jueves.

Ojo: "on Monday" puede significar "el lunes" (un día concreto) o "los lunes" (una rutina).

### El fin de semana: "at the weekend" / "on the weekend"

- at the weekend (inglés británico) = el fin de semana.
- on the weekend (inglés americano) = el fin de semana.
- I relax at the weekend. = Me relajo el fin de semana.

### Otro vocabulario útil

- today = hoy
- tomorrow = mañana
- yesterday = ayer

Recuerda: con días usamos "on", NUNCA "in". Decimos "on Monday", no "in Monday".`,
  examples: [
    { english: 'I work on Monday.', spanish: 'Trabajo el lunes.', note: 'Con días usamos la preposición "on".' },
    { english: 'She goes to the gym on Tuesday and Thursday.', spanish: 'Ella va al gimnasio los martes y jueves.', note: 'Un solo "on" para la lista de días.' },
    { english: 'The weekend is Saturday and Sunday.', spanish: 'El fin de semana es sábado y domingo.', note: 'The weekend = sábado y domingo.' },
    { english: 'I relax at the weekend.', spanish: 'Me relajo el fin de semana.', note: '"at the weekend" es la forma británica.' },
    { english: 'We visit my mother on the weekend.', spanish: 'Visitamos a mi madre el fin de semana.', note: '"on the weekend" es la forma americana.' },
    { english: 'Today is Wednesday.', spanish: 'Hoy es miércoles.', note: 'Today = hoy.' },
    { english: 'See you on Friday!', spanish: '¡Nos vemos el viernes!', note: 'on Friday = el viernes.' },
  ],
  rule: `**Los días de la semana (siempre con mayúscula):**
- Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.

**Preposiciones:**
- on + día: on Monday, on Friday.
- at the weekend (UK) / on the weekend (US) = el fin de semana.
- in + día: NUNCA. ("in Monday" es incorrecto.)

**Vocabulario:**
- weekend = fin de semana. weekday = día laborable.
- today = hoy. tomorrow = mañana. yesterday = ayer.`,
  commonMistakes: [
    { wrong: '❌ In Monday I work.', correct: '✅ On Monday I work.', explanation: 'Con los días de la semana usamos "on", nunca "in".' },
    { wrong: '❌ I work Monday.', correct: '✅ I work on Monday.', explanation: 'Necesitamos la preposición "on" delante del día: work on Monday.' },
    { wrong: '❌ I relax in the weekend.', correct: '✅ I relax at the weekend. / I relax on the weekend.', explanation: 'El fin de semana se dice "at the weekend" (UK) u "on the weekend" (US). Nunca "in the weekend".' },
    { wrong: '❌ I go gym on Tuesday.', correct: '✅ I go to the gym on Tuesday.', explanation: 'No olvides "to the": go to the gym.' },
  ],
  vocabulary: [
    { word: 'Monday', translation_es: 'lunes', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'I work on Monday.', exampleTranslation: 'Trabajo el lunes.' },
    { word: 'Tuesday', translation_es: 'martes', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'She goes to the gym on Tuesday.', exampleTranslation: 'Ella va al gimnasio el martes.' },
    { word: 'Wednesday', translation_es: 'miércoles', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'Today is Wednesday.', exampleTranslation: 'Hoy es miércoles.' },
    { word: 'Thursday', translation_es: 'jueves', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'We have class on Thursday.', exampleTranslation: 'Tenemos clase el jueves.' },
    { word: 'Friday', translation_es: 'viernes', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'See you on Friday!', exampleTranslation: '¡Nos vemos el viernes!' },
    { word: 'Saturday', translation_es: 'sábado', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'I sleep late on Saturday.', exampleTranslation: 'Duermo hasta tarde el sábado.' },
    { word: 'Sunday', translation_es: 'domingo', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'We relax on Sunday.', exampleTranslation: 'Nos relajamos el domingo.' },
    { word: 'weekend', translation_es: 'fin de semana', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'The weekend is Saturday and Sunday.', exampleTranslation: 'El fin de semana es sábado y domingo.' },
    { word: 'weekday', translation_es: 'día laborable', level: 'A1', category: 'days', partOfSpeech: 'noun', example: 'I work on weekdays.', exampleTranslation: 'Trabajo entre semana.' },
    { word: 'today', translation_es: 'hoy', level: 'A1', category: 'days', partOfSpeech: 'adverb', example: 'Today is Monday.', exampleTranslation: 'Hoy es lunes.' },
    { word: 'tomorrow', translation_es: 'mañana (futuro)', level: 'A1', category: 'days', partOfSpeech: 'adverb', example: 'Tomorrow is Saturday.', exampleTranslation: 'Mañana es sábado.' },
    { word: 'yesterday', translation_es: 'ayer', level: 'A1', category: 'days', partOfSpeech: 'adverb', example: 'Yesterday was Friday.', exampleTranslation: 'Ayer fue viernes.' },
  ],
  grammarPoints: [
    {
      id: 'gp-days-prepositions',
      level: 'A1',
      name: 'Prepositions with days — on / at the weekend',
      explanation_es: 'Con los días de la semana usamos la preposición "on": on Monday, on Friday. Para el fin de semana decimos "at the weekend" (UK) u "on the weekend" (US).',
      formula: 'on + day | at the weekend (UK) / on the weekend (US)',
      examples: ['I work on Monday.', 'She goes to the gym on Tuesday and Thursday.', 'I relax at the weekend.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m6-l2-ex1',
      type: 'match',
      concept: 'days of the week - translations',
      difficulty: 1,
      prompt: 'Relaciona cada día de la semana con su traducción.',
      promptTranslation: 'Match each day with its Spanish translation.',
      correctAnswer: '',
      pairs: [
        { left: 'Monday', right: 'lunes' },
        { left: 'Saturday', right: 'sábado' },
        { left: 'Sunday', right: 'domingo' },
        { left: 'Wednesday', right: 'miércoles' },
        { left: 'Friday', right: 'viernes' },
        { left: 'Tuesday', right: 'martes' },
      ],
      explanation: 'Monday=lunes, Tuesday=martes, Wednesday=miércoles, Friday=viernes, Saturday=sábado, Sunday=domingo.',
    },
    {
      id: 'a1-m6-l2-ex2',
      type: 'fill_blank',
      concept: 'days of the week - preposition on',
      difficulty: 1,
      prompt: 'Completa: "I work ___ Monday."',
      promptTranslation: 'Trabajo el lunes.',
      correctAnswer: 'on',
      acceptedAnswers: ['On'],
      explanation: 'Con los días usamos "on": I work on Monday.',
    },
    {
      id: 'a1-m6-l2-ex3',
      type: 'multiple_choice',
      concept: 'days of the week - preposition on',
      difficulty: 1,
      prompt: 'Completa: "She goes to the gym ___ Tuesday."',
      promptTranslation: 'Ella va al gimnasio el martes.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Con los días de la semana siempre usamos "on": on Tuesday.',
    },
    {
      id: 'a1-m6-l2-ex4',
      type: 'multiple_choice',
      concept: 'days of the week - the weekend',
      difficulty: 2,
      prompt: 'Completa (inglés británico): "We go out ___ the weekend."',
      promptTranslation: 'Salimos el fin de semana.',
      correctAnswer: 'at',
      options: ['at', 'in', 'on'],
      explanation: 'En inglés británico se dice "at the weekend". (En americano: "on the weekend".)',
    },
    {
      id: 'a1-m6-l2-ex5',
      type: 'fill_blank',
      concept: 'days of the week - the weekend',
      difficulty: 2,
      prompt: 'Completa: "___ weekend is Saturday and Sunday."',
      promptTranslation: 'El fin de semana es sábado y domingo.',
      correctAnswer: 'The',
      acceptedAnswers: ['the'],
      explanation: 'Usamos "the" con weekend cuando hablamos del fin de semana en general: The weekend is...',
    },
    {
      id: 'a1-m6-l2-ex6',
      type: 'multiple_choice',
      concept: 'days of the week - order',
      difficulty: 2,
      prompt: '¿Qué día viene después de Friday?',
      promptTranslation: 'Which day comes after Friday?',
      correctAnswer: 'Saturday',
      options: ['Saturday', 'Sunday', 'Thursday'],
      explanation: 'El orden es: ... Friday, Saturday, Sunday. Después de Friday viene Saturday.',
    },
    {
      id: 'a1-m6-l2-ex7',
      type: 'reorder',
      concept: 'days of the week - on + day',
      difficulty: 2,
      prompt: 'Ordena: I / work / on / Monday',
      promptTranslation: 'Trabajo el lunes.',
      correctAnswer: 'I work on Monday.',
      words: ['I', 'work', 'on', 'Monday'],
      explanation: 'Orden: sujeto + verbo + on + día → I work on Monday.',
    },
    {
      id: 'a1-m6-l2-ex8',
      type: 'reorder',
      concept: 'days of the week - sentence',
      difficulty: 3,
      prompt: 'Ordena: She / goes / to the gym / on / Tuesday / and / Thursday',
      promptTranslation: 'Ella va al gimnasio los martes y jueves.',
      correctAnswer: 'She goes to the gym on Tuesday and Thursday.',
      words: ['She', 'goes', 'to the gym', 'on', 'Tuesday', 'and', 'Thursday'],
      explanation: 'Orden: She goes to the gym on Tuesday and Thursday.',
    },
    {
      id: 'a1-m6-l2-ex9',
      type: 'translate',
      concept: 'days of the week - on Monday',
      difficulty: 3,
      prompt: 'Traduce: "Trabajo el lunes."',
      correctAnswer: 'I work on Monday.',
      acceptedAnswers: ['I work on Monday', 'i work on monday.', 'On Monday I work.'],
      acceptApproximate: true,
      explanation: 'Con días usamos "on": I work on Monday. (También válido: On Monday I work.)',
    },
    {
      id: 'a1-m6-l2-ex10',
      type: 'translate',
      concept: 'days of the week - the weekend',
      difficulty: 3,
      prompt: 'Traduce: "El fin de semana es sábado y domingo."',
      correctAnswer: 'The weekend is Saturday and Sunday.',
      acceptedAnswers: ['The weekend is Saturday and Sunday', 'the weekend is saturday and sunday.'],
      acceptApproximate: true,
      explanation: 'The weekend is Saturday and Sunday. = El fin de semana es sábado y domingo.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m6-l2-mt1',
      type: 'multiple_choice',
      concept: 'days of the week - preposition on',
      difficulty: 1,
      prompt: 'Completa: "I have English class ___ Wednesday."',
      promptTranslation: 'Tengo clase de inglés el miércoles.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Con los días usamos "on": on Wednesday.',
    },
    {
      id: 'a1-m6-l2-mt2',
      type: 'fill_blank',
      concept: 'days of the week - order',
      difficulty: 2,
      prompt: 'Completa: "The day before Friday is ___."',
      promptTranslation: 'El día antes del viernes es el jueves.',
      correctAnswer: 'Thursday',
      acceptedAnswers: ['thursday', 'Thursday.'],
      explanation: 'El orden es: ... Thursday, Friday ... El día antes de Friday es Thursday.',
    },
    {
      id: 'a1-m6-l2-mt3',
      type: 'translate',
      concept: 'days of the week - the weekend',
      difficulty: 2,
      prompt: 'Traduce: "Me relajo el fin de semana."',
      correctAnswer: 'I relax at the weekend.',
      acceptedAnswers: ['I relax at the weekend', 'I relax on the weekend', 'i relax at the weekend.'],
      acceptApproximate: true,
      explanation: '"at the weekend" (UK) u "on the weekend" (US) = el fin de semana.',
    },
    {
      id: 'a1-m6-l2-mt4',
      type: 'reorder',
      concept: 'days of the week - on + day',
      difficulty: 2,
      prompt: 'Ordena: See / you / on / Friday',
      promptTranslation: 'Nos vemos el viernes.',
      correctAnswer: 'See you on Friday!',
      words: ['See', 'you', 'on', 'Friday'],
      explanation: 'Expresión fija: See you on Friday! = ¡Nos vemos el viernes!',
    },
    {
      id: 'a1-m6-l2-mt5',
      type: 'true_false',
      concept: 'days of the week - in + day (rule)',
      difficulty: 3,
      prompt: 'Frase correcta: "In Monday I have a meeting."',
      promptTranslation: 'El lunes tengo una reunión.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Incorrecto. Con los días se usa "on", no "in": On Monday I have a meeting.',
    },
  ],
  reviewItems: ['a1-m6-l1'],
  prerequisites: ['a1-m6-l1'],
}
