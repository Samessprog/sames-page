import { motion } from 'motion/react'
import { Wrench, Zap, Shield, FileCode2, Users, Terminal } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { useTranslation } from '@/contexts/LanguageContext'

const STRENGTH_ICONS: LucideIcon[] = [Wrench, Zap, Shield, FileCode2, Users, Terminal]

export function Strengths() {
  const { t } = useTranslation()
  const items = STRENGTH_ICONS.map((Icon, i) => ({
    Icon,
    title: t(`strengths.item${i + 1}.title`),
    desc: t(`strengths.item${i + 1}.desc`),
  }))

  return (
    <SectionWrapper id="strengths">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
        <span className="text-accent font-mono text-2xl select-none">//</span>
        {t('strengths.heading')}
        <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent self-center" />
      </h2>
      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map(({ Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-3 rounded-xl border border-border border-t-2 border-t-accent/30
                       bg-surface/50 p-6 hover:border-accent/50 hover:shadow-[0_0_24px_var(--color-accent-glow)]
                       transition-all duration-300"
          >
            <Icon className="w-6 h-6 text-accent" />
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
