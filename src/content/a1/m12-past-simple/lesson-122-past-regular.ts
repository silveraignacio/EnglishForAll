import type { Lesson } from '../../types'

export const lesson122PastRegular: Lesson = {
  id: 'a1-m12-l2',
  moduleId: 'm12-past-simple',
  order: 1,
  title: 'Past Simple: verbos regulares (-ed)',
  objective: 'Formar el pasado de los verbos regulares añadiendo -ed y usar expresiones de tiempo pasado (yesterday, last week, ago).',
  explanation_es: `En la lección anterior vimos el pasado de "to be" (was/were). Ahora vamos a aprender a hablar del pasado con verbos normales: el Past Simple.

Para los verbos REGULARES, formamos el pasado añadiendo -ed al verbo:

- work → worked (trabajé, trabajaste, trabajó...)
- play → played (jugué)
- listen → listened (escuché)

Reglas de ortografía importantes:

1. Si el verbo termina en -e, solo añadimos -d: live → lived, like → liked.
2. Si el verbo termina en consonante + -y, cambiamos la y por -ied: study → studied, carry → carried.
3. Si el verbo es corto (una sílaba) y termina en consonante + vocal + consonante, duplicamos la consonante final: stop → stopped, plan → planned.

El pasado es igual para todas las personas:
- I worked, you worked, he worked, we worked, they worked. (¡Ninguna persona lleva -s!)

Para situar la acción en el pasado usamos expresiones de tiempo:
- yesterday = ayer
- last week = la semana pasada
- last month = el mes pasado
- last year = el año pasado
- two days ago = hace dos días
- in 2020 = en 2020

Ejemplos:
- I worked yesterday. = Trabajé ayer.
- She lived in Paris. = Ella vivió en París.
- They studied English last year. = Ellos estudiaron inglés el año pasado.
- He stopped working in 2020. = Él dejó de trabajar en 2020.`,
  examples: [
    { english: 'I worked yesterday.', spanish: 'Trabajé ayer.', note: 'work → worked.' },
    { english: 'She lived in Paris.', spanish: 'Ella vivió en París.', note: 'live → lived (solo -d).' },
    { english: 'They studied English last year.', spanish: 'Ellos estudiaron inglés el año pasado.', note: 'study → studied (y → ied).' },
    { english: 'He stopped working in 2020.', spanish: 'Él dejó de trabajar en 2020.', note: 'stop → stopped (consonante duplicada).' },
    { english: 'We played football two days ago.', spanish: 'Jugamos al fútbol hace dos días.', note: 'ago = hace.' },
    { english: 'She watched TV last night.', spanish: 'Ella vio la tele anoche.', note: 'watch → watched.' },
  ],
  rule: `**Past Simple de verbos regulares = verbo + -ed:**

**Tabla del verbo *work* (todas las personas iguales):**

| Pronombre | Pasado | Ejemplo | Traducción |
|-----------|--------|---------|------------|
| I | worked | I worked yesterday. | Trabajé ayer. |
| You | worked | You worked today. | Trabajaste hoy. |
| He | worked | He worked in Madrid. | Él trabajó en Madrid. |
| She | worked | She worked at home. | Ella trabajó en casa. |
| It | worked | It worked well. | Funcionó bien. |
| We | worked | We worked together. | Trabajamos juntos. |
| They | worked | They worked in London. | Ellos trabajaron en Londres. |

**DIFERENCIA con el Present Simple:** en pasado NO añadimos -s en 3ª persona. Es la misma forma para todos:
- Present: I work / He works (cambia)
- Past: I worked / He worked (NO cambia)

**Reglas de ortografía:**
- Termina en -e → añade solo -d: live → lived.
- Consonante + -y → -ied: study → studied.
- Conso + vocal + conso (una sílaba) → duplica: stop → stopped.

**Expresiones de tiempo pasado:**
- yesterday (ayer), last week/month/year (la semana/el mes/el año pasado), ago (hace), in 2020 (en 2020).`,
  commonMistakes: [
    { wrong: '❌ I work yesterday.', correct: '✅ I worked yesterday.', explanation: 'Con una expresión de pasado (yesterday) necesitamos la forma pasada con -ed: worked.' },
    { wrong: '❌ She studed English.', correct: '✅ She studied English.', explanation: 'Con consonante + -y, cambiamos la y por -ied: study → studied.' },
    { wrong: '❌ He stoped the car.', correct: '✅ He stopped the car.', explanation: 'En "stop" (una sílaba, consonante-vocal-consonante) duplicamos la p: stopped.' },
  ],
  vocabulary: [
    { word: 'yesterday', translation_es: 'ayer', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'I worked yesterday.', exampleTranslation: 'Trabajé ayer.' },
    { word: 'last week', translation_es: 'la semana pasada', level: 'A1', category: 'time', partOfSpeech: 'phrase', example: 'We visited my parents last week.', exampleTranslation: 'Visitamos a mis padres la semana pasada.' },
    { word: 'last year', translation_es: 'el año pasado', level: 'A1', category: 'time', partOfSpeech: 'phrase', example: 'They studied English last year.', exampleTranslation: 'Ellos estudiaron inglés el año pasado.' },
    { word: 'ago', translation_es: 'hace (tiempo)', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'I called her two days ago.', exampleTranslation: 'La llamé hace dos días.' },
  ],
  grammarPoints: [
    {
      id: 'gp-past-regular',
      level: 'A1',
      name: 'Past Simple — regular verbs (-ed)',
      explanation_es: 'Para hablar de acciones terminadas en el pasado con verbos regulares añadimos -ed al verbo. La forma es igual para todas las personas.',
      formula: 'Subject + verb + -ed (+ time expression)',
      examples: ['I worked yesterday.', 'She lived in Paris.', 'They studied English last year.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m12-l2-ex1',
      type: 'match',
      concept: 'present ↔ past regular verbs',
      difficulty: 1,
      prompt: 'Relaciona cada verbo en presente con su forma en pasado:',
      pairs: [
        { left: 'work', right: 'worked' },
        { left: 'live', right: 'lived' },
        { left: 'play', right: 'played' },
        { left: 'study', right: 'studied' },
        { left: 'stop', right: 'stopped' },
        { left: 'watch', right: 'watched' },
      ],
      correctAnswer: 'work=worked, live=lived, play=played, study=studied, stop=stopped, watch=watched',
      explanation: 'Los verbos regulares forman el pasado con -ed (o -d si terminan en -e, -ied si terminan en consonante + y, y duplican consonante en stop → stopped).',
    },
    {
      id: 'a1-m12-l2-ex2',
      type: 'fill_blank',
      concept: 'past simple regular verbs',
      difficulty: 1,
      prompt: 'Completa con el pasado: "I ___ yesterday." (work)',
      promptTranslation: 'Trabajé ayer.',
      correctAnswer: 'worked',
      acceptedAnswers: ['worked', 'Worked'],
      explanation: 'El pasado de "work" es "worked" (work + -ed). → I worked yesterday.',
    },
    {
      id: 'a1-m12-l2-ex3',
      type: 'fill_blank',
      concept: 'past simple regular verbs',
      difficulty: 2,
      prompt: 'Completa con el pasado: "She ___ in Paris." (live)',
      promptTranslation: 'Ella vivió en París.',
      correctAnswer: 'lived',
      acceptedAnswers: ['lived', 'Lived'],
      explanation: 'El pasado de "live" es "lived" (solo añadimos -d porque termina en -e). → She lived in Paris.',
    },
    {
      id: 'a1-m12-l2-ex4',
      type: 'multiple_choice',
      concept: 'past simple spelling',
      difficulty: 2,
      prompt: 'Completa: "They ___ English last year." (study)',
      promptTranslation: 'Ellos estudiaron inglés el año pasado.',
      correctAnswer: 'studied',
      options: ['studied', 'studed', 'studyed'],
      explanation: 'Con consonante + -y cambiamos la y por -ied: study → studied.',
    },
    {
      id: 'a1-m12-l2-ex5',
      type: 'multiple_choice',
      concept: 'past simple spelling',
      difficulty: 2,
      prompt: 'Completa: "He ___ the car." (stop)',
      promptTranslation: 'Él detuvo el coche.',
      correctAnswer: 'stopped',
      options: ['stoped', 'stopped', 'stopt'],
      explanation: 'En "stop" (una sílaba, consonante-vocal-consonante) duplicamos la consonante final: stopped.',
    },
    {
      id: 'a1-m12-l2-ex6',
      type: 'fill_blank',
      concept: 'time expressions',
      difficulty: 2,
      prompt: 'Completa: "I worked ___." (ayer)',
      promptTranslation: 'Trabajé ayer.',
      correctAnswer: 'yesterday',
      acceptedAnswers: ['yesterday', 'Yesterday'],
      explanation: '"Ayer" en inglés es "yesterday". → I worked yesterday.',
    },
    {
      id: 'a1-m12-l2-ex7',
      type: 'multiple_choice',
      concept: 'time expressions',
      difficulty: 3,
      prompt: 'Completa: "We visited my parents two days ___." (hace)',
      promptTranslation: 'Visitamos a mis padres hace dos días.',
      correctAnswer: 'ago',
      options: ['ago', 'before', 'past'],
      explanation: 'Para decir "hace dos días" usamos "ago": two days ago.',
    },
    {
      id: 'a1-m12-l2-ex8',
      type: 'translate',
      concept: 'past simple regular verbs',
      difficulty: 3,
      prompt: 'Traduce: "Ella vivió en París."',
      correctAnswer: 'She lived in Paris.',
      acceptedAnswers: ['She lived in Paris', 'She lived in Paris.', 'she lived in paris.'],
      acceptApproximate: true,
      explanation: '"Ella vivió" = She lived (live → lived). → She lived in Paris.',
    },
    {
      id: 'a1-m12-l2-ex9',
      type: 'translate',
      concept: 'time expressions',
      difficulty: 3,
      prompt: 'Traduce: "Trabajé ayer."',
      correctAnswer: 'I worked yesterday.',
      acceptedAnswers: ['I worked yesterday', 'I worked yesterday.', 'i worked yesterday.'],
      acceptApproximate: true,
      explanation: '"Yo trabajé" = I worked (work → worked), "ayer" = yesterday.',
    },
    {
      id: 'a1-m12-l2-ex10',
      type: 'multiple_choice',
      concept: 'past simple regular verbs',
      difficulty: 3,
      prompt: '¿Cuál es la forma pasada correcta? "listen"',
      promptTranslation: '¿Cuál es el pasado de "listen"?',
      correctAnswer: 'listened',
      options: ['listened', 'listend', 'listenned'],
      explanation: '"Listen" termina en consonante + vocal + consonante pero tiene dos sílabas, así que solo añadimos -ed: listened.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m12-l2-mt1',
      type: 'multiple_choice',
      concept: 'past simple regular verbs',
      difficulty: 1,
      prompt: 'Completa: "I ___ football last weekend." (play)',
      promptTranslation: 'Jugué al fútbol el fin de semana pasado.',
      correctAnswer: 'played',
      options: ['played', 'playd', 'plaied'],
      explanation: 'El pasado de "play" es "played" (play + -ed). → I played football last weekend.',
    },
    {
      id: 'a1-m12-l2-mt2',
      type: 'fill_blank',
      concept: 'past simple spelling',
      difficulty: 2,
      prompt: 'Completa con el pasado: "She ___ TV last night." (watch)',
      promptTranslation: 'Ella vio la tele anoche.',
      correctAnswer: 'watched',
      acceptedAnswers: ['watched', 'Watched'],
      explanation: 'El pasado de "watch" es "watched" (watch + -ed). → She watched TV last night.',
    },
    {
      id: 'a1-m12-l2-mt3',
      type: 'multiple_choice',
      concept: 'past simple spelling',
      difficulty: 2,
      prompt: 'Completa: "They ___ in Madrid in 2020." (live)',
      promptTranslation: 'Ellos vivieron en Madrid en 2020.',
      correctAnswer: 'lived',
      options: ['lived', 'liveed', 'livd'],
      explanation: 'El pasado de "live" es "lived" (solo -d porque termina en -e).',
    },
    {
      id: 'a1-m12-l2-mt4',
      type: 'fill_blank',
      concept: 'time expressions',
      difficulty: 2,
      prompt: 'Completa: "I called her two days ___." (hace)',
      promptTranslation: 'La llamé hace dos días.',
      correctAnswer: 'ago',
      acceptedAnswers: ['ago', 'Ago'],
      explanation: '"Hace dos días" = two days ago. "Ago" va después de la cantidad de tiempo.',
    },
    {
      id: 'a1-m12-l2-mt5',
      type: 'translate',
      concept: 'past simple regular verbs',
      difficulty: 3,
      prompt: 'Traduce: "Trabajó en 2020."',
      correctAnswer: 'He worked in 2020.',
      acceptedAnswers: ['He worked in 2020', 'He worked in 2020.', 'he worked in 2020.'],
      acceptApproximate: true,
      explanation: '"Él trabajó" = He worked (work → worked), "en 2020" = in 2020.',
    },
  ],
  reviewItems: ['a1-m12-l1'],
  prerequisites: ['a1-m12-l1'],
}
