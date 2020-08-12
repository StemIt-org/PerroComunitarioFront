import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

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
          <Navbar.Brand >Logo Perro Comunitario</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink class="links" activeClassName="active" to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink class="links" activeClassName="active" to="/adopcion">
                  Adopción
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink class="links" activeClassName="active" to="/nosotros">
                  Nosotros
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink class="links" activeClassName="active" to="/contacto">
                  Contacto
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink class="links" to="/donar">
                  Donar
                </NavLink>
              </Nav.Link>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
