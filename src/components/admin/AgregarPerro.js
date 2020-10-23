import React from "react";
import "../../css/perros.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import sweetalert from 'sweetalert'
// import axios from 'axios'
import { post } from 'axios';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";

export default function AgregarPerro() {
	const [inputs, setInputs] = React.useState({
		nombre: "",
		edad: "",
		pelo: "",
		tamano: "",
		personalidad: "",
		sexo: "",
		info: "",
		sociabilidad: "",
		tiempo: "",
		imagen: "no"
	});
	const subir = () => {
		var token = window.localStorage.getItem("token")
		const { nombre, edad, pelo, tamano, personalidad, sexo, info, sociabilidad, tiempo, imagen } = inputs
		sweetalert("Agregar perro:", `Nombre: ${nombre}\nEdad: ${edad}\nPelo: ${pelo}\nTamaño: ${tamano}\nPersonalidad: ${personalidad}\nSexo: ${sexo}\nInformacion: ${info}\nSociabilidad: ${sociabilidad}\nTiempo en adopcion: ${tiempo}\nImagen: ${imagen}`)
		console.log(inputs);
		const url = 'http://35.211.3.86:3000/admin/subirPerro';
		const formData = new FormData();
		formData.append('filee', imagen, `${nombre}.jpg`)
		formData.append('nombre', nombre)
		formData.append('edad',edad )
		formData.append('pelo', pelo)
		formData.append('tamaño', tamano)
		formData.append('personalidad',personalidad )
		formData.append('sexo', sexo)
		formData.append('info', info)
		formData.append('sociabilidad', sociabilidad)
		formData.append('tiempo', tiempo)
		console.log("FORM DATA:", formData);
		const config = {
			headers: {
				'content-type': 'multipart/form-data',
				authorization: 'Bearer ' + token
			}
		}
		post(url, formData,config)
	};
	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.id]: e.target.value });
	};
	const onChange =(e) => {
		setInputs({ ...inputs, imagen:e.target.files[0] });
	  }
	return (
		<>
			<h1
				className="titulo-perros center mb-5"
				style={{ textDecoration: "underline" }}
			>
				Agregar perro!
			</h1>
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
										min= {0}
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
								{/* </Link> */}
								{/* <p className="texto-contactanos">
                                    ¿Tienes dudas? <Link to="/contacto">¡Contáctanos!</Link>
                                </p> */}
							</div>
						</Form>
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
