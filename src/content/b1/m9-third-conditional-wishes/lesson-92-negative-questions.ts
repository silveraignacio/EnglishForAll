import type { Lesson } from '../../types'

export const lesson92NegativeQuestions: Lesson = {
  id: 'b1-m9-l2',
  moduleId: 'm9-third-conditional-wishes',
  order: 1,
  title: 'Tercer condicional: negativos y preguntas',
  objective: 'Formar negativos (hadn\'t + participio, wouldn\'t have) y preguntas (Would you have...?) del tercer condicional.',
  explanation_es: `En esta lección vemos las formas negativas y las preguntas del tercer condicional.

1) Negativa en la parte de "if": hadn't + participio
- If you hadn't helped me, I wouldn't have finished. = Si no me hubieras ayudado, no habría terminado.

2) Negativa en la consecuencia: wouldn't have + participio
- I wouldn't have bought it if it had been more expensive. = No lo habría comprado si hubiera sido más caro.

3) Preguntas: Would + sujeto + have + participio...?
- Would you have done the same? = ¿Habrías hecho lo mismo?

Las respuestas cortas:
- Yes, I would have. / No, I wouldn't have.

¡CUIDADO!
- ❌ Would you had done the same? → ✅ Would you have done the same?
- ❌ If you didn't had helped me → ✅ If you hadn't helped me.
- ❌ I wouldn't have bought it if it was more expensive → ✅ if it had been more expensive.`,
  examples: [
    { english: 'If you hadn\'t helped me, I wouldn\'t have finished.', spanish: 'Si no me hubieras ayudado, no habría terminado.', note: 'hadn\'t + participio' },
    { english: 'Would you have done the same?', spanish: '¿Habrías hecho lo mismo?', note: 'pregunta: Would + sujeto + have + participio' },
    { english: 'I wouldn\'t have bought it if it had been more expensive.', spanish: 'No lo habría comprado si hubiera sido más caro.', note: 'wouldn\'t have + had been' },
    { english: 'Would they have come if we had invited them?', spanish: '¿Habrían venido si los hubiéramos invitado?', note: 'pregunta + if clause' },
    { english: 'Yes, I would have. / No, I wouldn\'t have.', spanish: 'Sí, lo habría hecho. / No, no lo habría hecho.', note: 'respuestas cortas' },
  ],
  rule: `Negativos:
- Parte "if": hadn't + participio: If you hadn't helped me...
- Consecuencia: wouldn't have + participio: I wouldn't have finished.

Preguntas:
- Would + sujeto + have + participio...? → Would you have done the same?
- Respuestas cortas: Yes, I would have. / No, I wouldn't have.

Recuerda: en la parte de "if" usamos past perfect (had/hadn't + participio), nunca "would".`,
  commonMistakes: [
    { wrong: '❌ Would you had done the same?', correct: '✅ Would you have done the same?', explanation: 'En las preguntas del tercer condicional usamos "Would + have + participio", no "had done".' },
    { wrong: '❌ If you didn\'t had helped me, I wouldn\'t have finished.', correct: '✅ If you hadn\'t helped me, I wouldn\'t have finished.', explanation: 'La negativa en la parte de "if" es "hadn\'t + participio".' },
    { wrong: '❌ I wouldn\'t have bought it if it was more expensive.', correct: '✅ I wouldn\'t have bought it if it had been more expensive.', explanation: 'La parte de "if" necesita past perfect: "had been", no "was".' },
  ],
  vocabulary: [
    { word: 'truth', translation_es: 'verdad', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'Would you have told the truth?', exampleTranslation: '¿Habrías dicho la verdad?' },
    { word: 'miss', translation_es: 'perder (autobús), echar de menos', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'If we hadn\'t missed the bus, we would have arrived on time.', exampleTranslation: 'Si no hubiéramos perdido el autobús, habríamos llegado a tiempo.' },
    { word: 'invite', translation_es: 'invitar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'Would they have come if we had invited them?', exampleTranslation: '¿Habrían venido si los hubiéramos invitado?' },
    { word: 'in the end', translation_es: 'al final, finalmente', level: 'B1', category: 'time expressions', partOfSpeech: 'phrase', example: 'In the end, it would have been easier to take the train.', exampleTranslation: 'Al final, habría sido más fácil coger el tren.' },
  ],
  grammarPoints: [
    {
      id: 'gp-third-conditional-negative-questions',
      level: 'B1',
      name: 'Third conditional — negative & questions',
      explanation_es: 'La forma negativa usa "hadn\'t + participio" en la parte de "if" y "wouldn\'t have + participio" en la consecuencia. Las preguntas se forman con "Would + sujeto + have + participio".',
      formula: 'hadn\'t + participio | wouldn\'t have + participio | Would + sujeto + have + participio...?',
      examples: ['If you hadn\'t helped me, I wouldn\'t have finished.', 'Would you have done the same?', 'I wouldn\'t have bought it if it had been more expensive.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m9-l2-ex1',
      type: 'multiple_choice',
      concept: 'third conditional negative if clause',
      difficulty: 1,
      prompt: 'Completa: "If you ___ helped me, I wouldn\'t have finished."',
      promptTranslation: 'Si no me hubieras ayudado, no habría terminado.',
      correctAnswer: 'hadn\'t',
      options: ["hadn't", "didn't", 'wouldn\'t'],
      explanation: 'La negativa en la parte de "if" es "hadn\'t + participio": hadn\'t helped.',
    },
    {
      id: 'b1-m9-l2-ex2',
      type: 'fill_blank',
      concept: 'third conditional question form',
      difficulty: 2,
      prompt: 'Completa: "Would you ___ done the same?"',
      promptTranslation: '¿Habrías hecho lo mismo?',
      correctAnswer: 'have',
      acceptedAnswers: ['have', 'Have'],
      explanation: 'Pregunta del tercer condicional: Would + sujeto + have + participio.',
    },
    {
      id: 'b1-m9-l2-ex3',
      type: 'multiple_choice',
      concept: 'third conditional if clause',
      difficulty: 2,
      prompt: 'Completa: "I wouldn\'t have bought it if it ___ been more expensive."',
      promptTranslation: 'No lo habría comprado si hubiera sido más caro.',
      correctAnswer: 'had',
      options: ['had', 'has', 'was'],
      explanation: 'La parte de "if" usa past perfect: if it had been more expensive.',
    },
    {
      id: 'b1-m9-l2-ex4',
      type: 'error_correction',
      concept: 'third conditional question form',
      difficulty: 3,
      prompt: 'Corrige el error: "Would you had done the same?"',
      promptTranslation: '¿Habrías hecho lo mismo?',
      correctAnswer: 'Would you have done the same?',
      acceptedAnswers: ['Would you have done the same?', 'Would you have done the same', 'would you have done the same?'],
      acceptApproximate: true,
      explanation: 'Las preguntas del tercer condicional usan "Would + have + participio", no "had done".',
    },
    {
      id: 'b1-m9-l2-ex5',
      type: 'reorder',
      concept: 'third conditional question',
      difficulty: 3,
      prompt: 'Ordena las palabras: Would / you / have / the / done / same / ?',
      promptTranslation: '¿Habrías hecho lo mismo?',
      correctAnswer: 'Would you have done the same?',
      words: ['Would', 'you', 'have', 'done', 'the', 'same'],
      explanation: 'Orden de pregunta: Would + sujeto + have + participio + complemento. → Would you have done the same?',
    },
    {
      id: 'b1-m9-l2-ex6',
      type: 'translate',
      concept: 'third conditional question',
      difficulty: 3,
      prompt: 'Traduce: "¿Habrías hecho lo mismo?"',
      promptTranslation: 'Would you have done the same?',
      correctAnswer: 'Would you have done the same?',
      acceptedAnswers: ['Would you have done the same?', 'Would you have done the same', 'would you have done the same?'],
      acceptApproximate: true,
      explanation: '"¿Habrías hecho...?" = Would you have done...? → Would you have done the same?',
    },
    {
      id: 'b1-m9-l2-ex7',
      type: 'match',
      concept: 'third conditional negative',
      difficulty: 3,
      prompt: 'Relaciona cada condición con su consecuencia.',
      promptTranslation: 'Match each condition with its result.',
      correctAnswer: 'If you hadn\'t helped me=I wouldn\'t have finished.; If we hadn\'t missed the bus=we would have arrived on time.; If it had been more expensive=I wouldn\'t have bought it.; If we had invited them=they would have come.; If I had known=I would have told you.',
      pairs: [
        { left: 'If you hadn\'t helped me', right: 'I wouldn\'t have finished.' },
        { left: 'If we hadn\'t missed the bus', right: 'we would have arrived on time.' },
        { left: 'If it had been more expensive', right: 'I wouldn\'t have bought it.' },
        { left: 'If we had invited them', right: 'they would have come.' },
        { left: 'If I had known', right: 'I would have told you.' },
      ],
      explanation: 'Las negativas usan "hadn\'t + participio" y "wouldn\'t have + participio"; las afirmativas, "had + participio" y "would have + participio".',
    },
    {
      id: 'b1-m9-l2-ex8',
      type: 'true_false',
      concept: 'third conditional question',
      difficulty: 3,
      prompt: 'Para hacer una pregunta en tercer condicional usamos "Would + sujeto + have + participio".',
      promptTranslation: 'To make a question in the third conditional we use "Would + subject + have + participle".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero: Would you have done the same?',
    },
    {
      id: 'b1-m9-l2-ex9',
      type: 'fill_blank',
      concept: 'third conditional negative if clause',
      difficulty: 3,
      prompt: 'Completa: "They wouldn\'t have lost the game if they ___ trained harder."',
      promptTranslation: 'No habrían perdido el partido si hubieran entrenado más.',
      correctAnswer: 'had',
      acceptedAnswers: ['had', 'Had'],
      explanation: 'Afirmativa en la parte de "if": if they had trained harder.',
    },
    {
      id: 'b1-m9-l2-ex10',
      type: 'multiple_choice',
      concept: 'third conditional negative result',
      difficulty: 4,
      prompt: 'Completa: "She ___ have left if she had known."',
      promptTranslation: 'Ella no se habría ido si hubiera sabido.',
      correctAnswer: 'wouldn\'t',
      options: ['wouldn\'t', 'didn\'t', 'weren\'t'],
      explanation: 'Negativa en la consecuencia: wouldn\'t have + participio.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m9-l2-mt1',
      type: 'multiple_choice',
      concept: 'third conditional negative if',
      difficulty: 2,
      prompt: 'Completa: "If we ___ missed the bus, we would have arrived on time."',
      promptTranslation: 'Si no hubiéramos perdido el autobús, habríamos llegado a tiempo.',
      correctAnswer: 'hadn\'t',
      options: ["hadn't", 'didn\'t', 'weren\'t'],
      explanation: 'Negativa en la parte de "if": hadn\'t missed.',
    },
    {
      id: 'b1-m9-l2-mt2',
      type: 'fill_blank',
      concept: 'third conditional question',
      difficulty: 2,
      prompt: 'Completa: "___ you have told him the truth?"',
      promptTranslation: '¿Le habrías dicho la verdad?',
      correctAnswer: 'Would',
      acceptedAnswers: ['Would', 'WOULD'],
      explanation: 'Las preguntas empiezan con "Would + sujeto + have + participio".',
    },
    {
      id: 'b1-m9-l2-mt3',
      type: 'error_correction',
      concept: 'third conditional negative if',
      difficulty: 3,
      prompt: 'Corrige el error: "If you didn\'t had told me, I would have been lost."',
      promptTranslation: 'Si no me lo hubieras dicho, me habría perdido.',
      correctAnswer: 'If you hadn\'t told me, I would have been lost.',
      acceptedAnswers: ['If you hadn\'t told me, I would have been lost', 'If you hadn\'t told me, I would have been lost.', 'if you hadn\'t told me, i would have been lost'],
      acceptApproximate: true,
      explanation: 'La negativa en la parte de "if" es "hadn\'t + participio": hadn\'t told.',
    },
    {
      id: 'b1-m9-l2-mt4',
      type: 'translate',
      concept: 'third conditional negative',
      difficulty: 3,
      prompt: 'Traduce: "No lo habría comprado si hubiera sido más caro."',
      promptTranslation: 'I wouldn\'t have bought it if it had been more expensive.',
      correctAnswer: 'I wouldn\'t have bought it if it had been more expensive.',
      acceptedAnswers: ['I wouldn\'t have bought it if it had been more expensive', 'I wouldn\'t have bought it if it had been more expensive.', 'i wouldn\'t have bought it if it had been more expensive'],
      acceptApproximate: true,
      explanation: '"No lo habría comprado" = wouldn\'t have bought; "hubiera sido" = had been.',
    },
    {
      id: 'b1-m9-l2-mt5',
      type: 'multiple_choice',
      concept: 'third conditional question',
      difficulty: 4,
      prompt: '¿Cuál de estas preguntas es correcta?',
      promptTranslation: 'Which question is correct?',
      correctAnswer: 'Would you have gone to the meeting?',
      options: ['Would you have gone to the meeting?', 'Would you had gone to the meeting?', 'Did you have gone to the meeting?'],
      explanation: 'Las preguntas del tercer condicional usan "Would + have + participio".',
    },
  ],
  reviewItems: ['b1-m9-l1'],
  prerequisites: ['b1-m9-l1'],
}
