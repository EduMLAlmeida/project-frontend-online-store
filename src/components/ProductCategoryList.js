import React, { Component } from 'react';
import { getCategories,
  getProductsFromCategory, getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import Products from './Products';

class ProductCategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchInput: '',
      searchResult: [],
      currentCategory: '',
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState({ categories: result });
  }

  onClick = () => {
    const { searchInput, currentCategory } = this.state;

    this.setState({
      searchResult: [],
    }, async () => {
      const searchWithCategory = await getProductsFromCategoryAndQuery(
        currentCategory,
        searchInput,
      );

      this.setState({ searchResult: searchWithCategory.results });
    });
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
      searchResult: [],
    });

    this.setState({
      currentCategory: target.id,
      searchResult: [],
    }, async () => {
      const searchFromCategory = await getProductsFromCategory(target.id);
      this.setState({
        searchResult: searchFromCategory.results,
      });
    });
  }

  render() {
    const {
      categories,
      searchInput,
      searchResult,
    } = this.state;
    const {
      cartItems,
    } = this.props;
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
          <Products searchResult={ searchResult } cartItems={ cartItems } />
        </div>
      </>
    );
  }
}

export default ProductCategoryList;
