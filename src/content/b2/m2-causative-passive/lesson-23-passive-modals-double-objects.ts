import type { Lesson } from '../../types'

export const lesson23PassiveModalsDoubleObjects: Lesson = {
  id: 'b2-m2-l3',
  moduleId: 'm2-causative-passive',
  order: 2,
  title: 'Passive with Modals & Double Object Verbs',
  objective: 'Usar la pasiva con verbos modales (must be done, can be done, should be done, might be done), pasiva con modal perfect (must have been solved), y pasiva con verbos de dos objetos (She was given a prize / A prize was given to her). Además, infinitivos pasivos impersonales: It is said that... / He is thought to be...',
  explanation_es: `Ya sabés la pasiva simple y en tiempos compuestos. Ahora vamos a trabajar con casos especiales: modales en pasiva, verbos que tienen dos objetos, e infinitivos pasivos impersonales.

HAY TRES ÁREAS:

1. PASSIVE WITH MODALS (must be done, can be done, should be done, might be done)
   Estructura: modal + be + participio pasado
   Significado: expresa obligación, permiso, posibilidad, etc., en forma pasiva.
   Ejemplos:
   - "This must be done immediately" = Esto debe hacerse inmediatamente.
   - "Mistakes can be prevented" = Los errores pueden prevenirse.
   - "The letter should be sent today" = La carta debería ser enviada hoy.

2. PASSIVE WITH MODAL PERFECT (must have been done, can't have been done, etc.)
   Estructura: modal + have been + participio pasado
   Significado: deducción sobre algo pasado en forma pasiva.
   Ejemplos:
   - "The problem must have been solved by now" = El problema debe de haber sido resuelto ya.
   - "The money can't have been stolen, it's still here" = El dinero no puede haber sido robado, sigue aquí.

3. DOUBLE OBJECT VERBS IN PASSIVE (She was given a prize / A prize was given to her)
   Algunos verbos toman DOS objetos: "give", "send", "tell", "teach", "show", "ask", "bring", etc.
   Estructura: hay DOS formas pasivas posibles:
   a) Sujeto pasivo = objeto indirecto: "She was given a prize" (enfatiza quién recibe).
   b) Sujeto pasivo = objeto directo: "A prize was given to her" (enfatiza qué se da).
   Diferencia: en inglés, ambas son correctas, pero la primera (indirect object) es más común y más natural.

4. IMPERSONAL INFINITIVE PASSIVE (It is said that... / He is thought to be...)
   Estructura: It is + verbo (said, thought, believed, rumored, reported, etc.) + that + cláusula
   O: Subject + is + verbo (said, thought, believed, etc.) + to be/to have been + adjetivo/sustantivo
   Significado: reporta lo que la gente cree o dice, sin comprometerse personalmente.
   Ejemplos:
   - "It is said that he left the country" = Se dice que se fue del país.
   - "He is thought to be a genius" = Se cree que es un genio. (Él es considerado genio.)
   - "She is believed to have been responsible" = Se cree que fue responsable.

Puntos importantes:

1. Con modales en pasiva: el participio pasado NO cambia. "It must be done", "they must be done" — siempre "done".

2. Con modal perfect: "must have been done" (siempre este orden), no "must been have done".

3. Con double objects: ambas formas son correctas, pero "indirect object passive" (She was given) es más común y natural en inglés.

4. Con impersonal infinitives: "It is said that" es muy usado en reportajes y textos formales. "He is thought to be..." es más compacto.

5. Comparación con lo que ya sabés: "He must do it" (activa) vs "It must be done" (pasiva). "Someone gave her a prize" vs "She was given a prize" (double object).`,
  examples: [
    { english: 'This problem must be solved today.', spanish: 'Este problema debe ser resuelto hoy.', note: 'Pasiva con modal: must be + participio.' },
    { english: 'Mistakes can be prevented if you are careful.', spanish: 'Los errores pueden prevenirse si sos cuidadoso.', note: 'Pasiva con modal can: posibilidad.' },
    { english: 'The password should have been changed last week.', spanish: 'La contraseña debería haber sido cambiada la semana pasada.', note: 'Modal perfect passive: should have been + participio.' },
    { english: 'She was given an award for her work.', spanish: 'Se le otorgó un premio por su trabajo.', note: 'Double object: She (indirect object) fue dado un premio.' },
    { english: 'An award was given to her for her work.', spanish: 'Un premio fue otorgado a ella por su trabajo.', note: 'Double object alternativa: An award (direct object) fue dado.' },
    { english: 'It is said that he left the country secretly.', spanish: 'Se dice que se fue del país en secreto.', note: 'Impersonal infinitive passive: It is said that...' },
    { english: 'He is thought to be the best candidate.', spanish: 'Se cree que es el mejor candidato.', note: 'Impersonal infinitive: He is thought to be...' },
  ],
  rule: `Fórmulas:

1. PASSIVE WITH MODALS
   Forma: modal + be + past participle
   Ejemplos: "must be done" / "can be prevented" / "should be sent" / "might be delayed"

2. PASSIVE WITH MODAL PERFECT
   Forma: modal + have been + past participle
   Ejemplos: "must have been solved" / "can't have been stolen" / "should have been done"

3. DOUBLE OBJECT VERBS IN PASSIVE
   Forma a (indirect object passive): indirect object + be + past participle + direct object
   Forma b (direct object passive): direct object + be + past participle + to + indirect object
   Ejemplos: "She was given a prize" / "A prize was given to her"

4. IMPERSONAL INFINITIVE PASSIVE
   Forma a: It is/was + verb (said, thought, believed) + that + clause
   Forma b: Subject + is/was + verb (said, thought, believed) + to be/to have been + adjective/noun
   Ejemplos: "It is said that..." / "He is thought to be a genius" / "She is believed to have been responsible"

Reglas:
1. Modal en pasiva: el auxiliar be no lleva infinitivo; va solo después del modal: "must be", no "must be to be".
2. Double objects: ambas formas son correctas; la indirect object es más común.
3. Impersonal infinitives: la forma "It is said that" es más formal; la forma "He is thought to be" es más compacta.
4. Preguntas: "Should this be done?" / "Might she have been told?" / "Is he believed to be..."`,
  commonMistakes: [
    { wrong: '❌ The problem must to be solved.', correct: '✅ The problem must be solved.', explanation: 'Después de modal va "be" directamente, no "to be". Modal + be + participio.' },
    { wrong: '❌ The award was given a prize to her.', correct: '✅ She was given a prize. / A prize was given to her.', explanation: 'Con double objects, el indirecto (She) o el directo (A prize) puede ser sujeto pasivo, pero no ambos en la misma oración.' },
    { wrong: '❌ He is thought to be a genius.', correct: '✅ He is thought to be a genius.', explanation: 'Esta forma es correcta. El error común es omitir "to be": "He is thought a genius" (incorrecto).' },
    { wrong: '❌ The letter must have send been.', correct: '✅ The letter must have been sent.', explanation: 'Orden correcto: must have been (no send) + participio (sent).' },
    { wrong: '❌ It is said him that he left.', correct: '✅ It is said that he left.', explanation: 'Formato impersonal: "It is said that", no "It is said him that".' },
  ],
  vocabulary: [
    { word: 'to award', translation_es: 'otorgar, premiar', level: 'B2', category: 'modal-passive', partOfSpeech: 'verb', example: 'She was awarded a medal.', exampleTranslation: 'Se le otorgó una medalla.' },
    { word: 'to prevent', translation_es: 'prevenir, evitar', level: 'B2', category: 'modal-passive', partOfSpeech: 'verb', example: 'Mistakes can be prevented.', exampleTranslation: 'Los errores pueden prevenirse.' },
    { word: 'genius', translation_es: 'genio', level: 'B2', category: 'modal-passive', partOfSpeech: 'noun', example: 'He is thought to be a genius.', exampleTranslation: 'Se cree que es un genio.' },
    { word: 'to be responsible', translation_es: 'ser responsable', level: 'B2', category: 'modal-passive', partOfSpeech: 'phrase', example: 'She is believed to have been responsible.', exampleTranslation: 'Se cree que fue responsable.' },
    { word: 'allegedly', translation_es: 'supuestamente', level: 'B2', category: 'modal-passive', partOfSpeech: 'adverb', example: 'It is alleged that he stole the money.', exampleTranslation: 'Se alega que robó el dinero.' },
    { word: 'to rumor', translation_es: 'correr el rumor, rumorear', level: 'B2', category: 'modal-passive', partOfSpeech: 'verb', example: 'It is rumored that they are getting married.', exampleTranslation: 'Corre el rumor de que se casan.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-passive-modals',
      level: 'B2',
      name: 'passive with modals (must be done, can be done, etc.)',
      explanation_es: 'Expresa obligación, permiso, o posibilidad en forma pasiva. Modal + be + participio pasado.',
      formula: 'modal + be + past participle',
      examples: ['This must be done.', 'Mistakes can be prevented.', 'The letter should be sent.'],
    },
    {
      id: 'gp-b2-passive-modal-perfect',
      level: 'B2',
      name: 'passive with modal perfect (must have been done)',
      explanation_es: 'Expresa deducción sobre algo pasado en forma pasiva. Modal + have been + participio pasado.',
      formula: 'modal + have been + past participle',
      examples: ['The problem must have been solved.', 'The money can\'t have been stolen.', 'She should have been told.'],
    },
    {
      id: 'gp-b2-double-object-passive',
      level: 'B2',
      name: 'double object verbs in passive (She was given / Was given to her)',
      explanation_es: 'Algunos verbos (give, send, teach, etc.) toman dos objetos. Ambos pueden ser sujeto pasivo.',
      formula: 'indirect object + be + past participle + direct object OR direct object + be + past participle + to + indirect object',
      examples: ['She was given a prize.', 'A prize was given to her.', 'He was sent a letter.', 'A letter was sent to him.'],
    },
    {
      id: 'gp-b2-impersonal-infinitive-passive',
      level: 'B2',
      name: 'impersonal infinitive passive (It is said that / He is thought to be)',
      explanation_es: 'Reporta lo que se dice o se cree sin comprometerse. Dos formas: "It is said that" o "Subject + is + verb + to be".',
      formula: 'It is/was + verb (said, thought, believed, rumored, reported) + that + clause OR Subject + is/was + verb (said, thought, believed) + to be/to have been + adjective',
      examples: ['It is said that he left.', 'He is thought to be a genius.', 'She is believed to have been responsible.', 'It is rumored that they are getting married.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m2-l3-ex1',
      type: 'multiple_choice',
      concept: 'passive with modals',
      difficulty: 3,
      prompt: 'Completa: "This problem ___ solved immediately."',
      promptTranslation: 'Este problema debe ser resuelto inmediatamente.',
      correctAnswer: 'must be',
      options: ['must be', 'must been', 'has to be'],
      explanation: 'Pasiva con modal: modal + be + participio. "Must be solved".',
    },
    {
      id: 'b2-m2-l3-ex2',
      type: 'fill_blank',
      concept: 'passive with modals possibility',
      difficulty: 3,
      prompt: 'Completa: "Errors ___ prevented with care."',
      promptTranslation: 'Los errores pueden prevenirse con cuidado.',
      correctAnswer: 'can be',
      explanation: 'Pasiva con modal can: expresa posibilidad. "Can be prevented".',
    },
    {
      id: 'b2-m2-l3-ex3',
      type: 'multiple_choice',
      concept: 'passive modal perfect',
      difficulty: 4,
      prompt: 'Completa: "The problem ___ by now."',
      promptTranslation: 'El problema debe de haber sido resuelto ya.',
      correctAnswer: 'must have been solved',
      options: ['must have been solved', 'must be solved', 'must have solve'],
      explanation: 'Modal perfect passive: modal + have been + participio. "Must have been solved".',
    },
    {
      id: 'b2-m2-l3-ex4',
      type: 'fill_blank',
      concept: 'double object passive indirect',
      difficulty: 3,
      prompt: 'Completa: "She ___ a prize for her work."',
      promptTranslation: 'Se le otorgó un premio por su trabajo.',
      correctAnswer: 'was given',
      explanation: 'Double object passive con indirect object: She (indirecto) + was given (verbo) + a prize (directo).',
    },
    {
      id: 'b2-m2-l3-ex5',
      type: 'translate',
      concept: 'double object passive direct',
      difficulty: 4,
      prompt: 'Traduce de dos formas: "A medal was awarded to him."',
      correctAnswer: 'He was awarded a medal. / A medal was awarded to him.',
      acceptedAnswers: [
        'He was awarded a medal',
        'He was awarded a medal.',
        'A medal was awarded to him',
        'A medal was awarded to him.',
      ],
      acceptApproximate: true,
      explanation: 'Ambas formas son correctas. La primera (indirect object) es más natural.',
    },
    {
      id: 'b2-m2-l3-ex6',
      type: 'select_correct',
      concept: 'impersonal infinitive passive',
      difficulty: 4,
      prompt: 'Elegí la forma correcta para "Se cree que es un genio":',
      correctAnswer: 'He is thought to be a genius.',
      options: [
        'He is thought to be a genius.',
        'He is thought a genius.',
        'It is thought that he is a genius.',
      ],
      explanation: '"He is thought to be a genius" es la forma más compacta del infinitivo pasivo impersonal. "To be" es obligatorio después de "thought".',
    },
    {
      id: 'b2-m2-l3-ex7',
      type: 'reorder',
      concept: 'passive modals word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Esta contraseña debe ser cambiada regularmente.',
      words: ['This', 'password', 'should', 'be', 'changed', 'regularly.'],
      correctAnswer: 'This password should be changed regularly.',
      explanation: 'Orden: sujeto + modal (should) + be + participio (changed) + resto.',
    },
    {
      id: 'b2-m2-l3-ex8',
      type: 'error_correction',
      concept: 'passive modals or double objects error',
      difficulty: 4,
      prompt: 'Encuentra el error: "He is believed being a good teacher."',
      correctAnswer: 'He is believed to be a good teacher.',
      acceptedAnswers: [
        'He is believed to be a good teacher',
        'He is believed to be a good teacher.',
      ],
      acceptApproximate: true,
      explanation: 'Infinitivo pasivo: "is believed to be", no "is believed being". Necesita "to be".',
    },
    {
      id: 'b2-m2-l3-ex9',
      type: 'true_false',
      concept: 'double object passive equivalence',
      difficulty: 3,
      prompt: '"She was given a prize" y "A prize was given to her" significan exactamente lo mismo.',
      correctAnswer: 'true',
      explanation: 'Correcto. Son dos formas de expresar el mismo contenido con double objects. La primera es más natural.',
    },
    {
      id: 'b2-m2-l3-ex10',
      type: 'listening',
      concept: 'passive modals and double objects listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un artículo de noticias sobre un premio importante que fue otorgado. Se usan pasivas con modales e impersonal infinitives.',
      listening: {
        audioText:
          'The Science Award is one of the most prestigious prizes in the country. This year, Dr. Sarah Johnson was awarded the medal for her groundbreaking research. It is believed that her work will revolutionize the field. The award must be officially presented next month at the ceremony. Several international researchers are said to have supported her nomination. She should be given full credit for her discoveries.',
        questions: [
          {
            id: 'b2-m2-l3-ex10-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Who received the Science Award this year?',
            correctAnswer: 'Dr. Sarah Johnson',
            options: ['Dr. Sarah Johnson', 'An international researcher', 'The ceremony organizer'],
            explanation: '"Dr. Sarah Johnson was awarded the medal."',
          },
          {
            id: 'b2-m2-l3-ex10-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The award has already been officially presented.',
            correctAnswer: 'false',
            explanation: '"The award must be officially presented next month" — todavía no ocurrió.',
          },
          {
            id: 'b2-m2-l3-ex10-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is it believed that her work will do?',
            correctAnswer: 'Revolutionize the field',
            options: ['Revolutionize the field', 'Be presented at the ceremony', 'Receive international support'],
            explanation: '"It is believed that her work will revolutionize the field."',
          },
        ],
      },
    },
    {
      id: 'b2-m2-l3-ex11',
      type: 'writing',
      concept: 'passive modals and double objects writing',
      difficulty: 4,
      prompt: 'Escribí un artículo breve (150 palabras) sobre un premio o reconocimiento importante. Usá al menos 3 estructuras distintas: pasiva con modal, double object passive, e infinitivo pasivo impersonal.',
      promptTranslation: 'Write a brief article about an award using passive modals and impersonal infinitives.',
      correctAnswer: '',
      explanation: 'Un buen artículo integra pasivas con modales, double objects, e impersonal infinitives de forma natural y coherente.',
      taskType: 'article',
      targetReader: 'readers of a newspaper or magazine',
      register: 'formal',
      contentPoints: [
        'Al menos 3 estructuras distintas: pasiva con modal, double object, infinitivo pasivo impersonal',
        'Descripción clara del premio y el receptor',
        'Contexto e importancia del reconocimiento',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m2-l3-ex12',
      type: 'speaking',
      concept: 'passive modals pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'She is believed to be one of the best researchers in her field.',
      explanation: 'Practicá la pronunciación del infinitivo pasivo impersonal y la entonación natural.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m2-l3-mt1',
      type: 'fill_blank',
      concept: 'passive with modals',
      difficulty: 3,
      prompt: 'Completa: "The new regulations ___ introduced next month."',
      promptTranslation: 'Las nuevas regulaciones deben ser introducidas el próximo mes.',
      correctAnswer: 'must be',
      explanation: 'Pasiva con modal must: must be + participio.',
    },
    {
      id: 'b2-m2-l3-mt2',
      type: 'multiple_choice',
      concept: 'double object passive',
      difficulty: 3,
      prompt: 'Completa: "He was ___ a scholarship by the university."',
      promptTranslation: 'Le fue otorgada una beca por la universidad.',
      correctAnswer: 'given',
      options: ['given', 'gave', 'was given'],
      explanation: 'Double object passive: He (sujeto) + was + given (participio) + a scholarship (objeto directo).',
    },
    {
      id: 'b2-m2-l3-mt3',
      type: 'error_correction',
      concept: 'impersonal infinitive passive',
      difficulty: 4,
      prompt: 'Corrige: "She is said being a brilliant lawyer."',
      correctAnswer: 'She is said to be a brilliant lawyer.',
      acceptedAnswers: [
        'She is said to be a brilliant lawyer',
        'She is said to be a brilliant lawyer.',
      ],
      acceptApproximate: true,
      explanation: 'Infinitivo pasivo: "is said to be", no "is said being".',
    },
    {
      id: 'b2-m2-l3-mt4',
      type: 'true_false',
      concept: 'passive modal perfect',
      difficulty: 3,
      prompt: '"The letter must have been sent by now" significa que estamos seguros de que ya fue enviada.',
      correctAnswer: 'true',
      explanation: 'Correcto. Modal perfect passive expresa deducción sobre algo pasado en forma pasiva.',
    },
  ],
  reviewItems: ['b1-m4-l1', 'b2-m1-l2', 'b2-m2-l1', 'b2-m2-l2'],
  prerequisites: ['b2-m2-l2'],
}
