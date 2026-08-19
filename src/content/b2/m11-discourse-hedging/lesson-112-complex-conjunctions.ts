import type { Lesson } from '../../types'

export const lesson112ComplexConjunctions: Lesson = {
  id: 'b2-m11-l2',
  moduleId: 'm11-discourse-hedging',
  order: 1,
  title: 'Complex Conjunctions: whereas, once, despite the fact that...',
  objective: 'Usar subordinantes complejos (whereas, once, except that, in order that, despite the fact that, due to the fact that, as if, as though) para crear relaciones sofisticadas entre cláusulas.',
  explanation_es: `Ya conocés conjunciones simples: because, although, when, if. Ahora vamos a las COMPLEJAS, que son más precisas y académicas.

**WHEREAS (mientras que, en cambio):**
- Función: comparar o CONTRASTAR dos situaciones o hechos — típicamente en contratos legales, ensayos analíticos, o cuando algo es inesperado.
- Orden: puede ir al inicio o en medio de la oración, típicamente introduce una cláusula que CONTRASTA con lo anterior.
- Ejemplo: The government promised lower taxes, whereas the opposite occurred. = El gobierno prometió impuestos bajos, mientras que sucedió lo opuesto.
- Nota: "Whereas" en documentos legales introduce una sección de justificación — "Whereas it is agreed..." (Considerando que se acuerda...).

**ONCE (una vez que, en cuanto):**
- Función: tiempo — introduce un punto EXACTO en el tiempo después del cual otra cosa pasa. Similar a "as soon as", pero más formal.
- Orden: típicamente va al inicio de la cláusula subordinada.
- Ejemplo: Once the document is signed, the agreement becomes binding. = Una vez que se firme el documento, el acuerdo se vuelve vinculante.
- Diferencia con "when": "When" es más general (puede repetirse). "Once" es un punto exacto (sucede solo UNA VEZ).

**EXCEPT (THAT) / EXCEPT FOR (excepto que, salvo que):**
- Función: introducir una EXCEPCIÓN a una afirmación general.
- Orden: va al inicio de la cláusula o después del verbo principal.
- Ejemplo: The plan is solid except that we lack sufficient funding. = El plan es sólido excepto que nos falta financiación suficiente.
- Variante: "Except for" + sustantivo: "Except for the budget, everything is ready." (Excepto por el presupuesto, todo está listo.)

**IN ORDER THAT / SO THAT (para que, a fin de que):**
- Función: propósito o resultado INTENCIONADO.
- Orden: van en la cláusula de propósito.
- Diferencia: "In order that" es más formal y ACADÉMICA. "So that" es más común en habla cotidiana.
- Ejemplo formal: The government introduced these policies in order that citizens might have better healthcare. = El gobierno introdujo estas políticas para que los ciudadanos tuvieran mejor atención médica.
- Nota: después de "in order that" / "so that" se usa modal (might, could, would, could) o condicional.

**DESPITE THE FACT THAT / IN SPITE OF THE FACT THAT (a pesar del hecho de que, pese a que):**
- Función: introducir un OBSTÁCULO o CONTRASTE — algo que NO impide que otra cosa pase.
- Orden: típicamente al inicio de la cláusula.
- Diferencia con "although": "Despite the fact that" es MUCHO más formal y explícita. "Although" es más natural.
- Ejemplo: Despite the fact that unemployment rose, consumer spending increased. = A pesar de que el desempleo subió, el gasto del consumidor aumentó.
- Variante corta: "Despite + sustantivo": "Despite the crisis, the company grew." (Sin "the fact that", es más conciso.)

**DUE TO THE FACT THAT (debido al hecho de que, debido a que):**
- Función: introducir una CAUSA.
- Orden: típicamente al inicio de la cláusula causal.
- Diferencia con "because": "Due to the fact that" es mucho más formal. "Because" es directo y natural.
- Ejemplo: Due to the fact that regulations changed, many businesses had to adapt. = Debido a que cambió la regulación, muchas empresas tuvieron que adaptarse.
- Variante: "Due to + sustantivo": "Due to the storm, flights were cancelled." (Sin cláusula, más corto.)

**AS IF / AS THOUGH (como si):**
- Función: comparación CONTRAFÁCTICA — algo que NO es verdad, pero se parece como si lo fuera. Se usa con PASADO en la cláusula condicional, aunque el tiempo principal sea presente.
- Orden: va en la cláusula comparativa.
- Ejemplo: He acts as if he were a millionaire. (Present simple o present continuous REQUIERE "were", no "was".)
- Ejemplo: She spoke as though the project had already failed. = Habló como si el proyecto ya hubiera fracasado.
- Regla crítica: "As if + past" da la idea de irrealidad — nunca "as if + present" en inglés formal.

**Puntos importantes:**

1. Estos subordinantes son comunes en ESCRITURA FORMAL (ensayos, reportes, artículos). En conversación casual, no se usan tan frecuentemente.

2. Algunos pueden reemplazarse por formas MÁS CORTAS y MENOS FORMALES:
   - "Despite the fact that..." → "Although..." (más directo)
   - "Due to the fact that..." → "Because..." (más natural)
   - "In order that..." → "So that..." (más común)

3. Cuando ELIJAS un subordinante complejo, es porque querés una FORMALIDAD específica, no por accidente.

4. "As if / as though" son INTERCAMBIABLES en significado; "as though" es ligeramente más literario.`,
  examples: [
    { english: 'The proposal looks promising, whereas the previous one was flawed.', spanish: 'La propuesta se ve prometedora, mientras que la anterior era defectuosa.', note: 'Contraste entre dos propuestas.' },
    { english: 'Once the contract is signed, the parties are bound by its terms.', spanish: 'Una vez que se firme el contrato, las partes quedan obligadas por sus términos.', note: 'Punto exacto en el tiempo.' },
    { english: 'The research is comprehensive except that it lacks recent data.', spanish: 'La investigación es completa excepto que le faltan datos recientes.', note: 'Excepción a lo anterior.' },
    { english: 'We implemented these changes in order that our efficiency might improve.', spanish: 'Implementamos estos cambios para que nuestra eficiencia mejorara.', note: 'Propósito intencional.' },
    { english: 'Despite the fact that funding was limited, the project succeeded.', spanish: 'A pesar de que la financiación era limitada, el proyecto tuvo éxito.', note: 'Obstáculo que no impidió el resultado.' },
    { english: 'Due to the fact that climate change accelerates, we must act now.', spanish: 'Debido a que el cambio climático se acelera, debemos actuar ahora.', note: 'Causa formal de la acción requerida.' },
    { english: 'He speaks as if he had lived through the war himself.', spanish: 'Habla como si hubiera vivido la guerra él mismo.', note: 'Contrafáctico: no lo hizo, pero parece que sí.' },
  ],
  rule: `Fórmula:

WHEREAS: [Situación A], whereas [Situación B contrastante].
- Función: contrastar. A veces empieza la oración completa.

ONCE: Once [condición / punto temporal], [resultado].
- Función: punto exacto de tiempo.
- Típicamente: present simple en ambas cláusulas.

EXCEPT (THAT): [Afirmación general], except that [excepción].
- Función: excepción.

IN ORDER THAT / SO THAT: [Acción], [in order that / so that] [resultado + modal].
- Función: propósito intencionado.
- CRÍTICO: modales después (might, could, would).

DESPITE / IN SPITE OF THE FACT THAT: Despite the fact that [obstáculo], [resultado].
- Función: contraste con obstáculo.
- Más formal que "although".

DUE TO THE FACT THAT: Due to the fact that [causa], [efecto].
- Función: causa formal.
- Más formal que "because".

AS IF / AS THOUGH: [Sujeto] [verbo] as if / as though [past tense (irrealidad)].
- Función: comparación contrafáctica.
- CRÍTICO: "were" (no "was") después de "as if/though".`,
  formation: {
    title: 'Cómo se forman las conjunciones complejas',
    intro: 'Los subordinantes complejos crean relaciones sofisticadas entre cláusulas en registro formal: contraste (whereas), punto temporal (once), obstáculo (despite the fact that), causa (due to the fact that), propósito (in order that) y comparación contrafáctica (as if).',
    patterns: [
      {
        name: 'whereas — contraste formal',
        formula: '[Situación A], whereas [situación B contrastante]',
        examples: [
          { english: 'The government promised lower taxes, whereas the opposite occurred.', spanish: 'El gobierno prometió impuestos bajos, mientras que sucedió lo opuesto.' },
          { english: 'The first theory is outdated, whereas the second is more recent.', spanish: 'La primera teoría está anticuada, mientras que la segunda es más reciente.' },
        ],
        note: 'Más formal que "but" o "although"; típico de documentos legales y análisis.',
      },
      {
        name: 'once — punto temporal exacto',
        formula: 'Once + [condición en presente simple], + [resultado]',
        examples: [
          { english: 'Once the document is signed, the agreement becomes binding.', spanish: 'Una vez que se firme el documento, el acuerdo se vuelve vinculante.' },
          { english: 'Once you submit the application, you cannot modify it.', spanish: 'Una vez que envíes la solicitud, no puedes modificarla.' },
        ],
        note: '"Once" marca un punto exacto que sucede una sola vez.',
      },
      {
        name: 'despite/in spite of the fact that — obstáculo',
        formula: 'Despite the fact that + [obstáculo], + [resultado]',
        examples: [
          { english: 'Despite the fact that funding was limited, the project succeeded.', spanish: 'A pesar de que la financiación era limitada, el proyecto tuvo éxito.' },
          { english: 'Despite the fact that unemployment rose, consumer spending increased.', spanish: 'A pesar de que el desempleo subió, el gasto del consumidor aumentó.' },
        ],
        note: 'Más formal y explícito que "although"; la variante corta es "despite + sustantivo".',
      },
      {
        name: 'due to the fact that — causa formal',
        formula: 'Due to the fact that + [causa], + [efecto]',
        examples: [
          { english: 'Due to the fact that regulations changed, many businesses had to adapt.', spanish: 'Debido a que cambió la regulación, muchas empresas tuvieron que adaptarse.' },
          { english: 'Due to the fact that the budget was reduced, we postponed the launch.', spanish: 'Debido a que se redujo el presupuesto, pospusimos el lanzamiento.' },
        ],
        note: 'Más formal que "because"; la variante corta es "due to + sustantivo".',
      },
      {
        name: 'in order that / so that — propósito',
        formula: '[Acción], in order that / so that + [sujeto + modal + verbo]',
        examples: [
          { english: 'We implemented these changes in order that our efficiency might improve.', spanish: 'Implementamos estos cambios para que nuestra eficiencia mejorara.' },
          { english: 'The government introduced the policy so that citizens could access better care.', spanish: 'El gobierno introdujo la política para que los ciudadanos tuvieran mejor atención.' },
        ],
        note: 'Después de "in order that" / "so that" se usa un modal (might, could, would).',
      },
      {
        name: 'as if / as though — comparación contrafáctica',
        formula: '[Sujeto] [verbo] as if/as though + [sujeto + verbo en pasado]',
        examples: [
          { english: 'He acts as if he were a millionaire.', spanish: 'Actúa como si fuera millonario.' },
          { english: 'She spoke as though the project had already failed.', spanish: 'Habló como si el proyecto ya hubiera fracasado.' },
        ],
        note: 'Tras "as if/though" se usa el pasado, y con sujeto singular, "were" (no "was").',
      },
    ],
    notes: [
      'Estos subordinantes son comunes en escritura formal; en conversación casual se prefiere although/because.',
      'Muchos tienen variantes más cortas: "despite the fact that" → "although"; "due to the fact that" → "because".',
      '"As if" y "as though" son intercambiables; "as though" es ligeramente más literario.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ As if I was a king, I entered the room.', correct: '✅ As if I were a king, I entered the room.', explanation: 'Después de "as if" siempre usamos "were" (subjuntivo irrealis), no "was", incluso si el sujeto es "I".' },
    { wrong: '❌ Once the meeting would finish, we can leave.', correct: '✅ Once the meeting finishes, we can leave.', explanation: '"Once" introduce una condición / tiempo futuro pero usa present simple, no "would".' },
    { wrong: '❌ In order that we improve, we need practice.', correct: '✅ In order that we might improve, we need practice.', explanation: 'Después de "in order that" NECESITAS un modal (might, could, would).' },
    { wrong: '❌ Despite the fact that the weather was bad, however, we went out.', correct: '✅ Despite the fact that the weather was bad, we went out.', explanation: '"Despite the fact that" ya introduce el contraste — no necesitas además "however". Es redundancia.' },
  ],
  vocabulary: [
    { word: 'whereas', translation_es: 'mientras que, en cambio', level: 'B2', category: 'conjunctions', partOfSpeech: 'conjunction', example: 'The first approach is slow, whereas the second is fast.', exampleTranslation: 'El primer enfoque es lento, mientras que el segundo es rápido.' },
    { word: 'once', translation_es: 'una vez que, en cuanto', level: 'B2', category: 'conjunctions', partOfSpeech: 'conjunction', example: 'Once we sign the agreement, it becomes official.', exampleTranslation: 'Una vez que firmar el acuerdo, se vuelve oficial.' },
    { word: 'except', translation_es: 'excepto, salvo', level: 'B2', category: 'conjunctions', partOfSpeech: 'conjunction/preposition', example: 'The plan is good except that we need more budget.', exampleTranslation: 'El plan es bueno excepto que necesitamos más presupuesto.' },
    { word: 'binding', translation_es: 'vinculante, obligatorio', level: 'B2', category: 'legal/formal', partOfSpeech: 'adjective', example: 'A signed contract is legally binding.', exampleTranslation: 'Un contrato firmado es legalmente vinculante.' },
    { word: 'contrafactual', translation_es: 'contrafáctico', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: '"As if" introduces a contrafactual comparison.', exampleTranslation: '"As if" introduce una comparación contrafáctica.' },
    { word: 'irrealis', translation_es: 'irreal, no real', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: 'The subjunctive mood marks irrealis situations.', exampleTranslation: 'El subjuntivo marca situaciones irreales.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-complex-conjunctions-whereas',
      level: 'B2',
      name: 'Whereas: contrast (formal)',
      explanation_es: 'Whereas contrasta dos situaciones, tipicamente en documentos formales o análisis. Mucho más formal que "but" o "although".',
      formula: '[Situation A], whereas [contrasting situation B].',
      examples: ['The old system was inefficient, whereas the new one is streamlined.', 'Whereas traditional methods are time-consuming, modern approaches are faster.'],
    },
    {
      id: 'gp-b2-complex-conjunctions-once',
      level: 'B2',
      name: 'Once: temporal condition (exact point)',
      explanation_es: 'Once introduce un punto EXACTO en el tiempo después del cual otro evento ocurre. No es repetible (sucede una sola vez).',
      formula: 'Once [condition/time], [result].',
      examples: ['Once you submit the application, you cannot modify it.', 'Once the deadline passes, submissions will not be accepted.'],
    },
    {
      id: 'gp-b2-complex-conjunctions-asif',
      level: 'B2',
      name: 'As if / As though: contrafactual comparison',
      explanation_es: 'As if / as though compare algo irreal — introduce algo que NO es verdad pero se parece como si lo fuera. SIEMPRE pasado en la cláusula.',
      formula: '[Subject] [verb] as if / as though [past tense].',
      examples: ['She speaks as if she owned the company.', 'He acts as though he had never made a mistake.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m11-l2-ex1',
      type: 'multiple_choice',
      concept: 'whereas contrast',
      difficulty: 2,
      prompt: 'Completa: "The first proposal was rejected, ___ the second was accepted unanimously."',
      promptTranslation: 'La primera propuesta fue rechazada, mientras que la segunda fue aceptada unánimemente.',
      correctAnswer: 'whereas',
      options: ['whereas', 'because', 'although'],
      explanation: '"Whereas" contrasta dos situaciones de forma FORMAL — la primera fue rechazada, la segunda aceptada.',
    },
    {
      id: 'b2-m11-l2-ex2',
      type: 'multiple_choice',
      concept: 'once temporal',
      difficulty: 2,
      prompt: 'Completa: "___ the exam is finished, students can leave the classroom."',
      promptTranslation: 'Una vez que termine el examen, los estudiantes pueden salir del aula.',
      correctAnswer: 'Once',
      options: ['Once', 'When', 'While'],
      explanation: '"Once" marca un punto EXACTO temporal (una sola vez). "When" es más general.',
    },
    {
      id: 'b2-m11-l2-ex3',
      type: 'select_correct',
      concept: 'as if subjunctive',
      difficulty: 3,
      prompt: 'Elige la forma correcta:',
      correctAnswer: 'She speaks as if she were an expert on the topic.',
      options: [
        'She speaks as if she was an expert on the topic.',
        'She speaks as if she were an expert on the topic.',
        'She speaks as if she is an expert on the topic.',
      ],
      explanation: 'Después de "as if" siempre va "were" (subjuntivo), no "was" o "is", aunque sea irreal.',
    },
    {
      id: 'b2-m11-l2-ex4',
      type: 'fill_blank',
      concept: 'in order that modal',
      difficulty: 3,
      prompt: 'Completa: "We introduced these policies ___ people ___ have access to better healthcare."',
      promptTranslation: 'Introdujimos estas políticas para que la gente tuviera acceso a mejor atención médica.',
      correctAnswer: 'in order that / might',
      acceptedAnswers: ['in order that / might', 'so that / might'],
      explanation: 'Después de "in order that" o "so that" NECESITAS un modal como "might" o "could".',
    },
    {
      id: 'b2-m11-l2-ex5',
      type: 'error_correction',
      concept: 'despite the fact that redundancy',
      difficulty: 3,
      prompt: 'Encuentra el error: "Despite the fact that the budget was low, however, we succeeded."',
      correctAnswer: 'Despite the fact that the budget was low, we succeeded.',
      acceptedAnswers: [
        'Despite the fact that the budget was low, we succeeded.',
        'Despite the fact that the budget was low, we succeeded',
      ],
      acceptApproximate: true,
      explanation: '"Despite the fact that" YA introduce el contraste — no necesitas "however" además. Es redundancia.',
    },
    {
      id: 'b2-m11-l2-ex6',
      type: 'reorder',
      concept: 'complex conjunction word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Aunque faltaba financiación, el proyecto tuvo éxito.',
      words: ['Despite', 'the', 'fact', 'that', 'funding', 'was', 'limited,', 'the', 'project', 'succeeded.'],
      correctAnswer: 'Despite the fact that funding was limited, the project succeeded.',
      explanation: 'Orden: "Despite the fact that" + cláusula completa + coma + resultado.',
    },
    {
      id: 'b2-m11-l2-ex7',
      type: 'true_false',
      concept: 'once vs when',
      difficulty: 2,
      prompt: '"Once the door closes, the room is dark" significa lo mismo que "When the door closes, the room is dark".',
      correctAnswer: 'false',
      explanation: '"Once" marca un punto EXACTO (sucede una sola vez). "When" es general (puede repetirse varias veces).',
    },
    {
      id: 'b2-m11-l2-ex8',
      type: 'match',
      concept: 'complex conjunctions functions',
      difficulty: 3,
      prompt: 'Emparejar cada subordinante con su función:',
      correctAnswer: '',
      pairs: [
        { left: 'Whereas', right: 'Contrastar dos situaciones' },
        { left: 'Once', right: 'Punto exacto temporal' },
        { left: 'As if', right: 'Comparación contrafáctica' },
        { left: 'Despite the fact that', right: 'Obstáculo que no impide resultado' },
        { left: 'Due to the fact that', right: 'Causa formal' },
      ],
      explanation: 'Cada subordinante tiene una función clara y un contexto de uso formal.',
    },
    {
      id: 'b2-m11-l2-ex9',
      type: 'listening',
      concept: 'complex conjunctions in academic context',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un profesor explica cómo usar subordinantes complejos en escritura académica.',
      listening: {
        audioText:
          'When writing formal essays, you should use complex conjunctions to show sophisticated relationships between ideas. For instance, whereas informal writing uses "but," academic writing prefers "whereas" or "nevertheless." Consider this example: the first theory is outdated, whereas the second is more recent. Similarly, instead of saying "because," you might say "due to the fact that." Once you master these conjunctions, your writing will sound more professional. Additionally, phrases like "despite the fact that" sound more formal than "although." Finally, remember that "as if" requires the past tense, even when the main clause is present. As if it were easy, right? With practice, these structures become natural.',
        audioUrl: '/audio/tts/b2-m11-l2-ex9.mp3',
        questions: [
          {
            id: 'b2-m11-l2-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: '¿Qué prefiere la escritura académica en lugar de "but"?',
            correctAnswer: '"Whereas" or "nevertheless"',
            options: ['"Whereas" or "nevertheless"', '"However" only', '"And" or "but"'],
            explanation: 'El profesor dice que la escritura académica prefiere "whereas" o "nevertheless" en lugar de "but".',
          },
          {
            id: 'b2-m11-l2-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Después de "as if," se debe usar tiempo presente.',
            correctAnswer: 'false',
            explanation: '"As if" requires the past tense, not present.',
          },
          {
            id: 'b2-m11-l2-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'According to the professor, what is an advantage of using complex conjunctions?',
            correctAnswer: 'Your writing will sound more professional',
            options: [
              'Your writing will be shorter',
              'Your writing will sound more professional',
              'You won\'t need to use other connectors',
            ],
            explanation: '"Once you master these conjunctions, your writing will sound more professional."',
          },
        ],
      },
    },
    {
      id: 'b2-m11-l2-ex10',
      type: 'writing',
      concept: 'complex conjunctions in formal writing',
      difficulty: 4,
      prompt: 'Escribí un breve análisis comparativo (comparison, ~150 palabras) entre dos métodos o sistemas (ej: educación presencial vs. online, energías renovables vs. combustibles fósiles). Usá al menos 3 subordinantes complejos: uno de "whereas" para contrastar, uno de "despite the fact that" para obstáculo, y uno de "due to the fact that" para causa.',
      promptTranslation: 'Write a brief comparative analysis. Use at least 3 complex conjunctions.',
      correctAnswer: '',
      explanation: 'Un buen análisis comparativo usa subordinantes complejos para demostrar relaciones sofisticadas entre ideas.',
      taskType: 'essay',
      targetReader: 'an academic audience',
      register: 'formal',
      contentPoints: [
        'Comparación clara de dos sistemas/métodos',
        'Al menos 2 contrastes usando "whereas"',
        'Un obstáculo mencionado con "despite the fact that"',
        'Una causa introducida con "due to the fact that"',
      ],
      requiresOwnIdea: true,
      minWords: 120,
      maxWords: 150,
    },
    {
      id: 'b2-m11-l2-ex11',
      type: 'speaking',
      concept: 'complex conjunctions articulation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta. Pone atención en la pausa natural después de la coma que sigue a la subordinante.',
      correctAnswer: 'Despite the fact that the initial proposal had limitations, it provided a solid foundation for future development.',
      explanation: 'Practicá la fluidez al enunciar subordinantes complejos — suena más natural si hablás con pausas claras.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m11-l2-mt1',
      type: 'multiple_choice',
      concept: 'whereas usage',
      difficulty: 2,
      prompt: 'Elige la oración más formal:',
      correctAnswer: 'The first approach is inefficient, whereas the second is streamlined.',
      options: [
        'The first approach is inefficient, but the second is streamlined.',
        'The first approach is inefficient, whereas the second is streamlined.',
        'The first approach is inefficient, although the second is streamlined.',
      ],
      explanation: '"Whereas" es el más formal para CONTRASTAR. "But" es coloquial, "although" es neutral.',
    },
    {
      id: 'b2-m11-l2-mt2',
      type: 'error_correction',
      concept: 'as if subjunctive',
      difficulty: 3,
      prompt: 'Corrige: "He acts as if he was the owner of the company."',
      correctAnswer: 'He acts as if he were the owner of the company.',
      acceptedAnswers: [
        'He acts as if he were the owner of the company.',
        'He acts as if he were the owner of the company',
      ],
      acceptApproximate: true,
      explanation: '"As if" siempre requiere "were", no "was".',
    },
    {
      id: 'b2-m11-l2-mt3',
      type: 'select_correct',
      concept: 'once temporal',
      difficulty: 3,
      prompt: 'Elige la forma gramaticalmente correcta:',
      correctAnswer: 'Once the meeting ends, the attendees can leave.',
      options: [
        'Once the meeting would end, the attendees can leave.',
        'Once the meeting ends, the attendees can leave.',
        'Once the meeting is ending, the attendees can leave.',
      ],
      explanation: 'Con "once" usa present simple en ambas cláusulas (temporal futuro, pero simple).',
    },
  ],
  reviewItems: ['b2-m11-l1'],
  prerequisites: ['b2-m11-l1'],
}
