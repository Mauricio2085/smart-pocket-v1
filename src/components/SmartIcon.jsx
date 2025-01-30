import { ReactComponent as SmartLogo } from "../assets/Smart_Pocket_V2_Logo_Web_200x40px.svg";
import { LoadingImage } from "./LoadingImage";

const SmartIcons = ({ iconType }) => {
	if (iconType === "loading") {
		return <LoadingImage />;
	}
	return (
		<div className="w-60">
			<SmartLogo />
		</div>
	);
};

export { SmartIcons };
