import type { Lesson } from '../../types'

export const lesson112HoweverNevertheless: Lesson = {
  id: 'b1-m11-l2',
  moduleId: 'm11-linking-words',
  order: 1,
  title: 'however / nevertheless / on the other hand (sin embargo)',
  objective: 'Contrastar ideas entre dos frases con however, nevertheless y on the other hand, y usar la coma correctamente.',
  explanation_es: `Cuando queremos contrastar DOS frases distintas (no una sola oración como con "although"), usamos conectores como "however", "nevertheless" y "on the other hand".

1) However = sin embargo. Introduce un contraste o una idea contraria.
- It's a nice car. However, it's very expensive. = Es un buen coche. Sin embargo, es muy caro.

2) Nevertheless = sin embargo / no obstante (más formal). Enfatiza que la segunda idea es sorprendente después de la primera.
- The hotel was small. Nevertheless, it was comfortable. = El hotel era pequeño. No obstante, era cómodo.

3) On the other hand = por otro lado / en cambio. Contrasta dos puntos de vista o dos caras de una misma cuestión.
- On the other hand, living in the city has advantages. = Por otro lado, vivir en la ciudad tiene ventajas.

DIFERENCIA CLAVE: "although" une dos partes dentro de UNA frase. "However/nevertheless" conectan DOS frases separadas (con punto o punto y coma). Después de "however", "nevertheless" y "on the other hand" al inicio de frase va una COMA.

- ✅ It's nice. However, it's expensive.
- ❌ It's nice. However it's expensive. (falta la coma)
- ❌ It's nice. However but it's expensive. ("however" y "but" juntos no se usan)

Posición: "however" puede ir al principio, en medio o al final: It's nice, however. = Es bonito, sin embargo.`,
  examples: [
    { english: 'It\'s a nice car. However, it\'s very expensive.', spanish: 'Es un buen coche. Sin embargo, es muy caro.', note: 'however + coma al inicio de la segunda frase.' },
    { english: 'The hotel was small. Nevertheless, it was comfortable.', spanish: 'El hotel era pequeño. No obstante, era cómodo.', note: 'nevertheless = más formal.' },
    { english: 'On the other hand, living in the city has advantages.', spanish: 'Por otro lado, vivir en la ciudad tiene ventajas.' },
    { english: 'I love my job. It is stressful, however.', spanish: 'Me encanta mi trabajo. Es estresante, sin embargo.', note: 'however al final de la frase.' },
    { english: 'The weather was bad. Nevertheless, the festival was a success.', spanish: 'El tiempo era malo. No obstante, el festival fue un éxito.' },
  ],
  rule: `- however = sin embargo.
- nevertheless = no obstante (formal).
- on the other hand = por otro lado.
- Van entre DOS frases separadas. Después de la coma al inicio: However, ... / Nevertheless, ... / On the other hand, ...
- No se combinan con "but": ❌ However but ... → ✅ However, ...
- "however" puede ir al final: It's nice, however.`,
  commonMistakes: [
    { wrong: '❌ It was raining. However we went out.', correct: '✅ It was raining. However, we went out.', explanation: 'Después de "however" al inicio de frase se escribe coma: However, ...' },
    { wrong: '❌ It\'s cheap. However but it\'s small.', correct: '✅ It\'s cheap. However, it\'s small.', explanation: '"However" y "but" no se usan juntos; expresan lo mismo y sobra uno.' },
    { wrong: '❌ Although it was raining. However, we went out.', correct: '✅ Although it was raining, we went out. O bien: It was raining. However, we went out.', explanation: 'Elegimos UNA estrategia: "although" dentro de la frase, o "however" entre dos frases. No mezclamos ambas.' },
    { wrong: '❌ On the other hand city living has advantages.', correct: '✅ On the other hand, living in the city has advantages.', explanation: 'Tras "on the other hand" va coma, y "living in the city" es el sujeto (gerundio).' },
  ],
  vocabulary: [
    { word: 'however', translation_es: 'sin embargo', level: 'B1', category: 'linking words', partOfSpeech: 'adverb', example: 'The flat is small. However, it is in the centre.', exampleTranslation: 'El piso es pequeño. Sin embargo, está en el centro.' },
    { word: 'nevertheless', translation_es: 'no obstante', level: 'B1', category: 'linking words', partOfSpeech: 'adverb', example: 'The task was hard. Nevertheless, we finished it.', exampleTranslation: 'La tarea era difícil. No obstante, la terminamos.' },
    { word: 'on the other hand', translation_es: 'por otro lado, en cambio', level: 'B1', category: 'linking words', partOfSpeech: 'phrase', example: 'On the other hand, buses are cheaper.', exampleTranslation: 'Por otro lado, los autobuses son más baratos.' },
  ],
  grammarPoints: [
    {
      id: 'gp-however-nevertheless',
      level: 'B1',
      name: 'however / nevertheless / on the other hand',
      explanation_es: 'Conectan dos frases separadas para contrastarlas. Se usan con coma tras el conector al inicio, y no se combinan con "but".',
      formula: 'Frase 1. However/Nevertheless/On the other hand, + frase 2.',
      examples: ['It\'s a nice car. However, it\'s very expensive.', 'The hotel was small. Nevertheless, it was comfortable.', 'On the other hand, living in the city has advantages.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m11-l2-ex1',
      type: 'multiple_choice',
      concept: 'however at start',
      difficulty: 1,
      prompt: 'Completa: "It\'s a nice car. ___, it\'s very expensive."',
      promptTranslation: 'Es un buen coche. Sin embargo, es muy caro.',
      correctAnswer: 'However',
      options: ['However', 'And', 'Because'],
      explanation: '"However" contrasta las dos frases. Después va coma.',
    },
    {
      id: 'b1-m11-l2-ex2',
      type: 'multiple_choice',
      concept: 'however vs although',
      difficulty: 2,
      prompt: '¿Dónde usamos "however"?',
      promptTranslation: 'Where do we use "however"?',
      correctAnswer: 'Entre dos frases separadas.',
      options: ['Entre dos frases separadas.', 'Dentro de una sola frase con "but".', 'Antes de un sustantivo.'],
      explanation: '"however" conecta dos frases separadas (con punto o punto y coma), no va dentro de una frase con "but".',
    },
    {
      id: 'b1-m11-l2-ex3',
      type: 'fill_blank',
      concept: 'nevertheless formal',
      difficulty: 2,
      prompt: 'Completa: "The hotel was small. ___ , it was very comfortable."',
      promptTranslation: 'El hotel era pequeño. No obstante, era muy cómodo.',
      correctAnswer: 'Nevertheless',
      acceptedAnswers: ['Nevertheless', 'However', 'nevertheless'],
      explanation: '"Nevertheless" o "however" funcionan aquí para contrastar. Forma formal: Nevertheless.',
    },
    {
      id: 'b1-m11-l2-ex4',
      type: 'true_false',
      concept: 'comma after however',
      difficulty: 2,
      prompt: 'Después de "however" al inicio de frase se escribe una coma.',
      promptTranslation: 'We write a comma after "however" at the start of a sentence.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero: However, it was expensive.',
    },
    {
      id: 'b1-m11-l2-ex5',
      type: 'error_correction',
      concept: 'no "however but"',
      difficulty: 3,
      prompt: 'Corrige el error: "It\'s cheap. However but it\'s too small."',
      promptTranslation: 'Es barato. Sin embargo, es demasiado pequeño.',
      correctAnswer: 'It\'s cheap. However, it\'s too small.',
      acceptedAnswers: ['It\'s cheap. However, it\'s too small', 'It\'s cheap. However, it\'s too small.', 'it\'s cheap. however, it\'s too small'],
      acceptApproximate: true,
      explanation: '"However" y "but" no se combinan. → It\'s cheap. However, it\'s too small.',
    },
    {
      id: 'b1-m11-l2-ex6',
      type: 'translate',
      concept: 'on the other hand',
      difficulty: 3,
      prompt: 'Traduce: "Por otro lado, vivir en la ciudad tiene ventajas."',
      promptTranslation: 'On the other hand, living in the city has advantages.',
      correctAnswer: 'On the other hand, living in the city has advantages.',
      acceptedAnswers: ['On the other hand, living in the city has advantages', 'On the other hand, living in the city has advantages.', 'on the other hand, living in the city has advantages'],
      acceptApproximate: true,
      explanation: '"Por otro lado" = On the other hand, + coma. El sujeto es el gerundio "living in the city".',
    },
    {
      id: 'b1-m11-l2-ex7',
      type: 'reorder',
      concept: 'nevertheless between sentences',
      difficulty: 3,
      prompt: 'Ordena las palabras: was / The / weather / bad. / Nevertheless, / was / success / the / a / festival',
      promptTranslation: 'El tiempo era malo. No obstante, el festival fue un éxito.',
      correctAnswer: 'The weather was bad. Nevertheless, the festival was a success.',
      words: ['The', 'weather', 'was', 'bad.', 'Nevertheless,', 'the', 'festival', 'was', 'a', 'success'],
      explanation: 'Primera frase + punto + conector con coma + segunda frase. → The weather was bad. Nevertheless, the festival was a success.',
    },
    {
      id: 'b1-m11-l2-ex8',
      type: 'match',
      concept: 'linking words matching',
      difficulty: 3,
      prompt: 'Relaciona cada conector con su ejemplo.',
      promptTranslation: 'Match each connector with its example.',
      correctAnswer: 'however=The flat is small. However, it is in the centre.; nevertheless=The task was hard. Nevertheless, we finished it.; on the other hand=On the other hand, buses are cheaper.',
      pairs: [
        { left: 'however', right: 'The flat is small. However, it is in the centre.' },
        { left: 'nevertheless', right: 'The task was hard. Nevertheless, we finished it.' },
        { left: 'on the other hand', right: 'On the other hand, buses are cheaper.' },
      ],
      explanation: 'Los tres conectores contrastan ideas entre dos frases; nevertheless es el más formal.',
    },
    {
      id: 'b1-m11-l2-ex9',
      type: 'multiple_choice',
      concept: 'however at the end',
      difficulty: 3,
      prompt: 'Completa (however al final): "I love my job. It is stressful, ___."',
      promptTranslation: 'Me encanta mi trabajo. Es estresante, sin embargo.',
      correctAnswer: 'however',
      options: ['however', 'although', 'because'],
      explanation: '"however" puede ir al final de la frase: It is stressful, however.',
    },
    {
      id: 'b1-m11-l2-ex10',
      type: 'fill_blank',
      concept: 'however vs on the other hand',
      difficulty: 4,
      prompt: 'Completa: "Trains are fast. ___ the other hand, they are expensive."',
      promptTranslation: 'Los trenes son rápidos. Por otro lado, son caros.',
      correctAnswer: 'On',
      acceptedAnswers: ['On', 'on'],
      explanation: 'La expresión completa es "on the other hand": por otro lado.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m11-l2-mt1',
      type: 'multiple_choice',
      concept: 'however comma',
      difficulty: 1,
      prompt: 'Completa: "The soup was cold. ___, it was tasty."',
      promptTranslation: 'La sopa estaba fría. Sin embargo, estaba rica.',
      correctAnswer: 'However',
      options: ['However', 'Although', 'Because'],
      explanation: '"However" conecta las dos frases contrastándolas.',
    },
    {
      id: 'b1-m11-l2-mt2',
      type: 'fill_blank',
      concept: 'nevertheless',
      difficulty: 2,
      prompt: 'Completa: "It was raining. ___, we enjoyed the walk."',
      promptTranslation: 'Estaba lloviendo. No obstante, disfrutamos del paseo.',
      correctAnswer: 'Nevertheless',
      acceptedAnswers: ['Nevertheless', 'However', 'nevertheless'],
      explanation: '"Nevertheless" o "however" expresan el contraste.',
    },
    {
      id: 'b1-m11-l2-mt3',
      type: 'error_correction',
      concept: 'comma after connector',
      difficulty: 3,
      prompt: 'Corrige el error: "It was expensive. However it was worth it."',
      promptTranslation: 'Era caro. Sin embargo, valía la pena.',
      correctAnswer: 'It was expensive. However, it was worth it.',
      acceptedAnswers: ['It was expensive. However, it was worth it', 'It was expensive. However, it was worth it.', 'it was expensive. however, it was worth it'],
      acceptApproximate: true,
      explanation: 'Falta la coma después de "However": However, it was worth it.',
    },
    {
      id: 'b1-m11-l2-mt4',
      type: 'translate',
      concept: 'nevertheless',
      difficulty: 3,
      prompt: 'Traduce: "La tarea era difícil. No obstante, la terminamos."',
      promptTranslation: 'The task was hard. Nevertheless, we finished it.',
      correctAnswer: 'The task was hard. Nevertheless, we finished it.',
      acceptedAnswers: ['The task was hard. Nevertheless, we finished it', 'The task was hard. Nevertheless, we finished it.', 'the task was hard. nevertheless, we finished it'],
      acceptApproximate: true,
      explanation: '"No obstante" = Nevertheless (formal) o However.',
    },
    {
      id: 'b1-m11-l2-mt5',
      type: 'multiple_choice',
      concept: 'which sentence is correct',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'On the other hand, studying online is cheaper.',
      options: ['On the other hand, studying online is cheaper.', 'On other hand, studying online is cheaper.', 'On the other hand studying online is cheaper.'],
      explanation: 'La expresión es "on the other hand" y lleva coma después cuando abre la frase.',
    },
  ],
  reviewItems: ['b1-m11-l1'],
  prerequisites: ['b1-m11-l1'],
}
