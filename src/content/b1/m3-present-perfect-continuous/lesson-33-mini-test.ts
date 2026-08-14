import type { Lesson } from '../../types'

export const lesson33MiniTest: Lesson = {
  id: 'b1-m3-l3',
  moduleId: 'm3-present-perfect-continuous',
  order: 2,
  title: 'Mini-test: Present Perfect Continuous',
  objective: 'Repasar el present perfect continuous: forma, for/since, contraste con el present perfect simple y lectura con actividades en curso.',
  explanation_es: `Este mini-test repasa el módulo completo del present perfect continuous.

Recuerda las claves:

1. FORMA:
   - have/has + been + verbo + -ing
   - I have been working. / She has been working.
   - Preguntas: Have you been...? / Has she been...?
   - Negativo: haven\'t/hasn\'t been + -ing.

2. USOS:
   - Acción que empezó en el pasado y continúa: I have been studying all day.
   - Efecto visible de una acción reciente: My eyes are red because I have been crying.
   - Duración: for + periodo (for 5 years), since + punto de inicio (since morning).

3. CONTRASTE con present perfect simple:
   - SIMPLE (have/has + participle) → resultado/cantidad total: I have written three emails.
   - CONTINUOUS (have/has + been + -ing) → actividad en progreso/efecto visible: I have been writing emails all morning.
   - Verbos de estado (know, like, want) → siempre simple.

Errores a evitar:
   - ❌ I have been work → ✅ I have been working.
   - ❌ I have being working → ✅ I have been working.
   - ❌ I have been knowing... → ✅ I have known...`,
  examples: [
    { english: 'We have been studying English since January.', spanish: 'Llevamos estudiando inglés desde enero.', note: 'since + punto de inicio.' },
    { english: 'She has been working here for three years now.', spanish: 'Ella lleva trabajando aquí ya tres años.', note: 'for + periodo.' },
    { english: 'I have read three books this month.', spanish: 'He leído tres libros este mes.', note: 'Simple: resultado concreto.' },
    { english: 'I have been reading all afternoon.', spanish: 'He estado leyendo toda la tarde.', note: 'Continuous: actividad en curso.' },
    { english: 'He looks tired because he has been playing football.', spanish: 'Parece cansado porque ha estado jugando al fútbol.', note: 'Efecto visible.' },
  ],
  rule: `Repaso:
- Present perfect continuous: have/has + been + verbo(-ing).
- for + periodo (for 3 years) | since + punto de inicio (since January).
- Simple = resultado (I have written three emails).
- Continuous = actividad/efecto (I have been writing all morning).
- Verbos de estado → simple siempre (I have known him).

Nunca: "been work", "being working", ni continuous con verbos de estado.`,
  commonMistakes: [
    { wrong: '❌ I have been work since January.', correct: '✅ I have been working since January.', explanation: 'El verbo después de "been" lleva -ing: been working.' },
    { wrong: '❌ I have been knowing her for years.', correct: '✅ I have known her for years.', explanation: '"Know" es verbo de estado → solo present perfect simple.' },
    { wrong: '❌ I have being studying all day.', correct: '✅ I have been studying all day.', explanation: 'La estructura es "have been + -ing", nunca "have being".' },
    { wrong: '❌ She has work here for 5 years.', correct: '✅ She has been working here for 5 years.', explanation: 'Falta "been" y el verbo en -ing: has been working.' },
  ],
  vocabulary: [
    { word: 'afternoon', translation_es: 'tarde', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'I have been reading all afternoon.', exampleTranslation: 'He estado leyendo toda la tarde.' },
    { word: 'football', translation_es: 'fútbol', level: 'A1', category: 'sports', partOfSpeech: 'noun', example: 'He has been playing football.', exampleTranslation: 'Ha estado jugando al fútbol.' },
    { word: 'English', translation_es: 'inglés', level: 'A1', category: 'school', partOfSpeech: 'noun', example: 'We have been studying English.', exampleTranslation: 'Hemos estado estudiando inglés.' },
    { word: 'January', translation_es: 'enero', level: 'A1', category: 'months', partOfSpeech: 'noun', example: 'Since January.', exampleTranslation: 'Desde enero.' },
    { word: 'lately', translation_es: 'últimamente', level: 'B1', category: 'time', partOfSpeech: 'adverb', example: 'Have you been sleeping well lately?', exampleTranslation: '¿Has estado durmiendo bien últimamente?' },
    { word: 'recently', translation_es: 'recientemente', level: 'B1', category: 'time', partOfSpeech: 'adverb', example: 'I have been working a lot recently.', exampleTranslation: 'He estado trabajando mucho recientemente.' },
  ],
  grammarPoints: [
    {
      id: 'gp-ppc-review',
      level: 'B1',
      name: 'Present perfect continuous (review)',
      explanation_es: 'Repaso del present perfect continuous: forma, usos (continuación y efecto visible), for/since y contraste con el present perfect simple.',
      formula: 'have/has + been + verb(-ing)',
      examples: ['I have been studying all day.', 'She has been working here for 5 years.', 'It has been raining since morning.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m3-l3-ex1',
      type: 'multiple_choice',
      concept: 'present perfect continuous review',
      difficulty: 1,
      prompt: 'Completa: "We have been ___ English since January."',
      promptTranslation: 'Llevamos estudiando inglés desde enero.',
      correctAnswer: 'studying',
      options: ['studying', 'study', 'studied'],
      explanation: 'Después de "been" el verbo lleva -ing: studying. → We have been studying English since January.',
    },
    {
      id: 'b1-m3-l3-ex2',
      type: 'multiple_choice',
      concept: 'present perfect continuous review',
      difficulty: 2,
      prompt: 'Completa con "for" o "since": "She has been working here ___ three years."',
      promptTranslation: 'Ella lleva trabajando aquí tres años.',
      correctAnswer: 'for',
      options: ['for', 'since', 'at'],
      explanation: '"Three years" es un periodo de tiempo → "for". (since + punto de inicio: since 2023.)',
    },
    {
      id: 'b1-m3-l3-ex3',
      type: 'fill_blank',
      concept: 'present perfect continuous review',
      difficulty: 2,
      prompt: 'Completa: "I have ___ reading all afternoon."',
      promptTranslation: 'He estado leyendo toda la tarde.',
      correctAnswer: 'been',
      acceptedAnswers: ['been'],
      explanation: 'Falta "been": have + been + -ing. → I have been reading all afternoon.',
    },
    {
      id: 'b1-m3-l3-ex4',
      type: 'fill_blank',
      concept: 'present perfect simple vs continuous review',
      difficulty: 3,
      prompt: 'Completa (simple o continuous): "I have ___ (read) three books this month."',
      promptTranslation: 'He leído tres libros este mes.',
      correctAnswer: 'read',
      acceptedAnswers: ['read'],
      explanation: 'Resultado concreto (tres libros) → present perfect simple → have + participle: read (la 3ª forma de read es igual).',
    },
    {
      id: 'b1-m3-l3-ex5',
      type: 'fill_blank',
      concept: 'present perfect continuous review',
      difficulty: 3,
      prompt: 'Completa (continuous): "I have been ___ (read) all afternoon."',
      promptTranslation: 'He estado leyendo toda la tarde.',
      correctAnswer: 'reading',
      acceptedAnswers: ['reading'],
      explanation: 'Foco en la actividad en curso → continuous → have been reading (con -ing).',
    },
    {
      id: 'b1-m3-l3-ex6',
      type: 'reorder',
      concept: 'present perfect continuous review',
      difficulty: 3,
      prompt: 'Ordena la frase (present perfect continuous):',
      promptTranslation: 'Parece cansado porque ha estado jugando al fútbol.',
      words: ['He', 'looks', 'tired', 'because', 'he', 'has', 'been', 'playing', 'football.'],
      correctAnswer: 'He looks tired because he has been playing football.',
      explanation: 'Efecto visible (looks tired) + because + present perfect continuous (has been playing). → He looks tired because he has been playing football.',
    },
    {
      id: 'b1-m3-l3-ex7',
      type: 'translate',
      concept: 'present perfect continuous review',
      difficulty: 4,
      prompt: 'Traduce: "Llevamos estudiando inglés desde enero."',
      correctAnswer: 'We have been studying English since January.',
      acceptedAnswers: [
        'We have been studying English since January',
        'We have been studying English since January.',
        'We\'ve been studying English since January',
        'We\'ve been studying English since January.',
      ],
      acceptApproximate: true,
      explanation: '"Llevamos... estudiando" = We have been studying. "desde enero" = since January (punto de inicio).',
    },
    {
      id: 'b1-m3-l3-ex8',
      type: 'error_correction',
      concept: 'present perfect continuous review',
      difficulty: 4,
      prompt: 'Corrige el error: "I have been know her since 2019."',
      correctAnswer: 'I have known her since 2019.',
      acceptedAnswers: [
        'I have known her since 2019',
        'I have known her since 2019.',
      ],
      acceptApproximate: true,
      explanation: '"Know" es un verbo de estado → no se usa en continuo. → I have known her since 2019 (present perfect simple).',
    },
    {
      id: 'b1-m3-l3-ex9',
      type: 'reading',
      concept: 'present perfect continuous reading',
      difficulty: 4,
      prompt: 'Lee el texto y responde las preguntas:',
      reading: {
        text: 'Marta and Luis are very busy. Marta has been preparing her final exam all week, so she has spent many hours at the library. She has read five books this month. Luis, meanwhile, has been renovating the kitchen. He has been painting the walls since Monday and his hands are still full of paint. They have been working hard, but they have also been making good progress. By Friday, everything will be ready.',
        translation: 'Marta y Luis están muy ocupados. Marta ha estado preparando su examen final toda la semana, así que ha pasado muchas horas en la biblioteca. Ha leído cinco libros este mes. Luis, mientras tanto, ha estado renovando la cocina. Ha estado pintando las paredes desde el lunes y todavía tiene las manos llenas de pintura. Han estado trabajando duro, pero también han estado haciendo buenos progresos. Para el viernes, todo estará listo.',
        questions: [
          {
            id: 'b1-m3-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'present perfect continuous reading',
            difficulty: 4,
            prompt: '¿Qué ha estado haciendo Marta toda la semana?',
            correctAnswer: 'Preparing her final exam.',
            options: ['Preparing her final exam.', 'Renovating the kitchen.', 'Painting the walls.'],
            explanation: 'El texto dice: "Marta has been preparing her final exam all week." (present perfect continuous.)',
          },
          {
            id: 'b1-m3-l3-ex9-q2',
            type: 'multiple_choice',
            concept: 'present perfect continuous reading',
            difficulty: 4,
            prompt: '¿Desde cuándo ha estado pintando Luis las paredes?',
            correctAnswer: 'Since Monday.',
            options: ['Since Monday.', 'Since Friday.', 'Since January.'],
            explanation: 'El texto dice: "He has been painting the walls since Monday." (since + punto de inicio.)',
          },
          {
            id: 'b1-m3-l3-ex9-q3',
            type: 'multiple_choice',
            concept: 'present perfect continuous reading',
            difficulty: 4,
            prompt: '¿Cuántos libros ha leído Marta este mes?',
            correctAnswer: 'Five books.',
            options: ['Five books.', 'Three books.', 'Two books.'],
            explanation: 'El texto dice: "She has read five books this month." Esto es un resultado concreto → present perfect simple.',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'En el texto, las actividades en curso usan present perfect continuous (has been preparing, has been painting); el resultado concreto usa simple (has read five books).',
    },
    {
      id: 'b1-m3-l3-ex10',
      type: 'sentence_building',
      concept: 'present perfect continuous review',
      difficulty: 4,
      prompt: 'Construye la frase con estas palabras:',
      promptTranslation: 'He estado trabajando mucho últimamente.',
      words: ['I', 'have', 'been', 'working', 'a', 'lot', 'lately.'],
      correctAnswer: 'I have been working a lot lately.',
      explanation: 'Estructura: have + been + verbo -ing (working) + "a lot" + "lately". → I have been working a lot lately.',
    },
    {
      id: 'b1-m3-l3-ex11',
      type: 'true_false',
      concept: 'present perfect continuous review',
      difficulty: 3,
      prompt: 'El present perfect continuous se usa con verbos de estado como "know" y "like".',
      correctAnswer: 'false',
      explanation: 'Falso. Los verbos de estado (know, like, want, believe) no se usan en continuo. Con ellos usamos present perfect simple.',
    },
    {
      id: 'b1-m3-l3-ex12',
      type: 'listening',
      concept: 'present perfect continuous listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Tom cuenta qué ha estado haciendo esta semana: renovando el jardín, cansado por el trabajo físico, y cuánto lleva viviendo en su casa.',
      listening: {
        audioText:
          "This week has been really busy for me. I've been working in the garden every day, and my back is really sore from all the digging. I've been planting new flowers since Monday, and I've already planted about twenty of them. I've lived in this house for ten years now, but I've never had time to fix the garden properly until this week.",
        questions: [
          {
            id: 'b1-m3-l3-ex12-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What has Tom been doing every day this week?',
            correctAnswer: 'Working in the garden',
            options: ['Working in the garden', 'Painting the house', 'Studying English'],
            explanation: '"I\'ve been working in the garden every day."',
          },
          {
            id: 'b1-m3-l3-ex12-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Tom\'s back hurts because of the gardening work.',
            correctAnswer: 'true',
            explanation: '"My back is really sore from all the digging."',
          },
          {
            id: 'b1-m3-l3-ex12-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'How long has Tom lived in this house?',
            correctAnswer: 'Ten years',
            options: ['Ten years', 'One year', 'Since Monday'],
            explanation: '"I\'ve lived in this house for ten years now."',
          },
        ],
      },
    },
    {
      id: 'b1-m3-l3-ex13',
      type: 'writing',
      concept: 'present perfect continuous writing',
      difficulty: 4,
      prompt: 'Escribile un email informal a un amigo/a contándole qué has estado haciendo esta semana (usá el present perfect continuous).',
      promptTranslation: 'Write an informal email to a friend about what you have been doing this week.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con have/has been + -ing para describir actividades en curso, y menciona alguna duración con for/since.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Qué has estado haciendo esta semana', 'Cuánto tiempo llevás haciéndolo (for/since)'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m3-l3-ex14',
      type: 'speaking',
      concept: 'present perfect continuous pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'She has been working here for three years.',
      explanation: 'Practicá la contracción "she\'s been" (suena unido, casi "shiz been") y el enlace natural entre "been" y "working".',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m3-l3-mt1',
      type: 'multiple_choice',
      concept: 'present perfect continuous review',
      difficulty: 2,
      prompt: 'Completa: "It ___ been raining since morning."',
      promptTranslation: 'Ha estado lloviendo desde la mañana.',
      correctAnswer: 'has',
      options: ['has', 'have', 'is'],
      explanation: 'Con "it" (3ª persona singular) usamos "has": It has been raining since morning.',
    },
    {
      id: 'b1-m3-l3-mt2',
      type: 'fill_blank',
      concept: 'present perfect simple vs continuous review',
      difficulty: 3,
      prompt: 'Completa (simple o continuous): "My eyes are red because I have been ___ (cry)."',
      promptTranslation: 'Tengo los ojos rojos porque he estado llorando.',
      correctAnswer: 'crying',
      acceptedAnswers: ['crying'],
      explanation: 'El efecto visible (ojos rojos) indica actividad reciente → continuous → have been crying.',
    },
    {
      id: 'b1-m3-l3-mt3',
      type: 'translate',
      concept: 'present perfect continuous review',
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
      explanation: '"Ella lleva... trabajando" = She has been working. "durante 5 años" = for 5 years.',
    },
    {
      id: 'b1-m3-l3-mt4',
      type: 'error_correction',
      concept: 'present perfect continuous review',
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
      explanation: 'La estructura correcta es "have been + -ing", no "have being". → I have been working all day.',
    },
    {
      id: 'b1-m3-l3-mt5',
      type: 'match',
      concept: 'present perfect simple vs continuous matching',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su uso correcto:',
      pairs: [
        { left: 'I have written three emails.', right: 'Simple: resultado concreto' },
        { left: 'I have been writing emails all morning.', right: 'Continuous: actividad en curso' },
        { left: 'My eyes are red because I have been crying.', right: 'Continuous: efecto visible' },
        { left: 'I have known him for years.', right: 'Simple: verbo de estado' },
        { left: 'She has read five books this month.', right: 'Simple: cantidad total' },
        { left: 'They have been working since Monday.', right: 'Continuous: duración con since' },
      ],
      correctAnswer: 'I have written three emails=Simple: resultado concreto, I have been writing emails all morning=Continuous: actividad en curso, My eyes are red because I have been crying=Continuous: efecto visible, I have known him for years=Simple: verbo de estado, She has read five books this month=Simple: cantidad total, They have been working since Monday=Continuous: duración con since.',
      explanation: 'El simple (have + participle) marca resultados, cantidades y verbos de estado. El continuous (have been + -ing) marca actividad en curso, efecto visible y duración.',
    },
  ],
  reviewItems: ['b1-m3-l2'],
  prerequisites: ['b1-m3-l2'],
}
