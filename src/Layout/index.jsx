import { SmartHeader } from "../SmartHeader";
import { Footer } from "../Footer";

const Layout = (props) => {
	return (
		<>
			<SmartHeader />
			{props.children}
			<Footer />
		</>
	);
};

export { Layout };
