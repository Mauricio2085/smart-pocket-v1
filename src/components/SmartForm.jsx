import { useForm } from "react-hook-form";
import { SmartIcons } from "./SmartIcon";
import axios from "axios";

const SmartForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		try {
			const response = await axios.post(
				"http://localhost:5000/api/v1/login",
				data
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="w-80 rounded-lg px-4  text-center bg-cyan-50 ">
			<div className="flex flex-col w-full">
				<div className=" my-3 flex justify-center items-center">
					<SmartIcons iconType="logo" />
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className=" my-2 flex justify-start flex-col font-DynaPuff"
				>
					<label className=" text-sm font-bold mb-1 ">Email addres</label>
					<input
						{...register("correo")}
						type="text"
						placeholder="smart.pocket@example.com"
						className=" mb-6 h-9 rounded-md bg-yellow-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					/>

					<label className=" text-sm font-bold mb-1">Password</label>
					<input
						{...register("contraseña")}
						type="password"
						placeholder="**********"
						className="bg-yellow-50 rounded-md h-9 mb-6 pl-3 focus:ring-2 focus:ring-cyan-500 outline-none"
					/>

					<button
						type="submit"
						className=" my-3 bg-cyan-500 rounded-md border-0 text-white w-full cursor-pointer text-base font-bold h-10 "
					>
						Log in
					</button>
				</form>
				<button className="mb-3 font-DynaPuff">Sign Up</button>
			</div>
		</div>
	);
};

export { SmartForm };
