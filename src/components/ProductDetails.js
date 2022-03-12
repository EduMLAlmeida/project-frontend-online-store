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
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const result = await getDetails(params.id);
    this.setState(() => ({
      title: result.title,
      price: result.price,
      thumbnail: result.thumbnail,
      attributes: [...result.attributes],
    }));
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name"> </h2>
        <img src={ result.thumbnail } alt={ result.title } />
        <p>{ result.price }</p>
      </div>
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
