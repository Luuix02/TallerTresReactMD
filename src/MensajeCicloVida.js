import React, { Component } from 'react'

class BotonConMensaje extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }


  componentDidMount() {
    console.log('El componente se ha montado');
  }

  componentDidUpdate(prevState) {
    if (prevState.clicks !== this.state.clicks) {
      console.log('El componente se ha actualizado');
    }
  }

  componentWillUnmount() {
    console.log('El componente se ha desmontado');
  }

  manejarClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
    }));
  };

  render() {
    return (
      <div>
        <p>El boton ha sido presionado {this.state.clicks} veces</p>
        <button onClick={this.manejarClick}>Incrementar</button>
      </div>
    );
  }
}

class ControlDeCicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarBoton: true 
    };
  }

  toggleBoton = () => {
    this.setState((prevState) => ({
      mostrarBoton: !prevState.mostrarBoton
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleBoton}>
          {this.state.mostrarBoton ? 'Desmontar boton' : 'Montar boton'}
        </button>
        {this.state.mostrarBoton && <BotonConMensaje />}
      </div>
    );
  }
}

export default ControlDeCicloDeVida;