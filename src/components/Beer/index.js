import React from 'react'

const Beer = ({beer, addToCart, inCart}) => <div>
    <span>{beer.name}</span>
    {inCart && <span>( {inCart} )</span>}
    <button onClick={() => {
      addToCart(beer)
    }}> + </button>
  </div>

export default Beer