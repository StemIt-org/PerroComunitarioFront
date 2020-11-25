import React, { Component } from "react";
import "../css/form.css";
import { Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
export class adoptar extends Component {
	state = {
		perro: this.props.match.params.perro,
		cargado: false,
		data: {
			nombrePerro: "Cargando...",
		},
		form: {
			nombre_perro: null
		}

	};
	componentDidMount = () => {
		console.log(this.props);
		axios({
			method: "post",
			url:
				"http://35.211.3.86:3000/user/agarrarPerros/" +
				this.props.match.params.perro,
		})
			.then((resp) => {
				const data = resp.data.data;
				// console.log(data);
				if (data === undefined) {
					this.setState({ e404: true });
				} else
					this.setState({
						cargado: true,
						data: {
							nombrePerro: data.nombre,
						},
						form: {
							nombre_perro: data.nombre
						}
					});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	send = (e) => {
		e.preventDefault();
		console.log("DATA: ", this.state.form);
		axios({
			method: 'POST',
			url: "http://35.211.3.86:3000/user/completarFormulario",
			headers: {
				'content-type': 'application/json'
			},
			data: {
				...this.state.form
			}
		}).then((resp) => {
			console.log(resp);
		}).catch((err) => {
			console.log(err);
		})
	};
	change = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.id]: e.target.value,
			}
		});
	};
	render() {
		// console.log(this.state);
		if (this.state.e404) {
			return (
				<div className="mucho-padding">
					<h2 className="center ">OH NO!</h2>
					<h4 className="center">Parece que elegiste un perro incorrecto!</h4>
					<Link to="/">
						<h5 className="center">Volver a la home</h5>
					</Link>
				</div>
			);
		} else {
			if (this.state.cargado) {
				return (
					<div className="adopcion-container">
						<Form onSubmit={this.send}>
							<h3 className="center">Datos personales</h3>
							<Form.Group as={Row} controlId="nombre_apellido">
								<Form.Label column sm="2" xl="2">
									<b>Nombre y Apellido:</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder="Juan Perez"
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="nombre_perro">
								<Form.Label column sm="2" xl="2">
									<b>Perro a adoptar:</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										plaintext
										readOnly
										value={this.state.data.nombrePerro}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="direc">
								<Form.Label column sm="2" xl="2">
									<b>Dirección:</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder="Av. Siempre viva 123"
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="tel">
								<Form.Label column sm="2" xl="2">
									<b>Telefono:</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="tel"
										placeholder="(+54) 11 0000-0000"
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="mail">
								<Form.Label column sm="2" xl="2">
									<b>Email:</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="email"
										placeholder="juan@gmail.com"
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<br />
							<hr />
							<h3 className="center">Encuesta pre-adopción</h3>
							<b style={{ textDecoration: 'underline', fontSize: '18px' }}>1. ¿En qué zona viven?</b>
							<Form.Group as={Row} controlId="localidad1">
								<Form.Label column sm="2" xl="2">
									<b>Localidad</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="barrio1">
								<Form.Label column sm="2" xl="2">
									<b>Barrio</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<Form.Group as={Row} controlId="casa_cant2">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>2. ¿Cuántos son en casa?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="edades2">
								<Form.Label column sm="2" xl="2">
									<b>¿Edades?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="de_acuerdo2">
								<Form.Label column sm="2" xl="2">
									<b>
										¿Están todos los miembros de la familia de acuerdo en
										adoptar?
									</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											id="de_acuerdo2"
											name="de_acuerdo2"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											id="de_acuerdo2"
											name="de_acuerdo2"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<br />
							<b style={{ textDecoration: 'underline', fontSize: '18px' }}>3. En caso de no tener hijos:</b>
							<Form.Group as={Row} controlId="bebe3">
								<Form.Label column sm="2" xl="2">
									<b>
										¿Existe la posibilidad de la llegada de u bebé a la familia
										en los próximos años?
									</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											id="bebe3"
											name="bebe3"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											id="bebe3"
											name="bebe3"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<br />
							<Form.Group as={Row} controlId="bebe_x_perro4">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}> 4. ¿Qué piensa de la convivencia de bebés con perros?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="compatibles4">
								<Form.Label column sm="2" xl="2">
									<b> ¿Cree que son compatibles?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											name="compatibles4"
											id="compatibles4"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											name="compatibles4"
											id="compatibles4"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="xq4">
								<Form.Label column sm="2" xl="2">
									<b>¿Por qué?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<b style={{ textDecoration: 'underline', fontSize: '18px' }}>5. ¿Tienen algún animal en casa?</b>
							<Form.Group as={Row} controlId="anima_casa5">
								<Form.Label column sm="2" xl="2">
									<b>Hablame un poco de ellos</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<b style={{ textDecoration: 'underline', fontSize: '18px' }}>6. Si no tienen ningún otro animal en casa:</b>
							<Form.Group as={Row} controlId="tuvieron6">
								<Form.Label column sm="2" xl="2">
									<b>¿Los han tenido?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											id="tuvieron6"
											name="tuvieron6"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											id="tuvieron6"
											name="tuvieron6"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="tiempo_porque">
								<Form.Label column sm="2" xl="2">
									<b>¿Por cuanto tiempo y que pasó con ellos?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />

							<Form.Group as={Row} controlId="xq_interes">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>7. ¿Por qué se intereso en este animal en particular?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />

							<Form.Group as={Row} controlId="hogar_animal8">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>8. ¿Dónde vivirá el animal (casa, departamento)?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />

							<Form.Group as={Row} controlId="anti_vecino9">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>
										9. ¿Tiene algún vecino que esté especialmente en contra de
										que habiten perros en las viviendas cercanas?
									</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											id="anti_vecino9"
											name="anti_vecino9"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											id="anti_vecino9"
											name="anti_vecino9"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<br />

							<Form.Group as={Row} controlId="mudanza10">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>
										10. ¿Existe la posibilidad de una mudanza en los próximos 5
										años?
									</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											id="mudanza10"
											name="mudanza10"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											id="mudanza10"
											name="mudanza10"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="animales_no10">
								<Form.Label column sm="2" xl="2">
									<b>En caso de que no acepten animales, ¿Como procedería?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="huida_pais10">
								<Form.Label column sm="2" xl="2">
									<b>En caso de mudarte o irte del país, ¿Te lo llevarías?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											id="huida_pais10"
											name="huida_pais10"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											name="huida_pais10"
											id="huida_pais10"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<br />
							<b style={{ textDecoration: 'underline', fontSize: '18px' }}>11. Si es una casa:</b>
							<Form.Group as={Row} controlId="casa_cerrada11">
								<Form.Label column sm="2" xl="2">
									<b>
										¿Está debidamente cerrada para que el animal no pueda
										escapar?
									</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											name="casa_cerrada11"
											id="casa_cerrada11"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											name="casa_cerrada11"
											id="casa_cerrada11"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<br />
							<Form.Group as={Row} controlId="cama_perro12">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>12. ¿Dónde dormirá el animal?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<Form.Group as={Row} controlId="solo_perro13">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>13. ¿Cuánto tiempo pasará el animal solo en casa?</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<Form.Group as={Row} controlId="vacacion_perro14">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>
										14. En el período vacacional, ¿Quién cuidaría al animal?
									</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<Form.Group as={Row} controlId="comentario16">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>
										15. ¿Desea añadir algún comentario sobre cualquier aspecto
										relacionado con la dopción que considere importante?
									</b>
								</Form.Label>
								<Col sm="10" lg="10">
									<Form.Control
										type="text"
										placeholder=""
										onChange={this.change}
									/>
								</Col>
							</Form.Group>
							<br />
							<b style={{ color: 'red', fontSize: '20px', }}>En caso de querer adoptar un cachorro/a:</b>
							<Form.Group as={Row} controlId="castracion_cachorrito15">
								<Form.Label column sm="2" xl="2">
									<b style={{ textDecoration: 'underline', fontSize: '18px' }}>
										16. ¿Estas de acuerdo con la castración al cumplir los 6
										meses de vida?
									</b>
								</Form.Label>
								<Col sm="10">
									<fieldset>
										<Form.Check
											type="radio"
											label="Si"
											name="castracion_cachorrito15"
											id="castracion_cachorrito15"
											value="si"
											onChange={this.change}
										/>
										<Form.Check
											type="radio"
											label="No"
											name="castracion_cachorrito15"
											id="castracion_cachorrito15"
											value="no"
											onChange={this.change}
										/>
									</fieldset>
								</Col>
							</Form.Group>
							<Form.Control type="submit" />
						</Form>
					</div>
				);
			} else {
				return <div>Cargando...</div>;
			}
		}
	}
}

export default adoptar;
