import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		try {
			setLoading(true);
			const fetchData = async () => {
				const response = await axios.get(url);
				console.log(response.data);
				const result = response.data;
				const data = setData(result);
				setLoading(false);
				return { data };
			};
			fetchData();
		} catch (error) {
			setError(error);
		}
	}, [url]);

	return { data, loading, error };
}

export { useFetch };
