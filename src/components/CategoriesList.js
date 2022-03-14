import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CategoriesList extends Component {
  render() {
    const { categories } = this.props;
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
                <label htmlFor={ id } data-testid="category">
                  <input
                    type="radio"
                    id={ id }
                    name="category"
                    value={ id }
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
};

export default CategoriesList;
