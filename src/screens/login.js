import React, { Component } from 'react'

export class Login extends Component {
    state={
        password: '',
        email_o_user: ''
    }
    Submit = (e) => {
        e.preventDefault();
        console.log("Form submitted!", this.state)
        //aca iria la funcion para loguearse, @Backend ponganse las pilas dale pa
    }
    Change = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    render() {
        return (
            <div className="container center">
                <form onSubmit={this.Submit}>
                    <div>
                        <input type="text" id="email_o_user" onChange={this.Change} />
                    </div>
                    <div>
                        <input type="password" id="password" onChange={this.Change} />
                    </div>
                    <div>
                        <button>Enviar!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
