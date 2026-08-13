import type { Module } from '../../types'
import { lesson81FoodVocab } from './lesson-81-food-vocab'
import { lesson82Meals } from './lesson-82-meals'
import { lesson83LikesDislikes } from './lesson-83-likes-dislikes'
import { lesson84Restaurant } from './lesson-84-restaurant'
import { lesson85SomeAny } from './lesson-85-some-any'
import { lesson86MiniTest } from './lesson-86-mini-test'

export const module8Food: Module = {
  id: 'm8-food',
  levelId: 'a1',
  order: 7,
  title: 'Food & Drink — Likes & Dislikes',
  objective: 'Aprender vocabulario de comida y bebida, expresar gustos, pedir en un restaurante y usar some/any con cantidades.',
  vocabularyThemes: ['food', 'drinks', 'meals', 'restaurant', 'quantities'],
  grammarTopics: [
    "like / love / hate + noun or -ing",
    'some / any',
    'How much / How many',
    'countable and uncountable nouns',
  ],
  communicationGoals: [
    'Talk about food and drinks',
    'Express likes and dislikes',
    'Order food in a restaurant',
    'Ask about quantities',
  ],
  lessons: [
    lesson81FoodVocab,
    lesson82Meals,
    lesson83LikesDislikes,
    lesson84Restaurant,
    lesson85SomeAny,
    lesson86MiniTest,
  ],
  checkpoint: {
    id: 'm8-checkpoint',
    moduleId: 'm8-food',
    title: 'Checkpoint: Food & Drink — Likes & Dislikes',
    passingScore: 80,
    exercises: [
      ...lesson81FoodVocab.exercises.slice(0, 2),
      ...lesson82Meals.exercises.slice(0, 1),
      ...lesson83LikesDislikes.exercises.slice(0, 1),
      ...lesson84Restaurant.exercises.slice(0, 1),
      ...lesson85SomeAny.exercises.slice(0, 1),
    ],
  },
}
