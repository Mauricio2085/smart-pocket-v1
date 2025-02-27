import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
const Dashboard = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const { data, loading, error } = useFetch(
		`${API_URL}/api/v1/dashboard/sumary`
	);

	if (!!loading) return <Loading />;
	if (!!error) return <h1>Error</h1>;

	console.log(data);
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
			<div className=" px-8 overflow-x-auto">
				<table className=" w-full px-5 lg:px-36 my-5 bg-cyan-50">
					<caption className="px-4 py-2 border text-center bg-cyan-50">
						<h1 className="font-DynaPuff">Lista de productos en stock</h1>
					</caption>
					<thead className="">
						<tr>
							<th className="px-4 py-2 border text-center">ID</th>
							<th className="px-4 py-2 border text-center">NOMBRE</th>
							<th className="px-4 py-2 border text-center">COSTO UNITARIO</th>
							<th className="px-4 py-2 border text-center">UTILIDAD</th>
							<th className="px-4 py-2 border text-center">PRECIO VENTA</th>
							<th className="px-4 py-2 border text-center">CANTIDAD</th>
							<th className="px-4 py-2 border text-center">ACCIONES</th>
						</tr>
					</thead>
					<tbody>
						{data.map((product) => {
							return (
								<tr key={product.id_producto} className=" border">
									<td className="px-4 py-2 border text-center">
										{product.id_producto}
									</td>
									<td className="px-4 py-2 border text-center">
										{product.nombre_producto}
									</td>
									<td className="px-4 py-2 border text-start whitespace-pre-line leading-relaxed ">
										{product.costo_unitario}
									</td>
									<td className="px-4 py-2 border text-start whitespace-pre-line leading-relaxed ">
										{product.porcentaje_utilidad}
									</td>
									<td className="px-4 py-2 border text-center">
										{product.precio_venta}
									</td>
									<td className="px-4 py-2 border text-center">
										{product.cantidad}
									</td>
									<td className="px-4 py-2 border text-center flex justify-center items-center ">
										<div className="pl-4 ">modificar</div>
										<div className="pl-4 ">eliminar</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export { Dashboard };
