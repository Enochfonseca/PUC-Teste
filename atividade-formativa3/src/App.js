import React, {Component} from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }
  aumentar() {
    this.setState((prevState) => ({
      contador: prevState.contador += 1
    }));
  }
  diminuir() {
    this.setState((prevState) => ({
      contador: prevState.contador -= 1
    }));
  }
  render() {
    return (
      <div>

        <button onClick={this.aumentar}>Adicionar</button>
        <button onClick={this.diminuir}>Subtrair</button>
        Valor: {this.state.contador}

      </div>

    );
  }

}

export default App;