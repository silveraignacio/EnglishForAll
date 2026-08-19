// Hash de texto → nombre de archivo de audio de pronunciación.
//
// El script `scripts/generate-pronunciation-audio.mjs` genera un mp3 por cada
// string hablado del nivel A1 con este MISMO algoritmo: `normalizeForSpeech`
// aplicada al texto EXACTO que recibe `speak()` y FNV-1a de 32 bits en hex.
// NO cambiar este módulo sin regenerar el audio, o los hashes de runtime no
// van a coincidir con los archivos en public/audio/pronounce/.

/** Una sola letra en mayúscula (p. ej. al deletrear el alfabeto) hace que
 * algunos motores de TTS digan "Capital A" en vez de solo "A". En minúscula,
 * dicen el nombre de la letra directamente. */
export function normalizeForSpeech(text: string): string {
  return /^[A-Z]$/.test(text) ? text.toLowerCase() : text
}

/** FNV-1a de 32 bits en hex (determinístico, corto). */
export function fnv1a(str: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16)
}

/** URL del mp3 de pronunciación para un texto, o null si no puede haberlo. */
export function speechAudioUrl(text: string): string | null {
  const t = normalizeForSpeech(text)
  if (!t) return null
  return `/audio/pronounce/${fnv1a(t)}.mp3`
}
