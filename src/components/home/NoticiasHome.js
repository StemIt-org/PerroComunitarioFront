import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"
import axios from 'axios'
export default class ShowcaseComponent extends React.Component {

  state = {
    noticias: [
      {
        titulo: "La historia de Jorge",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
      {
        titulo: "La historia de Carlos",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
      {
        titulo: "La historia de Nicolas",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
      {
        titulo: "La historia del Maestro Shifu",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
      {
        titulo: "La historia del perro",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
      {
        titulo: "La historia del perro",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
      {
        titulo: "La historia del perro",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
      {
        titulo: "La historia del perro",
        imagen: "https://lecto.app/img/webp/perfil_lisandro.webp",
        descrip: "Lo encontraron en la calle y al otro dia lo adoptaron",
      },
    ],
    paginaSeleccionada: [true, false, false],
  };
  setLinksPaginas = (ind) => {
    let items = [false, false, false];
    items[ind] = true;
    this.setState({ paginaSeleccionada: items });
  };
  componentDidMount = () => {
    axios({
      method: 'GET',
      url: 'http://35.211.3.86:3000/user/mostrarNoticias'
    }).then((resp)=>{
      const data = resp.data.data
      console.log(data);
      // title
      // image
      // subtitle
      // body
      // date
      this.setState({
        data
      })
    }).catch((err)=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className="text-center borderRadius noticias-container-home p-3 mt-5">
        <Row className="mb-5">
          <Col>
            <Link to="/nosotros">
              <h1 className="negrita txtDecorateNone" id="tituloNoticiasHome">
                Noticias
              </h1>
            </Link>
          </Col>
        </Row>
        <Row className="mb-5 w-100">
          {this.state.paginaSeleccionada[0] &&
            this.state.noticias.slice(0, 6).map((noti, i) => {
              return (
                <Col xs={12} lg={4} key={i}>
                  <div className="w-100 border borderRadius p-5 mb-5">
                    <h2 className="negrita">{noti.titulo}</h2>
                    <img src={noti.imagen} alt="imagen del perro en adopcion" />
                    <p className="text-justify">{noti.descrip}</p>
                  </div>
                </Col>
              );
            })}
          {this.state.paginaSeleccionada[1] &&
            this.state.noticias.slice(6, 12).map((noti, i) => {
              return (
                <Col xs={12} lg={4} key={i}>
                  <div className="w-100 border borderRadius p-5 mb-5">
                    <h2 className="negrita">{noti.titulo}</h2>
                    <img src={noti.imagen} alt="imagen del perro en adopcion" />
                    <p className="text-justify">{noti.descrip}</p>
                  </div>
                </Col>
              );
            })}
          {this.state.paginaSeleccionada[2] &&
            this.state.noticias.slice(12, 18).map((noti, i) => {
              return (
                <Col xs={12} lg={4} key={i}>
                  <div className="w-100 border borderRadius p-5 mb-5">
                    <h2 className="negrita">{noti.titulo}</h2>
                    <img src={noti.imagen} alt="imagen del perro en adopcion" />
                    <p
                      className="text-justify"
                      alt="imagen del perro en adopcion"
                    >
                      {noti.descrip}
                    </p>
                  </div>
                </Col>
              );
            })}
        </Row>
        <Row className="paginas-noticias justify-content-center">
          <Col lg={{ span: 1 }} className="mr-3">
            <ScrollLink
              onClick={() => this.setLinksPaginas(0)}
              to="tituloNoticiasHome"
              smooth={true}
              duration={1000}
              className={`linksPaginas ${this.state.paginaSeleccionada[0] ? "colores-rojo-text" : ""
                }`}
            >
              Pagina1
            </ScrollLink>
          </Col>
          {this.state.noticias.length > 6 && (
            <Col lg={{ span: 1 }} className="mr-3">
              <ScrollLink
                onClick={() => this.setLinksPaginas(1)}
                to="tituloNoticiasHome"
                smooth={true}
                duration={1000}
                className={`linksPaginas ${this.state.paginaSeleccionada[1] ? "colores-rojo-text" : ""
                  }`}
              >
                Pagina2
              </ScrollLink>
            </Col>
          )}
          {this.state.noticias.length > 12 && (
            <Col lg={{ span: 1 }}>
              <a
                onClick={() => this.setLinksPaginas(2)}
                href="#tituloNoticiasHome"
                className={`linksPaginas ${this.state.paginaSeleccionada[2] ? "colores-rojo-text" : ""
                  }`}
              >
                Pagina3
              </a>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}
