// All visible copy, per language. No em dashes anywhere (house rule).
// Numbers in the worked example are computed at build time from the same formula the app uses.

export type Locale = 'en' | 'es' | 'de' | 'fr' | 'it' | 'pt-BR' | 'hi'

export type Copy = {
  meta: { title: string; description: string; keywords: string }
  nav: { journey: string; charts: string; learn: string; faq: string; menu: string; language: string }
  cta: string
  hero: { h1: string; sub: string; secondary: string; videoLabel: string }
  journey: { title: string; steps: { title: string; body: string }[] }
  charts: { title: string; lead: string; items: { title: string; body: string }[] }
  advanced: { title: string; lead: string; items: { title: string; body: string }[] }
  detail: {
    title: string
    table: { title: string; body: string }
    milestones: { title: string; body: string }
    kpis: { title: string; body: string; list: string[] }
  }
  learn: {
    title: string
    lead: string
    formula: string
    legend: string[]
    doubleTitle: string
    doubleBody: string
    exampleTitle: string
    exampleCaption: string
    cols: { year: string; capital: string; contributed: string; interest: string }
    yearUnit: string
  }
  faq: { title: string; items: { q: string; a: string }[] }
  final: { title: string; body: string }
  footer: { tagline: string; privacy: string; terms: string; support: string; languages: string; notAffiliated: string; disclaimer: string; updated: string }
  alt: Record<'home' | 'advanced' | 'results' | 'distribution' | 'evolution' | 'comparison' | 'real' | 'table' | 'milestones' | 'journey', string>
}

export const copy: Record<Locale, Copy> = {
  // ───────────────────────────────────────── English
  en: {
    meta: {
      title: 'snowballFi: Compound Interest Calculator for iPhone',
      description:
        'Project savings and investments year by year. Compound interest with inflation, taxes, growing contributions and a FIRE target. Charts and a full table. Free on iPhone.',
      keywords: 'compound interest calculator, investment calculator, FIRE calculator, inflation, iPhone app',
    },
    nav: { journey: 'How it works', charts: 'Charts', learn: 'The math', faq: 'FAQ', menu: 'Menu', language: 'Language' },
    cta: 'Get the free app',
    hero: {
      h1: 'See your money compound, year by year.',
      sub: 'snowballFi projects investments with inflation, taxes and FIRE, then shows every year in charts and a full table.',
      secondary: 'See how it works',
      videoLabel: 'Screen recording: a user sets up an advanced projection, reads the results, the charts and the year-by-year table.',
    },
    journey: {
      title: 'From four numbers to a full plan',
      steps: [
        { title: 'Type four numbers', body: 'Initial capital, periodic contribution, annual rate and years. The final capital updates while you type.' },
        { title: 'Add the real world', body: 'Switch on inflation, taxes and a personal FIRE target. Choose how often interest compounds.' },
        { title: 'Read the result', body: 'Final capital, money invested and interest earned, plus ROI, IRR, multiplier and time to double.' },
        { title: 'Check every year', body: 'The year-by-year table shows contribution, accumulated interest and total capital for each year.' },
      ],
    },
    charts: {
      title: 'Four charts, one engine',
      lead: 'The projection, the charts and the table come from the same calculation, so the numbers always agree.',
      items: [
        { title: 'Wealth distribution', body: 'How much of the final capital is your money and how much is interest.' },
        { title: 'Wealth evolution', body: 'Stacked yearly bars: initial capital, contributions and interest.' },
        { title: 'Simple vs. compound', body: 'The gap between simple and compound interest, in currency.' },
        { title: 'Purchasing power', body: 'Nominal capital against real capital after inflation.' },
      ],
    },
    advanced: {
      title: 'Advanced adjustments that match real life',
      lead: 'Switch each one on or off and watch the final capital change.',
      items: [
        { title: 'Inflation', body: 'See what your capital will buy, not just what it will say.' },
        { title: 'Taxes on gains', body: 'Use a flat rate or Spain’s progressive savings brackets.' },
        { title: 'Growing contributions', body: 'Raise your contribution by a percentage or a fixed amount each year.' },
        { title: 'FIRE target', body: 'Set a monthly income goal and find the year the 4% rule covers it.' },
      ],
    },
    detail: {
      title: 'Every detail, without a spreadsheet',
      table: { title: 'Year-by-year table', body: 'Contribution, accumulated contributions, interest, accumulated interest and total capital for every year.' },
      milestones: { title: 'Milestones', body: 'The year you pass 50,000, recover your initial capital or double your investment.' },
      kpis: {
        title: 'Indicators',
        body: 'Money-weighted return, yield on cost and more, each explained in the in-app guide.',
        list: ['ROI', 'IRR', 'Capital multiplier', 'Time to double', 'Yield on cost', 'Passive income at 4%'],
      },
    },
    learn: {
      title: 'How compound interest is calculated',
      lead: 'Compound interest is interest earned on your capital and on the interest already added. snowballFi divides the nominal annual rate by the compounding periods, the same convention as Excel FV and the HP 12C.',
      formula: 'FV = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
      legend: ['P: initial capital', 'PMT: contribution per period', 'r: nominal annual rate', 'n: periods per year', 't: years'],
      doubleTitle: 'Time to double',
      doubleBody: 'The rule of 72 gives 72 / 6.5 = 11.1 years. The exact formula the app uses gives 10.7 years for a lump sum at 6.5% compounded monthly.',
      exampleTitle: 'Worked example',
      exampleCaption: 'Initial capital 25,000 EUR, 800 EUR per month at the end of each month, 6.5% a year, compounded monthly. The 25-year row matches the app exactly.',
      cols: { year: 'Year', capital: 'Capital', contributed: 'Invested', interest: 'Interest' },
      yearUnit: '',
    },
    faq: {
      title: 'Questions, answered',
      items: [
        { q: 'What is compound interest?', a: 'Compound interest is interest calculated on the initial capital plus the interest already accumulated. Each period the earnings are reinvested, so growth accelerates over time.' },
        { q: 'How does snowballFi calculate it?', a: 'It divides the nominal annual rate by the number of compounding periods and applies the future value formula with periodic contributions. This is the convention used by Excel FV and the HP 12C.' },
        { q: 'Can I include inflation and taxes?', a: 'Yes. Inflation shows your real purchasing power. Taxes on gains can use a flat rate or Spain’s progressive savings brackets. Both are advanced adjustments.' },
        { q: 'What is FIRE and the 4% rule?', a: 'FIRE means financial independence, retire early. The 4% rule estimates that a portfolio can support withdrawals of 4% of its value a year. snowballFi finds the year your portfolio reaches your monthly income goal.' },
        { q: 'Is snowballFi free?', a: 'The app is free and shows ads. A one-time purchase removes ads and unlocks the advanced adjustments and indicators. There is no subscription.' },
        { q: 'Does it calculate mortgages or loans?', a: 'No. snowballFi projects the growth of savings and investments. It does not model debt or loan amortization schedules.' },
        { q: 'Which languages and currencies are supported?', a: 'English, Spanish, German, French, Italian, Brazilian Portuguese and Hindi, with EUR, USD, GBP, CHF, BRL, INR, CAD and MXN.' },
      ],
    },
    final: { title: 'Run your first projection in a minute', body: 'Free on iPhone. Enter four numbers and see the next 25 years.' },
    footer: {
      tagline: 'Compound interest calculator for iPhone, by Albea Systems.',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      languages: 'Languages',
      notAffiliated: 'snowballFi is an independent app. It is not affiliated with or endorsed by Apple Inc. App Store is a service mark of Apple Inc.',
      disclaimer: 'Projections are examples based on the numbers you enter. They are not financial advice or a promise of returns.',
      updated: 'Updated November 2026',
    },
    alt: {
      home: 'snowballFi calculator with a live projection of 725,474 EUR after 25 years',
      advanced: 'Advanced adjustments for inflation, compounding and taxes',
      results: 'Results summary with final capital and key indicators',
      distribution: 'Wealth distribution donut chart',
      evolution: 'Wealth evolution stacked bar chart',
      comparison: 'Simple versus compound interest line chart',
      real: 'Nominal versus real capital after inflation',
      table: 'Year-by-year detail table',
      milestones: 'List of wealth milestones by year',
      journey: 'Screen recording of the snowballFi app',
    },
  },

  // ───────────────────────────────────────── Español
  es: {
    meta: {
      title: 'snowballFi: Calculadora de interés compuesto para iPhone',
      description:
        'Proyecta tus ahorros e inversiones año a año. Interés compuesto con inflación, impuestos, aportaciones crecientes y objetivo FIRE. Gráficas y tabla completa. Gratis en iPhone.',
      keywords: 'calculadora de interés compuesto, calculadora de inversión, calculadora FIRE, inflación, app iPhone',
    },
    nav: { journey: 'Cómo funciona', charts: 'Gráficas', learn: 'Las matemáticas', faq: 'Preguntas', menu: 'Menú', language: 'Idioma' },
    cta: 'Descarga la app gratis',
    hero: {
      h1: 'Mira cómo se compone tu dinero, año a año.',
      sub: 'snowballFi proyecta inversiones con inflación, impuestos y FIRE, y muestra cada año en gráficas y en una tabla completa.',
      secondary: 'Ver cómo funciona',
      videoLabel: 'Grabación de pantalla: un usuario configura una proyección avanzada y revisa resultados, gráficas y la tabla año a año.',
    },
    journey: {
      title: 'De cuatro números a un plan completo',
      steps: [
        { title: 'Escribe cuatro números', body: 'Capital inicial, aportación periódica, tasa anual y años. El capital final se actualiza mientras escribes.' },
        { title: 'Añade el mundo real', body: 'Activa inflación, impuestos y un objetivo FIRE personal. Elige cada cuánto se capitaliza el interés.' },
        { title: 'Lee el resultado', body: 'Capital final, dinero aportado e intereses generados, además de ROI, TIR, multiplicador y tiempo para duplicar.' },
        { title: 'Revisa cada año', body: 'La tabla año a año muestra aportación, intereses acumulados y capital total de cada ejercicio.' },
      ],
    },
    charts: {
      title: 'Cuatro gráficas, un solo motor',
      lead: 'La proyección, las gráficas y la tabla salen del mismo cálculo, así que las cifras siempre coinciden.',
      items: [
        { title: 'Distribución del patrimonio', body: 'Cuánto del capital final es tu dinero y cuánto son intereses.' },
        { title: 'Evolución del patrimonio', body: 'Barras anuales apiladas: capital inicial, aportaciones e intereses.' },
        { title: 'Interés simple vs. compuesto', body: 'La diferencia entre interés simple y compuesto, en euros.' },
        { title: 'Poder adquisitivo', body: 'Capital nominal frente a capital real tras la inflación.' },
      ],
    },
    advanced: {
      title: 'Ajustes avanzados que reflejan la vida real',
      lead: 'Activa o desactiva cada uno y observa cómo cambia el capital final.',
      items: [
        { title: 'Inflación', body: 'Mira lo que podrá comprar tu capital, no solo la cifra que mostrará.' },
        { title: 'Impuestos sobre ganancias', body: 'Usa una tasa fija o los tramos progresivos del ahorro en España.' },
        { title: 'Aportaciones crecientes', body: 'Sube tu aportación un porcentaje o una cantidad fija cada año.' },
        { title: 'Objetivo FIRE', body: 'Fija una renta mensual y descubre el año en que la regla del 4% la cubre.' },
      ],
    },
    detail: {
      title: 'Cada detalle, sin hoja de cálculo',
      table: { title: 'Tabla año a año', body: 'Aportación, aportaciones acumuladas, intereses, intereses acumulados y capital total de cada año.' },
      milestones: { title: 'Hitos', body: 'El año en que superas 50.000, recuperas tu capital inicial o duplicas tu inversión.' },
      kpis: {
        title: 'Indicadores',
        body: 'Rentabilidad ponderada por el dinero, rentabilidad sobre coste y más, cada uno explicado en la guía de la app.',
        list: ['ROI', 'TIR', 'Multiplicador de capital', 'Tiempo para duplicar', 'Rentabilidad sobre coste', 'Renta pasiva al 4%'],
      },
    },
    learn: {
      title: 'Cómo se calcula el interés compuesto',
      lead: 'El interés compuesto es el que se gana sobre tu capital y sobre los intereses ya sumados. snowballFi divide la tasa nominal anual entre los periodos de capitalización, igual que Excel VF y la HP 12C.',
      formula: 'VF = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
      legend: ['P: capital inicial', 'PMT: aportación por periodo', 'r: tasa nominal anual', 'n: periodos por año', 't: años'],
      doubleTitle: 'Tiempo para duplicar',
      doubleBody: 'La regla del 72 da 72 / 6,5 = 11,1 años. La fórmula exacta de la app da 10,7 años para un capital único al 6,5% capitalizado mensualmente.',
      exampleTitle: 'Ejemplo resuelto',
      exampleCaption: 'Capital inicial 25.000 EUR, 800 EUR al mes a final de cada mes, 6,5% anual, capitalización mensual. La fila de 25 años coincide exactamente con la app.',
      cols: { year: 'Año', capital: 'Capital', contributed: 'Aportado', interest: 'Intereses' },
      yearUnit: '',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Qué es el interés compuesto?', a: 'El interés compuesto se calcula sobre el capital inicial más los intereses ya acumulados. En cada periodo las ganancias se reinvierten, así que el crecimiento se acelera con el tiempo.' },
        { q: '¿Cómo lo calcula snowballFi?', a: 'Divide la tasa nominal anual entre el número de periodos de capitalización y aplica la fórmula del valor futuro con aportaciones periódicas. Es la convención de Excel VF y la HP 12C.' },
        { q: '¿Puedo incluir inflación e impuestos?', a: 'Sí. La inflación muestra tu poder adquisitivo real. Los impuestos sobre ganancias pueden usar una tasa fija o los tramos progresivos del ahorro en España. Ambos son ajustes avanzados.' },
        { q: '¿Qué es FIRE y la regla del 4%?', a: 'FIRE significa independencia financiera y jubilación anticipada. La regla del 4% estima que una cartera puede sostener retiradas del 4% de su valor al año. snowballFi calcula el año en que tu cartera alcanza tu renta mensual objetivo.' },
        { q: '¿snowballFi es gratis?', a: 'La app es gratuita y muestra anuncios. Un pago único quita los anuncios y desbloquea los ajustes e indicadores avanzados. No hay suscripción.' },
        { q: '¿Calcula hipotecas o préstamos?', a: 'No. snowballFi proyecta el crecimiento de ahorros e inversiones. No modela deudas ni cuadros de amortización de préstamos.' },
        { q: '¿Qué idiomas y monedas admite?', a: 'Inglés, español, alemán, francés, italiano, portugués de Brasil y hindi, con EUR, USD, GBP, CHF, BRL, INR, CAD y MXN.' },
      ],
    },
    final: { title: 'Haz tu primera proyección en un minuto', body: 'Gratis en iPhone. Escribe cuatro números y mira los próximos 25 años.' },
    footer: {
      tagline: 'Calculadora de interés compuesto para iPhone, por Albea Systems.',
      privacy: 'Privacidad',
      terms: 'Términos',
      support: 'Soporte',
      languages: 'Idiomas',
      notAffiliated: 'snowballFi es una app independiente. No está afiliada ni respaldada por Apple Inc. App Store es una marca de servicio de Apple Inc.',
      disclaimer: 'Las proyecciones son ejemplos basados en las cifras que introduces. No constituyen asesoramiento financiero ni garantía de rentabilidad.',
      updated: 'Actualizado en noviembre de 2026',
    },
    alt: {
      home: 'Calculadora snowballFi con una proyección en vivo de 725.474 EUR a 25 años',
      advanced: 'Ajustes avanzados de inflación, capitalización e impuestos',
      results: 'Resumen de resultados con capital final e indicadores clave',
      distribution: 'Gráfico de anillo con la distribución del patrimonio',
      evolution: 'Gráfico de barras apiladas con la evolución del patrimonio',
      comparison: 'Gráfico de líneas de interés simple frente a compuesto',
      real: 'Capital nominal frente a capital real tras la inflación',
      table: 'Tabla de detalle año a año',
      milestones: 'Lista de hitos de patrimonio por año',
      journey: 'Grabación de pantalla de la app snowballFi',
    },
  },

  // ───────────────────────────────────────── Deutsch
  de: {
    meta: {
      title: 'snowballFi: Zinseszins-Rechner für das iPhone',
      description:
        'Sparen und Anlegen Jahr für Jahr berechnen. Zinseszins mit Inflation, Steuern, steigenden Einzahlungen und FIRE-Ziel. Diagramme und vollständige Tabelle. Kostenlos für iPhone.',
      keywords: 'Zinseszins Rechner, Anlagerechner, FIRE Rechner, Inflation, iPhone App',
    },
    nav: { journey: 'So funktioniert es', charts: 'Diagramme', learn: 'Die Mathematik', faq: 'FAQ', menu: 'Menü', language: 'Sprache' },
    cta: 'Kostenlose App laden',
    hero: {
      h1: 'Sehen Sie Ihr Geld wachsen, Jahr für Jahr.',
      sub: 'snowballFi berechnet Geldanlagen mit Inflation, Steuern und FIRE und zeigt jedes Jahr in Diagrammen und einer vollständigen Tabelle.',
      secondary: 'So funktioniert es',
      videoLabel: 'Bildschirmaufnahme: Eine erweiterte Berechnung wird eingerichtet, dann folgen Ergebnisse, Diagramme und die Jahrestabelle.',
    },
    journey: {
      title: 'Von vier Zahlen zum vollständigen Plan',
      steps: [
        { title: 'Vier Zahlen eingeben', body: 'Startkapital, regelmäßige Einzahlung, Jahreszins und Laufzeit. Das Endkapital aktualisiert sich beim Tippen.' },
        { title: 'Die Realität hinzufügen', body: 'Aktivieren Sie Inflation, Steuern und ein persönliches FIRE-Ziel. Legen Sie fest, wie oft Zinsen gutgeschrieben werden.' },
        { title: 'Ergebnis lesen', body: 'Endkapital, eingezahltes Geld und Zinsen, dazu ROI, interner Zinsfuß, Multiplikator und Verdopplungszeit.' },
        { title: 'Jedes Jahr prüfen', body: 'Die Jahrestabelle zeigt Einzahlung, aufgelaufene Zinsen und Gesamtkapital für jedes Jahr.' },
      ],
    },
    charts: {
      title: 'Vier Diagramme, eine Rechenbasis',
      lead: 'Berechnung, Diagramme und Tabelle stammen aus derselben Rechnung, die Zahlen stimmen also immer überein.',
      items: [
        { title: 'Vermögensverteilung', body: 'Wie viel vom Endkapital Ihr eigenes Geld ist und wie viel Zinsen sind.' },
        { title: 'Vermögensentwicklung', body: 'Gestapelte Jahresbalken: Startkapital, Einzahlungen und Zinsen.' },
        { title: 'Einfache vs. Zinseszinsen', body: 'Der Abstand zwischen einfachen Zinsen und Zinseszins in Euro.' },
        { title: 'Kaufkraft', body: 'Nominales Kapital im Vergleich zum realen Kapital nach Inflation.' },
      ],
    },
    advanced: {
      title: 'Erweiterte Einstellungen für die echte Welt',
      lead: 'Schalten Sie jede Option ein oder aus und sehen Sie, wie sich das Endkapital ändert.',
      items: [
        { title: 'Inflation', body: 'Sehen Sie, was Ihr Kapital kaufen kann, nicht nur, was auf dem Konto steht.' },
        { title: 'Steuern auf Erträge', body: 'Mit festem Satz oder den progressiven Sparstufen Spaniens.' },
        { title: 'Wachsende Einzahlungen', body: 'Erhöhen Sie die Einzahlung jedes Jahr um einen Prozentsatz oder einen festen Betrag.' },
        { title: 'FIRE-Ziel', body: 'Legen Sie ein monatliches Einkommen fest und finden Sie das Jahr, in dem die 4-Prozent-Regel es deckt.' },
      ],
    },
    detail: {
      title: 'Jedes Detail, ohne Tabellenkalkulation',
      table: { title: 'Jahrestabelle', body: 'Einzahlung, kumulierte Einzahlungen, Zinsen, kumulierte Zinsen und Gesamtkapital für jedes Jahr.' },
      milestones: { title: 'Meilensteine', body: 'Das Jahr, in dem Sie 50.000 überschreiten, Ihr Startkapital zurückverdienen oder Ihre Anlage verdoppeln.' },
      kpis: {
        title: 'Kennzahlen',
        body: 'Geldgewichtete Rendite, Rendite auf die Anschaffungskosten und mehr, jeweils im App-Leitfaden erklärt.',
        list: ['ROI', 'Interner Zinsfuß', 'Kapitalmultiplikator', 'Verdopplungszeit', 'Rendite auf Kosten', 'Passives Einkommen bei 4 %'],
      },
    },
    learn: {
      title: 'So wird der Zinseszins berechnet',
      lead: 'Beim Zinseszins werden Zinsen auf Ihr Kapital und auf bereits gutgeschriebene Zinsen gezahlt. snowballFi teilt den nominalen Jahreszins durch die Zinsperioden, wie Excel ZW und der HP 12C.',
      formula: 'FV = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
      legend: ['P: Startkapital', 'PMT: Einzahlung je Periode', 'r: nominaler Jahreszins', 'n: Perioden pro Jahr', 't: Jahre'],
      doubleTitle: 'Verdopplungszeit',
      doubleBody: 'Die 72er-Regel ergibt 72 / 6,5 = 11,1 Jahre. Die exakte Formel der App ergibt 10,7 Jahre für eine Einmalanlage bei 6,5 % mit monatlicher Verzinsung.',
      exampleTitle: 'Rechenbeispiel',
      exampleCaption: 'Startkapital 25.000 EUR, 800 EUR pro Monat am Monatsende, 6,5 % pro Jahr, monatliche Verzinsung. Die Zeile für 25 Jahre entspricht exakt der App.',
      cols: { year: 'Jahr', capital: 'Kapital', contributed: 'Eingezahlt', interest: 'Zinsen' },
      yearUnit: '',
    },
    faq: {
      title: 'Antworten auf häufige Fragen',
      items: [
        { q: 'Was ist Zinseszins?', a: 'Zinseszins wird auf das Startkapital plus die bereits angesammelten Zinsen berechnet. In jeder Periode werden die Erträge reinvestiert, sodass das Wachstum mit der Zeit zunimmt.' },
        { q: 'Wie rechnet snowballFi?', a: 'Die App teilt den nominalen Jahreszins durch die Zahl der Zinsperioden und wendet die Endwertformel mit regelmäßigen Einzahlungen an. Das ist die Konvention von Excel ZW und dem HP 12C.' },
        { q: 'Kann ich Inflation und Steuern berücksichtigen?', a: 'Ja. Die Inflation zeigt Ihre reale Kaufkraft. Steuern auf Erträge können mit festem Satz oder den progressiven Sparstufen Spaniens gerechnet werden. Beides sind erweiterte Einstellungen.' },
        { q: 'Was sind FIRE und die 4-Prozent-Regel?', a: 'FIRE steht für finanzielle Unabhängigkeit und frühen Ruhestand. Die 4-Prozent-Regel schätzt, dass ein Depot jährliche Entnahmen von 4 % seines Werts tragen kann. snowballFi findet das Jahr, in dem Ihr Depot Ihr monatliches Einkommensziel erreicht.' },
        { q: 'Ist snowballFi kostenlos?', a: 'Die App ist kostenlos und zeigt Werbung. Ein einmaliger Kauf entfernt die Werbung und schaltet die erweiterten Einstellungen und Kennzahlen frei. Es gibt kein Abonnement.' },
        { q: 'Berechnet die App Hypotheken oder Kredite?', a: 'Nein. snowballFi berechnet das Wachstum von Ersparnissen und Geldanlagen. Schulden oder Tilgungspläne werden nicht abgebildet.' },
        { q: 'Welche Sprachen und Währungen gibt es?', a: 'Englisch, Spanisch, Deutsch, Französisch, Italienisch, brasilianisches Portugiesisch und Hindi, mit EUR, USD, GBP, CHF, BRL, INR, CAD und MXN.' },
      ],
    },
    final: { title: 'Ihre erste Berechnung in einer Minute', body: 'Kostenlos für iPhone. Vier Zahlen eingeben und die nächsten 25 Jahre sehen.' },
    footer: {
      tagline: 'Zinseszins-Rechner für das iPhone von Albea Systems.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      support: 'Support',
      languages: 'Sprachen',
      notAffiliated: 'snowballFi ist eine unabhängige App. Sie steht in keiner Verbindung zu Apple Inc. und wird nicht von Apple Inc. unterstützt. App Store ist eine Dienstleistungsmarke von Apple Inc.',
      disclaimer: 'Die Berechnungen sind Beispiele auf Basis Ihrer Eingaben. Sie sind keine Finanzberatung und kein Renditeversprechen.',
      updated: 'Aktualisiert im November 2026',
    },
    alt: {
      home: 'snowballFi Rechner mit Live-Berechnung von 725.474 EUR nach 25 Jahren',
      advanced: 'Erweiterte Einstellungen für Inflation, Verzinsung und Steuern',
      results: 'Ergebnisübersicht mit Endkapital und Kennzahlen',
      distribution: 'Ringdiagramm der Vermögensverteilung',
      evolution: 'Gestapeltes Balkendiagramm der Vermögensentwicklung',
      comparison: 'Liniendiagramm einfache Zinsen gegen Zinseszins',
      real: 'Nominales gegen reales Kapital nach Inflation',
      table: 'Detailtabelle Jahr für Jahr',
      milestones: 'Liste der Vermögensmeilensteine nach Jahr',
      journey: 'Bildschirmaufnahme der snowballFi App',
    },
  },

  // ───────────────────────────────────────── Français
  fr: {
    meta: {
      title: 'snowballFi : calculateur d’intérêts composés pour iPhone',
      description:
        'Projetez épargne et investissements année par année. Intérêts composés avec inflation, impôts, versements croissants et objectif FIRE. Graphiques et tableau complet. Gratuit sur iPhone.',
      keywords: 'calculateur intérêts composés, simulateur investissement, calculateur FIRE, inflation, application iPhone',
    },
    nav: { journey: 'Fonctionnement', charts: 'Graphiques', learn: 'Les calculs', faq: 'FAQ', menu: 'Menu', language: 'Langue' },
    cta: 'Télécharger l’app gratuite',
    hero: {
      h1: 'Voyez votre argent fructifier, année après année.',
      sub: 'snowballFi projette vos investissements avec inflation, impôts et FIRE, puis détaille chaque année en graphiques et en tableau complet.',
      secondary: 'Voir le fonctionnement',
      videoLabel: 'Enregistrement d’écran : une projection avancée est configurée, puis résultats, graphiques et tableau annuel.',
    },
    journey: {
      title: 'De quatre chiffres à un plan complet',
      steps: [
        { title: 'Saisissez quatre chiffres', body: 'Capital initial, versement périodique, taux annuel et durée. Le capital final se met à jour pendant la saisie.' },
        { title: 'Ajoutez la réalité', body: 'Activez inflation, impôts et un objectif FIRE personnel. Choisissez la fréquence de capitalisation.' },
        { title: 'Lisez le résultat', body: 'Capital final, argent investi et intérêts gagnés, plus ROI, TRI, multiplicateur et temps pour doubler.' },
        { title: 'Vérifiez chaque année', body: 'Le tableau annuel affiche versement, intérêts cumulés et capital total pour chaque année.' },
      ],
    },
    charts: {
      title: 'Quatre graphiques, un seul moteur',
      lead: 'La projection, les graphiques et le tableau viennent du même calcul : les chiffres concordent toujours.',
      items: [
        { title: 'Répartition du patrimoine', body: 'La part du capital final qui est votre argent et celle qui vient des intérêts.' },
        { title: 'Évolution du patrimoine', body: 'Barres annuelles empilées : capital initial, versements et intérêts.' },
        { title: 'Simple vs. composé', body: 'L’écart entre intérêts simples et composés, en euros.' },
        { title: 'Pouvoir d’achat', body: 'Capital nominal face au capital réel après inflation.' },
      ],
    },
    advanced: {
      title: 'Des réglages avancés proches de la vraie vie',
      lead: 'Activez ou désactivez chacun et voyez le capital final évoluer.',
      items: [
        { title: 'Inflation', body: 'Voyez ce que votre capital permettra d’acheter, pas seulement le chiffre affiché.' },
        { title: 'Impôt sur les gains', body: 'Taux fixe ou barème progressif de l’épargne en Espagne.' },
        { title: 'Versements croissants', body: 'Augmentez votre versement d’un pourcentage ou d’un montant fixe chaque année.' },
        { title: 'Objectif FIRE', body: 'Fixez un revenu mensuel et trouvez l’année où la règle des 4 % le couvre.' },
      ],
    },
    detail: {
      title: 'Chaque détail, sans tableur',
      table: { title: 'Tableau année par année', body: 'Versement, versements cumulés, intérêts, intérêts cumulés et capital total pour chaque année.' },
      milestones: { title: 'Étapes', body: 'L’année où vous dépassez 50 000, récupérez votre capital initial ou doublez votre mise.' },
      kpis: {
        title: 'Indicateurs',
        body: 'Rendement pondéré par les flux, rendement sur coût et plus, chacun expliqué dans le guide de l’app.',
        list: ['ROI', 'TRI', 'Multiplicateur de capital', 'Temps pour doubler', 'Rendement sur coût', 'Revenu passif à 4 %'],
      },
    },
    learn: {
      title: 'Comment se calculent les intérêts composés',
      lead: 'Les intérêts composés sont ceux gagnés sur votre capital et sur les intérêts déjà ajoutés. snowballFi divise le taux nominal annuel par le nombre de périodes, comme Excel VC et la HP 12C.',
      formula: 'VF = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
      legend: ['P : capital initial', 'PMT : versement par période', 'r : taux nominal annuel', 'n : périodes par an', 't : années'],
      doubleTitle: 'Temps pour doubler',
      doubleBody: 'La règle de 72 donne 72 / 6,5 = 11,1 ans. La formule exacte de l’app donne 10,7 ans pour un capital unique à 6,5 % capitalisé mensuellement.',
      exampleTitle: 'Exemple chiffré',
      exampleCaption: 'Capital initial 25 000 EUR, 800 EUR par mois en fin de mois, 6,5 % par an, capitalisation mensuelle. La ligne des 25 ans correspond exactement à l’app.',
      cols: { year: 'Année', capital: 'Capital', contributed: 'Investi', interest: 'Intérêts' },
      yearUnit: '',
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'Que sont les intérêts composés ?', a: 'Les intérêts composés se calculent sur le capital initial plus les intérêts déjà cumulés. À chaque période, les gains sont réinvestis : la croissance s’accélère avec le temps.' },
        { q: 'Comment snowballFi calcule-t-il ?', a: 'Il divise le taux nominal annuel par le nombre de périodes de capitalisation et applique la formule de la valeur future avec versements périodiques. C’est la convention d’Excel VC et de la HP 12C.' },
        { q: 'Puis-je inclure inflation et impôts ?', a: 'Oui. L’inflation montre votre pouvoir d’achat réel. L’impôt sur les gains peut utiliser un taux fixe ou le barème progressif espagnol de l’épargne. Ce sont des réglages avancés.' },
        { q: 'Que sont FIRE et la règle des 4 % ?', a: 'FIRE signifie indépendance financière et retraite anticipée. La règle des 4 % estime qu’un portefeuille peut soutenir des retraits annuels de 4 % de sa valeur. snowballFi trouve l’année où votre portefeuille atteint votre revenu mensuel cible.' },
        { q: 'snowballFi est-il gratuit ?', a: 'L’app est gratuite et affiche des publicités. Un achat unique supprime les publicités et débloque les réglages et indicateurs avancés. Il n’y a pas d’abonnement.' },
        { q: 'Calcule-t-il des prêts immobiliers ou des crédits ?', a: 'Non. snowballFi projette la croissance de l’épargne et des investissements. Il ne modélise ni dette ni tableau d’amortissement.' },
        { q: 'Quelles langues et devises ?', a: 'Anglais, espagnol, allemand, français, italien, portugais du Brésil et hindi, avec EUR, USD, GBP, CHF, BRL, INR, CAD et MXN.' },
      ],
    },
    final: { title: 'Lancez votre première projection en une minute', body: 'Gratuit sur iPhone. Saisissez quatre chiffres et voyez les 25 prochaines années.' },
    footer: {
      tagline: 'Calculateur d’intérêts composés pour iPhone, par Albea Systems.',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      support: 'Assistance',
      languages: 'Langues',
      notAffiliated: 'snowballFi est une app indépendante. Elle n’est ni affiliée à Apple Inc. ni approuvée par Apple Inc. App Store est une marque de service d’Apple Inc.',
      disclaimer: 'Les projections sont des exemples fondés sur les chiffres saisis. Elles ne constituent ni un conseil financier ni une promesse de rendement.',
      updated: 'Mis à jour en novembre 2026',
    },
    alt: {
      home: 'Calculateur snowballFi avec une projection en direct de 725 474 EUR après 25 ans',
      advanced: 'Réglages avancés d’inflation, de capitalisation et d’impôts',
      results: 'Résumé des résultats avec capital final et indicateurs clés',
      distribution: 'Graphique en anneau de la répartition du patrimoine',
      evolution: 'Graphique en barres empilées de l’évolution du patrimoine',
      comparison: 'Courbes d’intérêts simples et composés',
      real: 'Capital nominal et capital réel après inflation',
      table: 'Tableau détaillé année par année',
      milestones: 'Liste des étapes de patrimoine par année',
      journey: 'Enregistrement d’écran de l’app snowballFi',
    },
  },

  // ───────────────────────────────────────── Italiano
  it: {
    meta: {
      title: 'snowballFi: calcolatore interesse composto per iPhone',
      description:
        'Proietta risparmi e investimenti anno per anno. Interesse composto con inflazione, tasse, versamenti crescenti e obiettivo FIRE. Grafici e tabella completa. Gratis su iPhone.',
      keywords: 'calcolatore interesse composto, calcolatore investimenti, calcolatore FIRE, inflazione, app iPhone',
    },
    nav: { journey: 'Come funziona', charts: 'Grafici', learn: 'La matematica', faq: 'Domande', menu: 'Menu', language: 'Lingua' },
    cta: 'Scarica l’app gratis',
    hero: {
      h1: 'Guarda il tuo denaro crescere, anno dopo anno.',
      sub: 'snowballFi proietta gli investimenti con inflazione, tasse e FIRE, poi mostra ogni anno in grafici e in una tabella completa.',
      secondary: 'Scopri come funziona',
      videoLabel: 'Registrazione dello schermo: si imposta una proiezione avanzata, poi risultati, grafici e tabella anno per anno.',
    },
    journey: {
      title: 'Da quattro numeri a un piano completo',
      steps: [
        { title: 'Scrivi quattro numeri', body: 'Capitale iniziale, versamento periodico, tasso annuo e anni. Il capitale finale si aggiorna mentre digiti.' },
        { title: 'Aggiungi la realtà', body: 'Attiva inflazione, tasse e un obiettivo FIRE personale. Scegli ogni quanto si capitalizza l’interesse.' },
        { title: 'Leggi il risultato', body: 'Capitale finale, denaro versato e interessi maturati, oltre a ROI, TIR, moltiplicatore e tempo di raddoppio.' },
        { title: 'Controlla ogni anno', body: 'La tabella anno per anno mostra versamento, interessi accumulati e capitale totale per ogni anno.' },
      ],
    },
    charts: {
      title: 'Quattro grafici, un solo motore',
      lead: 'Proiezione, grafici e tabella nascono dallo stesso calcolo, quindi i numeri coincidono sempre.',
      items: [
        { title: 'Distribuzione del patrimonio', body: 'Quanta parte del capitale finale è denaro tuo e quanta è interesse.' },
        { title: 'Evoluzione del patrimonio', body: 'Barre annuali impilate: capitale iniziale, versamenti e interessi.' },
        { title: 'Semplice vs. composto', body: 'La differenza tra interesse semplice e composto, in euro.' },
        { title: 'Potere d’acquisto', body: 'Capitale nominale a confronto con il capitale reale dopo l’inflazione.' },
      ],
    },
    advanced: {
      title: 'Impostazioni avanzate vicine alla vita reale',
      lead: 'Attiva o disattiva ciascuna e osserva come cambia il capitale finale.',
      items: [
        { title: 'Inflazione', body: 'Vedi cosa potrà comprare il tuo capitale, non solo la cifra che mostrerà.' },
        { title: 'Tasse sulle plusvalenze', body: 'Aliquota fissa oppure scaglioni progressivi del risparmio in Spagna.' },
        { title: 'Versamenti crescenti', body: 'Aumenta il versamento di una percentuale o di un importo fisso ogni anno.' },
        { title: 'Obiettivo FIRE', body: 'Fissa una rendita mensile e trova l’anno in cui la regola del 4% la copre.' },
      ],
    },
    detail: {
      title: 'Ogni dettaglio, senza foglio di calcolo',
      table: { title: 'Tabella anno per anno', body: 'Versamento, versamenti cumulati, interessi, interessi cumulati e capitale totale per ogni anno.' },
      milestones: { title: 'Traguardi', body: 'L’anno in cui superi 50.000, recuperi il capitale iniziale o raddoppi l’investimento.' },
      kpis: {
        title: 'Indicatori',
        body: 'Rendimento ponderato per i flussi, rendimento sul costo e altro, ciascuno spiegato nella guida dell’app.',
        list: ['ROI', 'TIR', 'Moltiplicatore del capitale', 'Tempo di raddoppio', 'Rendimento sul costo', 'Rendita passiva al 4%'],
      },
    },
    learn: {
      title: 'Come si calcola l’interesse composto',
      lead: 'L’interesse composto è quello maturato sul capitale e sugli interessi già aggiunti. snowballFi divide il tasso nominale annuo per i periodi di capitalizzazione, come Excel VAL.FUT e la HP 12C.',
      formula: 'FV = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
      legend: ['P: capitale iniziale', 'PMT: versamento per periodo', 'r: tasso nominale annuo', 'n: periodi all’anno', 't: anni'],
      doubleTitle: 'Tempo di raddoppio',
      doubleBody: 'La regola del 72 dà 72 / 6,5 = 11,1 anni. La formula esatta dell’app dà 10,7 anni per un capitale unico al 6,5% capitalizzato mensilmente.',
      exampleTitle: 'Esempio svolto',
      exampleCaption: 'Capitale iniziale 25.000 EUR, 800 EUR al mese a fine mese, 6,5% annuo, capitalizzazione mensile. La riga dei 25 anni coincide esattamente con l’app.',
      cols: { year: 'Anno', capital: 'Capitale', contributed: 'Versato', interest: 'Interessi' },
      yearUnit: '',
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        { q: 'Che cos’è l’interesse composto?', a: 'L’interesse composto si calcola sul capitale iniziale più gli interessi già accumulati. A ogni periodo i guadagni vengono reinvestiti, quindi la crescita accelera nel tempo.' },
        { q: 'Come calcola snowballFi?', a: 'Divide il tasso nominale annuo per il numero di periodi di capitalizzazione e applica la formula del valore futuro con versamenti periodici. È la convenzione di Excel VAL.FUT e della HP 12C.' },
        { q: 'Posso includere inflazione e tasse?', a: 'Sì. L’inflazione mostra il potere d’acquisto reale. Le tasse sulle plusvalenze possono usare un’aliquota fissa o gli scaglioni progressivi del risparmio in Spagna. Sono impostazioni avanzate.' },
        { q: 'Che cosa sono FIRE e la regola del 4%?', a: 'FIRE significa indipendenza finanziaria e pensione anticipata. La regola del 4% stima che un portafoglio possa sostenere prelievi annui pari al 4% del suo valore. snowballFi trova l’anno in cui il portafoglio raggiunge la rendita mensile desiderata.' },
        { q: 'snowballFi è gratis?', a: 'L’app è gratuita e mostra pubblicità. Un acquisto una tantum rimuove la pubblicità e sblocca impostazioni e indicatori avanzati. Non c’è alcun abbonamento.' },
        { q: 'Calcola mutui o prestiti?', a: 'No. snowballFi proietta la crescita di risparmi e investimenti. Non modella debiti né piani di ammortamento.' },
        { q: 'Quali lingue e valute supporta?', a: 'Inglese, spagnolo, tedesco, francese, italiano, portoghese brasiliano e hindi, con EUR, USD, GBP, CHF, BRL, INR, CAD e MXN.' },
      ],
    },
    final: { title: 'Fai la tua prima proiezione in un minuto', body: 'Gratis su iPhone. Scrivi quattro numeri e guarda i prossimi 25 anni.' },
    footer: {
      tagline: 'Calcolatore di interesse composto per iPhone, di Albea Systems.',
      privacy: 'Privacy',
      terms: 'Termini',
      support: 'Assistenza',
      languages: 'Lingue',
      notAffiliated: 'snowballFi è un’app indipendente. Non è affiliata né approvata da Apple Inc. App Store è un marchio di servizio di Apple Inc.',
      disclaimer: 'Le proiezioni sono esempi basati sui numeri inseriti. Non sono consulenza finanziaria né una promessa di rendimento.',
      updated: 'Aggiornato a novembre 2026',
    },
    alt: {
      home: 'Calcolatore snowballFi con proiezione in tempo reale di 725.474 EUR dopo 25 anni',
      advanced: 'Impostazioni avanzate per inflazione, capitalizzazione e tasse',
      results: 'Riepilogo dei risultati con capitale finale e indicatori chiave',
      distribution: 'Grafico ad anello della distribuzione del patrimonio',
      evolution: 'Grafico a barre impilate dell’evoluzione del patrimonio',
      comparison: 'Grafico a linee di interesse semplice e composto',
      real: 'Capitale nominale e reale dopo l’inflazione',
      table: 'Tabella di dettaglio anno per anno',
      milestones: 'Elenco dei traguardi di patrimonio per anno',
      journey: 'Registrazione dello schermo dell’app snowballFi',
    },
  },

  // ───────────────────────────────────────── Português (Brasil)
  'pt-BR': {
    meta: {
      title: 'snowballFi: calculadora de juros compostos para iPhone',
      description:
        'Projete economias e investimentos ano a ano. Juros compostos com inflação, impostos, aportes crescentes e meta FIRE. Gráficos e tabela completa. Grátis no iPhone.',
      keywords: 'calculadora de juros compostos, calculadora de investimentos, calculadora FIRE, inflação, app iPhone',
    },
    nav: { journey: 'Como funciona', charts: 'Gráficos', learn: 'A matemática', faq: 'Perguntas', menu: 'Menu', language: 'Idioma' },
    cta: 'Baixe o app grátis',
    hero: {
      h1: 'Veja seu dinheiro render, ano a ano.',
      sub: 'O snowballFi projeta investimentos com inflação, impostos e FIRE e mostra cada ano em gráficos e em uma tabela completa.',
      secondary: 'Veja como funciona',
      videoLabel: 'Gravação de tela: uma projeção avançada é configurada, depois resultados, gráficos e a tabela ano a ano.',
    },
    journey: {
      title: 'De quatro números a um plano completo',
      steps: [
        { title: 'Digite quatro números', body: 'Capital inicial, aporte periódico, taxa anual e anos. O capital final se atualiza enquanto você digita.' },
        { title: 'Some o mundo real', body: 'Ative inflação, impostos e uma meta FIRE pessoal. Escolha a frequência de capitalização dos juros.' },
        { title: 'Leia o resultado', body: 'Capital final, dinheiro investido e juros ganhos, além de ROI, TIR, multiplicador e tempo para dobrar.' },
        { title: 'Confira cada ano', body: 'A tabela ano a ano mostra aporte, juros acumulados e capital total de cada ano.' },
      ],
    },
    charts: {
      title: 'Quatro gráficos, um só motor',
      lead: 'A projeção, os gráficos e a tabela vêm do mesmo cálculo, então os números sempre batem.',
      items: [
        { title: 'Distribuição do patrimônio', body: 'Quanto do capital final é seu dinheiro e quanto são juros.' },
        { title: 'Evolução do patrimônio', body: 'Barras anuais empilhadas: capital inicial, aportes e juros.' },
        { title: 'Juros simples vs. compostos', body: 'A diferença entre juros simples e compostos, em reais.' },
        { title: 'Poder de compra', body: 'Capital nominal contra capital real após a inflação.' },
      ],
    },
    advanced: {
      title: 'Ajustes avançados que refletem a vida real',
      lead: 'Ative ou desative cada um e veja o capital final mudar.',
      items: [
        { title: 'Inflação', body: 'Veja o que seu capital vai comprar, não só o número que ele vai mostrar.' },
        { title: 'Impostos sobre ganhos', body: 'Use uma alíquota fixa ou as faixas progressivas da poupança na Espanha.' },
        { title: 'Aportes crescentes', body: 'Aumente o aporte por um percentual ou um valor fixo a cada ano.' },
        { title: 'Meta FIRE', body: 'Defina uma renda mensal e descubra o ano em que a regra dos 4% a cobre.' },
      ],
    },
    detail: {
      title: 'Cada detalhe, sem planilha',
      table: { title: 'Tabela ano a ano', body: 'Aporte, aportes acumulados, juros, juros acumulados e capital total de cada ano.' },
      milestones: { title: 'Marcos', body: 'O ano em que você passa de 50.000, recupera o capital inicial ou dobra o investimento.' },
      kpis: {
        title: 'Indicadores',
        body: 'Retorno ponderado pelo dinheiro, retorno sobre o custo e mais, cada um explicado no guia do app.',
        list: ['ROI', 'TIR', 'Multiplicador de capital', 'Tempo para dobrar', 'Retorno sobre o custo', 'Renda passiva a 4%'],
      },
    },
    learn: {
      title: 'Como os juros compostos são calculados',
      lead: 'Juros compostos são os juros ganhos sobre o capital e sobre os juros já somados. O snowballFi divide a taxa nominal anual pelos períodos de capitalização, como o VF do Excel e a HP 12C.',
      formula: 'VF = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
      legend: ['P: capital inicial', 'PMT: aporte por período', 'r: taxa nominal anual', 'n: períodos por ano', 't: anos'],
      doubleTitle: 'Tempo para dobrar',
      doubleBody: 'A regra dos 72 dá 72 / 6,5 = 11,1 anos. A fórmula exata do app dá 10,7 anos para um capital único a 6,5% capitalizado mensalmente.',
      exampleTitle: 'Exemplo resolvido',
      exampleCaption: 'Capital inicial 25.000 EUR, 800 EUR por mês ao fim de cada mês, 6,5% ao ano, capitalização mensal. A linha de 25 anos coincide exatamente com o app.',
      cols: { year: 'Ano', capital: 'Capital', contributed: 'Investido', interest: 'Juros' },
      yearUnit: '',
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        { q: 'O que são juros compostos?', a: 'Juros compostos são calculados sobre o capital inicial mais os juros já acumulados. A cada período os ganhos são reinvestidos, então o crescimento acelera com o tempo.' },
        { q: 'Como o snowballFi calcula?', a: 'Ele divide a taxa nominal anual pelo número de períodos de capitalização e aplica a fórmula do valor futuro com aportes periódicos. É a convenção do VF do Excel e da HP 12C.' },
        { q: 'Posso incluir inflação e impostos?', a: 'Sim. A inflação mostra seu poder de compra real. Os impostos sobre ganhos podem usar uma alíquota fixa ou as faixas progressivas da poupança na Espanha. Ambos são ajustes avançados.' },
        { q: 'O que são FIRE e a regra dos 4%?', a: 'FIRE significa independência financeira e aposentadoria antecipada. A regra dos 4% estima que uma carteira sustenta retiradas anuais de 4% do seu valor. O snowballFi encontra o ano em que sua carteira atinge a renda mensal desejada.' },
        { q: 'O snowballFi é grátis?', a: 'O app é gratuito e exibe anúncios. Uma compra única remove os anúncios e libera os ajustes e indicadores avançados. Não há assinatura.' },
        { q: 'Ele calcula financiamentos ou empréstimos?', a: 'Não. O snowballFi projeta o crescimento de economias e investimentos. Não modela dívidas nem tabelas de amortização.' },
        { q: 'Quais idiomas e moedas são aceitos?', a: 'Inglês, espanhol, alemão, francês, italiano, português do Brasil e hindi, com EUR, USD, GBP, CHF, BRL, INR, CAD e MXN.' },
      ],
    },
    final: { title: 'Faça sua primeira projeção em um minuto', body: 'Grátis no iPhone. Digite quatro números e veja os próximos 25 anos.' },
    footer: {
      tagline: 'Calculadora de juros compostos para iPhone, da Albea Systems.',
      privacy: 'Privacidade',
      terms: 'Termos',
      support: 'Suporte',
      languages: 'Idiomas',
      notAffiliated: 'O snowballFi é um app independente. Não é afiliado nem endossado pela Apple Inc. App Store é uma marca de serviço da Apple Inc.',
      disclaimer: 'As projeções são exemplos baseados nos números que você informa. Não são aconselhamento financeiro nem promessa de retorno.',
      updated: 'Atualizado em novembro de 2026',
    },
    alt: {
      home: 'Calculadora snowballFi com projeção em tempo real de 725.474 EUR em 25 anos',
      advanced: 'Ajustes avançados de inflação, capitalização e impostos',
      results: 'Resumo dos resultados com capital final e indicadores principais',
      distribution: 'Gráfico de rosca da distribuição do patrimônio',
      evolution: 'Gráfico de barras empilhadas da evolução do patrimônio',
      comparison: 'Gráfico de linhas de juros simples e compostos',
      real: 'Capital nominal e real após a inflação',
      table: 'Tabela de detalhe ano a ano',
      milestones: 'Lista de marcos de patrimônio por ano',
      journey: 'Gravação de tela do app snowballFi',
    },
  },

  // ───────────────────────────────────────── हिन्दी
  hi: {
    meta: {
      title: 'snowballFi: iPhone के लिए चक्रवृद्धि ब्याज कैलकुलेटर',
      description:
        'बचत और निवेश का साल-दर-साल अनुमान लगाएं। मुद्रास्फीति, कर, बढ़ते योगदान और FIRE लक्ष्य के साथ चक्रवृद्धि ब्याज। चार्ट और पूरी तालिका। iPhone पर मुफ़्त।',
      keywords: 'चक्रवृद्धि ब्याज कैलकुलेटर, निवेश कैलकुलेटर, FIRE कैलकुलेटर, मुद्रास्फीति, iPhone ऐप',
    },
    nav: { journey: 'कैसे काम करता है', charts: 'चार्ट', learn: 'गणित', faq: 'प्रश्न', menu: 'मेनू', language: 'भाषा' },
    cta: 'मुफ़्त ऐप पाएं',
    hero: {
      h1: 'अपना पैसा बढ़ते देखें, साल-दर-साल।',
      sub: 'snowballFi मुद्रास्फीति, कर और FIRE के साथ निवेश का अनुमान लगाता है, फिर हर साल को चार्ट और पूरी तालिका में दिखाता है।',
      secondary: 'देखें कैसे काम करता है',
      videoLabel: 'स्क्रीन रिकॉर्डिंग: उन्नत अनुमान सेट किया जाता है, फिर परिणाम, चार्ट और साल-दर-साल तालिका दिखती है।',
    },
    journey: {
      title: 'चार संख्याओं से पूरी योजना तक',
      steps: [
        { title: 'चार संख्याएं डालें', body: 'प्रारंभिक पूंजी, नियमित योगदान, वार्षिक दर और वर्ष। टाइप करते ही अंतिम पूंजी बदलती है।' },
        { title: 'वास्तविकता जोड़ें', body: 'मुद्रास्फीति, कर और अपना FIRE लक्ष्य चालू करें। चुनें कि ब्याज कितनी बार जुड़े।' },
        { title: 'परिणाम पढ़ें', body: 'अंतिम पूंजी, निवेशित धन और अर्जित ब्याज, साथ में ROI, IRR, गुणक और दोगुना होने का समय।' },
        { title: 'हर साल जांचें', body: 'साल-दर-साल तालिका हर वर्ष का योगदान, संचित ब्याज और कुल पूंजी दिखाती है।' },
      ],
    },
    charts: {
      title: 'चार चार्ट, एक ही गणना',
      lead: 'अनुमान, चार्ट और तालिका एक ही गणना से आते हैं, इसलिए आंकड़े हमेशा मेल खाते हैं।',
      items: [
        { title: 'संपत्ति वितरण', body: 'अंतिम पूंजी में कितना आपका पैसा है और कितना ब्याज।' },
        { title: 'संपत्ति का विकास', body: 'वार्षिक स्टैक्ड बार: प्रारंभिक पूंजी, योगदान और ब्याज।' },
        { title: 'सरल बनाम चक्रवृद्धि', body: 'सरल और चक्रवृद्धि ब्याज का अंतर, मुद्रा में।' },
        { title: 'क्रय शक्ति', body: 'नॉमिनल पूंजी बनाम मुद्रास्फीति के बाद वास्तविक पूंजी।' },
      ],
    },
    advanced: {
      title: 'वास्तविक जीवन जैसे उन्नत समायोजन',
      lead: 'हर विकल्प को चालू या बंद करें और अंतिम पूंजी का बदलाव देखें।',
      items: [
        { title: 'मुद्रास्फीति', body: 'देखें कि आपकी पूंजी क्या खरीद पाएगी, केवल यह नहीं कि वह कितनी दिखेगी।' },
        { title: 'लाभ पर कर', body: 'निश्चित दर या स्पेन की प्रगतिशील बचत स्लैब का उपयोग करें।' },
        { title: 'बढ़ते योगदान', body: 'हर साल योगदान को प्रतिशत या निश्चित राशि से बढ़ाएं।' },
        { title: 'FIRE लक्ष्य', body: 'मासिक आय का लक्ष्य तय करें और वह वर्ष जानें जब 4% नियम उसे पूरा करता है।' },
      ],
    },
    detail: {
      title: 'हर विवरण, बिना स्प्रेडशीट के',
      table: { title: 'साल-दर-साल तालिका', body: 'हर वर्ष का योगदान, संचित योगदान, ब्याज, संचित ब्याज और कुल पूंजी।' },
      milestones: { title: 'पड़ाव', body: 'वह वर्ष जब आप 50,000 पार करते हैं, प्रारंभिक पूंजी वापस पाते हैं या निवेश दोगुना करते हैं।' },
      kpis: {
        title: 'संकेतक',
        body: 'धन-भारित रिटर्न, लागत पर प्रतिफल और अन्य, हर एक ऐप की गाइड में समझाया गया।',
        list: ['ROI', 'IRR', 'पूंजी गुणक', 'दोगुना होने का समय', 'लागत पर प्रतिफल', '4% पर निष्क्रिय आय'],
      },
    },
    learn: {
      title: 'चक्रवृद्धि ब्याज की गणना कैसे होती है',
      lead: 'चक्रवृद्धि ब्याज वह है जो आपकी पूंजी और पहले से जुड़े ब्याज पर मिलता है। snowballFi नॉमिनल वार्षिक दर को चक्रवृद्धि अवधियों से भाग देता है, जैसा Excel FV और HP 12C में होता है।',
      formula: 'FV = P(1 + r/n)^(nt) + PMT x ((1 + r/n)^(nt) - 1) / (r/n)',
      legend: ['P: प्रारंभिक पूंजी', 'PMT: प्रति अवधि योगदान', 'r: नॉमिनल वार्षिक दर', 'n: प्रति वर्ष अवधियां', 't: वर्ष'],
      doubleTitle: 'दोगुना होने का समय',
      doubleBody: '72 का नियम 72 / 6.5 = 11.1 वर्ष देता है। ऐप का सटीक सूत्र 6.5% पर मासिक चक्रवृद्धि वाली एकमुश्त राशि के लिए 10.7 वर्ष देता है।',
      exampleTitle: 'हल किया हुआ उदाहरण',
      exampleCaption: 'प्रारंभिक पूंजी 25,000 EUR, हर महीने के अंत में 800 EUR, 6.5% वार्षिक, मासिक चक्रवृद्धि। 25 वर्ष वाली पंक्ति ऐप से ठीक मेल खाती है।',
      cols: { year: 'वर्ष', capital: 'पूंजी', contributed: 'निवेशित', interest: 'ब्याज' },
      yearUnit: '',
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      items: [
        { q: 'चक्रवृद्धि ब्याज क्या है?', a: 'चक्रवृद्धि ब्याज प्रारंभिक पूंजी और पहले से जमा ब्याज पर गिना जाता है। हर अवधि में कमाई दोबारा निवेश होती है, इसलिए समय के साथ वृद्धि तेज होती है।' },
        { q: 'snowballFi गणना कैसे करता है?', a: 'यह नॉमिनल वार्षिक दर को चक्रवृद्धि अवधियों की संख्या से भाग देता है और नियमित योगदान के साथ भविष्य मूल्य सूत्र लगाता है। यही Excel FV और HP 12C की परंपरा है।' },
        { q: 'क्या मैं मुद्रास्फीति और कर जोड़ सकता हूं?', a: 'हां। मुद्रास्फीति आपकी वास्तविक क्रय शक्ति दिखाती है। लाभ पर कर निश्चित दर या स्पेन की प्रगतिशील बचत स्लैब से गिना जा सकता है। दोनों उन्नत समायोजन हैं।' },
        { q: 'FIRE और 4% नियम क्या हैं?', a: 'FIRE का मतलब है वित्तीय स्वतंत्रता और जल्दी सेवानिवृत्ति। 4% नियम का अनुमान है कि पोर्टफोलियो अपने मूल्य के 4% की वार्षिक निकासी संभाल सकता है। snowballFi वह वर्ष खोजता है जब आपका पोर्टफोलियो आपके मासिक आय लक्ष्य तक पहुंचता है।' },
        { q: 'क्या snowballFi मुफ़्त है?', a: 'ऐप मुफ़्त है और विज्ञापन दिखाता है। एक बार का भुगतान विज्ञापन हटाता है और उन्नत समायोजन व संकेतक खोलता है। कोई सदस्यता नहीं है।' },
        { q: 'क्या यह होम लोन या कर्ज़ की गणना करता है?', a: 'नहीं। snowballFi बचत और निवेश की वृद्धि का अनुमान लगाता है। यह कर्ज़ या लोन की किस्त तालिका नहीं बनाता।' },
        { q: 'कौन सी भाषाएं और मुद्राएं उपलब्ध हैं?', a: 'अंग्रेज़ी, स्पेनिश, जर्मन, फ्रेंच, इतालवी, ब्राज़ीली पुर्तगाली और हिन्दी, साथ में EUR, USD, GBP, CHF, BRL, INR, CAD और MXN।' },
      ],
    },
    final: { title: 'एक मिनट में पहला अनुमान लगाएं', body: 'iPhone पर मुफ़्त। चार संख्याएं डालें और अगले 25 साल देखें।' },
    footer: {
      tagline: 'iPhone के लिए चक्रवृद्धि ब्याज कैलकुलेटर, Albea Systems द्वारा।',
      privacy: 'गोपनीयता',
      terms: 'शर्तें',
      support: 'सहायता',
      languages: 'भाषाएं',
      notAffiliated: 'snowballFi एक स्वतंत्र ऐप है। यह Apple Inc. से संबद्ध नहीं है और न ही Apple Inc. द्वारा समर्थित है। App Store, Apple Inc. का सेवा चिह्न है।',
      disclaimer: 'अनुमान आपके दर्ज किए आंकड़ों पर आधारित उदाहरण हैं। ये वित्तीय सलाह या रिटर्न का वादा नहीं हैं।',
      updated: 'नवंबर 2026 में अपडेट किया गया',
    },
    alt: {
      home: '25 वर्षों में 7,25,474 EUR का लाइव अनुमान दिखाता snowballFi कैलकुलेटर',
      advanced: 'मुद्रास्फीति, चक्रवृद्धि और कर के उन्नत समायोजन',
      results: 'अंतिम पूंजी और मुख्य संकेतकों के साथ परिणाम सारांश',
      distribution: 'संपत्ति वितरण का डोनट चार्ट',
      evolution: 'संपत्ति के विकास का स्टैक्ड बार चार्ट',
      comparison: 'सरल बनाम चक्रवृद्धि ब्याज का लाइन चार्ट',
      real: 'मुद्रास्फीति के बाद नॉमिनल बनाम वास्तविक पूंजी',
      table: 'साल-दर-साल विवरण तालिका',
      milestones: 'वर्ष के अनुसार संपत्ति पड़ावों की सूची',
      journey: 'snowballFi ऐप की स्क्रीन रिकॉर्डिंग',
    },
  },
}
