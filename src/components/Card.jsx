import React from "react";
import { formattedAmount } from "../utils/formattedAmount";
import { useNavigate } from "react-router-dom";

const Card = ({
	idProducto,
	nombreProducto,
	imagenProducto,
	precioVenta,
	precioOferta,
	cardOnCarousel,
}) => {
	let paddingCarousel = !!cardOnCarousel ? "2xl:pr-8 md:mt-0" : "";
	const navigate = useNavigate();

	return (
		<>
			<div
				className={`w-full mt-8 rounded-2xl flex flex-col sm:grid sm:grid-cols-2 sm:gap-6 border border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-gradient-to-br from-white to-slate-50 ${paddingCarousel}`}
			>
				<div className="w-full flex justify-center sm:order-1 sm:row-span-3 bg-slate-100 rounded-2xl p-4 sm:rounded-l-2xl">
					<img
						className="w-full h-auto max-w-[300px] object-contain aspect-square rounded-lg hover:scale-105 transition-transform duration-300"
						src={imagenProducto}
						alt="Imagen"
					/>
				</div>
				<div className="w-full flex flex-col justify-between order-1 sm:order-2 col-span-1">
					<p className="mt-6 px-4 text-xl md:text-[24px] 3xl:text-[36px] font-DynaPuff font-semibold text-gray-900">
						{nombreProducto}
					</p>
				</div>
				<div
					className={`mt-6 px-4 text-sm md:text-[16px] 2xl:text-lg flex flex-col justify-between w-full order-3`}
				>
					<div className="flex justify-between w-full gap-4">
						<div className="flex flex-col">
							<p className="md:text-sm font-DynaPuff font-medium text-gray-600 uppercase tracking-wide text-xs">
								Precio normal
							</p>
							<p className="font-DynaPuff font-extralight line-through text-red-500 text-lg md:text-xl">
								{formattedAmount(precioVenta)}
							</p>
						</div>
						<div className="flex flex-col text-right">
							<p className="md:text-sm font-DynaPuff font-medium text-gray-600 uppercase tracking-wide text-xs">
								Oferta
							</p>
							<p className="font-DynaPuff font-bold text-cyan-500 text-lg md:text-xl">
								{formattedAmount(precioOferta)}
							</p>
						</div>
					</div>
				</div>
				<div
					className={`w-full my-6 order-4 md:col-span-1 md:col-start-2 self-end px-4`}
				>
					<button
						className="w-full h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl font-DynaPuff md:text-md font-semibold text-white shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-cyan-700 active:scale-95 transition-all duration-200"
						onClick={() =>
							navigate(`../../productos/product-detail/${idProducto}`)
						}
					>
						Detalles de producto
					</button>
				</div>
			</div>
		</>
	);
};

export { Card };
