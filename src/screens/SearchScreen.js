import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Components
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

import useResults from "../hooks/useResults";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, errorMessage, searchApi] = useResults();

	const filterByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => {
					searchApi(term);
				}}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results</Text>

			<ResultsList results={filterByPrice('$')} title="Cost Effective" />
			<ResultsList 
			 results={filterByPrice('$$')}
			title="Bit Pricier" />
			<ResultsList
			 results={filterByPrice('$$$')}
			 title="Big Spender" />
			 
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
