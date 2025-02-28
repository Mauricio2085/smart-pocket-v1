import { useForm } from "react-hook-form";
import axios from "axios";
import { uploadToCloudinary } from "../utils/handleUpload";
import { useState } from "react";

const CreateForm = () => {
	const { register, handleSubmit } = useForm();
	const [customFileName, setcustomFileName] = useState(
		"Ningún archivo seleccionado"
	);
	const [filePhoto, setfilePhoto] = useState(null);
	const API_URL =
		process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
	const useCleaner = () => {
		const cleanerText = (text) => text.trim().toLowerCase();
		const toBoolean = (input) => cleanerText(input) === "si";

		return { cleanerText, toBoolean };
	};
	const { cleanerText, toBoolean } = useCleaner();

	const upLoadFile = (event) => {
		const file = event.target.files[0];
		setcustomFileName(
			file ? file.name : "No se ha seleccionado ningún archivo"
		);
		setfilePhoto(file);
		console.log("File uploaded: ", file);
	};
	const onSubmit = async (data) => {
		const image = filePhoto;
		const imageUrl = await uploadToCloudinary(image);
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
			className="bg-cyan-50 w-full flex flex-col shadow-md font-DynaPuff"
		>
			<label className="pl-5 text-sm font-medium my-2 ">
				Nombre del producto
			</label>
			<input
				{...register("nombre_producto")}
				type="text"
				placeholder="Nombre del producto"
				className=" mb-6 h-9 rounded-md bg-white text-xs mx-3 pl-2 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
				title="Debe asignar un nombre para el producto"
			/>
			<label className="pl-5 text-sm font-medium mb-2 cursor-pointer">
				Imagen del producto
			</label>
			<div className="flex justify-start items-center mb-6 pl-2 h-9 bg-white text-[10px] font-normal mx-3 focus:ring-2 focus:ring-cyan-500 outline-none">
				<label
					htmlFor="namePhoto"
					className="w-1/3 shrink-0 text-[10px] p-2 font-medium rounded-md cursor-pointer bg-gradient-to-l from-cyan-500 to-blue-500 hover:text-white"
				>
					Cargar archivo
				</label>
				<span id="fileName" className="text-gray-400 text-[10px] pl-4">
					{customFileName}
				</span>
				<input
					{...register("imagen_producto")}
					type="file"
					accept=".jpg, .jpeg, .png"
					className="hidden"
					id="namePhoto"
					onChange={upLoadFile}
					required
				/>
			</div>
			<label className="pl-5 text-sm font-medium mb-2">Descripción</label>
			<textarea
				{...register("descripcion")}
				rows="10"
				cols="50"
				type="text"
				placeholder="Descripción del producto"
				className="bg-white h-32 rounded-md mb-6 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none"
				required
			/>

			<label className="pl-5 text-sm font-medium mb-2">Especificaciones</label>
			<textarea
				{...register("especificaciones")}
				rows="10"
				cols="50"
				type="text"
				placeholder="Especificaciones del producto"
				className="bg-white rounded-md h-32 mb-6 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none"
				required
			/>
			<label className="pl-5 text-sm font-medium mb-2 ">Categoria</label>
			<input
				{...register("categoria_id")}
				type="number"
				placeholder="Nombre del producto"
				className=" mb-6 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
			/>

			<label className="pl-5 text-sm font-medium mb-2">Cantidad</label>
			<input
				{...register("cantidad")}
				type="number"
				placeholder="Cantidad del producto"
				className="bg-white rounded-md h-9 mb-6 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none"
				required
			/>
			<label className="pl-5 text-sm font-medium mb-2">Costo unitario</label>
			<input
				{...register("costo_unitario")}
				type="number"
				placeholder="Costo unitario"
				className=" mb-6 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
			/>
			<label className="pl-5 text-sm font-medium mb-2">
				Porcentaje utilidad
			</label>
			<input
				{...register("porcentaje_utilidad")}
				type="number"
				placeholder="Nombre del producto"
				className=" mb-6 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
			/>
			<label className="pl-5 text-sm font-medium mb-2">Disponible</label>
			<input
				{...register("disponible")}
				type="text"
				list="boolean-options"
				placeholder="disponible"
				className=" mb-6 h-9 rounded-md bg-white pl-2 text-xs mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
			/>
			<datalist id="boolean-options">
				<option value="si" />
				<option value="no" />
			</datalist>
			<label className="pl-5 text-sm font-medium mb-2">Destacado</label>
			<input
				{...register("destacado")}
				type="boolean"
				placeholder="destacado"
				className=" mb-6 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
			/>
			<label className="pl-5 text-sm font-medium mb-2">Propietario</label>
			<input
				{...register("propietario")}
				type="text"
				placeholder="destacado"
				className=" mb-6 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
			/>
			<label className="pl-5 text-sm font-medium mb-2">Nombre comercial</label>
			<input
				{...register("nombre_comercial")}
				type="text"
				placeholder="nombre comercial"
				className=" mb-6 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
			/>
			<label className="pl-5 text-sm font-medium mb-2">Precio comercial</label>
			<input
				{...register("precio_comercial")}
				type="number"
				placeholder="precio comercial"
				className=" mb-6 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
				required
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
