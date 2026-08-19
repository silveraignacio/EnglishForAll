import type { Lesson } from '../../types'

export const lesson64Frequency: Lesson = {
  id: 'a1-m6-l4',
  moduleId: 'm6-time',
  order: 3,
  title: 'Adverbios de frecuencia',
  objective: 'Usar always, usually, often, sometimes, rarely y never y colocarlos correctamente en la frase.',
  explanation_es: `Los adverbios de frecuencia nos dicen CON QUÉ FRECUENCIA hacemos algo.

### Los adverbios

- always = siempre
- usually = normalmente, generalmente
- often = a menudo, con frecuencia
- sometimes = a veces
- rarely = raramente, rara vez
- never = nunca

### La posición: ANTES del verbo principal

En inglés, el adverbio de frecuencia va ANTES del verbo principal:
- I always get up at 7. = Siempre me levanto a las 7.
- We never eat meat. = Nunca comemos carne.
- I usually drink coffee. = Normalmente bebo café.

Ojo: esto es distinto del español. En español solemos decir "Me levanto siempre a las 7", pero en inglés el adverbio va delante del verbo.

### PERO: DESPUÉS del verbo "to be"

Con el verbo "to be" (am, is, are), el adverbio va DESPUÉS:
- She is always tired. = Ella siempre está cansada.
- I am never late. = Nunca llego tarde.

Regla para recordar: el adverbio va justo DETRÁS del verbo "to be" y justo DELANTE de los demás verbos.

### En las preguntas

En preguntas con do/does, el adverbio va entre el sujeto y el verbo:
- Do you often go to the gym? = ¿Vas a menudo al gimnasio?
- Does she sometimes cook? = ¿Ella cocina a veces?

### Otras posiciones

"sometimes" también puede ir al principio de la frase:
- Sometimes I eat pizza. = A veces como pizza.

Recuerda: los adverbios de frecuencia se usan con el Present Simple (rutinas y hábitos), que ya estudiaste en el módulo 5.`,
  examples: [
    { english: 'I always get up at 7.', spanish: 'Siempre me levanto a las 7.', note: 'El adverbio va ANTES del verbo principal: always get up.' },
    { english: 'She is always tired.', spanish: 'Ella siempre está cansada.', note: 'Con "to be", el adverbio va DESPUÉS: is always.' },
    { english: 'We never eat meat.', spanish: 'Nunca comemos carne.', note: 'never va antes del verbo: never eat.' },
    { english: 'I usually drink coffee.', spanish: 'Normalmente bebo café.', note: 'usually + verbo: usually drink.' },
    { english: 'I am never late.', spanish: 'Nunca llego tarde.', note: 'Con "am", el adverbio va después: am never.' },
    { english: 'Do you often go to the gym?', spanish: '¿Vas a menudo al gimnasio?', note: 'En preguntas: sujeto + adverbio + verbo.' },
    { english: 'Sometimes I eat pizza.', spanish: 'A veces como pizza.', note: '"sometimes" puede ir al principio de la frase.' },
  ],
  rule: `**Adverbios de frecuencia:**
- always (siempre), usually (normalmente), often (a menudo), sometimes (a veces), rarely (raramente), never (nunca).

**Posición:**
- ANTES del verbo principal: I always get up at 7. / We never eat meat.
- DESPUÉS del verbo "to be" (am/is/are): She is always tired. / I am never late.
- En preguntas (do/does): entre sujeto y verbo: Do you often go to the gym?
- "sometimes" también puede ir al principio: Sometimes I eat pizza.`,
  formation: {
    title: 'Cómo se colocan los adverbios de frecuencia',
    intro: 'Los adverbios de frecuencia (always, usually, often, sometimes, rarely, never) nos dicen con qué frecuencia hacemos algo. Su posición depende del verbo: antes del verbo principal y después del verbo "to be".',
    patterns: [
      {
        name: 'Antes del verbo principal',
        formula: 'Sujeto + adverbio de frecuencia + verbo principal',
        examples: [
          { english: 'I always get up at 7.', spanish: 'Siempre me levanto a las 7.' },
          { english: 'We never eat meat.', spanish: 'Nunca comemos carne.' },
          { english: 'I usually drink coffee.', spanish: 'Normalmente bebo café.' },
        ],
      },
      {
        name: 'Después del verbo "to be"',
        formula: 'Sujeto + to be (am/is/are) + adverbio de frecuencia',
        examples: [
          { english: 'She is always tired.', spanish: 'Ella siempre está cansada.' },
          { english: 'I am never late.', spanish: 'Nunca llego tarde.' },
        ],
        note: 'Con "to be" el adverbio va justo detrás del verbo: is always, am never.',
      },
      {
        name: 'En preguntas',
        formula: 'Do/Does + sujeto + adverbio + verbo?',
        examples: [
          { english: 'Do you often go to the gym?', spanish: '¿Vas a menudo al gimnasio?' },
          { english: 'Does she sometimes cook?', spanish: '¿Ella cocina a veces?' },
        ],
      },
      {
        name: '"Sometimes" al principio',
        formula: 'Sometimes + frase completa',
        examples: [
          { english: 'Sometimes I eat pizza.', spanish: 'A veces como pizza.' },
        ],
      },
    ],
    notes: [
      'La lista: always (100%) → usually → often → sometimes → rarely → never (0%).',
      'Con "never" no se usa otra negación: I never drink coffee (no "I never don\'t drink coffee").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I get up always at 7.', correct: '✅ I always get up at 7.', explanation: 'El adverbio va ANTES del verbo principal: always get up. (En español va después; en inglés no.)' },
    { wrong: '❌ She always is tired.', correct: '✅ She is always tired.', explanation: 'Con el verbo "to be", el adverbio va DESPUÉS: is always.' },
    { wrong: '❌ I never am late.', correct: '✅ I am never late.', explanation: 'Con "to be", el adverbio va después del verbo: am never. (Nunca "never am".)' },
    { wrong: '❌ I never drink not coffee.', correct: '✅ I never drink coffee.', explanation: 'Con "never" (nunca) no se usa otra negación. La frase ya es negativa.' },
  ],
  vocabulary: [
    { word: 'always', translation_es: 'siempre', level: 'A1', category: 'frequency', partOfSpeech: 'adverb', example: 'I always get up at 7.', exampleTranslation: 'Siempre me levanto a las 7.' },
    { word: 'usually', translation_es: 'normalmente', level: 'A1', category: 'frequency', partOfSpeech: 'adverb', example: 'I usually drink coffee.', exampleTranslation: 'Normalmente bebo café.' },
    { word: 'often', translation_es: 'a menudo', level: 'A1', category: 'frequency', partOfSpeech: 'adverb', example: 'We often go to the cinema.', exampleTranslation: 'Vamos a menudo al cine.' },
    { word: 'sometimes', translation_es: 'a veces', level: 'A1', category: 'frequency', partOfSpeech: 'adverb', example: 'Sometimes I eat pizza.', exampleTranslation: 'A veces como pizza.' },
    { word: 'rarely', translation_es: 'raramente', level: 'A1', category: 'frequency', partOfSpeech: 'adverb', example: 'He rarely watches TV.', exampleTranslation: 'Él raramente ve la tele.' },
    { word: 'never', translation_es: 'nunca', level: 'A1', category: 'frequency', partOfSpeech: 'adverb', example: 'We never eat meat.', exampleTranslation: 'Nunca comemos carne.' },
  ],
  grammarPoints: [
    {
      id: 'gp-frequency-adverb-position',
      level: 'A1',
      name: 'Position of frequency adverbs',
      explanation_es: 'Los adverbios de frecuencia van ANTES del verbo principal, pero DESPUÉS del verbo "to be" (am/is/are). En preguntas con do/does van entre el sujeto y el verbo.',
      formula: 'Subject + adverb + main verb | Subject + to be + adverb | Do/Does + subject + adverb + verb?',
      examples: ['I always get up at 7.', 'She is always tired.', 'Do you often go to the gym?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m6-l4-ex1',
      type: 'reorder',
      concept: 'frequency adverbs - before main verb',
      difficulty: 2,
      prompt: 'Ordena: I / always / get up / at 7',
      promptTranslation: 'Siempre me levanto a las 7.',
      correctAnswer: 'I always get up at 7.',
      words: ['I', 'always', 'get up', 'at 7'],
      explanation: 'El adverbio va ANTES del verbo principal: I always get up at 7.',
    },
    {
      id: 'a1-m6-l4-ex2',
      type: 'reorder',
      concept: 'frequency adverbs - after to be',
      difficulty: 2,
      prompt: 'Ordena: She / is / always / tired',
      promptTranslation: 'Ella siempre está cansada.',
      correctAnswer: 'She is always tired.',
      words: ['She', 'is', 'always', 'tired'],
      explanation: 'Con "to be", el adverbio va DESPUÉS: She is always tired.',
    },
    {
      id: 'a1-m6-l4-ex3',
      type: 'multiple_choice',
      concept: 'frequency adverbs - never position',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'We never eat meat.',
      options: ['We never eat meat.', 'We eat never meat.', 'Never we eat meat.'],
      explanation: 'El adverbio va antes del verbo principal: We never eat meat.',
    },
    {
      id: 'a1-m6-l4-ex4',
      type: 'multiple_choice',
      concept: 'frequency adverbs - after to be',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'She is always tired.',
      options: ['She is always tired.', 'She always is tired.', 'She always tired.'],
      explanation: 'Con "to be", el adverbio va después del verbo: She is always tired.',
    },
    {
      id: 'a1-m6-l4-ex5',
      type: 'fill_blank',
      concept: 'frequency adverbs - always',
      difficulty: 2,
      prompt: 'Completa: "I ___ drink coffee in the morning." (100%)',
      promptTranslation: 'Siempre bebo café por la mañana.',
      correctAnswer: 'always',
      acceptedAnswers: ['Always'],
      explanation: '"Always" (siempre) expresa el 100% y va antes del verbo: I always drink...',
    },
    {
      id: 'a1-m6-l4-ex6',
      type: 'fill_blank',
      concept: 'frequency adverbs - never after to be',
      difficulty: 3,
      prompt: 'Completa: "I am ___ late." (0%)',
      promptTranslation: 'Nunca llego tarde.',
      correctAnswer: 'never',
      acceptedAnswers: ['Never'],
      explanation: '"Never" (nunca) va DESPUÉS del verbo "to be": I am never late.',
    },
    {
      id: 'a1-m6-l4-ex7',
      type: 'true_false',
      concept: 'frequency adverbs - position rule',
      difficulty: 3,
      prompt: 'Frase correcta: "I get up always at 7."',
      promptTranslation: 'Me levanto siempre a las 7.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Incorrecto. El adverbio va ANTES del verbo: I always get up at 7.',
    },
    {
      id: 'a1-m6-l4-ex8',
      type: 'translate',
      concept: 'frequency adverbs - never',
      difficulty: 3,
      prompt: 'Traduce: "Ella nunca bebe café."',
      correctAnswer: 'She never drinks coffee.',
      acceptedAnswers: ['She never drinks coffee', 'she never drinks coffee.', 'She never drink coffee.'],
      acceptApproximate: true,
      explanation: 'never + verbo (con she, añade -s): She never drinks coffee.',
    },
    {
      id: 'a1-m6-l4-ex9',
      type: 'translate',
      concept: 'frequency adverbs - often',
      difficulty: 3,
      prompt: 'Traduce: "A menudo voy al gimnasio."',
      correctAnswer: 'I often go to the gym.',
      acceptedAnswers: ['I often go to the gym', 'i often go to the gym.', 'I go to the gym often.'],
      acceptApproximate: true,
      explanation: 'often va antes del verbo: I often go to the gym. (La forma "I go to the gym often" también es aceptable en inglés hablado.)',
    },
    {
      id: 'a1-m6-l4-ex10',
      type: 'multiple_choice',
      concept: 'frequency adverbs - in questions',
      difficulty: 3,
      prompt: 'Completa la pregunta: "Do you ___ go to the gym?"',
      promptTranslation: '¿Vas a menudo al gimnasio?',
      correctAnswer: 'often',
      options: ['often', 'always', 'oftenly'],
      explanation: 'En preguntas, el adverbio va entre sujeto y verbo: Do you often go...? ("oftenly" no existe.)',
    },
  ],
  miniTest: [
    {
      id: 'a1-m6-l4-mt1',
      type: 'reorder',
      concept: 'frequency adverbs - before main verb',
      difficulty: 2,
      prompt: 'Ordena: We / never / eat / meat',
      promptTranslation: 'Nunca comemos carne.',
      correctAnswer: 'We never eat meat.',
      words: ['We', 'never', 'eat', 'meat'],
      explanation: 'El adverbio va antes del verbo: We never eat meat.',
    },
    {
      id: 'a1-m6-l4-mt2',
      type: 'multiple_choice',
      concept: 'frequency adverbs - after to be',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'I am never late.',
      options: ['I am never late.', 'I never am late.', 'I am late never.'],
      explanation: 'Con "to be", el adverbio va después del verbo: I am never late.',
    },
    {
      id: 'a1-m6-l4-mt3',
      type: 'fill_blank',
      concept: 'frequency adverbs - usually',
      difficulty: 2,
      prompt: 'Completa: "I ___ get up at seven." (normalmente)',
      promptTranslation: 'Normalmente me levanto a las siete.',
      correctAnswer: 'usually',
      acceptedAnswers: ['Usually'],
      explanation: '"Usually" (normalmente) va antes del verbo: I usually get up at seven.',
    },
    {
      id: 'a1-m6-l4-mt4',
      type: 'true_false',
      concept: 'frequency adverbs - after to be rule',
      difficulty: 3,
      prompt: 'Frase correcta: "He is often tired."',
      promptTranslation: 'Él está a menudo cansado.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE'],
      explanation: 'Correcto. Con "to be" el adverbio va después: He is often tired.',
    },
    {
      id: 'a1-m6-l4-mt5',
      type: 'translate',
      concept: 'frequency adverbs - always',
      difficulty: 3,
      prompt: 'Traduce: "Siempre desayuno a las 8."',
      correctAnswer: 'I always have breakfast at 8.',
      acceptedAnswers: ['I always have breakfast at 8', 'i always have breakfast at 8.', 'I always have breakfast at 8 o\'clock.'],
      acceptApproximate: true,
      explanation: 'always + verbo: I always have breakfast at 8. (have breakfast = desayunar).',
    },
  ],
  reviewItems: ['a1-m6-l3'],
  prerequisites: ['a1-m6-l3'],
}
