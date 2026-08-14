import type { Lesson } from '../../types'

export const lesson101FuturePerfectContinuous: Lesson = {
  id: 'b2-m10-l1',
  moduleId: 'm10-future-perspectives',
  order: 0,
  title: 'Future Perfect Continuous: Duración hacia el futuro',
  objective: 'Usar "will have been + -ing" para hablar de una acción que estará en progreso durante un período determinado hasta un punto futuro, enfatizando la duración.',
  explanation_es: `Ya conocés el future perfect ("will have + participio"): una acción que estará completada en un momento futuro. Ahora vamos a combinar eso con el continuous (la forma -ing) para hablar de cuánto TIEMPO habrá pasado haciendo algo hasta ese momento futuro.

Estructura:
- will have been + -ing → una acción que estará en progreso durante X tiempo hasta un punto futuro.

Ejemplos:
- By 2030, I will have been working here for 20 years. = Habré estado trabajando acá durante 20 años para 2030.
- By the time you arrive, I will have been cooking for two hours. = Habré estado cocinando durante dos horas cuando llegues.

Puntos importantes:

1. El énfasis está en la DURACIÓN: cuánto tiempo continuará la acción. Siempre hay una duración explícita (for 2 years, for 3 hours) o implícita por contexto.

2. Estructura: will + have + been + verbo-ing. El verbo SIEMPRE en -ing, sin excepciones.

3. NO confundir con future perfect simple:
   - "I will have worked for 20 years" (acción completada, duración total)
   - "I will have been working for 20 years" (acción en progreso durante esos 20 años, sigue en ese momento)
   En realidad, la diferencia es sutil; en B2 el énfasis es la duración continua.

4. Se usa mucho con "by the time + presente" (By the time you arrive...) o "by + fecha futura" (By 2030...).

5. Negación: will not have been / won't have been + -ing. Las preguntas con will: Will you have been waiting long?

6. Contexto: planes a largo plazo, proyectos que duran años, situaciones de espera/paciencia, predicciones sobre cambios graduales.`,
  examples: [
    { english: 'By 2030, I will have been living in this city for 15 years.', spanish: 'Para 2030, habré estado viviendo en esta ciudad durante 15 años.' },
    { english: 'By the time she finishes her degree, she will have been studying for 4 years.', spanish: 'Cuando termine su carrera, habrá estado estudiando durante 4 años.' },
    { english: 'They will have been playing football for 2 hours by 6 PM.', spanish: 'Habrán estado jugando fútbol durante 2 horas para las 6 PM.' },
    { english: 'By next month, she will have been working on this project for 6 months.', spanish: 'Para el próximo mes, habrá estado trabajando en este proyecto durante 6 meses.' },
    { english: 'He won\'t have been waiting very long when you arrive.', spanish: 'No habrá estado esperando mucho tiempo cuando llegues.' },
    { english: 'By the end of this year, I will have been learning English for 5 years.', spanish: 'Para fin de año, habré estado aprendiendo inglés durante 5 años.' },
  ],
  rule: `Fórmula:
will have been + -ing (duración hasta un punto futuro)

Afirmativa: subject + will have been + verbo-ing + duración
I will have been working here for 20 years. (Para ese momento, habrán sido 20 años trabajando.)

Negativa: subject + will not have been (won't have been) + verbo-ing + duración
She won't have been waiting long by then.

Preguntas: Will + subject + have been + verbo-ing...?
Will you have been working here long by the time you retire?

Reglas de formación:
1. Will + have + been + verbo-ing (este orden es fijo).
2. El verbo SIEMPRE en forma -ing, sin excepciones.
3. Suele ir acompañado de una duración (for 2 hours, for 5 years) o contexto temporal (by 2030, by the time...).`,
  commonMistakes: [
    { wrong: '❌ I will have work here for 20 years.', correct: '✅ I will have been working here for 20 years.', explanation: 'Necesitamos "have been" + -ing para expresar duración. "Will have work" no existe.' },
    { wrong: '❌ She will been working on it for months.', correct: '✅ She will have been working on it for months.', explanation: 'Falta el "have": will HAVE been -ing, no será "will been".' },
    { wrong: '❌ By 2030, I will been writing novels for 10 years.', correct: '✅ By 2030, I will have been writing novels for 10 years.', explanation: 'La estructura correcta es will HAVE been -ing.' },
    { wrong: '❌ They will have be living there for years.', correct: '✅ They will have been living there for years.', explanation: '"Been" es el participio pasado de "be"; después va el -ing del verbo principal.' },
  ],
  vocabulary: [
    { word: 'to progress', translation_es: 'progresar', level: 'B2', category: 'future', partOfSpeech: 'verb', example: 'The work will have been progressing steadily by then.', exampleTranslation: 'El trabajo habrá estado progresando constantemente para entonces.' },
    { word: 'duration', translation_es: 'duración', level: 'B2', category: 'time', partOfSpeech: 'noun', example: 'The project\'s duration will have been 6 months by its end.', exampleTranslation: 'La duración del proyecto habrá sido de 6 meses al final.' },
    { word: 'to accumulate', translation_es: 'acumular', level: 'B2', category: 'future', partOfSpeech: 'verb', example: 'He will have been accumulating experience for years.', exampleTranslation: 'Habrá estado acumulando experiencia durante años.' },
    { word: 'continuous', translation_es: 'continuo', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: 'This will have been a continuous effort over time.', exampleTranslation: 'Este habrá sido un esfuerzo continuo con el tiempo.' },
    { word: 'by then', translation_es: 'para entonces', level: 'B2', category: 'time', partOfSpeech: 'phrase', example: 'By then, I will have been living abroad for 5 years.', exampleTranslation: 'Para entonces, habré estado viviendo en el extranjero durante 5 años.' },
    { word: 'to emphasize', translation_es: 'enfatizar', level: 'B2', category: 'communication', partOfSpeech: 'verb', example: 'The tense emphasizes the continuous nature of the action.', exampleTranslation: 'El tiempo enfatiza la naturaleza continua de la acción.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-future-perfect-continuous',
      level: 'B2',
      name: 'Future Perfect Continuous',
      explanation_es: 'Expresa una acción que estará en progreso hasta un punto futuro, enfatizando cuánto tiempo habrá durado. Estructura: will have been + -ing.',
      formula: 'will have been + -ing + duration',
      examples: ['I will have been working here for 20 years.', 'By 2030, she will have been living in London.', 'They won\'t have been waiting long.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m10-l1-ex1',
      type: 'multiple_choice',
      concept: 'future perfect continuous form',
      difficulty: 3,
      prompt: 'Completa: "By 2030, I ___ here for 20 years."',
      promptTranslation: 'Para 2030, habré estado trabajando acá durante 20 años.',
      correctAnswer: 'will have been working',
      options: ['will have been working', 'will have worked', 'will be working'],
      explanation: 'Para expresar duración hasta un punto futuro, usamos "will have been + -ing". "Will have worked" es perfecto simple; "will be working" es solo futuro continuo.',
    },
    {
      id: 'b2-m10-l1-ex2',
      type: 'fill_blank',
      concept: 'future perfect continuous negative',
      difficulty: 3,
      prompt: 'Completa: "She ___ very long when you arrive."',
      promptTranslation: 'No habrá estado esperando mucho tiempo cuando llegues.',
      correctAnswer: 'won\'t have been waiting',
      explanation: 'Forma negativa: will not (won\'t) + have been + -ing.',
    },
    {
      id: 'b2-m10-l1-ex3',
      type: 'error_correction',
      concept: 'future perfect continuous structure',
      difficulty: 4,
      prompt: 'Encuentra el error: "By next year, they will been living abroad for three years."',
      correctAnswer: 'By next year, they will have been living abroad for three years.',
      acceptedAnswers: [
        'By next year, they will have been living abroad for three years',
        'By next year, they will have been living abroad for three years.',
      ],
      acceptApproximate: true,
      explanation: 'Falta "have": will HAVE been + -ing. No es "will been".',
    },
    {
      id: 'b2-m10-l1-ex4',
      type: 'translate',
      concept: 'future perfect continuous translation',
      difficulty: 4,
      prompt: 'Traduce: "Para cuando termines, habré estado estudiando durante tres horas."',
      correctAnswer: 'By the time you finish, I will have been studying for three hours.',
      acceptedAnswers: [
        'By the time you finish, I will have been studying for three hours',
        'By the time you finish, I will have been studying for three hours.',
      ],
      acceptApproximate: true,
      explanation: '"Habré estado estudiando" = I will have been studying. "Durante tres horas" = for three hours.',
    },
    {
      id: 'b2-m10-l1-ex5',
      type: 'reorder',
      concept: 'future perfect continuous word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Habré estado trabajando en este proyecto durante 6 meses.',
      words: ['I', 'will', 'have', 'been', 'working', 'on', 'this', 'project', 'for', '6', 'months.'],
      correctAnswer: 'I will have been working on this project for 6 months.',
      explanation: 'Orden: sujeto + will + have + been + -ing + resto. → I will have been working on this project for 6 months.',
    },
    {
      id: 'b2-m10-l1-ex6',
      type: 'select_correct',
      concept: 'future perfect continuous vs future perfect',
      difficulty: 4,
      prompt: 'Elegí la opción que ENFATIZA la duración continua hasta 2030:',
      correctAnswer: 'By 2030, I will have been living here for 25 years.',
      options: [
        'By 2030, I will have been living here for 25 years.',
        'By 2030, I will have lived here for 25 years.',
      ],
      explanation: '"Will have been living" enfatiza la duración continua del futuro perfecto continuo. "Will have lived" es solo perfecto simple.',
    },
    {
      id: 'b2-m10-l1-ex7',
      type: 'true_false',
      concept: 'future perfect continuous meaning',
      difficulty: 3,
      prompt: '"She will have been working on this project for 6 months" significa que para ese momento habrán sido 6 meses y seguirá trabajando.',
      correctAnswer: 'true',
      explanation: 'Correcto. El future perfect continuous enfatiza la duración y la continuidad hasta ese punto futuro.',
    },
    {
      id: 'b2-m10-l1-ex8',
      type: 'match',
      concept: 'future perfect continuous contexts',
      difficulty: 4,
      prompt: 'Emparejá las frases con sus contextos:',
      correctAnswer: '',
      pairs: [
        { left: 'By the time I retire, I will have been teaching for 30 years.', right: 'Duración acumulada hasta un hito futuro' },
        { left: 'They will have been building the house for 2 years by next summer.', right: 'Proyecto con duración conocida' },
        { left: 'By 2050, we will have been living with climate change for decades.', right: 'Predicción a largo plazo' },
        { left: 'She won\'t have been studying languages long before she becomes fluent.', right: 'Comparación de duraciones' },
      ],
      explanation: 'Cada contexto muestra un uso común del future perfect continuous.',
    },
    {
      id: 'b2-m10-l1-ex9',
      type: 'listening',
      concept: 'future perfect continuous listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Un entrevistador pregunta a un ejecutivo de una empresa sobre sus planes a largo plazo. El ejecutivo describe proyectos y duraciones esperadas.',
      listening: {
        audioText:
          "By next year, our company will have been operating in this market for 10 years. We will have been developing new products for 5 years by then. Our team will have been growing steadily, and by 2030, we will have been serving over a million customers. I\'m proud of what we\'ve built so far.",
        questions: [
          {
            id: 'b2-m10-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'How long will the company have been operating in this market by next year?',
            correctAnswer: 'For 10 years',
            options: ['For 5 years', 'For 10 years', 'For 2 years'],
            explanation: '"By next year, our company will have been operating in this market for 10 years."',
          },
          {
            id: 'b2-m10-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'They will have stopped developing new products by 2030.',
            correctAnswer: 'false',
            explanation: 'No, ellos estarán desarrollando productos continuamente. El audio habla de 5 años para entonces.',
          },
          {
            id: 'b2-m10-l1-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'By 2030, how many customers will they have been serving?',
            correctAnswer: 'Over a million',
            options: ['A few thousand', 'Half a million', 'Over a million'],
            explanation: '"By 2030, we will have been serving over a million customers."',
          },
        ],
      },
    },
    {
      id: 'b2-m10-l1-ex10',
      type: 'writing',
      concept: 'future perfect continuous writing',
      difficulty: 4,
      prompt: 'Escribí un ensayo breve (essay) sobre tus planes para los próximos 5 años. Usá al menos 3 estructuras de "will have been + -ing" para describir lo que habrás estado haciendo. Pueden ser planes de estudio, trabajo, viajes, etc.',
      promptTranslation: 'Write about your plans for the next 5 years using future perfect continuous.',
      correctAnswer: '',
      explanation: 'Un buen ensayo usa múltiples ejemplos del future perfect continuous de forma natural, enfatizando duraciones y logros acumulados.',
      taskType: 'essay',
      targetReader: 'a mentor or advisor',
      register: 'formal',
      contentPoints: [
        'Al menos 3 ejemplos de future perfect continuous con duraciones claras',
        'Planes concretos y realistas para los próximos 5 años',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m10-l1-ex11',
      type: 'speaking',
      concept: 'future perfect continuous pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'By 2030, I will have been working here for 20 years.',
      explanation: 'Practicá la entonación natural de frases largas con "will have been". Notá cómo se pronuncia "will have been" casi como "wil-uv-bin" en habla rápida.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m10-l1-mt1',
      type: 'multiple_choice',
      concept: 'future perfect continuous form',
      difficulty: 3,
      prompt: 'Completa: "By 2025, I ___ this job for five years."',
      promptTranslation: 'Para 2025, habré estado haciendo este trabajo durante cinco años.',
      correctAnswer: 'will have been doing',
      options: ['will have been doing', 'will have done', 'will do'],
      explanation: 'Para expresar duración hasta un punto futuro: will have been + -ing.',
    },
    {
      id: 'b2-m10-l1-mt2',
      type: 'error_correction',
      concept: 'future perfect continuous structure',
      difficulty: 4,
      prompt: 'Corrige: "She will been learning English for three years by next month."',
      correctAnswer: 'She will have been learning English for three years by next month.',
      acceptedAnswers: [
        'She will have been learning English for three years by next month',
        'She will have been learning English for three years by next month.',
      ],
      acceptApproximate: true,
      explanation: 'Falta "have": will HAVE been + -ing.',
    },
    {
      id: 'b2-m10-l1-mt3',
      type: 'true_false',
      concept: 'future perfect continuous vs future perfect',
      difficulty: 4,
      prompt: '"I will have been working" y "I will have worked" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation: '"Will have been working" enfatiza la duración continua; "will have worked" es solo una acción completada. La diferencia es sutil pero importante en B2.',
    },
    {
      id: 'b2-m10-l1-mt4',
      type: 'fill_blank',
      concept: 'future perfect continuous negative',
      difficulty: 3,
      prompt: 'Completa: "By then, they ___ for very long."',
      promptTranslation: 'Para entonces, no habrán estado esperando mucho tiempo.',
      correctAnswer: 'won\'t have been waiting',
      explanation: 'Forma negativa: won\'t + have + been + -ing.',
    },
  ],
  reviewItems: ['b1-m5-l1', 'b1-m5-l2'],
  prerequisites: ['b1-m5-l2'],
}
