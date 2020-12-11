import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button, Row, } from 'react-bootstrap'

export class ListaPerros extends Component {
    state = {
        perros: null
    }
    componentDidMount = () => {
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
            <Row>
                {this.state.perros && this.state.perros.map(perro => {
                    return (
                        <Card style={{ width: '14rem', margin: '10px' }} key={perro.id_perro}>
                            <Card.Img variant="top" src={`http://35.211.3.86:3000/${perro.imagen}`} style={{ height: '9rem', objectFit: 'scale-down' }} />
                            <Card.Body>
                                <Card.Title>{perro.nombre}</Card.Title>
                                <Button variant="secondary">Editar</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        )
    }
}

export default ListaPerros
