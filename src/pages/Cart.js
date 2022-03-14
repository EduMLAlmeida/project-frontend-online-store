// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from '../components/Products';

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
                .filter((_, index) => index > 0)
                .map((currProduct) => {
                  const {
                    id,
                    title,
                    price,
                    thumbnail,
                  } = currProduct;
                  return (

                    <div key={ id }>
                      <span data-testid="product" />
                      <Link
                        to={ `./productDetails/${id}` }
                        data-testid="product-detail-link"
                      >
                        <p>{title}</p>
                        <img src={ thumbnail } alt={ title } />
                        <p>{price}</p>
                      </Link>
                      <button
                        type="button"
                        data-testid="product-add-to-cart"
                        onClick={ () => { this.addToCart(currProduct); } }
                      >
                        Adicionar ao Carrinho
                      </button>
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
