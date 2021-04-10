import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default class ShowcaseComponent extends React.Component {
	state = {
		noticias: null,
		paginaSeleccionada: [true, false, false],
	};

	componentDidMount = () => {
		axios({
			method: "GET",
			url: "https://perroback.stemit.com.ar/user/mostrarNoticias",
		})
			.then((resp) => {
				const data = resp.data.data;
				// title
				// image
				// subtitle
				// body
				// date
				this.setState({
					noticias: data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className="text-center borderRadius noticias-container-home p-3 mt-5">
				<Row className="mb-5">
					<Col>
						<Link to="/nosotros">
							<h1 className="negrita txtDecorateNone" id="tituloNoticiasHome">
								Noticias
							</h1>
						</Link>
					</Col>
				</Row>
				<Row className="mb-5 w-100">
					{this.state.noticias &&
						this.state.noticias.slice(0, 6).map((noti, i) => {
							console.log("hola", noti);
							return (
								<Col xs={12} lg={4} key={noti.id_noticias}>
									<Link to={`/noticias/${noti.id_noticias}`}>
										<div
											className="w-100 border borderRadius p-5 mb-5 "
											onClick={console.log("DOU")}
										>
											<h2 className="negrita">{noti.title}</h2>
											<img
												src={`https://perroback.stemit.com.ar/${noti.image}`}
												alt="imagen del perro en adopcion"
											/>
											<p className="text-center">{noti.subtitle}</p>
										</div>
									</Link>
								</Col>
							);
						})}
				</Row>
			</div>
		);
	}
}
