import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather name="search" style={styles.icon} />
			<TextInput
				value={term}
				onChangeText={onTermChange}
				placeholder="Search"
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "lightgray",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginTop: 10,
		marginBottom: 10
	},
	input: {
		flex: 1,
		fontSize: 18,
	},
	icon: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15,
	},
});

export default SearchBar;
