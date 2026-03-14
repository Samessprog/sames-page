import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Terminal } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { TimelineItem } from '@/components/common/TimelineItem'
import { useTranslation } from '@/contexts/LanguageContext'
import { getExperience } from '@/data/experience'

const INITIAL_DISPLAY_COUNT = 3

export function Experience() {
  const { locale, t } = useTranslation()
  const items = getExperience(locale)
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT)

  const visibleItems = items.slice(0, displayCount)
  const hasMore = displayCount < items.length

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 2, items.length))
  }

  const handleShowLess = () => {
    setDisplayCount(INITIAL_DISPLAY_COUNT)
  }

  return (
    <SectionWrapper id="experience">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
        <span className="text-accent font-mono text-2xl select-none">//</span>
        {t('experience.heading')}
        <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent self-center" />
      </h2>

      <div className="ml-2">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, i) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.25 } }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              layout
            >
              <TimelineItem item={item} index={i} isCurrent={i === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleLoadMore}
              className="cursor-pointer group relative px-5 py-3 sm:px-8 sm:py-4 rounded-lg border-2 border-border bg-surface/60 backdrop-blur-sm
                         hover:border-accent/50 hover:bg-surface/80
                         transition-all duration-300
                         shadow-[0_2px_12px_oklch(0_0_0/0.2)]
                         hover:shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-accent-glow)]"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Terminal className="w-4 h-4 text-accent group-hover:animate-pulse" />
                <span className="font-mono text-sm text-foreground">
                  <span className="text-accent">$</span> load --more-experience
                </span>
                <span className="font-mono text-xs text-muted-foreground ml-2 opacity-70">
                  [{items.length - displayCount} remaining]
                </span>
              </div>

              {/* Terminal cursor blink */}
              <span className="inline-block w-2 h-4 ml-1 bg-accent animate-[blink_1s_step-end_infinite] align-text-bottom" />
            </button>
          </motion.div>
        )}

        {displayCount > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleShowLess}
              className="cursor-pointer group relative px-5 py-3 sm:px-8 sm:py-4 rounded-lg border-2 border-border bg-surface/60 backdrop-blur-sm
                         hover:border-accent/50 hover:bg-surface/80
                         transition-all duration-300
                         shadow-[0_2px_12px_oklch(0_0_0/0.2)]
                         hover:shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-accent-glow)]"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Terminal className="w-4 h-4 text-accent group-hover:animate-pulse" />
                <span className="font-mono text-sm text-foreground">
                  <span className="text-accent">$</span> load --less-experience
                </span>
              </div>

              {/* Terminal cursor blink */}
              <span className="inline-block w-2 h-4 ml-1 bg-accent animate-[blink_1s_step-end_infinite] align-text-bottom" />
            </button>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  )
}
