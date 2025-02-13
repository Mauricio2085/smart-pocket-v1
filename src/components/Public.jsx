import React from "react";
import smartSave from "../assets/smart_save.jpg";
import smartBuy from "../assets/smart_buy.jpg";
import smartQuality from "../assets/smart_quality.jpg";
const Public = () => {
	return (
		<section className=" my-8 lg:my-40 flex flex-col items-center justify-center font-DynaPuff ">
			<h1 className="mt-5 font-semibold lg:mt-8 md:text-xl lg:text-[2.5rem]">
				Bienvenidos a Smart Pocket
			</h1>
			<h2 className="mt-2 font-semibold lg:mt-8 md:text-xl lg:text-[2.0rem]">
				Cuida tu bolsillo, piensa smart!
			</h2>
			<section className="w-full mt-20 lg:mt-40 px-5 md:px-20 py-20 flex flex-col md:grid md:grid-cols-3 md:gap-4 2xl:px-36 bg-cyan-100">
				<div className="w-full  flex flex-col items-center justify-center">
					<p className="md:h-[230px] text-[0.9rem] lg:text-[1.2rem] text-center flex flex-col items-center justify-center">
						<strong>¡Ofertas que no encontrarás en otro lugar!</strong>
						<br />
						Productos nuevos y de saldo a precios increíbles. Algunos con
						empaque dañado, pero 100% funcionales. ¡Aprovecha antes de que se
						agoten!
					</p>
					<img
						src={smartSave}
						alt=""
						className="p-4 max-w-[200px] object-contain aspect-square"
					/>
				</div>
				<div className="w-full flex flex-col items-center justify-center">
					<p className="md:h-[230px] text-[0.9rem] lg:text-[1.2rem] text-center flex flex-col items-center justify-center">
						<strong>¡Calidad garantizada a precios imbatibles!</strong>
						<br />
						Compra productos en perfecto estado o con empaque imperfecto, ahorra
						dinero y obtén lo mejor. ¡Porque lo que importa es el producto, no
						la caja!
					</p>
					<img
						src={smartBuy}
						alt=""
						className="p-4 max-w-[200px] object-contain aspect-square"
					/>
				</div>
				<div className="w-full flex flex-col items-center justify-center">
					<p className="md:h-[230px] text-[0.9rem] lg:text-[1.2rem] text-center flex flex-col items-center justify-center">
						<strong>Descuentos Smart para compradores inteligentes!</strong>
						<br />
						Encuentra productos nuevos y de saldo con hasta 70% de descuento.
						¡Cuida tu bolsillo, compra smart!
					</p>
					<img
						src={smartQuality}
						alt=""
						className="p-4 max-w-[200px] object-contain aspect-square"
					/>
				</div>
			</section>
		</section>
	);
};

export { Public };
