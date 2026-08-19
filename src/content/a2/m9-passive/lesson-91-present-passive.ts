import type { Lesson } from '../../types'

export const lesson91PresentPassive: Lesson = {
  id: 'a2-m9-l1',
  moduleId: 'm9-passive',
  order: 0,
  title: 'La voz pasiva en presente simple',
  objective: 'Formar la voz pasiva en presente simple con is/are + participio.',
  explanation_es: `En las frases normales (activas), la persona o cosa que HACE la acción va al principio:
- "People speak English in many countries." (La gente habla inglés...)

En la voz pasiva, el FOCO está en la acción o en el objeto, no en quién la hace:
- "English is spoken in many countries." = El inglés se habla en muchos países.

Estructura (present simple passive):

> sujeto + is/are + participio pasado (-ed / forma irregular)

- "English is spoken in many countries." → is + spoken (participio de speak).
- "These cars are made in Germany." = Estos coches se fabrican en Alemania. → are + made.
- "The book is written in Spanish." = El libro está escrito en español. → is + written.

¿Cuándo usamos la pasiva? Cuando no importa (o no sabemos) quién hace la acción, o cuando lo importante es el objeto o la acción.

En español, muchas veces decimos "se" + verbo: "se habla", "se fabrica", "se escribe". En inglés usamos is/are + participio.

El participio:
- Verbos regulares: -ed (cooked, painted, designed).
- Verbos irregulares: su propia forma (speak → spoken, write → written, make → made).

OJO con el orden: la pasiva es is/are + participio. No digas "is spoke"; di "is spoken".`,
  examples: [
    { english: 'English is spoken in many countries.', spanish: 'El inglés se habla en muchos países.', note: 'is + spoken.' },
    { english: 'These cars are made in Germany.', spanish: 'Estos coches se fabrican en Alemania.', note: 'are + made (plural).' },
    { english: 'The book is written in Spanish.', spanish: 'El libro está escrito en español.', note: 'is + written.' },
    { english: 'Coffee is grown in Colombia.', spanish: 'El café se cultiva en Colombia.', note: 'is + grown.' },
    { english: 'These photos are taken with a phone.', spanish: 'Estas fotos se toman con un teléfono.', note: 'are + taken.' },
    { english: 'Spanish is spoken in many countries.', spanish: 'El español se habla en muchos países.', note: 'is + spoken (singular).' },
  ],
  rule: `Regla de la pasiva en presente:

- sujeto + is/are + participio pasado.
- is → singular. are → plural.
- Participio: -ed (regulares) o forma irregular (speak → spoken, make → made, write → written).
- Se usa cuando el foco está en la acción, no en quién la hace.`,
  formation: {
    title: 'Cómo se forma la voz pasiva en presente',
    intro: 'La pasiva pone el foco en la acción o en el objeto, no en quién la hace. Se forma con is/are + participio pasado.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + is / are + participio pasado + complemento',
        examples: [
          { english: 'English is spoken in many countries.', spanish: 'El inglés se habla en muchos países.' },
          { english: 'These cars are made in Germany.', spanish: 'Estos coches se fabrican en Alemania.' },
          { english: 'The book is written in Spanish.', spanish: 'El libro está escrito en español.' },
          { english: 'Coffee is grown in Colombia.', spanish: 'El café se cultiva en Colombia.' },
        ],
        note: 'is → sujeto singular. are → sujeto plural. El orden es is/are + participio: is spoken (no "is spoke" ni "spoken is").',
      },
    ],
    notes: [
      'Participio de verbos regulares: verbo + -ed (cooked, painted, designed).',
      'Participios irregulares: forma propia (speak → spoken, write → written, make → made, take → taken, grow → grown).',
      'En español muchas veces equivale a "se" + verbo: se habla, se fabrica, se escribe.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ English is spoke in many countries.', correct: '✅ English is spoken in many countries.', explanation: 'En la pasiva usamos el participio "spoken", no el pasado simple "spoke".' },
    { wrong: '❌ English are spoken in many countries.', correct: '✅ English is spoken in many countries.', explanation: '"English" es singular → usamos "is", no "are".' },
    { wrong: '❌ English spoken is in many countries.', correct: '✅ English is spoken in many countries.', explanation: 'El orden es is/are + participio: "is spoken", no "spoken is".' },
  ],
  vocabulary: [
    { word: 'speak', translation_es: 'hablar', level: 'A2', category: 'communication', partOfSpeech: 'verb', example: 'English is spoken in many countries.', exampleTranslation: 'El inglés se habla en muchos países.' },
    { word: 'spoken', translation_es: 'hablado (participio)', level: 'A2', category: 'grammar', partOfSpeech: 'verb', example: 'English is spoken around the world.', exampleTranslation: 'El inglés se habla en todo el mundo.' },
    { word: 'made', translation_es: 'hecho/fabricado (participio)', level: 'A2', category: 'grammar', partOfSpeech: 'verb', example: 'These cars are made in Germany.', exampleTranslation: 'Estos coches se fabrican en Alemania.' },
    { word: 'grow', translation_es: 'cultivar', level: 'A2', category: 'agriculture', partOfSpeech: 'verb', example: 'Coffee is grown in Colombia.', exampleTranslation: 'El café se cultiva en Colombia.' },
    { word: 'country', translation_es: 'país', level: 'A2', category: 'places', partOfSpeech: 'noun', example: 'English is spoken in many countries.', exampleTranslation: 'El inglés se habla en muchos países.' },
  ],
  grammarPoints: [
    {
      id: 'gp-present-passive',
      level: 'A2',
      name: 'Present simple passive',
      explanation_es: 'El foco está en la acción/objeto. Se forma con is/are + participio.',
      formula: 'subject + is/are + past participle',
      examples: ['English is spoken in many countries.', 'These cars are made in Germany.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m9-l1-ex1',
      type: 'multiple_choice',
      concept: 'present simple passive',
      difficulty: 1,
      prompt: 'Completa: "English ___ spoken in many countries."',
      promptTranslation: 'El inglés se habla en muchos países.',
      correctAnswer: 'is',
      options: ['is', 'are', 'am'],
      explanation: '"English" es singular → is. → English is spoken...',
    },
    {
      id: 'a2-m9-l1-ex2',
      type: 'fill_blank',
      concept: 'present simple passive',
      difficulty: 1,
      prompt: 'Completa: "These cars ___ made in Germany."',
      promptTranslation: 'Estos coches se fabrican en Alemania.',
      correctAnswer: 'are',
      acceptedAnswers: ['are', 'Are'],
      explanation: '"These cars" es plural → are. → These cars are made...',
    },
    {
      id: 'a2-m9-l1-ex3',
      type: 'multiple_choice',
      concept: 'present simple passive',
      difficulty: 2,
      prompt: 'Completa: "The book is ___ in Spanish."',
      promptTranslation: 'El libro está escrito en español.',
      correctAnswer: 'written',
      options: ['written', 'wrote', 'write'],
      explanation: 'En la pasiva usamos el participio "written" (write → written), no el pasado "wrote".',
    },
    {
      id: 'a2-m9-l1-ex4',
      type: 'reorder',
      concept: 'present simple passive',
      difficulty: 2,
      prompt: 'Ordena la frase:',
      promptTranslation: 'El inglés se habla en muchos países.',
      correctAnswer: 'English is spoken in many countries.',
      words: ['English', 'is', 'spoken', 'in', 'many', 'countries.'],
      explanation: 'Sujeto (English) + is + participio (spoken) + complemento (in many countries).',
    },
    {
      id: 'a2-m9-l1-ex5',
      type: 'select_correct',
      concept: 'present simple passive',
      difficulty: 3,
      prompt: 'Selecciona la frase pasiva correcta.',
      promptTranslation: 'Estos coches se fabrican en Alemania.',
      correctAnswer: 'These cars are made in Germany.',
      options: ['These cars are made in Germany.', 'These cars are make in Germany.', 'These cars is made in Germany.'],
      explanation: 'Pasiva: are + participio (made). "Cars" es plural → are.',
    },
    {
      id: 'a2-m9-l1-ex6',
      type: 'error_correction',
      concept: 'present simple passive',
      difficulty: 3,
      prompt: 'Corrige el error: "English is spoke in many countries."',
      correctAnswer: 'English is spoken in many countries.',
      acceptedAnswers: ['English is spoken in many countries', 'English is spoken in many countries.'],
      acceptApproximate: true,
      explanation: 'En la pasiva usamos el participio "spoken", no el pasado simple "spoke".',
    },
    {
      id: 'a2-m9-l1-ex7',
      type: 'match',
      concept: 'present simple passive',
      difficulty: 3,
      prompt: 'Relaciona cada sujeto con su frase pasiva.',
      promptTranslation: 'Match each subject with its passive sentence.',
      correctAnswer: '',
      pairs: [
        { left: 'English', right: 'is spoken in many countries.' },
        { left: 'These cars', right: 'are made in Germany.' },
        { left: 'Coffee', right: 'is grown in Colombia.' },
        { left: 'Spanish', right: 'is spoken in many countries.' },
        { left: 'These photos', right: 'are taken with a phone.' },
      ],
      explanation: 'Sujeto singular → is + participio. Sujeto plural → are + participio.',
    },
    {
      id: 'a2-m9-l1-ex8',
      type: 'translate',
      concept: 'present simple passive',
      difficulty: 3,
      prompt: 'Traduce: "El inglés se habla en muchos países."',
      correctAnswer: 'English is spoken in many countries.',
      acceptedAnswers: ['English is spoken in many countries', 'English is spoken in many countries.'],
      acceptApproximate: true,
      explanation: '"Se habla" = is spoken (pasiva en presente). → English is spoken in many countries.',
    },
    {
      id: 'a2-m9-l1-ex9',
      type: 'translate',
      concept: 'present simple passive',
      difficulty: 4,
      prompt: 'Traduce: "Estos coches se fabrican en Alemania."',
      correctAnswer: 'These cars are made in Germany.',
      acceptedAnswers: ['These cars are made in Germany', 'These cars are made in Germany.'],
      acceptApproximate: true,
      explanation: '"Estos coches" = these cars (plural → are); "se fabrican" = are made; "en Alemania" = in Germany.',
    },
    {
      id: 'a2-m9-l1-ex10',
      type: 'true_false',
      concept: 'present simple passive',
      difficulty: 3,
      prompt: '"In the passive voice, the person who does the action is the most important part."',
      promptTranslation: 'En la voz pasiva, la persona que hace la acción es lo más importante.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'Falso', 'false.'],
      explanation: 'Es FALSO. En la pasiva el foco está en la acción o en el objeto, no en quién la hace.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m9-l1-mt1',
      type: 'multiple_choice',
      concept: 'present simple passive',
      difficulty: 1,
      prompt: 'Completa: "Coffee ___ grown in Colombia."',
      promptTranslation: 'El café se cultiva en Colombia.',
      correctAnswer: 'is',
      options: ['is', 'are', 'am'],
      explanation: '"Coffee" es singular → is. → Coffee is grown in Colombia.',
    },
    {
      id: 'a2-m9-l1-mt2',
      type: 'fill_blank',
      concept: 'present simple passive',
      difficulty: 2,
      prompt: 'Completa: "The book is ___ in Spanish." (escrito)',
      promptTranslation: 'El libro está escrito en español.',
      correctAnswer: 'written',
      acceptedAnswers: ['written', 'Written'],
      explanation: 'Participio de "write" = written. → The book is written in Spanish.',
    },
    {
      id: 'a2-m9-l1-mt3',
      type: 'multiple_choice',
      concept: 'present simple passive',
      difficulty: 2,
      prompt: 'Completa: "These photos ___ taken with a phone."',
      promptTranslation: 'Estas fotos se toman con un teléfono.',
      correctAnswer: 'are',
      options: ['are', 'is', 'am'],
      explanation: '"These photos" es plural → are. → These photos are taken...',
    },
    {
      id: 'a2-m9-l1-mt4',
      type: 'translate',
      concept: 'present simple passive',
      difficulty: 3,
      prompt: 'Traduce: "El café se cultiva en Colombia."',
      correctAnswer: 'Coffee is grown in Colombia.',
      acceptedAnswers: ['Coffee is grown in Colombia', 'Coffee is grown in Colombia.'],
      acceptApproximate: true,
      explanation: '"Se cultiva" = is grown (pasiva presente). → Coffee is grown in Colombia.',
    },
    {
      id: 'a2-m9-l1-mt5',
      type: 'error_correction',
      concept: 'present simple passive',
      difficulty: 4,
      prompt: 'Corrige el error: "English is spoke in many countries."',
      correctAnswer: 'English is spoken in many countries.',
      acceptedAnswers: ['English is spoken in many countries', 'English is spoken in many countries.'],
      acceptApproximate: true,
      explanation: 'En la pasiva usamos el participio "spoken", no el pasado simple "spoke".',
    },
  ],
  reviewItems: ['a2-m8-l4'],
  prerequisites: ['a2-m8-l4'],
}
