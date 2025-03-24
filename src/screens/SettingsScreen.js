import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../styles/themeContext";

export default function SettingsScreen() {
  const { styles } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      {/* Adicione suas opções de configuração aqui */}
    </View>
  );
}