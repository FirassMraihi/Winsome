import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../sceen/authentication/login";
import Register from "../sceen/authentication/register";

const Stack = createStackNavigator();

function AuthenticationNavigation() {
  return (
      <Stack.Navigator headerMode={false} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>

  );
}
export default AuthenticationNavigation;
