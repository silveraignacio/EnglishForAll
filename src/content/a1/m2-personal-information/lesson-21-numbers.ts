import type { Lesson } from '../../types'

export const lesson21Numbers: Lesson = {
  id: 'a1-m2-l1',
  moduleId: 'm2-personal-information',
  order: 0,
  title: 'Números 0-100 (Numbers)',
  objective: 'Aprender los números del 0 al 100 en inglés y decir números de teléfono.',
  explanation_es: `Los números en inglés son esenciales para dar tu edad, tu número de teléfono, precios, horas y más. Vamos a aprenderlos en tres grupos.

**1. Números del 0 al 20** — estos hay que memorizarlos, no siguen ningún patrón:

- 0 zero, 1 one, 2 two, 3 three, 4 four, 5 five, 6 six, 7 seven, 8 eight, 9 nine, 10 ten
- 11 eleven, 12 twelve, 13 thirteen, 14 fourteen, 15 fifteen, 16 sixteen, 17 seventeen, 18 eighteen, 19 nineteen
- 20 twenty

**2. Decenas del 20 al 100 (multiplos de 10):** estos tienen terminación "-ty":

- 20 twenty, 30 thirty, 40 forty, 50 fifty, 60 sixty, 70 seventy, 80 eighty, 90 ninety, 100 one hundred

**3. Numeros compuestos:** entre decena y unidad se usa un GUION:

- 21 twenty-one, 35 thirty-five, 47 forty-seven, 68 sixty-eight, 82 eighty-two, 99 ninety-nine

**ATENCIÓN — -teen vs -ty (¡muy confuso para hispanohablantes!):**

Las terminaciones -teen (trece a diecinueve, "trece a diecinueve") y -ty (decenas, "veinte, treinta...") suenan muy parecidas, ¡pero significan cosas muy distintas!

- **thirteen** (/ˌθɜːrˈtiːn/) = 13 (trece) — acento en la **segunda** sílaba
- **thirty** (/ˈθɜːr.ti/) = 30 (treinta) — acento en la **primera** sílaba
- **fourteen** = 14 vs **forty** = 40
- **fifteen** = 15 vs **fifty** = 50
- **eighteen** = 18 vs **eighty** = 80

¡Memoriza la diferencia! Decir "thirty" cuando querías decir "thirteen" puede causar errores en edades, precios o cantidades.

**Números de teléfono:**

En inglés, los números de teléfono se dicen DÍGITO por DÍGITO, NO en grupos. Por ejemplo:

- El número **555-2187** se dice: "five, five, five, two, one, eight, seven"
- En el 0 solemos decir **"oh"** (como la letra O) o también "zero".
- El doble dígito se puede repetir: "55" = "five five" (también "double five").

**Vocabulario clave:**
- number = número
- phone = teléfono
- phone number = número de teléfono
- digit = dígito / cifra`,
  examples: [
    { english: 'I am twenty-five years old.', spanish: 'Tengo veinticinco años.', note: 'ages en years' },
    { english: 'My phone number is 555-3791.', spanish: 'Mi número de teléfono es 555-3791.', note: 'Se dice: "five, five, five, three, seven, nine, one".' },
    { english: 'Thirteen and thirty are different!', spanish: '¡13 y 30 son distintos!' },
    { english: 'The book costs forty dollars.', spanish: 'El libro cuesta cuarenta dólares.' },
    { english: 'How old are you? - I am eighteen.', spanish: '¿Cuántos años tienes? - Tengo dieciocho.', note: '"I am eighteen" = también válido sin "years old".' },
    { english: 'Two plus three is five.', spanish: 'Dos más tres es cinco.' },
    { english: 'It is one hundred percent correct.', spanish: 'Está cien por cien correcto.' },
  ],
  rule: `**Reglas de los números en inglés:**

1. **0-20**: se memorizan (zero, one, two, ..., twenty).
2. **Decenas** (20-100): terminan en **-ty**: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, (one) hundred. Ojo: **forty** se escribe SIN "u" (no es "fourty").
3. **Compuestos** (21-99): decena + guion + unidad. Ej: **twenty-one**, **thirty-five**, **ninety-nine**. SIEMPRE con guion.
4. **-teen** = 13-19 (trece a diecinueve). **-ty** = decenas (veinte, treinta...). Suenan parecidos, ¡pero distintos!
5. **Números de teléfono**: se dice cada DÍGITO por separado. El 0 suele decirse "oh" o "zero".`,
  commonMistakes: [
    { wrong: '❌ five-teen', correct: '✅ fifteen', explanation: '15 es "fifteen", NO "five-teen". Hay que memorizarlo; no sigue un patron regular.' },
    { wrong: '❌ twenty one (sin guion)', correct: '✅ twenty-one', explanation: 'Los numeros compuestos LLEVAN guion: twenty-one, thirty-five, forty-two.' },
    { wrong: '❌ fourty', correct: '✅ forty', explanation: '40 se escribe "forty", SIN "u" (aunque venga de "four"). Es una excepcion.' },
    { wrong: '❌ Confundir thirteen (13) y thirty (30)', correct: '✅ thirteen = 13; thirty = 30', explanation: '"Thirteen" tiene acento en la 2ª silaba; "thirty" en la 1ª. Practica escuchar la diferencia.' },
    { wrong: '❌ Decir el telefono "five hundred fifty-five..."', correct: '✅ Decir cada digito: "five, five, five..."', explanation: 'En los telefonos decimos DÍGITO por DÍGITO, no leemos el numero como cantidad.' },
  ],
  vocabulary: [
    { word: 'zero', translation_es: 'cero', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'My phone number starts with zero.', exampleTranslation: 'Mi número de teléfono empieza por cero.' },
    { word: 'one', translation_es: 'uno', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'I have one brother.', exampleTranslation: 'Tengo un hermano.' },
    { word: 'two', translation_es: 'dos', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'Two plus two is four.', exampleTranslation: 'Dos más dos son cuatro.' },
    { word: 'three', translation_es: 'tres', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'I have three children.', exampleTranslation: 'Tengo tres hijos.' },
    { word: 'five', translation_es: 'cinco', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'There are five books on the table.', exampleTranslation: 'Hay cinco libros en la mesa.' },
    { word: 'ten', translation_es: 'diez', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'I am ten years old.', exampleTranslation: 'Tengo diez años.' },
    { word: 'twelve', translation_es: 'doce', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'There are twelve months in a year.', exampleTranslation: 'Hay doce meses en un año.' },
    { word: 'thirteen', translation_es: 'trece', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'She is thirteen years old.', exampleTranslation: 'Ella tiene trece años.' },
    { word: 'fifteen', translation_es: 'quince', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'I am fifteen years old.', exampleTranslation: 'Tengo quince años.' },
    { word: 'eighteen', translation_es: 'dieciocho', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'He is eighteen.', exampleTranslation: 'Él tiene dieciocho años.' },
    { word: 'twenty', translation_es: 'veinte', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'There are twenty students in the class.', exampleTranslation: 'Hay veinte estudiantes en la clase.' },
    { word: 'thirty', translation_es: 'treinta', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'I am thirty years old.', exampleTranslation: 'Tengo treinta años.' },
    { word: 'forty', translation_es: 'cuarenta', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'The book costs forty euros.', exampleTranslation: 'El libro cuesta cuarenta euros.' },
    { word: 'fifty', translation_es: 'cincuenta', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'I have fifty dollars.', exampleTranslation: 'Tengo cincuenta dólares.' },
    { word: 'one hundred', translation_es: 'cien', level: 'A1', category: 'numbers', partOfSpeech: 'number', example: 'There are one hundred people here.', exampleTranslation: 'Hay cien personas aquí.' },
    { word: 'number', translation_es: 'número', level: 'A1', category: 'numbers', partOfSpeech: 'noun', example: 'What is your phone number?', exampleTranslation: '¿Cuál es tu número de teléfono?' },
    { word: 'phone', translation_es: 'teléfono', level: 'A1', category: 'numbers', partOfSpeech: 'noun', example: 'My phone is new.', exampleTranslation: 'Mi teléfono es nuevo.' },
    { word: 'phone number', translation_es: 'número de teléfono', level: 'A1', category: 'numbers', partOfSpeech: 'noun', example: 'What is your phone number?', exampleTranslation: '¿Cuál es tu número de teléfono?' },
  ],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m2-l1-ex1',
      type: 'multiple_choice',
      concept: 'numbers 0-20',
      difficulty: 1,
      prompt: '¿Cómo se dice "5" en inglés?',
      promptTranslation: 'How do you say "5" in English?',
      correctAnswer: 'five',
      options: ['four', 'five', 'six', 'fifteen'],
      explanation: '5 = five. No lo confundas con "fifteen" (15).',
    },
    {
      id: 'a1-m2-l1-ex2',
      type: 'multiple_choice',
      concept: 'numbers 0-20',
      difficulty: 1,
      prompt: '¿Cómo se dice "10" en inglés?',
      promptTranslation: 'How do you say "10" in English?',
      correctAnswer: 'ten',
      options: ['ten', 'tin', 'teen', 'twelve'],
      explanation: '10 = ten.',
    },
    {
      id: 'a1-m2-l1-ex3',
      type: 'match',
      concept: 'numbers 0-20 spelling',
      difficulty: 1,
      prompt: 'Relaciona cada número con su palabra en inglés.',
      promptTranslation: 'Match each number with its English word.',
      correctAnswer: '',
      pairs: [
        { left: '0', right: 'zero' },
        { left: '2', right: 'two' },
        { left: '7', right: 'seven' },
        { left: '12', right: 'twelve' },
        { left: '20', right: 'twenty' },
      ],
      explanation: '0 zero, 2 two, 7 seven, 12 twelve, 20 twenty. Los números básicos del 0 al 20 hay que memorizarlos.',
    },
    {
      id: 'a1-m2-l1-ex4',
      type: 'true_false',
      concept: '-teen vs -ty distinction',
      difficulty: 2,
      prompt: 'Verdadero o falso: "thirteen" significa 30.',
      promptTranslation: 'True or false: "thirteen" means 30.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'falso'],
      explanation: 'FALSO. "Thirteen" = 13. "Thirty" = 30. ¡Son palabras distintas! "Thirteen" suena con acento en la 2ª silaba.',
    },
    {
      id: 'a1-m2-l1-ex5',
      type: 'multiple_choice',
      concept: '-teen vs -ty',
      difficulty: 2,
      prompt: '¿Cuál significa 15?',
      promptTranslation: 'Which word means 15?',
      correctAnswer: 'fifteen',
      options: ['fifty', 'fifteen', 'five-teen', 'fifty-one'],
      explanation: '15 = fifteen. "Fifty" es 50, y "five-teen" no existe.',
    },
    {
      id: 'a1-m2-l1-ex6',
      type: 'multiple_choice',
      concept: 'tens pattern',
      difficulty: 2,
      prompt: '¿Cómo se escribe 40 en inglés?',
      promptTranslation: 'How do you spell 40 in English?',
      correctAnswer: 'forty',
      options: ['fourty', 'forty', 'forteen', 'fourty-one'],
      explanation: '40 se escribe "forty", SIN "u". Aunque viene de "four", esta excepción hay que memorizarla.',
    },
    {
      id: 'a1-m2-l1-ex7',
      type: 'fill_blank',
      concept: 'compound numbers',
      difficulty: 2,
      prompt: 'Completa con la palabra correcta: 35 → "thirty-___"',
      promptTranslation: 'Spell the number 35.',
      correctAnswer: 'five',
      explanation: '35 = thirty-five. Decena + guion + unidad.',
    },
    {
      id: 'a1-m2-l1-ex8',
      type: 'match',
      concept: 'compound numbers',
      difficulty: 3,
      prompt: 'Relaciona cada número con su palabra en inglés.',
      promptTranslation: 'Match each number with its English word.',
      correctAnswer: '',
      pairs: [
        { left: '21', right: 'twenty-one' },
        { left: '47', right: 'forty-seven' },
        { left: '63', right: 'sixty-three' },
        { left: '82', right: 'eighty-two' },
        { left: '99', right: 'ninety-nine' },
      ],
      explanation: 'Numeros compuestos: decena + guion + unidad. 21 twenty-one, 47 forty-seven, 63 sixty-three, 82 eighty-two, 99 ninety-nine.',
    },
    {
      id: 'a1-m2-l1-ex9',
      type: 'translate',
      concept: 'phone numbers',
      difficulty: 3,
      prompt: 'Traduce: "Mi número de teléfono es 555-2187."',
      correctAnswer: 'My phone number is 555-2187.',
      acceptedAnswers: ['My phone number is five five five two one eight seven', 'My phone number is 555-2187', 'My phone number is 555 2187'],
      acceptApproximate: true,
      explanation: '"phone number" = número de teléfono. Mencionar que al telefono se suele decir digito por digito: "five five five, two one eight seven".',
    },
    {
      id: 'a1-m2-l1-ex10',
      type: 'error_correction',
      concept: 'spelling forty',
      difficulty: 4,
      prompt: 'Corrige el error: "The book costs fourty dollars."',
      correctAnswer: 'The book costs forty dollars.',
      acceptedAnswers: ['The book costs forty dollars', 'The book costs forty dollars.'],
      acceptApproximate: true,
      explanation: '40 se escribe "forty", SIN "u" (no es "fourty"). Es una excepcion: aunque viene de "four", se escribe sin la "u".',
    },
  ],
  miniTest: [
    {
      id: 'a1-m2-l1-mt1',
      type: 'multiple_choice',
      concept: 'numbers 0-20',
      difficulty: 1,
      prompt: '¿Cómo se dice "12" en inglés?',
      promptTranslation: 'How do you say "12" in English?',
      correctAnswer: 'twelve',
      options: ['twelve', 'twen', 'twoteen', 'twenty-two'],
      explanation: '12 = twelve.',
    },
    {
      id: 'a1-m2-l1-mt2',
      type: 'multiple_choice',
      concept: '-teen vs -ty',
      difficulty: 2,
      prompt: '¿Cuál significa 30?',
      promptTranslation: 'Which means 30?',
      correctAnswer: 'thirty',
      options: ['thirteen', 'thirty', 'three-ty', 'thirty-one'],
      explanation: '30 = thirty. "Thirteen" es 13.',
    },
    {
      id: 'a1-m2-l1-mt3',
      type: 'fill_blank',
      concept: 'compound numbers',
      difficulty: 2,
      prompt: 'Escribe en inglés: 88 → "___"',
      promptTranslation: 'Spell 88 in English.',
      correctAnswer: 'eighty-eight',
      acceptedAnswers: ['eighty eight', 'eighty-eight', 'eighty eight'],
      explanation: '88 = eighty-eight. Decena + guion + unidad (igual que la unidad).',
    },
    {
      id: 'a1-m2-l1-mt4',
      type: 'true_false',
      concept: 'phone numbers pronunciation',
      difficulty: 3,
      prompt: 'Verdadero o falso: Para decir un número de teléfono se lee el número completo como una cantidad (ej. "cinco mil quinientos...").',
      promptTranslation: 'True or false: To say a phone number you read the whole number as a quantity (e.g., "five thousand five hundred...").',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'falso'],
      explanation: 'FALSO. Los números de teléfono se dicen DÍGITO por DÍGITO: "five, five, five, ...", no como una cantidad.',
    },
    {
      id: 'a1-m2-l1-mt5',
      type: 'translate',
      concept: 'spelling 15 + age',
      difficulty: 3,
      prompt: 'Traduce: "Tengo quince años."',
      correctAnswer: 'I am fifteen years old.',
      acceptedAnswers: ["I'm fifteen years old", "I'm fifteen years old.", 'I am fifteen years old.', 'I am fifteen', "I'm fifteen"],
      acceptApproximate: true,
      explanation: '"quince" = fifteen. "Tengo X años" = "I am X years old" (en inglés usamos "to be", no "have"). → I am fifteen years old.',
    },
  ],
  reviewItems: ['a1-m1-l4'],
  prerequisites: ['a1-m1-l4'],
}