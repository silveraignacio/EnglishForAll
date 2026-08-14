import type { Module } from '../../types'
import { lesson71NegativeInversion } from './lesson-71-negative-inversion'
import { lesson72NotOnlyNeitherBoth } from './lesson-72-not-only-neither-both'
import { lesson73FocusStructures } from './lesson-73-focus-structures'
import { lesson74MiniTest } from './lesson-74-mini-test'

export const module7EmphasisInversion: Module = {
  id: 'm7-emphasis-inversion',
  levelId: 'b2',
  order: 6,
  title: 'Emphasis, Inversion & Focus',
  objective: 'Dominar estructuras avanzadas de énfasis: inversión negativa (never, no sooner...than), correlaciones (not only...but also, neither...nor, both...and), y focus structures (The [noun] is that...) para expresar ideas de forma más dramática y formal.',
  vocabularyThemes: ['emphasis and drama', 'formal register', 'argumentation', 'academic writing'],
  grammarTopics: [
    'Negative inversion: Never/No sooner/Hardly + auxiliar + sujeto',
    'Not only...but also with inversion',
    'Neither...nor and both...and for emphasis',
    'Focus structures: The fact/thing/point/problem is (that)...',
    'Formal negation: do not, will not, have not (without contractions)',
  ],
  communicationGoals: [
    'Use inversion with negative words for dramatic emphasis in formal contexts',
    'Express multiple related ideas using correlation structures',
    'Direct attention to key points using focus structures',
    'Write and speak in formal register avoiding contractions',
    'Construct compelling arguments and narratives with emphasis',
  ],
  lessons: [
    lesson71NegativeInversion,
    lesson72NotOnlyNeitherBoth,
    lesson73FocusStructures,
    lesson74MiniTest,
  ],
  checkpoint: {
    id: 'm7-checkpoint',
    moduleId: 'm7-emphasis-inversion',
    title: 'Checkpoint: Emphasis, Inversion & Focus',
    passingScore: 80,
    exercises: [
      ...lesson71NegativeInversion.exercises.slice(0, 2),
      ...lesson72NotOnlyNeitherBoth.exercises.slice(0, 2),
      ...lesson73FocusStructures.exercises.slice(0, 2),
      lesson74MiniTest.exercises[0],
    ],
  },
}
