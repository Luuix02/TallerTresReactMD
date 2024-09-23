import React, { Component } from 'react';

class BotonIncrementar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contadorBoton: 0,
    };
  }

  componentDidMount() {
    console.log('El boton se ha montado');
  }

  componentDidUpdate( prevState) {
    if (prevState.contadorBoton !== this.state.contadorBoton) {
      console.log('El boton se ha actualizado');
    }
  }
  componentWillUnmount() {
    console.log('El boton se ha desmontado');
  }

  incrementar = () => {
    this.setState((prevState) => ({
      contadorBoton: prevState.contadorBoton + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contadorBoton}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

class ControladorBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarBoton: true,
    };
  }

  alternarBoton = () => {
    this.setState((prevState) => ({
      mostrarBoton: !prevState.mostrarBoton, 
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.alternarBoton}>
          {this.state.mostrarBoton ? 'Desmontar boton' : 'Montar boton'}
        </button>

        {this.state.mostrarBoton && <BotonIncrementar />}
      </div>
    );
  }
}

export default ControladorBtn;
