import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layouts/MainLayout";
import { Login } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { CategoryPage } from "./Pages/CategoryPage";
import { ProductDetailPage } from "./Pages/ProductDetailPage";
import { AdminPage } from "./Pages/AdminPage";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="login" element={<Login />} />
					</Route>
					<Route path="/categorias" element={<MainLayout />}>
						<Route index element={<h1>Index de categories</h1>} />
						<Route
							path=":categoryName/:categoryId"
							element={<CategoryPage />}
						/>
					</Route>
					<Route path="/productos/product-detail" element={<MainLayout />}>
						<Route
							path=":categoryName/:productId"
							element={<ProductDetailPage />}
						/>
					</Route>
					<Route path="/admin" element={<MainLayout />}>
						<Route index element={<AdminPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export { App };
