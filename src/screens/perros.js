import React from "react";
import "../css/perros.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import axios from "axios";
import E404 from '../screens/notfound'
class Perros extends React.Component {
  state = {

  }
  leerDB() {
    axios({
      method: 'post',
      url: 'http://35.211.3.86:3000/user/agarrarPerros/' + this.props.match.params.perro,
    }).then((resp) => {
      const data = resp.data.data
      if (data === undefined) {
        this.setState({ e404: true })
      }
      else this.setState({
        ...data
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  componentDidMount() {
    this.leerDB()
  }
  render() {
    if (this.state.nombre) {
      return (
        <>
          <Container>
            <Row>
              <Col lg={6}>
                <img
                  alt="Imagen perro"
                  src={`http://35.211.3.86:3000/${this.state.imagen}`}
                />
              </Col>
              <Col>
                <h1 className="titulo-perros">Perro ID: {this.props.match.params.perro}</h1>
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
                  <Link to={"/contacto?perro=" + this.props.match.params.perro}>
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

    } else {
      if (this.state.e404) {
        return (
          <E404 />
        )
      } else {
        return (
          <div className="center">Cargando...</div>
        )
      }

    }

  }
}
export default Perros