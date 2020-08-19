import React from 'react'
import { Row, Col } from 'react-bootstrap'

function FooterComponent() {
    return (
        <>
        <br />
            <hr />
            <Row>
                <Col xs={12} lg={2}>
                    <p className="footer-titulo colores-rojo-text">PERRO <br />COMUNITARIO</p>
                    <p className="footer-text">Somo una organizacion que e dedica en forma solidaria a mantener un control y seguimiento de los perros in hogar que transitan la calles de Nuevo Delta Tigre</p>
                    </Col>
                <Col xs={12} lg={10}>ki onda</Col>
            </Row>
            {/* <Row>
                <Col xs={12} lg={2} className="footer-text">Somo una organizacion que e dedica en forma solidaria a mantener un control y seguimiento de los perros in hogar que transitan la calles de Nuevo Delta Tigre</Col>
                <Col xs={12} lg={10}>lah rede sociale</Col>
            </Row>             */}
        </>
    )
}

export default FooterComponent
