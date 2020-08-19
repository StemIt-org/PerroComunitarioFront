import React, { Component } from 'react';
// import history from '../services/history'
import {Container} from "react-bootstrap"
import HeaderComponent from "../components/HeaderComponent";

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
            </Container>
            </>
        );
    }
}
