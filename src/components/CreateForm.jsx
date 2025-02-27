import { useForm } from "react-hook-form";
import axios from "axios";
import { uploadToCloudinary } from "../utils/handleUpload";

const CreateForm = () => {
	const { register, handleSubmit } = useForm();
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

	const useCleaner = () => {
		const cleanerText = (text) => text.trim().toLowerCase();
		const toBoolean = (input) => cleanerText(input) === "si";

		return { cleanerText, toBoolean };
	};

	const { cleanerText, toBoolean } = useCleaner();

	const onSubmit = async (data) => {
		const image = data.imagen_producto[0];
		const imageUrl = await uploadToCloudinary(image);
		console.log("Imagen url: ", imageUrl);
		// const valueToClean = [
		// 	"nombre_producto",
		// 	"imagen_producto",
		// 	"propietario",
		// 	"nombre_comercial",
		// ];
		// const valueToBoolean = ["disponible", "destacado"];

		const cleanData = {
			nombre_producto: cleanerText(data.nombre_producto),
			imagen_producto: imageUrl,
			descripcion: data.descripcion,
			especificaciones: data.especificaciones,
			categoria_id: data.categoria_id,
			cantidad: data.cantidad,
			costo_unitario: data.costo_unitario,
			porcentaje_utilidad: data.porcentaje_utilidad,
			disponible: toBoolean(data.disponible),
			destacado: toBoolean(data.destacado),
			propietario: cleanerText(data.propietario),
			nombre_comercial: cleanerText(data.nombre_comercial),
			precio_comercial: data.precio_comercial,
		};
		const response = await axios.post(`${API_URL}/crear-producto`, cleanData);
		const rta = response.data;
		console.log(rta);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="bg-yellow-50 w-full flex flex-col shadow-md"
		>
			<label className=" text-sm font-bold mb-1 ">Nombre</label>
			<input
				{...register("nombre_producto")}
				type="text"
				placeholder="Nombre del producto"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<label className=" text-sm font-bold mb-1 ">Imagen del producto</label>
			<input
				{...register("imagen_producto")}
				type="file"
				placeholder="Imagen del producto"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<label className=" text-sm font-bold mb-1">Descripción</label>
			<textarea
				{...register("descripcion")}
				rows="10"
				cols="50"
				type="text"
				placeholder="Descripción del producto"
				className="bg-cyan-50 h-32 rounded-md mb-6 pl-3 focus:ring-2 focus:ring-cyan-500 outline-none"
			/>

			<label className=" text-sm font-bold mb-1">Especificaciones</label>
			<textarea
				{...register("especificaciones")}
				rows="10"
				cols="50"
				type="text"
				placeholder="Especificaciones del producto"
				className="bg-cyan-50 rounded-md h-32 mb-6 pl-3 focus:ring-2 focus:ring-cyan-500 outline-none"
			/>
			<label className=" text-sm font-bold mb-1 ">Categoria</label>
			<input
				{...register("categoria_id")}
				type="number"
				placeholder="Nombre del producto"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>

			<label className=" text-sm font-bold mb-1">Cantidad</label>
			<input
				{...register("cantidad")}
				type="number"
				placeholder="Cantidad del producto"
				className="bg-cyan-50 rounded-md h-9 mb-6 pl-3 focus:ring-2 focus:ring-cyan-500 outline-none"
			/>
			<label className=" text-sm font-bold mb-1 ">Costo unitario</label>
			<input
				{...register("costo_unitario")}
				type="number"
				placeholder="Costo unitario"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<label className=" text-sm font-bold mb-1 ">Porcentaje utilidad</label>
			<input
				{...register("porcentaje_utilidad")}
				type="number"
				placeholder="Nombre del producto"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<label className=" text-sm font-bold mb-1 ">Disponible</label>
			<input
				{...register("disponible")}
				type="text"
				list="boolean-options"
				placeholder="disponible"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<datalist id="boolean-options">
				<option value="si" />
				<option value="no" />
			</datalist>
			<label className=" text-sm font-bold mb-1 ">Destacado</label>
			<input
				{...register("destacado")}
				type="boolean"
				placeholder="destacado"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<label className=" text-sm font-bold mb-1 ">Propietario</label>
			<input
				{...register("propietario")}
				type="text"
				placeholder="destacado"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<label className=" text-sm font-bold mb-1 ">Nombre comercial</label>
			<input
				{...register("nombre_comercial")}
				type="text"
				placeholder="nombre comercial"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>
			<label className=" text-sm font-bold mb-1 ">Precio comercial</label>
			<input
				{...register("precio_comercial")}
				type="number"
				placeholder="precio comercial"
				className=" mb-6 h-9 rounded-md bg-cyan-50 text-xs pl-3 focus:ring-2 focus:ring-cyan-500 outline-none "
			/>

			<button
				type="submit"
				className=" my-3 bg-cyan-500 rounded-md border-0 text-white w-full cursor-pointer text-base font-bold h-10 "
			>
				Crear producto
			</button>
		</form>
	);
};

export { CreateForm };
