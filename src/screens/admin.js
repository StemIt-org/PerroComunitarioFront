import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AgregarPerro from "../components/admin/AgregarPerro";
import AgregarNoticia from "../components/admin/AgregarNoticia";
import axios from 'axios'
export class Admin extends Component {
	state = {
		dbRequest: false,
		authed: false,
	};
	componentDidMount() {
		var token = window.localStorage.getItem("token")
		console.log("TOKEN: ", token);
		if (window.localStorage.getItem("token") !== null) {
			axios({
				method: 'GET',
				url: 'http://35.211.3.86:3000/admin/checkAdmin',
				headers: {
					'content-type': 'application/json',
					authorization: 'Bearer ' + token
				}
			}).then((r) => {
				switch (r.status) {
					case 200:
						this.setState({
							dbRequest: true,
							authed: true,
						})
						break;
					default:
						break;
				}
			}).catch((err) => {
				console.log(err);
				this.setState({
					dbRequest: true,
					authed: false,
				});
			})
		} else {
			this.setState({
				dbRequest: true,
				authed: false,
			});
		}
	}
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
						<hr />
						<Container>
							<AgregarNoticia />
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
