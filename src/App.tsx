import { Routes, Route, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Dashboard } from '@/pages/Dashboard'
import { LevelPath } from '@/pages/LevelPath'
import { LessonView } from '@/pages/LessonView'
import { ModuleCheckpoint } from '@/pages/ModuleCheckpoint'
import { ReviewPage } from '@/pages/ReviewPage'
import { Achievements } from '@/pages/Achievements'
import { ExamPage } from '@/pages/ExamPage'
import { LoginPage } from '@/pages/LoginPage'
import { RegisterPage } from '@/pages/RegisterPage'

// Keyed wrappers force a full remount when the URL param changes, so the
// component resets its internal state (phase, score, idx) instead of
// reusing stale state from the previous lesson/exam/checkpoint.
function KeyedLesson() {
  const { lessonId } = useParams<{ lessonId: string }>()
  return <LessonView key={lessonId} />
}

function KeyedCheckpoint() {
  const { moduleId } = useParams<{ moduleId: string }>()
  return <ModuleCheckpoint key={moduleId} />
}

function KeyedExam() {
  const { examId } = useParams<{ examId: string }>()
  return <ExamPage key={examId} />
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/level/:levelId" element={<LevelPath />} />
        <Route path="/lesson/:lessonId" element={<KeyedLesson />} />
        <Route path="/module/:moduleId/checkpoint" element={<KeyedCheckpoint />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/exam/:examId" element={<KeyedExam />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  )
}