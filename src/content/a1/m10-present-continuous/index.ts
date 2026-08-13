import type { Module } from '../../types'
import { lesson101PresentContinuousAff } from './lesson-101-present-continuous-aff'
import { lesson102PresentContinuousNegQ } from './lesson-102-present-continuous-neg-q'
import { lesson103SimpleVsContinuous } from './lesson-103-simple-vs-continuous'
import { lesson104Lets } from './lesson-104-lets'
import { lesson105MiniTest } from './lesson-105-mini-test'

export const module10PresentContinuous: Module = {
  id: 'm10-present-continuous',
  levelId: 'a1',
  order: 9,
  title: 'Actions Now — Present Continuous',
  objective: 'Expresar acciones que están ocurriendo ahora con el Present Continuous, diferenciarlo del Present Simple y hacer sugerencias con Let\'s.',
  vocabularyThemes: ['actions', 'present continuous', 'time expressions'],
  grammarTopics: [
    'Present Continuous affirmative',
    'Present Continuous negative and questions',
    'Present Simple vs Present Continuous',
    "Let's (suggestions)",
  ],
  communicationGoals: [
    'Describe what is happening now',
    'Ask what someone is doing',
    'Contrast routines and current actions',
    'Make suggestions with let\'s',
  ],
  lessons: [
    lesson101PresentContinuousAff,
    lesson102PresentContinuousNegQ,
    lesson103SimpleVsContinuous,
    lesson104Lets,
    lesson105MiniTest,
  ],
  checkpoint: {
    id: 'm10-checkpoint',
    moduleId: 'm10-present-continuous',
    title: 'Checkpoint: Actions Now — Present Continuous',
    passingScore: 80,
    exercises: [
      ...lesson101PresentContinuousAff.exercises.slice(0, 2),
      ...lesson102PresentContinuousNegQ.exercises.slice(0, 1),
      ...lesson103SimpleVsContinuous.exercises.slice(0, 2),
      ...lesson104Lets.exercises.slice(0, 1),
    ],
  },
}
