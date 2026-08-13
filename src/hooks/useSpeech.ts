import { useCallback } from 'react'

/**
 * Reproduce texto en inglés con la Web Speech API nativa del navegador
 * (sin servicios de pago ni dependencias externas).
 */
export function useSpeech() {
  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    // Una sola letra en mayúscula (p. ej. al deletrear el alfabeto) hace
    // que algunos motores de TTS digan "Capital A" en vez de solo "A".
    // En minúscula, dicen el nombre de la letra directamente.
    const spokenText = /^[A-Z]$/.test(text) ? text.toLowerCase() : text
    const utterance = new SpeechSynthesisUtterance(spokenText)
    utterance.lang = 'en-US'
    utterance.rate = 0.9
    window.speechSynthesis.speak(utterance)
  }, [])

  const isSupported = typeof window !== 'undefined' && !!window.speechSynthesis

  return { speak, isSupported }
}