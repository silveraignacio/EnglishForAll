import { useState, type ReactNode } from 'react'
import type { Exercise } from '@/content/types'
import { isAnswerCorrect, cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Markdown } from '@/components/ui/Markdown'
import { SpeakButton } from '@/components/ui/SpeakButton'

interface Feedback {
  correct: boolean
  explanation: string
}

export interface ExerciseRendererProps {
  exercise: Exercise
  onAnswer: (correct: boolean, userAnswer: string, attempts: number) => void
  onNext?: () => void
  isLast?: boolean
  /** In "assessment" mode, the user cannot advance until they answer correctly. */
  strictMode?: boolean
  /**
   * "Silent" mode (placement test): no feedback is shown, the answer is not
   * revealed, there is no retry — after a single attempt the exercise locks
   * and only a "Siguiente" button appears. The result is computed at the end.
   */
  silentMode?: boolean
}

export function ExerciseRenderer({ exercise, onAnswer, onNext, isLast, strictMode, silentMode }: ExerciseRendererProps) {
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [locked, setLocked] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleResult = (correct: boolean, userAnswer: string) => {
    if (silentMode && answered) return
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    if (silentMode) {
      // In silent mode we never reveal the result; we just lock after one attempt.
      setLocked(true)
      setAnswered(true)
    } else {
      setFeedback({ correct, explanation: exercise.explanation })
      if (correct) setLocked(true)
    }
    onAnswer(correct, userAnswer, newAttempts)
  }

  const handleNext = () => {
    setFeedback(null)
    setAttempts(0)
    setLocked(false)
    setAnswered(false)
    onNext?.()
  }

  return (
    <Card className="animate-fade-in">
      <ExerciseHeader exercise={exercise} />
      <ExerciseBody
        exercise={exercise}
        locked={locked}
        onResult={handleResult}
      />
      {feedback && !silentMode && (
        <FeedbackPanel
          correct={feedback.correct}
          correctAnswer={exercise.correctAnswer}
          explanation={feedback.explanation}
          attempts={attempts}
          strictMode={strictMode}
        />
      )}
      {silentMode && answered && (
        <div className="mt-4 flex justify-end">
          <Button onClick={handleNext} variant="primary">
            {isLast ? 'Ver resultados' : 'Siguiente'}
          </Button>
        </div>
      )}
      {!silentMode && feedback && (!strictMode || feedback.correct) && (
        <div className="mt-4 flex justify-end">
          <Button onClick={handleNext} variant={feedback.correct ? 'primary' : 'secondary'}>
            {isLast ? 'Ver resultados' : 'Siguiente'}
          </Button>
        </div>
      )}
    </Card>
  )
}

function ExerciseHeader({ exercise }: { exercise: Exercise }) {
  const typeLabels: Record<string, string> = {
    multiple_choice: 'Opción múltiple',
    fill_blank: 'Rellenar hueco',
    translate: 'Traducir',
    reorder: 'Ordenar palabras',
    true_false: 'Verdadero / Falso',
    match: 'Relacionar',
    error_correction: 'Corregir error',
    reading: 'Comprensión de lectura',
    sentence_building: 'Construir frase',
    select_correct: 'Elegir frase correcta',
  }
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs font-semibold text-ink-faint uppercase tracking-wide">
        {typeLabels[exercise.type] || exercise.type}
      </span>
      <span className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={cn(
              'w-2 h-2 rounded-full',
              i < exercise.difficulty ? 'bg-warning-400' : 'bg-surface-muted'
            )}
            title={`Dificultad ${exercise.difficulty}/5`}
          />
        ))}
      </span>
    </div>
  )
}

function ExerciseBody({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  switch (exercise.type) {
    case 'multiple_choice':
      return <MultipleChoice exercise={exercise} locked={locked} onResult={onResult} />
    case 'fill_blank':
      return <FillBlank exercise={exercise} locked={locked} onResult={onResult} />
    case 'translate':
      return <TranslateExercise exercise={exercise} locked={locked} onResult={onResult} />
    case 'reorder':
      return <Reorder exercise={exercise} locked={locked} onResult={onResult} />
    case 'true_false':
      return <TrueFalse exercise={exercise} locked={locked} onResult={onResult} />
    case 'match':
      return <Match exercise={exercise} locked={locked} onResult={onResult} />
    case 'error_correction':
      return <ErrorCorrection exercise={exercise} locked={locked} onResult={onResult} />
    case 'select_correct':
      return <SelectCorrect exercise={exercise} locked={locked} onResult={onResult} />
    case 'sentence_building':
      return <SentenceBuilding exercise={exercise} locked={locked} onResult={onResult} />
    case 'reading':
      return <Reading exercise={exercise} locked={locked} onResult={onResult} />
    default:
      return <div>Tipo no soportado: {exercise.type}</div>
  }
}

// ----- Multiple Choice -----
function PromptWithAudio({ exercise, promptClass }: { exercise: Exercise; promptClass?: string }) {
  return (
    <div className="mb-4">
      <div className={cn('flex items-start gap-2', promptClass || 'text-lg text-ink leading-relaxed')}>
        <p className="flex-1">{exercise.prompt}</p>
        <SpeakButton text={exercise.prompt} size="sm" className="mt-0.5 flex-none" />
      </div>
      {exercise.promptTranslation && (
        <p className="text-sm text-ink-light mt-1 italic">{exercise.promptTranslation}</p>
      )}
    </div>
  )
}

// ----- Multiple Choice -----
function MultipleChoice({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const options = exercise.options || []

  return (
    <div>
      <PromptWithAudio exercise={exercise} />
      <div className="space-y-2.5">
        {options.map((opt) => (
          <button
            key={opt}
            disabled={locked}
            onClick={() => {
              setSelected(opt)
              onResult(opt === exercise.correctAnswer, opt)
            }}
            className={cn(
              'flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border-2 transition-all',
              'border-ink/10 hover:border-brand-400 hover:bg-brand-50',
              selected === opt && 'border-brand-500 bg-brand-50',
              locked && selected === opt && exercise.correctAnswer === opt && 'border-success-500 bg-success-50',
              locked && selected === opt && exercise.correctAnswer !== opt && 'border-error-500 bg-error-50'
            )}
          >
            <span className="font-medium text-ink">{opt}</span>
            <SpeakButton text={opt} size="sm" className="ml-auto flex-none" />
          </button>
        ))}
      </div>
    </div>
  )
}

// ----- Fill Blank -----
function FillBlank({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const [value, setValue] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value || locked) return
    onResult(isAnswerCorrect(value, exercise), value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <PromptWithAudio exercise={exercise} />
      <p className="text-sm text-ink-light mb-2">
        ✏️ Rellena solo el hueco (___): escribe la palabra o palabras que faltan, no la frase entera.
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={locked}
        placeholder="Escribe la palabra que falta..."
        autoFocus
        className="input mb-4"
        aria-label={exercise.prompt}
      />
      {!locked && (
        <Button type="submit" variant="primary" disabled={!value}>
          Comprobar
        </Button>
      )}
    </form>
  )
}

// ----- Translate -----
function TranslateExercise({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const [value, setValue] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value || locked) return
    onResult(isAnswerCorrect(value, exercise), value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <div className="flex items-start gap-2 text-lg text-ink">
          <p className="flex-1">{exercise.prompt}</p>
          <SpeakButton text={exercise.prompt} size="sm" className="mt-0.5 flex-none" />
        </div>
        {exercise.promptTranslation && (
          <p className="text-sm text-ink-light mt-1 italic">{exercise.promptTranslation}</p>
        )}
      </div>
      <p className="text-sm text-ink-light mb-2">
        🌎 Traduce la frase <strong>entera</strong> al inglés (con mayúscula al inicio y punto final).
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={locked}
        placeholder="Escribe la frase completa en inglés..."
        autoFocus
        className="input mb-4"
        aria-label={exercise.prompt}
      />
      {!locked && (
        <Button type="submit" variant="primary" disabled={!value}>
          Comprobar
        </Button>
      )}
    </form>
  )
}

// ----- Reorder -----
function Reorder({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const words = exercise.words || []
  const [available, setAvailable] = useState<string[]>(words)
  const [selected, setSelected] = useState<string[]>([])

  const addWord = (word: string, index: number) => {
    if (locked) return
    setSelected([...selected, word])
    setAvailable(available.filter((_, i) => i !== index))
  }
  const removeWord = (word: string, index: number) => {
    if (locked) return
    setSelected(selected.filter((_, i) => i !== index))
    setAvailable([...available, word])
  }
  const handleSubmit = () => {
    const answer = selected.join(' ')
    onResult(isAnswerCorrect(answer, exercise), answer)
  }
  return (
    <div>
      <p className="text-lg text-ink mb-4">{exercise.prompt}</p>
      {exercise.promptTranslation && (
        <p className="text-sm text-ink-light mb-4 italic">{exercise.promptTranslation}</p>
      )}
      <div className="min-h-[60px] p-3 rounded-xl border-2 border-dashed border-ink/15 mb-3 flex flex-wrap gap-2">
        {selected.length === 0 && (
          <span className="text-ink-faint text-sm">Toca las palabras de abajo para formar la frase.</span>
        )}
        {selected.map((word, i) => (
          <button
            key={i}
            onClick={() => removeWord(word, i)}
            disabled={locked}
            className="px-3 py-2 rounded-lg bg-brand-100 text-brand-700 font-medium hover:bg-brand-200 text-sm"
          >
            {word}
          </button>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-surface-muted flex flex-wrap gap-2 min-h-[60px]">
        {available.map((word, i) => (
          <button
            key={i}
            onClick={() => addWord(word, i)}
            disabled={locked}
            className="px-3 py-2 rounded-lg bg-surface border border-ink/10 text-ink hover:border-brand-400 text-sm font-medium"
          >
            {word}
          </button>
        ))}
      </div>
      {!locked && (
        <Button
          onClick={handleSubmit}
          variant="primary"
          className="mt-4"
          disabled={selected.length === 0}
        >
          Comprobar
        </Button>
      )}
    </div>
  )
}

// ----- True / False -----
function TrueFalse({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelect = (value: string) => {
    if (locked) return
    setSelected(value)
    onResult(value === exercise.correctAnswer, value)
  }
  return (
    <div>
      <PromptWithAudio exercise={exercise} />
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleSelect('true')}
          disabled={locked}
          className={cn(
            'py-3.5 rounded-xl border-2 font-semibold text-lg transition-all',
            'border-ink/10 hover:border-success-400',
            selected === 'true' && exercise.correctAnswer === 'true' && 'border-success-500 bg-success-50 text-success-600',
            selected === 'true' && exercise.correctAnswer !== 'true' && 'border-error-500 bg-error-50 text-error-600'
          )}
        >
          Verdadero
        </button>
        <button
          onClick={() => handleSelect('false')}
          disabled={locked}
          className={cn(
            'py-3.5 rounded-xl border-2 font-semibold text-lg transition-all',
            'border-ink/10 hover:border-error-400',
            selected === 'false' && exercise.correctAnswer === 'false' && 'border-success-500 bg-success-50 text-success-600',
            selected === 'false' && exercise.correctAnswer !== 'false' && 'border-error-500 bg-error-50 text-error-600'
          )}
        >
          Falso
        </button>
      </div>
    </div>
  )
}

// ----- Match -----
function Match({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const pairs = exercise.pairs || []
  const [leftSel, setLeftSel] = useState<number | null>(null)
  const [matches, setMatches] = useState<Record<number, number>>({}) // leftIdx -> rightIdx
  const [rightUsed, setRightUsed] = useState<Set<number>>(new Set())

  const leftItems = pairs.map(p => p.left)
  const rightItems = pairs.map(p => p.right)

  const handleLeftClick = (idx: number) => {
    if (locked || rightSetFull()) return
    setLeftSel(idx)
  }
  const handleRightClick = (idx: number) => {
    if (locked || leftSel === null || rightUsed.has(idx)) return
    const newMatches = { ...matches, [leftSel]: idx }
    setMatches(newMatches)
    setRightUsed(new Set([...rightUsed, idx]))
    setLeftSel(null)
    if (Object.keys(newMatches).length === pairs.length) {
      const allCorrect = pairs.every((_, i) => newMatches[i] === i)
      onResult(allCorrect, JSON.stringify(newMatches))
    }
  }

  function rightSetFull() {
    return Object.keys(matches).length >= pairs.length
  }

  return (
    <div>
      <p className="text-lg text-ink mb-4">{exercise.prompt}</p>
      {exercise.promptTranslation && (
        <p className="text-sm text-ink-light mb-4 italic">{exercise.promptTranslation}</p>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {leftItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleLeftClick(i)}
              disabled={locked || i in matches}
              className={cn(
                'w-full px-4 py-2.5 rounded-xl border-2 text-left text-sm transition-all',
                leftSel === i && 'border-brand-500 bg-brand-50',
                i in matches && 'border-success-400 bg-success-50 opacity-70',
                !locked && !(i in matches) && leftSel !== i && 'border-ink/10 hover:border-brand-400'
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rightItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleRightClick(i)}
              disabled={locked || rightUsed.has(i)}
              className={cn(
                'w-full px-4 py-2.5 rounded-xl border-2 text-left text-sm transition-all',
                rightUsed.has(i) && 'border-success-400 bg-success-50 opacity-70',
                !locked && !rightUsed.has(i) && 'border-ink/10 hover:border-brand-400'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ----- Error Correction -----
function ErrorCorrection({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const [value, setValue] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value || locked) return
    onResult(isAnswerCorrect(value, exercise), value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-lg text-ink mb-1">{exercise.prompt}</p>
      {exercise.promptTranslation && (
        <p className="text-sm text-ink-light mb-4 italic">{exercise.promptTranslation}</p>
      )}
      <p className="text-sm text-error-600 mb-3">
        🛠️ Hay un error en la frase. Reescribe la frase <strong>entera</strong>, ya corregida (no solo la palabra que cambia):
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={locked}
        placeholder="Escribe la frase completa corregida..."
        autoFocus
        className="input mb-4"
        aria-label={exercise.prompt}
      />
      {!locked && (
        <Button type="submit" variant="primary" disabled={!value}>
          Comprobar
        </Button>
      )}
    </form>
  )
}

// ----- Select Correct -----
function SelectCorrect({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const options = exercise.options || []
  return (
    <div>
      <p className="text-lg text-ink mb-4">{exercise.prompt}</p>
      <div className="space-y-2.5">
        {options.map((opt) => (
          <button
            key={opt}
            disabled={locked}
            onClick={() => {
              setSelected(opt)
              onResult(opt === exercise.correctAnswer, opt)
            }}
            className={cn(
              'flex items-start gap-3 w-full text-left px-4 py-3 rounded-xl border-2 transition-all',
              'border-ink/10 hover:border-brand-400 hover:bg-brand-50',
              selected === opt && 'border-brand-500 bg-brand-50',
              locked && selected === opt && exercise.correctAnswer === opt && 'border-success-500 bg-success-50',
              locked && selected === opt && exercise.correctAnswer !== opt && 'border-error-500 bg-error-50'
            )}
          >
            <span className="text-sm font-medium text-ink leading-relaxed">{opt}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ----- Sentence Building -----
function SentenceBuilding({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  return <Reorder exercise={exercise} locked={locked} onResult={onResult} />
}

// ----- Reading -----
function Reading({
  exercise,
  locked,
  onResult,
}: {
  exercise: Exercise
  locked: boolean
  onResult: (correct: boolean, userAnswer: string) => void
}) {
  const reading = exercise.reading
  if (!reading) return null
  return (
    <div>
      <p className="text-lg text-ink mb-3 font-semibold">{exercise.prompt}</p>
      <div className="mb-4 text-ink-soft leading-relaxed">
        <Markdown content={reading.text} />
      </div>
      {reading.translation && (
        <details className="mb-4">
          <summary className="text-sm text-ink-light cursor-pointer hover:text-ink">
            Ver traducción
          </summary>
          <p className="text-sm text-ink-light mt-2 italic whitespace-pre-line">{reading.translation}</p>
        </details>
      )}
      <div className="space-y-4">
        {reading.questions.map((q, idx) => (
          <ReadingSubQuestion key={q.id || idx} exercise={q} locked={locked} />
        ))}
      </div>
    </div>
  )
}

function ReadingSubQuestion({ exercise, locked }: { exercise: Exercise; locked: boolean }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const options = exercise.options || []
  return (
    <div className="p-3 rounded-xl bg-surface-muted border border-ink/5">
      <p className="text-ink mb-2">{exercise.prompt}</p>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt}
            disabled={locked || showResult}
            onClick={() => {
              setSelected(opt)
              setShowResult(true)
            }}
            className={cn(
              'flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg border-2 text-sm transition-all',
              'border-ink/10 hover:border-brand-400',
              showResult && selected === opt && exercise.correctAnswer === opt && 'border-success-500 bg-success-50',
              showResult && selected === opt && exercise.correctAnswer !== opt && 'border-error-500 bg-error-50',
              showResult && exercise.correctAnswer === opt && selected !== opt && 'border-success-500 bg-success-50/50'
            )}
          >
            {opt}
          </button>
        ))}
      </div>
      {showResult && (
        <p className={cn('mt-2 text-sm', selected === exercise.correctAnswer ? 'text-success-600' : 'text-error-600')}>
          {selected === exercise.correctAnswer ? 'Correcto.' : `Incorrecto. La respuesta correcta es: ${exercise.correctAnswer}`}
        </p>
      )}
    </div>
  )
}

// ----- Feedback Panel -----
function FeedbackPanel({
  correct,
  correctAnswer,
  explanation,
  attempts,
  strictMode,
}: {
  correct: boolean
  correctAnswer: string
  explanation: string
  attempts: number
  strictMode?: boolean
}) {
  return (
    <div
      className={cn(
        'mt-4 p-4 rounded-xl border-2 animate-slide-up',
        correct ? 'border-success-500 bg-success-50' : 'border-error-500 bg-error-50'
      )}
    >
      <div className="flex items-start gap-2">
        <div
          className={cn(
            'flex-none w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm',
            correct ? 'bg-success-500' : 'bg-error-500'
          )}
        >
          {correct ? '✓' : '✗'}
        </div>
        <div>
          <p className={cn('font-semibold mb-1', correct ? 'text-success-600' : 'text-error-600')}>
            {correct ? '¡Correcto!' : 'No del todo correcto'}
          </p>
          {!correct && !strictMode && (
            <p className="text-sm text-ink-soft mb-2">
              La respuesta correcta es: <strong>{correctAnswer}</strong>{' '}
              <SpeakButton text={correctAnswer} size="sm" className="inline-flex align-middle" />
            </p>
          )}
          {!correct && strictMode && (
            <p className="text-sm text-warning-600 font-medium mb-2">
              Vuelve a intentarlo — en la evaluación necesitas responder correctamente para continuar.
            </p>
          )}
          <div className="text-sm text-ink-soft leading-relaxed">
            <Markdown content={explanation} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseRenderer