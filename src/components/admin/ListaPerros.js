import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"
export class ListaPerros extends Component {
  state = {
    perros: null,
  };
  componentDidMount = () => {
    axios({
      method: "GET",
      url: "https://perroback.stemit.com.ar/user/mostrarPerros",
    }).then((resp) => {
      //   console.log("DATA: ", resp);
      this.setState({ perros: resp.data.data });
      //   console.log("PERRO: ", this.state.perros);
    });
  };

  handleErase = (id_perro) => {
    var token = window.localStorage.getItem("token")
    axios({
      method: "POST",
      url: "https://perroback.stemit.com.ar/admin/eliminarPerro/" + id_perro,
      headers: {
				authorization: 'Bearer ' + token
			}
    }).then((resp) => {
      window.location.reload(false);
    });
  }

  render() {
    return (
      <Row className="center carta-container" noGutters={true}>
        {this.state.perros &&
          this.state.perros.map((perro) => {
            return (
              <Col xs={12} sm={6} md={4} xl={3}>
                <Card
                  style={{  margin: "10px", width: "14rem",}}
                  key={perro.id_perro}
                >
                  <Card.Img
                    variant="top"
                    src={`https://perroback.stemit.com.ar/${perro.imagen}`}
                    style={{
                      height: "9rem",
                      maxHeight: "100%",
                      objectFit: "scale-down",
                    }}
                  />
                  <Card.Body>
                    <Card.Title><Link to={`/adopcion/${perro.id_perro}`}>{perro.nombre}</Link></Card.Title>
                    <Button variant="danger" onClick={() => this.handleErase(perro.id_perro)}>Eliminar</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    );
  }
}

export default ListaPerros;
