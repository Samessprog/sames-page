import { useState, useEffect } from 'react'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ProjectPlaceholder } from '@/components/common/ProjectPlaceholder'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/contexts/LanguageContext'
import { LANGUAGE_COLORS } from '@/data/projects'
import type { Project } from '@/data/projects'

interface ProjectDetailModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDetailModal({ project, open, onOpenChange }: ProjectDetailModalProps) {
  const { t } = useTranslation()
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => setActiveIdx(0), [project?.slug])

  useEffect(() => {
    if (!open || !project) return
    const imgs = project.images ?? (project.image ? [project.image] : [])
    if (imgs.length <= 1) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  setActiveIdx(i => (i - 1 + imgs.length) % imgs.length)
      if (e.key === 'ArrowRight') setActiveIdx(i => (i + 1) % imgs.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, project])

  if (!project) return null

  const langColor = project.language ? LANGUAGE_COLORS[project.language] ?? '#6B7280' : null
  const imgs = project.images ?? (project.image ? [project.image] : [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 sm:max-w-4xl max-h-[96vh]">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
            {langColor && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: langColor }}
                />
                {project.language}
              </span>
            )}
            <Badge variant="secondary" className="text-xs font-mono">
              {project.year}
            </Badge>
          </div>
          <DialogDescription className="sr-only">
            {project.title} project details
          </DialogDescription>
        </DialogHeader>

        {/* Image area */}
        {imgs.length > 0 ? (
          <div className="px-6 space-y-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl group">
              <img
                src={imgs[activeIdx]}
                alt={`${project.title} screenshot ${activeIdx + 1}`}
                className="w-full h-full object-cover transition-opacity duration-200"
              />
              {imgs.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveIdx(i => (i - 1 + imgs.length) % imgs.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/65 hover:scale-110 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveIdx(i => (i + 1) % imgs.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/65 hover:scale-110 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/40 text-white text-xs backdrop-blur-sm font-mono">
                    {activeIdx + 1} / {imgs.length}
                  </div>
                </>
              )}
            </div>
            {imgs.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/40">
                {imgs.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={cn(
                      'shrink-0 w-16 h-10 rounded overflow-hidden border-2 transition-colors',
                      i === activeIdx ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                    )}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="px-6">
            <ProjectPlaceholder project={project} className="!rounded-xl" />
          </div>
        )}

        {/* Description */}
        <div className="px-6 pt-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        <div className="px-6 py-4">
          <Separator />
        </div>

        {/* Technologies */}
        <div className="px-6 pb-2">
          <h4 className="text-sm font-semibold text-foreground mb-3">{t('projects.technologies')}</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-mono bg-surface-2 text-muted-foreground border-border">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 p-6 pt-4">
          {project.github && (
            <Button asChild variant="outline" size="sm">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                {t('projects.view_github')}
              </a>
            </Button>
          )}
          {project.live && (
            <Button asChild variant="outline" size="sm">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                {t('projects.live_demo')}
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
