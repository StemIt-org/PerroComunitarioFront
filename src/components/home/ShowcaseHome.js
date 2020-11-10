import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default class ShowcaseComponent extends React.Component {
	// constructor() {
	//   super()
	// }
	state = {
		perros: null,
	};
	componentDidMount = () => {
		axios({
			method: "GET",
			url: "http://35.211.3.86:3000/user/mostrarPerros",
		})
			.then((resp) => {
				// console.log("DATA: ", resp);
				this.setState({ perros: resp.data.data.slice(0, 3) });
				// console.log("PERRO: ", this.state.perros);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		if (this.state.perros) {
			console.log("LENGTH", this.state.perros.length);
			return (
				<div className="text-center colorFondoAdopcion-home borderRadius p-3 adopcion-home-container">
					<Row className="mb-4">
						<Col>
							<Link to="/adopcion">
								{" "}
								<h1 className="negrita txtDecorateNone">
									Perros en adopción
								</h1>{" "}
							</Link>
						</Col>
					</Row>
					<Row>
						{this.state.perros.length >= 3 &&
							this.state.perros.map((perro) => {
								return (
									<Col xs={12} lg={4} key={perro.id_perro}>
										<Link to={"/adopcion/" + perro.id_perro}>
											<h2 className="negrita">{perro.nombre}</h2>
										</Link>
										<img
											src={`http://35.211.3.86:3000/${perro.imagen}`}
											alt="Imagen Perro"
										/>
										<div>
											<Link to={"/adopcion/" + perro.id_perro}>
												<p
													style={{
														padding: "5px",
														background: "#8b3637",
														width: "40%",
														borderRadius: "10px",
														textAlign: "center",
														marginLeft: "auto",
														marginRight: "auto",
													}}
												>
													Detalles!
												</p>
											</Link>
										</div>
									</Col>
								);
							})}
						{this.state.perros.length === 2 &&
							this.state.perros.map((perro) => {
								return (
									<Col xs={12} lg={6} key={perro.id_perro}>
										<Link to={"/adopcion/" + perro.id_perro}>
											<h2 className="negrita">{perro.nombre}</h2>
										</Link>
										<img
											src={`http://35.211.3.86:3000/${perro.imagen}`}
											alt="Imagen Perro"
										/>
										<div>
											<Link to={"/adopcion/" + perro.id_perro}>
												<p
													style={{
														padding: "5px",
														background: "#8b3637",
														width: "40%",
														borderRadius: "10px",
														textAlign: "center",
														marginLeft: "auto",
														marginRight: "auto",
													}}
												>
													Detalles!
												</p>
											</Link>
										</div>
									</Col>
								);
							})}
						{this.state.perros.length === 1 &&
							this.state.perros.map((perro) => {
								return (
									<Col xs={12} lg={12} key={perro.id_perro}>
										<Link to={"/adopcion/" + perro.id_perro}>
											<h2 className="negrita">{perro.nombre}</h2>
										</Link>
										<img
											src={`http://35.211.3.86:3000/${perro.imagen}`}
											alt="Imagen Perro"
										/>
										<div>
											<Link to={"/adopcion/" + perro.id_perro}>
												<p
													style={{
														padding: "5px",
														background: "#8b3637",
														width: "40%",
														borderRadius: "10px",
														textAlign: "center",
														marginLeft: "auto",
														marginRight: "auto",
													}}
												>
													Detalles!
												</p>
											</Link>
										</div>
									</Col>
								);
							})}
					</Row>
				</div>
			);
		} else {
			return (
				<div className="text-center colorFondoAdopcion-home borderRadius p-3 adopcion-home-container">
					<Row className="mb-4">
						<Col>
							<Link to="/adopcion">
								{" "}
								<h1 className="negrita txtDecorateNone">
									Perros en adopción
								</h1>{" "}
							</Link>
						</Col>
					</Row>
					<Row>
						<Col xs={12} lg={4}>
							<h2
								className="negrita"
								style={{
									color: "transparent",
									background: "#8b3637",
									width: "40%",
									marginLeft: "auto",
									marginRight: "auto",
								}}
							>
								nombre
							</h2>

							<div className="fake-img-showcase-home" />
							<div>
								<p
									style={{
										padding: "5px",
										background: "#8b3637",
										width: "40%",
										borderRadius: "10px",
										textAlign: "center",
										marginLeft: "auto",
										marginRight: "auto",
										color: "transparent",
									}}
								>
									---------
								</p>
							</div>
						</Col>
						<Col xs={12} lg={4}>
							<h2
								className="negrita"
								style={{
									color: "transparent",
									background: "#8b3637",
									width: "40%",
									marginLeft: "auto",
									marginRight: "auto",
								}}
							>
								nombre
							</h2>

							<div className="fake-img-showcase-home" />
							<div>
								<p
									style={{
										padding: "5px",
										background: "#8b3637",
										width: "40%",
										borderRadius: "10px",
										textAlign: "center",
										marginLeft: "auto",
										marginRight: "auto",
										color: "transparent",
									}}
								>
									---------
								</p>
							</div>
						</Col>
						<Col xs={12} lg={4}>
							<h2
								className="negrita"
								style={{
									color: "transparent",
									background: "#8b3637",
									width: "40%",
									marginLeft: "auto",
									marginRight: "auto",
								}}
							>
								nombre
							</h2>

							<div className="fake-img-showcase-home" />
							<div>
								<p
									style={{
										padding: "5px",
										background: "#8b3637",
										width: "40%",
										borderRadius: "10px",
										textAlign: "center",
										marginLeft: "auto",
										marginRight: "auto",
										color: "transparent",
									}}
								>
									---------
								</p>
							</div>
						</Col>
					</Row>
				</div>
			);
		}
	}
}
