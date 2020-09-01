import React from 'react'
import {Row,Col} from "react-bootstrap"

export default class ListaAdopcion extends React.Component {
    render(){
    return (
      <>
        <h1 className="tituloAdopcion mb-4 mt-5">Perros en adopción:</h1>
        <div className="text-center p-3 listaContainer">
          <Row className="align-middle text-center align-items-center mb-5">
              <a href="/" alt="Flecha izquierda" className="flechas"><img src={require("../../assets/flecha-izq.png" )} alt="Flecha izquierda" />
              </a>
            <Col >
              <h2 className="negrita">Juana</h2>
              <img
                src={require("../../assets/perro-adopcion-2.png")}
                alt="Imagen Perro"
              />
              <p className="mt-4 ml-4 text-center">
                Lo encontraron el otro dia en la calle y lo adoptaron
              </p>
            </Col>
            <Col >
              <h2 className="negrita">Pelusa</h2>
              <img
                src={require("../../assets/perro-adopcion-2.png")}
                alt="Imagen Perro"
              />
              <p className="mt-4 ml-4 text-center">
                Lo encontraron el otro dia en la calle y lo adoptaron
              </p>
            </Col>
            <Col>
              <h2 className="negrita">Pamela</h2>
              <img
                src={require("../../assets/perro-adopcion-2.png")}
                alt="Imagen Perro"
              />
              <p className="mt-4 ml-4 text-center">
                Lo encontraron el otro dia en la calle y lo adoptaron
              </p>
            </Col>
              <a href="/" alt="Flecha Derecha" className="flechas"><img src={require("../../assets/flecha-der.png" )} alt="Flecha izquierda" />
              </a>
          </Row>
          <Row className="align-middle align-items-center mb-5">
              <a href="/" alt="Flecha izquierda" className="flechas"><img src={require("../../assets/flecha-izq.png" )} alt="Flecha izquierda" />
              </a>
            <Col >
              <h2 className="negrita">Juana</h2>
              <img
                src={require("../../assets/perro-adopcion-2.png")}
                alt="Imagen Perro"
              />
              <p className="ml-4 text-center mt-4">
                Lo encontraron el otro dia en la calle y lo adoptaron
              </p>
            </Col>
            <Col >
              <h2 className="negrita">Pelusa</h2>
              <img
                src={require("../../assets/perro-adopcion-2.png")}
                alt="Imagen Perro"
              />
              <p className="mt-4 ml-4 text-center">
                Lo encontraron el otro dia en la calle y lo adoptaron
              </p>
            </Col>
            <Col>
              <h2 className="negrita">Pamela</h2>
              <img
                src={require("../../assets/perro-adopcion-2.png")}
                alt="Imagen Perro"
              />
              <p className="ml-4 text-center mt-4">
                Lo encontraron el
                otro dia en la calle y lo adoptaron
              </p>
            </Col>
              <a href="/" alt="Flecha Derecha" className="flechas"><img src={require("../../assets/flecha-der.png" )} alt="Flecha izquierda" />
              </a>
          </Row>
        </div>
      </>
    );

    }
}

