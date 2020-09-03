import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import history from '../services/history'

export class Notfound extends Component {
    GoBack () {
        history.goBack()
    }
    render() {

        
        return (
            <div className="mucho-padding">
                <h2 className="center ">OH NO!</h2>
                <h4 className="center">Parece que has seguido el link incorrecto!</h4>
                <h4 className="center">Tranquilo, ahora podras volver a donde estabas antes.</h4>
                <Link to="/"><h5 className="center">Volver a la home</h5></Link>
                <h5 className="center fake-link" onClick={this.GoBack}>Ir a la pagina anterior</h5>
            </div>
        )
    }
}

export default Notfound
