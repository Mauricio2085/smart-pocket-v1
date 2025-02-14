import { SmartIcons } from "./SmartIcon";
import footerWhatsapp from "../assets/whatsapp.png";
import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const Footer = () => {
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const { data } = useFetch(`${API_URL}/api/v1/whatsapp-number`);
	const whpUrl = `https://wa.me/${data.phone}?text=Hola como estás?`;
	console.log(data);
	return (
		<footer className="w-full flex flex-col justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
			<div className="w-full h-40 px-5 flex justify-between lg:flex md:px-20 md:py-16 lg:px-36 lg:py-16 md:h-80">
				<div className="w-40 md:w-72 flex justify-center items-center lg:items-start">
					<SmartIcons iconType={"footer"} />
				</div>
				<div className="hidden md:flex flex-col items-start md:40 xl:mr-60">
					<h2 className="text-lg font-DynaPuff font-medium">Categorias</h2>
					<ul className="text-white text-md font-DynaPuff">
						<Link to={"../categorias/aseo/1"}>
							<li className="mt-2">Aseo</li>
						</Link>
						<Link to={"../categorias/ferreteria/2"}>
							<li className="mt-2">Ferretería</li>
						</Link>
						<Link to={"../categorias/juguetería/3"}>
							<li className="mt-2">Juguetería</li>
						</Link>
						<Link to={"../categorias/mascotas/4"}>
							<li className="mt-2">Mascotas</li>
						</Link>
						<Link to={"../categorias/hogar/5"}>
							<li className="mt-2">Hogar</li>
						</Link>
						<Link to={"../categorias/electrodomesticos/6"}>
							<li className="mt-2">Electrodomésticos</li>
						</Link>
					</ul>
				</div>
				<div className="w-7 lg:w-11 m-10 lg:mr-20 flex self-center ">
					<button onClick={() => window.open(whpUrl)}>
						<img src={footerWhatsapp} alt="Logo de smart Pocket" />
					</button>
				</div>
			</div>
			<section className="w-full h-6 flex justify-center items-center bg-blue-700">
				<p className="text-white text-xs sm:text-sm font-DynaPuff">
					Derechos reservados 2025
				</p>
			</section>
		</footer>
	);
};

export { Footer };
