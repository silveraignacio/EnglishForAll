import type { Module } from '../../types'
import { lesson21PresentPerfectAffirmative } from './lesson-21-present-perfect-affirmative'
import { lesson22EverNever } from './lesson-22-ever-never'
import { lesson23JustAlreadyYet } from './lesson-23-just-already-yet'
import { lesson24ForSince } from './lesson-24-for-since'
import { lesson25MiniTest } from './lesson-25-mini-test'

export const module2PresentPerfect: Module = {
  id: 'm2-present-perfect',
  levelId: 'a2',
  order: 1,
  title: 'Present Perfect — Experiences',
  objective: 'Hablar de experiencias de vida con el Present Perfect: have/has + participio, ever/never, just/already/yet y for/since.',
  vocabularyThemes: ['experiences', 'life events', 'time expressions'],
  grammarTopics: [
    'Present Perfect affirmative: have/has + past participle',
    'Regular and irregular past participles',
    'Questions with ever and short answers',
    'Adverbs: never, just, already, yet',
    'Duration: for + period / since + point in time',
    'Present Perfect vs Past Simple',
  ],
  communicationGoals: [
    'Talk about life experiences',
    'Ask and answer about experiences with "Have you ever...?"',
    'Say that you have just done something',
    'Talk about how long something has lasted',
    'Contrast experiences with specific past events',
  ],
  lessons: [
    lesson21PresentPerfectAffirmative,
    lesson22EverNever,
    lesson23JustAlreadyYet,
    lesson24ForSince,
    lesson25MiniTest,
  ],
  checkpoint: {
    id: 'm2-checkpoint',
    moduleId: 'm2-present-perfect',
    title: 'Checkpoint: Present Perfect — Experiences',
    passingScore: 80,
    exercises: [
      ...lesson21PresentPerfectAffirmative.exercises.slice(0, 2),
      ...lesson22EverNever.exercises.slice(0, 2),
      ...lesson23JustAlreadyYet.exercises.slice(0, 2),
      ...lesson24ForSince.exercises.slice(0, 1),
      ...lesson25MiniTest.exercises.slice(3, 5),
    ],
  },
}
