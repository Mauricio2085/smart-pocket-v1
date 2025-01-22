import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

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
	console.log("Categorias: ", categories);
	return (
		<section className=" hidden w-full sm:w-full border-b border-slate-500 lg:py-12 lg:flex lg:flex-col lg:flex-wrap drop-shadow-md bg-yellow-100 ">
			<h1 className=" font-DynaPuff font-semibold text-lg m-auto pb-5">
				Categorias
			</h1>
			<section className=" flex flex-col sm:flex-row sm:flex-wrap md:flex-row lg:flex-row lg:justify-between lg:px-36 border-slate-500 mt-8 drop-shadow-md ">
				{categories.map((cat) => {
					const colorRounded = {
						suave: "bg-cyan-500",
						fuerte: "bg-blue-500",
					};
					return (
						<div
							key={cat.id_categoria}
							className=" font-DynaPuff text-sm flex flex-col items-center lg:justify-between "
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
										className="font-light font-mono object-contain"
										alt={`Imagen de ${cat.nombre_categoria}`}
									></img>
								</div>
							</div>
						</div>
					);
				})}
			</section>
		</section>
	);
}

export { SmartCategories };
