import { useState } from "react";
import { SmartIcons } from "./SmartIcon";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	const [visibility, setVisibility] = useState(false);
	const handleSearch = (event) => {
		event.preventDefault();
		if (query.trim()) {
			navigate(`/search/?productName=${encodeURIComponent(query)}`);
		}
	};
	return (
		<>
			<header className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
				<nav className=" px-5 md:px-20 lg:px-36 xl:px-36 py-5 flex flex-col xl:justify-between ">
					<section className=" flex flex-row flex-nowrap md:flex md:flex-row md:justify-between justify-between items-center">
						<div className=" w-10 h-full lg:hidden xl:hidden flex justify-center items-center md:justify-center md:items-center">
							<button onClick={() => setVisibility(!visibility)}>
								<GiHamburgerMenu size={36} fill="#7dd3fc" />
							</button>
						</div>
						<button
							onClick={() => {
								if (visibility) {
									setVisibility(false);
								}
								navigate("/");
							}}
						>
							<SmartIcons iconType="logo" />
						</button>
						<ul className="flex justify-center items-center">
							<li className="">
								<Link to="/login">
									<button className=" hidden xl:block xl:w-28 xl:h-10 xl:mr-8 xl:border xl:border-blue-800 xl:rounded-lg font-DynaPuff text-sm ">
										Iniciar sesión
									</button>
								</Link>
								<button
									className=" xl:hidden w-10 h-full pr-2 flex justify-center flex-wrap "
									onClick={() => navigate("/login")}
								>
									<VscAccount size={36} fill="#7dd3fc" />
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
					<form
						onSubmit={handleSearch}
						className=" w-full my-5 flex flex-row justify-center items-center h-8 bg-slate-200 rounded-lg xl:w-[500px] xl:absolute xl:top-5 xl:self-center"
					>
						<div className="w-8 h-8 flex justify-center items-center focus:outline-dotted">
							<button type="submit">
								<FaSearch size={20} fill="#7dd3fc" />
							</button>
						</div>
						<input
							type="text"
							placeholder="Encuentra tu producto favorito!"
							className=" bg-slate-200 w-full h-full px-1 font-DynaPuff text-sm rounded-lg focus:outline-none "
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</form>
				</nav>
			</header>
			<MobileMenu visibility={visibility} setVisibility={setVisibility} />
		</>
	);
};

export { Header };
