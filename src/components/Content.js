import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from './ProductDetails';

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Cart" component={ Cart } />
        <Route
          exact
          path="/"
          render={ (props) => (
            <Home { ...props } />) }
        />
        <Route
          path="/productDetails/:id"
          component={ ProductDetails }
          // render={ () => (<ProductDetails { ...this.props } />) }
        />
      </Switch>
    );
  }
}
