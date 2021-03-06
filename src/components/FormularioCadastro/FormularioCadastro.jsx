import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }
  handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }
  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  criarCard(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarCard(this.titulo, this.texto, this.categoria);
  }
  render() {
    //console.log(this.props);
    return (
      <form className="form-cadastro " onSubmit={this.criarCard.bind(this)}>
        <select
          onChange={this.handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
