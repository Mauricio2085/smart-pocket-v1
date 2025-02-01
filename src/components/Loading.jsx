import { SmartIcons } from "./SmartIcon";

const Loading = () => {
	return (
		<div className="w-screen h-[calc(100vh-22.3rem)] md:h-[calc(100vh-35.3rem)] lg:md:h-[calc(100vh-27.8rem)] animate-pulse flex flex-col items-center justify-center">
			<SmartIcons iconType={"loading"} />
		</div>
	);
};

export { Loading };
