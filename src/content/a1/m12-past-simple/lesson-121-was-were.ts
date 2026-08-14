import type { Lesson } from '../../types'

export const lesson121WasWere: Lesson = {
  id: 'a1-m12-l1',
  moduleId: 'm12-past-simple',
  order: 0,
  title: 'Was / Were (pasado de "to be")',
  objective: 'Usar el pasado del verbo "to be": was (I, he, she, it) y were (you, we, they), en afirmativo, negativo y preguntas.',
  explanation_es: `En esta lección vamos a hablar del PASADO. Cuando queremos decir que algo era o estaba en el pasado, usamos el pasado del verbo "to be" (ser o estar).

El pasado de "to be" tiene solo dos formas:

- WAS → para I, he, she, it. (yo era/estaba, él era/estaba...)
- WERE → para you, we, they. (tú eras/estabas, nosotros éramos/estábamos, ellos eran/estaban...)

Ejemplos:
- I was at home. = Yo estaba en casa.
- She was happy. = Ella estaba feliz.
- We were at the party. = Estábamos en la fiesta.

Negativo: añadimos "not":
- was + not = wasn't (I wasn't = yo no estaba)
- were + not = weren't (We weren't = nosotros no estábamos)
- I wasn't tired. = No estaba cansado.

Preguntas: ponemos "was" o "were" al principio:
- Were you at home? = ¿Estabas en casa?
- Was she happy? = ¿Estaba ella feliz?
- Where were you yesterday? = ¿Dónde estabas ayer?

Recuerda: "was" va con I, he, she, it. "Were" va con you, we, they. Nunca digas "I were" ni "you was".`,
  examples: [
    { english: 'I was at home.', spanish: 'Yo estaba en casa.', note: 'was con I.' },
    { english: 'She was happy.', spanish: 'Ella estaba feliz.', note: 'was con she.' },
    { english: 'We were at the party.', spanish: 'Estábamos en la fiesta.', note: 'were con we.' },
    { english: 'I wasn\'t tired.', spanish: 'No estaba cansado.', note: 'wasn\'t = was not.' },
    { english: 'Were you at home?', spanish: '¿Estabas en casa?', note: 'En preguntas, were va al principio.' },
    { english: 'Where were you yesterday?', spanish: '¿Dónde estabas ayer?', note: 'Where were you...? = ¿Dónde estabas...?' },
  ],
  rule: `**Pasado de "to be" (ser / estar):**

**Tabla de conjugación:**

| Pronombre | Afirmativo | Negativo (corto) | Ejemplo |
|-----------|------------|------------------|---------|
| I | was | wasn't | I was at home. |
| He | was | wasn't | He was happy. |
| She | was | wasn't | She was a teacher. |
| It | was | wasn't | It was cold. |
| You | were | weren't | You were at school. |
| We | were | weren't | We were friends. |
| They | were | weren't | They were in London. |

**Regla de oro:**
- I / He / She / It + **was**
- You / We / They + **were**

**Negativo:**
- wasn't = was not
- weren't = were not
- I wasn't at home. / They weren't at school.

**Preguntas:**
- Was + I/he/she/it...? → Was she happy?
- Were + you/we/they...? → Were you at home?
- Where/When + was/were...? → Where were you yesterday?`,
  commonMistakes: [
    { wrong: '❌ I were at home.', correct: '✅ I was at home.', explanation: 'Con "I" usamos "was", no "were". → I was at home.' },
    { wrong: '❌ You was there.', correct: '✅ You were there.', explanation: 'Con "you" usamos "were", no "was". → You were there.' },
    { wrong: '❌ I no was at home.', correct: '✅ I was not at home. (I wasn\'t at home.)', explanation: 'La negativa se forma con "not" (o "wasn\'t") después de "was", nunca con "no" antes.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-was-were',
      level: 'A1',
      name: 'Past of "to be": was / were',
      explanation_es: 'El pasado del verbo "to be" tiene dos formas: was (I, he, she, it) y were (you, we, they). Para negar añadimos not (wasn\'t / weren\'t) y para preguntar ponemos was/were al principio.',
      formula: 'I/He/She/It + was | You/We/They + were | Was/Were + subject + ...?',
      examples: ['I was at home.', 'We were at the party.', 'Were you at home?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m12-l1-ex1',
      type: 'fill_blank',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "I ___ at home yesterday."',
      promptTranslation: 'Yo estaba en casa ayer.',
      correctAnswer: 'was',
      acceptedAnswers: ['was', 'Was'],
      explanation: 'Con "I" usamos "was". → I was at home yesterday. = Yo estaba en casa ayer.',
    },
    {
      id: 'a1-m12-l1-ex2',
      type: 'fill_blank',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "They ___ at the party last night."',
      promptTranslation: 'Ellos estaban en la fiesta anoche.',
      correctAnswer: 'were',
      acceptedAnswers: ['were', 'Were'],
      explanation: 'Con "they" (ellos) usamos "were". → They were at the party last night.',
    },
    {
      id: 'a1-m12-l1-ex3',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "She ___ happy."',
      promptTranslation: 'Ella estaba feliz.',
      correctAnswer: 'was',
      options: ['was', 'were', 'is'],
      explanation: 'Con "she" usamos "was". → She was happy. = Ella estaba feliz.',
    },
    {
      id: 'a1-m12-l1-ex4',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 2,
      prompt: 'Completa: "You ___ at home yesterday."',
      promptTranslation: 'Tú estabas en casa ayer.',
      correctAnswer: 'were',
      options: ['was', 'were', 'is'],
      explanation: 'Con "you" usamos "were" (siempre, singular o plural). → You were at home yesterday.',
    },
    {
      id: 'a1-m12-l1-ex5',
      type: 'multiple_choice',
      concept: 'wasn\'t / weren\'t',
      difficulty: 2,
      prompt: 'Completa: "I ___ tired after the trip." (no estaba)',
      promptTranslation: 'No estaba cansado después del viaje.',
      correctAnswer: 'wasn\'t',
      options: ['wasn\'t', 'weren\'t', 'was'],
      explanation: 'Con "I" la negativa es "wasn\'t" (= was not). → I wasn\'t tired after the trip.',
    },
    {
      id: 'a1-m12-l1-ex6',
      type: 'fill_blank',
      concept: 'wasn\'t / weren\'t',
      difficulty: 2,
      prompt: 'Completa: "We ___ at school on Monday." (no estábamos)',
      promptTranslation: 'No estábamos en la escuela el lunes.',
      correctAnswer: 'weren\'t',
      acceptedAnswers: ['weren\'t', "weren't", 'were not'],
      explanation: 'Con "we" la negativa es "weren\'t" (= were not). → We weren\'t at school on Monday.',
    },
    {
      id: 'a1-m12-l1-ex7',
      type: 'reorder',
      concept: 'was / were questions',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una pregunta: Were / you / at / home / yesterday?',
      promptTranslation: '¿Estabas en casa ayer?',
      correctAnswer: 'Were you at home yesterday?',
      words: ['Were', 'you', 'at', 'home', 'yesterday?'],
      explanation: 'En preguntas, "were" va al principio: Were + sujeto + resto. → Were you at home yesterday?',
    },
    {
      id: 'a1-m12-l1-ex8',
      type: 'translate',
      concept: 'was / were',
      difficulty: 3,
      prompt: 'Traduce: "Yo estaba en casa."',
      correctAnswer: 'I was at home.',
      acceptedAnswers: ['I was at home', 'I was at home.', 'i was at home.'],
      acceptApproximate: true,
      explanation: '"Yo estaba" = I was, "en casa" = at home. → I was at home.',
    },
    {
      id: 'a1-m12-l1-ex9',
      type: 'error_correction',
      concept: 'was / were',
      difficulty: 3,
      prompt: 'Corrige el error: "I were at home."',
      correctAnswer: 'I was at home.',
      acceptedAnswers: ['I was at home', 'I was at home.', 'i was at home.'],
      acceptApproximate: true,
      explanation: 'Con "I" usamos "was", no "were". → I was at home.',
    },
    {
      id: 'a1-m12-l1-ex10',
      type: 'error_correction',
      concept: 'was / were',
      difficulty: 4,
      prompt: 'Corrige el error: "You was there."',
      correctAnswer: 'You were there.',
      acceptedAnswers: ['You were there', 'You were there.', 'you were there.'],
      acceptApproximate: true,
      explanation: 'Con "you" usamos "were", no "was". → You were there.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m12-l1-mt1',
      type: 'fill_blank',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "He ___ my teacher last year."',
      promptTranslation: 'Él fue mi profesor el año pasado.',
      correctAnswer: 'was',
      acceptedAnswers: ['was', 'Was'],
      explanation: 'Con "he" usamos "was". → He was my teacher last year.',
    },
    {
      id: 'a1-m12-l1-mt2',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 2,
      prompt: 'Completa: "My friends ___ at the cinema."',
      promptTranslation: 'Mis amigos estaban en el cine.',
      correctAnswer: 'were',
      options: ['was', 'were', 'is'],
      explanation: 'Con "my friends" (plural, they) usamos "were". → My friends were at the cinema.',
    },
    {
      id: 'a1-m12-l1-mt3',
      type: 'fill_blank',
      concept: 'wasn\'t / weren\'t',
      difficulty: 2,
      prompt: 'Completa: "She ___ at the party." (no estaba)',
      promptTranslation: 'Ella no estaba en la fiesta.',
      correctAnswer: 'wasn\'t',
      acceptedAnswers: ["wasn't", 'was not', 'Wasn\'t'],
      explanation: 'Con "she" la negativa es "wasn\'t" (= was not). → She wasn\'t at the party.',
    },
    {
      id: 'a1-m12-l1-mt4',
      type: 'multiple_choice',
      concept: 'was / were questions',
      difficulty: 3,
      prompt: 'Completa la pregunta: "___ you at home yesterday?"',
      promptTranslation: '¿Estabas en casa ayer?',
      correctAnswer: 'Were',
      options: ['Were', 'Was', 'Are'],
      explanation: 'Con "you" en preguntas usamos "Were" al principio. → Were you at home yesterday?',
    },
    {
      id: 'a1-m12-l1-mt5',
      type: 'translate',
      concept: 'was / were',
      difficulty: 3,
      prompt: 'Traduce: "Estábamos en la fiesta."',
      correctAnswer: 'We were at the party.',
      acceptedAnswers: ['We were at the party', 'We were at the party.', 'we were at the party.'],
      acceptApproximate: true,
      explanation: '"Nosotros estábamos" = We were, "en la fiesta" = at the party. → We were at the party.',
    },
  ],
  reviewItems: ['a1-m11-l5'],
  prerequisites: ['a1-m11-l5'],
}
