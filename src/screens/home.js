import React, { Component } from 'react';

export default class Home extends Component {
    // constructor() {
    //     super();
    // }

    render(props) {
        console.log("PROPS: ", this.props)
        return (
            <>
            <h1>Pagina de Inicio</h1>
            </>
        );
    }
}
