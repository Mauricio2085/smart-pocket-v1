import React from "react";
import { SmartIcons } from "../SmartIcon";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";

const SmartHeader = () => {
	return (
		<header className=" z-10 md:w-full sm:w-full xl:w-full lg:w-full border-b border-white bg-gradient-to-r from-cyan-500 to-blue-500">
			<nav className=" mx-5 sm:mx-5 xl:mx-36 py-6 xl:py-6 flex flex-col sm:flex sm:flex-col xl:flex xl:flex-col xl:flex-nowrap justify-between xl:justify-between items-start xl:items-center">
				<section className=" w-full md:w-full flex flex-row flex-nowrap md:flex md:flex-row md:justify-between justify-between items-center">
					<div className=" w-10 h-full md:hidden flex justify-center items-center md:justify-center md:items-center">
						<GiHamburgerMenu size={28} fill="#7dd3fc" />
					</div>
					<SmartIcons />
					<div className="">
						<ul className="flex justify-center items-center">
							<li className="">
								<button className=" hidden md:block md:w-28 md:h-10 md:mr-8 md:border md:border-blue-800 md:rounded-lg font-DynaPuff text-sm ">
									Iniciar sesión
								</button>
								<button className=" md:hidden w-10 h-full pr-2 flex justify-center flex-wrap ">
									<VscAccount size={28} fill="#7dd3fc" />
								</button>
							</li>
							<button
								className=" w-10 h-full flex justify-center flex-wrap"
								alt="Carrito de compras"
							>
								<FaShoppingCart size={28} fill="#7dd3fc" />
							</button>
						</ul>
					</div>
				</section>
				<div className=" w-full mt-5 md:mt-5 md:mr-10 lg:mr-10 md:w-[320px] lg:w-[500px] h-8 flex flex-row justify-center items-center bg-slate-200 rounded-lg md:absolute lg:absolute md:top-5 lg:top-5 sm:self-center ">
					<div className="w-8 h-8 flex justify-center items-center focus:outline-dotted">
						<FaSearch size={20} fill="#7dd3fc" />
					</div>
					<input
						type="text"
						placeholder="Encuentra tu producto favorito!"
						className=" bg-slate-200 w-full h-full px-1 font-DynaPuff text-sm rounded-lg focus:outline-none "
					/>
				</div>
			</nav>
		</header>
	);
};

export { SmartHeader };
