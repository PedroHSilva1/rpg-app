import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import { useTheme } from "../styles/themeContext";
import { themePalettes } from "../styles/themePallets";

const ThemePreview = ({ themeName, onPress, isSelected, animation }) => {
  const theme = themePalettes[themeName];

  return (
    <Animated.View style={[{ transform: [{ translateX: animation }] }]}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            borderWidth: 2,
            borderColor: isSelected ? theme.primary : "#000",
            padding: 8,
            borderRadius: 8,
            backgroundColor: theme.background,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: theme.primary,
              marginRight: 8,
              borderWidth: 1,
              borderColor: "#000",
            }}
          />
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: theme.secondary,
              marginRight: 8,
              borderWidth: 1,
              borderColor: "#000",
            }}
          />
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: theme.background,
              marginRight: 8,
              borderWidth: 1,
              borderColor: "#000",
            }}
          />
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: theme.text,
              marginRight: 8,
              borderWidth: 1,
              borderColor: "#000",
            }}
          />
          <Text style={{ flex: 1, color: theme.text }}>{theme.displayName}</Text>
        </View>
        {isSelected && <Text style={{ color: theme.primary, marginLeft: 8 }}>✔</Text>}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function ThemeSelectionScreen() {
  const { changeTheme, styles } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Cria uma referência de animação para cada tema
  const animations = useRef(
    Object.keys(themePalettes).map(() => new Animated.Value(400)) // Começa fora da tela (400px à direita)
  ).current;

  useEffect(() => {
    // Inicia as animações em cascata
    animations.forEach((animation, index) => {
      Animated.timing(animation, {
        toValue: 0, // Move para a posição original
        duration: 500, // Duração da animação
        delay: index * 100, // Atraso para criar o efeito de cascata
        useNativeDriver: true, // Usa animações nativas para melhor desempenho
      }).start();
    });
  }, [animations]);

  const handleThemeChange = (themeName) => {
    setSelectedTheme(themeName);
    changeTheme(themeName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollContent}>
      <Text style={styles.title}>Selecione um Tema</Text>
      {Object.keys(themePalettes).map((themeName, index) => (
        <ThemePreview
          key={themeName}
          themeName={themeName}
          onPress={() => handleThemeChange(themeName)}
          isSelected={selectedTheme === themeName}
          animation={animations[index]} // Passa a animação correspondente
        />
      ))}
    </ScrollView>
  );
}