import type { Lesson } from '../../types'

export const lesson71NegativeInversion: Lesson = {
  id: 'b2-m7-l1',
  moduleId: 'm7-emphasis-inversion',
  order: 0,
  title: 'Negative inversion: never before, no sooner...than',
  objective: 'Usar la inversión con expresiones negativas al inicio (never before, no sooner...than) para dar énfasis y dramatizar en inglés formal.',
  explanation_es: `La inversión es un recurso gramatical donde movemos el auxiliar ANTES que el sujeto para crear énfasis y dramatización. En esta lección nos enfocamos en inversión NEGATIVA: cuando empezamos con palabras negativas fuertes como "never before" (nunca antes) o "no sooner...than" (tan pronto como), el patrón cambia de SVO a una estructura donde el auxiliar se adelanta.

Estructura básica de inversión negativa:

1. **"Never (before) + auxiliar + sujeto + verbo..."**
   Cuando "never" o "never before" está al inicio de la oración por énfasis, necesitamos inversión.
   - Never have I seen such a mess. = Nunca he visto un desorden así.
   - Forma normal: I have never seen such a mess.

2. **"No sooner + había + sujeto + que + pasó otra cosa"**
   Se usa "no sooner...than" para expresar que dos acciones pasaron rápidamente, una tras otra.
   - No sooner had she arrived than it started to rain. = Apenas había llegado que empezó a llover.
   - Forma normal: She had no sooner arrived than it started to rain.

3. **"Hardly / Scarcely + auxiliar + sujeto" (variante menos común pero similar)**
   - Hardly had we arrived when the power went out. = Apenas habíamos llegado cuando se fue la luz.

Puntos importantes:

1. La inversión negativa es MÁS FORMAL y DRAMÁTICA que el orden normal. Es propia de registro escrito formal, narrativa dramática, literatura. No es común en habla cotidiana informal.

2. El auxiliar QUE se adelanta depende del tiempo:
   - Presente Simple: Never do I... (poco común, se suena muy arcaico)
   - Presente Perfect: Never have I...
   - Pasado Simple: Never did I...
   - Pasado Perfect: Never had I... / No sooner had I...
   - Condicional: Never would I...

3. "Never before" y "never" solo al inicio triguerean inversión. En medio de la oración, no hay inversión:
   - I have never seen this before. (Sin inversión, orden normal)
   - Never have I seen this before. (Con inversión, formal y dramático)

4. "No sooner...than" siempre lleva inversión en la primera parte. La segunda parte es normal:
   - No sooner had they left than the boss arrived. ✅ (Inversión en la primera cláusula)
   - They had no sooner left than the boss arrived. ✅ (También válido, menos dramático)

5. Comparación con niveles anteriores:
   - B1: Ya conocés el Present Perfect ("I have seen") y Past Perfect ("I had gone").
   - B2: Ahora usás esos mismos tiempos PERO con inversión para énfasis dramático y registro formal.`,
  examples: [
    { english: 'Never before have I felt so nervous.', spanish: 'Nunca antes me había sentido tan nervioso.', note: 'Énfasis dramático: la emoción es extraordinaria.' },
    { english: 'No sooner had we finished our meal than the waiter brought the bill.', spanish: 'Apenas habíamos terminado de comer que el mozo trajo la cuenta.', note: 'Dos acciones rápidas, una tras otra.' },
    { english: 'Never have the workers seen such difficult conditions.', spanish: 'Nunca los trabajadores han visto condiciones tan difíciles.', note: 'Énfasis en lo extremo de la situación.' },
    { english: 'Hardly had the concert started when the fire alarm went off.', spanish: 'Apenas había empezado el concierto que sonó la alarma de incendio.', note: 'Variante con "hardly" (apenas).' },
    { english: 'No sooner had she told him the truth than he walked out.', spanish: 'Apenas le había dicho la verdad que él se fue.', note: 'Consecuencia inmediata dramatizada.' },
    { english: 'Never would I have imagined such an ending.', spanish: 'Nunca hubiera imaginado tal desenlace.', note: 'Inversión en condicional: expresa sorpresa sobre lo pasado.' },
  ],
  rule: `Fórmula de inversión negativa:

1. Never (before) + auxiliar + sujeto + verbo principal...
   → Never have I seen this.
   → Never did they arrive.
   → Never would I do it.

2. No sooner + auxiliar pasado + sujeto + que + resultado...
   → No sooner had she left than...
   → No sooner did they arrive than...

3. Hardly/Scarcely + auxiliar + sujeto + when/before...
   → Hardly had we started when...
   → Scarcely did anyone believe it...

Reglas de inversión:
1. El auxiliar se adelanta al sujeto (auxiliar + sujeto + verbo, no sujeto + auxiliar + verbo).
2. El auxiliar debe ser conjugado según el tiempo: have (present perfect), had (past perfect), did (pasado simple), would (condicional).
3. "Never", "no sooner", "hardly", "scarcely" siempre disparan inversión si están al INICIO.
4. Es registro FORMAL, no cotidiano.`,
  formation: {
    title: 'Cómo se forma la inversión negativa',
    intro: 'Cuando una expresión negativa fuerte (never, no sooner, hardly, scarcely) abre la oración, el auxiliar se adelanta al sujeto: auxiliar + sujeto + verbo. Es un recurso formal y dramático, propio de la narrativa y el registro escrito.',
    patterns: [
      {
        name: 'Never (before) + auxiliar + sujeto',
        formula: 'Never (before) + auxiliar (have/had/did/would) + sujeto + verbo principal + complemento',
        examples: [
          { english: 'Never have I seen such a mess.', spanish: 'Nunca he visto un desorden así.' },
          { english: 'Never before have I felt so nervous.', spanish: 'Nunca antes me había sentido tan nervioso.' },
          { english: 'Never would I have imagined such an ending.', spanish: 'Nunca hubiera imaginado tal desenlace.' },
        ],
        note: 'El auxiliar se elige según el tiempo: have (present perfect), had (past perfect), did (past simple), would (condicional).',
      },
      {
        name: 'No sooner + auxiliar + sujeto + than',
        formula: 'No sooner + auxiliar (had/did) + sujeto + verbo + than + cláusula',
        examples: [
          { english: 'No sooner had she arrived than it started to rain.', spanish: 'Apenas había llegado que empezó a llover.' },
          { english: 'No sooner had we finished our meal than the waiter brought the bill.', spanish: 'Apenas habíamos terminado de comer que el mozo trajo la cuenta.' },
        ],
        note: 'El conector es SIEMPRE than (no "when" ni "and"). La segunda parte de la oración va en orden normal.',
      },
      {
        name: 'Hardly / Scarcely + auxiliar + sujeto + when/before',
        formula: 'Hardly / Scarcely + auxiliar (had/did) + sujeto + verbo + when/before + cláusula',
        examples: [
          { english: 'Hardly had we arrived when the power went out.', spanish: 'Apenas habíamos llegado cuando se fue la luz.' },
          { english: 'Hardly had the concert started when the fire alarm went off.', spanish: 'Apenas había empezado el concierto que sonó la alarma de incendio.' },
        ],
        note: 'Variante con hardly/scarcely: expresa que dos acciones pasaron casi al mismo tiempo.',
      },
    ],
    notes: [
      'Sin inversión en medio de la oración: I have never seen this (orden normal) vs. Never have I seen this (formal y dramático).',
      'La inversión solo se dispara cuando la palabra negativa está al INICIO de la oración.',
      'Es registro formal: no se usa en habla cotidiana informal.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ Never I have seen such a thing.', correct: '✅ Never have I seen such a thing.', explanation: 'Con inversión negativa, el auxiliar (have) va ANTES que el sujeto (I), no después.' },
    { wrong: '❌ No sooner had she arrived, it started raining.', correct: '✅ No sooner had she arrived than it started to rain.', explanation: '"No sooner...than" es el patrón correcto, no "no sooner...and" ni coma. Debe llevar "than".' },
    { wrong: '❌ Never before I saw such an error.', correct: '✅ Never before have I seen such an error.', explanation: 'Necesitamos el auxiliar "have" + participio (seen), no solo el pasado simple (saw).' },
    { wrong: '❌ No sooner did we arrived than...', correct: '✅ No sooner had we arrived than...', explanation: 'Para dos acciones rápidas donde la primera pasó primero, usamos "had", no "did".' },
  ],
  vocabulary: [
    { word: 'inversion', translation_es: 'inversión', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'The inversion of subject and verb creates emphasis.', exampleTranslation: 'La inversión del sujeto y verbo crea énfasis.' },
    { word: 'drama', translation_es: 'dramatización, drama', level: 'B2', category: 'general', partOfSpeech: 'noun', example: 'He added drama to his story by using inversion.', exampleTranslation: 'Agregó dramatización a su historia usando inversión.' },
    { word: 'to emphasize', translation_es: 'enfatizar, subrayar', level: 'B2', category: 'general', partOfSpeech: 'verb', example: 'This structure emphasizes the importance of the moment.', exampleTranslation: 'Esta estructura enfatiza la importancia del momento.' },
    { word: 'extraordinary', translation_es: 'extraordinario', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'Never have I experienced such extraordinary circumstances.', exampleTranslation: 'Nunca he experimentado circunstancias tan extraordinarias.' },
    { word: 'scarcely', translation_es: 'apenas', level: 'B2', category: 'adverbs', partOfSpeech: 'adverb', example: 'Scarcely had we left when it began to snow.', exampleTranslation: 'Apenas nos fuimos que empezó a nevar.' },
    { word: 'to trigger', translation_es: 'disparar, provocar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'Negative words at the start trigger inversion.', exampleTranslation: 'Las palabras negativas al inicio disparan inversión.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-negative-inversion',
      level: 'B2',
      name: 'Negative inversion for emphasis',
      explanation_es: 'Cuando expresiones negativas como "never before", "no sooner...than", o "hardly" están al inicio de la oración, el auxiliar se adelanta al sujeto para crear énfasis dramático (registro formal).',
      formula: 'Never/No sooner/Hardly + auxiliar + sujeto + verbo... = formal emphasis',
      examples: [
        'Never have I seen such a mess.',
        'No sooner had she arrived than it started to rain.',
        'Hardly had we begun when the alarm went off.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m7-l1-ex1',
      type: 'multiple_choice',
      concept: 'negative inversion recognition',
      difficulty: 3,
      prompt: 'Completa: "Never ___ I seen such amazing views."',
      promptTranslation: 'Nunca he visto vistas tan increíbles.',
      correctAnswer: 'have',
      options: ['have', 'had', 'did'],
      explanation: 'Con "never" al inicio (inversión) y en presente perfecto, usamos "have" (presente del auxiliar).',
    },
    {
      id: 'b2-m7-l1-ex2',
      type: 'multiple_choice',
      concept: 'no sooner than pattern',
      difficulty: 3,
      prompt: 'Completa: "No sooner ___ they arrived ___ it started to rain."',
      promptTranslation: 'Apenas habían llegado que empezó a llover.',
      correctAnswer: 'had / than',
      options: ['had / than', 'did / when', 'have / and'],
      explanation: '"No sooner...than" necesita "had" (pasado perfecto) en la inversión y "than" para conectar las acciones.',
    },
    {
      id: 'b2-m7-l1-ex3',
      type: 'fill_blank',
      concept: 'never inversion form',
      difficulty: 3,
      prompt: 'Completa: "Never ___ the team played so badly."',
      promptTranslation: 'Nunca el equipo jugó tan mal.',
      correctAnswer: 'had',
      acceptedAnswers: ['have'],
      explanation: 'En pasado, "never" requiere inversión con "had" (past perfect, aunque aquí se refiere a un evento puntual). Alternativamente, con pasado simple sería "Never did the team play..."',
    },
    {
      id: 'b2-m7-l1-ex4',
      type: 'error_correction',
      concept: 'inversion errors',
      difficulty: 4,
      prompt: 'Corrige: "Never I have heard such nonsense."',
      correctAnswer: 'Never have I heard such nonsense.',
      acceptedAnswers: [
        'Never have I heard such nonsense',
        'Never have I heard such nonsense.',
      ],
      acceptApproximate: true,
      explanation: 'Con inversión negativa, el auxiliar "have" debe ir ANTES del sujeto "I".',
    },
    {
      id: 'b2-m7-l1-ex5',
      type: 'reorder',
      concept: 'negative inversion word order',
      difficulty: 3,
      prompt: 'Ordena las palabras (pensá en énfasis dramático):',
      promptTranslation: 'Apenas habíamos terminado que llegó mi jefe.',
      words: ['No', 'sooner', 'had', 'we', 'finished', 'than', 'my', 'boss', 'arrived.'],
      correctAnswer: 'No sooner had we finished than my boss arrived.',
      explanation: 'Orden de "no sooner...than": la inversión va en la primera parte (no sooner + had + sujeto), la segunda es normal.',
    },
    {
      id: 'b2-m7-l1-ex6',
      type: 'translate',
      concept: 'negative inversion translation',
      difficulty: 4,
      prompt: 'Traduce a inglés con inversión: "Nunca antes habíamos experimentado tal desastre."',
      correctAnswer: 'Never before had we experienced such a disaster.',
      acceptedAnswers: [
        'Never before had we experienced such a disaster',
        'Never have we experienced such a disaster before.',
      ],
      acceptApproximate: true,
      explanation: '"Nunca antes" → "Never before" al inicio con inversión de "had" (past perfect: we had experienced).',
    },
    {
      id: 'b2-m7-l1-ex7',
      type: 'select_correct',
      concept: 'when to use negative inversion',
      difficulty: 4,
      prompt: 'Cuál de estas opciones expresa más ÉNFASIS y es más FORMAL?',
      correctAnswer: 'Never have I seen such courage.',
      options: [
        'Never have I seen such courage.',
        'I have never seen such courage.',
        'I never saw such courage.',
      ],
      explanation: 'La inversión "Never have I..." es la más formal y dramática. La segunda es normal/cotidiana. La tercera es pasado simple, menos énfasis.',
    },
    {
      id: 'b2-m7-l1-ex8',
      type: 'true_false',
      concept: 'inversion rules',
      difficulty: 3,
      prompt: '"Hardly had the match ended when the crowd rushed onto the field" es un ejemplo correcto de inversión negativa.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Hardly" al inicio dispara inversión (had + sujeto), y "when" introduce la acción siguiente.',
    },
    {
      id: 'b2-m7-l1-ex9',
      type: 'listening',
      concept: 'negative inversion in context',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un narrador cuenta dos historias de eventos dramáticos y sorpresas, usando inversión negativa para énfasis.',
      listening: {
        audioText:
          'Last summer, I went on a hiking trip with my friends. Never before had I seen such beautiful mountains. We started early in the morning, and no sooner had we reached the summit than a terrible storm appeared. Hardly had we made it back to camp when we realized we had lost all our food supplies. Never will I forget that adventure.',
        audioUrl: '/audio/tts/b2-m7-l1-ex9.mp3',
        questions: [
          {
            id: 'b2-m7-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What had the narrator never seen before?',
            correctAnswer: 'Such beautiful mountains',
            options: ['Such beautiful mountains', 'A terrible storm', 'The summit'],
            explanation: '"Never before had I seen such beautiful mountains."',
          },
          {
            id: 'b2-m7-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The storm appeared after they climbed down the mountain.',
            correctAnswer: 'false',
            explanation: '"No sooner had we reached the summit than a terrible storm appeared" = el tormenta apareció justo después de llegar a la cima.',
          },
          {
            id: 'b2-m7-l1-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What happened when they arrived back at camp?',
            correctAnswer: 'They realized they had lost all their food supplies.',
            options: [
              'They realized they had lost all their food supplies.',
              'They found the food supplies missing.',
              'They ate dinner immediately.',
            ],
            explanation: '"Hardly had we made it back to camp when we realized we had lost all our food supplies."',
          },
        ],
      },
    },
    {
      id: 'b2-m7-l1-ex10',
      type: 'writing',
      concept: 'negative inversion in narrative',
      difficulty: 4,
      prompt: 'Escribí un breve párrafo sobre un evento sorprendente o dramático que hayas experimentado. Usá al menos 2 ejemplos de inversión negativa (never before, no sooner...than, hardly) para dramatizar la historia.',
      promptTranslation: 'Write a short paragraph about a surprising or dramatic event. Use at least 2 examples of negative inversion for dramatic effect.',
      correctAnswer: '',
      explanation: 'Un buen párrafo usa la inversión negativa de manera natural para crear énfasis en los momentos clave de la historia.',
      taskType: 'story',
      targetReader: 'a friend',
      register: 'neutral',
      contentPoints: [
        'Al menos 2 ejemplos de inversión negativa (never, no sooner, hardly)',
        'Un evento claro con desarrollo lógico',
        'El registro debe ser apropiadamente dramático pero no exagerado',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 130,
    },
    {
      id: 'b2-m7-l1-ex11',
      type: 'speaking',
      concept: 'negative inversion pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Never have I felt so grateful in my entire life.',
      explanation: 'Practicá la entonación: "Never" recibe énfasis, luego baja en "have I". La frase suena formal y dramática.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m7-l1-mt1',
      type: 'multiple_choice',
      concept: 'never inversion',
      difficulty: 3,
      prompt: 'Completa: "Never ___ such a talented musician visited our small town."',
      promptTranslation: 'Nunca un músico tan talentoso visitó nuestro pequeño pueblo.',
      correctAnswer: 'has',
      options: ['has', 'have', 'did'],
      explanation: 'Con "never" al inicio y sujeto singular ("a talented musician"), el auxiliar es "has" (present perfect singular).',
    },
    {
      id: 'b2-m7-l1-mt2',
      type: 'error_correction',
      concept: 'no sooner pattern',
      difficulty: 4,
      prompt: 'Corrige: "No sooner did she tell him the news when he left."',
      correctAnswer: 'No sooner had she told him the news than he left.',
      acceptedAnswers: [
        'No sooner had she told him the news than he left',
        'No sooner had she told him the news than he left.',
      ],
      acceptApproximate: true,
      explanation: '"No sooner...than" requiere "had" (past perfect) porque expresamos que una cosa pasó primero, luego la otra. El conector es "than", no "when".',
    },
    {
      id: 'b2-m7-l1-mt3',
      type: 'true_false',
      concept: 'inversion formality',
      difficulty: 3,
      prompt: '"Never have I seen this" es más formal y dramático que "I have never seen this".',
      correctAnswer: 'true',
      explanation: 'Correcto. La inversión negativa es recurso de registro formal y narrativo dramático.',
    },
  ],
  reviewItems: ['b1-m4-l1', 'b1-m8-l1'],
  workbookRefs: [
    { levelId: 'b2', page: 7, exercises: [1, 2, 3], note: 'Práctica de inversión negativa' },
  ],
  prerequisites: ['b1-m4-l3'],
}
