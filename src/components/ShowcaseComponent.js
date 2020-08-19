import React from "react";
import { Col, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default class ShowcaseComponent extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div className="text-center colorFondoAdopcion borderRadius p-3 adopcion-container">
        <Row className="mb-5">
            <Col>
                <Link to="/adopcion"> <h2 className="negrita">Perros en adopción</h2> </Link>
            </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="negrita">Nombre</h1>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p className="fs-13">Descripcion</p>
          </Col>
          <Col>
            <h1 className="negrita">Nombre</h1>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p className="fs-13">Descripcion</p>
          </Col>
          <Col>
            <h1 className="negrita">Nombre</h1>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p className="fs-13">Descripcion</p>
          </Col>
        </Row>
      </div>
    );
  }
}
