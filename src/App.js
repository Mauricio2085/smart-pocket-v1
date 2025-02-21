import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layouts/MainLayout";
import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { CategoryPage } from "./Pages/CategoryPage";
import { ProductDetailPage } from "./Pages/ProductDetailPage";
import { AdminPage } from "./Pages/AdminPage";
import { SearchResults } from "./Pages/SearchResults";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
					</Route>
					<Route path="/categorias" element={<MainLayout />}>
						<Route index element={<h1>Index de categories</h1>} />
						<Route
							path=":categoryName/:categoryId"
							element={<CategoryPage />}
						/>
					</Route>
					<Route path="/productos/product-detail" element={<MainLayout />}>
						<Route path=":productId" element={<ProductDetailPage />} />
					</Route>
					<Route path="/admin" element={<MainLayout />}>
						<Route path="" element={<AdminPage />}>
							<Route path="dashboard" element={<h1>Home admin</h1>} />
							<Route
								path="productos-categorias"
								element={<h1>lista productos y categorias</h1>}
							/>
							<Route path="crear-producto" element={<h1>Crear productos</h1>} />
							<Route
								path="modificar-producto"
								element={<h1>Modificar productos</h1>}
							/>
							<Route
								path="eliminar-producto"
								element={<h1>Eliminar productos</h1>}
							/>
						</Route>
					</Route>
					<Route path="search" element={<MainLayout />}>
						<Route index element={<SearchResults />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export { App };
