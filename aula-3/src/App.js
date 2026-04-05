import { render } from 'react';
import React, {Component} from 'react';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      titulo: "Primeira página com Clas Component"
    }

    this.mudar = this.mudar.bind(this);
  }
  mudar(){
    var novoTitulo = "Aprendi a utilizar Class Component";
    this.setState({titulo:novoTitulo});
  }

  render(){
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <button onClick={this.mudar}> Mudar Título </button>
      </div>
    )
  }




}
export default App;