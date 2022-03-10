import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
