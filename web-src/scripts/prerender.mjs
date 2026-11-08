// Static prerender: one real HTML file per language (+ chooser at the root), sitemap, robots, llms files.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const dist = path.resolve('dist')
const mod = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

if (!template.includes('<!--head-->') || !template.includes('<!--app-->')) {
  throw new Error('index.html template lost its placeholders; check the Vite HTML minifier settings')
}

const fill = (head, html, lang, locale) =>
  template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace('<!--head-->', head)
    .replace('<div id="root"><!--app--></div>', `<div id="root"${locale ? ` data-locale="${locale}"` : ''}>${html}</div>`)

for (const { code, tag } of mod.locales) {
  const { html, head, llms } = mod.renderLocale(code)
  await mkdir(path.join(dist, code), { recursive: true })
  await writeFile(path.join(dist, code, 'index.html'), fill(head, html, tag, code))
  await writeFile(path.join(dist, `llms-full-${code}.txt`), llms)
}

const root = mod.renderRoot()
await writeFile(path.join(dist, 'index.html'), fill(root.head, root.html, 'en', null))
// GitHub Pages serves 404.html for unknown paths: the chooser, kept out of the index.
await writeFile(path.join(dist, '404.html'), fill(root.head.replace('index,follow', 'noindex'), root.html, 'en', null))

await writeFile(path.join(dist, 'sitemap.xml'), mod.sitemap())
await writeFile(path.join(dist, 'robots.txt'), mod.robots())
await writeFile(path.join(dist, 'llms.txt'), mod.llms())
console.log('prerendered', mod.locales.map((l) => l.code).join(', '))
