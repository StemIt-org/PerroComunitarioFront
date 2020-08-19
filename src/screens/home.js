import React, { Component } from 'react';
// import history from '../services/history'
import '../css/home.css';
import {Container} from "react-bootstrap"
import HeaderComponent from "../components/HeaderComponent";
import EstadisticasComponent from "../components/EstadisticasComponent";
import ShowcaseComponent from "../components/ShowcaseComponent.js";

export default class Home extends Component {
    // goBack(){
    //     console.log("GO BACC")
    //     history.goBack()
    // }
    render() {
        return (
            <>
            <Container >
            {/* <button onClick={this.goBack}>GO BACK</button> */}
            <HeaderComponent />
            <EstadisticasComponent />
            <ShowcaseComponent />
            </Container>
            </>
        );
    }
}
