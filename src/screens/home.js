import React, { Component } from 'react';
import history from '../services/history'

export default class Home extends Component {
    // constructor() {
    //     super();
    // }

    goBack(){
        console.log("GO BACC")
        history.goBack()
    }
    render() {
        return (
            <>
            <h1>Pagina de Inicio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fuga voluptas laudantium, pariatur sint repudiandae tenetur at minima in animi, debitis suscipit, quia porro dolorem eos accusantium doloremque exercitationem vitae.
            </p>
            <button onClick={this.goBack}>GO BACK</button>
            </>
        );
    }
}
