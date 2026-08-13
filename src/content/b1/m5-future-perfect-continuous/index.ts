import type { Module } from '../../types'
import { lesson51FutureContinuous } from './lesson-51-future-continuous'
import { lesson52FuturePerfect } from './lesson-52-future-perfect'
import { lesson53DegreesCertainty } from './lesson-53-degrees-certainty'
import { lesson54MiniTest } from './lesson-54-mini-test'

export const module5FuturePerfectContinuous: Module = {
  id: 'm5-future-perfect-continuous',
  levelId: 'b1',
  order: 4,
  title: 'Future: Perfect & Continuous + Degrees of Certainty',
  objective: 'Hablar del futuro con el future continuous y el future perfect, y expresar distintos grados de certeza con will definitely, probably, may, might y likely.',
  vocabularyThemes: ['future', 'predictions', 'education', 'work'],
  grammarTopics: [
    'Future continuous: will be + -ing',
    'Future perfect: will have + participle',
    'Degrees of certainty: will definitely / probably / be likely to / may / might',
  ],
  communicationGoals: [
    'Talk about actions in progress at a future moment',
    'Talk about actions completed before a future moment',
    'Express different levels of certainty about the future',
    'Make predictions',
  ],
  lessons: [
    lesson51FutureContinuous,
    lesson52FuturePerfect,
    lesson53DegreesCertainty,
    lesson54MiniTest,
  ],
  checkpoint: {
    id: 'm5-checkpoint',
    moduleId: 'm5-future-perfect-continuous',
    title: 'Checkpoint: Future Perfect & Continuous + Degrees of Certainty',
    passingScore: 80,
    exercises: [
      ...lesson51FutureContinuous.exercises.slice(0, 2),
      ...lesson52FuturePerfect.exercises.slice(0, 2),
      ...lesson53DegreesCertainty.exercises.slice(0, 2),
      ...lesson54MiniTest.exercises.slice(0, 2),
    ],
  },
}
