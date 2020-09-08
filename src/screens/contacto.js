import React from "react";
import RedesContacto from '../components/contacto/RedesContacto'
import '../css/contacto.css';

export default class Contacto extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    console.log("[PROPS] (CONTACTO)",this.props)
    return (
      <>
      <p>{this.props.location.search && "CONSULTA SOBRE EL PERRO: "+this.props.location.search }</p>
      <RedesContacto />
      </>
    );
  }
}
