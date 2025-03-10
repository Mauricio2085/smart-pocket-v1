import { useForm } from "react-hook-form";
import axios from "axios";
import { uploadToCloudinary } from "../utils/handleUpload";
import { useState } from "react";
import { Error } from "./Error";

const CreateForm = () => {
	const { register, handleSubmit } = useForm();
	const [customFileName, setCustomFileName] = useState(
		"Ningún archivo seleccionado"
	);
	const [filePhoto, setfilePhoto] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
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
		setCustomFileName(
			file ? file.name : "No se ha seleccionado ningún archivo"
		);
		setfilePhoto(file);
		console.log("File uploaded: ", file);
	};
	const onSubmit = async (data) => {
		try {
			setErrorMessage("");
			const image = filePhoto;
			const imageUrl = await uploadToCloudinary(image);

			// if (!imageUrl) {
			// 	throw new Error("Error al subir la imagen.");
			// }

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
			console.log(cleanData);
			const response = await axios.post(`${API_URL}/crear-producto`, cleanData);
			console.log("Respuesta del backend: ", response);
		} catch (error) {
			if (error?.response?.data?.message) {
				console.log(error.response.data.message);
				setErrorMessage(error.response.data.message);
			} else if (error?.message) {
				console.log(error.message);
				setErrorMessage(error.message);
			} else {
				setErrorMessage("Ocurrió un error inesperado");
			}
		}
	};

	return (
		<>
			{errorMessage && <Error message={errorMessage} />}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex flex-col shadow-md font-DynaPuff lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3"
			>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 ">
						Nombre del producto
					</label>
					<input
						{...register("nombre_producto")}
						type="text"
						placeholder="Nombre del producto"
						className=" mb-5 h-9 rounded-md bg-white text-xs mx-3 pl-2 focus:ring-2 focus:ring-cyan-500 outline-none "
						title="Debe asignar un nombre para el producto"
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 cursor-pointer">
						Imagen del producto
					</label>
					<div className="flex justify-start items-center mb-5 pl-2 h-9 bg-white text-[10px] font-normal mx-3 focus:ring-2 focus:ring-cyan-500 outline-none">
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
						/>
					</div>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">Descripción</label>
					<textarea
						{...register("descripcion")}
						rows="10"
						cols=""
						type="text"
						placeholder="Descripción del producto"
						className=" bg-white h-32 rounded-md mb-5 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none"
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">
						Especificaciones
					</label>
					<textarea
						{...register("especificaciones")}
						rows="10"
						cols=""
						type="text"
						placeholder="Especificaciones del producto"
						className="bg-white rounded-md h-32 mb-5 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none"
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 ">Categoria</label>
					<input
						{...register("categoria_id")}
						type="number"
						placeholder="Nombre del producto"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">Cantidad</label>
					<input
						{...register("cantidad")}
						type="number"
						placeholder="Cantidad del producto"
						className="bg-white rounded-md h-9 mb-5 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none"
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">
						Costo unitario
					</label>
					<input
						{...register("costo_unitario")}
						type="number"
						placeholder="Costo unitario"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">
						Porcentaje utilidad
					</label>
					<input
						{...register("porcentaje_utilidad")}
						type="number"
						placeholder="Nombre del producto"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">Disponible</label>
					<select
						{...register("disponible")}
						type="text"
						list="disponible-options"
						placeholder="disponible"
						className=" mb-5 h-9 rounded-md bg-white pl-2 text-xs mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					>
						<option value="" disabled selected>
							Elige una opción
						</option>
						<option value="Opción 1">Si</option>
						<option value="Opción 2">No</option>
					</select>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">Destacado</label>
					<select
						{...register("destacado")}
						type="text"
						list="destacados-options"
						placeholder="destacado"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					>
						<option value="" disabled selected>
							Elige una opción
						</option>
						<option value="Opción 1">Si</option>
						<option value="Opción 2">No</option>
					</select>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">Propietario</label>
					<input
						{...register("propietario")}
						type="text"
						placeholder="destacado"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">
						Nombre comercial
					</label>
					<input
						{...register("nombre_comercial")}
						type="text"
						placeholder="nombre comercial"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2">
						Precio comercial
					</label>
					<input
						{...register("precio_comercial")}
						type="number"
						placeholder="precio comercial"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none "
					/>
				</div>
				<button
					type="submit"
					className=" my-3 mx-5 bg-yellow-100 rounded-md border-0 w-auto cursor-pointer text-base font-bold h-10 lg:self-center"
				>
					Crear producto
				</button>
			</form>
		</>
	);
};

export { CreateForm };
