import type { Lesson } from '../../types'

export const lesson12MayMightCouldHave: Lesson = {
  id: 'b2-m1-l2',
  moduleId: 'm1-modal-perfects',
  order: 1,
  title: 'may have / might have / could have: posibilidad pasada',
  objective: 'Expresar posibilidad o incertidumbre sobre el pasado con "may have / might have / could have + participio", y reconocer el matiz de arrepentimiento en "could have".',
  explanation_es: `Ya vimos que "must have" expresa certeza sobre el pasado (estamos seguros de que algo pasó). Ahora vamos a hablar de la POSIBILIDAD — cuando creemos que algo PODRÍA haber pasado, pero no estamos seguros.

Estructura:
- may have + participio → es posible que algo haya pasado (posibilidad más formal).
- might have + participio → es posible que algo haya pasado (posibilidad, similar a may have pero más coloquial).
- could have + participio → es posible que algo haya pasado (TAMBIÉN expresa arrepentimiento).

Ejemplos:
- She may have forgotten our appointment. = Es posible que se haya olvidado. (Posibilidad, pero no certeza.)
- He might have taken the wrong train. = Podría haberse subido al tren equivocado.
- They could have arrived earlier. = Podrían haber llegado más temprano. (Arrepentimiento: si hubieran querido, podrían haberlo hecho, pero no lo hicieron.)
- You could have told me! = ¡Me podrías haber avisado! (Arrepentimiento: tenías la oportunidad/capacidad de hacerlo, pero no lo hiciste.)

Puntos importantes:

1. May have, might have, could have expresan POSIBILIDAD (no certeza). Son más débiles que "must have". Si tenés pruebas fuertes, usás "must have". Si es solo una posibilidad, usás "may/might/could have".

2. "May have" es más formal que "might have". En conversación coloquial se usa "might have" o "could have" más frecuentemente.

3. "Could have" tiene DOS usos en pasado:
   a) Posibilidad: He could have taken the bus = Es posible que haya tomado el autobús.
   b) Arrepentimiento: You could have called! = ¡Me podrías haber llamado! (tenías la capacidad/oportunidad de hacerlo).
   El contexto determina cuál es. Con verbs of ability (could do) es más clara la posibilidad; con should/obligation hay arrepentimiento.

4. May have y might have son intercambiables en mayoría de contextos. "Might have" es más usado en inglés moderno.

5. La diferencia entre los tres modales y "must have":
   - must have: Estoy casi seguro (pruebas fuertes). → She must have left (seguro).
   - may/might/could have: Es posible (sin certeza). → She may have left (posiblemente).
   - can't have: Estoy seguro de que NO pasó. → She can't have left.

6. Comparación con "could" presente: "He could arrive tomorrow" (es posible que llegue mañana) vs. "He could have arrived" (era posible que llegara/que haya llegado).`,
  examples: [
    { english: 'She may have forgotten about the meeting.', spanish: 'Es posible que se haya olvidado de la reunión.', note: 'Posibilidad, sin certeza (si tuvieras pruebas, dirías "must have").' },
    { english: 'They might have taken a different route.', spanish: 'Podrían haber tomado una ruta diferente.', note: 'Posibilidad, usamos "might have" en conversación coloquial.' },
    { english: 'He could have been at home, but I\'m not sure.', spanish: 'Podría haber estado en casa, pero no estoy seguro.', note: 'Posibilidad, "could have" = era posible pero no sé si pasó.' },
    { english: 'You could have told me about it!', spanish: '¡Me podrías haber dicho sobre eso!', note: 'Arrepentimiento: tenías la capacidad/oportunidad de hacerlo.' },
    { english: 'We might have missed the train, that\'s why we\'re late.', spanish: 'Podríamos habernos perdido el tren, por eso llegamos tarde.', note: 'Posibilidad explicando una situación actual.' },
    { english: 'I could have bought that house ten years ago, but I didn\'t.', spanish: 'Podría haber comprado esa casa hace diez años, pero no lo hice.', note: 'Arrepentimiento sobre una oportunidad perdida.' },
  ],
  rule: `Fórmula:
may have / might have / could have + participio pasado

Posibilidad: may have / might have / could have + participio → She may have forgotten.
Arrepentimiento (solo could have): could have + participio → You could have called!

Reglas:
1. Todos expresan POSIBILIDAD en pasado, no certeza (para certeza usás must have).
2. "Might have" y "may have" son intercambiables; "might have" es más usado hoy en día.
3. "Could have" tiene dos usos: posibilidad Y arrepentimiento (lo sé porque tenía la capacidad de hacerlo pero no lo hizo).
4. El verbo siempre en participio pasado: may have forgotten, might have left, could have done.
5. En forma negativa: may not have / might not have / couldn't have (no pasó).
6. NO confundir con "could + infinitivo" (presente): "She could arrive" (es posible que llegue ahora) ≠ "She could have arrived" (era posible que llegara / que haya llegado).`,
  formation: {
    title: 'Cómo se forma may / might / could have — Posibilidad en el pasado',
    intro: 'Para hablar de una posibilidad (no certeza) sobre el pasado usamos el auxiliar have + participio: may/might/could have. Con could have también expresamos arrepentimiento por una oportunidad perdida.',
    patterns: [
      {
        name: 'Afirmativo — posibilidad',
        formula: 'Sujeto + may / might / could + have + participio pasado + complemento',
        examples: [
          { english: 'She may have forgotten about the meeting.', spanish: 'Es posible que se haya olvidado de la reunión.' },
          { english: 'They might have taken a different route.', spanish: 'Podrían haber tomado una ruta diferente.' },
          { english: 'He could have been at home, but I\'m not sure.', spanish: 'Podría haber estado en casa, pero no estoy seguro.' },
        ],
        note: 'May have y might have son intercambiables; might have es más usado en conversación.',
      },
      {
        name: 'Afirmativo — arrepentimiento (solo could have)',
        formula: 'Sujeto + could + have + participio pasado + complemento (tenía la oportunidad, pero no la usé)',
        examples: [
          { english: 'You could have told me about it!', spanish: '¡Me podrías haber dicho sobre eso!' },
          { english: 'I could have bought that house ten years ago, but I didn\'t.', spanish: 'Podría haber comprado esa casa hace diez años, pero no lo hice.' },
        ],
        note: 'Con arrepentimiento, could have implica capacidad u oportunidad perdida, no obligación.',
      },
      {
        name: 'Negativo — posibilidad de que no pasara',
        formula: 'Sujeto + may/might not + have + participio pasado · Sujeto + couldn\'t + have + participio pasado',
        examples: [
          { english: 'She may not have received the message.', spanish: 'Es posible que no haya recibido el mensaje.' },
          { english: 'He couldn\'t have taken the train, it left hours ago.', spanish: 'No pudo haber tomado el tren, salió hace horas.' },
        ],
        note: 'May not have y might not have = es posible que NO haya pasado. Couldn\'t have = seguro que no pasó.',
      },
    ],
    notes: [
      'Son más débiles que must have (certeza): si tenés pruebas fuertes, usás must have; si es solo una posibilidad, usás may/might/could have.',
      '"Might have" nunca se escribe "might of": es el auxiliar have, no la preposición of.',
      'En habla rápida, "could have" y "might have" se reducen (suenan como "coulda" / "mighta").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ He might of forgotten the keys.', correct: '✅ He might have forgotten the keys.', explanation: '"Might have", no "might of". "Have" es el auxiliar, nunca "of".' },
    { wrong: '❌ She could arrived home earlier.', correct: '✅ She could have arrived home earlier.', explanation: 'Después de "could have" va el participio pasado (arrived), no el infinitivo.' },
    { wrong: '❌ They may have go to the party.', correct: '✅ They may have gone to the party.', explanation: 'Es "may have gone" (participio pasado), no "may have go".' },
    { wrong: '❌ I must have may forgotten something.', correct: '✅ I may have forgotten something.', explanation: 'No se usan dos modales juntos. Elegís uno: "must have" (certeza) o "may have" (posibilidad).' },
    { wrong: '❌ You could have told me! = You had the obligation to tell me.', correct: '✅ You could have told me! = You had the ability/opportunity to tell me, but you didn\'t.', explanation: '"Could have" + arrepentimiento habla de capacidad/oportunidad perdida, no de obligación.' },
  ],
  vocabulary: [
    { word: 'possibility', translation_es: 'posibilidad', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'There\'s a possibility she left early.', exampleTranslation: 'Hay una posibilidad de que se haya ido temprano.' },
    { word: 'to regret', translation_es: 'arrepentirse', level: 'B2', category: 'modals', partOfSpeech: 'verb', example: 'I regret not calling you.', exampleTranslation: 'Me arrepiento de no haberte llamado.' },
    { word: 'opportunity', translation_es: 'oportunidad', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'You had the opportunity to apply for the job.', exampleTranslation: 'Tuviste la oportunidad de solicitar el trabajo.' },
    { word: 'capacity', translation_es: 'capacidad', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'She had the capacity to solve the problem.', exampleTranslation: 'Ella tenía la capacidad de resolver el problema.' },
    { word: 'uncertain', translation_es: 'incierto', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'I\'m uncertain about what happened.', exampleTranslation: 'No estoy seguro de qué pasó.' },
    { word: 'to miss (an opportunity)', translation_es: 'perder (una oportunidad)', level: 'B2', category: 'phrasal verbs', partOfSpeech: 'verb', example: 'I missed the chance to go abroad.', exampleTranslation: 'Perdí la oportunidad de irme al extranjero.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-may-might-could-have',
      level: 'B2',
      name: 'may have / might have / could have (possibility in the past)',
      explanation_es: 'Expresar posibilidad sobre el pasado. "May have" y "might have" son intercambiables. "Could have" también expresa posibilidad, pero con matiz de arrepentimiento (I could have done it = tenía la capacidad pero no lo hice).',
      formula: 'may have / might have / could have + past participle',
      examples: ['She may have forgotten.', 'They might have left.', 'You could have told me!'],
    },
  ],
  exercises: [
    {
      id: 'b2-m1-l2-ex1',
      type: 'multiple_choice',
      concept: 'may have vs must have',
      difficulty: 3,
      prompt: 'No tenés pruebas fuertes, solo una posibilidad. Completa: "He ___ taken the early train, but I\'m not sure."',
      promptTranslation: 'Podría haber tomado el tren de la mañana, pero no estoy seguro.',
      correctAnswer: 'may have',
      options: ['may have', 'must have', 'can\'t have'],
      explanation: 'Sin certeza, usamos "may have" (posibilidad). "Must have" sería si tuvieras pruebas fuertes.',
    },
    {
      id: 'b2-m1-l2-ex2',
      type: 'multiple_choice',
      concept: 'could have arrepentimiento',
      difficulty: 4,
      prompt: 'Traduce el sentido de arrepentimiento: "¡Me podrías haber avisado!"',
      promptTranslation: 'Expresá arrepentimiento sobre no avisar.',
      correctAnswer: 'You could have told me!',
      options: ['You could have told me!', 'You must tell me!', 'You may have forgotten me!'],
      explanation: '"Could have" + arrepentimiento = tenías la capacidad/oportunidad pero no lo hiciste.',
    },
    {
      id: 'b2-m1-l2-ex3',
      type: 'fill_blank',
      concept: 'might have form',
      difficulty: 3,
      prompt: 'Completa: "They might have ___ (go) to the beach yesterday, but they didn\'t tell me."',
      promptTranslation: 'Podrían haber ido a la playa ayer.',
      correctAnswer: 'gone',
      explanation: 'Después de "might have" va el participio pasado: go → gone.',
    },
    {
      id: 'b2-m1-l2-ex4',
      type: 'error_correction',
      concept: 'could have participio',
      difficulty: 4,
      prompt: 'Encuentra el error: "She could arrived earlier if she had left on time."',
      correctAnswer: 'She could have arrived earlier if she had left on time.',
      acceptedAnswers: [
        'She could have arrived earlier if she had left on time',
        'She could have arrived earlier if she had left on time.',
      ],
      acceptApproximate: true,
      explanation: '"Could have" + participio (arrived), no infinitivo. La estructura correcta es "could have arrived".',
    },
    {
      id: 'b2-m1-l2-ex5',
      type: 'translate',
      concept: 'may have translation',
      difficulty: 4,
      prompt: 'Traduce: "Es posible que hayan tomado una ruta diferente porque llegaron tarde."',
      correctAnswer: 'They may have taken a different route because they arrived late.',
      acceptedAnswers: [
        'They may have taken a different route because they arrived late',
        'They may have taken a different route because they arrived late.',
        'They might have taken a different route because they arrived late.',
        'They might have taken a different route because they arrived late',
      ],
      acceptApproximate: true,
      explanation: '"Es posible que hayan" = may/might have + participio. "Ruta diferente" = different route.',
    },
    {
      id: 'b2-m1-l2-ex6',
      type: 'reorder',
      concept: 'could have word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Me podrías haber llamado.',
      words: ['You', 'could', 'have', 'called', 'me.'],
      correctAnswer: 'You could have called me.',
      explanation: 'Orden: sujeto + could have + participio (called) + objeto. → You could have called me.',
    },
    {
      id: 'b2-m1-l2-ex7',
      type: 'select_correct',
      concept: 'may/might/could intercambiables',
      difficulty: 4,
      prompt: 'Tres opciones son CORRECTAS para expresar posibilidad en pasado. ¿Cuál NO lo es?',
      correctAnswer: 'She must have forgotten the keys.',
      options: ['She may have forgotten the keys.', 'She might have forgotten the keys.', 'She could have forgotten the keys.', 'She must have forgotten the keys.'],
      explanation: '"Must have" expresa certeza, no posibilidad. Los otros tres (may/might/could) son correctos para posibilidad.',
    },
    {
      id: 'b2-m1-l2-ex8',
      type: 'true_false',
      concept: 'could have arrepentimiento',
      difficulty: 3,
      prompt: '"I could have gone to university" significa que tuve la capacidad/oportunidad pero no lo hice (arrepentimiento).',
      correctAnswer: 'true',
      explanation: 'Correcto. "Could have" + arrepentimiento = tenía la oportunidad/capacidad.',
    },
    {
      id: 'b2-m1-l2-ex9',
      type: 'listening',
      concept: 'may have listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Tom habla sobre qué puede haber pasado con su dinero desaparecido. Usa posibilidades (may have, might have, could have).',
      listening: {
        audioText:
          "I can\'t find my wallet. I might have left it at the office, or it could have fallen out of my pocket when I was at the supermarket. My brother might have borrowed it by accident. Actually, I may have put it in a different jacket. Let me think... I could have taken it out at the ATM, but I don\'t remember. Oh wait, I may have left it at the restaurant last night!",
        audioUrl: '/audio/tts/b2-m1-l2-ex9.mp3',
        questions: [
          {
            id: 'b2-m1-l2-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Where might Tom have left his wallet?',
            correctAnswer: 'At the office, the supermarket, a restaurant, or in a different jacket',
            options: ['At the office, the supermarket, a restaurant, or in a different jacket', 'Only at the office', 'He is sure where it is'],
            explanation: 'Tom menciona varias posibilidades: office, supermarket, different jacket, restaurant.',
          },
          {
            id: 'b2-m1-l2-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Tom is certain about where his wallet is.',
            correctAnswer: 'false',
            explanation: 'Tom expresa posibilidades (might have, could have, may have), no certeza.',
          },
          {
            id: 'b2-m1-l2-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: '¿Cuál es una posibilidad que menciona Tom?',
            correctAnswer: 'His brother might have borrowed it',
            options: ['His brother might have borrowed it', 'His wallet was stolen', 'He definitely left it at the ATM'],
            explanation: '"My brother might have borrowed it by accident."',
          },
        ],
      },
    },
    {
      id: 'b2-m1-l2-ex10',
      type: 'writing',
      concept: 'may have writing',
      difficulty: 4,
      prompt: 'Escribí un correo informal a un amigo explicando qué puede haber pasado con un evento que no ocurrió (ej. una fiesta que se canceló, un viaje pospuesto). Usá al menos 3 posibilidades con "may have / might have / could have".',
      promptTranslation: 'Write an informal email explaining what may have happened with a canceled event.',
      correctAnswer: '',
      explanation: 'Un buen correo expresa varias posibilidades (may/might/could have + participio) de forma natural, en tono informal.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Al menos 3 posibilidades distintas con may/might/could have', 'Un cierre que abre diálogo ("what do you think?")'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b2-m1-l2-ex11',
      type: 'speaking',
      concept: 'could have pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'You could have told me about it!',
      explanation: 'Practicá la pronunciación natural de "could have" (suena como "coulda" /ˈkʊdə/ en habla rápida) y el énfasis del arrepentimiento.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m1-l2-mt1',
      type: 'multiple_choice',
      concept: 'may have vs must have',
      difficulty: 3,
      prompt: 'Completá: "He ___ forgotten the meeting, but I\'m not 100% sure."',
      promptTranslation: 'Es posible que se haya olvidado, pero no estoy seguro.',
      correctAnswer: 'may have',
      options: ['may have', 'must have', 'can\'t have'],
      explanation: 'Sin certeza, "may have" expresa posibilidad. "Must have" es para certeza total.',
    },
    {
      id: 'b2-m1-l2-mt2',
      type: 'error_correction',
      concept: 'could have of',
      difficulty: 4,
      prompt: 'Corrige: "She could of told me about the party."',
      correctAnswer: 'She could have told me about the party.',
      acceptedAnswers: [
        'She could have told me about the party',
        'She could have told me about the party.',
      ],
      acceptApproximate: true,
      explanation: '"Could have", nunca "could of". "Have" es el auxiliar, no "of".',
    },
    {
      id: 'b2-m1-l2-mt3',
      type: 'true_false',
      concept: 'might have could have',
      difficulty: 2,
      prompt: '"Might have" y "could have" significan exactamente lo mismo siempre.',
      correctAnswer: 'false',
      explanation: 'Falso. Son parecidos para posibilidad, pero "could have" también expresa arrepentimiento.',
    },
  ],
  reviewItems: ['b2-m1-l1'],
  prerequisites: ['b2-m1-l1'],
}
