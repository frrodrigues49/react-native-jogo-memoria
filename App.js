import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import CardProvider from "./src/context/cardProvider";
import Routes from "./src/routes";

export default function App() {
  return (
    <CardProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Routes />
      </NavigationContainer>
    </CardProvider>
  );
}
