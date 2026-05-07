'use client'

import { useEffect } from 'react'

export default function ThemeProvider({ initialPalette }) {
  useEffect(() => {
    if (initialPalette) {
      const root = document.documentElement
      root.style.setProperty('--primary', initialPalette.primary_color)
      root.style.setProperty('--secondary', initialPalette.secondary_color)
      root.style.setProperty('--accent', initialPalette.accent_color)
      root.style.setProperty('--background', initialPalette.background_color)
    }
  }, [initialPalette])

  return null
}
