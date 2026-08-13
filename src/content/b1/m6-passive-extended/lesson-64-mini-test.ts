import type { Lesson } from '../../types'

export const lesson64MiniTest: Lesson = {
  id: 'b1-m6-l4',
  moduleId: 'm6-passive-extended',
  order: 3,
  title: 'Mini-test: Passive Voice (extended)',
  objective: 'Repasar la pasiva negativa, futura, con modales y con get, transformar oraciones activas a pasivas y leer un texto de noticias.',
  explanation_es: `Este mini-test repasa el módulo completo de la voz pasiva extendida.

RECUERDA LAS CLAVES:

1. PASIVA NEGATIVA (presente y pasado):
   - is/are/was/were + not + participio
   - English is not spoken in that country.
   - The package wasn't delivered yesterday.

2. PASIVA EN FUTURO:
   - will be + participio
   - The new museum will be opened next month.
   - Diferencia: will be opened (verbo) vs will be open (adjetivo de estado).

3. PASIVA CON MODALES:
   - modal + be + participio
   - This must be finished today. / The room can be cleaned later.

4. PASIVA CON GET (informal):
   - get + participio
   - I got fired last week. / She got married in June.

CÓMO TRANSFORMAR ACTIVA → PASIVA:
- Activa: People speak English. → Pasiva: English is spoken.
- Activa: They will announce the results. → Pasiva: The results will be announced.
- Regla: el objeto de la activa se convierte en el sujeto de la pasiva; el verbo pasa a "to be + participio".

Errores a evitar:
   - ❌ was not deliver → ✅ was not delivered
   - ❌ will be open (con agente) → ✅ will be opened
   - ❌ must be finish → ✅ must be finished
   - ❌ got fire → ✅ got fired`,
  examples: [
    { english: 'English is not spoken in that country.', spanish: 'El inglés no se habla en ese país.', note: 'Pasiva negativa presente.' },
    { english: 'The package wasn\'t delivered yesterday.', spanish: 'El paquete no fue entregado ayer.', note: 'Pasiva negativa pasada.' },
    { english: 'The new museum will be opened next month.', spanish: 'El nuevo museo se abrirá el próximo mes.', note: 'Pasiva futura.' },
    { english: 'This must be finished today.', spanish: 'Esto debe terminarse hoy.', note: 'Pasiva con modal.' },
    { english: 'I got fired last week.', spanish: 'Me despidieron la semana pasada.', note: 'Pasiva con get (informal).' },
  ],
  rule: `Repaso:
- Pasiva negativa: is/are/was/were + not + participio.
- Pasiva futura: will be + participio (will be opened).
- Pasiva con modales: modal + be + participio (must be finished).
- Pasiva con get (informal): get + participio (got fired, got married).
- Transformación activa → pasiva: objeto → sujeto; verbo → to be + participio.

Nunca: "was not deliver", "will be open" (con agente), "must be finish", "got fire".`,
  commonMistakes: [
    { wrong: '❌ The package was not deliver yesterday.', correct: '✅ The package was not delivered yesterday.', explanation: 'En la pasiva, después de "was" va el participio: delivered.' },
    { wrong: '❌ The museum will be open by the mayor.', correct: '✅ The museum will be opened by the mayor.', explanation: 'Con agente usamos la pasiva con verbo: opened. "Open" sin -ed es el adjetivo de estado.' },
    { wrong: '❌ This must be finish today.', correct: '✅ This must be finished today.', explanation: 'Después de "must be" va el participio: finished.' },
    { wrong: '❌ I got fire last week.', correct: '✅ I got fired last week.', explanation: 'Después de "got" va el participio: fired.' },
  ],
  vocabulary: [
    { word: 'announcement', translation_es: 'anuncio, aviso', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'This is an important announcement.', exampleTranslation: 'Este es un anuncio importante.' },
    { word: 'city centre', translation_es: 'centro de la ciudad', level: 'B1', category: 'places', partOfSpeech: 'noun', example: 'The new city centre will be opened.', exampleTranslation: 'El nuevo centro de la ciudad se abrirá.' },
    { word: 'renovated', translation_es: 'renovado (participio de renovate)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'The old market will be renovated.', exampleTranslation: 'El mercado viejo será renovado.' },
    { word: 'booked', translation_es: 'reservado (participio de book)', level: 'B1', category: 'travel', partOfSpeech: 'verb (participle)', example: 'Tickets must be booked online.', exampleTranslation: 'Las entradas deben reservarse en línea.' },
    { word: 'provided', translation_es: 'proporcionado, facilitado (participio de provide)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'Parking spaces will be provided.', exampleTranslation: 'Se proporcionarán plazas de aparcamiento.' },
    { word: 'celebrated', translation_es: 'celebrado (participio de celebrate)', level: 'B1', category: 'events', partOfSpeech: 'verb (participle)', example: 'A celebration will be held.', exampleTranslation: 'Se celebrará una fiesta.' },
  ],
  grammarPoints: [
    {
      id: 'gp-passive-extended-review',
      level: 'B1',
      name: 'Passive voice extended (review)',
      explanation_es: 'Repaso de la pasiva negativa (to be + not + participio), futura (will be + participio), con modales (modal + be + participio) y con get (get + participio, informal).',
      formula: 'is/are/was/were + not + participle | will + be + participle | modal + be + participle | get + participle',
      examples: ['English is not spoken in that country.', 'The new museum will be opened next month.', 'This must be finished today.', 'I got fired last week.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m6-l4-ex1',
      type: 'multiple_choice',
      concept: 'passive review',
      difficulty: 1,
      prompt: 'Completa (pasiva negativa): "English is not ___ in that country."',
      promptTranslation: 'El inglés no se habla en ese país.',
      correctAnswer: 'spoken',
      options: ['spoken', 'speak', 'speaking'],
      explanation: 'Pasiva negativa = is not + participio (spoken).',
    },
    {
      id: 'b1-m6-l4-ex2',
      type: 'multiple_choice',
      concept: 'passive review',
      difficulty: 2,
      prompt: 'Completa (pasiva futura): "The results will be ___ soon."',
      promptTranslation: 'Los resultados se anunciarán pronto.',
      correctAnswer: 'announced',
      options: ['announced', 'announce', 'announcing'],
      explanation: 'Pasiva futura = will be + participio (announced).',
    },
    {
      id: 'b1-m6-l4-ex3',
      type: 'fill_blank',
      concept: 'passive review',
      difficulty: 2,
      prompt: 'Completa con el participio: "This must be ___ (finish) today."',
      promptTranslation: 'Esto debe terminarse hoy.',
      correctAnswer: 'finished',
      acceptedAnswers: ['finished'],
      explanation: 'Pasiva con modal = must be + participio (finished).',
    },
    {
      id: 'b1-m6-l4-ex4',
      type: 'fill_blank',
      concept: 'get passive review',
      difficulty: 2,
      prompt: 'Completa con el participio: "I got ___ (fire) last week."',
      promptTranslation: 'Me despidieron la semana pasada.',
      correctAnswer: 'fired',
      acceptedAnswers: ['fired'],
      explanation: 'Pasiva con get = got + participio (fired).',
    },
    {
      id: 'b1-m6-l4-ex5',
      type: 'select_correct',
      concept: 'opened vs open review',
      difficulty: 3,
      prompt: 'Selecciona la frase PASIVA correcta (con agente):',
      promptTranslation: 'El museo será abierto por el alcalde.',
      correctAnswer: 'The museum will be opened by the mayor.',
      options: [
        'The museum will be opened by the mayor.',
        'The museum will be open by the mayor.',
        'The museum will opened by the mayor.',
        'The museum will be opening by the mayor.',
      ],
      explanation: 'Pasiva futura con agente = will be + participio (opened) + by. "Will be open" es adjetivo de estado, no pasiva con agente.',
    },
    {
      id: 'b1-m6-l4-ex6',
      type: 'error_correction',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'Corrige el error: "The package was not deliver yesterday."',
      correctAnswer: 'The package was not delivered yesterday.',
      acceptedAnswers: [
        'The package was not delivered yesterday',
        'The package was not delivered yesterday.',
        'The package wasn\'t delivered yesterday',
        'The package wasn\'t delivered yesterday.',
      ],
      acceptApproximate: true,
      explanation: 'En la pasiva, después de "was" va el participio: delivered, no "deliver".',
    },
    {
      id: 'b1-m6-l4-ex7',
      type: 'error_correction',
      concept: 'passive review',
      difficulty: 4,
      prompt: 'Corrige el error: "This must be finish today."',
      correctAnswer: 'This must be finished today.',
      acceptedAnswers: ['This must be finished today', 'This must be finished today.', 'this must be finished today'],
      acceptApproximate: true,
      explanation: 'Después de "must be" va el participio: finished, no "finish".',
    },
    {
      id: 'b1-m6-l4-ex8',
      type: 'translate',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'Traduce: "El nuevo museo se abrirá el próximo mes."',
      correctAnswer: 'The new museum will be opened next month.',
      acceptedAnswers: [
        'The new museum will be opened next month',
        'The new museum will be opened next month.',
        'the new museum will be opened next month',
      ],
      acceptApproximate: true,
      explanation: '"Se abrirá" (pasiva futura) = will be opened. "el próximo mes" = next month.',
    },
    {
      id: 'b1-m6-l4-ex9',
      type: 'sentence_building',
      concept: 'passive transformation',
      difficulty: 4,
      prompt: 'Transforma la frase activa a pasiva con estas palabras: "They will announce the results."',
      promptTranslation: 'Ellos anunciarán los resultados. → Los resultados serán anunciados.',
      words: ['The', 'results', 'will', 'be', 'announced.'],
      correctAnswer: 'The results will be announced.',
      explanation: 'Activa → pasiva: el objeto (the results) pasa a sujeto, y el verbo pasa a will be + participio (announced).',
    },
    {
      id: 'b1-m6-l4-ex10',
      type: 'reorder',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'Ordena la frase (pasiva con modal):',
      promptTranslation: 'La habitación puede limpiarse más tarde.',
      words: ['The', 'room', 'can', 'be', 'cleaned', 'later.'],
      correctAnswer: 'The room can be cleaned later.',
      explanation: 'Estructura: sujeto + modal (can) + be + participio (cleaned) + adverbio.',
    },
    {
      id: 'b1-m6-l4-ex11',
      type: 'match',
      concept: 'passive review match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su estructura pasiva:',
      pairs: [
        { left: 'English is not spoken there.', right: 'Pasiva negativa (presente)' },
        { left: 'The package wasn\'t delivered.', right: 'Pasiva negativa (pasado)' },
        { left: 'The museum will be opened next month.', right: 'Pasiva futura' },
        { left: 'This must be finished today.', right: 'Pasiva con modal' },
        { left: 'I got fired last week.', right: 'Pasiva con get (informal)' },
      ],
      correctAnswer: 'English is not spoken there.=Pasiva negativa (presente), The package wasn\'t delivered.=Pasiva negativa (pasado), The museum will be opened next month.=Pasiva futura, This must be finished today.=Pasiva con modal, I got fired last week.=Pasiva con get (informal)',
      explanation: 'Cada forma de pasiva usa to be + participio; la diferencia está en el tiempo (is/was), el futuro (will be), los modales (must be) y get (informal).',
    },
    {
      id: 'b1-m6-l4-ex12',
      type: 'reading',
      concept: 'passive reading',
      difficulty: 4,
      prompt: 'Lee el anuncio de noticias y responde las preguntas:',
      reading: {
        text: 'NEW CITY CENTRE: The new city centre will be opened next spring. It was designed by a famous architect, and the first shops will be opened in May. Tickets must be booked online before the opening weekend. The old market will not be demolished; it will be renovated and many new spaces will be provided for local artists. Taxis can be taken from the main entrance, and parking spaces will be provided next to the metro. A big celebration will be held on opening day. Don\'t worry about transport: everything was planned carefully by the city council.',
        translation: 'NUEVO CENTRO DE LA CIUDAD: El nuevo centro de la ciudad se abrirá la próxima primavera. Fue diseñado por un arquitecto famoso y las primeras tiendas se abrirán en mayo. Las entradas deben reservarse en línea antes del fin de semana de inauguración. El mercado viejo no será demolido; será renovado y se proporcionarán muchos espacios nuevos para artistas locales. Se pueden tomar taxis desde la entrada principal y se proporcionarán plazas de aparcamiento junto al metro. Se celebrará una gran fiesta el día de la inauguración. No se preocupe por el transporte: todo fue planificado cuidadosamente por el ayuntamiento.',
        questions: [
          {
            id: 'b1-m6-l4-ex12-q1',
            type: 'multiple_choice',
            concept: 'passive reading',
            difficulty: 4,
            prompt: '¿Cuándo se abrirá el nuevo centro de la ciudad?',
            correctAnswer: 'La próxima primavera.',
            options: ['La próxima primavera.', 'El próximo verano.', 'En mayo.'],
            explanation: 'El texto dice: "The new city centre will be opened next spring." (pasiva futura.)',
          },
          {
            id: 'b1-m6-l4-ex12-q2',
            type: 'multiple_choice',
            concept: 'passive reading',
            difficulty: 4,
            prompt: '¿Qué debe hacerse con las entradas?',
            correctAnswer: 'Deben reservarse en línea.',
            options: ['Deben reservarse en línea.', 'Deben comprarse en el museo.', 'No hacen falta entradas.'],
            explanation: 'El texto dice: "Tickets must be booked online." (pasiva con modal: must be booked.)',
          },
          {
            id: 'b1-m6-l4-ex12-q3',
            type: 'multiple_choice',
            concept: 'passive reading',
            difficulty: 4,
            prompt: '¿Qué pasará con el mercado viejo?',
            correctAnswer: 'No será demolido; será renovado.',
            options: ['No será demolido; será renovado.', 'Será demolido.', 'Se convertirá en tiendas.'],
            explanation: 'El texto dice: "The old market will not be demolished; it will be renovated." (pasiva futura negativa.)',
          },
          {
            id: 'b1-m6-l4-ex12-q4',
            type: 'multiple_choice',
            concept: 'passive reading',
            difficulty: 4,
            prompt: '¿Qué se proporcionará junto al metro?',
            correctAnswer: 'Plazas de aparcamiento.',
            options: ['Plazas de aparcamiento.', 'Tiendas.', 'Restaurantes.'],
            explanation: 'El texto dice: "parking spaces will be provided next to the metro." (pasiva futura.)',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'El texto usa pasiva futura (will be opened, will be provided), pasiva negativa (will not be demolished), pasiva con modal (must be booked, can be taken) y pasiva pasada (was designed, was planned).',
    },
    {
      id: 'b1-m6-l4-ex13',
      type: 'true_false',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'En la transformación activa → pasiva, el objeto de la activa se convierte en el sujeto de la pasiva.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. Ejemplo: They announce the results → The results are announced. El objeto (results) pasa a ser sujeto.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m6-l4-mt1',
      type: 'multiple_choice',
      concept: 'passive review',
      difficulty: 1,
      prompt: 'Completa (pasiva futura): "The exam will be ___ on Friday."',
      promptTranslation: 'El examen se realizará el viernes.',
      correctAnswer: 'held',
      options: ['held', 'hold', 'holding'],
      explanation: 'Pasiva futura = will be + participio (held).',
    },
    {
      id: 'b1-m6-l4-mt2',
      type: 'fill_blank',
      concept: 'passive review',
      difficulty: 2,
      prompt: 'Completa con el participio: "English is not ___ (speak) in that country."',
      promptTranslation: 'El inglés no se habla en ese país.',
      correctAnswer: 'spoken',
      acceptedAnswers: ['spoken'],
      explanation: 'El participio de "speak" es "spoken": is not spoken.',
    },
    {
      id: 'b1-m6-l4-mt3',
      type: 'error_correction',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'Corrige el error: "The room can be clean later."',
      correctAnswer: 'The room can be cleaned later.',
      acceptedAnswers: ['The room can be cleaned later', 'The room can be cleaned later.', 'the room can be cleaned later'],
      acceptApproximate: true,
      explanation: 'Después de "can be" va el participio: cleaned, no "clean".',
    },
    {
      id: 'b1-m6-l4-mt4',
      type: 'translate',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'Traduce: "Esto debe terminarse hoy."',
      correctAnswer: 'This must be finished today.',
      acceptedAnswers: ['This must be finished today', 'This must be finished today.', 'this must be finished today'],
      acceptApproximate: true,
      explanation: '"Debe terminarse" (pasiva con modal) = must be finished.',
    },
    {
      id: 'b1-m6-l4-mt5',
      type: 'sentence_building',
      concept: 'passive transformation',
      difficulty: 4,
      prompt: 'Transforma a pasiva con estas palabras: "They opened the museum in 1990."',
      promptTranslation: 'Ellos abrieron el museo en 1990. → El museo fue abierto en 1990.',
      words: ['The', 'museum', 'was', 'opened', 'in', '1990.'],
      correctAnswer: 'The museum was opened in 1990.',
      explanation: 'Activa → pasiva: el objeto (the museum) pasa a sujeto; el verbo pasa a was + participio (opened).',
    },
  ],
  reviewItems: ['b1-m6-l3'],
  prerequisites: ['b1-m6-l3'],
}
