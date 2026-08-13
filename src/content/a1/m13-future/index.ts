import type { Module } from '../../types'
import { lesson131GoingToAff } from './lesson-131-going-to-aff'
import { lesson132GoingToNegQ } from './lesson-132-going-to-neg-q'
import { lesson133FutureTime } from './lesson-133-future-time'
import { lesson134MiniTest } from './lesson-134-mini-test'

export const module13Future: Module = {
  id: 'm13-future',
  levelId: 'a1',
  order: 12,
  title: 'Future Plans — Going To',
  objective: 'Expresar planes e intenciones futuras con "going to" en afirmativo, negativo y preguntas, y usar expresiones de tiempo futuro.',
  vocabularyThemes: ['future time expressions'],
  grammarTopics: [
    'Going to (affirmative)',
    'Going to (negative and questions)',
    'Future time expressions (tomorrow, next week, on Monday...)',
  ],
  communicationGoals: [
    'Talk about future plans and intentions',
    'Say what you are not going to do',
    'Ask about future plans (Are you going to...?)',
    'Say when something will happen (tomorrow, next year...)',
  ],
  lessons: [
    lesson131GoingToAff,
    lesson132GoingToNegQ,
    lesson133FutureTime,
    lesson134MiniTest,
  ],
  checkpoint: {
    id: 'm13-checkpoint',
    moduleId: 'm13-future',
    title: 'Checkpoint: Future Plans — Going To',
    passingScore: 80,
    exercises: [
      ...lesson131GoingToAff.exercises.slice(0, 2),
      ...lesson132GoingToNegQ.exercises.slice(0, 1),
      ...lesson133FutureTime.exercises.slice(0, 2),
      ...lesson134MiniTest.exercises.slice(8, 9),
    ],
  },
}
