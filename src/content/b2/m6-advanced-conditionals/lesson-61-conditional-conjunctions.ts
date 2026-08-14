import type { Lesson } from '../../types'

export const lesson61ConditionalConjunctions: Lesson = {
  id: 'b2-m6-l1',
  moduleId: 'm6-advanced-conditionals',
  order: 0,
  title: 'Conditional Conjunctions: as long as, provided that, unless, except, once',
  objective: 'Utilizar conjunciones condicionales avanzadas (as long as, provided that, unless, except that, once) para expresar condiciones específicas y precisas, incluyendo referencias futuras con presente simple.',
  explanation_es: `Ya conocés la estructura básica del condicional con "if": if you study hard, you\'ll pass the exam. Pero en inglés hay otras CONJUNCIONES condicionales más específicas y precisas que van más allá del simple "if".

CONJUNCIONES CONDICIONALES AVANZADAS:

1. "as long as" (siempre y cuando, con tal de que)
   - Expresa una condición NECESARIA para que algo ocurra. La condición debe cumplirse sin excepción.
   - Ejemplo: You can go to the party as long as you finish your homework first.
   - Significado: Solo si terminas tu tarea, entonces puedes ir. La tarea es OBLIGATORIA.
   - Nota: "as long as" suena más formal y definitivo que "if". Es la condición que NO se puede saltear.

2. "provided (that)" (siempre que, a condición de que)
   - Similar a "as long as": expresa una condición necesaria, FORMAL Y CONTRATUAL.
   - Ejemplo: You will receive the scholarship provided (that) you maintain a GPA of 3.5.
   - Significado: La beca es tuya SIEMPRE QUE mantengas ese GPA. Es una condición legal/oficial.
   - Nota: "Provided" es más formal que "as long as". Se usa en contextos legales, académicos, formales.

3. "unless" (a menos que, a no ser que)
   - Expresa la NEGACIÓN de una condición. Es lógicamente equivalente a "if not".
   - Ejemplo: You won\'t graduate unless you pass all your courses.
   - Significado: No graduarás A MENOS QUE pases todos los cursos. = Si NO pasas, no graduarás.
   - Nota importante: NUNCA uses "unless" con "not" together (❌ unless you don\'t pass). Es redundante.

4. "except (that)" (excepto que, a excepción de que)
   - Expresa una EXCEPCIÓN a una regla general. Es menos común pero útil en contextos específicos.
   - Ejemplo: Everything was perfect except (that) the weather was terrible.
   - Usos condicionales más avanzados: The plan will work except that the budget is too small.
   - Nota: A menudo va en medio o al final, no al principio como "if" o "unless".

5. "once" (una vez que, en cuanto)
   - Expresa que algo ocurrirá INMEDIATAMENTE DESPUÉS de que se cumpla una condición.
   - Uso temporal: When you finish, call me. → Once you finish, call me.
   - Significado: "In the moment that" o "immediately after".
   - Ejemplo: Once you submit the application, you\'ll receive a confirmation email.
   - Nota: "Once" es más DEFINIDO que "when" — sugiere que el primer evento es la CAUSA inmediata del segundo.

ESTRUCTURA Y TIEMPO VERBAL:

Para TODAS estas conjunciones, cuando hablas de futuro (próxima vez que ocurra), usas PRESENTE SIMPLE en la cláusula condicional, NOT presente continuo o futuro:

✅ Once you arrive, call me. (Presente simple para referirse al futuro.)
✅ As long as you pay attention, you\'ll understand.
✅ Provided that it doesn\'t rain, we\'ll have the picnic.
✅ Unless you study, you won\'t pass.

❌ Once you will arrive, call me. (INCORRECTO — no uses futuro aquí.)
❌ If you will study, you\'ll pass. (INCORRECTO — futuro es solo en la consecuencia.)

PUNTOS IMPORTANTES:

1. "As long as" y "provided that" son prácticamente intercambiables, pero "provided" es más formal y legal.

2. "Unless" = negación de la condición. Si dices "You won\'t pass unless you study", significa lo MISMO que "You won\'t pass if you don\'t study". Pero "unless" es más conciso.

3. "Except (that)" es la forma más débil — no es una condición lógica pura, sino una EXCEPCIÓN a una regla.

4. "Once" NO es "if" — es más bien "when" pero más definido. Implica que la segunda acción ocurre INMEDIATAMENTE.

5. Todas estas pueden ir al PRINCIPIO de la oración (como "if") O al FINAL (diferente a "if", que es más rígido).
   - Ejemplo: The project will succeed as long as everyone cooperates. (al final)
   - Ejemplo: As long as everyone cooperates, the project will succeed. (al principio)

COMPARACIÓN CON "IF":

| Conjunción | Significado | Formalidad | Ejemplo |
|-----------|-------------|-----------|---------|
| if | condición general | neutra | If you study, you\'ll pass. |
| as long as | condición necesaria/obligatoria | media-alta | You can go as long as you\'re back by 10. |
| provided (that) | condición legal/formal | muy alta | The grant is yours provided you use it for research. |
| unless | negación de condición | media | You\'ll fail unless you study. |
| except (that) | excepción a una regla | baja | Everything works except that we need more time. |
| once | en cuanto, inmediatamente después | media-alta | Once you graduate, life changes. |
`,
  examples: [
    { english: 'You can borrow my car as long as you return it by tomorrow.', spanish: 'Puedes usar mi auto siempre y cuando lo devuelvas mañana.', note: 'Condición necesaria: sin devolución, no hay préstamo.' },
    { english: 'The company will hire you provided (that) you pass the background check.', spanish: 'La empresa te contratará siempre que pases la verificación de antecedentes.', note: 'Formal: condición legal/contratual.' },
    { english: 'You won\'t graduate unless you complete your thesis.', spanish: 'No graduarás a menos que completes tu tesis.', note: 'Negación: equivalente a "if you don\'t complete".' },
    { english: 'Everything was fine except (that) the train was late.', spanish: 'Todo estuvo bien excepto que el tren llegó tarde.', note: 'Excepción a una regla general.' },
    { english: 'Once you finish the book, let me know what you think.', spanish: 'Una vez que termines el libro, cuéntame qué te pareció.', note: 'Inmediatamente después: el resultado sigue a la condición.' },
    { english: 'We\'ll hold the outdoor event as long as the weather permits.', spanish: 'Haremos el evento al aire libre siempre que el clima lo permita.', note: 'Condición necesaria para el plan alternativo.' },
  ],
  rule: `Fórmula de conjunciones condicionales:

1. AS LONG AS / PROVIDED (THAT):
   [Cláusula] as long as / provided (that) [condición con presente simple].
   → Meaning: Condición NECESARIA. Sin cumplirse, no ocurre lo primero.
   → Ejemplo: You can travel as long as you have your passport.

2. UNLESS:
   [Cláusula] unless [condición negativa con presente simple].
   → Equivalent to: [Cláusula] if not [condición positiva].
   → Ejemplo: You won\'t pass unless you study. = You won\'t pass if you don\'t study.
   ⚠️ NUNCA: unless + don\'t/doesn\'t/won\'t (redundante).

3. EXCEPT (THAT):
   [Cláusula], except (that) [excepción].
   → Meaning: EXCEPCIÓN a una regla. Más débil lógicamente que "unless" o "as long as".
   → Ejemplo: Everything worked perfectly, except that the sound wasn\'t great.

4. ONCE:
   Once [condición con presente simple], [consecuencia con futuro/imperativo].
   → Meaning: En cuanto, inmediatamente después, una vez que.
   → Nota: Presente simple en la cláusula de tiempo, incluso si se refiere al futuro.
   → Ejemplo: Once you submit the form, you\'ll receive confirmation.

TIEMPO VERBAL CLAVE:
- Cláusula condicional: SIEMPRE presente simple (aunque hable del futuro).
- Cláusula principal: futuro (will), imperativo (call me), u otro tiempo según el contexto.
`,
  commonMistakes: [
    { wrong: '❌ Unless you won\'t study, you\'ll fail.', correct: '✅ Unless you study, you\'ll fail.', explanation: '"Unless" ya es negativo. No dobles la negación con "won\'t" o "don\'t".' },
    { wrong: '❌ Once you will finish, tell me.', correct: '✅ Once you finish, tell me.', explanation: '"Once" introduce una cláusula de tiempo, así que usa presente simple, no futuro.' },
    { wrong: '❌ You can\'t go to the party if not your homework is done.', correct: '✅ You can\'t go to the party unless your homework is done.', explanation: '"Unless" es más natural y conciso que "if not". Además, el orden de la frase es mejor así.' },
    { wrong: '❌ Provided you wouldn\'t break it, you can use my bike.', correct: '✅ Provided you don\'t break it, you can use my bike.', explanation: 'En la cláusula condicional, usa presente simple (don\'t), no condicional (wouldn\'t).' },
    { wrong: '❌ As long as you finish, you can go.', correct: '✅ As long as you finish your work, you can go.', explanation: 'Aunque gramaticalmente correcto, es más natural completar la idea: "finish your work" es más claro que solo "finish".' },
  ],
  vocabulary: [
    { word: 'as long as', translation_es: 'siempre y cuando, con tal de que', level: 'B2', category: 'conditionals', partOfSpeech: 'conjunction', example: 'You\'re welcome to stay as long as you follow the rules.', exampleTranslation: 'Eres bienvenido a quedarte siempre y cuando sigas las reglas.' },
    { word: 'provided (that)', translation_es: 'siempre que, a condición de que', level: 'B2', category: 'conditionals', partOfSpeech: 'conjunction', example: 'The scholarship is yours provided you maintain your grades.', exampleTranslation: 'La beca es tuya siempre que mantengas tus notas.' },
    { word: 'unless', translation_es: 'a menos que, a no ser que', level: 'B2', category: 'conditionals', partOfSpeech: 'conjunction', example: 'We can\'t proceed unless we have approval.', exampleTranslation: 'No podemos continuar a menos que tengamos aprobación.' },
    { word: 'except (that)', translation_es: 'excepto que, a excepción de que', level: 'B2', category: 'conditionals', partOfSpeech: 'conjunction', example: 'Everything is perfect except that the price is too high.', exampleTranslation: 'Todo es perfecto excepto que el precio es demasiado alto.' },
    { word: 'once', translation_es: 'una vez que, en cuanto', level: 'B2', category: 'conditionals', partOfSpeech: 'conjunction', example: 'Once you arrive, we can start the meeting.', exampleTranslation: 'Una vez que llegues, podemos empezar la reunión.' },
    { word: 'condition', translation_es: 'condición', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'The main condition is that everyone must attend.', exampleTranslation: 'La condición principal es que todos deben asistir.' },
    { word: 'to comply', translation_es: 'cumplir, acatar', level: 'B2', category: 'grammar', partOfSpeech: 'verb', example: 'You must comply with the rules.', exampleTranslation: 'Debes cumplir con las reglas.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-conditional-conjunctions',
      level: 'B2',
      name: 'Conditional conjunctions: as long as, provided, unless, except, once',
      explanation_es: 'Conjunciones condicionales que expresan condiciones necesarias, excepciones o momentos específicos. Todas usan presente simple en la cláusula condicional, incluso cuando se refieren al futuro.',
      formula: 'as long as / provided (that) / unless / except (that) / once + present simple',
      examples: [
        'You can participate as long as you register in time.',
        'The team will succeed provided everyone cooperates.',
        'Unless you practice, you won\'t improve.',
        'Everything is fine except that we\'re short on time.',
        'Once you submit, you can\'t make changes.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m6-l1-ex1',
      type: 'multiple_choice',
      concept: 'as long as meaning',
      difficulty: 3,
      prompt: 'Completa: "You can stay in the dorm ___ you maintain good academic standing."',
      promptTranslation: 'Puedes quedarte en la residencia siempre que mantengas buen desempeño académico.',
      correctAnswer: 'as long as',
      options: ['as long as', 'if', 'unless', 'once'],
      explanation: '"As long as" expresa una condición necesaria (mandatory). "If" es más general, "unless" es negativo, "once" es temporal.',
    },
    {
      id: 'b2-m6-l1-ex2',
      type: 'multiple_choice',
      concept: 'unless negation',
      difficulty: 3,
      prompt: 'Completa: "You won\'t get the job ___ you improve your interview skills."',
      promptTranslation: 'No conseguirás el trabajo a menos que mejores tus habilidades de entrevista.',
      correctAnswer: 'unless',
      options: ['unless', 'if', 'once', 'provided that'],
      explanation: '"Unless" expresa la negación de una condición (equivalente a "if not").',
    },
    {
      id: 'b2-m6-l1-ex3',
      type: 'fill_blank',
      concept: 'provided that formality',
      difficulty: 4,
      prompt: 'Completa con la conjunción correcta: "The company will offer you a position ___ you pass the background check."',
      promptTranslation: 'La empresa te ofrecerá una posición siempre que pases el control de antecedentes.',
      correctAnswer: 'provided that',
      acceptedAnswers: ['provided that', 'provided'],
      explanation: '"Provided (that)" es formal y se usa en contextos legales/contractuales.',
    },
    {
      id: 'b2-m6-l1-ex4',
      type: 'error_correction',
      concept: 'unless + not redundancy',
      difficulty: 4,
      prompt: 'Encuentra el error: "Unless you don\'t study hard, you won\'t pass the exam."',
      correctAnswer: 'Unless you study hard, you won\'t pass the exam.',
      acceptedAnswers: [
        'Unless you study hard, you won\'t pass the exam',
        'Unless you study hard, you will not pass the exam',
        'If you don\'t study hard, you won\'t pass the exam.',
      ],
      acceptApproximate: true,
      explanation: '"Unless" es ya negativo. Decir "don\'t" duplica la negación. O usas "unless + afirmativo" o "if not + afirmativo".',
    },
    {
      id: 'b2-m6-l1-ex5',
      type: 'translate',
      concept: 'once temporal',
      difficulty: 3,
      prompt: 'Traduce: "Una vez que termines el proyecto, avísame."',
      correctAnswer: 'Once you finish the project, let me know.',
      acceptedAnswers: [
        'Once you finish the project, let me know',
        'Once you have finished the project, let me know.',
        'Once you\'ve finished the project, let me know.',
      ],
      acceptApproximate: true,
      explanation: '"Once" significa "en cuanto" o "una vez que". Usa presente simple en la cláusula temporal, no futuro.',
    },
    {
      id: 'b2-m6-l1-ex6',
      type: 'reorder',
      concept: 'conditional conjunction word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Siempre y cuando termines a tiempo, puedes irte.',
      words: ['You', 'can', 'go', 'as', 'long', 'as', 'you', 'finish', 'on', 'time.'],
      correctAnswer: 'You can go as long as you finish on time.',
      explanation: 'Orden: sujeto + verbo principal + ... + "as long as" + cláusula condicional con presente.',
    },
    {
      id: 'b2-m6-l1-ex7',
      type: 'select_correct',
      concept: 'except vs unless',
      difficulty: 4,
      prompt: 'Elige la frase que mejor expresa: "Todo el plan funcionará, pero solo si el presupuesto es suficiente."',
      correctAnswer: 'The plan will work unless the budget is too small.',
      options: [
        'The plan will work unless the budget is too small.',
        'The plan will work, except that the budget is too small.',
        'The plan will work except that the budget is too small.',
      ],
      explanation: '"Unless" es lógicamente correcto para una condición negativa. "Except (that)" expresa excepciones, no condiciones puras.',
    },
    {
      id: 'b2-m6-l1-ex8',
      type: 'true_false',
      concept: 'once present simple',
      difficulty: 3,
      prompt: '"Once you will arrive at the airport, call me" es gramaticalmente correcto.',
      correctAnswer: 'false',
      explanation: 'Falso. Las cláusulas de tiempo (introduced by "once", "when", "if") usan PRESENTE SIMPLE incluso cuando se refieren al futuro, no futuro. → Once you arrive (not "will arrive").',
    },
    {
      id: 'b2-m6-l1-ex9',
      type: 'listening',
      concept: 'conditional conjunctions listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas sobre las condiciones mencionadas.',
      correctAnswer: '',
      explanation: 'Maria busca un nuevo departamento y habla con el dueño sobre las condiciones del alquiler. Se mencionan varias restricciones.',
      listening: {
        audioText:
          "Maria is looking for a new apartment. The landlord says: You can rent this place as long as you pay the deposit upfront. Also, provided that you maintain it well, the rent will stay the same. However, unless you sign a two-year lease, I can\'t hold it for you. We have one rule: you can have guests, except that they can\'t stay more than two weeks. Once you move in, you\'ll need to set up your own utilities.",
        questions: [
          {
            id: 'b2-m6-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is the main condition to rent the apartment?',
            correctAnswer: 'Maria must pay the deposit upfront',
            options: [
              'Maria must pay the deposit upfront',
              'Maria must sign a one-year lease',
              'Maria must set up utilities immediately',
            ],
            explanation: '"You can rent this place as long as you pay the deposit upfront."',
          },
          {
            id: 'b2-m6-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The landlord will keep the rent the same if Maria maintains the apartment well.',
            correctAnswer: 'true',
            explanation: '"Provided that you maintain it well, the rent will stay the same."',
          },
          {
            id: 'b2-m6-l1-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is the guest policy?',
            correctAnswer: 'Guests can stay, but not for more than two weeks',
            options: [
              'No guests are allowed',
              'Guests can stay as long as they want',
              'Guests can stay, but not for more than two weeks',
            ],
            explanation: '"You can have guests, except that they can\'t stay more than two weeks."',
          },
        ],
      },
    },
    {
      id: 'b2-m6-l1-ex10',
      type: 'writing',
      concept: 'conditional conjunctions writing',
      difficulty: 4,
      prompt: 'Escribí un email formal a tu profesor explicando qué necesitas para completar tu proyecto. Incluye al menos 3 condiciones usando diferentes conjunciones condicionales (as long as, unless, once, provided that).',
      promptTranslation: 'Write a formal email to your teacher explaining what you need to complete your project.',
      correctAnswer: '',
      explanation: 'Un buen email usa 3+ conjunciones condicionales de forma natural y correcta, en un registro formal apropiado para comunicación académica.',
      taskType: 'email',
      targetReader: 'your teacher',
      register: 'formal',
      contentPoints: [
        'Al menos 3 conjunciones condicionales diferentes (as long as / unless / once / provided)',
        'Explicación clara de qué necesitas y cuáles son las condiciones',
        'Cierre cortés apropiado para un email académico',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 150,
    },
    {
      id: 'b2-m6-l1-ex11',
      type: 'speaking',
      concept: 'conditional conjunctions pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Once you complete your homework, you can watch TV.',
      explanation: 'Practicá la entonación natural de frases condicionales, con énfasis en la condición ("Once you complete") y pausa suave antes de la consecuencia.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m6-l1-mt1',
      type: 'multiple_choice',
      concept: 'conditional conjunctions recognition',
      difficulty: 3,
      prompt: 'Completa: "The scholarship is yours ___ you keep your GPA above 3.5."',
      promptTranslation: 'La beca es tuya siempre que mantengas tu GPA arriba de 3.5.',
      correctAnswer: 'provided that',
      options: ['provided that', 'as long as', 'unless', 'once'],
      explanation: '"Provided (that)" es la forma más formal y legal, perfecta para contextos de becas y contratos.',
    },
    {
      id: 'b2-m6-l1-mt2',
      type: 'error_correction',
      concept: 'unless negation',
      difficulty: 4,
      prompt: 'Corrige: "Unless you don\'t finish your work, you can\'t leave."',
      correctAnswer: 'Unless you finish your work, you can\'t leave.',
      acceptedAnswers: [
        'Unless you finish your work, you can\'t leave',
        'If you don\'t finish your work, you can\'t leave.',
        'If you don\'t finish your work, you can not leave.',
      ],
      acceptApproximate: true,
      explanation: '"Unless" ya incluye la negación. No dobles la negación con "don\'t".',
    },
    {
      id: 'b2-m6-l1-mt3',
      type: 'true_false',
      concept: 'once present simple',
      difficulty: 3,
      prompt: '"Once you receive the email, you will confirm receipt immediately" es correcto.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Once" introduce una cláusula de tiempo con presente simple ("receive"), y la consecuencia va en futuro ("will confirm").',
    },
    {
      id: 'b2-m6-l1-mt4',
      type: 'select_correct',
      concept: 'conditional conjunction usage',
      difficulty: 4,
      prompt: 'Elige la frase más apropiada para un contexto formal/legal:',
      correctAnswer: 'You will receive your inheritance provided that you attend the reading of the will.',
      options: [
        'You will receive your inheritance if you attend the reading.',
        'You will receive your inheritance provided that you attend the reading of the will.',
        'You can get your inheritance unless you don\'t attend the reading.',
      ],
      explanation: '"Provided that" es formal y legal. "If" es neutral. "Unless" aquí sería redundante/confuso.',
    },
  ],
  reviewItems: ['b1-m9-l1', 'b1-m9-l2', 'b1-m9-l3'],
  prerequisites: ['b1-m9-l3'],
}
