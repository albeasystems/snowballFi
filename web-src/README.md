# snowballFi web

Landing de snowballFi en 7 idiomas (en, es, de, fr, it, pt-BR, hi). Vite + React + Tailwind v4, prerenderizada a HTML estático por idioma.

```bash
npm install
npm run build      # tsc + vite build + SSR + prerender -> dist/
npm run preview    # http://localhost:4173/snowballFi/
```

Se publica en GitHub Pages bajo `https://albeasystems.github.io/snowballFi/` (`base` en `vite.config.ts`). Contenido de `dist/` a la rama/carpeta de Pages. Sin commit ni push hecho.

## Estructura

- `src/i18n/copy.ts`: todo el texto visible, por idioma. Sin guiones largos.
- `src/site.ts`: URL canónica, App Store ID `6762523063`, lista de idiomas.
- `src/head.ts`: title, description, canonical, hreflang, Open Graph, JSON-LD (Organization, WebSite, MobileApplication, WebPage, FAQPage), `llms.txt` y `llms-full-<idioma>.txt`.
- `src/entry-server.tsx`: sitemap con hreflang y `robots.txt` (permite GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot y otros).
- `scripts/prerender.mjs`: escribe `dist/<idioma>/index.html`, chooser en `/` y `404.html`.
- `scripts/prep-assets.mjs`: capturas `design/captures/<idioma>/*.png` a WebP y favicons.
- `scripts/make-og.mjs`: imágenes Open Graph 1200x630 por idioma.
- `public/privacy.html`, `terms.html`, `support.html`, `style.css`: páginas legales existentes, conservadas tal cual (solo se corrigió el enlace a la App Store `id0000000000`).

## Medios

- `public/media/snowballfi-happy-journey.gif`: GIF del recorrido (inglés) para redes, README o prensa.
- `public/media/snowballfi-happy-journey-<idioma>.{webm,mp4}`: el mismo recorrido grabado en cada idioma; el hero usa estos (pesan una fracción del GIF).
- `design/captures/<idioma>/`: capturas originales del simulador (iPhone 17 Pro) generadas con un test de UI que vive en una copia temporal, no en el proyecto de la app.

## Pendiente fuera del código

- Publicar `dist/` (el `gh` local está como `albdimanuel-elastic`, no como `albeasystems`).
- `robots.txt`, `llms.txt` y `sitemap.xml` están en `/snowballFi/`. Los rastreadores buscan `robots.txt` en la raíz del dominio: para que cuente, también hay que servirlo en `albeasystems.github.io/robots.txt` (repo `albeasystems.github.io`).
- Enviar el sitemap en Search Console y Bing Webmaster Tools.
- El enlace "Rate the App" de la app apunta a `id6746417820`; el ID correcto es `6762523063`.
