import { motion } from 'motion/react'
import { Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ProjectPlaceholder } from '@/components/common/ProjectPlaceholder'
import { useTranslation } from '@/contexts/LanguageContext'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`group relative flex flex-col h-full rounded-xl border bg-surface/60 backdrop-blur-sm overflow-hidden
                 transition-all duration-300 cursor-pointer
                 ${project.featured
                   ? 'border-accent/50 shadow-[0_0_20px_var(--color-accent-glow),0_4px_24px_oklch(0_0_0/0.3)]'
                   : 'border-border border-t-2 border-t-accent/30 shadow-[0_4px_16px_oklch(0_0_0/0.25)] hover:border-accent/50 hover:shadow-[0_0_28px_var(--color-accent-glow),0_4px_24px_oklch(0_0_0/0.4)]'
                 }`}
    >
      {/* Image area */}
      <div className="relative">
        <ProjectPlaceholder project={project} />
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-accent/90 text-white text-xs font-semibold backdrop-blur-sm">
            {t('projects.core_badge')}
          </span>
        )}
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {(() => {
            const MAX_TECH = 3
            const visibleTech = project.coreTech.slice(0, MAX_TECH)
            const extraCount = project.coreTech.length - MAX_TECH
            return (
              <>
                {visibleTech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs font-mono bg-surface-2 text-muted-foreground border-border">
                    {tech}
                  </Badge>
                ))}
                {extraCount > 0 && (
                  <Badge variant="secondary" className="text-xs font-mono bg-surface-2 text-muted-foreground border-border">
                    +{extraCount}
                  </Badge>
                )}
              </>
            )
          })()}
        </div>

        <div className="flex gap-3 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
