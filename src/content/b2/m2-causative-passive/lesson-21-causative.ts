import type { Lesson } from '../../types'

export const lesson21Causative: Lesson = {
  id: 'b2-m2-l1',
  moduleId: 'm2-causative-passive',
  order: 0,
  title: 'Causative: have / get + objeto + participio/infinitivo',
  objective: 'Expresar que mandás o lográs que alguien haga algo (o que algo se haga) usando "have something done" (rol pasivo del que ordena) y "get someone to do something" (lograr que alguien haga algo).',
  explanation_es: `Ya sabés el futuro (will), el condicional (would), la pasiva simple (is built). Ahora vamos a combinar ideas: cuando querés decir que "mandás hacer algo" o "lográs que alguien haga algo", usamos estructuras causativas.

Hay DOS estructuras principales:

1. HAVE + OBJETO + PARTICIPIO PASADO ("have something done")
   Significado: mandás o pedís que alguien haga algo para vos; la acción está terminada.
   Ejemplo: "I had my hair cut" = Me cortaron el pelo (pedí el servicio, otros lo hicieron).
   La estructura es pasiva desde tu perspectiva: no vos cortaste, sino que alguien más lo hizo.

2. GET + OBJETO + TO-INFINITIVO ("get someone to do something")
   Significado: lográs, convencés o logicás que alguien haga algo.
   Ejemplo: "I got him to admit the truth" = Logré que admitiera la verdad.
   Es más activo que "have": implica esfuerzo, persuasión o manipulación para lograr que lo hagan.

Puntos importantes:

1. Con "have something done": el participio pasado NO cambia según el sujeto. "I have it done", "he has it done", "they have it done" — siempre "done", "cut", "fixed", etc.

2. "Have" vs "Get":
   - "Have" es más formal y neutro: "I had my report translated" (pedí el servicio).
   - "Get" es más informal y sugiere que convenciste o logicás activamente: "I got my friend to help me" (lo convenciste de ayudarte).

3. Con "have something done" es pasivo: otros hacen la acción, no vos. Con "get someone to do X" es más directo: especificás a la persona.

4. Los tiempos: "I have my hair cut" (presente), "I had my hair cut" (pasado), "I will have my hair cut" (futuro). El modal de "have" es el que cambia, no el participio.

5. Con "get someone to do X": si el sujeto es una persona (específica), va entre "get" y "to". Si es "something" (cosa), usamos "have": "I got him to fix it" vs "I had it fixed".

Comparación con lo que ya sabés:
- Pasiva simple: "The letter is sent" (alguien envía la carta, foco en la acción).
- Causativa "have": "I had the letter sent" (encargué que enviaran la carta, foco en que hice que pasara).
- Causativa "get": "I got someone to send the letter" (logré que alguien enviara la carta, énfasis en la persuasión).`,
  examples: [
    { english: 'I had my hair cut at the salon.', spanish: 'Me cortaron el pelo en la peluquería.', note: 'Rol pasivo: encargaste el servicio, otros lo hicieron. "Have + object + past participle".' },
    { english: 'She got her car repaired.', spanish: 'Se arregló el coche. (Ella arregló que se arreglara el coche.)', note: '"Get" es más informal que "have", pero la estructura es similar.' },
    { english: 'He got me to agree with his idea.', spanish: 'Logró que estuviera de acuerdo con su idea.', note: '"Get someone to do X" — especificás a la persona y usás infinitivo.' },
    { english: 'We had the house painted last summer.', spanish: 'Mandamos pintar la casa el verano pasado.', note: 'Pasado: had + object + past participle.' },
    { english: 'I got my sister to lend me money.', spanish: 'Logré que mi hermana me prestara dinero.', note: '"Get someone to do X" sugiere persuasión o negociación.' },
    { english: 'They had the document translated into Spanish.', spanish: 'Hicieron traducir el documento al español.', note: '"Have something done" es útil cuando encargás servicios profesionales.' },
  ],
  rule: `Fórmulas:
1. HAVE + OBJECT + PAST PARTICIPLE
   Forma: have/has/had + object + past participle
   Ejemplos: "I have my car repaired." / "She had her dress cleaned." / "They will have the room decorated."

2. GET + OBJECT + TO-INFINITIVE
   Forma: get/gets/got + object + to-infinitive
   Ejemplos: "I got him to stay." / "She got the team to practice." / "They will get us to understand."

Reglas:
1. Con "have something done": el objeto es una cosa (car, house, letter, etc.) o se omite (it = it done).
2. Con "get someone to do X": el objeto es una persona específica (him, her, the teacher, etc.), y después va to-infinitivo.
3. Tiempos: el auxiliar de "have"/"get" cambia (have/has/had, get/gets/got), pero el participio/infinitivo no.
4. Negación: "I didn't have it done" / "He couldn't get her to agree."
5. Preguntas: "Did you have it fixed?" / "Can you get him to come?"`,
  commonMistakes: [
    { wrong: '❌ I had my hair to cut.', correct: '✅ I had my hair cut.', explanation: 'Con "have something done" el verbo va en participio pasado (cut), no en to-infinitivo.' },
    { wrong: '❌ I got him fix the car.', correct: '✅ I got him to fix the car.', explanation: 'Con "get someone to do X" debe ir "to" antes del verbo. "Get him to fix", no "get him fix".' },
    { wrong: '❌ She had cut her hair.', correct: '✅ She had her hair cut.', explanation: '"Had cut" es past perfect simple (ella cortó). "Had her hair cut" es causativa (alguien le cortó el pelo).' },
    { wrong: '❌ He got the window repair.', correct: '✅ He got the window repaired. / He got someone to repair the window.', explanation: 'O usas "get + object + to-infinitivo" (con persona) o "have + object + past participle" (con cosa).' },
  ],
  vocabulary: [
    { word: 'to have something done', translation_es: 'mandar/encargar que algo se haga', level: 'B2', category: 'causative', partOfSpeech: 'phrase', example: 'I had my teeth checked.', exampleTranslation: 'Mandé que me revisaran los dientes.' },
    { word: 'to get someone to do something', translation_es: 'lograr/convencer que alguien haga algo', level: 'B2', category: 'causative', partOfSpeech: 'phrase', example: 'I got him to confess.', exampleTranslation: 'Logré que confesara.' },
    { word: 'to repaired', translation_es: 'reparado, arreglado', level: 'B2', category: 'causative', partOfSpeech: 'verb', example: 'The car was repaired.', exampleTranslation: 'El auto fue reparado.' },
    { word: 'to persuade', translation_es: 'persuadir, convencer', level: 'B2', category: 'causative', partOfSpeech: 'verb', example: 'I persuaded her to go.', exampleTranslation: 'La persuadí a ir.' },
    { word: 'to arrange', translation_es: 'arreglar, organizar', level: 'B2', category: 'causative', partOfSpeech: 'verb', example: 'I arranged for someone to call you.', exampleTranslation: 'Arreglé para que alguien te llamara.' },
    { word: 'service', translation_es: 'servicio', level: 'B2', category: 'causative', partOfSpeech: 'noun', example: 'This salon offers hair services.', exampleTranslation: 'Este salón ofrece servicios de peluquería.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-have-something-done',
      level: 'B2',
      name: 'have + object + past participle (causative)',
      explanation_es: 'Expresa que encargás que algo se haga (rol pasivo). El objeto es una cosa o se omite, y el verbo va en participio pasado.',
      formula: 'have/has/had + object + past participle',
      examples: ['I have my car repaired.', 'She had her dress cleaned.', 'They will have the house painted.'],
    },
    {
      id: 'gp-b2-get-someone-to-do',
      level: 'B2',
      name: 'get + object (person) + to-infinitive (causative)',
      explanation_es: 'Expresa que lograste o convenciste que alguien haga algo. El objeto es una persona, y después va to-infinitivo.',
      formula: 'get/gets/got + object (person) + to-infinitive',
      examples: ['I got him to stay.', 'She got the team to practice.', 'They will get us to understand.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m2-l1-ex1',
      type: 'multiple_choice',
      concept: 'have something done',
      difficulty: 3,
      prompt: 'Completa: "I ___ my teeth cleaned at the dentist\'s office."',
      promptTranslation: 'Mandé que me limpien los dientes en la consultorio del dentista.',
      correctAnswer: 'had',
      options: ['had', 'have', 'got'],
      explanation: '"I had my teeth cleaned" es la estructura "have + object + past participle" en pasado.',
    },
    {
      id: 'b2-m2-l1-ex2',
      type: 'fill_blank',
      concept: 'have something done participle',
      difficulty: 3,
      prompt: 'Completa: "She had her car ___ last week."',
      promptTranslation: 'Ella mandó que le arreglaran el coche la semana pasada.',
      correctAnswer: 'repaired',
      explanation: 'Participio pasado: repair → repaired. Estructura: have + object + past participle.',
    },
    {
      id: 'b2-m2-l1-ex3',
      type: 'multiple_choice',
      concept: 'get someone to do',
      difficulty: 3,
      prompt: 'Completa: "He got her ___ the truth."',
      promptTranslation: 'Logró que ella dijera la verdad.',
      correctAnswer: 'to tell',
      options: ['to tell', 'tell', 'told'],
      explanation: '"Get someone to do X" usa to-infinitivo. "Got her to tell".',
    },
    {
      id: 'b2-m2-l1-ex4',
      type: 'error_correction',
      concept: 'have vs get causative',
      difficulty: 4,
      prompt: 'Encuentra el error: "I got the window fix."',
      correctAnswer: 'I got someone to fix the window. / I had the window fixed.',
      acceptedAnswers: [
        'I got someone to fix the window',
        'I got someone to fix the window.',
        'I had the window fixed',
        'I had the window fixed.',
      ],
      acceptApproximate: true,
      explanation: '"Got fix" es incorrecto. Usa "get someone to fix" (con persona) o "have it fixed" (con cosa).',
    },
    {
      id: 'b2-m2-l1-ex5',
      type: 'translate',
      concept: 'causative translation',
      difficulty: 4,
      prompt: 'Traduce: "Mandé que tradujeran el documento al español."',
      correctAnswer: 'I had the document translated into Spanish.',
      acceptedAnswers: [
        'I had the document translated into Spanish',
        'I had the document translated to Spanish',
        'I had the document translated to Spanish.',
      ],
      acceptApproximate: true,
      explanation: '"Have something done": had + document + translated. "Into Spanish" es la forma correcta.',
    },
    {
      id: 'b2-m2-l1-ex6',
      type: 'reorder',
      concept: 'causative word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Logré que él admitiera la verdad.',
      words: ['I', 'got', 'him', 'to', 'admit', 'the', 'truth.'],
      correctAnswer: 'I got him to admit the truth.',
      explanation: 'Orden: I (sujeto) + got + him (persona) + to + admit (to-infinitivo) + the truth (objeto).',
    },
    {
      id: 'b2-m2-l1-ex7',
      type: 'select_correct',
      concept: 'causative tense variation',
      difficulty: 4,
      prompt: 'Elegí la opción que mejor expresa: "Mañana voy a mandar pintar mi casa."',
      correctAnswer: 'I will have my house painted.',
      options: ['I will have my house painted.', 'I will get the painters paint my house.', 'I will have painted my house.'],
      explanation: '"Will have + object + past participle" expresa una acción causativa en futuro.',
    },
    {
      id: 'b2-m2-l1-ex8',
      type: 'true_false',
      concept: 'causative meaning',
      difficulty: 2,
      prompt: '"I had my hair cut" significa que yo mismo me corté el pelo.',
      correctAnswer: 'false',
      explanation: 'Falso. Significa que mandé que me lo cortaran (fui a la peluquería). La acción la hizo otro.',
    },
    {
      id: 'b2-m2-l1-ex9',
      type: 'listening',
      concept: 'causative listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Lisa describe cómo está remodelando su casa y los servicios que ha encargado. Se usan varias estructuras "have something done".',
      listening: {
        audioText:
          "Lisa is renovating her house. Last month, she had the kitchen repainted. The walls were an ugly brown, so she had them changed to white. She also had new cabinets installed. After that, she had the floor polished. Next week, she will have the bathroom tiled. She got a contractor to design the whole project, and he has been very helpful.",
        questions: [
          {
            id: 'b2-m2-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension causative',
            difficulty: 3,
            prompt: 'What did Lisa have repainted?',
            correctAnswer: 'The kitchen',
            options: ['The kitchen', 'The walls', 'The bathroom'],
            explanation: '"She had the kitchen repainted."',
          },
          {
            id: 'b2-m2-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening causative',
            difficulty: 2,
            prompt: 'Lisa changed the walls to white herself.',
            correctAnswer: 'false',
            explanation: '"She had them changed to white" — lo hizo otra persona, no Lisa.',
          },
          {
            id: 'b2-m2-l1-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening causative future',
            difficulty: 3,
            prompt: 'What will she have done next week?',
            correctAnswer: 'The bathroom tiled',
            options: ['The bathroom tiled', 'The floor polished', 'New cabinets installed'],
            explanation: '"Next week, she will have the bathroom tiled."',
          },
        ],
      },
    },
    {
      id: 'b2-m2-l1-ex10',
      type: 'writing',
      concept: 'causative writing',
      difficulty: 4,
      prompt: 'Escribí un email informal a un amigo contándole qué servicios encargaste para tu casa/departamento y qué cambios hiciste. Usá al menos 3 estructuras "have something done" o "get someone to do something".',
      promptTranslation: 'Write an informal email to a friend about home services you arranged and changes you made.',
      correctAnswer: '',
      explanation: 'Un buen email usa al menos 3 causativas distintas de forma natural, describe qué se hizo y por qué.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Al menos 3 causativas (have something done o get someone to do)', 'Descripción de qué cambios hiciste en tu casa', 'Opinión sobre cómo quedó'],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m2-l1-ex11',
      type: 'speaking',
      concept: 'causative pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'I had my car repaired at the mechanic\'s shop.',
      explanation: 'Practicá la pronunciación de "repaired" (/rɪˈpeərd/) y la entonación natural de la causativa.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m2-l1-mt1',
      type: 'multiple_choice',
      concept: 'have something done',
      difficulty: 3,
      prompt: 'Completa: "They ___ their house painted."',
      promptTranslation: 'Ellos mandaron que pintaran su casa.',
      correctAnswer: 'had',
      options: ['had', 'have', 'will have'],
      explanation: '"Had" + object + past participle es la forma pasada de la causativa.',
    },
    {
      id: 'b2-m2-l1-mt2',
      type: 'fill_blank',
      concept: 'get someone to do',
      difficulty: 3,
      prompt: 'Completa: "I got my brother ___ me with my homework."',
      promptTranslation: 'Logré que mi hermano me ayudara con la tarea.',
      correctAnswer: 'to help',
      explanation: '"Get someone to do X" usa to-infinitivo: got + brother + to help.',
    },
    {
      id: 'b2-m2-l1-mt3',
      type: 'error_correction',
      concept: 'causative error',
      difficulty: 4,
      prompt: 'Corrige: "She had cut her hair at the salon."',
      correctAnswer: 'She had her hair cut at the salon.',
      acceptedAnswers: [
        'She had her hair cut at the salon',
        'She had her hair cut at the salon.',
      ],
      acceptApproximate: true,
      explanation: '"Had cut" es past perfect (ella cortó). "Had her hair cut" es causativa (alguien le cortó).',
    },
  ],
  reviewItems: ['b1-m3-l2', 'b2-m1-l2'],
  prerequisites: ['b2-m1-l1'],
}
