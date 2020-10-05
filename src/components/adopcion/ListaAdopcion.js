import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
export default class ListaAdopcion extends React.Component {
  state = {
    index:0,
    hayPerrosAntes:false,
    hayPerrosDespues:true,
    perros:[
      {
        nombre:"Perrin",
        perro_id:56,
        personalidad:"Hola soy un lindo perro"
      }
    ]
  }
  
  componentDidMount() { // Mostrar o no las flechitas en base a la cantidad de perros
    if (this.state.index === 0) this.setState({perrosAntes:false})
    else this.setState({perrosAntes:true})
    if ((this.state.index + 1) * 3 < this.state.perros.length)
      this.setState({hayPerrosDespues:true})
    else this.setState({hayPerrosDespues:false})
    axios({
      method: 'GET',
      url: 'http://35.211.3.86:3000/user/mostrarPerros',
    }).then((resp)=> {
      console.log("DATA: ",resp);
      this.setState({perros: resp.data.data})
      console.log("PERRO: ",this.state.perros);
    })
  }

  perrosAnteriores = () => { // Mostrar tres perros anteriores
    this.setState(prevState=> ({ index: prevState.index - 1}))
  };
  perrosPosteriores = () => { // Mostrar tres perros siguientes
    this.setState(prevState=> ({ index: prevState.index + 1}))
  };
  render(){
    return (
      <>
        <h1 className="tituloAdopcion mb-3 mt-5">Perros en adopción:</h1>
        <div className="text-center p-3 listaContainer">
          <Row style={{position:"relative"}} className="align-middle d-flex justify-content-center text-center align-items-center mb-3">
            {this.state.hayPerrosAntes && ( // MOSTRAR PERROS ANTERIORES
              <div
                onClick={this.perrosAnteriores}
                alt="Flecha izquierda"
                className="flechaIzq"
              >
                <img
                  src={require("../../assets/flecha-izq.png")}
                  alt="Flecha izquierda"
                />
              </div>
            )}
            {this.state.perros // MOSTRAR LOS PERROS
              .slice(this.state.index * 3, (this.state.index + 1) * 3)
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
            {this.state.hayPerrosDespues && ( // BOTON PARA MOSTRAR SIGUIENTES PERROS
              <div
                onClick={this.perrosPosteriores}
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
}
