import type { Lesson } from '../../types'

export const lesson102FutureContinuousQuestionsAndPoliteness: Lesson = {
  id: 'b2-m10-l2',
  moduleId: 'm10-future-perspectives',
  order: 1,
  title: 'Future Continuous: Preguntas y formas corteses',
  objective: 'Formar preguntas con future continuous (yes/no y wh-) y usarlo como una forma más educada de pedir favores o información sobre acciones futuras.',
  explanation_es: `Ya conocés el future continuous: "I will be working at 9 AM" (una acción en progreso en un momento futuro específico). Ahora vamos a ver DOS usos especiales en B2:

1. PREGUNTAS con future continuous
2. CORTESÍA: usar future continuous en lugar del imperativo directo

Estructura de preguntas:
- Yes/no: Will + sujeto + be + -ing...?
- Wh-: What / When / Where / Why + will + sujeto + be + -ing...?

Ejemplos:
- Will you be using the car tonight? (pregunta directa pero no invasiva)
- What will you be doing at 6 PM? (pregunta sobre una acción futura en progreso)

Uso de CORTESÍA:
En lugar de una orden directa o pregunta imperativa, el future continuous suaviza la pregunta. Compará:
- "Give me the report!" (muy directo, impositivo)
- "Will you be finishing the report soon?" (pregunta cortés sobre algo que esperamos que esté haciendo)

O en lugar del presente simple:
- "Do you need anything?" (pregunta directa)
- "Will you be needing anything?" (forma más refinada, menos invasiva)

Puntos importantes:

1. En preguntas yes/no, el orden es: Will + sujeto + be + -ing...?

2. Las wh-questions: el wh-word va primero, después will + sujeto + be + -ing.

3. La cortesía funciona porque el future continuous presupone que la acción SEGUIRÁ OCURRIENDO, no que es un favor especial pedirla. Suena más natural y menos exigente.

4. Es especialmente útil cuando:
   - Preguntás si alguien estará haciendo algo antes de pedirles algo relacionado.
   - Querés evitar sonar imperativo o invasivo.
   - Hablás de hábitos futuros de forma indirecta.

5. El contexto temporal suele ser específico (tonight, tomorrow at 3 PM, this weekend).`,
  examples: [
    { english: 'Will you be using the car tonight?', spanish: 'Usarás el auto esta noche? (pregunta si está en progreso)', note: 'Pregunta si la acción de usar el auto estará en progreso. Implícitamente, "¿puedo usarlo?"' },
    { english: 'What will you be doing this weekend?', spanish: 'Qué estarás haciendo este fin de semana?' },
    { english: 'Will she be working tomorrow when I call?', spanish: 'Estará trabajando mañana cuando llame?' },
    { english: 'Will you be needing anything else?', spanish: 'Necesitarás algo más? (forma cortés)', note: 'Más educado que "Do you need anything?"' },
    { english: 'Where will you be staying during your trip?', spanish: 'Dónde estarás alojándote durante tu viaje?' },
    { english: 'Will they be attending the meeting next week?', spanish: 'Asistirán a la reunión la próxima semana?' },
  ],
  rule: `Fórmula de preguntas:

Yes/No questions: Will + sujeto + be + -ing + ?
Will you be working tomorrow?

Wh-questions: Wh-word + will + sujeto + be + -ing + ?
What will you be doing at 3 PM?
When will she be arriving?

Uso de cortesía:
En lugar de imperativos o preguntas directas con do/does + simple present, el future continuous crea una pregunta más refinada y menos invasiva:

Directo: Do you need anything?
Cortés: Will you be needing anything?

Directo: Can you help me?
Cortés: Will you be able to help me? (variante con be able to)

Reglas:
1. El verbo SIEMPRE en -ing.
2. En wh-questions, el wh-word va al inicio.
3. La cortesía funciona cuando presupone que la acción ya estará ocurriendo.`,
  formation: {
    title: 'Cómo se forman las preguntas con Future Continuous y las formas corteses',
    intro: 'Las preguntas con future continuous se forman con Will + sujeto + be + -ing. Este mismo patrón se usa como estrategia de cortesía: al presuponer que la acción seguirá ocurriendo, la pregunta suena menos invasiva que una directa con do/does.',
    patterns: [
      {
        name: 'Pregunta sí/no',
        formula: 'Will + sujeto + be + verbo en -ing + ...?',
        examples: [
          { english: 'Will you be using the car tonight?', spanish: '¿Usarás el auto esta noche?' },
          { english: 'Will she be working tomorrow when I call?', spanish: '¿Estará trabajando mañana cuando llame?' },
        ],
        note: 'El verbo SIEMPRE en -ing y con be: Will you BE using, no "Will you using".',
      },
      {
        name: 'Pregunta wh-',
        formula: 'Wh-word (What/When/Where/Why) + will + sujeto + be + verbo en -ing + ...?',
        examples: [
          { english: 'What will you be doing this weekend?', spanish: '¿Qué estarás haciendo este fin de semana?' },
          { english: 'Where will you be staying during your trip?', spanish: '¿Dónde estarás alojándote durante tu viaje?' },
        ],
        note: 'El wh-word va primero; después will + sujeto + be + -ing.',
      },
      {
        name: 'Cortesía',
        formula: 'Will you be + -ing...? (en lugar de imperativos o preguntas directas con do/does)',
        examples: [
          { english: 'Will you be needing anything else?', spanish: '¿Necesitarás algo más?' },
          { english: 'Will you be finishing the report soon?', spanish: '¿Terminarás el informe pronto?' },
        ],
        note: 'Más educado que "Do you need anything?" o "Give me the report!". Con be able to: Will you be able to help me?',
      },
    ],
    notes: [
      'La cortesía funciona porque presupone que la acción ya estará ocurriendo, no que estás pidiendo un favor especial.',
      'Suele acompañarse de un contexto temporal específico: tonight, tomorrow at 3 PM, this weekend.',
      'Útil para preguntar por disponibilidad o planes sin sonar impositivo.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ Will you using the car tonight?', correct: '✅ Will you be using the car tonight?', explanation: 'Falta "be": Will + you + BE + -ing.' },
    { wrong: '❌ What you will be doing tomorrow?', correct: '✅ What will you be doing tomorrow?', explanation: 'En wh-questions, el orden es Wh-word + will + sujeto + be + -ing, no "What you will be".' },
    { wrong: '❌ Will you be to work tomorrow?', correct: '✅ Will you be working tomorrow?', explanation: 'Es "be + -ing", no "be + to".' },
    { wrong: '❌ Where will you staying next week?', correct: '✅ Where will you be staying next week?', explanation: 'Falta "be": Where + will + you + BE + staying.' },
  ],
  vocabulary: [
    { word: 'polite', translation_es: 'cortés, educado', level: 'B2', category: 'communication', partOfSpeech: 'adjective', example: 'It\'s polite to ask "Will you be needing anything?"', exampleTranslation: 'Es cortés preguntar "¿necesitarás algo?"' },
    { word: 'indirect', translation_es: 'indirecto', level: 'B2', category: 'communication', partOfSpeech: 'adjective', example: 'An indirect question is less invasive.', exampleTranslation: 'Una pregunta indirecta es menos invasiva.' },
    { word: 'to assume', translation_es: 'presuponer', level: 'B2', category: 'communication', partOfSpeech: 'verb', example: 'The question assumes you\'ll be working.', exampleTranslation: 'La pregunta presupone que estarás trabajando.' },
    { word: 'to accompany', translation_es: 'acompañar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'Will you be accompanying us to the event?', exampleTranslation: 'Nos acompañarás al evento?' },
    { word: 'availability', translation_es: 'disponibilidad', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'The question checks your availability.', exampleTranslation: 'La pregunta verifica tu disponibilidad.' },
    { word: 'refined', translation_es: 'refinado, elegante', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'A refined way to ask is to use the future continuous.', exampleTranslation: 'Una forma refinada de preguntar es usar el future continuous.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-future-continuous-questions',
      level: 'B2',
      name: 'Future Continuous: Questions and Politeness',
      explanation_es: 'Preguntas yes/no con "Will + sujeto + be + -ing?" y wh-questions. Uso como forma cortés para evitar sones imperativos.',
      formula: 'Will you be -ing? / What will you be -ing?',
      examples: [
        'Will you be working tomorrow?',
        'What will they be doing next week?',
        'Will you be needing anything else? (polite form)',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m10-l2-ex1',
      type: 'multiple_choice',
      concept: 'future continuous yes/no questions',
      difficulty: 3,
      prompt: 'Completa: "___ the car tonight?"',
      promptTranslation: 'Usarás el auto esta noche?',
      correctAnswer: 'Will you be using',
      options: ['Will you be using', 'Will you use', 'Are you using'],
      explanation: 'Para preguntar si una acción estará en progreso en un momento futuro: Will + you + be + -ing?',
    },
    {
      id: 'b2-m10-l2-ex2',
      type: 'fill_blank',
      concept: 'future continuous wh-questions',
      difficulty: 3,
      prompt: 'Completa: "What ___ at 3 PM tomorrow?"',
      promptTranslation: 'Qué estarás haciendo mañana a las 3 PM?',
      correctAnswer: 'will you be doing',
      explanation: 'Wh-questions: Wh-word + will + sujeto + be + -ing.',
    },
    {
      id: 'b2-m10-l2-ex3',
      type: 'error_correction',
      concept: 'future continuous question structure',
      difficulty: 4,
      prompt: 'Encuentra el error: "What you will be doing tomorrow?"',
      correctAnswer: 'What will you be doing tomorrow?',
      acceptedAnswers: [
        'What will you be doing tomorrow',
        'What will you be doing tomorrow?',
      ],
      acceptApproximate: true,
      explanation: 'Orden correcto en wh-questions: Wh-word + will + sujeto + be + -ing, no "What you will be".',
    },
    {
      id: 'b2-m10-l2-ex4',
      type: 'translate',
      concept: 'future continuous polite form',
      difficulty: 4,
      prompt: 'Traduce: "Necesitarás algo más?" (usa la forma cortés con future continuous)',
      promptTranslation: 'Will you be needing anything else?',
      correctAnswer: 'Will you be needing anything else?',
      acceptedAnswers: [
        'Will you be needing anything else',
        'Will you be needing anything else?',
      ],
      acceptApproximate: true,
      explanation: '"Necesitarás" suena más directo; "Will you be needing" es más cortés y elegante.',
    },
    {
      id: 'b2-m10-l2-ex5',
      type: 'reorder',
      concept: 'future continuous question word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Dónde estarás trabajando la próxima semana?',
      words: ['Where', 'will', 'you', 'be', 'working', 'next', 'week?'],
      correctAnswer: 'Where will you be working next week?',
      explanation: 'Orden en wh-questions: Wh-word + will + sujeto + be + -ing + resto.',
    },
    {
      id: 'b2-m10-l2-ex6',
      type: 'select_correct',
      concept: 'future continuous for politeness',
      difficulty: 4,
      prompt: 'Elegí la opción MÁS CORTÉS:',
      correctAnswer: 'Will you be able to help me?',
      options: [
        'Will you be able to help me?',
        'Can you help me?',
        'Help me!',
      ],
      explanation: 'Las preguntas con future continuous suelen sonar más refinadas y menos invasivas que imperativos o preguntas directas con do/does.',
    },
    {
      id: 'b2-m10-l2-ex7',
      type: 'true_false',
      concept: 'future continuous politeness',
      difficulty: 3,
      prompt: '"Will you be needing anything?" suena más cortés que "Do you need anything?"',
      correctAnswer: 'true',
      explanation: 'Correcto. El future continuous crea una pregunta más indirecta y elegante.',
    },
    {
      id: 'b2-m10-l2-ex8',
      type: 'match',
      concept: 'future continuous vs direct forms',
      difficulty: 4,
      prompt: 'Emparejá preguntas directas con sus versiones en future continuous más cortesas:',
      correctAnswer: '',
      pairs: [
        { left: 'Do you need anything?', right: 'Will you be needing anything?' },
        { left: 'What are you doing tomorrow?', right: 'What will you be doing tomorrow?' },
        { left: 'Can you work late tonight?', right: 'Will you be working late tonight?' },
        { left: 'Where are you staying?', right: 'Where will you be staying?' },
      ],
      explanation: 'El future continuous transforma preguntas directas en formas más refinadas.',
    },
    {
      id: 'b2-m10-l2-ex9',
      type: 'listening',
      concept: 'future continuous politeness listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Una recepcionista hace preguntas corteses a un cliente sobre sus planes futuros usando future continuous.',
      listening: {
        audioText:
          "Welcome! Will you be staying with us for a few nights? Will you be needing any assistance with your luggage? What will you be doing during your stay? Will you be dining with us this evening? Don\'t hesitate to ask if you\'ll be needing anything else.",
        audioUrl: '/audio/tts/b2-m10-l2-ex9.mp3',
        questions: [
          {
            id: 'b2-m10-l2-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is the receptionist asking about luggage?',
            correctAnswer: 'If the guest will need assistance',
            options: ['If luggage is expensive', 'If the guest will need assistance', 'Where the luggage is'],
            explanation: '"Will you be needing any assistance with your luggage?"',
          },
          {
            id: 'b2-m10-l2-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The receptionist asks what the guest will be doing during the stay.',
            correctAnswer: 'true',
            explanation: '"What will you be doing during your stay?"',
          },
          {
            id: 'b2-m10-l2-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What tone does the receptionist use throughout?',
            correctAnswer: 'Polite and helpful',
            options: ['Rude and dismissive', 'Polite and helpful', 'Indifferent and cold'],
            explanation: 'La recepcionista usa preguntas corteses con future continuous, creando un tono educado.',
          },
        ],
      },
    },
    {
      id: 'b2-m10-l2-ex10',
      type: 'writing',
      concept: 'future continuous politeness writing',
      difficulty: 4,
      prompt: 'Escribí un email cortés (email) a un colega preguntándole sobre sus planes para la próxima semana de trabajo. Usá al menos 3 preguntas con future continuous. Deben sonar elegantes y profesionales.',
      promptTranslation: 'Write a polite email with future continuous questions about work plans.',
      correctAnswer: '',
      explanation: 'Un buen email laboral usa future continuous para hacer preguntas de forma refinada y profesional.',
      taskType: 'email',
      targetReader: 'a work colleague',
      register: 'formal',
      contentPoints: [
        'Al menos 3 preguntas distintas con future continuous',
        'Tono profesional y cortés a lo largo',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m10-l2-ex11',
      type: 'speaking',
      concept: 'future continuous questions pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la pregunta modelo y repetila en voz alta.',
      correctAnswer: 'Will you be working late tomorrow?',
      explanation: 'Practicá la entonación de preguntas con future continuous. Notá cómo sube la entonación al final de una yes/no question.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m10-l2-mt1',
      type: 'multiple_choice',
      concept: 'future continuous yes/no question',
      difficulty: 3,
      prompt: 'Completa: "___ around this weekend?"',
      promptTranslation: 'Estarás por aquí este fin de semana?',
      correctAnswer: 'Will you be around',
      options: ['Will you be around', 'Will you around', 'Are you around'],
      explanation: 'Will + you + be + -ing (o be + adjective en este caso).',
    },
    {
      id: 'b2-m10-l2-mt2',
      type: 'error_correction',
      concept: 'future continuous wh-question',
      difficulty: 4,
      prompt: 'Corrige: "Where will you staying next summer?"',
      correctAnswer: 'Where will you be staying next summer?',
      acceptedAnswers: [
        'Where will you be staying next summer',
        'Where will you be staying next summer?',
      ],
      acceptApproximate: true,
      explanation: 'Falta "be": Where + will + you + BE + staying.',
    },
    {
      id: 'b2-m10-l2-mt3',
      type: 'true_false',
      concept: 'future continuous politeness',
      difficulty: 3,
      prompt: '"Will you be needing anything?" y "Do you need anything?" tienen exactamente el mismo nivel de cortesía.',
      correctAnswer: 'false',
      explanation: '"Will you be needing?" suena más refinado y cortés que la pregunta directa con "do".',
    },
  ],
  reviewItems: ['b1-m5-l1', 'b2-m10-l1'],
  prerequisites: ['b1-m5-l1'],
}
