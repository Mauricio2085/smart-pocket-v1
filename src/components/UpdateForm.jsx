import { useForm } from "react-hook-form";
import axios from "axios";
import { uploadToCloudinary } from "../utils/handleUpload";
import { useEffect, useState } from "react";
import { Error } from "./Error";
import { Success } from "./Success";

const UpdateForm = ({ product }) => {
	const idCategorySelected = (categoryName) => {
		try {
			const productCategories = {
				Aseo: 1,
				Ferretería: 2,
				Juguetería: 3,
				Mascotas: 4,
				Hogar: 5,
				Electrodomésticos: 6,
				Accesorios: 7,
			};
			return productCategories[categoryName];
		} catch (error) {
			throw new Error("Error al seleccionar la categoría");
		}
	};

	console.log("Lo que llega al formulario de actualización: ", product);
	const { register, handleSubmit, reset } = useForm();
	const [customFileName, setCustomFileName] = useState(
		"Ningún archivo seleccionado"
	);
	const [filePhoto, setfilePhoto] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
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

	useEffect(() => {
		if (product) {
			reset({
				...product,
				destacado: product.destacado ? "Si" : "No",
				disponible: product.disponible ? "Si" : "No",
				categoria_name: product.nombre_categoria,
			});
		}
	}, [product, reset]);

	const onSubmit = async (data) => {
		try {
			// Cleaning error state
			setErrorMessage("");
			// Upload of product image
			const image = filePhoto;
			const imageUrl = await uploadToCloudinary(image);

			const categoryId = idCategorySelected(data.categoria_name);

			const cleanData = {
				id_producto: Number(data.productId || null),
				nombre_producto: data.nombre_producto,
				imagen_producto: imageUrl,
				descripcion: data.descripcion,
				especificaciones: data.especificaciones,
				categoria_id: categoryId,
				cantidad: data.cantidad,
				costo_unitario: parseFloat(data.costo_unitario),
				porcentaje_utilidad: parseFloat(data.porcentaje_utilidad),
				disponible: toBoolean(data.disponible),
				destacado: toBoolean(data.destacado),
				propietario: cleanerText(data.propietario),
				nombre_comercial: data.nombre_comercial,
				precio_comercial: parseFloat(data.precio_comercial),
			};
			console.log(cleanData);
			const response = await axios.patch(
				`${API_URL}/admin/productos`,
				cleanData
			);
			setSuccessMessage(response.data.message);
			setfilePhoto(null);
			setCustomFileName("Ningún archivo seleccionado");
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
			{console.log(successMessage)}
			{errorMessage && (
				<Error message={errorMessage} setErrorMessage={setErrorMessage} />
			)}
			{successMessage && (
				<Success
					message={successMessage}
					setSuccessMessage={setSuccessMessage}
				/>
			)}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex flex-col shadow-md font-DynaPuff lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3"
			>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						id producto
					</label>
					<input
						{...register("productId")}
						type="number"
						value={product.id_producto}
						readOnly
						disabled
						className=" w-10 mb-5 h-9 text-center rounded-md bg-cyan-200 text-xs mx-3 outline-none lg:text-sm lg:h-11 xl:text-center"
						title="id producto"
					/>
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Nombre del producto
					</label>
					<input
						{...register("nombre_producto")}
						type="text"
						placeholder="Nombre del producto"
						className=" mb-5 h-9 rounded-md bg-white text-xs mx-3 pl-2 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						title="Debe asignar un nombre para el producto"
						required
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 cursor-pointer lg:text-lg">
						Imagen del producto
					</label>
					<div className="flex justify-start items-center mb-5 pl-2 h-9 bg-white text-[10px] font-normal mx-3 focus:ring-2 focus:ring-cyan-500 outline-none">
						<label
							htmlFor="namePhoto"
							className="w-32 shrink-0 text-xs text-center p-2 font-medium rounded-md cursor-pointer bg-gradient-to-l from-cyan-500 to-blue-500 hover:text-white lg:text-xs"
						>
							Cargar archivo
						</label>
						<span
							id="fileName"
							className="text-gray-400 text-[10px] pl-4 lg:text-xs"
						>
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
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Descripción
					</label>
					<textarea
						{...register("descripcion")}
						rows="10"
						cols=""
						type="text"
						placeholder="Descripción del producto"
						className=" bg-white h-32 rounded-md mb-5 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm"
						required
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Especificaciones
					</label>
					<textarea
						{...register("especificaciones")}
						rows="10"
						cols=""
						type="text"
						placeholder="Especificaciones del producto"
						className="bg-white rounded-md h-32 mb-5 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm"
						required
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Categoria
					</label>
					<select
						{...register("categoria_name")}
						type="text"
						placeholder="Nombre del producto"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					>
						<option value="" disabled selected>
							Elige una opción
						</option>
						<option value="Aseo">Aseo</option>
						<option value="Ferretería">Ferretería</option>
						<option value="Juguetería">Juguetería</option>
						<option value="Mascotas">Mascotas</option>
						<option value="Hogar">Hogar</option>
						<option value="Electrodomésticos">Electrodomésticos</option>
						<option value="Accesorios">Accesorios</option>
					</select>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Cantidad
					</label>
					<input
						{...register("cantidad", { valueAsNumber: true })}
						type="number"
						placeholder="Cantidad del producto"
						className="bg-white rounded-md h-9 mb-5 pl-2 mx-3 text-xs focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Costo unitario
					</label>
					<input
						{...register("costo_unitario", { valueAsNumber: true })}
						type="number"
						placeholder="Costo unitario"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Porcentaje utilidad
					</label>
					<input
						{...register("porcentaje_utilidad", { valueAsNumber: true })}
						type="number"
						placeholder="Nombre del producto"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Disponible
					</label>
					<select
						{...register("disponible")}
						type="text"
						list="disponible-options"
						placeholder="disponible"
						className=" mb-5 h-9 rounded-md bg-white pl-2 text-xs mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					>
						<option value="" disabled selected>
							Elige una opción
						</option>
						<option value="Si">Si</option>
						<option value="No">No</option>
					</select>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Destacado
					</label>
					<select
						{...register("destacado")}
						type="text"
						list="destacados-options"
						placeholder="destacado"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					>
						<option value="" disabled selected>
							Elige una opción
						</option>
						<option value="Si">Si</option>
						<option value="No">No</option>
					</select>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Propietario
					</label>
					<select
						{...register("propietario")}
						type="text"
						placeholder="destacado"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					>
						<option value="" disabled selected>
							Elige una opción
						</option>
						<option value="gloria">Gloria</option>
						<option value="smart">Smart</option>
					</select>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Nombre comercial
					</label>
					<input
						{...register("nombre_comercial")}
						type="text"
						placeholder="nombre comercial"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="pl-5 text-sm font-medium my-2 lg:text-lg">
						Precio comercial
					</label>
					<input
						{...register("precio_comercial", { valueAsNumber: true })}
						type="number"
						placeholder="precio comercial"
						className=" mb-5 h-9 rounded-md bg-white text-xs pl-2 mx-3 focus:ring-2 focus:ring-cyan-500 outline-none lg:text-sm lg:h-11"
						required
					/>
				</div>
				<button
					type="submit"
					className=" my-3 mx-5 bg-yellow-100 rounded-md border-0 w-auto cursor-pointer text-base font-bold h-10 lg:self-center lg:text-lg lg:h-11"
				>
					Actualizar producto
				</button>
			</form>
		</>
	);
};

export { UpdateForm };
