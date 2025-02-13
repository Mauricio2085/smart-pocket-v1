import { render, screen, renderHook } from "@testing-library/react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { useFetch } from "../Hooks/useFetch";
// import App from "../App.js";

// test("renders learn react link", () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

// Mock de fetch
global.fetch = jest.fn();

describe("useFetch", () => {
	beforeEach(() => {
		jest.clearAllMocks(); // Limpia mocks antes de cada test
	});

	test("Debe retornar el estado inicial correctamente", () => {
		const { result } = renderHook(() => useFetch("https://api.example.com"));

		expect(result.current.data).toBe(null);
		expect(result.current.loading).toBe(true);
		expect(result.current.error).toBe(null);
	});

	test("Debe obtener los datos correctamente", async () => {
		const mockData = { name: "Producto 1" };
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch("https://api.example.com")
		);

		await waitForNextUpdate(); // Espera a que se actualice el estado

		expect(result.current.data).toEqual(mockData);
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBe(null);
	});

	test("Debe manejar errores correctamente", async () => {
		fetch.mockResolvedValueOnce({
			ok: false,
			json: async () => ({ message: "Error en la API" }),
		});

		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch("https://api.example.com")
		);

		await waitForNextUpdate();

		expect(result.current.data).toBe(null);
		expect(result.current.loading).toBe(false);
		expect(result.current.error).toBe("Error en la solicitud");
	});
});
