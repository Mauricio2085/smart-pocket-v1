import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Card } from "./Card";
import { Link } from "react-router-dom";

const ProductCarousel = ({ data }) => {
	let cardOnCarousel = true;
	return (
		<section className="w-full px-5 xl:px-36 flex flex-col items-center justify-center lg:my-16 font-DynaPuff font-semibold ">
			<h1 className=" my-8 md:my-20 px-5 xl:px-36 text-center font-DynaPuff text-[1.7rem] md:text-[2.2rem] 2xl:text-[3.5rem] ">
				Nuestros productos destacados
			</h1>
			<Swiper
				effect="coverflow"
				coverflowEffect={{
					depth: 100,
					rotate: 50,
					stretch: 0,
					slideShadows: true,
					modifier: 1,
				}}
				breakpoints={{
					0: { slidesPerView: 1 },
					1024: { slidesPerView: 2, spaceBetween: 5 },
				}}
				pagination={{ clickable: true }}
				autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay
				modules={[Pagination, Autoplay, EffectCoverflow]}
				className="w-full 2xl:w-3/4 px-8 mb-8 md:my-8 lg:my-20 flex flex-col 2xl:p-0 "
			>
				{data.map((product) => {
					return (
						<SwiperSlide key={product.id_producto}>
							<Link
								to={`../../productos/product-detail/${product.id_producto}`}
							>
								<Card
									descripcionProducto={product.descripcion}
									imagenProducto={product.imagen_producto}
									nombreProducto={product.nombre_producto}
									precioOferta={product.precio_venta}
									precioVenta={product.precio_venta}
									cardOnCarousel={cardOnCarousel}
								/>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export { ProductCarousel };
