import React from "react";
import '../css/adopcion.css'
import {Container} from "react-bootstrap"
import HeaderAdopcion from '../components/adopcion/HeaderAdopcion'
export default class Adoopcion extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <>
        <Container>
          <h1 className="adopcion-titulo">Perros en adopcion</h1>
          <HeaderAdopcion />
          <p style={{marginBottom: 1000}}>hola</p>
          {/* ^^^^^BORRAR ESTO PERO ES PARA QUE HAYA LUGAR ^^^^ */}
        </Container>

      </>
    );
  }
}
