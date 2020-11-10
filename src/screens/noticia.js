import React from "react";
import axios from "axios";
export default function Noticia(props) {
	const [noticia, setNoticia] = React.useState(null);
	React.useEffect(() => {
		console.log(props);
		axios({
			method: "GET",
			url:
				"http://35.211.3.86:3000/user/abrirNoticia/" +
				props.match.params.noticia,
		})
			.then((resp) => {
				const data = resp.data.data;
				// title
				// image
				// subtitle
				// body
				// date
				console.log(data);
				setNoticia(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (noticia) {
		return (
			<div>
				<h1>{noticia.title}</h1>
				<p>{noticia.subtitle}</p>
			</div>
		);
	} else {
		return <div>cargando...</div>;
	}
}
