import { useQueryForWp } from "../hooks/useQueryForWp";
import React from "react";
import { formattedAmount } from "../utils/formattedAmount";

const ProductCard = ({
	idProducto,
	nombreProducto,
	imagenProducto,
	precioVenta,
	precioOferta,
	descripcionProducto,
	especificacionesProducto,
}) => {
	const queryWp = useQueryForWp();

	return (
		<>
			<div
				key={idProducto}
				className="my-8 flex-col bg-white xl:px-40 2xl:px-80"
			>
				<div className="w-full rounded-2xl flex flex-col sm:grid sm:grid-cols-2 sm:gap-6 border border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-gradient-to-br from-white to-slate-50">
					<div className="w-full flex justify-center sm:order-1 sm:row-span-3 bg-slate-100 rounded-2xl p-4 sm:rounded-l-2xl">
						<img
							className="w-full h-auto max-w-[300px] object-contain aspect-square rounded-lg hover:scale-105 transition-transform duration-300"
							src={imagenProducto}
							alt="Imagen"
						/>
					</div>
					<div className="w-full flex flex-col justify-between order-1 sm:order-2 col-span-1">
						<p className="mt-6 px-4 text-xl md:text-[28px] 0.5xl:text-3xl 3xl:text-[36px] font-DynaPuff font-semibold text-gray-900">
							{nombreProducto}
						</p>
					</div>
					<div className="mt-6 px-4 text-sm md:text-xl flex flex-col justify-between w-full order-3">
						<div className="flex justify-between w-full gap-4">
							<div className="flex flex-col">
								<p className="md:text-sm font-DynaPuff font-medium text-gray-600 uppercase tracking-wide text-xs">
									Precio normal
								</p>
								<p className="font-DynaPuff font-extralight line-through text-red-500 text-lg md:text-2xl">
									{formattedAmount(precioVenta)}
								</p>
							</div>
							<div className="flex flex-col text-right">
								<p className="md:text-sm font-DynaPuff font-medium text-gray-600 uppercase tracking-wide text-xs">
									Oferta
								</p>
								<p className="font-DynaPuff font-bold text-cyan-500 text-lg md:text-2xl">
									{formattedAmount(precioOferta)}
								</p>
							</div>
						</div>
					</div>
					<div className="w-full my-6 order-4 md:col-span-1 md:col-start-2 lg:pr-4 px-4">
						<button
							className="w-full h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl font-DynaPuff md:text-md font-semibold text-white shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-cyan-700 active:scale-95 transition-all duration-200"
							onClick={() =>
								queryWp(
									nombreProducto,
									descripcionProducto,
									precioOferta,
									imagenProducto
								)
							}
						>
							Consultar vía Whatsapp
						</button>
					</div>
				</div>
				<div className="w-full mt-8 flex flex-col lg:flex-row lg:gap-6">
					<div className="w-full px-0 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-gradient-to-br from-white to-slate-50">
						<div className="px-6 pt-6">
							<h1 className="font-DynaPuff font-semibold md:text-[22px] text-gray-900">
								Descripción del producto
							</h1>
						</div>
						<p className="px-6 pb-6 pt-4 font-DynaPuff text-xs md:text-[16px] whitespace-pre-line leading-relaxed text-gray-700">
							{descripcionProducto}
						</p>
					</div>
					<div className="w-full px-0 rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-gradient-to-br from-white to-slate-50">
						<div className="px-6 pt-6">
							<h1 className="font-DynaPuff font-semibold md:text-[22px] text-gray-900">
								Especificaciones del producto
							</h1>
						</div>
						<p className="px-6 pb-6 pt-4 font-DynaPuff text-xs md:text-[16px] whitespace-pre-line leading-relaxed text-gray-700">
							{especificacionesProducto}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export { ProductCard };
