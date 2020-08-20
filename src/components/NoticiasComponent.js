import React from "react";
import { Col, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default class ShowcaseComponent extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div className="text-center borderRadius noticias-container p-3 mt-5">
        <Row className="mb-5">
            <Col>
                <Link to="/nosotros"> <h1 className="negrita txtDecorateNone">Noticias</h1> </Link>
            </Col>
        </Row>
        <Row className="mb-5 rowNoticias" >
          <Col >
          <div className="border borderRadius p-5">
            <h2 className="negrita">La historia de Jorge</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p>Lo encontraron en la calle y al otro dia lo adoptaron</p>
          </div>
          </Col>
          <Col>
          <div className="border borderRadius p-5">
            <h2 className="negrita">La historia de Santiago</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p >Lo encontraron en la calle y al otro dia lo adoptaron</p>
          </div>
          </Col>
          <Col>
          <div className="border borderRadius p-5">
            <h2 className="negrita">La historia de Jorgelin</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p>Lo encontraron en la calle y al otro dia lo adoptaron</p>
          </div>
          </Col>
        </Row>
        <Row className="mb-5 rowNoticias">
          <Col>
          <div className="border borderRadius p-5">
            <h2 className="negrita">La historia de Anastacio</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p>Lo encontraron en la calle y al otro dia lo adoptaron</p>
          </div>
          </Col>
          <Col>
          <div className="border borderRadius p-5">
            <h2 className="negrita">La historia de Juan Carlos</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p>Lo encontraron en la calle y al otro dia lo adoptaron</p>
          </div>
          </Col>
          <Col>
          <div className="border borderRadius p-5">
            <h2 className="negrita">La historia de Andrea</h2>
            <img src="https://lecto.app/perfil_lisandro.ae79249c.webp" alt="imagen del perro en adopcion"/>
            <p>Lo encontraron en la calle y al otro dia lo adoptaron</p>
          </div>
          </Col>
        </Row>
          <Row className ="paginas-noticias justify-content-center">
              <Col lg= {{span:1}} className="mr-3">
                <h5 className= "negrita">Pagina1</h5>
              </Col>
              <Col lg = {{span:1}} className ="mr-3">
                <h5 className= "negrita colores-rojo-text">Pagina2</h5>
              </Col>
              <Col lg = {{span:1}}>
                <h5 className= "negrita">Pagina3</h5>
              </Col>
          </Row>
      </div>
    );
  }
}
