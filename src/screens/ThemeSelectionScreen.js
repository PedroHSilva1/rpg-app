import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "../styles/themeContext";
import { themePalettes } from "../styles/themePallets";

const ThemePreview = ({ themeName, onPress, isSelected }) => {
  const theme = themePalettes[themeName];
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center", borderWidth: 2, borderColor: isSelected ? theme.primary : "#000", padding: 8, borderRadius: 8 }}>
        <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: theme.primary, marginRight: 8, borderWidth: 1, borderColor: "#000" }} />
        <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: theme.secondary, marginRight: 8, borderWidth: 1, borderColor: "#000" }} />
        <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: theme.background, marginRight: 8, borderWidth: 1, borderColor: "#000" }} />
        <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: theme.text, marginRight: 8, borderWidth: 1, borderColor: "#000" }} />
        <Text style={{ flex: 1, color: theme.text }}>{theme.displayName}</Text>
      </View>
      {isSelected && <Text style={{ color: theme.primary, marginLeft: 8 }}>✔</Text>}
    </TouchableOpacity>
  );
};

export default function ThemeSelectionScreen() {
  const { changeTheme, styles } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeChange = (themeName) => {
    setSelectedTheme(themeName);
    changeTheme(themeName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}
    style={styles.scrollContent}>
      <Text style={styles.title}>Selecione um Tema</Text>
      {Object.keys(themePalettes).map((themeName) => (
        <ThemePreview
          key={themeName}
          themeName={themeName}
          onPress={() => handleThemeChange(themeName)}
          isSelected={selectedTheme === themeName}
        />
      ))}
    </ScrollView>
  );
}