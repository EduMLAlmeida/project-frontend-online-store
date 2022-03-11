import React, { Component } from 'react';
import ProductCategoryList from '../components/ProductCategoryList';
import CartButton from '../components/CartButton';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ProductCategoryList />
        <CartButton cartItems={ items } />
      </>
    );
  }
}
