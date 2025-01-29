import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const { productName, productId } = useParams();
	return (
		<>
			<h1>Nombre Producto: {productName}</h1>
			<h1>Id Producto: {productId}</h1>
		</>
	);
};

export { ProductDetailPage };
