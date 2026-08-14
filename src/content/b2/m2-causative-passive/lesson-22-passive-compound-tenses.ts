import type { Lesson } from '../../types'

export const lesson22PassiveCompoundTenses: Lesson = {
  id: 'b2-m2-l2',
  moduleId: 'm2-causative-passive',
  order: 1,
  title: 'Passive in Compound Tenses: continuous y perfect',
  objective: 'Usar la pasiva en tiempos compuestos: present continuous passive ("is being done"), past continuous passive ("was being done"), present perfect passive ("has been done") y past perfect passive ("had been done").',
  explanation_es: `Ya conocés la pasiva simple (is built, was built). Ahora vamos a usar la pasiva en tiempos compuestos, combinando los auxiliares de "present/past continuous" y "present/past perfect" con la pasiva.

Hay CUATRO estructuras principales:

1. PRESENT CONTINUOUS PASSIVE: is/are being + participio
   Significado: algo está ocurriendo AHORA en forma pasiva.
   Ejemplo: "The house is being built" = La casa está siendo construida (proceso en curso).

2. PAST CONTINUOUS PASSIVE: was/were being + participio
   Significado: algo estaba ocurriendo en un momento del pasado (proceso interrumpido).
   Ejemplo: "The car was being repaired when I arrived" = El coche estaba siendo reparado cuando llegué.

3. PRESENT PERFECT PASSIVE: has/have been + participio
   Significado: algo acaba de terminarse o tiene relevancia hasta ahora (resultado actual).
   Ejemplo: "The work has been finished" = El trabajo ha sido terminado (ya está listo).

4. PAST PERFECT PASSIVE: had been + participio
   Significado: una acción pasiva anterior a otra acción pasada.
   Ejemplo: "The letter had been sent before he arrived" = La carta había sido enviada antes de que llegara.

Puntos importantes:

1. Con continuous passive (is/are being, was/were being): el verbo SIEMPRE va en participio pasado. Nunca cambias "being" por nada.

2. Con perfect passive (has/have been, had been): el participio pasado tampoco cambia según el sujeto. "It has been built", "they have been built" — siempre "built", no "builds" ni "building".

3. Diferencia clave: continuous habla de un proceso EN CURSO; perfect habla de un resultado ya terminado. "The house is being built" (proceso) vs "The house has been built" (resultado).

4. Con past perfect passive, necesitas contexto de DOS acciones pasadas: una más antigua (con past perfect) y otra más reciente (con past simple).

5. Los tiempos de "be" cambian según el contexto (is/are/was/were/has/have/had), pero el participio "being" (para continuous) y "been" (para perfect) NO cambian.

Comparación con tiempos simples que ya conocés:
- Pasiva simple presente: "The car is repaired" (estado).
- Pasiva continuous presente: "The car is being repaired" (proceso en curso).
- Pasiva perfecta presente: "The car has been repaired" (resultado con relevancia actual).`,
  examples: [
    { english: 'The house is being built at the moment.', spanish: 'La casa está siendo construida en este momento.', note: 'Present continuous passive: proceso en curso ahora mismo.' },
    { english: 'When I arrived, the car was being repaired.', spanish: 'Cuando llegué, el coche estaba siendo reparado.', note: 'Past continuous passive: proceso interrumpido por otra acción.' },
    { english: 'The work has been finished, so we can leave.', spanish: 'El trabajo ha sido terminado, así que podemos irnos.', note: 'Present perfect passive: resultado actual con relevancia presente.' },
    { english: 'The letter had been sent before he got home.', spanish: 'La carta había sido enviada antes de que llegara a casa.', note: 'Past perfect passive: dos acciones pasadas, una anterior a la otra.' },
    { english: 'Several reports are being prepared for the meeting.', spanish: 'Varios informes están siendo preparados para la reunión.', note: 'Present continuous passive: proceso plural.' },
    { english: 'By the time we arrived, everything had been arranged.', spanish: 'Cuando llegamos, todo había sido arreglado.', note: 'Past perfect passive con "by the time" (para entonces).' },
  ],
  rule: `Fórmulas:

1. PRESENT CONTINUOUS PASSIVE
   Forma: am/is/are being + past participle
   Ejemplos: "The house is being built." / "They are being interviewed."

2. PAST CONTINUOUS PASSIVE
   Forma: was/were being + past participle
   Ejemplos: "The car was being repaired." / "We were being watched."

3. PRESENT PERFECT PASSIVE
   Forma: have/has been + past participle
   Ejemplos: "The work has been finished." / "The files have been sorted."

4. PAST PERFECT PASSIVE
   Forma: had been + past participle
   Ejemplos: "The letter had been sent." / "The house had been painted."

Reglas:
1. El participio pasado SIEMPRE permanece igual sin importar el sujeto o número.
2. Con continuous: "being" es constante; cambia el verbo be antes (is/are/was/were).
3. Con perfect: "been" es constante; cambia el auxiliar have/has/had.
4. Negación: "is not being done" / "has not been done" / "had not been sent".
5. Preguntas: "Is it being repaired?" / "Has it been finished?" / "Had it been sent?"`,
  commonMistakes: [
    { wrong: '❌ The house is being builded.', correct: '✅ The house is being built.', explanation: '"Being" + participio pasado (built), no "builded". Build → built.' },
    { wrong: '❌ They are being watch.', correct: '✅ They are being watched.', explanation: 'Participio pasado: watch → watched. No omitas la "d" ni uses "watch" sin flexión.' },
    { wrong: '❌ The work have been finished.', correct: '✅ The work has been finished.', explanation: '"Work" es singular, así que es "has been", no "have been".' },
    { wrong: '❌ She was being fixing the car.', correct: '✅ She was fixing the car. / The car was being fixed.', explanation: 'No confundas active past continuous (was fixing) con passive (was being fixed). Elige uno según el significado.' },
    { wrong: '❌ The letter had sent before he arrived.', correct: '✅ The letter had been sent before he arrived.', explanation: 'Past perfect passive necesita "had been", no solo "had".' },
  ],
  vocabulary: [
    { word: 'to arrange', translation_es: 'arreglar, organizar', level: 'B2', category: 'passive', partOfSpeech: 'verb', example: 'Everything has been arranged.', exampleTranslation: 'Todo ha sido arreglado.' },
    { word: 'to interview', translation_es: 'entrevistar', level: 'B2', category: 'passive', partOfSpeech: 'verb', example: 'Candidates are being interviewed.', exampleTranslation: 'Los candidatos están siendo entrevistados.' },
    { word: 'to sort', translation_es: 'clasificar, ordenar', level: 'B2', category: 'passive', partOfSpeech: 'verb', example: 'The files have been sorted.', exampleTranslation: 'Los archivos han sido clasificados.' },
    { word: 'process', translation_es: 'proceso', level: 'B2', category: 'passive', partOfSpeech: 'noun', example: 'The process is being monitored.', exampleTranslation: 'El proceso está siendo monitorizado.' },
    { word: 'meanwhile', translation_es: 'mientras tanto', level: 'B2', category: 'time', partOfSpeech: 'adverb', example: 'Meanwhile, the report was being prepared.', exampleTranslation: 'Mientras tanto, el informe estaba siendo preparado.' },
    { word: 'to prepare', translation_es: 'preparar', level: 'B2', category: 'passive', partOfSpeech: 'verb', example: 'The meeting has been prepared.', exampleTranslation: 'La reunión ha sido preparada.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-present-continuous-passive',
      level: 'B2',
      name: 'present continuous passive (is/are being + past participle)',
      explanation_es: 'Expresa una acción pasiva en proceso en el presente. El participio pasado no cambia.',
      formula: 'am/is/are being + past participle',
      examples: ['The house is being built.', 'They are being interviewed.', 'The report is being written.'],
    },
    {
      id: 'gp-b2-past-continuous-passive',
      level: 'B2',
      name: 'past continuous passive (was/were being + past participle)',
      explanation_es: 'Expresa una acción pasiva en proceso en el pasado, frecuentemente interrumpida por otra acción.',
      formula: 'was/were being + past participle',
      examples: ['The car was being repaired.', 'We were being watched.', 'The letter was being written.'],
    },
    {
      id: 'gp-b2-present-perfect-passive',
      level: 'B2',
      name: 'present perfect passive (has/have been + past participle)',
      explanation_es: 'Expresa una acción pasiva reciente o con relevancia hasta el presente. Enfatiza el resultado.',
      formula: 'has/have been + past participle',
      examples: ['The work has been finished.', 'The files have been sorted.', 'The house has been painted.'],
    },
    {
      id: 'gp-b2-past-perfect-passive',
      level: 'B2',
      name: 'past perfect passive (had been + past participle)',
      explanation_es: 'Expresa una acción pasiva anterior a otra en el pasado. Establece precedencia temporal.',
      formula: 'had been + past participle',
      examples: ['The letter had been sent.', 'The house had been painted.', 'Everything had been prepared.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m2-l2-ex1',
      type: 'multiple_choice',
      concept: 'present continuous passive',
      difficulty: 3,
      prompt: 'Completa: "The house ___ built at the moment."',
      promptTranslation: 'La casa está siendo construida en este momento.',
      correctAnswer: 'is being',
      options: ['is being', 'is', 'is be'],
      explanation: 'Present continuous passive: is/are being + participio. "Is being built".',
    },
    {
      id: 'b2-m2-l2-ex2',
      type: 'fill_blank',
      concept: 'past continuous passive',
      difficulty: 3,
      prompt: 'Completa: "When I arrived, the car ___."',
      promptTranslation: 'Cuando llegué, el coche estaba siendo reparado.',
      correctAnswer: 'was being repaired',
      explanation: 'Past continuous passive: was/were being + participio. "Was being repaired".',
    },
    {
      id: 'b2-m2-l2-ex3',
      type: 'multiple_choice',
      concept: 'present perfect passive',
      difficulty: 3,
      prompt: 'Completa: "The work ___ and we can leave."',
      promptTranslation: 'El trabajo ha sido terminado y podemos irnos.',
      correctAnswer: 'has been finished',
      options: ['has been finished', 'is finished', 'is being finished'],
      explanation: 'Present perfect passive: has/have been + participio. Enfatiza el resultado actual.',
    },
    {
      id: 'b2-m2-l2-ex4',
      type: 'fill_blank',
      concept: 'past perfect passive',
      difficulty: 4,
      prompt: 'Completa: "The letter ___ before he arrived."',
      promptTranslation: 'La carta había sido enviada antes de que llegara.',
      correctAnswer: 'had been sent',
      explanation: 'Past perfect passive: had been + participio. Expresa precedencia en el pasado.',
    },
    {
      id: 'b2-m2-l2-ex5',
      type: 'error_correction',
      concept: 'passive compound tenses',
      difficulty: 4,
      prompt: 'Encuentra el error: "Several reports are being prepare for the meeting."',
      correctAnswer: 'Several reports are being prepared for the meeting.',
      acceptedAnswers: [
        'Several reports are being prepared for the meeting',
        'Several reports are being prepared for the meeting.',
      ],
      acceptApproximate: true,
      explanation: 'Participio pasado: prepare → prepared. No omitas la "d".',
    },
    {
      id: 'b2-m2-l2-ex6',
      type: 'translate',
      concept: 'passive compound tenses translation',
      difficulty: 4,
      prompt: 'Traduce: "Por el momento, la reunión está siendo preparada por el coordinador."',
      correctAnswer: 'At the moment, the meeting is being prepared by the coordinator.',
      acceptedAnswers: [
        'At the moment, the meeting is being prepared by the coordinator',
        'Right now, the meeting is being prepared by the coordinator.',
        'Right now, the meeting is being prepared by the coordinator',
      ],
      acceptApproximate: true,
      explanation: '"Está siendo preparada" = is being prepared (present continuous passive). "Por el coordinador" = by the coordinator.',
    },
    {
      id: 'b2-m2-l2-ex7',
      type: 'reorder',
      concept: 'passive compound tenses word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Todo había sido arreglado antes de que llegaran.',
      words: ['Everything', 'had', 'been', 'arranged', 'before', 'they', 'arrived.'],
      correctAnswer: 'Everything had been arranged before they arrived.',
      explanation: 'Orden: sujeto + had been + participio (arranged) + resto. Past perfect passive.',
    },
    {
      id: 'b2-m2-l2-ex8',
      type: 'select_correct',
      concept: 'continuous vs perfect passive',
      difficulty: 4,
      prompt: 'Elegí la opción que expresa que el coche ESTÁ SIENDO REPARADO AHORA:',
      correctAnswer: 'The car is being repaired.',
      options: ['The car is being repaired.', 'The car has been repaired.', 'The car is repaired.'],
      explanation: '"Is being repaired" enfatiza el proceso en curso. "Has been repaired" sería resultado actual. "Is repaired" sería estado simple.',
    },
    {
      id: 'b2-m2-l2-ex9',
      type: 'true_false',
      concept: 'passive compound tenses meaning',
      difficulty: 2,
      prompt: '"The files have been sorted" significa que alguien está ordenando los archivos ahora mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. "Have been sorted" es present perfect passive (resultado actual), no un proceso en curso. Para eso usarías "are being sorted".',
    },
    {
      id: 'b2-m2-l2-ex10',
      type: 'listening',
      concept: 'passive compound tenses listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un relato sobre un evento corporativo que está siendo organizado. Se usan varias formas de pasiva compuesta.',
      listening: {
        audioText:
          'The annual conference is being organized this month. Several presentations are being prepared by different departments. Meanwhile, the venue has been selected, and the invitations have been sent. When I arrived at the office yesterday, the banners were being printed, and the program was being reviewed by the director. By the time we finished, everything had been arranged perfectly.',
        questions: [
          {
            id: 'b2-m2-l2-ex10-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is happening at the moment?',
            correctAnswer: 'The annual conference is being organized.',
            options: [
              'The annual conference is being organized.',
              'The invitations are being sent.',
              'The banners are being printed.',
            ],
            explanation: '"The annual conference is being organized this month."',
          },
          {
            id: 'b2-m2-l2-ex10-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The venue has already been selected.',
            correctAnswer: 'true',
            explanation: '"The venue has been selected" — it\'s already done.',
          },
          {
            id: 'b2-m2-l2-ex10-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What was happening when the speaker arrived yesterday?',
            correctAnswer: 'The banners were being printed and the program was being reviewed.',
            options: [
              'The banners were being printed and the program was being reviewed.',
              'The invitations were being sent.',
              'The presentations were being prepared.',
            ],
            explanation: '"When I arrived yesterday, the banners were being printed, and the program was being reviewed."',
          },
        ],
      },
    },
    {
      id: 'b2-m2-l2-ex11',
      type: 'writing',
      concept: 'passive compound tenses writing',
      difficulty: 4,
      prompt: 'Escribí un email a tu jefe describiendo el progreso de un proyecto. Usá al menos 4 estructuras distintas de pasiva compuesta (present continuous, past continuous, present perfect, past perfect).',
      promptTranslation: 'Write an email describing project progress using compound passive tenses.',
      correctAnswer: '',
      explanation: 'Un buen email describe qué está siendo hecho ahora, qué fue hecho recientemente, y qué se completó antes, usando varias formas de pasiva compuesta.',
      taskType: 'email',
      targetReader: 'your manager',
      register: 'formal',
      contentPoints: [
        'Al menos 4 estructuras de pasiva compuesta distintas',
        'Descripción clara del progreso actual y pasado del proyecto',
        'Tonalidad profesional',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m2-l2-ex12',
      type: 'speaking',
      concept: 'passive compound tenses pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'The conference is being organized by the communications team.',
      explanation: 'Practicá la pronunciación de la pasiva continua y la entonación natural.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m2-l2-mt1',
      type: 'fill_blank',
      concept: 'present continuous passive',
      difficulty: 3,
      prompt: 'Completa: "New regulations ___ introduced by the government."',
      promptTranslation: 'Nuevas regulaciones están siendo introducidas por el gobierno.',
      correctAnswer: 'are being',
      explanation: 'Present continuous passive plural: are being + participio.',
    },
    {
      id: 'b2-m2-l2-mt2',
      type: 'multiple_choice',
      concept: 'past perfect passive',
      difficulty: 4,
      prompt: 'Completa: "By the time we arrived, the report ___."',
      promptTranslation: 'Cuando llegamos, el informe había sido completado.',
      correctAnswer: 'had been completed',
      options: ['had been completed', 'was completed', 'has been completed'],
      explanation: '"Had been completed" expresa que la acción pasiva ocurrió antes de otra acción pasada.',
    },
    {
      id: 'b2-m2-l2-mt3',
      type: 'error_correction',
      concept: 'passive compound tenses error',
      difficulty: 4,
      prompt: 'Corrige: "The documents has been sorted by the staff."',
      correctAnswer: 'The documents have been sorted by the staff.',
      acceptedAnswers: [
        'The documents have been sorted by the staff',
        'The documents have been sorted by the staff.',
      ],
      acceptApproximate: true,
      explanation: '"Documents" es plural, así que "have been", no "has been".',
    },
  ],
  reviewItems: ['b1-m4-l1', 'b2-m1-l2', 'b2-m2-l1'],
  prerequisites: ['b2-m2-l1'],
}
