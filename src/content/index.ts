import type { CourseContent, Level, Exam } from './types'
import { a1Level } from './a1'
import { a2Level } from './a2'
import { b1Level } from './b1'
import { b2Level } from './b2'
import { c1Placeholder, c2Placeholder } from './placeholders'
import { exams } from './exams'
import { getWorkbook, getWorkbookPage } from './workbook'

const course: CourseContent = {
  levels: [a1Level, a2Level, b1Level, b2Level, c1Placeholder, c2Placeholder],
  exams,
}

export function getCourse(): CourseContent {
  return course
}

export function getLevel(levelId: string): Level | undefined {
  return course.levels.find((l) => l.id === levelId)
}

export function getExam(examId: string): Exam | undefined {
  return course.exams?.find((e) => e.id === examId)
}

export { getWorkbook, getWorkbookPage }

export type { CourseContent, Level } from './types'