import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
	const { categoryName, categoryId } = useParams();
	const [productsCategory, setProductsCategory] = useState([]);

	const fetchProductsCategories = async (url) => {
		try {
			const response = await fetch(url);
			// Verifica si la solicitud fue exitosa
			if (!response.ok) {
				throw new Error("Error en la solicitud");
			}

			// Procesa la respuesta (puede ser .json(), .text(), etc.)
			const data = await response.json();
			console.log(data); // Maneja los datos de la respuesta
			setProductsCategory(data);
		} catch (error) {
			console.error("Hubo un problema con la solicitud fetch:", error);
		}
	};

	useEffect(() => {
		if (categoryName && categoryId) {
			fetchProductsCategories(
				`http://localhost:5000/api/v1/categorias/${categoryName}/${categoryId}`
			);
		} else {
			console.error("Faltan parámetros en la URL.");
		}
	}, [categoryName, categoryId]);

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
			<section className=" w-full h-20 flex flex-col items-center bg-yellow-100 font-DynaPuff font-semibold text-xl m-auto">
				<h1>Los mejores productos de {categoryName}</h1>
			</section>
			<section className="w-full px-36 flex font-DynaPuff ">
				<span className=" w-1/4 text-2xl"></span>
				<div className=" w-full flex flex-col items-center">
					<section className="w-full px-8 grid xl:grid-cols-5 xl:gap-6 border-slate-100 md:my-8 drop-shadow-md ">
						{productsCategory.map((product, index) => {
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
					<section className=" lg:h-60 text-2xl">paginacion</section>
				</div>
			</section>
		</>
	);
};

export { CategoryPage };
