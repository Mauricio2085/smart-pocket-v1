import axios from "axios";

const uploadToCloudinary = async (file) => {
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	// 1️⃣ Solicitar la firma segura al backend
	const signatureResponse = await axios.get(`${API_URL}/get-signature`);
	console.log("Respuesta del backend: ", signatureResponse.data);
	const { timestamp, signature, api_key } = await signatureResponse.data;

	// 2️⃣ Crear el FormData con la firma obtenida
	const formData = new FormData();
	formData.append("file", file);
	formData.append("api_key", api_key);
	formData.append("timestamp", timestamp);
	formData.append("signature", signature);

	// 3️⃣ Subir la imagen a Cloudinary
	const response = await axios.post(
		"https://api.cloudinary.com/v1_1/smartpocket/image/upload",
		formData
	);
	const data = await response.data;
	console.log(data.secure_url);
	return data.secure_url; // URL de la imagen subida
};

export { uploadToCloudinary };
