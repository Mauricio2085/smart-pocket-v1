import { useFetch } from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { Success } from "../components/Success";
import { useState } from "react";
import { formattedAmount } from "../utils/formattedAmount";
import axios from "axios";

const DeleteProductsPage = () => {
	const [successMessage, setSuccessMessage] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const { productId } = useParams();
	const { data, loading, error } = useFetch(
		`${API_URL}/productos/product-detail/${productId}`
	);

	const disponibleString = (opcion) => {
		if (opcion) return "Si";
		return "No";
	};
	const destacadoString = (opcion) => {
		if (opcion) return "Si";
		return "No";
	};

	if (loading) return <Loading />;
	if (error) setErrorMessage(error);

	const product = data.product[0];
	console.log(product);

	const deleteProduct = async () => {
		console.log("Entrada al delete");
		const response = await axios.delete(`${API_URL}/eliminar-producto`, {
			data: { id_producto: productId },
		});
		console.log("Respuesta: ", response);
		setSuccessMessage(response.data.message);
	};

	return (
		<>
			{successMessage && (
				<Success
					message={successMessage}
					setSuccessMessage={setSuccessMessage}
				/>
			)}
			{errorMessage && <Error message={errorMessage} />}
			<section className=" py-20 w-full h-screen flex flex-col">
				<h1 className="px-8 md:px-20 lg:px-40 xl:px-80 mb-5 font-DynaPuff text-xl xl:text-3xl">
					Está seguro de elimimar el siguiente producto?
				</h1>
				<div className="border-4 border-cyan-200 mx-8 md:mx-20 lg:mx-40 xl:mx-80 h-2/3 mb-5 overflow-y-auto shadow-md">
					<table className="bg-yellow-50 w-full px-5 lg:px-36 py-5">
						<tbody>
							<tr key={product.id_producto} className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									id
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px]">
									{product.id_producto}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Nombre
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{product.nombre_producto}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Nombre comercial
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{product.nombre_comercial}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Cantidad
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{product.cantidad}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Costo unitario
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{formattedAmount(product.costo_unitario)}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Utilidad
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{Math.trunc(product.porcentaje_utilidad)}%
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Precio venta UND
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{formattedAmount(product.precio_venta)}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Precio comercial
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{formattedAmount(product.precio_comercial)}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Categoría
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] text-ellipsis">
									{product.nombre_categoria}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px]">
									Descripción
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] text-ellipsis">
									{product.descripcion}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px]">
									Especificaciones
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] text-ellipsis">
									{product.especificaciones}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Disponible
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{disponibleString(product.disponible)}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Destacado
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{destacadoString(product.destacado)}
								</td>
							</tr>
							<tr className=" border">
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px] truncate">
									Propietario
								</td>
								<td className="px-4 py-2 font-extralight border text-center text-xs md:text-sm lg:text-lg w-[80px] truncate">
									{product.propietario}
								</td>
							</tr>
							<tr className=" border">
								<td className="px-4 py-2 border text-center text-xs md:text-sm lg:text-lg font-DynaPuff font-medium w-[80px]">
									Imagen producto
								</td>
								<td className="py-2 border text-center text-xs md:text-sm lg:text-lg w-[80px]">
									<img
										src={product.imagen_producto}
										alt={product.imagen_producto}
										className="w-32 h-32 object-cover mx-auto rounded-md"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="flex px-8 md:px-20 lg:px-40 xl:px-80 justify-center items-center">
					<button
						type="submit"
						className=" my-3 mx-5 font-DynaPuff font-normal bg-gradient-to-l from-cyan-500 to-blue-500 border rounded-md w-32 cursor-pointer text-base h-10 lg:self-center lg:text-lg lg:h-11 hover:text-white"
						onClick={() => navigate("/admin")}
					>
						Cancelar
					</button>
					<button
						type="submit"
						className=" my-3 mx-5 font-DynaPuff border rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 w-32 cursor-pointer text-base font-normal h-10 lg:self-center lg:text-lg lg:h-11 text-red-700 hover:text-white"
						onClick={() => deleteProduct()}
					>
						Eliminar
					</button>
				</div>
			</section>
		</>
	);
};

export { DeleteProductsPage };
