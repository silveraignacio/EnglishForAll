import type { Lesson } from '../../types'

export const lesson21PresentPerfectAffirmative: Lesson = {
  id: 'a2-m2-l1',
  moduleId: 'm2-present-perfect',
  order: 0,
  title: 'Present Perfect (afirmativo)',
  objective: 'Hablar de experiencias de vida con el Present Perfect: have/has + participio pasado.',
  explanation_es: `En esta lección aprenderás a hablar de tus experiencias de vida en inglés.

### ¿Qué es el Present Perfect?

El Present Perfect conecta el pasado con el presente. Lo usamos para hablar de experiencias de vida SIN decir cuándo ocurrieron. La pregunta importante no es "¿cuándo?", sino "¿alguna vez?".

Se forma con: have / has + participio pasado.

- have → con I, you, we, they: "I have been..."
- has → con he, she, it: "She has been..."

### ¿Cómo se forma el participio pasado?

Dos tipos de verbos:

1. Verbos REGULARES: añaden -ed (como en el pasado simple):
   - visit → visited, travel → travelled, live → lived, work → worked.

2. Verbos IRREGULARES: tienen una tercera forma propia que hay que memorizar:
   - be → been, go → gone, see → seen, eat → eaten, do → done, have → had, meet → met.

### ¡Importante!

- No decimos "I have been to Paris last year". Cuando hay un tiempo concreto (last year, yesterday, in 2020), usamos el PASADO SIMPLE: "I went to Paris last year."
- El Present Perfect es para experiencias generales: "I have been to Paris." (He estado en París [alguna vez]).`,
  examples: [
    { english: 'I have been to London.', spanish: 'He estado en Londres.', note: 'be → been. Experiencia de vida.' },
    { english: 'She has seen that film.', spanish: 'Ella ha visto esa película.', note: 'Con she usamos has. see → seen.' },
    { english: 'We have visited Paris.', spanish: 'Hemos visitado París.', note: 'visit → visited (regular).' },
    { english: 'They have lived here for 5 years.', spanish: 'Ellos han vivido aquí durante 5 años.', note: 'live → lived (regular).' },
    { english: 'He has eaten sushi.', spanish: 'Él ha comido sushi.', note: 'Con he usamos has. eat → eaten.' },
    { english: 'You have done a great job.', spanish: 'Has hecho un gran trabajo.', note: 'do → done (irregular).' },
  ],
  rule: `1. Fórmula: have / has + participio pasado.
2. have → I, you, we, they. has → he, she, it.
3. Verbos regulares: participio = verbo + -ed (visited, lived, worked).
4. Verbos irregulares: tercera forma propia (been, seen, gone, eaten, done).
5. Se usa para experiencias de vida sin tiempo concreto.
6. Con tiempo concreto (last year, yesterday) usamos el PAST SIMPLE, no el Present Perfect.`,
  formation: {
    title: 'Cómo se forma el Present Perfect — Afirmativo',
    intro: 'El Present Perfect se forma con have/has + participio pasado. Conecta el pasado con el presente: hablamos de experiencias sin decir cuándo ocurrieron.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + have / has + participio pasado + complemento',
        examples: [
          { english: 'I have been to London.', spanish: 'He estado en Londres.' },
          { english: 'She has seen that film.', spanish: 'Ella ha visto esa película.' },
          { english: 'We have visited Paris.', spanish: 'Hemos visitado París.' },
          { english: 'He has eaten sushi.', spanish: 'Él ha comido sushi.' },
          { english: 'They have lived here for 5 years.', spanish: 'Ellos han vivido aquí durante 5 años.' },
          { english: 'You have done a great job.', spanish: 'Has hecho un gran trabajo.' },
        ],
        note: 'have → I/you/we/they. has → he/she/it. Después va SIEMPRE el participio pasado, nunca el infinitivo: I have gone (no "I have go").',
      },
    ],
    notes: [
      'Participios regulares: verbo + -ed (visit → visited, live → lived, work → worked).',
      'Participios irregulares: forma propia que hay que memorizar (be → been, go → gone, see → seen, eat → eaten, do → done, have → had, meet → met).',
      'Contracciones frecuentes: I\'ve, she\'s, we\'ve (I\'ve been, she\'s seen).',
      'No se usa con tiempos concretos (last year, yesterday): con ellos usamos el pasado simple (I went to Paris last year).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I have go to London.', correct: '✅ I have gone to London.', explanation: 'Después de have/has el verbo va en participio pasado, no en infinitivo: gone, no go.' },
    { wrong: '❌ She have been to Mexico.', correct: '✅ She has been to Mexico.', explanation: 'Con she/he/it usamos "has", no "have".' },
    { wrong: '❌ I have been to Paris last year.', correct: '✅ I went to Paris last year.', explanation: '"Last year" es un tiempo concreto: usamos el pasado simple (went), no el Present Perfect.' },
  ],
  vocabulary: [
    { word: 'been', translation_es: 'estado (participio de be)', level: 'A2', category: 'present perfect irregular participles', partOfSpeech: 'verb', example: 'I have been to London.', exampleTranslation: 'He estado en Londres.' },
    { word: 'seen', translation_es: 'visto (participio de see)', level: 'A2', category: 'present perfect irregular participles', partOfSpeech: 'verb', example: 'She has seen that film.', exampleTranslation: 'Ella ha visto esa película.' },
    { word: 'eaten', translation_es: 'comido (participio de eat)', level: 'A2', category: 'present perfect irregular participles', partOfSpeech: 'verb', example: 'He has eaten sushi.', exampleTranslation: 'Él ha comido sushi.' },
    { word: 'gone', translation_es: 'ido (participio de go)', level: 'A2', category: 'present perfect irregular participles', partOfSpeech: 'verb', example: 'They have gone home.', exampleTranslation: 'Ellos se han ido a casa.' },
    { word: 'done', translation_es: 'hecho (participio de do)', level: 'A2', category: 'present perfect irregular participles', partOfSpeech: 'verb', example: 'You have done a great job.', exampleTranslation: 'Has hecho un gran trabajo.' },
    { word: 'had', translation_es: 'tenido (participio de have)', level: 'A2', category: 'present perfect irregular participles', partOfSpeech: 'verb', example: 'I have had a busy week.', exampleTranslation: 'He tenido una semana ocupada.' },
    { word: 'visited', translation_es: 'visitado (participio de visit)', level: 'A1', category: 'present perfect regular verbs', partOfSpeech: 'verb', example: 'We have visited Paris.', exampleTranslation: 'Hemos visitado París.' },
    { word: 'travelled', translation_es: 'viajado (participio de travel)', level: 'A1', category: 'present perfect regular verbs', partOfSpeech: 'verb', example: 'I have travelled a lot.', exampleTranslation: 'He viajado mucho.' },
    { word: 'met', translation_es: 'conocido, encontrado (participio de meet)', level: 'A2', category: 'present perfect irregular participles', partOfSpeech: 'verb', example: 'She has met many famous people.', exampleTranslation: 'Ella ha conocido a mucha gente famosa.' },
    { word: 'lived', translation_es: 'vivido (participio de live)', level: 'A1', category: 'present perfect regular verbs', partOfSpeech: 'verb', example: 'They have lived here for 5 years.', exampleTranslation: 'Ellos han vivido aquí durante 5 años.' },
    { word: 'worked', translation_es: 'trabajado (participio de work)', level: 'A1', category: 'present perfect regular verbs', partOfSpeech: 'verb', example: 'I have worked here since 2019.', exampleTranslation: 'He trabajado aquí desde 2019.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m2-present-perfect-affirmative',
      level: 'A2',
      name: 'Present Perfect — affirmative',
      explanation_es: 'Experiencias de vida sin tiempo concreto. Se forma con have/has + participio pasado (regular -ed o tercera forma irregular).',
      formula: 'I/You/We/They + have + past participle | He/She/It + has + past participle',
      examples: ['I have been to London.', 'She has seen that film.', 'We have visited Paris.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m2-l1-ex1',
      type: 'multiple_choice',
      concept: 'has / have',
      difficulty: 1,
      prompt: 'Completa: "She ___ been to London."',
      promptTranslation: 'Ella ha estado en Londres.',
      correctAnswer: 'has',
      options: ['has', 'have', 'is'],
      explanation: 'Con "she" usamos "has". → She has been to London.',
    },
    {
      id: 'a2-m2-l1-ex2',
      type: 'fill_blank',
      concept: 'past participle irregular',
      difficulty: 2,
      prompt: 'Completa con el participio: "I have ___ a great film." (see)',
      promptTranslation: 'He visto una película genial.',
      correctAnswer: 'seen',
      acceptedAnswers: ['seen', 'Seen'],
      explanation: 'El participio de "see" es "seen" (irregular). → I have seen a great film.',
    },
    {
      id: 'a2-m2-l1-ex3',
      type: 'multiple_choice',
      concept: 'has / have',
      difficulty: 2,
      prompt: 'Completa: "They ___ lived here for 5 years."',
      promptTranslation: 'Ellos han vivido aquí durante 5 años.',
      correctAnswer: 'have',
      options: ['have', 'has', 'are'],
      explanation: 'Con "they" usamos "have". → They have lived here for 5 years.',
    },
    {
      id: 'a2-m2-l1-ex4',
      type: 'match',
      concept: 'present ↔ past participle',
      difficulty: 2,
      prompt: 'Une cada verbo en presente con su participio pasado.',
      correctAnswer: 'see→seen, eat→eaten, go→gone, visit→visited, be→been, do→done',
      pairs: [
        { left: 'see', right: 'seen' },
        { left: 'eat', right: 'eaten' },
        { left: 'go', right: 'gone' },
        { left: 'visit', right: 'visited' },
        { left: 'be', right: 'been' },
        { left: 'do', right: 'done' },
      ],
      explanation: 'Los irregulares tienen forma propia: see→seen, eat→eaten, go→gone, be→been, do→done. Los regulares añaden -ed: visit→visited.',
    },
    {
      id: 'a2-m2-l1-ex5',
      type: 'translate',
      concept: 'present perfect affirmative',
      difficulty: 3,
      prompt: 'Traduce: "He estado en Londres."',
      correctAnswer: 'I have been to London.',
      acceptedAnswers: ['I have been to London', 'I have been to London.', 'i have been to London'],
      acceptApproximate: true,
      explanation: '"Yo he estado" = I have been (be → been), "en Londres" = to London. → I have been to London.',
    },
    {
      id: 'a2-m2-l1-ex6',
      type: 'error_correction',
      concept: 'has / have',
      difficulty: 3,
      prompt: 'Corrige el error: "She have been to Mexico."',
      correctAnswer: 'She has been to Mexico.',
      acceptedAnswers: ['She has been to Mexico', 'She has been to Mexico.', 'she has been to Mexico'],
      acceptApproximate: true,
      explanation: 'Con "she" (3ª persona singular) usamos "has", no "have". → She has been to Mexico.',
    },
    {
      id: 'a2-m2-l1-ex7',
      type: 'reorder',
      concept: 'present perfect structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: I / have / visited / Paris',
      promptTranslation: 'He visitado París.',
      correctAnswer: 'I have visited Paris.',
      words: ['I', 'have', 'visited', 'Paris'],
      explanation: 'Orden: sujeto + have/has + participio + ... → I have visited Paris.',
    },
    {
      id: 'a2-m2-l1-ex8',
      type: 'multiple_choice',
      concept: 'present perfect vs past simple',
      difficulty: 4,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Elige la frase correcta.',
      correctAnswer: 'I went to Paris last year.',
      options: [
        'I have been to Paris last year.',
        'I went to Paris last year.',
        'I have go to Paris last year.',
      ],
      explanation: 'Con "last year" (tiempo concreto) usamos el pasado simple: went. El Present Perfect no se usa con tiempos concretos.',
    },
    {
      id: 'a2-m2-l1-ex9',
      type: 'translate',
      concept: 'present perfect affirmative',
      difficulty: 4,
      prompt: 'Traduce: "Ella ha visto esa película."',
      correctAnswer: 'She has seen that film.',
      acceptedAnswers: ['She has seen that film', 'She has seen that film.', 'she has seen that film'],
      acceptApproximate: true,
      explanation: '"Ella ha visto" = She has seen (see → seen), "esa película" = that film. → She has seen that film.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m2-l1-mt1',
      type: 'multiple_choice',
      concept: 'has / have',
      difficulty: 1,
      prompt: 'Completa: "I ___ been to London."',
      promptTranslation: 'He estado en Londres.',
      correctAnswer: 'have',
      options: ['have', 'has', 'am'],
      explanation: 'Con "I" usamos "have". → I have been to London.',
    },
    {
      id: 'a2-m2-l1-mt2',
      type: 'fill_blank',
      concept: 'past participle regular',
      difficulty: 2,
      prompt: 'Completa con el participio: "We have ___ Paris." (visit)',
      promptTranslation: 'Hemos visitado París.',
      correctAnswer: 'visited',
      acceptedAnswers: ['visited', 'Visited'],
      explanation: '"Visit" es regular: visit → visited. → We have visited Paris.',
    },
    {
      id: 'a2-m2-l1-mt3',
      type: 'multiple_choice',
      concept: 'past participle irregular',
      difficulty: 2,
      prompt: 'Completa: "He has ___ sushi." (eat)',
      promptTranslation: 'Él ha comido sushi.',
      correctAnswer: 'eaten',
      options: ['eaten', 'ate', 'eat'],
      explanation: 'El participio de "eat" es "eaten" (irregular). → He has eaten sushi.',
    },
    {
      id: 'a2-m2-l1-mt4',
      type: 'translate',
      concept: 'present perfect affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Hemos visitado París."',
      correctAnswer: 'We have visited Paris.',
      acceptedAnswers: ['We have visited Paris', 'We have visited Paris.', 'we have visited Paris'],
      acceptApproximate: true,
      explanation: '"Nosotros hemos visitado" = We have visited (visit → visited), "París" = Paris.',
    },
    {
      id: 'a2-m2-l1-mt5',
      type: 'error_correction',
      concept: 'past participle form',
      difficulty: 4,
      prompt: 'Corrige el error: "I have go to London."',
      correctAnswer: 'I have gone to London.',
      acceptedAnswers: ['I have gone to London', 'I have gone to London.', 'i have gone to London'],
      acceptApproximate: true,
      explanation: 'Después de "have" el verbo va en participio: go → gone, no "go".',
    },
  ],
  reviewItems: [],
  prerequisites: ['a2-m1-l4'],
}
