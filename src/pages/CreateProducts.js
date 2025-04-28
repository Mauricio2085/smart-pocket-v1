import { useAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { CreateForm } from "../components/CreateForm";

const CreateProducts = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	return (
		<>
			<section className=" w-full h-20 px-5 flex flex-col items-center justify-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1 className="mx-auto">Crear producto</h1>
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
			<div class=" relative px-8 md:px-40 py-10">
				<CreateForm />
			</div>
		</>
	);
};

export { CreateProducts };
