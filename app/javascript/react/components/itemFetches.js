import { GET } from "./ApiFetch"

export const fetchItems = async() => {
  const mapping = await GET("https://prices.runescape.wiki/api/v1/osrs/mapping")
  const prices = await GET("https://prices.runescape.wiki/api/v1/osrs/latest")
  const hourlyPrices = await GET("https://prices.runescape.wiki/api/v1/osrs/1h")
  return { mapping: mapping, prices: prices, hourlyPrices: hourlyPrices }
}