import type { Module } from '../../types'
import { lesson41Will } from './lesson-41-will'
import { lesson42GoingTo } from './lesson-42-going-to'
import { lesson43WillVsGoingTo } from './lesson-43-will-vs-going-to'
import { lesson44PresentContinuousFutureShall } from './lesson-44-present-continuous-future-shall'
import { lesson45MiniTest } from './lesson-45-mini-test'

export const module4FutureForms: Module = {
  id: 'm4-future-forms',
  levelId: 'a2',
  order: 3,
  title: 'Future Forms',
  objective: 'Expresar el futuro en inglés: will, going to, present continuous para planes fijados, shall para sugerencias y una introducción al primer condicional.',
  vocabularyThemes: ['future', 'plans', 'predictions', 'arrangements', 'weather', 'conditional'],
  grammarTopics: ['will', 'going to', 'present continuous for future', 'shall', 'first conditional (intro)'],
  communicationGoals: ['Make spontaneous decisions', 'Make predictions', 'Talk about plans and intentions', 'Discuss fixed arrangements', 'Make offers and suggestions'],
  lessons: [
    lesson41Will,
    lesson42GoingTo,
    lesson43WillVsGoingTo,
    lesson44PresentContinuousFutureShall,
    lesson45MiniTest,
  ],
  checkpoint: {
    id: 'm4-checkpoint',
    moduleId: 'm4-future-forms',
    title: 'Checkpoint: Future Forms',
    passingScore: 80,
    exercises: [
      ...lesson41Will.exercises.slice(0, 2),
      ...lesson42GoingTo.exercises.slice(0, 2),
      ...lesson43WillVsGoingTo.exercises.slice(0, 2),
      ...lesson44PresentContinuousFutureShall.exercises.slice(0, 2),
      ...lesson45MiniTest.exercises.slice(0, 2),
    ],
  },
}
