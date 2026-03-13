import { useTranslation } from '@/contexts/LanguageContext'

const NAV_LINKS = ['about', 'strengths', 'experience', 'skills', 'projects', 'contact'] as const

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border dark:shadow-[0_-1px_0_oklch(0.75_0.20_275_/_0.12)] backdrop-blur-sm bg-background/80">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap items-center gap-4 font-mono text-sm">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="cursor-pointer text-muted-foreground hover:text-accent transition-colors"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground font-mono">
          &copy; 2026 Szymon Wator. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
