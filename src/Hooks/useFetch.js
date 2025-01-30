import { useState, useEffect } from "react";

function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			setLoading(true);
			setTimeout(() => {
				const fetchData = async () => {
					const response = await fetch(url);
					const result = await response.json();
					const data = setData(result);
					setLoading(false);
					return { data };
				};
				fetchData();
			}, 5000);
		} catch (error) {
			setError(error);
		}
	}, [url]);

	return { data, loading, error };
}

export { useFetch };
