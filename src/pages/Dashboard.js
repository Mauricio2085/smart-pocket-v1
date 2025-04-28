import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../context/AuthContex";
import { useNavigate, Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Dashboard = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

	const { data, loading, error } = useFetch(
		`${API_URL}/admin/dashboard/summary`
	);

	if (!!loading) return <Loading />;
	if (!!error) return <Error />;

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
					className="w-40 px-4 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					crear producto
				</button>
				<button
					onClick={() => {
						logout();
						navigate("/");
					}}
					className="w-40 ml-5 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					Cerrar sesión
				</button>
			</section>
			<div className=" px-8 md:px-12 xl:px-80 overflow-x-auto">
				<table className=" w-full my-5">
					<caption className="px-4 py-2 border text-center bg-cyan-50">
						<h1 className="font-DynaPuff text-xl">
							Lista de productos en stock
						</h1>
					</caption>
					<thead className="">
						<tr>
							<th className="px-4 py-2 border text-center w-[100px] truncate">
								ID
							</th>
							<th className="px-4 py-2 border text-center w-[100px] truncate">
								NOMBRE
							</th>
							<th className="px-4 py-2 border text-center w-[100px] truncate">
								CANTIDAD
							</th>
							<th className="px-4 py-2 border text-center w-[100px] truncate">
								PRECIO VENTA UND
							</th>
							<th className="px-4 py-2 border text-center truncate">
								ACCIONES
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((product) => {
							return (
								<tr key={product.id_producto} className=" border">
									<td className="px-4 py-2 border text-center max-w-xs">
										{product.id_producto}
									</td>
									<td className="px-4 py-2 border text-center w-[150px] truncate">
										{product.nombre_producto}
									</td>
									<td className="px-4 py-2 border text-center w-[100px] truncate">
										{product.cantidad}
									</td>
									<td className="px-4 py-2 border text-center w-[100px] truncate">
										{product.precio_venta}
									</td>
									<td className="px-4 py-2 border text-center w-[100px]">
										<div className=" flex justify-center items-center w-full">
											<Link
												to={`./detail/${product.id_producto}`}
												className="w-[100px]"
												aria-label="Lista producto completo"
												title="Lista producto completo"
											>
												<span className="w-full underline">detalles</span>
											</Link>
											<Link
												to={`./modificar-producto/${product.id_producto}`}
												className="w-[100px] pl-5 flex"
												aria-label="Editar producto"
												title="Editar producto"
											>
												<span className="w-full pl-5 text-blue-600">
													<AiFillEdit />
												</span>
											</Link>
											<Link
												to={`./eliminar-producto/${product.id_producto}`}
												className="w-[100px] pl-5 flex justify-center items-center"
												aria-label="Eliminar producto"
												title="Eliminar producto"
											>
												<span className="w-full pl-5 text-red-600 ">
													<AiFillDelete />
												</span>
											</Link>
										</div>
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
