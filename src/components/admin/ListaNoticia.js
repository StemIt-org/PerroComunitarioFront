import React, { Component } from 'react'
import axios from 'axios'
import {Card, Row, Button} from 'react-bootstrap'
export class ListaNoticia extends Component {
    state={
        noticias: null
    }
    componentDidMount=()=>{
        axios({
			method: "GET",
			url: "http://35.211.3.86:3000/user/mostrarNoticias",
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
    render() {
        console.log("NOTICIAs:", this.state);
        return (
            <Row>
                {this.state.noticias && this.state.noticias.map(noticia => {
                    return (
                        <Card style={{ width: '14rem', margin: '10px' }} key={noticia.id_noticias}>
                            <Card.Img variant="top" src={`http://35.211.3.86:3000/${noticia.image}`} style={{ height: '9rem', objectFit: 'scale-down' }} />
                            <Card.Body>
                                <Card.Title>{noticia.title}</Card.Title>
                                <Button variant="secondary">Editar</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        )
    }
}

export default ListaNoticia
