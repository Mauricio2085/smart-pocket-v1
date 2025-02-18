import { useQueryForWp } from "../Hooks/useQueryForWp";
import React from "react";
import { useFormattedAmount } from "../Hooks/useFormattedAmount";

const ProductCard = ({
	idProducto,
	nombreProducto,
	imagenProducto,
	precioVenta,
	precioOferta,
	descripcionProducto,
	especificacionesProducto,
}) => {
	const formattedAmount = useFormattedAmount;

	const queryWp = useQueryForWp();

	return (
		<>
			<div
				key={idProducto}
				className=" my-8 flex-col bg-white xl:px-40 2xl:px-80 "
			>
				<div className="w-full rounded-md flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 border border-slate-100 drop-shadow-md">
					<div className="w-full flex justify-center sm:order-1 sm:row-span-3 ">
						<img
							className="w-full h-auto max-w-[300px] object-contain aspect-square rounded-lg"
							src={imagenProducto}
							alt="Imagen"
						/>
					</div>
					<div className="w-full flex flex-col justify-between order-1 sm:order-2 col-span-1">
						<p className=" mt-5 px-2 text-xl md:text-[28px] 0.5xl:text-3xl 3xl:text-[36px] font-DynaPuff font-medium">
							{nombreProducto}
						</p>
					</div>
					<div className=" mt-5 px-2 text-sm md:text-xl flex flex-col justify-between w-full order-3">
						<div className="flex justify-between w-full">
							<p className=" md:text-md font-DynaPuff font-medium">
								Precio normal
							</p>
							<p className=" md:text-md font-DynaPuff font-medium">Oferta</p>
						</div>
						<div className=" mt-2 flex flex-col justify-between">
							<div className=" flex justify-between w-full ">
								<p className=" font-DynaPuff font-extralight ">
									{formattedAmount(precioVenta)}
								</p>
								<p className=" font-DynaPuff ">
									{formattedAmount(precioOferta)}
								</p>
							</div>
						</div>
					</div>
					<div className="w-full h-10 my-5 order-4 md:col-span-1 md:col-start-2 lg:pl-20 rounded-md">
						<button
							className=" w-full h-full bg-cyan-500 rounded-md font-DynaPuff md:text-md font-medium"
							onClick={() =>
								queryWp(
									nombreProducto,
									descripcionProducto,
									precioOferta,
									imagenProducto
								)
							}
						>
							Consultar producto vía Whatsapp
						</button>
					</div>
				</div>
				<div className="w-full mt-5 flex flex-col lg:flex-row lg:gap-2">
					<div className=" mt-5 px-2 w-full border border-slate-100 drop-shadow-md">
						<h1 className="mt-5 font-DynaPuff font-medium md:text-[22px] ">
							Descripción del producto
						</h1>
						<p className=" my-5 font-DynaPuff text-xs md:text-[16px]">
							{descripcionProducto}
						</p>
					</div>
					<div className="mt-5 px-2 w-full border border-slate-100 drop-shadow-md">
						<h1 className="mt-5 font-DynaPuff font-medium md:text-[22px]">
							Especificaciones del producto
						</h1>
						<p className=" my-5 font-DynaPuff text-xs md:text-[16px]">
							{especificacionesProducto}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export { ProductCard };
