import { Globe, Check } from 'lucide-react'
import { DropdownMenu } from 'radix-ui'
import { useTranslation } from '@/contexts/LanguageContext'
import { LOCALES } from '@/i18n/types'
import type { Locale } from '@/i18n/types'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
}

const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  pl: 'PL',
  de: 'DE',
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-auto h-8 px-2 gap-1 text-muted-foreground hover:text-accent"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-mono">{LOCALE_SHORT[locale]}</span>
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[140px] rounded-lg border border-border bg-popover p-1 shadow-md
                     animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
        >
          {LOCALES.map((l: Locale) => (
            <DropdownMenu.Item
              key={l}
              onClick={() => setLocale(l)}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm cursor-pointer outline-none transition-colors',
                'hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent',
                locale === l ? 'text-accent font-medium' : 'text-foreground',
              )}
            >
              <span className="flex-1">{LOCALE_LABELS[l]}</span>
              {locale === l && <Check className="w-3.5 h-3.5 text-accent" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
