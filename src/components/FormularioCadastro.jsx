import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea cols="30" rows="10" placeholder="Escreva sua nota..." />
      </form>
    );
  }
}

export default FormularioCadastro;
