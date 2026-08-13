import type { Module } from '../../types'
import { lesson81NonDefining } from './lesson-81-non-defining'
import { lesson82WhoseWhereWhenWhy } from './lesson-82-whose-where-when-why'
import { lesson83PrepositionWhom } from './lesson-83-preposition-whom'
import { lesson84MiniTest } from './lesson-84-mini-test'

export const module8RelativeClausesExt: Module = {
  id: 'm8-relative-clauses-ext',
  levelId: 'b1',
  order: 7,
  title: 'Relative Clauses (extended)',
  objective: 'Ampliar las oraciones de relativo: no definidoras con who/which, whose/where/when/why, y preposición + whom en inglés formal e informal.',
  vocabularyThemes: ['professions', 'places in a neighbourhood', 'work and relationships', 'formal and informal language'],
  grammarTopics: [
    'Non-defining relative clauses: extra information with commas (who/which, never that)',
    'whose (possession), where (places), when (time), why (reason)',
    'Preposition + whom (formal): to whom, with whom, for whom',
    'Informal alternative: who + verb + preposition at the end',
  ],
  communicationGoals: [
    'Add extra information about people and things with commas',
    'Talk about possession, places, times and reasons with relative clauses',
    'Describe people and places in detail',
    'Use formal relative constructions in writing and informal ones in conversation',
  ],
  lessons: [
    lesson81NonDefining,
    lesson82WhoseWhereWhenWhy,
    lesson83PrepositionWhom,
    lesson84MiniTest,
  ],
  checkpoint: {
    id: 'm8-checkpoint',
    moduleId: 'm8-relative-clauses-ext',
    title: 'Checkpoint: Relative Clauses (extended)',
    passingScore: 80,
    exercises: [
      ...lesson81NonDefining.exercises.slice(0, 2),
      ...lesson82WhoseWhereWhenWhy.exercises.slice(0, 2),
      ...lesson83PrepositionWhom.exercises.slice(0, 2),
      lesson84MiniTest.exercises[5],
    ],
  },
}
