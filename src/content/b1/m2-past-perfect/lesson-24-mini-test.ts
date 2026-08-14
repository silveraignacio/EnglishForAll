import type { Lesson } from '../../types'

export const lesson24MiniTest: Lesson = {
  id: 'b1-m2-l4',
  moduleId: 'm2-past-perfect',
  order: 3,
  title: 'Mini-test: Past Perfect y narración',
  objective: 'Repasar el past perfect (afirmativo, negativo, preguntas) y combinarlo con past simple y past continuous para contar historias.',
  explanation_es: `Este mini-test repasa el módulo completo del past perfect y los tiempos narrativos.

Recuerda las claves:

1. FORMA del past perfect:
   - Afirmativo: had + past participle → They had left.
   - Negativo: hadn\'t + past participle → I hadn\'t eaten.
   - Preguntas: Had + subject + past participle? → Had you seen it?
   - Respuestas cortas: Yes, I had. / No, I hadn\'t.

2. USO: para la acción MÁS ANTIGUA, anterior a otra acción en el pasado.
   - When I arrived (posterior), the film had already started (anterior).

3. TIEMPOS NARRATIVOS:
   - Past simple → acción principal.
   - Past continuous → fondo en progreso.
   - Past perfect → acción anterior.
   - Conectores: when, before, after, by the time.

4. Errores comunes:
   - ❌ had went → ✅ had gone (siempre participle).
   - ❌ Did you had seen...? → ✅ Had you seen...?
   - ❌ After we ate, we had gone... → ✅ After we had eaten, we went...

Después de los ejercicios, intenta contar una historia corta con los tiempos narrativos.`,
  examples: [
    { english: 'When we arrived at the cinema, the film had already started.', spanish: 'Cuando llegamos al cine, la película ya había empezado.' },
    { english: 'She hadn\'t visited her grandmother before that summer.', spanish: 'Ella no había visitado a su abuela antes de ese verano.' },
    { english: 'Had you ever met his brother before?', spanish: '¿Habías conocido alguna vez a su hermano?', note: 'ever = alguna vez (con preguntas de experiencia).' },
    { english: 'I was having a shower when the phone rang.', spanish: 'Estaba duchándome cuando sonó el teléfono.', note: 'past continuous de fondo + past simple de interrupción.' },
    { english: 'After they had finished dinner, they watched a film.', spanish: 'Después de terminar la cena, vieron una película.' },
  ],
  rule: `Repaso:
- Past perfect: had + past participle (acción anterior a otra en el pasado).
- Negativo: hadn\'t + participle. Preguntas: Had + subject + participle?
- Tiempos narrativos: past simple (acción), past continuous (fondo), past perfect (anterior).
- Conectores: when, before, after, by the time.

Nunca: "had went", "did you had...?", ni past perfect mal colocado en el orden de la historia.`,
  commonMistakes: [
    { wrong: '❌ The film had started when I have arrived.', correct: '✅ The film had started when I arrived.', explanation: 'Dos eventos pasados → "arrived" en past simple (no present perfect). El past perfect marca la anterioridad.' },
    { wrong: '❌ Had you saw my keys?', correct: '✅ Had you seen my keys?', explanation: 'Después de "had" usamos el participle: seen, no saw.' },
    { wrong: '❌ By the time we got there, the bus left.', correct: '✅ By the time we got there, the bus had left.', explanation: 'Con "by the time" + past simple, la otra acción anterior va en past perfect: had left.' },
    { wrong: '❌ I had finished my work and then I had gone home.', correct: '✅ I had finished my work and then I went home.', explanation: 'Solo la primera acción lleva past perfect (had finished). La siguiente va en past simple (went).' },
  ],
  vocabulary: [
    { word: 'grandmother', translation_es: 'abuela', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'She had visited her grandmother.', exampleTranslation: 'Ella había visitado a su abuela.' },
    { word: 'ever', translation_es: 'alguna vez', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: 'Had you ever met him?', exampleTranslation: '¿Lo habías conocido alguna vez?' },
    { word: 'cinema', translation_es: 'cine', level: 'A1', category: 'entertainment', partOfSpeech: 'noun', example: 'We went to the cinema.', exampleTranslation: 'Fuimos al cine.' },
    { word: 'bus', translation_es: 'autobús', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'The bus had left.', exampleTranslation: 'El autobús había salido.' },
    { word: 'story', translation_es: 'historia/cuento', level: 'A2', category: 'narrative', partOfSpeech: 'noun', example: 'She told us a story.', exampleTranslation: 'Nos contó una historia.' },
    { word: 'suddenly', translation_es: 'de repente', level: 'B1', category: 'narrative', partOfSpeech: 'adverb', example: 'Suddenly, the phone rang.', exampleTranslation: 'De repente, sonó el teléfono.' },
  ],
  grammarPoints: [
    {
      id: 'gp-past-perfect-review',
      level: 'B1',
      name: 'Past perfect & narrative tenses (review)',
      explanation_es: 'Repaso del past perfect y su combinación con past simple y past continuous para narrar historias en pasado.',
      formula: 'had + pp (anterior) | past simple (acción) | past continuous (fondo)',
      examples: ['When I arrived, the film had started.', 'I was walking home when I remembered.', 'After we had eaten, we went for a walk.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m2-l4-ex1',
      type: 'multiple_choice',
      concept: 'past perfect review',
      difficulty: 1,
      prompt: 'Completa: "When we arrived at the cinema, the film ___ already started."',
      promptTranslation: 'Cuando llegamos al cine, la película ya había empezado.',
      correctAnswer: 'had',
      options: ['had', 'has', 'will'],
      explanation: 'La película empezó antes de nuestra llegada → past perfect → "had already started".',
    },
    {
      id: 'b1-m2-l4-ex2',
      type: 'multiple_choice',
      concept: 'past perfect review',
      difficulty: 2,
      prompt: 'Completa: "She ___ visited her grandmother before that summer."',
      promptTranslation: 'Ella no había visitado a su abuela antes de ese verano.',
      correctAnswer: "hadn't",
      options: ["hadn't", "didn't", "haven't"],
      explanation: 'Negativo del past perfect → hadn\'t + participle (visited). → She hadn\'t visited her grandmother.',
    },
    {
      id: 'b1-m2-l4-ex3',
      type: 'fill_blank',
      concept: 'past perfect review',
      difficulty: 3,
      prompt: 'Completa la pregunta: "Had you ever ___ (meet) his brother before?"',
      promptTranslation: '¿Habías conocido alguna vez a su hermano?',
      correctAnswer: 'met',
      acceptedAnswers: ['met'],
      explanation: 'Después de "Had" + sujeto usamos el past participle: met (de meet). → Had you ever met his brother?',
    },
    {
      id: 'b1-m2-l4-ex4',
      type: 'fill_blank',
      concept: 'narrative review',
      difficulty: 3,
      prompt: 'Completa con past continuous: "I ___ (have) a shower when the phone rang."',
      promptTranslation: 'Estaba duchándome cuando sonó el teléfono.',
      correctAnswer: 'was having',
      acceptedAnswers: ['was having'],
      explanation: 'Fondo en progreso → past continuous: "was having". La interrupción (rang) va en past simple. → I was having a shower when the phone rang.',
    },
    {
      id: 'b1-m2-l4-ex5',
      type: 'reorder',
      concept: 'narrative review',
      difficulty: 3,
      prompt: 'Ordena la frase (narración):',
      promptTranslation: 'Después de que terminaron la cena, vieron una película.',
      words: ['After', 'they', 'had', 'finished', 'dinner,', 'they', 'watched', 'a', 'film.'],
      correctAnswer: 'After they had finished dinner, they watched a film.',
      explanation: 'Terminar la cena (had finished, anterior) + ver la película (watched, posterior). → After they had finished dinner, they watched a film.',
    },
    {
      id: 'b1-m2-l4-ex6',
      type: 'translate',
      concept: 'past perfect review',
      difficulty: 4,
      prompt: 'Traduce: "¿Habías visto esa película antes?"',
      correctAnswer: 'Had you seen that film before?',
      acceptedAnswers: [
        'Had you seen that film before',
        'Had you seen that film before?',
      ],
      acceptApproximate: true,
      explanation: 'Pregunta de past perfect: "Had" + sujeto (you) + participle (seen) + "that film before". → Had you seen that film before?',
    },
    {
      id: 'b1-m2-l4-ex7',
      type: 'error_correction',
      concept: 'past perfect review',
      difficulty: 4,
      prompt: 'Corrige el error: "By the time we got there, the bus left."',
      correctAnswer: 'By the time we got there, the bus had left.',
      acceptedAnswers: [
        'By the time we got there, the bus had left',
        'By the time we got there, the bus had left.',
      ],
      acceptApproximate: true,
      explanation: 'Con "by the time" + past simple (got), la otra acción anterior va en past perfect (had left).',
    },
    {
      id: 'b1-m2-l4-ex8',
      type: 'reading',
      concept: 'narrative reading',
      difficulty: 4,
      prompt: 'Lee la historia y responde:',
      reading: {
        text: 'Carlos was driving to the airport when he suddenly remembered that he had left the oven on. He had cooked lunch that morning and had forgotten to switch it off. He turned the car around, but by the time he got home, the firemen had already arrived. They had entered the house through a window. Fortunately, the fire was small, and after they had put it out, Carlos thanked them and went to the airport for the next flight.',
        translation: 'Carlos iba conduciendo al aeropuerto cuando de repente recordó que había dejado el horno encendido. Había cocinado el almuerzo esa mañana y había olvidado apagarlo. Dio la vuelta con el coche, pero para cuando llegó a casa, los bomberos ya habían llegado. Habían entrado a la casa por una ventana. Afortunadamente, el fuego era pequeño, y después de apagarlo, Carlos les dio las gracias y fue al aeropuerto para el siguiente vuelo.',
        questions: [
          {
            id: 'b1-m2-l4-ex8-q1',
            type: 'multiple_choice',
            concept: 'narrative reading',
            difficulty: 4,
            prompt: '¿Qué había dejado Carlos encendido?',
            correctAnswer: 'The oven.',
            options: ['The oven.', 'The lights.', 'The TV.'],
            explanation: 'El texto dice: "he had left the oven on."',
          },
          {
            id: 'b1-m2-l4-ex8-q2',
            type: 'multiple_choice',
            concept: 'narrative reading',
            difficulty: 4,
            prompt: 'Cuando Carlos llegó a casa, ¿qué había pasado?',
            correctAnswer: 'The firemen had already arrived.',
            options: ['The house had burned down.', 'The firemen had already arrived.', 'The oven was still on and hot.'],
            explanation: 'El texto dice: "By the time he got home, the firemen had already arrived."',
          },
          {
            id: 'b1-m2-l4-ex8-q3',
            type: 'multiple_choice',
            concept: 'narrative reading',
            difficulty: 4,
            prompt: '¿Cómo entraron los bomberos a la casa?',
            correctAnswer: 'Through a window.',
            options: ['Through a window.', 'Through the door.', 'Through the roof.'],
            explanation: 'El texto dice: "They had entered the house through a window."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'En esta historia, todas las acciones anteriores usan past perfect: had left, had cooked, had forgotten, had arrived, had entered, had put out.',
    },
    {
      id: 'b1-m2-l4-ex9',
      type: 'sentence_building',
      concept: 'narrative review',
      difficulty: 4,
      prompt: 'Construye la frase narrativa con estas palabras:',
      promptTranslation: 'Iba caminando a casa cuando recordé que había dejado las llaves.',
      words: ['I', 'was', 'walking', 'home', 'when', 'I', 'remembered', 'that', 'I', 'had', 'left', 'my', 'keys.'],
      correctAnswer: 'I was walking home when I remembered that I had left my keys.',
      explanation: 'Fondo (was walking) + when + interrupción (remembered) + que + acción anterior (had left). → I was walking home when I remembered that I had left my keys.',
    },
    {
      id: 'b1-m2-l4-ex10',
      type: 'true_false',
      concept: 'past perfect review',
      difficulty: 3,
      prompt: 'Para hacer preguntas de past perfect usamos "Did + subject + had...?"',
      correctAnswer: 'false',
      explanation: 'Falso. Las preguntas de past perfect usan solo "Had + subject + past participle?". "Did" es del past simple y nunca se combina con "had".',
    },
    {
      id: 'b1-m2-l4-ex11',
      type: 'listening',
      concept: 'past perfect and narrative review listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Una historia completa que repasa los tiempos narrativos: una situación de fondo (past continuous), una interrupción (past simple), y acciones anteriores (past perfect).',
      listening: {
        audioText:
          "Lisa was working late at the office when the alarm suddenly rang. She had stayed there longer than usual because she had wanted to finish an important project. Her boss had asked her to complete it before the weekend. When the security guard arrived, he told her that the alarm had malfunctioned and that she could leave. As she was driving home, she realized that she had forgotten her bag at work. She hadn\'t noticed it because she was in a hurry. She decided to go back the next morning.",
        questions: [
          {
            id: 'b1-m2-l4-ex11-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Why had Lisa stayed late at the office?',
            correctAnswer: 'To finish an important project',
            options: ['To finish an important project', 'To attend a meeting', 'To help the security guard'],
            explanation: '"She had wanted to finish an important project."',
          },
          {
            id: 'b1-m2-l4-ex11-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The boss had asked her to complete the project after the weekend.',
            correctAnswer: 'false',
            explanation: '"Her boss had asked her to complete it before the weekend."',
          },
          {
            id: 'b1-m2-l4-ex11-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'What did Lisa realize while driving home?',
            correctAnswer: 'She had forgotten her bag at work',
            options: ['She had forgotten her bag at work', 'The alarm was real', 'She needed to call her boss'],
            explanation: '"She realized that she had forgotten her bag at work."',
          },
        ],
      },
    },
    {
      id: 'b1-m2-l4-ex12',
      type: 'writing',
      concept: 'past perfect and narrative review writing',
      difficulty: 4,
      prompt: 'Escribí una historia personal (100-150 palabras) sobre una situación en la que algo salió mal. Usá el past perfect para explicar qué había pasado antes, past continuous para la situación de fondo, y past simple para los eventos principales.',
      promptTranslation: 'Write a personal story about a situation where something went wrong using all narrative tenses.',
      correctAnswer: '',
      explanation: 'Una buena historia integra los tres tiempos: past perfect (causa anterior), past continuous (contexto/fondo), y past simple (eventos principales). Debe tener coherencia narrativa clara.',
      taskType: 'story',
      targetReader: 'your teacher',
      register: 'neutral',
      contentPoints: ['Una situación que salió mal', 'Por qué pasó (qué había sucedido antes)', 'Cómo se resolvió'],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b1-m2-l4-ex13',
      type: 'speaking',
      concept: 'past perfect and narrative review pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'She was waiting at the station when she realized that she had left her ticket at home.',
      explanation: 'Practicá los tres tiempos con énfasis en las transiciones: "waiting" (presente de la acción de fondo), "realized" (momento de la interrupción), "had left" (retrospectiva con énfasis en "had").',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m2-l4-mt1',
      type: 'multiple_choice',
      concept: 'past perfect review',
      difficulty: 2,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Cuando llegué, ellos ya habían salido.',
      correctAnswer: 'When I arrived, they had already left.',
      options: [
        'When I arrived, they had already left.',
        'When I arrived, they have already left.',
        'When I arrived, they already left.',
      ],
      explanation: 'Salir es anterior a llegar → past perfect (had already left). "Have left" es presente perfecto y "already left" sin had no marca la anterioridad.',
    },
    {
      id: 'b1-m2-l4-mt2',
      type: 'fill_blank',
      concept: 'past perfect review',
      difficulty: 3,
      prompt: 'Completa: "Had she ___ (do) the shopping?"',
      promptTranslation: '¿Había hecho ella la compra?',
      correctAnswer: 'done',
      acceptedAnswers: ['done'],
      explanation: '"Do" es irregular: do → did → done. El participle es "done". → Had she done the shopping?',
    },
    {
      id: 'b1-m2-l4-mt3',
      type: 'translate',
      concept: 'narrative review',
      difficulty: 4,
      prompt: 'Traduce: "Después de que comimos, fuimos a caminar."',
      correctAnswer: 'After we had eaten, we went for a walk.',
      acceptedAnswers: [
        'After we had eaten, we went for a walk',
        'After we had eaten, we went for a walk.',
      ],
      acceptApproximate: true,
      explanation: 'Comer (had eaten, anterior) + salir a caminar (went, posterior). → After we had eaten, we went for a walk.',
    },
    {
      id: 'b1-m2-l4-mt4',
      type: 'error_correction',
      concept: 'past perfect review',
      difficulty: 4,
      prompt: 'Corrige el error: "I had went to the shop."',
      correctAnswer: 'I had gone to the shop.',
      acceptedAnswers: ['I had gone to the shop', 'I had gone to the shop.'],
      acceptApproximate: true,
      explanation: 'El past participle de "go" es "gone", no "went". Con "had" usamos siempre el participle: had gone.',
    },
    {
      id: 'b1-m2-l4-mt5',
      type: 'match',
      concept: 'narrative sequence matching',
      difficulty: 3,
      prompt: 'Relaciona cada acción anterior con su consecuencia posterior:',
      pairs: [
        { left: 'The film had already started', right: 'when we arrived at the cinema.' },
        { left: 'After they had finished dinner,', right: 'they watched a film.' },
        { left: 'By the time she arrived,', right: 'the party had finished.' },
        { left: 'I was having a shower', right: 'when the phone rang.' },
        { left: 'Before I left,', right: 'I had turned off the lights.' },
        { left: 'They had already eaten', right: 'when we called them.' },
      ],
      correctAnswer: 'The film had already started=when we arrived, After they had finished dinner=they watched a film, By the time she arrived=the party had finished, I was having a shower=when the phone rang, Before I left=I had turned off the lights, They had already eaten=when we called them.',
      explanation: 'Las acciones con "had + participle" son anteriores; las de past simple/past continuous son posteriores o de fondo. Los conectores marcan la secuencia.',
    },
  ],
  reviewItems: ['b1-m2-l3'],
  prerequisites: ['b1-m2-l3'],
}
