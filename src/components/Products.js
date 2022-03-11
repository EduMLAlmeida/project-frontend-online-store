import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { searchResult } = this.props;
    return (
      searchResult === []
        ? (<p>Nenhum produto foi encontrado</p>)
        : (
          <div>
            {
              (searchResult.map((currProduct) => {
                const {
                  id,
                  title,
                  price,
                  thumbnail,
                } = currProduct;
                return (
                  <div key={ id }>
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
