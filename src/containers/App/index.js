import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../Home';
import Checkout from '../Checkout';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
    </header>

    <main>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/" component={Home} />
    </main>
  </div>
);

export default App
