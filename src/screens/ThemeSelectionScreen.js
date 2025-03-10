import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../styles/themeContext";
import { themePalettes } from "../styles/themePallets";

export default function ThemeSelectionScreen() {
  const { changeTheme, styles } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Selecione um Tema</Text>

      {Object.keys(themePalettes).map((themeName) => (
        <TouchableOpacity
          key={themeName}
          style={[
            styles.button,
            {
              backgroundColor: themePalettes[themeName].background,
              borderColor: themePalettes[themeName].primary,
              borderWidth: 2,
            },
          ]}
          onPress={() => changeTheme(themeName)}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: themePalettes[themeName].text,
              },
            ]}
          >
            {themeName.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
