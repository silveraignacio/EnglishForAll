import type { Lesson } from '../../types'

export const lesson124IrregularVerbs: Lesson = {
  id: 'a1-m12-l4',
  moduleId: 'm12-past-simple',
  order: 3,
  title: 'Verbos irregulares comunes',
  objective: 'Aprender y usar el pasado de los verbos irregulares más comunes del inglés.',
  explanation_es: `Hasta ahora hemos visto verbos regulares, que forman el pasado con -ed. Pero el inglés tiene muchos verbos IRREGULARES: su pasado no sigue la regla de -ed y hay que memorizarlos.

Aquí tienes los 20 verbos irregulares más útiles para un nivel A1:

- go → went (ir)
- have → had (tener)
- make → made (hacer)
- do → did (hacer)
- see → saw (ver)
- get → got (conseguir/obtener)
- take → took (tomar)
- come → came (venir)
- buy → bought (comprar)
- eat → ate (comer)
- drink → drank (beber)
- sleep → slept (dormir)
- read → read (leer; se escribe igual pero se pronuncia "red")
- write → wrote (escribir)
- give → gave (dar)
- find → found (encontrar)
- tell → told (decir/contar)
- say → said (decir)
- know → knew (saber/conocer)
- think → thought (pensar)

Ejemplos en frases:
- I went to the cinema. = Fui al cine.
- She had breakfast at 7. = Ella desayunó a las 7.
- We bought a new car. = Compramos un coche nuevo.
- He saw a film. = Él vio una película.

Recuerda: la forma pasada se usa solo en frases AFIRMATIVAS. En negativas y preguntas con did/didn't usamos el verbo en infinitivo (I didn't go, no I didn't went).`,
  examples: [
    { english: 'I went to the cinema.', spanish: 'Fui al cine.', note: 'go → went.' },
    { english: 'She had breakfast at 7.', spanish: 'Ella desayunó a las 7.', note: 'have → had.' },
    { english: 'We bought a new car.', spanish: 'Compramos un coche nuevo.', note: 'buy → bought.' },
    { english: 'He saw a film.', spanish: 'Él vio una película.', note: 'see → saw.' },
    { english: 'They ate and drank a lot.', spanish: 'Ellos comieron y bebieron mucho.', note: 'eat → ate, drink → drank.' },
    { english: 'I knew the answer.', spanish: 'Sabía la respuesta.', note: 'know → knew.' },
  ],
  rule: `**Los verbos irregulares no siguen la regla de -ed.** Hay que memorizar su pasado:
- go → went, have → had, make → made, do → did, see → saw, get → got
- take → took, come → came, buy → bought, eat → ate, drink → drank, sleep → slept
- read → read, write → wrote, give → gave, find → found, tell → told, say → said
- know → knew, think → thought

**IMPORTANTE:** La forma pasada se usa en frases AFIRMATIVAS.
- I went. / She bought. / We saw.

En negativas y preguntas usamos el infinitivo con did/didn't:
- I didn't go. (no "I didn't went")
- Did you see it? (no "Did you saw it?")`,
  formation: {
    title: 'Cómo se forma el Past Simple — Verbos irregulares',
    intro: 'Los verbos irregulares no siguen la regla de -ed: cada uno tiene su propia forma de pasado que hay que memorizar.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + forma irregular de pasado + complemento',
        examples: [
          { english: 'I went to the cinema.', spanish: 'Fui al cine.' },
          { english: 'She had breakfast at 7.', spanish: 'Ella desayunó a las 7.' },
          { english: 'We bought a new car.', spanish: 'Compramos un coche nuevo.' },
          { english: 'He saw a film.', spanish: 'Él vio una película.' },
          { english: 'I knew the answer.', spanish: 'Sabía la respuesta.' },
        ],
        note: 'La forma pasada es igual para todas las personas: I went, she went, they went.',
      },
    ],
    notes: [
      'La forma pasada se usa SOLO en afirmativo. En negativo y preguntas con did/didn\'t, el verbo vuelve al infinitivo: I didn\'t go (no "didn\'t went") · Did you see it? (no "Did you saw it?").',
      'Irregulares comunes A1: go→went, have→had, make→made, do→did, see→saw, get→got, take→took, come→came, buy→bought, eat→ate, drink→drank, sleep→slept, write→wrote, give→gave, find→found, tell→told, say→said, know→knew, think→thought.',
      '"Read" se escribe igual en presente y pasado, pero en pasado se pronuncia "red".',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I goed to the cinema.', correct: '✅ I went to the cinema.', explanation: '"Go" es irregular: su pasado es "went", no "goed".' },
    { wrong: '❌ She buyed a car.', correct: '✅ She bought a car.', explanation: '"Buy" es irregular: su pasado es "bought", no "buyed".' },
    { wrong: '❌ I didn\'t went to the party.', correct: '✅ I didn\'t go to the party.', explanation: 'Con "didn\'t" usamos el verbo en infinitivo: go, no went.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-irregular-past',
      level: 'A1',
      name: 'Common irregular verbs in the past',
      explanation_es: 'Muchos verbos ingleses son irregulares: su forma de pasado no termina en -ed y hay que memorizarla. En afirmativo usamos la forma pasada; con did/didn\'t usamos el infinitivo.',
      formula: 'Subject + irregular past form (go → went, have → had, buy → bought...)',
      examples: ['I went to the cinema.', 'She had breakfast at 7.', 'We bought a new car.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m12-l4-ex1',
      type: 'match',
      concept: 'present ↔ past irregular verbs',
      difficulty: 1,
      prompt: 'Relaciona cada verbo en presente con su forma en pasado:',
      pairs: [
        { left: 'go', right: 'went' },
        { left: 'have', right: 'had' },
        { left: 'buy', right: 'bought' },
        { left: 'see', right: 'saw' },
        { left: 'eat', right: 'ate' },
        { left: 'drink', right: 'drank' },
      ],
      correctAnswer: 'go=went, have=had, buy=bought, see=saw, eat=ate, drink=drank',
      explanation: 'Estos son verbos irregulares: sus pasados son go→went, have→had, buy→bought, see→saw, eat→ate, drink→drank.',
    },
    {
      id: 'a1-m12-l4-ex2',
      type: 'match',
      concept: 'present ↔ past irregular verbs',
      difficulty: 1,
      prompt: 'Relaciona cada verbo en presente con su forma en pasado:',
      pairs: [
        { left: 'write', right: 'wrote' },
        { left: 'take', right: 'took' },
        { left: 'come', right: 'came' },
        { left: 'sleep', right: 'slept' },
        { left: 'know', right: 'knew' },
        { left: 'find', right: 'found' },
      ],
      correctAnswer: 'write=wrote, take=took, come=came, sleep=slept, know=knew, find=found',
      explanation: 'Estos verbos irregulares forman el pasado así: write→wrote, take→took, come→came, sleep→slept, know→knew, find→found.',
    },
    {
      id: 'a1-m12-l4-ex3',
      type: 'fill_blank',
      concept: 'irregular past forms',
      difficulty: 1,
      prompt: 'Completa con el pasado: "I ___ to the cinema." (go)',
      promptTranslation: 'Fui al cine.',
      correctAnswer: 'went',
      acceptedAnswers: ['went', 'Went'],
      explanation: 'El pasado de "go" es "went". → I went to the cinema.',
    },
    {
      id: 'a1-m12-l4-ex4',
      type: 'fill_blank',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa con el pasado: "She ___ breakfast at 7." (have)',
      promptTranslation: 'Ella desayunó a las 7.',
      correctAnswer: 'had',
      acceptedAnswers: ['had', 'Had'],
      explanation: 'El pasado de "have" es "had". → She had breakfast at 7.',
    },
    {
      id: 'a1-m12-l4-ex5',
      type: 'multiple_choice',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa: "We ___ a new car." (buy)',
      promptTranslation: 'Compramos un coche nuevo.',
      correctAnswer: 'bought',
      options: ['bought', 'buyed', 'buy'],
      explanation: 'El pasado de "buy" es "bought" (irregular). → We bought a new car.',
    },
    {
      id: 'a1-m12-l4-ex6',
      type: 'multiple_choice',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa: "He ___ a film." (see)',
      promptTranslation: 'Él vio una película.',
      correctAnswer: 'saw',
      options: ['saw', 'seed', 'seen'],
      explanation: 'El pasado de "see" es "saw". → He saw a film.',
    },
    {
      id: 'a1-m12-l4-ex7',
      type: 'fill_blank',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa con el pasado: "They ___ a letter." (write)',
      promptTranslation: 'Ellos escribieron una carta.',
      correctAnswer: 'wrote',
      acceptedAnswers: ['wrote', 'Wrote'],
      explanation: 'El pasado de "write" es "wrote". → They wrote a letter.',
    },
    {
      id: 'a1-m12-l4-ex8',
      type: 'multiple_choice',
      concept: 'irregular past forms',
      difficulty: 3,
      prompt: 'Completa: "I ___ the answer." (know)',
      promptTranslation: 'Sabía la respuesta.',
      correctAnswer: 'knew',
      options: ['knew', 'knowed', 'known'],
      explanation: 'El pasado de "know" es "knew" (irregular). → I knew the answer.',
    },
    {
      id: 'a1-m12-l4-ex9',
      type: 'translate',
      concept: 'irregular past forms',
      difficulty: 3,
      prompt: 'Traduce: "Compré un coche nuevo."',
      correctAnswer: 'I bought a new car.',
      acceptedAnswers: ['I bought a new car', 'I bought a new car.', 'i bought a new car.'],
      acceptApproximate: true,
      explanation: '"Yo compré" = I bought (buy → bought), "un coche nuevo" = a new car.',
    },
    {
      id: 'a1-m12-l4-ex10',
      type: 'translate',
      concept: 'irregular past forms',
      difficulty: 3,
      prompt: 'Traduce: "Él vio una película."',
      correctAnswer: 'He saw a film.',
      acceptedAnswers: ['He saw a film', 'He saw a film.', 'he saw a film.'],
      acceptApproximate: true,
      explanation: '"Él vio" = He saw (see → saw), "una película" = a film.',
    },
    {
      id: 'a1-m12-l4-ex11',
      type: 'multiple_choice',
      concept: 'irregular past in negatives',
      difficulty: 4,
      prompt: 'Completa: "I didn\'t ___ to the party."',
      promptTranslation: 'No fui a la fiesta.',
      correctAnswer: 'go',
      options: ['go', 'went', 'gone'],
      explanation: 'Con "didn\'t" usamos el verbo en infinitivo: go, no went. → I didn\'t go to the party.',
    },
    {
      id: 'a1-m12-l4-ex12',
      type: 'multiple_choice',
      concept: 'irregular past in questions',
      difficulty: 4,
      prompt: 'Completa la pregunta: "Did you ___ the film?"',
      promptTranslation: '¿Viste la película?',
      correctAnswer: 'see',
      options: ['see', 'saw', 'seed'],
      explanation: 'En preguntas con "Did" usamos el verbo en infinitivo: see, no saw. → Did you see the film?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m12-l4-mt1',
      type: 'match',
      concept: 'present ↔ past irregular verbs',
      difficulty: 1,
      prompt: 'Relaciona cada verbo en presente con su forma en pasado:',
      pairs: [
        { left: 'come', right: 'came' },
        { left: 'make', right: 'made' },
        { left: 'give', right: 'gave' },
        { left: 'say', right: 'said' },
        { left: 'tell', right: 'told' },
        { left: 'think', right: 'thought' },
      ],
      correctAnswer: 'come=came, make=made, give=gave, say=said, tell=told, think=thought',
      explanation: 'Los pasados son: come→came, make→made, give→gave, say→said, tell→told, think→thought.',
    },
    {
      id: 'a1-m12-l4-mt2',
      type: 'fill_blank',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa con el pasado: "We ___ to the park." (go)',
      promptTranslation: 'Fuimos al parque.',
      correctAnswer: 'went',
      acceptedAnswers: ['went', 'Went'],
      explanation: 'El pasado de "go" es "went". → We went to the park.',
    },
    {
      id: 'a1-m12-l4-mt3',
      type: 'multiple_choice',
      concept: 'irregular past forms',
      difficulty: 2,
      prompt: 'Completa: "She ___ a book." (read)',
      promptTranslation: 'Ella leyó un libro.',
      correctAnswer: 'read',
      options: ['read', 'readed', 'red'],
      explanation: 'El pasado de "read" se escribe igual (read) pero se pronuncia "red". → She read a book.',
    },
    {
      id: 'a1-m12-l4-mt4',
      type: 'multiple_choice',
      concept: 'irregular past forms',
      difficulty: 3,
      prompt: 'Completa: "They ___ a film last night." (watch → verbo regular)',
      promptTranslation: 'Ellos vieron una película anoche.',
      correctAnswer: 'watched',
      options: ['watched', 'saw', 'watch'],
      explanation: '"Watch" es un verbo REGULAR: su pasado es "watched". (Recuerda: "saw" es el pasado de "see".)',
    },
    {
      id: 'a1-m12-l4-mt5',
      type: 'translate',
      concept: 'irregular past forms',
      difficulty: 3,
      prompt: 'Traduce: "Fuimos al cine."',
      correctAnswer: 'We went to the cinema.',
      acceptedAnswers: ['We went to the cinema', 'We went to the cinema.', 'we went to the cinema.'],
      acceptApproximate: true,
      explanation: '"Nosotros fuimos" = We went (go → went), "al cine" = to the cinema.',
    },
  ],
  reviewItems: ['a1-m12-l3'],
  prerequisites: ['a1-m12-l3'],
}
