import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export class Login extends Component {
    state = {
        password: '',
        user: ''
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
        }).catch((err) => console.log(err))
    }
    Change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    render() {
        return (
            // <div className="container center">
            //     <form onSubmit={this.Submit}>
            //         <div>
            //             <input type="text" id="user" name="usuario" onChange={this.Change} />
            //         </div>
            //         <div>
            //             <input type="password" id="password" onChange={this.Change} />
            //         </div>
            //         <div>
            //             <button>Enviar!</button>
            //         </div>
            //     </form>
            // </div>

            <div className="container">
                <h1 className="titulo-donacion">Log in</h1>
                <p className="texto-donacion">
                    Solo podrán iniciar secion aquellas personas las cuales pertenezcan a la organización.
                    Para más información, <Link to="/contacto"><span className="color-rojo" style={{fontWeight: 'bold'}}>¡Contáctanos!</span></Link>
                </p>
                <form className="mb-5" onSubmit={this.Submit}>
                    <div className="campo-form p-3">
                        {/* <svg viewBox="0 0 20 20" width="32" height="32" className="ml-3 mr-4">
							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
						</svg> */}
                        <input type="text" id="email" onChange={this.Change} placeholder="Usuario" required />
                    </div>
                    <div className="campo-form mt-4 p-3">
                        {/* <svg width="32" height="32" className="ml-3 mr-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7.00001C15.5304 7.00001 16.0391 7.21073 16.4142 7.5858C16.7893 7.96087 17 8.46958 17 9.00001M21 9.00001C21.0003 9.93719 20.781 10.8614 20.3598 11.6986C19.9386 12.5357 19.3271 13.2626 18.5744 13.8209C17.8216 14.3792 16.9486 14.7534 16.0252 14.9135C15.1018 15.0737 14.1538 15.0153 13.257 14.743L11 17H9V19H7V21H4C3.73478 21 3.48043 20.8947 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V17.414C3.00006 17.1488 3.10545 16.8945 3.293 16.707L9.257 10.743C9.00745 9.91803 8.93857 9.04896 9.05504 8.19496C9.17152 7.34096 9.47062 6.52208 9.93199 5.79406C10.3934 5.06604 11.0062 4.44596 11.7287 3.97603C12.4512 3.50611 13.2665 3.19736 14.1191 3.07082C14.9716 2.94427 15.8415 3.0029 16.6693 3.2427C17.4972 3.4825 18.2637 3.89785 18.9166 4.46048C19.5696 5.02311 20.0936 5.71981 20.4531 6.50315C20.8127 7.2865 20.9992 8.13811 21 9.00001Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> */}
                        <input type="password" placeholder="Contraseña" onChange={this.Change} id="password" required />
                    </div>
                    <div className="campo-form campo-submit-form mt-4 p-3">
                        <button className="ml-2 btn">
                            Iniciar sesión!
                  </button>
                    </div>
                </form>

            </div>

        )
    }
}

export default Login
