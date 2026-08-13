import type { Lesson } from '../../types'

export const lesson74MiniTest: Lesson = {
  id: 'a2-m7-l4',
  moduleId: 'm7-conditionals',
  order: 3,
  title: 'Mini-test: condicionales 0 y 1',
  objective: 'Repasar el zero conditional, el first conditional y el uso de unless, when e if.',
  explanation_es: `Este es el repaso final del módulo. Repasemos lo esencial:

### Zero conditional (hechos generales)
- Estructura: if + presente simple, presente simple.
- Se usa para verdades y hechos que siempre ocurren: "If you heat water, it boils."
- NO se usa "will" en ninguna parte.

### First conditional (posibilidad futura)
- Estructura: if + presente simple, will + verbo.
- Se usa para situaciones posibles en el futuro: "If it rains, we will stay at home."
- "will" va en el resultado, NUNCA en la parte con "if".

### unless, when e if
- unless = a menos que / si no. Ya es negativo: unless you study = si no estudias.
- when = cuando (casi seguro). if = si (posibilidad).

### Lectura para practicar
Vas a leer un texto sobre planes con el tiempo meteorológico y responder preguntas. Recuerda fijarte en si la condición es segura (when), posible (if) o negativa (unless).`,
  examples: [
    { english: 'If it rains tomorrow, we will stay at home and watch a film.', spanish: 'Si llueve mañana, nos quedaremos en casa y veremos una película.', note: 'First conditional: posibilidad futura.' },
    { english: 'If the sun shines, we will go to the park.', spanish: 'Si sale el sol, iremos al parque.', note: 'if + presente simple → will.' },
    { english: 'Unless the weather is very bad, we will walk to the centre.', spanish: 'A menos que el tiempo esté muy mal, caminaremos hasta el centro.', note: 'unless = si no.' },
    { english: 'If you don\'t sleep well, you feel tired the next day.', spanish: 'Si no duermes bien, te sientes cansado al día siguiente.', note: 'Zero conditional: hecho general.' },
  ],
  rule: `**Resumen del módulo 7:**
1. Zero conditional: if + presente simple, presente simple (hechos generales).
2. First conditional: if + presente simple, will + verbo (posibilidad futura).
3. unless = si no / a menos que (ya es negativo).
4. when = cuando (seguro); if = si (posible).`,
  commonMistakes: [
    { wrong: '❌ If it will rain, we will stay home.', correct: '✅ If it rains, we will stay home.', explanation: 'En la if-clause usamos presente simple, no "will".' },
    { wrong: "❌ Unless you don't study, you won't pass.", correct: "✅ Unless you study, you won't pass.", explanation: '"Unless" ya significa "si no"; no añadimos "don\'t".' },
    { wrong: '❌ If you will heat water, it boils.', correct: '✅ If you heat water, it boils.', explanation: 'En el zero conditional no hay "will" en ninguna parte.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a2-m7-l4-ex1',
      type: 'multiple_choice',
      concept: 'zero vs first conditional',
      difficulty: 2,
      prompt: '¿Cuál frase expresa un hecho general (siempre cierto)?',
      promptTranslation: 'Which sentence expresses a general fact (always true)?',
      correctAnswer: 'If you heat water, it boils.',
      options: ['If you heat water, it boils.', 'If it rains, we will stay home.', 'If I have time, I will call you.'],
      explanation: 'El zero conditional (if + presente simple, presente simple) expresa hechos generales: If you heat water, it boils.',
    },
    {
      id: 'a2-m7-l4-ex2',
      type: 'fill_blank',
      concept: 'first conditional',
      difficulty: 2,
      prompt: 'Completa: "If the sun shines, we ___ go to the park."',
      promptTranslation: 'Si sale el sol, iremos al parque.',
      correctAnswer: 'will',
      acceptedAnswers: ['will', "'ll"],
      explanation: 'El resultado de una posibilidad futura lleva "will": we will go to the park.',
    },
    {
      id: 'a2-m7-l4-ex3',
      type: 'multiple_choice',
      concept: 'unless',
      difficulty: 3,
      prompt: 'Completa: "We will walk to the centre ___ the weather is very bad."',
      promptTranslation: 'Caminaremos hasta el centro a menos que el tiempo esté muy mal.',
      correctAnswer: 'unless',
      options: ['unless', 'when', 'because'],
      explanation: '"A menos que el tiempo esté muy mal" = unless the weather is very bad.',
    },
    {
      id: 'a2-m7-l4-ex4',
      type: 'reading',
      concept: 'weather forecast reading',
      difficulty: 4,
      prompt: 'Lee el texto sobre los planes del fin de semana y responde:',
      reading: {
        text: 'The Weekend Plan\nIf it rains tomorrow, we will stay at home and watch a film. If the sun shines, we will go to the park. When we go to the park, we will have a picnic. Unless the weather is very bad, we will walk to the city centre. If we get hungry, we will buy sandwiches at the market. When my brother arrives at 5 pm, he will bring the drinks. If it snows, we will stay home all weekend.',
        translation: 'El plan del fin de semana\nSi llueve mañana, nos quedaremos en casa y veremos una película. Si sale el sol, iremos al parque. Cuando vayamos al parque, haremos un pícnic. A menos que el tiempo esté muy mal, caminaremos hasta el centro de la ciudad. Si tenemos hambre, compraremos bocadillos en el mercado. Cuando llegue mi hermano a las 5, traerá las bebidas. Si nieva, nos quedaremos en casa todo el fin de semana.',
        questions: [
          {
            id: 'a2-m7-l4-ex4-q1',
            type: 'multiple_choice',
            concept: 'weather forecast reading',
            difficulty: 4,
            prompt: '¿Qué harán si llueve?',
            correctAnswer: 'stay at home and watch a film',
            options: ['stay at home and watch a film', 'go to the park', 'walk to the city centre'],
            explanation: 'El texto dice: "If it rains tomorrow, we will stay at home and watch a film."',
          },
          {
            id: 'a2-m7-l4-ex4-q2',
            type: 'multiple_choice',
            concept: 'weather forecast reading',
            difficulty: 4,
            prompt: '¿Cuándo harán un pícnic?',
            correctAnswer: 'when they go to the park',
            options: ['when they go to the park', 'if it snows', 'when his brother arrives'],
            explanation: 'El texto dice: "When we go to the park, we will have a picnic." (con "when", casi seguro).',
          },
          {
            id: 'a2-m7-l4-ex4-q3',
            type: 'multiple_choice',
            concept: 'weather forecast reading',
            difficulty: 4,
            prompt: '¿Bajo qué condición NO caminarán hasta el centro?',
            correctAnswer: 'if the weather is very bad',
            options: ['if the weather is very bad', 'if the sun shines', 'if they get hungry'],
            explanation: '"Unless the weather is very bad, we will walk to the city centre." = Caminarán a menos que el tiempo esté muy mal.',
          },
          {
            id: 'a2-m7-l4-ex4-q4',
            type: 'multiple_choice',
            concept: 'weather forecast reading',
            difficulty: 4,
            prompt: '¿Qué pasará cuando llegue el hermano?',
            correctAnswer: 'he will bring the drinks',
            options: ['he will bring the drinks', 'he will buy sandwiches', 'he will go to the park'],
            explanation: 'El texto dice: "When my brother arrives at 5 pm, he will bring the drinks."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Fíjate en cada palabra clave: if (posibilidad), when (casi seguro) y unless (si no).',
    },
    {
      id: 'a2-m7-l4-ex5',
      type: 'select_correct',
      concept: 'first conditional',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'Si tengo tiempo, te llamaré.',
      correctAnswer: 'If I have time, I will call you.',
      options: ['If I have time, I will call you.', 'If I will have time, I call you.', 'If I have time, I call you.'],
      explanation: 'La if-clause lleva presente simple (have) y el resultado lleva will (will call).',
    },
    {
      id: 'a2-m7-l4-ex6',
      type: 'reorder',
      concept: 'zero conditional',
      difficulty: 3,
      prompt: 'Ordena la frase:',
      promptTranslation: 'Si calientas agua, hierve.',
      correctAnswer: 'If you heat water, it boils.',
      words: ['If', 'you', 'heat', 'water,', 'it', 'boils.'],
      explanation: 'Zero conditional: if + presente simple (you heat water), presente simple (it boils).',
    },
    {
      id: 'a2-m7-l4-ex7',
      type: 'translate',
      concept: 'mixed conditionals review',
      difficulty: 4,
      prompt: 'Traduce: "Cuando llegue a casa, comeré."',
      correctAnswer: "When I get home, I'll eat.",
      acceptedAnswers: ['When I get home, I will eat', "When I get home, I'll eat.", 'When I get home I will eat.'],
      acceptApproximate: true,
      explanation: '"Cuando" (casi seguro) = when; "llegue a casa" = I get home (presente simple); "comeré" = I will eat.',
    },
    {
      id: 'a2-m7-l4-ex8',
      type: 'error_correction',
      concept: 'unless',
      difficulty: 4,
      prompt: 'Corrige el error: "Unless you don\'t try, you won\'t succeed."',
      correctAnswer: "Unless you try, you won't succeed.",
      acceptedAnswers: ['Unless you try, you won\'t succeed', 'Unless you try you will not succeed.'],
      acceptApproximate: true,
      explanation: '"Unless" ya es negativo: unless you try = si no intentas. Eliminamos "don\'t".',
    },
    {
      id: 'a2-m7-l4-ex9',
      type: 'true_false',
      concept: 'zero vs first conditional',
      difficulty: 3,
      prompt: '"We use "will" in the if-clause of the first conditional."',
      promptTranslation: 'Usamos "will" en la parte con "if" del first conditional.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'Falso', 'false.'],
      explanation: 'Es FALSO. En la if-clause usamos presente simple. "will" va en el resultado.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m7-l4-mt1',
      type: 'multiple_choice',
      concept: 'zero conditional',
      difficulty: 2,
      prompt: 'Completa: "If you ___ ice, it melts."',
      promptTranslation: 'Si calientas hielo, se derrite.',
      correctAnswer: 'heat',
      options: ['heat', 'heated', 'will heat'],
      explanation: 'Zero conditional: if + presente simple. Con "you" no llevamos -s: heat.',
    },
    {
      id: 'a2-m7-l4-mt2',
      type: 'multiple_choice',
      concept: 'first conditional',
      difficulty: 2,
      prompt: 'Completa: "If she is busy, she ___ come to the party."',
      promptTranslation: 'Si está ocupada, no vendrá a la fiesta.',
      correctAnswer: "won't",
      options: ["won't", "doesn't", "isn't"],
      explanation: 'Resultado negativo futuro: won\'t + verbo. → she won\'t come to the party.',
    },
    {
      id: 'a2-m7-l4-mt3',
      type: 'fill_blank',
      concept: 'unless',
      difficulty: 3,
      prompt: 'Completa: "You won\'t succeed ___ you try." (a menos que)',
      promptTranslation: 'No tendrás éxito a menos que lo intentes.',
      correctAnswer: 'unless',
      acceptedAnswers: ['unless', 'Unless'],
      explanation: '"A menos que lo intentes" = unless you try. Tras "unless" va presente simple.',
    },
    {
      id: 'a2-m7-l4-mt4',
      type: 'translate',
      concept: 'mixed review',
      difficulty: 4,
      prompt: 'Traduce: "Si no duermes, te sientes cansado."',
      correctAnswer: "If you don't sleep, you feel tired.",
      acceptedAnswers: ["If you don't sleep, you feel tired", 'If you do not sleep, you feel tired.', "If you don't sleep you feel tired."],
      acceptApproximate: true,
      explanation: 'Zero conditional: if you don\'t sleep (presente simple negativo) → you feel tired.',
    },
    {
      id: 'a2-m7-l4-mt5',
      type: 'error_correction',
      concept: 'mixed review',
      difficulty: 4,
      prompt: 'Corrige el error: "If it will rain tomorrow, we will stay home."',
      correctAnswer: 'If it rains tomorrow, we will stay home.',
      acceptedAnswers: ['If it rains tomorrow, we will stay home', 'If it rains tomorrow we will stay home.', "If it rains tomorrow, we'll stay home."],
      acceptApproximate: true,
      explanation: 'En la if-clause usamos presente simple (rains), no "will".',
    },
  ],
  reviewItems: ['a2-m7-l3'],
  prerequisites: ['a2-m7-l3'],
}
