import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Picker } from "react-native";
import Card from "../components/Card";
import { creatures } from "../data/creatures";
import { globalStyles } from "../styles/globalStyles.js";

export default function CreaturesScreen() {
  const [filter, setFilter] = useState("Todas");

  const filteredCreatures = filter === "Todas"
    ? creatures
    : creatures.filter((creature) => creature.localidade === filter);

  return (
    <ScrollView style={globalStyles.container}
    contentContainerStyle={globalStyles.scrollContent}>

      <View style={globalStyles.pickerContainer}>
        <Text style={globalStyles.label}>Filtrar por Localidade:</Text>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
          style={globalStyles.picker}
        >
          <Picker.Item label="Todas" value="Todas" />
          <Picker.Item label="Reino de Amélia" value="Reino de Amélia" />
          <Picker.Item label="Floresta Encantada" value="Floresta Encantada" />
          <Picker.Item label="Floresta Amaldiçoada" value="Floresta Amaldiçoada" />
        </Picker>
      </View>

      {filteredCreatures.map((creature) => (
        <Card
          key={creature.id}
          title={creature.nome}
          image={creature.image}
          description={creature.descricao}
        />
      ))}
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
  pickerContainer: {
    marginBottom: 16,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 8,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    color: "black",
  },
});
