import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../styles/themeContext";

export default function LoginScreen({ navigation }) {
  const { styles } = useTheme();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    navigation.replace("MainApp"); // Navega para o app principal após login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={styles.placeholder.color} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor={styles.placeholder.color} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
}