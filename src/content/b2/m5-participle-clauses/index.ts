import type { Module } from '../../types'
import { lesson51IngClauses } from './lesson-51-ing-clauses'
import { lesson52ReducedClausesComparisons } from './lesson-52-reduced-clauses-comparisons'
import { lesson53SenseVerbsIng } from './lesson-53-sense-verbs-ing'
import { lesson54MiniTest } from './lesson-54-mini-test'

export const module5ParticipleClauses: Module = {
  id: 'm5-participle-clauses',
  levelId: 'b2',
  order: 4,
  title: 'Participle Clauses & Non-Finite Structures',
  objective: 'Dominar cláusulas de participio y estructuras no finitas: cláusulas de -ing para razón y circunstancia, cláusulas relativas reducidas, "rather than" con estructuras no finitas, y verbos de percepción + -ing.',
  vocabularyThemes: ['participles', 'non-finite structures', 'sense verbs', 'discourse markers'],
  grammarTopics: [
    '-ing clauses for reason, circumstance, and simultaneity',
    'After having + past participle for past reference',
    'Reduced relative clauses with -ing and -ed',
    'Rather than + non-finite',
    'Perception verbs + object + -ing',
  ],
  communicationGoals: [
    'Use participle clauses to express reasons and circumstances more elegantly',
    'Reduce relative clauses in formal writing',
    'Describe actions perceived in progress',
    'Use non-finite structures for more sophisticated expression',
  ],
  lessons: [
    lesson51IngClauses,
    lesson52ReducedClausesComparisons,
    lesson53SenseVerbsIng,
    lesson54MiniTest,
  ],
  checkpoint: {
    id: 'm5-checkpoint',
    moduleId: 'm5-participle-clauses',
    title: 'Checkpoint: Participle Clauses & Non-Finite Structures',
    passingScore: 80,
    exercises: [
      ...lesson51IngClauses.exercises.slice(0, 2),
      ...lesson52ReducedClausesComparisons.exercises.slice(0, 2),
      ...lesson53SenseVerbsIng.exercises.slice(0, 2),
    ],
  },
}
