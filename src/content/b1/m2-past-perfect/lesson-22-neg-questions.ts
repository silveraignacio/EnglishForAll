import type { Lesson } from '../../types'

export const lesson22NegQuestions: Lesson = {
  id: 'b1-m2-l2',
  moduleId: 'm2-past-perfect',
  order: 1,
  title: 'Past Perfect (negativo y preguntas)',
  objective: 'Formar negativos con hadn\'t y preguntas con Had + subject + past participle.',
  explanation_es: `Ahora veremos el past perfect en negativo y en preguntas. La estructura es muy sencilla porque "had" hace todo el trabajo.

NEGATIVO:
- had + not + past participle → hadn\'t + past participle
- I hadn\'t eaten anything that morning. = No había comido nada esa mañana.
- He hadn\'t finished when I called. = Él no había terminado cuando llamé.

PREGUNTAS:
- Had + subject + past participle ?
- Had you seen that film before? = ¿Habías visto esa película antes?
- Had she finished her homework? = ¿Había terminado ella sus deberes?

Respuestas cortas:
- Yes, I had. / No, I hadn\'t.

Atención a estos detalles:

1. En el negativo usamos "hadn\'t" (had not). El participle NO cambia: hadn\'t eaten, hadn\'t finished.

2. En las preguntas, "had" va delante del sujeto: Had you...? Had she...?

3. NO uses "did" para el past perfect. Recuerda: "did" es del past simple. Para preguntas con past perfect usamos "Had", nunca "Did...had".

4. La pregunta "Had you seen...?" significa "¿Habías visto...?" — una experiencia anterior a un momento del pasado.

5. El participle siempre va después de "had" o "hadn\'t": Had you seen...? Yes, I had.`,
  examples: [
    { english: 'I hadn\'t eaten anything that morning.', spanish: 'No había comido nada esa mañana.', note: 'hadn\'t = had not.' },
    { english: 'Had you seen that film before?', spanish: '¿Habías visto esa película antes?', note: 'Had va delante del sujeto en preguntas.' },
    { english: 'He hadn\'t finished when I called.', spanish: 'Él no había terminado cuando llamé.' },
    { english: 'Had she done the shopping?', spanish: '¿Había hecho ella la compra?', note: 'done = participle de do.' },
    { english: 'No, I hadn\'t. I arrived early.', spanish: 'No, no lo había hecho. Llegué temprano.', note: 'Respuesta corta negativa.' },
    { english: 'We hadn\'t met before the party.', spanish: 'No nos habíamos conocido antes de la fiesta.', note: 'met = participle de meet.' },
  ],
  rule: `Negativo:
Subject + hadn\'t + past participle
- I hadn\'t eaten.
- He hadn\'t finished.

Preguntas:
Had + subject + past participle ?
- Had you seen the film?
- Had she finished?

Respuestas cortas:
- Yes, I had. / No, I hadn\'t.

Recuerda: no uses "did" con past perfect. Preguntas: Had you...? (no "Did you had...?").`,
  commonMistakes: [
    { wrong: '❌ Did you had seen that film before?', correct: '✅ Had you seen that film before?', explanation: 'El past perfect en pregunta usa "Had" delante del sujeto. Nunca combines "did" con "had".' },
    { wrong: '❌ I didn\'t had eaten anything.', correct: '✅ I hadn\'t eaten anything.', explanation: 'El negativo del past perfect es "hadn\'t + participle", no "didn\'t + had".' },
    { wrong: '❌ Had you saw that film?', correct: '✅ Had you seen that film?', explanation: 'Después de "had" usamos el past participle (seen), no el past simple (saw).' },
    { wrong: '❌ He hadn\'t finish when I called.', correct: '✅ He hadn\'t finished when I called.', explanation: 'Después de "hadn\'t" el verbo va en participle: hadn\'t finished.' },
  ],
  vocabulary: [
    { word: 'nothing', translation_es: 'nada', level: 'A2', category: 'quantifiers', partOfSpeech: 'pronoun', example: 'I hadn\'t eaten anything that morning.', exampleTranslation: 'No había comido nada esa mañana.' },
    { word: 'anything', translation_es: 'nada (en negativo)/algo', level: 'A2', category: 'quantifiers', partOfSpeech: 'pronoun', example: 'I hadn\'t eaten anything.', exampleTranslation: 'No había comido nada.' },
    { word: 'morning', translation_es: 'mañana', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'I hadn\'t eaten anything that morning.', exampleTranslation: 'No había comido nada esa mañana.' },
    { word: 'before', translation_es: 'antes', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: 'Had you seen it before?', exampleTranslation: '¿Lo habías visto antes?' },
    { word: 'already', translation_es: 'ya', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: 'She had already left.', exampleTranslation: 'Ella ya había salido.' },
    { word: 'yet', translation_es: 'todavía (en negativo)', level: 'B1', category: 'time', partOfSpeech: 'adverb', example: 'He hadn\'t finished yet.', exampleTranslation: 'Él todavía no había terminado.' },
  ],
  grammarPoints: [
    {
      id: 'gp-past-perfect-negative-questions',
      level: 'B1',
      name: 'Past perfect (negative & questions)',
      explanation_es: 'El past perfect negativo se forma con hadn\'t + past participle; las preguntas con Had + subject + past participle.',
      formula: 'Neg: subject + hadn\'t + pp | Q: Had + subject + pp?',
      examples: ['I hadn\'t eaten anything that morning.', 'Had you seen that film before?', 'He hadn\'t finished when I called.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m2-l2-ex1',
      type: 'multiple_choice',
      concept: 'past perfect negative',
      difficulty: 1,
      prompt: 'Completa: "I ___ eaten anything that morning."',
      promptTranslation: 'No había comido nada esa mañana.',
      correctAnswer: 'hadn\'t',
      options: ["hadn't", "didn't", "haven't"],
      explanation: 'Negativo del past perfect → hadn\'t + participle (eaten). → I hadn\'t eaten anything.',
    },
    {
      id: 'b1-m2-l2-ex2',
      type: 'multiple_choice',
      concept: 'past perfect questions',
      difficulty: 1,
      prompt: 'Completa la pregunta: "___ you seen that film before?"',
      promptTranslation: '¿Habías visto esa película antes?',
      correctAnswer: 'Had',
      options: ['Had', 'Did', 'Have'],
      explanation: 'Las preguntas de past perfect empiezan con "Had" + sujeto + participle. → Had you seen that film?',
    },
    {
      id: 'b1-m2-l2-ex3',
      type: 'fill_blank',
      concept: 'past perfect questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "Had she ___ (finish) her homework?"',
      promptTranslation: '¿Había terminado ella sus deberes?',
      correctAnswer: 'finished',
      acceptedAnswers: ['finished'],
      explanation: 'Después de "Had" + sujeto, usamos el past participle: finished. → Had she finished her homework?',
    },
    {
      id: 'b1-m2-l2-ex4',
      type: 'fill_blank',
      concept: 'past perfect negative',
      difficulty: 2,
      prompt: 'Completa: "He hadn\'t ___ (finish) when I called."',
      promptTranslation: 'Él no había terminado cuando llamé.',
      correctAnswer: 'finished',
      acceptedAnswers: ['finished'],
      explanation: 'Después de "hadn\'t" usamos el participle: hadn\'t finished. → He hadn\'t finished when I called.',
    },
    {
      id: 'b1-m2-l2-ex5',
      type: 'reorder',
      concept: 'past perfect questions',
      difficulty: 3,
      prompt: 'Ordena la pregunta (past perfect):',
      promptTranslation: '¿Había terminado ella sus deberes?',
      words: ['Had', 'she', 'finished', 'her', 'homework?'],
      correctAnswer: 'Had she finished her homework?',
      explanation: 'Pregunta: Had + sujeto (she) + past participle (finished) + resto. → Had she finished her homework?',
    },
    {
      id: 'b1-m2-l2-ex6',
      type: 'translate',
      concept: 'past perfect questions',
      difficulty: 3,
      prompt: 'Traduce: "¿Habías visto esa película antes?"',
      correctAnswer: 'Had you seen that film before?',
      acceptedAnswers: [
        'Had you seen that film before',
        'Had you seen that film before?',
        'Had you seen that film before?',
      ],
      acceptApproximate: true,
      explanation: 'Pregunta: "Had" + sujeto (you) + participle (seen) + "that film" + "before". → Had you seen that film before?',
    },
    {
      id: 'b1-m2-l2-ex7',
      type: 'translate',
      concept: 'past perfect negative',
      difficulty: 4,
      prompt: 'Traduce: "No había comido nada esa mañana."',
      correctAnswer: "I hadn't eaten anything that morning.",
      acceptedAnswers: [
        "I hadn't eaten anything that morning",
        "I hadn't eaten anything that morning.",
        "I had not eaten anything that morning",
        "I had not eaten anything that morning.",
      ],
      acceptApproximate: true,
      explanation: '"No había comido" = I hadn\'t eaten. "nada" = anything (en negativo). "esa mañana" = that morning.',
    },
    {
      id: 'b1-m2-l2-ex8',
      type: 'error_correction',
      concept: 'past perfect questions',
      difficulty: 4,
      prompt: 'Corrige el error: "Did you had seen that film before?"',
      correctAnswer: 'Had you seen that film before?',
      acceptedAnswers: [
        'Had you seen that film before',
        'Had you seen that film before?',
      ],
      acceptApproximate: true,
      explanation: 'El past perfect en pregunta usa solo "Had" delante del sujeto. "Did" pertenece al past simple y nunca se combina con "had".',
    },
    {
      id: 'b1-m2-l2-ex9',
      type: 'true_false',
      concept: 'past perfect negative',
      difficulty: 3,
      prompt: '"I hadn\'t eaten" y "I didn\'t eat" significan exactamente lo mismo y se pueden usar siempre igual.',
      correctAnswer: 'false',
      explanation: 'Falso. "I hadn\'t eaten" (past perfect) se usa cuando hay otra acción pasada de referencia ("that morning, before I left..."). "I didn\'t eat" (past simple) es un hecho pasado aislado.',
    },
    {
      id: 'b1-m2-l2-ex10',
      type: 'listening',
      concept: 'past perfect negative and questions listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'En una entrevista de trabajo, el entrevistador pregunta al candidato sobre su experiencia previa. El candidato comenta qué no había hecho antes, pero qué sí había hecho en otros trabajos.',
      listening: {
        audioText:
          "Interviewer: 'Had you worked in sales before this position?' Candidate: 'No, I hadn\'t worked in sales, but I had worked in customer service for three years. I hadn\'t managed a large team before, but I had supervised some junior staff. The company had asked me to learn new software, and I hadn\'t used that system before, but I had quickly adapted to it. I hadn\'t traveled abroad for business, but I was ready for that challenge.'",
        questions: [
          {
            id: 'b1-m2-l2-ex10-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The candidate had worked in sales before.',
            correctAnswer: 'false',
            explanation: '"No, I hadn\'t worked in sales."',
          },
          {
            id: 'b1-m2-l2-ex10-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'What had the candidate done for three years?',
            correctAnswer: 'Worked in customer service',
            options: ['Worked in customer service', 'Managed a large team', 'Traveled abroad'],
            explanation: '"I had worked in customer service for three years."',
          },
          {
            id: 'b1-m2-l2-ex10-q3',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The candidate had used the new software system before.',
            correctAnswer: 'false',
            explanation: '"I hadn\'t used that system before, but I had quickly adapted to it."',
          },
        ],
      },
    },
    {
      id: 'b1-m2-l2-ex11',
      type: 'writing',
      concept: 'past perfect negative and questions writing',
      difficulty: 3,
      prompt: 'Escribile un email a un amigo/a contándole qué NO habías hecho antes de empezar tu nuevo trabajo (usá el past perfect negativo).',
      promptTranslation: 'Write an informal email to a friend about what you hadn\'t done before starting your new job.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con "hadn\'t + past participle" para describir la falta de experiencia previa, pero también qué sí habías hecho.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Qué no habías hecho antes del nuevo trabajo', 'Qué experiencia previa sí tenías'],
      requiresOwnIdea: false,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m2-l2-ex12',
      type: 'speaking',
      concept: 'past perfect negative and questions pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Had you ever met her before that party?',
      explanation: 'Practicá la entonación de pregunta en past perfect: la voz sube al final. "Had" al principio suena fuerte, y "ever" es una sílaba átona.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m2-l2-mt1',
      type: 'multiple_choice',
      concept: 'past perfect questions',
      difficulty: 2,
      prompt: 'Elige la pregunta correcta:',
      promptTranslation: '¿Había hecho ella la compra?',
      correctAnswer: 'Had she done the shopping?',
      options: [
        'Had she done the shopping?',
        'Did she had done the shopping?',
        'Had she did the shopping?',
      ],
      explanation: 'Pregunta de past perfect: Had + sujeto + past participle (done). "Did she had" y "had did" son incorrectas.',
    },
    {
      id: 'b1-m2-l2-mt2',
      type: 'fill_blank',
      concept: 'past perfect negative',
      difficulty: 2,
      prompt: 'Completa: "We ___ met before the party." (negativo)',
      promptTranslation: 'No nos habíamos conocido antes de la fiesta.',
      correctAnswer: "hadn't",
      acceptedAnswers: ["hadn't", 'had not'],
      explanation: 'Negativo del past perfect → hadn\'t + participle (met). → We hadn\'t met before the party.',
    },
    {
      id: 'b1-m2-l2-mt3',
      type: 'error_correction',
      concept: 'past perfect negative',
      difficulty: 4,
      prompt: 'Corrige el error: "I didn\'t had eaten anything."',
      correctAnswer: "I hadn't eaten anything.",
      acceptedAnswers: [
        "I hadn't eaten anything",
        "I hadn't eaten anything.",
        'I had not eaten anything',
        'I had not eaten anything.',
      ],
      acceptApproximate: true,
      explanation: 'El negativo del past perfect es "hadn\'t + participle" (hadn\'t eaten). "Didn\'t had" es incorrecto: no mezcles did con had.',
    },
    {
      id: 'b1-m2-l2-mt4',
      type: 'true_false',
      concept: 'past perfect questions',
      difficulty: 3,
      prompt: 'La respuesta corta a "Had you seen the film?" es "Yes, I had."',
      correctAnswer: 'true',
      explanation: 'Correcto. Las respuestas cortas del past perfect repiten "had": Yes, I had. / No, I hadn\'t.',
    },
  ],
  reviewItems: ['b1-m2-l1'],
  prerequisites: ['b1-m2-l1'],
}
