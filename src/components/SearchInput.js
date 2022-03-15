import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  render() {
    const {
      searchInput,
      onSearchInputChange,
      onSearchInputClick,
    } = this.props;
    return (
      <div>
        <label htmlFor="searchInput">
          <input
            type="text"
            name="searchInput"
            value={ searchInput }
            onChange={ onSearchInputChange }
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ onSearchInputClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchInputClick: PropTypes.func.isRequired,
};

export default SearchInput;
