import type { Module } from '../../types'
import { lesson41WhosePrepositionWhich } from './lesson-41-whose-preposition-which'
import { lesson42EvaluativeClauses } from './lesson-42-evaluative-clauses'
import { lesson43ReducedRelatives } from './lesson-43-reduced-relatives'
import { lesson44MiniTest } from './lesson-44-mini-test'

export const module4RelativesNounPhrases: Module = {
  id: 'm4-relatives-noun-phrases',
  levelId: 'b2',
  order: 3,
  title: 'Advanced Relative Clauses & Noun Phrases',
  objective: 'Dominar estructuras avanzadas de oraciones de relativo: "whose" en definidoras y no definidoras, preposición + which/whom en registro formal, relativas evaluativas con ", which", y formas reducidas con participios y adjetivos. Aplicar estas estructuras con adjetivos compuestos y atributivos para escribir con mayor precisión y elegancia.',
  vocabularyThemes: ['formal language', 'academic writing', 'compound adjectives', 'relative clauses', 'professional communication'],
  grammarTopics: [
    'Whose in defining and non-defining relative clauses',
    'Formal preposition + which/whom vs. informal preposition-final constructions',
    'Evaluative relative clauses: which referring to entire ideas',
    'Compound adjectives (with hyphen): attributive vs. predicative forms',
    'Attribute-only adjectives: former, future, present, sole, principal, mere',
    'Reduced relative clauses: participles and adjectives as postmodifiers',
    'Those + reduced relative: elegant constructions for referring to groups',
  ],
  communicationGoals: [
    'Write formal essays and reports using sophisticated relative structures',
    'Distinguish between formal and informal relative clause patterns',
    'Use evaluative clauses to comment on complete ideas in academic writing',
    'Employ reduced relatives for more concise and elegant expression',
    'Properly use compound adjectives and attribute-only adjectives',
    'Describe complex noun phrases with precision',
    'Participate in advanced academic and professional discussions',
  ],
  lessons: [
    lesson41WhosePrepositionWhich,
    lesson42EvaluativeClauses,
    lesson43ReducedRelatives,
    lesson44MiniTest,
  ],
  checkpoint: {
    id: 'm4-checkpoint',
    moduleId: 'm4-relatives-noun-phrases',
    title: 'Checkpoint: Advanced Relative Clauses & Noun Phrases',
    passingScore: 80,
    exercises: [
      ...lesson41WhosePrepositionWhich.exercises.slice(0, 2),
      ...lesson42EvaluativeClauses.exercises.slice(0, 2),
      ...lesson43ReducedRelatives.exercises.slice(0, 2),
      lesson44MiniTest.exercises[4],
    ],
  },
}
