import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default class ListaAdopcion extends React.Component {
	state = {
		index: 0,
		perros: [
			{
				nombre: "Perrin",
				perro_id: 56,
				personalidad: "Hola soy un lindo perro",
			},
			{
				nombre: "Perrin",
				perro_id: 56,
				personalidad: "Hola soy un lindo perro",
			},
			{
				nombre: "Perrin",
				perro_id: 56,
				personalidad: "Hola soy un lindo perro",
			},
			{
				nombre: "Perrin",
				perro_id: 56,
				personalidad: "Hola soy un lindo perro",
			},
		],
	};

	componentDidMount() {
		// Mostrar o no las flechitas en base a la cantidad de perros
		axios({
			method: "GET",
			url: "http://35.211.3.86:3000/user/mostrarPerros",
		}).then((resp) => {
			console.log("DATA: ", resp);
			this.setState({ perros: resp.data.data });
			console.log("PERRO: ", this.state.perros);
		});
	}

	render() {
		return (
			<>
				<h1 className="tituloAdopcion mb-3 mt-5">Perros en adopción:</h1>
				<div className="text-center p-3 listaContainer">
					<Row
						style={{ position: "relative" }}
						className="align-middle d-flex justify-content-center text-center align-items-center mb-3"
					>
						{this.state.perros // MOSTRAR LOS PERROS
							.map((perro) => (
								<Col key={perro.nombre} lg={4}>
									<Link
										to={"/adopcion/" + perro.id_perro}
										className="text-center links"
									>
										<h2 className="negrita">{perro.nombre}</h2>
										<img
											style={{ height: "170px", objectFit: "cover" }}
											src={
												`http://35.211.3.86:3000/${perro.imagen}` ||
												"../../assets/perro-adopcion-2.png"
											}
											alt={`Imagen ${perro.nombre}`}
										/>
										{/* <img src={perro.foto} alt={`Imagen ${perro.nombre}`} /> */}
										<p className="mt-4 text-center">{perro.personalidad}</p>
									</Link>
								</Col>
							))}
					</Row>
				</div>
			</>
		);
	}
}
