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
        <Row className="mb-5">
            <Col>
                <Link to="/adopcion"> <h2 className="negrita txtDecorateNone">Perros en adopción</h2> </Link>
            </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="negrita">Nombre</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p >Descripcion</p>
          </Col>
          <Col>
            <h2 className="negrita">Nombre</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p>Descripcion</p>
          </Col>
          <Col>
            <h2 className="negrita">Nombre</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p>Descripcion</p>
          </Col>
        </Row>
      </div>
    );
  }
}
