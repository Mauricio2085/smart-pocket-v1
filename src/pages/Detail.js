import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContex";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

const Detail = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const { logout } = useAuth();
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const { data, loading, error } = useFetch(
		`${API_URL}/admin/detail/${productId}`
	);

	if (!!loading) return <Loading />;
	if (!!error) return <Error message={error} />;
	if (!data || !data.product || data.product.length === 0)
		return <h1>No hay productos disponibles</h1>;

	console.log(data.product[0].nombre_producto);

	const product = data.product[0];
	const disponibleString = (opcion) => {
		if (opcion) return "Si";
		return "No";
	};
	const destacadoString = (opcion) => {
		if (opcion) return "Si";
		return "No";
	};

	return (
		<>
			<section className=" w-full h-20 px-5 flex flex-col items-center justify-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1 className="mx-auto">panel de administración</h1>
			</section>
			<section className=" w-full h-10 px-5 md:px-20 lg:px-36 flex justify-end items-center font-DynaPuff text-sm m-auto bg-gradient-to-r from-cyan-500 to-blue-500">
				<button
					onClick={() => {
						navigate("./crear-producto");
					}}
					className="px-4 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					crear producto
				</button>
				<button
					onClick={() => {
						logout();
						navigate("/login");
					}}
					className="w-20 ml-5 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					Logout
				</button>
			</section>
			<div className=" px-8 overflow-x-auto md:px-20 lg:px-40 xl:px-80">
				<table className=" w-full px-5 lg:px-36 my-5">
					<caption className="px-4 py-2 border text-center bg-cyan-50">
						<h1 className="font-DynaPuff text-sm md:text-lg lg:text-xl">
							Lista de productos en stock
						</h1>
					</caption>
					<tbody>
						<tr key={product.id_producto} className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								id
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg max-w-xs">
								{product.id_producto}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Nombre
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[150px] truncate">
								{product.nombre_producto}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Nombre comercial
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[150px] truncate">
								{product.nombre_comercial}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Cantidad
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.cantidad}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Costo unitario
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.costo_unitario}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Utilidad
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.porcentaje_utilidad}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Precio venta UND
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.precio_venta}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Precio comercial
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.precio_comercial}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Categoría
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.nombre_categoria}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Descripción
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.descripcion}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Especificaciones
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{product.especificaciones}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Destacado
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{destacadoString(product.destacado)}
							</td>
						</tr>
						<tr className=" border">
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-bold w-[100px] truncate">
								Disponible
							</td>
							<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg w-[100px] truncate">
								{disponibleString(product.disponible)}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export { Detail };
