import React from "react";
import { Row, Col } from "react-bootstrap";
import CopiadorDeMail from "./CopiadorDeMail";
function FooterComponent() {
  return (
    <>
      <br />
      <div className="footer-container">
        <Row>
          <Col xs={12} lg={2}>
            <p className="footer-titulo colores-rojo-text">PERRO COMUNITARIO</p>
            <p className="footer-text">
              Somos una organizacion que e dedica en forma solidaria a mantener
              un control y seguimiento de los perros in hogar que transitan la
              calles de Nuevo Delta Tigre
            </p>
          </Col>
          <hr className="barra-footer" />
          <Col xs={2} lg={{ offset: 1, span: 1 }}>
            <div className="titulo-contacto-footer"></div>
            <div className="espaciado-footer"></div>
            <CopiadorDeMail />
            <br />
            <br />
            <a
              href="https://instagram.com/perrocomunitarioong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Imagen Instagram"
                className="iconos"
                src={require("../assets/instagram-logo.png")}
              />{" "}
            </a>
            <br />
            <br />
            <a
              href="https://www.facebook.com/Perro-Comunitario-Tigre-215869165180000/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                alt="Imagen Facebook"
                className="iconos"
                src={require("../assets/facebook-logo.png")}
              />
            </a>
            <br />
            <br />
            <a
              href="https://twitter.com/pcomunitarioong"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                alt="Imagen Twitter"
                className="iconos"
                src={require("../assets/twitter-logo.png")}
              />
            </a>
            <br />
            <br />
            <a
              href="https://www.youtube.com/channel/UCq48j2MpfPWHI7ctRXuIWPQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                alt="Imagen Youtube"
                className="iconos"
                src={require("../assets/youtube-logo.png")}
              />
            </a>
          </Col>
          <hr className="barra-footer" />
          <Col xs={12} lg={6}>
            <p>SOY EL RESTO DEL FOOTER PADRE</p>
          </Col>
        </Row>
        <p className="footer-link">
          Hecho por{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/stem.it"
          >
            Stem.it
          </a>
        </p>
      </div>
    </>
  );
}

export default FooterComponent;
