import React, { Component } from 'react';
import { getCategories, getProductsFromQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import Products from './Products';

class ProductCategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchInput: '',
      searchResult: [],
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState(() => ({ categories: result }));
  }

  onClick = async () => {
    const { searchInput } = this.state;
    const searchAPI = await getProductsFromQuery(searchInput);
    this.setState({ searchResult: searchAPI.results });
    console.log(searchAPI.results);
  }

  handleChange = ({ target }) => {
    const {
      name,
      value,
    } = target;

    this.setState({ [name]: value });
  }

  render() {
    const {
      categories,
      searchInput,
      searchResult,
    } = this.state;
    return (
      <>
        <div>
          <label htmlFor="searchInput">
            <input
              type="text"
              name="searchInput"
              value={ searchInput }
              onChange={ this.handleChange }
              data-testid="query-input"
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.onClick }
          >
            Pesquisar
          </button>
        </div>
        <div data-testid="product">
          <p>Produtos</p>
        </div>
        <div>
          <CategoriesList categories={ categories } />
          <Products searchResult={ searchResult } />
        </div>
      </>
    );
  }
}

export default ProductCategoryList;
