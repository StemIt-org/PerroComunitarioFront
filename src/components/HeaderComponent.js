import React from "react";
import {Row, Col} from "react-bootstrap"

export default class HeaderComponent extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <>
        <Row className ="mb-5">
          <Col xs={12} lg={5}>
            <h1>
              Muchas mascotar vagan sin mundo... Adopta y cambiarás una vida.
            </h1>
            <p>
              Somos una organizacion que e dedica en forma solidaria a mantener
              un control y seguimiento de los perros in hogar que transitan la
              calles de Nuevo Delta Tigre
            </p>
          </Col>
          <Col xs={12} lg={7} >
            <img className="rounded" src={require('../assets/perro-header.png')} alt="Imagen Perro" />
            <p  className="text-secondary text-center mt-2">Fermín, Enero de 2020</p>
          </Col>
        </Row>
      </>
    );
  }
}
