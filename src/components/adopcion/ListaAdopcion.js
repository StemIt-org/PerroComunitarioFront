import React, { useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
export default function ListaAdopcion() {
  const [index,setIndex] = useState(0)
  const [hayPerrosAntes, setPerrosAntes] = useState(false)
  const [hayPerrosDespues, setPerrosDespues] = useState(true)
  const [perros, setPerros] = useState([
      // {
      //   nombre: "Juana",
      //   foto: require("../../assets/perro-adopcion-2.png"),
      //   descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      // },
      // {
      //   nombre: "Juanita",
      //   foto: require("../../assets/perro-adopcion-2.png"),
      //   descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      // },
      // {
      //   nombre: "Shifu",
      //   foto: require("../../assets/perro-adopcion-2.png"),
      //   descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      // },
      // {
      //   nombre: "Negro",
      //   foto: require("../../assets/perro-adopcion-2.png"),
      //   descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      // },
      // {
      //   nombre: "Juancito",
      //   foto: require("../../assets/perro-adopcion-2.png"),
      //   descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      // },
      // {
      //   nombre: "Frida",
      //   foto: require("../../assets/perro-adopcion-2.png"),
      //   descrip: "Lo encontraron el otro día en la calle y lo adoptaron",
      // },
  ])
  useEffect(() => { // Mostrar o no las flechitas en base a la cantidad de perros
    if (index === 0) setPerrosAntes(false)
    else setPerrosAntes(true)
    if ((index + 1) * 3 < perros.length)
      setPerrosDespues(true)
    else setPerrosDespues(false)
    axios({
      method: 'GET',
      url: 'http://35.211.3.86:3000/user/mostrarPerros',
    }).then((resp)=> {
      console.log("DATA: ",resp);
      setPerros(resp.data.data)
      console.log("PERRO: ",perros);
    })

  },[index,setPerrosDespues,setPerrosAntes,perros])

  const perrosAnteriores = () => { // Mostrar tres perros anteriores
    setIndex(index - 1)
  };
  const perrosPosteriores = () => { // Mostrar tres perros siguientes
    setIndex(index + 1)
  };
    return (
      <>
        <h1 className="tituloAdopcion mb-3 mt-5">Perros en adopción:</h1>
        <div className="text-center p-3 listaContainer">
          <Row style={{position:"relative"}} className="align-middle d-flex justify-content-center text-center align-items-center mb-3">
            {hayPerrosAntes && ( // MOSTRAR PERROS ANTERIORES
              <div
                onClick={perrosAnteriores}
                alt="Flecha izquierda"
                className="flechaIzq"
              >
                <img
                  src={require("../../assets/flecha-izq.png")}
                  alt="Flecha izquierda"
                />
              </div>
            )}
            {perros // MOSTRAR LOS PERROS
              .slice(index * 3, (index + 1) * 3)
              .map((perro) => (
                <Col key={perro.nombre} lg={3}>
                  <Link to={"/adopcion/" + perro.id_perro} className="links">
                    <h2 className="negrita">{perro.nombre}</h2>
                    <img src={require("../../assets/perro-adopcion-2.png")} alt={`Imagen ${perro.nombre}`} />
                    {/* <img src={perro.foto} alt={`Imagen ${perro.nombre}`} /> */}
                    <p className="mt-4 text-center">{perro.personalidad}</p>
                  </Link>
                </Col>
              ))}
            {hayPerrosDespues && ( // BOTON PARA MOSTRAR SIGUIENTES PERROS
              <div
                onClick={perrosPosteriores}
                alt="Flecha Derecha"
                className="flechaDer"
              >
                <img
                  src={require("../../assets/flecha-der.png")}
                  alt="Flecha izquierda"
                />
              </div>
            )}
          </Row>
        </div>
      </>
    );
}
