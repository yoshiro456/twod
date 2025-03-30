import { parse } from 'node-html-parser'

export async function scrapeTwod() {
  const baseUrl = 'https://www.set.or.th/en/home'

  const response = await fetch(baseUrl)
  const html = await response.text()
  const root = parse(html)

  const setText = root.querySelector(
    '.table-market-overview > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > span:nth-child(2)'
  )
  const setDigit = setText?.text.trim()
  const firstDigit = setDigit?.charAt(setDigit.length - 1)

  const valueText = root.querySelector(
    '.table-market-overview > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5)'
  )
  const valueDigit = valueText?.text.trim()
  const secondDigit = valueDigit?.charAt(valueDigit.length - 4)

  const digit = `${firstDigit}${secondDigit}`

  return { setDigit, valueDigit, firstDigit, secondDigit, digit }
}
