import type { Lesson } from '../../types'

export const lesson52FuturePerfect: Lesson = {
  id: 'b1-m5-l2',
  moduleId: 'm5-future-perfect-continuous',
  order: 1,
  title: 'Future Perfect: will have + participio',
  objective: 'Hablar de acciones que estarán terminadas antes de un momento futuro con "will have + participio".',
  explanation_es: `El "future perfect" (futuro perfecto) se usa para hablar de una acción que estará COMPLETADA antes de un momento concreto del futuro.

Se forma con:
- will have + participio pasado

Ejemplos:
- By 2030, I will have finished my degree. = Para 2030, habré terminado mi carrera.
- She will have arrived by 8 p.m. = Habrá llegado a las 8 de la tarde.
- We will have built the house by next year. = Habremos construido la casa para el próximo año.

En español lo expresamos con "habré + participio": habré terminado, habrá llegado, habremos construido...

La clave es "BY" (para / antes de):
- by 2030 = para 2030
- by 8 p.m. = para las 8 de la tarde
- by next year = para el próximo año
- by Friday = para el viernes

Usamos "by" + un momento futuro para indicar que la acción se completará antes de ese momento.

Contracción: I'll have, She'll have, We'll have.

¡OJO con el participio!
- Después de "will have" SIEMPRE va el participio pasado.
- ❌ will have finish → ✅ will have finished
- ❌ will have went → ✅ will have gone`,
  examples: [
    { english: 'By 2030, I will have finished my degree.', spanish: 'Para 2030, habré terminado mi carrera.', note: 'will have + finished (participio).' },
    { english: 'She will have arrived by 8 p.m.', spanish: 'Habrá llegado a las 8 de la tarde.', note: 'by + hora.' },
    { english: 'We will have built the house by next year.', spanish: 'Habremos construido la casa para el próximo año.', note: 'by + periodo.' },
    { english: 'By Friday, they will have sold all the tickets.', spanish: 'Para el viernes, habrán vendido todas las entradas.', note: 'by Friday.' },
    { english: 'I\'ll have finished the report by 5 o\'clock.', spanish: 'Habré terminado el informe para las 5.', note: 'I\'ll have = I will have.' },
  ],
  rule: `Fórmula:
will + have + participio pasado
- I will have finished.
- She will have arrived.
- We will have built.

Uso:
- Acción completada antes de un momento futuro: By 2030, I will have finished my degree.
- Se usa con "by" + momento futuro: by 2030, by 8 p.m., by next year, by Friday.

Contracción: I'll have, She'll have, We'll have.

OJO:
- Tras "will have" va el PARTICIPIO pasado: finished, arrived, built, gone.
- ❌ will have finish → ✅ will have finished.
- ❌ will have went → ✅ will have gone.`,
  commonMistakes: [
    { wrong: '❌ I will have finish my degree by 2030.', correct: '✅ I will have finished my degree by 2030.', explanation: 'Después de "will have" va el participio: finished, no "finish".' },
    { wrong: '❌ She will has arrived by 8 p.m.', correct: '✅ She will have arrived by 8 p.m.', explanation: 'Tras "will" siempre "have", nunca "has": will have arrived.' },
    { wrong: '❌ I will have went home by then.', correct: '✅ I will have gone home by then.', explanation: 'Después de "have" va el participio (gone), no el pasado (went).' },
    { wrong: '❌ We will have build the house by next year.', correct: '✅ We will have built the house by next year.', explanation: 'El participio de "build" es "built": will have built.' },
  ],
  vocabulary: [
    { word: 'degree', translation_es: 'carrera, título universitario', level: 'B1', category: 'education', partOfSpeech: 'noun', example: 'I will have finished my degree by 2030.', exampleTranslation: 'Habré terminado mi carrera para 2030.' },
    { word: 'by', translation_es: 'para (antes de), hacia', level: 'B1', category: 'time', partOfSpeech: 'preposition', example: 'She will have arrived by 8 p.m.', exampleTranslation: 'Habrá llegado para las 8 de la tarde.' },
    { word: 'build', translation_es: 'construir', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'We will have built the house.', exampleTranslation: 'Habremos construido la casa.' },
    { word: 'sell', translation_es: 'vender', level: 'A2', category: 'verbs', partOfSpeech: 'verb', example: 'They will have sold all the tickets.', exampleTranslation: 'Habrán vendido todas las entradas.' },
    { word: 'report', translation_es: 'informe', level: 'B1', category: 'work', partOfSpeech: 'noun', example: 'I\'ll have finished the report by 5.', exampleTranslation: 'Habré terminado el informe para las 5.' },
    { word: 'arrive', translation_es: 'llegar', level: 'A2', category: 'travel', partOfSpeech: 'verb', example: 'She will have arrived by 8 p.m.', exampleTranslation: 'Habrá llegado para las 8 de la tarde.' },
  ],
  grammarPoints: [
    {
      id: 'gp-future-perfect',
      level: 'B1',
      name: 'Future perfect (will have + participle)',
      explanation_es: 'El future perfect expresa acciones completadas antes de un momento futuro. Se forma con will have + participio y suele usarse con "by" + momento futuro.',
      formula: 'will + have + past participle',
      examples: ['By 2030, I will have finished my degree.', 'She will have arrived by 8 p.m.', 'We will have built the house by next year.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m5-l2-ex1',
      type: 'multiple_choice',
      concept: 'future perfect form',
      difficulty: 1,
      prompt: 'Completa: "By 2030, I ___ have finished my degree."',
      promptTranslation: 'Para 2030, habré terminado mi carrera.',
      correctAnswer: 'will',
      options: ['will', 'am', 'was'],
      explanation: 'Future perfect = will have + participio. → I will have finished my degree.',
    },
    {
      id: 'b1-m5-l2-ex2',
      type: 'multiple_choice',
      concept: 'future perfect form',
      difficulty: 1,
      prompt: 'Completa: "She will have ___ by 8 p.m."',
      promptTranslation: 'Habrá llegado para las 8 de la tarde.',
      correctAnswer: 'arrived',
      options: ['arrived', 'arrive', 'arrives'],
      explanation: 'Después de "will have" va el participio: arrived. → She will have arrived by 8 p.m.',
    },
    {
      id: 'b1-m5-l2-ex3',
      type: 'fill_blank',
      concept: 'future perfect form',
      difficulty: 2,
      prompt: 'Completa con el participio: "We will have ___ (build) the house by next year."',
      promptTranslation: 'Habremos construido la casa para el próximo año.',
      correctAnswer: 'built',
      acceptedAnswers: ['built'],
      explanation: 'El participio de "build" es "built": will have built.',
    },
    {
      id: 'b1-m5-l2-ex4',
      type: 'fill_blank',
      concept: 'future perfect form',
      difficulty: 2,
      prompt: 'Completa con la preposición de tiempo: "I will have finished my degree ___ 2030."',
      promptTranslation: 'Habré terminado mi carrera para 2030.',
      correctAnswer: 'by',
      acceptedAnswers: ['by'],
      explanation: '"By" + momento futuro indica que la acción se completará antes de ese momento: by 2030.',
    },
    {
      id: 'b1-m5-l2-ex5',
      type: 'reorder',
      concept: 'future perfect form',
      difficulty: 3,
      prompt: 'Ordena la frase (future perfect):',
      promptTranslation: 'Habremos construido la casa para el próximo año.',
      words: ['We', 'will', 'have', 'built', 'the', 'house', 'by', 'next', 'year.'],
      correctAnswer: 'We will have built the house by next year.',
      explanation: 'Estructura: will + have + participio (built) + by + momento futuro. → We will have built the house by next year.',
    },
    {
      id: 'b1-m5-l2-ex6',
      type: 'true_false',
      concept: 'future perfect meaning',
      difficulty: 2,
      prompt: 'Usamos el future perfect para acciones que estarán terminadas antes de un momento futuro.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. El future perfect (will have + participio) describe acciones completadas antes de un momento futuro.',
    },
    {
      id: 'b1-m5-l2-ex7',
      type: 'select_correct',
      concept: 'future perfect form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Habré terminado mi carrera para 2030.',
      correctAnswer: 'By 2030, I will have finished my degree.',
      options: [
        'By 2030, I will have finished my degree.',
        'By 2030, I will have finish my degree.',
        'By 2030, I will has finished my degree.',
        'By 2030, I will have finishs my degree.',
      ],
      explanation: 'Estructura correcta: will + have + participio (finished). "Will have finish", "will has" y "finishs" son incorrectos.',
    },
    {
      id: 'b1-m5-l2-ex8',
      type: 'translate',
      concept: 'future perfect',
      difficulty: 3,
      prompt: 'Traduce: "Para 2030, habré terminado mi carrera."',
      correctAnswer: 'By 2030, I will have finished my degree.',
      acceptedAnswers: [
        'By 2030, I will have finished my degree',
        'By 2030, I will have finished my degree.',
        'By 2030, I\'ll have finished my degree',
        'By 2030, I\'ll have finished my degree.',
        'by 2030, i will have finished my degree',
      ],
      acceptApproximate: true,
      explanation: '"Para 2030" = By 2030. "habré terminado" = I will have finished (will have + participio). "mi carrera" = my degree.',
    },
    {
      id: 'b1-m5-l2-ex9',
      type: 'translate',
      concept: 'future perfect',
      difficulty: 3,
      prompt: 'Traduce: "Habrá llegado a las 8 de la tarde."',
      correctAnswer: 'She will have arrived by 8 p.m.',
      acceptedAnswers: [
        'She will have arrived by 8 p.m',
        'She will have arrived by 8 p.m.',
        "She'll have arrived by 8 p.m",
        "She'll have arrived by 8 p.m.",
        'she will have arrived by 8 p.m',
      ],
      acceptApproximate: true,
      explanation: '"Habrá llegado" = She will have arrived (will have + participio). "a las 8 de la tarde" = by 8 p.m.',
    },
    {
      id: 'b1-m5-l2-ex10',
      type: 'error_correction',
      concept: 'future perfect form',
      difficulty: 4,
      prompt: 'Corrige el error: "I will have finish my degree by 2030."',
      correctAnswer: 'I will have finished my degree by 2030.',
      acceptedAnswers: [
        'I will have finished my degree by 2030',
        'I will have finished my degree by 2030.',
        'i will have finished my degree by 2030',
      ],
      acceptApproximate: true,
      explanation: 'Después de "will have" va el participio: finished, no "finish".',
    },
    {
      id: 'b1-m5-l2-ex11',
      type: 'error_correction',
      concept: 'future perfect form',
      difficulty: 4,
      prompt: 'Corrige el error: "She will has arrived by 8 p.m."',
      correctAnswer: 'She will have arrived by 8 p.m.',
      acceptedAnswers: [
        'She will have arrived by 8 p.m',
        'She will have arrived by 8 p.m.',
        'she will have arrived by 8 p.m',
      ],
      acceptApproximate: true,
      explanation: 'Tras "will" siempre "have", nunca "has": will have arrived.',
    },
    {
      id: 'b1-m5-l2-ex12',
      type: 'match',
      concept: 'future perfect match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su traducción:',
      pairs: [
        { left: 'By 2030, I will have finished my degree.', right: 'Para 2030, habré terminado mi carrera.' },
        { left: 'She will have arrived by 8 p.m.', right: 'Habrá llegado para las 8 de la tarde.' },
        { left: 'We will have built the house by next year.', right: 'Habremos construido la casa para el próximo año.' },
        { left: 'They will have sold all the tickets by Friday.', right: 'Habrán vendido todas las entradas para el viernes.' },
        { left: "I'll have finished the report by 5 o'clock.", right: 'Habré terminado el informe para las 5.' },
      ],
      correctAnswer: 'By 2030, I will have finished my degree.=Para 2030, habré terminado mi carrera., She will have arrived by 8 p.m.=Habrá llegado para las 8 de la tarde., We will have built the house by next year.=Habremos construido la casa para el próximo año., They will have sold all the tickets by Friday.=Habrán vendido todas las entradas para el viernes., I\'ll have finished the report by 5 o\'clock.=Habré terminado el informe para las 5.',
      explanation: '"Will have + participio" equivale a "habré/habrá/habremos + participio". "By" = para (antes de un momento futuro).',
    },
  ],
  miniTest: [
    {
      id: 'b1-m5-l2-mt1',
      type: 'multiple_choice',
      concept: 'future perfect form',
      difficulty: 1,
      prompt: 'Completa: "We ___ have built the house by next year."',
      promptTranslation: 'Habremos construido la casa para el próximo año.',
      correctAnswer: 'will',
      options: ['will', 'are', 'have'],
      explanation: 'Future perfect = will have + participio. → We will have built the house.',
    },
    {
      id: 'b1-m5-l2-mt2',
      type: 'fill_blank',
      concept: 'future perfect form',
      difficulty: 2,
      prompt: 'Completa con el participio: "By 2030, I will have ___ (finish) my degree."',
      promptTranslation: 'Para 2030, habré terminado mi carrera.',
      correctAnswer: 'finished',
      acceptedAnswers: ['finished'],
      explanation: 'Después de "will have" va el participio: finished. → I will have finished.',
    },
    {
      id: 'b1-m5-l2-mt3',
      type: 'fill_blank',
      concept: 'future perfect form',
      difficulty: 2,
      prompt: 'Completa con la preposición de tiempo: "She will have arrived ___ 8 p.m."',
      promptTranslation: 'Habrá llegado para las 8 de la tarde.',
      correctAnswer: 'by',
      acceptedAnswers: ['by'],
      explanation: '"By" + hora futura: by 8 p.m. (antes de las 8).',
    },
    {
      id: 'b1-m5-l2-mt4',
      type: 'error_correction',
      concept: 'future perfect form',
      difficulty: 4,
      prompt: 'Corrige el error: "I will have went home by then."',
      correctAnswer: 'I will have gone home by then.',
      acceptedAnswers: ['I will have gone home by then', 'I will have gone home by then.', 'i will have gone home by then'],
      acceptApproximate: true,
      explanation: 'Después de "have" va el participio (gone), no el pasado (went).',
    },
    {
      id: 'b1-m5-l2-mt5',
      type: 'translate',
      concept: 'future perfect',
      difficulty: 3,
      prompt: 'Traduce: "Habremos construido la casa para el próximo año."',
      correctAnswer: 'We will have built the house by next year.',
      acceptedAnswers: [
        'We will have built the house by next year',
        'We will have built the house by next year.',
        'we will have built the house by next year',
      ],
      acceptApproximate: true,
      explanation: '"Habremos construido" = We will have built. "para el próximo año" = by next year.',
    },
  ],
  reviewItems: ['b1-m5-l1'],
  prerequisites: ['b1-m5-l1'],
}
