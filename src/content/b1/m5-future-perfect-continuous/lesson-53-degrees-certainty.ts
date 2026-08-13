import type { Lesson } from '../../types'

export const lesson53DegreesCertainty: Lesson = {
  id: 'b1-m5-l3',
  moduleId: 'm5-future-perfect-continuous',
  order: 2,
  title: 'Grados de certeza sobre el futuro',
  objective: 'Expresar distintos grados de certeza sobre el futuro con will definitely, will probably, may, might y be likely to.',
  explanation_es: `Cuando hablamos del futuro no siempre estamos 100% seguros. En inglés tenemos varias formas de expresar CUÁN probable es algo.

ORDEN DE CERTEZA (de más a menos seguro):
- will definitely = definitivamente / seguro que sí (casi 100%)
- will probably = probablemente (alta probabilidad, ~80%)
- be likely to = es probable que (alta probabilidad)
- may = puede que (probabilidad media, ~50%)
- might = quizá (baja probabilidad)

Ejemplos:
- It will definitely rain. = Seguro que lloverá. (casi seguro)
- She will probably come. = Probablemente vendrá.
- They are likely to win. = Es probable que ganen.
- He may arrive late. = Puede que llegue tarde.
- He might arrive late. = Quizá llegue tarde.

POSICIÓN DEL ADVERBIO (¡muy importante!):
- "definitely" y "probably" van DESPUÉS de "will": will definitely, will probably.
- ❌ It probably will rain → ✅ It will probably rain.
- Con "be": is likely to / are likely to.
- "definitely" puede ir al principio: Definitely, it will rain. (menos común)

"BE LIKELY TO + verbo":
- They are likely to win. = Es probable que ganen.
- She is likely to come. = Es probable que venga.
- IMPORTANTE: "likely" necesita "to" antes del verbo.
- ❌ They are likely win → ✅ They are likely to win.

En español:
- will definitely = seguro que / definitivamente
- will probably / likely to = probablemente / es probable que
- may = puede que
- might = quizá`,
  examples: [
    { english: 'It will definitely rain.', spanish: 'Seguro que lloverá.', note: 'will + definitely (casi 100%).' },
    { english: 'She will probably come.', spanish: 'Probablemente vendrá.', note: 'will + probably (después de will).' },
    { english: 'He may arrive late.', spanish: 'Puede que llegue tarde.', note: 'may + verbo (probabilidad media).' },
    { english: 'He might arrive late.', spanish: 'Quizá llegue tarde.', note: 'might + verbo (baja probabilidad).' },
    { english: 'They are likely to win.', spanish: 'Es probable que ganen.', note: 'be + likely + to + verbo.' },
    { english: 'We will probably travel in summer.', spanish: 'Probablemente viajaremos en verano.', note: 'will probably.' },
  ],
  rule: `Fórmulas:
- will + definitely / probably + verbo: It will definitely rain.
- be + likely + to + verbo: They are likely to win.
- may / might + verbo: He may arrive late.

Grados de certeza (de más a menos):
- will definitely (casi seguro) > will probably / be likely to (probable) > may (posible) > might (poco probable)

Reglas:
- "probably" y "definitely" van DESPUÉS de "will": ✅ will probably, ❌ probably will.
- "likely" siempre con "to": be likely to + verbo.
- "may" y "might" van seguidos del verbo en infinitivo.`,
  commonMistakes: [
    { wrong: '❌ It probably will rain tomorrow.', correct: '✅ It will probably rain tomorrow.', explanation: '"Probably" va DESPUÉS de "will": will probably rain.' },
    { wrong: '❌ They are likely win the match.', correct: '✅ They are likely to win the match.', explanation: '"Likely" necesita "to" antes del verbo: likely to win.' },
    { wrong: '❌ She will definitely to come.', correct: '✅ She will definitely come.', explanation: 'Tras "will" el verbo va sin "to": will definitely come.' },
    { wrong: '❌ He may to arrive late.', correct: '✅ He may arrive late.', explanation: 'Tras "may" el verbo va sin "to": may arrive.' },
  ],
  vocabulary: [
    { word: 'definitely', translation_es: 'definitivamente, seguro', level: 'B1', category: 'adverbs', partOfSpeech: 'adverb', example: 'It will definitely rain.', exampleTranslation: 'Seguro que lloverá.' },
    { word: 'probably', translation_es: 'probablemente', level: 'B1', category: 'adverbs', partOfSpeech: 'adverb', example: 'She will probably come.', exampleTranslation: 'Probablemente vendrá.' },
    { word: 'likely', translation_es: 'probable', level: 'B1', category: 'adjectives', partOfSpeech: 'adjective', example: 'They are likely to win.', exampleTranslation: 'Es probable que ganen.' },
    { word: 'win', translation_es: 'ganar', level: 'A2', category: 'sports', partOfSpeech: 'verb', example: 'They are likely to win.', exampleTranslation: 'Es probable que ganen.' },
    { word: 'late', translation_es: 'tarde', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: 'He may arrive late.', exampleTranslation: 'Puede que llegue tarde.' },
    { word: 'summer', translation_es: 'verano', level: 'A1', category: 'seasons', partOfSpeech: 'noun', example: 'We will probably travel in summer.', exampleTranslation: 'Probablemente viajaremos en verano.' },
  ],
  grammarPoints: [
    {
      id: 'gp-degrees-certainty',
      level: 'B1',
      name: 'Degrees of certainty (will definitely / probably / may / might / likely)',
      explanation_es: 'Para expresar grados de certeza sobre el futuro usamos will + definitely/probably, be likely to + verbo, o may/might + verbo. "Probably" y "definitely" van después de "will".',
      formula: 'will + definitely/probably + verb | be + likely + to + verb | may/might + verb',
      examples: ['It will definitely rain.', 'She will probably come.', 'They are likely to win.', 'He may arrive late.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m5-l3-ex1',
      type: 'multiple_choice',
      concept: 'degrees of certainty definitely',
      difficulty: 1,
      prompt: 'Completa (casi seguro): "It will ___ rain."',
      promptTranslation: 'Seguro que lloverá.',
      correctAnswer: 'definitely',
      options: ['definitely', 'maybe', 'probably'],
      explanation: 'Para "casi seguro" usamos "definitely": It will definitely rain.',
    },
    {
      id: 'b1-m5-l3-ex2',
      type: 'multiple_choice',
      concept: 'degrees of certainty probably',
      difficulty: 1,
      prompt: 'Completa (probable): "She will ___ come."',
      promptTranslation: 'Probablemente vendrá.',
      correctAnswer: 'probably',
      options: ['probably', 'definitely', 'never'],
      explanation: '"Probablemente" = probably. Va después de "will": will probably come.',
    },
    {
      id: 'b1-m5-l3-ex3',
      type: 'fill_blank',
      concept: 'degrees of certainty likely to',
      difficulty: 2,
      prompt: 'Completa: "They are likely ___ win."',
      promptTranslation: 'Es probable que ganen.',
      correctAnswer: 'to',
      acceptedAnswers: ['to'],
      explanation: '"Likely" va seguido de "to" + verbo: likely to win.',
    },
    {
      id: 'b1-m5-l3-ex4',
      type: 'fill_blank',
      concept: 'degrees of certainty may',
      difficulty: 2,
      prompt: 'Completa (probabilidad media): "He ___ arrive late."',
      promptTranslation: 'Puede que llegue tarde.',
      correctAnswer: 'may',
      acceptedAnswers: ['may', 'might'],
      explanation: 'Probabilidad media → "may" (o "might" si es menos probable). → He may arrive late.',
    },
    {
      id: 'b1-m5-l3-ex5',
      type: 'select_correct',
      concept: 'adverb position',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Probablemente vendrá.',
      correctAnswer: 'She will probably come.',
      options: ['She will probably come.', 'She probably will come.', 'She will come probably to.', 'She probably will to come.'],
      explanation: '"Probably" va DESPUÉS de "will": will probably come. No "probably will" ni "will to come".',
    },
    {
      id: 'b1-m5-l3-ex6',
      type: 'reorder',
      concept: 'adverb position',
      difficulty: 3,
      prompt: 'Ordena la frase (grado de certeza):',
      promptTranslation: 'Seguro que lloverá mañana.',
      words: ['It', 'will', 'definitely', 'rain', 'tomorrow.'],
      correctAnswer: 'It will definitely rain tomorrow.',
      explanation: 'Posición del adverbio: will + definitely + verbo. → It will definitely rain tomorrow.',
    },
    {
      id: 'b1-m5-l3-ex7',
      type: 'true_false',
      concept: 'adverb position',
      difficulty: 2,
      prompt: 'En inglés decimos "will probably", no "probably will".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. "Probably" y "definitely" van después de "will": will probably, will definitely.',
    },
    {
      id: 'b1-m5-l3-ex8',
      type: 'translate',
      concept: 'degrees of certainty',
      difficulty: 3,
      prompt: 'Traduce: "Probablemente vendrá."',
      correctAnswer: 'She will probably come.',
      acceptedAnswers: [
        'She will probably come',
        'She will probably come.',
        "She'll probably come",
        "She'll probably come.",
        'she will probably come',
      ],
      acceptApproximate: true,
      explanation: '"Probablemente" = probably, después de "will": will probably come. "vendrá" = will come.',
    },
    {
      id: 'b1-m5-l3-ex9',
      type: 'translate',
      concept: 'degrees of certainty likely',
      difficulty: 4,
      prompt: 'Traduce: "Es probable que ganen."',
      correctAnswer: 'They are likely to win.',
      acceptedAnswers: [
        'They are likely to win',
        'They are likely to win.',
        'they are likely to win',
      ],
      acceptApproximate: true,
      explanation: '"Es probable que" = are likely to. "ganen" = win. → They are likely to win.',
    },
    {
      id: 'b1-m5-l3-ex10',
      type: 'error_correction',
      concept: 'adverb position',
      difficulty: 3,
      prompt: 'Corrige el error: "It probably will rain tomorrow."',
      correctAnswer: 'It will probably rain tomorrow.',
      acceptedAnswers: [
        'It will probably rain tomorrow',
        'It will probably rain tomorrow.',
        'it will probably rain tomorrow',
      ],
      acceptApproximate: true,
      explanation: '"Probably" va después de "will": It will probably rain tomorrow.',
    },
    {
      id: 'b1-m5-l3-ex11',
      type: 'error_correction',
      concept: 'likely to',
      difficulty: 4,
      prompt: 'Corrige el error: "They are likely win the match."',
      correctAnswer: 'They are likely to win the match.',
      acceptedAnswers: [
        'They are likely to win the match',
        'They are likely to win the match.',
        'they are likely to win the match',
      ],
      acceptApproximate: true,
      explanation: '"Likely" necesita "to" antes del verbo: likely to win. → They are likely to win the match.',
    },
    {
      id: 'b1-m5-l3-ex12',
      type: 'match',
      concept: 'degrees of certainty match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su nivel de certeza:',
      pairs: [
        { left: 'It will definitely rain.', right: 'Casi 100% seguro' },
        { left: 'She will probably come.', right: 'Probable (~80%)' },
        { left: 'They are likely to win.', right: 'Probable' },
        { left: 'He may arrive late.', right: 'Posible (~50%)' },
        { left: 'He might arrive late.', right: 'Poco probable' },
      ],
      correctAnswer: 'It will definitely rain.=Casi 100% seguro, She will probably come.=Probable (~80%), They are likely to win.=Probable, He may arrive late.=Posible (~50%), He might arrive late.=Poco probable',
      explanation: 'El orden de certeza va de will definitely (casi seguro) a might (poco probable). "Probably" y "likely to" están en el mismo nivel.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m5-l3-mt1',
      type: 'multiple_choice',
      concept: 'degrees of certainty',
      difficulty: 1,
      prompt: 'Completa (casi seguro): "It will ___ rain."',
      promptTranslation: 'Seguro que lloverá.',
      correctAnswer: 'definitely',
      options: ['definitely', 'maybe', 'never'],
      explanation: '"Definitely" expresa casi certeza: It will definitely rain.',
    },
    {
      id: 'b1-m5-l3-mt2',
      type: 'fill_blank',
      concept: 'likely to',
      difficulty: 2,
      prompt: 'Completa: "They are likely ___ win."',
      promptTranslation: 'Es probable que ganen.',
      correctAnswer: 'to',
      acceptedAnswers: ['to'],
      explanation: '"Likely" va seguido de "to" + verbo: likely to win.',
    },
    {
      id: 'b1-m5-l3-mt3',
      type: 'error_correction',
      concept: 'adverb position',
      difficulty: 3,
      prompt: 'Corrige el error: "She probably will come."',
      correctAnswer: 'She will probably come.',
      acceptedAnswers: ['She will probably come', 'She will probably come.', 'she will probably come'],
      acceptApproximate: true,
      explanation: '"Probably" va después de "will": will probably come.',
    },
    {
      id: 'b1-m5-l3-mt4',
      type: 'translate',
      concept: 'degrees of certainty',
      difficulty: 3,
      prompt: 'Traduce: "Es probable que ganen."',
      correctAnswer: 'They are likely to win.',
      acceptedAnswers: ['They are likely to win', 'They are likely to win.', 'they are likely to win'],
      acceptApproximate: true,
      explanation: '"Es probable que" = are likely to + verbo. → They are likely to win.',
    },
    {
      id: 'b1-m5-l3-mt5',
      type: 'select_correct',
      concept: 'degrees of certainty',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Puede que llegue tarde.',
      correctAnswer: 'He may arrive late.',
      options: ['He may arrive late.', 'He may to arrive late.', 'He may will arrive late.', 'He may arrives late.'],
      explanation: 'Tras "may" el verbo va sin "to" y sin conjugar: may arrive late.',
    },
  ],
  reviewItems: ['b1-m5-l2'],
  prerequisites: ['b1-m5-l2'],
}
