import React from "react"
import { SmartIcons } from "../SmartIcon"
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



function SmartHeader() {
    return (
        <header className="w-full border-b border-white bg-gradient-to-r from-cyan-500 to-blue-500">
        <nav className=" mx-36 py-6 flex flex-row justify-between items-center">
            <div className=" w-44 inline content-start"><SmartIcons /></div>
                <div className=" w-[500px] h-8 flex flex-row justify-center items-center bg-slate-200 rounded-lg" >
                    <div className="w-8 h-8 flex justify-center items-center">
                    <FaSearch size={20} fill="#7dd3fc"/>
                    </div>
                    <input type="text" placeholder="Encuentra tu producto favorito!" className=" bg-slate-200 w-full px-1 font-DynaPuff text-sm "/>
                </div>
                <div className="">
                    <ul className="flex justify-center items-center">
                        <li className="">
                            <button className=" w-28 h-10 mr-10 border border-blue-800 rounded-lg font-DynaPuff text-sm">Iniciar sesión</button>
                        </li>
                        <li className=" w-10 h-full" alt="Administrador" ><FaShoppingCart size={24} fill="#7dd3fc"/></li>
                    </ul>
                </div>
        </nav>
    </header>
    )
}

export { SmartHeader };