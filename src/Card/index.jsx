import { useEffect, useState } from "react";

const Card = () => {
	const [productos, setProductos] = useState([]);

	const getProductos = async () => {
		const response = await fetch("http://localhost:5000/api/v1/productos");
		const data = await response.json();
		setProductos(data);
		console.log(data);
	};

	useEffect(() => {
		getProductos();
	}, []);

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
			<section className="w-full px-8 grid xl:grid-cols-3seeeeh xl:gap-6 border-slate-100 md:my-8 drop-shadow-md ">
				{productos.map((product, index) => {
					return (
						<div
							key={product.id_producto}
							className=" w-full flex-col self-center bg-slate-100 border"
						>
							<div className="w-full h-full">
								<img
									className=" object-contain h-40 m-auto"
									src={product.imagen_producto}
									alt="Imagen"
								/>
							</div>
							<div className="h-1/2 flex flex-col justify-between">
								<p className=" p-2 text-lg">{product.nombre_producto}</p>
								<p className=" p-2 text-sm">Disponible</p>
								<div className="flex flex-col justify-between w-full">
									<div className="flex justify-between w-full">
										<p className=" p-2 text-[12px]">Precio normal</p>
										<p className=" p-2 text-[12px]">Oferta</p>
									</div>
									<div className="flex flex-col">
										<div className="flex justify-between w-full">
											<p className=" p-2 text-[12px]">
												{formattedAmount(product.precio_venta)}
											</p>
											<p className=" p-2 text-[12px]">
												{formattedAmount(product.precio_venta)}
											</p>
										</div>
									</div>
								</div>
								<button className="bg-cyan-500 w-full h-10">
									Agregar al carrito
								</button>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export { Card };
