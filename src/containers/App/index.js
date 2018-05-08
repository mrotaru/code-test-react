import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import Home from '../Home';
import Checkout from '../Checkout';
import Error from '../../components/Error'

import * as beerActions from '../../modules/beers/actions'
import BeersList from '../../components/BeersList'

const App = ({error}) => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
    </header>

    <main>
      {error && <Error errorString={error} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
    </main>
  </div>
);

const mapStateToProps = state => ({
  error: state.beers.error,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
