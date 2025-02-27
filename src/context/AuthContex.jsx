import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		// Recuperar el usuario almacenado en localStorage
		const savedUser = localStorage.getItem("user");
		return savedUser ? JSON.parse(savedUser) : null;
	});
	const [token, setToken] = useState(localStorage.getItem("token") || null);

	// Cargar usuario desde el token (si existe)
	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			setToken(storedToken); // Actualiza el estado del token // Restablece el token en el estado
			axios
				.get(`${API_URL}/api/v1/profile`, {
					headers: { Authorization: `Bearer ${storedToken}` },
				})
				.then((response) => {
					setUser(response.data.user);
					localStorage.setItem("user", JSON.stringify(response.data.user));
				})
				.catch(() => {
					localStorage.removeItem("user"); //Limpia el usuario de localStorage si hay error
					setUser(null); // Si el token es inválido, limpiamos usuario
				});
		}
	}, [token]);

	// Función para iniciar sesión
	const login = async (data) => {
		try {
			const response = await axios.post(`${API_URL}/api/v1/login`, data);
			const { token, user } = response.data;

			// Guardar el token en localStorage y actualizar el estado
			localStorage.setItem("token", token);
			setToken(token);
			setUser(user);
		} catch (error) {
			console.error(
				"Error de autenticación",
				error.response?.data || error.message
			);
		}
	};

	// Función para cerrar sesión
	const logout = () => {
		localStorage.removeItem("token");
		setToken(null);
		setUser(null);
		localStorage.removeItem("user"); //Limpia el usuario de localStorage después de logout
		console.log("Usuario deslogeado: ", user);
	};

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, useAuth };
