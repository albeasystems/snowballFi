import { CaretDown, Globe } from '@phosphor-icons/react/dist/ssr'
import { copy, type Locale } from '../i18n/copy'
import { BASE, LOCALES, localeInfo, pagePath } from '../site'
import { StoreButton } from './ui'

export function LanguageMenu({ locale, label }: { locale: Locale; label: string }) {
  return (
    <details className="lang relative">
      <summary
        className="btn btn-ghost btn-sm gap-2"
        aria-label={label}
        title={label}
      >
        <Globe size={18} aria-hidden="true" />
        <span className="hidden sm:inline">{localeInfo(locale).label}</span>
        <span className="sm:hidden uppercase">{locale}</span>
        <CaretDown size={12} aria-hidden="true" />
      </summary>
      <ul className="absolute right-0 top-full z-30 mt-2 min-w-48 rounded-2xl border border-line bg-surface p-1.5 shadow-[0_24px_40px_-20px_rgb(var(--shadow-tint)/0.5)]">
        {LOCALES.map((l) => (
          <li key={l.code}>
            <a
              href={pagePath(l.code)}
              hrefLang={l.tag}
              lang={l.tag}
              aria-current={l.code === locale ? 'true' : undefined}
              className="block rounded-xl px-3 py-2 text-[0.95rem] no-underline hover:bg-paper-2 aria-[current=true]:font-semibold aria-[current=true]:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}

export function Nav({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const links: [string, string][] = [
    ['#how', c.nav.journey],
    ['#charts', c.nav.charts],
    ['#learn', c.nav.learn],
    ['#faq', c.nav.faq],
  ]
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-4 px-5 md:px-8"
      >
        <a href={pagePath(locale)} className="flex items-center gap-2.5 font-semibold tracking-tight no-underline">
          <img src={`${BASE}icons/icon-192.png`} width={32} height={32} alt="" className="rounded-[9px]" />
          <span className="text-[1.05rem]">snowballFi</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[0.95rem] text-ink-2 no-underline hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LanguageMenu locale={locale} label={c.nav.language} />
          <StoreButton label={c.cta} className="btn-sm hidden md:inline-flex" />
        </div>
      </nav>
    </header>
  )
}
