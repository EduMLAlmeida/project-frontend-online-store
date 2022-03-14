import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  addToCart = (cartProduct) => {
    const { cartItems } = this.props;
    const cartString = JSON.stringify(cartItems);
    if (!cartString.includes(cartProduct.id)) {
      cartItems.push(cartProduct);
    }
  };

  render() {
    const { searchResult } = this.props;
    return (
      searchResult === []
        ? (<p>Nenhum produto foi encontrado</p>)
        : (
          <div>
            {
              (searchResult
                // .filter((_, index) => index > 0)
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

Products.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Products;
