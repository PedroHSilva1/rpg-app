import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../styles/themeContext";

export default function SettingsButton() {
  const navigation = useNavigation(); // Acessa o contexto de navegação
  const { styles } = useTheme(); // Acessa os estilos do tema

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SettingsScreen")} // Navega para a tela de configurações
      style={{ marginRight: 16 }}
    >
      <Ionicons
        name="settings-outline"
        size={24}
        color={styles.title.color} // Usa a cor do título do tema
      />
    </TouchableOpacity>
  );
}