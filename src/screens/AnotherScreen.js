import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

export default function AnotherScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Card
        title="Dyah - Ceifadora do Norte"
        image={{ uri: "https://via.placeholder.com/300" }}
        description="Dyah é uma entidade poderosa que reina sobre o norte. Sua história está envolta em mistérios."
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