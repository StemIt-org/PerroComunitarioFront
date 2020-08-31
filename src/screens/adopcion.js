import React from "react";
import '../css/adopcion.css'
import {Container} from "react-bootstrap"
import HeaderAdopcion from '../components/adopcion/HeaderAdopcion'
import ListaAdopcion from '../components/adopcion/ListaAdopcion'
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
          <ListaAdopcion />
          
        </Container>

      </>
    );
  }
}
