import type { Lesson } from '../../types'

export const lesson12Greetings: Lesson = {
  id: 'a1-m1-l2',
  moduleId: 'm1-hello-greetings',
  order: 1,
  title: 'Saludos y despedidas',
  objective:
    'Aprender a saludar y despedirse en inglés según la hora del día y el contexto (formal o informal), presentarse y responder a "How are you?".',
  explanation_es: `En inglés existen saludos formales e informales, y algunos dependen de la hora del día.

**Saludos según la hora (formales):**
- "Good morning"  → Buenos días (se usa desde el amanecer hasta el mediodía).
- "Good afternoon" → Buenas tardes (se usa desde el mediodía hasta que anochece).
- "Good evening"   → Buenas noches (se usa al llegar, cuando ya ha anochecido). Es un SALUDO.
- "Good night"     → Buenas noches (se usa al DESPEDIRSE o al ir a dormir). NO es un saludo.

⚠️ ¡Atención! "Good night" NO es un saludo en inglés: es una despedida. Para saludar por la noche usamos "Good evening". En español "Buenas noches" sirve tanto para saludar como para despedirse, pero en inglés son dos frases distintas.

**Saludos generales:**
- "Hello" → Hola (vale para cualquier contexto, formal o informal).
- "Hi"    → Hola (más informal; se usa con amigos, familia y compañeros cercanos).

**Despedidas:**
- "Goodbye"        → Adiós (formal).
- "Bye"            → Adiós / Chao (informal).
- "See you"        → Hasta luego.
- "See you later"  → Hasta luego / Nos vemos.
- "See you tomorrow" → Hasta mañana.

**Presentaciones:**
- "Nice to meet you"      → Encantado/a de conocerte.
- "Nice to meet you too"  → Encantado/a yo también.

**Pregunta de cortesía:**
- "How are you?" → ¿Cómo estás? (A menudo funciona como un saludo, no como una pregunta médica real.)
  Respuestas típicas (cortas y positivas):
  - "I'm fine, thanks."
  - "I'm good, thanks."
  - "Very well, thank you."

Consejo pragmático para hispanohablantes: en inglés la respuesta a "How are you?" es breve. No se espera que cuentes cómo te sientes físicamente; basta con "I'm fine, thanks".`,
  examples: [
    {
      english: 'Hello, my name is John.',
      spanish: 'Hola, me llamo John.',
      note: 'Presentación informal.',
    },
    {
      english: 'Good morning, everyone!',
      spanish: '¡Buenos días a todos!',
      note: 'Saludando a una clase por la mañana.',
    },
    {
      english: 'Good night, see you tomorrow.',
      spanish: 'Buenas noches, hasta mañana.',
      note: 'Despedida nocturna — "Good night" es despedida, no saludo.',
    },
    {
      english: 'Nice to meet you too.',
      spanish: 'Encantado/a yo también.',
      note: 'Respuesta tras una presentación.',
    },
    {
      english: 'How are you? — I\'m fine, thanks.',
      spanish: '¿Cómo estás? — Estoy bien, gracias.',
      note: 'Ritual de saludo; respuesta corta.',
    },
    {
      english: 'Bye, see you later.',
      spanish: 'Chao, nos vemos luego.',
      note: 'Despedida informal.',
    },
    {
      english: 'See you tomorrow.',
      spanish: 'Hasta mañana.',
      note: 'Despedida con plan previo.',
    },
  ],
  rule: `Saludos formales según la hora:
- "Good morning"   (mañana, antes del mediodía)
- "Good afternoon" (tarde, hasta que anochece)
- "Good evening"   (noche, al llegar — SALUDO)

Saludos generales:
- "Hello" (cualquier contexto)
- "Hi" (informal — amigos, familia)

Despedidas:
- "Goodbye" (formal)
- "Bye" (informal)
- "See you / See you later / See you tomorrow"

⚠️ MUY IMPORTANTE: "Good night" es SOLO una despedida (leave-taking), usada al irse o al ir a dormir. NO es un saludo. Para saludar por la noche: "Good evening".`,
  commonMistakes: [
    {
      wrong: '❌ "Good night!" (como saludo por la noche)',
      correct: '✅ "Good evening!" (saludo) / "Good night" (despedida)',
      explanation:
        '"Good night" es una despedida, no un saludo. Para saludar por la noche se usa "Good evening".',
    },
    {
      wrong: '❌ "Good nights"',
      correct: '✅ "Good night"',
      explanation:
        'No se pluraliza. Es una despedida fija y siempre va en singular.',
    },
    {
      wrong: '❌ "Hello, I am called Maria"',
      correct: '✅ "Hello, my name is Maria." o "Hello, I\'m Maria."',
      explanation:
        'La traducción literal "I am called" suena antinatural. Es más común "my name is" o la contracción "I\'m".',
    },
    {
      wrong: '❌ "Thanks God"',
      correct: '✅ "Thank God" (agradeciendo) o "Thank goodness" (aliviado)',
      explanation:
        'Como verbo, "thank" no lleva "s". Si te diriges a Dios: "Thank you, God". Para alivio casual: "Thank goodness".',
    },
  ],
  vocabulary: [
    {
      word: 'hello',
      translation_es: 'hola',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'interjection',
      example: 'Hello, John!',
      exampleTranslation: '¡Hola, John!',
    },
    {
      word: 'hi',
      translation_es: 'hola (informal)',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'interjection',
      example: 'Hi, Maria!',
      exampleTranslation: '¡Hola, Maria!',
    },
    {
      word: 'goodbye',
      translation_es: 'adiós',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'interjection',
      example: 'Goodbye, see you tomorrow.',
      exampleTranslation: 'Adiós, hasta mañana.',
    },
    {
      word: 'bye',
      translation_es: 'adiós (informal)',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'interjection',
      example: 'Bye, take care.',
      exampleTranslation: 'Chao, cuídate.',
    },
    {
      word: 'morning',
      translation_es: 'mañana',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'noun',
      example: 'Good morning!',
      exampleTranslation: '¡Buenos días!',
    },
    {
      word: 'afternoon',
      translation_es: 'tarde',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'noun',
      example: 'Good afternoon, sir.',
      exampleTranslation: 'Buenas tardes, señor.',
    },
    {
      word: 'evening',
      translation_es: 'noche (al llegar)',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'noun',
      example: 'Good evening!',
      exampleTranslation: '¡Buenas noches! (saludo)',
    },
    {
      word: 'night',
      translation_es: 'noche (al despedirse)',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'noun',
      example: 'Good night, sleep well.',
      exampleTranslation: 'Buenas noches, duerme bien.',
    },
    {
      word: 'see you',
      translation_es: 'hasta luego',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'phrase',
      example: 'See you later!',
      exampleTranslation: '¡Hasta luego!',
    },
    {
      word: 'thanks',
      translation_es: 'gracias',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'interjection',
      example: 'Thanks for your help.',
      exampleTranslation: 'Gracias por tu ayuda.',
    },
    {
      word: 'nice to meet you',
      translation_es: 'encantado/a de conocerte',
      level: 'A1',
      category: 'greetings',
      partOfSpeech: 'phrase',
      example: 'Nice to meet you, Maria.',
      exampleTranslation: 'Encantado/a de conocerte, Maria.',
    },
  ],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m1-l2-ex1',
      type: 'multiple_choice',
      concept: 'greetings by time of day',
      difficulty: 1,
      prompt: 'Son las 9:00 de la mañana. ¿Cómo saludas?',
      promptTranslation: 'It is 9:00 a.m. How do you greet?',
      correctAnswer: 'Good morning',
      options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
      explanation:
        '"Good morning" se usa desde el amanecer hasta el mediodía. → Good morning = Buenos días.',
    },
    {
      id: 'a1-m1-l2-ex2',
      type: 'multiple_choice',
      concept: 'greetings by time of day',
      difficulty: 2,
      prompt: 'Son las 8:00 de la noche y llegas a una reunión. ¿Cómo saludas?',
      promptTranslation: 'It is 8:00 p.m. and you arrive at a meeting. How do you greet?',
      correctAnswer: 'Good evening',
      options: ['Good night', 'Good evening', 'Goodbye', 'Good afternoon'],
      explanation:
        'Al llegar por la noche se usa "Good evening" (saludo). "Good night" es una despedida, no un saludo.',
    },
    {
      id: 'a1-m1-l2-ex3',
      type: 'fill_blank',
      concept: 'greetings by time of day',
      difficulty: 1,
      prompt: 'Completa: "Good ___" (por la mañana, antes del mediodía).',
      promptTranslation: 'Complete: "Good ___" (in the morning, before noon).',
      correctAnswer: 'morning',
      acceptedAnswers: ['Morning'],
      explanation: '"Good morning" se usa por la mañana. → Good morning = Buenos días.',
    },
    {
      id: 'a1-m1-l2-ex4',
      type: 'true_false',
      concept: 'greeting vs leave-taking',
      difficulty: 2,
      prompt: '"Good night" se usa para saludar a alguien al llegar.',
      promptTranslation: '"Good night" is used to greet someone when arriving.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'F'],
      explanation:
        'Falso. "Good night" es una DESPEDIDA (leave-taking), usada al irse o al ir a dormir. Para saludar por la noche: "Good evening".',
    },
    {
      id: 'a1-m1-l2-ex5',
      type: 'match',
      concept: 'greetings by time of day and function',
      difficulty: 2,
      prompt: 'Une cada frase con su función o momento del día.',
      promptTranslation: 'Match each phrase with its function or time of day.',
      correctAnswer: '',
      pairs: [
        { left: 'Good morning', right: 'mañana (saludo)' },
        { left: 'Good evening', right: 'noche al llegar (saludo)' },
        { left: 'Good night', right: 'despedida / ir a dormir' },
        { left: 'Good afternoon', right: 'tarde (saludo)' },
      ],
      explanation:
        '"morning/afternoon/evening" son saludos. "Good night" es la única que es despedida.',
    },
    {
      id: 'a1-m1-l2-ex6',
      type: 'translate',
      concept: 'greetings — informal',
      difficulty: 2,
      prompt: 'Traduce: "Hola, me llamo María." (informal)',
      correctAnswer: 'Hi, my name is Maria.',
      acceptedAnswers: [
        'Hi, my name is Maria',
        "Hi, I'm Maria.",
        "Hi, I'm Maria",
        'Hi, my name is María.',
        'Hi, my name is María',
        "Hi, I'm María.",
        "Hi, I'm María",
        'Hello, my name is Maria.',
        'Hello, my name is Maria',
        "Hello, I'm Maria.",
      ],
      acceptApproximate: true,
      explanation:
        'En informal usamos "Hi". "Hola, me llamo María" → "Hi, my name is Maria." (o "Hi, I\'m Maria.")',
    },
    {
      id: 'a1-m1-l2-ex7',
      type: 'error_correction',
      concept: 'greeting vs leave-taking misuse',
      difficulty: 3,
      prompt: 'Corrige el error: "It is 8 p.m. — Good night, nice to see you!" (llegando)',
      promptTranslation: 'Fix the mistake: arriving at 8 p.m. you say "Good night".',
      correctAnswer: 'Good evening, nice to see you!',
      acceptedAnswers: [
        'Good evening',
        'Good evening, nice to see you',
        'Good evening!',
        'Good evening, nice to see you!',
      ],
      acceptApproximate: true,
      explanation:
        'Al llegar se saluda con "Good evening". "Good night" es despedida. → Good evening, nice to see you!',
    },
    {
      id: 'a1-m1-l2-ex8',
      type: 'select_correct',
      concept: 'greetings — complete sentence',
      difficulty: 2,
      prompt: 'Elige la oración correcta para despedirte informalmente.',
      promptTranslation: 'Choose the correct sentence for an informal leave-taking.',
      correctAnswer: 'Bye, see you later.',
      options: [
        'Good night, I arrive now.',
        'Bye, see you later.',
        'Good morning, goodbye.',
        'See you yesterday.',
      ],
      explanation:
        '"Bye, see you later." es una despedida informal correcta. Las demás son incorrectas o antinaturales.',
    },
    {
      id: 'a1-m1-l2-ex9',
      type: 'reorder',
      concept: 'greetings — sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras: "Good / morning / everyone / !"',
      promptTranslation: 'Reorder: "Good / morning / everyone / !"',
      correctAnswer: 'Good morning, everyone!',
      words: ['Good', 'morning', 'everyone', '!'],
      explanation:
        'El saludo formal va primero, seguido del destinatario. → Good morning, everyone!',
    },
    {
      id: 'a1-m1-l2-ex10',
      type: 'multiple_choice',
      concept: 'how are you — response',
      difficulty: 2,
      prompt: 'Alguien te dice "How are you?" ¿Qué respondes?',
      promptTranslation: 'Someone says "How are you?" What do you answer?',
      correctAnswer: "I'm fine, thanks.",
      options: [
        "I'm fine, thanks.",
        'I am sick a lot and tired today.',
        'Good night.',
        'See you tomorrow.',
      ],
      explanation:
        'La respuesta corta y educada es "I\'m fine, thanks." (o "I\'m good, thanks."). No se espera una explicación larga.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m1-l2-mt1',
      type: 'multiple_choice',
      concept: 'greetings by time of day',
      difficulty: 2,
      prompt: 'Son las 3:00 de la tarde. ¿Cómo saludas formalmente?',
      promptTranslation: 'It is 3:00 p.m. How do you greet formally?',
      correctAnswer: 'Good afternoon',
      options: ['Good evening', 'Good afternoon', 'Good night', 'Goodbye'],
      explanation: '"Good afternoon" se usa desde el mediodía hasta que anochece.',
    },
    {
      id: 'a1-m1-l2-mt2',
      type: 'true_false',
      concept: 'greeting vs leave-taking',
      difficulty: 2,
      prompt: '"Good evening" se usa para despedirse.',
      promptTranslation: '"Good evening" is used to say goodbye.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'F'],
      explanation:
        'Falso. "Good evening" es un SALUDO. La despedida equivalente por la noche es "Good night".',
    },
    {
      id: 'a1-m1-l2-mt3',
      type: 'translate',
      concept: 'leave-takings',
      difficulty: 2,
      prompt: 'Traduce: "Hasta mañana."',
      promptTranslation: 'Translate: "See you tomorrow."',
      correctAnswer: 'See you tomorrow.',
      acceptedAnswers: ['See you tomorrow', 'See you tomorrow!'],
      acceptApproximate: true,
      explanation: '"Hasta mañana" → "See you tomorrow." (despedida con plan previo).',
    },
    {
      id: 'a1-m1-l2-mt4',
      type: 'error_correction',
      concept: 'greeting misuse',
      difficulty: 3,
      prompt: 'Corrige: "Good nights, sleep well."',
      promptTranslation: 'Correct: "Good nights, sleep well."',
      correctAnswer: 'Good night, sleep well.',
      acceptedAnswers: ['Good night', 'Good night, sleep well'],
      acceptApproximate: true,
      explanation: '"Good night" no se pluraliza. → Good night, sleep well.',
    },
    {
      id: 'a1-m1-l2-mt5',
      type: 'match',
      concept: 'greetings — formal vs informal',
      difficulty: 3,
      prompt: 'Une cada saludo con su nivel de formalidad.',
      promptTranslation: 'Match each greeting with its formality level.',
      correctAnswer: '',
      pairs: [
        { left: 'Hello', right: 'formal o informal' },
        { left: 'Hi', right: 'informal' },
        { left: 'Goodbye', right: 'formal (despedida)' },
        { left: 'Bye', right: 'informal (despedida)' },
      ],
      explanation:
        '"Hello" vale para cualquier contexto; "Hi" es informal. "Goodbye" es formal y "Bye" informal.',
    },
  ],
  reviewItems: ['a1-m1-l1'],
  prerequisites: ['a1-m1-l1'],
}