import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteIcon } from "../../assets/image/delete.svg";

class CardNota extends Component {
  _handleDelete(event) {
    event.stopPropagation();
    this.props.deletarNota(this.props.index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <DeleteIcon onClick={this._handleDelete.bind(this)} />
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
