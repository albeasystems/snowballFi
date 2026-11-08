// Worked example computed with the same future-value formula the app uses
// (nominal annual rate / periods, contributions at the end of each period).
// 25,000 initial, 800 per month, 6.5% a year, monthly compounding: 25 years = 725,474.17.

export const EXAMPLE = { initial: 25000, monthly: 800, rate: 6.5, years: [5, 10, 15, 20, 25] }

export function exampleRows(intl: string) {
  const fmt = new Intl.NumberFormat(intl, { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const r = EXAMPLE.rate / 100 / 12
  return EXAMPLE.years.map((year) => {
    const n = year * 12
    const g = (1 + r) ** n
    const fv = EXAMPLE.initial * g + (EXAMPLE.monthly * (g - 1)) / r
    const invested = EXAMPLE.initial + EXAMPLE.monthly * n
    return { year, capital: fmt.format(fv), invested: fmt.format(invested), interest: fmt.format(fv - invested) }
  })
}
