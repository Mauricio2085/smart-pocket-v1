import { SmartIcons } from "./SmartIcon";
import footerWhatsapp from "../assets/whatsapp.png";

const Footer = () => {
	return (
		<footer className="w-full flex flex-col justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
			<div className="w-full h-40 px-5 flex justify-between lg:flex md:px-20 md:py-16 lg:px-36 lg:py-16 md:h-80">
				<SmartIcons iconType={"footer"} />
				<div className="hidden md:flex flex-col items-start md:40 xl:mr-60">
					<h2 className="text-lg font-DynaPuff font-medium">Categorias</h2>
					<ul className="text-white text-md font-DynaPuff">
						<li className="mt-2">Aseo</li>
						<li className="mt-2">Ferretería</li>
						<li className="mt-2">Juguetería</li>
						<li className="mt-2">Mascotas</li>
						<li className="mt-2">Hogar</li>
						<li className="mt-2">Electrodomésticos</li>
					</ul>
				</div>
				<div className="w-7 lg:w-11 m-10 lg:mr-20 flex self-center ">
					<img src={footerWhatsapp} alt="Logo de smart Pocket" />
				</div>
			</div>
			<section className="w-full h-6 flex justify-center items-center bg-blue-700">
				<p className="text-white text-xs sm:text-sm font-DynaPuff">
					Derechos reservados 2021
				</p>
			</section>
		</footer>
	);
};

export { Footer };
