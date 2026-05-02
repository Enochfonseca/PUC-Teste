import React, { Component } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";



class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      datanascimento: ""
    };
    this.gravar = this.gravar.bind(this);
  }

  async gravar() {
    try {
      // cria usuário no Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.senha
      );
      const uid = userCredential.user.uid;

      // grava dados no Firestore
      await setDoc(doc(db, "usuarios", uid), {
        email: this.state.email,
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        datanascimento: this.state.datanascimento
      });

      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  }

  render() {
    return (
      <div>
        <h1>Página de Cadastro</h1>
        <input type="text" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
        <input type="password" placeholder="Senha" onChange={e => this.setState({ senha: e.target.value })} />
        <input type="text" placeholder="Nome" onChange={e => this.setState({ nome: e.target.value })} />
        <input type="text" placeholder="Sobrenome" onChange={e => this.setState({ sobrenome: e.target.value })} />
        <input type="date" placeholder="Data de Nascimento" onChange={e => this.setState({ datanascimento: e.target.value })} />
        <button onClick={this.gravar}>Cadastrar</button>

        <Link to="/login">
          <button>Ir para Login</button>
        </Link>

      </div>
    );
  }
}

export default Cadastro;
