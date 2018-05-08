import React from 'react';
import { connect } from 'react-redux'

const Checkout = ({ items, count }) => {
  const itemsArray = []
  const inCart = new Map()
  items.forEach(item => {
    if (inCart.has(item.id)) {
      const itemRef = inCart.get(item.id)
      itemRef.count++
    } else {
      inCart.set(item.id, {...item, count: 1})
    }
  });
  for(let value of inCart.values()) {
    itemsArray.push(value)
  }
  return (
    <div>
      <h1>Checkout page</h1>
      <ul>
        {itemsArray.map(item => <li>{item.name} ( {item.count} )</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.basket.items,
  count: state.basket.count,
})

export default connect(mapStateToProps, null)(Checkout)
