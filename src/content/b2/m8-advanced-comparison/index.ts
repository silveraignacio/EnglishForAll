import type { Module } from '../../types'
import { lesson81ModifyingComparatives } from './lesson-81-modifying-comparatives'
import { lesson82SuperlativesTheMore } from './lesson-82-superlatives-the-more'
import { lesson83AsIfEnough } from './lesson-83-as-if-enough'
import { lesson84MiniTest } from './lesson-84-mini-test'

export const module8AdvancedComparison: Module = {
  id: 'm8-advanced-comparison',
  levelId: 'b2',
  order: 7,
  title: 'Advanced Comparison & Degree',
  objective: 'Dominar comparativos y superlativos avanzados, expresar proporcionalidad con "the more...the more", comparaciones de identidad, hipótesis con "as if", suficiencia con "enough" y énfasis formal con "rather a".',
  vocabularyThemes: ['language and expression', 'intensity and degree', 'comparison and similarity', 'formal registers'],
  grammarTopics: [
    'Modifying comparatives: much, slightly, far, considerably, a lot',
    'Predicative vs attributive comparatives',
    'Superlatives with by far',
    'Superlative ellipsis: omitting the noun',
    'The more...the more/less (proportional relationships)',
    'The same as (identity comparison)',
    'As if / as though (appearance and hypothesis)',
    'Enough + to-infinitive after adjectives and adverbs',
    'Rather a/an + adjective + noun (formal emphasis)',
  ],
  communicationGoals: [
    'Express comparative relationships with gradual intensity',
    'Emphasize superlatives for maximum effect',
    'Describe proportional relationships between two variables',
    'Make comparisons of identity vs similarity',
    'Express appearance and hypothetical situations',
    'Convey sufficiency for taking action',
    'Use formal, emphatic structures in sophisticated discourse',
  ],
  lessons: [
    lesson81ModifyingComparatives,
    lesson82SuperlativesTheMore,
    lesson83AsIfEnough,
    lesson84MiniTest,
  ],
  checkpoint: {
    id: 'm8-checkpoint',
    moduleId: 'm8-advanced-comparison',
    title: 'Checkpoint: Advanced Comparison & Degree',
    passingScore: 80,
    exercises: [
      ...lesson81ModifyingComparatives.exercises.slice(0, 2),
      ...lesson82SuperlativesTheMore.exercises.slice(0, 2),
      ...lesson83AsIfEnough.exercises.slice(0, 2),
      ...lesson84MiniTest.exercises.slice(0, 2),
    ],
  },
}
