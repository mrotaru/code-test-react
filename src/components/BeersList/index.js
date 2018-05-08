import React from 'react'
import Beer from '../Beer'

const BeersList = ({beers, addToCart}) => <div>
  {beers.length
    ? beers.map(beer => <Beer key={beer.id} beer={beer} addToCart={addToCart} />)
    : <p>No beers...</p>
  }
  </div>

export default BeersList