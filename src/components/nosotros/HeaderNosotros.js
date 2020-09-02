import React from 'react'
import Card from 'react-bootstrap/Card'
import '../../css/nosotros.css';

function HeaderNosotros() {
    return (
        <div className="container-nosotros">
            <h1 className="titulo-nosotros">¿Quienes somos?</h1>
            <p className="texto-nosotros">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate officia vel asperiores recusandae ducimus. Voluptatum expedita inventore eligendi fugit quo ut veritatis voluptate ex iusto sed, sint, quisquam tenetur?</p>
            <Card className="card-container"> 
                <Card.Img className="card-nosotros-borde" variant="top" src={require("../../assets/NOSOTROS_TMP.jpg")} alt="EQUIPO!" />
                <Card.Body className="footerImg-nosotros texto-nosotros-borde">
                    <Card.Text>
                        El equipo de Perro Comunitario en el evento de fin de año 2019
                    </Card.Text>
                </Card.Body>
            </Card>
            <p className="WARNING">[AGREGAR CARROUSEL, pero me gusta la estetica, por ahi dejemos una imagen sola]</p>
            {/* <Image src={require("../../assets/NOSOTROS_TMP.jpg")} alt="EQUIPO!" fluid   /> */}
        </div>
    )
}

export default HeaderNosotros
