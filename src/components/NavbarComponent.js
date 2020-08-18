import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {NavLink, Link} from 'react-router-dom'



export default class NavbarComponent extends React.Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
          <Link to="/" ><Navbar.Brand >Logo Perro Comunitario</Navbar.Brand></Link> 
        {/* El link esta afuera para que no se ponga el colorsito azul en la navbar */}
        {/* los colores del active y links estan en el index.css*/}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink className="links" activeClassName="active" exact to="/">
                  Home
                </NavLink>
                <NavLink className="links" activeClassName="active" to="/adopcion">
                  Adopción
                </NavLink>
                <NavLink className="links" activeClassName="active" to="/nosotros">
                  Nosotros
                </NavLink>
                <NavLink className="links" activeClassName="active" to="/contacto">
                  Contacto
                </NavLink>
                <NavLink className="links" to="/donar">
                  Donar
                </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

    );
  }
}
