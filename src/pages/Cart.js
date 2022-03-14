// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Products from '../components/Products';

export default class Cart extends Component {
  render() {
    // const { cartItems } = this.props;
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }
}
// Cart.propTypes = {
//   cartItems: PropTypes.string,
// }.isRequired;
