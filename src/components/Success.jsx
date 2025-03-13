import { useNavigate } from "react-router-dom";

const Success = ({ message, setSuccessMessage }) => {
	const navigate = useNavigate();
	return (
		<section className="w-full h-full text-base md:text-xl lg:text-3xl absolute top-0 left-0 flex bg-slate-500 opacity-90 z-10">
			<div className="w-full p-20 flex flex-col font-DynaPuff bg-cyan-100">
				<h1 className="text-green-500 justify-center items-center mx-auto mb-10 font-medium">
					{message}
				</h1>
				<button
					className="border-yellow-100 border rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 justify-center items-center w-[95px] h-8 mx-auto lg:w-[150px] lg:h-14"
					onClick={() => {
						setSuccessMessage("");
						navigate("/admin");
					}}
				>
					Regresa
				</button>
			</div>
		</section>
	);
};

export { Success };
