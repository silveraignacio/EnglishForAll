import { useCallback, useRef } from 'react'
import { normalizeForSpeech, speechAudioUrl } from '@/lib/audioHash'

// Nombres de voces en-US/en-GB conocidas por sonar naturales (motores online
// de Chrome/Edge o las voces "premium" embebidas en macOS/iOS), en orden de
// preferencia. El resto son voces locales tipo "eSpeak"/"David" que suenan
// muy robóticas — mejor evitarlas si hay algo mejor disponible.
const PREFERRED_VOICE_NAMES = [
  'Google UK English Female',
  'Google US English',
  'Microsoft Ava Online',
  'Microsoft Emma Online',
  'Microsoft Andrew Online',
  'Samantha',
  'Karen',
  'Daniel',
]

function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  for (const name of PREFERRED_VOICE_NAMES) {
    const match = voices.find((v) => v.name === name)
    if (match) return match
  }
  // Cualquier voz online (no local) suele sonar mejor que el motor offline del SO.
  const anyOnline = voices.find((v) => !v.localService && v.lang.startsWith('en'))
  if (anyOnline) return anyOnline
  return voices.find((v) => v.lang === 'en-US') ?? voices.find((v) => v.lang.startsWith('en'))
}

/**
 * Reproduce texto en inglés. Primero intenta el mp3 pre-generado de
 * `/audio/pronounce/<hash>.mp3` (audio real, TTS de calidad); si ese archivo
 * da 404 / error de carga, hace fallback automático a la Web Speech API
 * nativa del navegador. Ese fallback es lo que cubre a las palabras que
 * todavía no tienen mp3 generado (cualquier contenido futuro), así nunca se
 * pierde la pronunciación.
 */
export function useSpeech() {
  // Se descarta el audio que quedó a medio cargar al hacer un nuevo click.
  const audioRef = useRef<HTMLAudioElement | null>(null)
  // Cache negativo: textos que ya dieron 404 en esta sesión → saltar directo
  // al Web Speech API sin volver a pedir el mp3.
  const missingAudio = useRef<Set<string>>(new Set())

  const speakViaWebSpeech = useCallback((text: string, rate: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const spokenText = normalizeForSpeech(text)
    const utterance = new SpeechSynthesisUtterance(spokenText)
    utterance.lang = 'en-US'
    utterance.rate = rate

    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      const best = pickBestVoice(voices)
      if (best) utterance.voice = best
      window.speechSynthesis.speak(utterance)
    } else {
      // Chrome carga la lista de voces de forma async la primera vez.
      window.speechSynthesis.onvoiceschanged = () => {
        const best = pickBestVoice(window.speechSynthesis.getVoices())
        if (best) utterance.voice = best
        window.speechSynthesis.speak(utterance)
      }
    }
  }, [])

  const speak = useCallback(
    (text: string, rate = 0.9) => {
      if (typeof window === 'undefined' || !text) return

      // Cortar cualquier reproducción previa (mp3 o Web Speech).
      audioRef.current?.pause()
      audioRef.current = null
      window.speechSynthesis?.cancel()

      const src = speechAudioUrl(text)
      const canUseAudio = src !== null && !missingAudio.current.has(src)
      if (canUseAudio && typeof Audio !== 'undefined') {
        const audio = new Audio(src)
        audioRef.current = audio
        let failed = false
        const fallback = () => {
          if (failed) return
          failed = true
          missingAudio.current.add(src!)
          if (audioRef.current === audio) audioRef.current = null
          speakViaWebSpeech(text, rate)
        }
        // `play()` falla si el recurso no carga (404) o si el navegador
        // bloquea el arranque; el evento `error` cubre los otros casos.
        audio.addEventListener('error', fallback)
        audio.play().catch(fallback)
        return
      }
      speakViaWebSpeech(text, rate)
    },
    [speakViaWebSpeech]
  )

  // Con los mp3 pre-generados la reproducción ya no depende de speechSynthesis.
  const isSupported = typeof window !== 'undefined'

  return { speak, isSupported }
}
