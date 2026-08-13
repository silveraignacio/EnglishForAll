import type { Lesson } from '../../types'

export const lesson34MiniTest: Lesson = {
  id: 'a2-m3-l4',
  moduleId: 'm3-past-continuous',
  order: 3,
  title: 'Mini-test: Past Continuous y narración',
  objective: 'Repasar el módulo y narrar historias usando el Past Continuous, el Past Simple y secuenciadores (first, then, after that, finally).',
  explanation_es: `Este es el repaso final del módulo de Past Continuous. Resumen de todo lo aprendido:

### 1. Forma afirmativa

was / were + verbo + -ing:

- I / He / She / It + was → "I was watching TV."
- You / We / They + were → "They were playing football."

### 2. Negativo y preguntas

- Negativo: wasn't / weren't + -ing → "I wasn't sleeping."
- Preguntas: Was/Were + sujeto + -ing? → "Were you working at 6?"
- Respuestas cortas: Yes, I was. / No, I wasn't.

### 3. Acciones interrumpidas

- Acción larga (fondo) → Past Continuous: "I was cooking..."
- Interrupción corta → Past Simple: "...when the phone rang."
- when + Past Simple; while + Past Continuous.

### 4. Narrar con secuenciadores

Para contar una historia en orden usamos conectores de secuencia:

- first = primero
- then = después / luego
- after that = después de eso
- finally = finalmente

Ejemplo: "First, I went to her house. Then, we prepared the food. After that, we watched a film. Finally, I went home."`,
  examples: [
    { english: 'I was reading a book when my phone rang.', spanish: 'Estaba leyendo un libro cuando sonó mi teléfono.', note: 'was reading (fondo) + rang (interrupción).' },
    { english: 'First, I went to her house.', spanish: 'Primero, fui a su casa.', note: 'Secuenciador: first.' },
    { english: 'Then, we prepared the food together.', spanish: 'Después, preparamos la comida juntos.', note: 'Secuenciador: then.' },
    { english: 'After that, we watched a film.', spanish: 'Después de eso, vimos una película.', note: 'Secuenciador: after that.' },
    { english: 'Finally, I went home at midnight.', spanish: 'Finalmente, fui a casa a medianoche.', note: 'Secuenciador: finally.' },
    { english: 'While she was cooking, the phone rang.', spanish: 'Mientras ella cocinaba, sonó el teléfono.', note: 'while + was cooking.' },
  ],
  rule: `1. Afirmativo: was/were + verbo -ing → was watching, were playing.
2. Negativo: wasn't/weren't + -ing → I wasn't sleeping.
3. Preguntas: Was/Were + sujeto + -ing? → Were you working?
4. Interrupción: Past Continuous (fondo) + when + Past Simple (interrupción).
5. while + Past Continuous (acción larga).
6. Secuenciadores: first (primero), then (después), after that (después de eso), finally (finalmente).`,
  commonMistakes: [
    { wrong: '❌ I was read a book when the phone rang.', correct: '✅ I was reading a book when the phone rang.', explanation: 'El Past Continuous siempre lleva -ing: was reading, no was read.' },
    { wrong: '❌ They was playing football.', correct: '✅ They were playing football.', explanation: 'Con "they" usamos "were", no "was".' },
    { wrong: '❌ Was you working at 6?', correct: '✅ Were you working at 6?', explanation: 'Con "you" la pregunta empieza con "Were".' },
  ],
  vocabulary: [
    { word: 'first', translation_es: 'primero (secuenciador)', level: 'A2', category: 'sequence markers', partOfSpeech: 'adverb', example: 'First, I went to her house.', exampleTranslation: 'Primero, fui a su casa.' },
    { word: 'then', translation_es: 'después, luego (secuenciador)', level: 'A1', category: 'sequence markers', partOfSpeech: 'adverb', example: 'Then, we prepared the food.', exampleTranslation: 'Después, preparamos la comida.' },
    { word: 'after that', translation_es: 'después de eso (secuenciador)', level: 'A2', category: 'sequence markers', partOfSpeech: 'phrase', example: 'After that, we watched a film.', exampleTranslation: 'Después de eso, vimos una película.' },
    { word: 'finally', translation_es: 'finalmente (secuenciador)', level: 'A2', category: 'sequence markers', partOfSpeech: 'adverb', example: 'Finally, I went home at midnight.', exampleTranslation: 'Finalmente, fui a casa a medianoche.' },
    { word: 'story', translation_es: 'historia', level: 'A1', category: 'narrative', partOfSpeech: 'noun', example: 'Let\'s tell a story in English.', exampleTranslation: 'Contemos una historia en inglés.' },
    { word: 'midnight', translation_es: 'medianoche', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'I went home at midnight.', exampleTranslation: 'Fui a casa a medianoche.' },
    { word: 'phone call', translation_es: 'llamada de teléfono', level: 'A2', category: 'communication', partOfSpeech: 'noun', example: 'I got a phone call while I was cooking.', exampleTranslation: 'Recibí una llamada mientras cocinaba.' },
    { word: 'tired', translation_es: 'cansado', level: 'A1', category: 'feelings', partOfSpeech: 'adjective', example: 'I was very tired after the party.', exampleTranslation: 'Estaba muy cansado después de la fiesta.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m3-review',
      level: 'A2',
      name: 'Past Continuous and narrative review',
      explanation_es: 'Repaso de was/were + -ing, negativos, preguntas, acciones interrumpidas (when/while) y secuenciadores para narrar.',
      formula: 'was/were + verb-ing | wasn\'t/weren\'t + verb-ing | Was/Were + subject + verb-ing? | ... when + Past Simple | while + Past Continuous',
      examples: ['I was watching TV.', 'I wasn\'t sleeping.', 'Were you working?', 'I was cooking when the phone rang.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m3-l4-ex1',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "He ___ watching a film."',
      promptTranslation: 'Él estaba viendo una película.',
      correctAnswer: 'was',
      options: ['was', 'were', 'is'],
      explanation: 'Con "he" usamos "was". → He was watching a film.',
    },
    {
      id: 'a2-m3-l4-ex2',
      type: 'fill_blank',
      concept: 'verb + -ing',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "They were ___ football." (play)',
      promptTranslation: 'Ellos estaban jugando al fútbol.',
      correctAnswer: 'playing',
      acceptedAnswers: ['playing', 'Playing'],
      explanation: 'play → playing. → They were playing football.',
    },
    {
      id: 'a2-m3-l4-ex3',
      type: 'multiple_choice',
      concept: 'past continuous questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ they sleeping at 10?"',
      promptTranslation: '¿Estaban ellos durmiendo a las 10?',
      correctAnswer: 'Were',
      options: ['Were', 'Was', 'Did'],
      explanation: 'Con "they" la pregunta empieza con "Were". → Were they sleeping at 10?',
    },
    {
      id: 'a2-m3-l4-ex4',
      type: 'error_correction',
      concept: 'verb + -ing',
      difficulty: 3,
      prompt: 'Corrige el error: "I was cook when you called."',
      correctAnswer: 'I was cooking when you called.',
      acceptedAnswers: ['I was cooking when you called', 'I was cooking when you called.', 'i was cooking when you called'],
      acceptApproximate: true,
      explanation: 'El Past Continuous siempre lleva -ing: was cooking, no was cook.',
    },
    {
      id: 'a2-m3-l4-ex5',
      type: 'translate',
      concept: 'interrupted actions',
      difficulty: 3,
      prompt: 'Traduce: "Estaba cocinando cuando sonó el teléfono."',
      correctAnswer: 'I was cooking when the phone rang.',
      acceptedAnswers: ['I was cooking when the phone rang', 'I was cooking when the phone rang.', 'i was cooking when the phone rang'],
      acceptApproximate: true,
      explanation: '"Estaba cocinando" = I was cooking, "cuando sonó el teléfono" = when the phone rang (ring → rang).',
    },
    {
      id: 'a2-m3-l4-ex6',
      type: 'reorder',
      concept: 'sequence markers',
      difficulty: 4,
      prompt: 'Ordena las palabras para formar una frase con secuenciador: after that / we / watched / a film / ,',
      promptTranslation: 'Después de eso, vimos una película.',
      correctAnswer: 'After that, we watched a film.',
      words: ['After that,', 'we', 'watched', 'a film'],
      explanation: 'El secuenciador "after that" va al principio, seguido del resto de la frase. → After that, we watched a film.',
    },
    {
      id: 'a2-m3-l4-ex7',
      type: 'reading',
      concept: 'past continuous narrative reading',
      difficulty: 4,
      prompt: 'Lee la historia y responde:',
      reading: {
        text: 'Last Saturday\nLast Saturday I was at home. I was reading a book when my phone rang. It was my friend Ana. She was cooking dinner and she needed help.\nFirst, I went to her house. Then, we prepared the food together. While we were cooking, we talked and laughed a lot. After that, we watched a film and we talked about our holidays.\nFinally, I went home at midnight. I was very tired, but it was a great night.',
        translation: 'El sábado pasado\nEl sábado pasado estaba en casa. Estaba leyendo un libro cuando sonó mi teléfono. Era mi amiga Ana. Estaba cocinando la cena y necesitaba ayuda.\nPrimero, fui a su casa. Después, preparamos la comida juntos. Mientras cocinábamos, hablamos y reímos mucho. Después de eso, vimos una película y hablamos de nuestras vacaciones.\nFinalmente, fui a casa a medianoche. Estaba muy cansado, pero fue una gran noche.',
        questions: [
          {
            id: 'a2-m3-l4-ex7-q1',
            type: 'multiple_choice',
            concept: 'past continuous reading',
            difficulty: 4,
            prompt: '¿Qué estaba haciendo la persona cuando sonó el teléfono?',
            correctAnswer: 'estaba leyendo un libro',
            options: ['estaba leyendo un libro', 'estaba cocinando', 'estaba viendo la tele'],
            explanation: 'El texto dice: "I was reading a book when my phone rang."',
          },
          {
            id: 'a2-m3-l4-ex7-q2',
            type: 'multiple_choice',
            concept: 'past continuous reading',
            difficulty: 4,
            prompt: '¿Qué estaba haciendo Ana cuando llamó?',
            correctAnswer: 'estaba cocinando la cena',
            options: ['estaba cocinando la cena', 'estaba leyendo', 'estaba durmiendo'],
            explanation: 'El texto dice: "She was cooking dinner and she needed help."',
          },
          {
            id: 'a2-m3-l4-ex7-q3',
            type: 'multiple_choice',
            concept: 'sequence reading',
            difficulty: 4,
            prompt: '¿Qué hicieron primero?',
            correctAnswer: 'la persona fue a la casa de Ana',
            options: ['la persona fue a la casa de Ana', 'vieron una película', 'prepararon la comida'],
            explanation: 'El texto dice: "First, I went to her house." (first = primero).',
          },
          {
            id: 'a2-m3-l4-ex7-q4',
            type: 'multiple_choice',
            concept: 'sequence reading',
            difficulty: 4,
            prompt: '¿Qué hicieron después de ver la película?',
            correctAnswer: 'hablaron de sus vacaciones',
            options: ['hablaron de sus vacaciones', 'fueron a casa', 'prepararon la comida'],
            explanation: 'El texto dice: "After that, we watched a film and we talked about our holidays." La película y hablar de vacaciones fueron juntos, después de cocinar.',
          },
          {
            id: 'a2-m3-l4-ex7-q5',
            type: 'multiple_choice',
            concept: 'sequence reading',
            difficulty: 4,
            prompt: '¿A qué hora fue la persona a casa?',
            correctAnswer: 'a medianoche',
            options: ['a medianoche', 'a las 9', 'a las 6'],
            explanation: 'El texto dice: "Finally, I went home at midnight." (finally = finalmente).',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'La historia usa Past Continuous (was reading, was cooking, were cooking) y Past Simple (rang, went, prepared, watched), con secuenciadores: first, then, after that, finally.',
    },
    {
      id: 'a2-m3-l4-ex8',
      type: 'translate',
      concept: 'sequence markers',
      difficulty: 4,
      prompt: 'Traduce: "Después de eso, vimos una película."',
      correctAnswer: 'After that, we watched a film.',
      acceptedAnswers: ['After that, we watched a film', 'After that, we watched a film.', 'after that, we watched a film'],
      acceptApproximate: true,
      explanation: '"Después de eso" = After that, "vimos" = we watched (watch → watched), "una película" = a film.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m3-l4-mt1',
      type: 'multiple_choice',
      concept: 'was / were',
      difficulty: 1,
      prompt: 'Completa: "I ___ watching TV at 8 p.m."',
      promptTranslation: 'Estaba viendo la tele a las 8 de la tarde.',
      correctAnswer: 'was',
      options: ['was', 'were', 'am'],
      explanation: 'Con "I" usamos "was". → I was watching TV at 8 p.m.',
    },
    {
      id: 'a2-m3-l4-mt2',
      type: 'fill_blank',
      concept: 'past continuous negative',
      difficulty: 2,
      prompt: 'Completa: "She ___ sleeping when I arrived." (negativo)',
      promptTranslation: 'Ella no estaba durmiendo cuando llegué.',
      correctAnswer: 'wasn\'t',
      acceptedAnswers: ['wasn\'t', 'was not', "wasn't"],
      explanation: 'La negativa con "she" es "wasn\'t" (= was not). → She wasn\'t sleeping when I arrived.',
    },
    {
      id: 'a2-m3-l4-mt3',
      type: 'multiple_choice',
      concept: 'interrupted actions',
      difficulty: 2,
      prompt: 'Completa: "I was cooking ___ the phone rang."',
      promptTranslation: 'Estaba cocinando cuando sonó el teléfono.',
      correctAnswer: 'when',
      options: ['when', 'while', 'during'],
      explanation: '"When" introduce la interrupción en Past Simple: when the phone rang.',
    },
    {
      id: 'a2-m3-l4-mt4',
      type: 'translate',
      concept: 'past continuous review',
      difficulty: 3,
      prompt: 'Traduce: "No estaba durmiendo."',
      correctAnswer: 'I wasn\'t sleeping.',
      acceptedAnswers: ['I wasn\'t sleeping', 'I wasn\'t sleeping.', 'i wasn\'t sleeping'],
      acceptApproximate: true,
      explanation: '"Yo no estaba durmiendo" = I wasn\'t sleeping (wasn\'t = was not).',
    },
    {
      id: 'a2-m3-l4-mt5',
      type: 'error_correction',
      concept: 'was / were',
      difficulty: 4,
      prompt: 'Corrige el error: "They was playing football."',
      correctAnswer: 'They were playing football.',
      acceptedAnswers: ['They were playing football', 'They were playing football.', 'they were playing football'],
      acceptApproximate: true,
      explanation: 'Con "they" (plural) usamos "were", no "was".',
    },
    {
      id: 'a2-m3-l4-mt6',
      type: 'reorder',
      concept: 'sequence markers',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: finally / I / went / home',
      promptTranslation: 'Finalmente, fui a casa.',
      correctAnswer: 'Finally, I went home.',
      words: ['Finally,', 'I', 'went', 'home'],
      explanation: 'El secuenciador "finally" va al principio. → Finally, I went home.',
    },
  ],
  reviewItems: ['a2-m3-l3'],
  prerequisites: ['a2-m3-l3'],
}
