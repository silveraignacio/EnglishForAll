import type { Lesson } from '../../types'

export const lesson32SimpleVsContinuous: Lesson = {
  id: 'b1-m3-l2',
  moduleId: 'm3-present-perfect-continuous',
  order: 1,
  title: 'Present Perfect Simple vs Continuous',
  objective: 'Diferenciar el present perfect simple (resultado) del present perfect continuous (actividad en progreso o con efecto visible).',
  explanation_es: `Ahora vamos a diferenciar dos tiempos que parecen parecidos: el present perfect simple (que ya conoces de A2) y el present perfect continuous (B1).

PRESENT PERFECT SIMPLE (have/has + past participle):
Sirve para hablar del RESULTADO o de la CANTIDAD TOTAL de una acción.
- I have written three emails. = He escrito tres correos. (resultado: hay 3 correos)
- She has lived here for 5 years. = Ha vivido aquí durante 5 años. (total de tiempo)

PRESENT PERFECT CONTINUOUS (have/has + been + -ing):
Sirve para enfatizar la ACTIVIDAD EN PROGRESO o el efecto visible de una actividad reciente.
- I have been writing emails all morning. = He estado escribiendo correos toda la mañana. (la actividad, no cuántos)
- She has been living here for 5 years. = Lleva 5 años viviendo aquí. (énfasis en la acción en curso)

¿Cuándo usar cada uno?

1. Foco en el RESULTADO / cuántos / cuánto en total → SIMPLE.
   - I have written three emails.
   - How many books have you read?

2. Foco en la ACTIVIDAD en sí / cuánto tiempo seguido → CONTINUOUS.
   - I have been writing emails all morning.
   - You look tired. Have you been working?

3. Con FOR + tiempo y acciones que duran, AMBOS pueden ser correctos, pero el continuous enfatiza que la acción está en curso:
   - She has lived here for 5 years. (hecho general)
   - She has been living here for 5 years. (énfasis en que sigue viviendo aquí, quizá temporalmente)

4. Con verbos de estado (know, like, want, believe, be) casi siempre usamos SIMPLE:
   - I have known him for years. (no: I have been knowing)
   - She has wanted a dog since she was a child.`,
  examples: [
    { english: 'I have written three emails.', spanish: 'He escrito tres correos.', note: 'Simple: foco en el resultado (3 correos).' },
    { english: 'I have been writing emails all morning.', spanish: 'He estado escribiendo correos toda la mañana.', note: 'Continuous: foco en la actividad.' },
    { english: 'She has lived here for 5 years.', spanish: 'Ha vivido aquí durante 5 años.', note: 'Simple: hecho total.' },
    { english: 'She has been living here for 5 years.', spanish: 'Lleva 5 años viviendo aquí.', note: 'Continuous: énfasis en la acción en curso.' },
    { english: 'I have known him for years.', spanish: 'Lo conozco desde hace años.', note: 'Verbo de estado (know) → siempre simple.' },
    { english: 'My hands are dirty because I have been painting the wall.', spanish: 'Tengo las manos sucias porque he estado pintando la pared.', note: 'Continuous: efecto visible de la actividad.' },
  ],
  rule: `Present perfect simple:
have/has + past participle → RESULTADO o cantidad total.
- I have written three emails.

Present perfect continuous:
have/has + been + -ing → ACTIVIDAD en progreso o efecto visible.
- I have been writing emails all morning.

Con for + tiempo:
- Simple: She has lived here for 5 years. (hecho)
- Continuous: She has been living here for 5 years. (énfasis en la actividad)

Verbos de estado (know, like, want) → solo simple:
- I have known him for years.`,
  commonMistakes: [
    { wrong: '❌ I have written emails all morning. (cuando quieres enfatizar la actividad)', correct: '✅ I have been writing emails all morning.', explanation: 'Cuando el foco es la actividad en progreso y no el resultado, usamos el continuous (have been + -ing).' },
    { wrong: '❌ I have been knowing him for years.', correct: '✅ I have known him for years.', explanation: 'Los verbos de estado como "know" no se usan en continuo. Con ellos usamos siempre el present perfect simple.' },
    { wrong: '❌ I have being writing emails.', correct: '✅ I have been writing emails.', explanation: 'La forma continua lleva "been", no "being": have + been + -ing.' },
    { wrong: '❌ She has been work here for 5 years.', correct: '✅ She has been working here for 5 years.', explanation: 'Después de "been" el verbo lleva -ing: been working.' },
  ],
  vocabulary: [
    { word: 'result', translation_es: 'resultado', level: 'B1', category: 'grammar concepts', partOfSpeech: 'noun', example: 'The result is three emails.', exampleTranslation: 'El resultado son tres correos.' },
    { word: 'activity', translation_es: 'actividad', level: 'B1', category: 'grammar concepts', partOfSpeech: 'noun', example: 'The activity is still in progress.', exampleTranslation: 'La actividad sigue en curso.' },
    { word: 'state verb', translation_es: 'verbo de estado', level: 'B1', category: 'grammar concepts', partOfSpeech: 'noun phrase', example: 'Know and like are state verbs.', exampleTranslation: 'Know y like son verbos de estado.' },
    { word: 'paint', translation_es: 'pintar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'I have been painting the wall.', exampleTranslation: 'He estado pintando la pared.' },
    { word: 'whole', translation_es: 'todo/entero', level: 'B1', category: 'quantifiers', partOfSpeech: 'adjective', example: 'All morning / the whole morning.', exampleTranslation: 'Toda la mañana.' },
    { word: 'since', translation_es: 'desde', level: 'B1', category: 'time', partOfSpeech: 'preposition', example: 'She has wanted a dog since childhood.', exampleTranslation: 'Ha querido un perro desde la infancia.' },
  ],
  grammarPoints: [
    {
      id: 'gp-pp-simple-vs-continuous',
      level: 'B1',
      name: 'Present perfect simple vs continuous',
      explanation_es: 'El simple enfatiza el resultado o la cantidad total (have/has + participle); el continuous enfatiza la actividad en curso o su efecto visible (have/has + been + -ing).',
      formula: 'Simple: have/has + pp | Continuous: have/has + been + -ing',
      examples: ['I have written three emails.', 'I have been writing emails all morning.', 'She has lived here for 5 years.', 'She has been living here for 5 years.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m3-l2-ex1',
      type: 'multiple_choice',
      concept: 'present perfect simple vs continuous',
      difficulty: 2,
      prompt: '¿Simple o continuous? "I have written three emails." (resultado)',
      promptTranslation: 'He escrito tres correos.',
      correctAnswer: 'present perfect simple',
      options: ['present perfect simple', 'present perfect continuous'],
      explanation: '"Three emails" indica una cantidad total/resultado → present perfect simple (have + participle).',
    },
    {
      id: 'b1-m3-l2-ex2',
      type: 'multiple_choice',
      concept: 'present perfect simple vs continuous',
      difficulty: 2,
      prompt: '¿Simple o continuous? "I have been writing emails all morning." (actividad)',
      promptTranslation: 'He estado escribiendo correos toda la mañana.',
      correctAnswer: 'present perfect continuous',
      options: ['present perfect simple', 'present perfect continuous'],
      explanation: '"All morning" + el foco en la actividad en curso → present perfect continuous (have been + -ing).',
    },
    {
      id: 'b1-m3-l2-ex3',
      type: 'fill_blank',
      concept: 'present perfect simple vs continuous',
      difficulty: 3,
      prompt: 'Completa (simple o continuous): "I have ___ (write) three emails."',
      promptTranslation: 'He escrito tres correos.',
      correctAnswer: 'written',
      acceptedAnswers: ['written'],
      explanation: 'Hay un resultado concreto (tres correos) → simple → have + participle: written.',
    },
    {
      id: 'b1-m3-l2-ex4',
      type: 'fill_blank',
      concept: 'present perfect simple vs continuous',
      difficulty: 3,
      prompt: 'Completa (simple o continuous): "I have been ___ (write) emails all morning."',
      promptTranslation: 'He estado escribiendo correos toda la mañana.',
      correctAnswer: 'writing',
      acceptedAnswers: ['writing'],
      explanation: 'Foco en la actividad (toda la mañana) → continuous → have been + -ing: writing.',
    },
    {
      id: 'b1-m3-l2-ex5',
      type: 'multiple_choice',
      concept: 'present perfect simple vs continuous',
      difficulty: 3,
      prompt: 'Completa con la opción correcta: "My hands are dirty because I have been ___ the wall."',
      promptTranslation: 'Tengo las manos sucias porque he estado pintando la pared.',
      correctAnswer: 'painting',
      options: ['painting', 'painted', 'paint'],
      explanation: 'El efecto visible (manos sucias) indica actividad reciente → continuous → have been painting.',
    },
    {
      id: 'b1-m3-l2-ex6',
      type: 'select_correct',
      concept: 'present perfect simple vs continuous',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Lo conozco desde hace años.',
      correctAnswer: 'I have known him for years.',
      options: [
        'I have known him for years.',
        'I have been knowing him for years.',
        'I have been known him for years.',
      ],
      explanation: '"Know" es un verbo de estado → nunca se usa en continuo. La forma correcta es el simple: I have known him for years.',
    },
    {
      id: 'b1-m3-l2-ex7',
      type: 'translate',
      concept: 'present perfect simple vs continuous',
      difficulty: 4,
      prompt: 'Traduce: "He escrito tres correos." (resultado)',
      correctAnswer: 'I have written three emails.',
      acceptedAnswers: [
        'I have written three emails',
        'I have written three emails.',
        'I\'ve written three emails',
        'I\'ve written three emails.',
      ],
      acceptApproximate: true,
      explanation: 'Es un resultado concreto (tres) → present perfect simple: have + participle (written).',
    },
    {
      id: 'b1-m3-l2-ex8',
      type: 'translate',
      concept: 'present perfect simple vs continuous',
      difficulty: 4,
      prompt: 'Traduce: "He estado escribiendo correos toda la mañana." (actividad)',
      correctAnswer: 'I have been writing emails all morning.',
      acceptedAnswers: [
        'I have been writing emails all morning',
        'I have been writing emails all morning.',
        'I\'ve been writing emails all morning',
        'I\'ve been writing emails all morning.',
      ],
      acceptApproximate: true,
      explanation: 'El foco es la actividad en curso (toda la mañana) → continuous: have been + writing.',
    },
    {
      id: 'b1-m3-l2-ex9',
      type: 'error_correction',
      concept: 'present perfect simple vs continuous',
      difficulty: 4,
      prompt: 'Corrige el error (verbo de estado): "I have been knowing her since 2019."',
      correctAnswer: 'I have known her since 2019.',
      acceptedAnswers: [
        'I have known her since 2019',
        'I have known her since 2019.',
      ],
      acceptApproximate: true,
      explanation: '"Know" es un verbo de estado y no se usa en continuo. → I have known her since 2019.',
    },
    {
      id: 'b1-m3-l2-ex10',
      type: 'true_false',
      concept: 'present perfect simple vs continuous',
      difficulty: 3,
      prompt: '"She has lived here for 5 years" y "She has been living here for 5 years" son ambas frases correctas.',
      correctAnswer: 'true',
      explanation: 'Correcto. La primera es un hecho general (simple); la segunda enfatiza la acción en curso (continuous). Ambas son válidas con for + tiempo.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m3-l2-mt1',
      type: 'multiple_choice',
      concept: 'present perfect simple vs continuous',
      difficulty: 2,
      prompt: 'Completa: "I have ___ three emails." (resultado)',
      promptTranslation: 'He escrito tres correos.',
      correctAnswer: 'written',
      options: ['written', 'been writing', 'writing'],
      explanation: 'Resultado concreto (tres correos) → simple: have + participle (written). No usamos continuous aquí.',
    },
    {
      id: 'b1-m3-l2-mt2',
      type: 'fill_blank',
      concept: 'present perfect simple vs continuous',
      difficulty: 3,
      prompt: 'Completa (continuous): "You look tired. Have you been ___ (work) a lot?"',
      promptTranslation: 'Pareces cansado. ¿Has estado trabajando mucho?',
      correctAnswer: 'working',
      acceptedAnswers: ['working'],
      explanation: 'El cansancio es el efecto visible de la actividad → continuous → have you been working.',
    },
    {
      id: 'b1-m3-l2-mt3',
      type: 'error_correction',
      concept: 'present perfect simple vs continuous',
      difficulty: 4,
      prompt: 'Corrige el error: "I have been knowing him for years."',
      correctAnswer: 'I have known him for years.',
      acceptedAnswers: [
        'I have known him for years',
        'I have known him for years.',
      ],
      acceptApproximate: true,
      explanation: '"Know" es un verbo de estado → solo usamos present perfect simple: I have known him for years.',
    },
    {
      id: 'b1-m3-l2-mt4',
      type: 'true_false',
      concept: 'present perfect simple vs continuous',
      difficulty: 3,
      prompt: 'El present perfect continuous (have been + -ing) se usa para enfatizar la actividad en progreso o su efecto visible.',
      correctAnswer: 'true',
      explanation: 'Correcto. El simple enfatiza el resultado; el continuous enfatiza la actividad en curso o su efecto visible.',
    },
  ],
  reviewItems: ['b1-m3-l1'],
  prerequisites: ['b1-m3-l1'],
}
