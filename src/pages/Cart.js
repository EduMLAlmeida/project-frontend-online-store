// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      cartItems === []
        ? (<p data-testid="shopping-cart-empty-message">
          Nenhum produto foi encontrado
        </p>)
        : (
          <div>
            {
              (cartItems
                .map((currProduct) => {
                  const {
                    id,
                    title,
                    price,
                    thumbnail,
                  } = currProduct;
                  return (
                    <div key={ id }>
                      <Link
                        to={ `./productDetails/${id}` }
                      >
                        <p data-testid="shopping-cart-product-name">{title}</p>
                        <img src={ thumbnail } alt={ title } />
                        <p>{price}</p>
                      </Link>
                      <p data-testid="shopping-cart-product-quantity">1</p>
                    </div>
                  );
                }))
            }
          </div>
        )
    );
  }
}
// Cart.propTypes = {
//   cartItems: PropTypes.string,
// }.isRequired;
