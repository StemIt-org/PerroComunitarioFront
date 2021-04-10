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
				"https://perroback.stemit.com.ar/user/abrirNoticia/" +
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
								src={`https://perroback.stemit.com.ar/${noticia.image}`}
							/>
						</Col>
						<Col>
							<h1 className="titulo-perros">{noticia.title}</h1>
							<h4 className="subtitulo-perros">{noticia.subtitle}</h4>
							<span
								aria-label="Descripcion Perro"
								role="img"
								className="descripcion-perros"
							>
								<br />
								<div className="perro-campo">
									<span style={{ fontWeight: "normal" }}>{noticia.body}</span>
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
