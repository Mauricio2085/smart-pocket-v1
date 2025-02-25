import React from "react";
import { SmartForm } from "../components/SmartForm";
import { useAuth } from "../context/AuthContex";

const LoginPage = () => {
	const { user } = useAuth();
	console.log("Este es el usuario actual: ", user);
	return (
		<>
			<section className="w-full h-screen flex justify-center items-center">
				<SmartForm />
			</section>
		</>
	);
};

export { LoginPage };
