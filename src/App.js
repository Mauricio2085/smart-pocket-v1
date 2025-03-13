import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AdminPage } from "./pages/AdminPage";
import { SearchResults } from "./pages/SearchResults";
import { Dashboard } from "./pages/Dashboard";
import { CreateProducts } from "./pages/CreateProducts";
import { ErrorPage } from "./pages/ErrorPage";
import { Detail } from "./pages/DetailPage";
import { UpdateProductsPage } from "./pages/UpdateProductsPage";

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
					<Route path="/admin" element={<AdminPage />}>
						<Route index element={<Dashboard />} />
						<Route path="crear-producto" element={<CreateProducts />} />
						<Route path="detail/:productId" element={<Detail />} />
						<Route
							path="modificar-producto/:productId"
							element={<UpdateProductsPage />}
						/>
						<Route
							path="eliminar-producto"
							element={<h1>Eliminar productos</h1>}
						/>
					</Route>
					<Route path="search" element={<MainLayout />}>
						<Route index element={<SearchResults />} />
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export { App };
