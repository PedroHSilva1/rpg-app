import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

export default function Highlight() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <Card
        title="Dyah - Ceifadora do Norte"
        image={{ uri: "https://via.placeholder.com/300" }}
        description="Dyah é uma entidade poderosa que reina sobre o norte. Sua história está envolta em mistérios."
      />
      <Card
        title="Lumini, Deusa da Luz"
        image={{ uri: "https://via.placeholder.com/300" }}
        
        description={` Lumini é aquela que traz a luz para o mundo dos mortais.\n\n Cada nascer do dia carrega um sorriso alegre e contagiante da Deusa.\n\n Além de trazer a luz ao mundo, ela também tem a função de iluminar o caminho dos perdidos, trazer felicidade ao mundo humano e combater as criaturas da noite que habitam no submundo.`}
      />
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
});