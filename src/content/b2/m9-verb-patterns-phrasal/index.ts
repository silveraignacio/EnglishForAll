import type { Module } from '../../types'
import { lesson91VerbsMeaningChange } from './lesson-91-verbs-meaning-change'
import { lesson92PhrasalVerbsSeparable } from './lesson-92-phrasal-verbs-separable'
import { lesson93PhrasalPrepositionalVerbs } from './lesson-93-phrasal-prepositional-verbs'
import { lesson94MiniTest } from './lesson-94-mini-test'

export const module9VerbPatternsPhrasal: Module = {
  id: 'm9-verb-patterns-phrasal',
  levelId: 'b2',
  order: 8,
  title: 'Verb Patterns & Phrasal Verbs',
  objective:
    'Dominar patrones verbales avanzados: verbos con cambio de significado según la forma (-ing vs to-infinitive), phrasal verbs separables e inseparables, y phrasal-prepositional verbs de tres componentes. Aplicar estas estructuras en contextos reales de conversación y escritura.',
  vocabularyThemes: [
    'verb patterns and meanings',
    'phrasal verbs in daily life',
    'relationships and interactions',
    'workplace communication',
  ],
  grammarTopics: [
    'Verbs with meaning changes: stop/remember/try/regret/go on/mean + -ing vs to',
    'Separable phrasal verbs: turn on/off, pick up, put away, take off (word order with nouns and pronouns)',
    'Inseparable phrasal verbs: look after, come across, run into, get over, call off',
    'Phrasal-prepositional verbs: look forward to, put up with, get on with, come up with, run out of, deal with (3-part structures)',
  ],
  communicationGoals: [
    'Understand and express precise meanings by choosing correct verb forms',
    'Use separable and inseparable phrasal verbs naturally in speech and writing',
    'Master complex 3-part phrasal verbs with prepositions',
    'Distinguish between similar phrasal verb structures to avoid confusion',
    'Apply verb patterns across multiple registers (formal, informal, neutral)',
  ],
  lessons: [
    lesson91VerbsMeaningChange,
    lesson92PhrasalVerbsSeparable,
    lesson93PhrasalPrepositionalVerbs,
    lesson94MiniTest,
  ],
  checkpoint: {
    id: 'm9-checkpoint',
    moduleId: 'm9-verb-patterns-phrasal',
    title: 'Checkpoint: Verb Patterns & Phrasal Verbs',
    passingScore: 80,
    exercises: [
      ...lesson91VerbsMeaningChange.exercises.slice(0, 2),
      ...lesson92PhrasalVerbsSeparable.exercises.slice(0, 2),
      ...lesson93PhrasalPrepositionalVerbs.exercises.slice(0, 2),
      lesson94MiniTest.exercises[4],
    ],
  },
}
