import { ReactComponent as FooterLogo } from "../assets/Smart_Pocket_V2_Logo_Web_200x40px.svg";

const FooterImage = () => {
	return (
		<div className="w-40 md:w-72 flex shrink-0 justify-center items-center lg:items-start">
			<FooterLogo />
		</div>
	);
};

export { FooterImage };
