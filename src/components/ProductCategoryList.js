import React, { Component } from 'react';
import { getCategories,
  getProductsFromQuery, getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import Products from './Products';

class ProductCategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchInput: '',
      searchResult: [],
      checkingCategory: false,
      currentCategory: '',
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState(() => ({ categories: result }));
  }

  onClick = async () => {
    const { checkingCategory, searchInput, currentCategory } = this.state;

    if (!checkingCategory) {
      const searchAPI = await getProductsFromQuery(searchInput);
      this.setState({ searchResult: searchAPI.results });
    } else if (checkingCategory) {
      const searchWithCategory = await getProductsFromCategoryAndQuery(
        currentCategory,
        searchInput,
      );
      console.log(searchWithCategory);
      this.setState({ searchResult: searchWithCategory.results });
    }
  }

  handleChange = ({ target }) => {
    const {
      name,
      value,
    } = target;

    this.setState({ [name]: value });
  }

  handleClickCategory = ({ target }) => {
    this.setState({
      currentCategory: target.id,
      checkingCategory: true,
    });
  };

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
          <CategoriesList
            categories={ categories }
            handleClickCategory={ this.handleClickCategory }
          />
          <Products searchResult={ searchResult } />
        </div>
      </>
    );
  }
}

export default ProductCategoryList;
