import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default function ListaNoticias() {
	const [noticias, setNoticias] = React.useState(null);
	React.useEffect(() => {
		axios({
			method: "GET",
			url: "http://35.211.3.86:3000/user/mostrarNoticias",
		})
			.then((resp) => {
				const data = resp.data.data;
				// title
				// image
				// subtitle
				// body
				// date
				setNoticias(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<Container>
			<div className="text-center borderRadius noticias-container-home p-3 mt-5">
				<Row className="mb-5">
					<Col>
						<h1 className="negrita txtDecorateNone" id="tituloNoticiasHome">
							Noticias
						</h1>
					</Col>
				</Row>
				<Row className="mb-5 w-100">
					{noticias &&
						noticias.map((noti, i) => {
							return (
								<Col xs={12} lg={4} key={noti.id_noticias}>
									<Link to={`/noticias/${noti.id_noticias}`}>
										<div className="w-100 border borderRadius p-5 mb-5 ">
											<h2 className="negrita">{noti.title}</h2>
											<img
												src={`http://35.211.3.86:3000/${noti.image}`}
												alt="imagen del perro en adopcion"
											/>
											<p className="text-center">{noti.body}</p>
										</div>
									</Link>
								</Col>
							);
						})}
				</Row>
			</div>
		</Container>
	);
}
