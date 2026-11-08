import type { Locale } from './i18n/copy'

export const SITE_URL = 'https://albeasystems.github.io/snowballFi'
export const APP_ID = '6762523063'
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`
export const SUPPORT_EMAIL = 'albeasystems@gmail.com'
export const BASE = import.meta.env.BASE_URL // '/snowballFi/'
export const UPDATED = '2026-11-06'

export type LocaleInfo = {
  code: Locale
  label: string
  /** BCP 47 tag for hreflang and <html lang> */
  tag: string
  /** Intl number formatting locale */
  intl: string
  /** Open Graph locale */
  og: string
}

export const LOCALES: LocaleInfo[] = [
  { code: 'en', label: 'English', tag: 'en', intl: 'en-US', og: 'en_US' },
  { code: 'es', label: 'Español', tag: 'es', intl: 'es-ES', og: 'es_ES' },
  { code: 'de', label: 'Deutsch', tag: 'de', intl: 'de-DE', og: 'de_DE' },
  { code: 'fr', label: 'Français', tag: 'fr', intl: 'fr-FR', og: 'fr_FR' },
  { code: 'it', label: 'Italiano', tag: 'it', intl: 'it-IT', og: 'it_IT' },
  { code: 'pt-BR', label: 'Português (Brasil)', tag: 'pt-BR', intl: 'pt-BR', og: 'pt_BR' },
  { code: 'hi', label: 'हिन्दी', tag: 'hi', intl: 'hi-IN', og: 'hi_IN' },
]

export const localeInfo = (c: Locale) => LOCALES.find((l) => l.code === c)!
export const pageUrl = (c: Locale) => `${SITE_URL}/${c}/`
export const pagePath = (c: Locale) => `${BASE}${c}/`
export const shot = (c: Locale, name: string) => `${BASE}shots/${c}/${name}.webp`
