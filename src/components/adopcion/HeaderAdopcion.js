import React from "react";
import { Row, Col } from "react-bootstrap"
export default class HeaderAdopcion extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <>
        <Row className="mb-5 header-adopcion-container">
          <Col xs={12} lg={7}>
            <h1 className="header-titulo">
            <br />
            ¿Por qué adoptar? <br /> <br />

            Porque luchas contra el abandono.<br />
            Porque salvas una vida.<br />
            Porque se merecen una oportunidad.<br />
            Porque los amigos no se compran.<br />
            Sumate a la lucha y adopta con responsabilidad.<br />
            </h1>
          </Col>
          <Col xs={12} lg={5} >
            <img src={require('../../assets/perro-adopcion-1.png')} alt="Imagen Perro" />
          </Col>
        </Row>
      </>
    );
  }
}
