import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { searchResult } = this.props;
    console.log(searchResult);
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
