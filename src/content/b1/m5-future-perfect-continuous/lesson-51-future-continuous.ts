import type { Lesson } from '../../types'

export const lesson51FutureContinuous: Lesson = {
  id: 'b1-m5-l1',
  moduleId: 'm5-future-perfect-continuous',
  order: 0,
  title: 'Future Continuous: will be + -ing',
  objective: 'Hablar de acciones que estarán en progreso en un momento concreto del futuro con "will be + verbo -ing".',
  explanation_es: `El "future continuous" (futuro continuo) se usa para hablar de una acción que estará en progreso (ocurriendo) en un momento concreto del futuro.

Se forma con:
- will be + verbo + -ing

Ejemplos:
- This time tomorrow, I will be flying to Madrid. = Mañana a esta hora, estaré volando a Madrid.
- She will be working at 9. = Ella estará trabajando a las 9.
- We'll be having dinner around 8. = Estaremos cenando alrededor de las 8.

En español lo expresamos con "estaré + gerundio": estaré volando, estaré trabajando, estarás cenando...

¿Cuándo lo usamos?
1. Para una acción en progreso en un momento futuro concreto:
   - This time tomorrow, I will be flying to Madrid.
   - At 9 o'clock, she will be working.
2. Con expresiones de tiempo como: this time tomorrow, at 9, around 8, at this time next week.
3. Para hablar de planes o rutinas futuras en curso:
   - We'll be having dinner around 8.

Contracciones: I'll be, She'll be, We'll be, They'll be.

¡OJO! Después de "will be" el verbo SIEMPRE lleva -ing:
- ✅ will be flying, ✅ will be working
- ❌ will be fly, ❌ will be work`,
  examples: [
    { english: 'This time tomorrow, I will be flying to Madrid.', spanish: 'Mañana a esta hora, estaré volando a Madrid.', note: 'will be + flying (-ing).' },
    { english: 'She will be working at 9.', spanish: 'Ella estará trabajando a las 9.', note: 'will be + working.' },
    { english: 'We\'ll be having dinner around 8.', spanish: 'Estaremos cenando alrededor de las 8.', note: 'We\'ll = We will.' },
    { english: 'At this time next week, they will be relaxing on the beach.', spanish: 'A esta hora la próxima semana, estarán relajándose en la playa.', note: 'Expresión temporal futura.' },
    { english: 'Don\'t call me at 10 — I\'ll be driving.', spanish: 'No me llames a las 10 — estaré conduciendo.', note: 'Acción en progreso en un momento futuro.' },
  ],
  rule: `Fórmula:
will + be + verbo(-ing)
- I will be flying.
- She will be working.
- We'll be having dinner.

Usos:
- Acción en progreso en un momento futuro: This time tomorrow, I will be flying to Madrid.
- Expresiones típicas: this time tomorrow, at 9, around 8, at this time next week.

Contracciones: I'll be, She'll be, We'll be.

OJO:
- Tras "will be" el verbo lleva SIEMPRE -ing: will be flying, nunca "will be fly".
- Negativo: will not (won't) be + -ing: I won't be working.`,
  commonMistakes: [
    { wrong: '❌ I will be fly to Madrid tomorrow.', correct: '✅ I will be flying to Madrid tomorrow.', explanation: 'Después de "will be" el verbo lleva -ing: flying, no "fly".' },
    { wrong: '❌ She will be work at 9.', correct: '✅ She will be working at 9.', explanation: 'Tras "will be" el verbo lleva -ing: working, no "work".' },
    { wrong: '❌ She will flying to Madrid.', correct: '✅ She will be flying to Madrid.', explanation: 'Falta "be": will be + -ing. No se dice "will flying".' },
    { wrong: '❌ I will be to fly to Madrid.', correct: '✅ I will be flying to Madrid.', explanation: 'Nunca "will be to + verbo". Estructura: will be + verbo -ing.' },
  ],
  vocabulary: [
    { word: 'this time tomorrow', translation_es: 'mañana a esta hora', level: 'B1', category: 'time', partOfSpeech: 'phrase', example: 'This time tomorrow, I will be flying to Madrid.', exampleTranslation: 'Mañana a esta hora, estaré volando a Madrid.' },
    { word: 'flying', translation_es: 'volando', level: 'A2', category: 'travel', partOfSpeech: 'verb (-ing)', example: 'I will be flying to Madrid.', exampleTranslation: 'Estaré volando a Madrid.' },
    { word: 'working', translation_es: 'trabajando', level: 'A2', category: 'work', partOfSpeech: 'verb (-ing)', example: 'She will be working at 9.', exampleTranslation: 'Ella estará trabajando a las 9.' },
    { word: 'around', translation_es: 'alrededor de, sobre', level: 'A2', category: 'time', partOfSpeech: 'preposition', example: 'We\'ll be having dinner around 8.', exampleTranslation: 'Estaremos cenando alrededor de las 8.' },
    { word: 'relaxing', translation_es: 'relajándose', level: 'B1', category: 'free time', partOfSpeech: 'verb (-ing)', example: 'They will be relaxing on the beach.', exampleTranslation: 'Estarán relajándose en la playa.' },
    { word: 'driving', translation_es: 'conduciendo', level: 'A2', category: 'travel', partOfSpeech: 'verb (-ing)', example: 'I\'ll be driving at 10.', exampleTranslation: 'Estaré conduciendo a las 10.' },
  ],
  grammarPoints: [
    {
      id: 'gp-future-continuous',
      level: 'B1',
      name: 'Future continuous (will be + -ing)',
      explanation_es: 'El future continuous expresa acciones en progreso en un momento futuro. Se forma con will be + verbo -ing.',
      formula: 'will + be + verb(-ing)',
      examples: ['This time tomorrow, I will be flying to Madrid.', 'She will be working at 9.', "We'll be having dinner around 8."],
    },
  ],
  exercises: [
    {
      id: 'b1-m5-l1-ex1',
      type: 'multiple_choice',
      concept: 'future continuous form',
      difficulty: 1,
      prompt: 'Completa: "This time tomorrow, I ___ be flying to Madrid."',
      promptTranslation: 'Mañana a esta hora, estaré volando a Madrid.',
      correctAnswer: 'will',
      options: ['will', 'am', 'was'],
      explanation: 'Future continuous = will be + -ing. → I will be flying to Madrid.',
    },
    {
      id: 'b1-m5-l1-ex2',
      type: 'multiple_choice',
      concept: 'future continuous form',
      difficulty: 1,
      prompt: 'Completa: "She will ___ working at 9."',
      promptTranslation: 'Ella estará trabajando a las 9.',
      correctAnswer: 'be',
      options: ['be', 'is', 'to'],
      explanation: 'Estructura: will + be + verbo -ing. → She will be working at 9.',
    },
    {
      id: 'b1-m5-l1-ex3',
      type: 'fill_blank',
      concept: 'future continuous form',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "We will be ___ (have) dinner around 8."',
      promptTranslation: 'Estaremos cenando alrededor de las 8.',
      correctAnswer: 'having',
      acceptedAnswers: ['having'],
      explanation: 'Después de "will be" el verbo lleva -ing: having. → We will be having dinner around 8.',
    },
    {
      id: 'b1-m5-l1-ex4',
      type: 'fill_blank',
      concept: 'future continuous form',
      difficulty: 2,
      prompt: 'Completa con la contracción de "will": "We ___ be having dinner around 8."',
      promptTranslation: 'Estaremos cenando alrededor de las 8.',
      correctAnswer: "ll",
      acceptedAnswers: ["'ll", 'will', 'We will'],
      explanation: 'La contracción de "we will" es "we\'ll". → We\'ll be having dinner around 8.',
    },
    {
      id: 'b1-m5-l1-ex5',
      type: 'reorder',
      concept: 'future continuous form',
      difficulty: 2,
      prompt: 'Ordena la frase (future continuous):',
      promptTranslation: 'Esta hora mañana, estaré trabajando.',
      words: ['This', 'time', 'tomorrow,', 'I', 'will', 'be', 'working.'],
      correctAnswer: 'This time tomorrow, I will be working.',
      explanation: 'Estructura: expresión temporal + will + be + verbo -ing. → This time tomorrow, I will be working.',
    },
    {
      id: 'b1-m5-l1-ex6',
      type: 'true_false',
      concept: 'future continuous meaning',
      difficulty: 2,
      prompt: 'El future continuous expresa una acción en progreso en un momento futuro.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. Describe una acción que estará ocurriendo en un momento futuro: I will be flying.',
    },
    {
      id: 'b1-m5-l1-ex7',
      type: 'select_correct',
      concept: 'future continuous form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Ella estará trabajando a las 9.',
      correctAnswer: 'She will be working at 9.',
      options: ['She will be working at 9.', 'She will be work at 9.', 'She will working at 9.', 'She will be to work at 9.'],
      explanation: 'Estructura correcta: will + be + verbo -ing (working). "Will be work", "will working" y "will be to work" son incorrectos.',
    },
    {
      id: 'b1-m5-l1-ex8',
      type: 'translate',
      concept: 'future continuous',
      difficulty: 3,
      prompt: 'Traduce: "Mañana a esta hora, estaré volando a Madrid."',
      correctAnswer: 'This time tomorrow, I will be flying to Madrid.',
      acceptedAnswers: [
        'This time tomorrow, I will be flying to Madrid',
        'This time tomorrow, I will be flying to Madrid.',
        'This time tomorrow, I\'ll be flying to Madrid',
        'This time tomorrow, I\'ll be flying to Madrid.',
        'this time tomorrow, i will be flying to madrid',
      ],
      acceptApproximate: true,
      explanation: '"Mañana a esta hora" = This time tomorrow. "estaré volando" = I will be flying (will be + -ing).',
    },
    {
      id: 'b1-m5-l1-ex9',
      type: 'translate',
      concept: 'future continuous',
      difficulty: 3,
      prompt: 'Traduce: "Estaremos cenando alrededor de las 8."',
      correctAnswer: "We'll be having dinner around 8.",
      acceptedAnswers: [
        'We\'ll be having dinner around 8',
        'We\'ll be having dinner around 8.',
        'We will be having dinner around 8',
        'We will be having dinner around 8.',
        "we'll be having dinner around 8",
      ],
      acceptApproximate: true,
      explanation: '"Estaremos cenando" = We\'ll be having dinner (will be + -ing). "alrededor de las 8" = around 8.',
    },
    {
      id: 'b1-m5-l1-ex10',
      type: 'error_correction',
      concept: 'future continuous form',
      difficulty: 4,
      prompt: 'Corrige el error: "She will be work at 9."',
      correctAnswer: 'She will be working at 9.',
      acceptedAnswers: ['She will be working at 9', 'She will be working at 9.', 'she will be working at 9'],
      acceptApproximate: true,
      explanation: 'Después de "will be" el verbo lleva -ing: working, no "work". → She will be working at 9.',
    },
    {
      id: 'b1-m5-l1-ex11',
      type: 'match',
      concept: 'future continuous match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su momento futuro:',
      pairs: [
        { left: 'I will be flying to Madrid.', right: 'This time tomorrow' },
        { left: 'She will be working.', right: 'At 9 o\'clock' },
        { left: 'We\'ll be having dinner.', right: 'Around 8' },
        { left: 'They will be relaxing.', right: 'At this time next week' },
        { left: 'I\'ll be driving.', right: 'At 10 tonight' },
      ],
      correctAnswer: 'I will be flying to Madrid.=This time tomorrow, She will be working.=At 9 o\'clock, We\'ll be having dinner.=Around 8, They will be relaxing.=At this time next week, I\'ll be driving.=At 10 tonight',
      explanation: 'El future continuous (will be + -ing) se usa con momentos futuros concretos: this time tomorrow, at 9, around 8, next week, at 10.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m5-l1-mt1',
      type: 'multiple_choice',
      concept: 'future continuous form',
      difficulty: 1,
      prompt: 'Completa: "She ___ be working at 9."',
      promptTranslation: 'Ella estará trabajando a las 9.',
      correctAnswer: 'will',
      options: ['will', 'is', 'does'],
      explanation: 'Future continuous = will be + -ing. → She will be working at 9.',
    },
    {
      id: 'b1-m5-l1-mt2',
      type: 'fill_blank',
      concept: 'future continuous form',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "I will be ___ (fly) to Madrid."',
      promptTranslation: 'Estaré volando a Madrid.',
      correctAnswer: 'flying',
      acceptedAnswers: ['flying'],
      explanation: 'Después de "will be" el verbo lleva -ing: flying. → I will be flying to Madrid.',
    },
    {
      id: 'b1-m5-l1-mt3',
      type: 'error_correction',
      concept: 'future continuous form',
      difficulty: 3,
      prompt: 'Corrige el error: "I will be fly to Madrid tomorrow."',
      correctAnswer: 'I will be flying to Madrid tomorrow.',
      acceptedAnswers: [
        'I will be flying to Madrid tomorrow',
        'I will be flying to Madrid tomorrow.',
        'I\'ll be flying to Madrid tomorrow',
        'I\'ll be flying to Madrid tomorrow.',
      ],
      acceptApproximate: true,
      explanation: 'Después de "will be" el verbo lleva -ing: flying, no "fly".',
    },
    {
      id: 'b1-m5-l1-mt4',
      type: 'translate',
      concept: 'future continuous',
      difficulty: 3,
      prompt: 'Traduce: "Ella estará trabajando a las 9."',
      correctAnswer: 'She will be working at 9.',
      acceptedAnswers: ['She will be working at 9', 'She will be working at 9.', 'she will be working at 9'],
      acceptApproximate: true,
      explanation: '"Estará trabajando" = She will be working (will be + -ing). "a las 9" = at 9.',
    },
    {
      id: 'b1-m5-l1-mt5',
      type: 'select_correct',
      concept: 'future continuous form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Estaremos cenando alrededor de las 8.',
      correctAnswer: "We'll be having dinner around 8.",
      options: [
        "We'll be having dinner around 8.",
        "We'll be have dinner around 8.",
        "We'll be to have dinner around 8.",
        "We'll having dinner around 8.",
      ],
      explanation: 'Estructura correcta: will + be + verbo -ing (having).',
    },
  ],
  reviewItems: ['b1-m4-l4'],
  prerequisites: ['b1-m4-l4'],
}
