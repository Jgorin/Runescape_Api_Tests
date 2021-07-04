const structureItems = (itemData) => {
  let res = []
  const mapping = itemData.mapping
  const prices = itemData.prices.data
  const hourlyPrices = itemData.hourlyPrices.data
  for(let i = 0; i < mapping.length; i++){
    let item = {}
    for (const [key, value] of Object.entries(mapping[i])){
      item[key] = value
    }
    if(prices[item["id"]]){
      for(const [key, value] of Object.entries(prices[item["id"]])){
        item[key] = value
      }
    }
    if(hourlyPrices[item["id"]]){
      item.hourlyPrices = hourlyPrices[item["id"]]
    }
    res.push(item)
  }
  res.sort((item1, item2) => {
    let item1Margin = null
    let item2Margin = null
    if(item1.low !== undefined && item1.high !== undefined){
      item1Margin = item1.high - item1.low
    }
    if(item2.low !== undefined && item2.high !== undefined){
      item2Margin = item2.high - item2.low
    }
    return item1Margin - item2Margin
  })
  
  return res.reverse()
}

export default structureItems