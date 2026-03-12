import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TerminalLine } from '@/components/common/TerminalLine'
import { useTranslation } from '@/contexts/LanguageContext'
import { getPersonal } from '@/data/personal'

const childVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export function Hero() {
  const { locale, t } = useTranslation()
  const personal = getPersonal(locale)

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Layered radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary violet from top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,oklch(0.75_0.20_275_/_0.22),transparent)]" />
        {/* Teal center accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_40%,oklch(0.80_0.18_195_/_0.08),transparent)]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl w-full"
      >
        {/* Pill badge */}
        <motion.div variants={childVariant}>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-mono">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={childVariant}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          <span className="text-accent">{personal.firstName}</span>{' '}
          <span className="text-foreground">{personal.lastName}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={childVariant}
          className="text-xl text-muted-foreground font-mono"
        >
          {personal.title}
        </motion.p>

        {/* Tech stack */}
        <motion.p
          variants={childVariant}
          className="flex flex-wrap justify-center items-center gap-2 text-sm font-mono text-muted-foreground"
        >
          {['AWS', 'GCP', 'Terraform', 'Kubernetes'].map((tech, i, arr) => (
            <span key={tech} className="flex items-center gap-2">
              {tech}
              {i < arr.length - 1 && <span className="text-accent/40">•</span>}
            </span>
          ))}
        </motion.p>

        {/* Terminal — the visual star */}
        <motion.div variants={childVariant} className="w-full flex justify-center">
          <TerminalLine />
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={childVariant}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-accent text-background hover:bg-accent-dim font-semibold">
            <a href="#projects">{t('hero.cta.projects')}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:border-accent hover:text-accent">
            <a href="#contact">{t('hero.cta.contact')}</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-muted-foreground hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  )
}
