import type { Lesson } from '../../types'

export const lesson21Affirmative: Lesson = {
  id: 'b1-m2-l1',
  moduleId: 'm2-past-perfect',
  order: 0,
  title: 'Past Perfect (afirmativo)',
  objective: 'Usar had + past participle para expresar una acción que ocurrió antes de otra acción en el pasado.',
  explanation_es: `El "past perfect" sirve para hablar de una acción que ocurrió ANTES de otra acción en el pasado. Es el "pasado del pasado".

Estructura:
- had + past participle (la 3ª columna de los verbos irregulares, o verbo + -ed en los regulares)

Ejemplos:
- When I arrived, the film had already started. = Cuando llegué, la película ya había empezado.
- She had finished her homework before dinner. = Ella había terminado sus deberes antes de la cena.
- They had left before we got there. = Ellos habían salido antes de que llegáramos.

¿Cómo entenderlo? Imagina dos eventos en el pasado:
1. El evento más antiguo → past perfect (had + participle).
2. El evento más reciente → past simple.

- She had finished (más antiguo) before dinner. (más reciente)
- When I arrived (más reciente), the film had already started. (más antiguo)

Palabras que suelen acompañarlo:
- before: She had finished before dinner.
- after: After she had left, we talked.
- when: When I arrived, the film had started.
- already: The film had already started. (ya)
- by the time: By the time I arrived, they had left. (para cuando)

Atención: "had" es el mismo para todas las personas: I had, you had, he had, she had, we had, they had. No cambia.

Los verbos irregulares usan su 3ª forma (past participle):
- go → went (past) → gone (participle): They had gone.
- see → saw → seen: I had seen.
- eat → ate → eaten: She had eaten.
- leave → left → left: They had left.`,
  examples: [
    { english: 'When I arrived, the film had already started.', spanish: 'Cuando llegué, la película ya había empezado.', note: 'El film empezó (antiguo) antes de mi llegada (reciente).' },
    { english: 'She had finished her homework before dinner.', spanish: 'Ella había terminado sus deberes antes de la cena.', note: 'Terminar (antiguo) antes de la cena (reciente).' },
    { english: 'They had left before we got there.', spanish: 'Ellos habían salido antes de que llegáramos.', note: 'left es past y participle a la vez.' },
    { english: 'After she had gone, we talked.', spanish: 'Después de que ella se fue, hablamos.', note: 'gone = participle de go.' },
    { english: 'I had seen that film before.', spanish: 'Había visto esa película antes.', note: 'seen = participle de see.' },
    { english: 'By the time I arrived, they had eaten.', spanish: 'Para cuando llegué, ellos ya habían comido.', note: 'eaten = participle de eat.' },
  ],
  rule: `Fórmula:
Subject + had + past participle
- She had finished her homework.
- They had left.
- I had seen the film.

Regla de uso: cuando hay DOS acciones en el pasado, la que ocurrió PRIMERO va en past perfect (had + participle), y la más reciente en past simple.

Marcadores típicos: before, after, when, already, by the time.

Recuerda: para verbos irregulares, el past participle es la 3ª forma: go→gone, see→seen, eat→eaten, take→taken.`,
  commonMistakes: [
    { wrong: '❌ I had went to the shop.', correct: '✅ I had gone to the shop.', explanation: 'El past participle de "go" es "gone", no "went". Con had usamos la 3ª forma.' },
    { wrong: '❌ She had eat before dinner.', correct: '✅ She had eaten before dinner.', explanation: 'El participle de "eat" es "eaten". Después de had usamos siempre el participle.' },
    { wrong: '❌ They had went home before we arrived.', correct: '✅ They had gone home before we arrived.', explanation: 'Cuando un evento es claramente anterior a otro, usamos past perfect: had gone, no "went".' },
    { wrong: '❌ I have seen the film when I arrived.', correct: '✅ I had seen the film when I arrived.', explanation: 'Dos eventos pasados → la acción anterior usa "had + participle", no "have + participle" (present perfect).' },
  ],
  vocabulary: [
    { word: 'already', translation_es: 'ya', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: 'The film had already started.', exampleTranslation: 'La película ya había empezado.' },
    { word: 'by the time', translation_es: 'para cuando', level: 'B1', category: 'time', partOfSpeech: 'phrase', example: 'By the time I arrived, they had left.', exampleTranslation: 'Para cuando llegué, ellos habían salido.' },
    { word: 'before', translation_es: 'antes de', level: 'A2', category: 'time', partOfSpeech: 'preposition/conjunction', example: 'She finished before dinner.', exampleTranslation: 'Ella terminó antes de la cena.' },
    { word: 'homework', translation_es: 'deberes/tarea', level: 'A1', category: 'school', partOfSpeech: 'noun', example: 'She had finished her homework.', exampleTranslation: 'Ella había terminado sus deberes.' },
    { word: 'film', translation_es: 'película', level: 'A1', category: 'entertainment', partOfSpeech: 'noun', example: 'The film had already started.', exampleTranslation: 'La película ya había empezado.' },
    { word: 'arrive', translation_es: 'llegar', level: 'A2', category: 'travel', partOfSpeech: 'verb', example: 'When I arrived, the film had started.', exampleTranslation: 'Cuando llegué, la película había empezado.' },
  ],
  grammarPoints: [
    {
      id: 'gp-past-perfect-affirmative',
      level: 'B1',
      name: 'Past perfect (affirmative)',
      explanation_es: 'El past perfect expresa una acción anterior a otra en el pasado. Se forma con had + past participle.',
      formula: 'Subject + had + past participle',
      examples: ['When I arrived, the film had already started.', 'She had finished her homework before dinner.', 'They had left before we got there.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m2-l1-ex1',
      type: 'multiple_choice',
      concept: 'past perfect affirmative',
      difficulty: 1,
      prompt: 'Completa: "When I arrived, the film ___ already started."',
      promptTranslation: 'Cuando llegué, la película ya había empezado.',
      correctAnswer: 'had',
      options: ['had', 'has', 'have'],
      explanation: 'La película empezó antes de mi llegada → past perfect → "had" + participle. → The film had already started.',
    },
    {
      id: 'b1-m2-l1-ex2',
      type: 'multiple_choice',
      concept: 'past perfect affirmative',
      difficulty: 1,
      prompt: 'Completa: "She had ___ her homework before dinner."',
      promptTranslation: 'Ella había terminado sus deberes antes de la cena.',
      correctAnswer: 'finished',
      options: ['finished', 'finish', 'finishes'],
      explanation: 'Con "had" usamos el past participle: finished (verbo regular + -ed). → She had finished her homework.',
    },
    {
      id: 'b1-m2-l1-ex3',
      type: 'fill_blank',
      concept: 'past perfect affirmative',
      difficulty: 2,
      prompt: 'Completa con el past participle: "They had ___ (leave) before we got there."',
      promptTranslation: 'Ellos habían salido antes de que llegáramos.',
      correctAnswer: 'left',
      acceptedAnswers: ['left'],
      explanation: '"Leave" es irregular: leave → left → left. Su past participle es "left". → They had left.',
    },
    {
      id: 'b1-m2-l1-ex4',
      type: 'fill_blank',
      concept: 'past perfect affirmative',
      difficulty: 2,
      prompt: 'Completa: "After she had ___ (go), we talked."',
      promptTranslation: 'Después de que ella se fue, hablamos.',
      correctAnswer: 'gone',
      acceptedAnswers: ['gone'],
      explanation: '"Go" es irregular: go → went → gone. El participle es "gone". → After she had gone, we talked.',
    },
    {
      id: 'b1-m2-l1-ex5',
      type: 'reorder',
      concept: 'past perfect affirmative',
      difficulty: 3,
      prompt: 'Ordena la frase (past perfect):',
      promptTranslation: 'Cuando llegué, la película ya había empezado.',
      words: ['When', 'I', 'arrived,', 'the', 'film', 'had', 'already', 'started.'],
      correctAnswer: 'When I arrived, the film had already started.',
      explanation: 'La llegada es lo reciente (past simple: arrived); el comienzo de la película es lo anterior (had already started).',
    },
    {
      id: 'b1-m2-l1-ex6',
      type: 'translate',
      concept: 'past perfect affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Ella había terminado sus deberes antes de la cena."',
      correctAnswer: 'She had finished her homework before dinner.',
      acceptedAnswers: [
        'She had finished her homework before dinner',
        'She had finished her homework before dinner.',
      ],
      acceptApproximate: true,
      explanation: '"Ella había terminado" = She had finished. "sus deberes" = her homework. "antes de la cena" = before dinner.',
    },
    {
      id: 'b1-m2-l1-ex7',
      type: 'match',
      concept: 'past participle matching',
      difficulty: 2,
      prompt: 'Relaciona el verbo base con su past participle:',
      pairs: [
        { left: 'go', right: 'gone' },
        { left: 'see', right: 'seen' },
        { left: 'eat', right: 'eaten' },
        { left: 'take', right: 'taken' },
        { left: 'leave', right: 'left' },
        { left: 'write', right: 'written' },
      ],
      correctAnswer: 'go=gone, see=seen, eat=eaten, take=taken, leave=left, write=written',
      explanation: 'Estos son los past participles que se usan con "had". Recuerda que son la 3ª forma del verbo irregular.',
    },
    {
      id: 'b1-m2-l1-ex8',
      type: 'error_correction',
      concept: 'past perfect affirmative',
      difficulty: 4,
      prompt: 'Corrige el error: "I had went to the shop."',
      correctAnswer: 'I had gone to the shop.',
      acceptedAnswers: ['I had gone to the shop', 'I had gone to the shop.'],
      acceptApproximate: true,
      explanation: 'El past participle de "go" es "gone", no "went". Con "had" siempre usamos el participle: had gone.',
    },
    {
      id: 'b1-m2-l1-ex9',
      type: 'select_correct',
      concept: 'past perfect affirmative',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Para cuando llegué, ellos ya habían comido.',
      correctAnswer: 'By the time I arrived, they had eaten.',
      options: [
        'By the time I arrived, they had eaten.',
        'By the time I arrived, they have eaten.',
        'By the time I arrived, they had eat.',
        'By the time I arrived, they had eated.',
      ],
      explanation: 'Correcta: "By the time" + past simple (arrived) + past perfect (had eaten). "Have" es presente perfecto y "eat/eated" no son participles.',
    },
    {
      id: 'b1-m2-l1-ex10',
      type: 'listening',
      concept: 'past perfect affirmative listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Sarah habla de su viaje al museo: cuando llegó, la exposición ya había comenzado, pero el museo había abierto sus puertas horas antes. Había visto muchas obras de arte que nunca antes había visto.',
      listening: {
        audioText:
          "I visited the museum last Saturday. When I arrived at ten o'clock, the exhibition had already started. Actually, the museum had opened at nine in the morning, so it had been operating for an hour. I walked around and saw many paintings. Some of them I had never seen before. The artist had painted these works over ten years ago, and many people had visited the museum to see them.",
        questions: [
          {
            id: 'b1-m2-l1-ex10-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'What had already started when Sarah arrived?',
            correctAnswer: 'The exhibition',
            options: ['The exhibition', 'The museum', 'The painting class'],
            explanation: '"When I arrived at ten o\'clock, the exhibition had already started."',
          },
          {
            id: 'b1-m2-l1-ex10-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The museum had opened at nine in the morning.',
            correctAnswer: 'true',
            explanation: '"The museum had opened at nine in the morning."',
          },
          {
            id: 'b1-m2-l1-ex10-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'When were the paintings created?',
            correctAnswer: 'Over ten years ago',
            options: ['Over ten years ago', 'Last Saturday', 'Last month'],
            explanation: '"The artist had painted these works over ten years ago."',
          },
        ],
      },
    },
    {
      id: 'b1-m2-l1-ex11',
      type: 'writing',
      concept: 'past perfect affirmative writing',
      difficulty: 3,
      prompt: 'Escribile un email a un amigo/a contándole qué habías hecho antes de llegar a una cita importante (usá el past perfect afirmativo).',
      promptTranslation: 'Write an informal email to a friend about what you had done before arriving at an important appointment.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con "had + past participle" para describir acciones anteriores a la cita, manteniendo un registro informal.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Qué habías hecho antes de la cita', 'Cómo te habías preparado'],
      requiresOwnIdea: false,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m2-l1-ex12',
      type: 'speaking',
      concept: 'past perfect affirmative pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'When we arrived, they had already finished their homework.',
      explanation: 'Practicá la pronunciación de "had" (débil, suena casi como /əd/) y el enlace entre "had" y el past participle (finished).',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m2-l1-mt1',
      type: 'multiple_choice',
      concept: 'past perfect affirmative',
      difficulty: 2,
      prompt: 'Completa: "She ___ finished her homework before dinner."',
      promptTranslation: 'Ella había terminado sus deberes antes de la cena.',
      correctAnswer: 'had',
      options: ['had', 'have', 'has'],
      explanation: 'Acción anterior a otra en el pasado → "had" + participle. → She had finished her homework.',
    },
    {
      id: 'b1-m2-l1-mt2',
      type: 'fill_blank',
      concept: 'past perfect affirmative',
      difficulty: 3,
      prompt: 'Completa: "I had ___ (see) that film before."',
      promptTranslation: 'Había visto esa película antes.',
      correctAnswer: 'seen',
      acceptedAnswers: ['seen'],
      explanation: '"See" es irregular: see → saw → seen. El participle es "seen". → I had seen that film.',
    },
    {
      id: 'b1-m2-l1-mt3',
      type: 'error_correction',
      concept: 'past perfect affirmative',
      difficulty: 4,
      prompt: 'Corrige el error: "They had went home before we arrived."',
      correctAnswer: 'They had gone home before we arrived.',
      acceptedAnswers: [
        'They had gone home before we arrived',
        'They had gone home before we arrived.',
      ],
      acceptApproximate: true,
      explanation: 'El participle de "go" es "gone". → They had gone home. La acción de irse es anterior a nuestra llegada.',
    },
    {
      id: 'b1-m2-l1-mt4',
      type: 'true_false',
      concept: 'past perfect affirmative',
      difficulty: 3,
      prompt: 'En "When I arrived, the film had already started", la película empezó después de que yo llegara.',
      correctAnswer: 'false',
      explanation: 'Falso. Con "had started" (past perfect) la película empezó ANTES de mi llegada. El past perfect es la acción más antigua.',
    },
  ],
  reviewItems: ['b1-m1-l4'],
  prerequisites: ['b1-m1-l4'],
}
