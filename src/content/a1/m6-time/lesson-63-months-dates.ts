import type { Lesson } from '../../types'

export const lesson63MonthsDates: Lesson = {
  id: 'a1-m6-l3',
  moduleId: 'm6-time',
  order: 2,
  title: 'Meses, estaciones y fechas',
  objective: 'Aprender los meses del año, las estaciones, los números ordinales y decir fechas y cumpleaños.',
  explanation_es: `Los meses del año en inglés, como los días, se escriben SIEMPRE con mayúscula inicial.

### Los doce meses

- January = enero
- February = febrero
- March = marzo
- April = abril
- May = mayo
- June = junio
- July = julio
- August = agosto
- September = septiembre
- October = octubre
- November = noviembre
- December = diciembre

### Las estaciones del año

- spring = primavera
- summer = verano
- autumn / fall = otoño (autumn es más británico; fall es más americano)
- winter = invierno

### Los números ordinales (para las fechas)

Los ordinales dicen el ORDEN: 1º, 2º, 3º...
- 1st = first, 2nd = second, 3rd = third (¡los tres especiales!)
- 4th = fourth, 5th = fifth, 6th = sixth ... 10th = tenth
- 11th = eleventh, 12th = twelfth, 13th = thirteenth ... 20th = twentieth
- 21st = twenty-first, 22nd = twenty-second, 23rd = twenty-third ... 31st = thirty-first

Regla para escribirlos:
- 1, 21, 31 → st (first, twenty-first)
- 2, 22 → nd (second, twenty-second)
- 3, 23 → rd (third, twenty-third)
- El resto → th (fourth, fifth, tenth...)

### Decir las fechas

Hay dos formas de decir una fecha:
- "the first of May" = el uno de mayo.
- "May the first" = el uno de mayo.

### Las preposiciones: in / on

- in + mes o año: in May (en mayo), in 1990 (en 1990).
- on + fecha o día: on the 15th of June (el 15 de junio), on Monday (el lunes).
- at + hora: at three o'clock (a las tres).

- My birthday is on the 15th of June. = Mi cumpleaños es el 15 de junio.
- It is cold in winter. = Hace frío en invierno.
- I was born in 1990. = Nací en 1990.
- March is the third month. = Marzo es el tercer mes.`,
  examples: [
    { english: 'My birthday is on the 15th of June.', spanish: 'Mi cumpleaños es el 15 de junio.', note: 'Con fechas usamos "on": on the 15th of June.' },
    { english: 'My birthday is on May 15.', spanish: 'Mi cumpleaños es el 15 de mayo.', note: 'Otra forma: on + mes + número.' },
    { english: 'It is cold in winter.', spanish: 'Hace frío en invierno.', note: 'Con estaciones usamos "in": in winter.' },
    { english: 'I was born in 1990.', spanish: 'Nací en 1990.', note: 'Con años usamos "in": in 1990.' },
    { english: 'March is the third month.', spanish: 'Marzo es el tercer mes.', note: 'Los ordinales dicen el orden: third = tercero.' },
    { english: 'In July it is very hot.', spanish: 'En julio hace mucho calor.', note: 'Con meses usamos "in": in July.' },
  ],
  rule: `**Los meses (con mayúscula):**
- January, February, March, April, May, June, July, August, September, October, November, December.

**Las estaciones:**
- spring, summer, autumn / fall, winter.

**Números ordinales:**
- 1st, 2nd, 3rd (first, second, third) → especiales.
- 21st, 22nd, 23rd, 31st → repiten la regla de 1/2/3.
- El resto: -th (4th, 5th, 20th...).

**Preposiciones:**
- in + mes o año: in May, in 1990.
- on + fecha o día: on the 15th of June, on Monday.
- at + hora: at three o'clock.`,
  commonMistakes: [
    { wrong: '❌ My birthday is in May 15.', correct: '✅ My birthday is on May 15. / on the 15th of May.', explanation: 'Con fechas concretas (día) usamos "on". "In" solo con mes o año sueltos: in May, in 1990.' },
    { wrong: '❌ I was born in May the 1th.', correct: '✅ I was born on May 1st. / on the 1st of May.', explanation: 'El ordinal de 1 es "first", y se escribe "1st", nunca "1th".' },
    { wrong: '❌ It is cold in the winter.', correct: '✅ It is cold in winter.', explanation: 'Con las estaciones usamos "in" sin artículo: in winter, in summer.' },
    { wrong: '❌ My birthday is the 15 of June.', correct: '✅ My birthday is on the 15th of June.', explanation: 'Necesitamos "on" delante de la fecha y el ordinal correcto: 15th (fifteenth), no "15".' },
  ],
  vocabulary: [
    { word: 'January', translation_es: 'enero', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'January is the first month.', exampleTranslation: 'Enero es el primer mes.' },
    { word: 'February', translation_es: 'febrero', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'My birthday is in February.', exampleTranslation: 'Mi cumpleaños es en febrero.' },
    { word: 'March', translation_es: 'marzo', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'March is the third month.', exampleTranslation: 'Marzo es el tercer mes.' },
    { word: 'April', translation_es: 'abril', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'It rains a lot in April.', exampleTranslation: 'Llueve mucho en abril.' },
    { word: 'May', translation_es: 'mayo', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'May is a beautiful month.', exampleTranslation: 'Mayo es un mes precioso.' },
    { word: 'June', translation_es: 'junio', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'Summer starts in June.', exampleTranslation: 'El verano empieza en junio.' },
    { word: 'July', translation_es: 'julio', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'It is very hot in July.', exampleTranslation: 'En julio hace mucho calor.' },
    { word: 'August', translation_es: 'agosto', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'We go on holiday in August.', exampleTranslation: 'Nos vamos de vacaciones en agosto.' },
    { word: 'September', translation_es: 'septiembre', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'School starts in September.', exampleTranslation: 'El colegio empieza en septiembre.' },
    { word: 'October', translation_es: 'octubre', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'My sister was born in October.', exampleTranslation: 'Mi hermana nació en octubre.' },
    { word: 'November', translation_es: 'noviembre', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'It is cold in November.', exampleTranslation: 'Hace frío en noviembre.' },
    { word: 'December', translation_es: 'diciembre', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'December is the last month.', exampleTranslation: 'Diciembre es el último mes.' },
    { word: 'spring', translation_es: 'primavera', level: 'A1', category: 'seasons', partOfSpeech: 'noun', example: 'The flowers are beautiful in spring.', exampleTranslation: 'Las flores son preciosas en primavera.' },
    { word: 'summer', translation_es: 'verano', level: 'A1', category: 'seasons', partOfSpeech: 'noun', example: 'I swim every day in summer.', exampleTranslation: 'Nado todos los días en verano.' },
    { word: 'autumn', translation_es: 'otoño', level: 'A1', category: 'seasons', partOfSpeech: 'noun', example: 'The leaves fall in autumn.', exampleTranslation: 'Las hojas caen en otoño.' },
    { word: 'fall', translation_es: 'otoño (americano)', level: 'A1', category: 'seasons', partOfSpeech: 'noun', example: 'Fall is my favourite season.', exampleTranslation: 'El otoño es mi estación favorita.' },
    { word: 'winter', translation_es: 'invierno', level: 'A1', category: 'seasons', partOfSpeech: 'noun', example: 'It is cold in winter.', exampleTranslation: 'Hace frío en invierno.' },
    { word: 'birthday', translation_es: 'cumpleaños', level: 'A1', category: 'dates', partOfSpeech: 'noun', example: 'My birthday is on the 15th of June.', exampleTranslation: 'Mi cumpleaños es el 15 de junio.' },
    { word: 'first', translation_es: 'primero', level: 'A1', category: 'ordinals', partOfSpeech: 'adjective', example: 'January is the first month.', exampleTranslation: 'Enero es el primer mes.' },
    { word: 'second', translation_es: 'segundo', level: 'A1', category: 'ordinals', partOfSpeech: 'adjective', example: 'February is the second month.', exampleTranslation: 'Febrero es el segundo mes.' },
    { word: 'third', translation_es: 'tercero', level: 'A1', category: 'ordinals', partOfSpeech: 'adjective', example: 'March is the third month.', exampleTranslation: 'Marzo es el tercer mes.' },
  ],
  grammarPoints: [
    {
      id: 'gp-dates-ordinals',
      level: 'A1',
      name: 'Dates, ordinal numbers and prepositions',
      explanation_es: 'Los ordinales (first, second, third...) dicen el orden y se usan para las fechas. Con las fechas usamos "on"; con meses, estaciones y años sueltos usamos "in".',
      formula: 'on + the + ordinal + of + month | in + month/season/year',
      examples: ['My birthday is on the 15th of June.', 'It is cold in winter.', 'I was born in 1990.', 'March is the third month.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m6-l3-ex1',
      type: 'match',
      concept: 'months - names',
      difficulty: 1,
      prompt: 'Relaciona cada mes con su número.',
      promptTranslation: 'Match each month with its number.',
      correctAnswer: '',
      pairs: [
        { left: 'January', right: '1' },
        { left: 'March', right: '3' },
        { left: 'May', right: '5' },
        { left: 'September', right: '9' },
        { left: 'December', right: '12' },
        { left: 'July', right: '7' },
      ],
      explanation: 'January=1, March=3, May=5, July=7, September=9, December=12.',
    },
    {
      id: 'a1-m6-l3-ex2',
      type: 'multiple_choice',
      concept: 'months - preposition in',
      difficulty: 1,
      prompt: 'Completa: "My birthday is ___ June."',
      promptTranslation: 'Mi cumpleaños es en junio.',
      correctAnswer: 'in',
      options: ['in', 'on', 'at'],
      explanation: 'Con meses sueltos usamos "in": in June.',
    },
    {
      id: 'a1-m6-l3-ex3',
      type: 'multiple_choice',
      concept: 'dates - preposition on',
      difficulty: 2,
      prompt: 'Completa: "My birthday is ___ the 15th of June."',
      promptTranslation: 'Mi cumpleaños es el 15 de junio.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Con fechas concretas usamos "on": on the 15th of June.',
    },
    {
      id: 'a1-m6-l3-ex4',
      type: 'fill_blank',
      concept: 'ordinal numbers - third',
      difficulty: 2,
      prompt: 'Completa: "March is the ___ month."',
      promptTranslation: 'Marzo es el tercer mes.',
      correctAnswer: 'third',
      acceptedAnswers: ['3rd', 'Third'],
      explanation: 'El ordinal de 3 es "third" (se escribe 3rd): March is the third month.',
    },
    {
      id: 'a1-m6-l3-ex5',
      type: 'fill_blank',
      concept: 'ordinal numbers - fifth',
      difficulty: 3,
      prompt: 'Completa: "She is the ___ student in the list." (5)',
      promptTranslation: 'Ella es la quinta estudiante de la lista.',
      correctAnswer: 'fifth',
      acceptedAnswers: ['5th', 'Fifth'],
      explanation: 'El ordinal de 5 es "fifth" (se escribe 5th): the fifth student.',
    },
    {
      id: 'a1-m6-l3-ex6',
      type: 'multiple_choice',
      concept: 'seasons - winter',
      difficulty: 2,
      prompt: 'Completa: "It is cold in ___."',
      promptTranslation: 'Hace frío en invierno.',
      correctAnswer: 'winter',
      options: ['winter', 'summer', 'spring'],
      explanation: 'En invierno hace frío: in winter. (Invierno = winter.)',
    },
    {
      id: 'a1-m6-l3-ex7',
      type: 'reorder',
      concept: 'dates - birthday',
      difficulty: 3,
      prompt: 'Ordena: My / birthday / is / on / the 15th / of June',
      promptTranslation: 'Mi cumpleaños es el 15 de junio.',
      correctAnswer: 'My birthday is on the 15th of June.',
      words: ['My', 'birthday', 'is', 'on', 'the 15th', 'of June'],
      explanation: 'Orden: My birthday is on the 15th of June.',
    },
    {
      id: 'a1-m6-l3-ex8',
      type: 'translate',
      concept: 'seasons - in winter',
      difficulty: 3,
      prompt: 'Traduce: "Hace frío en invierno."',
      correctAnswer: 'It is cold in winter.',
      acceptedAnswers: ['It is cold in winter', 'it is cold in winter.', 'It\'s cold in winter.'],
      acceptApproximate: true,
      explanation: 'It is cold in winter. = Hace frío en invierno. (in + estación).',
    },
    {
      id: 'a1-m6-l3-ex9',
      type: 'translate',
      concept: 'years - in 1990',
      difficulty: 4,
      prompt: 'Traduce: "Nací en 1990."',
      correctAnswer: 'I was born in 1990.',
      acceptedAnswers: ['I was born in 1990', 'i was born in 1990.', 'I was born in the year 1990.'],
      acceptApproximate: true,
      explanation: '"I was born in + año" = nací en... (was born es una expresión fija, y con años usamos "in").',
    },
    {
      id: 'a1-m6-l3-ex10',
      type: 'error_correction',
      concept: 'dates - preposition on',
      difficulty: 3,
      prompt: 'Corrige el error: "My birthday is in May 15."',
      correctAnswer: 'My birthday is on May 15.',
      acceptedAnswers: ['My birthday is on May 15', 'My birthday is on the 15th of May.', 'my birthday is on may 15.'],
      acceptApproximate: true,
      explanation: 'Con una fecha concreta (día) usamos "on": on May 15 / on the 15th of May. "In" solo con mes o año sueltos.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m6-l3-mt1',
      type: 'multiple_choice',
      concept: 'dates - in vs on',
      difficulty: 2,
      prompt: 'Completa: "She was born ___ 1990."',
      promptTranslation: 'Ella nació en 1990.',
      correctAnswer: 'in',
      options: ['in', 'on', 'at'],
      explanation: 'Con años usamos "in": in 1990.',
    },
    {
      id: 'a1-m6-l3-mt2',
      type: 'fill_blank',
      concept: 'ordinal numbers - first',
      difficulty: 2,
      prompt: 'Completa: "January is the ___ month."',
      promptTranslation: 'Enero es el primer mes.',
      correctAnswer: 'first',
      acceptedAnswers: ['1st', 'First'],
      explanation: 'El ordinal de 1 es "first" (1st): January is the first month.',
    },
    {
      id: 'a1-m6-l3-mt3',
      type: 'error_correction',
      concept: 'ordinal numbers - 1st not 1th',
      difficulty: 3,
      prompt: 'Corrige el error: "My birthday is on the 1th of May."',
      correctAnswer: 'My birthday is on the 1st of May.',
      acceptedAnswers: ['My birthday is on the 1st of May', 'My birthday is on the first of May.', 'my birthday is on the 1st of may.'],
      acceptApproximate: true,
      explanation: 'El ordinal de 1 es "first", que se escribe "1st", nunca "1th".',
    },
    {
      id: 'a1-m6-l3-mt4',
      type: 'translate',
      concept: 'seasons - autumn',
      difficulty: 3,
      prompt: 'Traduce: "En otoño caen las hojas."',
      correctAnswer: 'The leaves fall in autumn.',
      acceptedAnswers: ['The leaves fall in autumn', 'the leaves fall in autumn.', 'Leaves fall in autumn.'],
      acceptApproximate: true,
      explanation: 'The leaves fall in autumn. = Las hojas caen en otoño. (in + estación).',
    },
    {
      id: 'a1-m6-l3-mt5',
      type: 'reorder',
      concept: 'dates - birthday',
      difficulty: 3,
      prompt: 'Ordena: My / birthday / is / in / December',
      promptTranslation: 'Mi cumpleaños es en diciembre.',
      correctAnswer: 'My birthday is in December.',
      words: ['My', 'birthday', 'is', 'in', 'December'],
      explanation: 'Con mes suelto usamos "in": My birthday is in December.',
    },
  ],
  reviewItems: ['a1-m6-l2'],
  prerequisites: ['a1-m6-l2'],
}
