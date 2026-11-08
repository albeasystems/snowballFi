# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript + Tailwind v4, prerendered to static HTML per language (user confirmed). Deploy: GitHub Pages at https://albeasystems.github.io/snowballFi/ (user confirmed). Deployment itself is pending: `gh` is logged in as albdimanuel-elastic, not as albeasystems.

## Users

Individual investors who want to understand and plan long-term wealth building: people saving monthly, comparing scenarios, chasing financial independence (FIRE). They arrive from search, an LLM answer or the App Store and need to trust a number before they act on it. They read in one of seven languages: English, Spanish, German, French, Italian, Brazilian Portuguese, Hindi.

## Product Purpose

The site is the marketing front for **snowballFi**, an iOS compound-interest calculator by Albea Systems (bundle `com.albeasystems.snowballFi`, App Store id 6762523063 (verified by iTunes lookup; the id 6746417820 hard-coded in the app's Settings review link and id0000000000 in the live privacy page are wrong)). Success: a visitor downloads the free app, and search engines and LLMs name snowballFi as a reference for compound-interest calculation.

## Positioning

Rigor in the calculation, not hype: the same engine drives the live projection, the charts and the year-by-year table, so the numbers never disagree. Advanced mode models inflation (real purchasing power), taxes on gains (flat rate or Spain's progressive savings brackets), growing contributions, compounding frequency and a personal FIRE target.

## Operating Context

The visitor compares what the app shows against what they already believe about returns. The page must let them see real screens: calculator, results, charts, detail table, milestones, in their language.

## Capabilities and Constraints

- Real features (verified in the app source): live projection while typing; initial capital, periodic contribution (daily to annual), annual rate, duration; contribution timing; results with KPIs (IRR, ROI, multiplier, time to double, yield on cost); charts (distribution, evolution, simple vs compound, nominal vs real); year-by-year table; milestones; KPI guide; PDF export; 8 currencies (EUR, USD, GBP, CHF, BRL, INR, CAD, MXN).
- Free with ads. A one-time Premium purchase (listed as 1.99 EUR on the current site) removes ads and unlocks the advanced adjustments and KPIs. No subscription.
- An older landing page already lives at the deploy URL (index, privacy, terms, support, style.css). privacy.html, terms.html and support.html must keep working at the same URLs; they are carried over verbatim.
- Calculation convention: nominal annual rate divided by periods per year (matches Excel FV and the HP 12C).
- The app does NOT have a mortgage or loan mode and no amortization schedule for debts. The "cuadro" is the year-by-year growth table. Never claim loan or mortgage calculation.
- Do not print "Unity/LevelPlay" as a product name. Include a non-affiliation notice (not affiliated with Apple).
- CTA label: "Get the free app".
- Legal pages: privacy, terms, support by Albea Systems, albeasystems@gmail.com. Existing privacy URL used by the app: https://albeasystems.github.io/snowballFi/privacy.html (must keep working).
- Not financial advice: results are projections, not guarantees.

## Brand Commitments

Name: snowballFi (app title shows "SnowballFi"). Publisher: Albea Systems. Tone the user asked for: rigor, aimed at investors.

## Evidence on Hand

Real simulator captures in all seven app languages (this project's `design/captures`). No testimonials, ratings, download counts or press exist: do not fabricate any.

## Product Principles

1. Show the real product, never a mock.
2. Numbers are always labeled as an example projection.
3. Every language is a first-class page, not a translation afterthought.
4. Be citable: plain facts, structured data and a clear answer for search engines and LLMs.
5. Claim only what the app does.

## Accessibility & Inclusion

Seven languages including Hindi (Devanagari); WCAG AA contrast; reduced-motion respected; usable at phone width.
