import type { Lesson } from '../../types'

export const lesson61PassiveNegative: Lesson = {
  id: 'b1-m6-l1',
  moduleId: 'm6-passive-extended',
  order: 0,
  title: 'Pasiva negativa (presente y pasado)',
  objective: 'Formar la voz pasiva negativa en presente y pasado con is/are/was/were + not + participio.',
  explanation_es: `Recuerda la voz pasiva básica: en la pasiva, lo importante es la ACCIÓN y la persona o cosa que la recibe, no quién la hace.
- Activa: People speak English. = La gente habla inglés.
- Pasiva: English is spoken (by people). = El inglés es hablado (por la gente). / Se habla inglés.

En la pasiva usamos el verbo "to be" + PARTICIPIO pasado.

Ahora vamos a aprender la pasiva NEGATIVA:
- presente: is / are + not + participio
- pasado: was / were + not + participio

Ejemplos:
- English is not spoken in that country. = El inglés no se habla en ese país.
- These rules are not followed. = Estas reglas no se siguen.
- The package wasn't delivered yesterday. = El paquete no fue entregado ayer.

Formas contraídas:
- is not = isn't
- are not = aren't
- was not = wasn't
- were not = weren't

Repaso del presente/pasado pasivo afirmativo:
- English is spoken. (presente: is + participio)
- The house was built in 1990. (pasado: was + participio)

¡OJO! Después de "to be" SIEMPRE va el PARTICIPIO pasado:
- ✅ is spoken, ✅ was delivered, ✅ are followed
- ❌ is speak, ❌ was deliver, ❌ are follow`,
  examples: [
    { english: 'English is not spoken in that country.', spanish: 'El inglés no se habla en ese país.', note: 'is + not + spoken.' },
    { english: 'The package wasn\'t delivered yesterday.', spanish: 'El paquete no fue entregado ayer.', note: 'wasn\'t = was not.' },
    { english: 'These rules are not followed.', spanish: 'Estas reglas no se siguen.', note: 'are + not + followed.' },
    { english: 'The windows were not cleaned last week.', spanish: 'Las ventanas no fueron limpiadas la semana pasada.', note: 'were + not + cleaned.' },
    { english: 'This movie isn\'t shown on TV.', spanish: 'Esta película no se emite en la tele.', note: 'isn\'t = is not.' },
    { english: 'The museum wasn\'t open on Monday.', spanish: 'El museo no estuvo abierto el lunes.', note: 'Ojo: aquí "open" es adjetivo.' },
  ],
  rule: `Fórmula:
presente: is / are + not + participio
- English is not spoken.
- These rules are not followed.

pasado: was / were + not + participio
- The package wasn't delivered.
- The windows were not cleaned.

Contracciones: isn't, aren't, wasn't, weren't.

OJO:
- Tras to be va SIEMPRE el participio pasado: is spoken, was delivered, are followed.
- ❌ is speak, ❌ was deliver, ❌ are follow.`,
  formation: {
    title: 'Cómo se forma la pasiva negativa (presente y pasado)',
    intro: 'La pasiva negativa se forma con el verbo to be (presente o pasado) + not + participio pasado. El sujeto recibe la acción; no importa quién la hace.',
    patterns: [
      {
        name: 'Presente',
        formula: 'Sujeto + is/are + not + past participle + complemento',
        examples: [
          { english: 'English is not spoken in that country.', spanish: 'El inglés no se habla en ese país.' },
          { english: 'These rules are not followed.', spanish: 'Estas reglas no se siguen.' },
          { english: 'This movie isn\'t shown on TV.', spanish: 'Esta película no se emite en la tele.' },
        ],
        note: 'is con singular, are con plural. Contracciones: isn\'t, aren\'t.',
      },
      {
        name: 'Pasado',
        formula: 'Sujeto + was/were + not + past participle + complemento',
        examples: [
          { english: 'The package wasn\'t delivered yesterday.', spanish: 'El paquete no fue entregado ayer.' },
          { english: 'The windows were not cleaned last week.', spanish: 'Las ventanas no fueron limpiadas la semana pasada.' },
        ],
        note: 'was con singular, were con plural. Contracciones: wasn\'t, weren\'t.',
      },
    ],
    notes: [
      'Después de "to be" va SIEMPRE el participio pasado: is spoken, was delivered, are followed (no "is speak").',
      'La pasiva negativa no usa "don\'t/doesn\'t": English is not spoken (no "English doesn\'t spoken").',
      'Cuidado con "open" como adjetivo de estado: The museum wasn\'t open on Monday (no es pasiva).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ The package was not deliver yesterday.', correct: '✅ The package was not delivered yesterday.', explanation: 'En la pasiva, después de "was" va el participio: delivered, no "deliver".' },
    { wrong: '❌ English is not spoke in that country.', correct: '✅ English is not spoken in that country.', explanation: 'El participio de "speak" es "spoken": is spoken, no "is spoke".' },
    { wrong: '❌ These rules are not follow.', correct: '✅ These rules are not followed.', explanation: 'Después de "are" va el participio: followed, no "follow".' },
    { wrong: '❌ English doesn\'t spoken in that country.', correct: '✅ English is not spoken in that country.', explanation: 'La pasiva negativa usa to be + not + participio, no "doesn\'t".' },
  ],
  vocabulary: [
    { word: 'spoken', translation_es: 'hablado (participio de speak)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'English is not spoken here.', exampleTranslation: 'El inglés no se habla aquí.' },
    { word: 'delivered', translation_es: 'entregado (participio de deliver)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'The package wasn\'t delivered.', exampleTranslation: 'El paquete no fue entregado.' },
    { word: 'rules', translation_es: 'reglas, normas', level: 'A2', category: 'nouns', partOfSpeech: 'noun', example: 'These rules are not followed.', exampleTranslation: 'Estas reglas no se siguen.' },
    { word: 'followed', translation_es: 'seguido, cumplido (participio)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'The rules are not followed.', exampleTranslation: 'Las reglas no se siguen.' },
    { word: 'cleaned', translation_es: 'limpiado (participio de clean)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'The windows were not cleaned.', exampleTranslation: 'Las ventanas no fueron limpiadas.' },
    { word: 'shown', translation_es: 'emitido, mostrado (participio de show)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'This movie isn\'t shown on TV.', exampleTranslation: 'Esta película no se emite en la tele.' },
  ],
  grammarPoints: [
    {
      id: 'gp-passive-negative',
      level: 'B1',
      name: 'Negative passive (present & past)',
      explanation_es: 'La pasiva negativa se forma con to be (presente o pasado) + not + participio. Presente: is/are not + participio. Pasado: was/were not + participio.',
      formula: 'is / are / was / were + not + past participle',
      examples: ['English is not spoken in that country.', "The package wasn't delivered yesterday.", 'These rules are not followed.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m6-l1-ex1',
      type: 'multiple_choice',
      concept: 'negative passive present',
      difficulty: 1,
      prompt: 'Completa: "English is not ___ in that country."',
      promptTranslation: 'El inglés no se habla en ese país.',
      correctAnswer: 'spoken',
      options: ['spoken', 'speak', 'spoke'],
      explanation: 'En la pasiva, después de "is" va el participio: spoken. → English is not spoken.',
    },
    {
      id: 'b1-m6-l1-ex2',
      type: 'multiple_choice',
      concept: 'negative passive past',
      difficulty: 2,
      prompt: 'Completa: "The package ___ delivered yesterday." (was not)',
      promptTranslation: 'El paquete no fue entregado ayer.',
      correctAnswer: 'wasn\'t',
      options: ['wasn\'t', 'aren\'t', 'isn\'t'],
      explanation: '"Delivered" indica pasado → usamos "wasn\'t" (was not). → The package wasn\'t delivered.',
    },
    {
      id: 'b1-m6-l1-ex3',
      type: 'fill_blank',
      concept: 'negative passive present',
      difficulty: 2,
      prompt: 'Completa con la forma de "to be": "These rules are ___ followed." (not)',
      promptTranslation: 'Estas reglas no se siguen.',
      correctAnswer: 'not',
      acceptedAnswers: ['not'],
      explanation: 'La pasiva negativa = to be + not + participio. → These rules are not followed.',
    },
    {
      id: 'b1-m6-l1-ex4',
      type: 'fill_blank',
      concept: 'negative passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "The windows were not ___ (clean) last week."',
      promptTranslation: 'Las ventanas no fueron limpiadas la semana pasada.',
      correctAnswer: 'cleaned',
      acceptedAnswers: ['cleaned'],
      explanation: 'Después de "were" va el participio: cleaned. → The windows were not cleaned.',
    },
    {
      id: 'b1-m6-l1-ex5',
      type: 'true_false',
      concept: 'negative passive form',
      difficulty: 2,
      prompt: 'La pasiva negativa se forma con to be + not + participio pasado.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. is/are/was/were + not + participio: is not spoken, wasn\'t delivered.',
    },
    {
      id: 'b1-m6-l1-ex6',
      type: 'select_correct',
      concept: 'negative passive form',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'El paquete no fue entregado ayer.',
      correctAnswer: 'The package wasn\'t delivered yesterday.',
      options: [
        'The package wasn\'t delivered yesterday.',
        'The package wasn\'t deliver yesterday.',
        'The package doesn\'t delivered yesterday.',
        'The package wasn\'t delivering yesterday.',
      ],
      explanation: 'Pasiva pasada negativa = wasn\'t + participio (delivered). "Wasn\'t deliver", "doesn\'t delivered" y "delivering" son incorrectos.',
    },
    {
      id: 'b1-m6-l1-ex7',
      type: 'reorder',
      concept: 'negative passive form',
      difficulty: 3,
      prompt: 'Ordena la frase (pasiva negativa):',
      promptTranslation: 'Estas reglas no se siguen.',
      words: ['These', 'rules', 'are', 'not', 'followed.'],
      correctAnswer: 'These rules are not followed.',
      explanation: 'Estructura: sujeto + to be (are) + not + participio (followed).',
    },
    {
      id: 'b1-m6-l1-ex8',
      type: 'translate',
      concept: 'negative passive',
      difficulty: 3,
      prompt: 'Traduce: "El inglés no se habla en ese país."',
      correctAnswer: 'English is not spoken in that country.',
      acceptedAnswers: [
        'English is not spoken in that country',
        'English is not spoken in that country.',
        "English isn't spoken in that country",
        "English isn't spoken in that country.",
        'english is not spoken in that country',
      ],
      acceptApproximate: true,
      explanation: '"No se habla" (pasiva negativa) = is not spoken. "en ese país" = in that country.',
    },
    {
      id: 'b1-m6-l1-ex9',
      type: 'translate',
      concept: 'negative passive',
      difficulty: 3,
      prompt: 'Traduce: "El paquete no fue entregado ayer."',
      correctAnswer: 'The package wasn\'t delivered yesterday.',
      acceptedAnswers: [
        'The package wasn\'t delivered yesterday',
        'The package wasn\'t delivered yesterday.',
        'The package was not delivered yesterday',
        'The package was not delivered yesterday.',
        'the package was not delivered yesterday',
      ],
      acceptApproximate: true,
      explanation: '"No fue entregado" (pasado, pasiva negativa) = wasn\'t delivered. "ayer" = yesterday.',
    },
    {
      id: 'b1-m6-l1-ex10',
      type: 'error_correction',
      concept: 'negative passive form',
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
      id: 'b1-m6-l1-ex11',
      type: 'error_correction',
      concept: 'negative passive form',
      difficulty: 4,
      prompt: 'Corrige el error: "English is not spoke in that country."',
      correctAnswer: 'English is not spoken in that country.',
      acceptedAnswers: [
        'English is not spoken in that country',
        'English is not spoken in that country.',
        'English isn\'t spoken in that country',
        'English isn\'t spoken in that country.',
      ],
      acceptApproximate: true,
      explanation: 'El participio de "speak" es "spoken": is spoken, no "is spoke".',
    },
    {
      id: 'b1-m6-l1-ex12',
      type: 'match',
      concept: 'negative passive match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su traducción:',
      pairs: [
        { left: 'English is not spoken there.', right: 'El inglés no se habla allí.' },
        { left: 'The package wasn\'t delivered yesterday.', right: 'El paquete no fue entregado ayer.' },
        { left: 'These rules are not followed.', right: 'Estas reglas no se siguen.' },
        { left: 'The windows were not cleaned last week.', right: 'Las ventanas no fueron limpiadas la semana pasada.' },
        { left: 'This movie isn\'t shown on TV.', right: 'Esta película no se emite en la tele.' },
      ],
      correctAnswer: 'English is not spoken there.=El inglés no se habla allí., The package wasn\'t delivered yesterday.=El paquete no fue entregado ayer., These rules are not followed.=Estas reglas no se siguen., The windows were not cleaned last week.=Las ventanas no fueron limpiadas la semana pasada., This movie isn\'t shown on TV.=Esta película no se emite en la tele.',
      explanation: 'Pasiva negativa presente (is/are not + participio) y pasada (was/were not + participio).',
    },
    {
      id: 'b1-m6-l1-ex13',
      type: 'listening',
      concept: 'negative passive listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Sarah habla de las cosas que no se permiten en su universidad: no se permiten animales de compañía, las bebidas alcohólicas no están permitidas en los dormitorios, y los exámenes no se pueden hacer en línea.',
      listening: {
        audioText:
          "At my university, several things are not allowed. Pets are not permitted in the dormitories. Alcoholic drinks aren\'t allowed in the student rooms. Mobile phones are not used during exams—we can\'t bring them to the exam hall. The library isn\'t open on Sundays, and books aren\'t lent for more than three weeks. Also, exams cannot be taken online; they must be done in person. These rules are not always popular, but they are enforced strictly.",
        audioUrl: '/audio/tts/b1-m6-l1-ex13.mp3',
        questions: [
          {
            id: 'b1-m6-l1-ex13-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Pets are allowed in the dormitories.',
            correctAnswer: 'false',
            explanation: '"Pets are not permitted in the dormitories."',
          },
          {
            id: 'b1-m6-l1-ex13-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: '¿Qué no se permite en las habitaciones de estudiantes?',
            correctAnswer: 'Bebidas alcohólicas',
            options: ['Bebidas alcohólicas', 'Mascotas', 'Libros de la biblioteca'],
            explanation: '"Alcoholic drinks aren\'t allowed in the student rooms."',
          },
          {
            id: 'b1-m6-l1-ex13-q3',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Library books can be borrowed for more than three weeks.',
            correctAnswer: 'false',
            explanation: '"books aren\'t lent for more than three weeks."',
          },
        ],
      },
    },
    {
      id: 'b1-m6-l1-ex14',
      type: 'writing',
      concept: 'negative passive writing',
      difficulty: 3,
      prompt: 'Escribile un email informal a un amigo/a describiendo qué cosas NO se permiten o NO se hacen en tu escuela/trabajo/ciudad (usá la pasiva negativa).',
      promptTranslation: 'Write an informal email to a friend about what is NOT allowed or what is NOT done at your school/work/city.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con is/are not + participio o was/were not + participio, describiendo situaciones negativas, y mantiene un registro informal.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Al menos 3 cosas que NO se permiten o NO se hacen', 'Una razón o explicación de por qué'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m6-l1-ex15',
      type: 'speaking',
      concept: 'negative passive pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'The package wasn\'t delivered yesterday.',
      explanation: 'Practicá la pronunciación de "wasn\'t" (contracción de was not) y la entonación natural de una frase negativa en pasiva pasada.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m6-l1-mt1',
      type: 'multiple_choice',
      concept: 'negative passive form',
      difficulty: 1,
      prompt: 'Completa: "English is not ___ in that country."',
      promptTranslation: 'El inglés no se habla en ese país.',
      correctAnswer: 'spoken',
      options: ['spoken', 'speak', 'speaks'],
      explanation: 'En la pasiva, después de "is" va el participio: spoken.',
    },
    {
      id: 'b1-m6-l1-mt2',
      type: 'fill_blank',
      concept: 'negative passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "The package was not ___ (deliver) yesterday."',
      promptTranslation: 'El paquete no fue entregado ayer.',
      correctAnswer: 'delivered',
      acceptedAnswers: ['delivered'],
      explanation: 'Después de "was" va el participio: delivered.',
    },
    {
      id: 'b1-m6-l1-mt3',
      type: 'error_correction',
      concept: 'negative passive form',
      difficulty: 3,
      prompt: 'Corrige el error: "These rules are not follow."',
      correctAnswer: 'These rules are not followed.',
      acceptedAnswers: ['These rules are not followed', 'These rules are not followed.', 'these rules are not followed'],
      acceptApproximate: true,
      explanation: 'Después de "are" va el participio: followed, no "follow".',
    },
    {
      id: 'b1-m6-l1-mt4',
      type: 'translate',
      concept: 'negative passive',
      difficulty: 3,
      prompt: 'Traduce: "Estas reglas no se siguen."',
      correctAnswer: 'These rules are not followed.',
      acceptedAnswers: [
        'These rules are not followed',
        'These rules are not followed.',
        "These rules aren't followed",
        "These rules aren't followed.",
        'these rules are not followed',
      ],
      acceptApproximate: true,
      explanation: '"No se siguen" (pasiva negativa presente) = are not followed.',
    },
    {
      id: 'b1-m6-l1-mt5',
      type: 'select_correct',
      concept: 'negative passive form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Las ventanas no fueron limpiadas.',
      correctAnswer: 'The windows were not cleaned.',
      options: ['The windows were not cleaned.', 'The windows were not clean.', 'The windows didn\'t cleaned.', 'The windows was not cleaned.'],
      explanation: 'Pasiva pasada negativa = were + not + participio (cleaned). Plural → "were", y participio "cleaned".',
    },
  ],
  reviewItems: ['b1-m5-l4'],
  prerequisites: ['b1-m5-l4'],
}
