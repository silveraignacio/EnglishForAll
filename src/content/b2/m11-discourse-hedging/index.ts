import type { Module } from '../../types'
import { lesson111DiscourseMarkers } from './lesson-111-discourse-markers'
import { lesson112ComplexConjunctions } from './lesson-112-complex-conjunctions'
import { lesson113Hedging } from './lesson-113-hedging'
import { lesson114GenericPronounsReflexives } from './lesson-114-generic-pronouns-reflexives'
import { lesson115MiniTest } from './lesson-115-mini-test'

export const module11DiscourseHedging: Module = {
  id: 'm11-discourse-hedging',
  levelId: 'b2',
  order: 10,
  title: 'Discourse Markers, Hedging & Formal Register',
  objective: 'Dominar el registro formal en inglés: marcadores de discurso para estructurar textos, subordinantes complejos para relaciones sofisticadas, hedging para matizar afirmaciones, y pronombres genéricos/reflexivos para escribir de forma impersonal y académica.',
  vocabularyThemes: [
    'academic writing and formal language',
    'logical connectors and discourse structures',
    'hedging and uncertainty expressions',
    'formal register and professional communication',
  ],
  grammarTopics: [
    'Discourse markers: opening, closing, contrast, summary (To begin with, In conclusion, By contrast, etc.)',
    'Complex conjunctions: whereas, once, despite the fact that, due to the fact that, as if, in order that',
    'Hedging: It + copula + adjective + (that) clause for softening statements',
    'Generic pronouns: one (formal), we (inclusive), they (gender-neutral singular)',
    'Advanced reflexives: by itself, in itself, one another (formal reciprocal)',
  ],
  communicationGoals: [
    'Structure academic texts with clear discourse markers',
    'Express sophisticated relationships between ideas using complex conjunctions',
    'Soften direct claims appropriately in academic contexts',
    'Write impersonally and formally using generic pronouns',
    'Use advanced reflexive constructions for nuanced expression',
  ],
  lessons: [
    lesson111DiscourseMarkers,
    lesson112ComplexConjunctions,
    lesson113Hedging,
    lesson114GenericPronounsReflexives,
    lesson115MiniTest,
  ],
  checkpoint: {
    id: 'm11-checkpoint',
    moduleId: 'm11-discourse-hedging',
    title: 'Checkpoint: Discourse Markers, Hedging & Formal Register',
    passingScore: 80,
    exercises: [
      ...lesson111DiscourseMarkers.exercises.slice(0, 2),
      ...lesson112ComplexConjunctions.exercises.slice(0, 2),
      ...lesson113Hedging.exercises.slice(0, 2),
      ...lesson114GenericPronounsReflexives.exercises.slice(0, 2),
      lesson115MiniTest.exercises[6],
    ],
  },
}
