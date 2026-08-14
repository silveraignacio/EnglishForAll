import type { Lesson } from '../../types'

export const lesson33ReportingClausePosition: Lesson = {
  id: 'b2-m3-l3',
  moduleId: 'm3-advanced-reported-speech',
  order: 2,
  title: 'Reporting clause position: media, inicial, final',
  objective: 'Dominar la posición de la cláusula de reporte (inicial, media e invertida), citas académicas con presente simple, y modificación adverbial del verbo de reporte.',
  explanation_es: `Ya conocés los reportes básicos donde la cláusula de reporte va al principio: "He said that..." o "She told me that...". Pero en inglés, especialmente en contextos académicos y narrativos, la cláusula de reporte puede ir en DIFERENTES posiciones, y esto cambia el énfasis y la formalidad de la cita.

**Parte 1: Posiciones de la cláusula de reporte**

**Posición 1: INICIAL (más común en reportes formales y académicos)**
- He said that he was tired.
- She announced that the project would be delayed.
- The report states that the numbers have improved.

Ventaja: claro, directo, formal. Se usa mucho en escritura académica y profesional.

**Posición 2: MEDIA (posición invertida, para énfasis narrativo)**
Estructura: "Cita" + verbo de reporte + sujeto + resto

Ejemplos:
- "I'm exhausted," he said.
- "The project is delayed," she announced.
- "This is important," the report states.

Nota: Cuando la cláusula de reporte está en posición media o final después de una cita DIRECTA, NO usamos "that" — la cita va entre comillas y el verbo de reporte va directamente después o dentro de la cita.

Ventaja: énfasis en lo que se dijo (la cita), es más narrativo y vívido. Muy usado en novelas, historias, diálogos.

**Comparación de posiciones en discurso indirecto:**
- He said that he was exhausted. (Inicial — formal)
- "I'm exhausted," he said. (Media/final — narrativo, discurso directo)

**Parte 2: Citas académicas con presente simple**

En contextos académicos y científicos, cuando se reporta un hecho que sigue siendo válido (como una definición, un principio científico, una afirmación de un texto), se usa PRESENTE SIMPLE sin backshift, incluso cuando el reporte es sobre algo que se escribió hace mucho tiempo.

Estructura: The author/The report/The study + present simple + that...

Ejemplos:
- "Darwin wrote 'The Origin of Species' in 1859. The book states that evolution is driven by natural selection." (NO: "is driven" siempre, no "was driven")
- "Shakespeare wrote: 'All the world's a stage.' This quote suggests that life is like a theatrical performance." (NO: "was like", pero SÍ "suggests" en presente porque sigue siendo válida la idea)

REGLA: Si el hecho reportado sigue siendo verdadero en el presente, usamos presente simple incluso si el original es viejo.
- "Pythagoras discovered that the square of the hypotenuse equals the sum of the squares of the other two sides." (Verdad universal — presente simple)
- "He said he was tired yesterday." (Verdad pasada — pasado simple)

Ventaja: en ensayos, reportajes, trabajos académicos, da más autoridad al texto citado porque sugiere que el conocimiento sigue siendo relevante.

**Parte 3: Modificación adverbial del verbo de reporte**

Para añadir matices sobre CÓMO se dijo algo, se puede modificar el verbo de reporte con adverbios:

Estructura: Sujeto + adverbio + verbo de reporte + that...

Ejemplos:
- He quietly admitted that he was responsible. (Admitió, pero de manera silenciosa — implica secreto o culpa)
- She reluctantly agreed that the plan had merit. (Estuvo de acuerdo, pero a regañadientes)
- "I love you," he whispered softly. (Dijo, pero en un susurro suave)
- The study clearly demonstrates that the treatment is effective. (El estudio de manera clara muestra)

Adverbios comunes con verbos de reporte:
- reluctantly (a regañadientes): refuse reluctantly, admit reluctantly
- quietly (silenciosamente): whisper quietly, say quietly
- loudly (fuertemente, en voz alta): shout loudly, declare loudly
- clearly (claramente): demonstrate clearly, show clearly
- allegedly (supuestamente): allege that, reportedly — da tono de duda
- confidently (con confianza): assert confidently, claim confidently
- nervously (nerviosamente): stammer nervously, explain nervously
- sardonically (con sarcasmo): remark sardonically, comment sardonically

Nota: el adverbio va ANTES del verbo de reporte en la mayoría de casos:
- He reluctantly admitted = reluctantly + admitted (correcto)
- He admitted reluctantly = also correcto, pero menos natural

ATENCIÓN: Si modificas con un adverbio, a veces cambias el verbo de reporte por otro más específico:
- He said that → He whispered that (más preciso, ya incluye el "cómo")
- vs.
- He quietly said that (adverbio + verbo general)

**Parte 4: Combinando todo: posición + adverbio + academicismo**

Ejemplo completo:
Original: "I believe climate change is real." (Cita de un científico)

Opción 1 (formal académica): "The scientist argues that climate change is real." (Presenta simple porque es verdad válida hoy)
Opción 2 (con adverbio): "The scientist strongly argues that climate change is real." (Adverbio + presente simple)
Opción 3 (narrativa): "I believe climate change is real," the scientist said firmly. (Posición media + adverbio)

Puntos importantes:

1. La posición de la cláusula de reporte determina el registro y el énfasis (inicial = formal; media = narrativo).

2. En contextos académicos, se usa presente simple para hechos que siguen siendo válidos, sin backshift.

3. Los adverbios modifican el verbo de reporte y añaden información sobre el TONO O MANERA de lo que se dijo.

4. La elección entre posición inicial, media o final depende del contexto:
   - Académico/ensayo: inicial o presente simple con presente
   - Narrativa/diálogo: media o final
   - Periodístico: inicial o media, según énfasis

5. NO confundas "Posición media en citas DIRECTAS" (con comillas) con "Posición inicial en citas INDIRECTAS" (sin comillas). La estructura gramatical es diferente.
   - Directa: "I'm tired," he said. (Cita entre comillas, verbo después)
   - Indirecta: He said that he was tired. (Sin comillas, "that" sí va)`,
  examples: [
    {
      english: 'He said that he was tired.',
      spanish: 'Dijo que estaba cansado.',
      note: 'Posición inicial (más formal). Estructura: verbo de reporte + that + cláusula.',
    },
    {
      english: '"I\'m tired," he said.',
      spanish: '"Estoy cansado," dijo.',
      note: 'Posición media/final (narrativo). Cita directa entre comillas, verbo después.',
    },
    {
      english: 'He quietly admitted that he was wrong.',
      spanish: 'Admitió tranquilamente que estaba equivocado.',
      note: 'Adverbio (quietly) modifica el verbo de reporte para añadir tono/manera.',
    },
    {
      english: 'Darwin\'s theory states that evolution is driven by natural selection.',
      spanish: 'La teoría de Darwin sostiene que la evolución es impulsada por la selección natural.',
      note: 'Cita académica con presente simple (presente verdadero universal). Aunque Darwin vivió hace siglos, usamos presente porque la idea sigue siendo válida.',
    },
    {
      english: '"This is the most important discovery," she announced dramatically.',
      spanish: '"Este es el descubrimiento más importante," anunció dramáticamente.',
      note: 'Posición media + adverbio (dramatically). Cita directa + adverbio de manera.',
    },
    {
      english: 'The report clearly demonstrates that the results are promising.',
      spanish: 'El reporte claramente demuestra que los resultados son prometedores.',
      note: 'Adverbio (clearly) para énfasis académico. Presente simple porque el resultado sigue siendo válido.',
    },
  ],
  rule: `Fórmula de posición de cláusula de reporte y modificación adverbial:

POSICIÓN INICIAL (citas indirectas):
subject + reporting verb + (object) + that + clause
- He said that he was tired.
- The report states that the project is delayed.
- She quietly admitted that she was responsible.

Características:
- "that" es obligatorio
- No se usan comillas
- Formal, directo

POSICIÓN MEDIA/FINAL (citas directas):
"Direct quotation" + reporting verb + subject + adverbial phrase
- "I'm tired," he said.
- "The project is delayed," she announced.
- "This is urgent," he whispered softly.

Características:
- Comillas alrededor de la cita
- No se usa "that"
- Narrativo, vívido
- El verbo de reporte va DENTRO o después de la cita

CITAS ACADÉMICAS (presente simple sin backshift):
The author/report/study + present simple + that + clause
- Darwin states that evolution is driven by natural selection.
- The study shows that the treatment is effective.

Regla: Cuando lo reportado es un hecho universal o sigue siendo válido hoy, se usa presente simple incluso si el original es del pasado.

ADVERBIOS CON VERBOS DE REPORTE:
subject + adverbio + reporting verb + that...
- He reluctantly admitted that he was wrong.
- She confidently declared that she would win.
- He quietly whispered that he was sorry.

Adverbios comunes: reluctantly, quietly, loudly, clearly, allegedly, confidently, nervously, sardonically, dramatically, firmly`,
  commonMistakes: [
    {
      wrong: '❌ "I\'m tired," he said that he was tired.',
      correct: '✅ "I\'m tired," he said.',
      explanation: 'Si usas cita directa (entre comillas), NO uses "that". Si usas "that", entonces es cita indirecta sin comillas.',
    },
    {
      wrong: '❌ Darwin wrote that evolution was driven by natural selection.',
      correct: '✅ Darwin stated that evolution is driven by natural selection.',
      explanation: 'En citas académicas de hechos universales, usamos presente simple, no pasado. El hecho sigue siendo válido.',
    },
    {
      wrong: '❌ He said reluctantly that he was wrong.',
      correct: '✅ He reluctantly said that he was wrong.',
      explanation: 'El adverbio va ANTES del verbo de reporte, no después. Orden: subject + adverbio + verbo de reporte.',
    },
    {
      wrong: '❌ "I\'m exhausted" he said.',
      correct: '✅ "I\'m exhausted," he said.',
      explanation: 'En citas directas con posición media, se REQUIERE una coma ANTES del verbo de reporte.',
    },
    {
      wrong: '❌ The report says that the results showed improvement.',
      correct: '✅ The report says that the results show improvement.',
      explanation: 'En citas académicas que siguen siendo válidas, usa presente simple, no pasado.',
    },
    {
      wrong: '❌ He whispered softly and quietly that he was sorry.',
      correct: '✅ He whispered softly that he was sorry.',
      explanation: '"Whispered" ya implica "quietly" — usar ambos es redundante. Elige un adverbio o usa el verbo más preciso.',
    },
  ],
  vocabulary: [
    {
      word: 'clause',
      translation_es: 'cláusula, oración',
      level: 'B2',
      category: 'grammar',
      partOfSpeech: 'noun',
      example: 'The reporting clause comes at the beginning, middle, or end of a sentence.',
      exampleTranslation: 'La cláusula de reporte viene al principio, en el medio o al final de una oración.',
    },
    {
      word: 'quotation',
      translation_es: 'cita, citación',
      level: 'B2',
      category: 'academic',
      partOfSpeech: 'noun',
      example: 'The quotation marks show a direct quotation.',
      exampleTranslation: 'Las comillas muestran una cita directa.',
    },
    {
      word: 'academic',
      translation_es: 'académico',
      level: 'B2',
      category: 'academic',
      partOfSpeech: 'adjective',
      example: 'Academic writing uses formal reporting verbs.',
      exampleTranslation: 'La escritura académica usa verbos de reporte formales.',
    },
    {
      word: 'adverbial modification',
      translation_es: 'modificación adverbial',
      level: 'B2',
      category: 'grammar',
      partOfSpeech: 'noun phrase',
      example: 'Adverbial modification adds information about how something was said.',
      exampleTranslation: 'La modificación adverbial añade información sobre cómo se dijo algo.',
    },
    {
      word: 'reluctantly',
      translation_es: 'a regañadientes, de mala gana',
      level: 'B2',
      category: 'adverbs',
      partOfSpeech: 'adverb',
      example: 'He reluctantly admitted that he had made a mistake.',
      exampleTranslation: 'Admitió a regañadientes que había cometido un error.',
    },
    {
      word: 'allegedly',
      translation_es: 'supuestamente, presuntamente',
      level: 'B2',
      category: 'adverbs',
      partOfSpeech: 'adverb',
      example: 'He allegedly stole the painting, but there is no proof.',
      exampleTranslation: 'Supuestamente robó el cuadro, pero no hay pruebas.',
    },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-reporting-clause-position-initial',
      level: 'B2',
      name: 'Reporting clause in initial position',
      explanation_es: 'La cláusula de reporte al principio: verbo de reporte + that + cláusula. Formal, directo, muy usado en escritura académica.',
      formula: 'subject + reporting verb + (object) + that + clause',
      examples: [
        'He said that he was tired.',
        'The report states that the project is delayed.',
        'She announced that the meeting would be postponed.',
      ],
    },
    {
      id: 'gp-b2-reporting-clause-position-media',
      level: 'B2',
      name: 'Reporting clause in media/final position (direct quotation)',
      explanation_es: 'La cláusula de reporte después de la cita (cita directa entre comillas). Narrativo, vívido, usado en historias y diálogos.',
      formula: '"Direct quotation" + reporting verb + subject + (adverbial phrase)',
      examples: [
        '"I\'m tired," he said.',
        '"The project is delayed," she announced.',
        '"This is urgent," he whispered softly.',
      ],
    },
    {
      id: 'gp-b2-academic-present-simple',
      level: 'B2',
      name: 'Academic present simple in reported statements',
      explanation_es: 'En citas académicas de hechos universales, usamos presente simple sin backshift, incluso si el original es antiguo.',
      formula: 'The author/report + present simple + that + clause (universal fact)',
      examples: [
        'Darwin states that evolution is driven by natural selection.',
        'The study shows that the treatment is effective.',
        'Plato argues that the soul is immortal.',
      ],
    },
    {
      id: 'gp-b2-adverbial-modification',
      level: 'B2',
      name: 'Adverbial modification of reporting verbs',
      explanation_es: 'Adverbios que modifican el verbo de reporte para indicar cómo se dijo algo: tone, manner, certainty.',
      formula: 'subject + adverbio + reporting verb + that... / "quotation" + adverbio + reporting verb',
      examples: [
        'He reluctantly admitted that he was wrong.',
        '"I\'m sorry," she whispered softly.',
        'The study clearly demonstrates that the results are promising.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m3-l3-ex1',
      type: 'multiple_choice',
      concept: 'reporting clause position and that',
      difficulty: 3,
      prompt: '¿Cuál es INCORRECTO?',
      correctAnswer: '"I\'m tired," he said that he was tired.',
      options: [
        'He said that he was tired.',
        '"I\'m tired," he said.',
        '"I\'m tired," he said that he was tired.',
      ],
      explanation: 'Si usas cita directa (comillas) con posición media, NO usas "that". "That" solo se usa en citas indirectas sin comillas.',
    },
    {
      id: 'b2-m3-l3-ex2',
      type: 'fill_blank',
      concept: 'academic present simple',
      difficulty: 3,
      prompt: 'Darwin ___ that evolution is driven by natural selection.',
      promptTranslation: 'Darwin sostiene que la evolución es impulsada por la selección natural.',
      correctAnswer: 'states',
      explanation: 'Cita académica de hecho universal: presente simple "states", y presente simple "is driven" (no backshift porque sigue siendo válido).',
    },
    {
      id: 'b2-m3-l3-ex3',
      type: 'error_correction',
      concept: 'direct quotation with reporting verb in middle',
      difficulty: 3,
      prompt: 'Encuentra el error: "I\'m exhausted" he said.',
      correctAnswer: '"I\'m exhausted," he said.',
      acceptedAnswers: ['"I\'m exhausted," he said', '"I\'m exhausted," he said.'],
      acceptApproximate: true,
      explanation: 'Después de una cita directa en posición media, se REQUIERE una coma ANTES del verbo de reporte.',
    },
    {
      id: 'b2-m3-l3-ex4',
      type: 'multiple_choice',
      concept: 'adverbial modification of reporting verb',
      difficulty: 3,
      prompt: 'Completa: "He ___ admitted that he was responsible."',
      correctAnswer: 'reluctantly',
      options: ['reluctantly', 'admittedly', 'admitted reluctantly'],
      explanation: 'Adverbio de manera que modifica el verbo de reporte: reluctantly (a regañadientes) va ANTES del verbo.',
    },
    {
      id: 'b2-m3-l3-ex5',
      type: 'translate',
      concept: 'academic quotation with present simple',
      difficulty: 4,
      prompt: 'Traduce: "El estudio demuestra que el tratamiento es eficaz."',
      correctAnswer: 'The study demonstrates that the treatment is effective.',
      acceptedAnswers: [
        'The study demonstrates that the treatment is effective',
        'The study demonstrates that the treatment is effective.',
        'The study shows that the treatment is effective.',
        'The study shows that the treatment is effective.',
      ],
      acceptApproximate: true,
      explanation: 'Cita académica: presente simple "demonstrates"/"shows" y presente simple "is effective" (hecho universal, sin backshift).',
    },
    {
      id: 'b2-m3-l3-ex6',
      type: 'reorder',
      concept: 'word order with adverbial modification',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Admitió a regañadientes que estaba equivocado.',
      words: ['He', 'reluctantly', 'admitted', 'that', 'he', 'was', 'wrong.'],
      correctAnswer: 'He reluctantly admitted that he was wrong.',
      explanation: 'Orden: sujeto (He) + adverbio (reluctantly) + verbo de reporte (admitted) + that + cláusula.',
    },
    {
      id: 'b2-m3-l3-ex7',
      type: 'select_correct',
      concept: 'academic vs. narrative reporting',
      difficulty: 4,
      prompt: 'En un ensayo académico sobre Darwin, ¿cuál es más apropiado?',
      correctAnswer: 'Darwin argued that natural selection drives evolution.',
      options: [
        '"Natural selection drives evolution," Darwin argued.',
        'Darwin argued that natural selection drives evolution.',
        'Darwin said that natural selection drove evolution.',
      ],
      explanation: 'En contexto académico: posición inicial, presente simple (hecho universal). La opción b combina ambas características.',
    },
    {
      id: 'b2-m3-l3-ex8',
      type: 'true_false',
      concept: 'adverbial modification with direct quotation',
      difficulty: 3,
      prompt: '"I\'m sorry," he whispered softly. — El adverbio "softly" modifica a "whispered".',
      correctAnswer: 'true',
      explanation: 'Correcto. En citas directas con posición media, los adverbios pueden ir después del verbo de reporte para modificar cómo se dijo la cita.',
    },
    {
      id: 'b2-m3-l3-ex9',
      type: 'listening',
      concept: 'reporting clause position listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un profesor de historia cita a diferentes autores. Los alumnos deben identificar cómo se reportan las citas (posición inicial vs. media, presente vs. pasado).',
      listening: {
        audioText:
          "In his history lecture, Professor Smith said: \"Ancient philosophers had very different views. Plato argued that knowledge is eternal and unchanging. Aristotle, on the other hand, believed that knowledge comes from experience. Marx later stated that economic systems drive society. As the modern economist Adam Smith said, \"It is not from the benevolence of the butcher that we expect our dinner, but from his self-interest.\" These ideas remain relevant today.\"",
        questions: [
          {
            id: 'b2-m3-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the professor say about Plato?',
            correctAnswer: 'Plato argued that knowledge is eternal and unchanging',
            options: [
              'Plato believed in experience',
              'Plato argued that knowledge is eternal and unchanging',
              'Plato said that knowledge changes over time',
            ],
            explanation: '"Plato argued that knowledge is eternal and unchanging."',
          },
          {
            id: 'b2-m3-l3-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'According to the professor, Marx and Aristotle agreed on their views.',
            correctAnswer: 'false',
            explanation: 'Aristotle believed knowledge comes from experience, Marx focused on economic systems — diferentes.',
          },
          {
            id: 'b2-m3-l3-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does the professor suggest by saying "These ideas remain relevant today"?',
            correctAnswer: 'The ideas of ancient philosophers are still important in modern times',
            options: [
              'Ancient philosophers were wrong',
              'The ideas of ancient philosophers are still important in modern times',
              'Modern economists reject these ideas',
            ],
            explanation: 'Implica que las ideas clásicas siguen siendo válidas y relevantes.',
          },
        ],
      },
    },
    {
      id: 'b2-m3-l3-ex10',
      type: 'writing',
      concept: 'academic essay with varied reporting structures',
      difficulty: 4,
      prompt: 'Escribí un breve ensayo (200-250 palabras) sobre un tema que te interesa (tecnología, ambiente, educación, etc.). Cita a al menos 2 autores o estudios usando reportes ACADÉMICOS (presente simple para hechos válidos hoy). Usa VARIEDAD de posiciones: al menos 1 reporte en posición inicial, 1 con adverbio de modificación, y, si es posible, 1 cita directa en narrativa.',
      promptTranslation: 'Write a brief academic essay citing sources using varied reporting structures.',
      correctAnswer: '',
      explanation: 'Un buen ensayo académico demuestra dominio de posiciones de cláusula de reporte y presente simple en citas académicas.',
      taskType: 'essay',
      targetReader: 'your teacher',
      register: 'formal',
      contentPoints: [
        'Tema claro con introducción y conclusión',
        'Al menos 2 citas académicas con presente simple correcto',
        'Variedad de posiciones de cláusula de reporte (inicial, media, con adverbios)',
        'Estructura y organización académica',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m3-l3-ex11',
      type: 'speaking',
      concept: 'academic reporting pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Darwin states that evolution is driven by natural selection.',
      explanation: 'Practicá la pronunciación clara de "states" y el ritmo natural de citas académicas en presente.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m3-l3-mt1',
      type: 'error_correction',
      concept: 'direct quotation punctuation and that',
      difficulty: 3,
      prompt: 'Corrige: "I\'m sorry" he said that he was sorry.',
      correctAnswer: '"I\'m sorry," he said.',
      acceptedAnswers: ['"I\'m sorry," he said', '"I\'m sorry," he said.'],
      acceptApproximate: true,
      explanation: 'Cita directa: comillas, coma después, no "that". Si usas "that", quita comillas: He said that he was sorry.',
    },
    {
      id: 'b2-m3-l3-mt2',
      type: 'fill_blank',
      concept: 'academic present simple',
      difficulty: 3,
      prompt: 'The study ___ that the treatment is effective. (show)',
      promptTranslation: 'El estudio muestra que el tratamiento es eficaz.',
      correctAnswer: 'shows',
      explanation: 'Cita académica de hecho universal: presente simple "shows" sin backshift.',
    },
    {
      id: 'b2-m3-l3-mt3',
      type: 'multiple_choice',
      concept: 'adverbial modification position',
      difficulty: 3,
      prompt: '¿Cuál está correctamente escrito?',
      correctAnswer: 'He reluctantly admitted that he was wrong.',
      options: [
        'He admitted reluctantly that he was wrong.',
        'He reluctantly admitted that he was wrong.',
        'He admitted that he reluctantly was wrong.',
      ],
      explanation: 'El adverbio va ANTES del verbo de reporte. Orden: subject + adverbio + verbo de reporte + that.',
    },
    {
      id: 'b2-m3-l3-mt4',
      type: 'true_false',
      concept: 'direct vs. indirect quotation',
      difficulty: 3,
      prompt: 'En una cita directa ("He said, ..."), se REQUIERE una coma después de la cita y ANTES del verbo de reporte.',
      correctAnswer: 'true',
      explanation: 'Correcto. Ejemplo: "I\'m sorry," he said. (coma después de comilla de cierre).',
    },
  ],
  reviewItems: ['b2-m3-l1', 'b2-m3-l2'],
  prerequisites: ['b2-m3-l2'],
}
