import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "../styles/themeContext";
import axios from "axios";

export default function RegisterScreen({ navigation }) {
  const { styles } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Validação de campos
    if (!name || !email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      window.alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres.");
      window.alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      // Envia os dados para o backend
      const response = await axios.post("http://localhost:3001/users", {
        name: name,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        window.alert("Cadastro realizado com sucesso!");
        navigation.navigate("LoginScreen"); // Volta para a tela de login
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    
      if (error.response) {
        // Exibe o status e os dados retornados pelo backend
        console.error("Status:", error.response.status);
        console.error("Dados do erro:", error.response.data);
    
        if (error.response.data && error.response.data.error) {
          Alert.alert("Erro", `Mensagem do backend: ${error.response.data.error}`);
        } else {
          Alert.alert("Erro", "Erro desconhecido retornado pelo backend.");
        }
      } else if (error.request) {
        // Caso a requisição tenha sido feita, mas não houve resposta
        console.error("Nenhuma resposta recebida:", error.request);
        Alert.alert("Erro", "Nenhuma resposta recebida do servidor.");
      } else {
        // Caso o erro tenha ocorrido antes de enviar a requisição
        console.error("Erro ao configurar a requisição:", error.message);
        Alert.alert("Erro", `Erro ao configurar a requisição: ${error.message}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
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
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Já tem uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}