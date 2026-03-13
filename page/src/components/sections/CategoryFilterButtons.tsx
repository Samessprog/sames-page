import { Terminal, LayoutGrid } from 'lucide-react'

interface CategoryFilterButtonsProps {
  currentView: 'grid' | 'carousel'
  onViewChange: (view: 'grid' | 'carousel') => void
}

export function CategoryFilterButtons({ currentView, onViewChange }: CategoryFilterButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <button
        onClick={() => onViewChange('grid')}
        className={`
          cursor-pointer group relative px-6 py-3 rounded-lg border-2 backdrop-blur-sm
          transition-all duration-300
          ${
            currentView === 'grid'
              ? 'border-accent bg-surface/80 shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-accent-glow)]'
              : 'border-border bg-surface/60 hover:border-accent/50 hover:bg-surface/80 shadow-[0_2px_12px_oklch(0_0_0/0.2)] hover:shadow-[0_4px_20px_var(--color-accent-glow)]'
          }
        `}
      >
        <div className="flex items-center gap-3">
          <LayoutGrid className={`w-4 h-4 ${currentView === 'grid' ? 'text-accent animate-pulse' : 'text-accent'}`} />
          <span className="font-mono text-sm text-foreground flex items-center">
            <span className="text-accent">$</span> view --grid
            {currentView === 'grid' && (
              <span className="ml-1 text-accent animate-[blink_1s_step-end_infinite]">|</span>
            )}
          </span>
        </div>
      </button>

      <button
        onClick={() => onViewChange('carousel')}
        className={`
          cursor-pointer group relative px-6 py-3 rounded-lg border-2 backdrop-blur-sm
          transition-all duration-300
          ${
            currentView === 'carousel'
              ? 'border-accent bg-surface/80 shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-accent-glow)]'
              : 'border-border bg-surface/60 hover:border-accent/50 hover:bg-surface/80 shadow-[0_2px_12px_oklch(0_0_0/0.2)] hover:shadow-[0_4px_20px_var(--color-accent-glow)]'
          }
        `}
      >
        <div className="flex items-center gap-3">
          <Terminal className={`w-4 h-4 ${currentView === 'carousel' ? 'text-accent animate-pulse' : 'text-accent'}`} />
          <span className="font-mono text-sm text-foreground flex items-center">
            <span className="text-accent">$</span> view --carousel
            {currentView === 'carousel' && (
              <span className="ml-1 text-accent animate-[blink_1s_step-end_infinite]">|</span>
            )}
          </span>
        </div>
      </button>
    </div>
  )
}
