import type { Lesson } from '../../types'

export const lesson23NarrativeTenses: Lesson = {
  id: 'b1-m2-l3',
  moduleId: 'm2-past-perfect',
  order: 2,
  title: 'Tiempos narrativos',
  objective: 'Construir narraciones coherentes combinando past simple, past continuous y past perfect con conectores de secuencia.',
  explanation_es: `Para contar una historia en inglés (narrar) combinamos tres tiempos del pasado:

1. PAST SIMPLE → las acciones principales, en orden.
   - I walked home. = Caminé a casa.

2. PAST CONTINUOUS → la acción de fondo / que estaba en progreso.
   - I was walking home. = Iba caminando a casa.

3. PAST PERFECT → la acción que ocurrió ANTES de otra.
   - I had left my keys at work. = Había dejado las llaves en el trabajo.

Una narración típica combina los tres:
- I was walking home (fondo) when I remembered (acción que interrumpe) that I had left my keys at work (acción aún anterior).
= Iba caminando a casa cuando recordé que había dejado las llaves en el trabajo.

Conectores de secuencia:
- when = cuando (introduce la interrupción)
- before = antes de
- after = después de
- by the time = para cuando

Ejemplos:
- After we had eaten, we went for a walk. = Después de que comimos, fuimos a caminar.
- By the time she arrived, the party had finished. = Para cuando ella llegó, la fiesta ya había terminado.

Regla de oro para el past perfect en narraciones:
La acción MÁS ANTIGUA va con "had + participle". La acción posterior va en past simple.
- ✅ After we had eaten (antigua), we went (posterior) for a walk.
- ❌ After we ate, we had gone for a walk. (aquí "had gone" sería la acción anterior, pero salir a pasear es lo posterior → error de orden)`,
  examples: [
    { english: 'I was walking home when I remembered that I had left my keys at work.', spanish: 'Iba caminando a casa cuando recordé que había dejado las llaves en el trabajo.', note: 'Fondo (was walking) + interrupción (remembered) + anterior (had left).' },
    { english: 'After we had eaten, we went for a walk.', spanish: 'Después de que comimos, fuimos a caminar.', note: 'Comer (had eaten) antes de salir (went).' },
    { english: 'By the time she arrived, the party had finished.', spanish: 'Para cuando ella llegó, la fiesta ya había terminado.', note: 'La fiesta terminó antes de que ella llegara.' },
    { english: 'Before I went to bed, I had finished the book.', spanish: 'Antes de irme a la cama, había terminado el libro.', note: 'Terminar el libro es anterior a acostarse.' },
    { english: 'They had already left when we arrived.', spanish: 'Ellos ya habían salido cuando llegamos.' },
    { english: 'When I opened the door, the cat had escaped.', spanish: 'Cuando abrí la puerta, el gato se había escapado.', note: 'Escaparse antes de abrir la puerta.' },
  ],
  rule: `Narrar con tres tiempos:
1. Past simple → acción principal: I walked home.
2. Past continuous → fondo en progreso: I was walking home.
3. Past perfect → acción anterior: I had left my keys.

Conectores: when, before, after, by the time.

Orden de los eventos:
- La acción MÁS ANTIGUA → past perfect (had + participle).
- La acción posterior → past simple.
- El fondo → past continuous.

After + past perfect, past simple:
- After we had eaten, we went for a walk.`,
  commonMistakes: [
    { wrong: '❌ After we ate, we had gone for a walk.', correct: '✅ After we had eaten, we went for a walk.', explanation: 'Comer es lo anterior (had eaten) y salir a pasear lo posterior (went). El past perfect marca la acción más antigua.' },
    { wrong: '❌ When I arrived, the film started already.', correct: '✅ When I arrived, the film had already started.', explanation: 'La película empezó antes de mi llegada → past perfect (had started). Con "already" suele ir past perfect.' },
    { wrong: '❌ I was walking home when I remembered that I left my keys at work.', correct: '✅ I was walking home when I remembered that I had left my keys at work.', explanation: 'Dejar las llaves ocurrió antes de recordarlo → past perfect (had left).' },
    { wrong: '❌ After we had eaten, we had gone for a walk.', correct: '✅ After we had eaten, we went for a walk.', explanation: 'No todo va en past perfect. Solo la acción anterior lleva "had"; la posterior va en past simple.' },
  ],
  vocabulary: [
    { word: 'when', translation_es: 'cuando', level: 'A2', category: 'narrative', partOfSpeech: 'conjunction', example: 'When I opened the door, he left.', exampleTranslation: 'Cuando abrí la puerta, él salió.' },
    { word: 'after', translation_es: 'después de', level: 'A2', category: 'narrative', partOfSpeech: 'conjunction/preposition', example: 'After we had eaten, we walked.', exampleTranslation: 'Después de comer, caminamos.' },
    { word: 'by the time', translation_es: 'para cuando', level: 'B1', category: 'narrative', partOfSpeech: 'phrase', example: 'By the time she arrived, it had finished.', exampleTranslation: 'Para cuando ella llegó, ya había terminado.' },
    { word: 'keys', translation_es: 'llaves', level: 'A2', category: 'objects', partOfSpeech: 'noun', example: 'I had left my keys at work.', exampleTranslation: 'Había dejado las llaves en el trabajo.' },
    { word: 'remember', translation_es: 'recordar', level: 'A2', category: 'verbs', partOfSpeech: 'verb', example: 'I remembered my keys.', exampleTranslation: 'Recordé mis llaves.' },
    { word: 'escape', translation_es: 'escaparse', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'The cat had escaped.', exampleTranslation: 'El gato se había escapado.' },
  ],
  grammarPoints: [
    {
      id: 'gp-narrative-tenses',
      level: 'B1',
      name: 'Narrative tenses',
      explanation_es: 'Para narrar combinamos past simple (acción principal), past continuous (fondo) y past perfect (acción anterior), con conectores when/before/after/by the time.',
      formula: 'Past continuous + when + past simple + past perfect (acción anterior)',
      examples: ['I was walking home when I remembered that I had left my keys.', 'After we had eaten, we went for a walk.', 'By the time she arrived, the party had finished.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m2-l3-ex1',
      type: 'multiple_choice',
      concept: 'narrative tenses',
      difficulty: 2,
      prompt: 'Completa: "After we ___ eaten, we went for a walk."',
      promptTranslation: 'Después de que comimos, fuimos a caminar.',
      correctAnswer: 'had',
      options: ['had', 'have', 'did'],
      explanation: 'Comer ocurrió antes de salir → past perfect → "had eaten". → After we had eaten, we went for a walk.',
    },
    {
      id: 'b1-m2-l3-ex2',
      type: 'multiple_choice',
      concept: 'narrative tenses',
      difficulty: 2,
      prompt: 'Completa: "By the time she arrived, the party ___ finished."',
      promptTranslation: 'Para cuando ella llegó, la fiesta ya había terminado.',
      correctAnswer: 'had',
      options: ['had', 'has', 'was'],
      explanation: 'La fiesta terminó antes de que ella llegara → past perfect → "had finished". → By the time she arrived, the party had finished.',
    },
    {
      id: 'b1-m2-l3-ex3',
      type: 'fill_blank',
      concept: 'narrative tenses',
      difficulty: 3,
      prompt: 'Completa: "I was walking home when I remembered that I ___ (leave) my keys at work."',
      promptTranslation: 'Iba caminando a casa cuando recordé que había dejado las llaves en el trabajo.',
      correctAnswer: 'had left',
      acceptedAnswers: ['had left'],
      explanation: 'Dejar las llaves es anterior al recuerdo → past perfect: had left. → I remembered that I had left my keys at work.',
    },
    {
      id: 'b1-m2-l3-ex4',
      type: 'fill_blank',
      concept: 'narrative tenses',
      difficulty: 3,
      prompt: 'Completa: "When I opened the door, the cat ___ escaped."',
      promptTranslation: 'Cuando abrí la puerta, el gato se había escapado.',
      correctAnswer: 'had',
      acceptedAnswers: ['had'],
      explanation: 'El gato se escapó antes de que yo abriera la puerta → past perfect → "had escaped".',
    },
    {
      id: 'b1-m2-l3-ex5',
      type: 'reorder',
      concept: 'narrative tenses',
      difficulty: 3,
      prompt: 'Ordena la frase (narración):',
      promptTranslation: 'Después de que comimos, fuimos a caminar.',
      words: ['After', 'we', 'had', 'eaten,', 'we', 'went', 'for', 'a', 'walk.'],
      correctAnswer: 'After we had eaten, we went for a walk.',
      explanation: 'Comer (had eaten, acción anterior) + salir (went, posterior). → After we had eaten, we went for a walk.',
    },
    {
      id: 'b1-m2-l3-ex6',
      type: 'translate',
      concept: 'narrative tenses',
      difficulty: 4,
      prompt: 'Traduce: "Para cuando ella llegó, la fiesta ya había terminado."',
      correctAnswer: 'By the time she arrived, the party had finished.',
      acceptedAnswers: [
        'By the time she arrived, the party had finished',
        'By the time she arrived, the party had finished.',
      ],
      acceptApproximate: true,
      explanation: '"Para cuando" = By the time. "ella llegó" = she arrived (past simple). "la fiesta ya había terminado" = the party had finished (past perfect).',
    },
    {
      id: 'b1-m2-l3-ex7',
      type: 'error_correction',
      concept: 'narrative tenses',
      difficulty: 4,
      prompt: 'Corrige el error de orden: "After we ate, we had gone for a walk."',
      correctAnswer: 'After we had eaten, we went for a walk.',
      acceptedAnswers: [
        'After we had eaten, we went for a walk',
        'After we had eaten, we went for a walk.',
      ],
      acceptApproximate: true,
      explanation: 'Comer es la acción anterior (had eaten) y salir a pasear la posterior (went). En la frase original el past perfect está mal colocado.',
    },
    {
      id: 'b1-m2-l3-ex8',
      type: 'match',
      concept: 'narrative sequence matching',
      difficulty: 3,
      prompt: 'Relaciona cada acción anterior (past perfect) con su acción posterior (past simple):',
      pairs: [
        { left: 'After we had eaten,', right: 'we went for a walk.' },
        { left: 'By the time she arrived,', right: 'the party had finished.' },
        { left: 'When I arrived,', right: 'the film had started.' },
        { left: 'Before I went to bed,', right: 'I had finished the book.' },
        { left: 'They had already left', right: 'when we arrived.' },
        { left: 'The cat had escaped', right: 'when I opened the door.' },
      ],
      correctAnswer: 'After we had eaten=we went for a walk, By the time she arrived=the party had finished, When I arrived=the film had started, Before I went to bed=I had finished the book, They had already left=when we arrived, The cat had escaped=when I opened the door.',
      explanation: 'En cada pareja, la acción con "had + participle" es la más antigua y la de past simple es posterior. Conectores: after, by the time, when, before.',
    },
    {
      id: 'b1-m2-l3-ex9',
      type: 'reading',
      concept: 'narrative reading',
      difficulty: 4,
      prompt: 'Lee la historia y responde las preguntas:',
      reading: {
        text: 'Last Saturday, Ana was walking to the station when she realized that she had forgotten her passport. She had left it on the kitchen table. She ran home, but by the time she arrived, the train had already left. After she had found her passport, she took a taxi. When she finally reached the airport, the plane had taken off. What a day!',
        translation: 'El sábado pasado, Ana iba caminando a la estación cuando se dio cuenta de que había olvidado su pasaporte. Lo había dejado sobre la mesa de la cocina. Corrió a casa, pero para cuando llegó, el tren ya había salido. Después de que encontró su pasaporte, tomó un taxi. Cuando finalmente llegó al aeropuerto, el avión ya había despegado. ¡Vaya día!',
        questions: [
          {
            id: 'b1-m2-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'narrative reading',
            difficulty: 4,
            prompt: '¿Dónde había dejado Ana su pasaporte?',
            correctAnswer: 'On the kitchen table.',
            options: ['In the taxi.', 'On the kitchen table.', 'At the station.'],
            explanation: 'El texto dice: "She had left it on the kitchen table."',
          },
          {
            id: 'b1-m2-l3-ex9-q2',
            type: 'multiple_choice',
            concept: 'narrative reading',
            difficulty: 4,
            prompt: 'Cuando Ana llegó a la estación, ¿qué había pasado con el tren?',
            correctAnswer: 'It had already left.',
            options: ['It had already left.', 'It was waiting for her.', 'It had not arrived yet.'],
            explanation: 'El texto dice: "By the time she arrived, the train had already left." (past perfect: el tren salió antes.)',
          },
          {
            id: 'b1-m2-l3-ex9-q3',
            type: 'multiple_choice',
            concept: 'narrative reading',
            difficulty: 4,
            prompt: '¿Qué pasó cuando Ana llegó al aeropuerto?',
            correctAnswer: 'The plane had taken off.',
            options: ['The plane was waiting.', 'The plane had taken off.', 'The plane was cancelled.'],
            explanation: 'El texto dice: "When she finally reached the airport, the plane had taken off."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'En la historia, cada "had + participle" marca la acción más antigua: olvidar, dejar, salir el tren y despegar el avión.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m2-l3-mt1',
      type: 'multiple_choice',
      concept: 'narrative tenses',
      difficulty: 2,
      prompt: 'Completa: "Before I went to bed, I ___ finished the book."',
      promptTranslation: 'Antes de irme a la cama, había terminado el libro.',
      correctAnswer: 'had',
      options: ['had', 'have', 'did'],
      explanation: 'Terminar el libro es anterior a acostarse → past perfect → "had finished".',
    },
    {
      id: 'b1-m2-l3-mt2',
      type: 'fill_blank',
      concept: 'narrative tenses',
      difficulty: 3,
      prompt: 'Completa: "They ___ already left when we arrived."',
      promptTranslation: 'Ellos ya habían salido cuando llegamos.',
      correctAnswer: 'had',
      acceptedAnswers: ['had'],
      explanation: 'Ellos salieron antes de que llegáramos → past perfect → "had already left".',
    },
    {
      id: 'b1-m2-l3-mt3',
      type: 'error_correction',
      concept: 'narrative tenses',
      difficulty: 4,
      prompt: 'Corrige el error: "I was walking home when I remembered that I left my keys at work."',
      correctAnswer: 'I was walking home when I remembered that I had left my keys at work.',
      acceptedAnswers: [
        'I was walking home when I remembered that I had left my keys at work',
        'I was walking home when I remembered that I had left my keys at work.',
      ],
      acceptApproximate: true,
      explanation: 'Dejar las llaves es anterior al recuerdo → past perfect: "had left". El past simple "left" no marca esa anterioridad.',
    },
    {
      id: 'b1-m2-l3-mt4',
      type: 'true_false',
      concept: 'narrative tenses',
      difficulty: 3,
      prompt: 'En una narración, el past perfect (had + participle) marca la acción más antigua, anterior a otra acción pasada.',
      correctAnswer: 'true',
      explanation: 'Correcto. El past perfect es el "pasado del pasado": indica qué pasó primero dentro de una historia en el pasado.',
    },
  ],
  reviewItems: ['b1-m2-l2'],
  prerequisites: ['b1-m2-l2'],
}
