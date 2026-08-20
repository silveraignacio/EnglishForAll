import type { Lesson } from '../../types'

export const lesson31ReportingVerbs: Lesson = {
  id: 'b2-m3-l1',
  moduleId: 'm3-advanced-reported-speech',
  order: 0,
  title: 'Reporting verbs: patterns and structures',
  objective: 'Dominar patrones avanzados de verbos de reporte: suggest/admit/deny + -ing, promise/refuse/offer + to-infinitivo, y warn + (not) to.',
  explanation_es: `Ya sabés los verbos de reporte básicos de B1 (say, tell, ask). Ahora vamos a ver cómo OTROS verbos de reporte tienen estructuras especiales que cambian según el significado.

La regla de oro: el verbo de reporte determina la estructura que va después.

Hay tres patrones principales:

**Patrón 1: suggest / admit / deny / mention + -ING**
Estos verbos reportan una acción completa, y el gerundio (-ing) es muy natural aquí:
- admit (admitir): "He admitted stealing the money." = Admitió haber robado el dinero.
- deny (negar): "She denied telling lies." = Negó haber mentido.
- suggest (sugerir): "She suggested taking a break." = Sugirió hacer un descanso.
- mention (mencionar): "He mentioned seeing her yesterday." = Mencionó haberla visto ayer.

Estructura: subject + verb + (object) + -ing form
- He admitted stealing. (Él admitió robar.)
- She admitted breaking the vase. (Ella admitió haber roto el jarrón.)

**Patrón 2: promise / refuse / offer / agree + TO-INFINITIVO**
Estos verbos hablan de una intención o compromiso futuro (después de hacer la acción de reporte):
- promise (prometer): "She promised to help." = Prometió ayudar.
- refuse (rehusar): "He refused to apologize." = Se rehusó a disculparse.
- offer (ofrecer): "They offered to pay." = Ofrecieron pagar.
- agree (estar de acuerdo): "He agreed to come." = Estuvo de acuerdo en venir.

Estructura: subject + verb + (object) + to-infinitivo
- She promised to call me. (Prometió llamarme.)
- He refused to answer. (Se rehusó a responder.)

**Patrón 3: warn / persuade / convince + OBJETO + NOT TO / TO-INFINITIVO**
Estos verbos requieren un objeto (la persona) ANTES del infinitivo. Nota que en inglés escribimos al objeto entre el verbo de reporte y el to-infinitivo:
- warn (advertir): "He warned me not to go." = Me advirtió que no fuera.
- persuade (persuadir): "She persuaded him to leave." = Lo persuadió a irse.
- convince (convencer): "They convinced us to stay." = Nos convencieron a quedarnos.

Estructura: subject + verb + object + (not) to-infinitivo
- She warned them not to be late. (Les advirtió que no llegaran tarde.)
- He persuaded her to try. (La persuadió a intentar.)

Puntos importantes:

1. NO CONFUNDAS suggest/admit/deny con promise/refuse/offer. El primero grupo usa -ing, el segundo grupo usa to-infinitivo.

2. El objeto va ANTES del to-infinitivo para warn/persuade/convince. Compare: "He promised to help" (sin objeto) vs. "He warned me not to go" (con objeto).

3. Algunos verbos pueden usar AMBOS patrones con ligero cambio de significado:
   - "He admitted making a mistake." (Admitió haber cometido un error — gerundio, acción pasada)
   - "He admitted to making a mistake." (Forma alternativa con "to" — mismo significado)

4. En reportes negativos, la estructura cambia según el verbo:
   - deny + -ing: "He denied breaking the vase." (Negó que rompió...)
   - refuse / agree not to: "She refused to go." / "He agreed not to tell anyone." (Prometió no contar...)

5. Comparación con B1: en B1 veías tell/ask + objeto + (not) to. Aquí es lo mismo, pero ahora también usamos warn/persuade/convince que tienen la misma estructura.`,
  examples: [
    {
      english: 'He admitted stealing the money.',
      spanish: 'Admitió haber robado el dinero.',
      note: 'Patrón 1: admit + -ing. Reporta una acción realizada (en el pasado de la persona que habla).',
    },
    {
      english: 'She denied telling lies.',
      spanish: 'Negó haber mentido.',
      note: 'Patrón 1: deny + -ing. Niega una acción pasada.',
    },
    {
      english: 'She promised to help.',
      spanish: 'Prometió ayudar.',
      note: 'Patrón 2: promise + to-infinitivo. Reporta un compromiso futuro.',
    },
    {
      english: 'He refused to apologize.',
      spanish: 'Se rehusó a disculparse.',
      note: 'Patrón 2: refuse + to-infinitivo. Reporta un rechazo a hacer algo.',
    },
    {
      english: 'He warned me not to go.',
      spanish: 'Me advirtió que no fuera.',
      note: 'Patrón 3: warn + objeto + not to. El objeto va entre el verbo y el infinitivo.',
    },
    {
      english: 'She persuaded them to stay.',
      spanish: 'Los persuadió a quedarse.',
      note: 'Patrón 3: persuade + objeto + to-infinitivo.',
    },
    {
      english: 'They convinced us to invest in the project.',
      spanish: 'Nos convencieron a invertir en el proyecto.',
      note: 'Patrón 3: convince + objeto + to-infinitivo.',
    },
    {
      english: 'She suggested taking a vacation.',
      spanish: 'Sugirió tomar vacaciones.',
      note: 'Patrón 1: suggest + -ing.',
    },
  ],
  rule: `Fórmula de los tres patrones de reporting verbs:

PATRÓN 1 (suggest, admit, deny, mention, etc.):
subject + verb + -ing form
- He admitted stealing.
- She denied lying.
- They mentioned seeing us.

PATRÓN 2 (promise, refuse, offer, agree, etc.):
subject + verb + to-infinitivo
- She promised to call.
- He refused to answer.
- They offered to help.

PATRÓN 3 (warn, persuade, convince, ask, tell, etc.):
subject + verb + objeto + (not) to-infinitivo
- He warned me not to go.
- She persuaded them to stay.
- They convinced us to try.

Reglas críticas:
1. El verbo de reporte determina la estructura — no es opcional.
2. Patrón 1 y 2 NO llevan objeto entre el verbo de reporte y la forma (-ing o to-).
3. Patrón 3 SÍ requiere un objeto entre el verbo y to-.
4. Para negar en Patrón 1, se niega el verbo de reporte, no el -ing: "He didn't admit..." o "He denied...".
5. Para negar en Patrón 2 y 3, se usa "not to": "He refused to go" o "She warned me not to tell".`,
  formation: {
    title: 'Cómo se forman los reporting verbs — tres patrones',
    intro: 'El verbo de reporte determina la estructura que lo sigue: algunos usan -ing (admit, deny, suggest), otros to-infinitivo (promise, refuse, offer) y otros exigen un objeto entre el verbo y el infinitivo (warn, persuade, convince).',
    patterns: [
      {
        name: 'Patrón 1 — verbo + -ing',
        formula: 'admit / deny / suggest / mention + verbo en -ing',
        examples: [
          { english: 'He admitted stealing the money.', spanish: 'Admitió haber robado el dinero.' },
          { english: 'She denied telling lies.', spanish: 'Negó haber mentido.' },
          { english: 'She suggested taking a break.', spanish: 'Sugirió hacer un descanso.' },
        ],
        note: 'Reportan una acción completa o pasada. No se usa to-: suggested taking, nunca "suggested to take".',
      },
      {
        name: 'Patrón 2 — verbo + to-infinitivo',
        formula: 'promise / refuse / offer / agree + to-infinitivo',
        examples: [
          { english: 'She promised to help.', spanish: 'Prometió ayudar.' },
          { english: 'He refused to apologize.', spanish: 'Se rehusó a disculparse.' },
          { english: 'They offered to pay.', spanish: 'Ofrecieron pagar.' },
        ],
        note: 'Reportan una intención o compromiso futuro. Sin objeto entre el verbo y el infinitivo.',
      },
      {
        name: 'Patrón 3 — verbo + objeto + (not) to-infinitivo',
        formula: 'warn / persuade / convince + objeto (persona) + (not) to-infinitivo',
        examples: [
          { english: 'He warned me not to go.', spanish: 'Me advirtió que no fuera.' },
          { english: 'She persuaded them to stay.', spanish: 'Los persuadió a quedarse.' },
          { english: 'They convinced us to invest in the project.', spanish: 'Nos convencieron a invertir en el proyecto.' },
        ],
        note: 'El objeto es obligatorio y va ANTES del infinitivo: warned me not to, no "warned not to".',
      },
    ],
    notes: [
      'Para negar en el patrón 1 se niega el verbo de reporte (He didn\'t admit... / He denied...); en los patrones 2 y 3 se usa "not to".',
      'Algunos verbos admiten variantes: "He admitted making a mistake" o "He admitted to making a mistake" (mismo significado).',
      'No mezclar patrones: suggest + -ing, promise + to, warn + objeto + to.',
    ],
  },
  commonMistakes: [
    {
      wrong: '❌ He promised stealing the money.',
      correct: '✅ He admitted stealing the money.',
      explanation: '"Promise" va con to-infinitivo, no con -ing. Si quieres -ing, usa "admit".',
    },
    {
      wrong: '❌ She refused going to the party.',
      correct: '✅ She refused to go to the party.',
      explanation: '"Refuse" va con to-infinitivo, no con -ing. La estructura es refuse + to-infinitivo.',
    },
    {
      wrong: '❌ He warned not to go.',
      correct: '✅ He warned me not to go.',
      explanation: '"Warn" requiere un objeto ANTES del infinitivo. Sin objeto, la frase es incompleta.',
    },
    {
      wrong: '❌ She persuaded to leave.',
      correct: '✅ She persuaded them to leave.',
      explanation: '"Persuade" requiere un objeto entre el verbo de reporte y to-. Compare: "She promised to leave" (sin objeto) vs. "She persuaded them to leave" (con objeto).',
    },
    {
      wrong: '❌ He admitted to tell a lie.',
      correct: '✅ He admitted telling a lie.',
      explanation: '"Admit" con el significado de "confesar" va con -ing, no con to-infinitivo. "Admit to" + -ing es una variante, pero la más natural es solo -ing.',
    },
    {
      wrong: '❌ They suggested to take a break.',
      correct: '✅ They suggested taking a break.',
      explanation: '"Suggest" va con -ing, nunca con to-. Es un error muy común confundir esto con "persuade/convince" que usan to-.',
    },
  ],
  vocabulary: [
    {
      word: 'admit',
      translation_es: 'admitir, confesar',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'He admitted making a mistake.',
      exampleTranslation: 'Admitió haber cometido un error.',
    },
    {
      word: 'deny',
      translation_es: 'negar',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'She denied knowing about the plan.',
      exampleTranslation: 'Negó saber sobre el plan.',
    },
    {
      word: 'suggest',
      translation_es: 'sugerir, proponer',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'They suggested meeting on Friday.',
      exampleTranslation: 'Sugirieron reunirse el viernes.',
    },
    {
      word: 'promise',
      translation_es: 'prometer',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'She promised to send the email today.',
      exampleTranslation: 'Prometió enviar el email hoy.',
    },
    {
      word: 'refuse',
      translation_es: 'rehusar, negarse',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'He refused to comment on the rumor.',
      exampleTranslation: 'Se rehusó a comentar el rumor.',
    },
    {
      word: 'offer',
      translation_es: 'ofrecer',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'They offered to pay for dinner.',
      exampleTranslation: 'Ofrecieron pagar la cena.',
    },
    {
      word: 'agree',
      translation_es: 'estar de acuerdo, acordar',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'She agreed to join the project.',
      exampleTranslation: 'Estuvo de acuerdo en unirse al proyecto.',
    },
    {
      word: 'warn',
      translation_es: 'advertir, prevenir',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'He warned us not to trust him.',
      exampleTranslation: 'Nos advirtió que no confiáramos en él.',
    },
    {
      word: 'persuade',
      translation_es: 'persuadir, convencer',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'She persuaded him to apply for the job.',
      exampleTranslation: 'Lo persuadió a postularse para el trabajo.',
    },
    {
      word: 'convince',
      translation_es: 'convencer',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'They convinced us to invest in the business.',
      exampleTranslation: 'Nos convencieron a invertir en el negocio.',
    },
    {
      word: 'mention',
      translation_es: 'mencionar',
      level: 'B2',
      category: 'reporting verbs',
      partOfSpeech: 'verb',
      example: 'He mentioned seeing her at the mall.',
      exampleTranslation: 'Mencionó haberla visto en el mall.',
    },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-reporting-verbs-ing',
      level: 'B2',
      name: 'Reporting verbs + -ing (admit, deny, suggest, mention)',
      explanation_es: 'Algunos verbos de reporte van seguidos de una forma -ing: admit/deny/suggest + -ing form. Reportan una acción completa o pasada.',
      formula: 'admit / deny / suggest / mention + -ing form',
      examples: ['He admitted stealing.', 'She denied knowing.', 'They suggested waiting.'],
    },
    {
      id: 'gp-b2-reporting-verbs-to',
      level: 'B2',
      name: 'Reporting verbs + to-infinitivo (promise, refuse, offer, agree)',
      explanation_es: 'Otros verbos de reporte van con to-infinitivo: promise/refuse/offer/agree + to. Reportan un compromiso o intención futura.',
      formula: 'promise / refuse / offer / agree + to-infinitivo',
      examples: ['She promised to help.', 'He refused to go.', 'They offered to pay.'],
    },
    {
      id: 'gp-b2-reporting-verbs-obj-to',
      level: 'B2',
      name: 'Reporting verbs + objeto + to-infinitivo (warn, persuade, convince)',
      explanation_es: 'Algunos verbos requieren un objeto (la persona a la que se reporta la acción): warn/persuade/convince + objeto + to-infinitivo.',
      formula: 'warn / persuade / convince + objeto + to-infinitivo',
      examples: [
        'He warned me not to go.',
        'She persuaded them to stay.',
        'They convinced us to invest.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m3-l1-ex1',
      type: 'multiple_choice',
      concept: 'reporting verbs + -ing',
      difficulty: 3,
      prompt: 'Completa: "He ___ stealing the money."',
      promptTranslation: 'Admitió haber robado el dinero.',
      correctAnswer: 'admitted',
      options: ['admitted', 'admitted to', 'admitted stealing'],
      explanation:
        'La respuesta correcta es el verbo conjugado. El ejercicio pregunta por una palabra, no por la frase completa. Si fuera un fill_blank de frase entera, sería "admitted stealing".',
    },
    {
      id: 'b2-m3-l1-ex2',
      type: 'fill_blank',
      concept: 'reporting verbs + -ing form',
      difficulty: 3,
      prompt: 'She denied ___ the vase. (break)',
      promptTranslation: 'Negó haber roto el jarrón.',
      correctAnswer: 'breaking',
      explanation: '"Deny" va con la forma -ing. Break → breaking.',
    },
    {
      id: 'b2-m3-l1-ex3',
      type: 'fill_blank',
      concept: 'reporting verbs + to-infinitivo',
      difficulty: 3,
      prompt: 'She promised ___ help me. (to / help)',
      promptTranslation: 'Prometió ayudarme.',
      correctAnswer: 'to help',
      explanation: '"Promise" va con to-infinitivo: promise + to + verbo en infinitivo.',
    },
    {
      id: 'b2-m3-l1-ex4',
      type: 'error_correction',
      concept: 'suggest + -ing vs to-infinitivo',
      difficulty: 4,
      prompt: 'Encuentra el error: "They suggested to take a break."',
      correctAnswer: 'They suggested taking a break.',
      acceptedAnswers: [
        'They suggested taking a break',
        'They suggested taking a break.',
      ],
      acceptApproximate: true,
      explanation: '"Suggest" siempre va con -ing, nunca con to-infinitivo. → suggested taking.',
    },
    {
      id: 'b2-m3-l1-ex5',
      type: 'error_correction',
      concept: 'warn + objeto + to-infinitivo',
      difficulty: 4,
      prompt: 'Encuentra el error: "He warned not to go there."',
      correctAnswer: 'He warned me not to go there.',
      acceptedAnswers: [
        'He warned me not to go there',
        'He warned me not to go there.',
        'He warned us not to go there.',
        'He warned them not to go there.',
      ],
      acceptApproximate: true,
      explanation: '"Warn" requiere un objeto (me, us, them, etc.) ANTES del "not to". → warned me/us/them not to.',
    },
    {
      id: 'b2-m3-l1-ex6',
      type: 'translate',
      concept: 'reporting verbs translation',
      difficulty: 4,
      prompt: 'Traduce: "Ella lo persuadió a invertir en el proyecto."',
      correctAnswer: 'She persuaded him to invest in the project.',
      acceptedAnswers: [
        'She persuaded him to invest in the project',
        'She persuaded him to invest in the project.',
      ],
      acceptApproximate: true,
      explanation:
        '"Persuadir a" = persuade + objeto + to-infinitivo. → persuaded him to invest.',
    },
    {
      id: 'b2-m3-l1-ex7',
      type: 'select_correct',
      concept: 'distinguir patrones de reporting verbs',
      difficulty: 4,
      prompt: '¿Cuál oración reporta correctamente: "He refused to go"?',
      correctAnswer: 'He refused to go to the party.',
      options: [
        'He refused going to the party.',
        'He refused to go to the party.',
        'He refused not to go to the party.',
      ],
      explanation: '"Refuse" va con to-infinitivo: refused + to + verbo en infinitivo.',
    },
    {
      id: 'b2-m3-l1-ex8',
      type: 'reorder',
      concept: 'word order with warn + objeto + to',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Me advirtió que no llegara tarde.',
      words: ['warned', 'He', 'me', 'to', 'late.', 'not', 'be'],
      correctAnswer: 'He warned me not to be late.',
      explanation:
        'Orden: sujeto (He) + verbo (warned) + objeto (me) + not to + infinitivo (be late). → He warned me not to be late.',
    },
    {
      id: 'b2-m3-l1-ex9',
      type: 'true_false',
      concept: 'reporting verbs patterns',
      difficulty: 3,
      prompt: '"Suggest" puede ir con to-infinitivo en inglés formal: "They suggested to wait."',
      correctAnswer: 'false',
      explanation:
        'Falso. "Suggest" siempre va con -ing: "They suggested waiting." Esto es una regla muy fija en inglés.',
    },
    {
      id: 'b2-m3-l1-ex10',
      type: 'listening',
      concept: 'reporting verbs listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation:
        'Conversación donde se usan varios reporting verbs. Los alumnos deben entender qué estructura tiene cada reporte.',
      listening: {
        audioText:
          "Anna told me about her friend's situation. Her friend admitted making a terrible mistake at work. The boss refused to accept her apology. Anna suggested looking for a new job. Her friend promised to send her resume to different companies. Anna also warned her not to make the same mistake again. She convinced her to be more careful in the future.",
        audioUrl: '/audio/tts/b2-m3-l1-ex10.mp3',
        questions: [
          {
            id: 'b2-m3-l1-ex10-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the friend admit?',
            correctAnswer: 'Making a terrible mistake at work',
            options: [
              'Making a terrible mistake at work',
              'Refusing to work',
              'Quitting her job',
            ],
            explanation: '"Her friend admitted making a terrible mistake at work."',
          },
          {
            id: 'b2-m3-l1-ex10-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The boss accepted the apology.',
            correctAnswer: 'false',
            explanation: '"The boss refused to accept her apology."',
          },
          {
            id: 'b2-m3-l1-ex10-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did Anna convince her friend to do?',
            correctAnswer: 'Be more careful in the future',
            options: [
              'Accept the boss\'s decision',
              'Be more careful in the future',
              'Send her resume immediately',
            ],
            explanation: '"She convinced her to be more careful in the future."',
          },
        ],
      },
    },
    {
      id: 'b2-m3-l1-ex11',
      type: 'writing',
      concept: 'reporting verbs writing',
      difficulty: 4,
      prompt:
        'Escribí un email a un amigo resumiendo una conversación que tuviste sobre un problema. Usá al menos 5 verbos de reporte diferentes (de los tres patrones: +ing, +to, +objeto+to). Sé creativo: ¿qué es el problema? ¿Qué sugirieron? ¿Qué prometieron? ¿Qué advirtieron?',
      promptTranslation: 'Write an email reporting a conversation using different reporting verbs.',
      correctAnswer: '',
      explanation:
        'Un buen email usa varios reporting verbs variados de forma natural, con estructuras correctas.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: [
        'Resumen claro del problema',
        'Al menos 3 verbos de reporte diferentes (con estructuras correctas)',
        'Tono conversacional natural',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m3-l1-ex12',
      type: 'speaking',
      concept: 'reporting verbs pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'She warned me not to be late.',
      explanation:
        'Practicá la pronunciación natural de los verbos de reporte y la entonación de la cláusula con "not to".',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m3-l1-mt1',
      type: 'fill_blank',
      concept: 'reporting verbs + -ing',
      difficulty: 3,
      prompt: 'He denied ___ the accident. (cause)',
      promptTranslation: 'Negó haber causado el accidente.',
      correctAnswer: 'causing',
      explanation: '"Deny" va siempre con -ing: deny + -ing form.',
    },
    {
      id: 'b2-m3-l1-mt2',
      type: 'error_correction',
      concept: 'promise vs admit',
      difficulty: 4,
      prompt: 'Corrige: "She promised stealing the money."',
      correctAnswer: 'She admitted stealing the money.',
      acceptedAnswers: [
        'She admitted stealing the money',
        'She admitted stealing the money.',
      ],
      acceptApproximate: true,
      explanation:
        '"Promise" va con to-infinitivo, "admit" con -ing. Si la acción ya fue hecha, usa "admitted stealing".',
    },
    {
      id: 'b2-m3-l1-mt3',
      type: 'multiple_choice',
      concept: 'warn + objeto + to',
      difficulty: 3,
      prompt: 'Completa: "He warned ___ not to touch the wet paint."',
      correctAnswer: 'us',
      options: ['us', 'to us', 'ourselves'],
      explanation:
        '"Warn" + objeto + not to. El objeto va directamente después del verbo de reporte: warned + us + not to.',
    },
  ],
  reviewItems: ['b1-m7-l1', 'b1-m7-l2', 'b1-m7-l3'],
  workbookRefs: [
    { levelId: 'b2', page: 3, exercises: [1, 2, 4], note: 'Práctica de reporting verbs y sus patrones' },
  ],
  prerequisites: ['b1-m7-l3'],
}
