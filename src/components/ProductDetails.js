import PropTypes from 'prop-types';
import React from 'react';
import { getDetails } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      attributes: [],
      price: 0,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await getDetails(id);
    console.log(result);
    this.setState(() => ({
      title: result.title,
      price: result.price,
      thumbnail: result.thumbnail,
      attributes: [...result.attributes],
    }));
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;
    console.log(attributes);
    return (
      <>
        <p>Teste</p>
        <h2 data-testid="product-detail-name"> </h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p>
          {' '}
          { attributes[attributes] }
        </p>
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
