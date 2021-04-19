import React from 'react'
import Card from 'react-bootstrap/Card'
import '../../css/nosotros.css';

function HeaderNosotros() {
    return (
        <div className="container-nosotros">
            <h1 className="titulo-nosotros">¿Quienes somos?</h1>
            <p className="texto-nosotros" >Perro Comunitario es una organización que se dedica en forma solidaria a mantener un control y seguimiento de los perros sin hogar que transitan las calles de Nuevo Delta Tigre. Nuestro objetivo? lograr tener la menor cantidad posible de perros en estado de abandono y asi  dar nuestro  aporte al cuidado de la salud publica, mediante las castraciones masivas  la educación, concientización y la adopción.
Qué es un perro comunitario? Un PC es un perro de todos. Al no contar con un refugio propio, optamos por este sistema en el que colocamos un collar rojo identificatorio el cual permite controlar su evolución y abrir una posibilidad de adopción. Todos ellos estan castrados vacunados y desparasitados . Cada uno de ellos es alimentado diariamente por nuestras voluntarias, deseando que algún día abandonen la calle y tengan un hogar.
La organización tiene tres pilares: educar, esterilizar y adoptar.</p>
            <Card className="card-container mb-5"> 
            <iframe title="Video" src="https://www.youtube.com/embed/q5q4FPb84lI" height='400' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body className="footerImg-nosotros texto-nosotros-borde">
                    <Card.Text className="pt-3 pb-3">
                    Quienes somos 
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <h1 className="titulo-nosotros">Actividades</h1>
            <p className="texto-nosotros" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate officia vel asperiores recusandae ducimus. Voluptatum expedita inventore eligendi fugit quo ut veritatis voluptate ex iusto sed, sint, quisquam tenetur?</p>
            <Card className="card-container"> 
            <Card.Img className="card-nosotros-borde" variant="top" src={require("../../assets/imagen-nosotros.png")} alt="EQUIPO!" />
                <Card.Body className="footerImg-nosotros texto-nosotros-borde">
                    <Card.Text className="pt-3 pb-3">
                        Analizando las adopciones de los perros a través de los años
                    </Card.Text>
                </Card.Body>
            </Card>
            <p className="WARNING">[AGREGAR CARROUSEL, pero me gusta la estetica, por ahi dejemos una imagen sola]</p> */}
            {/* <Image src={require("../../assets/NOSOTROS_TMP.jpg")} alt="EQUIPO!" fluid   /> */}
        </div>
    )
}

export default HeaderNosotros
