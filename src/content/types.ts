// Content authoring types — defines the shape of all course content data.
// All educational content files in src/content/** must conform to these types.

export type ExerciseType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'translate'
  | 'reorder'
  | 'true_false'
  | 'match'
  | 'error_correction'
  | 'reading'
  | 'sentence_building'
  | 'select_correct'
  | 'listening'
  | 'writing'
  | 'speaking'

export interface MatchPair {
  left: string
  right: string
}

export interface ReadingPassage {
  text: string
  translation?: string
  questions: Exercise[]
}

/**
 * `audioText` is read aloud by TTS (or, for authentic clips, matches an
 * `audioUrl` recording) but must NEVER be shown or translated to the
 * learner during the exercise — only the questions are, and they're
 * answered in English from what was heard, not from reading a transcript.
 */
export interface ListeningClip {
  audioText: string
  audioUrl?: string
  questions: Exercise[]
}

export interface Exercise {
  id: string
  type: ExerciseType
  concept: string
  difficulty: number
  prompt: string
  promptTranslation?: string
  correctAnswer: string
  acceptedAnswers?: string[]
  explanation: string
  options?: string[]
  pairs?: MatchPair[]
  words?: string[]
  sentences?: string[]
  reading?: ReadingPassage
  acceptApproximate?: boolean
  /** 'listening' only. */
  listening?: ListeningClip
  /**
   * 'writing' only. `prompt` holds the topic; these mirror the Cambridge
   * B1/B2 writing rubric fields so the AI evaluator has real task context
   * instead of a bare topic string. minWords/maxWords are enforced
   * client-side before submitting for evaluation.
   */
  taskType?: 'email' | 'article' | 'story' | 'essay' | 'review' | 'report'
  targetReader?: string
  register?: 'formal' | 'neutral' | 'informal'
  contentPoints?: string[]
  requiresOwnIdea?: boolean
  minWords?: number
  maxWords?: number
  /**
   * 'speaking' only. 'repeat' (default): correctAnswer holds the phrase to
   * read aloud, graded by fuzzy match against the transcript — works
   * without AI. 'free': prompt is an open topic/question, graded by
   * self-report only for now (no AI speaking evaluation yet).
   */
  speakingMode?: 'repeat' | 'free'
}

export interface VocabItem {
  word: string
  translation_es: string
  level: string
  category: string
  partOfSpeech: string
  example: string
  exampleTranslation?: string
  phonetic?: string
  audioUrl?: string
}

export interface GrammarPoint {
  id: string
  level: string
  name: string
  explanation_es: string
  formula: string
  examples: string[]
  commonMistakes?: string[]
}

export interface Example {
  english: string
  spanish: string
  note?: string
}

export interface CommonMistake {
  wrong: string
  correct: string
  explanation: string
}

export interface Lesson {
  id: string
  moduleId: string
  order: number
  title: string
  objective: string
  explanation_es: string
  examples: Example[]
  rule: string
  commonMistakes: CommonMistake[]
  vocabulary: VocabItem[]
  grammarPoints: GrammarPoint[]
  exercises: Exercise[]
  miniTest: Exercise[]
  reviewItems: string[]
  prerequisites: string[]
}

export interface Checkpoint {
  id: string
  moduleId: string
  title: string
  exercises: Exercise[]
  passingScore: number
}

export interface Module {
  id: string
  levelId: string
  order: number
  title: string
  objective: string
  vocabularyThemes: string[]
  grammarTopics: string[]
  communicationGoals: string[]
  lessons: Lesson[]
  checkpoint: Checkpoint
}

export interface Level {
  id: string
  name: string
  title: string
  description: string
  status: 'available' | 'coming_soon'
  modules: Module[]
}

export interface CourseContent {
  levels: Level[]
}