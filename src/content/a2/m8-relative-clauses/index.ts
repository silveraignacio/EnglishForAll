import type { Module } from '../../types'
import { lesson81RelativeSubject } from './lesson-81-relative-subject'
import { lesson82RelativeObject } from './lesson-82-relative-object'
import { lesson83RelativeWhere } from './lesson-83-relative-where'
import { lesson84MiniTest } from './lesson-84-mini-test'

export const module8RelativeClauses: Module = {
  id: 'm8-relative-clauses',
  levelId: 'a2',
  order: 7,
  title: 'Relative Clauses',
  objective: 'Definir personas, cosas y lugares con las oraciones relativas who, which, that y where.',
  vocabularyThemes: ['people and professions', 'places in the city', 'house and home', 'films and media'],
  grammarTopics: [
    'defining relative clauses (subject): who/which/that',
    'defining relative clauses (object): optional who/which/that',
    'relative clauses with where (places)',
  ],
  communicationGoals: ['Describe people and identify who they are', 'Describe things and films', 'Describe places and neighbourhoods'],
  lessons: [lesson81RelativeSubject, lesson82RelativeObject, lesson83RelativeWhere, lesson84MiniTest],
  checkpoint: {
    id: 'm8-checkpoint',
    moduleId: 'm8-relative-clauses',
    title: 'Checkpoint: Relative Clauses',
    passingScore: 80,
    exercises: [
      ...lesson81RelativeSubject.exercises.slice(0, 2),
      ...lesson82RelativeObject.exercises.slice(0, 2),
      ...lesson83RelativeWhere.exercises.slice(0, 1),
      ...lesson84MiniTest.exercises.slice(0, 1),
    ],
  },
}
