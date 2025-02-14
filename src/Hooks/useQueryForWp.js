import { useCallback } from "react";
import { useFormattedAmount } from "./useFormattedAmount";
import { useFetch } from "./useFetch";

const useQueryForWp = () => {
	const formatAmount = useFormattedAmount;
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const { data } = useFetch(`${API_URL}/api/v1/whatsapp-number`);
	console.log("Number_API:", data);
	return useCallback(
		(nombreProducto, descripcionProducto, precioOferta, imagenProducto) => {
			console.log("Producto:", nombreProducto);
			console.log("Descripción:", descripcionProducto);
			console.log("Imagen:", imagenProducto);
			const precio = formatAmount(precioOferta);
			const phoneNumber = data.phone; // Número de destino en formato internacional (57 = Colombia)
			const message = `Hola!%0AQuisiera consultar por el siguiente producto:%0AImagén del producto: ${imagenProducto}%0AProducto: ${nombreProducto}%0ADescripción: ${descripcionProducto}%0A Precio: ${precio}`;

			const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

			console.log("WhatsApp URL:", whatsappUrl);

			window.open(whatsappUrl, "_blank");
		},
		[formatAmount]
	);
};

export { useQueryForWp };
