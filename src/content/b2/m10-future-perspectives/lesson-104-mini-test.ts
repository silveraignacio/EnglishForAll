import type { Lesson } from '../../types'

export const lesson104MiniTest: Lesson = {
  id: 'b2-m10-l4',
  moduleId: 'm10-future-perspectives',
  order: 3,
  title: 'Module Review: Future Perspectives & Future in the Past',
  objective: 'Repasar y consolidar todos los temas del módulo: future perfect continuous, future continuous en preguntas y cortesía, y future in the past.',
  explanation_es: `Este es el repaso final del módulo 10. Vamos a practicar los tres temas principales:

1. FUTURE PERFECT CONTINUOUS (será X durante tanto tiempo): will have been + -ing
   "By 2030, I will have been working here for 20 years."

2. FUTURE CONTINUOUS EN PREGUNTAS Y CORTESÍA: Will you be + -ing?
   "Will you be using the car tonight?" (pregunta sobre acción futura en progreso)
   "Will you be needing anything else?" (forma cortés)

3. FUTURE IN THE PAST (futuro visto desde el pasado): was/were about to, was/were on the point of
   "I was about to call you when you walked in."
   "She was on the point of leaving when the phone rang."

Los ejercicios de esta lección mezclan todos estos temas. Practicá identificar cuál estructura es la correcta en cada contexto, traducir entre estructuras, y aplicarlas en contextos de comunicación real.`,
  examples: [
    { english: 'By next year, we will have been living in this house for a decade.', spanish: 'Para el año que viene, habremos estado viviendo en esta casa durante una década.' },
    { english: 'Will you be working on the project this week?', spanish: 'Estarás trabajando en el proyecto esta semana?' },
    { english: 'She was just about to announce the winner when the lights went out.', spanish: 'Estaba justo a punto de anunciar al ganador cuando se fue la luz.' },
    { english: 'They will have been married for 25 years by their anniversary.', spanish: 'Habrán estado casados durante 25 años para su aniversario.' },
    { english: 'Will you be needing a ride to the event?', spanish: 'Necesitarás transporte al evento?' },
    { english: 'We were about to sign the deal when we discovered the mistake.', spanish: 'Estábamos a punto de firmar el trato cuando descubrimos el error.' },
  ],
  rule: `Resumen de fórmulas del módulo:

1. FUTURE PERFECT CONTINUOUS
   will + have + been + -ing + duration/time marker
   "I will have been working for 20 years by 2030."

2. FUTURE CONTINUOUS (Questions & Politeness)
   Will + subject + be + -ing...?
   "Will you be using the car tonight?"
   (Polite form: "Will you be needing anything?" instead of "Do you need anything?")

3. FUTURE IN THE PAST
   was/were + about to / on the point of + verb
   "I was about to leave." / "She was on the point of crying."

Clave para diferenciar:
- Future perfect continuous: énfasis en DURACIÓN hasta un punto futuro
- Future continuous (questions): pregunta sobre ACCIÓN EN PROGRESO en futuro
- Future in the past: FUTURO visto desde el PASADO`,
  commonMistakes: [
    { wrong: '❌ I will have work for 20 years by then.', correct: '✅ I will have been working for 20 years by then.', explanation: 'Future perfect continuous: will HAVE BEEN + -ing, no solo "will have".' },
    { wrong: '❌ Will you using the car?', correct: '✅ Will you be using the car?', explanation: 'En preguntas, falta "be": Will + you + BE + using.' },
    { wrong: '❌ She was about leaving.', correct: '✅ She was about to leave.', explanation: '"About to" va con infinitivo, no gerundio.' },
    { wrong: '❌ What you will be doing tomorrow?', correct: '✅ What will you be doing tomorrow?', explanation: 'En wh-questions: Wh-word + will + subject + be + -ing.' },
  ],
  vocabulary: [
    { word: 'duration', translation_es: 'duración', level: 'B2', category: 'time', partOfSpeech: 'noun', example: 'The project\'s duration will have been 6 months.', exampleTranslation: 'La duración del proyecto habrá sido de 6 meses.' },
    { word: 'imminent', translation_es: 'inminente', level: 'B2', category: 'time', partOfSpeech: 'adjective', example: 'His departure was imminent.', exampleTranslation: 'Su partida era inminente.' },
    { word: 'to interrupt', translation_es: 'interrumpir', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'A phone call interrupted the moment.', exampleTranslation: 'Una llamada interrumpió el momento.' },
    { word: 'perspective', translation_es: 'perspectiva', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'From that perspective, it was the right choice.', exampleTranslation: 'Desde esa perspectiva, fue la opción correcta.' },
    { word: 'accumulate', translation_es: 'acumular', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'Experience accumulates over time.', exampleTranslation: 'La experiencia se acumula con el tiempo.' },
    { word: 'refine', translation_es: 'refinar, pulir', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'A refined question is more polite.', exampleTranslation: 'Una pregunta refinada es más cortés.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-m10-review',
      level: 'B2',
      name: 'Future Perspectives & Future in the Past (Module Review)',
      explanation_es: 'Repaso de los tres temas principales: future perfect continuous (duración), future continuous en preguntas/cortesía, y future in the past (futuro desde el pasado).',
      formula: 'will have been -ing / Will you be -ing? / was/were about to',
      examples: [
        'By 2030, I will have been working here.',
        'Will you be needing anything?',
        'I was about to call you.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m10-l4-ex1',
      type: 'multiple_choice',
      concept: 'future perfect continuous recognition',
      difficulty: 3,
      prompt: 'Elige la frase que usa FUTURE PERFECT CONTINUOUS:',
      correctAnswer: 'By 2030, I will have been living here for 20 years.',
      options: [
        'By 2030, I will have been living here for 20 years.',
        'By 2030, I will live here.',
        'By 2030, I will be living here.',
      ],
      explanation: 'Future perfect continuous enfatiza la DURACIÓN acumulada hasta un punto futuro.',
    },
    {
      id: 'b2-m10-l4-ex2',
      type: 'fill_blank',
      concept: 'future continuous politeness',
      difficulty: 3,
      prompt: 'Completa con la forma más CORTÉS: "___ anything else?"',
      promptTranslation: 'Necesitarás algo más? (forma cortés)',
      correctAnswer: 'Will you be needing',
      explanation: '"Will you be needing?" suena más refinado que "Do you need?".',
    },
    {
      id: 'b2-m10-l4-ex3',
      type: 'error_correction',
      concept: 'future in the past structure',
      difficulty: 4,
      prompt: 'Encuentra el error: "He was about leaving the country."',
      correctAnswer: 'He was about to leave the country.',
      acceptedAnswers: [
        'He was about to leave the country',
        'He was about to leave the country.',
      ],
      acceptApproximate: true,
      explanation: '"About to" + infinitivo, no "about" + -ing.',
    },
    {
      id: 'b2-m10-l4-ex4',
      type: 'translate',
      concept: 'mixed module review',
      difficulty: 4,
      prompt: 'Traduce: "Para el próximo mes, habré estado estudiando durante 6 meses."',
      correctAnswer: 'By next month, I will have been studying for 6 months.',
      acceptedAnswers: [
        'By next month, I will have been studying for 6 months',
        'By next month, I will have been studying for 6 months.',
      ],
      acceptApproximate: true,
      explanation: 'Future perfect continuous: will have been + -ing + duración.',
    },
    {
      id: 'b2-m10-l4-ex5',
      type: 'reorder',
      concept: 'future continuous question order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Estarás en la oficina mañana?',
      words: ['Will', 'you', 'be', 'in', 'the', 'office', 'tomorrow?'],
      correctAnswer: 'Will you be in the office tomorrow?',
      explanation: 'Orden en yes/no questions: Will + you + be + resto.',
    },
    {
      id: 'b2-m10-l4-ex6',
      type: 'select_correct',
      concept: 'identifying future in the past',
      difficulty: 4,
      prompt: 'Cuál expresión DESCRIBE UNA ACCIÓN QUE ESTABA A PUNTO DE OCURRIR en el pasado:',
      correctAnswer: 'She was about to resign when they offered her a promotion.',
      options: [
        'She resigned last year.',
        'She was about to resign when they offered her a promotion.',
        'She will resign next year.',
      ],
      explanation: '"Was about to" expresa una acción inminente en el pasado, frecuentemente interrumpida.',
    },
    {
      id: 'b2-m10-l4-ex7',
      type: 'true_false',
      concept: 'module concepts',
      difficulty: 3,
      prompt: '"Will you be needing anything?" y "Will you need anything?" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation: '"Will you be needing?" (future continuous) suena más cortés y refinado que "Will you need?" (simple future).',
    },
    {
      id: 'b2-m10-l4-ex8',
      type: 'match',
      concept: 'matching structures to contexts',
      difficulty: 4,
      prompt: 'Emparejá cada estructura con su mejor contexto:',
      correctAnswer: '',
      pairs: [
        { left: 'Will have been + -ing', right: 'Hablar de duración acumulada hasta un punto futuro' },
        { left: 'Will + subject + be + -ing?', right: 'Preguntar sobre una acción futura en progreso o de forma cortés' },
        { left: 'Was/Were about to', right: 'Describir una acción que estaba a punto de ocurrir en el pasado' },
        { left: 'Present continuous from past', right: 'Narrar un plan futuro visto desde una perspectiva pasada' },
      ],
      explanation: 'Cada estructura tiene un contexto específico donde funciona mejor.',
    },
    {
      id: 'b2-m10-l4-ex9',
      type: 'listening',
      concept: 'mixed future tenses listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Una entrevista donde se mezclan referencias a future perfect continuous, future continuous, y future in the past.',
      listening: {
        audioText:
          "By the time I retire, I will have been working here for 30 years. Will you still be working then? I was about to leave three years ago, but they offered me a better position. By next month, I will have been in this role for 5 years. Will you be staying with the company? I was on the point of moving to another country, but life had other plans.",
        questions: [
          {
            id: 'b2-m10-l4-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'How long will he have been working by retirement?',
            correctAnswer: '30 years',
            options: ['20 years', '30 years', '25 years'],
            explanation: '"By the time I retire, I will have been working here for 30 years."',
          },
          {
            id: 'b2-m10-l4-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'He left the company three years ago.',
            correctAnswer: 'false',
            explanation: '"I was about to leave three years ago, but they offered me a better position." — No se fue.',
          },
          {
            id: 'b2-m10-l4-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What prevented him from moving to another country?',
            correctAnswer: 'Life circumstances changed his plans',
            options: [
              'He didn\'t have enough money',
              'His family refused',
              'Life circumstances changed his plans',
            ],
            explanation: '"I was on the point of moving... but life had other plans."',
          },
        ],
      },
    },
    {
      id: 'b2-m10-l4-ex10',
      type: 'writing',
      concept: 'mixed module writing',
      difficulty: 4,
      prompt: 'Escribí un breve relato (story) de tu carrera o plan futuro imaginario. Usá todos los tiempos del módulo: al menos 1 future perfect continuous, 1 future continuous question/polite form, y 1 future in the past structure. Mínimo 100 palabras.',
      promptTranslation: 'Write using all module tenses: future perfect continuous, future continuous, future in the past.',
      correctAnswer: '',
      explanation: 'Un buen relato integra naturalmente los tres temas del módulo en un contexto narrativo coherente.',
      taskType: 'story',
      targetReader: 'a mentor or friend',
      register: 'neutral',
      contentPoints: [
        'Al menos 1 future perfect continuous (will have been + -ing)',
        'Al menos 1 future continuous en pregunta o forma cortés (Will...be + -ing?)',
        'Al menos 1 future in the past (was about to / was on the point of)',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
  ],
  miniTest: [
    {
      id: 'b2-m10-l4-mt1',
      type: 'multiple_choice',
      concept: 'module structure identification',
      difficulty: 3,
      prompt: 'Cuál frase usa future perfect continuous:',
      correctAnswer: 'By 2025, I will have been working here for 5 years.',
      options: [
        'By 2025, I will have been working here for 5 years.',
        'By 2025, I will work here.',
        'By 2025, I am working here.',
      ],
      explanation: 'Future perfect continuous enfatiza duración acumulada.',
    },
    {
      id: 'b2-m10-l4-mt2',
      type: 'error_correction',
      concept: 'mixed future tenses',
      difficulty: 4,
      prompt: 'Corrige: "Will you being ready by tomorrow?"',
      correctAnswer: 'Will you be ready by tomorrow?',
      acceptedAnswers: [
        'Will you be ready by tomorrow',
        'Will you be ready by tomorrow?',
      ],
      acceptApproximate: true,
      explanation: 'Es "Will you be", no "Will you being". (Simple future o continuous depending on context.)',
    },
    {
      id: 'b2-m10-l4-mt3',
      type: 'true_false',
      concept: 'future in the past understanding',
      difficulty: 3,
      prompt: '"She was on the point of giving up" siempre significa que SÍ renunció.',
      correctAnswer: 'false',
      explanation: 'Significa que estaba a punto de renunciar, pero el contexto dice si lo hizo o no. Frecuentemente fue interrumpida.',
    },
    {
      id: 'b2-m10-l4-mt4',
      type: 'multiple_choice',
      concept: 'politeness with future continuous',
      difficulty: 4,
      prompt: 'Cuál pregunta suena más CORTÉS:',
      correctAnswer: 'Will you be needing anything else?',
      options: [
        'Do you need anything else?',
        'Will you be needing anything else?',
        'What do you need?',
      ],
      explanation: 'Future continuous crea una pregunta más refinada y menos invasiva.',
    },
  ],
  reviewItems: ['b2-m10-l1', 'b2-m10-l2', 'b2-m10-l3'],
  prerequisites: ['b2-m10-l3'],
}
