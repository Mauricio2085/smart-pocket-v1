import { SmartLogo } from "./SmartLogo";
import { LoadingImage } from "./LoadingImage";
import { FooterImage } from "./FooterImage";

const SmartIcons = ({ iconType }) => {
	return (
		<>
			{iconType === "loading" ? <LoadingImage /> : null}
			{iconType === "footer" ? <SmartLogo /> : null}
			{iconType === "logo" ? <SmartLogo /> : null}
		</>
	);
};

export { SmartIcons };
