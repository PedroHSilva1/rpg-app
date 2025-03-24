import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importação corrigida
import { useTheme } from "../styles/themeContext";
import ThemeSelectionScreen from "./ThemeSelectionScreen";

const Stack = createStackNavigator();

function SettingsHome({ navigation }) {
  const { styles } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.themeButton]} // Adiciona estilos personalizados para o botão
        onPress={() => navigation.navigate("ThemeSelectionScreen")}
      >
        <Ionicons name="color-palette-outline" size={20} color={styles.buttonText.color} style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Selecionar Tema</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function SettingsScreen() {
  const { styles } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: styles.container.backgroundColor },
        headerTintColor: styles.title.color,
      }}
    >
      <Stack.Screen
        name="SettingsHome"
        component={SettingsHome}
        options={{ title: "Configurações" }}
      />
      <Stack.Screen
        name="ThemeSelectionScreen"
        component={ThemeSelectionScreen}
        options={{ title: "Selecionar Tema" }}
      />
    </Stack.Navigator>
  );
}