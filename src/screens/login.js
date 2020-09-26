import React, { Component } from 'react'
import axios from 'axios'
export class Login extends Component {
    state={
        password: '',
        user: ''
    }
    Submit = (e) => {
        e.preventDefault();
        const {user, password} = this.state
        console.log("Form submitted!", this.state)
        console.log("User: ", user);
        console.log("Password: ", password);
        console.log(user+":"+password);
        const userpass = user+':'+password
        const encodedString = Buffer.from(userpass).toString('base64');
        console.log("ENCODED: ",encodedString);
        axios({
            method: 'post',
            url: 'http://35.211.3.86:3000/admin/login',
            headers: {
                Authorization: 'Basic ' + encodedString
            }
        }).then((resp)=> {
            console.log(resp.data);
            console.log("TOKEN: ", resp.data.token);
            window.localStorage.setItem('token', resp.data.token)
        }).catch((err)=>console.log(err))
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
                        <input type="text" id="user" name="usuario" onChange={this.Change} />
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
