import type { Lesson } from '../../types'

export const lesson124PhrasalVerbs: Lesson = {
  id: 'a2-m12-l4',
  moduleId: 'm12-gerunds-infinitives',
  order: 3,
  title: 'Phrasal verbs comunes (get up, turn off, look for...)',
  objective: 'Aprender y usar phrasal verbs frecuentes: get up, wake up, turn on/off, put on, take off, look for, look after, give up, find out, turn down.',
  explanation_es: `Un "phrasal verb" es un verbo que se combina con una partícula (up, on, off, for, after...) y que, juntos, tienen un significado especial. No se traducen palabra por palabra.

Phrasal verbs muy útiles en A2:
- get up = levantarse (de la cama): I get up at 7. = Me levanto a las 7.
- wake up = despertarse: I wake up at 6:30. = Me despierto a las 6:30.
- turn on = encender: Turn on the TV. = Enciende la tele.
- turn off = apagar: Turn off the lights. = Apaga las luces.
- put on = ponerse (ropa): Put on your coat. = Ponte el abrigo.
- take off = quitarse (ropa) / despegar (avión): Take off your shoes. = Quítate los zapatos.
- look for = buscar: I\'m looking for my keys. = Estoy buscando mis llaves.
- look after = cuidar de: She looks after her little brother. = Ella cuida de su hermano pequeño.
- give up = rendirse / dejar de hacer algo: Don\'t give up! = ¡No te rindas!
- find out = descubrir, enterarse: I need to find out the truth. = Necesito descubrir la verdad.
- turn down = bajar (volumen): Turn down the music. = Baja la música.

¡OJO con los pronombres! Cuando usamos un pronombre (it, them, me...) con un phrasal verb separable, el pronombre va ENTRE el verbo y la partícula:
- ❌ Please turn off it.
- ✅ Please turn it off.

Diferencia: "look for" (buscar) vs "look at" (mirar). Son significados diferentes.`,
  examples: [
    { english: 'Please turn off the lights.', spanish: 'Por favor, apaga las luces.' },
    { english: "I'm looking for my keys.", spanish: 'Estoy buscando mis llaves.' },
    { english: 'She looks after her little brother.', spanish: 'Ella cuida de su hermano pequeño.' },
    { english: "Don't give up!", spanish: '¡No te rindas!' },
    { english: "Could you turn it down, please?", spanish: '¿Podrías bajarlo (el volumen), por favor?', note: 'con pronombre: turn it down' },
    { english: 'I wake up at six every day.', spanish: 'Me despierto a las seis todos los días.' },
  ],
  rule: `Regla:
- Un phrasal verb = verbo + partícula con significado especial (get up = levantarse).
- Con pronombres (it, them, me...), el pronombre va ENTRE verbo y partícula: turn it off, put it on, take them off.
- Con sustantivos, ambas posiciones son válidas: turn off the lights = turn the lights off.

Ojo: look for (buscar) ≠ look at (mirar).`,
  commonMistakes: [
    { wrong: '❌ Please turn off it.', correct: '✅ Please turn it off.', explanation: 'Con pronombres (it, them...), el pronombre va entre el verbo y la partícula: turn it off.' },
    { wrong: '❌ I\'m looking at my keys (queriendo decir "busco mis llaves").', correct: '✅ I\'m looking for my keys.', explanation: '"Look for" = buscar. "Look at" = mirar. Son significados diferentes.' },
    { wrong: '❌ She looks after her little brother → "busca a su hermano".', correct: '✅ She looks after her little brother → "cuida de su hermano".', explanation: '"Look after" significa cuidar de alguien, no "mirar" ni "buscar".' },
  ],
  vocabulary: [
    { word: 'get up', translation_es: 'levantarse', level: 'A1', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'I get up at seven.', exampleTranslation: 'Me levanto a las siete.' },
    { word: 'wake up', translation_es: 'despertarse', level: 'A1', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'I wake up early.', exampleTranslation: 'Me despierto temprano.' },
    { word: 'turn on', translation_es: 'encender', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'Turn on the TV.', exampleTranslation: 'Enciende la tele.' },
    { word: 'turn off', translation_es: 'apagar', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'Turn off the lights.', exampleTranslation: 'Apaga las luces.' },
    { word: 'put on', translation_es: 'ponerse (ropa)', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'Put on your coat.', exampleTranslation: 'Ponte el abrigo.' },
    { word: 'take off', translation_es: 'quitarse (ropa), despegar', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'Take off your shoes.', exampleTranslation: 'Quítate los zapatos.' },
    { word: 'look for', translation_es: 'buscar', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: "I'm looking for my keys.", exampleTranslation: 'Estoy buscando mis llaves.' },
    { word: 'look after', translation_es: 'cuidar de', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'She looks after her little brother.', exampleTranslation: 'Ella cuida de su hermano pequeño.' },
    { word: 'give up', translation_es: 'rendirse, dejar de hacer algo', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: "Don't give up!", exampleTranslation: '¡No te rindas!' },
    { word: 'find out', translation_es: 'descubrir, enterarse', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'I need to find out the answer.', exampleTranslation: 'Necesito descubrir la respuesta.' },
    { word: 'turn down', translation_es: 'bajar (el volumen)', level: 'A2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'Turn down the music.', exampleTranslation: 'Baja la música.' },
  ],
  grammarPoints: [
    {
      id: 'gp-phrasal-verbs',
      level: 'A2',
      name: 'Common phrasal verbs',
      explanation_es: 'Los phrasal verbs combinan verbo + partícula con un significado especial. Con pronombres, el pronombre va entre el verbo y la partícula.',
      formula: 'verb + particle | verb + pronoun + particle',
      examples: ['Turn off the lights.', "I'm looking for my keys.", 'Please turn it off.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m12-l4-ex1',
      type: 'multiple_choice',
      concept: 'phrasal verbs',
      difficulty: 1,
      prompt: 'Completa: "Please ___ the lights."',
      promptTranslation: 'Por favor, apaga las luces.',
      correctAnswer: 'turn off',
      options: ['turn off', 'turn on', 'turn up'],
      explanation: '"Turn off" = apagar. → Please turn off the lights.',
    },
    {
      id: 'a2-m12-l4-ex2',
      type: 'fill_blank',
      concept: 'phrasal verbs',
      difficulty: 2,
      prompt: "Completa: \"I'm ___ for my keys.\"",
      promptTranslation: 'Estoy buscando mis llaves.',
      correctAnswer: 'looking',
      acceptedAnswers: ['looking', 'Looking'],
      explanation: '"Look for" = buscar. → I\'m looking for my keys.',
    },
    {
      id: 'a2-m12-l4-ex3',
      type: 'multiple_choice',
      concept: 'phrasal verbs',
      difficulty: 2,
      prompt: 'Completa: "She ___ after her little brother."',
      promptTranslation: 'Ella cuida de su hermano pequeño.',
      correctAnswer: 'looks',
      options: ['looks', 'looks at', 'looks up'],
      explanation: '"Look after" = cuidar de. → She looks after her little brother.',
    },
    {
      id: 'a2-m12-l4-ex4',
      type: 'fill_blank',
      concept: 'phrasal verbs',
      difficulty: 2,
      prompt: "Completa: \"Don't ___ up! You can do it.\"",
      promptTranslation: '¡No te rindas! Puedes hacerlo.',
      correctAnswer: 'give',
      acceptedAnswers: ['give', 'Give'],
      explanation: '"Give up" = rendirse. → Don\'t give up!',
    },
    {
      id: 'a2-m12-l4-ex5',
      type: 'reorder',
      concept: 'phrasal verbs pronoun position',
      difficulty: 3,
      prompt: 'Ordena las palabras: Please / it / turn / off',
      promptTranslation: 'Por favor, apágalo.',
      correctAnswer: 'Please turn it off.',
      words: ['Please', 'turn', 'it', 'off'],
      explanation: 'Con pronombre (it), el pronombre va entre el verbo y la partícula: turn it off.',
    },
    {
      id: 'a2-m12-l4-ex6',
      type: 'error_correction',
      concept: 'phrasal verbs pronoun position',
      difficulty: 3,
      prompt: 'Corrige el error: "Please turn off it."',
      promptTranslation: 'Por favor, apágalo.',
      correctAnswer: 'Please turn it off.',
      acceptedAnswers: ['Please turn it off', 'Please turn it off.', 'please turn it off'],
      acceptApproximate: true,
      explanation: 'Con pronombres (it, them...), el pronombre va entre el verbo y la partícula: turn it off.',
    },
    {
      id: 'a2-m12-l4-ex7',
      type: 'match',
      concept: 'phrasal verbs meanings',
      difficulty: 2,
      prompt: 'Relaciona cada phrasal verb con su significado.',
      promptTranslation: 'Match each phrasal verb with its meaning.',
      correctAnswer: 'get up=levantarse; turn on=encender; turn off=apagar; look for=buscar; look after=cuidar de; give up=rendirse',
      pairs: [
        { left: 'get up', right: 'levantarse' },
        { left: 'turn on', right: 'encender' },
        { left: 'turn off', right: 'apagar' },
        { left: 'look for', right: 'buscar' },
        { left: 'look after', right: 'cuidar de' },
        { left: 'give up', right: 'rendirse' },
      ],
      explanation: 'Cada phrasal verb tiene un significado fijo: get up=levantarse, turn on=encender, turn off=apagar, look for=buscar, look after=cuidar de, give up=rendirse.',
    },
    {
      id: 'a2-m12-l4-ex8',
      type: 'translate',
      concept: 'phrasal verbs',
      difficulty: 3,
      prompt: "Traduce: \"Estoy buscando mis llaves.\"",
      promptTranslation: "I'm looking for my keys.",
      correctAnswer: "I'm looking for my keys.",
      acceptedAnswers: ["I'm looking for my keys", 'I am looking for my keys', "I'm looking for my keys.", "i'm looking for my keys"],
      acceptApproximate: true,
      explanation: '"Buscar" = look for. → I\'m looking for my keys.',
    },
    {
      id: 'a2-m12-l4-ex9',
      type: 'true_false',
      concept: 'phrasal verbs look for vs look at',
      difficulty: 3,
      prompt: '"Look at" significa "buscar" igual que "look for".',
      promptTranslation: '"Look at" means the same as "look for".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "Look at" = mirar. "Look for" = buscar. Son phrasal verbs con significados diferentes.',
    },
    {
      id: 'a2-m12-l4-ex10',
      type: 'multiple_choice',
      concept: 'phrasal verbs',
      difficulty: 3,
      prompt: 'Completa: "Can you ___ the music? It\'s too loud."',
      promptTranslation: '¿Puedes bajar la música? Está demasiado alta.',
      correctAnswer: 'turn down',
      options: ['turn down', 'turn on', 'turn up'],
      explanation: '"Turn down" = bajar el volumen. "Turn up" = subirlo. → Can you turn down the music?',
    },
  ],
  miniTest: [
    {
      id: 'a2-m12-l4-mt1',
      type: 'multiple_choice',
      concept: 'phrasal verbs',
      difficulty: 2,
      prompt: 'Completa: "I ___ at seven every day."',
      promptTranslation: 'Me levanto a las siete todos los días.',
      correctAnswer: 'get up',
      options: ['get up', 'get on', 'get down'],
      explanation: '"Get up" = levantarse (de la cama). → I get up at seven.',
    },
    {
      id: 'a2-m12-l4-mt2',
      type: 'fill_blank',
      concept: 'phrasal verbs',
      difficulty: 2,
      prompt: "Completa: \"Don't forget to ___ off the computer.\"",
      promptTranslation: 'No olvides apagar el ordenador.',
      correctAnswer: 'turn',
      acceptedAnswers: ['turn', 'Turn'],
      explanation: '"Turn off" = apagar. → Turn off the computer.',
    },
    {
      id: 'a2-m12-l4-mt3',
      type: 'error_correction',
      concept: 'phrasal verbs pronoun position',
      difficulty: 3,
      prompt: 'Corrige el error: "Please put on it."',
      promptTranslation: 'Por favor, póntelo.',
      correctAnswer: 'Please put it on.',
      acceptedAnswers: ['Please put it on', 'Please put it on.', 'please put it on'],
      acceptApproximate: true,
      explanation: 'Con pronombre (it), el pronombre va entre el verbo y la partícula: put it on.',
    },
    {
      id: 'a2-m12-l4-mt4',
      type: 'translate',
      concept: 'phrasal verbs',
      difficulty: 3,
      prompt: "Traduce: \"Ella cuida de su hermano pequeño.\"",
      promptTranslation: 'She looks after her little brother.',
      correctAnswer: 'She looks after her little brother.',
      acceptedAnswers: ['She looks after her little brother', 'She looks after her little brother.', 'she looks after her little brother'],
      acceptApproximate: true,
      explanation: '"Cuidar de" = look after. → She looks after her little brother.',
    },
    {
      id: 'a2-m12-l4-mt5',
      type: 'multiple_choice',
      concept: 'phrasal verbs',
      difficulty: 4,
      prompt: '¿Qué significa "find out"?',
      promptTranslation: 'What does "find out" mean?',
      correctAnswer: 'descubrir, enterarse',
      options: ['descubrir, enterarse', 'perderse', 'encontrarse (quedar con alguien)'],
      explanation: '"Find out" = descubrir, enterarse de algo. → I need to find out the truth.',
    },
  ],
  reviewItems: ['a2-m12-l3'],
  prerequisites: ['a2-m12-l3'],
}
