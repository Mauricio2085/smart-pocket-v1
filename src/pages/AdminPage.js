import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContex";
// import { Loading } from "../components/Loading";

const AdminPage = () => {
	const { user } = useAuth();

	console.log("Este es el usuario para validación de paginas privadas", user);
	return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export { AdminPage };
