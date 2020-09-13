import React from "react";
import '../css/donar.css';
import mercadopago from "../components/MercadoPago"
export default class Donar extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <>
        <div className="container-donacion">
          <h1 className="titulo-donacion">Donaciones</h1>
          <p className="texto-donacion">
            A través de tu donacion nos ayudas a seguir creciendo y salvando
            perritos la concha de tu madre si lees esto sos puto, no te das
            cuenta que es para rellenar texto la navideña concha de tu hermana:
          </p>
          <img
            src={require("../assets/mercadopago.png")}
            alt="imagen mercadopago"
            style={{ width: "300px" }}
          />
          <form method="POST" className="mb-5" onSubmit="return false;">
            <div className="campo-form p-3">
              <img
                src={require("../assets/imagen-mail-form.png")}
                alt="Logo mail"
                className="ml-3 mr-4"
              />
              <input
                type="text"
                id="mail-donar"
                name="mail"
                placeholder="Mail"
              />
            </div>
            <div className="campo-form mt-4 p-3">
              <img
                src={require("../assets/imagen-dinero-form.png")}
                alt="Logo Donar"
                className="ml-3 mr-4"
              />
              <input type="number" name="dinero" placeholder="Monto a donar" />
            </div>
            <div className="campo-form campo-submit-form mt-4 p-3">
              <input
                className="ml-2"
                type="submit"
                name="dinero"
                value="Donar a Gonzalo Waisman"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
