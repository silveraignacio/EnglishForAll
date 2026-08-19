import type { Lesson } from '../../types'

export const lesson42EvaluativeClauses: Lesson = {
  id: 'b2-m4-l2',
  moduleId: 'm4-relatives-noun-phrases',
  order: 1,
  title: 'Evaluative clauses and attribute-only adjectives',
  objective: 'Usar relativas evaluativas con ", which" para comentar sobre ideas completas, y dominar adjetivos compuestos y atributivos que no funcionan como predicativos.',
  explanation_es: `Las relativas NO DEFINIDORAS también sirven para evaluar o comentar TODA una idea anterior, no solo un sustantivo. Esto se llama "evaluative relative clause" y es muy común en inglés académico y formal.

RELATIVAS EVALUATIVAS con ", which":
- "He passed the exam, which was a great relief." = Pasó el examen, lo cual fue un gran alivio. (Comenta sobre TODA la idea anterior: que haya pasado el examen.)
- "She arrived late, which surprised everyone." = Llegó tarde, lo cual sorprendió a todos. (Comenta sobre el hecho de que llegara tarde.)

La estructura es: frase completa + , which + verbo + resto.
El "which" se refiere a la IDEA completa, no a un sustantivo específico.

ADJETIVOS COMPUESTOS (compound adjectives):
Los adjetivos compuestos se escriben con guion y suelen ir ANTES del sustantivo (atributivamente):
- "up-to-date information" = información actualizada
- "state-of-the-art technology" = tecnología de última generación
- "well-known author" = autor bien conocido
- "long-term plan" = plan a largo plazo

Cuando estos adjetivos van DESPUÉS (predicativamente), pierden el guion y se usan con "be":
- "The information is up to date." (sin guion)
- "That technology is state of the art." (sin guion)

ADJETIVOS SOLO ATRIBUTIVOS (no se pueden usar predicativamente):
Algunos adjetivos SOLO funcionan antes del sustantivo y NUNCA después de "be":
- "former president" = presidente anterior (NOT "The president is former.")
- "present situation" = situación actual (NOT "The situation is present.")
- "future plans" = planes futuros (NOT "The plans are future.")
- "mere fact" = hecho mero (NOT "That fact is mere.")
- "principal reason" = razón principal (NOT "The reason is principal.")
- "sole survivor" = único sobreviviente (NOT "He is sole survivor.")

En cambio, otros adjetivos pueden usarse antes O después:
- "big house" / "The house is big" ✓ (ambas formas)
- "red car" / "The car is red" ✓ (ambas formas)

Comparación con B1:
- B1: relativas NO DEFINIDORAS simples ("My colleague, who works in IT, ...")
- B2: relativas evaluativas que comentan IDEAS COMPLETAS, y combinación de adjetivos compuestos/atributivos con relativas`,
  examples: [
    { english: 'She failed the test, which was disappointing.', spanish: 'Reprobó el examen, lo cual fue decepcionante.', note: '"Which" se refiere a la idea completa (que reprobó), no a "test" solo.' },
    { english: 'The company hired three new employees, which suggests growth.', spanish: 'La empresa contrató a tres nuevos empleados, lo que sugiere crecimiento.', note: '"Which" comenta sobre la acción entera.' },
    { english: 'We need up-to-date equipment for the project.', spanish: 'Necesitamos equipo actualizado para el proyecto.', note: 'Adjetivo compuesto antes del sustantivo: up-to-date (con guion).' },
    { english: 'The former president attended the ceremony.', spanish: 'El expresidente asistió a la ceremonia.', note: '"Former" es solo atributivo; NUNCA decimos "The president is former."' },
    { english: 'That information is up to date, which is important.', spanish: 'Esa información está al día, lo que es importante.', note: 'Adjetivo compuesto sin guion cuando va después de "be".' },
    { english: 'Her future plans remain unclear, which worries her family.', spanish: 'Sus planes futuros siguen siendo inciertos, lo que preocupa a su familia.', note: '"Future" es solo atributivo. "Which" evalúa la frase completa.' },
  ],
  rule: `Fórmula:

1. RELATIVAS EVALUATIVAS con ", which":
   frase completa + , which + verbo + resto...

   Ejemplos:
   - "She won the competition, which amazed us."
   - "They didn't invite him, which was rude."

   El "which" NO se refiere a un sustantivo específico, sino a la IDEA completa anterior.

2. ADJETIVOS COMPUESTOS:
   Atributivo (antes): adjective-adjective + sustantivo
   - "state-of-the-art equipment"
   - "well-known scientist"

   Predicativo (después de "be"): sin guion
   - "The equipment is state of the art."
   - "The scientist is well known."

3. ADJETIVOS SOLO ATRIBUTIVOS (NUNCA predicativos):
   Común: former, present, future, mere, principal, sole, chief, only, late, old (cuando significa "antiguo")

   ✅ "The former CEO resigned." (atributivo)
   ❌ "The CEO is former." (incorrecto)

Reglas clave:
- El "which" en evaluativas SIEMPRE va con comas: , which
- Los adjetivos compuestos pierden el guion cuando van predicativamente.
- Los adjetivos atributivos son limitados; si dudás, verificá en un diccionario.`,
  commonMistakes: [
    { wrong: '❌ She arrived late, which surprising everyone.', correct: '✅ She arrived late, which surprised everyone.', explanation: 'El verbo en la cláusula relativa va en tiempo pasado (surprised), no en participio (surprising).' },
    { wrong: '❌ We need state-of-the-art information that is important.', correct: '✅ We need state-of-the-art information, which is important.', explanation: 'Cuando comentas sobre la idea completa (información + que sea importante), usas ", which" (relativa evaluativa), no "that" (relativa definidora).' },
    { wrong: '❌ The information is state-of-the-art according to experts.', correct: '✅ The information is state of the art according to experts.', explanation: 'Los adjetivos compuestos pierden el guion cuando van predicativamente (después de "be").' },
    { wrong: '❌ The president is former and experienced.', correct: '✅ The former president is experienced.', explanation: '"Former" es solo atributivo; va ANTES del sustantivo, nunca predicativamente después de "be".' },
    { wrong: '❌ His future plans, that are unclear, worry him.', correct: '✅ His future plans, which are unclear, worry him.', explanation: 'En relativas evaluativas NO DEFINIDORAS usamos "which", nunca "that".' },
  ],
  vocabulary: [
    { word: 'relief', translation_es: 'alivio', level: 'B2', category: 'emotions', partOfSpeech: 'noun', example: 'It was a great relief to hear the good news.', exampleTranslation: 'Fue un gran alivio escuchar las buenas noticias.' },
    { word: 'to evaluate', translation_es: 'evaluar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'I need to evaluate the situation carefully.', exampleTranslation: 'Necesito evaluar la situación cuidadosamente.' },
    { word: 'state-of-the-art', translation_es: 'de última generación, vanguardista', level: 'B2', category: 'technology', partOfSpeech: 'adjective', example: 'They use state-of-the-art equipment.', exampleTranslation: 'Usan equipo de última generación.' },
    { word: 'to attribute', translation_es: 'atribuir', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'I attribute my success to hard work.', exampleTranslation: 'Atribuyo mi éxito al trabajo duro.' },
    { word: 'mere', translation_es: 'mero, simple', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'It\'s a mere coincidence.', exampleTranslation: 'Es una mera coincidencia.' },
    { word: 'sole', translation_es: 'único, exclusivo', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'He is the sole owner of the company.', exampleTranslation: 'Él es el único propietario de la empresa.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-evaluative-which',
      level: 'B2',
      name: 'evaluative relative clauses with which',
      explanation_es: 'Las cláusulas relativas evaluativas usan ", which" para comentar sobre una IDEA completa, no sobre un sustantivo específico. Ejemplo: "She failed, which was surprising." (which = el hecho de fallar).',
      formula: 'complete clause + , which + verb...',
      examples: ['He won the lottery, which was incredible.', 'They didn\'t attend, which disappointed us.', 'We finished early, which pleased the client.'],
    },
    {
      id: 'gp-b2-compound-adjectives',
      level: 'B2',
      name: 'compound adjectives (with hyphen)',
      explanation_es: 'Los adjetivos compuestos llevan guion cuando van antes del sustantivo (up-to-date information) pero pierden el guion cuando van predicativamente (The information is up to date).',
      formula: 'adjective-adjective + noun (attributive) / be + adjective adjective (predicative)',
      examples: ['up-to-date equipment', 'well-known author', 'The equipment is up to date.', 'The author is well known.'],
    },
    {
      id: 'gp-b2-attribute-only-adjectives',
      level: 'B2',
      name: 'attribute-only adjectives',
      explanation_es: 'Algunos adjetivos como "former", "future", "present", "sole" SOLO pueden ir antes del sustantivo (attributively), nunca después de "be" (predicatively).',
      formula: 'adjective + noun (ONLY) / NOT "be + adjective"',
      examples: ['The former president', 'Future plans', 'The sole survivor', 'The present situation'],
    },
  ],
  exercises: [
    {
      id: 'b2-m4-l2-ex1',
      type: 'multiple_choice',
      concept: 'evaluative which meaning',
      difficulty: 3,
      prompt: 'En la frase "She won the competition, which was unexpected", ¿a qué se refiere "which"?',
      promptTranslation: 'What does "which" refer to?',
      correctAnswer: 'To the idea that she won the competition',
      options: [
        'To the idea that she won the competition',
        'To the word "competition"',
        'To the word "she"',
      ],
      explanation: 'En relativas evaluativas, "which" se refiere a la IDEA completa anterior, no a un sustantivo específico.',
    },
    {
      id: 'b2-m4-l2-ex2',
      type: 'fill_blank',
      concept: 'evaluative which structure',
      difficulty: 3,
      prompt: 'Completa: "He failed the exam, ___ was disappointing."',
      promptTranslation: 'He failed the exam, ___ was disappointing.',
      correctAnswer: 'which',
      explanation: 'En relativas evaluativas NO DEFINIDORAS usamos siempre "which" (con coma antes).',
    },
    {
      id: 'b2-m4-l2-ex3',
      type: 'true_false',
      concept: 'compound adjective hyphenation',
      difficulty: 3,
      prompt: '"The equipment is state-of-the-art" es la forma correcta.',
      correctAnswer: 'false',
      explanation: 'Cuando el adjetivo compuesto va predicativo (después de "be"), pierde el guion: "The equipment is state of the art." (sin guiones).',
    },
    {
      id: 'b2-m4-l2-ex4',
      type: 'error_correction',
      concept: 'former attribute-only adjective',
      difficulty: 4,
      prompt: 'Encuentra el error: "The manager is former and experienced."',
      correctAnswer: 'The former manager is experienced.',
      acceptedAnswers: [
        'The former manager is experienced',
        'The former manager is experienced.',
      ],
      acceptApproximate: true,
      explanation: '"Former" es un adjetivo SOLO atributivo. Va ANTES del sustantivo, nunca después de "be": "The former manager" (correcto), NOT "The manager is former" (incorrecto).',
    },
    {
      id: 'b2-m4-l2-ex5',
      type: 'translate',
      concept: 'evaluative clause translation',
      difficulty: 4,
      prompt: 'Traduce: "No fue a la reunión, lo cual nos sorprendió."',
      correctAnswer: 'She didn\'t attend the meeting, which surprised us.',
      acceptedAnswers: [
        'She didn\'t attend the meeting, which surprised us',
        'She didn\'t go to the meeting, which surprised us',
        'She didn\'t go to the meeting, which surprised us.',
      ],
      acceptApproximate: true,
      explanation: '"Which" en relativa evaluativa comenta sobre la idea completa (no ir a la reunión). "Which surprised us" = lo cual nos sorprendió.',
    },
    {
      id: 'b2-m4-l2-ex6',
      type: 'select_correct',
      concept: 'compound adjective attributive vs predicative',
      difficulty: 4,
      prompt: '¿Cuál es GRAMATICALMENTE CORRECTA?',
      correctAnswer: 'We need up-to-date information, which is critical.',
      options: [
        'We need up-to-date information, which is critical.',
        'We need up to date information, which is critical.',
        'We need up-to-the-date information, which is critical.',
      ],
      explanation: 'Los adjetivos compuestos llevan guion ANTES del sustantivo (up-to-date information). Aquí no lleva guion en "which is critical" porque va predicativo después de "be".',
    },
    {
      id: 'b2-m4-l2-ex7',
      type: 'reorder',
      concept: 'evaluative relative clause word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'She forgot the meeting, which was irresponsible.',
      words: ['She', 'forgot', 'the', 'meeting', 'which', 'was', 'irresponsible.'],
      correctAnswer: 'She forgot the meeting, which was irresponsible.',
      explanation: 'Orden: frase completa + , which + verbo + adjetivo. La coma SIEMPRE va antes de "which".',
    },
    {
      id: 'b2-m4-l2-ex8',
      type: 'match',
      concept: 'matching adjectives attributive only',
      difficulty: 4,
      prompt: 'Empareja cada frase CORRECTA con su significado.',
      correctAnswer: '',
      pairs: [
        { left: 'The former CEO', right: 'El CEO anterior (ya no es CEO)' },
        { left: 'The future plans', right: 'Los planes futuros (que están por venir)' },
        { left: 'The sole survivor', right: 'El único sobreviviente' },
        { left: 'The principal reason', right: 'La razón principal' },
      ],
      explanation: 'Todos estos adjetivos (former, future, sole, principal) son SOLO atributivos. Nunca dichos "The CEO is former" o "The plans are future".',
    },
    {
      id: 'b2-m4-l2-ex9',
      type: 'listening',
      concept: 'evaluative clauses listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Un profesor habla sobre los cambios en su departamento, usando relativas evaluativas y adjetivos compuestos.',
      listening: {
        audioText:
          "Our department recently hired a new director, which was exciting. She introduced several state-of-the-art technologies, which surprised us. The former director had been very traditional, which limited our growth. Now we have up-to-date equipment and modern methods, which has improved our productivity significantly. Her future plans include more training programs, which I think is excellent.",
        audioUrl: '/audio/tts/b2-m4-l2-ex9.mp3',
        questions: [
          {
            id: 'b2-m4-l2-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The department was disappointed about hiring the new director.',
            correctAnswer: 'false',
            explanation: '"The new director, which was exciting" — el director nuevo fue emocionante, no decepcionante.',
          },
          {
            id: 'b2-m4-l2-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What changed from the former director?',
            correctAnswer: 'From traditional to more modern methods',
            options: [
              'He was replaced immediately',
              'From traditional to more modern methods',
              'The technology was removed',
            ],
            explanation: '"The former director had been very traditional... Now we have up-to-date equipment and modern methods."',
          },
          {
            id: 'b2-m4-l2-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'According to the audio, what effect has the new approach had?',
            correctAnswer: 'It has improved productivity significantly',
            options: [
              'It has wasted resources',
              'It has improved productivity significantly',
              'It has confused the employees',
            ],
            explanation: '"New technologies and modern methods has improved our productivity significantly."',
          },
        ],
      },
    },
    {
      id: 'b2-m4-l2-ex10',
      type: 'writing',
      concept: 'evaluative clauses in writing',
      difficulty: 4,
      prompt: 'Escribí un breve párrafo (100-150 palabras) describiendo un cambio importante que ocurrió en tu escuela/trabajo. Usá al menos 2 relativas evaluativas con ", which" y al menos 2 adjetivos compuestos o atributivos.',
      promptTranslation: 'Write about an important change, using evaluative clauses and compound/attribute-only adjectives.',
      correctAnswer: '',
      explanation: 'Un buen párrafo incluye varias relativas evaluativas que comentan sobre ideas completas, combinadas con adjetivos compuestos precisos.',
      taskType: 'article',
      targetReader: 'your teacher',
      register: 'formal',
      contentPoints: [
        'Al menos 2 relativas evaluativas con ", which"',
        'Al menos 2 adjetivos compuestos o atributivos (ej. up-to-date, former, future)',
        'Descripción clara del cambio y su impacto',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m4-l2-ex11',
      type: 'speaking',
      concept: 'evaluative which pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'He passed the exam, which was a great relief.',
      explanation: 'Practicá la entonación natural de la relativa evaluativa con pausa (coma) antes de "which".',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m4-l2-mt1',
      type: 'multiple_choice',
      concept: 'evaluative which',
      difficulty: 3,
      prompt: 'Completa: "She won the scholarship, ___ changed her life."',
      correctAnswer: 'which',
      options: ['which', 'that', 'what'],
      explanation: 'En relativas evaluativas NO DEFINIDORAS usamos "which" (con coma antes).',
    },
    {
      id: 'b2-m4-l2-mt2',
      type: 'error_correction',
      concept: 'compound adjective hyphenation',
      difficulty: 3,
      prompt: 'Corrige: "The technology is state-of-the-art according to experts."',
      correctAnswer: 'The technology is state of the art according to experts.',
      acceptedAnswers: [
        'The technology is state of the art according to experts',
        'The technology is state of the art according to experts.',
      ],
      acceptApproximate: true,
      explanation: 'Los adjetivos compuestos pierden el guion cuando van predicativos (después de "be").',
    },
    {
      id: 'b2-m4-l2-mt3',
      type: 'true_false',
      concept: 'attribute-only adjectives',
      difficulty: 3,
      prompt: '"The president is former" es una frase gramaticalmente correcta.',
      correctAnswer: 'false',
      explanation: '"Former" es solo atributivo; debe ir antes del sustantivo: "The former president" (correcto).',
    },
    {
      id: 'b2-m4-l2-mt4',
      type: 'select_correct',
      concept: 'evaluative clause meaning',
      difficulty: 4,
      prompt: '¿Cuál es GRAMATICALMENTE CORRECTA?',
      correctAnswer: 'They arrived late, which was disruptive.',
      options: [
        'They arrived late, which was disruptive.',
        'They arrived late, that was disruptive.',
        'They arrived late which was disruptive.',
      ],
      explanation: 'Las relativas evaluativas NO DEFINIDORAS necesitan coma ANTES de "which"; nunca usamos "that" para evaluar ideas completas.',
    },
  ],
  reviewItems: ['b2-m4-l1'],
  prerequisites: ['b2-m4-l1'],
}
