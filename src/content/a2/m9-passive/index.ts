import type { Module } from '../../types'
import { lesson91PresentPassive } from './lesson-91-present-passive'
import { lesson92PastPassive } from './lesson-92-past-passive'
import { lesson93PassiveByAgent } from './lesson-93-passive-by-agent'
import { lesson94MiniTest } from './lesson-94-mini-test'

export const module9Passive: Module = {
  id: 'm9-passive',
  levelId: 'a2',
  order: 8,
  title: 'Passive Voice (present & past)',
  objective: 'Formar la voz pasiva en presente y pasado simple con is/are/was/were + participio, y expresar el agente con "by".',
  vocabularyThemes: ['famous places', 'history and facts', 'daily activities', 'arts and culture'],
  grammarTopics: [
    'present simple passive (is/are + past participle)',
    'past simple passive (was/were + past participle)',
    'passive voice with by (agent)',
  ],
  communicationGoals: ['Describe how things are made or spoken', 'Talk about past events without saying who did them', 'Say who performed an action in the passive voice'],
  lessons: [lesson91PresentPassive, lesson92PastPassive, lesson93PassiveByAgent, lesson94MiniTest],
  checkpoint: {
    id: 'm9-checkpoint',
    moduleId: 'm9-passive',
    title: 'Checkpoint: Passive Voice',
    passingScore: 80,
    exercises: [
      ...lesson91PresentPassive.exercises.slice(0, 2),
      ...lesson92PastPassive.exercises.slice(0, 2),
      ...lesson93PassiveByAgent.exercises.slice(0, 1),
      ...lesson94MiniTest.exercises.slice(0, 1),
    ],
  },
}
