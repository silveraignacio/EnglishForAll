import type { WorkbookPage } from './types'
import { a1Workbook } from './a1'
import { a2Workbook } from './a2'
import { b1Workbook } from './b1'
import { b2Workbook } from './b2'

export const workbooks: Record<string, WorkbookPage[]> = {
  a1: a1Workbook,
  a2: a2Workbook,
  b1: b1Workbook,
  b2: b2Workbook,
}

export function getWorkbook(levelId: string): WorkbookPage[] {
  return workbooks[levelId] ?? []
}

export function getWorkbookPage(levelId: string, page: number): WorkbookPage | undefined {
  return getWorkbook(levelId).find((p) => p.page === page)
}

export type { WorkbookPage } from './types'
