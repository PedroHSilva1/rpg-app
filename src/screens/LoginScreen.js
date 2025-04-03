import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../styles/themeContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const { styles } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
        Alert.alert("Erro", "Por favor, preencha todos os campos.");
        window.alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const response = await axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        });

        if (response.status === 200) {
            const { token, user } = response.data;

            await AsyncStorage.setItem("userToken", token);
            await AsyncStorage.setItem("userId", user.id.toString());

            navigation.navigate("MainTabNavigator");
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);

        if (error.response && error.response.data && error.response.data.error) {
            Alert.alert("Erro", error.response.data.error);
            window.alert(error.response.data.error);
        } else {
            Alert.alert("Erro", "Ocorreu um erro ao fazer login.");
            window.alert("Ocorreu um erro ao fazer login.");
        }
    }
};

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")} // Substitua pelo caminho correto da sua logo
          style={styles.logo}
          resizeMode="contain" 
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
