import type { Lesson } from '../../types'

export const lesson115MiniTest: Lesson = {
  id: 'b1-m11-l5',
  moduleId: 'm11-linking-words',
  order: 4,
  title: 'Mini-test: conectores y contraste',
  objective: 'Evaluar todo el módulo: although/even though/though, however/nevertheless/on the other hand, so/because/because of/so that, y so/such...that + too/enough.',
  explanation_es: `Esta es la evaluación final del Módulo 11. Repasemos lo esencial:

1) although / even though / though = "aunque" (contraste dentro de una frase). No se combinan con "but". "Even although" no existe.

2) however / nevertheless / on the other hand = "sin embargo / por otro lado" (contraste entre dos frases). Van con coma. No se combinan con "but".

3) Causa y finalidad:
- so = consecuencia: It was raining, so we stayed home.
- because + oración: I was late because the traffic was bad.
- because of + sustantivo: The match was cancelled because of the rain.
- so that + oración: I study every day so that I can pass.

4) Intensificadores:
- so + adjetivo + that: so boring that...
- such a/an + adjetivo + sustantivo + that: such a good film that...
- too + adjetivo + to: too hot to drink.
- adjetivo + enough + to: old enough to drive.

Errores típicos:
- ❌ Although it was raining, but we went out → ✅ quitar "but".
- ❌ because of the traffic was bad → ✅ because the traffic was bad.
- ❌ enough hot → ✅ hot enough.
- ❌ so good film → ✅ such a good film.`,
  examples: [
    { english: 'Although it was raining, we went out.', spanish: 'Aunque estaba lloviendo, salimos.' },
    { english: 'It\'s a nice car. However, it\'s very expensive.', spanish: 'Es un buen coche. Sin embargo, es muy caro.' },
    { english: 'The match was cancelled because of the rain.', spanish: 'El partido se canceló por la lluvia.' },
    { english: 'It was such a good film that I watched it twice.', spanish: 'Era una película tan buena que la vi dos veces.' },
    { english: 'She is old enough to drive.', spanish: 'Tiene edad suficiente para conducir.' },
  ],
  rule: `**Resumen del módulo:**
- aunque: although / even though / though (sin "but").
- sin embargo: however / nevertheless / on the other hand (+ coma).
- causa: because + oración / because of + sustantivo.
- resultado: so. Finalidad: so that + oración.
- énfasis: so + adj + that / such a/an + adj + sustantivo + that.
- exceso: too + adj + to. Suficiencia: adj + enough + to.`,
  commonMistakes: [
    { wrong: '❌ Although it was raining, but we went out.', correct: '✅ Although it was raining, we went out.', explanation: '"although" ya expresa contraste; "but" sobra.' },
    { wrong: '❌ The match was cancelled because of it was raining.', correct: '✅ The match was cancelled because it was raining. / ... because of the rain.', explanation: '"because of" va con sustantivo; con oración usamos "because".' },
    { wrong: '❌ The coffee is enough hot to drink.', correct: '✅ The coffee is hot enough to drink.', explanation: '"enough" va después del adjetivo: hot enough.' },
    { wrong: '❌ It was so good film that...', correct: '✅ It was such a good film that...', explanation: 'Con adjetivo + sustantivo contable singular usamos "such a/an".' },
    { wrong: '❌ It\'s cheap. However but it\'s small.', correct: '✅ It\'s cheap. However, it\'s small.', explanation: '"however" y "but" no se combinan.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'b1-m11-l5-ex1',
      type: 'multiple_choice',
      concept: 'module 11 - although',
      difficulty: 1,
      prompt: 'Completa: "___ it was cold, she went swimming."',
      promptTranslation: 'Aunque hacía frío, fue a nadar.',
      correctAnswer: 'Although',
      options: ['Although', 'But', 'However'],
      explanation: '"Although" introduce el contraste dentro de la frase.',
    },
    {
      id: 'b1-m11-l5-ex2',
      type: 'fill_blank',
      concept: 'module 11 - so = result',
      difficulty: 2,
      prompt: 'Completa: "I was hungry, ___ I made a sandwich."',
      promptTranslation: 'Tenía hambre, así que me hice un sándwich.',
      correctAnswer: 'so',
      acceptedAnswers: ['so', 'So'],
      explanation: '"so" introduce el resultado: tenía hambre → me hice un sándwich.',
    },
    {
      id: 'b1-m11-l5-ex3',
      type: 'multiple_choice',
      concept: 'module 11 - because of + noun',
      difficulty: 2,
      prompt: 'Completa: "The picnic was cancelled because ___ the wind."',
      promptTranslation: 'El picnic se canceló por el viento.',
      correctAnswer: 'of',
      options: ['of', 'of that', 'when'],
      explanation: '"because of" + sustantivo (the wind).',
    },
    {
      id: 'b1-m11-l5-ex4',
      type: 'error_correction',
      concept: 'module 11 - although + but',
      difficulty: 3,
      prompt: 'Corrige el error: "Although he was rich, but he wasn\'t happy."',
      promptTranslation: 'Aunque era rico, no era feliz.',
      correctAnswer: 'Although he was rich, he wasn\'t happy.',
      acceptedAnswers: ['Although he was rich, he wasn\'t happy', 'Although he was rich, he wasn\'t happy.', 'although he was rich, he wasn\'t happy'],
      acceptApproximate: true,
      explanation: 'Quitamos "but": Although he was rich, he wasn\'t happy.',
    },
    {
      id: 'b1-m11-l5-ex5',
      type: 'reading',
      concept: 'module 11 - an opinion text',
      difficulty: 4,
      prompt: 'Lee la opinión sobre la vida en la ciudad y responde las preguntas.',
      promptTranslation: 'Read the opinion about city life and answer the questions.',
      reading: {
        text: 'City life: advantages and disadvantages\nI have lived in Madrid for ten years. Although I love the city, I sometimes miss the peace of my small town. On the one hand, Madrid has great public transport, so I never need a car. However, the traffic is terrible during rush hour, and it is too noisy at night. Nevertheless, I enjoy the cultural life: there are so many museums that I can\'t visit them all. The problem is that rent is so high that young people can\'t afford it. Because of the high prices, some of my friends have moved away. Even though it\'s expensive, I think Madrid is worth it because of the opportunities it offers. I am not sure, though: would I be happier in a smaller city?',
        translation: 'La vida en la ciudad: ventajas y desventajas\nHe vivido en Madrid durante diez años. Aunque me encanta la ciudad, a veces echo de menos la tranquilidad de mi pueblo pequeño. Por un lado, Madrid tiene un transporte público estupendo, así que nunca necesito un coche. Sin embargo, el tráfico es terrible en hora punta, y es demasiado ruidoso por la noche. No obstante, disfruto de la vida cultural: hay tantos museos que no puedo visitarlos todos. El problema es que el alquiler es tan alto que los jóvenes no pueden permitírselo. Debido a los precios altos, algunos de mis amigos se han mudado. Aunque es caro, creo que Madrid merece la pena por las oportunidades que ofrece. No estoy seguro, aun así: ¿sería más feliz en una ciudad más pequeña?',
        questions: [
          {
            id: 'b1-m11-l5-ex5-q1',
            type: 'multiple_choice',
            concept: 'module 11 - although comprehension',
            difficulty: 4,
            prompt: '¿Qué echa de menos la autora?',
            correctAnswer: 'La tranquilidad de su pueblo pequeño.',
            options: ['La tranquilidad de su pueblo pequeño.', 'El tráfico de Madrid.', 'El transporte público.'],
            explanation: '"Although I love the city, I sometimes miss the peace of my small town."',
          },
          {
            id: 'b1-m11-l5-ex5-q2',
            type: 'multiple_choice',
            concept: 'module 11 - so (result) comprehension',
            difficulty: 4,
            prompt: '¿Por qué no necesita coche?',
            correctAnswer: 'Porque el transporte público es estupendo.',
            options: ['Porque el transporte público es estupendo.', 'Porque no le gusta conducir.', 'Porque el tráfico es terrible.'],
            explanation: '"Madrid has great public transport, so I never need a car." El "so" introduce el resultado.',
          },
          {
            id: 'b1-m11-l5-ex5-q3',
            type: 'multiple_choice',
            concept: 'module 11 - too + adjective',
            difficulty: 4,
            prompt: '¿Qué dice sobre el ruido por la noche?',
            correctAnswer: 'Que es demasiado ruidoso.',
            options: ['Que es demasiado ruidoso.', 'Que es silencioso.', 'Que solo es ruidoso los fines de semana.'],
            explanation: '"it is too noisy at night" → too + adjetivo = exceso.',
          },
          {
            id: 'b1-m11-l5-ex5-q4',
            type: 'multiple_choice',
            concept: 'module 11 - because of + noun',
            difficulty: 4,
            prompt: '¿Por qué se mudaron algunos amigos?',
            correctAnswer: 'Debido a los precios altos.',
            options: ['Debido a los precios altos.', 'Debido a que les gustaba el ruido.', 'Porque el museo cerró.'],
            explanation: '"Because of the high prices, some of my friends have moved away." → because of + sustantivo.',
          },
          {
            id: 'b1-m11-l5-ex5-q5',
            type: 'multiple_choice',
            concept: 'module 11 - even though / though',
            difficulty: 4,
            prompt: '¿Qué opina al final la autora sobre Madrid?',
            correctAnswer: 'Cree que merece la pena por las oportunidades.',
            options: ['Cree que merece la pena por las oportunidades.', 'Cree que es demasiado cara para vivir.', 'Quiere mudarse enseguida.'],
            explanation: '"Even though it\'s expensive, I think Madrid is worth it because of the opportunities it offers."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'El texto practica aunque (although/even though), el contraste entre frases (however, nevertheless, on the one hand/on the other hand), causa y resultado (because of, so), exceso (too noisy), énfasis (so many... that, so high... that) y la posición final de "though".',
    },
    {
      id: 'b1-m11-l5-ex6',
      type: 'reorder',
      concept: 'module 11 - however between sentences',
      difficulty: 3,
      prompt: 'Ordena las palabras: nice / is / a / car. / expensive / However, / is / it / very',
      promptTranslation: 'Es un buen coche. Sin embargo, es muy caro.',
      correctAnswer: 'It\'s a nice car. However, it\'s very expensive.',
      words: ['It', 'is', 'a', 'nice', 'car.', 'However,', 'it', 'is', 'very', 'expensive'],
      explanation: 'Primera frase + punto + However, + segunda frase. → It\'s a nice car. However, it\'s very expensive.',
    },
    {
      id: 'b1-m11-l5-ex7',
      type: 'translate',
      concept: 'module 11 - so that',
      difficulty: 3,
      prompt: 'Traduce: "Estudio todos los días para poder aprobar el examen."',
      promptTranslation: 'I study every day so that I can pass the exam.',
      correctAnswer: 'I study every day so that I can pass the exam.',
      acceptedAnswers: ['I study every day so that I can pass the exam', 'I study every day so that I can pass the exam.', 'I study every day to pass the exam', 'i study every day so that i can pass the exam'],
      acceptApproximate: true,
      explanation: 'Finalidad = so that + oración (so that I can pass) o to + verbo (to pass).',
    },
    {
      id: 'b1-m11-l5-ex8',
      type: 'match',
      concept: 'module 11 - review matching',
      difficulty: 3,
      prompt: 'Relaciona cada conector con su ejemplo.',
      promptTranslation: 'Match each connector with its example.',
      correctAnswer: 'although=Although it was raining, we went out.; however=It was late. However, we stayed.; because of=The flight was late because of the fog.; so that=I saved money so that I could travel.; too=I was too tired to continue.',
      pairs: [
        { left: 'although', right: 'Although it was raining, we went out.' },
        { left: 'however', right: 'It was late. However, we stayed.' },
        { left: 'because of', right: 'The flight was late because of the fog.' },
        { left: 'so that', right: 'I saved money so that I could travel.' },
        { left: 'too', right: 'I was too tired to continue.' },
      ],
      explanation: 'Repaso de los conectores del módulo: contraste, causa, finalidad y exceso.',
    },
    {
      id: 'b1-m11-l5-ex9',
      type: 'true_false',
      concept: 'module 11 - even although',
      difficulty: 3,
      prompt: 'La expresión "even although" es correcta en inglés.',
      promptTranslation: 'The expression "even although" is correct in English.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "Even although" no existe; se usa "even though".',
    },
    {
      id: 'b1-m11-l5-ex10',
      type: 'multiple_choice',
      concept: 'module 11 - so vs such',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'The soup was so salty that I couldn\'t eat it.',
      options: ['The soup was so salty that I couldn\'t eat it.', 'The soup was such salty that I couldn\'t eat it.', 'The soup was too salty enough to eat it.'],
      explanation: '"salty" es un adjetivo sin sustantivo → so salty. "such" necesita sustantivo y "too...enough" no se combinan.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m11-l5-mt1',
      type: 'multiple_choice',
      concept: 'module 11 final - although vs but',
      difficulty: 1,
      prompt: 'Completa: "___ it was raining, the match continued."',
      promptTranslation: 'Aunque estaba lloviendo, el partido continuó.',
      correctAnswer: 'Although',
      options: ['Although', 'But', 'So'],
      explanation: '"Although" introduce el contraste sin necesidad de "but".',
    },
    {
      id: 'b1-m11-l5-mt2',
      type: 'fill_blank',
      concept: 'module 11 final - too + adjective',
      difficulty: 2,
      prompt: 'Completa: "The shoes are ___ small for me."',
      promptTranslation: 'Los zapatos son demasiado pequeños para mí.',
      correctAnswer: 'too',
      acceptedAnswers: ['too', 'Too'],
      explanation: '"too" + adjetivo expresa exceso: too small.',
    },
    {
      id: 'b1-m11-l5-mt3',
      type: 'error_correction',
      concept: 'module 11 final - enough position',
      difficulty: 3,
      prompt: 'Corrige el error: "The water is enough warm to swim."',
      promptTranslation: 'El agua está lo bastante caliente para nadar.',
      correctAnswer: 'The water is warm enough to swim.',
      acceptedAnswers: ['The water is warm enough to swim', 'The water is warm enough to swim.', 'the water is warm enough to swim'],
      acceptApproximate: true,
      explanation: '"enough" va después del adjetivo: warm enough.',
    },
    {
      id: 'b1-m11-l5-mt4',
      type: 'translate',
      concept: 'module 11 final - however',
      difficulty: 3,
      prompt: 'Traduce: "Sin embargo, era muy caro."',
      promptTranslation: 'However, it was very expensive.',
      correctAnswer: 'However, it was very expensive.',
      acceptedAnswers: ['However, it was very expensive', 'However, it was very expensive.', 'However, it was really expensive', 'however, it was very expensive'],
      acceptApproximate: true,
      explanation: '"Sin embargo" al inicio = However, + coma.',
    },
    {
      id: 'b1-m11-l5-mt5',
      type: 'multiple_choice',
      concept: 'module 11 final - because of vs because',
      difficulty: 4,
      prompt: 'Completa: "We stayed indoors ___ the storm."',
      promptTranslation: 'Nos quedamos dentro por la tormenta.',
      correctAnswer: 'because of',
      options: ['because of', 'because', 'so that'],
      explanation: '"the storm" es un sustantivo → because of.',
    },
  ],
  reviewItems: ['b1-m11-l4'],
  prerequisites: ['b1-m11-l4'],
}
