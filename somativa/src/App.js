import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      mensagem: ""
    };
  }

  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  
  validarLogin = () => {
    if (
      this.state.email === "enochfonseca@puc.edu.br" &&
      this.state.senha === "340025"
    ) {
      this.setState({ mensagem: "Acessado com sucesso!" });
    } else {
      this.setState({ mensagem: "Usuário ou senha incorretos!" });
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.handleChange}
          className="login-input"
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={this.state.senha}
          onChange={this.handleChange}
          className="login-input"
        />
        <button onClick={this.validarLogin} className="login-button">
          Acessar
        </button>
        <p className="login-message">{this.state.mensagem}</p>
      </div>
    );
  }
}

export default Login;
