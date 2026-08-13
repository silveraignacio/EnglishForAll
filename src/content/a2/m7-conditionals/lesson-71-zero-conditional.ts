import type { Lesson } from '../../types'

export const lesson71ZeroConditional: Lesson = {
  id: 'a2-m7-l1',
  moduleId: 'm7-conditionals',
  order: 0,
  title: 'Zero conditional: verdades generales',
  objective: 'Expresar hechos generales y verdades científicas con el zero conditional.',
  explanation_es: `El zero conditional (condicional cero) se usa para hablar de hechos generales, verdades científicas y situaciones que siempre ocurren cuando se cumple una condición.

La estructura es muy simple:

> if + present simple, present simple

La parte con "if" (si) es la condición, y la segunda parte es el resultado. Cuando la condición se cumple, el resultado ocurre SIEMPRE.

Por ejemplo:
- "If you heat water, it boils." = Si calientas agua, hierve. (Hecho científico: siempre pasa.)
- "If it rains, the streets get wet." = Si llueve, las calles se mojan.
- "If you don't sleep, you feel tired." = Si no duermes, te sientes cansado.

Puntos importantes:
1. Las DOS partes llevan presente simple. No usamos "will" en ninguna.
2. El orden puede invertirse: "Water boils if you heat it." = El agua hierve si la calientas. (Sin coma.)
3. Con he/she/it añadimos -s al verbo: "If she studies, she remembers the words."
4. Para negar usamos don't/doesn't: "If you don't sleep, you feel tired."`,
  examples: [
    { english: 'If you heat water, it boils.', spanish: 'Si calientas agua, hierve.', note: 'Hecho científico: siempre ocurre.' },
    { english: 'If it rains, the streets get wet.', spanish: 'Si llueve, las calles se mojan.', note: 'Hecho general de todos los días.' },
    { english: "If you don't sleep, you feel tired.", spanish: 'Si no duermes, te sientes cansado.', note: 'Negativo con don\'t en la if-clause.' },
    { english: 'Water boils if you heat it.', spanish: 'El agua hierve si la calientas.', note: 'El orden puede cambiar: resultado + if + condición.' },
    { english: 'Ice melts if you heat it.', spanish: 'El hielo se derrite si lo calientas.', note: 'Verdad científica con "melt".' },
    { english: 'If she studies, she remembers the words.', spanish: 'Si ella estudia, recuerda las palabras.', note: 'Con she: estudia (studies) y recuerda (remembers).' },
  ],
  rule: `Regla del zero conditional:

- if + presente simple, presente simple.
- La if-clause es la condición; la otra parte es el resultado.
- Se usa para hechos generales y verdades científicas (siempre ocurren).
- NO se usa "will" en ninguna de las dos partes.
- Orden flexible: "If you heat water, it boils." o "Water boils if you heat it."`,
  commonMistakes: [
    { wrong: '❌ If you will heat water, it boils.', correct: '✅ If you heat water, it boils.', explanation: 'En el zero conditional, la parte con "if" usa presente simple, nunca "will".' },
    { wrong: '❌ If I no sleep, I feel tired.', correct: '✅ If I don\'t sleep, I feel tired.', explanation: 'La negativa en presente simple se forma con "don\'t", no con "no" antes del verbo.' },
    { wrong: '❌ If it rain, the streets get wet.', correct: '✅ If it rains, the streets get wet.', explanation: 'Con "it" (he/she/it) el verbo lleva -s: rains.' },
  ],
  vocabulary: [
    { word: 'if', translation_es: 'si', level: 'A2', category: 'grammar', partOfSpeech: 'conjunction', example: 'If it rains, I stay home.', exampleTranslation: 'Si llueve, me quedo en casa.' },
    { word: 'boil', translation_es: 'hervir', level: 'A2', category: 'science', partOfSpeech: 'verb', example: 'Water boils at 100 degrees.', exampleTranslation: 'El agua hierve a 100 grados.' },
    { word: 'heat', translation_es: 'calentar', level: 'A2', category: 'science', partOfSpeech: 'verb', example: 'If you heat ice, it melts.', exampleTranslation: 'Si calientas hielo, se derrite.' },
    { word: 'melt', translation_es: 'derretirse', level: 'A2', category: 'science', partOfSpeech: 'verb', example: 'Ice melts if you heat it.', exampleTranslation: 'El hielo se derrite si lo calientas.' },
    { word: 'wet', translation_es: 'mojado', level: 'A2', category: 'description', partOfSpeech: 'adjective', example: 'If it rains, the streets get wet.', exampleTranslation: 'Si llueve, las calles se mojan.' },
    { word: 'fact', translation_es: 'hecho', level: 'A2', category: 'general', partOfSpeech: 'noun', example: 'This is a scientific fact.', exampleTranslation: 'Esto es un hecho científico.' },
  ],
  grammarPoints: [
    {
      id: 'gp-zero-conditional',
      level: 'A2',
      name: 'Zero conditional',
      explanation_es: 'Se usa para hechos generales y verdades científicas. Las dos partes van en presente simple.',
      formula: 'If + present simple, present simple',
      examples: ['If you heat water, it boils.', "If you don't sleep, you feel tired."],
    },
  ],
  exercises: [
    {
      id: 'a2-m7-l1-ex1',
      type: 'multiple_choice',
      concept: 'zero conditional',
      difficulty: 1,
      prompt: 'Completa: "If you heat water, it ___."',
      promptTranslation: 'Si calientas agua, hierve.',
      correctAnswer: 'boils',
      options: ['boils', 'will boil', 'boil'],
      explanation: 'En el zero conditional, el resultado va en presente simple. Con "it" añadimos -s: boils.',
    },
    {
      id: 'a2-m7-l1-ex2',
      type: 'fill_blank',
      concept: 'zero conditional',
      difficulty: 1,
      prompt: 'Completa: "If it ___, the streets get wet." (llueve)',
      promptTranslation: 'Si llueve, las calles se mojan.',
      correctAnswer: 'rains',
      acceptedAnswers: ['rains', 'Rain'],
      explanation: 'Con "it" (he/she/it) el verbo lleva -s: rains. → If it rains, the streets get wet.',
    },
    {
      id: 'a2-m7-l1-ex3',
      type: 'true_false',
      concept: 'zero conditional',
      difficulty: 2,
      prompt: '"In the zero conditional, we use "will" in the if-clause."',
      promptTranslation: 'En el zero conditional, usamos "will" en la parte con "if".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'Falso', 'false.'],
      explanation: 'Es FALSO. En el zero conditional no usamos "will" en ninguna parte: if + presente simple, presente simple.',
    },
    {
      id: 'a2-m7-l1-ex4',
      type: 'reorder',
      concept: 'zero conditional',
      difficulty: 2,
      prompt: 'Ordena la frase:',
      promptTranslation: 'Si no duermes, te sientes cansado.',
      correctAnswer: "If you don't sleep, you feel tired.",
      words: ['If', 'you', "don't", 'sleep,', 'you', 'feel', 'tired.'],
      explanation: 'Condición (if you don\'t sleep) + resultado en presente simple (you feel tired).',
    },
    {
      id: 'a2-m7-l1-ex5',
      type: 'match',
      concept: 'zero conditional',
      difficulty: 3,
      prompt: 'Relaciona cada condición con su resultado.',
      promptTranslation: 'Match each condition with its result.',
      correctAnswer: '',
      pairs: [
        { left: 'If you heat ice,', right: 'it melts.' },
        { left: 'If the sun rises,', right: 'it gets light.' },
        { left: "If I drink coffee at night,", right: "I don't sleep well." },
        { left: 'If you freeze water,', right: 'it becomes ice.' },
        { left: "If she doesn't eat,", right: 'she gets hungry.' },
      ],
      explanation: 'En cada par, la primera parte es la condición (if + presente simple) y la segunda el resultado (presente simple).',
    },
    {
      id: 'a2-m7-l1-ex6',
      type: 'translate',
      concept: 'zero conditional',
      difficulty: 3,
      prompt: 'Traduce: "Si calientas agua, hierve."',
      correctAnswer: 'If you heat water, it boils.',
      acceptedAnswers: ['If you heat water, it boils', 'if you heat water, it boils.', 'If you heat water it boils.'],
      acceptApproximate: true,
      explanation: '"Si calientas agua" = if you heat water; "hierve" = it boils (presente simple).',
    },
    {
      id: 'a2-m7-l1-ex7',
      type: 'error_correction',
      concept: 'zero conditional',
      difficulty: 3,
      prompt: 'Corrige el error: "If you will heat water, it boils."',
      correctAnswer: 'If you heat water, it boils.',
      acceptedAnswers: ['If you heat water, it boils', 'if you heat water, it boils.'],
      acceptApproximate: true,
      explanation: 'En el zero conditional, la parte con "if" usa presente simple, nunca "will".',
    },
    {
      id: 'a2-m7-l1-ex8',
      type: 'select_correct',
      concept: 'zero conditional',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'Si llueve, las calles se mojan.',
      correctAnswer: 'If it rains, the streets get wet.',
      options: ['If it rains, the streets get wet.', 'If it will rain, the streets get wet.', 'If it rain, the streets gets wet.'],
      explanation: 'La if-clause lleva presente simple (rains) y el resultado también (get wet, con "the streets" plural).',
    },
    {
      id: 'a2-m7-l1-ex9',
      type: 'translate',
      concept: 'zero conditional',
      difficulty: 4,
      prompt: 'Traduce: "Si no duermo, me siento cansado."',
      correctAnswer: "If I don't sleep, I feel tired.",
      acceptedAnswers: ["If I don't sleep, I feel tired", "If I don't sleep, I feel tired.", 'If I do not sleep, I feel tired.'],
      acceptApproximate: true,
      explanation: '"Si no duermo" = if I don\'t sleep (negativo con don\'t); "me siento cansado" = I feel tired.',
    },
    {
      id: 'a2-m7-l1-ex10',
      type: 'reorder',
      concept: 'zero conditional',
      difficulty: 4,
      prompt: 'Ordena la frase (orden inverso):',
      promptTranslation: 'El agua hierve si la calientas.',
      correctAnswer: 'Water boils if you heat it.',
      words: ['Water', 'boils', 'if', 'you', 'heat', 'it.'],
      explanation: 'El orden puede invertirse: resultado (Water boils) + if + condición (you heat it).',
    },
  ],
  miniTest: [
    {
      id: 'a2-m7-l1-mt1',
      type: 'multiple_choice',
      concept: 'zero conditional',
      difficulty: 1,
      prompt: 'Completa: "If it rains, the streets ___ wet."',
      promptTranslation: 'Si llueve, las calles se mojan.',
      correctAnswer: 'get',
      options: ['get', 'gets', 'will get'],
      explanation: '"The streets" es plural → get (sin -s). En el zero conditional usamos presente simple.',
    },
    {
      id: 'a2-m7-l1-mt2',
      type: 'fill_blank',
      concept: 'zero conditional',
      difficulty: 2,
      prompt: 'Completa: "If you ___ water, it boils." (calientas)',
      correctAnswer: 'heat',
      acceptedAnswers: ['heat', 'Heat'],
      explanation: '"If you heat water" = si calientas agua. El verbo con "you" no lleva -s.',
    },
    {
      id: 'a2-m7-l1-mt3',
      type: 'true_false',
      concept: 'zero conditional',
      difficulty: 2,
      prompt: '"The zero conditional is used for things that are always true."',
      promptTranslation: 'El zero conditional se usa para cosas que siempre son ciertas.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. El zero conditional expresa hechos generales y verdades que siempre ocurren.',
    },
    {
      id: 'a2-m7-l1-mt4',
      type: 'translate',
      concept: 'zero conditional',
      difficulty: 3,
      prompt: 'Traduce: "Si ella estudia, recuerda las palabras."',
      correctAnswer: 'If she studies, she remembers the words.',
      acceptedAnswers: ['If she studies, she remembers the words', 'If she studies she remembers the words.'],
      acceptApproximate: true,
      explanation: 'Con "she" los verbos llevan -s: studies y remembers. → If she studies, she remembers the words.',
    },
    {
      id: 'a2-m7-l1-mt5',
      type: 'error_correction',
      concept: 'zero conditional',
      difficulty: 4,
      prompt: 'Corrige el error: "If it rains, will the streets get wet."',
      correctAnswer: 'If it rains, the streets get wet.',
      acceptedAnswers: ['If it rains, the streets get wet', 'if it rains, the streets get wet.'],
      acceptApproximate: true,
      explanation: 'En el zero conditional no usamos "will". El resultado va en presente simple: the streets get wet.',
    },
  ],
  reviewItems: ['a1-m5-l1'],
  prerequisites: ['a1-m5-l1'],
}
