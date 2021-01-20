import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
export default class NavbarComponent extends React.Component {
	state={
		collapsed: false
	}
	switch = () => {
		if (this.state.collapsed)
		{
			this.setState({
				collapsed: false
			})	
		}else{
			this.setState({
				collapsed: true
			})
		}
		
	}
  // render() {
  // 	return (
  // 		<Navbar bg="light" expand="lg" className="mb-5">
  // 			<Link to="/">
  // 				<Navbar.Brand className="fuente">
  // 					<img
  // 						className="navbar-logo"
  // 						src={require("../assets/logo-small.png")}
  // 						alt="Logo perro comunitario"
  // 					></img>
  // 				</Navbar.Brand>
  // 			</Link>
  // 			{/* El link esta afuera para que no se ponga el colorsito azul en la navbar */}
  // 			{/* los colores del active y links estan en el index.css*/}
  // 			<Navbar.Toggle aria-controls="basic-navbar-nav" />
  // 			<Navbar.Collapse id="basic-navbar-nav">
  // 				<Nav className="ml-auto">
  // 					<NavLink className="links" activeClassName="active" to="/debug">
  // 						LINKS DESARROLLO
  // 					</NavLink>
  // 					<NavLink className="links" activeClassName="active" to="/login">
  // 						LOGIN (DESARROLLO)
  // 					</NavLink>

  // 					<NavLink className="links" activeClassName="active" exact to="/">
  // 						Inicio
  // 					</NavLink>
  // 					<NavLink className="links" activeClassName="active" to="/adopcion">
  // 						Perros en Adopción
  // 					</NavLink>
  // 					<NavLink className="links" activeClassName="active" to="/nosotros">
  // 						Nosotros
  // 					</NavLink>
  // 					<NavLink className="links" to="/donar">
  // 						Donar
  // 					</NavLink>
  // 					<NavLink className="links" activeClassName="active" to="/contacto">
  // 						Contacto
  // 					</NavLink>
  // 				</Nav>
  // 			</Navbar.Collapse>
  // 			<br />
  // 		</Navbar>
  // 	);
  // }
  render() {
    return (
      <Navbar expanded={this.state.collapsed} expand="lg" bg="light" variant="light">
		<Link to="/">
  				<Navbar.Brand className="fuente">
  					<img
  						className="navbar-logo"
  						src={require("../assets/logo-small.png")}
  						alt="Logo perro comunitario"
  					></img>
  				</Navbar.Brand>
  			</Link>
        <Navbar.Toggle onClick={()=>this.switch()}/>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavLink onClick={()=>this.switch()} className="links" exact to="/">Inicio</NavLink>
            <NavLink onClick={()=>this.switch()} className="links" to="/adopcion">Perros en adopción</NavLink>
            <NavLink onClick={()=>this.switch()} className="links" to="/noticias">Noticias</NavLink>
          </Nav>
          <Nav>
            <NavLink onClick={()=>this.switch()} className="links" to="/contacto">Contacto</NavLink>
            <NavLink onClick={()=>this.switch()} className="links" to="/nosotros">Nosotros</NavLink>
			<NavLink onClick={()=>this.switch()} className="links" to="/donar">Donar</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
