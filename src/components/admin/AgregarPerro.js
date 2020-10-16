import React, { Component } from "react";
import "../../css/perros.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";

export class AgregarPerro extends Component {
    state = {
        
    }
    subir =()=> {
        console.log("SUBIR PERRO, PERRO!");
    }
    render() {
        return (
            <>
                <h1 className="titulo-perros center" style={{ textDecoration: 'underline' }}>Agregar perro!</h1>
                <Container>
                    <Row>
                        <Col lg={6}>
                            {/* <Carousel
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
                            </Carousel> */}
                        </Col>
                        <Col>
                            <span aria-label="Descripcion Perro" role="img" className="descripcion-perros">
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Nombre: </span>
                                    <span className="descripcion-perros">{this.state.nombre}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Edad: </span>
                                    <span className="descripcion-perros">{this.state.edad}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Pelo: </span>
                                    <span className="descripcion-perros">{this.state.pelo}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Tamaño: </span>
                                    <span className="descripcion-perros">{this.state.tamaño}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Personalidad: </span>
                                    <span className="descripcion-perros">{this.state.personalidad}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Sexo: </span>
                                    <span className="descripcion-perros">{this.state.sexo}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Informacion medica: </span>
                                    <span className="descripcion-perros">{this.state.ficha_medica}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Sociabilidad: </span>
                                    <span className="descripcion-perros">{this.state.sociabilidad}</span>
                                </div>
                                <div className="perro-campo">
                                    <span className="titulo-descripcion-perros">Tiempo en adopcion: </span>
                                    <span className="descripcion-perros">{this.state.tiempo_ea}</span>
                                </div>
                            </span>
                            <div className="text-center">
                                {/* <Link to={"/contacto?perro=" + this.props.match.params.perro}> */}
                                <Button
                                onClick={()=>{this.subir()}}
                                    size="lg"
                                    variant="danger"
                                    className=" boton-adoptar font-weight-bold mt-3 mb-3 pr-5 pl-5 pt-2 pb-2"
                                >
                                    {"SUBIR!"}
                                </Button>
                                {/* </Link> */}
                                {/* <p className="texto-contactanos">
                                    ¿Tienes dudas? <Link to="/contacto">¡Contáctanos!</Link>
                                </p> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default AgregarPerro


