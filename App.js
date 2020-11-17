import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		Result: ResultScreen
	},
	{
		initialRouteName: "Search",
		defaultNavigationOptions: {
			title: "Business Search",
		},
	}
);

export default createAppContainer(navigator);
