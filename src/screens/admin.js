import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AgregarPerro from "../components/admin/AgregarPerro";
export class Admin extends Component {
	state = {
		dbRequest: false,
		authed: false,
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				dbRequest: true,
				authed: true,
			});
		}, 1000);
	}
	// aca la idea es que ponga una pantalla de carga y verifique si el usuario esta logueado, si lo está, que prosiga, si no lo esta, que apareza la pagina de login
	render() {
		if (!this.state.dbRequest) {
			return <div>Cargando...</div>;
		} else {
			if (this.state.authed) {
				return (
					<div>
						<h3 className="center">Panel de admin!</h3>
						<hr />
						<Container>
							<AgregarPerro />
						</Container>
					</div>
				);
			} else {
				return <Redirect to="/login" />;
			}
		}
	}
}

export default Admin;
