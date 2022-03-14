import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  render() {
    return (
      <>
        <Link
          to={ `/productDetails/${id}` }
          data-testid="product-detail-link"
        >
          {' '}
          Ver Detalhes

        </Link>
        <div data-testid="product">
          {' '}
          <p> TESTE </p>
          {' '}
        </div>
      </>
    );
  }
}

export default Details;
