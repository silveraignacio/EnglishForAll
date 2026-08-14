import type { Lesson } from '../../types'

export const lesson91VerbsMeaningChange: Lesson = {
  id: 'b2-m9-l1',
  moduleId: 'm9-verb-patterns-phrasal',
  order: 0,
  title: 'Verbs with meaning changes: -ing vs to-infinitive',
  objective: 'Usar correctamente verbos que cambian de significado según vayan seguidos de gerundio (-ing) o infinitivo (to + verbo), distinguiendo entre "I stopped smoking" (dejar de) vs "I stopped to smoke" (parar para).',
  explanation_es: `En B1 aprendimos que algunos verbos aceptan tanto -ing como infinitivo sin cambiar el sentido (like, enjoy, prefer, begin, etc.). Pero hay un grupo importante de verbos cuyo SIGNIFICADO CAMBIA totalmente según cuál forma uses. Es crítico saberlos porque el cambio de forma refleja un cambio real en lo que querés decir.

Los principales verbos con cambio de significado:

1. **REMEMBER** (acordarse / recordar)
   - remember + -ing → recordar que algo pasó en el pasado. "I remember eating pizza there" = Recuerdo que comí pizza ahí. (Ya pasó, es un recuerdo.)
   - remember + to-infinitive → acordarse de hacer algo / acordarse de una obligación. "Remember to call your mom" = Acordate de llamar a tu mamá. (Aún no pasó, es algo que tenés que hacer.)

2. **STOP** (parar, dejar de)
   - stop + -ing → dejar de hacer algo, abandonar una actividad. "I stopped smoking" = Dejé de fumar. (Ya no fumo.)
   - stop + to-infinitive → pararse/detenerse PARA hacer algo, propósito. "I stopped to buy milk" = Me detuve para comprar leche. (Paro mi actividad principal para hacer otra cosa.)

3. **REGRET** (arrepentirse, lamentar)
   - regret + -ing → arrepentirse de algo que ya hiciste. "I regret saying that" = Me arrepiento de haber dicho eso.
   - regret + to-infinitive → tener el pesar de decir algo (forma muy formal). "I regret to inform you..." = Lamento tener que informarte... (Es una forma educada, casi de escritura formal.)

4. **TRY** (intentar, probar)
   - try + -ing → probar/experimentar con algo, usar un método diferente. "Try eating more vegetables" = Probá comiendo más verduras. (Sugerencia de experimentar.)
   - try + to-infinitive → intentar/esforzarse por hacer algo. "I tried to call you" = Intenté llamarte. (Hice el esfuerzo pero quizá no lo logré.)

5. **GO ON** (continuar, seguir)
   - go on + -ing → continuar haciendo algo, seguir con lo mismo. "He went on talking for hours" = Siguió hablando durante horas.
   - go on + to-infinitive → pasar a hacer algo siguiente, cambiar de tema. "After dinner, we went on to watch a movie" = Después de cenar, pasamos a ver una película.

6. **MEAN** (significar, tener la intención)
   - mean + -ing → significar algo, implicar una consecuencia. "Being late means missing the start" = Llegar tarde significa perder el inicio.
   - mean + to-infinitive → tener la intención de, pretender. "I meant to call you yesterday" = Pretendía llamarte ayer. (La intención existía pero no se concretó o se concretó tarde.)

Puntos importantes:

• El cambio de forma es el indicador del cambio de significado. No confundas "remember to" (futuro, obligación) con "remember -ing" (pasado, recuerdo).

• "Stop + -ing" y "stop + to-infinitive" son especialmente distintos: "stopped smoking" (hábito abandonado) vs "stopped to smoke" (paré mi actividad para fumar).

• Con "try", el -ing es un consejo experimental; el "to" es un esfuerzo que podría haber fallado.

• "Mean + to" y "meant to" (pasado) expresan una intención NO realizada o retrasada, muy común en inglés hablado: "I meant to send the email yesterday" = Pretendía enviar el mail ayer (pero no lo hice o lo hice tarde).

Comparación con B1: Ya sabés that some verbs like "like", "enjoy", "prefer" pueden ir con -ing o to sin cambiar significado. Ahora aprendés que otros verbos SÍ cambian, y ese cambio es gramaticalmente importante.`,
  examples: [
    {
      english: 'I remember eating ice cream at that beach.',
      spanish: 'Recuerdo que comimos helado en esa playa.',
      note: 'Recuerdo: algo que pasó en el pasado. (remember + -ing)',
    },
    {
      english: 'Remember to buy milk on your way home.',
      spanish: 'Acordate de comprar leche de camino a casa.',
      note: 'Obligación futura: algo que aún no pasó. (remember + to)',
    },
    {
      english: 'She stopped smoking three years ago.',
      spanish: 'Dejó de fumar hace tres años.',
      note: 'Abandonar un hábito. (stop + -ing)',
    },
    {
      english: 'I stopped to pick up some groceries.',
      spanish: 'Me detuve para recoger algunas compras.',
      note: 'Parar en el medio de una actividad para hacer algo. (stop + to)',
    },
    {
      english: 'I regret telling you the truth.',
      spanish: 'Me arrepiento de haberte dicho la verdad.',
      note: 'Arrepentimiento de algo que hiciste. (regret + -ing)',
    },
    {
      english: 'He tried to open the door, but it was locked.',
      spanish: 'Intentó abrir la puerta, pero estaba cerrada.',
      note: 'Esfuerzo (quizá sin éxito). (try + to)',
    },
    {
      english: 'Try adding honey to your tea.',
      spanish: 'Probá agregando miel a tu té.',
      note: 'Experimento, sugerencia. (try + -ing)',
    },
    {
      english: 'After the meeting, we went on to discuss the budget.',
      spanish: 'Después de la reunión, pasamos a discutir el presupuesto.',
      note: 'Pasar a una actividad siguiente. (go on + to)',
    },
    {
      english: 'He went on working despite the noise.',
      spanish: 'Siguió trabajando a pesar del ruido.',
      note: 'Continuar con lo mismo. (go on + -ing)',
    },
    {
      english: 'I meant to call you yesterday.',
      spanish: 'Pretendía llamarte ayer.',
      note: 'Intención no realizada o retrasada. (mean + to)',
    },
  ],
  rule: `Fórmula — Verbos que cambian significado:

REMEMBER:
- remember + -ing = recordar que pasó (pasado)
- remember + to-infinitive = acordarse de (futuro/obligación)

STOP:
- stop + -ing = dejar de (abandonar)
- stop + to-infinitive = parar PARA hacer algo (propósito)

REGRET:
- regret + -ing = arrepentirse de
- regret + to-infinitive = tener el pesar (formal)

TRY:
- try + -ing = probar/experimentar
- try + to-infinitive = intentar/esforzarse

GO ON:
- go on + -ing = continuar
- go on + to-infinitive = pasar a (siguiente acción)

MEAN:
- mean + -ing = significar (implicación)
- mean + to-infinitive = tener la intención de`,
  commonMistakes: [
    {
      wrong: '❌ I remember to eat pizza there.',
      correct: '✅ I remember eating pizza there.',
      explanation:
        '"Remember + -ing" para recuerdos del pasado. "Remember + to" para obligaciones futuras. Aquí es un recuerdo, así que -ing.',
    },
    {
      wrong: '❌ He stopped to smoking.',
      correct: '✅ He stopped smoking.',
      explanation:
        '"Stop + -ing" para abandonar un hábito. El infinitivo "to" va cuando la razón es un propósito: "He stopped to smoke" (paró para fumar).',
    },
    {
      wrong: '❌ I regret to tell you.',
      correct: '✅ I regret telling you.',
      explanation:
        '"Regret + -ing" para arrepentimiento de acciones propias. "Regret + to" es muy formal y menos común; se usa en escritura oficial: "I regret to inform you..."',
    },
    {
      wrong: '❌ I tried calling the office, but I failed call them back.',
      correct: '✅ I tried calling the office, but I failed to call them back.',
      explanation:
        '"Try + -ing" = probar un método. "Try + to-infinitive" = intentar. Ambas formas existen, pero con matices diferentes.',
    },
    {
      wrong: '❌ He went on smoking after the warning.',
      correct: '✅ He went on smoking after the warning. / He went on to smoke after the warning.',
      explanation:
        'Con "go on smoking", significa continuar. Con "went on to smoke" (raro en este contexto), sería pasar a fumar (como siguiente actividad). En este contexto, -ing es más natural.',
    },
    {
      wrong: '❌ Being late means to miss the start.',
      correct: '✅ Being late means missing the start.',
      explanation:
        '"Mean + -ing" para implicaciones/consecuencias. "Mean + to" para intenciones: "I meant to call" (tenía la intención de).',
    },
  ],
  vocabulary: [
    {
      word: 'to regret',
      translation_es: 'arrepentirse, lamentar',
      level: 'B2',
      category: 'verbs with meaning changes',
      partOfSpeech: 'verb',
      example: 'I regret not studying harder.',
      exampleTranslation: 'Me arrepiento de no haber estudiado más.',
    },
    {
      word: 'to abandon',
      translation_es: 'abandonar',
      level: 'B2',
      category: 'verbs with meaning changes',
      partOfSpeech: 'verb',
      example: 'She abandoned her job.',
      exampleTranslation: 'Ella abandonó su trabajo.',
    },
    {
      word: 'purpose',
      translation_es: 'propósito, fin',
      level: 'B2',
      category: 'verbs with meaning changes',
      partOfSpeech: 'noun',
      example: 'He stopped for the purpose of buying water.',
      exampleTranslation: 'Se detuvo con el propósito de comprar agua.',
    },
    {
      word: 'intention',
      translation_es: 'intención',
      level: 'B2',
      category: 'verbs with meaning changes',
      partOfSpeech: 'noun',
      example: 'My intention was to help.',
      exampleTranslation: 'Mi intención era ayudar.',
    },
    {
      word: 'to imply',
      translation_es: 'implicar, conllevar',
      level: 'B2',
      category: 'verbs with meaning changes',
      partOfSpeech: 'verb',
      example: 'That behavior implies disrespect.',
      exampleTranslation: 'Ese comportamiento conlleva falta de respeto.',
    },
    {
      word: 'to defer',
      translation_es: 'aplazar, posponer',
      level: 'B2',
      category: 'verbs with meaning changes',
      partOfSpeech: 'verb',
      example: 'I deferred the decision.',
      exampleTranslation: 'Aplazé la decisión.',
    },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-remember-meaning-change',
      level: 'B2',
      name: 'remember: -ing (memory) vs to (obligation)',
      explanation_es:
        'remember + -ing = recordar un hecho pasado. remember + to = acordarse de una obligación futura.',
      formula: 'remember + -ing (past) / remember + to-infinitive (future)',
      examples: [
        'I remember visiting Paris.',
        'Remember to lock the door.',
        'Do you remember eating there?',
      ],
    },
    {
      id: 'gp-b2-stop-meaning-change',
      level: 'B2',
      name: 'stop: -ing (abandon) vs to (purpose)',
      explanation_es:
        'stop + -ing = dejar de hacer algo. stop + to = parar para hacer algo (propósito).',
      formula: 'stop + -ing (abandon) / stop + to-infinitive (purpose)',
      examples: [
        'He stopped smoking.',
        'She stopped to buy groceries.',
        'They stopped working at 5 PM.',
      ],
    },
    {
      id: 'gp-b2-try-meaning-change',
      level: 'B2',
      name: 'try: -ing (experiment) vs to (attempt/effort)',
      explanation_es:
        'try + -ing = probar/experimentar un método. try + to = intentar (con esfuerzo, quizá sin éxito).',
      formula: 'try + -ing (experiment) / try + to-infinitive (attempt)',
      examples: [
        'Try using a different approach.',
        'I tried to solve it.',
        'Have you tried meditating?',
      ],
    },
    {
      id: 'gp-b2-mean-meaning-change',
      level: 'B2',
      name: 'mean: -ing (implication) vs to (intention)',
      explanation_es:
        'mean + -ing = significar/implicar una consecuencia. mean + to = tener la intención de (a menudo no realizada).',
      formula: 'mean + -ing (implication) / mean + to-infinitive (intention)',
      examples: [
        'Losing means trying again.',
        'I meant to call you.',
        'It means working on weekends.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m9-l1-ex1',
      type: 'multiple_choice',
      concept: 'remember -ing vs to',
      difficulty: 3,
      prompt: 'Completa: "I ___ eating sushi at that restaurant in Tokyo."',
      promptTranslation: 'Recuerdo que comimos sushi en ese restaurante de Tokio.',
      correctAnswer: 'remember',
      options: ['remember', 'remember to'],
      explanation: '"remember + -ing" para recordar algo que ya pasó. "Remember to" es para obligaciones futuras.',
    },
    {
      id: 'b2-m9-l1-ex2',
      type: 'fill_blank',
      concept: 'stop -ing vs to',
      difficulty: 3,
      prompt: 'Completa: "She stopped ___ (work) to answer the phone."',
      promptTranslation: 'Dejó de trabajar para responder el teléfono.',
      correctAnswer: 'working',
      explanation: '"Stop + -ing" = dejar de hacer. "Stop + to" = parar para hacer algo. Aquí es lo segundo pero la frase ya tiene "to answer", entonces necesita "stop working".',
    },
    {
      id: 'b2-m9-l1-ex3',
      type: 'true_false',
      concept: 'try -ing vs to',
      difficulty: 2,
      prompt: '"I tried to fix the laptop" y "I tried fixing the laptop" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation:
        'No. "Try to" = intenté (esfuerzo, tal vez sin éxito). "Try -ing" = probé/experimenté. Son similares pero tienen matices diferentes.',
    },
    {
      id: 'b2-m9-l1-ex4',
      type: 'error_correction',
      concept: 'remember vs go on',
      difficulty: 4,
      prompt: 'Encuentra y corrige el error: "I remember to study physics, but then I went on sleeping."',
      correctAnswer: 'I remember studying physics, but then I went on sleeping.',
      acceptedAnswers: [
        'I remember studying physics, but then I went on sleeping',
        'I remember studying physics, but then I went on sleeping.',
      ],
      acceptApproximate: true,
      explanation:
        '"Remember + -ing" = recuerdo que estudié (pasado). "Remember + to" = acordate de (futuro). Aquí es pasado.',
    },
    {
      id: 'b2-m9-l1-ex5',
      type: 'translate',
      concept: 'mean -ing vs to',
      difficulty: 4,
      prompt: 'Traduce: "Ser honesto significa decir la verdad, incluso cuando es difícil."',
      correctAnswer: 'Being honest means telling the truth, even when it\'s difficult.',
      acceptedAnswers: [
        'Being honest means telling the truth, even when it is difficult',
        'Being honest means telling the truth, even when it\'s difficult.',
      ],
      acceptApproximate: true,
      explanation: '"Mean + -ing" para implicación/consecuencia. "Significa contar la verdad" = "means telling the truth".',
    },
    {
      id: 'b2-m9-l1-ex6',
      type: 'reorder',
      concept: 'word order with meaning-change verbs',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Intenté llamarte varias veces.',
      words: ['I', 'tried', 'to', 'call', 'you', 'several', 'times.'],
      correctAnswer: 'I tried to call you several times.',
      explanation: 'Orden: sujeto + tried + to-infinitive + complementos. → I tried to call you several times.',
    },
    {
      id: 'b2-m9-l1-ex7',
      type: 'select_correct',
      concept: 'stop -ing vs to in context',
      difficulty: 4,
      prompt:
        'Elegí la frase que mejor completa la situación: "During the hike, we were exhausted, so we ___."',
      correctAnswer: 'stopped to rest',
      options: ['stopped resting', 'stopped to rest', 'stopped for resting'],
      explanation:
        '"Stopped to rest" = nos detuvimos con el propósito de descansar. Es la opción correcta en contexto. "Stopped resting" significaría "dejamos de descansar".',
    },
    {
      id: 'b2-m9-l1-ex8',
      type: 'multiple_choice',
      concept: 'go on -ing vs to',
      difficulty: 3,
      prompt: 'Completa: "After the movie, we ___ (go to) the restaurant."',
      promptTranslation: 'Después de la película, fuimos al restaurante.',
      correctAnswer: 'went on to',
      options: ['went on', 'went on to', 'went to'],
      explanation: '"Go on + to" = pasar a hacer algo siguiente. "Go on + -ing" = continuar haciendo lo mismo.',
    },
    {
      id: 'b2-m9-l1-ex9',
      type: 'listening',
      concept: 'meaning-change verbs in dialogue',
      difficulty: 4,
      prompt: 'Escuchá el diálogo y respondé las preguntas.',
      correctAnswer: '',
      explanation:
        'Conversación entre dos amigos sobre hábitos: uno recuerda un viaje, el otro cuenta que dejó de fumar, hablan de intentos fallidos.',
      listening: {
        audioText:
          "Sarah: Hey, do you remember visiting that beach in Portugal? Mike: Of course! I remember spending the whole day there. But I\'ve changed since then. Sarah: What do you mean? Mike: Well, I stopped smoking three years ago, and I meant to tell you earlier. Sarah: That\'s great! How did you manage? Mike: I tried quitting cold turkey first, but that didn\'t work. Then I tried using nicotine patches. Sarah: And it worked? Mike: Eventually. Now I sometimes stop to breathe fresh air instead.",
        questions: [
          {
            id: 'b2-m9-l1-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Mike has always wanted to stop smoking.',
            correctAnswer: 'false',
            explanation: 'Mike "stopped smoking three years ago" = already did it. "Meant to tell you earlier" shows he did it before.',
          },
          {
            id: 'b2-m9-l1-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did Mike try first?',
            correctAnswer: 'Quitting cold turkey',
            options: [
              'Quitting cold turkey',
              'Using nicotine patches',
              'Breathing fresh air',
            ],
            explanation: '"I tried quitting cold turkey first, but that didn\'t work."',
          },
          {
            id: 'b2-m9-l1-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Why does Mike "stop to breathe fresh air"?',
            correctAnswer: 'He wants to enjoy nature instead of smoking',
            options: [
              'He runs out of air',
              'He wants to enjoy nature instead of smoking',
              'He forgets to breathe',
            ],
            explanation:
              'Context: He stopped smoking (abandoned the habit). Now he stops [whatever he\'s doing] to breathe fresh air [on purpose, as an alternative].',
          },
        ],
      },
    },
    {
      id: 'b2-m9-l1-ex10',
      type: 'writing',
      concept: 'meaning-change verbs in narrative',
      difficulty: 4,
      prompt:
        'Escribí un párrafo de 80-120 palabras contando sobre un cambio que hiciste en tu vida. Usá al menos 3 verbos de cambio de significado: remember, stop, try, mean, go on. Ejemplo: un hábito que dejaste, algo que intentaste, etc.',
      promptTranslation:
        'Write about a life change using meaning-change verbs: remember, stop, try, mean, go on.',
      correctAnswer: '',
      explanation:
        'Un buen párrafo cuenta una anécdota real o inventada, incorpora naturalmente los verbos con cambio de significado, y muestra comprensión de los matices (ej: "I remember playing sports" vs "I tried to play professionally").',
      taskType: 'essay',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: [
        'Mínimo 3 verbos de cambio de significado usados correctamente',
        'Una situación clara o hábito descrito',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m9-l1-ex11',
      type: 'speaking',
      concept: 'meaning-change verb pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'I regret not telling you the truth earlier.',
      explanation:
        'Practicá la reducción natural en habla: "regret not" y la pronunciación clara de "telling" (con la geminación de la "t").',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m9-l1-mt1',
      type: 'fill_blank',
      concept: 'remember -ing vs to',
      difficulty: 3,
      prompt: 'Completa: "Don\'t forget! ___ (remember) to lock the car before you leave."',
      promptTranslation: 'No olvides. Acordate de cerrar el auto antes de irte.',
      correctAnswer: 'Remember',
      explanation: '"Remember + to" para obligaciones futuras. "Remember + -ing" para recuerdos pasados.',
    },
    {
      id: 'b2-m9-l1-mt2',
      type: 'error_correction',
      concept: 'stop -ing vs to',
      difficulty: 3,
      prompt: 'Corrige: "They stopped dancing to continue talking for hours."',
      correctAnswer: 'They stopped dancing to continue talking for hours. (OR) They stopped talking to dance.',
      acceptedAnswers: [
        'They stopped dancing to continue talking for hours.',
        'They stopped talking to continue dancing.',
        'They stopped dancing to continue talking for hours',
      ],
      acceptApproximate: true,
      explanation:
        '"Stop + -ing" = abandonar. "Stop + to" = parar para hacer algo. La frase original es correcta si significa "pararon de bailar PARA hablar".',
    },
    {
      id: 'b2-m9-l1-mt3',
      type: 'select_correct',
      concept: 'mean -ing vs try to',
      difficulty: 4,
      prompt: 'Elige la opción que mejor complete la frase: "Hard work ___ success, and I ___ my best every day."',
      correctAnswer: 'means achieving / try to do',
      options: [
        'means achieving / try to do',
        'means to achieve / try doing',
        'is meaning achieving / am trying to do',
      ],
      explanation:
        '"Mean + -ing" = significar/implicar. "Try + to" = intentar. "Hard work means achieving success" y "I try to do my best".',
    },
  ],
  reviewItems: ['b1-m10-l1', 'b1-m10-l2', 'b1-m10-l3'],
  prerequisites: ['b1-m10-l3'],
}
