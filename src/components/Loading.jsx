import { SmartIcons } from "./SmartIcon";

const Loading = () => {
	return (
		<div
			className="w-screen lg:h-screen animate-pulse flex flex-col items-center justify-center"
			style={{
				height: "calc(100vh - 22.7rem)",
			}}
		>
			<SmartIcons iconType="loading" />
		</div>
	);
};

export { Loading };
