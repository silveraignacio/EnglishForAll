import type { Lesson } from '../../types'

export const lesson15ToBeNegQuestions: Lesson = {
  id: 'a1-m1-l5',
  moduleId: 'm1-hello-greetings',
  order: 4,
  title: 'El verbo "to be" (negativo, preguntas y WH-questions)',
  objective:
    'Aprender a hacer frases negativas y preguntas con el verbo "to be", y a usar preguntas con palabras interrogativas (WH-questions).',
  explanation_es: `1. Negativo: Para formar una frase negativa con "to be", pon "not" DESPUÉS del verbo:

- I am not → I'm not ("I amn't" is NOT correct English — "am" no se contrae con "not"; la única contracción es "I'm not")
- You are not → You aren't
- He is not → He isn't
- She is not → She isn't
- It is not → It isn't
- We are not → We aren't
- They are not → They aren't

IMPORTANTE: "I am not" → "I'm not". NO decimos "I amn't". La única forma de contraer "I + am + not" es "I'm not" (con el 'm' unido a I).

2. Preguntas (sí/no): Invertimos el orden — verbo "to be" + sujeto:

- Am I? (¿Soy yo? / ¿Estoy yo?)
- Are you?
- Is he / she / it?
- Are we?
- Are they?

Respuestas cortas:
- "Yes, I am." / "No, I am not." (o "No, I'm not.")
- "Yes, he is." / "No, he isn't."
- "Yes, they are." / "No, they aren't."

3. Preguntas WH (palabras interrogativas):

En inglés usamos palabras especiales para preguntar información. Las más comunes en A1:

- What = qué
- Where = dónde
- How = cómo
- Who = quién
- When = cuándo
- Why = por qué
- How old = qué edad (para preguntar edad)
- How much = cuánto (cuánto cuesta, cuánto hay)

Estructura: WH-word + to be + sujeto?

- What is your name? = ¿Cuál es tu nombre?
- Where are you from? = ¿De dónde eres?
- How are you? = ¿Cómo estás?
- Who is that? = ¿Quién es ese/esa?
- How old are you? = ¿Cuántos años tienes? (en inglés usamos "How old", no "How many years")
- What is this? = ¿Qué es esto?`,
  examples: [
    { english: 'I am not from London.', spanish: 'No soy de Londres.', note: 'O: I\'m not from London.' },
    { english: 'She isn\'t my sister.', spanish: 'Ella no es mi hermana.', note: 'O: She is not my sister.' },
    { english: 'They aren\'t friends.', spanish: 'Ellos no son amigos.', note: 'O: They are not friends.' },
    { english: 'It isn\'t cold today.', spanish: 'Hoy no hace frío.', note: 'O: It is not cold today.' },
    { english: 'Are you María?', spanish: '¿Eres María?' },
    { english: 'Is he from Spain?', spanish: '¿Es él de España?' },
    { english: 'Are they your parents?', spanish: '¿Son ellos tus padres?' },
    { english: 'Yes, I am.', spanish: 'Sí, lo soy.', note: 'Respuesta corta afirmativa.' },
    { english: 'No, she isn\'t.', spanish: 'No, no lo es.', note: 'Respuesta corta negativa.' },
    { english: 'What is your name?', spanish: '¿Cómo te llamas? / ¿Cuál es tu nombre?' },
    { english: 'Where are you from?', spanish: '¿De dónde eres?' },
    { english: 'How are you?', spanish: '¿Cómo estás?' },
    { english: 'Who is he?', spanish: '¿Quién es él?' },
    { english: 'How old are you?', spanish: '¿Cuántos años tienes?' },
  ],
  rule: `Reglas generales:

- Negativo: Sujeto + to be + not + ... → I am not, You aren't, He isn't, etc.
- Pregunta Sí/No: To be + sujeto + ...? → Are you?, Is he?, etc.
- Pregunta WH: WH-word + to be + sujeto + ...? → What is your name?, Where are you from?`,
  formation: {
    title: 'Cómo se forma el verbo "to be" — Negativo y preguntas',
    intro: 'Para negar con "to be" ponemos "not" después del verbo. Para preguntar, invertimos el orden: verbo + sujeto.',
    patterns: [
      {
        name: 'Negativo',
        formula: 'Sujeto + am/is/are + not + complemento',
        examples: [
          { english: 'I am not from London.', spanish: 'No soy de Londres.' },
          { english: 'She isn\'t my sister.', spanish: 'Ella no es mi hermana.' },
          { english: 'They aren\'t friends.', spanish: 'Ellos no son amigos.' },
          { english: 'It isn\'t cold today.', spanish: 'Hoy no hace frío.' },
        ],
        note: 'Contracciones: is + not = isn\'t · are + not = aren\'t. "Am" no se contrae con "not": solo "I\'m not" (nunca "I amn\'t").',
      },
      {
        name: 'Pregunta sí/no',
        formula: 'Am / Is / Are + sujeto + ...?',
        examples: [
          { english: 'Are you María?', spanish: '¿Eres María?' },
          { english: 'Is he from Spain?', spanish: '¿Es él de España?' },
          { english: 'Are they your parents?', spanish: '¿Son ellos tus padres?' },
        ],
        note: 'En la pregunta el verbo va antes del sujeto: Are you...? / Is he...?',
      },
      {
        name: 'Respuesta corta',
        formula: 'Yes, + sujeto + am/is/are. / No, + sujeto + \'m not / isn\'t / aren\'t.',
        examples: [
          { english: 'Yes, I am.', spanish: 'Sí, lo soy.' },
          { english: 'No, she isn\'t.', spanish: 'No, no lo es.' },
        ],
        note: 'No repetimos toda la frase, solo el verbo "to be".',
      },
      {
        name: 'Pregunta WH- (información)',
        formula: 'Palabra interrogativa (What/Where/How/Who...) + am/is/are + sujeto + ...?',
        examples: [
          { english: 'What is your name?', spanish: '¿Cuál es tu nombre?' },
          { english: 'Where are you from?', spanish: '¿De dónde eres?' },
          { english: 'How are you?', spanish: '¿Cómo estás?' },
          { english: 'How old are you?', spanish: '¿Cuántos años tienes?' },
        ],
        note: 'Para preguntar la edad usamos "How old", no "How many years".',
      },
    ],
    notes: [
      'La negativa se forma con "not" después del verbo, nunca con "no" antes: I am not (no "I no am").',
      'En las WH-questions el verbo "to be" va antes del sujeto: Where are you from? (no "Where you are from?").',
    ],
  },
  commonMistakes: [
    {
      wrong: '❌ I no am from Spain.',
      correct: '✅ I am not from Spain.',
      explanation: 'No usamos "no" antes del verbo. Usamos "not" después del verbo "to be".',
    },
    {
      wrong: '❌ She no is happy.',
      correct: '✅ She is not happy.',
      explanation: 'Para negar, ponemos "not" después del verbo: "She is not happy" (o "She isn\'t happy").',
    },
    {
      wrong: '❌ Are you from Spain? — Yes, I from Spain.',
      correct: '✅ Yes, I am.',
      explanation: 'La respuesta corta correcta usa solo el verbo "to be": "Yes, I am." (no repetimos toda la frase).',
    },
    {
      wrong: '❌ Are you from Spain? — No, I no am.',
      correct: "✅ No, I'm not.",
      explanation: 'La respuesta corta negativa contraída es "No, I\'m not." (no "I no am").',
    },
    {
      wrong: '❌ What your name?',
      correct: '✅ What is your name?',
      explanation: 'En inglés necesitamos el verbo "to be" en las preguntas: "What is your name?".',
    },
    {
      wrong: '❌ Where you from?',
      correct: '✅ Where are you from?',
      explanation: 'En la pregunta, el verbo "to be" va antes del sujeto: "Where are you from?".',
    },
    {
      wrong: '❌ How old you are?',
      correct: '✅ How old are you?',
      explanation: 'En preguntas con "to be", el verbo va antes del sujeto: "How old are you?" (no "you are").',
    },
  ],
  vocabulary: [
    { word: 'what', translation_es: 'qué', level: 'A1', category: 'questions', partOfSpeech: 'pronoun', example: 'What is your name?', exampleTranslation: '¿Cuál es tu nombre?' },
    { word: 'where', translation_es: 'dónde', level: 'A1', category: 'questions', partOfSpeech: 'adverb', example: 'Where are you from?', exampleTranslation: '¿De dónde eres?' },
    { word: 'how', translation_es: 'cómo', level: 'A1', category: 'questions', partOfSpeech: 'adverb', example: 'How are you?', exampleTranslation: '¿Cómo estás?' },
    { word: 'who', translation_es: 'quién', level: 'A1', category: 'questions', partOfSpeech: 'pronoun', example: 'Who is that man?', exampleTranslation: '¿Quién es ese hombre?' },
    { word: 'when', translation_es: 'cuándo', level: 'A1', category: 'questions', partOfSpeech: 'adverb', example: 'When is the party?', exampleTranslation: '¿Cuándo es la fiesta?' },
    { word: 'why', translation_es: 'por qué', level: 'A1', category: 'questions', partOfSpeech: 'adverb', example: 'Why are you sad?', exampleTranslation: '¿Por qué estás triste?' },
    { word: 'not', translation_es: 'no (negación)', level: 'A1', category: 'questions', partOfSpeech: 'adverb', example: 'I am not tired.', exampleTranslation: 'No estoy cansado.' },
  ],
  grammarPoints: [
    {
      id: 'gp-to-be-negative',
      level: 'A1',
      name: 'Verb to be — negative',
      explanation_es: 'Para negar con "to be", pon "not" después del verbo.',
      formula: 'Subject + to be + not + ...',
      examples: ['I am not tired.', "She isn't my sister.", "We aren't friends."],
    },
    {
      id: 'gp-to-be-questions',
      level: 'A1',
      name: 'Verb to be — questions',
      explanation_es: 'Para preguntar, pon "to be" antes del sujeto. En preguntas WH, la palabra interrogativa va al principio.',
      formula: 'To be + subject + ...? / WH-word + To be + subject + ...?',
      examples: ['Are you happy?', 'Is he from Spain?', 'What is your name?', 'Where are you from?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m1-l5-ex1',
      type: 'multiple_choice',
      concept: 'verb to be negative',
      difficulty: 1,
      prompt: 'Completa: "I ___ not from London."',
      promptTranslation: 'Yo no soy de Londres.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am": I am not from London. = No soy de Londres.',
    },
    {
      id: 'a1-m1-l5-ex2',
      type: 'multiple_choice',
      concept: 'verb to be negative',
      difficulty: 2,
      prompt: 'Selecciona la negativa correcta: "She ___ my sister."',
      promptTranslation: 'Ella no es mi hermana.',
      correctAnswer: "isn't",
      options: ['no is', "isn't", "aren't"],
      explanation: 'Para negar con "she", usamos "isn\'t" (is + not): She isn\'t my sister. No decimos "no is".',
    },
    {
      id: 'a1-m1-l5-ex3',
      type: 'multiple_choice',
      concept: 'verb to be questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you happy?"',
      promptTranslation: '¿Estás feliz?',
      correctAnswer: 'Are',
      options: ['Is', 'Are', 'Am'],
      explanation: 'Con "you" usamos "are". En preguntas, el verbo va primero: Are you happy? = ¿Estás feliz?',
    },
    {
      id: 'a1-m1-l5-ex4',
      type: 'multiple_choice',
      concept: 'verb to be questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ she from Spain?"',
      promptTranslation: '¿Es ella de España?',
      correctAnswer: 'Is',
      options: ['Is', 'Are', 'Am'],
      explanation: 'Con "she" usamos "is". En preguntas: Is she from Spain? = ¿Es ella de España?',
    },
    {
      id: 'a1-m1-l5-ex5',
      type: 'fill_blank',
      concept: 'WH-questions',
      difficulty: 2,
      prompt: 'Completa: "What ___ your name?"',
      promptTranslation: '¿Cuál es tu nombre?',
      correctAnswer: 'is',
      explanation: 'En "What is your name?", usamos "is" porque el sujeto es "your name" (singular). Estructura WH: WH-word + to be + sujeto.',
    },
    {
      id: 'a1-m1-l5-ex6',
      type: 'fill_blank',
      concept: 'WH-questions',
      difficulty: 2,
      prompt: 'Completa: "Where ___ you from?"',
      promptTranslation: '¿De dónde eres?',
      correctAnswer: 'are',
      explanation: 'Con "you" usamos "are": Where are you from? = ¿De dónde eres?',
    },
    {
      id: 'a1-m1-l5-ex7',
      type: 'translate',
      concept: 'verb to be negative',
      difficulty: 3,
      prompt: 'Traduce: "Ella no es mi hermana."',
      correctAnswer: 'She is not my sister.',
      acceptedAnswers: ["She isn't my sister", 'She is not my sister', "She isn't my sister."],
      acceptApproximate: true,
      explanation: 'Negativo de "to be": sujeto + to be + not. → She is not my sister. (o: She isn\'t my sister.)',
    },
    {
      id: 'a1-m1-l5-ex8',
      type: 'translate',
      concept: 'WH-questions',
      difficulty: 3,
      prompt: 'Traduce: "¿Cómo estás?"',
      correctAnswer: 'How are you?',
      acceptedAnswers: ['How are you', 'How are you?'],
      acceptApproximate: true,
      explanation: 'WH-question con "how": How + are + you? = ¿Cómo estás?',
    },
    {
      id: 'a1-m1-l5-ex9',
      type: 'error_correction',
      concept: 'WH-questions',
      difficulty: 3,
      prompt: 'Corrige el error: "What your name?"',
      correctAnswer: 'What is your name?',
      acceptedAnswers: ['What is your name', 'What is your name?'],
      acceptApproximate: true,
      explanation: 'En inglés necesitamos el verbo "to be" en las preguntas: What is your name? (falta "is").',
    },
    {
      id: 'a1-m1-l5-ex10',
      type: 'error_correction',
      concept: 'verb to be negative',
      difficulty: 3,
      prompt: 'Corrige el error: "No I am from Spain."',
      correctAnswer: 'I am not from Spain.',
      acceptedAnswers: ["I'm not from Spain", 'I am not from Spain', "I'm not from Spain."],
      acceptApproximate: true,
      explanation: 'El negativo de "to be" se forma con "not" después del verbo, no con "no" al inicio: I am not from Spain.',
    },
    {
      id: 'a1-m1-l5-ex11',
      type: 'true_false',
      concept: 'verb to be questions',
      difficulty: 3,
      prompt: '¿Es correcta esta respuesta? "Are they your friends? — Yes, they is."',
      promptTranslation: '¿Son ellos tus amigos? — Sí, lo son.',
      correctAnswer: 'false',
      explanation: 'Es falsa. La respuesta corta correcta es "Yes, they are." (con "they" usamos "are", no "is").',
    },
    {
      id: 'a1-m1-l5-ex12',
      type: 'match',
      concept: 'WH-questions',
      difficulty: 3,
      prompt: 'Empareja cada pregunta con su respuesta:',
      correctAnswer: 'all-pairs-matched',
      pairs: [
        { left: 'What is your name?', right: "I'm María" },
        { left: 'Where are you from?', right: "I'm from Spain" },
        { left: 'How are you?', right: "I'm fine, thanks" },
        { left: 'Who is that?', right: "He's my brother" },
        { left: 'How old are you?', right: "I'm 30 years old" },
      ],
      explanation: 'Cada WH-question tiene una respuesta natural: What → nombre, Where → lugar, How → estado, Who → persona, How old → edad.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m1-l5-mt1',
      type: 'multiple_choice',
      concept: 'verb to be negative',
      difficulty: 2,
      prompt: 'Completa (negativa): "They ___ friends."',
      promptTranslation: 'Ellos no son amigos.',
      correctAnswer: "aren't",
      options: ["isn't", "aren't", 'no are'],
      explanation: 'Con "they" (plural) usamos "aren\'t": They aren\'t friends. = Ellos no son amigos.',
    },
    {
      id: 'a1-m1-l5-mt2',
      type: 'fill_blank',
      concept: 'verb to be questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you from Spain?"',
      promptTranslation: '¿Eres de España?',
      correctAnswer: 'Are',
      explanation: 'En preguntas con "you", el verbo "are" va primero: Are you from Spain? = ¿Eres de España?',
    },
    {
      id: 'a1-m1-l5-mt3',
      type: 'translate',
      concept: 'verb to be negative',
      difficulty: 3,
      prompt: 'Traduce: "Él no es médico."',
      correctAnswer: 'He is not a doctor.',
      acceptedAnswers: ["He isn't a doctor", 'He is not a doctor', "He isn't a doctor."],
      acceptApproximate: true,
      explanation: 'Negativo: He is not a doctor. (o: He isn\'t a doctor.)',
    },
    {
      id: 'a1-m1-l5-mt4',
      type: 'multiple_choice',
      concept: 'WH-questions',
      difficulty: 2,
      prompt: 'Completa: "What ___ your name?"',
      promptTranslation: '¿Cuál es tu nombre?',
      correctAnswer: 'is',
      options: ['is', 'are', 'am'],
      explanation: 'Con "your name" (singular) usamos "is": What is your name? = ¿Cuál es tu nombre?',
    },
    {
      id: 'a1-m1-l5-mt5',
      type: 'error_correction',
      concept: 'WH-questions',
      difficulty: 3,
      prompt: 'Corrige el error: "Where you from?"',
      correctAnswer: 'Where are you from?',
      acceptedAnswers: ['Where are you from', 'Where are you from?'],
      acceptApproximate: true,
      explanation: 'Falta el verbo "to be". En preguntas WH, la estructura es: WH-word + to be + sujeto. → Where are you from?',
    },
  ],
  reviewItems: [],
  prerequisites: ['a1-m1-l4'],
}