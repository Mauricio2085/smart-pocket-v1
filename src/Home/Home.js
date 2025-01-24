import { SmartHeader } from "../SmartHeader";
import { SmartCategories } from "../SmartCategories";
import { Footer } from "../Footer";
import { Main } from "../Main";
import "./Home.css";
import { SmartPublic } from "../SmartPublic";
import { Card } from "../Card";
import { Layout } from "../Layout";

const Home = () => {
	return (
		<>
			<Layout>
				<Main>
					<SmartCategories />
					<SmartPublic>
						<Card />
					</SmartPublic>
				</Main>
			</Layout>
		</>
	);
};

export { Home };
