import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

import {Card, Row, Button} from 'react-bootstrap'
export class ListaNoticia extends Component {
    state={
        noticias: null
    }
    componentDidMount=()=>{
        axios({
			method: "GET",
			url: "https://perroback.stemit.com.ar/user/mostrarNoticias",
		})
			.then((resp) => {
                const data = resp.data.data;
                console.log(data);
				this.setState({
                    noticias: data
                })
			})
			.catch((err) => {
				console.log(err);
			});
    }

    handleErase = (id_noticia) => {
        var token = window.localStorage.getItem("token")
        axios({
          method: "POST",
          url: "https://perroback.stemit.com.ar/admin/borrarNoticia/" + id_noticia,
          headers: {
                    authorization: 'Bearer ' + token
                },
        }).then((resp) => {
          window.location.reload(false);
        });
      }

    render() {
        console.log("NOTICIAs:", this.state);
        return (
            <Row>
                {this.state.noticias && this.state.noticias.map(noticia => {
                    return (
                        <Card style={{ width: '14rem', margin: '10px' }} key={noticia.id_noticias}>
                            <Card.Img variant="top" src={`https://perroback.stemit.com.ar/${noticia.image}`} style={{ height: '9rem', objectFit: 'scale-down' }} />
                            <Card.Body>
                                <Card.Title><Link to={`/noticias/${noticia.id_noticias}`}>{noticia.title}</Link></Card.Title>

                                <Button variant="danger" onClick={() => this.handleErase(noticia.id_noticias)}>Eliminar</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        )
    }
}

export default ListaNoticia
