import axios from "axios";

const uploadToCloudinary = async (file) => {
	const CLOUDINARY_URL =
		"https://api.cloudinary.com/v1_1/smartpocket/image/upload";

	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	//Solicitar la firma segura al backend
	const signatureResponse = await axios.get(`${API_URL}/get-signature`);
	const { timestamp, signature, api_key } = await signatureResponse.data;
	try {
		//Crear el FormData con la firma obtenida
		const formData = new FormData();
		formData.append("file", file);
		formData.append("api_key", api_key);
		formData.append("timestamp", timestamp);
		formData.append("signature", signature);

		//Subir la imagen a Cloudinary
		const response = await axios.post(CLOUDINARY_URL, formData);
		const result = await response.data;
		const data = result.secure_url;
		console.log(data); // URL de la imagen subida
		return data;
	} catch (error) {
		throw new Error("Error al cargar la imagen!");
	}
};

export { uploadToCloudinary };
