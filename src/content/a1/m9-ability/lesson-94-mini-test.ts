import type { Lesson } from '../../types'

export const lesson94MiniTest: Lesson = {
  id: 'a1-m9-l4',
  moduleId: 'm9-ability',
  order: 3,
  title: 'Mini-test: habilidad, permiso e instrucciones',
  objective: 'Evaluar el uso de can/can\'t (habilidad), las peticiones y el permiso con can, y los imperativos.',
  explanation_es: `Esta es la lección de evaluación final del Módulo 9. Antes del mini-test, repasemos lo esencial:

**Habilidad con can / can't:**
- Sujeto + can/can't + verbo (sin "to"): I can swim. / She can't drive.
- "Can" no cambia con las personas: she can (no "she cans").
- Pregunta: Can + sujeto + verbo? → Can you cook? → Yes, I can. / No, I can't.

**Permiso y peticiones:**
- Can I + verbo? = pedir permiso: Can I go to the bathroom?
- Can you + verbo? = pedir a otra persona que haga algo: Can you help me?
- El verbo es obligatorio: Can I have a coffee? (no "Can I a coffee?").

**Imperativos:**
- Afirmativo: verbo sin sujeto: Open the door.
- Negativo: Don't + verbo: Don't worry.
- Usamos "don't", nunca "no".

**Errores típicos a evitar:**
- ❌ She cans swim → ✅ She can swim.
- ❌ He don't can swim → ✅ He can't swim.
- ❌ Can you to help me? → ✅ Can you help me?
- ❌ Can I a coffee? → ✅ Can I have a coffee?
- ❌ No open the door → ✅ Don't open the door.`,
  examples: [
    { english: 'I can swim.', spanish: 'Yo sé nadar.' },
    { english: 'Can I have a coffee, please?', spanish: '¿Puedo tomar un café, por favor?' },
    { english: 'Can you help me?', spanish: '¿Puedes ayudarme?' },
    { english: "Don't worry.", spanish: 'No te preocupes.' },
    { english: 'Open the door, please.', spanish: 'Abre la puerta, por favor.' },
  ],
  rule: `**Resumen del módulo:**
- Habilidad: sujeto + can/can't + verbo (sin "to"). Pregunta: Can + sujeto + verbo?
- Permiso: Can I + verbo? / Petición: Can you + verbo? El verbo es obligatorio.
- Imperativos: verbo sin sujeto (Open the door.) / Don't + verbo (Don't open the door.).
- "Can" no lleva -s con he/she/it. La negativa de "can" es "can't", no "don't can".`,
  commonMistakes: [
    { wrong: '❌ She cans swim.', correct: '✅ She can swim.', explanation: '"can" no añade -s con she.' },
    { wrong: '❌ Can I a coffee?', correct: '✅ Can I have a coffee?', explanation: 'La estructura necesita el verbo "have".' },
    { wrong: '❌ No open the door.', correct: '✅ Don\'t open the door.', explanation: 'La negativa del imperativo se forma con "don\'t", no con "no".' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m9-l4-ex1',
      type: 'multiple_choice',
      concept: 'module 9 - can ability',
      difficulty: 1,
      prompt: 'Completa: "She ___ swim very well."',
      promptTranslation: 'Ella sabe nadar muy bien.',
      correctAnswer: 'can',
      options: ['can', 'cans', 'can to'],
      explanation: '"Can" no cambia con she: She can swim very well.',
    },
    {
      id: 'a1-m9-l4-ex2',
      type: 'fill_blank',
      concept: 'module 9 - can question',
      difficulty: 1,
      prompt: 'Completa: "___ you speak English?"',
      promptTranslation: '¿Hablas (sabes hablar) inglés?',
      correctAnswer: 'Can',
      acceptedAnswers: ['Can', 'can'],
      explanation: 'Pregunta de habilidad: Can + sujeto + verbo. → Can you speak English?',
    },
    {
      id: 'a1-m9-l4-ex3',
      type: 'multiple_choice',
      concept: 'module 9 - can I permission',
      difficulty: 2,
      prompt: 'Completa: "Can I ___ the window?"',
      promptTranslation: '¿Puedo abrir la ventana?',
      correctAnswer: 'open',
      options: ['open', 'to open', 'opening'],
      explanation: 'Después de "can" usamos el verbo sin "to": Can I open the window?',
    },
    {
      id: 'a1-m9-l4-ex4',
      type: 'reorder',
      concept: 'module 9 - polite request',
      difficulty: 2,
      prompt: 'Ordena las palabras: Can / I / have / a coffee / please',
      promptTranslation: '¿Puedo tomar un café, por favor?',
      correctAnswer: 'Can I have a coffee, please?',
      words: ['Can', 'I', 'have', 'a coffee', 'please'],
      explanation: 'Petición educada: Can I have + cosa + please. → Can I have a coffee, please?',
    },
    {
      id: 'a1-m9-l4-ex5',
      type: 'fill_blank',
      concept: 'module 9 - imperative don\'t',
      difficulty: 2,
      prompt: 'Completa: "___ worry! Everything is fine."',
      promptTranslation: '¡No te preocupes! Todo está bien.',
      correctAnswer: "Don't",
      acceptedAnswers: ["Don't", "don't", 'Dont'],
      explanation: 'Imperativo negativo: Don\'t + verbo. → Don\'t worry!',
    },
    {
      id: 'a1-m9-l4-ex6',
      type: 'match',
      concept: 'module 9 - request and response',
      difficulty: 2,
      prompt: 'Relaciona cada frase con la respuesta lógica.',
      promptTranslation: 'Match each phrase with the logical response.',
      correctAnswer: '',
      pairs: [
        { left: 'Can I have a coffee, please?', right: 'Of course. Here you are.' },
        { left: 'Can I go to the bathroom?', right: 'Yes, go ahead.' },
        { left: 'Can you help me?', right: 'Sure, no problem.' },
        { left: 'Can I open the window?', right: 'Yes, of course.' },
        { left: "Don't touch!", right: 'Sorry!' },
      ],
      explanation: 'Cada frase tiene una respuesta lógica: pedir un café → "here you are"; pedir permiso para el baño → "go ahead"; pedir ayuda → "no problem"; abrir la ventana → "of course"; y a un imperativo de prohibición → "sorry".',
    },
    {
      id: 'a1-m9-l4-ex7',
      type: 'error_correction',
      concept: 'module 9 - can no -s',
      difficulty: 3,
      prompt: 'Corrige el error: "She cans play the guitar."',
      correctAnswer: 'She can play the guitar.',
      acceptedAnswers: ['She can play the guitar', 'she can play the guitar.'],
      acceptApproximate: true,
      explanation: '"Can" no añade -s con she: She can play the guitar.',
    },
    {
      id: 'a1-m9-l4-ex8',
      type: 'translate',
      concept: 'module 9 - translate ability',
      difficulty: 3,
      prompt: 'Traduce: "¿Sabes cocinar?"',
      correctAnswer: 'Can you cook?',
      acceptedAnswers: ['Can you cook', 'can you cook?', 'can you cook'],
      acceptApproximate: true,
      explanation: '"¿Sabes (puedes) cocinar?" → Can + you + cook? → Can you cook?',
    },
    {
      id: 'a1-m9-l4-ex9',
      type: 'true_false',
      concept: 'module 9 - imperative negative',
      difficulty: 3,
      prompt: 'Frase correcta: "The negative of the imperative Open the door is No open the door."',
      promptTranslation: 'El negativo del imperativo "Open the door" es "No open the door".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Falso. La negativa del imperativo se forma con "don\'t": "Don\'t open the door", nunca con "no".',
    },
    {
      id: 'a1-m9-l4-ex10',
      type: 'multiple_choice',
      concept: 'module 9 - Can you request',
      difficulty: 3,
      prompt: 'Quieres que un amigo te ayude con los deberes. ¿Qué le dices?',
      promptTranslation: 'You want a friend to help you with your homework. What do you say?',
      correctAnswer: 'Can you help me?',
      options: ['Can you help me?', 'Can I help you?', 'You help me?'],
      explanation: 'Para pedir a otra persona que haga algo usamos "Can you...?": Can you help me? ("Can I help you?" significa "¿Te ayudo yo?").',
    },
  ],
  miniTest: [
    {
      id: 'a1-m9-l4-mt1',
      type: 'multiple_choice',
      concept: 'module 9 final - can ability',
      difficulty: 2,
      prompt: 'Completa: "He ___ play the piano."',
      promptTranslation: 'Él sabe tocar el piano.',
      correctAnswer: 'can',
      options: ['can', 'cans', 'can to'],
      explanation: '"Can" es igual con he y va seguido del verbo sin "to": He can play the piano.',
    },
    {
      id: 'a1-m9-l4-mt2',
      type: 'multiple_choice',
      concept: 'module 9 final - Can you request',
      difficulty: 2,
      prompt: 'Completa: "___ you help me, please?"',
      promptTranslation: '¿Puedes ayudarme, por favor?',
      correctAnswer: 'Can',
      options: ['Can', 'Does', 'Are'],
      explanation: 'Pedir a otra persona: Can you + verbo, please? → Can you help me, please?',
    },
    {
      id: 'a1-m9-l4-mt3',
      type: 'fill_blank',
      concept: 'module 9 final - imperative',
      difficulty: 2,
      prompt: 'Completa: "___ eat in class!"',
      promptTranslation: '¡No comáis en clase!',
      correctAnswer: "Don't",
      acceptedAnswers: ["Don't", "don't", 'Dont'],
      explanation: 'Imperativo negativo: Don\'t + verbo. → Don\'t eat in class!',
    },
    {
      id: 'a1-m9-l4-mt4',
      type: 'error_correction',
      concept: 'module 9 final - no to after can',
      difficulty: 3,
      prompt: 'Corrige el error: "Can I to open the window?"',
      correctAnswer: 'Can I open the window?',
      acceptedAnswers: ['Can I open the window', 'can i open the window?'],
      acceptApproximate: true,
      explanation: 'Después de "can" usamos el verbo sin "to": Can I open the window?',
    },
    {
      id: 'a1-m9-l4-mt5',
      type: 'translate',
      concept: 'module 9 final - polite request',
      difficulty: 3,
      prompt: 'Traduce: "¿Puedo tomar un café, por favor?"',
      correctAnswer: 'Can I have a coffee, please?',
      acceptedAnswers: ['Can I have a coffee please', 'Can I have a coffee, please', 'can i have a coffee, please?'],
      acceptApproximate: true,
      explanation: 'Petición educada: Can I have + a coffee + please. → Can I have a coffee, please?',
    },
  ],
  reviewItems: ['a1-m9-l3'],
  prerequisites: ['a1-m9-l3'],
}
