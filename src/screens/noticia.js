import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
export default function Noticia(props) {
	const [noticia, setNoticia] = React.useState(null);
	React.useEffect(() => {
		// console.log(props);
		axios({
			method: "GET",
			url:
				"http://35.211.3.86:3000/user/abrirNoticia/" +
				props.match.params.noticia,
		})
			.then((resp) => {
				const data = resp.data.data;
				// title
				// image
				// subtitle
				// body
				// date
				setNoticia(data);
			})
			.catch((err) => {
				console.log(err);
			});
		// eslint-disable-next-line
	}, []);

	if (noticia) {
		return (
			<>
				<Container>
					<Row>
						<Col lg={6}>
							<img
								className="shadow-lg"
								alt="Imagen noticia"
								src={`http://35.211.3.86:3000/${noticia.image}`}
							/>
						</Col>
						<Col>
							<h1 className="titulo-perros">{noticia.title}</h1>
							<span
								aria-label="Descripcion Perro"
								role="img"
								className="descripcion-perros"
							>
								<br />
								<div className="perro-campo">
									<span style={{ fontWeight: "bold" }}>{noticia.body}</span>
								</div>
							</span>
						</Col>
					</Row>
				</Container>
			</>
		);
	} else {
		return <div className="center">Cargando...</div>;
	}
}
