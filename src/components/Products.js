import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  addToCart = (cartProduct) => {
    const { cartItems } = this.props;
    console.log(cartProduct);
    cartItems.push(cartProduct);
    console.log(cartItems);

    // const { id, title } = target;
    // Adicione o atributo data-testid com o valor shopping-cart-product-name no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
    // Adicione o atributo data-testid com o valor shopping-cart-product-quantity no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
  };

  render() {
    const { searchResult } = this.props;
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
                      <Link
                        to={ `./productDetails/${id}` }
                        data-testid="product-detail-link"
                      >
                        <p>{title}</p>
                        <img src={ thumbnail } alt={ title } />
                        <p>{price}</p>
                      </Link>
                      <button
                        type="button"
                        data-testid="product-add-to-cart"
                        onClick={ () => { this.addToCart(currProduct); } }
                      >
                        Adicionar ao Carrinho
                      </button>
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
