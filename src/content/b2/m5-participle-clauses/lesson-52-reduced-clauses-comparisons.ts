import type { Lesson } from '../../types'

export const lesson52ReducedClausesComparisons: Lesson = {
  id: 'b2-m5-l2',
  moduleId: 'm5-participle-clauses',
  order: 1,
  title: 'Cláusulas relativas reducidas y comparativas con estructuras no finitas',
  objective: 'Usar cláusulas relativas reducidas (reduced clauses) con -ed e -ing para modificar sustantivos, y estructuras no finitas después de "rather than" y comparativos.',
  explanation_es: `Las cláusulas relativas REDUCIDAS son formas abreviadas de relativas completas. En lugar de escribir "The man who is standing there is my uncle", puedes escribir "The man standing there is my uncle" — eliminamos "who is" y quedamos solo con el participio.

CLÁUSULAS RELATIVAS REDUCIDAS:

Estructura 1: Sustantivo + -ing (acción activa, presente o simultánea)
- "The woman talking to him is his boss." = The woman who is talking to him... (La mujer que está hablando con él es su jefa.)
- "The book lying on the table is mine." = The book which is lying on the table... (El libro que está sobre la mesa es mío.)

Estructura 2: Sustantivo + -ed (acción pasada o estado)
- "The letter written yesterday arrived today." = The letter which was written yesterday... (La carta escrita ayer llegó hoy.)
- "The man injured in the accident needed help." = The man who was injured... (El hombre herido en el accidente necesitaba ayuda.)

Puntos importantes:

1. Reduced clauses solo funcionan si la cláusula relativa ORIGINAL tenía "who/which + is/was". No puedes reducir "The man who likes pizza" (no tiene "is").

2. Cuando usas -ing, normalmente está activa: "the man standing" = "the man who is standing".

3. Cuando usas -ed, normalmente es pasiva: "the man injured" = "the man who was injured".

4. Las reduced clauses son muy comunes en textos académicos y formales de B2.

ESTRUCTURAS NO FINITAS CON "RATHER THAN" Y COMPARATIVOS:

"Rather than" + infinitivo sin "to" / -ing:
- "Rather than complain, she stayed quiet." = En lugar de quejarse, se quedó callada.
- "Rather than go by train, we drove." = En lugar de ir en tren, manejamos.

Comparativo + than + infinitivo sin "to":
- "It's better to call than email." = Es mejor llamar que enviar un email.
- "She prefers to read rather than watch TV." = Ella prefiere leer en lugar de mirar TV.

Puntos importantes:

1. Después de "rather than", el verbo puede estar en -ing O en infinitivo sin "to", y ambos son correctos.

2. En comparativas, si la primera parte tiene un verbo, la segunda también debe tenerlo en la misma forma (o similar para claridad).

3. "Rather than" es más formal que "instead of" (que sí require -ing: "instead of going").`,
  examples: [
    { english: 'The man standing there is my uncle.', spanish: 'El hombre que está parado ahí es mi tío.', note: '-ing clause reducida (hombre en acción activa)' },
    { english: 'The letter written yesterday arrived late.', spanish: 'La carta escrita ayer llegó tarde.', note: '-ed clause reducida (carta completada, pasiva)' },
    { english: 'Rather than complain, she left quietly.', spanish: 'En lugar de quejarse, se fue calladamente.' },
    { english: 'It\'s better to walk than drive in traffic.', spanish: 'Es mejor caminar que manejar en tráfico.' },
    { english: 'The accident injured many people.', spanish: 'El accidente hirió a muchas personas.' },
    { english: 'The children playing in the park seemed happy.', spanish: 'Los niños que jugaban en el parque se veían felices.' },
  ],
  rule: `Fórmula:
REDUCED RELATIVES:
Noun + -ing (active action)
Noun + -ed (passive action or state)

RATHER THAN / COMPARATIVES:
Rather than + -ing / infinitive without to
Comparative + than + infinitive without to

Ejemplos de reduced clauses:
- The man standing there = who is standing
- The letter written yesterday = which was written
- The people involved in the project = who were involved

Ejemplos de rather than / comparative:
- Rather than complain, I stayed quiet.
- It's better to wait than rush.`,
  commonMistakes: [
    { wrong: '❌ The man who likes pizza is here.', correct: '✅ The man who likes pizza is here. (no se puede reducir)', explanation: 'Solo se reduce si la original es "who/which + is/was". "Who likes" no se reduce.' },
    { wrong: '❌ The letter writing yesterday arrived late.', correct: '✅ The letter written yesterday arrived late.', explanation: 'Cuando la relativa es pasiva (was written), usamos -ed, no -ing.' },
    { wrong: '❌ Rather than to complain, she stayed quiet.', correct: '✅ Rather than complain, she stayed quiet.', explanation: 'Después de "rather than", no usamos "to": es "rather than complain", no "to complain".' },
    { wrong: '❌ It\'s better to call rather email.', correct: '✅ It\'s better to call than email.', explanation: 'En comparativas, usamos "than", no "rather than".' },
  ],
  vocabulary: [
    { word: 'to injure', translation_es: 'herir, lastimar', level: 'B2', category: 'participles', partOfSpeech: 'verb', example: 'The accident injured three people.', exampleTranslation: 'El accidente hirió a tres personas.' },
    { word: 'injured', translation_es: 'herido, lastimado', level: 'B2', category: 'participles', partOfSpeech: 'adjective', example: 'The injured man was taken to the hospital.', exampleTranslation: 'El hombre herido fue llevado al hospital.' },
    { word: 'to reduce', translation_es: 'reducir', level: 'B2', category: 'grammar', partOfSpeech: 'verb', example: 'A reduced clause is shorter than the full form.', exampleTranslation: 'Una cláusula reducida es más corta que la forma completa.' },
    { word: 'rather', translation_es: 'bastante, en lugar de', level: 'B2', category: 'discourse', partOfSpeech: 'adverb', example: 'Rather than go by bus, I took a taxi.', exampleTranslation: 'En lugar de ir en autobús, tomé un taxi.' },
    { word: 'to prefer', translation_es: 'preferir', level: 'B2', category: 'participles', partOfSpeech: 'verb', example: 'I prefer to read rather than watch TV.', exampleTranslation: 'Prefiero leer en lugar de ver televisión.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-reduced-relatives-ing',
      level: 'B2',
      name: 'Reduced relative clauses with -ing',
      explanation_es: 'Usar -ing para reducir cláusulas relativas activas: "the man standing" = "the man who is standing".',
      formula: 'Noun + -ing (= who/which + is + -ing)',
      examples: ['The man standing there', 'The children playing in the park', 'The car parked outside'],
    },
    {
      id: 'gp-b2-reduced-relatives-ed',
      level: 'B2',
      name: 'Reduced relative clauses with -ed',
      explanation_es: 'Usar -ed para reducir cláusulas relativas pasivas: "the letter written" = "the letter which was written".',
      formula: 'Noun + -ed (= who/which + was/were + -ed)',
      examples: ['The letter written yesterday', 'The man injured in the accident', 'The people involved in the project'],
    },
    {
      id: 'gp-b2-rather-than-nonfinte',
      level: 'B2',
      name: 'Rather than + non-finite structures',
      explanation_es: 'Usar -ing o infinitivo sin "to" después de "rather than" para expresar alternativa.',
      formula: 'Rather than + -ing/infinitive + comma + main clause',
      examples: ['Rather than complain, she stayed quiet.', 'Rather than go alone, I waited for him.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m5-l2-ex1',
      type: 'multiple_choice',
      concept: 'reduced relative with -ing',
      difficulty: 2,
      prompt: 'Completa: "The woman ___ at the desk is the manager."',
      promptTranslation: 'La mujer que está sentada en el escritorio es la gerenta.',
      correctAnswer: 'sitting',
      options: ['sitting', 'sit', 'sat', 'to sit'],
      explanation: 'Reduced clause: "sitting" = "who is sitting".',
    },
    {
      id: 'b2-m5-l2-ex2',
      type: 'fill_blank',
      concept: 'reduced relative with -ed',
      difficulty: 3,
      prompt: 'Completa: "The building ___ last year is now a museum."',
      promptTranslation: 'El edificio restaurado el año pasado es ahora un museo.',
      correctAnswer: 'restored',
      explanation: 'Reduced clause: "restored" = "which was restored".',
    },
    {
      id: 'b2-m5-l2-ex3',
      type: 'error_correction',
      concept: 'rather than structure',
      difficulty: 4,
      prompt: 'Encuentra el error: "Rather than to go by train, we drove."',
      correctAnswer: 'Rather than go by train, we drove.',
      acceptedAnswers: [
        'Rather than go by train, we drove',
        'Rather than go by train, we drove.',
        'Rather than going by train, we drove.',
      ],
      acceptApproximate: true,
      explanation: 'Después de "rather than", usamos infinitivo SIN "to", no "to go".',
    },
    {
      id: 'b2-m5-l2-ex4',
      type: 'translate',
      concept: 'reduced relative translation',
      difficulty: 3,
      prompt: 'Traduce: "El hombre herido en el accidente fue llevado al hospital."',
      correctAnswer: 'The man injured in the accident was taken to the hospital.',
      acceptedAnswers: [
        'The man injured in the accident was taken to the hospital',
        'The man injured in the accident was taken to the hospital.',
      ],
      acceptApproximate: true,
      explanation: 'Reduced clause: "injured" = "who was injured".',
    },
    {
      id: 'b2-m5-l2-ex5',
      type: 'reorder',
      concept: 'reduced clause word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Los niños que juegan en el parque son felices.',
      words: ['The', 'children', 'playing', 'in', 'the', 'park', 'are', 'happy.'],
      correctAnswer: 'The children playing in the park are happy.',
      explanation: 'Orden: noun + -ing participle + rest of sentence.',
    },
    {
      id: 'b2-m5-l2-ex6',
      type: 'select_correct',
      concept: 'can reduced clauses be used?',
      difficulty: 4,
      prompt: '¿Cuál oración SÍ puede reducirse?',
      correctAnswer: 'The woman who is talking on the phone is my boss.',
      options: ['The woman who is talking on the phone is my boss.', 'The man who likes pizza arrived.', 'The student who studies hard passed.'],
      explanation: 'Solo "who is talking" puede reducirse a "talking". Las otras tienen "who likes" y "who studies", que no se reducen.',
    },
    {
      id: 'b2-m5-l2-ex7',
      type: 'multiple_choice',
      concept: 'rather than vs instead of',
      difficulty: 4,
      prompt: '¿Cuál es correcta?',
      correctAnswer: 'Rather than go alone, I waited.',
      options: ['Rather than go alone, I waited.', 'Rather than going alone, I waited.', 'Rather than to go alone, I waited.'],
      explanation: '"Rather than go" es correcto (infinitivo sin "to"). "Rather than going" también es correcto, pero "to go" es incorrecto.',
    },
    {
      id: 'b2-m5-l2-ex8',
      type: 'true_false',
      concept: 'reduced clause conditions',
      difficulty: 2,
      prompt: 'Toda cláusula relativa puede reducirse usando -ing o -ed.',
      correctAnswer: 'false',
      explanation: 'Falso. Solo se puede reducir si la original es "who/which + is/was". Frases como "who likes" no se reducen.',
    },
    {
      id: 'b2-m5-l2-ex9',
      type: 'listening',
      concept: 'reduced clauses listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Una descripción de varios objetos y personas en una habitación usando cláusulas reducidas.',
      listening: {
        audioText:
          "In the room, there were several interesting items. The painting hanging on the wall was a rare Picasso. Next to it, the statue carved from marble was over two hundred years old. On the desk, the papers scattered everywhere were important documents. The man sitting by the window was the owner of the collection. He was talking to a woman standing beside him, who was an art historian. The books lying on the floor were about famous artists.",
        questions: [
          {
            id: 'b2-m5-l2-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The painting on the wall is a rare Picasso.',
            correctAnswer: 'true',
            explanation: '"The painting hanging on the wall was a rare Picasso."',
          },
          {
            id: 'b2-m5-l2-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Who is the woman standing beside the man?',
            correctAnswer: 'An art historian',
            options: ['An art historian', 'The owner of the collection', 'A famous painter'],
            explanation: '"The woman standing beside him, who was an art historian."',
          },
          {
            id: 'b2-m5-l2-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The marble statue was:',
            correctAnswer: 'Over two hundred years old',
            options: ['Over two hundred years old', 'Carved from wood', 'Painted by Picasso'],
            explanation: '"The statue carved from marble was over two hundred years old."',
          },
        ],
      },
    },
    {
      id: 'b2-m5-l2-ex10',
      type: 'writing',
      concept: 'reduced clauses writing',
      difficulty: 4,
      prompt: 'Describí una habitación o espacio que conocés, usando al menos 4 cláusulas relativas reducidas (con -ing o -ed) para describir los objetos o personas que ves. Ejemplo: "The lamp standing in the corner is very old."',
      correctAnswer: '',
      explanation: 'Un buen texto descriptivo usa reduced clauses para hacer la descripción más natural y sofisticada.',
      taskType: 'article',
      targetReader: 'a travel magazine or blog',
      register: 'neutral',
      contentPoints: ['Al menos 4 cláusulas relativas reducidas', 'Descripciones vívidas y coherentes', 'Uso correcto de -ing y -ed'],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m5-l2-ex11',
      type: 'speaking',
      concept: 'reduced clause pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'The man standing there is my uncle.',
      explanation: 'Practicá la fluidez: "standing" forma una unidad con el sustantivo (no es una pausa).',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m5-l2-mt1',
      type: 'multiple_choice',
      concept: 'reduced relative -ing',
      difficulty: 2,
      prompt: 'Completa: "The children ___ in the park are from school."',
      promptTranslation: 'Los niños que juegan en el parque son de la escuela.',
      correctAnswer: 'playing',
      options: ['play', 'playing', 'played', 'to play'],
      explanation: 'Reduced clause: "playing" = "who are playing".',
    },
    {
      id: 'b2-m5-l2-mt2',
      type: 'error_correction',
      concept: 'reduced relative -ed',
      difficulty: 3,
      prompt: 'Corrige: "The documents written by the manager is important."',
      correctAnswer: 'The documents written by the manager are important.',
      acceptedAnswers: [
        'The documents written by the manager are important',
        'The documents written by the manager are important.',
      ],
      acceptApproximate: true,
      explanation: 'Reduced clause: "written" = "which were written". Plural subject = "are".',
    },
    {
      id: 'b2-m5-l2-mt3',
      type: 'true_false',
      concept: 'rather than structure',
      difficulty: 3,
      prompt: '"Rather than going" y "rather than go" son ambos correctos en inglés formal.',
      correctAnswer: 'true',
      explanation: 'Ambas formas son correctas. "Rather than go" (infinitivo sin to) y "rather than going" (-ing) son aceptables.',
    },
  ],
  reviewItems: ['b2-m5-l1'],
  prerequisites: ['b2-m5-l1'],
}
