import type { Lesson } from '../../types'

export const lesson62FuturePassive: Lesson = {
  id: 'b1-m6-l2',
  moduleId: 'm6-passive-extended',
  order: 1,
  title: 'Pasiva en futuro: will be + participio',
  objective: 'Formar la voz pasiva en futuro con "will be + participio" y diferenciarla del uso de "open" como adjetivo.',
  explanation_es: `Para hablar de acciones futuras en voz pasiva usamos:
- will be + participio pasado

Ejemplos:
- The new museum will be opened next month. = El nuevo museo se abrirá el próximo mes.
- The exam will be held on Friday. = El examen se realizará el viernes.
- The results will be announced soon. = Los resultados se anunciarán pronto.

En español, la pasiva futura se expresa con "se + verbo en futuro" o "será/serán + participio":
- will be opened = se abrirá / será abierto
- will be announced = se anunciarán / serán anunciados

Uso con agente (quién hace la acción):
- The museum will be opened BY THE MAYOR. = El museo será abierto POR EL ALCALDE.
- Normalmente el agente se omite porque no es importante.

¡OJO! La diferencia entre "will be opened" y "will be open":
- "will be OPENED" = voz pasiva (VERBO): alguien lo abrirá. El nuevo museo se abrirá (será abierto).
  - The museum will be opened by the mayor. = El museo será abierto por el alcalde.
- "will be OPEN" = adjetivo (estado): estará abierto.
  - The museum will be open from 9 to 6. = El museo estará abierto de 9 a 6.

Contracción: won't be + participio (negativo):
- The results won't be announced today. = Los resultados no se anunciarán hoy.`,
  examples: [
    { english: 'The new museum will be opened next month.', spanish: 'El nuevo museo se abrirá el próximo mes.', note: 'will be + opened (participio).' },
    { english: 'The exam will be held on Friday.', spanish: 'El examen se realizará el viernes.', note: 'will be + held.' },
    { english: 'The results will be announced soon.', spanish: 'Los resultados se anunciarán pronto.', note: 'will be + announced.' },
    { english: 'The museum will be opened by the mayor.', spanish: 'El museo será abierto por el alcalde.', note: 'Agente con "by".' },
    { english: 'The museum will be open from 9 to 6.', spanish: 'El museo estará abierto de 9 a 6.', note: 'Adjetivo de estado: open.' },
    { english: 'The results won\'t be announced today.', spanish: 'Los resultados no se anunciarán hoy.', note: 'Negativo: won\'t be.' },
  ],
  rule: `Fórmula:
will + be + participio pasado
- The museum will be opened.
- The results will be announced.

Usos:
- Acciones futuras en pasiva: The new museum will be opened next month.
- Agente con "by" (opcional): will be opened by the mayor.

Diferencia:
- will be OPENED = pasiva (verbo): The museum will be opened by the mayor.
- will be OPEN = adjetivo (estado): The museum will be open from 9 to 6.

Negativo: won't be + participio.
- The results won't be announced today.`,
  commonMistakes: [
    { wrong: '❌ The exam will be hold on Friday.', correct: '✅ The exam will be held on Friday.', explanation: 'Después de "will be" va el participio: held, no "hold".' },
    { wrong: '❌ The museum will be open by the mayor.', correct: '✅ The museum will be opened by the mayor.', explanation: 'Con agente (by the mayor) usamos la pasiva con verbo: opened. "Open" sin -ed es el adjetivo de estado.' },
    { wrong: '❌ The results will be announce soon.', correct: '✅ The results will be announced soon.', explanation: 'Después de "will be" va el participio: announced, no "announce".' },
    { wrong: '❌ The results will announced soon.', correct: '✅ The results will be announced soon.', explanation: 'Falta "be": will be + participio. Nunca "will announced".' },
  ],
  vocabulary: [
    { word: 'opened', translation_es: 'abierto (participio de open)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'The museum will be opened next month.', exampleTranslation: 'El museo se abrirá el próximo mes.' },
    { word: 'held', translation_es: 'celebrado, realizado (participio de hold)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'The exam will be held on Friday.', exampleTranslation: 'El examen se realizará el viernes.' },
    { word: 'announced', translation_es: 'anunciado (participio de announce)', level: 'B1', category: 'grammar', partOfSpeech: 'verb (participle)', example: 'The results will be announced soon.', exampleTranslation: 'Los resultados se anunciarán pronto.' },
    { word: 'museum', translation_es: 'museo', level: 'A2', category: 'places', partOfSpeech: 'noun', example: 'The new museum will be opened.', exampleTranslation: 'El nuevo museo se abrirá.' },
    { word: 'results', translation_es: 'resultados', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'The results will be announced soon.', exampleTranslation: 'Los resultados se anunciarán pronto.' },
    { word: 'mayor', translation_es: 'alcalde', level: 'B1', category: 'people', partOfSpeech: 'noun', example: 'It will be opened by the mayor.', exampleTranslation: 'Será abierto por el alcalde.' },
  ],
  grammarPoints: [
    {
      id: 'gp-future-passive',
      level: 'B1',
      name: 'Future passive (will be + participle)',
      explanation_es: 'La pasiva en futuro se forma con will be + participio. Se usa para acciones futuras en las que importa la acción, no quién la hace. Diferencia: will be opened (verbo pasivo) vs will be open (adjetivo de estado).',
      formula: 'will + be + past participle',
      examples: ['The new museum will be opened next month.', 'The exam will be held on Friday.', 'The results will be announced soon.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m6-l2-ex1',
      type: 'multiple_choice',
      concept: 'future passive form',
      difficulty: 1,
      prompt: 'Completa: "The new museum will ___ opened next month."',
      promptTranslation: 'El nuevo museo se abrirá el próximo mes.',
      correctAnswer: 'be',
      options: ['be', 'is', 'was'],
      explanation: 'Pasiva futura = will be + participio. → will be opened.',
    },
    {
      id: 'b1-m6-l2-ex2',
      type: 'multiple_choice',
      concept: 'future passive form',
      difficulty: 1,
      prompt: 'Completa: "The exam will be ___ on Friday."',
      promptTranslation: 'El examen se realizará el viernes.',
      correctAnswer: 'held',
      options: ['held', 'hold', 'holding'],
      explanation: 'Después de "will be" va el participio: held. → The exam will be held on Friday.',
    },
    {
      id: 'b1-m6-l2-ex3',
      type: 'fill_blank',
      concept: 'future passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "The results will be ___ (announce) soon."',
      promptTranslation: 'Los resultados se anunciarán pronto.',
      correctAnswer: 'announced',
      acceptedAnswers: ['announced'],
      explanation: 'Después de "will be" va el participio: announced. → The results will be announced soon.',
    },
    {
      id: 'b1-m6-l2-ex4',
      type: 'fill_blank',
      concept: 'future passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "The museum will be ___ (open) by the mayor."',
      promptTranslation: 'El museo será abierto por el alcalde.',
      correctAnswer: 'opened',
      acceptedAnswers: ['opened'],
      explanation: 'Con agente (by the mayor) usamos el verbo pasivo: opened. → will be opened by the mayor.',
    },
    {
      id: 'b1-m6-l2-ex5',
      type: 'true_false',
      concept: 'opened vs open',
      difficulty: 3,
      prompt: '"The museum will be open" describe un estado (adjetivo), mientras que "will be opened" es la pasiva (verbo).',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. "Open" sin -ed = adjetivo de estado. "Opened" = participio del verbo (pasiva).',
    },
    {
      id: 'b1-m6-l2-ex6',
      type: 'select_correct',
      concept: 'opened vs open',
      difficulty: 3,
      prompt: 'Selecciona la frase PASIVA correcta (con agente):',
      promptTranslation: 'El museo será abierto por el alcalde el próximo mes.',
      correctAnswer: 'The museum will be opened by the mayor next month.',
      options: [
        'The museum will be opened by the mayor next month.',
        'The museum will be open by the mayor next month.',
        'The museum will opened by the mayor next month.',
        'The museum will be opening by the mayor next month.',
      ],
      explanation: 'Pasiva futura = will be + participio (opened) + by + agente. "Will be open" es adjetivo de estado, no pasiva con agente.',
    },
    {
      id: 'b1-m6-l2-ex7',
      type: 'reorder',
      concept: 'future passive form',
      difficulty: 3,
      prompt: 'Ordena la frase (pasiva futura):',
      promptTranslation: 'Los resultados se anunciarán pronto.',
      words: ['The', 'results', 'will', 'be', 'announced', 'soon.'],
      correctAnswer: 'The results will be announced soon.',
      explanation: 'Estructura: sujeto + will + be + participio (announced) + adverbio. → The results will be announced soon.',
    },
    {
      id: 'b1-m6-l2-ex8',
      type: 'translate',
      concept: 'future passive',
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
      id: 'b1-m6-l2-ex9',
      type: 'translate',
      concept: 'future passive',
      difficulty: 3,
      prompt: 'Traduce: "Los resultados se anunciarán pronto."',
      correctAnswer: 'The results will be announced soon.',
      acceptedAnswers: [
        'The results will be announced soon',
        'The results will be announced soon.',
        'the results will be announced soon',
      ],
      acceptApproximate: true,
      explanation: '"Se anunciarán" (pasiva futura) = will be announced. "pronto" = soon.',
    },
    {
      id: 'b1-m6-l2-ex10',
      type: 'error_correction',
      concept: 'future passive form',
      difficulty: 3,
      prompt: 'Corrige el error: "The exam will be hold on Friday."',
      correctAnswer: 'The exam will be held on Friday.',
      acceptedAnswers: [
        'The exam will be held on Friday',
        'The exam will be held on Friday.',
        'the exam will be held on friday',
      ],
      acceptApproximate: true,
      explanation: 'Después de "will be" va el participio: held, no "hold".',
    },
    {
      id: 'b1-m6-l2-ex11',
      type: 'error_correction',
      concept: 'future passive form',
      difficulty: 4,
      prompt: 'Corrige el error: "The results will be announce soon."',
      correctAnswer: 'The results will be announced soon.',
      acceptedAnswers: [
        'The results will be announced soon',
        'The results will be announced soon.',
        'the results will be announced soon',
      ],
      acceptApproximate: true,
      explanation: 'Después de "will be" va el participio: announced, no "announce".',
    },
    {
      id: 'b1-m6-l2-ex12',
      type: 'match',
      concept: 'future passive match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su significado:',
      pairs: [
        { left: 'The museum will be opened next month.', right: 'Se abrirá (alguien lo abrirá).' },
        { left: 'The museum will be open from 9 to 6.', right: 'Estará abierto (estado).' },
        { left: 'The exam will be held on Friday.', right: 'El examen se realizará el viernes.' },
        { left: 'The results will be announced soon.', right: 'Los resultados se anunciarán pronto.' },
        { left: 'The results won\'t be announced today.', right: 'Los resultados no se anunciarán hoy.' },
      ],
      correctAnswer: 'The museum will be opened next month.=Se abrirá (alguien lo abrirá)., The museum will be open from 9 to 6.=Estará abierto (estado)., The exam will be held on Friday.=El examen se realizará el viernes., The results will be announced soon.=Los resultados se anunciarán pronto., The results won\'t be announced today.=Los resultados no se anunciarán hoy.',
      explanation: '"Will be opened" = pasiva (verbo). "Will be open" = adjetivo de estado. "Won\'t be" = pasiva futura negativa.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m6-l2-mt1',
      type: 'multiple_choice',
      concept: 'future passive form',
      difficulty: 1,
      prompt: 'Completa: "The results ___ be announced soon."',
      promptTranslation: 'Los resultados se anunciarán pronto.',
      correctAnswer: 'will',
      options: ['will', 'is', 'are'],
      explanation: 'Pasiva futura = will be + participio. → The results will be announced soon.',
    },
    {
      id: 'b1-m6-l2-mt2',
      type: 'fill_blank',
      concept: 'future passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "The exam will be ___ (hold) on Friday."',
      promptTranslation: 'El examen se realizará el viernes.',
      correctAnswer: 'held',
      acceptedAnswers: ['held'],
      explanation: 'El participio de "hold" es "held": will be held.',
    },
    {
      id: 'b1-m6-l2-mt3',
      type: 'error_correction',
      concept: 'future passive form',
      difficulty: 3,
      prompt: 'Corrige el error: "The new museum will be open by the mayor next month."',
      correctAnswer: 'The new museum will be opened by the mayor next month.',
      acceptedAnswers: [
        'The new museum will be opened by the mayor next month',
        'The new museum will be opened by the mayor next month.',
        'the new museum will be opened by the mayor next month',
      ],
      acceptApproximate: true,
      explanation: 'Con agente (by the mayor) usamos la pasiva con verbo: opened. "Open" sin -ed es el adjetivo de estado.',
    },
    {
      id: 'b1-m6-l2-mt4',
      type: 'translate',
      concept: 'future passive',
      difficulty: 3,
      prompt: 'Traduce: "El examen se realizará el viernes."',
      correctAnswer: 'The exam will be held on Friday.',
      acceptedAnswers: [
        'The exam will be held on Friday',
        'The exam will be held on Friday.',
        'the exam will be held on friday',
      ],
      acceptApproximate: true,
      explanation: '"Se realizará" (pasiva futura) = will be held. "el viernes" = on Friday.',
    },
    {
      id: 'b1-m6-l2-mt5',
      type: 'select_correct',
      concept: 'future passive form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Los resultados se anunciarán pronto.',
      correctAnswer: 'The results will be announced soon.',
      options: [
        'The results will be announced soon.',
        'The results will be announce soon.',
        'The results will announced soon.',
        'The results will be announcing soon.',
      ],
      explanation: 'Pasiva futura = will be + participio (announced). "Will be announce", "will announced" y "announcing" son incorrectos.',
    },
  ],
  reviewItems: ['b1-m6-l1'],
  prerequisites: ['b1-m6-l1'],
}
