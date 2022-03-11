import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ProductCategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState(() => ({ categories: result }), () => {
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {
          (categories.map((currCategory) => {
            const {
              id,
              name,
            } = currCategory;
            return (
              <div key={ id }>
                <label htmlFor="radio" data-testid="category">
                  <input
                    type="radio"
                    id="radio"
                    value={ name }
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

export default ProductCategoryList;
