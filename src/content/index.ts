import type { CourseContent, Level } from './types'
import { a1Level } from './a1'
import { a2Level } from './a2'
import { b1Level } from './b1'
import { b2Placeholder, c1Placeholder, c2Placeholder } from './placeholders'

const course: CourseContent = {
  levels: [a1Level, a2Level, b1Level, b2Placeholder, c1Placeholder, c2Placeholder],
}

export function getCourse(): CourseContent {
  return course
}

export function getLevel(levelId: string): Level | undefined {
  return course.levels.find((l) => l.id === levelId)
}

export type { CourseContent, Level } from './types'