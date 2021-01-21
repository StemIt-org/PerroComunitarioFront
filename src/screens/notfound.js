import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Notfound extends Component {
    render() {

        
        return (
            <div className="mucho-padding">
                <h2 className="center ">OH NO!</h2>
                <h4 className="center">Parece que has seguido el link incorrecto!</h4>
                <h4 className="center">Tranquilo, ahora podras volver a donde estabas antes.</h4>
                <Link to="/"><h5 className="center">Volver a la home</h5></Link>
            </div>
        )
    }
}

export default Notfound
