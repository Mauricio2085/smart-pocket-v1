import React from "react";
import { SmartIcons } from "../SmartIcon";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";

const SmartHeader = () => {
	return (
		<header className="w-full border-b border-white bg-gradient-to-r from-cyan-500 to-blue-500">
			<nav className=" px-5 xl:px-36 py-5 flex flex-col xl:flex-flex-nowrap xl:justify-between ">
				<section className=" flex flex-row flex-nowrap md:flex md:flex-row md:justify-between justify-between items-center">
					<div className=" w-10 h-full xl:hidden flex justify-center items-center md:justify-center md:items-center">
						<GiHamburgerMenu size={28} fill="#7dd3fc" />
					</div>
					<SmartIcons />
					<ul className="flex justify-center items-center">
						<li className="">
							<button className=" hidden xl:block xl:w-28 xl:h-10 xl:mr-8 xl:border xl:border-blue-800 xl:rounded-lg font-DynaPuff text-sm ">
								Iniciar sesión
							</button>
							<button className=" xl:hidden w-10 h-full pr-2 flex justify-center flex-wrap ">
								<VscAccount size={28} fill="#7dd3fc" />
							</button>
						</li>
						<button
							className=" hidden w-10 h-full justify-center flex-wrap"
							alt="Carrito de compras"
						>
							<FaShoppingCart size={28} fill="#7dd3fc" />
						</button>
					</ul>
				</section>
				<div className=" w-full my-5 flex flex-row justify-center items-center h-8 bg-slate-200 rounded-lg xl:w-[500px] xl:absolute xl:top-5 xl:self-center">
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
