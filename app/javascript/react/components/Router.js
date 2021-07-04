import React, { useState, useEffect } from 'react'
import { fetchItems } from "./itemFetches"
import structureItems  from "./StructureItems"
import ItemsList from "./ItemsList"

export const Router = (props) => {
  const[items, setItems] = useState([])
  const[filteredItems, setFilteredItems] = useState([])
  const[limit, setLimit] = useState(Infinity)

  const fetchItemsWrapper = async() => {
    const response = await fetchItems()
    const items = structureItems(response)
    setItems(items)
    setFilteredItems(items)
  }

  useEffect(() => {
    fetchItemsWrapper()
  },[])

  const handleChange = (event) => {
    setLimit(event.currentTarget.value)
    let filteredItems = []
    items.forEach((item) => {
      if(item.low + item.high / 2<= event.currentTarget.value){
        filteredItems.push(item)
      }
    })
    setFilteredItems(filteredItems)
  }

  return (
    <section>
      <label htmlFor="limit">limit</label>
      <input type="number" name="limit" id="limit" value={limit} onChange={handleChange}/>
      <ItemsList items={filteredItems}/>
    </section>
  )
}

export default Router
