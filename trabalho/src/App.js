import React, { Component } from "react";
import { useId } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nome: "",
      email: "",
      mensagem: ""
    };
    this.conferir = this.conferir.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  conferir() {
    const emailPadrao = "enochfonseca@pucpr.edu.br";
    const senhaPadrao = "340025"

    const mensagem =
      this.state.email === emailPadrao && this.state.senha == senhaPadrao
        ? "Acessado com sucesso!"
        : "Usuário ou senha incorretos!";
      this.setState({ mensagem});
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <input type="text" name="email" placeholder="Digite seu email" value={this.state.email} onChange={this.handleChange} size={"20"}></input>
        <input type="password" name="senha" placeholder="Digite sua senha" value={this.state.senha} onChange={this.handleChange}>
        </input>
        <button onClick={this.conferir}>Acessar</button>
        <p>{this.state.mensagem}</p>
      </div>
    );
  }

}

export default App;
