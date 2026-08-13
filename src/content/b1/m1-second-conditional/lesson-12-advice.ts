import type { Lesson } from '../../types'

export const lesson12Advice: Lesson = {
  id: 'b1-m1-l2',
  moduleId: 'm1-second-conditional',
  order: 1,
  title: 'Consejos con "If I were you"',
  objective: 'Dar consejos hipotéticos usando la expresión "If I were you" con would y wouldn\'t.',
  explanation_es: `Una de las formas más útiles del segundo condicional es dar consejos. La estructura es:

If I were you, I would / wouldn't + verbo base.

Ejemplos:
- If I were you, I would see a doctor. = Si yo fuera tú, vería a un médico.
- If I were you, I wouldn't buy that car. = Si yo fuera tú, no compraría ese coche.

¿Cómo funciona?

1. "If I were you" significa "si yo estuviera en tu lugar". Es una forma fija: siempre usamos "were" (nunca "was" en lenguaje formal) y siempre va al principio o al final de la frase.

2. "I would" da el consejo. Puede contraerse a "I'd": If I were you, I'd tell her the truth.

3. Para desaconsejar (dar un consejo negativo), usamos "wouldn't":
   - If I were you, I wouldn't eat that. = Si yo fuera tú, no me comería eso.

4. El verbo después de "would" siempre va en infinitivo (sin to):
   - I'd tell the truth. (no: I'd to tell)

5. En el resultado nunca usamos "will" con esta estructura. La hipótesis es irreal, por eso "would".

Esta expresión es muy frecuente en inglés hablado para dar consejo amable y no sonar impositivo. En vez de decir "Do X" (¡haz X!), decimos "If I were you, I'd do X" (Yo en tu lugar haría X).`,
  examples: [
    { english: 'If I were you, I would see a doctor.', spanish: 'Si yo fuera tú, vería a un médico.', note: 'Consejo: consultar a un médico.' },
    { english: 'If I were you, I wouldn\'t buy that car.', spanish: 'Si yo fuera tú, no compraría ese coche.', note: 'wouldn\'t = consejo negativo.' },
    { english: 'If I were you, I\'d tell her the truth.', spanish: 'Si yo fuera tú, le diría la verdad.', note: 'I\'d = I would (contracción).' },
    { english: 'If I were you, I\'d take the train, not the bus.', spanish: 'Si yo fuera tú, tomaría el tren, no el autobús.' },
    { english: 'I\'d ask for more money if I were you.', spanish: 'Yo pediría más dinero si fuera tú.', note: 'Orden invertido: el consejo primero, la condición después.' },
    { english: 'If I were you, I wouldn\'t worry about it.', spanish: 'Si yo fuera tú, no me preocuparía por eso.', note: 'Consejo para tranquilizar.' },
  ],
  rule: `Fórmula para dar consejo:
If I were you, I would/wouldn't + verbo base.

- If I were you, I would see a doctor.
- If I were you, I wouldn't buy that car.
- If I were you, I'd tell her the truth.

Reglas:
1. "If I were you" es una forma fija: siempre "were", nunca "was" en inglés formal.
2. En el resultado usamos would/wouldn't + verbo en infinitivo (sin to).
3. Nunca usamos "will" en la parte del consejo.
4. Orden invertido (sin coma): I'd tell her the truth if I were you.

Contracción común: I would → I'd.`,
  commonMistakes: [
    { wrong: '❌ If I was you, I would see a doctor.', correct: '✅ If I were you, I would see a doctor.', explanation: 'En la expresión fija "If I were you" siempre usamos "were", aunque en conversación informal se oiga "was".' },
    { wrong: '❌ If I were you, I will see a doctor.', correct: '✅ If I were you, I would see a doctor.', explanation: 'Con una condición hipotética (if + past), el resultado lleva "would", nunca "will".' },
    { wrong: '❌ If I were you, I would to call her.', correct: '✅ If I were you, I would call her.', explanation: 'Después de "would" el verbo va en infinitivo SIN "to": would call, no would to call.' },
    { wrong: '❌ If I am you, I would study more.', correct: '✅ If I were you, I would study more.', explanation: 'La condición es imaginaria, así que usamos "were" (pasado subjuntivo), no "am" (presente real).' },
  ],
  vocabulary: [
    { word: 'advice', translation_es: 'consejo', level: 'B1', category: 'advice', partOfSpeech: 'noun', example: 'Let me give you some advice.', exampleTranslation: 'Déjame darte un consejo.' },
    { word: 'should', translation_es: 'deberías', level: 'A2', category: 'advice', partOfSpeech: 'modal verb', example: 'You should rest.', exampleTranslation: 'Deberías descansar.' },
    { word: 'truth', translation_es: 'la verdad', level: 'A2', category: 'advice', partOfSpeech: 'noun', example: 'Tell her the truth.', exampleTranslation: 'Dile la verdad.' },
    { word: 'worry', translation_es: 'preocuparse', level: 'B1', category: 'advice', partOfSpeech: 'verb', example: 'I wouldn\'t worry about it.', exampleTranslation: 'No me preocuparía por eso.' },
    { word: 'better', translation_es: 'mejor', level: 'A2', category: 'advice', partOfSpeech: 'adjective', example: 'You had better rest.', exampleTranslation: 'Sería mejor que descansaras.' },
    { word: 'suggestion', translation_es: 'sugerencia', level: 'B1', category: 'advice', partOfSpeech: 'noun', example: 'That is a good suggestion.', exampleTranslation: 'Esa es una buena sugerencia.' },
  ],
  grammarPoints: [
    {
      id: 'gp-if-i-were-you',
      level: 'B1',
      name: 'Advice: If I were you',
      explanation_es: 'Expresión fija del segundo condicional para dar consejo: If I were you, I would/wouldn\'t + verbo base.',
      formula: 'If I were you, I would/wouldn\'t + base verb',
      examples: ['If I were you, I would see a doctor.', 'If I were you, I wouldn\'t buy that car.', 'If I were you, I\'d tell her the truth.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m1-l2-ex1',
      type: 'multiple_choice',
      concept: 'advice with if i were you',
      difficulty: 1,
      prompt: 'Completa el consejo: "If I ___ you, I would see a doctor."',
      promptTranslation: 'Si yo fuera tú, vería a un médico.',
      correctAnswer: 'were',
      options: ['were', 'was', 'am'],
      explanation: '"If I were you" es una forma fija. Aunque "was" se escucha en informal, "were" es la opción correcta y formal.',
    },
    {
      id: 'b1-m1-l2-ex2',
      type: 'multiple_choice',
      concept: 'advice with if i were you',
      difficulty: 1,
      prompt: 'Completa el consejo negativo: "If I were you, I ___ buy that car."',
      promptTranslation: 'Si yo fuera tú, no compraría ese coche.',
      correctAnswer: 'wouldn\'t',
      options: ["wouldn't", 'will', 'don\'t'],
      explanation: 'Para desaconsejar usamos "wouldn\'t" + verbo base. → I wouldn\'t buy that car.',
    },
    {
      id: 'b1-m1-l2-ex3',
      type: 'fill_blank',
      concept: 'advice with if i were you',
      difficulty: 2,
      prompt: 'Completa con la contracción: "If I were you, I\'___ tell her the truth."',
      promptTranslation: 'Si yo fuera tú, le diría la verdad.',
      correctAnswer: 'd',
      acceptedAnswers: ['d', "'d", 'would'],
      explanation: '"I\'d" es la contracción de "I would". → If I were you, I\'d tell her the truth.',
    },
    {
      id: 'b1-m1-l2-ex4',
      type: 'reorder',
      concept: 'advice with if i were you',
      difficulty: 3,
      prompt: 'Ordena el consejo:',
      promptTranslation: 'Si yo fuera tú, no me preocuparía por eso.',
      words: ['If', 'I', 'were', 'you,', 'I', 'wouldn\'t', 'worry', 'about', 'it.'],
      correctAnswer: "If I were you, I wouldn't worry about it.",
      explanation: 'Estructura: If I were you + coma + I wouldn\'t + verbo base (worry). → If I were you, I wouldn\'t worry about it.',
    },
    {
      id: 'b1-m1-l2-ex5',
      type: 'translate',
      concept: 'advice with if i were you',
      difficulty: 3,
      prompt: 'Traduce el consejo: "Si yo fuera tú, vería a un médico."',
      correctAnswer: 'If I were you, I would see a doctor.',
      acceptedAnswers: [
        'If I were you, I would see a doctor',
        'If I were you, I would see a doctor.',
        'If I were you, I\'d see a doctor',
        'If I were you, I\'d see a doctor.',
      ],
      acceptApproximate: true,
      explanation: '"If I were you" = Si yo fuera tú, "I would see a doctor" = vería a un médico. → If I were you, I would see a doctor.',
    },
    {
      id: 'b1-m1-l2-ex6',
      type: 'translate',
      concept: 'advice with if i were you',
      difficulty: 4,
      prompt: 'Traduce el consejo negativo: "Si yo fuera tú, no compraría ese coche."',
      correctAnswer: "If I were you, I wouldn't buy that car.",
      acceptedAnswers: [
        "If I were you, I wouldn't buy that car",
        "If I were you, I wouldn't buy that car.",
        "If I were you, I'd not buy that car",
        "If I were you, I'd not buy that car.",
      ],
      acceptApproximate: true,
      explanation: 'Para desaconsejar usamos "wouldn\'t" + verbo base (buy). → If I were you, I wouldn\'t buy that car.',
    },
    {
      id: 'b1-m1-l2-ex7',
      type: 'select_correct',
      concept: 'advice with if i were you',
      difficulty: 3,
      prompt: 'Selecciona el consejo correcto: "Le diría la verdad."',
      promptTranslation: 'I would tell her the truth.',
      correctAnswer: "If I were you, I'd tell her the truth.",
      options: [
        "If I were you, I'd tell her the truth.",
        "If I was you, I'd told her the truth.",
        "If I were you, I will tell her the truth.",
        "If I am you, I'd tell her the truth.",
      ],
      explanation: 'El consejo correcto es: If I were you + I\'d (I would) + verbo base (tell). El resto tiene "was", "told" o "will", todos incorrectos.',
    },
    {
      id: 'b1-m1-l2-ex8',
      type: 'error_correction',
      concept: 'advice with if i were you',
      difficulty: 4,
      prompt: 'Corrige el error: "If I were you, I will ask for more money."',
      correctAnswer: 'If I were you, I would ask for more money.',
      acceptedAnswers: [
        'If I were you, I would ask for more money',
        'If I were you, I would ask for more money.',
        'If I were you, I\'d ask for more money',
        'If I were you, I\'d ask for more money.',
      ],
      acceptApproximate: true,
      explanation: 'El resultado de una hipótesis irreal lleva "would", nunca "will". → I would ask for more money.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m1-l2-mt1',
      type: 'multiple_choice',
      concept: 'advice with if i were you',
      difficulty: 2,
      prompt: 'Completa el consejo: "If I were you, I ___ tell her the truth."',
      promptTranslation: 'Si yo fuera tú, le diría la verdad.',
      correctAnswer: 'would',
      options: ['would', 'will', 'do'],
      explanation: 'La parte del consejo lleva "would" (o "wouldn\'t") + verbo base. → I would tell her the truth.',
    },
    {
      id: 'b1-m1-l2-mt2',
      type: 'translate',
      concept: 'advice with if i were you',
      difficulty: 3,
      prompt: 'Traduce: "Yo en tu lugar le diría la verdad."',
      correctAnswer: "If I were you, I'd tell her the truth.",
      acceptedAnswers: [
        "If I were you, I'd tell her the truth",
        "If I were you, I'd tell her the truth.",
        'If I were you, I would tell her the truth',
        'If I were you, I would tell her the truth.',
      ],
      acceptApproximate: true,
      explanation: '"Yo en tu lugar" = If I were you. "le diría" = I\'d tell her. → If I were you, I\'d tell her the truth.',
    },
    {
      id: 'b1-m1-l2-mt3',
      type: 'error_correction',
      concept: 'advice with if i were you',
      difficulty: 4,
      prompt: 'Corrige el error: "If I was you, I would rest."',
      correctAnswer: 'If I were you, I would rest.',
      acceptedAnswers: [
        'If I were you, I would rest',
        'If I were you, I would rest.',
        'If I were you, I\'d rest',
        'If I were you, I\'d rest.',
      ],
      acceptApproximate: true,
      explanation: 'La forma fija es "If I were you" con "were". "Was" se escucha en informal, pero "were" es lo correcto.',
    },
    {
      id: 'b1-m1-l2-mt4',
      type: 'true_false',
      concept: 'advice with if i were you',
      difficulty: 2,
      prompt: '"If I were you, I wouldn\'t buy that car." significa que el consejo es comprar el coche.',
      correctAnswer: 'false',
      explanation: 'Falso. "Wouldn\'t" es la negación: el consejo es NO comprar ese coche. would not buy = no compraría.',
    },
  ],
  reviewItems: ['b1-m1-l1'],
  prerequisites: ['b1-m1-l1'],
}
