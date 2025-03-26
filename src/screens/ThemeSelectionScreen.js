import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated, Dimensions } from "react-native";
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


  const screenWidth = Dimensions.get("window").width;

  // Cria uma referência de animação para cada tema
  const animations = useRef(
    Object.keys(themePalettes).map(() => new Animated.Value(screenWidth)) // Começa fora da tela (largura da tela)
  ).current;

  useEffect(() => {
    
    animations.forEach((animation, index) => {
      Animated.sequence([
       
        Animated.timing(animation, {
          toValue: 0, 
          duration: 500, // Duração do movimento inicial
          delay: index * 100, // Atraso para criar o efeito de cascata
          useNativeDriver: true, // Usa animações nativas para melhor desempenho
        }),
        // Efeito de "bounce back"
        Animated.spring(animation, {
          toValue: 5, // Move ligeiramente além da posição final
          friction: 3, // Controla a elasticidade
          useNativeDriver: true,
        }),
        Animated.spring(animation, {
          toValue: 0, // Volta suavemente para a posição final
          friction: 3, // Controla a elasticidade
          useNativeDriver: true,
        }),
      ]).start();
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
          animation={animations[index]} 
        />
      ))}
    </ScrollView>
  );
}