import React, { Component } from "react";
import { Link } from "react-router-dom";

class Principal extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/cadastro"><button>Cadastro</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    );
  }
}

export default Principal;
