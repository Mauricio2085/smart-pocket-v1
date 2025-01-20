import { useEffect, useState } from "react";
import "./Card.css";

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

	return (
		<>
			{productos.map((producto) => {
				return (
					<div
						key={producto.id_producto}
						className=" w-72 flex-col self-center bg-cyan-500 border"
					>
						<div className=" h-24">
							<img
								className="w-1/2 object-fill"
								src={producto.imagen_producto}
								alt="Imagen"
							/>
						</div>
						<div className="m-2">
							<p className="text-md">{producto.nombre_producto}</p>
							<div className="flex justify-between w-full">
								<div>
									<p className="text-md">normal price</p>
									<p className="text-md text-slate-200">
										{producto.descripcion}
									</p>
								</div>
								<div>
									<p className="text-md">Oferta</p>
									<p className="text-md">{producto.precio_venta}</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export { Card };
