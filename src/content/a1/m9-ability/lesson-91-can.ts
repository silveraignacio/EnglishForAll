import type { Lesson } from '../../types'

export const lesson91Can: Lesson = {
  id: 'a1-m9-l1',
  moduleId: 'm9-ability',
  order: 0,
  title: 'Can / Can\'t (habilidad)',
  objective: 'Expresar habilidad con "can" y "can\'t": decir lo que sabes hacer y lo que no sabes hacer.',
  explanation_es: `El verbo "can" significa "poder" o "saber hacer algo". Lo usamos para hablar de la capacidad de hacer algo:
- I can swim. = Yo sé nadar.

"Can" es un verbo especial (un verbo modal). Tiene 3 reglas muy importantes:

1. Va seguido de otro verbo en infinitivo SIN "to":
- I can swim. (NO: I can to swim.)

2. Es igual para todas las personas. NO añade -s con he/she/it:
- She can drive. (NO: She cans drive.)

3. Su negativo es "can't" (cannot):
- He can't speak Italian. = Él no sabe hablar italiano.
- NO decimos "don't can".

Para hacer preguntas, colocamos "can" delante del sujeto:
- Can + sujeto + verbo?
- Can you cook? = ¿Sabes cocinar?

Las respuestas cortas son:
- Yes, I can. = Sí, sé.
- No, I can't. = No, no sé.`,
  examples: [
    { english: 'I can swim.', spanish: 'Yo sé nadar.', note: 'can + verbo sin "to".' },
    { english: 'She can drive.', spanish: 'Ella sabe conducir.', note: 'Con she, "can" no cambia: she can (no "she cans").' },
    { english: "He can't speak Italian.", spanish: 'Él no sabe hablar italiano.', note: "El negativo es can't (cannot)." },
    { english: 'Can you cook?', spanish: '¿Sabes cocinar?', note: 'Pregunta: Can + sujeto + verbo?' },
    { english: 'Yes, I can.', spanish: 'Sí, sé.', note: 'Respuesta corta afirmativa.' },
    { english: "No, I can't.", spanish: 'No, no sé.', note: 'Respuesta corta negativa.' },
  ],
  rule: `**Habilidad con can:**
- Sujeto + can/can't + verbo (sin "to"): I can swim. / She can drive. / He can't speak Italian.
- "Can" no cambia con las personas: she can (nunca "she cans").

**Preguntas:**
- Can + sujeto + verbo? → Can you cook?
- Respuestas cortas: Yes, I can. / No, I can't.

**Recuerda:** la negativa es "can't", no "don't can".`,
  formation: {
    title: 'Cómo se forma "can / can\'t" — Habilidad',
    intro: '"Can" expresa habilidad (saber o poder hacer algo). Es un verbo modal: no cambia con las personas y va seguido del verbo en infinitivo sin "to".',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + can + verbo en infinitivo (sin "to")',
        examples: [
          { english: 'I can swim.', spanish: 'Yo sé nadar.' },
          { english: 'She can drive.', spanish: 'Ella sabe conducir.' },
          { english: 'They can dance.', spanish: 'Ellos saben bailar.' },
        ],
        note: '"Can" es igual para todas las personas: nunca añade -s (she can, no "she cans").',
      },
      {
        name: 'Negativo',
        formula: 'Sujeto + can\'t (cannot) + verbo en infinitivo (sin "to")',
        examples: [
          { english: 'He can\'t speak Italian.', spanish: 'Él no sabe hablar italiano.' },
          { english: 'I can\'t swim.', spanish: 'No sé nadar.' },
        ],
        note: 'La negativa es "can\'t" (= cannot). Nunca decimos "don\'t can".',
      },
      {
        name: 'Pregunta',
        formula: 'Can + sujeto + verbo en infinitivo (sin "to") + ...?',
        examples: [
          { english: 'Can you cook?', spanish: '¿Sabes cocinar?' },
          { english: 'Can she drive?', spanish: '¿Ella sabe conducir?' },
        ],
        note: 'En la pregunta, "can" va antes del sujeto. No necesitamos "do/does".',
      },
      {
        name: 'Respuesta corta',
        formula: 'Yes, + sujeto + can. / No, + sujeto + can\'t.',
        examples: [
          { english: 'Yes, I can.', spanish: 'Sí, sé.' },
          { english: 'No, I can\'t.', spanish: 'No, no sé.' },
        ],
      },
    ],
    notes: [
      'Después de "can/can\'t" el verbo va sin "to": I can swim (no "I can to swim").',
      'No confundir con "to be": en las respuestas cortas usamos "can", no "am/do": Yes, I can (no "Yes, I do").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ She cans swim.', correct: '✅ She can swim.', explanation: '"can" nunca añade -s, ni siquiera con he/she/it. El verbo que le sigue tampoco cambia: she can swim.' },
    { wrong: "❌ He don't can swim.", correct: '✅ He can\'t swim.', explanation: 'La negativa de "can" es "can\'t" (cannot). No usamos "don\'t" delante de "can".' },
    { wrong: '❌ Does she can swim?', correct: '✅ Can she swim?', explanation: 'Con "can" la pregunta se forma colocando "can" delante del sujeto: Can she swim? No necesitamos "does".' },
  ],
  vocabulary: [
    { word: 'swim', translation_es: 'nadar', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: 'I can swim.', exampleTranslation: 'Yo sé nadar.' },
    { word: 'drive', translation_es: 'conducir', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: 'She can drive.', exampleTranslation: 'Ella sabe conducir.' },
    { word: 'cook', translation_es: 'cocinar', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: 'Can you cook?', exampleTranslation: '¿Sabes cocinar?' },
    { word: 'speak', translation_es: 'hablar', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: "He can't speak Italian.", exampleTranslation: 'Él no sabe hablar italiano.' },
    { word: 'sing', translation_es: 'cantar', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: 'She can sing very well.', exampleTranslation: 'Ella sabe cantar muy bien.' },
    { word: 'dance', translation_es: 'bailar', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: 'They can dance.', exampleTranslation: 'Ellos saben bailar.' },
    { word: 'play', translation_es: 'jugar, tocar', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: 'He can play the guitar.', exampleTranslation: 'Él sabe tocar la guitarra.' },
    { word: 'run', translation_es: 'correr', level: 'A1', category: 'abilities', partOfSpeech: 'verb', example: 'I can run fast.', exampleTranslation: 'Puedo correr rápido.' },
  ],
  grammarPoints: [
    {
      id: 'gp-can-ability',
      level: 'A1',
      name: 'Can / can\'t — ability',
      explanation_es: '"Can" expresa habilidad (saber o poder hacer algo). Va seguido del verbo en infinitivo sin "to", es igual para todas las personas y su negativo es "can\'t".',
      formula: "subject + can/can't + verb | Can + subject + verb?",
      examples: ['I can swim.', 'She can drive.', "He can't speak Italian.", 'Can you cook?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m9-l1-ex1',
      type: 'fill_blank',
      concept: 'can - ability',
      difficulty: 1,
      prompt: 'Completa: "I ___ swim." (nadar)',
      promptTranslation: 'Yo sé nadar.',
      correctAnswer: 'can',
      acceptedAnswers: ['can', 'Can'],
      explanation: '"Yo sé nadar" = I can swim. "Can" va seguido del verbo sin "to".',
    },
    {
      id: 'a1-m9-l1-ex2',
      type: 'fill_blank',
      concept: 'can - 3rd person no -s',
      difficulty: 1,
      prompt: 'Completa: "She ___ drive."',
      promptTranslation: 'Ella sabe conducir.',
      correctAnswer: 'can',
      acceptedAnswers: ['can', 'Can'],
      explanation: 'Con "she" usamos "can" igual que con "I": no añade -s. → She can drive.',
    },
    {
      id: 'a1-m9-l1-ex3',
      type: 'fill_blank',
      concept: 'can\'t - negative',
      difficulty: 2,
      prompt: 'Completa: "He ___ speak Italian."',
      promptTranslation: 'Él no sabe hablar italiano.',
      correctAnswer: "can't",
      acceptedAnswers: ["can't", "Can't", 'cannot', 'Cannot'],
      explanation: 'La negativa de "can" es "can\'t" (cannot). → He can\'t speak Italian.',
    },
    {
      id: 'a1-m9-l1-ex4',
      type: 'multiple_choice',
      concept: 'can - question',
      difficulty: 1,
      prompt: 'Completa: "___ you cook?"',
      promptTranslation: '¿Sabes cocinar?',
      correctAnswer: 'Can',
      options: ['Can', 'Does', 'Is'],
      explanation: 'Para la pregunta colocamos "can" delante del sujeto: Can you cook?',
    },
    {
      id: 'a1-m9-l1-ex5',
      type: 'multiple_choice',
      concept: 'can - no -s and no to',
      difficulty: 2,
      prompt: 'Completa: "She ___ swim."',
      promptTranslation: 'Ella sabe nadar.',
      correctAnswer: 'can',
      options: ['can', 'cans', 'can to'],
      explanation: '"Can" no lleva -s con she y va seguido del verbo sin "to": She can swim.',
    },
    {
      id: 'a1-m9-l1-ex6',
      type: 'multiple_choice',
      concept: 'can - short answers',
      difficulty: 2,
      prompt: '¿Cómo respondes "sí" a la pregunta "Can you swim?"?',
      promptTranslation: 'How do you say "yes" to the question "Can you swim?"?',
      correctAnswer: 'Yes, I can.',
      options: ['Yes, I can.', 'Yes, I do.', 'Yes, I am.'],
      explanation: 'La respuesta corta con "can" es "Yes, I can." No usamos "do" ni "am".',
    },
    {
      id: 'a1-m9-l1-ex7',
      type: 'reorder',
      concept: 'can - question order',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / she / drive',
      promptTranslation: '¿Ella sabe conducir?',
      correctAnswer: 'Can she drive?',
      words: ['Can', 'she', 'drive'],
      explanation: 'La pregunta es Can + sujeto + verbo: Can she drive?',
    },
    {
      id: 'a1-m9-l1-ex8',
      type: 'translate',
      concept: 'can - translate affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Yo sé nadar."',
      correctAnswer: 'I can swim.',
      acceptedAnswers: ['I can swim', 'i can swim.', 'i can swim'],
      acceptApproximate: true,
      explanation: '"Yo sé (puedo) nadar" → I can swim. "can" + verbo sin "to".',
    },
    {
      id: 'a1-m9-l1-ex9',
      type: 'translate',
      concept: 'can\'t - translate negative',
      difficulty: 3,
      prompt: 'Traduce: "Él no sabe hablar italiano."',
      correctAnswer: "He can't speak Italian.",
      acceptedAnswers: ["He can't speak Italian", 'He cannot speak Italian.', "he can't speak Italian."],
      acceptApproximate: true,
      explanation: '"No sabe" → can\'t (cannot). → He can\'t speak Italian.',
    },
    {
      id: 'a1-m9-l1-ex10',
      type: 'error_correction',
      concept: 'can - no -s',
      difficulty: 3,
      prompt: 'Corrige el error: "She cans swim."',
      correctAnswer: 'She can swim.',
      acceptedAnswers: ['She can swim', 'she can swim.'],
      acceptApproximate: true,
      explanation: '"Can" nunca añade -s con she. → She can swim.',
    },
    {
      id: 'a1-m9-l1-ex11',
      type: 'error_correction',
      concept: 'can\'t - not don\'t can',
      difficulty: 4,
      prompt: "Corrige el error: \"He don't can swim.\"",
      correctAnswer: "He can't swim.",
      acceptedAnswers: ["He can't swim", 'He cannot swim.', "he can't swim."],
      acceptApproximate: true,
      explanation: 'La negativa de "can" es "can\'t", no "don\'t can". → He can\'t swim.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m9-l1-mt1',
      type: 'multiple_choice',
      concept: 'can - all persons',
      difficulty: 2,
      prompt: 'Completa: "We ___ speak English."',
      promptTranslation: 'Nosotros sabemos hablar inglés.',
      correctAnswer: 'can',
      options: ['can', 'cans', 'can to'],
      explanation: '"Can" es igual para todas las personas: We can speak English.',
    },
    {
      id: 'a1-m9-l1-mt2',
      type: 'fill_blank',
      concept: 'can - question',
      difficulty: 2,
      prompt: 'Completa: "___ you play the guitar?"',
      promptTranslation: '¿Sabes tocar la guitarra?',
      correctAnswer: 'Can',
      acceptedAnswers: ['Can', 'can'],
      explanation: 'Pregunta de habilidad: Can + sujeto + verbo. → Can you play the guitar?',
    },
    {
      id: 'a1-m9-l1-mt3',
      type: 'translate',
      concept: 'can - translate question',
      difficulty: 3,
      prompt: 'Traduce: "¿Ella sabe conducir?"',
      correctAnswer: 'Can she drive?',
      acceptedAnswers: ['Can she drive', 'can she drive?', 'can she drive'],
      acceptApproximate: true,
      explanation: 'La pregunta es Can + sujeto + verbo: Can she drive?',
    },
    {
      id: 'a1-m9-l1-mt4',
      type: 'error_correction',
      concept: 'can - no to',
      difficulty: 4,
      prompt: 'Corrige el error: "He can to cook."',
      correctAnswer: 'He can cook.',
      acceptedAnswers: ['He can cook', 'he can cook.'],
      acceptApproximate: true,
      explanation: 'Después de "can" usamos el verbo SIN "to": He can cook.',
    },
  ],
  reviewItems: ['a1-m8-l6'],
  prerequisites: ['a1-m8-l6'],
}
