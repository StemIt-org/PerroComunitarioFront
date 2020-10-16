import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import '../css/donar.css';
import '../css/login.css';

export class Login extends Component {
    state = {
        password: '',
        user: '',
        logged: false
    }
    Submit = (e) => {
        e.preventDefault();
        const { user, password } = this.state
        console.log("Form submitted!", this.state)
        console.log("User: ", user);
        console.log("Password: ", password);
        console.log(user + ":" + password);
        const userpass = user + ':' + password
        const encodedString = Buffer.from(userpass).toString('base64');
        console.log("ENCODED: ", encodedString);
        axios({
            method: 'post',
            url: 'http://35.211.3.86:3000/admin/login',
            headers: {
                Authorization: 'Basic ' + encodedString
            }
        }).then((resp) => {
            console.log(resp.data);
            console.log("TOKEN: ", resp.data.token);
            window.localStorage.setItem('token', resp.data.token)
            this.setState({logged: true})
        }).catch((err) => console.log(err))
    }
    Change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    render() {
        if (this.state.logged){
            this.setState({logged: false})
            return(
                <Redirect to="/admin" />
            )
        }
        return (
            <div className="container">
                <h1 className="titulo-donacion">Panel de administración</h1>
                <p className="texto-donacion">
                    Solo podrán iniciar secion aquellas personas las cuales pertenezcan a la organización.
                    Para más información, <Link to="/contacto"><span className="color-rojo" style={{ fontWeight: 'bold', textDecorationColor:"#c46869" }}>¡Contáctanos!</span></Link>
                </p>
                <form className="mb-5 form-login" onSubmit={this.Submit}>
                    <div className="campo-form p-3">
                        <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.2 0H4.8C3.52696 0 2.30606 0.452877 1.40589 1.259C0.505713 2.06513 0 3.15847 0 4.29851V18.6269C0 19.7669 0.505713 20.8602 1.40589 21.6664C2.30606 22.4725 3.52696 22.9254 4.8 22.9254H27.2C28.473 22.9254 29.6939 22.4725 30.5941 21.6664C31.4943 20.8602 32 19.7669 32 18.6269V4.29851C32 3.15847 31.4943 2.06513 30.5941 1.259C29.6939 0.452877 28.473 0 27.2 0ZM4.8 2.86567H27.2C27.6243 2.86567 28.0313 3.01663 28.3314 3.28534C28.6314 3.55405 28.8 3.9185 28.8 4.29851L16 11.2907L3.2 4.29851C3.2 3.9185 3.36857 3.55405 3.66863 3.28534C3.96869 3.01663 4.37565 2.86567 4.8 2.86567ZM28.8 18.6269C28.8 19.0069 28.6314 19.3713 28.3314 19.64C28.0313 19.9087 27.6243 20.0597 27.2 20.0597H4.8C4.37565 20.0597 3.96869 19.9087 3.66863 19.64C3.36857 19.3713 3.2 19.0069 3.2 18.6269V7.56537L15.168 14.1134C15.4112 14.2392 15.6871 14.3054 15.968 14.3054C16.2489 14.3054 16.5248 14.2392 16.768 14.1134L28.8 7.56537V18.6269Z" fill="#837B7B" />
                        </svg>
                        <input type="text" id="user" onChange={this.Change} placeholder="Usuario" required />
                    </div>
                    <div className="campo-form mt-4 p-3">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7.00001C15.5304 7.00001 16.0391 7.21073 16.4142 7.5858C16.7893 7.96087 17 8.46958 17 9.00001M21 9.00001C21.0003 9.93719 20.781 10.8614 20.3598 11.6986C19.9386 12.5357 19.3271 13.2626 18.5744 13.8209C17.8216 14.3792 16.9486 14.7534 16.0252 14.9135C15.1018 15.0737 14.1538 15.0153 13.257 14.743L11 17H9V19H7V21H4C3.73478 21 3.48043 20.8947 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V17.414C3.00006 17.1488 3.10545 16.8945 3.293 16.707L9.257 10.743C9.00745 9.91803 8.93857 9.04896 9.05504 8.19496C9.17152 7.34096 9.47062 6.52208 9.93199 5.79406C10.3934 5.06604 11.0062 4.44596 11.7287 3.97603C12.4512 3.50611 13.2665 3.19736 14.1191 3.07082C14.9716 2.94427 15.8415 3.0029 16.6693 3.2427C17.4972 3.4825 18.2637 3.89785 18.9166 4.46048C19.5696 5.02311 20.0936 5.71981 20.4531 6.50315C20.8127 7.2865 20.9992 8.13811 21 9.00001Z" stroke="#837B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input type="password" placeholder="Contraseña" onChange={this.Change} id="password" required />
                    </div>
                    <div className="campo-form campo-submit-form mt-4 p-3">
                        <button className="ml-2 btn">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11ZM6 16C6.75 13.75 10.5 13 12 13C13.5 13 17.25 13.75 18 16C17.25 18.25 14.25 19 12 19C9.75 19 6.75 18.25 6 16Z" fill="white" />
                            </svg>
                            <span>Iniciar sesión!</span>
                        </button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login
