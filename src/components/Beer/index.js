import React from 'react'

const Beer = ({beer, addToCart}) => <div>
    <span>{beer.name}</span>
    <button onClick={() => {
      addToCart(beer)
    }}> + </button>
  </div>

export default Beer