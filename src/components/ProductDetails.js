import React from 'react';
import { getDetails } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      thumbnail: '',
      details: [],
      attributes: [],
    };
  }

  async componentDidMount() {
    const result = await getDetails();
    this.setState(() => ({
      details: result,
    }));
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name"> </h2>
        <img src={ result.thumbnail } alt={ result.title } />
        <p>{ result.price }</p>
      </div>
    );
  }
}

export default ProductDetails;
