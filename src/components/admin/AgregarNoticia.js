import React, { useState } from "react";
import "../../css/perros.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import sweetalert from "sweetalert";
import { post } from "axios";
import { Modal } from 'react-bootstrap'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";

export default function AgregarNoticia() {
	const [inputs, setInputs] = React.useState({
		title: "",
		image: "",
		subtitle: "",
		body: "",
		date: "",
	});
	const subir = async () => {
		setLgShow(false)
		var token = window.localStorage.getItem("token");

		const { title, image, subtitle, body, date } = inputs;
		// sweetalert(
		// 	"Agregar Noticia:",
		// 	`Titulo: ${title}\n Imagen: ${image}\n Subtitle: ${subtitle}\nBody: ${body}\n Date: ${date}`
		// );
		console.log(inputs);
		const url = "http://35.211.3.86:3000/admin/subirNoticia";
		const formData = new FormData();
		formData.append("filee", image);
		formData.append("title", title);
		formData.append("subtitle", subtitle);
		formData.append("body", body);
		formData.append("date", date);
		console.log("FORM DATA:", formData);
		const config = {
			headers: {
				authorization: "Bearer " + token,
			},
		};
		post(url, formData, config)
			.then((r) => {
				console.log(r);
				sweetalert("Éxito!", "Noticia subida con exito", "success")
			})
			.catch((err) => {
				console.log(err)
				sweetalert("Error!", `Ha habido un error subiendo la noticia, intenta de vuelta! \nCodigo de error: ${err.message}`, "error")

			});
	};
	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.id]: e.target.value });
	};
	const onChange = (e) => {
		setInputs({ ...inputs, image: e.target.files[0] });
	};
	const [lgShow, setLgShow] = useState(false);

	return (
		<>
			<h1
				className="titulo-perros center"
				style={{ textDecoration: "underline" }}
			>
				Noticias
			</h1>
			<div className="float-right">
				<Button variant="danger" onClick={() => setLgShow(true)}>Agregar noticia!</Button>
			</div>
			<br />
			<Modal
				size="lg"
				show={lgShow}
				onHide={() => setLgShow(false)}
				aria-labelledby="example-modal-sizes-title-lg"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						Agregar noticia
          		</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={subir}>
						<Form.Group as={Row} controlId="title">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Título:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									required
									onChange={handleInputChange}
									type="text"
									placeholder="Titulo de la noticia"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="subtitle">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Subtítulo:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									required
									onChange={handleInputChange}
									type="text"
									placeholder="Subtitulo de la noticia"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="date">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Fecha:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									required
									onChange={handleInputChange}
									type="date"
									placeholder="Fecha de la noticia"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="body">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Cuerpo:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									required
									onChange={handleInputChange}
									// type="text"
									type="text"
									as="textarea"
									rows={10}
									placeholder="Cuerpo de la noticia"
								/>
							</Col>
						</Form.Group>
						<input type="file" onChange={onChange} />

						<div className="text-center">
							{/* <Link to={"/contacto?perro=" + this.props.match.params.perro}> */}
							<Button
								onClick={subir}
								size="lg"
								variant="danger"
								className=" boton-adoptar font-weight-bold mt-3 mb-3 pr-5 pl-5 pt-2 pb-2"
							>
								{"SUBIR!"}
							</Button>
							{/* </Link> */}
							{/* <p className="texto-contactanos">
                                    ¿Tienes dudas? <Link to="/contacto">¡Contáctanos!</Link>
                                </p> */}
						</div>
					</Form>
				</Modal.Body>
			</Modal>
			<Container>
				<Row>
					<Col lg={5}>
					</Col>
					<Col>

						<span
							aria-label="Descripcion Perro"
							role="img"
							className="descripcion-perros"
						></span>
					</Col>
				</Row>
			</Container>
		</>
	);
}
