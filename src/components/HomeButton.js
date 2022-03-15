import React from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends React.Component {
  render() {
    return (
      <Link to="/" data-testid="shopping-cart-button">Principal</Link>
    );
  }
}

export default HomeButton;
