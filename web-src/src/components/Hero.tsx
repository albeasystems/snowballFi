import { copy, type Locale } from '../i18n/copy'
import { BASE, shot } from '../site'
import { Phone, StoreButton } from './ui'

export function Hero({ locale }: { locale: Locale }) {
  const c = copy[locale]
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6"
    >
      <div className="max-w-[40rem]">
        <h1
          id="hero-title"
          className="rise text-[clamp(2.5rem,5.6vw,4.9rem)] [--i:0]"
        >
          {c.hero.h1}
        </h1>
        <p className="rise mt-6 max-w-[34rem] text-lg text-ink-2 md:text-xl [--i:1]">{c.hero.sub}</p>
        <div className="rise mt-9 flex flex-wrap items-center gap-3 [--i:2]">
          <StoreButton label={c.cta} />
          <a href="#how" className="btn btn-ghost">
            {c.hero.secondary}
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none lg:justify-self-end">
        {/* Tonal block that the phones sit on; bleeds off the right edge on desktop */}
        <div
          aria-hidden="true"
          className="deep-panel absolute -inset-x-5 inset-y-10 rounded-[2rem] lg:-right-[20vw] lg:left-6"
        />
        <div className="relative grid grid-cols-[1fr] justify-items-center py-4 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-6 lg:py-0">
          <Phone
            locale={locale}
            name="results"
            alt={c.alt.results}
            eager
            className="drift hidden w-[78%] -rotate-[3deg] lg:block lg:translate-y-10 [--i:1] [--r:-3deg]"
          />
          <div className="drift w-[78%] max-w-[19rem] lg:w-full lg:max-w-[18.5rem] [--i:0]">
            <div className="phone">
              <video
                className="w-full"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={shot(locale, 'home')}
                aria-label={c.hero.videoLabel}
                width={480}
                height={1044}
              >
                <source src={`${BASE}media/snowballfi-happy-journey-${locale}.webm`} type="video/webm" />
                <source src={`${BASE}media/snowballfi-happy-journey-${locale}.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
