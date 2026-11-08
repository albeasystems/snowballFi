import { copy, type Locale } from './i18n/copy'
import { exampleRows } from './example'
import { APP_STORE_URL, APP_ID, BASE, LOCALES, SITE_URL, SUPPORT_EMAIL, UPDATED, localeInfo, pageUrl } from './site'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const abs = (p: string) => `${SITE_URL}/${p.replace(/^\//, '')}`

/** All <head> tags for a locale page: meta, hreflang, social cards and JSON-LD. */
export function headFor(locale: Locale): string {
  const c = copy[locale]
  const info = localeInfo(locale)
  const url = pageUrl(locale)
  const og = abs(`og/${locale}.png`)

  const alternates = [
    ...LOCALES.map((l) => `<link rel="alternate" hreflang="${l.tag}" href="${pageUrl(l.code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
  ].join('\n    ')

  const shots = ['home', 'advanced', 'results', 'evolution', 'real', 'table'].map((n) => abs(`shots/${locale}/${n}.webp`))

  const faq = {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: info.tag,
    mainEntity: c.faq.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#org`,
        name: 'Albea Systems',
        url: `${SITE_URL}/`,
        logo: abs('icons/icon-512.png'),
        email: SUPPORT_EMAIL,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#site`,
        url: `${SITE_URL}/`,
        name: 'snowballFi',
        publisher: { '@id': `${SITE_URL}/#org` },
        inLanguage: LOCALES.map((l) => l.tag),
      },
      {
        '@type': 'MobileApplication',
        '@id': `${SITE_URL}/#app`,
        name: 'snowballFi',
        alternateName: 'SnowballFi',
        description: c.meta.description,
        applicationCategory: 'FinanceApplication',
        applicationSubCategory: 'Compound interest calculator',
        operatingSystem: 'iOS',
        installUrl: APP_STORE_URL,
        downloadUrl: APP_STORE_URL,
        identifier: APP_ID,
        image: abs('icons/icon-512.png'),
        screenshot: shots,
        inLanguage: LOCALES.map((l) => l.tag),
        author: { '@id': `${SITE_URL}/#org` },
        publisher: { '@id': `${SITE_URL}/#org` },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
        featureList: [
          c.charts.items.map((i) => i.title).join(', '),
          ...c.advanced.items.map((i) => i.title),
          c.detail.table.title,
          c.detail.milestones.title,
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: info.tag,
        isPartOf: { '@id': `${SITE_URL}/#site` },
        about: { '@id': `${SITE_URL}/#app` },
        primaryImageOfPage: { '@type': 'ImageObject', url: og },
        dateModified: UPDATED,
      },
      faq,
    ],
  }

  return [
    `<title>${esc(c.meta.title)}</title>`,
    `<meta name="description" content="${esc(c.meta.description)}" />`,
    `<meta name="keywords" content="${esc(c.meta.keywords)}" />`,
    `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />`,
    `<link rel="canonical" href="${url}" />`,
    alternates,
    `<meta name="apple-itunes-app" content="app-id=${APP_ID}" />`,
    `<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f2f6f4" />`,
    `<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#08130f" />`,
    `<link rel="icon" type="image/png" sizes="32x32" href="${BASE}icons/favicon-32.png" />`,
    `<link rel="apple-touch-icon" href="${BASE}icons/apple-touch-icon.png" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="snowballFi" />`,
    `<meta property="og:title" content="${esc(c.meta.title)}" />`,
    `<meta property="og:description" content="${esc(c.meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${info.og}" />`,
    ...LOCALES.filter((l) => l.code !== locale).map((l) => `<meta property="og:locale:alternate" content="${l.og}" />`),
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(c.alt.home)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(c.meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(c.meta.description)}" />`,
    `<meta name="twitter:image" content="${og}" />`,
    `<script type="application/ld+json">${JSON.stringify(graph)}</script>`,
  ].join('\n    ')
}

export function headForRoot(): string {
  const alternates = [
    ...LOCALES.map((l) => `<link rel="alternate" hreflang="${l.tag}" href="${pageUrl(l.code)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
  ].join('\n    ')
  const t = 'snowballFi: Compound Interest Calculator for iPhone'
  const d = 'Choose your language: English, Español, Deutsch, Français, Italiano, Português (Brasil), हिन्दी.'
  // Humans are sent to their browser language once; crawlers see the chooser and the hreflang set.
  const redirect = `(function(){try{if(location.search.indexOf('stay')>-1)return;var map={es:'es',de:'de',fr:'fr',it:'it',pt:'pt-BR',hi:'hi',en:'en'};var l=(navigator.language||'en').slice(0,2).toLowerCase();location.replace('${BASE}'+(map[l]||'en')+'/')}catch(e){}})()`
  return [
    `<title>${esc(t)}</title>`,
    `<meta name="description" content="${esc(d)}" />`,
    `<meta name="robots" content="index,follow" />`,
    `<link rel="canonical" href="${SITE_URL}/" />`,
    alternates,
    `<meta name="apple-itunes-app" content="app-id=${APP_ID}" />`,
    `<meta name="theme-color" content="#f2f6f4" />`,
    `<link rel="icon" type="image/png" sizes="32x32" href="${BASE}icons/favicon-32.png" />`,
    `<link rel="apple-touch-icon" href="${BASE}icons/apple-touch-icon.png" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(t)}" />`,
    `<meta property="og:url" content="${SITE_URL}/" />`,
    `<meta property="og:image" content="${abs('og/en.png')}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script>${redirect}</script>`,
  ].join('\n    ')
}

/** Plain-text digests for LLM crawlers (llms.txt convention). */
export function llmsIndex(): string {
  const en = copy.en
  const lines = [
    '# snowballFi',
    '',
    `> ${en.meta.description}`,
    '',
    'snowballFi is an iOS app by Albea Systems that projects savings and investments with compound interest. It does not calculate mortgages or loans.',
    '',
    '## Facts',
    '',
    `- App Store: ${APP_STORE_URL}`,
    '- Platform: iPhone (iOS)',
    '- Price: free with ads; one-time purchase removes ads and unlocks advanced adjustments (no subscription)',
    '- Languages: English, Spanish, German, French, Italian, Brazilian Portuguese, Hindi',
    '- Currencies: EUR, USD, GBP, CHF, BRL, INR, CAD, MXN',
    '- Method: nominal annual rate divided by compounding periods; FV = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
    '- Example (verified in the app): 25,000 EUR initial, 800 EUR per month, 6.5% a year, monthly compounding, 25 years = 725,474.17 EUR',
    `- Contact: ${SUPPORT_EMAIL}`,
    '',
    '## Pages by language',
    '',
    ...LOCALES.map((l) => `- [${l.label}](${pageUrl(l.code)}): ${copy[l.code].meta.title}`),
    '',
    '## Full text',
    '',
    ...LOCALES.map((l) => `- [${l.label}](${SITE_URL}/llms-full-${l.code}.txt)`),
    '',
    '## Policies',
    '',
    `- [Privacy](${SITE_URL}/privacy.html)`,
    `- [Terms](${SITE_URL}/terms.html)`,
    `- [Support](${SITE_URL}/support.html)`,
    '',
  ]
  return lines.join('\n')
}

export function llmsFull(locale: Locale): string {
  const c = copy[locale]
  const rows = exampleRows(localeInfo(locale).intl)
  return [
    `# snowballFi (${localeInfo(locale).label})`,
    '',
    `Page: ${pageUrl(locale)}`,
    `App Store: ${APP_STORE_URL}`,
    '',
    `> ${c.meta.description}`,
    '',
    `## ${c.hero.h1}`,
    '',
    c.hero.sub,
    '',
    `## ${c.journey.title}`,
    '',
    ...c.journey.steps.flatMap((s) => [`### ${s.title}`, '', s.body, '']),
    `## ${c.charts.title}`,
    '',
    c.charts.lead,
    '',
    ...c.charts.items.map((i) => `- ${i.title}: ${i.body}`),
    '',
    `## ${c.advanced.title}`,
    '',
    c.advanced.lead,
    '',
    ...c.advanced.items.map((i) => `- ${i.title}: ${i.body}`),
    '',
    `## ${c.detail.title}`,
    '',
    `- ${c.detail.table.title}: ${c.detail.table.body}`,
    `- ${c.detail.milestones.title}: ${c.detail.milestones.body}`,
    `- ${c.detail.kpis.title}: ${c.detail.kpis.body} (${c.detail.kpis.list.join(', ')})`,
    '',
    `## ${c.learn.title}`,
    '',
    c.learn.lead,
    '',
    c.learn.formula,
    '',
    ...c.learn.legend.map((t) => `- ${t}`),
    '',
    `### ${c.learn.doubleTitle}`,
    '',
    c.learn.doubleBody,
    '',
    `### ${c.learn.exampleTitle}`,
    '',
    c.learn.exampleCaption,
    '',
    `| ${c.learn.cols.year} | ${c.learn.cols.contributed} | ${c.learn.cols.interest} | ${c.learn.cols.capital} |`,
    '| --- | --- | --- | --- |',
    ...rows.map((r) => `| ${r.year} | ${r.invested} | ${r.interest} | ${r.capital} |`),
    '',
    `## ${c.faq.title}`,
    '',
    ...c.faq.items.flatMap((i) => [`### ${i.q}`, '', i.a, '']),
    `## ${c.final.title}`,
    '',
    c.final.body,
    '',
    c.footer.disclaimer,
    c.footer.notAffiliated,
    '',
  ].join('\n')
}
