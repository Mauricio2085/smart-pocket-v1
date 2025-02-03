import { Link } from "react-router-dom";

const MobileMenu = ({ visibility }) => {
	return (
		<section
			className={`w-full h-screen fixed transition-transform duration-1000 ease-in-out ${
				visibility
					? "translate-x-0 opacity-100"
					: "-translate-x-full opacity-80"
			} z-10 absolute inset-0 top-[172px] md:top-[220px] flex flex-col items-start justify-start bg-cyan-500 bg-opacity-50 lg:hidden`}
		>
			<div className="w-80 border-y-2 border-r-2 cyan-500 rounded-br-md px-5 absolute top-0 left-0 flex flex-col items-start justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
				<h1 className=" mt-5 font-DynaPuff font-medium">Categorias</h1>
				<ul className="w-full my-5 flex flex-col font-DynaPuff text-white">
					<Link to={`../categorias/aseo/1`}>
						<li className="w-full ">Aseo</li>
					</Link>
					<Link to={`../categorias/ferreteria/2`}>
						<li className="w-full ">Ferretería</li>
					</Link>
					<Link to={`../categorias/jugueteria/3`}>
						<li className="w-full ">Juguetería</li>
					</Link>
					<Link to={`../categorias/mascotas/4`}>
						<li className="w-full ">Mascotas</li>
					</Link>
					<Link to={`../categorias/hogar/5`}>
						<li className="w-full ">Hogar</li>
					</Link>
					<Link to={`../categorias/electrodomesticos/6`}>
						<li className="w-full ">Electrodomésticos</li>
					</Link>
				</ul>
			</div>
		</section>
	);
};

export { MobileMenu };
