import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
	const { productId } = useParams();
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const { data, loading, error } = useFetch(
		`${API_URL}/api/v1/productos/product-detail/${productId}`
	);
	let navigate = useNavigate();
	if (!!loading) return <Loading />;
	if (!!error) return <h1>Error</h1>;
	return (
		<>
			<section className=" w-full h-10 px-5 md:px-20 lg:px-36 flex flex-col justify-center items-start font-DynaPuff text-sm m-auto bg-gradient-to-r from-cyan-500 to-blue-500">
				<button
					onClick={() =>
						navigate(
							`../../categorias/${data.product[0].nombre_categoria}/${data.product[0].categoria_id}`
						)
					}
					className="w-20 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 "
				>
					Atrás
				</button>
			</section>
			<section className=" w-full px-5 md:px-20 lg:px-36 flex ">
				<div className=" w-full flex flex-col items-center">
					<section className="w-full bg-white md:my-8 ">
						<ProductCard
							key={data.product[0].id_producto}
							imagenProducto={data.product[0].imagen_producto}
							nombreProducto={data.product[0].nombre_producto}
							precioOferta={data.product[0].precio_venta}
							precioVenta={data.product[0].precio_comercial}
							descripcionProducto={data.product[0].descripcion}
							especificacionesProducto={data.product[0].especificaciones}
						/>
					</section>
				</div>
			</section>
		</>
	);
};

export { ProductDetailPage };
