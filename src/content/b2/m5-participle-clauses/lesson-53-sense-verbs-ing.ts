import type { Lesson } from '../../types'

export const lesson53SenseVerbsIng: Lesson = {
  id: 'b2-m5-l3',
  moduleId: 'm5-participle-clauses',
  order: 2,
  title: 'Verbos de percepción + -ing: "I saw him crossing"',
  objective: 'Usar verbos de sentidos (see, hear, watch, observe) + objeto + -ing para describir acciones vistas u oídas en progreso.',
  explanation_es: `Los verbos de PERCEPCIÓN o SENTIDOS (see, watch, hear, listen to, notice, observe, find) pueden ir seguidos de:

1. OBJETO + -ing (acción en progreso)
2. OBJETO + infinitivo sin "to" (acción completa)

OBJETO + -ing (en progreso):
- "I saw him crossing the street." = Lo vi (mientras estaba) cruzando la calle. (La acción estaba en progreso cuando la ví.)
- "She heard the door closing." = Oyó la puerta (mientras se estaba) cerrando.
- "We watched the sun setting." = Observamos la puesta de sol.

OBJETO + infinitivo sin "to" (acción completa):
- "I saw him cross the street." = Lo vi cruzar la calle. (Vi la acción de principio a fin.)
- "She heard the door close." = Oyó la puerta cerrarse. (La acción se completó.)

Diferencia importante:

-ing = la acción ESTÁ EN CURSO cuando la ves/oyes/observas. Es una foto de un momento en el proceso.
Infinitivo sin "to" = la acción se COMPLETÓ o se hizo DE PRINCIPIO A FIN. Es la acción total.

Ejemplos:
- "I watched the children playing in the park." (Estaban jugando, yo los veía jugar.)
- "I watched the children play a game." (Miraron todo el juego, de principio a fin.)

Verbos comunes de percepción:
- see (ver)
- watch (observar, mirar)
- hear (oír)
- listen to (escuchar)
- notice (notar)
- observe (observar)
- find (encontrar)
- catch (atrapar, ver)

Puntos importantes:

1. "Watch" + -ing es muy común: "watching someone doing something" = mirando a alguien hacer algo.

2. Con "hear" y "listen to", usas -ing para describir sonidos: "I heard him singing" = Lo oí cantando.

3. "Catch" en el sentido de "sorprender" va con -ing: "I caught him stealing cookies." = Lo atrapé robando galletas.

4. La diferencia entre -ing e infinitivo SÍ es importante en contextos donde el significado cambia mucho. Pero en muchos casos, ambas formas son posibles.

5. "Find" también puede ir con -ing: "We found them playing video games." = Los encontramos jugando videojuegos.`,
  examples: [
    { english: 'I saw him crossing the street.', spanish: 'Lo vi cruzando la calle.' },
    { english: 'She heard the door closing.', spanish: 'Oyó la puerta cerrándose.' },
    { english: 'We watched the children playing in the park.', spanish: 'Miramos a los niños jugando en el parque.' },
    { english: 'I noticed her leaving the building.', spanish: 'Noté que se iba del edificio.' },
    { english: 'They caught him stealing the money.', spanish: 'Lo atraparon robando el dinero.' },
    { english: 'I observed the birds flying south.', spanish: 'Observé a los pájaros volando hacia el sur.' },
  ],
  rule: `Fórmula:
Perception verb + object + -ing clause

Ver en progreso: subject + see/watch/hear/observe + object + -ing verb
Ejemplos:
- I saw him crossing the street.
- She heard the door closing.
- We watched the sun setting.
- They noticed her leaving.

Estructura:
Perception verb + object + -ing = acción EN PROGRESO (moment in action)
Perception verb + object + infinitive without "to" = acción COMPLETA (full action)

Ambas son correctas, pero -ing es más común en B2 para enfatizar que estabas viendo/oyendo algo en curso.`,
  formation: {
    title: 'Cómo se forma el verbo de percepción + objeto + -ing / verbo base',
    intro: 'Los verbos de percepción (see, watch, hear, notice, observe, find, catch) van seguidos de objeto + -ing para una acción en progreso, u objeto + verbo base para una acción completa.',
    patterns: [
      {
        name: 'Acción en progreso — objeto + -ing',
        formula: 'Verbo de percepción + objeto + verbo en -ing',
        examples: [
          { english: 'I saw him crossing the street.', spanish: 'Lo vi cruzando la calle.' },
          { english: 'We watched the sun setting over the ocean.', spanish: 'Observamos la puesta de sol sobre el océano.' },
        ],
        note: 'El -ing enfatiza que la acción estaba en curso cuando la viste u oíste.',
      },
      {
        name: 'Acción completa — objeto + verbo base (sin to)',
        formula: 'Verbo de percepción + objeto + verbo base',
        examples: [
          { english: 'I saw him cross the street and enter the building.', spanish: 'Lo vi cruzar la calle y entrar al edificio.' },
          { english: 'She heard the door close behind her.', spanish: 'Oyó la puerta cerrarse detrás de ella.' },
        ],
        note: 'El verbo base expresa la acción vista de principio a fin.',
      },
      {
        name: 'Catch / find + objeto + -ing',
        formula: 'Catch / find + objeto + verbo en -ing',
        examples: [
          { english: 'I caught him stealing money from the drawer.', spanish: 'Lo atrapé robando dinero del cajón.' },
          { english: 'We found them playing video games in the basement.', spanish: 'Los encontramos jugando videojuegos en el sótano.' },
        ],
        note: '"Catch" en el sentido de sorprender siempre va con -ing.',
      },
    ],
    notes: [
      'Nunca se usa infinitivo con "to" después de percepción + objeto ("I saw him to cross" es incorrecto).',
      'Con "hear" y "listen to", el -ing describe sonidos en curso: "I heard him singing".',
      'La diferencia -ing vs. verbo base es sutil pero real: -ing = en progreso, verbo base = completa.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I saw him to cross the street.', correct: '✅ I saw him cross the street. / I saw him crossing the street.', explanation: 'No usamos infinitivo CON "to" después de percepción + objeto. Es "see + object + infinitivo sin to" o "see + object + -ing".' },
    { wrong: '❌ She heard the door to close.', correct: '✅ She heard the door close. / She heard the door closing.', explanation: 'Mismo error: "heard + object + infinitivo sin to" o "heard + object + -ing".' },
    { wrong: '❌ I watched him to play football.', correct: '✅ I watched him play football. / I watched him playing football.', explanation: 'Después de verbos de percepción + objeto, NO usamos "to".' },
    { wrong: '❌ I caught her stealing cookies and she ran.', correct: '✅ I caught her stealing cookies, and she ran.', explanation: 'Usa coma para separar las dos cláusulas independientes.' },
  ],
  vocabulary: [
    { word: 'to perceive', translation_es: 'percibir', level: 'B2', category: 'senses', partOfSpeech: 'verb', example: 'I perceived a faint sound in the distance.', exampleTranslation: 'Percibí un sonido débil a lo lejos.' },
    { word: 'perception', translation_es: 'percepción', level: 'B2', category: 'senses', partOfSpeech: 'noun', example: 'Perception is how we sense the world.', exampleTranslation: 'La percepción es cómo sentimos el mundo.' },
    { word: 'to observe', translation_es: 'observar', level: 'B2', category: 'senses', partOfSpeech: 'verb', example: 'The scientists observed the birds migrating.', exampleTranslation: 'Los científicos observaron a los pájaros migrando.' },
    { word: 'to catch (someone doing)', translation_es: 'atrapar (a alguien haciendo)', level: 'B2', category: 'senses', partOfSpeech: 'verb', example: 'I caught him stealing from the store.', exampleTranslation: 'Lo atrapé robando de la tienda.' },
    { word: 'fleeting', translation_es: 'fugaz, breve', level: 'B2', category: 'vocabulary', partOfSpeech: 'adjective', example: 'A fleeting moment of joy.', exampleTranslation: 'Un momento fugaz de alegría.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-perception-ing',
      level: 'B2',
      name: 'Perception verbs + object + -ing',
      explanation_es: 'Usar -ing después de verbos de percepción para describir una acción viendo/oyendo en progreso.',
      formula: 'Perception verb + object + -ing verb',
      examples: ['I saw him crossing.', 'She heard the door closing.', 'We watched the children playing.'],
    },
    {
      id: 'gp-b2-perception-bare-infinitive',
      level: 'B2',
      name: 'Perception verbs + object + bare infinitive',
      explanation_es: 'Usar infinitivo sin "to" para describir una acción viendo/oyendo de principio a fin (menos común que -ing).',
      formula: 'Perception verb + object + bare infinitive',
      examples: ['I saw him cross the street.', 'She heard the door close.', 'We watched them play.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m5-l3-ex1',
      type: 'multiple_choice',
      concept: 'perception + -ing',
      difficulty: 2,
      prompt: 'Completa: "I saw him ___ the building."',
      promptTranslation: 'Lo vi saliendo del edificio.',
      correctAnswer: 'leaving',
      options: ['leave', 'leaving', 'to leave', 'left'],
      explanation: 'Percepción + objeto + -ing: "saw him leaving" (lo ví mientras salía).',
    },
    {
      id: 'b2-m5-l3-ex2',
      type: 'fill_blank',
      concept: 'hear + -ing',
      difficulty: 2,
      prompt: 'Completa: "She heard the dog ___ outside."',
      promptTranslation: 'Oyó al perro ladrando afuera.',
      correctAnswer: 'barking',
      explanation: '"heard + objeto + -ing": "heard the dog barking".',
    },
    {
      id: 'b2-m5-l3-ex3',
      type: 'error_correction',
      concept: 'no "to" after perception',
      difficulty: 3,
      prompt: 'Encuentra el error: "I watched her to dance at the party."',
      correctAnswer: 'I watched her dance at the party. / I watched her dancing at the party.',
      acceptedAnswers: [
        'I watched her dance at the party',
        'I watched her dancing at the party',
        'I watched her dance at the party.',
        'I watched her dancing at the party.',
      ],
      acceptApproximate: true,
      explanation: 'NO usamos "to" después de percepción + objeto. Es "watched her dance" o "watched her dancing".',
    },
    {
      id: 'b2-m5-l3-ex4',
      type: 'translate',
      concept: 'perception translation',
      difficulty: 3,
      prompt: 'Traduce: "Observamos a los pájaros volando hacia el sur."',
      correctAnswer: 'We observed the birds flying south.',
      acceptedAnswers: [
        'We observed the birds flying south',
        'We observed the birds flying south.',
        'We watched the birds fly south.',
      ],
      acceptApproximate: true,
      explanation: 'Percepción + objeto + -ing: "observed the birds flying".',
    },
    {
      id: 'b2-m5-l3-ex5',
      type: 'reorder',
      concept: 'perception word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Lo atrapé robando dinero.',
      words: ['I', 'caught', 'him', 'stealing', 'money.'],
      correctAnswer: 'I caught him stealing money.',
      explanation: 'Orden: sujeto + percepción + objeto + -ing verb + resto.',
    },
    {
      id: 'b2-m5-l3-ex6',
      type: 'select_correct',
      concept: 'perception -ing vs bare infinitive',
      difficulty: 4,
      prompt: '¿Cuál es correcta?',
      correctAnswer: 'I watched him cross the street. / I watched him crossing the street.',
      options: ['I watched him cross the street. / I watched him crossing the street.', 'I watched him to cross the street.', 'I watched him crosses the street.'],
      explanation: 'Ambas formas (bare infinitive y -ing) son correctas. "To cross" es incorrecto.',
    },
    {
      id: 'b2-m5-l3-ex7',
      type: 'multiple_choice',
      concept: 'catch + stealing',
      difficulty: 3,
      prompt: 'Completa: "I caught her ___ the money from the drawer."',
      promptTranslation: 'La atrapé robando dinero del cajón.',
      correctAnswer: 'stealing',
      options: ['steal', 'stealing', 'to steal', 'stole'],
      explanation: '"Catch + object + -ing": "caught her stealing".',
    },
    {
      id: 'b2-m5-l3-ex8',
      type: 'true_false',
      concept: 'perception same subject',
      difficulty: 2,
      prompt: 'Después de un verbo de percepción, el sujeto de la -ing clause y el de la oración principal deben ser diferentes (porque el objeto es diferente).',
      correctAnswer: 'true',
      explanation: 'Correcto. "I saw HIM crossing" — YO veo, ÉL cruza. Sujetos diferentes.',
    },
    {
      id: 'b2-m5-l3-ex9',
      type: 'listening',
      concept: 'perception listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Una descripción de cosas que alguien vio u oyó durante el día.',
      listening: {
        audioText:
          "Today was interesting. In the morning, I saw the mailman delivering letters to the houses on my street. At the park, I noticed some teenagers playing basketball. Then I heard someone calling my name from across the road. I turned and saw my friend Sarah running towards me. Later, I observed some construction workers building a new fence. Finally, I caught my cat stealing food from the dog's bowl and chased her away laughing.",
        audioUrl: '/audio/tts/b2-m5-l3-ex9.mp3',
        questions: [
          {
            id: 'b2-m5-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'What was the mailman doing?',
            correctAnswer: 'Delivering letters',
            options: ['Delivering letters', 'Repairing a fence', 'Playing basketball'],
            explanation: '"I saw the mailman delivering letters to the houses."',
          },
          {
            id: 'b2-m5-l3-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The narrator heard Sarah calling his name.',
            correctAnswer: 'true',
            explanation: '"I heard someone calling my name from across the road... I saw my friend Sarah running towards me."',
          },
          {
            id: 'b2-m5-l3-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the narrator catch his cat doing?',
            correctAnswer: 'Stealing food from the dog\'s bowl',
            options: ['Playing basketball', 'Stealing food from the dog\'s bowl', 'Building a fence'],
            explanation: '"I caught my cat stealing food from the dog\'s bowl."',
          },
        ],
      },
    },
    {
      id: 'b2-m5-l3-ex10',
      type: 'writing',
      concept: 'perception writing',
      difficulty: 4,
      prompt: 'Escribí un breve relato (100-150 palabras) sobre algo que observaste o viste hacer a otras personas en el último tiempo. Usá al menos 3 verbos de percepción diferentes (saw, heard, noticed, watched, etc.) seguidos de -ing. Ejemplo: "I saw the children playing...", "I heard someone singing...", etc.',
      correctAnswer: '',
      explanation: 'Un buen relato usa naturalmente verbos de percepción para describir observaciones de forma vívida.',
      taskType: 'story',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Al menos 3 verbos de percepción distintos con -ing', 'Descripción clara de lo que viste/oíste', 'Voz narrativa coherente'],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m5-l3-ex11',
      type: 'speaking',
      concept: 'perception pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'I saw him crossing the street.',
      explanation: 'Practicá la fluidez: "saw him crossing" debe sonar natural, sin pausas entre los elementos.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m5-l3-mt1',
      type: 'multiple_choice',
      concept: 'perception + -ing',
      difficulty: 2,
      prompt: 'Completa: "She watched the sunset ___."',
      promptTranslation: 'Miró la puesta de sol.',
      correctAnswer: 'setting',
      options: ['set', 'setting', 'to set', 'sets'],
      explanation: '"watched the sunset setting" o "watched the sun set" — ambas son correctas, pero "setting" es más natural aquí.',
    },
    {
      id: 'b2-m5-l3-mt2',
      type: 'error_correction',
      concept: 'hear + -ing',
      difficulty: 3,
      prompt: 'Corrige: "We heard the music playing loudly from next door."',
      correctAnswer: 'We heard the music playing loudly from next door.',
      acceptedAnswers: [
        'We heard the music playing loudly from next door',
        'We heard the music playing loudly from next door.',
        'We heard the music play loudly from next door.',
      ],
      acceptApproximate: true,
      explanation: 'La oración está correcta tal como está. "Heard the music playing" es perfecto.',
    },
    {
      id: 'b2-m5-l3-mt3',
      type: 'true_false',
      concept: 'perception bare infinitive',
      difficulty: 3,
      prompt: '"I watched him cross the street" y "I watched him crossing the street" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. La primera (bare infinitive) enfatiza la acción completa. La segunda (-ing) enfatiza que estaba en progreso. Pero en la práctica, ambas son muy similares.',
    },
  ],
  reviewItems: ['b2-m5-l1', 'b2-m5-l2'],
  prerequisites: ['b2-m5-l2'],
}
