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
				className={`w-full mt-8 rounded-md flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 border border-slate-100 drop-shadow-md hover:shadow-yellow-100/50 hover:shadow-md ${paddingCarousel}`}
			>
				<div className="w-full flex justify-center sm:order-1 sm:row-span-3 ">
					<img
						className="w-full h-auto max-w-[300px] object-contain aspect-square rounded-lg"
						src={imagenProducto}
						alt="Imagen"
					/>
				</div>
				<div className="w-full flex flex-col justify-between order-1 sm:order-2 col-span-1">
					<p className=" mt-5 px-2 text-xl md:text-[24px] 3xl:text-[36px] font-DynaPuff font-medium">
						{nombreProducto}
					</p>
				</div>
				<div
					className={`mt-5 px-2 text-sm md:text-[16px] 2xl:text-lg flex flex-col justify-between w-full order-3`}
				>
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
							<p className=" font-DynaPuff ">{formattedAmount(precioOferta)}</p>
						</div>
					</div>
				</div>
				<div
					className={`w-full h-10 mt-5 md:mb-0 order-4 md:col-span-1 md:col-start-2 self-end 0.5xl:pl-20 3xl:pl-30  rounded-md`}
				>
					<button
						className=" w-full h-full bg-cyan-500 rounded-md font-DynaPuff md:text-md font-medium"
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
