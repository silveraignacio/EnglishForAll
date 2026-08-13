import type { Module } from '../../types'
import { lesson101ReflexivePronouns } from './lesson-101-reflexive-pronouns'
import { lesson102ByMyself } from './lesson-102-by-myself'
import { lesson103EachOther } from './lesson-103-each-other'

export const module10Reflexives: Module = {
  id: 'm10-reflexives',
  levelId: 'a2',
  order: 9,
  title: 'Reflexives & Each Other',
  objective: 'Usar los pronombres reflexivos (myself, yourself...), la expresión "by myself" para "solo/a, sin ayuda", y "each other" para acciones mutuas.',
  vocabularyThemes: ['reflexive pronouns', 'each other', 'by + reflexive'],
  grammarTopics: [
    'reflexive pronouns (myself, yourself, himself...)',
    'by + reflexive (alone, without help)',
    'each other (reciprocal actions)',
  ],
  communicationGoals: [
    'Say what you do to yourself',
    'Say that you do things alone or without help',
    'Talk about actions that people do to each other',
  ],
  lessons: [
    lesson101ReflexivePronouns,
    lesson102ByMyself,
    lesson103EachOther,
  ],
  checkpoint: {
    id: 'm10-checkpoint',
    moduleId: 'm10-reflexives',
    title: 'Checkpoint: Reflexives & Each Other',
    passingScore: 80,
    exercises: [
      ...lesson101ReflexivePronouns.exercises.slice(0, 2),
      ...lesson102ByMyself.exercises.slice(0, 1),
      ...lesson103EachOther.exercises.slice(0, 1),
    ],
  },
}
