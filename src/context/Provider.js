import React from 'react';
import CarsContext from './CarContext';

class Provider extends React.Component {
  // Mesmo estado do reducer
    constructor(props) {
      super(props);
      this.state = {
        cars: {
          red: false,
          blue: false,
          yellow: false,
        },
      }
      // Permitindo a função acessar o estado
      this.moveCar = this.moveCar.bind(this);
    };

    // Função como era feito no action
    moveCar(car, side) {
      // Descrição da ação, como era feito no reducer
      this.setState({ cars:{...this.state, [car]: side } } );
    }

  render() {
    // Disponibilizando o estado para outros componentes
    const context = {...this.state, moveCar: this.moveCar };
    const { children } = this.props;
    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
}

export default Provider;