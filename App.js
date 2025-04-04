import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import { ThemeProvider, useTheme } from "./src/styles/themeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Importação das telas
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Highlight from "./src/screens/Highlight";
import SettingsScreen from "./src/screens/SettingsScreen";
import CreaturesScreen from "./src/screens/CreaturesScreen";
import DeitiesScreen from "./src/screens/Deities";
import LocateScreen from "./src/screens/LocateScreen";
import CharacterManagementScreen from "./src/screens/CharacterManagementScreen";
import ClassSelectionScreen from "./src/screens/ClassSelectionScreen";
import RaceSelectionScreen from "./src/screens/RaceSelectionScreen";
import SubRaceSelectionScreen from "./src/screens/SubRaceSelectionScreen";
import AttributeSelectionScreen from "./src/screens/AttributeSelectionScreen";
import SkillSelectionScreen from "./src/screens/SkillSelectionScreen";
import CharacterSheetScreen from "./src/screens/CharacterSheetScreen";
import SettingsButton from "./src/components/SettingsButton";
import SplashScreen from "./src/screens/SplashScreen";
import CharacterConfirmationScreen from "./src/screens/CharacterConfirmationScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CharacterManagementStack() {
  return (
    <Stack.Navigator initialRouteName="CharacterManagementScreen"
    screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#000" } }}>
      <Stack.Screen
        name="CharacterManagementScreen"
        component={CharacterManagementScreen}
        options={{ title: "Gerenciamento de Personagens" }}
      />
      <Stack.Screen
        name="CharacterSheetScreen"
        component={CharacterSheetScreen}
        options={{ title: "Ficha de Personagem" }}
      />
    </Stack.Navigator>
  );
}

// Stack navigator para o fluxo de criação de personagem
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
        name="SubRaceSelectionScreen"
        component={SubRaceSelectionScreen}
        options={{ title: "Selecione uma Sub-Raça" }}
      />
      <Stack.Screen
        name="AttributeSelectionScreen"
        component={AttributeSelectionScreen}
        options={{ title: "Distribua Atributos" }}
      />
      <Stack.Screen
        name="SkillSelectionScreen"
        component={SkillSelectionScreen}
        options={{ title: "Escolha Perícias" }}
      />
      <Stack.Screen
        name="CharacterConfirmationScreen"
        component={CharacterConfirmationScreen}
        options={{ title: "Confirmação de Personagem" }}
      />
      <Stack.Screen
        name="CharacterManagementScreen"
        component={CharacterManagementScreen}
        options={{ title: "Gerenciamento de Personagens" }}
      />
      <Stack.Screen
        name="CharacterSheetScreen"
        component={CharacterSheetScreen}
        options={{ title: "Ficha de Personagem" }}
      />
    </Stack.Navigator>
  );
}

// Drawer navigation para telas relacionadas à Wiki com tema dinâmico
const DrawerContent = () => {
  const { styles } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: styles.container.backgroundColor },
        headerTintColor: styles.title.color,
        drawerStyle: { backgroundColor: styles.container.backgroundColor },
        drawerInactiveTintColor: styles.text.color,
        drawerActiveTintColor: styles.button.backgroundColor,
        headerRight: () => <SettingsButton />,
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
      <Drawer.Screen
        name="LocateScreen"
        component={LocateScreen}
        options={{ title: "Mundo" }}
      />
    </Drawer.Navigator>
  );
};

function WikiDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerContent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
       
    </Stack.Navigator>
  );
}

// Custom Tab Bar para Wiki e Fichas
function CustomTabBar({ state, descriptors, navigation }) {
  const { styles } = useTheme();

  return (
    <View style={{ flexDirection: "row", height: 50, backgroundColor: styles.tabBar.backgroundColor, borderTopWidth: 1, borderTopColor: styles.tabBar.borderColor }}>
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
            <Text style={{ color: isFocused ? styles.tabBar.activeColor : styles.tabBar.inactiveColor, fontSize: 12 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// Tab navigator para Wiki e Fichas
function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Wiki"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display: route.name === "CharacterCreation" ? "none" : "flex", // Oculta a barra inferior no fluxo de criação
        },
      })}
    >
      <Tab.Screen name="Wiki" component={WikiDrawer} options={{ title: "Wiki" }} />
      <Tab.Screen
        name="Fichas"
        component={CharacterManagementStack}
        options={{ title: "Fichas" }}
      />
      <Tab.Screen
        name="CharacterCreation"
        component={CharacterCreationStack}
        options={{ title: "Criação de Personagem" }}
      />
    </Tab.Navigator>
  );
}

// Stack navigator para autenticação (Login e Cadastro)
function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="CharacterCreationStack" component={CharacterCreationStack} />
    </Stack.Navigator>
  );
}


export default function App() {
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
        
        navigationRef.current?.navigate("MainTabNavigator");
    } else {
        
        navigationRef.current?.navigate("LoginScreen");
    }
};

useEffect(() => {
    checkLoginStatus();
}, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}