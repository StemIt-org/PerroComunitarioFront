import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ListaAdopcion extends React.Component {
  constructor(){
    super();
    this.state = {
    hayPerrosDespues: true,
    hayPerrosAntes: true,
    i: 0,
    perros: [
      {
        nombre: "Juana",
        foto: require("../../assets/perro-adopcion-2.png"),
        descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      },
      {
        nombre: "Juanita",
        foto: require("../../assets/perro-adopcion-2.png"),
        descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      },
      {
        nombre: "Shifu",
        foto: require("../../assets/perro-adopcion-2.png"),
        descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      },
      {
        nombre: "Negro",
        foto: require("../../assets/perro-adopcion-2.png"),
        descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      },
      {
        nombre: "Juancito",
        foto: require("../../assets/perro-adopcion-2.png"),
        descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      },
      {
        nombre: "Frida",
        foto: require("../../assets/perro-adopcion-2.png"),
        descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      },
    ],

    }

  }
  componentDidUpdate() {
    console.log(this.state.i);
  }
  updateFlechitas = () => {
    console.log(this.state.i);
    if (this.state.i === 0) this.setState({ hayPerrosAntes: false });
    else this.setState({ hayPerrosAntes: true });
    if ((this.state.i + 1) * 3 < this.state.perros.length)
      this.setState({ hayPerrosDespues: false });
    else this.setState({ hayPerrosDespues: true });
  };
  perrosAnteriores = () => {
    this.setState((prevState) => ({ i: prevState.i - 1 }));
    this.updateFlechitas();
  };
  perrosPosteriores = () => {
    this.setState((prevState) => ({ i: prevState.i + 1 }));
    this.updateFlechitas();
  };
  render() {
    return (
      <>
        <h1 className="tituloAdopcion mb-4 mt-5">Perros en adopción:</h1>
        <div className="text-center p-3 listaContainer">
          <Row className="align-middle text-center align-items-center mb-5">
            {this.state.hayPerrosAntes && ( // MOSTRAR PERROS ANTERIORES
              <div
                onClick={this.perrosAnteriores}
                alt="Flecha izquierda"
                className="flechas"
              >
                <img
                  src={require("../../assets/flecha-izq.png")}
                  alt="Flecha izquierda"
                />
              </div>
            )}
            {this.state.perros // MOSTRAR LOS PERROS
              .slice(this.state.i * 3, (this.state.i + 1) * 3)
              .map((perro) => (
                <Col key={perro.nombre}>
                  <Link to={"/adopcion/" + perro.nombre} className="links">
                    <h2 className="negrita">{perro.nombre}</h2>
                    <img src={perro.foto} alt={`Imagen ${perro.nombre}`} />
                    <p className="mt-4 ml-4 text-center">{perro.descrip}</p>
                  </Link>
                </Col>
              ))}
            {this.state.hayPerrosDespues && ( // BOTON PARA MOSTRAR SIGUIENTES PERROS
              <div
                onClick={this.perrosPosteriores}
                alt="Flecha Derecha"
                className="flechas"
              >
                <img
                  src={require("../../assets/flecha-der.png")}
                  alt="Flecha izquierda"
                />
              </div>
            )}
          </Row>
        </div>
      </>
    );
  }
}
