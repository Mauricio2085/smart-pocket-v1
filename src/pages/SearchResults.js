import { Card } from "../components/Card";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { ProductNotFound } from "../components/ProductNotFound";

const SearchResults = () => {
	const [searchParams] = useSearchParams();
	const productName = searchParams.get("productName");
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	console.log("API URL:", process.env.REACT_APP_API_URL);
	const { data, loading, error } = useFetch(
		`${API_URL}/search?productName=${encodeURIComponent(productName)}`
	);

	let navigate = useNavigate();
	if (!!loading) return <Loading />;
	if (!!error) return <h1>Error</h1>;

	let heightProducts =
		data && data.length <= 1
			? "h-[calc(100vh-8rem)] sm:h-[calc(100vh-25.1rem)] md:h-[calc(100vh-39.8rem)] lg:md:h-[calc(100vh-30.8rem)]"
			: "h-auto";

	return (
		<>
			<section className=" w-full h-10 px-5 md:px-20 lg:px-36 flex flex-col justify-center items-start font-DynaPuff text-sm m-auto bg-blue-700 2xl:px-80">
				<button
					onClick={() => navigate("/")}
					className="w-20 h-8 rounded-md bg-cyan-500 border border-yellow-100"
				>
					Home
				</button>
			</section>
			<section
				className={`w-screen ${heightProducts} px-5 mb-8 md:px-20 lg:px-36 flex justify-center items-center`}
			>
				<section className="w-full bg-white md:my-8 ">
					{data && data.length > 0 ? (
						data.map((product) => (
							<Card
								key={product.id_producto}
								imagenProducto={product.imagen_producto}
								nombreProducto={product.nombre_producto}
								precioOferta={product.precio_venta}
								precioVenta={product.precio_venta}
								descripcionProducto={product.descripcion}
							/>
						))
					) : (
						<ProductNotFound />
					)}
				</section>
			</section>
		</>
	);
};

export { SearchResults };
