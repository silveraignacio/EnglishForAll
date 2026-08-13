import type { Module } from '../../types'
import { lesson41Family } from './lesson-41-family'
import { lesson42SPossessive } from './lesson-42-s-possessive'
import { lesson43PossessivesVsS } from './lesson-43-possessives-vs-s'
import { lesson44Descriptions } from './lesson-44-descriptions'
import { lesson45MiniTest } from './lesson-45-mini-test'

export const module4FamilyPossessives: Module = {
  id: 'm4-family-possessives',
  levelId: 'a1',
  order: 3,
  title: 'Family & Possessives',
  objective: 'Aprender vocabulario de la familia, el genitivo sajón y los adjetivos posesivos, y describir a personas.',
  vocabularyThemes: ['family', 'possessives', 'descriptions', 'adjectives'],
  grammarTopics: ['possessive adjectives', "'s possessive", 'adjectives with to be'],
  communicationGoals: ['Talk about family members', 'Express possession', 'Describe people'],
  lessons: [
    lesson41Family,
    lesson42SPossessive,
    lesson43PossessivesVsS,
    lesson44Descriptions,
    lesson45MiniTest,
  ],
  checkpoint: {
    id: 'm4-checkpoint',
    moduleId: 'm4-family-possessives',
    title: 'Checkpoint: Family & Possessives',
    passingScore: 80,
    exercises: [
      ...lesson41Family.exercises.slice(0, 2),
      ...lesson42SPossessive.exercises.slice(0, 2),
      ...lesson43PossessivesVsS.exercises.slice(0, 2),
      ...lesson44Descriptions.exercises.slice(0, 2),
    ],
  },
}