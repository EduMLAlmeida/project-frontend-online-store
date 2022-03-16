import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const {
      searchResult,
      onAddToCartButtonClick,
    } = this.props;
    return (
      searchResult === []
        ? (<p>Nenhum produto foi encontrado</p>)
        : (
          <div>
            {
              (searchResult
                .map((currProduct) => {
                  const {
                    id,
                    title,
                    price,
                    thumbnail,
                  } = currProduct;
                  return (

                    <div data-testid="product" key={ id }>
                      <Link
                        to={ `./productDetails/${id}` }
                        data-testid="product-detail-link"
                      >
                        <p data-testid="shopping-cart-product-name">{title}</p>
                        <img src={ thumbnail } alt={ title } />
                        <p>{price}</p>
                      </Link>
                      <button
                        type="button"
                        data-testid="product-add-to-cart"
                        onClick={ () => { onAddToCartButtonClick(currProduct); } }
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
  onAddToCartButtonClick: PropTypes.func.isRequired,
};

export default Products;
