import type { Lesson } from '../../types'

export const lesson92PhrasalVerbsSeparable: Lesson = {
  id: 'b2-m9-l2',
  moduleId: 'm9-verb-patterns-phrasal',
  order: 1,
  title: 'Phrasal verbs: inseparable vs separable patterns',
  objective: 'Usar correctamente phrasal verbs, distinguiendo entre verbos inseparables (look after, come across) y separables (turn on, pick up), y comprendiendo cuándo se puede separar el verbo de la partícula.',
  explanation_es: `Un phrasal verb es la combinación de un verbo + una partícula (preposición/adverbio) que forma un significado nuevo, diferente de la suma de sus partes. Conocés algunos de B1: "look for" (buscar), "give up" (abandonar), "put on" (ponerse), "take off" (quitarse). Ahora vamos más lejos: aprendemos la DIFERENCIA crítica entre phrasal verbs INSEPARABLES y SEPARABLES.

**1. PHRASAL VERBS INSEPARABLES**

Son verbos donde el objeto SIEMPRE va después de la partícula. No se puede meter nada en el medio.

Estructura: verbo + partícula + objeto

- "look after" = cuidar. "I look after my younger brother." (correcto)
  "I look after him." (correcto)
  ❌ "I look my brother after." (INCORRECTO)

- "come across" = encontrar por casualidad. "I came across an old photo." (correcto)
  "I came across it." (correcto)
  ❌ "I came my old photo across." (INCORRECTO)

- "run into" = encontrarse con alguien por casualidad. "I ran into an old friend." (correcto)
- "get over" = recuperarse de. "It took months to get over the breakup." (correcto)
- "call off" (cancelar). "They called off the meeting." (correcto)

**2. PHRASAL VERBS SEPARABLES**

Son verbos donde la partícula Y el verbo pueden estar SEPARADOS por el objeto. Tenés dos opciones:

Estructura A: verbo + objeto + partícula
Estructura B: verbo + partícula + objeto

El objeto puede ir en CUALQUIER LUGAR. Pero hay reglas:

- "turn on" = encender. "Turn on the light" O "Turn the light on" (ambos correctos)
- "pick up" = recoger. "Pick up the kids" O "Pick the kids up" (ambos correctos)
- "put away" = guardar. "Put away your toys" O "Put your toys away" (ambos correctos)
- "take off" = quitarse. "Take off your jacket" O "Take your jacket off" (ambos correctos)
- "write down" = anotar. "Write down the address" O "Write the address down" (ambos correctos)

REGLA CRÍTICA: Si el objeto es un PRONOMBRE (me, him, her, it, us, them), la partícula SIEMPRE va DESPUÉS.

- "Turn on the light" O "Turn the light on" (ambos OK con sustantivo)
- "Turn on it" O ❌ "Turn it on" (SOLO "Turn it on" es correcto)
- "Pick up the kids" O "Pick the kids up" (ambos OK con sustantivo)
- "Pick up them" O ❌ "Pick them up" (SOLO "Pick them up" es correcto)

**3. REGLA DE ORO PARA MEMORIZAR**

La mayoría de los phrasal verbs que aprendés son SEPARABLES. Los INSEPARABLES (llamados también "phrasal prepositional verbs" cuando tienen 3 partes) son menos comunes y generalmente debes memorizarlos.

Inseparables comunes:
- look after, come across, run into, get over, call off, look down on, bring about, carry on, get away with, go through

Separables comunes:
- turn on/off, pick up, put away, take off, write down, throw away, switch on/off, cut down, look up, blow up, back up, cross out, fill out, set up, bring back

**4. PRONUNCIACIÓN Y REGISTRO**

Los phrasal verbs separables a menudo cambian el énfasis según donde esté la partícula:
- "TURN on the LIGHT" (énfasis en on y light)
- "TURN the LIGHT on" (énfasis en light y on)

Ambos son correcto, pero el inglés hablado naturaliza más la segunda forma cuando el objeto es largo o importante.

**Comparación con B1**: Ya sabés algunos phrasal verbs. Ahora entendés la regla de separabilidad — es la diferencia entre lo que PODÉS hacer y lo que NO PODÉS hacer con la partícula.`,
  examples: [
    {
      english: 'Can you turn on the TV?',
      spanish: 'Podés encender la tele?',
      note: 'Separable: turn on / turn the TV on (ambas formas OK)',
    },
    {
      english: 'Turn the music off when you leave.',
      spanish: 'Apagá la música cuando te vayas.',
      note: 'Separable: turn off / turn the music off (ambas OK)',
    },
    {
      english: 'I came across a strange website yesterday.',
      spanish: 'Encontré un sitio web extraño ayer.',
      note: 'Inseparable: come across (no se puede separar)',
    },
    {
      english: 'Can you pick up the kids from school?',
      spanish: 'Podés recoger a los chicos de la escuela?',
      note: 'Separable: pick up / pick the kids up (ambas OK)',
    },
    {
      english: 'Pick them up at 3 PM.',
      spanish: 'Recógelos a las 3 PM.',
      note: 'Separable CON PRONOMBRE: DEBE ir "pick them up", nunca "pick up them"',
    },
    {
      english: 'She looked after her niece all summer.',
      spanish: 'Ella cuidó a su sobrina todo el verano.',
      note: 'Inseparable: look after (objeto siempre después de la partícula)',
    },
    {
      english: 'Put away your clothes before dinner.',
      spanish: 'Guardá tu ropa antes de cenar.',
      note: 'Separable: put away / put your clothes away (ambas OK)',
    },
    {
      english: 'I ran into an old classmate at the supermarket.',
      spanish: 'Me encontré con un compañero viejo en el supermercado.',
      note: 'Inseparable: run into (no se puede separar)',
    },
  ],
  rule: `Fórmula:

PHRASAL VERBS INSEPARABLES:
- verbo + partícula + objeto (única opción)
- Ejemplos: look after, come across, run into, get over, call off
- "I look after my brother" ✓
- "I look my brother after" ✗

PHRASAL VERBS SEPARABLES:
- verbo + partícula + objeto (opción 1)
- verbo + objeto + partícula (opción 2)
- Ejemplos: turn on/off, pick up, put away, take off, write down

Con SUSTANTIVO:
- "Turn on the light" = "Turn the light on" (ambas OK)
- "Pick up the kids" = "Pick the kids up" (ambas OK)

Con PRONOMBRE (me, him, her, it, us, them):
- "Turn it on" ✓ / "Turn on it" ✗
- "Pick them up" ✓ / "Pick up them" ✗
- El pronombre siempre va entre verbo y partícula

Regla: Los pronombres EXIGEN que la partícula vaya al final.`,
  commonMistakes: [
    {
      wrong: '❌ "I look my brother after."',
      correct: '✅ "I look after my brother."',
      explanation:
        '"Look after" es INSEPARABLE. El objeto siempre va después de la partícula. No se puede separar.',
    },
    {
      wrong: '❌ "Turn up the TV."',
      correct: '✅ "Turn up the volume." OR "Turn the TV up."',
      explanation:
        '"Turn on/up/down/off" son separables. Pero "turn up the TV" confunde el sentido. "Turn up" = aumentar (volumen), no se usa con "TV" directamente.',
    },
    {
      wrong: '❌ "Pick up them from school."',
      correct: '✅ "Pick them up from school."',
      explanation:
        'Con pronombres, la partícula DEBE ir al final, nunca antes. "Pick up them" es gramaticalmente incorrecto.',
    },
    {
      wrong: '❌ "Take your shoes off please. No, take off your shoes."',
      correct: '✅ "Take off your shoes, please." OR "Take your shoes off, please."',
      explanation:
        'Ambas órdenes son correctas. "Take off your shoes" y "Take your shoes off" son ambas aceptables.',
    },
    {
      wrong: '❌ "Come across a strange animal at the park."',
      correct: '✅ "I came across a strange animal at the park."',
      explanation:
        '"Come across" es INSEPARABLE y requiere un sujeto + verbo conjugado. El orden es correcto (inseparable).',
    },
  ],
  vocabulary: [
    {
      word: 'to come across',
      translation_es: 'encontrar por casualidad, toparse con',
      level: 'B2',
      category: 'phrasal verbs',
      partOfSpeech: 'phrasal verb',
      example: 'I came across your old diary while cleaning.',
      exampleTranslation: 'Encontré tu viejo diario mientras limpiaba.',
    },
    {
      word: 'to run into',
      translation_es: 'encontrarse con alguien, tropezar con',
      level: 'B2',
      category: 'phrasal verbs',
      partOfSpeech: 'phrasal verb',
      example: 'I ran into my ex at the coffee shop.',
      exampleTranslation: 'Me encontré con mi ex en la cafetería.',
    },
    {
      word: 'to put away',
      translation_es: 'guardar, poner en su lugar',
      level: 'B2',
      category: 'phrasal verbs',
      partOfSpeech: 'phrasal verb',
      example: 'Put away your toys before bedtime.',
      exampleTranslation: 'Guardá tus juguetes antes de acostarte.',
    },
    {
      word: 'to call off',
      translation_es: 'cancelar',
      level: 'B2',
      category: 'phrasal verbs',
      partOfSpeech: 'phrasal verb',
      example: 'They called off the wedding.',
      exampleTranslation: 'Cancelaron la boda.',
    },
    {
      word: 'to get over',
      translation_es: 'recuperarse de, superar',
      level: 'B2',
      category: 'phrasal verbs',
      partOfSpeech: 'phrasal verb',
      example: 'It took him a year to get over the loss.',
      exampleTranslation: 'Le llevó un año recuperarse de la pérdida.',
    },
    {
      word: 'separable',
      translation_es: 'separable',
      level: 'B2',
      category: 'grammar',
      partOfSpeech: 'adjective',
      example: '"Turn on" is a separable phrasal verb.',
      exampleTranslation: '"Turn on" es un phrasal verb separable.',
    },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-separable-inseparable',
      level: 'B2',
      name: 'Separable vs Inseparable Phrasal Verbs',
      explanation_es:
        'Phrasal verbs separables permiten dos posiciones del objeto (before or after the particle); inseparables siempre tienen el objeto después de la partícula. Con pronombres, la partícula va siempre al final en separables.',
      formula:
        'Separable: V + obj + particle OR V + particle + obj (pronoun: V + pronoun + particle) / Inseparable: V + particle + obj',
      examples: [
        'Turn on the light / Turn the light on',
        'Pick them up',
        'Look after my brother',
        'Come across something',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m9-l2-ex1',
      type: 'multiple_choice',
      concept: 'separable phrasal verb with noun',
      difficulty: 3,
      prompt: 'Elige la opción que NO es correcta: "Pick up your backpack."',
      promptTranslation: 'Recoger tu mochila.',
      correctAnswer: 'Pick your backpack up it.',
      options: [
        'Pick up your backpack.',
        'Pick your backpack up.',
        'Pick your backpack up it.',
      ],
      explanation:
        '"Pick up" es separable (ambas opciones A y B son correctas). C es incorrecto porque tiene un pronombre extra sin sentido.',
    },
    {
      id: 'b2-m9-l2-ex2',
      type: 'fill_blank',
      concept: 'separable phrasal verb with pronoun',
      difficulty: 3,
      prompt: 'Completa: "Can you turn on the lights? Yes, I\'ll ___ right now."',
      promptTranslation: 'Podés encender las luces? Sí, lo haré ahora mismo.',
      correctAnswer: 'turn them on',
      explanation:
        '"Turn on" es separable, pero CON PRONOMBRE (them), el pronombre va entre verbo y partícula: "turn them on", nunca "turn on them".',
    },
    {
      id: 'b2-m9-l2-ex3',
      type: 'true_false',
      concept: 'inseparable phrasal verb',
      difficulty: 2,
      prompt: '"I look after my friend" y "I look my friend after" significan lo mismo.',
      correctAnswer: 'false',
      explanation:
        '"Look after" es INSEPARABLE. Solo "look after my friend" es correcto. "Look my friend after" es gramaticalmente incorrecto.',
    },
    {
      id: 'b2-m9-l2-ex4',
      type: 'error_correction',
      concept: 'separable vs inseparable',
      difficulty: 4,
      prompt: 'Encuentra el error: "I came my old photo across yesterday."',
      correctAnswer: 'I came across an old photo yesterday.',
      acceptedAnswers: [
        'I came across an old photo yesterday',
        'I came across an old photo yesterday.',
        'I came across an old picture yesterday.',
      ],
      acceptApproximate: true,
      explanation:
        '"Come across" es INSEPARABLE. No se puede meter el objeto en el medio. Debe ser "come across an old photo".',
    },
    {
      id: 'b2-m9-l2-ex5',
      type: 'translate',
      concept: 'separable phrasal verb with different positions',
      difficulty: 4,
      prompt: 'Traduce: "Apagá el televisor antes de irte." (usa phrasal verb "turn off")',
      correctAnswer: 'Turn off the TV before you leave.',
      acceptedAnswers: [
        'Turn off the TV before you leave',
        'Turn off the TV before you leave.',
        'Turn the TV off before you leave',
        'Turn the TV off before you leave.',
      ],
      acceptApproximate: true,
      explanation:
        '"Turn off" es separable. Ambas formas son correctas: "turn off the TV" o "turn the TV off".',
    },
    {
      id: 'b2-m9-l2-ex6',
      type: 'reorder',
      concept: 'phrasal verb word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Cancela la reunión, por favor.',
      words: ['Call', 'the', 'meeting', 'off', 'please.'],
      correctAnswer: 'Call off the meeting, please.',
      explanation:
        '"Call off" es separable. Opción 1: "Call off the meeting". (Opción 2 también OK: "Call the meeting off")',
    },
    {
      id: 'b2-m9-l2-ex7',
      type: 'select_correct',
      concept: 'phrasal verb with pronoun rule',
      difficulty: 4,
      prompt: 'Elige la versión CORRECTA:',
      correctAnswer: 'Take off your shoes.',
      options: [
        'Take off your shoes.',
        'Take your shoes off.',
        'Take off your shoes. (también "Take your shoes off.")',
      ],
      explanation:
        '"Take off" es separable. Ambas formas con SUSTANTIVO son correctas. (Con pronombre: "Take them off", nunca "Take off them")',
    },
    {
      id: 'b2-m9-l2-ex8',
      type: 'multiple_choice',
      concept: 'inseparable phrasal verb recognition',
      difficulty: 3,
      prompt: 'Completa: "I ___ a great restaurant last week."',
      promptTranslation: 'Me encontré con un buen restaurante la semana pasada.',
      correctAnswer: 'came across',
      options: ['came across', 'come across', 'across came'],
      explanation: '"Come across" = encontrar por casualidad. Es INSEPARABLE, entonces: sujeto + came across + objeto.',
    },
    {
      id: 'b2-m9-l2-ex9',
      type: 'listening',
      concept: 'phrasal verbs in conversational context',
      difficulty: 4,
      prompt: 'Escuchá el diálogo y respondé las preguntas.',
      correctAnswer: '',
      explanation:
        'Dos personas hablan sobre tareas domésticas: guardar cosas, apagar luces, etc. Ven varios phrasal verbs.',
      listening: {
        audioText:
          'Mom: Can you turn off the kitchen light before bed? Also, put away your books and turn off your laptop. Son: Sure, I\'ll turn them off right now. And I can pick up my clothes from the floor. Mom: Great! I also want to call off the dinner party tomorrow because I\'m too tired. Son: Should I help you put things away? Mom: That would be lovely. Thank you.',
        questions: [
          {
            id: 'b2-m9-l2-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The son will turn off the light and his laptop.',
            correctAnswer: 'true',
            explanation: '"Turn them off right now" = sí, los va a apagar.',
          },
          {
            id: 'b2-m9-l2-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does the mom want to call off?',
            correctAnswer: 'The dinner party',
            options: ['The dinner party', 'The kitchen light', 'The books'],
            explanation: '"Call off the dinner party tomorrow"',
          },
          {
            id: 'b2-m9-l2-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The son offers to help by:',
            correctAnswer: 'Picking up his clothes and putting things away',
            options: [
              'Picking up his clothes and putting things away',
              'Turning off all the lights',
              'Cooking dinner tomorrow',
            ],
            explanation:
              '"Pick up my clothes from the floor" and "put things away" are his offers.',
          },
        ],
      },
    },
    {
      id: 'b2-m9-l2-ex10',
      type: 'writing',
      concept: 'phrasal verbs in daily routine description',
      difficulty: 4,
      prompt:
        'Escribí un párrafo describiendo tu rutina matutina (80-120 palabras). Usá al menos 4 phrasal verbs separables: turn on, turn off, put away, pick up, write down, etc. Podés usar ambas formas (verbo + objeto + partícula O verbo + partícula + objeto).',
      promptTranslation:
        'Write about your morning routine using at least 4 separable phrasal verbs.',
      correctAnswer: '',
      explanation:
        'Un buen párrafo describe actividades matutinas de forma natural e incorpora phrasal verbs con variación en el orden (algunos con objeto en el medio, otros después de la partícula).',
      taskType: 'essay',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: [
        'Mínimo 4 phrasal verbs separables (correctamente separados o no)',
        'Descripción clara de la rutina',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m9-l2-ex11',
      type: 'speaking',
      concept: 'phrasal verb pronunciation in commands',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Turn off the lights before you leave the house.',
      explanation:
        'Practicá el énfasis natural: "TURN off the LIGHTS" (con acento en off y lights en forma natural de orden).',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m9-l2-mt1',
      type: 'fill_blank',
      concept: 'separable phrasal verb with pronoun',
      difficulty: 3,
      prompt: 'Completa: "I need to switch on the computer. Can you ___? Yes, I\'ll ___ immediately."',
      promptTranslation: 'Encender la computadora. Podés hacerlo? Sí, lo haré inmediatamente.',
      correctAnswer: 'switch it on',
      explanation:
        'Con pronombre (it), la partícula va AL FINAL: "switch it on", nunca "switch on it".',
    },
    {
      id: 'b2-m9-l2-mt2',
      type: 'error_correction',
      concept: 'inseparable phrasal verb',
      difficulty: 3,
      prompt: 'Corrige: "I ran an old friend into at the mall."',
      correctAnswer: 'I ran into an old friend at the mall.',
      acceptedAnswers: [
        'I ran into an old friend at the mall',
        'I ran into an old friend at the mall.',
      ],
      acceptApproximate: true,
      explanation:
        '"Run into" es INSEPARABLE. No se puede separar la partícula del verbo. El orden es: ran into + objeto.',
    },
    {
      id: 'b2-m9-l2-mt3',
      type: 'multiple_choice',
      concept: 'separable vs inseparable recognition',
      difficulty: 4,
      prompt:
        'Elige la opción CORRECTA: "Can you ___?"',
      promptTranslation: 'Podés recoger a los niños de la escuela?',
      correctAnswer: 'pick the kids up',
      options: [
        'pick the kids up',
        'pick up the kids',
        'pick the kids up (también pick up the kids)',
      ],
      explanation:
        '"Pick up" es separable. Con SUSTANTIVO, ambas opciones son correctas: "pick up the kids" o "pick the kids up".',
    },
  ],
  reviewItems: ['b1-m10-l1', 'b1-m10-l2'],
  prerequisites: ['b1-m10-l2'],
}
