import React from "react";
import "../../css/perros.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import sweetalert from 'sweetalert'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";

export default function AgregarNoticia() {
	const [inputs, setInputs] = React.useState({
		titulo: "",
		cuerpo: "",
	});
	const subir = (e) => {
		if (inputs.cuerpo !== "" && inputs.titulo !== ""){
			e.preventDefault()
			console.log(inputs);
			sweetalert("Noticia creada!", `Titulo: ${inputs.titulo} \nCuerpo: ${inputs.cuerpo}`, "success")
		}else{
			// alert("falta una cosa")
			sweetalert("Error!", "Para subir una noticia debes especificar un titulo y un cuerpo!", "warning")
		}
		
	};
	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.id]: e.target.value });
	};
	return (
		<>
			<h1
				className="titulo-perros center mb-5"
				style={{ textDecoration: "underline" }}
			>
				Agregar Noticia!
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
						<Form onSubmit={subir}>
							<Form.Group as={Row} controlId="titulo">
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
							<Form.Group as={Row} controlId="cuerpo">
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
