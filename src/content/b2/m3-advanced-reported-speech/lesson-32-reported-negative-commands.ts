import type { Lesson } from '../../types'

export const lesson32ReportedNegativeCommands: Lesson = {
  id: 'b2-m3-l2',
  moduleId: 'm3-advanced-reported-speech',
  order: 1,
  title: 'Reported negative commands: tell/ask + not to',
  objective: 'Reportar órdenes y peticiones negativas usando tell/ask + objeto + not to, con backshift temporal completo (tiempos verbales, expresiones de tiempo y lugar).',
  explanation_es: `Ya conocés tell/ask + objeto + to para órdenes y peticiones positivas ("He told me to sit down."). Ahora vamos a ver cómo reportar órdenes NEGATIVAS, y además vamos a dominar el BACKSHIFT TEMPORAL completo: no solo cambian los tiempos verbales, sino también las expresiones de tiempo y lugar.

**Parte 1: Órdenes negativas reportadas**

Para reportar una orden o petición negativa, agregamos "not" ANTES del infinitivo:

Estructura: tell/ask + objeto + not to + infinitivo

Ejemplos:
- "Don't worry!" → "He told me not to worry." (Me dijo que no me preocupara.)
- "Don't be late!" → "She asked them not to be late." (Les pidió que no llegaran tarde.)
- "Don't touch that!" → "He warned me not to touch that." (Me advirtió que no tocara eso.)

Nota importante: los verbos warn, persuade, convince también siguen este patrón (ya viste esto en la lección anterior, pero aquí lo practicamos en contexto de órdenes negativas).

**Parte 2: Backshift temporal COMPLETO**

El backshift no solo afecta los tiempos verbales (Present Simple → Past Simple), sino TAMBIÉN las expresiones de tiempo y lugar. Esto es muy importante en reportes profesionales y académicos.

TIEMPOS VERBALES (ya los conocés de B1):
- Present Simple → Past Simple: "I live in London" → "He said he lived in London."
- Present Continuous → Past Continuous: "I am working" → "She said she was working."
- Past Simple → Past Perfect: "I finished the project" → "He said he had finished the project."
- Present Perfect → Past Perfect: "I have done it" → "She said she had done it."
- will → would: "I will come" → "He said he would come."
- can → could: "I can swim" → "She said she could swim."
- may → might: "I may be late" → "He said he might be late."

EXPRESIONES DE TIEMPO Y LUGAR (backshift):
- today → that day: "I will do it today" → "He said he would do it that day."
- tomorrow → the next day / the following day: "I'll call tomorrow" → "She said she would call the next day."
- yesterday → the day before / the previous day: "I left yesterday" → "He said he had left the day before."
- next week → the following week: "I'll start next week" → "She said she would start the following week."
- last month → the previous month: "I saw him last month" → "He said he had seen him the previous month."
- here → there: "I will wait here" → "She said she would wait there."
- now → then: "I am busy now" → "He said he was busy then." (Menos común, pero existe.)
- this week → that week: "I'm busy this week" → "She said she was busy that week."

ATENCIÓN: Algunos cambios NO son obligatorios pero son MÁS NATURALES:
- Si reportas algo que ocurrió hace poco o es todavía relevante, PUEDES evitar el backshift en tiempos verbales (pero el backshift de lugar/tiempo SÍ es casi siempre necesario).
- Ej: "He said he lives in London" (sigue viviendo ahí, backshift opcional) vs. "He said he lived in London" (backshift obligatorio si habla del pasado).

**Parte 3: Combinando órdenes negativas + backshift temporal**

Cuando combinas una orden negativa reportada con backshift de tiempo/lugar, la estructura es:

tell/ask + objeto + not to + infinitivo + ajustes temporales en el resto de la frase

Ejemplos:
- "Don't go to the party tomorrow!" (Orden negativa con tiempo)
  → "He told me not to go to the party the next day." (El "tomorrow" pasa a "the next day".)

- "Don't worry about this today!"
  → "She asked him not to worry about it that day."

- "Don't look here!"
  → "He told us not to look there."

Puntos importantes:

1. La forma "not to" va SIEMPRE después del objeto y ANTES del infinitivo en órdenes reportadas.

2. El backshift de tiempo/lugar NO se aplica solo al verbo de reporte — afecta TODA la cláusula reportada. Si la persona original dice "tomorrow", eso se reporta como "the next day".

3. En órdenes negativas, el sujeto de la orden reportada va en forma de objeto (me, you, him, her, us, them, etc.).

4. Algunos reportes de órdenes negativas pueden usar "tell" (más directo) o "ask" (más cortés). Ambos son válidos, pero el tono cambia.

5. El tiempo del verbo de reporte (told vs. tells) determina si aplicamos backshift. Si es pasado (told, asked), aplicamos backshift. Si es presente (tells, asks), no siempre es necesario.`,
  examples: [
    {
      english: 'He told me not to worry.',
      spanish: 'Me dijo que no me preocupara.',
      note: 'Orden negativa reportada con tell. No hay ajuste de tiempo porque la orden fue general.',
    },
    {
      english: '"Don\'t be late tomorrow!" → She told us not to be late the next day.',
      spanish: '"¡No llegues tarde mañana!" → Nos dijo que no llegáramos tarde al día siguiente.',
      note: 'Backshift de tiempo: "tomorrow" → "the next day". Orden negativa sin objeto original, se entiende como "us".',
    },
    {
      english: '"Don\'t look here!" → He warned them not to look there.',
      spanish: '"¡No mires aquí!" → Les advirtió que no miraran allí.',
      note: 'Backshift de lugar: "here" → "there".',
    },
    {
      english: '"Don\'t tell anyone this week." → She asked me not to tell anyone that week.',
      spanish: '"No le cuentes a nadie esta semana." → Me pidió que no le contara a nadie esa semana.',
      note: 'Backshift de expresión temporal: "this week" → "that week".',
    },
    {
      english: 'The teacher told the students not to leave before finishing the test.',
      spanish: 'El profesor les dijo a los estudiantes que no se fueran antes de terminar la prueba.',
      note: 'Orden negativa sin tiempo/lugar específico — no hay ajuste temporal necesario.',
    },
    {
      english: '"You must not be late tomorrow." → He insisted that I must not be late the next day.',
      spanish: '"No debes llegar tarde mañana." → Insistió en que no debía llegar tarde al día siguiente.',
      note: 'Orden negativa con "must not" (más fuerte). Estructura con "insisted" + that.',
    },
  ],
  rule: `Fórmula de órdenes negativas reportadas con backshift temporal:

ÓRDENES NEGATIVAS REPORTADAS:
tell / ask / warn / persuade + objeto + not to + infinitivo

Ejemplos:
- He told me not to worry.
- She asked them not to be late.
- He warned us not to touch it.

BACKSHIFT TEMPORAL - TIEMPOS VERBALES:
- Present Simple → Past Simple
- Present Continuous → Past Continuous
- Past Simple → Past Perfect
- Present Perfect → Past Perfect
- will → would
- can → could
- may → might

Ejemplo en orden reportada:
"I can do it today" → "He said he could do it that day."

BACKSHIFT TEMPORAL - EXPRESIONES DE TIEMPO Y LUGAR:
- today → that day
- tomorrow → the next day / the following day
- yesterday → the day before / the previous day
- this week → that week
- next week → the following week
- here → there
- now → then (menos común)

Ejemplo en orden negativa:
"Don't come here tomorrow!" → "She told him not to come there the next day."

REGLAS CRÍTICAS:
1. El objeto va SIEMPRE entre el verbo de reporte y "not to".
2. El backshift se aplica tanto a tiempos verbales como a expresiones de tiempo/lugar.
3. En reportes en pasado (told, asked), el backshift es obligatorio.
4. En reportes en presente (tells, asks), el backshift es opcional si la situación sigue siendo relevante.`,
  formation: {
    title: 'Cómo se forman las órdenes negativas reportadas con backshift',
    intro: 'Para reportar una orden o petición negativa usamos tell/ask/warn + objeto + not to + infinitivo. Si el reporte es en pasado, además aplicamos backshift: los tiempos verbales retroceden y las expresiones de tiempo y lugar cambian (tomorrow → the next day, here → there).',
    patterns: [
      {
        name: 'Orden negativa reportada',
        formula: 'tell / ask / warn + objeto + not to + infinitivo',
        examples: [
          { english: 'He told me not to worry.', spanish: 'Me dijo que no me preocupara.' },
          { english: 'She asked them not to be late.', spanish: 'Les pidió que no llegaran tarde.' },
        ],
        note: 'El objeto va SIEMPRE entre el verbo de reporte y "not to".',
      },
      {
        name: 'Backshift — tiempos verbales',
        formula: 'Present Simple → Past Simple · will → would · can → could · may → might · Past Simple/Present Perfect → Past Perfect',
        examples: [
          { english: '"I can do it today" → He said he could do it that day.', spanish: '"Puedo hacerlo hoy" → Dijo que podía hacerlo ese día.' },
          { english: '"I have finished" → She said she had finished.', spanish: '"He terminado" → Dijo que había terminado.' },
        ],
      },
      {
        name: 'Backshift — tiempo y lugar',
        formula: 'today → that day · tomorrow → the next day · yesterday → the day before · here → there · this week → that week',
        examples: [
          { english: '"Don\'t come here tomorrow!" → She told him not to come there the next day.', spanish: '"¡No vengas aquí mañana!" → Le dijo que no fuera allí al día siguiente.' },
          { english: '"Don\'t worry about this today." → She asked him not to worry about it that day.', spanish: '"No te preocupes por esto hoy." → Le pidió que no se preocupara por eso ese día.' },
        ],
        note: 'El backshift de tiempo/lugar se aplica a TODA la cláusula reportada, no solo al verbo.',
      },
    ],
    notes: [
      'Si el verbo de reporte está en pasado (told, asked), el backshift de tiempo y lugar es obligatorio; en presente (tells, asks) es opcional si la situación sigue vigente.',
      'El sujeto de la orden original se reporta como objeto: me, you, him, her, us, them.',
      '"Tell" es más directo; "ask" es más cortés. Ambos siguen el mismo patrón.',
    ],
  },
  commonMistakes: [
    {
      wrong: '❌ He told not to worry me.',
      correct: '✅ He told me not to worry.',
      explanation: 'El objeto (me) va SIEMPRE entre "told" y "not to". Orden correcto: tell + objeto + not to + infinitivo.',
    },
    {
      wrong: '❌ She asked them to not be late.',
      correct: '✅ She asked them not to be late.',
      explanation: 'La estructura es "not to", no "to not". "Not" va ANTES del infinitivo, no en medio.',
    },
    {
      wrong: '❌ He warned me not to go there tomorrow.',
      correct: '✅ He warned me not to go there the next day.',
      explanation: 'Si el reporte es en pasado, "tomorrow" debe cambiar a "the next day". Backshift temporal obligatorio.',
    },
    {
      wrong: '❌ She told me not to come here yesterday.',
      correct: '✅ She told me not to come there the day before.',
      explanation: 'Backshift de lugar: "here" → "there". Backshift de tiempo: "yesterday" → "the day before".',
    },
    {
      wrong: '❌ He tells me not to worry today.',
      correct: '✅ He told me not to worry. (O: He tells me not to worry today — si es presente actual.)',
      explanation: 'Si usas "tells" (presente), generalmente NO aplicas backshift de tiempo. Si usas "told" (pasado), SÍ aplicas.',
    },
  ],
  vocabulary: [
    {
      word: 'negative command',
      translation_es: 'orden negativa, mandato negativo',
      level: 'B2',
      category: 'reported speech',
      partOfSpeech: 'noun phrase',
      example: 'A negative command tells someone not to do something.',
      exampleTranslation: 'Una orden negativa le dice a alguien que no haga algo.',
    },
    {
      word: 'backshift',
      translation_es: 'retroceso temporal, cambio de tiempo verbal',
      level: 'B2',
      category: 'grammar',
      partOfSpeech: 'noun',
      example: 'Backshift changes present simple to past simple in reported speech.',
      exampleTranslation: 'El backshift cambia el presente simple al pasado simple en el estilo indirecto.',
    },
    {
      word: 'time expression',
      translation_es: 'expresión de tiempo',
      level: 'B2',
      category: 'grammar',
      partOfSpeech: 'noun phrase',
      example: '"Tomorrow" and "the next day" are time expressions that shift in reported speech.',
      exampleTranslation: '"Mañana" y "el día siguiente" son expresiones de tiempo que cambian en el estilo indirecto.',
    },
    {
      word: 'warn',
      translation_es: 'advertir, prevenir',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'He warned me not to trust that person.',
      exampleTranslation: 'Me advirtió que no confiara en esa persona.',
    },
    {
      word: 'persuade',
      translation_es: 'persuadir, convencer',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'She persuaded him not to quit his job.',
      exampleTranslation: 'Lo persuadió a no dejar su trabajo.',
    },
    {
      word: 'following',
      translation_es: 'siguiente, próximo',
      level: 'B2',
      category: 'time expressions',
      partOfSpeech: 'adjective',
      example: 'He said he would call the following week.',
      exampleTranslation: 'Dijo que llamaría la semana siguiente.',
    },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-reported-negative-commands',
      level: 'B2',
      name: 'Reported negative commands: tell/ask + object + not to',
      explanation_es: 'Para reportar órdenes o peticiones negativas, usamos tell/ask/warn + objeto + not to + infinitivo.',
      formula: 'tell / ask / warn + object + not to + infinitive',
      examples: [
        'He told me not to worry.',
        'She asked them not to be late.',
        'He warned us not to touch it.',
      ],
    },
    {
      id: 'gp-b2-backshift-tense',
      level: 'B2',
      name: 'Backshift: tense changes in reported speech',
      explanation_es: 'En el estilo indirecto pasado, los tiempos verbales retroceden: Present Simple → Past Simple, Present Perfect → Past Perfect, will → would, etc.',
      formula: 'Present → Past tense shifts (Present Simple→Past Simple, Present Perfect→Past Perfect, will→would, can→could, may→might)',
      examples: [
        'He said he lived in London.',
        'She said she had finished the project.',
        'They said they would come tomorrow.',
      ],
    },
    {
      id: 'gp-b2-backshift-time-place',
      level: 'B2',
      name: 'Backshift: time and place expressions in reported speech',
      explanation_es: 'En reportes en pasado, también cambian las expresiones de tiempo y lugar: "today"→"that day", "tomorrow"→"the next day", "here"→"there".',
      formula: 'today→that day, tomorrow→the next day, yesterday→the day before, here→there, this week→that week',
      examples: [
        'She said she would do it that day.',
        'He said he would call the next day.',
        'They said they would wait there.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m3-l2-ex1',
      type: 'fill_blank',
      concept: 'negative commands reported',
      difficulty: 3,
      prompt: 'Completa: "He told me ___ to worry."',
      promptTranslation: 'Me dijo que no me preocupara.',
      correctAnswer: 'not',
      explanation: 'Orden negativa reportada: tell + objeto + not to + infinitivo. → told me not to worry.',
    },
    {
      id: 'b2-m3-l2-ex2',
      type: 'error_correction',
      concept: 'object position with not to',
      difficulty: 4,
      prompt: 'Encuentra el error: "She asked not to be late them."',
      correctAnswer: 'She asked them not to be late.',
      acceptedAnswers: ['She asked them not to be late', 'She asked them not to be late.'],
      acceptApproximate: true,
      explanation: 'El objeto (them) va SIEMPRE después del verbo de reporte y ANTES de "not to". → asked them not to be late.',
    },
    {
      id: 'b2-m3-l2-ex3',
      type: 'multiple_choice',
      concept: 'backshift of time expressions',
      difficulty: 3,
      prompt: '"Don\'t come tomorrow!" Reportando en pasado, ¿cuál es correcto?',
      promptTranslation: '¿Cuál reporte es correcto?',
      correctAnswer: 'She told him not to come the next day.',
      options: [
        'She told him not to come tomorrow.',
        'She told him not to come the next day.',
        'She told him not to come this day.',
      ],
      explanation: 'En reportes pasados, "tomorrow" cambia a "the next day" (backshift temporal).',
    },
    {
      id: 'b2-m3-l2-ex4',
      type: 'fill_blank',
      concept: 'backshift: place expressions',
      difficulty: 3,
      prompt: '"Don\'t look here!" → He warned me not to look ___.',
      promptTranslation: 'Me advirtió que no mirara allí.',
      correctAnswer: 'there',
      explanation: 'Backshift de lugar: "here" → "there". En reportes, cambia la perspectiva de lugar.',
    },
    {
      id: 'b2-m3-l2-ex5',
      type: 'translate',
      concept: 'reported negative commands with time backshift',
      difficulty: 4,
      prompt: 'Traduce: "Me pidió que no terminara hoy, sino mañana."',
      promptTranslation: 'She asked me not to finish today, but the next day.',
      correctAnswer: 'She asked me not to finish that day, but the next day.',
      acceptedAnswers: [
        'She asked me not to finish that day, but the next day',
        'She asked me not to finish that day, but the next day.',
      ],
      acceptApproximate: true,
      explanation: 'Backshift: "hoy" (today) → "that day", "mañana" (tomorrow) → "the next day" en el reporte pasado.',
    },
    {
      id: 'b2-m3-l2-ex6',
      type: 'reorder',
      concept: 'word order with told + object + not to',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Me advirtió que no llegara tarde.',
      words: ['warned', 'me', 'He', 'to', 'late', 'not', 'be'],
      correctAnswer: 'He warned me not to be late.',
      explanation: 'Orden correcto: sujeto (He) + verbo (warned) + objeto (me) + not to + infinitivo (be late).',
    },
    {
      id: 'b2-m3-l2-ex7',
      type: 'error_correction',
      concept: 'backshift of tense + time expression',
      difficulty: 4,
      prompt: 'Encuentra el error: "He told me not to come here yesterday."',
      correctAnswer: 'He told me not to come there the day before.',
      acceptedAnswers: [
        'He told me not to come there the day before',
        'He told me not to come there the day before.',
      ],
      acceptApproximate: true,
      explanation: 'Doble backshift: "here" → "there" (lugar) y "yesterday" → "the day before" (tiempo).',
    },
    {
      id: 'b2-m3-l2-ex8',
      type: 'true_false',
      concept: 'backshift mandatory in past reports',
      difficulty: 3,
      prompt: 'En reportes en pasado (told, asked), el backshift de tiempo y lugar es SIEMPRE obligatorio.',
      correctAnswer: 'true',
      explanation: 'Correcto. Si el verbo de reporte es en pasado (told, asked), el backshift de tiempo/lugar es obligatorio para reportar exactamente lo que se dijo.',
    },
    {
      id: 'b2-m3-l2-ex9',
      type: 'listening',
      concept: 'reported negative commands listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Manager en una reunión dando instrucciones negativas a su equipo. Los alumnos deben identificar qué se reportó y los cambios de tiempo/lugar.',
      listening: {
        audioText:
          "During the meeting, the manager said: \"Don't send emails after 6 PM today. Don't bring personal devices to the conference tomorrow. Don't discuss this project with anyone outside the team. And please, don't leave until we finish reviewing the quarterly report.\" Later, Anna reported to her friend what the manager said.",
        audioUrl: '/audio/tts/b2-m3-l2-ex9.mp3',
        questions: [
          {
            id: 'b2-m3-l2-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the manager tell them not to do today?',
            correctAnswer: 'Send emails after 6 PM',
            options: [
              'Send emails after 6 PM',
              'Bring personal devices',
              'Discuss the project with anyone',
            ],
            explanation: '"Don\'t send emails after 6 PM today."',
          },
          {
            id: 'b2-m3-l2-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The manager told them to bring personal devices.',
            correctAnswer: 'false',
            explanation: '"Don\'t bring personal devices to the conference tomorrow."',
          },
          {
            id: 'b2-m3-l2-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'If Anna reports this in the evening, what would she say about "tomorrow"?',
            correctAnswer: 'The manager told us not to bring devices the next day.',
            options: [
              'The manager told us not to bring devices tomorrow.',
              'The manager told us not to bring devices the next day.',
              'The manager told us not to bring devices this day.',
            ],
            explanation: 'Backshift temporal: "tomorrow" → "the next day" cuando se reporta en pasado.',
          },
        ],
      },
    },
    {
      id: 'b2-m3-l2-ex10',
      type: 'writing',
      concept: 'writing reported negative commands',
      difficulty: 4,
      prompt: 'Escribí un email a un amigo resumiendo instrucciones que recibiste de tu jefe o profesor hoy. Usá al menos 4 órdenes negativas reportadas (con tell/ask/warn) e incluí CAMBIOS de tiempo/lugar en tus reportes (ej. si la instrucción dice "hoy", reporta "that day"). Sé creativo sobre el contexto.',
      promptTranslation: 'Write an email reporting negative commands you received, using backshift of time/place expressions.',
      correctAnswer: '',
      explanation: 'Un buen email reporta órdenes negativas con la estructura correcta (tell + objeto + not to) y aplica backshift temporal/espacial donde sea apropiado.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: [
        'Al menos 4 órdenes negativas reportadas con estructura correcta',
        'Cambios de tiempo y/o lugar en al menos 2 reportes',
        'Contexto claro y tono natural',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m3-l2-ex11',
      type: 'speaking',
      concept: 'reported negative commands pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'She asked them not to be late the next day.',
      explanation: 'Practicá la pronunciación natural de "not to" (suena rápido, a veces como "nahtoo") y la entonación de reportes de órdenes.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m3-l2-mt1',
      type: 'fill_blank',
      concept: 'negative commands with correct object position',
      difficulty: 3,
      prompt: 'Completa: "He told ___ not to worry about it."',
      promptTranslation: 'Me dijo que no me preocupara por eso.',
      correctAnswer: 'me',
      explanation: 'Estructura: tell + objeto (me) + not to + infinitivo.',
    },
    {
      id: 'b2-m3-l2-mt2',
      type: 'error_correction',
      concept: 'backshift of time in negative commands',
      difficulty: 4,
      prompt: 'Corrige: "She asked him not to go there tomorrow."',
      correctAnswer: 'She asked him not to go there the next day.',
      acceptedAnswers: [
        'She asked him not to go there the next day',
        'She asked him not to go there the next day.',
      ],
      acceptApproximate: true,
      explanation: 'En reportes pasados, "tomorrow" cambia a "the next day" (backshift).',
    },
    {
      id: 'b2-m3-l2-mt3',
      type: 'multiple_choice',
      concept: 'distinguish correct reported negative command',
      difficulty: 3,
      prompt: '¿Cuál reporta correctamente: "Don\'t come here tomorrow"?',
      correctAnswer: 'He told me not to come there the next day.',
      options: [
        'He told me not to come here tomorrow.',
        'He told me not to come there the next day.',
        'He told me to not come there the next day.',
      ],
      explanation: 'Orden correcta: tell + objeto + not to. Backshift: "here"→"there", "tomorrow"→"the next day".',
    },
    {
      id: 'b2-m3-l2-mt4',
      type: 'true_false',
      concept: 'backshift in present-tense reports',
      difficulty: 3,
      prompt: 'Si reportas en presente ("She tells me"), es obligatorio aplicar backshift de tiempo/lugar.',
      correctAnswer: 'false',
      explanation: 'Falso. El backshift es casi obligatorio solo cuando reportas en pasado (told, asked). En presente es más flexible.',
    },
  ],
  reviewItems: ['b2-m3-l1', 'b1-m7-l3'],
  prerequisites: ['b2-m3-l1'],
}
