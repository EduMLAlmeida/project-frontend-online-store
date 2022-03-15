import React from 'react';
import PropTypes from 'prop-types';

class RatingSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      text: '',
      finalData: JSON.parse(localStorage.getItem(props.id)),
    };
  }

  saveToDataBase = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveButton = () => {
    const { id } = this.props;
    const { email, rate, text } = this.state;
    const data = JSON.parse(localStorage.getItem(id)) || [];
    const saveData = {
      emailFinal: email,
      notaFinal: rate,
      textoFinal: text,
    };
    data.push(saveData);
    localStorage.setItem(id, JSON.stringify(data));
    this.setState({ finalData: data });
  }

  render() {
    const { email, finalData } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="product-detail-email"
              placeholder="Email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.saveToDataBase }
            />
          </label>
          <label htmlFor="textAreaRate">
            Mensagem opcional:
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
              name="text"
              onChange={ this.saveToDataBase }
            />
          </label>
          <label htmlFor="starsButtons">
            Nota:
            <input
              type="radio"
              data-testid="1-rating"
              value="1"
              name="stars"
              onChange={ this.saveToDataBase }
            />
            <input
              type="radio"
              data-testid="2-rating"
              value="2"
              name="stars"
              onChange={ this.saveToDataBase }
            />
            <input
              type="radio"
              data-testid="3-rating"
              value="3"
              name="stars"
              onChange={ this.saveToDataBase }
            />
            <input
              type="radio"
              data-testid="4-rating"
              value="4"
              name="stars"
              onChange={ this.saveToDataBase }
            />
            <input
              type="radio"
              data-testid="5-rating"
              value="5"
              name="stars"
              onChange={ this.saveToDataBase }
            />
          </label>
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ this.saveButton }
          >
            Enviar
          </button>
        </form>
        {
          finalData !== null ? (finalData.map((avaliacao) => (
            <div key={ avaliacao }>
              <span>
                { avaliacao.emailFinal }
              </span>
              <span>
                { avaliacao.textoFinal }
              </span>
              <span>
                { avaliacao.notaFinal }
              </span>
            </div>
          ))
          ) : ''
        }
      </section>

    );
  }
}

RatingSystem.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default RatingSystem;
