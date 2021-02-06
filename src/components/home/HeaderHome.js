import React from "react";
import { Row, Col } from "react-bootstrap"

export default class HeaderComponent extends React.Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (
      <>
        <Row className="mb-5">
          <Col xs={12} lg={5}>
            <h1 className="header-home-titulo">
              Muchas mascotar vagan sin mundo... <br />Adopta y cambiarás una vida.
            </h1>
            <p className="header-home-text">
              Somos una organización que se dedica en forma solidaria a mantener un control y seguimiento de los perros sin hogar que transitan las calles de Nuevo Delta Tigre
            </p>
          </Col>
          <Col xs={12} lg={7} >
            <img style={{width: '100%', borderRadius: 10}} src={require('../../assets/perro-header.png')} alt="Imagen Perro" />
            <p className="text-secondary text-center mt-2 header-home-epigrafe">Nahual</p>
          </Col>
        </Row>
      </>
    );
  }
}
