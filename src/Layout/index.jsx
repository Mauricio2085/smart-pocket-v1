import { SmartHeader } from "../SmartHeader";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import { Main } from "../Main";

const Layout = () => {
	return (
		<>
			<SmartHeader />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export { Layout };
