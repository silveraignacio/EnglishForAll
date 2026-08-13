import type { Lesson } from '../../types'

export const lesson41Family: Lesson = {
  id: 'a1-m4-l1',
  moduleId: 'm4-family-possessives',
  order: 0,
  title: 'Miembros de la familia',
  objective: 'Aprender el vocabulario de los miembros de la familia en inglés.',
  explanation_es: `La familia es uno de los temas más comunes en las conversaciones. En español tenemos muchas palabras específicas (padre, madre, hermano, hermana, abuelo, abuela...). En inglés ocurre lo mismo, pero algunas palabras son distintas.

Aquí tienes el vocabulario esencial de la familia:

**Madre y padre:**
- **father** = padre (también: **dad** = papá)
- **mother** = madre (también: **mom** = mamá)
- **parents** = padre y madre (los dos)

**Hijos e hijos de padres:**
- **son** = hijo (varón)
- **daughter** = hija (mujer)
- **children** = hijos / niños (plural, sin importar el género)
- **brother** = hermano
- **sister** = hermana

**Pareja:**
- **husband** = esposo / marido
- **wife** = esposa / mujer

**Abuelos:**
- **grandfather** = abuelo
- **grandmother** = abuela
- **grandparents** = abuelos (los dos)

**Tíos y primos:**
- **uncle** = tío
- **aunt** = tía
- **cousin** = primo / prima (en inglés, ¡la misma palabra sirve para hombre y mujer!)

Y la palabra general:
- **family** = familia

**Pronunciación** (atención especial para hispanohablantes):
- **father** /ˈfɑːðər/ — NO suena como "fat-her"; la "th" suena entre los dientes (como la "z" suave española).
- **mother** /ˈmʌðər/ — misma "th" entre dientes.
- **daughter** /ˈdɔːtər/ — la "gh" NO suena nada, es muda; se pronuncia "dot-er".
- **son** /sʌn/ — suena corto, casi como "san".
- **sister** /ˈsɪstər/ — "sis-ter".
- **brother** /ˈbrʌðər/ — "bro-ther" (con "th").

Fíjate que en inglés **cousin** sirve para primo Y prima. No existe "prima" como palabra separada. Si necesitas especificar el género, dirías "male cousin" o "female cousin", aunque en la práctica casi nunca se hace.`,
  examples: [
    { english: 'My father is 50 years old.', spanish: 'Mi padre tiene 50 años.', note: '"years old" = años (de edad).' },
    { english: 'She has a brother.', spanish: 'Ella tiene un hermano.', note: '"has" = tiene.' },
    { english: 'My parents live in Madrid.', spanish: 'Mis padres viven en Madrid.', note: '"parents" = los dos padres.' },
    { english: 'I have two sisters.', spanish: 'Tengo dos hermanas.' },
    { english: 'His grandfather is 80.', spanish: 'Su abuelo tiene 80 años.' },
    { english: 'We have three uncles.', spanish: 'Tenemos tres tíos.' },
    { english: 'My cousin is 20.', spanish: 'Mi primo tiene 20 años.', note: '"cousin" vale para primo o prima.' },
    { english: 'Her daughter is a doctor.', spanish: 'Su hija es médica.' },
  ],
  rule: `Vocabulario clave de la familia:

| Inglés       | Español         |
|--------------|-----------------|
| father (dad) | padre (papá)   |
| mother (mom) | madre (mamá)   |
| parents      | padres (los dos)|
| son          | hijo            |
| daughter     | hija            |
| children     | hijos / niños   |
| brother      | hermano         |
| sister       | hermana         |
| husband      | esposo          |
| wife         | esposa          |
| grandfather  | abuelo          |
| grandmother  | abuela          |
| grandparents | abuelos         |
| uncle        | tío             |
| aunt         | tía             |
| cousin       | primo / prima   |
| family       | familia         |

Pronunciación difícil: father, mother, brother usan "th" (/ð/) — el sonido se hace poniendo la lengua entre los dientes. daughter tiene la "gh" muda.`,
  commonMistakes: [
    { wrong: '❌ Pronunciar "father" como si fuera "fat-her".', correct: '✅ "father" /ˈfɑːðər/ — la "th" suena con la lengua entre los dientes.', explanation: 'En inglés la "th" NO se lee como dos letras separadas. Hay un solo sonido /ð/ (entre dientes), parecido a la "z" suave española.' },
    { wrong: '❌ Pronunciar "daughter" como "daw-ghe-ter".', correct: '✅ "daughter" /ˈdɔːtər/ — la "gh" es muda.', explanation: 'En "daughter", la combinación "gh" no se pronuncia. Suena "dot-er" aproximadamente.' },
    { wrong: '❌ Confundir "parents" con "parientes".', correct: '✅ "parents" = padre y madre (los dos). "relatives" = parientes (familia extendida).', explanation: 'El español "parientes" se refiere a la familia extendida (tíos, primos...). En inglés eso es "relatives". "Parents" solo significa padre y madre.' },
    { wrong: '❌ Usar la palabra inglesa "familiar" para referirse a un familiar (persona).', correct: '✅ Usa "family member" o "relative".', explanation: 'En inglés "familiar" es un adjetivo que significa "conocido" o "habituado", NO una persona de la familia. Para referirte a una persona de tu familia di "relative" o "family member".' },
    { wrong: '❌ Pensar que "cousin" es solo masculino.', correct: '✅ "cousin" sirve para primo Y prima.', explanation: 'En inglés "cousin" no cambia de género. Es primo o prima; el contexto lo aclara.' },
  ],
  vocabulary: [
    { word: 'father', translation_es: 'padre', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My father is 50 years old.', exampleTranslation: 'Mi padre tiene 50 años.', phonetic: '/ˈfɑːðər/' },
    { word: 'mother', translation_es: 'madre', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My mother is a teacher.', exampleTranslation: 'Mi madre es profesora.', phonetic: '/ˈmʌðər/' },
    { word: 'dad', translation_es: 'papá', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My dad is funny.', exampleTranslation: 'Mi papá es divertido.', phonetic: '/dæd/' },
    { word: 'mom', translation_es: 'mamá', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My mom is nice.', exampleTranslation: 'Mi mamá es amable.', phonetic: '/mɒm/' },
    { word: 'parents', translation_es: 'padres (los dos)', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My parents live in Madrid.', exampleTranslation: 'Mis padres viven en Madrid.', phonetic: '/ˈpeərənts/' },
    { word: 'son', translation_es: 'hijo (varón)', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'Her son is 10.', exampleTranslation: 'Su hijo tiene 10 años.', phonetic: '/sʌn/' },
    { word: 'daughter', translation_es: 'hija (mujer)', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My daughter is a doctor.', exampleTranslation: 'Mi hija es médica.', phonetic: '/ˈdɔːtər/' },
    { word: 'children', translation_es: 'hijos / niños', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'They have three children.', exampleTranslation: 'Tienen tres hijos.', phonetic: '/ˈtʃɪldrən/' },
    { word: 'brother', translation_es: 'hermano', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'I have a brother.', exampleTranslation: 'Tengo un hermano.', phonetic: '/ˈbrʌðər/' },
    { word: 'sister', translation_es: 'hermana', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'I have two sisters.', exampleTranslation: 'Tengo dos hermanas.', phonetic: '/ˈsɪstər/' },
    { word: 'husband', translation_es: 'esposo', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'Her husband is kind.', exampleTranslation: 'Su esposo es amable.', phonetic: '/ˈhʌzbənd/' },
    { word: 'wife', translation_es: 'esposa', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'His wife is friendly.', exampleTranslation: 'Su esposa es amable.', phonetic: '/waɪf/' },
    { word: 'grandfather', translation_es: 'abuelo', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My grandfather is 80.', exampleTranslation: 'Mi abuelo tiene 80 años.', phonetic: '/ˈɡrænfɑːðər/' },
    { word: 'grandmother', translation_es: 'abuela', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My grandmother is 78.', exampleTranslation: 'Mi abuela tiene 78 años.', phonetic: '/ˈɡrænmʌðər/' },
    { word: 'grandparents', translation_es: 'abuelos (los dos)', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My grandparents are kind.', exampleTranslation: 'Mis abuelos son amables.', phonetic: '/ˈɡrænpeərənts/' },
    { word: 'uncle', translation_es: 'tío', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My uncle lives in London.', exampleTranslation: 'Mi tío vive en Londres.', phonetic: '/ˈʌŋkəl/' },
    { word: 'aunt', translation_es: 'tía', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My aunt is a nurse.', exampleTranslation: 'Mi tía es enfermera.', phonetic: '/ɑːnt/' },
    { word: 'cousin', translation_es: 'primo / prima', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My cousin is 20.', exampleTranslation: 'Mi primo tiene 20 años.', phonetic: '/ˈkʌzən/' },
    { word: 'family', translation_es: 'familia', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'I love my family.', exampleTranslation: 'Amo a mi familia.', phonetic: '/ˈfæməli/' },
  ],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m4-l1-ex1',
      type: 'match',
      concept: 'family vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada palabra en inglés con su traducción al español.',
      promptTranslation: 'Match each English word with its Spanish translation.',
      correctAnswer: '',
      pairs: [
        { left: 'father', right: 'padre' },
        { left: 'mother', right: 'madre' },
        { left: 'brother', right: 'hermano' },
        { left: 'sister', right: 'hermana' },
        { left: 'son', right: 'hijo' },
        { left: 'daughter', right: 'hija' },
      ],
      explanation: 'father=padre, mother=madre, brother=hermano, sister=hermana, son=hijo, daughter=hija.',
    },
    {
      id: 'a1-m4-l1-ex2',
      type: 'multiple_choice',
      concept: 'family vocabulary',
      difficulty: 1,
      prompt: 'How do you say "abuela" in English?',
      promptTranslation: '¿Cómo se dice "abuela" en inglés?',
      correctAnswer: 'grandmother',
      options: ['grandfather', 'grandmother', 'aunt', 'uncle'],
      explanation: '"abuela" = grandmother. "abuelo" = grandfather, "tía" = aunt, "tío" = uncle.',
    },
    {
      id: 'a1-m4-l1-ex3',
      type: 'fill_blank',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: 'Completa: "My ___ is a doctor." (Mi padre es médico.)',
      promptTranslation: 'Complete: "My ___ is a doctor."',
      correctAnswer: 'father',
      acceptedAnswers: ['dad'],
      explanation: '"Mi padre" = my father (o my dad). → My father is a doctor.',
    },
    {
      id: 'a1-m4-l1-ex4',
      type: 'fill_blank',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: 'Completa: "We have three ___." (Tenemos tres tíos.)',
      promptTranslation: 'Complete: "We have three ___."',
      correctAnswer: 'uncles',
      explanation: '"tíos" = uncles (plural de uncle). → We have three uncles.',
    },
    {
      id: 'a1-m4-l1-ex5',
      type: 'multiple_choice',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: 'Which word is for "primo o prima"?',
      promptTranslation: '¿Qué palabra significa "primo o prima"?',
      correctAnswer: 'cousin',
      options: ['uncle', 'aunt', 'cousin', 'nephew'],
      explanation: 'En inglés "cousin" sirve tanto para primo como para prima (sin distinción de género).',
    },
    {
      id: 'a1-m4-l1-ex6',
      type: 'translate',
      concept: 'family vocabulary',
      difficulty: 3,
      prompt: 'Traduce: "Mi prima tiene 20 años."',
      correctAnswer: 'My cousin is 20 years old.',
      acceptedAnswers: ['My cousin is 20', 'My cousin is twenty years old', 'My cousin is 20 years old.'],
      acceptApproximate: true,
      explanation: '"prima" = cousin (la misma palabra que "primo"). "tiene 20 años" = is 20 years old. → My cousin is 20 years old.',
    },
    {
      id: 'a1-m4-l1-ex7',
      type: 'true_false',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: '"children" significa "hijos / niños" (plural).',
      promptTranslation: '"children" means "hijos / niños" (plural).',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE'],
      explanation: 'Verdadero. "children" es el plural irregular de "child" (niño/a). Significa "hijos" o "niños" en general.',
    },
    {
      id: 'a1-m4-l1-ex8',
      type: 'error_correction',
      concept: 'family vocabulary',
      difficulty: 3,
      prompt: 'Corrige: "Mis padres viven en Madrid." escribir en inglés: "My parents lives in Madrid."',
      correctAnswer: 'My parents live in Madrid.',
      acceptedAnswers: ['my parents live in Madrid', 'My parents live in Madrid.'],
      acceptApproximate: true,
      explanation: 'Con "parents" (plural) el verbo no lleva "s": live (no "lives"). → My parents live in Madrid.',
    },
    {
      id: 'a1-m4-l1-ex9',
      type: 'match',
      concept: 'family vocabulary',
      difficulty: 3,
      prompt: 'Relaciona cada palabra con su traducción.',
      promptTranslation: 'Match each word with its translation.',
      correctAnswer: '',
      pairs: [
        { left: 'grandparents', right: 'abuelos (los dos)' },
        { left: 'parents', right: 'padres (los dos)' },
        { left: 'children', right: 'hijos / niños' },
        { left: 'cousin', right: 'primo / prima' },
        { left: 'wife', right: 'esposa' },
        { left: 'husband', right: 'esposo' },
      ],
      explanation: 'grandparents=abuelos, parents=padres, children=hijos, cousin=primo/prima, wife=esposa, husband=esposo.',
    },
    {
      id: 'a1-m4-l1-ex10',
      type: 'translate',
      concept: 'family vocabulary',
      difficulty: 4,
      prompt: 'Traduce: "Su abuelo tiene 80 años."',
      correctAnswer: 'His grandfather is 80 years old.',
      acceptedAnswers: ['His grandfather is 80', 'His grandfather is eighty years old', 'Her grandfather is 80 years old', 'Her grandfather is 80'],
      acceptApproximate: true,
      explanation: '"Su abuelo" (de él) = his grandfather. "tiene 80 años" = is 80 years old. → His grandfather is 80 years old. (Si es "de ella", también valdría "Her grandfather...").',
    },
  ],
  miniTest: [
    {
      id: 'a1-m4-l1-mt1',
      type: 'multiple_choice',
      concept: 'family vocabulary',
      difficulty: 1,
      prompt: 'How do you say "madre" in English?',
      promptTranslation: '¿Cómo se dice "madre" en inglés?',
      correctAnswer: 'mother',
      options: ['father', 'mother', 'sister', 'aunt'],
      explanation: '"madre" = mother.',
    },
    {
      id: 'a1-m4-l1-mt2',
      type: 'fill_blank',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: 'Completa: "My ___ is 78." (Mi abuela tiene 78 años.)',
      promptTranslation: 'Complete: "My ___ is 78."',
      correctAnswer: 'grandmother',
      explanation: '"abuela" = grandmother. → My grandmother is 78.',
    },
    {
      id: 'a1-m4-l1-mt3',
      type: 'multiple_choice',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: 'Which word means "hija"?',
      promptTranslation: '¿Qué palabra significa "hija"?',
      correctAnswer: 'daughter',
      options: ['son', 'daughter', 'sister', 'cousin'],
      explanation: '"hija" = daughter. "son" = hijo, "sister" = hermana, "cousin" = primo/prima.',
    },
    {
      id: 'a1-m4-l1-mt4',
      type: 'translate',
      concept: 'family vocabulary',
      difficulty: 3,
      prompt: 'Traduce: "Tenemos tres tíos."',
      correctAnswer: 'We have three uncles.',
      acceptedAnswers: ['We have 3 uncles', 'We have three uncles', 'we have three uncles.'],
      acceptApproximate: true,
      explanation: '"Tenemos" = We have. "tres tíos" = three uncles. → We have three uncles.',
    },
    {
      id: 'a1-m4-l1-mt5',
      type: 'true_false',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: '"parents" significa "parientes" (familia extendida: tíos, primos...).',
      promptTranslation: '"parents" means "relatives" (extended family: uncles, cousins...).',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Falso. "parents" = padre y madre. La familia extendida (tíos, primos...) se dice "relatives" en inglés.',
    },
  ],
  reviewItems: ['a1-m3-l4'],
  prerequisites: ['a1-m3-l4'],
}