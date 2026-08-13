import type { Module } from '../../types'
import { lesson121WasWere } from './lesson-121-was-were'
import { lesson122PastRegular } from './lesson-122-past-regular'
import { lesson123PastNegQuestions } from './lesson-123-past-neg-questions'
import { lesson124IrregularVerbs } from './lesson-124-irregular-verbs'
import { lesson125MiniTest } from './lesson-125-mini-test'

export const module12PastSimple: Module = {
  id: 'm12-past-simple',
  levelId: 'a1',
  order: 11,
  title: 'Past Simple — Was/Were & Regular Verbs',
  objective: 'Hablar de acciones y estados en el pasado: was/were, verbos regulares con -ed, verbos irregulares comunes, y negativos y preguntas con did/didn\'t.',
  vocabularyThemes: ['past simple', 'time expressions', 'irregular verbs'],
  grammarTopics: [
    'Past of to be: was / were',
    'Past Simple regular verbs (-ed)',
    'Past Simple negative and questions (did / didn\'t)',
    'Common irregular verbs',
    'Time expressions: yesterday, last week, ago',
  ],
  communicationGoals: [
    'Say where you were and how you felt in the past',
    'Talk about finished actions in the past',
    'Say what you did or didn\'t do',
    'Ask questions about the past',
    'Use common irregular verbs in the past',
  ],
  lessons: [
    lesson121WasWere,
    lesson122PastRegular,
    lesson123PastNegQuestions,
    lesson124IrregularVerbs,
    lesson125MiniTest,
  ],
  checkpoint: {
    id: 'm12-checkpoint',
    moduleId: 'm12-past-simple',
    title: 'Checkpoint: Past Simple — Was/Were & Regular Verbs',
    passingScore: 80,
    exercises: [
      ...lesson121WasWere.exercises.slice(0, 2),
      ...lesson122PastRegular.exercises.slice(0, 1),
      ...lesson123PastNegQuestions.exercises.slice(0, 1),
      ...lesson124IrregularVerbs.exercises.slice(0, 1),
      ...lesson125MiniTest.exercises.slice(6, 7),
    ],
  },
}
