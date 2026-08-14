import type { Lesson } from '../../types'

export const lesson114SoSuchTooEnough: Lesson = {
  id: 'b1-m11-l4',
  moduleId: 'm11-linking-words',
  order: 3,
  title: 'so / such...that + too / enough (intensificadores)',
  objective: 'Intensificar con so...that y such...that, y expresar exceso o suficiencia con too y enough.',
  explanation_es: `Estas estructuras sirven para dar énfasis a un adjetivo o sustantivo.

1) so + adjetivo + that = tan + adjetivo + que.
- The film was so boring that I left. = La película era tan aburrida que me fui.

2) such a/an + adjetivo + sustantivo + that = un/una tan + adjetivo + sustantivo + que.
- It was such a good film that I watched it twice. = Era una película tan buena que la vi dos veces.

Diferencia: "so" va con ADJETIVO solo (so boring). "such a/an" va con ADJETIVO + SUSTANTIVO (such a good film).
- ❌ It was so good film → ✅ It was such a good film.

3) too + adjetivo + to = demasiado + adjetivo + para.
- The coffee is too hot to drink. = El café está demasiado caliente para beberlo.

4) adjetivo + enough + to = lo bastante/suficientemente + adjetivo + para.
- She is old enough to drive. = Tiene edad suficiente para conducir.

¡OJO con la posición de "enough"! Va DESPUÉS del adjetivo:
- ❌ enough hot → ✅ hot enough.

Resumen de posiciones:
- too + adjetivo: too hot.
- adjetivo + enough: hot enough.
- so + adjetivo: so boring.
- such a/an + adjetivo + sustantivo: such a good film.`,
  examples: [
    { english: 'The film was so boring that I left.', spanish: 'La película era tan aburrida que me fui.', note: 'so + adjetivo + that.' },
    { english: 'It was such a good film that I watched it twice.', spanish: 'Era una película tan buena que la vi dos veces.', note: 'such a/an + adjetivo + sustantivo + that.' },
    { english: 'The coffee is too hot to drink.', spanish: 'El café está demasiado caliente para beberlo.', note: 'too + adjetivo + to.' },
    { english: 'She is old enough to drive.', spanish: 'Tiene edad suficiente para conducir.', note: 'adjetivo + enough + to.' },
    { english: 'The music was so loud that we couldn\'t talk.', spanish: 'La música estaba tan alta que no podíamos hablar.' },
  ],
  rule: `- so + adjetivo + that: The film was so boring that I left.
- such a/an + adjetivo + sustantivo + that: It was such a good film that...
- too + adjetivo + to: too hot to drink.
- adjetivo + enough + to: old enough to drive. ("enough" va DESPUÉS del adjetivo.)
- so + adjetivo (sin sustantivo); such a/an + adjetivo + sustantivo.`,
  commonMistakes: [
    { wrong: '❌ It was so good film that I watched it twice.', correct: '✅ It was such a good film that I watched it twice.', explanation: '"so" acompaña a un adjetivo solo (so good). Si hay un sustantivo contable singular (film), usamos "such a/an".' },
    { wrong: '❌ The coffee is enough hot to drink.', correct: '✅ The coffee is hot enough to drink.', explanation: '"enough" va DESPUÉS del adjetivo: hot enough.' },
    { wrong: '❌ The music was such loud that...', correct: '✅ The music was so loud that...', explanation: '"loud" es un adjetivo solo (sin sustantivo), así que usamos "so", no "such".' },
    { wrong: '❌ She is too young enough to drive.', correct: '✅ She is too young to drive. / She is old enough to drive.', explanation: '"too" y "enough" no se usan juntos; son ideas opuestas (exceso vs suficiencia).' },
  ],
  vocabulary: [
    { word: 'enough', translation_es: 'suficiente, bastante', level: 'B1', category: 'adverbs', partOfSpeech: 'adverb', example: 'The water is warm enough to swim.', exampleTranslation: 'El agua está lo bastante caliente para nadar.' },
    { word: 'too', translation_es: 'demasiado', level: 'B1', category: 'adverbs', partOfSpeech: 'adverb', example: 'The suitcase is too heavy to carry.', exampleTranslation: 'La maleta es demasiado pesada para llevarla.' },
    { word: 'so ... that', translation_es: 'tan ... que', level: 'B1', category: 'linking words', partOfSpeech: 'phrase', example: 'It was so cold that I wore two jackets.', exampleTranslation: 'Hacía tanto frío que me puse dos chaquetas.' },
  ],
  grammarPoints: [
    {
      id: 'gp-so-such-too-enough',
      level: 'B1',
      name: 'so/such...that + too/enough',
      explanation_es: 'so + adjetivo + that y such a/an + adjetivo + sustantivo + that dan énfasis con consecuencia; too + adjetivo indica exceso; adjetivo + enough indica suficiencia.',
      formula: 'so + adj + that | such a/an + adj + noun + that | too + adj + to | adj + enough + to',
      examples: ['The film was so boring that I left.', 'It was such a good film that I watched it twice.', 'The coffee is too hot to drink.', 'She is old enough to drive.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m11-l4-ex1',
      type: 'multiple_choice',
      concept: 'so + adjective + that',
      difficulty: 1,
      prompt: 'Completa: "The film was ___ boring that I left."',
      promptTranslation: 'La película era tan aburrida que me fui.',
      correctAnswer: 'so',
      options: ['so', 'such', 'too'],
      explanation: '"so" + adjetivo solo (boring) + that.',
    },
    {
      id: 'b1-m11-l4-ex2',
      type: 'multiple_choice',
      concept: 'such a/an + noun',
      difficulty: 2,
      prompt: 'Completa: "It was ___ a good film that I watched it twice."',
      promptTranslation: 'Era una película tan buena que la vi dos veces.',
      correctAnswer: 'such',
      options: ['such', 'so', 'too'],
      explanation: 'Hay sustantivo (a good film) → "such a/an".',
    },
    {
      id: 'b1-m11-l4-ex3',
      type: 'fill_blank',
      concept: 'too + adjective + to',
      difficulty: 2,
      prompt: 'Completa: "The coffee is ___ hot to drink."',
      promptTranslation: 'El café está demasiado caliente para beberlo.',
      correctAnswer: 'too',
      acceptedAnswers: ['too', 'Too'],
      explanation: '"too" + adjetivo expresa exceso: demasiado caliente para beberlo.',
    },
    {
      id: 'b1-m11-l4-ex4',
      type: 'true_false',
      concept: 'enough position after adjective',
      difficulty: 2,
      prompt: '"Enough" va después del adjetivo: "hot enough".',
      promptTranslation: '"Enough" goes after the adjective: "hot enough".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. La posición es adjetivo + enough: hot enough, old enough.',
    },
    {
      id: 'b1-m11-l4-ex5',
      type: 'error_correction',
      concept: 'such a + noun',
      difficulty: 3,
      prompt: 'Corrige el error: "It was so good film that I watched it twice."',
      promptTranslation: 'Era una película tan buena que la vi dos veces.',
      correctAnswer: 'It was such a good film that I watched it twice.',
      acceptedAnswers: ['It was such a good film that I watched it twice', 'It was such a good film that I watched it twice.', 'it was such a good film that i watched it twice'],
      acceptApproximate: true,
      explanation: 'Hay un sustantivo singular contable (a good film) → "such a/an": such a good film.',
    },
    {
      id: 'b1-m11-l4-ex6',
      type: 'translate',
      concept: 'enough + to',
      difficulty: 3,
      prompt: 'Traduce: "Tiene edad suficiente para conducir."',
      promptTranslation: 'She is old enough to drive.',
      correctAnswer: 'She is old enough to drive.',
      acceptedAnswers: ['She is old enough to drive', 'She is old enough to drive.', 'she is old enough to drive'],
      acceptApproximate: true,
      explanation: '"edad suficiente" = old enough. "enough" va después del adjetivo: old enough to drive.',
    },
    {
      id: 'b1-m11-l4-ex7',
      type: 'reorder',
      concept: 'so + adjective + that',
      difficulty: 3,
      prompt: 'Ordena las palabras: loud / that / was / couldn\'t / so / we / music / the / talk',
      promptTranslation: 'La música estaba tan alta que no podíamos hablar.',
      correctAnswer: 'The music was so loud that we couldn\'t talk.',
      words: ['The', 'music', 'was', 'so', 'loud', 'that', 'we', "couldn't", 'talk'],
      explanation: 'Orden: sujeto + was + so + adjetivo + that + oración. → The music was so loud that we couldn\'t talk.',
    },
    {
      id: 'b1-m11-l4-ex8',
      type: 'match',
      concept: 'too/enough/so/such matching',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su traducción.',
      promptTranslation: 'Match each sentence with its translation.',
      correctAnswer: 'The coffee is too hot to drink.=El café está demasiado caliente para beberlo.; She is old enough to drive.=Tiene edad suficiente para conducir.; The film was so boring that I left.=La película era tan aburrida que me fui.; It was such a good film that I watched it twice.=Era una película tan buena que la vi dos veces.',
      pairs: [
        { left: 'The coffee is too hot to drink.', right: 'El café está demasiado caliente para beberlo.' },
        { left: 'She is old enough to drive.', right: 'Tiene edad suficiente para conducir.' },
        { left: 'The film was so boring that I left.', right: 'La película era tan aburrida que me fui.' },
        { left: 'It was such a good film that I watched it twice.', right: 'Era una película tan buena que la vi dos veces.' },
      ],
      explanation: 'too = exceso; enough = suficiencia; so + adjetivo; such a/an + adjetivo + sustantivo.',
    },
    {
      id: 'b1-m11-l4-ex9',
      type: 'multiple_choice',
      concept: 'too vs enough',
      difficulty: 4,
      prompt: 'Completa: "He is ___ young to vote. He is only 16."',
      promptTranslation: 'Es demasiado joven para votar. Solo tiene 16 años.',
      correctAnswer: 'too',
      options: ['too', 'enough', 'so'],
      explanation: 'Tiene 16 años, así que es un EXCESO de juventud: too young to vote.',
    },
    {
      id: 'b1-m11-l4-ex10',
      type: 'fill_blank',
      concept: 'such a/an + noun',
      difficulty: 4,
      prompt: 'Completa: "They were ___ friendly people that we stayed longer."',
      promptTranslation: 'Eran personas tan amables que nos quedamos más tiempo.',
      correctAnswer: 'such',
      acceptedAnswers: ['such', 'Such'],
      explanation: 'Con sustantivo plural "friendly people" usamos "such" (sin "a"): such friendly people.',
    },
    {
      id: 'b1-m11-l4-ex11',
      type: 'listening',
      concept: 'so/such/too/enough listening comprehension',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Una persona describe su experiencia en un restaurante: la comida estaba tan buena que pidió más. El camarero fue tan amable que dejó una buena propina. El lugar era demasiado ruidoso, pero la experiencia fue suficientemente buena como para volver.',
      listening: {
        audioText:
          "I went to a new restaurant yesterday. The food was so delicious that I ordered more. The waiter was such a friendly person that I left him a good tip. The restaurant was too noisy to have a quiet conversation, however. The prices were expensive enough that it\'s not a place for everyday visits. Despite that, it was such a wonderful experience that I\'ll definitely go back again soon.",
        questions: [
          {
            id: 'b1-m11-l4-ex11-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'What did the person think about the food?',
            correctAnswer: 'It was so delicious that they ordered more',
            options: ['It was so delicious that they ordered more', 'It was bad', 'It was not enough'],
            explanation: '"The food was so delicious that I ordered more."',
          },
          {
            id: 'b1-m11-l4-ex11-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'El camarero fue desagradable.',
            correctAnswer: 'false',
            explanation: '"The waiter was such a friendly person"',
          },
          {
            id: 'b1-m11-l4-ex11-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What was a problem with the restaurant?',
            correctAnswer: 'It was too noisy to have a quiet conversation',
            options: ['It was too noisy to have a quiet conversation', 'The food was bad', 'The waiter was unfriendly'],
            explanation: '"The restaurant was too noisy to have a quiet conversation"',
          },
        ],
      },
    },
    {
      id: 'b1-m11-l4-ex12',
      type: 'writing',
      concept: 'so/such/too/enough writing',
      difficulty: 3,
      prompt: 'Describí un lugar que visitaste o una persona que conoces. Usá so/such para dar énfasis y too/enough para explicar qué era posible o imposible hacer.',
      promptTranslation: 'Describe a place you visited or a person you know using intensifiers.',
      correctAnswer: '',
      explanation: 'Un buen texto usa so/such para describir atributos con énfasis, y too/enough para explicar consecuencias de esas cualidades.',
      taskType: 'article',
      targetReader: 'people interested in travel or personal stories',
      register: 'informal',
      contentPoints: ['Una descripción enfática del lugar o persona usando so/such', 'Lo que pudiste o no pudiste hacer por las características del lugar'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m11-l4-ex13',
      type: 'speaking',
      concept: 'so/such/too/enough pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'The hotel was so expensive that I could only stay for one night.',
      explanation: 'Practicá la pronunciación de "so expensive" (/soʊ ɪkˈspɛnsɪv/) y la entonación de una consecuencia introducida por "that".',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m11-l4-mt1',
      type: 'multiple_choice',
      concept: 'such a + noun',
      difficulty: 1,
      prompt: 'Completa: "It was ___ a beautiful day that we went to the beach."',
      promptTranslation: 'Era un día tan bonito que fuimos a la playa.',
      correctAnswer: 'such',
      options: ['such', 'so', 'too'],
      explanation: 'Hay un sustantivo (a beautiful day) → such a.',
    },
    {
      id: 'b1-m11-l4-mt2',
      type: 'fill_blank',
      concept: 'adjective + enough',
      difficulty: 2,
      prompt: 'Completa: "The room is warm ___ to sleep."',
      promptTranslation: 'La habitación está lo bastante caliente para dormir.',
      correctAnswer: 'enough',
      acceptedAnswers: ['enough', 'Enough'],
      explanation: '"enough" va después del adjetivo: warm enough to sleep.',
    },
    {
      id: 'b1-m11-l4-mt3',
      type: 'error_correction',
      concept: 'enough position',
      difficulty: 3,
      prompt: 'Corrige el error: "The water is enough cold to swim."',
      promptTranslation: 'El agua está lo bastante fría para nadar.',
      correctAnswer: 'The water is cold enough to swim.',
      acceptedAnswers: ['The water is cold enough to swim', 'The water is cold enough to swim.', 'the water is cold enough to swim'],
      acceptApproximate: true,
      explanation: '"enough" va DESPUÉS del adjetivo: cold enough.',
    },
    {
      id: 'b1-m11-l4-mt4',
      type: 'translate',
      concept: 'too + adjective',
      difficulty: 3,
      prompt: 'Traduce: "El café está demasiado caliente para beberlo."',
      promptTranslation: 'The coffee is too hot to drink.',
      correctAnswer: 'The coffee is too hot to drink.',
      acceptedAnswers: ['The coffee is too hot to drink', 'The coffee is too hot to drink.', 'the coffee is too hot to drink'],
      acceptApproximate: true,
      explanation: '"demasiado caliente" = too hot; finalidad = to drink.',
    },
    {
      id: 'b1-m11-l4-mt5',
      type: 'multiple_choice',
      concept: 'which sentence is correct',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'The bag was so heavy that I couldn\'t carry it.',
      options: ['The bag was so heavy that I couldn\'t carry it.', 'The bag was such heavy that I couldn\'t carry it.', 'The bag was enough heavy that I couldn\'t carry it.'],
      explanation: '"heavy" es un adjetivo sin sustantivo → so heavy. "such" necesita un sustantivo y "enough" no introduce "that" de esta forma.',
    },
  ],
  reviewItems: ['b1-m11-l3'],
  prerequisites: ['b1-m11-l3'],
}
