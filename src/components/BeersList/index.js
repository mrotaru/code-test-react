import Beer from '../Beer'

export const BeerList = beers => <div>
  {beers.map(beer => <Beer key={beer.id} beer={beer} />)}
  </div>