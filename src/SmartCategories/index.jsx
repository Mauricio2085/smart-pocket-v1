import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function SmartCategories() {
	const [categories, setCategories] = useState([]);

	const fetchCategories = async (url) => {
		try {
			const response = await fetch(url);
			// Verifica si la solicitud fue exitosa
			if (!response.ok) {
				throw new Error("Error en la solicitud");
			}

			// Procesa la respuesta (puede ser .json(), .text(), etc.)
			const data = await response.json();
			console.log(data); // Maneja los datos de la respuesta
			setCategories(data);
		} catch (error) {
			console.error("Hubo un problema con la solicitud fetch:", error);
		}
	};

	useEffect(() => {
		fetchCategories("http://localhost:5000/api/v1/categorias");
	}, []);

	return (
		<section className=" hidden drop-shadow-md w-full border-b border-slate-500 lg:py-12 lg:flex lg:flex-col lg:flex-wrap lg:px-36 bg-yellow-100 ">
			<h1 className=" font-DynaPuff font-semibold text-xl m-auto">
				Categorias
			</h1>
			<section className=" md:grid md:grid-cols-3 md:gap-2 border-slate-500 md:my-8 drop-shadow-md ">
				{categories.map((cat) => {
					const colorRounded = {
						suave: "bg-cyan-500",
						fuerte: "bg-blue-500",
					};
					return (
						<NavLink
							to={`categorias/${cat.nombre_categoria}/${cat.id_categoria}`}
						>
							<div
								key={cat.id_categoria}
								className=" mt-5 font-DynaPuff text-base flex flex-col items-center lg:justify-between "
							>
								<h3 className=" mb-4">{cat.nombre_categoria}</h3>
								<div
									className={`w-44 h-44 rounded-[50%] ${
										cat.id_categoria % 2 === 0
											? colorRounded.suave
											: colorRounded.fuerte
									} flex justify-center items-center`}
								>
									<div className="w-40 h-40 rounded-[50%] overflow-hidden">
										<img
											src={cat.imagen_categoria}
											className="font-light text-lg w-max object-fill"
											alt={`Imagen de ${cat.nombre_categoria}`}
										></img>
									</div>
								</div>
							</div>
						</NavLink>
					);
				})}
			</section>
		</section>
	);
}

export { SmartCategories };
