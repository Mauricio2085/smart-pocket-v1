import { useState, useEffect } from "react";

function useFetch(url) {
	const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(true);
	useEffect(() => {
		// setLoading(true);
		const fetchData = async () => {
			const response = await fetch(url);
			const result = await response.json();
			const data = setData(result);
			return { data };
		};
		fetchData();
	}, [url]);

	return { data };
}

export { useFetch };
