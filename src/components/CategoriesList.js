import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends Component {
  render() {
    const { categories, handleClickCategory } = this.props;
    return (
      <div>
        {
          (categories && categories.map((currCategory) => {
            const {
              id,
              name,
            } = currCategory;
            return (
              <div key={ id }>
                <label htmlFor="category" data-testid="category">
                  <input
                    type="radio"
                    id={ id }
                    name="category"
                    value={ name }
                    onClick={ handleClickCategory }
                  />
                  { name }
                </label>
              </div>
            );
          }))
        }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleClickCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
