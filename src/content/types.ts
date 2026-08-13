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

export interface MatchPair {
  left: string
  right: string
}

export interface ReadingPassage {
  text: string
  translation?: string
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