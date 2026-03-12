import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { motion } from 'motion/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useTranslation } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { LOCALES } from '@/i18n/types'
import type { Locale } from '@/i18n/types'
import { cn } from '@/lib/utils'

const NAV_KEYS = ['about', 'strengths', 'experience', 'skills', 'projects', 'contact'] as const

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy([...NAV_KEYS])
  const { locale, setLocale, t } = useTranslation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = NAV_KEYS.map((key) => ({
    label: t(`nav.${key}`),
    href: `#${key}`,
    id: key,
  }))

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent',
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#hero" className="font-mono text-accent font-semibold tracking-tight hover:opacity-80 transition-opacity">
            szymon<span className="text-secondary">@</span>devbox
          </a>

          {/* Desktop links with animated underline */}
          <ul className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={link.href}
                className={cn(
                  'text-sm px-3 py-2 transition-colors inline-block',
                  active === link.id ? 'text-accent' : 'text-muted-foreground hover:text-accent',
                )}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
        </div>

        {/* Desktop right controls */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Separator orientation="vertical" className="h-5" />
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-accent">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-surface border-border w-64">
            <nav className="flex flex-col gap-6 pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    active === link.id ? 'text-accent' : 'text-foreground hover:text-accent',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Separator className="my-6" />
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {LOCALES.map((l: Locale) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className={cn(
                      'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                      locale === l
                        ? 'bg-accent text-background'
                        : 'text-muted-foreground hover:text-foreground hover:bg-surface-2',
                    )}
                  >
                    {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
              <div className="flex items-center">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
