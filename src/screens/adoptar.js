import React, { Component } from 'react'
import '../css/form.css'
import { Form, Col, Row } from 'react-bootstrap'
export class adoptar extends Component {
    state = {
        perro: this.props.match.params.perro
    }
    componentDidMount = () => {
        console.log(this.props);
    }
    render() {
        return (
            <div className="adopcion-container">
                <h3 className="center">Datos personales</h3>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" md="1">
                        Password
                    </Form.Label>
                    <Col sm="10" md="11">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </div>
        )
    }
}

export default adoptar
