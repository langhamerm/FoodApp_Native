import { useEffect, useState } from "react";

import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (query) => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: query,
					location: "chicago",
				},
			});
		
			setResults(response.data.businesses);
		} catch (err) {
			setError("Something went wrong");
		}
	};
	useEffect(() => {
		return () => {
			searchApi("Burgers");
		};
	}, []);

	return [results, errorMessage, searchApi];
};
