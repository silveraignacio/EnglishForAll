import type { Module } from '../../types'
import { lesson101VerbsIngTo } from './lesson-101-verbs-ing-to'
import { lesson102MeaningChangingVerbs } from './lesson-102-meaning-changing-verbs'
import { lesson103VerbObjectTo } from './lesson-103-verb-object-to'
import { lesson104MiniTest } from './lesson-104-mini-test'

export const module10GerundsInfinitives: Module = {
  id: 'm10-gerunds-vs-infinitives',
  levelId: 'b1',
  order: 9,
  title: 'Gerunds vs Infinitives',
  objective: 'Distinguir cuándo usar el gerundio (-ing) y el infinitivo (to + verbo): verbos que aceptan ambas formas sin cambiar el significado, verbos que cambian de sentido según la forma, y la estructura verbo + objeto + to.',
  vocabularyThemes: ['hobbies and preferences', 'healthy habits', 'advice and requests', 'daily decisions'],
  grammarTopics: [
    'love/like/hate/prefer/begin/start + -ing or to (same meaning)',
    'Meaning-changing verbs: stop/remember/forget/try + -ing vs + to',
    'Verb + object + to-infinitive: want/need/tell/ask/advise/encourage',
    'enjoy + -ing (only -ing)',
  ],
  communicationGoals: [
    'Express likes, preferences and opinions about activities',
    'Talk about past habits and things you stopped doing',
    'Give and report advice, requests and instructions',
    'Distinguish meaning based on -ing vs to after key verbs',
  ],
  lessons: [
    lesson101VerbsIngTo,
    lesson102MeaningChangingVerbs,
    lesson103VerbObjectTo,
    lesson104MiniTest,
  ],
  checkpoint: {
    id: 'm10-checkpoint',
    moduleId: 'm10-gerunds-vs-infinitives',
    title: 'Checkpoint: Gerunds vs Infinitives',
    passingScore: 80,
    exercises: [
      ...lesson101VerbsIngTo.exercises.slice(0, 2),
      ...lesson102MeaningChangingVerbs.exercises.slice(0, 2),
      ...lesson103VerbObjectTo.exercises.slice(0, 2),
      lesson104MiniTest.exercises[6],
    ],
  },
}
