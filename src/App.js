import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'


// UI
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
// ---

//SCREENS
import Home from "./screens/home"
import Adopcion from "./screens/adopcion"
import Nosotros from "./screens/nosotros"
import Contacto from "./screens/contacto"
import Donar from "./screens/donar"
import Notfound from "./screens/notfound"
import Perros from "./screens/perros"
// ---

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <NavbarComponent />

          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/adopcion" component={Adopcion} />
            <Route exact path="/adopcion/perro" component={Perros} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/donar" component={Donar} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={Notfound} />
          </Switch>

        <FooterComponent /> 
        </BrowserRouter>
      </>
    );
  }
}
