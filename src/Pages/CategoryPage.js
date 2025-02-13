import { Link, useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";

const CategoryPage = () => {
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	console.log("API URL:", process.env.REACT_APP_API_URL);
	const { categoryName, categoryId } = useParams();
	const { data, loading, error } = useFetch(
		`${API_URL}/api/v1/categorias/${categoryName}/${categoryId}`
	);
	const navigate = useNavigate();

	if (!!loading) return <Loading />;
	if (!!error) return <h1>Error</h1>;

	return (
		<>
			<section className=" w-full h-10 px-5 md:px-20 lg:px-36 flex flex-col justify-center items-start font-DynaPuff text-sm m-auto bg-gradient-to-r from-cyan-500 to-blue-500">
				<button
					onClick={() => navigate("../../")}
					className="w-20 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					Atrás
				</button>
			</section>
			<section className=" w-full h-20 px-5 flex flex-col items-center justify-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1>Los mejores productos de {categoryName}</h1>
			</section>
			<section className="w-full px-5 lg:px-36 flex font-DynaPuff ">
				<span className=" hidden md:w-1/4 "></span>
				<div className=" w-full flex flex-col items-center">
					<section className="w-full px-8 pb-8 grid xl:grid-cols-2 xl:gap-6 border-slate-100 md:my-8 drop-shadow-md ">
						{data.map((product) => {
							return (
								<Link
									to={`../../productos/product-detail/${product.id_producto}`}
								>
									<Card
										key={product.id_producto}
										imagenProducto={product.imagen_producto}
										nombreProducto={product.nombre_producto}
										precioOferta={product.precio_venta}
										precioVenta={product.precio_venta}
										descripcionProducto={product.descripcion}
									/>
								</Link>
							);
						})}
					</section>
				</div>
			</section>
		</>
	);
};

export { CategoryPage };
