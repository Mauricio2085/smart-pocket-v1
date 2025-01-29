import { useParams } from "react-router-dom";
import { Card } from "./Card";
import { useFetch } from "./useFetch/useFetch";

const CategoryPage = () => {
	const { categoryName, categoryId } = useParams();
	const { data } = useFetch(
		`http://localhost:5000/api/v1/categorias/${categoryName}/${categoryId}`
	);
	// const [productsCategory, setProductsCategory] = useState([]);

	// const fetchProductsCategories = async (url) => {
	// 	try {
	// 		const response = await fetch(url);
	// 		// Verifica si la solicitud fue exitosa
	// 		if (!response.ok) {
	// 			throw new Error("Error en la solicitud");
	// 		}

	// 		// Procesa la respuesta (puede ser .json(), .text(), etc.)
	// 		const data = await response.json();
	// 		console.log(data); // Maneja los datos de la respuesta
	// 		setProductsCategory(data);
	// 	} catch (error) {
	// 		console.error("Hubo un problema con la solicitud fetch:", error);
	// 	}
	// };

	// useEffect(() => {
	// 	if (categoryName && categoryId) {
	// 		fetchProductsCategories(
	// 			`http://localhost:5000/api/v1/categorias/${categoryName}/${categoryId}`
	// 		);
	// 	} else {
	// 		console.error("Faltan parámetros en la URL.");
	// 	}
	// }, [categoryName, categoryId]);

	return (
		<>
			<section className=" w-full h-20 px-5 flex flex-col items-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1>Los mejores productos de {categoryName}</h1>
			</section>
			<section className="w-full px-5 lg:px-36 flex font-DynaPuff ">
				<span className=" hidden md:w-1/4 "></span>
				<div className=" w-full flex flex-col items-center">
					<section className="w-full p-8 grid xl:grid-cols-5 xl:gap-6 border-slate-100 md:my-8 drop-shadow-md ">
						{data.map((product, index) => {
							return (
								<Card
									key={product.id_producto}
									imagenProducto={product.imagen_producto}
									nombreProducto={product.nombre_producto}
									precioOferta={product.precio_venta}
									precioVenta={product.precio_venta}
								/>
							);
						})}
					</section>
					<section className=" lg:h-60 text-2xl">paginacion</section>
				</div>
			</section>
		</>
	);
};

export { CategoryPage };
