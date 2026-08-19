import type { Lesson } from '../../types'

export const lesson31FormMeaning: Lesson = {
  id: 'b1-m3-l1',
  moduleId: 'm3-present-perfect-continuous',
  order: 0,
  title: 'Present Perfect Continuous: forma y significado',
  objective: 'Usar have/has been + -ing para hablar de acciones que empezaron en el pasado y continúan, o cuyo efecto reciente es visible.',
  explanation_es: `El "present perfect continuous" (presente perfecto continuo) se usa para dos cosas:

1. ACCIONES QUE EMPEZARON EN EL PASADO Y AÚN CONTINÚAN:
   - I have been studying all day. = He estado estudiando todo el día. (y sigo o acabo de parar)
   - She has been working here for 5 years. = Ella lleva 5 años trabajando aquí.
   - It has been raining since morning. = Ha estado lloviendo desde la mañana.

2. ACCIONES RECIENTES CON UN EFECTO VISIBLE AHORA:
   - My eyes are red because I have been crying. = Tengo los ojos rojos porque he estado llorando.
   - You look tired. Have you been working a lot? = Pareces cansado. ¿Has estado trabajando mucho?

Estructura:
- have/has + been + verbo + -ing
- I have been working.
- She has been working. (has con he/she/it)

Uso de for y since para la duración:
- FOR + periodo de tiempo: for 5 years, for two hours, for a month.
- SINCE + punto de inicio: since 2020, since Monday, since morning.

Atención a los detalles:
- Siempre "been" + verbo con -ing. Nunca "been work" ni "being working".
- Contracciones: I\'ve been, She\'s been, They\'ve been.
- En preguntas: Have you been...? / Has she been...?
- En negativo: haven\'t been + -ing / hasn\'t been + -ing.

Reglas ortográficas del -ing: work → working, study → studying, run → running (doble consonante), make → making (se quita la e).`,
  examples: [
    { english: 'I have been studying all day.', spanish: 'He estado estudiando todo el día.', note: 'Empezó en el pasado y continúa.' },
    { english: 'She has been working here for 5 years.', spanish: 'Ella lleva 5 años trabajando aquí.', note: 'for + periodo de tiempo.' },
    { english: 'It has been raining since morning.', spanish: 'Ha estado lloviendo desde la mañana.', note: 'since + punto de inicio.' },
    { english: 'My eyes are red because I have been crying.', spanish: 'Tengo los ojos rojos porque he estado llorando.', note: 'Efecto visible de una acción reciente.' },
    { english: 'You look tired. Have you been working a lot?', spanish: 'Pareces cansado. ¿Has estado trabajando mucho?', note: 'Pregunta en present perfect continuous.' },
    { english: 'They\'ve been waiting for the bus for twenty minutes.', spanish: 'Llevan veinte minutos esperando el autobús.', note: 'They\'ve = They have.' },
  ],
  rule: `Fórmula:
have/has + been + verbo + -ing
- I have been studying.
- She has been working.

Uso 1: acción que empezó en el pasado y continúa.
- for + periodo: for 5 years, for two hours.
- since + punto de inicio: since 2020, since Monday.

Uso 2: acción reciente con efecto visible ahora.
- My eyes are red because I have been crying.

Preguntas: Have/Has + subject + been + -ing?
- Have you been working?

Negativo: haven\'t/hasn\'t been + -ing.
- I haven\'t been sleeping well.`,
  formation: {
    title: 'Cómo se forma el Present Perfect Continuous',
    intro: 'El present perfect continuous combina have/has + been + verbo en -ing para hablar de acciones que empezaron en el pasado y continúan o cuyo efecto reciente se ve ahora.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + have/has + been + verbo en -ing + complemento',
        examples: [
          { english: 'I have been studying all day.', spanish: 'He estado estudiando todo el día.' },
          { english: 'She has been working here for 5 years.', spanish: 'Ella lleva 5 años trabajando aquí.' },
          { english: 'It has been raining since morning.', spanish: 'Ha estado lloviendo desde la mañana.' },
        ],
        note: 'has con he/she/it; have con I/you/we/they.',
      },
      {
        name: 'Negativo',
        formula: 'Sujeto + haven\'t/hasn\'t + been + verbo en -ing + complemento',
        examples: [
          { english: 'I haven\'t been sleeping well.', spanish: 'No he estado durmiendo bien.' },
        ],
      },
      {
        name: 'Pregunta',
        formula: 'Have/Has + sujeto + been + verbo en -ing + ...?',
        examples: [
          { english: 'Have you been working a lot?', spanish: '¿Has estado trabajando mucho?' },
          { english: 'You look tired. Have you been working?', spanish: 'Pareces cansado. ¿Has estado trabajando?' },
        ],
        note: 'Have/Has va delante del sujeto.',
      },
    ],
    notes: [
      'Siempre "been" + verbo con -ing: been working, nunca "been work" ni "being working".',
      'Contracciones: I\'ve been, She\'s been, They\'ve been.',
      'for + periodo (for 5 years) / since + punto de inicio (since morning).',
      'Reglas del -ing: work→working, study→studying, run→running (doble consonante), make→making (se pierde la e).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I have been work all day.', correct: '✅ I have been working all day.', explanation: 'Después de "been" el verbo lleva -ing: been working, nunca "been work".' },
    { wrong: '❌ I have being working.', correct: '✅ I have been working.', explanation: 'La estructura es "have + been + -ing". "Being" es incorrecto aquí: se dice "have been working".' },
    { wrong: '❌ She has working here for 5 years.', correct: '✅ She has been working here for 5 years.', explanation: 'Falta "been": has + been + working. El continuous siempre lleva "been".' },
    { wrong: '❌ I have been study since morning.', correct: '✅ I have been studying since morning.', explanation: 'El verbo principal va con -ing: studying, no "study".' },
  ],
  vocabulary: [
    { word: 'been', translation_es: 'estado (participio de be)', level: 'B1', category: 'grammar', partOfSpeech: 'verb', example: 'I have been studying.', exampleTranslation: 'He estado estudiando.' },
    { word: 'for', translation_es: 'durante (periodo de tiempo)', level: 'A2', category: 'time', partOfSpeech: 'preposition', example: 'She has worked for 5 years.', exampleTranslation: 'Ella ha trabajado durante 5 años.' },
    { word: 'since', translation_es: 'desde (punto de inicio)', level: 'B1', category: 'time', partOfSpeech: 'preposition', example: 'It has rained since morning.', exampleTranslation: 'Ha llovido desde la mañana.' },
    { word: 'raining', translation_es: 'lloviendo', level: 'A2', category: 'weather', partOfSpeech: 'verb (-ing)', example: 'It has been raining all day.', exampleTranslation: 'Ha estado lloviendo todo el día.' },
    { word: 'crying', translation_es: 'llorando', level: 'B1', category: 'emotions', partOfSpeech: 'verb (-ing)', example: 'I have been crying.', exampleTranslation: 'He estado llorando.' },
    { word: 'waiting', translation_es: 'esperando', level: 'A2', category: 'verbs', partOfSpeech: 'verb (-ing)', example: 'We have been waiting for the bus.', exampleTranslation: 'Hemos estado esperando el autobús.' },
  ],
  grammarPoints: [
    {
      id: 'gp-present-perfect-continuous-form',
      level: 'B1',
      name: 'Present perfect continuous (form & meaning)',
      explanation_es: 'El present perfect continuous expresa acciones que empezaron en el pasado y continúan, o acciones recientes con efecto visible. Se forma con have/has + been + -ing.',
      formula: 'have/has + been + verb(-ing)',
      examples: ['I have been studying all day.', 'She has been working here for 5 years.', 'It has been raining since morning.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m3-l1-ex1',
      type: 'multiple_choice',
      concept: 'present perfect continuous form',
      difficulty: 1,
      prompt: 'Completa: "I have ___ studying all day."',
      promptTranslation: 'He estado estudiando todo el día.',
      correctAnswer: 'been',
      options: ['been', 'being', 'be'],
      explanation: 'La estructura es have + been + verbo -ing. → I have been studying all day.',
    },
    {
      id: 'b1-m3-l1-ex2',
      type: 'multiple_choice',
      concept: 'present perfect continuous form',
      difficulty: 1,
      prompt: 'Completa: "She has been ___ here for 5 years."',
      promptTranslation: 'Ella lleva 5 años trabajando aquí.',
      correctAnswer: 'working',
      options: ['working', 'work', 'works'],
      explanation: 'Después de "been" el verbo lleva -ing: been working. → She has been working here for 5 years.',
    },
    {
      id: 'b1-m3-l1-ex3',
      type: 'fill_blank',
      concept: 'present perfect continuous form',
      difficulty: 2,
      prompt: 'Completa con la forma correcta: "It ___ been raining since morning." (have o has)',
      promptTranslation: 'Ha estado lloviendo desde la mañana.',
      correctAnswer: 'has',
      acceptedAnswers: ['has'],
      explanation: 'Con "it" (3ª persona singular) usamos "has". → It has been raining since morning.',
    },
    {
      id: 'b1-m3-l1-ex4',
      type: 'fill_blank',
      concept: 'present perfect continuous form',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "My eyes are red because I have been ___ (cry)."',
      promptTranslation: 'Tengo los ojos rojos porque he estado llorando.',
      correctAnswer: 'crying',
      acceptedAnswers: ['crying'],
      explanation: 'Después de "been" el verbo lleva -ing: crying. → I have been crying.',
    },
    {
      id: 'b1-m3-l1-ex5',
      type: 'reorder',
      concept: 'present perfect continuous form',
      difficulty: 3,
      prompt: 'Ordena la frase (present perfect continuous):',
      promptTranslation: 'Llevan veinte minutos esperando el autobús.',
      words: ['They\'ve', 'been', 'waiting', 'for', 'the', 'bus', 'for', 'twenty', 'minutes.'],
      correctAnswer: "They've been waiting for the bus for twenty minutes.",
      explanation: 'Estructura: have (They\'ve) + been + verbo -ing (waiting) + for + periodo. → They\'ve been waiting for the bus for twenty minutes.',
    },
    {
      id: 'b1-m3-l1-ex6',
      type: 'translate',
      concept: 'present perfect continuous',
      difficulty: 3,
      prompt: 'Traduce: "He estado estudiando todo el día."',
      correctAnswer: 'I have been studying all day.',
      acceptedAnswers: [
        'I have been studying all day',
        'I have been studying all day.',
        'I\'ve been studying all day',
        'I\'ve been studying all day.',
      ],
      acceptApproximate: true,
      explanation: '"He estado estudiando" = I have been studying (have + been + -ing). "todo el día" = all day.',
    },
    {
      id: 'b1-m3-l1-ex7',
      type: 'translate',
      concept: 'present perfect continuous',
      difficulty: 4,
      prompt: 'Traduce: "Ella lleva 5 años trabajando aquí."',
      correctAnswer: 'She has been working here for 5 years.',
      acceptedAnswers: [
        'She has been working here for 5 years',
        'She has been working here for 5 years.',
        "She's been working here for 5 years",
        "She's been working here for 5 years.",
      ],
      acceptApproximate: true,
      explanation: '"Ella lleva... trabajando" = She has been working. "aquí" = here. "durante 5 años" = for 5 years.',
    },
    {
      id: 'b1-m3-l1-ex8',
      type: 'select_correct',
      concept: 'present perfect continuous form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: '¿Has estado trabajando mucho?',
      correctAnswer: 'Have you been working a lot?',
      options: [
        'Have you been working a lot?',
        'Have you been work a lot?',
        'Have you being working a lot?',
        'Have you been works a lot?',
      ],
      explanation: 'Pregunta: Have + sujeto + been + verbo -ing (working). "been work", "being working" y "been works" son incorrectos.',
    },
    {
      id: 'b1-m3-l1-ex9',
      type: 'error_correction',
      concept: 'present perfect continuous form',
      difficulty: 4,
      prompt: 'Corrige el error: "I have being working all day."',
      correctAnswer: 'I have been working all day.',
      acceptedAnswers: [
        'I have been working all day',
        'I have been working all day.',
        'I\'ve been working all day',
        'I\'ve been working all day.',
      ],
      acceptApproximate: true,
      explanation: 'La estructura es "have + been + -ing", no "have + being". → I have been working all day.',
    },
    {
      id: 'b1-m3-l1-ex10',
      type: 'listening',
      concept: 'present perfect continuous listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Sarah describe sus actividades recientes: ha estado aprendiendo francés durante seis meses, ha estado leyendo libros en francés durante dos meses, y ha estado practicando pronunciación con un tutor desde hace tres semanas.',
      listening: {
        audioText:
          "Hi, I'm Sarah. I've been learning French for six months now. It's been quite challenging, but I really enjoy it. For the last two months, I've been reading French books to improve my vocabulary. I've also been practicing pronunciation with a tutor since three weeks ago, and I can already see some progress.",
        audioUrl: '/audio/tts/b1-m3-l1-ex10.mp3',
        questions: [
          {
            id: 'b1-m3-l1-ex10-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'How long has Sarah been learning French?',
            correctAnswer: 'For six months',
            options: ['For six months', 'For two months', 'For three weeks'],
            explanation: '"I\'ve been learning French for six months now."',
          },
          {
            id: 'b1-m3-l1-ex10-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Sarah has been practicing pronunciation since two months ago.',
            correctAnswer: 'false',
            explanation: '"I\'ve also been practicing pronunciation with a tutor since three weeks ago."',
          },
          {
            id: 'b1-m3-l1-ex10-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Why has Sarah been reading French books?',
            correctAnswer: 'To improve her vocabulary',
            options: ['To improve her vocabulary', 'To learn grammar', 'To make friends'],
            explanation: '"For the last two months, I\'ve been reading French books to improve my vocabulary."',
          },
        ],
      },
    },
    {
      id: 'b1-m3-l1-ex11',
      type: 'writing',
      concept: 'present perfect continuous writing',
      difficulty: 3,
      prompt: 'Escribile un email corto a un amigo contándole qué has estado haciendo últimamente (usá el present perfect continuous con for o since).',
      promptTranslation: 'Write a short email to a friend about what you have been doing lately.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con have/has + been + -ing, menciona duraciones con "for" o "since", mantiene un registro informal y apropiado para un email a un amigo.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Dos o tres actividades que has estado haciendo', 'La duración de cada actividad (for/since)'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m3-l1-ex12',
      type: 'speaking',
      concept: 'present perfect continuous pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'I have been working here for five years.',
      explanation: 'Practicá la pronunciación de "have been" (/həv bɪn/ o /hæv bɪn/), el énfasis en "working" y la entonación natural de la frase completa.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m3-l1-mt1',
      type: 'multiple_choice',
      concept: 'present perfect continuous form',
      difficulty: 1,
      prompt: 'Completa: "They have been ___ for twenty minutes."',
      promptTranslation: 'Llevan veinte minutos esperando.',
      correctAnswer: 'waiting',
      options: ['waiting', 'wait', 'waits'],
      explanation: 'Después de "been" el verbo lleva -ing: waiting. → They have been waiting for twenty minutes.',
    },
    {
      id: 'b1-m3-l1-mt2',
      type: 'fill_blank',
      concept: 'present perfect continuous for/since',
      difficulty: 2,
      prompt: 'Completa con "for" o "since": "She has been working here ___ 5 years."',
      promptTranslation: 'Ella lleva 5 años trabajando aquí.',
      correctAnswer: 'for',
      acceptedAnswers: ['for'],
      explanation: '"5 years" es un periodo de tiempo → usamos "for". (since + punto de inicio: since 2020.)',
    },
    {
      id: 'b1-m3-l1-mt3',
      type: 'fill_blank',
      concept: 'present perfect continuous for/since',
      difficulty: 2,
      prompt: 'Completa con "for" o "since": "It has been raining ___ morning."',
      promptTranslation: 'Ha estado lloviendo desde la mañana.',
      correctAnswer: 'since',
      acceptedAnswers: ['since'],
      explanation: '"morning" es un punto de inicio → usamos "since". (for + periodo: for two hours.)',
    },
    {
      id: 'b1-m3-l1-mt4',
      type: 'error_correction',
      concept: 'present perfect continuous form',
      difficulty: 4,
      prompt: 'Corrige el error: "I have been work all day."',
      correctAnswer: 'I have been working all day.',
      acceptedAnswers: [
        'I have been working all day',
        'I have been working all day.',
        'I\'ve been working all day',
        'I\'ve been working all day.',
      ],
      acceptApproximate: true,
      explanation: 'El verbo después de "been" va con -ing: been working, nunca "been work".',
    },
  ],
  reviewItems: ['b1-m2-l4'],
  prerequisites: ['b1-m2-l4'],
}
