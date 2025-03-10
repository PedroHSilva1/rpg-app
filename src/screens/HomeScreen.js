import React from "react";
import { ScrollView, Text } from "react-native";
import { useTheme } from "../styles/themeContext";

export default function HomeScreen() {
  const { styles } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Algumas informações</Text>
      <Text style={styles.text}>
        Olá. Este é um protótipo de um dossiê para RPG. Para acessar as demais abas, pressione no ícone no canto superior do seu smartphone.
      </Text>
    </ScrollView>
  );
}
