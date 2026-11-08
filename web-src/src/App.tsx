import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Nav } from './components/Nav'
import { Advanced, Charts, Detail, Faq, FinalCta, Footer, Learn } from './components/Sections'
import type { Locale } from './i18n/copy'
import { BASE, LOCALES, pagePath } from './site'

const SKIP: Record<Locale, string> = {
  en: 'Skip to content',
  es: 'Saltar al contenido',
  de: 'Zum Inhalt springen',
  fr: 'Aller au contenu',
  it: 'Vai al contenuto',
  'pt-BR': 'Pular para o conteúdo',
  hi: 'सामग्री पर जाएं',
}

export function Page({ locale }: { locale: Locale }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {SKIP[locale]}
      </a>
      <Nav locale={locale} />
      <main id="main" className="overflow-x-clip">
        <Hero locale={locale} />
        <Journey locale={locale} />
        <Charts locale={locale} />
        <Advanced locale={locale} />
        <Detail locale={locale} />
        <Learn locale={locale} />
        <Faq locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}

/** Root page: language chooser. Crawlable links, JS only redirects humans by browser language. */
export function Chooser() {
  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-[40rem] flex-col justify-center px-6 py-16">
      <img src={`${BASE}icons/icon-192.png`} width={72} height={72} alt="" className="rounded-[1.1rem]" />
      <h1 className="mt-8 text-[clamp(2.2rem,6vw,3.4rem)]">snowballFi</h1>
      <p className="mt-3 text-lg text-ink-2">Compound interest calculator for iPhone.</p>
      <ul className="mt-10 grid gap-2 sm:grid-cols-2">
        {LOCALES.map((l) => (
          <li key={l.code}>
            <a
              href={pagePath(l.code)}
              hrefLang={l.tag}
              lang={l.tag}
              className="btn btn-ghost w-full justify-between text-[1.05rem]"
            >
              {l.label}
              <span className="text-ink-2" aria-hidden="true">
                {l.code}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
