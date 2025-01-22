import { useFetch } from "../useFetch/useFetch";
import { useEffect } from "react";
import { SmartHeader } from "../SmartHeader";
import { SmartNav } from "../SmartNav";
import { SmartCategories } from "../SmartCategories";
import { Footer } from "../Footer";
import { Main } from "../Main";
import { SmartIcons } from "../SmartIcon";
import "./App.css";
import { SmartJumbo } from "../SmartJumbo";
import { SmartPublic } from "../SmartPublic";
import { Card } from "../Card";

const products = [
	{
		Disponible: true,
		name: "Cuido",
		image: "imagen",
		normalPrice: 250000,
		Oferta: 90000,
	},
	{
		Disponible: true,
		name: "Cuido",
		image: "imagen",
		normalPrice: 250000,
		Oferta: 90000,
	},
	{
		Disponible: true,
		name: "Cuido",
		image: "imagen",
		normalPrice: 250.0,
		Oferta: 90000,
	},
	{
		Disponible: true,
		name: "Cuido",
		image: "imagen",
		normalPrice: 250000,
		Oferta: 90000,
	},
	{
		Disponible: true,
		name: "Cuido",
		image: "imagen",
		normalPrice: 250000,
		Oferta: 90000,
	},
	{
		Disponible: true,
		name: "Cuido",
		image: "imagen",
		normalPrice: 250000,
		Oferta: 90000,
	},
	{
		Disponible: true,
		name: "Cuido",
		image: "imagen",
		normalPrice: 250000,
		Oferta: 90000,
	},
];

const App = () => {
	return (
		<>
			<SmartHeader />
			<Main>
				<SmartCategories />
				<SmartPublic>
					<Card />
				</SmartPublic>
			</Main>
			<Footer />
		</>
	);
};

export { App };
