import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ProductCategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState(() => ({ categories: result }), () => {
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {
          (categories.map((currCategory) => {
            const {
              id,
              name,
            } = currCategory;
            return (
              <div key={ id }>
                <label htmlFor="radio" data-testid="category">
                  <input
                    type="radio"
                    id="radio"
                    value={ name }
                  />
                  { name }
                </label>
              </div>
            );
          }))
        }
      </div>
    );
  }
}

export default ProductCategoryList;

// Abaixo está o requisito por escrito! Apagar antes do PR!
// Um endpoint da API do Mercado Livre retorna as categorias de produto disponíveis para busca. = Feito!
// Em um momento posterior tais categorias serão usadas para realizar requisições para a listagem de produtos, ou seja, elas serão clicáveis para aplicar tais filtros, para isso você pode utilizar o elemento do tipo button ou do tipo radio button para renderizar as categorias. Por hora, elas devem ser listadas na tela da listagem, conforme protótipo.

// Adicione o atributo data-testid com o valor category nos elementos clicáveis que receberão o nome da
// categoria. Atenção! No caso dos radio buttons as labels dos elementos que deverão receber o data-testid,
//  e não se esqueça da propriedade htmlFor.
// O que será verificado:

//   - Exibe as categorias retornadas pela API na página de listagem de produtos

// songs
// ? (songs.map((currSong) => {
//   const {
//     trackName,
//     previewUrl,
//     trackId,
//   } = currSong;
//   return (
//     <div key={ trackId }>
//       <h4>{trackName}</h4>
//       <audio data-testid="audio-component" src={ previewUrl } controls>
//         <track kind="captions" />
//         O seu navegador não suporta o elemento
//         {' '}
//         <code>audio</code>
//         .
//       </audio>
//       <label htmlFor="checkbox-favorite">
//         <input
//           type="checkbox"
//           name="checkbox-favorite"
//           data-testid={ `checkbox-music-${trackId}` }
//           checked={ localStorage.getItem('favorite_songs').includes(trackId) }
//           onChange={ () => handleChange(trackId) }
//         />
//         Favorita
//       </label>
//     </div>
//   );
// }))
// : null}
