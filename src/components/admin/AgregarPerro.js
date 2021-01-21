import React, { useState } from "react";
import "../../css/perros.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import sweetalert from 'sweetalert'
// import axios from 'axios'
import { post } from 'axios';
import { Modal } from 'react-bootstrap'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";

export default function AgregarPerro() {
	const [inputs, setInputs] = React.useState({
		nombre: null,
		edad: null,
		pelo: null,
		tamano: null,
		personalidad: null,
		sexo: null,
		info: null,
		sociabilidad: null,
		tiempo: null,
		imagen: null
	});
	const subir = async () => {
		sweetalert("Subiendo", "Subiendo perro a la base de datos, espere", "info")

		setLgShow(false)
		var token = window.localStorage.getItem("token")
		const { nombre, edad, pelo, tamano, personalidad, sexo, info, sociabilidad, tiempo, imagen } = inputs
		// sweetalert("Agregar perro:", `Nombre: ${nombre}\nEdad: ${edad}\nPelo: ${pelo}\nTamaño: ${tamano}\nPersonalidad: ${personalidad}\nSexo: ${sexo}\nInformacion: ${info}\nSociabilidad: ${sociabilidad}\nTiempo en adopcion: ${tiempo}\nImagen: ${imagen}`)
		console.log(inputs);
		const url = 'http://35.211.3.86:3000/admin/subirPerro';
		const formData = new FormData();
		formData.append('filee', imagen)
		formData.append('nombre', nombre)
		formData.append('edad', edad)
		formData.append('pelo', pelo)
		formData.append('tamaño', tamano)
		formData.append('personalidad', personalidad)
		formData.append('sexo', sexo)
		formData.append('ficha_medica', info)
		formData.append('sociabilidad', sociabilidad)
		formData.append('tiempo_ea', tiempo)
		console.log("FORM DATA:", formData);
		const config = {
			headers: {
				authorization: 'Bearer ' + token
			}
		}
		post(url, formData, config)
			.then((r) => {
				console.log(r);
				sweetalert("Éxito!", "Perro subido con exito", "success")
			}).catch((err) => {
				sweetalert("Error!", `Ha habido un error subiendo el perro, intenta de vuelta!\nCodigo de error: ${err.message}`, "error")
				console.log(err);
			})
	};
	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.id]: e.target.value });
	};
	const onChange = (e) => {
		setInputs({ ...inputs, imagen: e.target.files[0] });
	}
	const [lgShow, setLgShow] = useState(false);

	return (
		<>
			<h1
				className="titulo-perros center"
				style={{ textDecoration: "underline" }}
			>
				Perros
			</h1>
			<div className="float-right" style={{marginTop:'10px', marginBottom:"10px"}}>
				<Button variant="danger" onClick={() => setLgShow(true)}>Agregar perro!</Button>
			</div>
			<br/>
			<Modal
				size="lg"
				show={lgShow}
				onHide={() => setLgShow(false)}
				aria-labelledby="example-modal-sizes-title-lg"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						Agregar perro
          		</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group as={Row} controlId="nombre">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Nombre:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Nombre del perro"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="edad">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Edad:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									min={0}
									onChange={handleInputChange}
									type="number"
									placeholder="Edad"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="tamano">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Tamaño:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Tamaño"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="personalidad">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Personailidad:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Personalidad"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="pelo">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Pelo:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Pelo"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="sexo">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Sexo:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Sexo"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="info">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Información médica:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Información Medica"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="sociabilidad">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Sociabilidad:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Sociabilidad"
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="tiempo">
							<Form.Label
								className="input-agregar-perro"
								column
								sm="2"
								lg="3"
							>
								Tiempo en adopción:
								</Form.Label>
							<Col sm="10" lg="9">
								<Form.Control
									onChange={handleInputChange}
									type="name"
									placeholder="Tiempo en adopción"
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
						</div>
					</Form>
				</Modal.Body>
			</Modal>
			<Container>
				<Row>
					<Col lg={5}>
						{/* <Carousel
                                autoPlay
                                showArrows={false}
                                showStatus={false}
                                infiniteLoop
                                stopOnHover
                                dynamicHeight
                                swipeable
                                emulateTouch
                            >
                                <div>
                                    <img
                                        alt="Imagen perro"
                                        src={require("../assets/perro-adopcion-1.png")}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="Imagen perro"
                                        src={require("../assets/perro-adopcion-2.png")}
                                    />
                                </div>
                            </Carousel> */}
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
