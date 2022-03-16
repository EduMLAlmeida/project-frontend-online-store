import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';
import HomeButton from '../components/HomeButton';

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <HomeButton />
        <p>Produtos</p>
        {
          cartItems[0] === undefined
            ? <EmptyCart />
            : (
              <div>
                {
                  (cartItems
                    .map((currProduct) => {
                      const {
                        id,
                        title,
                        price,
                        thumbnail,
                      } = currProduct.product;
                      return (
                        <div key={ id }>
                          <Link
                            to={ `./productDetails/${id}` }
                          >
                            <p data-testid="shopping-cart-product-name">{title}</p>
                            <img src={ thumbnail } alt={ title } />
                            <p>{price}</p>
                          </Link>
                          <p
                            data-testid="shopping-cart-product-quantity"
                          >
                            {currProduct.qtt}
                          </p>
                        </div>
                      );
                    }))
                }
              </div>
            )
        }
      </div>
    );
  }
}
Cart.propTypes = {
  cartItems: PropTypes.string.isRequired,
}.isRequired;
