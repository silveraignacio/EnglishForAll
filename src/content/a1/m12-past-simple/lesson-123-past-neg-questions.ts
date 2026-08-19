import type { Lesson } from '../../types'

export const lesson123PastNegQuestions: Lesson = {
  id: 'a1-m12-l3',
  moduleId: 'm12-past-simple',
  order: 2,
  title: 'Past Simple (negativo y preguntas: did / didn\'t)',
  objective: 'Formar negativos y preguntas en pasado con did / didn\'t, y responder con respuestas cortas (Yes, I did. / No, I didn\'t.).',
  explanation_es: `En las lecciones anteriores vimos el pasado en afirmativo (worked, played). Ahora vamos a aprender a negar y a preguntar en pasado.

Para hacer una frase NEGATIVA en pasado usamos "didn't" (= did not) + el verbo EN INFINITIVO (sin -ed):

- I didn't work yesterday. = No trabajé ayer. (¡no "didn't worked"!)
- She didn't live in Paris. = Ella no vivió en París.

Para hacer una PREGUNTA en pasado usamos "Did" al principio + sujeto + verbo EN INFINITIVO:

- Did you work yesterday? = ¿Trabajaste ayer?
- Did he watch TV? = ¿Vio él la tele?
- Where did you go? = ¿Dónde fuiste?

Regla de oro: después de "did" o "didn't" el verbo vuelve a su forma base (infinitivo), sin -ed. El pasado ya está en "did". Por eso no decimos "Did she worked?" ni "I didn't worked".

Respuestas cortas:
- Yes, I did. / No, I didn't.
- Yes, she did. / No, she didn't.`,
  examples: [
    { english: 'I didn\'t work yesterday.', spanish: 'No trabajé ayer.', note: 'didn\'t + verbo en infinitivo (work).' },
    { english: 'She didn\'t live in Paris.', spanish: 'Ella no vivió en París.', note: 'didn\'t + live (sin -ed).' },
    { english: 'Did you work yesterday?', spanish: '¿Trabajaste ayer?', note: 'Did + sujeto + verbo en infinitivo.' },
    { english: 'Did he watch TV?', spanish: '¿Vio él la tele?', note: 'watch en infinitivo, sin -ed.' },
    { english: 'Where did you go?', spanish: '¿Dónde fuiste?', note: 'Where did + sujeto + verbo?' },
    { english: 'Yes, I did. / No, I didn\'t.', spanish: 'Sí. / No.', note: 'Respuestas cortas en pasado.' },
  ],
  rule: `**Negativo en pasado — tabla con el verbo *work*:**

| Pronombre | Negativo | Ejemplo | Traducción |
|-----------|----------|---------|------------|
| I | didn't work | I didn't work yesterday. | No trabajé ayer. |
| You | didn't work | You didn't work today. | No trabajaste hoy. |
| He | didn't work | He didn't work in Madrid. | Él no trabajó en Madrid. |
| She | didn't work | She didn't work at home. | Ella no trabajó en casa. |
| It | didn't work | It didn't work. | No funcionó. |
| We | didn't work | We didn't work on Sunday. | No trabajamos el domingo. |
| They | didn't work | They didn't work yesterday. | Ellos no trabajaron ayer. |

**Preguntas en pasado — tabla con el verbo *work*:**

| Pronombre | Pregunta | Traducción |
|-----------|----------|------------|
| I | Did I work here? | ¿Trabajé aquí? |
| You | Did you work yesterday? | ¿Trabajaste ayer? |
| He | Did he work in a bank? | ¿Trabajó él en un banco? |
| She | Did she work at home? | ¿Trabajó ella en casa? |
| It | Did it work? | ¿Funcionó? |
| We | Did we work together? | ¿Trabajamos juntos? |
| They | Did they work in London? | ¿Trabajaron ellos en Londres? |

**Regla de oro:** Después de "did" o "didn't", el verbo SIEMPRE va en infinitivo (sin -ed). En pasado, el auxiliar "did" ya indica el tiempo — el verbo no cambia.

**Respuestas cortas:**
- Yes, I did. / No, I didn't.`,
  formation: {
    title: 'Cómo se forma el Past Simple — Negativo y preguntas (did / didn\'t)',
    intro: 'Para negar y preguntar en pasado usamos el auxiliar "did" / "didn\'t" + el verbo en infinitivo. El tiempo ya lo indica "did": el verbo no cambia.',
    patterns: [
      {
        name: 'Negativo',
        formula: 'Sujeto + didn\'t + verbo en infinitivo (sin -ed) + complemento',
        examples: [
          { english: 'I didn\'t work yesterday.', spanish: 'No trabajé ayer.' },
          { english: 'She didn\'t live in Paris.', spanish: 'Ella no vivió en París.' },
        ],
        note: 'didn\'t = did not. Después de "didn\'t" el verbo va en infinitivo: no "didn\'t worked".',
      },
      {
        name: 'Pregunta',
        formula: 'Did + sujeto + verbo en infinitivo (sin -ed) + ...?',
        examples: [
          { english: 'Did you work yesterday?', spanish: '¿Trabajaste ayer?' },
          { english: 'Did he watch TV?', spanish: '¿Vio él la tele?' },
        ],
        note: 'En preguntas WH-: palabra interrogativa + did + sujeto + verbo: Where did you go?',
      },
      {
        name: 'Respuesta corta',
        formula: 'Yes, + sujeto + did. / No, + sujeto + didn\'t.',
        examples: [
          { english: 'Yes, I did.', spanish: 'Sí.' },
          { english: 'No, I didn\'t.', spanish: 'No.' },
        ],
        note: 'No repetimos el verbo: Yes, I did (no "Yes, I worked").',
      },
    ],
    notes: [
      'La regla de oro: después de "did"/"didn\'t" el verbo siempre va en infinitivo, sin -ed. El pasado ya está en "did".',
      'didn\'t = did not (forma completa).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I didn\'t worked yesterday.', correct: '✅ I didn\'t work yesterday.', explanation: 'Después de "didn\'t" el verbo vuelve al infinitivo, sin -ed: work, no worked.' },
    { wrong: '❌ Did she worked?', correct: '✅ Did she work?', explanation: 'En la pregunta, después de "did" usamos el verbo en infinitivo: work, no worked.' },
    { wrong: '❌ I no work yesterday.', correct: '✅ I didn\'t work yesterday.', explanation: 'La negativa en pasado se forma con "didn\'t" + verbo, no con "no" delante del verbo.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-past-neg-questions',
      level: 'A1',
      name: 'Past Simple — negative and questions (did / didn\'t)',
      explanation_es: 'Para negar en pasado usamos didn\'t + verbo en infinitivo. Para preguntar usamos Did + sujeto + verbo en infinitivo. Después de did/didn\'t el verbo nunca lleva -ed.',
      formula: 'Subject + didn\'t + verb | Did + subject + verb? | Yes, I did. / No, I didn\'t.',
      examples: ['I didn\'t work yesterday.', 'Did you work yesterday?', 'Where did you go?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m12-l3-ex1',
      type: 'multiple_choice',
      concept: 'didn\'t + base verb',
      difficulty: 1,
      prompt: 'Completa: "I ___ work yesterday."',
      promptTranslation: 'No trabajé ayer.',
      correctAnswer: 'didn\'t',
      options: ['didn\'t', 'did', 'no'],
      explanation: 'La negativa en pasado es "didn\'t" + verbo en infinitivo. → I didn\'t work yesterday.',
    },
    {
      id: 'a1-m12-l3-ex2',
      type: 'fill_blank',
      concept: 'didn\'t + base verb',
      difficulty: 1,
      prompt: 'Completa: "She didn\'t ___ in Paris." (vivir)',
      promptTranslation: 'Ella no vivió en París.',
      correctAnswer: 'live',
      acceptedAnswers: ['live', 'Live'],
      explanation: 'Después de "didn\'t" el verbo va en infinitivo: live, sin -ed. → She didn\'t live in Paris.',
    },
    {
      id: 'a1-m12-l3-ex3',
      type: 'fill_blank',
      concept: 'did + base verb',
      difficulty: 2,
      prompt: 'Completa la pregunta: "Did you ___ TV last night?" (ver)',
      promptTranslation: '¿Viste la tele anoche?',
      correctAnswer: 'watch',
      acceptedAnswers: ['watch', 'Watch'],
      explanation: 'Después de "Did" el verbo va en infinitivo: watch, sin -ed. → Did you watch TV last night?',
    },
    {
      id: 'a1-m12-l3-ex4',
      type: 'multiple_choice',
      concept: 'did questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you work yesterday?"',
      promptTranslation: '¿Trabajaste ayer?',
      correctAnswer: 'Did',
      options: ['Did', 'Do', 'Does'],
      explanation: 'En pasado usamos "Did" para preguntar. → Did you work yesterday?',
    },
    {
      id: 'a1-m12-l3-ex5',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Did you watch the film?" (sí)',
      promptTranslation: '¿Viste la película? (sí)',
      correctAnswer: 'Yes, I did.',
      options: ['Yes, I did.', 'Yes, I do.', 'Yes, I watched.'],
      explanation: 'La respuesta corta afirmativa en pasado es "Yes, I did." (repetimos "did", no el verbo).',
    },
    {
      id: 'a1-m12-l3-ex6',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Did she call you?" (no)',
      promptTranslation: '¿Te llamó ella? (no)',
      correctAnswer: 'No, she didn\'t.',
      options: ['No, she didn\'t.', 'No, she doesn\'t.', 'No, she called.'],
      explanation: 'La respuesta corta negativa en pasado es "No, she didn\'t."',
    },
    {
      id: 'a1-m12-l3-ex7',
      type: 'reorder',
      concept: 'did questions',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una pregunta: Did / you / work / yesterday?',
      promptTranslation: '¿Trabajaste ayer?',
      correctAnswer: 'Did you work yesterday?',
      words: ['Did', 'you', 'work', 'yesterday?'],
      explanation: 'La pregunta en pasado: Did + sujeto + verbo (infinitivo) + resto. → Did you work yesterday?',
    },
    {
      id: 'a1-m12-l3-ex8',
      type: 'reorder',
      concept: 'wh-questions in past',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una pregunta: Where / did / you / go?',
      promptTranslation: '¿Dónde fuiste?',
      correctAnswer: 'Where did you go?',
      words: ['Where', 'did', 'you', 'go?'],
      explanation: 'Con una pregunta con "where": Where + did + sujeto + verbo (infinitivo). → Where did you go?',
    },
    {
      id: 'a1-m12-l3-ex9',
      type: 'error_correction',
      concept: 'didn\'t + base verb',
      difficulty: 3,
      prompt: 'Corrige el error: "I didn\'t worked yesterday."',
      correctAnswer: 'I didn\'t work yesterday.',
      acceptedAnswers: ['I didn\'t work yesterday', 'I didn\'t work yesterday.', 'i didn\'t work yesterday.'],
      acceptApproximate: true,
      explanation: 'Después de "didn\'t" el verbo va en infinitivo: work, no worked. → I didn\'t work yesterday.',
    },
    {
      id: 'a1-m12-l3-ex10',
      type: 'error_correction',
      concept: 'did + base verb',
      difficulty: 4,
      prompt: 'Corrige el error: "Did she worked?"',
      correctAnswer: 'Did she work?',
      acceptedAnswers: ['Did she work', 'Did she work?', 'did she work?'],
      acceptApproximate: true,
      explanation: 'En la pregunta, después de "Did" el verbo va en infinitivo: work, sin -ed. → Did she work?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m12-l3-mt1',
      type: 'multiple_choice',
      concept: 'didn\'t + base verb',
      difficulty: 1,
      prompt: 'Completa: "They ___ go to the party."',
      promptTranslation: 'Ellos no fueron a la fiesta.',
      correctAnswer: 'didn\'t',
      options: ['didn\'t', 'did', 'don\'t'],
      explanation: 'La negativa en pasado es "didn\'t" + verbo en infinitivo. → They didn\'t go to the party.',
    },
    {
      id: 'a1-m12-l3-mt2',
      type: 'fill_blank',
      concept: 'did + base verb',
      difficulty: 2,
      prompt: 'Completa la pregunta: "Did he ___ a film?" (ver)',
      promptTranslation: '¿Vio él una película?',
      correctAnswer: 'see',
      acceptedAnswers: ['see', 'See'],
      explanation: 'Después de "Did" usamos el verbo en infinitivo: see, no saw. → Did he see a film?',
    },
    {
      id: 'a1-m12-l3-mt3',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Did you eat breakfast?" (no)',
      promptTranslation: '¿Desayunaste? (no)',
      correctAnswer: 'No, I didn\'t.',
      options: ['No, I didn\'t.', 'No, I don\'t.', 'No, I ate.'],
      explanation: 'La respuesta corta negativa en pasado es "No, I didn\'t."',
    },
    {
      id: 'a1-m12-l3-mt4',
      type: 'reorder',
      concept: 'did questions',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una pregunta: Did / she / live / in / Paris?',
      promptTranslation: '¿Vivió ella en París?',
      correctAnswer: 'Did she live in Paris?',
      words: ['Did', 'she', 'live', 'in', 'Paris?'],
      explanation: 'La pregunta en pasado: Did + sujeto + verbo (infinitivo) + resto. → Did she live in Paris?',
    },
    {
      id: 'a1-m12-l3-mt5',
      type: 'error_correction',
      concept: 'didn\'t + base verb',
      difficulty: 4,
      prompt: 'Corrige el error: "I no work yesterday."',
      correctAnswer: 'I didn\'t work yesterday.',
      acceptedAnswers: ['I didn\'t work yesterday', 'I didn\'t work yesterday.', 'i didn\'t work yesterday.'],
      acceptApproximate: true,
      explanation: 'La negativa en pasado se forma con "didn\'t" + verbo, no con "no" antes del verbo.',
    },
  ],
  reviewItems: ['a1-m12-l2'],
  prerequisites: ['a1-m12-l2'],
}
