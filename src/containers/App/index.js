import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import Home from '../Home';
import Checkout from '../Checkout';

import Error from '../../components/Error'

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
  router: state.router,
  error: state.beers.error,
})

export default connect(mapStateToProps, null)(App)