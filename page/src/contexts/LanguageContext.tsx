import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Locale } from '@/i18n/types'
import en from '@/i18n/locales/en'
import pl from '@/i18n/locales/pl'
import de from '@/i18n/locales/de'

const translations: Record<Locale, Record<string, string>> = { en, pl, de }

interface LanguageContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem('locale')
    if (stored === 'en' || stored === 'pl' || stored === 'de') return stored
    return 'en'
  })

  const setLocale = useCallback((l: Locale) => {
    localStorage.setItem('locale', l)
    document.documentElement.lang = l
    setLocaleState(l)
  }, [])

  const t = useCallback((key: string): string => {
    return translations[locale]?.[key] ?? translations.en[key] ?? key
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
