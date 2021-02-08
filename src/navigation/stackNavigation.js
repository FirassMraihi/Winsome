import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../sceen/home/home";
import Profil from "../sceen/profil";
import AuthenticationNavigation from "./authenticationNavigation";
import SearchResult from "../sceen/searchResult";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName="Authentication">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Authentication" component={AuthenticationNavigation} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation;
