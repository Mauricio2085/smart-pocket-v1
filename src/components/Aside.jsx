import React from "react";
import { SmartIcons } from "./SmartIcon";

const Aside = () => {
	return (
		<aside className="flex-col w-[30%] h-[530px] pl-2 pt-2 pb-3 rounded-lg">
			<section className=" rounded-lg ">
				<div className="h-14 bg-sky-300 border-indigo-400 rounded-lg flex items-center p-2">
					<div className="w-1/3 ">
						<SmartIcons />
					</div>
					<div className="w-2/3 text-lg text-center align-middle">Inicio</div>
				</div>
				<div className="bg-sky-300 rounded-b-lg rounded-t-lg flex items-center p-2 mt-1 h-14">
					<div className="w-1/3 ">
						<SmartIcons />
					</div>
					<div className="w-2/3 text-lg text-center align-middle">
						Buscar productos
					</div>
				</div>
				<div className="h-14 bg-sky-300 rounded-b-lg rounded-t-lg flex items-center p-2 mt-1">
					<div className="w-1/3 ">
						<SmartIcons />
					</div>
					<div className="w-2/3 text-lg text-center align-middle">
						Categorias
					</div>
				</div>
				<div className="h-14 bg-sky-300 rounded-b-lg rounded-t-lg flex items-center p-2 mt-1">
					<div className="w-1/3 ">
						<SmartIcons />
					</div>
					<div className="w-2/3 text-lg text-center align-middle">
						Promociones
					</div>
				</div>
			</section>
			<section className="flex-col h-1/2 rounded-lg bg-sky-300 mt-2">
				<div className="h-9 px-2 bg-sky-300">Destacados</div>
				<div className="h-4/5 bg-white m-1"></div>
			</section>
		</aside>
	);
};

export { Aside };
