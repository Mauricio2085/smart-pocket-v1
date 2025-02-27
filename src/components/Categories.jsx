import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";

const Categories = () => {
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const { data, loading, error } = useFetch(`${API_URL}/categorias`);
	console.log(API_URL);
	console.log(data);
	if (!!loading) return <Loading />;
	if (!!error) return <h1>Error</h1>;

	return (
		<section className=" hidden drop-shadow-md w-full border-b border-slate-500 lg:py-12 lg:flex lg:flex-col lg:flex-wrap md:px-20 lg:px-36 bg-yellow-100 ">
			<h1 className=" font-DynaPuff font-semibold text-xl m-auto">
				Categorias
			</h1>
			<section className=" hidden md:grid md:grid-cols-3 md:gap-2 border-slate-500 md:my-8 drop-shadow-md ">
				{data.map((cat) => {
					const colorRounded = {
						suave: "bg-cyan-500",
						fuerte: "bg-blue-500",
					};
					return (
						<div
							key={cat.id_categoria}
							className=" mt-5 font-DynaPuff text-base flex flex-col items-center lg:justify-between "
						>
							<h3 className=" mb-4">{cat.nombre_categoria}</h3>
							<Link
								to={`categorias/${cat.nombre_categoria}/${cat.id_categoria}`}
							>
								<div
									className={`w-44 h-44 rounded-[50%] ${
										cat.id_categoria % 2 === 0
											? colorRounded.suave
											: colorRounded.fuerte
									} flex justify-center items-center hover:shadow-cyan-500/50 hover:shadow-md transition delay-150 duration-500 ease-in-out hover:scale-110`}
								>
									<div className="w-40 h-40 rounded-[50%] overflow-hidden">
										<img
											src={cat.imagen_categoria}
											className="font-light text-lg w-max object-fill"
											alt={`Imagen de ${cat.nombre_categoria}`}
										/>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</section>
		</section>
	);
};

export { Categories };
