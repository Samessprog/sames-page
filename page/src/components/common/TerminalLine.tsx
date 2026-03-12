import { useTypingEffect } from '@/hooks/useTypingEffect'

const COMMANDS = [
  'whoami',
  'terraform plan -out=tfplan',
  'docker build -t app:latest .',
  'kubectl get pods -A',
  'ansible-playbook deploy.yml',
  'aws ecs list-services --cluster prod',
  'gcloud compute instances list',
]

export function TerminalLine() {
  const { displayed } = useTypingEffect(COMMANDS, 70, 2000, 35)

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-surface font-mono text-sm w-full max-w-xl
                    shadow-[0_8px_32px_oklch(0_0_0/0.4)]">
      {/* macOS-style title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-muted-foreground text-xs">terminal</span>
      </div>
      {/* Terminal body */}
      <div className="px-4 py-4 space-y-1 min-h-[90px]">
        <p className="text-muted-foreground text-xs">Last login: Wed Mar 11 09:00:00 2026</p>
        <p className="flex items-center gap-1">
          <span className="text-[oklch(0.80_0.18_195)]">szymon@devbox</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-[oklch(0.75_0.18_145)]">~</span>
          <span className="text-muted-foreground">$</span>
          <span className="text-foreground ml-1">{displayed}</span>
          <span className="cursor-blink" />
        </p>
      </div>
    </div>
  )
}
