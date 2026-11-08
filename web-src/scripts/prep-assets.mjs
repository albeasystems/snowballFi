// One-off asset prep: raw simulator captures (design/captures) -> optimized WebP,
// app icon -> favicons. Run: node scripts/prep-assets.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const langs = ['en', 'es', 'de', 'fr', 'it', 'pt-BR', 'hi']
const pick = {
  home: '01-home',
  advanced: '02-advanced',
  homeAdvanced: '03-home-advanced',
  results: '04-results-summary',
  distribution: '06-chart-1',
  evolution: '06-chart-2',
  comparison: '06-chart-3',
  real: '06-chart-4',
  table: '07-table',
  milestones: '09-milestones',
}

for (const l of langs) {
  await mkdir(`public/shots/${l}`, { recursive: true })
  for (const [name, file] of Object.entries(pick)) {
    await sharp(`design/captures/${l}/${file}.png`)
      .resize({ width: 720 })
      .webp({ quality: 82, effort: 5 })
      .toFile(`public/shots/${l}/${name}.webp`)
  }
}

const icon = '../snowballFi/snowballFi/Assets.xcassets/AppIcon.appiconset/snowball.png'
for (const [size, out] of [[32, 'favicon-32.png'], [180, 'apple-touch-icon.png'], [192, 'icon-192.png'], [512, 'icon-512.png']]) {
  await sharp(icon).resize(size, size).flatten({ background: '#0b2a26' }).png().toFile(`public/icons/${out}`)
}
await sharp('design/captures/en/01-home.png').resize({ width: 480 }).webp({ quality: 80 }).toFile('public/media/journey-poster.webp')
console.log('assets ready')
