import type { Lesson } from '../../types'

export const lesson23Countries: Lesson = {
  id: 'a1-m2-l3',
  moduleId: 'm2-personal-information',
  order: 2,
  title: 'Países y nacionalidades (Countries & Nationalities)',
  objective: 'Aprender a decir de dónde eres y tu nacionalidad en inglés.',
  explanation_es: `Para decir de dónde eres, en inglés usamos dos estructuras distintas:

1. **"I am from + país."** (Soy DE [país]) — Origen: dónde naciste o vives.
2. **"I am + nacionalidad."** (Soy [nacionalidad]) — Gentilicio/adjetivo de nacionalidad.

Ejemplos:
- **"I am from Spain."** = Soy de España.
- **"I am Spanish."** = Soy español/española.
- **"She is from Mexico. She is Mexican."** = Ella es de México. Es mexicana.

⚠️ MUY IMPORTANTE para hispanohablantes:

- En español "España" y "español" se confunden con facilidad, pero en inglés son palabras DISTINTAS:
- **Spain / España** (sustantivo, país) — Dice DÓNDE.
- **Spanish / español, española, idioma** (adjetivo/sustantivo de nacionalidad) — Dice QUÉ o QUIÉNES.

NO digas **"I am Spain"** (= Soy España, el país). Es absurdo.

Tampoco digas **"I am from Spanish"** — nunca pones la nacionalidad después de "from".

**Patrones de las nacionalidades en inglés:**

Las nacionalidades tienen terminaciones que conviene reconocer:

- **-ish**: Spanish (español), English (inglés), British (británico), Irish (irlandés), Polish (polaco), Turkish (turco)
- **-an / -ian**: Mexican (mexicano), German (alemán), Italian (italiano), Brazilian (brasileño), Indian (indio), American (americano/estadounidense), Russian (ruso)
- **-ese**: Japanese (japonés), Chinese (chino), Portuguese (portugués), Vietnamese (vietnamita)
- **-i**: Israeli (israelí), Pakistani (paquistaní), Iraqi (iraquí)
- **Irregulares**: French (francés, de France), Dutch (holandés, de Netherlands), Greek (griego, de Greece)

**Vocabulario clave:**
- country = país
- from = de (origen)
- nationality = nacionalidad
- where (¿dónde?)`,
  examples: [
    { english: 'I am from Spain.', spanish: 'Soy de España. / Soy de España.', note: 'from + país' },
    { english: 'I am Spanish.', spanish: 'Soy español/española.', note: 'to be + nacionalidad' },
    { english: 'She is from Mexico. She is Mexican.', spanish: 'Ella es de México. Es mexicana.' },
    { english: 'He is from Italy. He is Italian.', spanish: 'Él es de Italia. Es italiano.' },
    { english: 'They are from Brazil. They are Brazilian.', spanish: 'Ellos son de Brasil. Son brasileños.' },
    { english: 'We are from Japan. We are Japanese.', spanish: 'Somos de Japón. Somos japoneses.' },
    { english: 'My friend is from France. She is French.', spanish: 'Mi amiga es de Francia. Es francesa.' },
    { english: 'John is from the USA. He is American.', spanish: 'John es de Estados Unidos. Es estadounidense.' },
  ],
  rule: `**Regla general:**

1. **Origen** (de dónde eres): **"I am from + país."**
   - Ej: "I am from Spain." / "She is from Italy." / "They are from Brazil."

2. **Nacionalidad** (qué eres): **"I am + nacionalidad."**
   - Ej: "I am Spanish." / "She is Italian." / "They are Brazilian."

3. **Nunca** des lugares: "I am Spain", "I am Spanish", "I am from Spanish". La estructura correcta: "from + país" O "adjetivo de nacionalidad".

4. **Países y nacionalidades son palabras DISTINTAS**: Spain (país) ≠ Spanish (nacionalidad). Mexico ≠ Mexican. Italy ≠ Italian.

5. **Patrones de nacionalidades** (terminaciones):
   - **-ish**: Spanish, English, Irish, British, Turkish, Polish
   - **-an / -ian**: Mexican, American, German, Italian, Brazilian, Indian, Russian
   - **-ese**: Japanese, Chinese, Portuguese, Vietnamese
   - **-i**: Israeli, Pakistani, Iraqi
   - Irregulares: French (France), Dutch (Netherlands), Greek (Greece).`,
  commonMistakes: [
    { wrong: '❌ I am Spain.', correct: '✅ I am from Spain. (o "I am Spanish.")', explanation: '"Spain" es el PAÍS, no la nacionalidad. Para origen decimos "from + país"; para nacionalidad, el ADJETIVO (Spanish).' },
    { wrong: '❌ I am from Spanish.', correct: '✅ I am from Spain. (origen) O ✅ I am Spanish. (nacionalidad)', explanation: 'Después de "from" va un país, no una nacionalidad.' },
    { wrong: '❌ I am of Spain.', correct: '✅ I am from Spain.', explanation: 'En inglés NO se usa "of" para el origen. Se usa "from".' },
    { wrong: '❌ I am mexican from Mexico.', correct: '✅ I am from Mexico. / I am Mexican.', explanation: 'No necesitas repetir ambas. Basta con UNA estructura: "from Mexico" (origen) o "Mexican" (nacionalidad).' },
    { wrong: '❌ They are from Mexican.', correct: '✅ They are from Mexico.', explanation: 'Tras "from" va el país (Mexico), no la nacionalidad (Mexican).' },
  ],
  vocabulary: [
    { word: 'Spain', translation_es: 'España', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'I am from Spain.', exampleTranslation: 'Soy de España.' },
    { word: 'Spanish', translation_es: 'español, española', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'I am Spanish.', exampleTranslation: 'Soy español.' },
    { word: 'Mexico', translation_es: 'México', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'She is from Mexico.', exampleTranslation: 'Ella es de México.' },
    { word: 'Mexican', translation_es: 'mexicano, mexicana', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'She is Mexican.', exampleTranslation: 'Ella es mexicana.' },
    { word: 'England', translation_es: 'Inglaterra', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'He is from England.', exampleTranslation: 'Él es de Inglaterra.' },
    { word: 'English', translation_es: 'inglés, inglesa', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'He is English.', exampleTranslation: 'Él es inglés.' },
    { word: 'USA', translation_es: 'Estados Unidos', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'I am from the USA.', exampleTranslation: 'Soy de Estados Unidos.' },
    { word: 'American', translation_es: 'estadounidense, americano/a', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'She is American.', exampleTranslation: 'Ella es estadounidense.' },
    { word: 'Italy', translation_es: 'Italia', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'We are from Italy.', exampleTranslation: 'Somos de Italia.' },
    { word: 'Italian', translation_es: 'italiano, italiana', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'We are Italian.', exampleTranslation: 'Somos italianos.' },
    { word: 'France', translation_es: 'Francia', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'My friend is from France.', exampleTranslation: 'Mi amigo es de Francia.' },
    { word: 'French', translation_es: 'francés, francesa', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'She is French.', exampleTranslation: 'Ella es francesa.' },
    { word: 'Germany', translation_es: 'Alemania', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'He is from Germany.', exampleTranslation: 'Él es de Alemania.' },
    { word: 'German', translation_es: 'alemán, alemana', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'He is German.', exampleTranslation: 'Él es alemán.' },
    { word: 'Japan', translation_es: 'Japón', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'They are from Japan.', exampleTranslation: 'Ellos son de Japón.' },
    { word: 'Japanese', translation_es: 'japonés, japonesa', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'They are Japanese.', exampleTranslation: 'Ellos son japoneses.' },
    { word: 'Brazil', translation_es: 'Brasil', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'I am from Brazil.', exampleTranslation: 'Soy de Brasil.' },
    { word: 'Brazilian', translation_es: 'brasileño, brasileña', level: 'A1', category: 'nationalities', partOfSpeech: 'adjective', example: 'I am Brazilian.', exampleTranslation: 'Soy brasileño.' },
    { word: 'country', translation_es: 'país', level: 'A1', category: 'countries', partOfSpeech: 'noun', example: 'What country are you from?', exampleTranslation: '¿De qué país eres?' },
    { word: 'from', translation_es: 'de (origen)', level: 'A1', category: 'countries', partOfSpeech: 'preposition', example: 'I am from Spain.', exampleTranslation: 'Soy de España.' },
  ],
  grammarPoints: [
    {
      id: 'gp-from-country-vs-nationality',
      level: 'A1',
      name: 'I am from + country | I am + nationality',
      explanation_es: 'Hay dos maneras de expresar origen/nacionalidad: (1) Origen: "I am from + país" (I am from Spain). (2) Nacionalidad: "I am + adjetivo de nacionalidad" (I am Spanish). País y nacionalidad son palabras distintas: Spain ≠ Spanish. Nunca digas "I am Spain" ni "I am from Spanish".',
      formula: 'I am from + country | I am + nationality adjective',
      examples: [
        'I am from Spain. / I am Spanish.',
        'She is from Mexico. / She is Mexican.',
        'They are from Brazil. / They are Brazilian.',
      ],
      commonMistakes: [
        'Decir "I am Spain" en vez de "I am from Spain" o "I am Spanish".',
        'Usar una nacionalidad tras "from": "I am from Spanish" → "I am from Spain".',
      ],
    },
  ],
  exercises: [
    {
      id: 'a1-m2-l3-ex1',
      type: 'multiple_choice',
      concept: 'origin country',
      difficulty: 1,
      prompt: 'Completa: "I am ___ Spain." (origen)',
      promptTranslation: 'Complete: I am ___ Spain.',
      correctAnswer: 'from',
      options: ['from', 'of', 'in', 'to'],
      explanation: 'Para decir el origen (de dónde eres) usamos "from". → I am from Spain.',
    },
    {
      id: 'a1-m2-l3-ex2',
      type: 'multiple_choice',
      concept: 'country vs nationality',
      difficulty: 1,
      prompt: 'Elige la frase correcta para decir "Soy de Italia / Soy italiano".',
      promptTranslation: 'Choose the correct sentence to say your origin/nationality (Italy).',
      correctAnswer: 'I am from Italy. / I am Italian.',
      options: ['I am Italy.', 'I am from Italian.', 'I am from Italy. / I am Italian.', 'I am of Italy.'],
      explanation: 'Las dos maneras correctas: "I am from Italy" (origen) o "I am Italian" (nacionalidad). Nunca "I am Italy".',
    },
    {
      id: 'a1-m2-l3-ex3',
      type: 'match',
      concept: 'country ↔ nationality',
      difficulty: 2,
      prompt: 'Relaciona cada país con su nacionalidad.',
      promptTranslation: 'Match each country with its nationality.',
      correctAnswer: '',
      pairs: [
        { left: 'Spain', right: 'Spanish' },
        { left: 'Mexico', right: 'Mexican' },
        { left: 'Italy', right: 'Italian' },
        { left: 'Japan', right: 'Japanese' },
        { left: 'Brazil', right: 'Brazilian' },
        { left: 'France', right: 'French' },
      ],
      explanation: 'Patrones: -ish (Spanish), -an/-ian (Mexican, Italian, Brazilian), -ese (Japanese), e irregular (French).',
    },
    {
      id: 'a1-m2-l3-ex4',
      type: 'error_correction',
      concept: 'have vs be for nationality',
      difficulty: 2,
      prompt: 'Corrige el error: "I am Spain."',
      correctAnswer: 'I am from Spain.',
      acceptedAnswers: ["I'm from Spain", 'I am from Spain.', "I'm from Spain.", 'I am Spanish', "I'm Spanish"],
      acceptApproximate: true,
      explanation: '"Spain" es el PAÍS, no la nacionalidad. Forma correcta: "I am from Spain" (origen) o "I am Spanish" (nacionalidad).',
    },
    {
      id: 'a1-m2-l3-ex5',
      type: 'error_correction',
      concept: 'from + adjective',
      difficulty: 2,
      prompt: 'Corrige: "She is from Mexican."',
      correctAnswer: 'She is from Mexico.',
      acceptedAnswers: ["She's from Mexico.", 'She is from Mexico', 'She is Mexican', "She's Mexican"],
      acceptApproximate: true,
      explanation: 'Después de "from" va un país (Mexico), no una nacionalidad (Mexican). Solución: "She is from Mexico." o "She is Mexican."',
    },
    {
      id: 'a1-m2-l3-ex6',
      type: 'fill_blank',
      concept: 'from + country',
      difficulty: 2,
      prompt: 'Completa: "I am from ___" (Francia en inglés).',
      promptTranslation: 'Complete with the country name (France).',
      correctAnswer: 'France',
      explanation: 'Francia en inglés es "France". La nacionalidad sería "French": "I am from France" o "I am French".',
    },
    {
      id: 'a1-m2-l3-ex7',
      type: 'translate',
      concept: 'translate origin sentence',
      difficulty: 3,
      prompt: 'Traduce: "Ella es de México. Es mexicana."',
      correctAnswer: 'She is from Mexico. She is Mexican.',
      acceptedAnswers: ["She's from Mexico. She's Mexican.", 'She is from Mexico. She is Mexican', "She's from Mexico. She's Mexican", 'She is from Mexico. She is Mexican.'],
      acceptApproximate: true,
      explanation: 'Estructura: "She is from Mexico" (origen) + "She is Mexican" (nacionalidad). También válidas las contracciones.',
    },
    {
      id: 'a1-m2-l3-ex8',
      type: 'fill_blank',
      concept: 'nationality adjective',
      difficulty: 3,
      prompt: 'Completa con la nacionalidad: "John is from the USA. He is ___." (estadounidense)',
      promptTranslation: 'Fill in the nationality.',
      correctAnswer: 'American',
      explanation: 'La nacionalidad de USA es "American". → He is American.',
    },
    {
      id: 'a1-m2-l3-ex9',
      type: 'true_false',
      concept: 'pattern -ese',
      difficulty: 3,
      prompt: 'Verdadero o falso: "Japanese" es la nacionalidad de alguien de Japón.',
      promptTranslation: 'True or false: "Japanese" is the nationality of someone from Japan.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'cierto'],
      explanation: 'VERDADERO. Japanese = japonés/japonesa, la nacionalidad de Japón (Japan). Sigue el patrón -ese.',
    },
    {
      id: 'a1-m2-l3-ex10',
      type: 'reorder',
      concept: 'from + country order',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase correcta.',
      promptTranslation: 'Order the words to form a correct sentence.',
      correctAnswer: 'We are from Brazil.',
      words: ['We', 'are', 'from', 'Brazil.'],
      explanation: 'Orden: Sujeto (We) + verbo (are) + from + país. → We are from Brazil.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m2-l3-mt1',
      type: 'multiple_choice',
      concept: 'from + country',
      difficulty: 1,
      prompt: 'Completa: "She is ___ Italy."',
      promptTranslation: 'Complete: She is ___ Italy.',
      correctAnswer: 'from',
      options: ['from', 'of', 'in', 'is'],
      explanation: 'Origen = "from + país". → She is from Italy.',
    },
    {
      id: 'a1-m2-l3-mt2',
      type: 'error_correction',
      concept: 'I am [country]',
      difficulty: 2,
      prompt: 'Corrige: "I am Mexico."',
      correctAnswer: 'I am from Mexico.',
      acceptedAnswers: ["I'm from Mexico.", 'I am from Mexico', "I'm from Mexico", 'I am Mexican', "I'm Mexican"],
      acceptApproximate: true,
      explanation: '"Mexico" es el país. Decimos "I am from Mexico" (origen) o "I am Mexican" (nacionalidad).',
    },
    {
      id: 'a1-m2-l3-mt3',
      type: 'match',
      concept: 'country ↔ nationality',
      difficulty: 2,
      prompt: 'Relaciona cada país con su nacionalidad.',
      promptTranslation: 'Match each country with its nationality.',
      correctAnswer: '',
      pairs: [
        { left: 'Germany', right: 'German' },
        { left: 'France', right: 'French' },
        { left: 'England', right: 'English' },
        { left: 'USA', right: 'American' },
        { left: 'China', right: 'Chinese' },
      ],
      explanation: 'Patrones: -an (German, American), -ish (English, Irish), -ese (Chinese) e irregular (French).',
    },
    {
      id: 'a1-m2-l3-mt4',
      type: 'translate',
      concept: 'translate country sentence',
      difficulty: 3,
      prompt: 'Traduce: "Somos de Japón."',
      correctAnswer: 'We are from Japan.',
      acceptedAnswers: ["We're from Japan.", 'We are from Japan', "We're from Japan", 'We are from Japan.', "We're from Japan."],
      acceptApproximate: true,
      explanation: 'Plural + origen: "We are from Japan" (nosotros somos de Japón).',
    },
    {
      id: 'a1-m2-l3-mt5',
      type: 'multiple_choice',
      concept: 'correct from phrase',
      difficulty: 2,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Choose the correct sentence.',
      correctAnswer: 'I am from Spanish.',
      options: ['I am Spain.', 'I am from Spanish.', 'I am of Spain.'],
      explanation: 'Trampa: NINGUNA es correcta. Las válidas son: "I am from Spain" o "I am Spanish". (Todas las opciones del error: país como adjetivo, nacionalidad tras from, "of" en lugar de "from".)',
    },
  ],
  reviewItems: ['a1-m2-l2'],
  prerequisites: ['a1-m2-l2'],
}