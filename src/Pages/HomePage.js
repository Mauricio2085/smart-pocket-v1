import React from "react";
import { Categories } from "../components/Categories";
import { Public } from "../components/Public";
import { useFetch } from "../Hooks/useFetch";
import { ProductCarousel } from "../components/ProductCarousel";

const HomePage = () => {
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	console.log("API URL:", process.env.REACT_APP_API_URL);
	const { data, error } = useFetch(`${API_URL}/api/v1/productos`);

	if (!!error) return <h1>Error</h1>;

	return (
		<>
			<Categories />
			<Public />
			<ProductCarousel data={data} />
		</>
	);
};

export { HomePage };
