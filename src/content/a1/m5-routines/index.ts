import type { Module } from '../../types'
import { lesson51PresentSimpleAff } from './lesson-51-present-simple-aff'
import { lesson52DailyVocab } from './lesson-52-daily-vocab'
import { lesson53PresentSimpleNeg } from './lesson-53-present-simple-neg'
import { lesson54PresentSimpleQuestions } from './lesson-54-present-simple-questions'
import { lesson55ReviewSimple } from './lesson-55-review-simple'
import { lesson56ModuleTest } from './lesson-56-module-test'

export const module5Routines: Module = {
  id: 'm5-routines',
  levelId: 'a1',
  order: 4,
  title: 'Daily Routines — Present Simple',
  objective: 'Aprender el Present Simple (afirmativo, negativo, preguntas) y vocabulario de rutinas diarias.',
  vocabularyThemes: ['daily routines', 'verbs', 'frequency'],
  grammarTopics: [
    'Present Simple affirmative',
    "Present Simple negative (don't/doesn't)",
    'Present Simple questions (Do/Does)',
    'WH-questions',
    'short answers',
  ],
  communicationGoals: ['Describe a daily routine', 'Ask about habits', 'Talk about professions'],
  lessons: [
    lesson51PresentSimpleAff,
    lesson52DailyVocab,
    lesson53PresentSimpleNeg,
    lesson54PresentSimpleQuestions,
    lesson55ReviewSimple,
    lesson56ModuleTest,
  ],
  checkpoint: {
    id: 'm5-checkpoint',
    moduleId: 'm5-routines',
    title: 'Checkpoint: Daily Routines — Present Simple',
    passingScore: 80,
    exercises: [
      ...lesson51PresentSimpleAff.exercises.slice(0, 2),
      ...lesson52DailyVocab.exercises.slice(0, 2),
      ...lesson53PresentSimpleNeg.exercises.slice(0, 1),
      ...lesson54PresentSimpleQuestions.exercises.slice(0, 2),
      ...lesson55ReviewSimple.exercises.slice(0, 1),
    ],
  },
}