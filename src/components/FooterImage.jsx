import { ReactComponent as FooterLogo } from "../assets/Smart_Pocket_V2_Logo_Web_200x40px.svg";

const FooterImage = () => {
	return (
		<div className="md:w-[12rem] lg:w-72 flex justify-center items-center lg:items-start">
			<FooterLogo />
		</div>
	);
};

export { FooterImage };
