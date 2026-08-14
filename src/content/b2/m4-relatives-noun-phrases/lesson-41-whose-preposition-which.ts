import type { Lesson } from '../../types'

export const lesson41WhosePrepositionWhich: Lesson = {
  id: 'b2-m4-l1',
  moduleId: 'm4-relatives-noun-phrases',
  order: 0,
  title: '"whose" and formal preposition + which/whom',
  objective: 'Usar "whose" tanto en relativas definidoras como no definidoras para expresar posesión, y dominar la estructura formal de preposición + which/whom en lugar de terminar la frase con preposición.',
  explanation_es: `Ya conocés "whose" de nivel B1 (The woman whose car was stolen). Ahora vamos a ampliar su uso y a aprender la forma FORMAL de expresar una preposición que normalmente va al final de la frase.

En inglés informal hablado, las preposiciones van al final: "the topic we spoke about", "the person she works with". Pero en inglés formal (textos, ensayos, presentaciones), movemos la preposición AL PRINCIPIO, delante de which (para cosas) o whom (para personas).

WHOSE - Posesión en relativas:
- DEFINIDORA: "The woman whose keys were lost is upset." = La mujer cuyas llaves se perdieron está molesta. (sin comas)
- NO DEFINIDORA: "Sarah, whose apartment is near the park, invited us over." = Sarah, cuyo apartamento está cerca del parque, nos invitó. (con comas)

PREPOSICIÓN + WHICH (cosas) / WHOM (personas):
- FORMAL: "The topic about which we spoke was fascinating." = El tema del cual hablamos fue fascinante.
- INFORMAL: "The topic we spoke about was fascinating."
- FORMAL: "The colleague with whom I work is excellent." = La colega con la que trabajo es excelente.
- INFORMAL: "The colleague I work with is excellent."

Puntos importantes:

1. "Whose" es posesivo y funciona en relativas definidoras y no definidoras (como "which" y "who").

2. En relativas NO DEFINIDORAS, SIEMPRE ponemos comas alrededor de la cláusula: "My brother, whose job is in IT, ..." (no "My brother whose job is in IT" — eso sonaría raro en inglés).

3. La estructura formal "preposición + which/whom" es típica de:
   - Escritura académica y formal
   - Documentos legales y profesionales
   - Presentaciones y discursos formales
   - Ensayos

4. En inglés informal y hablado, SIEMPRE dejamos la preposición al final ("the topic we spoke about" es perfectamente natural).

5. Matching: preposición + WHOM (personas, objeto), preposición + WHICH (cosas). NO usamos "preposición + who" — es gramaticalmente incorrecto en registro formal.

6. Las proposiciones relacionales comunes son: about, with, to, for, from, in, on, at, by.

Comparación con B1:
- B1: "whose" solo en relativas definidoras simples ("The girl whose name is Emma")
- B2: "whose" tanto en definidoras como no definidoras, y además introducimos la forma formal preposición + which/whom`,
  examples: [
    { english: 'The student whose essay won first prize is studying journalism.', spanish: 'El estudiante cuyo ensayo ganó el primer premio está estudiando periodismo.', note: 'Relativa definidora: cuyo, cuya, cuyos, cuyas — sin comas.' },
    { english: 'Dr. Martinez, whose research is world-famous, gave a lecture yesterday.', spanish: 'El Dr. Martínez, cuya investigación es famosa mundialmente, dio una conferencia ayer.', note: 'Relativa NO DEFINIDORA: información adicional entre comas.' },
    { english: 'The company for which she works has offices in five countries.', spanish: 'La empresa para la que trabaja tiene oficinas en cinco países.', note: 'Formal: preposición + which. Informal sería: "the company she works for".' },
    { english: 'The colleague with whom he collaborated wrote an excellent report.', spanish: 'La colega con la que colaboró escribió un excelente informe.', note: 'Formal: preposición + whom. Informal: "the colleague he collaborated with".' },
    { english: 'The topic about which we debated is still relevant today.', spanish: 'El tema sobre el que debatimos sigue siendo relevante hoy.', note: 'Formal: preposición + which. Informal: "the topic we debated about".' },
    { english: 'My neighbor, whose daughter attends university with mine, is a teacher.', spanish: 'Mi vecino, cuya hija asiste a la universidad con la mía, es maestro.', note: 'Relativa NO DEFINIDORA: entre comas porque el vecino ya está identificado (my neighbor).' },
  ],
  rule: `Fórmula:

1. WHOSE (posesión):
   Definidora: noun + whose + noun + verb... (sin comas)
   No definidora: noun, whose + noun + verb, ... (con comas)

   Ejemplos:
   - "The person whose phone rang is outside." (definidora, identifica quién)
   - "Tom, whose sister is a doctor, works in marketing." (no definidora, info extra)

2. PREPOSICIÓN + WHICH/WHOM (forma formal):
   Para cosas: preposición + which + resto de la cláusula
   Para personas: preposición + whom + resto de la cláusula

   Ejemplos:
   - "The book to which he referred is out of print." (cosas, formal)
   - "The person to whom you spoke is the manager." (personas, formal)

3. Contraparte informal (preposición al final):
   - "The book he referred to is out of print." (informal)
   - "The person you spoke to is the manager." (informal)

Reglas clave:
- "Whose" expresa posesión; es invariable (whose, no matter the noun: whose book, whose books, whose idea).
- Relativas NO DEFINIDORAS llevan comas y se usan cuando la información es EXTRA (el sustantivo ya está identificado).
- En registro formal, NUNCA dejas la preposición al final.
- Preposición + WHOM (personas), preposición + WHICH (cosas). NO "preposición + who".`,
  commonMistakes: [
    { wrong: '❌ The woman whose car was stolen she called the police.', correct: '✅ The woman whose car was stolen called the police.', explanation: 'NO duplicas el sujeto. "Whose car was stolen" YA actúa como el sujeto de "called", no necesitas "she" de nuevo.' },
    { wrong: '❌ My friend, whose brother is an engineer studies medicine.', correct: '✅ My friend, whose brother is an engineer, studies medicine.', explanation: 'Las relativas NO DEFINIDORAS llevan COMAS alrededor: antes y después (o antes y final si es al final de frase).' },
    { wrong: '❌ The topic about that we spoke was interesting.', correct: '✅ The topic about which we spoke was interesting.', explanation: 'Usamos "which" (no "that") después de preposición en registro formal. "That" no se puede usar después de preposición.' },
    { wrong: '❌ The colleague with who I work is excellent.', correct: '✅ The colleague with whom I work is excellent.', explanation: 'Después de preposición usamos "whom" (objeto), no "who" (sujeto).' },
    { wrong: '❌ The reason for which I resigned was personal.', correct: '✅ The reason for which I resigned was personal.', explanation: 'Esta es la forma correcta formal. (Informal: "The reason I resigned was personal" también está bien, pero NO es "the reason which I resigned".)' },
  ],
  vocabulary: [
    { word: 'resignation', translation_es: 'renuncia, dimisión', level: 'B2', category: 'work', partOfSpeech: 'noun', example: 'Her resignation was sudden.', exampleTranslation: 'Su renuncia fue repentina.' },
    { word: 'possession', translation_es: 'posesión, propiedad', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'The possession of a car is a big responsibility.', exampleTranslation: 'La posesión de un auto es una gran responsabilidad.' },
    { word: 'to refer to', translation_es: 'referirse a, aludir a', level: 'B2', category: 'verbs', partOfSpeech: 'phrasal verb', example: 'The book to which he referred is famous.', exampleTranslation: 'El libro al que se refirió es famoso.' },
    { word: 'formal register', translation_es: 'registro formal', level: 'B2', category: 'language', partOfSpeech: 'noun phrase', example: 'Academic writing uses a formal register.', exampleTranslation: 'La escritura académica utiliza un registro formal.' },
    { word: 'to collaborate', translation_es: 'colaborar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'Scientists collaborate on research.', exampleTranslation: 'Los científicos colaboran en la investigación.' },
    { word: 'out of print', translation_es: 'agotado, descatalogado', level: 'B2', category: 'books', partOfSpeech: 'adjective phrase', example: 'That classic book is now out of print.', exampleTranslation: 'Ese libro clásico ya no está disponible.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-whose-relatives',
      level: 'B2',
      name: 'whose in defining and non-defining relative clauses',
      explanation_es: '"Whose" expresa posesión en relativas. En relativas NO DEFINIDORAS usamos comas. Ejemplo: "The student whose project won (definidora)" vs. "Emma, whose father is a doctor, (no definidora)".',
      formula: 'noun + whose + noun + verb (defining) / noun, whose + noun + verb, (non-defining)',
      examples: ['The girl whose dream came true.', 'My colleague, whose office is next to mine.'],
    },
    {
      id: 'gp-b2-preposition-which-whom',
      level: 'B2',
      name: 'formal preposition + which/whom',
      explanation_es: 'En registro formal, la preposición va ANTES de which (cosas) o whom (personas), no al final. Ejemplo: "the topic about which we spoke" (formal) vs. "the topic we spoke about" (informal).',
      formula: 'preposition + which (things) / preposition + whom (people) + rest of clause',
      examples: ['The book to which he referred.', 'The person with whom she works.', 'The problem for which there is no solution.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m4-l1-ex1',
      type: 'multiple_choice',
      concept: 'whose in defining relative',
      difficulty: 2,
      prompt: 'Completa: "The student ___ essay was published is very proud."',
      promptTranslation: 'El estudiante cuyo ensayo fue publicado está muy orgulloso.',
      correctAnswer: 'whose',
      options: ['whose', 'who', 'that'],
      explanation: 'Usamos "whose" para expresar posesión en una relativa definidora: "The student whose essay..." (el ensayo pertenece al estudiante).',
    },
    {
      id: 'b2-m4-l1-ex2',
      type: 'fill_blank',
      concept: 'preposition + which formal',
      difficulty: 3,
      prompt: 'Completa (registro formal): "The topic ___ we debated was controversial."',
      promptTranslation: 'El tema sobre el que debatimos fue controversial.',
      correctAnswer: 'about which',
      explanation: 'En registro formal, la preposición va ANTES de "which": "about which". En informal sería "that we debated about" o "we debated about".',
    },
    {
      id: 'b2-m4-l1-ex3',
      type: 'true_false',
      concept: 'non-defining relative clauses commas',
      difficulty: 3,
      prompt: 'Esta frase es correcta: "My colleague, whose brother is a doctor, works in IT."',
      correctAnswer: 'true',
      explanation: 'Correcto. Las relativas NO DEFINIDORAS llevan comas alrededor (o antes y final si es al final). La información entre comas es extra, no identifica al sustantivo (ya sabemos de quién hablas: "My colleague").',
    },
    {
      id: 'b2-m4-l1-ex4',
      type: 'error_correction',
      concept: 'preposition + whom formal',
      difficulty: 4,
      prompt: 'Encuentra el error: "The colleague with who I work is excellent."',
      correctAnswer: 'The colleague with whom I work is excellent.',
      acceptedAnswers: [
        'The colleague with whom I work is excellent',
        'The colleague with whom I work is excellent.',
      ],
      acceptApproximate: true,
      explanation: 'Después de preposición usamos "whom" (objeto), no "who" (sujeto). "With whom" es la forma correcta formal.',
    },
    {
      id: 'b2-m4-l1-ex5',
      type: 'translate',
      concept: 'whose and preposition + which',
      difficulty: 4,
      prompt: 'Traduce: "La mujer cuya casa ganó un premio fue a la ceremonia."',
      correctAnswer: 'The woman whose house won a prize attended the ceremony.',
      acceptedAnswers: [
        'The woman whose house won a prize attended the ceremony',
        'The woman whose house won a prize went to the ceremony',
        'The woman whose house won an award attended the ceremony',
      ],
      acceptApproximate: true,
      explanation: '"Cuya casa" = whose house. "Fue a la ceremonia" = attended the ceremony. Relativa definidora (sin comas).',
    },
    {
      id: 'b2-m4-l1-ex6',
      type: 'select_correct',
      concept: 'formal vs informal preposition placement',
      difficulty: 4,
      prompt: '¿Cuál es la forma más FORMAL?',
      correctAnswer: 'The reasons for which she resigned remain unclear.',
      options: [
        'The reasons for which she resigned remain unclear.',
        'The reasons she resigned for remain unclear.',
        'The reasons that she resigned for remain unclear.',
      ],
      explanation: 'La forma formal coloca la preposición ANTES de "which": "for which". Las otras dos son informales (preposición al final: "resigned for").',
    },
    {
      id: 'b2-m4-l1-ex7',
      type: 'reorder',
      concept: 'whose in relative clause',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'La directora cuyas políticas fue reformadas.',
      words: ['The', 'principal', 'whose', 'policies', 'were', 'reformed', 'is', 'retiring.'],
      correctAnswer: 'The principal whose policies were reformed is retiring.',
      explanation: 'Orden: The + principal + whose + policies + were + reformed + is + retiring. Relativa definidora sin comas.',
    },
    {
      id: 'b2-m4-l1-ex8',
      type: 'match',
      concept: 'matching formal to informal',
      difficulty: 4,
      prompt: 'Empareja cada frase FORMAL con su versión INFORMAL equivalente.',
      correctAnswer: '',
      pairs: [
        { left: 'The colleague with whom she works', right: 'The colleague she works with' },
        { left: 'The book to which he referred', right: 'The book he referred to' },
        { left: 'The reason for which I left', right: 'The reason I left for' },
        { left: 'The person to whom I spoke', right: 'The person I spoke to' },
      ],
      explanation: 'En formal, la preposición va ANTES de which/whom. En informal, va AL FINAL de la cláusula o se omite.',
    },
    {
      id: 'b2-m4-l1-ex9',
      type: 'listening',
      concept: 'whose and formal prepositions listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Una profesora habla sobre sus colegas y sus investigaciones, usando relativas con "whose" y estructuras formales.',
      listening: {
        audioText:
          "Dr. Chen, whose research has changed the field of medicine, recently retired. She worked with colleagues whose dedication was inspiring. The topics for which they studied were complex. The students to whom she taught became leaders in their fields. Her contributions to the field for which she dedicated her life will not be forgotten.",
        questions: [
          {
            id: 'b2-m4-l1-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Dr. Chen is still working as a professor.',
            correctAnswer: 'false',
            explanation: '"Dr. Chen, whose research has changed the field of medicine, recently retired." (Hace poco que se retiró.)',
          },
          {
            id: 'b2-m4-l1-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension whose',
            difficulty: 3,
            prompt: 'What does the audio say about her colleagues?',
            correctAnswer: 'Their dedication was inspiring',
            options: ['They were not dedicated', 'Their dedication was inspiring', 'They worked for many decades'],
            explanation: '"She worked with colleagues whose dedication was inspiring."',
          },
          {
            id: 'b2-m4-l1-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'According to the audio, what happened to her students?',
            correctAnswer: 'They became leaders in their fields',
            options: ['They abandoned their careers', 'They became leaders in their fields', 'They moved to other countries'],
            explanation: '"The students to whom she taught became leaders in their fields."',
          },
        ],
      },
    },
    {
      id: 'b2-m4-l1-ex10',
      type: 'writing',
      concept: 'whose and formal structures in writing',
      difficulty: 4,
      prompt: 'Escribí un breve párrafo (80-120 palabras) describiendo a una persona importante en tu vida. Usá al menos 2 relativas con "whose" (definidora o no definidora) y al menos 1 estructura formal con preposición + which/whom.',
      promptTranslation: 'Write about someone important, using "whose" and formal preposition + which.',
      correctAnswer: '',
      explanation: 'Un buen párrafo incluye varias relativas variadas que combinan "whose" con estructuras formales para crear un texto más pulido y académico.',
      taskType: 'article',
      targetReader: 'a teacher',
      register: 'formal',
      contentPoints: ['Al menos 2 relativas con "whose" (pueden ser definidoras o no definidoras)', 'Al menos 1 estructura formal con preposición + which/whom', 'Descripción clara de la persona'],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m4-l1-ex11',
      type: 'speaking',
      concept: 'whose pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'The colleague with whom she collaborates is an expert in her field.',
      explanation: 'Practicá la pronunciación clara de "whose" (/huːz/) y la entonación natural en una relativa no definidora.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m4-l1-mt1',
      type: 'multiple_choice',
      concept: 'whose possession',
      difficulty: 3,
      prompt: 'Completa: "The author ___ books I\'ve read is visiting our school next month."',
      promptTranslation: 'El autor cuyos libros he leído visitará nuestra escuela el próximo mes.',
      correctAnswer: 'whose',
      options: ['whose', 'who', 'which'],
      explanation: '"Whose" expresa que los libros PERTENECEN al autor. Relativa definidora (sin comas).',
    },
    {
      id: 'b2-m4-l1-mt2',
      type: 'error_correction',
      concept: 'commas in non-defining relatives',
      difficulty: 3,
      prompt: 'Corrige: "My friend whose apartment is near the beach visited me yesterday."',
      correctAnswer: 'My friend, whose apartment is near the beach, visited me yesterday.',
      acceptedAnswers: [
        'My friend, whose apartment is near the beach, visited me yesterday',
        'My friend, whose apartment is near the beach, visited me yesterday.',
      ],
      acceptApproximate: true,
      explanation: 'La relativa es NO DEFINIDORA (ya sabemos quién es: my friend). Lleva comas ANTES y DESPUÉS de la relativa.',
    },
    {
      id: 'b2-m4-l1-mt3',
      type: 'true_false',
      concept: 'preposition placement formal',
      difficulty: 4,
      prompt: '"The paper for which she won an award" es más formal que "the paper she won an award for".',
      correctAnswer: 'true',
      explanation: 'Correcto. En registro formal la preposición va ANTES de which/whom. La otra opción (preposición al final) es más informal y hablada.',
    },
    {
      id: 'b2-m4-l1-mt4',
      type: 'select_correct',
      concept: 'whom vs who after preposition',
      difficulty: 4,
      prompt: '¿Cuál es GRAMATICALMENTE CORRECTA en registro formal?',
      correctAnswer: 'The person to whom I spoke understood the problem.',
      options: [
        'The person to who I spoke understood the problem.',
        'The person to whom I spoke understood the problem.',
        'The person to that I spoke understood the problem.',
      ],
      explanation: 'Después de preposición en registro formal usamos "whom" (objeto), NUNCA "who".',
    },
  ],
  reviewItems: ['b1-m8-l1', 'b1-m8-l2', 'b1-m8-l3'],
  prerequisites: ['b1-m8-l3'],
}
