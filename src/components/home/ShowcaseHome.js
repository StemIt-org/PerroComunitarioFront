import React from "react";
import { Col, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default class ShowcaseComponent extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div className="text-center colorFondoAdopcion-home borderRadius p-3 adopcion-home-container">
        <Row className="mb-4">
            <Col>
                <Link to="/adopcion"> <h1 className="negrita txtDecorateNone">Perros en adopción</h1> </Link>
            </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
            <h2 className="negrita">Nombre</h2>
            <img
              src={require("../../assets/perro-adopcion-2.png")}
              alt="Imagen Perro"
            />
            <p >Descripcion</p>
          </Col>
          <Col xs={12} lg={4}>
            <h2 className="negrita">Nombre</h2>
            <img
              src={require("../../assets/perro-adopcion-2.png")}
              alt="Imagen Perro"
            />
            <p>Descripcion</p>
          </Col>
          <Col xs={12} lg={4}>
            <h2 className="negrita">Nombre</h2>
            <img
              src={require("../../assets/perro-adopcion-2.png")}
              alt="Imagen Perro"
            />
            <p>Descripcion</p>
          </Col>
        </Row>
      </div>
    );
  }
}
