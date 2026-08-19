import type { Lesson } from '../../types'

export const lesson113SoBecause: Lesson = {
  id: 'b1-m11-l3',
  moduleId: 'm11-linking-words',
  order: 2,
  title: 'so / because / because of / so that (causa y finalidad)',
  objective: 'Expresar causa con because y because of, consecuencia con so, y finalidad con so that.',
  explanation_es: `Estas palabras conectan ideas de causa (por qué pasa algo), consecuencia (qué pasa) y finalidad (para qué).

1) so = así que / por eso. Expresa CONSECUENCIA (resultado).
- It was raining, so we stayed home. = Estaba lloviendo, así que nos quedamos en casa.

2) because = porque. Expresa CAUSA, y va seguido de una oración (sujeto + verbo).
- I was late because the traffic was bad. = Llegué tarde porque el tráfico estaba mal.

3) because of = debido a / por. Va seguido de un SUSTANTIVO o frase nominal, NO de una oración.
- The match was cancelled because of the rain. = El partido se canceló por la lluvia.
- ❌ because of the traffic was bad → ✅ because of the bad traffic.

4) so that = para que. Expresa FINALIDAD (propósito), y va seguido de oración.
- I study every day so that I can pass the exam. = Estudio todos los días para poder aprobar el examen.

¡OJO con "so that"! No dupliques la finalidad:
- ❌ I study so that to pass the exam → ✅ I study so that I can pass the exam.
"so that" ya lleva su oración; no añadas "to" delante.

Comparación:
- because + oración: I stayed home because it was raining.
- because of + sustantivo: I stayed home because of the rain.
- so + resultado: It was raining, so I stayed home.`,
  examples: [
    { english: 'It was raining, so we stayed home.', spanish: 'Estaba lloviendo, así que nos quedamos en casa.', note: 'so = consecuencia.' },
    { english: 'I was late because the traffic was bad.', spanish: 'Llegué tarde porque el tráfico estaba mal.', note: 'because + oración.' },
    { english: 'The match was cancelled because of the rain.', spanish: 'El partido se canceló por la lluvia.', note: 'because of + sustantivo.' },
    { english: 'I study every day so that I can pass the exam.', spanish: 'Estudio todos los días para poder aprobar el examen.', note: 'so that = finalidad.' },
    { english: 'She missed the bus, so she took a taxi.', spanish: 'Perdió el autobús, así que cogió un taxi.' },
  ],
  rule: `- so + resultado: It was raining, so we stayed home.
- because + oración (sujeto + verbo): I was late because the traffic was bad.
- because of + sustantivo: The match was cancelled because of the rain.
- so that + oración (finalidad): I study every day so that I can pass the exam.
- NO se usa "to" después de "so that".`,
  formation: {
    title: 'Cómo se expresan causa, consecuencia y finalidad',
    intro: 'Para conectar ideas usamos so (consecuencia), because (causa + oración), because of (causa + sustantivo) y so that (finalidad + oración).',
    patterns: [
      {
        name: 'so + resultado (consecuencia)',
        formula: 'Oración, + so + oración',
        examples: [
          { english: 'It was raining, so we stayed home.', spanish: 'Estaba lloviendo, así que nos quedamos en casa.' },
          { english: 'She missed the bus, so she took a taxi.', spanish: 'Perdió el autobús, así que cogió un taxi.' },
        ],
        note: '"So" introduce la consecuencia o el resultado, precedido de coma.',
      },
      {
        name: 'because + oración (causa)',
        formula: 'Oración + because + oración',
        examples: [
          { english: 'I was late because the traffic was bad.', spanish: 'Llegué tarde porque el tráfico estaba mal.' },
        ],
        note: '"Because" va seguido de una oración completa (sujeto + verbo).',
      },
      {
        name: 'because of + sustantivo (causa)',
        formula: 'Oración + because of + sustantivo',
        examples: [
          { english: 'The match was cancelled because of the rain.', spanish: 'El partido se canceló por la lluvia.' },
        ],
        note: '"Because of" va seguido de un sustantivo o frase nominal, no de una oración.',
      },
      {
        name: 'so that + oración (finalidad)',
        formula: 'Oración + so that + oración',
        examples: [
          { english: 'I study every day so that I can pass the exam.', spanish: 'Estudio todos los días para poder aprobar el examen.' },
        ],
        note: '"So that" introduce el propósito; suele ir seguido de can/could/will/would.',
      },
    ],
    notes: [
      'La misma idea con dos construcciones: I stayed home because it was raining (causa) / It was raining, so I stayed home (consecuencia).',
      'because + oración (the traffic was bad) vs because of + sustantivo (the bad traffic).',
      'NO se usa "to" después de "so that": so that I can pass (no "so that to pass").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ The match was cancelled because of it was raining.', correct: '✅ The match was cancelled because it was raining. / ... because of the rain.', explanation: '"because of" va seguido de un sustantivo (the rain), no de una oración. Con oración usamos "because".' },
    { wrong: '❌ I study every day so that to pass the exam.', correct: '✅ I study every day so that I can pass the exam.', explanation: '"so that" ya introduce la oración de finalidad; no añadimos "to" delante. Si usamos "to", quitamos "so that": ... every day to pass the exam.' },
    { wrong: '❌ It was raining, because we stayed home.', correct: '✅ It was raining, so we stayed home.', explanation: '"because" explica la causa, no el resultado. El resultado se expresa con "so".' },
    { wrong: '❌ I was late because of the traffic was bad.', correct: '✅ I was late because the traffic was bad.', explanation: '"because of" + sustantivo (the bad traffic); "because" + oración (the traffic was bad).' },
  ],
  vocabulary: [
    { word: 'because', translation_es: 'porque', level: 'B1', category: 'linking words', partOfSpeech: 'conjunction', example: 'I stayed at home because I was ill.', exampleTranslation: 'Me quedé en casa porque estaba enfermo.' },
    { word: 'because of', translation_es: 'debido a, por', level: 'B1', category: 'linking words', partOfSpeech: 'preposition', example: 'The shop closed because of the storm.', exampleTranslation: 'La tienda cerró por la tormenta.' },
    { word: 'so that', translation_es: 'para que, de modo que', level: 'B1', category: 'linking words', partOfSpeech: 'conjunction', example: 'I speak slowly so that you can understand.', exampleTranslation: 'Hablo despacio para que puedas entender.' },
    { word: 'cancel', translation_es: 'cancelar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'They cancelled the concert because of the rain.', exampleTranslation: 'Cancelaron el concierto por la lluvia.' },
  ],
  grammarPoints: [
    {
      id: 'gp-so-because-becauseof-sothat',
      level: 'B1',
      name: 'so / because / because of / so that',
      explanation_es: 'so expresa consecuencia; because + oración expresa causa; because of + sustantivo expresa causa; so that + oración expresa finalidad.',
      formula: 'oración, so + oración | because + oración | because of + sustantivo | so that + oración',
      examples: ['It was raining, so we stayed home.', 'I was late because the traffic was bad.', 'The match was cancelled because of the rain.', 'I study every day so that I can pass the exam.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m11-l3-ex1',
      type: 'multiple_choice',
      concept: 'so = result',
      difficulty: 1,
      prompt: 'Completa: "It was raining, ___ we stayed home."',
      promptTranslation: 'Estaba lloviendo, así que nos quedamos en casa.',
      correctAnswer: 'so',
      options: ['so', 'because', 'because of'],
      explanation: '"so" introduce el resultado: se quedaron en casa COMO CONSECUENCIA de la lluvia.',
    },
    {
      id: 'b1-m11-l3-ex2',
      type: 'multiple_choice',
      concept: 'because + clause',
      difficulty: 1,
      prompt: 'Completa: "I was late ___ the traffic was bad."',
      promptTranslation: 'Llegué tarde porque el tráfico estaba mal.',
      correctAnswer: 'because',
      options: ['because', 'because of', 'so'],
      explanation: 'Va seguido de una oración (the traffic was bad), así que usamos "because", no "because of".',
    },
    {
      id: 'b1-m11-l3-ex3',
      type: 'fill_blank',
      concept: 'because of + noun',
      difficulty: 2,
      prompt: 'Completa: "The match was cancelled because ___ the rain."',
      promptTranslation: 'El partido se canceló por la lluvia.',
      correctAnswer: 'of',
      acceptedAnswers: ['of', 'Of'],
      explanation: '"because of" + sustantivo: the rain.',
    },
    {
      id: 'b1-m11-l3-ex4',
      type: 'true_false',
      concept: 'so that + no "to"',
      difficulty: 2,
      prompt: '"so that" se combina con "to" en la misma frase: "so that to pass".',
      promptTranslation: '"so that" is combined with "to" in the same phrase: "so that to pass".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "so that" ya introduce la oración de finalidad; no añadimos "to": so that I can pass.',
    },
    {
      id: 'b1-m11-l3-ex5',
      type: 'error_correction',
      concept: 'because of + noun not clause',
      difficulty: 3,
      prompt: 'Corrige el error: "The flight was delayed because of the weather was bad."',
      promptTranslation: 'El vuelo se retrasó por el mal tiempo.',
      correctAnswer: 'The flight was delayed because of the bad weather.',
      acceptedAnswers: ['The flight was delayed because of the bad weather', 'The flight was delayed because of the bad weather.', 'The flight was delayed because the weather was bad', 'the flight was delayed because of the bad weather'],
      acceptApproximate: true,
      explanation: 'O bien "because of" + sustantivo (the bad weather), o bien "because" + oración (the weather was bad). No mezclamos.',
    },
    {
      id: 'b1-m11-l3-ex6',
      type: 'translate',
      concept: 'so that purpose',
      difficulty: 3,
      prompt: 'Traduce: "Estudio todos los días para poder aprobar el examen."',
      promptTranslation: 'I study every day so that I can pass the exam.',
      correctAnswer: 'I study every day so that I can pass the exam.',
      acceptedAnswers: ['I study every day so that I can pass the exam', 'I study every day so that I can pass the exam.', 'I study every day to pass the exam', 'i study every day so that i can pass the exam'],
      acceptApproximate: true,
      explanation: 'Finalidad = so that + oración (so that I can pass) o "to + verbo" (to pass). Ambas son válidas.',
    },
    {
      id: 'b1-m11-l3-ex7',
      type: 'reorder',
      concept: 'because + clause',
      difficulty: 3,
      prompt: 'Ordena las palabras: home / because / was / stayed / tired / she / she',
      promptTranslation: 'Se quedó en casa porque estaba cansada.',
      correctAnswer: 'She stayed home because she was tired.',
      words: ['She', 'stayed', 'home', 'because', 'she', 'was', 'tired'],
      explanation: 'Resultado + because + causa. → She stayed home because she was tired.',
    },
    {
      id: 'b1-m11-l3-ex8',
      type: 'match',
      concept: 'cause and result matching',
      difficulty: 3,
      prompt: 'Relaciona cada conector con su ejemplo.',
      promptTranslation: 'Match each connector with its example.',
      correctAnswer: 'so=It was raining, so we stayed home.; because=I was late because the traffic was bad.; because of=The match was cancelled because of the rain.; so that=I study every day so that I can pass.',
      pairs: [
        { left: 'so', right: 'It was raining, so we stayed home.' },
        { left: 'because', right: 'I was late because the traffic was bad.' },
        { left: 'because of', right: 'The match was cancelled because of the rain.' },
        { left: 'so that', right: 'I study every day so that I can pass.' },
      ],
      explanation: 'so = resultado; because + oración = causa; because of + sustantivo = causa; so that + oración = finalidad.',
    },
    {
      id: 'b1-m11-l3-ex9',
      type: 'multiple_choice',
      concept: 'because of + noun',
      difficulty: 4,
      prompt: 'Completa: "The concert was cancelled ___ the bad weather."',
      promptTranslation: 'El concierto se canceló por el mal tiempo.',
      correctAnswer: 'because of',
      options: ['because of', 'because', 'so that'],
      explanation: '"the bad weather" es un sintagma nominal → because of.',
    },
    {
      id: 'b1-m11-l3-ex10',
      type: 'fill_blank',
      concept: 'so that + modal can',
      difficulty: 4,
      prompt: 'Completa: "I speak slowly so that you ___ understand."',
      promptTranslation: 'Hablo despacio para que puedas entender.',
      correctAnswer: 'can',
      acceptedAnswers: ['can', 'Can'],
      explanation: 'Finalidad: so that + sujeto + modal. → so that you can understand.',
    },
    {
      id: 'b1-m11-l3-ex11',
      type: 'listening',
      concept: 'so/because/because of/so that listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Una estudiante habla sobre por qué no fue a la universidad hoy: hubo un accidente de tráfico, así que llegó tarde. Además, estaba enferma. A pesar de todo, estudiará en casa para no quedarse atrás.',
      listening: {
        audioText:
          "I couldn\'t go to university today because of a car accident on the road. So I stayed at home. I was also sick, because the weather was very cold yesterday. I need to study hard so that I can keep up with my classes. My teacher sent me the notes because she understood the situation. I feel better now, so I\'ll be back tomorrow.",
        audioUrl: '/audio/tts/b1-m11-l3-ex11.mp3',
        questions: [
          {
            id: 'b1-m11-l3-ex11-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Why did the student not go to university?',
            correctAnswer: 'Because of a car accident',
            options: ['Because of a car accident', 'Because she was lazy', 'Because the university was closed'],
            explanation: '"I couldn\'t go to university today because of a car accident"',
          },
          {
            id: 'b1-m11-l3-ex11-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'La estudiante estaba bien de salud.',
            correctAnswer: 'false',
            explanation: '"I was also sick, because the weather was very cold yesterday."',
          },
          {
            id: 'b1-m11-l3-ex11-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is the student going to do to keep up with her classes?',
            correctAnswer: 'Study hard at home',
            options: ['Study hard at home', 'Ask for a day off', 'Go to university tomorrow without studying'],
            explanation: '"I need to study hard so that I can keep up with my classes."',
          },
        ],
      },
    },
    {
      id: 'b1-m11-l3-ex12',
      type: 'writing',
      concept: 'so/because/because of/so that writing',
      difficulty: 3,
      prompt: 'Escribí un párrafo sobre un evento importante que sucedió en tu vida. Explicá la causa (because/because of) y el resultado (so) o tu propósito (so that).',
      promptTranslation: 'Write a paragraph about an important event. Explain the cause and result or purpose.',
      correctAnswer: '',
      explanation: 'Un buen texto narra un evento y conecta causa y resultado/propósito usando because, because of, so o so that de forma clara.',
      taskType: 'story',
      targetReader: 'a friend or family member',
      register: 'informal',
      contentPoints: ['Un evento que pasó y su causa', 'El resultado o lo que hiciste para lograr algo'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m11-l3-ex13',
      type: 'speaking',
      concept: 'so/because pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'I was late because of the traffic, so I missed the meeting.',
      explanation: 'Practicá la pronunciación de "because of" (/bɪˈkɔːz əv/) y "so" (/soʊ/), manteniendo la velocidad natural de una frase causal y de resultado.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m11-l3-mt1',
      type: 'multiple_choice',
      concept: 'so = result',
      difficulty: 1,
      prompt: 'Completa: "She missed the bus, ___ she took a taxi."',
      promptTranslation: 'Perdió el autobús, así que cogió un taxi.',
      correctAnswer: 'so',
      options: ['so', 'because', 'because of'],
      explanation: '"so" introduce el resultado de perder el autobús.',
    },
    {
      id: 'b1-m11-l3-mt2',
      type: 'fill_blank',
      concept: 'because of + noun',
      difficulty: 2,
      prompt: 'Completa: "The shop closed because ___ the storm."',
      promptTranslation: 'La tienda cerró por la tormenta.',
      correctAnswer: 'of',
      acceptedAnswers: ['of', 'Of'],
      explanation: '"because of" + sustantivo: the storm.',
    },
    {
      id: 'b1-m11-l3-mt3',
      type: 'error_correction',
      concept: 'no "so that to"',
      difficulty: 3,
      prompt: 'Corrige el error: "I wake up early so that to arrive on time."',
      promptTranslation: 'Me levanto temprano para llegar a tiempo.',
      correctAnswer: 'I wake up early so that I can arrive on time.',
      acceptedAnswers: ['I wake up early so that I can arrive on time', 'I wake up early so that I can arrive on time.', 'I wake up early to arrive on time', 'i wake up early so that i can arrive on time'],
      acceptApproximate: true,
      explanation: '"so that" no se combina con "to": so that I can arrive. (O bien: ... to arrive on time, sin "so that".)',
    },
    {
      id: 'b1-m11-l3-mt4',
      type: 'translate',
      concept: 'because',
      difficulty: 3,
      prompt: 'Traduce: "Llegué tarde porque el tráfico estaba mal."',
      promptTranslation: 'I was late because the traffic was bad.',
      correctAnswer: 'I was late because the traffic was bad.',
      acceptedAnswers: ['I was late because the traffic was bad', 'I was late because the traffic was bad.', 'i was late because the traffic was bad'],
      acceptApproximate: true,
      explanation: '"porque" + oración = because + the traffic was bad.',
    },
    {
      id: 'b1-m11-l3-mt5',
      type: 'multiple_choice',
      concept: 'which sentence is correct',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'He went to bed early so that he could rest.',
      options: ['He went to bed early so that he could rest.', 'He went to bed early because of he wanted to rest.', 'He went to bed early so that to rest.'],
      explanation: '"so that" + oración (he could rest). "because of" no lleva oración y "so that to" no existe.',
    },
  ],
  reviewItems: ['b1-m11-l2'],
  prerequisites: ['b1-m11-l2'],
}
