import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    this.setState({
      notas: [...this.state.notas, novaNota],
    });
  }

  deletarNota(indice) {
    let listaNota = this.state.notas.filter((nota, index) => {
      if (index !== indice) {
        return nota;
      }
    });
    this.setState({ notas: listaNota });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          deletarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
