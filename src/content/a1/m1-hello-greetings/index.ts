import type { Module } from '../../types'
import { lesson11Alphabet } from './lesson-11-alphabet'
import { lesson12Greetings } from './lesson-12-greetings'
import { lesson13Pronouns } from './lesson-13-pronouns'
import { lesson14ToBeAffirmative } from './lesson-14-to-be-affirmative'
import { lesson15ToBeNegQuestions } from './lesson-15-to-be-neg-questions'

export const module1HelloGreetings: Module = {
  id: 'm1-hello-greetings',
  levelId: 'a1',
  order: 0,
  title: 'Hello! Greetings & Alphabet',
  objective: 'Aprender a saludar, presentarse y deletrear tu nombre en inglés.',
  vocabularyThemes: ['greetings', 'alphabet', 'letters'],
  grammarTopics: ['subject pronouns', 'verb to be (affirmative, negative, questions)'],
  communicationGoals: ['Greet someone', 'Introduce yourself', 'Spell your name'],
  lessons: [
    lesson11Alphabet,
    lesson12Greetings,
    lesson13Pronouns,
    lesson14ToBeAffirmative,
    lesson15ToBeNegQuestions,
  ],
  checkpoint: {
    id: 'm1-checkpoint',
    moduleId: 'm1-hello-greetings',
    title: 'Checkpoint: Hello! Greetings & Alphabet',
    passingScore: 80,
    exercises: [
      ...lesson14ToBeAffirmative.exercises.slice(0, 2),
      ...lesson15ToBeNegQuestions.exercises.slice(0, 2),
      ...lesson12Greetings.exercises.slice(0, 1),
      ...lesson13Pronouns.exercises.slice(0, 1),
    ],
  },
}