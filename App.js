import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importando as telas
import HomeScreen from "./src/screens/HomeScreen";
import Highlight from "./src/screens/Highlight";
import CreaturesScreen from "./src/screens/CreaturesScreen";
import Deities from "./src/screens/Deities";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#ffffff",
          drawerStyle: { backgroundColor: "#1c1c1c" },
          drawerInactiveTintColor: "#ffffff",
          drawerActiveTintColor: "#bb86fc",
        }}
      >
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Destaques" component={Highlight} />
        <Drawer.Screen name="Divindades" component={Deities} />
        <Drawer.Screen name="Criaturas" component={CreaturesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}