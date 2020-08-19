import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class EstadisticasComponent extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <>
        <div className="text-center colorFondoEstadisticas borderRadius p-3">
          <Row className="mb-5">
            <Col>
              <Link to="/nosotros">
                <h2 className="negrita">Estadisticas</h2>
              </Link>

            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="negrita">+10</h1>
              <p className="fs-13">Años rescatando perros</p>
            </Col>
            <Col>
              <h1 className="negrita">+1000</h1>
              <p className="fs-13">Perros rescatados</p>
            </Col>
            <Col>
              <h1 className="negrita">+500</h1>
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
