import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class debug extends Component {
    render() {
        return (
            <div className="container">
                <h1>DEBUG LINKS</h1>
                <Link to="/noticias">Noticias</Link> <br/>
                <Link to="/adopcion/15">Perro de prueba</Link> <br/>
                <Link to="/adoptar/15">Formulario de adopcion</Link> <br/>
                <Link to="/admin">Panel de admin</Link> <br/>
            </div>
        )
    }
}

export default debug
