import { renderToString } from 'react-dom/server'
import { Chooser, Page } from './App'
import { headFor, headForRoot, llmsFull, llmsIndex } from './head'
import type { Locale } from './i18n/copy'
import { LOCALES, SITE_URL, UPDATED, pageUrl } from './site'

export const locales = LOCALES.map((l) => ({ code: l.code, tag: l.tag }))

export function renderLocale(locale: Locale) {
  return { html: renderToString(<Page locale={locale} />), head: headFor(locale), llms: llmsFull(locale) }
}

export function renderRoot() {
  return { html: renderToString(<Chooser />), head: headForRoot() }
}

export const llms = llmsIndex

export function sitemap() {
  const alt = (self: string) =>
    [
      ...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.tag}" href="${pageUrl(l.code)}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/"/>`,
    ].join('\n') + (self ? '' : '')
  const urls = [
    `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${UPDATED}</lastmod>\n${alt('root')}\n  </url>`,
    ...LOCALES.map(
      (l) => `  <url>\n    <loc>${pageUrl(l.code)}</loc>\n    <lastmod>${UPDATED}</lastmod>\n${alt(l.code)}\n  </url>`,
    ),
    ...['privacy', 'terms', 'support'].map((p) => `  <url>\n    <loc>${SITE_URL}/${p}.html</loc>\n    <lastmod>${UPDATED}</lastmod>\n  </url>`),
  ]
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
}

export function robots() {
  const bots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'Bingbot',
    'DuckAssistBot',
    'CCBot',
    'cohere-ai',
    'meta-externalagent',
  ]
  return [
    'User-agent: *',
    'Allow: /',
    '',
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n')
}
