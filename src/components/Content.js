import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from './ProductDetails';

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  render() {
    const { cartItems } = this.state;
    return (
      <Switch>
        <Route
          path="/Cart"
          render={ (props) => (
            <Cart { ...props } cartItems={ cartItems } />) }
        />
        <Route
          exact
          path="/"
          render={ (props) => (
            <Home { ...props } cartItems={ cartItems } />) }
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
