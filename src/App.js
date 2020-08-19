import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


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
// ---

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <NavbarComponent />

          <Switch>
            <Route path="/adopcion" component={Adopcion} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/donar" component={Donar} />
            <Route exact path="/" component={Home} />
          </Switch>

        <FooterComponent /> 
        </BrowserRouter>
      </>
    );
  }
}
