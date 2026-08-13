import type { Module } from '../../types'
import { lesson21Numbers } from './lesson-21-numbers'
import { lesson22Age } from './lesson-22-age'
import { lesson23Countries } from './lesson-23-countries'
import { lesson24Possessives } from './lesson-24-possessives'
import { lesson25Jobs } from './lesson-25-jobs'

export const module2PersonalInformation: Module = {
  id: 'm2-personal-information',
  levelId: 'a1',
  order: 1,
  title: 'Personal Information',
  objective: 'Aprender a dar y pedir información personal: nombre, edad, país, nacionalidad, profesión y teléfono.',
  vocabularyThemes: ['numbers', 'age', 'countries', 'nationalities', 'jobs', 'possessives'],
  grammarTopics: ['numbers', 'age', 'possessive adjectives', 'a/an with professions', 'where from'],
  communicationGoals: [
    'Give your name',
    'Say your age',
    'Say where you are from',
    'Say your nationality',
    'Say your phone number',
    'Say your profession',
  ],
  lessons: [
    lesson21Numbers,
    lesson22Age,
    lesson23Countries,
    lesson24Possessives,
    lesson25Jobs,
  ],
  checkpoint: {
    id: 'm2-checkpoint',
    moduleId: 'm2-personal-information',
    title: 'Checkpoint: Personal Information',
    passingScore: 80,
    exercises: [
      ...lesson21Numbers.exercises.slice(0, 1),
      ...lesson22Age.exercises.slice(0, 1),
      ...lesson23Countries.exercises.slice(0, 1),
      ...lesson24Possessives.exercises.slice(0, 1),
      ...lesson25Jobs.exercises.slice(1, 2),
      ...lesson22Age.miniTest.slice(0, 1),
    ],
  },
}