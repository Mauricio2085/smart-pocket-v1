import loadingImage from "../assets/Smart_Pocket_V2_Uso_general_800x800px.png";

const LoadingImage = () => {
	return (
		<img
			src={loadingImage}
			className="w-1/2 lg:w-[30%]"
			alt="Smart Pocket icon"
		/>
	);
};

export { LoadingImage };
