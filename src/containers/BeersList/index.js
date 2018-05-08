import React from 'react';
import { connect } from 'react-redux'

import * as shoppingBasketActions from '../../modules/shoppingBasket/actions'
import Beer from '../../components/Beer'

class BeersListContainer extends React.Component{
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }
  addToCart(beer) {
    this.props.addToCart(beer)
  }
  render() {
    const { beers, itemsInCart } = this.props
    const inCart = new Map()
    itemsInCart.forEach(item => {
      if (inCart.has(item.id)) {
        inCart.set(item.id, inCart.get(item.id) + 1)
      } else {
        inCart.set(item.id, 1)
      }
    });

    return <div>
      {beers.length
        ? beers.map(beer => <Beer key={beer.id}
            beer={beer}
            addToCart={this.addToCart}
            inCart={inCart.get(beer.id)}
          />)
        : <p>No beers...</p>
      }
      </div>

  }
}

const mapStateToProps = state => ({
  beers: state.beers.beers,
  itemsInCart: state.basket.items,
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: beer => dispatch(shoppingBasketActions.addItem(beer))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeersListContainer)

