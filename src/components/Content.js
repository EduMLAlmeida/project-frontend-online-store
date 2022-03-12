import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from './ProductDetails';

export default class Content extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/Cart" component={ Cart } />
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home { ...props } />) }
            />
            <Route
              path="/details"
              render={ (props) => <ProductDetails { ... props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
