import type { Module } from '../../types'
import { lesson61ConditionalConjunctions } from './lesson-61-conditional-conjunctions'
import { lesson62MixedConditionals } from './lesson-62-mixed-conditionals'
import { lesson63WishIfOnlyPoliteness } from './lesson-63-wish-if-only-past-perfect-politeness'
import { lesson64MiniTest } from './lesson-64-mini-test'

export const module6AdvancedConditionals: Module = {
  id: 'm6-advanced-conditionals',
  levelId: 'b2',
  order: 5,
  title: 'Advanced Conditionals & Unreal Past',
  objective: 'Dominar condicionales avanzadas: conjunciones condicionales específicas (as long as, provided that, unless, except that, once), condicionales mixtas que combinan pasado y presente, y expresiones de arrepentimiento y cortesía (wish/if only, politeness patterns).',
  vocabularyThemes: [
    'conditionals and hypothetical situations',
    'regret and wishes',
    'formal requests and politeness',
    'decision-making and consequences',
  ],
  grammarTopics: [
    'Conditional conjunctions: as long as, provided (that), unless, except (that), once',
    'Mixed conditionals: past condition + present result, present condition + past result',
    'Wish / if only + past perfect for regret',
    'If + past simple for indirect politeness',
    'Combining multiple conditional structures',
  ],
  communicationGoals: [
    'Express specific conditional requirements using advanced conjunctions',
    'Discuss hypothetical past situations with present consequences',
    'Express regrets about past events that cannot be changed',
    'Make indirect, polite requests using conditional forms',
    'Understand the distinction between true conditionals and politeness formulas',
  ],
  lessons: [
    lesson61ConditionalConjunctions,
    lesson62MixedConditionals,
    lesson63WishIfOnlyPoliteness,
    lesson64MiniTest,
  ],
  checkpoint: {
    id: 'm6-checkpoint',
    moduleId: 'm6-advanced-conditionals',
    title: 'Checkpoint: Advanced Conditionals & Unreal Past',
    passingScore: 80,
    exercises: [
      ...lesson61ConditionalConjunctions.exercises.slice(0, 2),
      ...lesson62MixedConditionals.exercises.slice(0, 2),
      ...lesson63WishIfOnlyPoliteness.exercises.slice(0, 2),
      lesson64MiniTest.exercises[4],
    ],
  },
}
