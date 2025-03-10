import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>¡Ups! Ocurrió un error</h1>
			<p>No encontramos lo que buscabas.</p>
			<button onClick={() => navigate("/")}>Volver al inicio</button>
		</div>
	);
};

export { ErrorPage };
