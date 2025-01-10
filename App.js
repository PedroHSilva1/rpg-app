import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import Highlight from "./src/screens/Highlight";
import CreaturesScreen from "./src/screens/CreaturesScreen";
import DeitiesScreen from "./src/screens/Deities";
import ClassSelectionScreen from "./src/screens/ClassSelectionScreen";
import RaceSelectionScreen from "./src/screens/RaceSelectionScreen";
import CharacterSheetScreen from "./src/screens/CharacterSheetScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigator for character creation flow
function CharacterCreationStack() {
  return (
    <Stack.Navigator
      initialRouteName="ClassSelectionScreen"
      screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#000" } }}
    >
      <Stack.Screen
        name="ClassSelectionScreen"
        component={ClassSelectionScreen}
        options={{ title: "Selecione uma Classe" }}
      />
      <Stack.Screen
        name="RaceSelectionScreen"
        component={RaceSelectionScreen}
        options={{ title: "Selecione uma Raça" }}
      />
      <Stack.Screen
        name="CharacterSheetScreen"
        component={CharacterSheetScreen}
        options={{ title: "Ficha de Personagem" }}
      />
    </Stack.Navigator>
  );
}

// Drawer navigation for Wiki-related screens with dark theme
function WikiDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "#ffffff",
        drawerStyle: { backgroundColor: "#1c1c1c" },
        drawerInactiveTintColor: "#ffffff",
        drawerActiveTintColor: "#bb86fc",
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Drawer.Screen
        name="Highlight"
        component={Highlight}
        options={{ title: "Destaques" }}
      />
      <Drawer.Screen
        name="CreaturesScreen"
        component={CreaturesScreen}
        options={{ title: "Criaturas" }}
      />
      <Drawer.Screen
        name="DeitiesScreen"
        component={DeitiesScreen}
        options={{ title: "Deuses" }}
      />
    </Drawer.Navigator>
  );
}

// Custom tab bar to make buttons smaller and more compact
function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", height: 50, backgroundColor: "#333", borderTopWidth: 1, borderTopColor: "#222" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10 }}
          >
            <Text style={{ color: isFocused ? "#fff" : "#aaa", fontSize: 12 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// Main Tab Navigation for switching between Wiki and Character Creation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Wiki"
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Wiki" component={WikiDrawer} options={{ title: "Wiki" }} />
        <Tab.Screen
          name="Criação de Personagem"
          component={CharacterCreationStack}
          options={{ title: "Criação" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}