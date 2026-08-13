import type { Lesson } from '../../types'

export const lesson123TagQuestions: Lesson = {
  id: 'b1-m12-l3',
  moduleId: 'm12-used-to-tags',
  order: 2,
  title: 'Tag questions (¿verdad? / ¿no es cierto?)',
  objective: 'Confirmar información con tag questions: oración afirmativa + tag negativo, y oración negativa + tag afirmativo.',
  explanation_es: `Las "tag questions" son preguntas cortas al final de una frase que usamos para CONFIRMAR información o pedir acuerdo. En español serían "¿verdad?", "¿no es cierto?", "¿a que sí?".

- You are Spanish, aren't you? = Tú eres español, ¿verdad?
- She lives in Madrid, doesn't she? = Ella vive en Madrid, ¿no es cierto?

REGLA DE ORO: la oración y la tag SIEMPRE llevan signo contrario:
1) Oración AFIRMATIVA + tag NEGATIVA.
- You are Spanish, aren't you?
- She lives in Madrid, doesn't she?
- They have finished, haven't they?
- You can swim, can't you?

2) Oración NEGATIVA + tag AFIRMATIVA.
- It isn't cold, is it?
- You don't like it, do you?

¿Cómo se forma la tag? Usamos el MISMO auxiliar (o verbo modal) de la oración y el pronombre correcto:
- are → aren't you? (is → isn't it/he/she?)
- live (present simple) → don't/doesn't + sujeto: doesn't she? / don't you?
- have (present perfect) → haven't + sujeto: haven't they?
- can → can't + sujeto: can't you?
- Negative sentence → tag afirmativa: It isn't cold, is it? / You don't like it, do you?

Responde a una tag question como a cualquier pregunta yes/no: Yes, I am. / No, he doesn't. / Yes, I can.`,
  examples: [
    { english: 'You are Spanish, aren\'t you?', spanish: 'Tú eres español, ¿verdad?', note: 'afirmativa + tag negativa.' },
    { english: 'She lives in Madrid, doesn\'t she?', spanish: 'Ella vive en Madrid, ¿no es cierto?', note: 'present simple → doesn\'t she?' },
    { english: 'It isn\'t cold, is it?', spanish: 'No hace frío, ¿verdad?', note: 'negativa + tag afirmativa.' },
    { english: 'They have finished, haven\'t they?', spanish: 'Han terminado, ¿verdad?', note: 'present perfect → haven\'t they?' },
    { english: 'You can swim, can\'t you?', spanish: 'Sabes nadar, ¿no?', note: 'modal can → can\'t you?' },
  ],
  rule: `Regla de oro: signos contrarios.
- Afirmativa + tag negativa: You are Spanish, aren't you? / She lives in Madrid, doesn't she?
- Negativa + tag afirmativa: It isn't cold, is it? / You don't like it, do you?

La tag usa el MISMO auxiliar o modal y el pronombre correcto:
- to be: are you? / isn't it?
- present simple: don't/doesn't + sujeto.
- present perfect: haven't/hasn't + sujeto.
- can: can't/can + sujeto.`,
  commonMistakes: [
    { wrong: '❌ You don\'t like it, don\'t you?', correct: '✅ You don\'t like it, do you?', explanation: 'Regla de oro: si la oración es negativa, la tag es AFIRMATIVA. → do you?' },
    { wrong: '❌ She lives in Madrid, doesn\'t he?', correct: '✅ She lives in Madrid, doesn\'t she?', explanation: 'La tag repite el pronombre correcto del sujeto: she → doesn\'t she?' },
    { wrong: '❌ You are Spanish, are you?', correct: '✅ You are Spanish, aren\'t you?', explanation: 'Oración afirmativa → tag negativa: aren\'t you?' },
    { wrong: '❌ It isn\'t cold, isn\'t it?', correct: '✅ It isn\'t cold, is it?', explanation: 'Oración negativa → tag afirmativa: is it?' },
  ],
  vocabulary: [
    { word: 'tag question', translation_es: 'pregunta coletilla', level: 'B1', category: 'grammar', partOfSpeech: 'noun', example: 'A tag question confirms information.', exampleTranslation: 'Una pregunta coletilla confirma información.' },
    { word: 'confirm', translation_es: 'confirmar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'Can you confirm the time of the meeting?', exampleTranslation: '¿Puedes confirmar la hora de la reunión?' },
    { word: 'actually', translation_es: 'en realidad', level: 'B1', category: 'adverbs', partOfSpeech: 'adverb', example: 'Actually, I don\'t live here anymore.', exampleTranslation: 'En realidad, ya no vivo aquí.' },
  ],
  grammarPoints: [
    {
      id: 'gp-tag-questions',
      level: 'B1',
      name: 'Tag questions',
      explanation_es: 'Las tag questions confirman información. Oración afirmativa + tag negativa; oración negativa + tag afirmativa. La tag repite el auxiliar/modal y el pronombre.',
      formula: 'Afirmativa + tag negativa | Negativa + tag afirmativa',
      examples: ['You are Spanish, aren\'t you?', 'She lives in Madrid, doesn\'t she?', 'It isn\'t cold, is it?', 'They have finished, haven\'t they?', 'You can swim, can\'t you?'],
    },
  ],
  exercises: [
    {
      id: 'b1-m12-l3-ex1',
      type: 'multiple_choice',
      concept: 'affirmative + negative tag',
      difficulty: 1,
      prompt: 'Completa: "You are Spanish, ___ you?"',
      promptTranslation: 'Tú eres español, ¿verdad?',
      correctAnswer: 'aren\'t',
      options: ['aren\'t', 'are', 'isn\'t'],
      explanation: 'Oración afirmativa ("You are") → tag negativa: aren\'t you?',
    },
    {
      id: 'b1-m12-l3-ex2',
      type: 'multiple_choice',
      concept: 'negative + affirmative tag',
      difficulty: 1,
      prompt: 'Completa: "It isn\'t cold, ___ it?"',
      promptTranslation: 'No hace frío, ¿verdad?',
      correctAnswer: 'is',
      options: ['is', 'isn\'t', 'does'],
      explanation: 'Oración negativa ("It isn\'t") → tag afirmativa: is it?',
    },
    {
      id: 'b1-m12-l3-ex3',
      type: 'fill_blank',
      concept: 'present simple tag',
      difficulty: 2,
      prompt: 'Completa: "She lives in Madrid, ___ she?"',
      promptTranslation: 'Ella vive en Madrid, ¿no es cierto?',
      correctAnswer: 'doesn\'t',
      acceptedAnswers: ["doesn't", 'does not'],
      explanation: 'Present simple con "she" → auxiliar "does" en negativo: doesn\'t she?',
    },
    {
      id: 'b1-m12-l3-ex4',
      type: 'fill_blank',
      concept: 'modal can tag',
      difficulty: 2,
      prompt: 'Completa: "You can swim, ___ you?"',
      promptTranslation: 'Sabes nadar, ¿no?',
      correctAnswer: 'can\'t',
      acceptedAnswers: ["can't", 'cannot'],
      explanation: 'Modal "can" → tag negativa: can\'t you?',
    },
    {
      id: 'b1-m12-l3-ex5',
      type: 'error_correction',
      concept: 'negative sentence + positive tag',
      difficulty: 3,
      prompt: 'Corrige el error: "You don\'t like it, don\'t you?"',
      promptTranslation: 'No te gusta, ¿verdad?',
      correctAnswer: 'You don\'t like it, do you?',
      acceptedAnswers: ['You don\'t like it, do you?', 'You don\'t like it, do you', 'you don\'t like it, do you?'],
      acceptApproximate: true,
      explanation: 'Regla de oro: negativa + tag AFIRMATIVA. → do you?',
    },
    {
      id: 'b1-m12-l3-ex6',
      type: 'translate',
      concept: 'affirmative + negative tag',
      difficulty: 3,
      prompt: 'Traduce: "Has terminado, ¿verdad?"',
      promptTranslation: 'You have finished, haven\'t you?',
      correctAnswer: 'You have finished, haven\'t you?',
      acceptedAnswers: ['You have finished, haven\'t you?', 'You have finished, haven\'t you', 'you have finished, haven\'t you?'],
      acceptApproximate: true,
      explanation: 'Present perfect afirmativo → tag negativa con "have": haven\'t you?',
    },
    {
      id: 'b1-m12-l3-ex7',
      type: 'reorder',
      concept: 'tag question word order',
      difficulty: 3,
      prompt: 'Ordena las palabras: they / have / finished, / they? / haven\'t',
      promptTranslation: 'Han terminado, ¿verdad?',
      correctAnswer: 'They have finished, haven\'t they?',
      words: ['They', 'have', 'finished,', 'haven\'t', 'they?'],
      explanation: 'Oración afirmativa + tag negativa con el mismo auxiliar y pronombre. → They have finished, haven\'t they?',
    },
    {
      id: 'b1-m12-l3-ex8',
      type: 'true_false',
      concept: 'opposite signs rule',
      difficulty: 3,
      prompt: 'En una tag question, la oración y la tag llevan siempre el mismo signo (afirmativa + afirmativa).',
      promptTranslation: 'In a tag question, the statement and the tag always have the same sign (affirmative + affirmative).',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. Regla de oro: llevan signos CONTRARIOS. Afirmativa + tag negativa, negativa + tag afirmativa.',
    },
    {
      id: 'b1-m12-l3-ex9',
      type: 'match',
      concept: 'tag questions matching',
      difficulty: 3,
      prompt: 'Relaciona cada oración con su tag correcta.',
      promptTranslation: 'Match each sentence with its correct tag.',
      correctAnswer: 'You are Spanish=aren\'t you?; She lives in Madrid=doesn\'t she?; It isn\'t cold=is it?; They have finished=haven\'t they?; You can swim=can\'t you?; You don\'t like it=do you?',
      pairs: [
        { left: 'You are Spanish', right: 'aren\'t you?' },
        { left: 'She lives in Madrid', right: 'doesn\'t she?' },
        { left: 'It isn\'t cold', right: 'is it?' },
        { left: 'They have finished', right: 'haven\'t they?' },
        { left: 'You can swim', right: 'can\'t you?' },
        { left: 'You don\'t like it', right: 'do you?' },
      ],
      explanation: 'Afirmativa → tag negativa; negativa → tag afirmativa. La tag usa el mismo auxiliar/modal y el pronombre correcto.',
    },
    {
      id: 'b1-m12-l3-ex10',
      type: 'fill_blank',
      concept: 'present simple don\'t tag',
      difficulty: 4,
      prompt: 'Completa: "They work in Madrid, ___ they?"',
      promptTranslation: 'Trabajan en Madrid, ¿verdad?',
      correctAnswer: 'don\'t',
      acceptedAnswers: ["don't", 'do not'],
      explanation: 'Present simple con "they" → auxiliar "do" en negativo: don\'t they?',
    },
  ],
  miniTest: [
    {
      id: 'b1-m12-l3-mt1',
      type: 'multiple_choice',
      concept: 'affirmative + negative tag',
      difficulty: 1,
      prompt: 'Completa: "You are a teacher, ___ you?"',
      promptTranslation: 'Eres profesor, ¿verdad?',
      correctAnswer: 'aren\'t',
      options: ['aren\'t', 'are', 'isn\'t'],
      explanation: 'Afirmativa ("You are") → tag negativa: aren\'t you?',
    },
    {
      id: 'b1-m12-l3-mt2',
      type: 'fill_blank',
      concept: 'negative + positive tag',
      difficulty: 2,
      prompt: 'Completa: "She isn\'t from Spain, ___ she?"',
      promptTranslation: 'Ella no es de España, ¿verdad?',
      correctAnswer: 'is',
      acceptedAnswers: ['is', 'Is'],
      explanation: 'Negativa ("She isn\'t") → tag afirmativa: is she?',
    },
    {
      id: 'b1-m12-l3-mt3',
      type: 'error_correction',
      concept: 'tag pronoun',
      difficulty: 3,
      prompt: 'Corrige el error: "He lives in London, doesn\'t she?"',
      promptTranslation: 'Él vive en Londres, ¿verdad?',
      correctAnswer: 'He lives in London, doesn\'t he?',
      acceptedAnswers: ['He lives in London, doesn\'t he?', 'He lives in London, doesn\'t he', 'he lives in london, doesn\'t he?'],
      acceptApproximate: true,
      explanation: 'La tag repite el pronombre del sujeto: he → doesn\'t he?',
    },
    {
      id: 'b1-m12-l3-mt4',
      type: 'translate',
      concept: 'negative + positive tag',
      difficulty: 3,
      prompt: 'Traduce: "No hace frío, ¿verdad?"',
      promptTranslation: 'It isn\'t cold, is it?',
      correctAnswer: 'It isn\'t cold, is it?',
      acceptedAnswers: ['It isn\'t cold, is it?', 'It isn\'t cold, is it', 'it isn\'t cold, is it?'],
      acceptApproximate: true,
      explanation: 'Negativa → tag afirmativa: is it?',
    },
    {
      id: 'b1-m12-l3-mt5',
      type: 'multiple_choice',
      concept: 'which is correct',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'They haven\'t arrived, have they?',
      options: ['They haven\'t arrived, have they?', 'They haven\'t arrived, haven\'t they?', 'They haven\'t arrived, do they?'],
      explanation: 'Oración negativa ("haven\'t") → tag afirmativa con el mismo auxiliar: have they?',
    },
  ],
  reviewItems: ['b1-m12-l2'],
  prerequisites: ['b1-m12-l2'],
}
