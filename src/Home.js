import React from "react";
import { SmartCategories } from "./SmartCategories";
import { SmartPublic } from "./SmartPublic";
import { Card } from "./Card";
import { Main } from "./Main";

const Home = () => {
	return (
		<>
			<SmartCategories />
			<SmartPublic>
				<Card />
			</SmartPublic>
		</>
	);
};

export { Home };
