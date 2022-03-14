import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { searchResult } = this.props;
    return (
      searchResult === []
        ? (<p>Nenhum produto foi encontrado</p>)
        : (
          <div>
            {
              (searchResult
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
                      <p>{title}</p>
                      <img src={ thumbnail } alt={ title } />
                      <p>{price}</p>
                      <Link
                        to={ `./productDetails/${id}` }
                        data-testeid="product-detail-link"
                      >
                        {' '}
                        Ver Detalhes

                      </Link>
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
