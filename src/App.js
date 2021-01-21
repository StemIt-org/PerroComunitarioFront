import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// UI
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./components/ScrollToTop";
// ---

//SCREENS
import Home from "./screens/home";
import Adopcion from "./screens/adopcion";
import Nosotros from "./screens/nosotros";
import Contacto from "./screens/contacto";
import Donar from "./screens/donar";
import Notfound from "./screens/notfound";
import Perros from "./screens/perros";
import Login from "./screens/login";
import Admin from "./screens/admin";
import Noticias from "./screens/noticias";
import Noticia from "./screens/noticia";
import Adoptar from "./screens/adoptar";
import Debug from "./screens/debug";
// ---

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop />

          <NavbarComponent />

          <Switch>
            <Redirect from="/home" to="/" />
            <Redirect from="/equipo" to="/nosotros" />
            <Redirect from="/perros" to="/adopcion" />
            <Redirect from="/perro" to="/adopcion" />

            <Route exact path="/adopcion" component={Adopcion} />
            <Route exact path="/adopcion/:perro" component={Perros} />
            <Route exact path="/adoptar/:perro" component={Adoptar} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/donar" component={Donar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/noticias" component={Noticias} />
            <Route exact path="/noticias/:noticia" component={Noticia} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/debug" component={Debug} />
            <Route path="*" component={Notfound} />
          </Switch>

          <FooterComponent />
        </BrowserRouter>
      </>
    );
  }
}
