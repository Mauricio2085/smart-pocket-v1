import React from "react";

const Card = ({
	idProducto,
	nombreProducto,
	imagenProducto,
	precioVenta,
	precioOferta,
}) => {
	const formattedAmount = (amount) => {
		return new Intl.NumberFormat("es-CO", {
			style: "currency",
			currency: "COP",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	};

	return (
		<>
			<div
				key={idProducto}
				className=" w-full mt-5 flex-col self-center bg-slate-100 border"
			>
				<div className="w-full h-full">
					<img
						className="w-full h-auto max-w-[300px] object-contain aspect-square rounded-lg"
						src={imagenProducto}
						alt="Imagen"
					/>
				</div>
				<div className="h-1/2 p-2 flex flex-col justify-between">
					<p className=" text-sm">{nombreProducto}</p>
					<p className=" text-sm text-green-400">Disponible</p>
					<div className="flex flex-col justify-between w-full">
						<div className="flex justify-between w-full">
							<p className=" text-[12px]">Precio normal</p>
							<p className=" text-[12px]">Oferta</p>
						</div>
						<div className=" p-2 flex flex-col">
							<div className="flex justify-between w-full">
								<p className=" text-[12px]">{formattedAmount(precioVenta)}</p>
								<p className=" text-[12px]">{formattedAmount(precioOferta)}</p>
							</div>
						</div>
					</div>
					<button className="bg-cyan-500 w-full h-10">
						Consultar producto
					</button>
				</div>
			</div>
		</>
	);
};

export { Card };
