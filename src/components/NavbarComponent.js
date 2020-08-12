import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

//SERVICES

//SCREENS
import Home from "../screens/home"
import Adopcion from "../screens/adopcion"
import Nosotros from "../screens/nosotros"
import Contacto from "../screens/contacto"
import Donar from "../screens/donar"

export default class NavbarComponent extends React.Component {
  render() {
    return (
      <Router>
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

        <Switch>
          <Route path="/adopcion">
            <Adopcion />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/donar">
            <Donar />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
