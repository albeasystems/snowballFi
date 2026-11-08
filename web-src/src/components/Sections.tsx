import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { copy, type Locale } from '../i18n/copy'
import { exampleRows } from '../example'
import { BASE, localeInfo, SUPPORT_EMAIL, LOCALES, pagePath } from '../site'
import { Phone, Section, StoreButton } from './ui'

/* ───────────── Charts: horizontal rail (scrolls, snaps) ───────────── */
const CHART_SHOTS = ['distribution', 'evolution', 'comparison', 'real'] as const

export function Charts({ locale }: { locale: Locale }) {
  const c = copy[locale]
  return (
    <section id="charts" aria-labelledby="charts-title" className="bg-paper-2 py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <h2 id="charts-title" className="max-w-[20ch] text-[clamp(2rem,4.2vw,3.5rem)]">
          {c.charts.title}
        </h2>
        <p className="mt-5 max-w-[40rem] text-lg text-ink-2">{c.charts.lead}</p>
      </div>
      <div
        className="rail mt-12 px-5 md:mt-16 md:px-[max(2rem,calc((100vw-1240px)/2+2rem))]"
        role="region"
        aria-label={c.charts.title}
        tabIndex={0}
      >
        {CHART_SHOTS.map((name, i) => (
          <figure key={name} className="w-[15.5rem] md:w-[19rem]">
            <Phone locale={locale} name={name} alt={c.alt[name]} />
            <figcaption className="mt-6 pr-2">
              <h3 className="text-xl">{c.charts.items[i].title}</h3>
              <p className="mt-2 text-ink-2">{c.charts.items[i].body}</p>
            </figcaption>
          </figure>
        ))}
        <div aria-hidden="true" className="w-4 md:w-12" />
      </div>
    </section>
  )
}

/* ───────────── Advanced adjustments: typographic list ───────────── */
export function Advanced({ locale }: { locale: Locale }) {
  const c = copy[locale]
  return (
    <Section id="advanced" labelledBy="adv-title" className="py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="adv-title" className="text-[clamp(2rem,4.2vw,3.5rem)]">
            {c.advanced.title}
          </h2>
          <p className="mt-5 max-w-[30rem] text-lg text-ink-2">{c.advanced.lead}</p>
        </div>
        <dl className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {c.advanced.items.map((it, i) => (
            <div key={it.title} className={i % 2 === 1 ? 'sm:mt-14' : ''}>
              <dt className="text-2xl font-semibold tracking-tight">{it.title}</dt>
              <dd className="mt-3 text-ink-2">{it.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

/* ───────────── Detail: bento of exactly three cells ───────────── */
export function Detail({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const d = c.detail
  return (
    <Section id="detail" labelledBy="detail-title" className="pb-20 md:pb-32">
      <h2 id="detail-title" className="max-w-[20ch] text-[clamp(2rem,4.2vw,3.5rem)]">
        {d.title}
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-12 md:grid-rows-[auto_auto]">
        {/* A: table, tall, phone bleeding off the bottom */}
        <article className="relative overflow-hidden rounded-panel bg-paper-2 px-7 pt-8 md:col-span-5 md:row-span-2 md:px-9 md:pt-10">
          <h3 className="text-2xl">{d.table.title}</h3>
          <p className="mt-3 max-w-[26rem] text-ink-2">{d.table.body}</p>
          <div className="mx-auto mt-8 w-[72%] max-w-[20rem] translate-y-4 md:mt-10 md:translate-y-10">
            <Phone locale={locale} name="table" alt={c.alt.table} />
          </div>
        </article>

        {/* B: milestones on the deep panel */}
        <article className="deep-panel on-deep relative overflow-hidden rounded-panel px-7 py-8 md:col-span-7 md:px-10 md:py-10">
          <div className="grid items-end gap-8 sm:grid-cols-[1fr_11rem]">
            <div>
              <h3 className="text-2xl">{d.milestones.title}</h3>
              <p className="mt-3 max-w-[24rem] text-on-deep-2">{d.milestones.body}</p>
            </div>
            <div className="mx-auto -mb-24 w-[9.5rem] sm:mx-0 sm:w-full sm:translate-y-6">
              <Phone locale={locale} name="milestones" alt={c.alt.milestones} />
            </div>
          </div>
        </article>

        {/* C: indicators on an accent tint */}
        <article className="rounded-panel bg-accent-soft px-7 py-8 md:col-span-7 md:px-10 md:py-10">
          <h3 className="text-2xl">{d.kpis.title}</h3>
          <p className="mt-3 max-w-[32rem] text-ink-2">{d.kpis.body}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {d.kpis.list.map((k) => (
              <li key={k} className="font-medium">
                {k}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}

/* ───────────── The math: formula band + worked example ───────────── */
export function Learn({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const l = c.learn
  const rows = exampleRows(localeInfo(locale).intl)
  return (
    <Section id="learn" labelledBy="learn-title" className="pb-20 md:pb-32">
      <h2 id="learn-title" className="max-w-[22ch] text-[clamp(2rem,4.2vw,3.5rem)]">
        {l.title}
      </h2>
      <p className="mt-5 max-w-[46rem] text-lg text-ink-2">{l.lead}</p>

      <div className="mt-10 overflow-x-auto rounded-panel bg-paper-2 px-6 py-8 md:px-10 md:py-10">
        <p lang="en" className="num whitespace-nowrap text-[clamp(1rem,2.2vw,1.65rem)] font-medium tracking-tight">
          {l.formula}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-1 text-[0.95rem] text-ink-2">
          {l.legend.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="min-w-0">
          <h3 className="text-2xl">{l.doubleTitle}</h3>
          <p className="mt-3 text-ink-2">{l.doubleBody}</p>
        </div>
        <div className="min-w-0">
          <h3 className="text-2xl">{l.exampleTitle}</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="num w-full min-w-[30rem] border-collapse text-[0.95rem]">
              <caption className="mb-4 text-left font-sans text-[0.95rem] text-ink-2 [caption-side:bottom] mt-4">{l.exampleCaption}</caption>
              <thead>
                <tr className="border-b border-line text-left font-sans text-ink-2">
                  <th scope="col" className="py-2 pr-4 font-medium">{l.cols.year}</th>
                  <th scope="col" className="py-2 pr-4 text-right font-medium">{l.cols.contributed}</th>
                  <th scope="col" className="py-2 pr-4 text-right font-medium">{l.cols.interest}</th>
                  <th scope="col" className="py-2 text-right font-medium">{l.cols.capital}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.year} className={i === rows.length - 1 ? 'font-semibold text-accent' : 'border-b border-line/60'}>
                    <th scope="row" className="py-3 pr-4 text-left font-medium">{r.year}</th>
                    <td className="py-3 pr-4 text-right">{r.invested}</td>
                    <td className="py-3 pr-4 text-right">{r.interest}</td>
                    <td className="py-3 text-right">{r.capital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ───────────── FAQ: accordion, content stays in the DOM for crawlers ───────────── */
export function Faq({ locale }: { locale: Locale }) {
  const c = copy[locale]
  return (
    <Section id="faq" labelledBy="faq-title" className="pb-20 md:pb-32">
      <h2 id="faq-title" className="text-[clamp(2rem,4.2vw,3.5rem)]">
        {c.faq.title}
      </h2>
      <div className="faq mt-10 max-w-[52rem] border-t border-line">
        {c.faq.items.map((it) => (
          <details key={it.q} className="border-b border-line">
            <summary className="flex items-center justify-between gap-6 py-5 text-lg font-semibold tracking-tight">
              <h3 className="text-[1.1rem] !leading-snug !tracking-tight">{it.q}</h3>
              <CaretDown className="chev shrink-0 text-ink-2" size={20} aria-hidden="true" />
            </summary>
            <p className="max-w-[44rem] pb-6 text-ink-2">{it.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

/* ───────────── Final call to action ───────────── */
export function FinalCta({ locale }: { locale: Locale }) {
  const c = copy[locale]
  return (
    <Section labelledBy="final-title" className="pb-20 md:pb-28">
      <div className="deep-panel on-deep flex flex-col items-start gap-8 rounded-[2rem] px-7 py-12 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
        <div className="flex items-center gap-6">
          <img
            src={`${BASE}icons/icon-192.png`}
            width={88}
            height={88}
            alt=""
            loading="lazy"
            className="hidden size-[5.5rem] rounded-[1.4rem] shadow-[0_18px_30px_-14px_rgb(0_0_0/0.6)] sm:block"
          />
          <div>
            <h2 id="final-title" className="max-w-[20ch] text-[clamp(1.8rem,3.6vw,3rem)]">
              {c.final.title}
            </h2>
            <p className="mt-3 max-w-[30rem] text-on-deep-2">{c.final.body}</p>
          </div>
        </div>
        <StoreButton label={c.cta} />
      </div>
    </Section>
  )
}

/* ───────────── Footer ───────────── */
export function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const f = c.footer
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <p className="flex items-center gap-2.5 font-semibold">
            <img src={`${BASE}icons/icon-192.png`} width={28} height={28} alt="" className="rounded-lg" />
            snowballFi
          </p>
          <p className="mt-3 max-w-[28rem] text-ink-2">{f.tagline}</p>
          <p className="mt-6 max-w-[34rem] text-sm text-ink-2">{f.disclaimer}</p>
          <p className="mt-3 max-w-[34rem] text-sm text-ink-2">{f.notAffiliated}</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <nav aria-label="Legal">
            <ul className="space-y-2">
              <li><a href={`${BASE}privacy.html`} className="text-ink-2 hover:text-ink">{f.privacy}</a></li>
              <li><a href={`${BASE}terms.html`} className="text-ink-2 hover:text-ink">{f.terms}</a></li>
              <li><a href={`${BASE}support.html`} className="text-ink-2 hover:text-ink">{f.support}</a></li>
              <li><a href={`mailto:${SUPPORT_EMAIL}`} className="text-ink-2 hover:text-ink">{SUPPORT_EMAIL}</a></li>
            </ul>
          </nav>
          <nav aria-label={f.languages}>
            <ul className="space-y-2">
              {LOCALES.map((l) => (
                <li key={l.code}>
                  <a href={pagePath(l.code)} hrefLang={l.tag} lang={l.tag} className="text-ink-2 hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <p className="mx-auto w-full max-w-[1240px] px-5 pb-10 text-sm text-ink-2 md:px-8">
        &copy; 2026 Albea Systems. {f.updated}.
      </p>
    </footer>
  )
}
