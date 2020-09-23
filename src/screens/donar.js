import React from "react";
import '../css/donar.css';
export default class Donar extends React.Component {
  // constructor() {
  //   super()
  // }
  state = {
    email: '',
    monto: ''
  }
  Submit = (e) => {
    e.preventDefault();
    console.log("DONAR $", this.state.monto, " de parte de ", this.state.email);
  }
  Change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
    console.log("ACTUALIZACION DEL STATE: ", this.state);

  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className="titulo-donacion">Donaciones</h1>
          <p className="texto-donacion">
            A través de tu donacion nos ayudas a seguir creciendo y salvando
            perritos la concha de tu madre si lees esto sos puto, no te das
            cuenta que es para rellenar texto la navideña concha de tu hermana:
          </p>
          <img src={require("../assets/mercadopago.png")} alt="imagen mercadopago" style={{ width: "300px" }}/>

          <form className="mb-5" onSubmit={this.Submit}>
            <div className="campo-form p-3">
              <img src={require("../assets/imagen-mail-form.png")} alt="Logo mail" className="ml-3 mr-4"/>
              <input type="text" id="email" value={this.state.email} onChange={this.Change} placeholder="Mail" required/>
            </div>
            <div className="campo-form mt-4 p-3">
              <img src={require("../assets/imagen-dinero-form.png")} alt="Logo Donar" className="ml-3 mr-4" />
              <input type="number" placeholder="Monto a donar" onChange={this.Change} id="monto" value={this.state.monto} required/>
            </div>
            <div className="campo-form campo-submit-form mt-4 p-3">
              <button className="ml-2 btn">
                Donar!
              </button>
            </div>
          </form>

        </div>
      </>
    );
  }
}
