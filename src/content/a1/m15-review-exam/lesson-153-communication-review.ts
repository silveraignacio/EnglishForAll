import type { Lesson } from '../../types'

export const lesson153CommunicationReview: Lesson = {
  id: 'a1-m15-l3',
  moduleId: 'm15-review-exam',
  order: 2,
  title: 'Repaso de comunicación práctica',
  objective: 'Repasar las funciones comunicativas del curso: saludar, dar información personal, hablar de la familia, rutinas, casa, comida, habilidad, direcciones, pasado, futuro, compras y restaurante.',
  explanation_es: `El inglés no es solo gramática y vocabulario: también es saber qué decir en cada situación. En esta lección repasamos las FRASES PRÁCTICAS que usarás en la vida real.

Situaciones y frases clave:

1. SALUDOS: "How are you?" → "I'm fine, thanks."
2. INFORMACIÓN PERSONAL: "What's your name?" → "My name is Ana." / "Where are you from?" → "I'm from Spain."
3. FAMILIA: "How many brothers do you have?" → "I have one brother."
4. RUTINAS: "What time do you get up?" → "I get up at seven."
5. CASA: "Where is the kitchen?" → "It's on the left."
6. COMIDA: "Can I have a coffee, please?" → "Here you are."
7. HABILIDAD: "Can you swim?" → "Yes, I can."
8. LUGARES Y DIRECCIONES: "Excuse me, where is the station?" → "Turn left and go straight."
9. PASADO: "Where were you yesterday?" → "I was at home."
10. FUTURO: "What are you going to do tomorrow?" → "I'm going to visit my family."
11. COMPRAS: "How much is this?" → "It's ten euros."
12. RESTAURANTE: "Can I have a coffee, please?" / "The bill, please."

En los ejercicios vas a completar diálogos y elegir la respuesta adecuada en cada situación. Piensa: ¿qué diría una persona real en esta situación?`,
  examples: [
    { english: '"How are you?" → "I\'m fine, thanks."', spanish: '"¿Cómo estás?" → "Estoy bien, gracias."', note: 'Respuesta típica a un saludo.' },
    { english: '"Can I have a coffee, please?"', spanish: '"¿Puedo tomar un café, por favor?"', note: 'Pedir algo con cortesía en un café o restaurante.' },
    { english: '"How much is this?" → "It\'s ten euros."', spanish: '"¿Cuánto cuesta esto?" → "Son diez euros."', note: 'Preguntar y decir el precio.' },
    { english: '"Excuse me, where is the station?" → "Turn left and go straight."', spanish: '"Disculpe, ¿dónde está la estación?" → "Gire a la izquierda y siga recto."', note: 'Pedir y dar direcciones.' },
    { english: '"Can you swim?" → "Yes, I can."', spanish: '"¿Sabes nadar?" → "Sí, sé."', note: 'Habilidad con can.' },
    { english: '"The bill, please."', spanish: '"La cuenta, por favor."', note: 'Pedir la cuenta en un restaurante.' },
  ],
  rule: `Frases útiles por situación:

- Saludo: How are you? → I'm fine, thanks. / Nice to meet you.
- Información personal: What's your name? / Where are you from? / How old are you?
- Rutinas: What time do you get up? / I get up at seven.
- Comida (restaurante): Can I have...? / I'd like... / The bill, please.
- Habilidad: Can you...? → Yes, I can. / No, I can't.
- Direcciones: Where is...? / Turn left/right. / Go straight.
- Pasado: Where were you yesterday? / I was at home.
- Futuro: What are you going to do? / I'm going to...
- Compras: How much is this? / It's ten euros. / Can I try it on?

Recuerda: "Can I have...?" es una forma educada de pedir algo. "How much is this?" pregunta el precio de una sola cosa.`,
  commonMistakes: [
    { wrong: '❌ How are you? → Yes, I am.', correct: '✅ How are you? → I\'m fine, thanks.', explanation: '"How are you?" no es una pregunta de sí/no: se responde cómo estás (I\'m fine, thanks).' },
    { wrong: '❌ How much is this? → I like it.', correct: '✅ How much is this? → It\'s ten euros.', explanation: '"How much is this?" pregunta el precio: se responde el coste (It\'s ten euros).' },
    { wrong: '❌ I want a coffee, please. (al pedir)', correct: '✅ Can I have a coffee, please?', explanation: '"Can I have...?" es más educado y natural para pedir en un café o restaurante.' },
    { wrong: '❌ Where is you?', correct: '✅ Where are you?', explanation: 'Con "you" usamos "are", no "is". → Where are you?' },
    { wrong: '❌ Can I try it? (para probar ropa)', correct: '✅ Can I try it on?', explanation: 'Con ropa usamos "try on" (probarse). → Can I try it on?' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-m15-comm-review-phrases',
      level: 'A1',
      name: 'Functional phrases',
      explanation_es: 'Frases fijas muy usadas en situaciones cotidianas para comunicarse con éxito.',
      formula: 'Can I have...? / How much is this? / Where is...? / I\'m going to...',
      examples: ['Can I have a coffee, please?', 'How much is this?', 'Excuse me, where is the station?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m15-l3-ex1',
      type: 'select_correct',
      concept: 'greetings',
      difficulty: 1,
      prompt: 'Elige la mejor respuesta: "Hello! How are you?"',
      promptTranslation: '¡Hola! ¿Cómo estás?',
      correctAnswer: "I'm fine, thanks. And you?",
      options: ["I'm fine, thanks. And you?", 'I am 30 years old.', 'I am from Spain.'],
      explanation: '"How are you?" es un saludo: la respuesta natural es "I\'m fine, thanks. And you?" (Estoy bien, gracias. ¿Y tú?).',
    },
    {
      id: 'a1-m15-l3-ex2',
      type: 'select_correct',
      concept: 'personal information',
      difficulty: 2,
      prompt: 'Elige la mejor respuesta: "Where are you from?"',
      promptTranslation: '¿De dónde eres?',
      correctAnswer: "I'm from Mexico.",
      options: ["I'm from Mexico.", 'I am 25 years old.', 'My name is Luis.'],
      explanation: '"Where are you from?" pregunta el origen: se responde "I\'m from Mexico." = Soy de México.',
    },
    {
      id: 'a1-m15-l3-ex3',
      type: 'select_correct',
      concept: 'restaurant',
      difficulty: 2,
      prompt: 'Elige la frase correcta para pedir en un café:',
      promptTranslation: '¿Puedo tomar un café, por favor?',
      correctAnswer: 'Can I have a coffee, please?',
      options: ['Can I have a coffee, please?', 'I am a coffee, please.', 'Where is a coffee, please?'],
      explanation: 'Para pedir educadamente usamos "Can I have...?" → Can I have a coffee, please? = ¿Puedo tomar un café, por favor?',
    },
    {
      id: 'a1-m15-l3-ex4',
      type: 'select_correct',
      concept: 'ability',
      difficulty: 2,
      prompt: 'Elige la mejor respuesta: "Can you swim?"',
      promptTranslation: '¿Sabes nadar?',
      correctAnswer: 'Yes, I can.',
      options: ['Yes, I can.', 'Yes, I swim yesterday.', 'Yes, I can swimming.'],
      explanation: 'Las respuestas cortas con "can" son: Yes, I can. / No, I can\'t. → Yes, I can.',
    },
    {
      id: 'a1-m15-l3-ex5',
      type: 'select_correct',
      concept: 'shopping',
      difficulty: 3,
      prompt: 'Elige la mejor respuesta: "How much is this?"',
      promptTranslation: '¿Cuánto cuesta esto?',
      correctAnswer: "It's ten euros.",
      options: ["It's ten euros.", 'It is on the left.', 'I am going to buy it.'],
      explanation: '"How much is this?" pregunta el precio: se responde el coste. → It\'s ten euros.',
    },
    {
      id: 'a1-m15-l3-ex6',
      type: 'reorder',
      concept: 'directions',
      difficulty: 3,
      prompt: 'Ordena la frase para dar direcciones:',
      promptTranslation: 'Gire a la izquierda y siga recto.',
      words: ['Turn', 'left', 'and', 'go', 'straight.'],
      correctAnswer: 'Turn left and go straight.',
      explanation: 'Para dar direcciones: Turn left (gire a la izquierda) + and go straight (y siga recto).',
    },
    {
      id: 'a1-m15-l3-ex7',
      type: 'translate',
      concept: 'past simple',
      difficulty: 3,
      prompt: 'Traduce: "Estuve en casa ayer."',
      correctAnswer: 'I was at home yesterday.',
      acceptedAnswers: ['I was at home yesterday', 'I was at home yesterday.', "I was at home yesterday", 'I was home yesterday'],
      acceptApproximate: true,
      explanation: 'Pasado de "to be" con "I" = was. → I was at home yesterday. = Estuve en casa ayer.',
    },
    {
      id: 'a1-m15-l3-ex8',
      type: 'translate',
      concept: 'future with going to',
      difficulty: 3,
      prompt: 'Traduce: "Voy a visitar a mi familia."',
      correctAnswer: "I'm going to visit my family.",
      acceptedAnswers: ["I'm going to visit my family", 'I am going to visit my family', "I'm going to visit my family.", 'I am going to visit my family.'],
      acceptApproximate: true,
      explanation: 'Plan futuro: going to + verbo. → I\'m going to visit my family. = Voy a visitar a mi familia.',
    },
    {
      id: 'a1-m15-l3-ex9',
      type: 'reorder',
      concept: 'restaurant bill',
      difficulty: 4,
      prompt: 'Ordena la frase para pedir la cuenta en un restaurante:',
      promptTranslation: 'La cuenta, por favor.',
      words: ['The', 'bill,', 'please.'],
      correctAnswer: 'The bill, please.',
      explanation: 'Para pedir la cuenta: "The bill, please." = La cuenta, por favor.',
    },
    {
      id: 'a1-m15-l3-ex10',
      type: 'select_correct',
      concept: 'directions',
      difficulty: 4,
      prompt: 'Elige la mejor respuesta: "Excuse me, where is the bank?"',
      promptTranslation: 'Disculpe, ¿dónde está el banco?',
      correctAnswer: "Turn right. It's next to the park.",
      options: ["Turn right. It's next to the park.", "I'm going to the bank.", 'It is ten euros.'],
      explanation: 'Al preguntar por un lugar ("Where is the bank?") damos una dirección: Turn right. It\'s next to the park. = Gire a la derecha. Está al lado del parque.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m15-l3-mt1',
      type: 'select_correct',
      concept: 'greetings',
      difficulty: 1,
      prompt: 'Elige la mejor respuesta: "Nice to meet you."',
      promptTranslation: 'Encantado de conocerte.',
      correctAnswer: 'Nice to meet you too.',
      options: ['Nice to meet you too.', 'I am fine.', 'I am 30 years old.'],
      explanation: '"Nice to meet you" se responde con "Nice to meet you too" (Encantado de conocerte también).',
    },
    {
      id: 'a1-m15-l3-mt2',
      type: 'select_correct',
      concept: 'shopping',
      difficulty: 2,
      prompt: 'Elige la frase correcta para preguntar el precio de una camisa:',
      promptTranslation: '¿Cuánto cuesta esta camisa?',
      correctAnswer: 'How much is this shirt?',
      options: ['How much is this shirt?', 'How old is this shirt?', 'Where is this shirt?'],
      explanation: 'Para el precio usamos "How much is...?" → How much is this shirt? = ¿Cuánto cuesta esta camisa?',
    },
    {
      id: 'a1-m15-l3-mt3',
      type: 'reorder',
      concept: 'ability',
      difficulty: 2,
      prompt: 'Ordena la pregunta:',
      promptTranslation: '¿Puedes ayudarme?',
      words: ['Can', 'you', 'help', 'me?'],
      correctAnswer: 'Can you help me?',
      explanation: 'Para pedir ayuda: Can + you + verbo. → Can you help me? = ¿Puedes ayudarme?',
    },
    {
      id: 'a1-m15-l3-mt4',
      type: 'translate',
      concept: 'restaurant',
      difficulty: 3,
      prompt: 'Traduce: "La cuenta, por favor."',
      correctAnswer: 'The bill, please.',
      acceptedAnswers: ['The bill, please', 'The bill please', 'The check, please', 'The check, please.', 'The bill, please.'],
      acceptApproximate: true,
      explanation: '"The bill, please." = La cuenta, por favor. (En EE. UU. también se dice "Check, please.")',
    },
    {
      id: 'a1-m15-l3-mt5',
      type: 'select_correct',
      concept: 'personal information',
      difficulty: 3,
      prompt: 'Elige la mejor respuesta: "How old are you?"',
      promptTranslation: '¿Cuántos años tienes?',
      correctAnswer: "I'm thirty years old.",
      options: ["I'm thirty years old.", 'I am from Spain.', 'I have thirty years.'],
      explanation: 'La edad se dice con "to be": I\'m thirty years old. = Tengo treinta años. NUNCA "I have thirty years".',
    },
    {
      id: 'a1-m15-l3-mt6',
      type: 'translate',
      concept: 'past simple',
      difficulty: 4,
      prompt: 'Traduce: "¿Dónde estabas ayer?"',
      correctAnswer: 'Where were you yesterday?',
      acceptedAnswers: ['Where were you yesterday?', 'Where were you yesterday', 'Where was you yesterday?'],
      acceptApproximate: true,
      explanation: 'Pasado de "to be" con "you" = were. → Where were you yesterday? = ¿Dónde estabas ayer?',
    },
  ],
  reviewItems: ['a1-m15-l2'],
  prerequisites: ['a1-m15-l2'],
}
