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
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className={`group relative flex flex-col h-full rounded-xl border-2 bg-surface/60 backdrop-blur-sm overflow-hidden
                 transition-all duration-300 cursor-pointer
                 ${project.featured
                   ? 'border-accent/60 shadow-[0_0_30px_var(--color-accent-glow),0_8px_32px_oklch(0_0_0/0.3)] hover:shadow-[0_0_40px_var(--color-accent-glow),0_12px_40px_oklch(0_0_0/0.4)]'
                   : 'border-border hover:border-accent/40 shadow-[0_4px_20px_oklch(0_0_0/0.2)] hover:shadow-[0_8px_32px_var(--color-accent-glow),0_8px_32px_oklch(0_0_0/0.3)]'
                 }`}
    >
      {/* Top accent line */}
      <div className={`h-1 w-full ${project.featured ? 'bg-gradient-to-r from-accent via-secondary to-accent' : 'bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:via-accent/60'} transition-all duration-300`} />

      {/* Image area */}
      <div className="relative overflow-hidden">
        <div className="transform transition-transform duration-500 group-hover:scale-105">
          <ProjectPlaceholder project={project} />
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-accent/95 text-white text-xs font-bold backdrop-blur-sm
                          shadow-[0_4px_12px_oklch(0_0_0/0.3)] border border-white/20
                          flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {t('projects.core_badge')}
          </div>
        )}
        {project.year && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-surface/90 backdrop-blur-md text-xs font-mono text-accent border border-accent/30">
            {project.year}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {(() => {
            const MAX_TECH = 3
            const visibleTech = project.coreTech.slice(0, MAX_TECH)
            const extraCount = project.coreTech.length - MAX_TECH
            return (
              <>
                {visibleTech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-mono bg-surface-2/80 text-foreground/80 border border-border/50
                              hover:border-accent/50 hover:text-accent transition-colors px-2.5 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
                {extraCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="text-xs font-mono bg-accent/10 text-accent border border-accent/30 px-2.5 py-0.5"
                  >
                    +{extraCount}
                  </Badge>
                )}
              </>
            )
          })()}
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-border/50">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              View Source
            </a>
          )}
          <span className="ml-auto text-xs font-mono text-accent/60 group-hover:text-accent transition-colors">
            Click to explore →
          </span>
        </div>
      </div>
    </motion.div>
  )
}
