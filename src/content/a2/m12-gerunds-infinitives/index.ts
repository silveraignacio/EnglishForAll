import type { Module } from '../../types'
import { lesson121VerbsIng } from './lesson-121-verbs-ing'
import { lesson122VerbsToInfinitive } from './lesson-122-verbs-to-infinitive'
import { lesson123MakeLet } from './lesson-123-make-let'
import { lesson124PhrasalVerbs } from './lesson-124-phrasal-verbs'
import { lesson125MiniTest } from './lesson-125-mini-test'

export const module12GerundsInfinitives: Module = {
  id: 'm12-gerunds-infinitives',
  levelId: 'a2',
  order: 11,
  title: 'Gerunds & Infinitives + Phrasal Verbs',
  objective: 'Elegir correctamente entre verbo + -ing (like, enjoy, finish, mind), verbo + to + infinitivo (want, need, decide, hope), la estructura make/let + persona + verbo, y los phrasal verbs más frecuentes.',
  vocabularyThemes: ['phrasal verbs', 'gerunds', 'infinitives', 'daily actions'],
  grammarTopics: [
    'verbs + -ing (like, enjoy, hate, finish, mind)',
    'verbs + to + infinitive (want, need, decide, plan, hope, would like)',
    'make / let + person + base verb',
    'common phrasal verbs (get up, turn off, look for, give up...)',
  ],
  communicationGoals: [
    'Talk about likes, dislikes and free-time activities',
    'Express wants, needs and plans',
    'Talk about things people make you do or let you do',
    'Use common phrasal verbs in everyday situations',
  ],
  lessons: [
    lesson121VerbsIng,
    lesson122VerbsToInfinitive,
    lesson123MakeLet,
    lesson124PhrasalVerbs,
    lesson125MiniTest,
  ],
  checkpoint: {
    id: 'm12-checkpoint',
    moduleId: 'm12-gerunds-infinitives',
    title: 'Checkpoint: Gerunds & Infinitives + Phrasal Verbs',
    passingScore: 80,
    exercises: [
      ...lesson121VerbsIng.exercises.slice(0, 2),
      ...lesson122VerbsToInfinitive.exercises.slice(0, 1),
      ...lesson123MakeLet.exercises.slice(0, 1),
      ...lesson124PhrasalVerbs.exercises.slice(0, 1),
      ...lesson125MiniTest.exercises.slice(6, 7),
    ],
  },
}
