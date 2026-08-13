import type { Lesson } from '../../types'

export const lesson151GrammarReview: Lesson = {
  id: 'a1-m15-l1',
  moduleId: 'm15-review-exam',
  order: 0,
  title: 'Repaso de gramática (to be, Present Simple, Present Continuous, Past, Future)',
  objective: 'Repasar y consolidar toda la gramática A1: verb to be, Present Simple, Present Continuous, Past Simple y going to, con ejercicios mixtos.',
  explanation_es: `En este módulo vamos a repasar TODO lo que has aprendido en el curso antes de hacer el examen final. Vamos a repasar los cinco tiempos verbales más importantes del nivel A1:

1. VERB TO BE (ser / estar)
   - I am / You are / He, She, It is / We are / They are
   - Negativo: I am not, She isn't, They aren't...
   - Preguntas: Am I...? Is he...? Are they...?
   - Ejemplo: I am a student. = Yo soy estudiante.

2. PRESENT SIMPLE (hábitos y rutinas)
   - I, you, we, they + verbo: I work.
   - He, she, it + verbo + -s: She works.
   - Negativo: I don't work. / He doesn't work. (¡Sin -s!)
   - Preguntas: Do you work? / Does she work? (¡Sin -s!)
   - Ejemplo: She works in a bank. = Ella trabaja en un banco.

3. PRESENT CONTINUOUS (ahora, en este momento)
   - to be + verbo + -ing: I am working, She is watching.
   - Negativo: They aren't watching TV.
   - Preguntas: Are you studying? What are you doing?
   - Ejemplo: We are watching TV now. = Estamos viendo la tele ahora.

4. PAST SIMPLE (pasado)
   - Verbo to be: I was, You were, He was, They were.
   - Verbos regulares: -ed (worked, played, lived).
   - Verbos irregulares: go → went, buy → bought, eat → ate.
   - Negativo: I didn't work. (El verbo vuelve a infinitivo.)
   - Preguntas: Did you go? Where did you go?
   - Ejemplo: I went to Madrid last year. = Fui a Madrid el año pasado.

5. GOING TO (planes e intenciones futuras)
   - to be + going to + verbo: I am going to travel.
   - Negativo: She isn't going to work tomorrow.
   - Preguntas: Are you going to study?
   - Ejemplo: I'm going to travel next month. = Voy a viajar el próximo mes.

Recuerda las palabras que te ayudan a elegir el tiempo:
- every day, always, usually, on Mondays → Present Simple.
- now, at the moment, right now → Present Continuous.
- yesterday, last week, last year, ago → Past Simple.
- tomorrow, next week, next month → going to.

Los ejercicios de esta lección mezclan todos los tiempos, igual que harás en el examen final.`,
  examples: [
    { english: 'I am a student.', spanish: 'Yo soy estudiante.', note: 'Verb to be — presente.' },
    { english: 'She works in a bank.', spanish: 'Ella trabaja en un banco.', note: 'Present Simple, 3ª persona + -s.' },
    { english: 'We are watching TV now.', spanish: 'Estamos viendo la tele ahora.', note: 'Present Continuous — "now" indica que ocurre ahora.' },
    { english: 'I went to Madrid last year.', spanish: 'Fui a Madrid el año pasado.', note: 'Past Simple — "went" es el pasado de "go".' },
    { english: "I'm going to travel next month.", spanish: 'Voy a viajar el próximo mes.', note: 'going to — "next month" indica futuro.' },
    { english: 'They were at home yesterday.', spanish: 'Ellos estaban en casa ayer.', note: 'Past de "to be" — "were" con "they".' },
  ],
  rule: `Resumen de tiempos A1:

1. Verb to be: am / is / are (presente) — was / were (pasado).
   - I am happy. / She was tired.

2. Present Simple: verbo base + -s con he/she/it.
   - I work every day. / He works every day.

3. Present Continuous: to be + verbo -ing. Acciones ahora.
   - I am working now.

4. Past Simple: -ed (regulares) o forma irregular (go → went).
   - Negativo y preguntas con did/didn't + infinitivo.
   - I worked. / I didn't work. / Did you work?

5. Going to: to be + going to + verbo. Planes futuros.
   - I'm going to travel.

PISTAS DE TIEMPO:
- every day / always / usually → Present Simple
- now / at the moment → Present Continuous
- yesterday / last week / ago → Past Simple
- tomorrow / next week / next month → going to`,
  commonMistakes: [
    { wrong: '❌ She don\'t work.', correct: '✅ She doesn\'t work.', explanation: 'Con "she" (3ª persona) usamos "doesn\'t", no "don\'t". Y el verbo no lleva -s.' },
    { wrong: '❌ I have 30 years.', correct: '✅ I am 30 years old.', explanation: 'Para la edad usamos "to be" (am/is/are), nunca "have". → I am 30 years old.' },
    { wrong: '❌ I didn\'t worked.', correct: '✅ I didn\'t work.', explanation: 'Después de "didn\'t" el verbo vuelve al infinitivo, sin -ed. → I didn\'t work.' },
    { wrong: '❌ She is work.', correct: '✅ She works.', explanation: 'Para rutinas usamos Present Simple (works). "She is work" mezcla mal dos tiempos.' },
    { wrong: '❌ I going to travel.', correct: '✅ I\'m going to travel.', explanation: 'going to necesita "to be": I am going to travel (I\'m going to travel).' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-m15-grammar-review-to-be',
      level: 'A1',
      name: 'Verb to be (present & past)',
      explanation_es: 'El verbo "to be" (ser/estar). Presente: am/is/are. Pasado: was/were.',
      formula: 'I am / He is / They are | I was / You were',
      examples: ['I am a student.', 'She was happy.'],
    },
    {
      id: 'gp-m15-grammar-review-present-simple',
      level: 'A1',
      name: 'Present Simple',
      explanation_es: 'Hábitos, rutinas y hechos generales. La 3ª persona singular (he/she/it) añade -s. Negativos y preguntas con do/does.',
      formula: 'I work / He works | I don\'t work / He doesn\'t work | Do you work? / Does she work?',
      examples: ['She works in a bank.', 'We don\'t drink coffee.'],
    },
    {
      id: 'gp-m15-grammar-review-present-continuous',
      level: 'A1',
      name: 'Present Continuous',
      explanation_es: 'Acciones que están ocurriendo ahora. Se forma con to be + verbo -ing.',
      formula: 'to be + verbo + -ing → I am watching, She is reading',
      examples: ['We are watching TV now.', 'They aren\'t sleeping.'],
    },
    {
      id: 'gp-m15-grammar-review-past-simple',
      level: 'A1',
      name: 'Past Simple',
      explanation_es: 'Acciones terminadas en el pasado. Verbos regulares con -ed e irregulares (go→went). Negativos y preguntas con did/didn\'t.',
      formula: 'I worked / I went | I didn\'t work | Did you go?',
      examples: ['I went to Madrid last year.', 'She didn\'t work yesterday.'],
    },
    {
      id: 'gp-m15-grammar-review-going-to',
      level: 'A1',
      name: 'Going to (future)',
      explanation_es: 'Planes e intenciones futuras. Se forma con to be + going to + verbo.',
      formula: 'to be + going to + verbo → I\'m going to travel',
      examples: ['I\'m going to travel next month.', 'Are you going to study?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m15-l1-ex1',
      type: 'multiple_choice',
      concept: 'verb to be present',
      difficulty: 1,
      prompt: 'Completa con el tiempo correcto: "I ___ a student."',
      promptTranslation: 'Yo soy estudiante.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am" en el presente. → I am a student. (Verb to be.)',
    },
    {
      id: 'a1-m15-l1-ex2',
      type: 'fill_blank',
      concept: 'present simple 3rd person',
      difficulty: 2,
      prompt: 'Completa: "She ___ in a bank." (work)',
      promptTranslation: 'Ella trabaja en un banco.',
      correctAnswer: 'works',
      acceptedAnswers: ['works'],
      explanation: 'Present Simple, 3ª persona (she): añadimos -s → she works. Es una rutina, no una acción ahora.',
    },
    {
      id: 'a1-m15-l1-ex3',
      type: 'multiple_choice',
      concept: 'present continuous',
      difficulty: 2,
      prompt: 'Completa: "We ___ watching TV now."',
      promptTranslation: 'Estamos viendo la tele ahora.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Present Continuous = to be + verbo -ing. Con "we" usamos "are". → We are watching TV now.',
    },
    {
      id: 'a1-m15-l1-ex4',
      type: 'multiple_choice',
      concept: 'past simple irregular',
      difficulty: 3,
      prompt: 'Completa: "I ___ to Madrid last year."',
      promptTranslation: 'Fui a Madrid el año pasado.',
      correctAnswer: 'went',
      options: ['go', 'went', 'goed'],
      explanation: '"go" es irregular: su pasado es "went", no "goed". → I went to Madrid last year.',
    },
    {
      id: 'a1-m15-l1-ex5',
      type: 'error_correction',
      concept: 'present simple negative',
      difficulty: 3,
      prompt: 'Corrige el error: "She don\'t work on Sundays."',
      correctAnswer: 'She doesn\'t work on Sundays.',
      acceptedAnswers: ['She doesn\'t work on Sundays', 'She does not work on Sundays', 'She does not work on Sundays.', 'She doesn\'t work on Sundays.'],
      acceptApproximate: true,
      explanation: 'Con "she" (3ª persona) usamos "doesn\'t", no "don\'t". Y el verbo "work" no lleva -s. → She doesn\'t work on Sundays.',
    },
    {
      id: 'a1-m15-l1-ex6',
      type: 'fill_blank',
      concept: 'past simple was/were',
      difficulty: 3,
      prompt: 'Completa: "They ___ at home yesterday." (was / were)',
      promptTranslation: 'Ellos estaban en casa ayer.',
      correctAnswer: 'were',
      acceptedAnswers: ['were'],
      explanation: 'Pasado de "to be" con "they": usamos "were". → They were at home yesterday.',
    },
    {
      id: 'a1-m15-l1-ex7',
      type: 'reorder',
      concept: 'going to future',
      difficulty: 3,
      prompt: 'Ordena la frase (going to):',
      promptTranslation: 'Voy a viajar el próximo mes.',
      words: ["I'm", 'going', 'to', 'travel', 'next', 'month.'],
      correctAnswer: "I'm going to travel next month.",
      explanation: 'going to = to be + going to + verbo. → I\'m going to travel next month. = Voy a viajar el próximo mes.',
    },
    {
      id: 'a1-m15-l1-ex8',
      type: 'multiple_choice',
      concept: 'present simple vs present continuous',
      difficulty: 4,
      prompt: '¿Qué tiempo usamos en esta frase? "Look! She ___ running in the park."',
      correctAnswer: 'is',
      options: ['is', 'works', 'go'],
      explanation: '"Look!" y la situación actual indican Present Continuous: She is running in the park. = Ella está corriendo en el parque.',
    },
    {
      id: 'a1-m15-l1-ex9',
      type: 'translate',
      concept: 'present continuous',
      difficulty: 4,
      prompt: 'Traduce: "Estoy estudiando inglés ahora."',
      correctAnswer: 'I am studying English now.',
      acceptedAnswers: ['I am studying English now', "I'm studying English now", 'I am studying English now.', "I'm studying English now."],
      acceptApproximate: true,
      explanation: '"Ahora" indica Present Continuous: I am studying English now. = Estoy estudiando inglés ahora.',
    },
    {
      id: 'a1-m15-l1-ex10',
      type: 'reorder',
      concept: 'present simple questions',
      difficulty: 4,
      prompt: 'Ordena la pregunta:',
      promptTranslation: '¿Ella trabaja en un banco?',
      words: ['Does', 'she', 'work', 'in', 'a', 'bank?'],
      correctAnswer: 'Does she work in a bank?',
      explanation: 'Preguntas en Present Simple con 3ª persona: Does + she + verbo (sin -s). → Does she work in a bank?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m15-l1-mt1',
      type: 'multiple_choice',
      concept: 'verb to be present',
      difficulty: 2,
      prompt: 'Completa: "My parents ___ doctors."',
      promptTranslation: 'Mis padres son médicos.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "my parents" (plural) usamos "are". → My parents are doctors.',
    },
    {
      id: 'a1-m15-l1-mt2',
      type: 'fill_blank',
      concept: 'present simple 3rd person',
      difficulty: 2,
      prompt: 'Completa: "He ___ TV every evening." (watch)',
      promptTranslation: 'Él ve la tele todas las tardes.',
      correctAnswer: 'watches',
      acceptedAnswers: ['watches'],
      explanation: 'Present Simple, 3ª persona (he): watch → watches (se añade -es). → He watches TV every evening.',
    },
    {
      id: 'a1-m15-l1-mt3',
      type: 'multiple_choice',
      concept: 'past simple regular',
      difficulty: 3,
      prompt: 'Completa: "She ___ in Paris for five years." (live)',
      promptTranslation: 'Ella vivió en París durante cinco años.',
      correctAnswer: 'lived',
      options: ['live', 'lives', 'lived'],
      explanation: 'Pasado regular: live → lived. → She lived in Paris for five years.',
    },
    {
      id: 'a1-m15-l1-mt4',
      type: 'error_correction',
      concept: 'past simple negative',
      difficulty: 4,
      prompt: 'Corrige el error: "I didn\'t worked yesterday."',
      correctAnswer: 'I didn\'t work yesterday.',
      acceptedAnswers: ['I didn\'t work yesterday', 'I did not work yesterday', 'I did not work yesterday.', 'I didn\'t work yesterday.'],
      acceptApproximate: true,
      explanation: 'Después de "didn\'t" el verbo vuelve al infinitivo, sin -ed. → I didn\'t work yesterday.',
    },
    {
      id: 'a1-m15-l1-mt5',
      type: 'translate',
      concept: 'going to future',
      difficulty: 4,
      prompt: 'Traduce: "Ella va a visitar Londres."',
      correctAnswer: 'She is going to visit London.',
      acceptedAnswers: ['She is going to visit London', "She's going to visit London", 'She is going to visit London.', "She's going to visit London."],
      acceptApproximate: true,
      explanation: 'going to = to be + going to + verbo. Con "she" → She is going to visit London.',
    },
    {
      id: 'a1-m15-l1-mt6',
      type: 'multiple_choice',
      concept: 'present simple vs present continuous',
      difficulty: 4,
      prompt: 'Elige la frase correcta para una RUTINA (no una acción ahora):',
      correctAnswer: 'She works in a bank.',
      options: ['She works in a bank.', 'She is working in a bank right now.', 'She work in a bank.'],
      explanation: 'Para rutinas usamos Present Simple: She works in a bank. "She is working" sería la acción ahora; "She work" es incorrecto (falta la -s).',
    },
  ],
  reviewItems: [],
  prerequisites: ['a1-m14-l5'],
}
