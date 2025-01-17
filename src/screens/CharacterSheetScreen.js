import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CharacterSheetScreen({ route }) {
  const { selectedClass, selectedRace, selectedSubRace } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ficha do Personagem</Text>
      <Text style={styles.info}>Classe: {selectedClass.name}</Text>
      <Text style={styles.info}>Raça: {selectedRace.nome}</Text>
      <Text style={styles.info}>
        Sub-Raça: {selectedSubRace ? selectedSubRace.nome : "Sem Sub-Raça"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#bb86fc",
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 10,
  },
});
