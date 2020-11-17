import React from "react";
import RedesContacto from '../components/contacto/RedesContacto'
import '../css/contacto.css';

export default class Contacto extends React.Component {
  state = {
    hayPerro: false
  }
  componentDidMount = () => {
    const txt = this.props.location.search;
    console.log(txt);
  }
  render() {
    return (
      <>
        <RedesContacto />
      </>
    );
  }
}
