import type { Lesson } from '../../types'

export const lesson64MiniTest: Lesson = {
  id: 'b2-m6-l4',
  moduleId: 'm6-advanced-conditionals',
  order: 3,
  title: 'Module Test: Advanced Conditionals & Unreal Past',
  objective: 'Evaluar la comprensión de condicionales avanzadas (conjunciones condicionales, condicionales mixtas, wish/if only) mediante ejercicios variados que integren los conceptos del módulo.',
  explanation_es: `Este test repasa todos los conceptos de condicionales avanzadas cubiertos en el módulo. Incluye:

1. Conjunciones condicionales (as long as, provided that, unless, except that, once)
2. Condicionales mixtas (combinación de pasado y presente)
3. Wish / If only + past perfect
4. Uso de "if" para cortesía

Recuerda:
- "As long as" y "provided that" expresan condiciones necesarias.
- "Unless" es la negación de una condición.
- "Once" expresa que algo ocurre inmediatamente después.
- Las condicionales mixtas combinan pasado y presente.
- "Wish" + past perfect expresa arrepentimiento.
- "If only" es la versión más emocional.
- "If" + past simple puede ser una estrategia de cortesía, no un verdadero condicional.

Buen suerte en el test.
`,
  examples: [],
  rule: 'Este es un test integrado del módulo. Revisa las reglas de cada lección anterior para recordar las estructuras y usos de condicionales avanzadas.',
  commonMistakes: [],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'b2-m6-l4-ex1',
      type: 'multiple_choice',
      concept: 'conditional conjunctions as long as',
      difficulty: 3,
      prompt: 'Completa: "You can stay with us ___ you contribute to the household chores."',
      promptTranslation: 'Puedes quedarte con nosotros siempre y cuando contribuyas a las tareas domésticas.',
      correctAnswer: 'as long as',
      options: ['as long as', 'unless', 'once', 'provided that'],
      explanation: '"As long as" expresa una condición necesaria (obligatoria).',
    },
    {
      id: 'b2-m6-l4-ex2',
      type: 'multiple_choice',
      concept: 'conditional conjunction unless',
      difficulty: 3,
      prompt: 'Completa: "The project will fail ___ we get more funding."',
      promptTranslation: 'El proyecto fracasará a menos que consigamos más financiamiento.',
      correctAnswer: 'unless',
      options: ['unless', 'as long as', 'once', 'provided'],
      explanation: '"Unless" es la negación de una condición (equivalente a "if not").',
    },
    {
      id: 'b2-m6-l4-ex3',
      type: 'error_correction',
      concept: 'mixed conditional type 1',
      difficulty: 4,
      prompt: 'Encuentra el error: "If he had studied abroad, he would have spoken fluent English now."',
      correctAnswer: 'If he had studied abroad, he would speak fluent English now.',
      acceptedAnswers: [
        'If he had studied abroad, he would speak fluent English now',
        'If he had studied abroad, he\'d speak fluent English now.',
      ],
      acceptApproximate: true,
      explanation: 'Mixta Tipo 1: "would have spoken" es incorrecto. Usa "would speak" (presente, porque es ahora).',
    },
    {
      id: 'b2-m6-l4-ex4',
      type: 'multiple_choice',
      concept: 'wish past perfect',
      difficulty: 3,
      prompt: 'Completa: "I wish I ___ to that concert last week."',
      promptTranslation: 'Desearía haber ido a ese concierto la semana pasada.',
      correctAnswer: 'had gone',
      options: ['had gone', 'went', 'have gone', 'would go'],
      explanation: '"Wish" + past perfect expresa arrepentimiento pasado.',
    },
    {
      id: 'b2-m6-l4-ex5',
      type: 'fill_blank',
      concept: 'if only emphasis',
      difficulty: 3,
      prompt: 'Completa: "___ I had listened to my parents\' advice!"',
      promptTranslation: '¡Si solo hubiera escuchado el consejo de mis padres!',
      correctAnswer: 'If only',
      explanation: '"If only" es la versión más emocional de "wish" + past perfect.',
    },
    {
      id: 'b2-m6-l4-ex6',
      type: 'translate',
      concept: 'mixed conditional type 1 translation',
      difficulty: 4,
      prompt: 'Traduce: "Si hubiera viajado a Italia, hablaría italiano ahora."',
      correctAnswer: 'If I had traveled to Italy, I would speak Italian now.',
      acceptedAnswers: [
        'If I had travelled to Italy, I would speak Italian now',
        'If I had traveled to Italy, I would speak Italian now.',
        'If I\'d traveled to Italy, I\'d speak Italian now.',
      ],
      acceptApproximate: true,
      explanation: 'Mixta Tipo 1: past perfect (had traveled) → present conditional (would speak).',
    },
    {
      id: 'b2-m6-l4-ex7',
      type: 'select_correct',
      concept: 'if politeness vs condicional',
      difficulty: 4,
      prompt: 'Elige la frase que es CORTESÍA, no un verdadero condicional:',
      correctAnswer: 'I was wondering if you could help me with this problem.',
      options: [
        'If you help me, I\'ll pass the exam.',
        'I was wondering if you could help me with this problem.',
        'If you study hard, you\'ll succeed.',
      ],
      explanation: '"I was wondering if" es cortesía indirecta. Los otros dos son verdaderos condicionales (el resultado depende de la condición).',
    },
    {
      id: 'b2-m6-l4-ex8',
      type: 'true_false',
      concept: 'conditional conjunctions review',
      difficulty: 3,
      prompt: '"Unless you leave now, you\'ll miss the train" significa exactamente lo mismo que "If you don\'t leave now, you\'ll miss the train".',
      correctAnswer: 'true',
      explanation: 'Correcto. "Unless" = "if not". Ambas frases tienen el mismo significado.',
    },
    {
      id: 'b2-m6-l4-ex9',
      type: 'listening',
      concept: 'module review listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas sobre las situaciones condicionales mencionadas.',
      correctAnswer: '',
      explanation: 'Un profesor habla con un alumno sobre su desempeño académico, expresando condiciones, arrepentimientos y peticiones corteses.',
      listening: {
        audioText:
          "A teacher is speaking to her student Alex. She says: You can pass this course as long as you complete all your assignments. I wish you had started studying earlier, though. If only you had paid attention in class! Now, if you don\'t mind, I\'d like to discuss your options. I was wondering if you could dedicate two hours every evening to your studies. Provided that you do this, you\'ll have a good chance of improving. Also, unless you submit your project by Friday, I won\'t be able to grade it in time.",
        audioUrl: '/audio/tts/b2-m6-l4-ex9.mp3',
        questions: [
          {
            id: 'b2-m6-l4-ex9-q1',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What condition must Alex meet to pass?',
            correctAnswer: 'Complete all assignments',
            options: [
              'Study only in the evenings',
              'Complete all assignments',
              'Attend every class',
            ],
            explanation: '"You can pass this course as long as you complete all your assignments."',
          },
          {
            id: 'b2-m6-l4-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The teacher thinks Alex studied hard from the beginning.',
            correctAnswer: 'false',
            explanation: '"I wish you had started studying earlier." — Implies he didn\'t.',
          },
          {
            id: 'b2-m6-l4-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does the teacher ask Alex to do?',
            correctAnswer: 'Dedicate two hours every evening to studies',
            options: [
              'Attend extra classes',
              'Submit the project immediately',
              'Dedicate two hours every evening to studies',
            ],
            explanation: '"I was wondering if you could dedicate two hours every evening to your studies."',
          },
        ],
      },
    },
    {
      id: 'b2-m6-l4-ex10',
      type: 'writing',
      concept: 'module review writing',
      difficulty: 4,
      prompt: 'Escribí un breve email a tu profesor(a) donde: (1) expreses un arrepentimiento sobre tu aprendizaje anterior (wish/if only), (2) menciones una condición necesaria para mejorar (as long as), (3) hagas una petición de forma cortés (if + politeness).',
      promptTranslation: 'Write an email to your teacher expressing regret, stating a necessary condition, and making a polite request.',
      correctAnswer: '',
      explanation: 'Un buen email integra 3+ estructuras del módulo de forma coherente y en un registro académico-formal.',
      taskType: 'email',
      targetReader: 'your teacher',
      register: 'formal',
      contentPoints: [
        'Al menos 1 arrepentimiento con wish/if only + past perfect',
        'Al menos 1 condición necesaria con as long as',
        'Al menos 1 petición cortés con if/could',
        'Estructura coherente y profesional',
      ],
      requiresOwnIdea: true,
      minWords: 90,
      maxWords: 160,
    },
  ],
  miniTest: [
    {
      id: 'b2-m6-l4-mt1',
      type: 'multiple_choice',
      concept: 'mixed conditional recognition',
      difficulty: 4,
      prompt: 'Elige la frase que sea una condicional MIXTA (no pura 2º o 3º):',
      promptTranslation: 'Elige la frase de condicional mixta.',
      correctAnswer: 'If I had learned guitar, I would be a musician now.',
      options: [
        'If I learned guitar, I would become a musician.',
        'If I had learned guitar, I would have become a musician.',
        'If I had learned guitar, I would be a musician now.',
      ],
      explanation: 'Solo la tercera es mixta (Tipo 1): pasado (had learned) → presente (would be now).',
    },
    {
      id: 'b2-m6-l4-mt2',
      type: 'error_correction',
      concept: 'conditional conjunction unless negation',
      difficulty: 4,
      prompt: 'Corrige: "Unless you don\'t practice regularly, you won\'t improve your English."',
      correctAnswer: 'Unless you practice regularly, you won\'t improve your English.',
      acceptedAnswers: [
        'Unless you practice regularly, you won\'t improve your English',
        'If you don\'t practice regularly, you won\'t improve your English.',
      ],
      acceptApproximate: true,
      explanation: '"Unless" ya es negativo. No dobles con "don\'t".',
    },
    {
      id: 'b2-m6-l4-mt3',
      type: 'true_false',
      concept: 'wish vs if only',
      difficulty: 3,
      prompt: '"I wish I had known" y "If only I had known" tienen exactamente el mismo nivel de emoción.',
      correctAnswer: 'false',
      explanation: 'Falso. "If only" es más dramático y emocional que "wish".',
    },
    {
      id: 'b2-m6-l4-mt4',
      type: 'select_correct',
      concept: 'module integration',
      difficulty: 4,
      prompt: 'Elige la opción que usa CORRECTAMENTE "once" (no "if"):',
      correctAnswer: 'Once you submit your application, you\'ll receive a confirmation email.',
      options: [
        'Once you submit your application, you will receive a confirmation email.',
        'Once you submit your application, you\'ll receive a confirmation email.',
        'Once you will submit your application, you\'ll receive a confirmation email.',
      ],
      explanation: '"Once" introduce una cláusula de tiempo con presente simple, nunca futuro. La segunda opción es la más natural (con contracción).',
    },
  ],
  reviewItems: ['b2-m6-l1', 'b2-m6-l2', 'b2-m6-l3'],
  prerequisites: ['b2-m6-l3'],
}
