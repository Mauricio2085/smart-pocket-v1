import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
	const { categoryName, categoryId } = useParams();
	return (
		<>
			<h1>Nombre categoría {categoryName}</h1>
			<h1>Id categoría {categoryId}</h1>
		</>
	);
};

export { CategoryPage };
