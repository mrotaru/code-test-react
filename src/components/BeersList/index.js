import React from 'react'
import Beer from '../Beer'

const BeersList = beers => <div>
  {beers.length
    ? beers.map(beer => <Beer key={beer.id} beer={beer} />)
    : <p>No beers...</p>
  }
  </div>

export default BeersList