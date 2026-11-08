// Open Graph cards (1200x630) per language: real app capture + the localized headline.
// Output is committed to public/og. Fonts: system fonts at generation time (macOS), baked into the PNG.
import sharp from 'sharp'
import { readFile } from 'node:fs/promises'

const copySrc = await readFile('src/i18n/copy.ts', 'utf8')
const langs = ['en', 'es', 'de', 'fr', 'it', 'pt-BR', 'hi']
const h1 = {}
for (const l of langs) {
  const block = copySrc.split(new RegExp(`\\n  '?${l}'?: \\{`))[1]
  h1[l] = block.match(/h1: '((?:[^'\\]|\\.)*)'/)[1].replace(/\\u2019/g, '’').replace(/\\'/g, "'")
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
function wrap(text, max) {
  const out = []; let line = ''
  for (const w of text.split(' ')) {
    if ((line + ' ' + w).trim().length > max) { out.push(line); line = w } else line = (line + ' ' + w).trim()
  }
  if (line) out.push(line)
  return out
}

for (const l of langs) {
  const lines = wrap(h1[l], l === 'hi' ? 16 : 20)
  const font = l === 'hi' ? "'Devanagari Sangam MN', 'Kohinoor Devanagari', sans-serif" : "'Helvetica Neue', Helvetica, Arial, sans-serif"
  const size = l === 'hi' ? 64 : 70
  const text = lines
    .map((t, i) => `<text x="72" y="${215 + i * (size * 1.12)}" font-family="${font}" font-weight="700" font-size="${size}" fill="#e7f3ef" letter-spacing="-2">${esc(t)}</text>`)
    .join('')
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0b2d29"/>
    <radialGradient id="g" cx="100%" cy="0%" r="90%"><stop offset="0" stop-color="#14473f"/><stop offset="1" stop-color="#0b2d29" stop-opacity="0"/></radialGradient>
    <rect width="1200" height="630" fill="url(#g)"/>
    ${text}
    <text x="72" y="560" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-weight="600" font-size="34" fill="#5fe3b0">snowballFi</text>
  </svg>`
  const phone = await sharp(`public/shots/${l}/results.webp`).resize({ width: 330 }).extract({ left: 0, top: 0, width: 330, height: 510 }).png().toBuffer()
  const meta = await sharp(phone).metadata()
  const mask = Buffer.from(`<svg width="${meta.width}" height="${meta.height}"><rect width="${meta.width}" height="${meta.height}" rx="44" fill="#fff"/></svg>`)
  const rounded = await sharp(phone).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer()
  await sharp(Buffer.from(svg))
    .composite([{ input: rounded, left: 800, top: 120 }])
    .png({ compressionLevel: 9 })
    .toFile(`public/og/${l}.png`)
}
console.log('og ready')
