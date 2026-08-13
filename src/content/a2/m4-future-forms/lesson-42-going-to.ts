import type { Lesson } from '../../types'

export const lesson42GoingTo: Lesson = {
  id: 'a2-m4-l2',
  moduleId: 'm4-future-forms',
  order: 1,
  title: '"Going to" (repaso y consolidación)',
  objective: 'Repasar y consolidar "going to" para planes e intenciones y para predicciones con evidencia.',
  explanation_es: `En el nivel A1 viste "going to" para hablar de planes. Ahora lo vamos a consolidar y a ampliar un poco.

"Going to" se usa para:

1. Planes e intenciones (decisiones que ya tomamos antes):
   I am going to study medicine. = Voy a estudiar medicina.
   They are going to move next month. = Ellos se van a mudar el próximo mes.

2. Predicciones con evidencia (vemos señales de que algo va a pasar):
   Look at those clouds! It is going to rain. = ¡Mira esas nubes! Va a llover.

La estructura necesita SIEMPRE el verbo "to be":
Sujeto + to be (am/is/are) + going to + verbo

- I am going to... (I'm going to...)
- He/She/It is going to... (He's going to...)
- You/We/They are going to... (We're going to...)

Ojo con la pronunciación: en el habla rápida "going to" suena como "gonna", pero en escritura formal siempre escribimos "going to".

Diferencia clave con "will": con "will" la decisión se toma en el momento; con "going to" ya estaba planeada. Esto lo veremos con detalle en la próxima lección.`,
  examples: [
    { english: 'I am going to study medicine.', spanish: 'Voy a estudiar medicina.', note: 'plan o intención personal' },
    { english: 'Look at those clouds! It is going to rain.', spanish: '¡Mira esas nubes! Va a llover.', note: 'predicción con evidencia: vemos las nubes' },
    { english: 'They are going to move next month.', spanish: 'Ellos se van a mudar el próximo mes.', note: 'plan ya decidido' },
    { english: "We're going to visit our grandparents.", spanish: 'Vamos a visitar a nuestros abuelos.' },
    { english: "She's going to start a new job.", spanish: 'Ella va a empezar un trabajo nuevo.' },
    { english: 'He is going to buy a new car.', spanish: 'Él va a comprar un coche nuevo.', note: 'intención decidida' },
  ],
  rule: `Sujeto + to be (am/is/are) + going to + verbo
- I am going to travel. (I'm going to travel.)
- She is going to study. (She's going to study.)
- They are going to move. (They're going to move.)

Usos:
- Planes e intenciones: I am going to study medicine.
- Predicciones con evidencia: It is going to rain. (porque hay nubes)

Cuidado: nunca omitas "to be":
✅ I am going to...  ❌ I going to...`,
  commonMistakes: [
    { wrong: '❌ I going to study.', correct: '✅ I am going to study.', explanation: 'Siempre necesitamos "to be" antes de "going to": I am going to.' },
    { wrong: "❌ I'm go to the gym.", correct: "✅ I'm going to go to the gym.", explanation: 'Cuando el verbo es "go", usamos "going to go": voy a ir.' },
    { wrong: '❌ She are going to travel.', correct: '✅ She is going to travel.', explanation: 'Con "she" usamos "is", no "are".' },
  ],
  vocabulary: [
    { word: 'plan', translation_es: 'plan', level: 'A1', category: 'future', partOfSpeech: 'noun', example: 'I have a plan for Saturday.', exampleTranslation: 'Tengo un plan para el sábado.' },
    { word: 'intention', translation_es: 'intención', level: 'A2', category: 'future', partOfSpeech: 'noun', example: 'My intention is to study English.', exampleTranslation: 'Mi intención es estudiar inglés.' },
    { word: 'evidence', translation_es: 'evidencia, señal', level: 'A2', category: 'future', partOfSpeech: 'noun', example: 'The clouds are evidence that it will rain.', exampleTranslation: 'Las nubes son señal de que va a llover.' },
    { word: 'to move', translation_es: 'mudarse', level: 'A2', category: 'future', partOfSpeech: 'verb', example: 'They are going to move to Madrid.', exampleTranslation: 'Se van a mudar a Madrid.' },
    { word: 'to visit', translation_es: 'visitar', level: 'A1', category: 'future', partOfSpeech: 'verb', example: "We're going to visit London.", exampleTranslation: 'Vamos a visitar Londres.' },
    { word: 'next month', translation_es: 'el próximo mes', level: 'A1', category: 'time', partOfSpeech: 'phrase', example: 'They are going to move next month.', exampleTranslation: 'Se van a mudar el próximo mes.' },
  ],
  grammarPoints: [
    {
      id: 'gp-going-to',
      level: 'A2',
      name: 'Going to — future plans & predictions',
      explanation_es: '"Going to" expresa planes e intenciones ya decididas y predicciones basadas en evidencia visible. Siempre lleva "to be".',
      formula: 'Sujeto + to be (am/is/are) + going to + verbo',
      examples: ['I am going to study medicine.', 'It is going to rain.', 'They are going to move next month.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m4-l2-ex1',
      type: 'multiple_choice',
      concept: 'going to - to be',
      difficulty: 1,
      prompt: 'Completa: "I ___ going to study medicine."',
      promptTranslation: 'Voy a estudiar medicina.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am": I am going to study medicine.',
    },
    {
      id: 'a2-m4-l2-ex2',
      type: 'fill_blank',
      concept: 'going to - verb',
      difficulty: 1,
      prompt: 'Completa con el verbo: "They are going to ___ next month." (mudarse)',
      promptTranslation: 'Se van a mudar el próximo mes.',
      correctAnswer: 'move',
      acceptedAnswers: ['move', 'move to'],
      explanation: '"To move" = mudarse. → They are going to move next month.',
    },
    {
      id: 'a2-m4-l2-ex3',
      type: 'multiple_choice',
      concept: 'going to - prediction with evidence',
      difficulty: 2,
      prompt: 'Miras las nubes y dices: "It ___ going to rain."',
      promptTranslation: 'Va a llover.',
      correctAnswer: 'is',
      options: ['is', 'am', 'are'],
      explanation: 'Con "it" usamos "is". → It is going to rain. (Hay evidencia: las nubes.)',
    },
    {
      id: 'a2-m4-l2-ex4',
      type: 'true_false',
      concept: 'going to - plans vs predictions',
      difficulty: 2,
      prompt: '"Look at those clouds! It is going to rain." es una predicción con evidencia.',
      correctAnswer: 'true',
      explanation: 'Verdadero. Vemos las nubes (evidencia) y por eso predecimos que va a llover.',
    },
    {
      id: 'a2-m4-l2-ex5',
      type: 'reorder',
      concept: 'going to - sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras: buy / a / car / to / going / he / new / is',
      promptTranslation: 'Él va a comprar un coche nuevo.',
      correctAnswer: 'He is going to buy a new car.',
      words: ['He', 'is', 'going', 'to', 'buy', 'a', 'new', 'car'],
      explanation: 'Orden: Sujeto + to be + going to + verbo + objeto: He is going to buy a new car.',
    },
    {
      id: 'a2-m4-l2-ex6',
      type: 'translate',
      concept: 'going to - translate',
      difficulty: 3,
      prompt: 'Traduce: "Ella va a empezar un trabajo nuevo."',
      correctAnswer: "She's going to start a new job.",
      acceptedAnswers: ['She is going to start a new job', "She's going to start a new job", 'She is going to start a new job.', "She's going to start a new job."],
      acceptApproximate: true,
      explanation: '"Ella va a" → She is going to (o She\'s going to). + start a new job.',
    },
    {
      id: 'a2-m4-l2-ex7',
      type: 'error_correction',
      concept: 'going to - to be',
      difficulty: 3,
      prompt: 'Encuentra el error: "I going to travel to Peru."',
      correctAnswer: 'I am going to travel to Peru.',
      acceptedAnswers: ['I am going to travel to Peru', "I'm going to travel to Peru", "I'm going to travel to Peru.", 'I am going to travel to Peru.'],
      acceptApproximate: true,
      explanation: 'Nunca olvides "to be": I am going to travel to Peru.',
    },
    {
      id: 'a2-m4-l2-ex8',
      type: 'match',
      concept: 'going to - subjects',
      difficulty: 2,
      prompt: 'Relaciona cada sujeto con la forma correcta de "to be":',
      pairs: [
        { left: 'I', right: 'am going to' },
        { left: 'She', right: 'is going to' },
        { left: 'It', right: 'is going to' },
        { left: 'They', right: 'are going to' },
        { left: 'We', right: 'are going to' },
        { left: 'You', right: 'are going to' },
      ],
      correctAnswer: 'I=am going to, She=is going to, It=is going to, They=are going to, We=are going to, You=are going to',
      explanation: 'I → am; he/she/it → is; you/we/they → are.',
    },
    {
      id: 'a2-m4-l2-ex9',
      type: 'select_correct',
      concept: 'going to - correct form',
      difficulty: 3,
      prompt: '¿Cuál de estas frases es correcta?',
      correctAnswer: "We're going to visit our grandparents.",
      options: ["We're going to visit our grandparents.", 'We going to visit our grandparents.', "We're go to visit our grandparents."],
      explanation: 'Necesitamos "to be" (are) + going to + verbo: We\'re going to visit our grandparents.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m4-l2-mt1',
      type: 'fill_blank',
      concept: 'going to - to be',
      difficulty: 1,
      prompt: 'Completa: "She ___ going to start a new job."',
      promptTranslation: 'Ella va a empezar un trabajo nuevo.',
      correctAnswer: 'is',
      acceptedAnswers: ["'s"],
      explanation: 'Con "she" usamos "is" (o la contracción \'s): She is going to start a new job.',
    },
    {
      id: 'a2-m4-l2-mt2',
      type: 'multiple_choice',
      concept: 'going to - plans',
      difficulty: 2,
      prompt: '¿Para qué usamos "going to" con "Look at those clouds! It ___ going to rain."?',
      correctAnswer: 'Predicción con evidencia',
      options: ['Decisión espontánea', 'Predicción con evidencia', 'Promesa'],
      explanation: 'Vemos las nubes (evidencia) y predecimos: It is going to rain.',
    },
    {
      id: 'a2-m4-l2-mt3',
      type: 'translate',
      concept: 'going to - translate',
      difficulty: 3,
      prompt: 'Traduce: "Van a visitar Londres." (ellos)',
      correctAnswer: 'They are going to visit London.',
      acceptedAnswers: ['They are going to visit London', "They're going to visit London", "They're going to visit London.", 'They are going to visit London.'],
      acceptApproximate: true,
      explanation: '"Ellos van a" → They are going to + visit London.',
    },
    {
      id: 'a2-m4-l2-mt4',
      type: 'error_correction',
      concept: 'going to - no "to be"',
      difficulty: 3,
      prompt: 'Corrige el error: "She going to buy a house."',
      correctAnswer: 'She is going to buy a house.',
      acceptedAnswers: ['She is going to buy a house', "She's going to buy a house", "She's going to buy a house.", 'She is going to buy a house.'],
      acceptApproximate: true,
      explanation: 'Falta "to be": She is going to buy a house.',
    },
    {
      id: 'a2-m4-l2-mt5',
      type: 'reorder',
      concept: 'going to - negative',
      difficulty: 4,
      prompt: 'Ordena las palabras: not / I / go / am / out / going / to / tonight',
      promptTranslation: 'No voy a salir esta noche.',
      correctAnswer: "I'm not going to go out tonight.",
      words: ["I'm", 'not', 'going', 'to', 'go', 'out', 'tonight'],
      explanation: 'Negativa: sujeto + to be + not + going to + verbo: I\'m not going to go out tonight.',
    },
  ],
  reviewItems: ['a2-m4-l1'],
  prerequisites: ['a2-m4-l1'],
}
