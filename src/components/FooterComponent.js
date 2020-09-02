import React from "react";
import { Row, Col } from "react-bootstrap";

function FooterComponent() {
  return (
    <>
      <br />
      <div className="footer-container">
        <Row>
          <Col xs={12} lg={3}>
            <p className="footer-titulo colores-rojo-text">PERRO COMUNITARIO</p>
            <p className="footer-text">
              Somos una organizacion que e dedica en forma solidaria a mantener
              un control y seguimiento de los perros in hogar que transitan la
              calles de Nuevo Delta Tigre
            </p>
          </Col>
          <Col xs={12} lg={9} >
            <p>QUE ONDA PADRE SOY UN FOOTER :d</p>
          </Col>
        </Row>
        <p className="footer-link pb-3">Hecho por <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/stem.it">Stem.it</a></p>
      </div>
    </>
  );
}

export default FooterComponent;
