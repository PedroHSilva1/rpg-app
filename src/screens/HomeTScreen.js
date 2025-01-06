import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

export default function HomeTScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Algumas informações</Text>
      <Text style={styles.text}>Olá. Este é um protótipo de 
        um dociê para RPG. Para acessar as demais abas, pressione no 
        icone no canto superior do seu smartphone.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#ffffff",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#ffffff",
  },
});