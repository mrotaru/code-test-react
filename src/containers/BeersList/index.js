import React from 'react';
import { connect } from 'react-redux'

import * as beerActions from '../../modules/beers/actions'
import * as shoppingBasketActions from '../../modules/shoppingBasket/actions'
import BeersList from '../../components/BeersList'

class BeersListContainer extends React.Component{
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }
  addToCart(beer) {
    this.props.addToCart(beer)
  }
  render() {
    const { beers } = this.props
    return <BeersList beers={beers} addToCart={this.addToCart} />
  }
}

const mapStateToProps = state => ({
  beers: state.beers.beers,
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: beer => dispatch(shoppingBasketActions.addItem(beer))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeersListContainer)

