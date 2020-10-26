import React, { Component } from 'react';
// import history from '../services/history'
import '../css/home.css';
import { Container } from "react-bootstrap"
import HeaderComponent from "../components/home/HeaderHome";
import EstadisticasComponent from "../components/home/EstadisticasHome";
import ShowcaseComponent from "../components/home/ShowcaseHome.js";
import NoticiasComponent from "../components/home/NoticiasHome.js";

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
                    <NoticiasComponent />
                </Container>
            </>
        );
    }
}
