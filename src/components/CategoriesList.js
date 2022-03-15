import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends Component {
  render() {
    const {
      categories,
      onCategoryClick,
    } = this.props;
    return (
      <div>
        <p>Produtos</p>
        <div>
          {
            (categories && categories.map((currCategory) => {
              const {
                id,
                name,
              } = currCategory;
              return (
                <div key={ id }>
                  <label htmlFor={ id } data-testid="category">
                    <input
                      type="radio"
                      id={ id }
                      name="category"
                      value={ name }
                      onClick={ onCategoryClick }
                    />
                    { name }
                  </label>
                </div>
              );
            }))
          }
        </div>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoriesList;
