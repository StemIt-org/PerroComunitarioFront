import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FooterComponent() {
  return (
    <>
      <br />
      <div className="footer-container">
        <Row>
          <Col>
            <p className="footer-titulo colores-rojo-text">PERRO COMUNITARIO</p>
            <p className="footer-text">
              Somos una organizacion que e dedica en forma solidaria a mantener
              un control y seguimiento de los perros in hogar que transitan la
              calles de Nuevo Delta Tigre
            </p>
          </Col>
          <Col>
            <p>HOLA</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FooterComponent;
