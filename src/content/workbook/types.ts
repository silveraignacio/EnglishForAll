import type { Exercise } from '../types'

/**
 * Página del workbook (libro de ejercicios tipo "English File / Cambridge").
 *
 * Cada página tiene un número (secuencial dentro del workbook del nivel) y
 * agrupa varios ejercicios variados — reading con preguntas, fill-in-the-
 * blanks, matching, reorder, error correction, writing… — reutilizando el
 * tipo `Exercise` (que `ExerciseRenderer` ya sabe dibujar). Se puede resolver
 * en pantalla (interactivo, con feedback) e imprimir/exportar a PDF.
 *
 * Los ejercicios se numeran automáticamente por su posición en `exercises`
 * (Ex 1, Ex 2…), de modo que una lección puede referenciar
 * `workbookRefs: [{ levelId, page, exercises: [1, 3] }]`.
 */
export interface WorkbookPage {
  /** P. ej. 'a1-wb-12'. */
  id: string
  /** Nivel al que pertenece ('a1' | 'a2' | 'b1' | 'b2'). */
  levelId: string
  /** Unidad temática, p. ej. 'Unit 5 · Routines'. */
  unit: string
  /** Número de página, secuencial dentro del workbook del nivel. */
  page: number
  /** Título opcional de la página. */
  title?: string
  /** Instrucción corta opcional en español al inicio de la página. */
  intro?: string
  /** Ejercicios de la página (se numeran por orden: Ex 1, Ex 2…). */
  exercises: Exercise[]
}
