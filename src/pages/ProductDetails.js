import PropTypes from 'prop-types';
import React from 'react';
import { getDetails, getProductsFromID } from '../services/api';
import RatingSystem from '../components/RatingSystem';
import HomeButton from '../components/HomeButton';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      attributes: [],
      price: 0,
      renderedProduct: 'a',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await getDetails(id);
    this.setState(() => ({
      title: result.title,
      price: result.price,
      thumbnail: result.thumbnail,
      attributes: [...result.attributes],
    }));
    this.getProducts();
  }

  getProducts = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductsFromID(id);
    this.setState({
      renderedProduct: product,
    });
  }

  render() {
    const { title, thumbnail, price, attributes, renderedProduct } = this.state;
    const { onAddToCartButtonClick } = this.props;
    return (
      <>
        <HomeButton />
        <p data-testid="product-detail-name">{ title }</p>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => onAddToCartButtonClick(renderedProduct) }
        >
          Adicionar ao Carrinho
        </button>
        <p>
          {' '}
          { attributes[attributes] }
        </p>
        <div>
          <RatingSystem />
        </div>
      </>
    );
  }
}
ProductDetails.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}).isRequired;

export default ProductDetails;
