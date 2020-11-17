import React, { Component } from 'react'
import '../css/form.css'
import { Form, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
export class adoptar extends Component {
    state = {
        perro: this.props.match.params.perro,
        cargado: false,
        data: {
            nombrePerro: 'Cargando...'
        }
    }
    componentDidMount = () => {
        console.log(this.props);
        axios({
            method: 'post',
            url: 'http://35.211.3.86:3000/user/agarrarPerros/' + this.props.match.params.perro,
        }).then((resp) => {
            const data = resp.data.data
            // console.log(data);
            if (data === undefined) {
                this.setState({ e404: true })
            }
            else this.setState({
                cargado: true,
                data: {
                    nombrePerro: data.nombre
                }
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    send = (e) => {
        e.preventDefault()
        console.log(this.state);
    }
    change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    render() {
        console.log(this.state);
        if (this.state.e404) {
            return (
                <div className="mucho-padding">
                    <h2 className="center ">OH NO!</h2>
                    <h4 className="center">Parece que elegiste un perro incorrecto!</h4>
                    <Link to="/"><h5 className="center">Volver a la home</h5></Link>
                </div>
            )
        } else {
            if (this.state.cargado) {
                return (
                    <div className="adopcion-container">
                        <Form onSubmit={this.send}>
                        <h3 className="center">Datos personales</h3>
                            <Form.Group as={Row} controlId="nombre_y_apellido">
                                <Form.Label column sm="2" xl="2">
                                    <b>Nombre y Apellido:</b>
                                </Form.Label>
                                <Col sm="10" lg="10">
                                    <Form.Control type="text" placeholder="Peepee poopoo" onChange={this.change} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2" xl="2">
                                    <b>Perro a adoptar:</b>
                                </Form.Label>
                                <Col sm="10" lg="10">
                                    <Form.Control plaintext readOnly value={this.state.data.nombrePerro} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="direccion">
                                <Form.Label column sm="2" xl="2">
                                    <b>Dirección:</b>
                                </Form.Label>
                                <Col sm="10" lg="10">
                                    <Form.Control type="text" placeholder="Av. Siempre viva 123" onChange={this.change} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="telefono">
                                <Form.Label column sm="2" xl="2">
                                    <b>Telefono:</b>
                                </Form.Label>
                                <Col sm="10" lg="10">
                                    <Form.Control type="tel" placeholder="(+54) 11 0000-0000" onChange={this.change} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="email">
                                <Form.Label column sm="2" xl="2">
                                    <b>Email:</b>
                                </Form.Label>
                                <Col sm="10" lg="10">
                                    <Form.Control type="email" placeholder="ejemplo@email.com" onChange={this.change} />
                                </Col>
                            </Form.Group>
                            <br/>
                            <br/>
                            <hr/>
                            <h3 className="center">Encuesta pre-adopción</h3>

                        </Form>
                    </div>
                )
            } else {
                return (
                    <div>Cargando...</div>
                )
            }
        }
    }
}

export default adoptar
