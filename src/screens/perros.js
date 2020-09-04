import React from "react";
import "../css/perros.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
class Perros extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    console.log("[PROPS] (PAGINA DE CADA PERRO): ", this.props)
    return (
      <>
        <Container>
          <Row>
            <Col lg={6}>
              <Carousel
                autoPlay
                showArrows={false}
                showStatus={false}
                infiniteLoop
                stopOnHover
                dynamicHeight
                swipeable
                emulateTouch
              >
                <div>
                  <img
                    alt="Imagen perro"
                    src={require("../assets/perro-adopcion-1.png")}
                  />
                </div>
                <div>
                  <img
                    alt="Imagen perro"
                    src={require("../assets/perro-adopcion-2.png")}
                  />
                </div>
              </Carousel>
            </Col>
            <Col>
              <h1 className="titulo-perros">Perro ID: {this.props.match.params.perro}</h1>
              <span aria-label="Descripcion Perro" role="img" className="descripcion-perros">
                <div className="perro-campo">
                  <span className="titulo-descripcion-perros">Raza: </span>
                  <span className="descripcion-perros">Caniche</span>
                </div>
                <div className="perro-campo">
                  <span className="titulo-descripcion-perros">Esta castrado? </span>
                  <span className="descripcion-perros">Si</span>
                </div>
                <div className="perro-campo">
                  <span className="titulo-descripcion-perros">Color de pelo: </span>
                  <span className="descripcion-perros">Negro</span>
                </div>
                <div className="perro-campo">
                  <span className="titulo-descripcion-perros">Edad: </span>
                  <span className="descripcion-perros">5 años</span>
                </div>
                <div className="perro-campo">
                  <span className="titulo-descripcion-perros">Descripcion: </span>
                  <span className="descripcion-perros" aria-label="Descripcion Perro" role="img">No les ponen nerviosxs esas orejas? 🤤 Quinoto hace mucho tiempo que espera una familia 💔 Es un buenazo de unos 3 años y es el osito 🐻 más lindo de abrazar qué hay en la tierra 🌍 se lleva bárbaro con todos, ama jugar con otros perros, a los gatos los persigue un poco 🤭(pero solo por curiosidad, no les hace nada😉), es re juguetón hasta se tira la pelota él mismo 🙊y le encanta disfrutar en compañía. También es medio personaje y hace cosas graciosas que podrán apreciar en fotos 😜 No es fan de estar solo, pues mamero 🍼 nivel Dios 🙄 es de tamaño mediano a grande y es el mejor compañero de siestas 😴 del mundo. Mientras este acompañado cualquier plan le viene bien (un toque cree que es caniche 🤷🏽‍♀️) </span>
                </div>
              </span>
              <div className="text-center">
                <Link to={"/contacto?perro="+this.props.match.params.perro}>
                  <Button
                    size="lg"
                    variant="danger"
                className=" boton-adoptar font-weight-bold mt-3 mb-3 pr-5 pl-5 pt-2 pb-2"
                  >
                    {"ADOPTAR"}
                  </Button>
                </Link>
                <p className="texto-contactanos">
                  ¿Tienes dudas? <Link to="/contacto">¡Contáctanos!</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Perros