import React from "react";
import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default class EstadisticasComponent extends React.Component {
  constructor() {
    super()
    this.years = new Date().getFullYear() - 2013
  }

  render() {
    return (
      <>
        <div className="text-center colorFondoEstadisticas-home borderRadius p-3 estadisticas-home-container">
          <Row className="mb-5">
            <Col>
              <h2 className="negrita">Estadisticas</h2>

            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="negrita">{this.years}</h1>
              <p className="fs-13">Años rescatando perros</p>
            </Col>
            <Col>
              <h1 className="negrita">+600</h1>
              <p className="fs-13">Perros rescatados</p>
            </Col>
            <Col>
              <h1 className="negrita">+600</h1>
              <p className="fs-13">Familias felices</p>
            </Col>
          </Row>
        </div>
        <br />
        <br />
      </>
    );
  }
}
