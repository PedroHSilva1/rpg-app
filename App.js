import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Certifique-se de ter o pacote @expo/vector-icons instalado
import { ThemeProvider, useTheme } from "./src/styles/themeContext"; // Importação do ThemeProvider e useTheme

// Importação das telas
import HomeScreen from "./src/screens/HomeScreen";
import Highlight from "./src/screens/Highlight";
import CreaturesScreen from "./src/screens/CreaturesScreen";
import DeitiesScreen from "./src/screens/Deities";
import RaceSelectionScreen from "./src/screens/RaceSelectionScreen";
import ClassSelectionScreen from "./src/screens/ClassSelectionScreen";
import AttributeSelectionScreen from "./src/screens/AttributeSelectionScreen";
import SkillSelectionScreen from "./src/screens/SkillSelectionScreen";
import CharacterSheetScreen from "./src/screens/CharacterSheetScreen";
import SubRaceSelectionScreen from "./src/screens/SubRaceSelectionScreen";
import LocateScreen from "./src/screens/LocateScreen";
import ThemeSelectionScreen from "./src/screens/ThemeSelectionScreen";
import SettingsScreen from "./src/screens/SettingsScreen"; 
import SettingsButton from "./src/components/SettingsButton";
import CharacterManagementScreen from "./src/screens/CharacterManagementScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        name="CharacterSheetScreen"
        component={CharacterSheetScreen}
        options={{ title: "Ficha de Personagem" }}
      />
    </Stack.Navigator>
  );
}

// Drawer navigation para telas relacionadas à Wiki com tema dinâmico
function WikiDrawer() {
  const { styles } = useTheme();

  const DrawerContent = () => (
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

// Barra de navegação personalizada para os botões do rodapé
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

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={WikiDrawer} /> {/* Tela principal após login */}
    </Stack.Navigator>
  );
}

// Navegação principal com tabs para Wiki e Criação de Personagem
export default function App() {
  return (
    <ThemeProvider>
    
      
      <NavigationContainer>
        
        <Tab.Navigator
          initialRouteName="Wiki"
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Wiki" component={WikiDrawer} options={{ title: "Wiki" }} />
          <Tab.Screen
            name="Fichas"
            component={CharacterManagementScreen}
            options={{ title: "Fichas" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}