import type { Lesson } from '../../types'

export const lesson125MiniTest: Lesson = {
  id: 'a1-m12-l5',
  moduleId: 'm12-past-simple',
  order: 4,
  title: 'Mini-test: Past Simple',
  objective: 'Repasar todo el módulo 12: was/were, verbos regulares, verbos irregulares, negativos y preguntas en pasado.',
  explanation_es: `Este es el repaso final del módulo 12. Repasemos lo más importante:

### 1. Past de "to be": was / were

- I / He / She / It + was
- You / We / They + were
- Negativo: wasn't (= was not), weren't (= were not)
- Preguntas: Was he...? Were you...? Where were you...?

### 2. Verbos regulares (-ed)

- work → worked, play → played, live → lived, study → studied, stop → stopped.
- Todas las personas iguales: I worked, you worked, he worked.

### 3. Negativo y preguntas con did / didn't

- I didn't work yesterday. (¡verbo en infinitivo!)
- Did you work yesterday?
- Where did you go?
- Respuestas cortas: Yes, I did. / No, I didn't.

### 4. Verbos irregulares

- go → went, have → had, buy → bought, see → saw, eat → ate, drink → drank, write → wrote, know → knew...
- Con did/didn't usamos el infinitivo: I didn't go (no went).

### Expresiones de tiempo pasado

- yesterday (ayer), last week (la semana pasada), last year (el año pasado), ago (hace), in 2020.`,
  examples: [
    { english: 'I was at home yesterday.', spanish: 'Yo estaba en casa ayer.', note: 'was + yesterday.' },
    { english: 'We didn\'t work last week.', spanish: 'No trabajamos la semana pasada.', note: 'didn\'t + work (infinitivo).' },
    { english: 'Did you see the film?', spanish: '¿Viste la película?', note: 'Did + see (infinitivo).' },
    { english: 'They went to the cinema.', spanish: 'Ellos fueron al cine.', note: 'go → went.' },
    { english: 'She studied English last year.', spanish: 'Ella estudió inglés el año pasado.', note: 'study → studied.' },
    { english: 'Where were you last night?', spanish: '¿Dónde estabas anoche?', note: 'were con you.' },
  ],
  rule: `**Resumen del módulo 12:**

1. was (I/he/she/it) / were (you/we/they) → I was at home. / We were at the party.
2. Verbos regulares: verbo + -ed → work → worked, study → studied, stop → stopped.
3. Negativo: didn't + verbo (infinitivo) → I didn't work.
4. Preguntas: Did + sujeto + verbo (infinitivo)? → Did you work?
5. Verbos irregulares: go → went, have → had, buy → bought, see → saw...
6. Con did/didn't, SIEMPRE el verbo en infinitivo (no -ed, no forma irregular).
7. Tiempo pasado: yesterday, last week, last year, ago, in 2020.`,
  commonMistakes: [
    { wrong: '❌ I was at the party and we was happy.', correct: '✅ I was at the party and we were happy.', explanation: 'Con "we" usamos "were", no "was".' },
    { wrong: '❌ She didn\'t studied English.', correct: '✅ She didn\'t study English.', explanation: 'Después de "didn\'t" el verbo va en infinitivo: study, no studied.' },
    { wrong: '❌ I goed to the beach yesterday.', correct: '✅ I went to the beach yesterday.', explanation: '"Go" es irregular: su pasado es "went", no "goed".' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-m12-review',
      level: 'A1',
      name: 'Module 12 review',
      explanation_es: 'Repaso de: was/were (pasado de to be), verbos regulares con -ed, negativos y preguntas con did/didn\'t, y verbos irregulares comunes.',
      formula: 'was/were | verb + -ed | didn\'t + verb | Did + subject + verb? | irregular past forms',
      examples: ['I was at home.', 'She worked yesterday.', 'Did you go?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m12-l5-ex1',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "We ___ at the party last night."',
      promptTranslation: 'Estábamos en la fiesta anoche.',
      correctAnswer: 'were',
      options: ['were', 'was', 'is'],
      explanation: 'Con "we" usamos "were". → We were at the party last night.',
    },
    {
      id: 'a1-m12-l5-ex2',
      type: 'fill_blank',
      concept: 'past simple regular verbs',
      difficulty: 1,
      prompt: 'Completa con el pasado: "She ___ TV yesterday." (watch)',
      promptTranslation: 'Ella vio la tele ayer.',
      correctAnswer: 'watched',
      acceptedAnswers: ['watched', 'Watched'],
      explanation: 'El pasado de "watch" es "watched" (watch + -ed). → She watched TV yesterday.',
    },
    {
      id: 'a1-m12-l5-ex3',
      type: 'multiple_choice',
      concept: 'didn\'t + base verb',
      difficulty: 2,
      prompt: 'Completa: "I ___ work yesterday."',
      promptTranslation: 'No trabajé ayer.',
      correctAnswer: 'didn\'t',
      options: ['didn\'t', 'don\'t', 'no'],
      explanation: 'La negativa en pasado es "didn\'t" + verbo en infinitivo. → I didn\'t work yesterday.',
    },
    {
      id: 'a1-m12-l5-ex4',
      type: 'fill_blank',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa con el pasado: "They ___ to the beach." (go)',
      promptTranslation: 'Ellos fueron a la playa.',
      correctAnswer: 'went',
      acceptedAnswers: ['went', 'Went'],
      explanation: 'El pasado de "go" es "went" (irregular). → They went to the beach.',
    },
    {
      id: 'a1-m12-l5-ex5',
      type: 'multiple_choice',
      concept: 'did questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you work yesterday?"',
      promptTranslation: '¿Trabajaste ayer?',
      correctAnswer: 'Did',
      options: ['Did', 'Do', 'Was'],
      explanation: 'En pasado usamos "Did" para preguntar. → Did you work yesterday?',
    },
    {
      id: 'a1-m12-l5-ex6',
      type: 'reorder',
      concept: 'wh-questions in past',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una pregunta: Where / were / you / yesterday?',
      promptTranslation: '¿Dónde estabas ayer?',
      correctAnswer: 'Where were you yesterday?',
      words: ['Where', 'were', 'you', 'yesterday?'],
      explanation: 'Con una pregunta con "where" y "to be": Where + was/were + sujeto. → Where were you yesterday?',
    },
    {
      id: 'a1-m12-l5-ex7',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Did you buy the bread?" (sí)',
      promptTranslation: '¿Compraste el pan? (sí)',
      correctAnswer: 'Yes, I did.',
      options: ['Yes, I did.', 'Yes, I bought.', 'Yes, I do.'],
      explanation: 'La respuesta corta afirmativa en pasado es "Yes, I did."',
    },
    {
      id: 'a1-m12-l5-ex8',
      type: 'error_correction',
      concept: 'didn\'t + base verb',
      difficulty: 3,
      prompt: 'Corrige el error: "She didn\'t went to work."',
      correctAnswer: 'She didn\'t go to work.',
      acceptedAnswers: ['She didn\'t go to work', 'She didn\'t go to work.', 'she didn\'t go to work.'],
      acceptApproximate: true,
      explanation: 'Después de "didn\'t" usamos el verbo en infinitivo: go, no went. → She didn\'t go to work.',
    },
    {
      id: 'a1-m12-l5-ex9',
      type: 'reading',
      concept: 'past simple reading',
      difficulty: 4,
      prompt: 'Lee el texto sobre un fin de semana pasado y responde:',
      reading: {
        text: 'Last weekend\nLast weekend I was at my grandmother\'s house. On Saturday I helped in the garden and I worked a lot. In the evening, we watched a film and I was very happy.\nOn Sunday, my cousin came to visit us. We went to the park and we ate ice cream. We didn\'t watch TV in the afternoon because we played football.\nIt was a great weekend!',
        translation: 'El fin de semana pasado\nEl fin de semana pasado estuve en casa de mi abuela. El sábado ayudé en el jardín y trabajé mucho. Por la tarde vimos una película y estaba muy feliz.\nEl domingo, mi primo vino a visitarnos. Fuimos al parque y comimos helado. No vimos la tele por la tarde porque jugamos al fútbol.\n¡Fue un gran fin de semana!',
        questions: [
          {
            id: 'a1-m12-l5-ex9-q1',
            type: 'multiple_choice',
            concept: 'past simple reading',
            difficulty: 4,
            prompt: '¿Dónde estuvo la persona el fin de semana pasado?',
            correctAnswer: 'at his grandmother\'s house',
            options: ['at his grandmother\'s house', 'at the cinema', 'at work'],
            explanation: 'El texto dice: "Last weekend I was at my grandmother\'s house."',
          },
          {
            id: 'a1-m12-l5-ex9-q2',
            type: 'multiple_choice',
            concept: 'past simple reading',
            difficulty: 4,
            prompt: '¿Qué hizo la persona el sábado en el jardín?',
            correctAnswer: 'helped in the garden',
            options: ['helped in the garden', 'played football', 'ate ice cream'],
            explanation: 'El texto dice: "On Saturday I helped in the garden and I worked a lot."',
          },
          {
            id: 'a1-m12-l5-ex9-q3',
            type: 'multiple_choice',
            concept: 'past simple reading',
            difficulty: 4,
            prompt: '¿Qué comieron en el parque el domingo?',
            correctAnswer: 'ice cream',
            options: ['ice cream', 'bread', 'cake'],
            explanation: 'El texto dice: "We went to the park and we ate ice cream."',
          },
          {
            id: 'a1-m12-l5-ex9-q4',
            type: 'multiple_choice',
            concept: 'past simple reading',
            difficulty: 4,
            prompt: '¿Vieron la tele el domingo por la tarde?',
            correctAnswer: 'No, they didn\'t',
            options: ['No, they didn\'t', 'Yes, they did', 'They watched a film'],
            explanation: 'El texto dice: "We didn\'t watch TV in the afternoon because we played football."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'El texto describe un fin de semana en pasado: estuvo en casa de su abuela, ayudó en el jardín, su primo vino, fueron al parque, comieron helado y no vieron la tele.',
    },
    {
      id: 'a1-m12-l5-ex10',
      type: 'translate',
      concept: 'past simple review',
      difficulty: 4,
      prompt: 'Traduce: "Fui al cine ayer."',
      correctAnswer: 'I went to the cinema yesterday.',
      acceptedAnswers: ['I went to the cinema yesterday', 'I went to the cinema yesterday.', 'i went to the cinema yesterday.'],
      acceptApproximate: true,
      explanation: '"Yo fui" = I went (go → went), "al cine" = to the cinema, "ayer" = yesterday.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m12-l5-mt1',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "She ___ at home yesterday."',
      promptTranslation: 'Ella estaba en casa ayer.',
      correctAnswer: 'was',
      options: ['was', 'were', 'is'],
      explanation: 'Con "she" usamos "was". → She was at home yesterday.',
    },
    {
      id: 'a1-m12-l5-mt2',
      type: 'fill_blank',
      concept: 'past simple regular verbs',
      difficulty: 2,
      prompt: 'Completa con el pasado: "They ___ in Madrid." (live)',
      promptTranslation: 'Ellos vivieron en Madrid.',
      correctAnswer: 'lived',
      acceptedAnswers: ['lived', 'Lived'],
      explanation: 'El pasado de "live" es "lived" (solo -d porque termina en -e). → They lived in Madrid.',
    },
    {
      id: 'a1-m12-l5-mt3',
      type: 'multiple_choice',
      concept: 'didn\'t + base verb',
      difficulty: 2,
      prompt: 'Completa: "He ___ like the film."',
      promptTranslation: 'A él no le gustó la película.',
      correctAnswer: 'didn\'t',
      options: ['didn\'t', 'don\'t', 'no'],
      explanation: 'La negativa en pasado es "didn\'t" + verbo en infinitivo. → He didn\'t like the film.',
    },
    {
      id: 'a1-m12-l5-mt4',
      type: 'multiple_choice',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa: "She ___ a new phone." (buy)',
      promptTranslation: 'Ella compró un teléfono nuevo.',
      correctAnswer: 'bought',
      options: ['bought', 'buyed', 'buy'],
      explanation: 'El pasado de "buy" es "bought" (irregular). → She bought a new phone.',
    },
    {
      id: 'a1-m12-l5-mt5',
      type: 'reorder',
      concept: 'did questions',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una pregunta: Did / you / eat / breakfast?',
      promptTranslation: '¿Desayunaste?',
      correctAnswer: 'Did you eat breakfast?',
      words: ['Did', 'you', 'eat', 'breakfast?'],
      explanation: 'La pregunta en pasado: Did + sujeto + verbo (infinitivo). → Did you eat breakfast?',
    },
    {
      id: 'a1-m12-l5-mt6',
      type: 'error_correction',
      concept: 'past simple review',
      difficulty: 4,
      prompt: 'Corrige el error: "We was at the cinema."',
      correctAnswer: 'We were at the cinema.',
      acceptedAnswers: ['We were at the cinema', 'We were at the cinema.', 'we were at the cinema.'],
      acceptApproximate: true,
      explanation: 'Con "we" usamos "were", no "was". → We were at the cinema.',
    },
  ],
  reviewItems: ['a1-m12-l4'],
  prerequisites: ['a1-m12-l4'],
}
