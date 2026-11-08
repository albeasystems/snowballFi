import { useEffect, useRef, useState } from 'react'
import { copy, type Locale } from '../i18n/copy'
import { Phone, Section } from './ui'
import { shot } from '../site'

const STEP_SHOTS = ['home', 'advanced', 'results', 'table'] as const
const STEP_ALTS = ['home', 'advanced', 'results', 'table'] as const

/**
 * Sticky phone on desktop that changes with the step in view (state change, so the motion carries meaning).
 * Below md each step shows its own phone inline. Server render has step 0 active, no JS needed to read it all.
 */
export function Journey({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i))
        }
      },
      { rootMargin: '-42% 0px -48% 0px' },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Section id="how" labelledBy="how-title" className="py-20 md:py-32">
      <h2 id="how-title" className="max-w-[18ch] text-[clamp(2rem,4.2vw,3.5rem)]">
        {c.journey.title}
      </h2>

      <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-16 lg:gap-28">
        <ol className="flex flex-col gap-16 md:gap-0">
          {c.journey.steps.map((s, i) => (
            <li
              key={s.title}
              ref={(el) => {
                refs.current[i] = el
              }}
              data-i={i}
              data-active={active === i}
              className="journey-step md:flex md:min-h-[62vh] md:flex-col md:justify-center"
            >
              <h3 className="text-[clamp(1.5rem,2.6vw,2.2rem)]">{s.title}</h3>
              <p className="mt-4 max-w-[34rem] text-lg text-ink-2">{s.body}</p>
              <div className="mx-auto mt-8 w-[min(72%,18rem)] md:hidden">
                <Phone locale={locale} name={STEP_SHOTS[i]} alt={c.alt[STEP_ALTS[i]]} />
              </div>
            </li>
          ))}
        </ol>

        <div className="hidden md:block">
          <div className="sticky top-24">
            <div className="phone">
              <div className="relative aspect-[720/1565] w-full overflow-hidden rounded-[calc(3rem-7px)] bg-paper-2">
                {STEP_SHOTS.map((name, i) => (
                  <img
                    key={name}
                    className="journey-shot h-full w-full object-cover"
                    data-active={active === i}
                    src={shot(locale, name)}
                    width={720}
                    height={1565}
                    alt={c.alt[STEP_ALTS[i]]}
                    loading="lazy"
                    decoding="async"
                    aria-hidden={active === i ? undefined : true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
