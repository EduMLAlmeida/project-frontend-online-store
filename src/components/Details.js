import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  render() {
    return (
      <>
        <Link to="./ProductDetails" data-testeid="product-detail-link" />
        <div data-testid="product" />
      </>
    );
  }
}
ProductDetails.propTypes = ({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default Details;
