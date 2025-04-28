import { NavLink } from "react-router-dom";

const MobileMenu = ({ visibility, setVisibility }) => {
	return (
		<section
			className={`w-full h-screen fixed transition-transform duration-700 ease-in-out ${
				visibility ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
			} z-10 absolute inset-0 top-[172px] md:top-[220px] flex flex-col items-start justify-start bg-cyan-500 bg-opacity-50 lg:hidden`}
		>
			<div className="w-80 border-y-2 border-r-2 rounded-br-md px-5 absolute top-0 left-0 flex flex-col items-start justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
				<h1 className=" mt-5 font-DynaPuff font-medium">Categorias</h1>
				<ul className="w-full my-5 flex flex-col font-DynaPuff text-white">
					<NavLink
						to={`../categorias/aseo/1`}
						className={({ isActive }) =>
							isActive ? "text-yellow-100 font-bold" : "text-white"
						}
						onClick={() => setVisibility(false)}
					>
						<li className="w-full hover:text-yellow-100 hover:scale-110">
							Aseo
						</li>
					</NavLink>
					<NavLink
						to={`../categorias/ferreteria/2`}
						className={({ isActive }) =>
							isActive ? "text-yellow-100 font-bold" : "text-white"
						}
						onClick={() => setVisibility(false)}
					>
						<li className="w-full hover:text-yellow-100 hover:scale-110">
							Ferretería
						</li>
					</NavLink>
					<NavLink
						to={`../categorias/jugueteria/3`}
						className={({ isActive }) =>
							isActive ? "text-yellow-100 font-bold" : "text-white"
						}
						onClick={() => setVisibility(false)}
					>
						<li className="w-full transition delay-150 duration-500 ease-in-out hover:scale-75">
							Juguetería
						</li>
					</NavLink>
					<NavLink
						to={`../categorias/mascotas/4`}
						className={({ isActive }) =>
							isActive ? "text-yellow-100 font-bold" : "text-white"
						}
						onClick={() => setVisibility(false)}
					>
						<li className="w-full transition delay-150 duration-500 ease-in-out hover:scale-110">
							Mascotas
						</li>
					</NavLink>
					<NavLink
						to={`../categorias/hogar/5`}
						className={({ isActive }) =>
							isActive ? "text-yellow-100 font-bold" : "text-white"
						}
						onClick={() => setVisibility(false)}
					>
						<li className="w-full transition delay-150 duration-500 ease-in-out hover:scale-110">
							Hogar
						</li>
					</NavLink>
					<NavLink
						to={`../categorias/electrodomesticos/6`}
						className={({ isActive }) =>
							isActive ? "text-yellow-100 font-bold" : "text-white"
						}
						onClick={() => setVisibility(false)}
					>
						<li className="w-full transition delay-150 duration-500 ease-in-out hover:scale-110">
							Electrodomésticos
						</li>
					</NavLink>
					<NavLink
						to={`../categorias/accesorios/7`}
						className={({ isActive }) =>
							isActive ? "text-yellow-100 font-bold" : "text-white"
						}
						onClick={() => setVisibility(false)}
					>
						<li className="w-full transition delay-150 duration-500 ease-in-out hover:scale-110">
							Accesorios
						</li>
					</NavLink>
				</ul>
			</div>
		</section>
	);
};

export { MobileMenu };
