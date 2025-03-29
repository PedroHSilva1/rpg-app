import React, { useEffect } from "react";
import { View, Image, Animated, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  const scaleValue = new Animated.Value(1);

  useEffect(() => {
    // Animação de pulsação
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navegar para a tela de login após 2 segundos
    const timer = setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo.png")}
        style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212"
  },
  logo: {
    width: 150,
    height: 150,
    backgroundColor: "transparent",
  },
});