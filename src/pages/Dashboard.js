import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
const Dashboard = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const { data, loading, error } = useFetch(
		"http://localhost:5000/api/v1/productos"
	);

	if (!!loading) return <Loading />;
	if (!!error) return <h1>Error</h1>;

	console.log(data);
	return (
		<>
			<section className=" w-full h-20 px-5 flex flex-col items-center justify-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1 className="mx-auto">panel de administración</h1>
			</section>
			<section className=" w-full h-10 px-5 md:px-20 lg:px-36 flex justify-end items-end font-DynaPuff text-sm m-auto bg-gradient-to-r from-cyan-500 to-blue-500">
				<button
					onClick={() => {
						navigate("./crear-producto");
					}}
					className="w-40 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					crear producto
				</button>
				<button
					onClick={() => {
						navigate("./modificar-producto");
					}}
					className="w-40 ml-5 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					modificar producto
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
			<div class=" px-8 overflow-x-auto">
				<table className=" w-full px-5 lg:px-36 my-5 bg-cyan-50">
					<caption className="px-4 py-2 border text-center bg-cyan-50">
						<h1 className="font-DynaPuff">Lista de productos en stock</h1>
					</caption>
					<thead className="">
						<tr>
							<th className="px-4 py-2 border text-center">ID</th>
							<th className="px-4 py-2 border text-center">NOMBRE</th>
							<th className="px-4 py-2 border text-center">DESCRIPCIÓN</th>
							<th className="px-4 py-2 border text-center">ESPECIFICACIONES</th>
							<th className="px-4 py-2 border text-center">CANTIDAD</th>
						</tr>
					</thead>
					<tbody>
						{data.map((product) => {
							return (
								<>
									<tr className=" border">
										<td className="px-4 py-2 border text-center">
											{product.id_producto}
										</td>
										<td className="px-4 py-2 border text-center">
											{product.nombre_producto}
										</td>
										<td className="px-4 py-2 border text-start whitespace-pre-line leading-relaxed min-w-[350px]">
											{product.descripcion}
										</td>
										<td className="px-4 py-2 border text-start whitespace-pre-line leading-relaxed min-w-[350px]">
											{product.especificaciones}
										</td>
										<td className="px-4 py-2 border text-center">
											{product.cantidad}
										</td>
									</tr>
								</>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export { Dashboard };
