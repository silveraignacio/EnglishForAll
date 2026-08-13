import type { Module } from '../../types'
import { lesson111AlthoughEvenThough } from './lesson-111-although-even-though'
import { lesson112HoweverNevertheless } from './lesson-112-however-nevertheless'
import { lesson113SoBecause } from './lesson-113-so-because-becauseof'
import { lesson114SoSuchTooEnough } from './lesson-114-so-such-too-enough'
import { lesson115MiniTest } from './lesson-115-mini-test'

export const module11LinkingWords: Module = {
  id: 'm11-linking-words',
  levelId: 'b1',
  order: 10,
  title: 'Linking Words & Contrast',
  objective: 'Conectar y contrastar ideas con although/even though/though, however/nevertheless/on the other hand, so/because/because of/so that, y dar énfasis con so/such...that + too/enough.',
  vocabularyThemes: ['opinions and arguments', 'travel and transport', 'city life', 'daily problems'],
  grammarTopics: [
    'although / even though / though (contrast within a sentence)',
    'however / nevertheless / on the other hand (contrast between sentences)',
    'so (result), because + clause, because of + noun, so that + clause',
    'so + adjective + that / such a/an + adjective + noun + that',
    'too + adjective + to / adjective + enough + to',
  ],
  communicationGoals: [
    'Express contrast and surprise in a single sentence',
    'Contrast two ideas in separate sentences',
    'Give reasons and talk about results and purposes',
    'Emphasise strong opinions and talk about excess or sufficiency',
  ],
  lessons: [
    lesson111AlthoughEvenThough,
    lesson112HoweverNevertheless,
    lesson113SoBecause,
    lesson114SoSuchTooEnough,
    lesson115MiniTest,
  ],
  checkpoint: {
    id: 'm11-checkpoint',
    moduleId: 'm11-linking-words',
    title: 'Checkpoint: Linking Words & Contrast',
    passingScore: 80,
    exercises: [
      ...lesson111AlthoughEvenThough.exercises.slice(0, 2),
      ...lesson112HoweverNevertheless.exercises.slice(0, 2),
      ...lesson113SoBecause.exercises.slice(0, 2),
      ...lesson114SoSuchTooEnough.exercises.slice(0, 2),
      lesson115MiniTest.exercises[6],
    ],
  },
}
