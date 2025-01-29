import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Login } from "./Login";
import { Home } from "./Home";
import { CategoryPage } from "./CategoryPage";
import { ProductDetailPage } from "./ProductDetailPage";
import { AdminPage } from "./AdminPage";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
					</Route>
					<Route path="/categorias" element={<Layout />}>
						<Route index element={<h1>Index de categories</h1>} />
						<Route
							path=":categoryName/:categoryId"
							element={<CategoryPage />}
						/>
					</Route>
					<Route path="/product-detail" element={<Layout />}>
						<Route
							path=":productName/:productId"
							element={<ProductDetailPage />}
						/>
					</Route>
					<Route path="/admin" element={<Layout />}>
						<Route index element={<AdminPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export { App };
