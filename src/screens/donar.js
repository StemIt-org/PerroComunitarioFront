import React from "react";
import ReactDOM from 'react-dom';
import '../css/donar.css';
import {post} from 'axios';
// import ScriptTag from 'react-script-tag';



export default class Donar extends React.Component {
  // constructor() {
  //   super()
  // }
  state = {
    email: '',
    monto: '',
    init_point:'',
    preferenceId:'',
    chosenButtonId:'',
    fetched: false,
    otro_monto:''
  }

  DonationButtons = [
    500,300,100
  ]


  renderScript = () => {
    if(this.state.fetched){
      const script_react = React.createElement("script",{"src":"https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js","async":true,"data-preference-id":this.state.preferenceId})
        
      console.log(script_react);
              
              
      return ReactDOM.render(script_react, document.getElementById("boton_mercado_pago"));
    }else{
      return <div> HOLA </div>
    }
  }

  
  ChangeActiveButton = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({
      chosenButtonId:e.target.id,
      monto:e.target.value
    })
  } 
  

  Submit = (e) => {
    e.preventDefault();
    console.log("DONAR $", this.state.monto, " de parte de ", this.state.email);
    const url = "http://localhost:3001/user/crearPreferenciaByDinero"
    const data = {dinero:this.state.monto}
    post(url,data)
    .then(r => {
      console.log(r.data.data.id);
      this.setState({
        init_point:r.data.data.init_point,
        preferenceId:r.data.data.id,
        fetched:true
      })
    });
  }


  Change = (e) => { 
    this.setState({
      [e.target.id]: e.target.value,
    })
    if(e.target.id === "monto"){
      this.setState({
        otro_monto:e.target.value
      })
    }
    console.log("ACTUALIZACION DEL STATE: ", this.state);

  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className="titulo-donacion">Donaciones</h1>
          <p className="texto-donacion">
            A través de tu donacion nos ayudas a seguir creciendo y salvando
            perritos <b>RELLENAR ESTO</b>
          </p>
          <img src={require("../assets/mercadopago.png")} alt="imagen mercadopago" style={{ width: "300px" }}/>

          <form className="mb-5" onSubmit={this.Submit}>
            <div className="campo-form p-3">
              <img src={require("../assets/imagen-mail-form.png")} alt="Logo mail" className="ml-3 mr-4"/>
              <input type="text" id="email" value={this.state.email} onChange={this.Change} placeholder="Mail" required/>
            </div>
            <label className="mt-4">
              <p className="texto-donacion">
                Quiero apoyar con donaciones de:
              </p>
            </label>
            <div className="campo-donar mt-4 p-3">

              {this.DonationButtons.map((amount) => {
                return (
                  <button onClick={this.ChangeActiveButton} id={"button_"+amount} value={amount} className={this.state.chosenButtonId==="button_"+amount?"boton-donar-clicked ml-2 btn":"boton-donar-not-clicked ml-2 btn"}>
                  {"$"+amount}
                  </button>
                )
                
              })}
            </div>
            <div className="campo-form mt-4 p-3" style={{backgroundColor:this.state.chosenButtonId==="monto"?"#AE4345":"#ececec"}} required>
              <img src={require("../assets/imagen-dinero-form.png")} alt="Logo Donar" className="ml-3 mr-4" />
              <input onClick={this.ChangeActiveButton} type="number" placeholder="Otro monto" onChange={this.Change} id="monto" value={this.state.otro_monto}/>
            </div>
            <div className="campo-form campo-submit-form mt-4 p-3">
              <button className="ml-2 btn">
                Donar!
              </button>
            </div>
            <div>
              <a class="campo-form campo-submit-form mt-4 p-3" style={{display:this.state.fetched?"block":"none",color:"white",fontWeight:"bold"}} href={this.state.init_point} target="_blank" rel="noopener noreferrer">Pagar</a>
            </div>
            
            

          </form>
          

        </div>
      </>
    );
  }
}
