import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Chooser, Page } from './App'
import type { Locale } from './i18n/copy'
import './styles.css'

const root = document.getElementById('root')!
const locale = root.dataset.locale as Locale | undefined

// Pre-rendered HTML is already in place; hydrate so the journey section reacts to scrolling.
if (locale) {
  hydrateRoot(root, <StrictMode><Page locale={locale} /></StrictMode>)
} else {
  hydrateRoot(root, <StrictMode><Chooser /></StrictMode>)
}
