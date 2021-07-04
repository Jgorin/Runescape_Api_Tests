import React from "react"

const ItemsList = (props) => {
  const { items } = props

  const itemTiles = items.map((item) => {
    let low = null
    let high = null
    let margin = null
    let avg = null
    let buyLimit = null
    let unitsSold = null
    if(item.low != undefined && item.high != undefined){
      low = <p>low: {numberWithCommas(item.low)}</p>
      high = <p>high: {numberWithCommas(item.high)}</p>
      margin = <p>margin: {numberWithCommas(item.high - item.low)}</p>
      avg = <p>avg: {numberWithCommas(Math.round((item.low + item.high) / 2))}</p>
      buyLimit = <p>buy limit: {item.limit ? numberWithCommas(item.limit) : "N/A"}</p>
      if(item.hourlyPrices){
        let hourlyPrices = item.hourlyPrices
        unitsSold = <p>{`units { minimum: ${item.hourlyPrices.lowPriceVolume ? item.hourlyPrices.lowPriceVolume : null}, maximum: ${item.hourlyPrices.highPriceVolume ? item.hourlyPrices.highPriceVolume : null}  }`}</p>
        if(hourlyPrices.avgLowPrice){
          low = <p>low: {numberWithCommas(hourlyPrices.avgLowPrice)}</p>
        }
        if(hourlyPrices.avgHighPrice){
          high = <p>high: {numberWithCommas(hourlyPrices.avgHighPrice)}</p>
        }
      }
    }

    return(
      <li className="callout secondary item">
        <img src={`https://www.osrsbox.com/osrsbox-db/items-icons/${item.id}.png`}/>
        <a>{item.name}</a>
        {avg}
        {low}
        {high}
        {margin}
        {buyLimit}
        {unitsSold}
      </li>
    )
  })

  return(
    <section className="text-center">
      {itemTiles}
    </section>
  )
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ItemsList