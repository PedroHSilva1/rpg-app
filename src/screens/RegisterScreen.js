import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../styles/themeContext";

export default function RegisterScreen({ navigation }) {
  const { styles } = useTheme();

  const handleRegister = () => {
    // Lógica de cadastro aqui
    navigation.replace("Login"); // Volta para a tela de login após cadastro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor={styles.placeholder.color} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor={styles.placeholder.color} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor={styles.placeholder.color} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
        Já tem uma conta? Faça login
      </Text>
    </View>
  );
}