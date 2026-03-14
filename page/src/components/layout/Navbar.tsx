import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useTranslation } from '@/contexts/LanguageContext'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { LOCALES } from '@/i18n/types'
import type { Locale } from '@/i18n/types'
import { cn } from '@/lib/utils'

const NAV_KEYS = ['about', 'strengths', 'experience', 'skills', 'projects', 'contact'] as const

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  pl: 'PL',
  de: 'DE',
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 relative flex flex-col justify-between">
      <motion.span
        className="block h-0.5 w-full bg-current rounded-full origin-center"
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="block h-0.5 w-full bg-current rounded-full"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-0.5 w-full bg-current rounded-full origin-center"
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  )
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNavClick = useCallback((href: string) => {
    setOpen(false)
    // Small delay so the menu animates out before scrolling
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
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
          <a href="#hero" className="cursor-pointer font-mono text-accent font-semibold tracking-tight hover:opacity-80 transition-opacity">
            szymon<span className="text-secondary">@</span>devbox
          </a>

          {/* Desktop links with animated underline */}
          <ul className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={link.href}
                className={cn(
                  'cursor-pointer text-sm px-3 py-2 transition-colors inline-block',
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
          <div className="w-px h-5 bg-border" />
          <ThemeToggle />
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            'md:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer',
            open ? 'text-accent' : 'text-muted-foreground hover:text-accent',
          )}
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={open} />
        </button>

        {/* Mobile fullscreen overlay menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 md:hidden"
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full px-6 pt-24 pb-8">
                {/* Nav links */}
                <nav className="flex-1 flex flex-col justify-center gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className={cn(
                        'group flex items-center gap-3 py-3 px-4 rounded-lg transition-colors cursor-pointer',
                        active === link.id
                          ? 'bg-accent/10 text-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-surface',
                      )}
                    >
                      {/* Active indicator bar */}
                      <span
                        className={cn(
                          'w-0.5 h-5 rounded-full transition-colors shrink-0',
                          active === link.id ? 'bg-accent' : 'bg-transparent group-hover:bg-border',
                        )}
                      />
                      {/* Terminal prompt */}
                      <span className="font-mono text-xs text-muted-foreground shrink-0 w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {/* Label */}
                      <span className="text-lg font-medium tracking-wide">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </nav>

                {/* Bottom controls */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="border-t border-border pt-6"
                >
                  <div className="flex items-center justify-between">
                    {/* Language pills */}
                    <div className="flex gap-2">
                      {LOCALES.map((l: Locale) => (
                        <button
                          key={l}
                          onClick={() => setLocale(l)}
                          className={cn(
                            'cursor-pointer px-3 py-1.5 rounded-md text-sm font-mono font-medium transition-all',
                            locale === l
                              ? 'bg-accent text-background shadow-sm shadow-accent-glow'
                              : 'text-muted-foreground hover:text-foreground hover:bg-surface-2',
                          )}
                        >
                          {LOCALE_LABELS[l]}
                        </button>
                      ))}
                    </div>

                    {/* Theme toggle */}
                    <ThemeToggle />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
