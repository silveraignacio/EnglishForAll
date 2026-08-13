import type { Module } from '../../types'
import { lesson91ThirdConditional } from './lesson-91-third-conditional'
import { lesson92NegativeQuestions } from './lesson-92-negative-questions'
import { lesson93WishIfOnly } from './lesson-93-wish-if-only'
import { lesson94MiniTest } from './lesson-94-mini-test'

export const module9ThirdConditionalWishes: Module = {
  id: 'm9-third-conditional-wishes',
  levelId: 'b1',
  order: 8,
  title: 'Third Conditional & Wishes',
  objective: 'Expresar hipótesis y arrepentimientos del pasado con el tercer condicional (if + past perfect, would have + participio) y deseos con wish/if only.',
  vocabularyThemes: ['regrets and feelings', 'education', 'travel', 'past decisions'],
  grammarTopics: [
    'Third conditional: if + past perfect, would have + past participle',
    'Third conditional negative: hadn\'t + participle, wouldn\'t have + participle',
    'Third conditional questions: Would + subject + have + participle...?',
    'wish + past simple for present wishes',
    'wish + past perfect for past regrets',
    'if only for emphasis',
  ],
  communicationGoals: [
    'Express hypothetical past situations and their imaginary results',
    'Talk about regrets and things you would change in the past',
    'Ask hypothetical questions about the past',
    'Express present wishes and past regrets with wish / if only',
  ],
  lessons: [
    lesson91ThirdConditional,
    lesson92NegativeQuestions,
    lesson93WishIfOnly,
    lesson94MiniTest,
  ],
  checkpoint: {
    id: 'm9-checkpoint',
    moduleId: 'm9-third-conditional-wishes',
    title: 'Checkpoint: Third Conditional & Wishes',
    passingScore: 80,
    exercises: [
      ...lesson91ThirdConditional.exercises.slice(0, 2),
      ...lesson92NegativeQuestions.exercises.slice(0, 2),
      ...lesson93WishIfOnly.exercises.slice(0, 2),
      lesson94MiniTest.exercises[5],
    ],
  },
}
