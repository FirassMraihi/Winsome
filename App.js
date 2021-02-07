import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Profil from "./src/sceen/profil";
import Home from "./src/sceen/home";
import StackNavigation from "./src/navigation/stackNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <StackNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
