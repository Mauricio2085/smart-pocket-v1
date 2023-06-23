import React from "react"
import { ReactComponent as SmartLogo } from "../Smart_Pocket_V2_Logo_Web_200x40px.svg"
import { RiAdminFill as AdminLogo} from "react-icons/ri"
import './SmartHeader.css'


function SmartHeader({pipi}) {
    return (
    <header className="w-full flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 items-center">
        <div className="w-60"><SmartLogo onClick={() => console.log('Hola')}/></div>
        <nav className="mr-9">
            <ul className="flex space-x-3.5 justify-center items-center">
                <li className="">Sobre nosotros</li>
                <li className="">Contáctanos</li>
                <li alt="Administrador" ><AdminLogo/></li>
            </ul>
        </nav>
    </header>
    )
}

export { SmartHeader };