import { useAuth } from "../context/AuthContex";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateForm } from "../components/UpdateForm";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

const UpdateProductsPage = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const { productId } = useParams();
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const { data, loading, error } = useFetch(
		`${API_URL}/admin/detail/${productId}`
	);

	if (!!loading) return <Loading />;
	if (!!error) return <Error />;

	const product = data.product[0];
	console.log(product);
	return (
		<>
			<section className=" w-full h-20 px-5 flex flex-col items-center justify-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1 className="mx-auto">Actualizar producto</h1>
			</section>
			<section className=" w-full h-10 px-5 md:px-20 lg:px-36 flex justify-end items-center font-DynaPuff text-sm m-auto bg-gradient-to-r from-cyan-500 to-blue-500">
				<button
					onClick={() => {
						navigate("/admin");
					}}
					className="w-40 h-8 border border-yellow-100 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500"
				>
					Panel de control
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
			<div className=" relative px-8 md:px-40 py-10">
				<UpdateForm product={product} />
			</div>
		</>
	);
};

export { UpdateProductsPage };
