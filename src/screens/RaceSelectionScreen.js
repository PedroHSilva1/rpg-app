import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import { races } from "../data/racesData";

export default function RaceSelectionScreen({ route, navigation }) {
  const [selectedRace, setSelectedRace] = useState(null);
  const selectedClass = route.params.selectedClass;

  const filteredRaces = selectedRace
    ? races.filter((race) => race.subRaceOf === selectedRace.id)
    : races.filter((race) => !race.subRaceOf);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {selectedRace ? `Selecione uma Sub-Raça para ${selectedRace.nome}` : "Selecione uma Raça"}
      </Text>

      {filteredRaces.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            item.subRaceOf
              ? navigation.navigate("CharacterSheetScreen", {
                  selectedClass: selectedClass,
                  selectedRace: selectedRace,
                  selectedSubRace: item,
                })
              : setSelectedRace(item)
          }
        >
          <Card title={item.nome} description={item.descricao} image={item.image} />
        </TouchableOpacity>
      ))}

      {selectedRace && (
        <TouchableOpacity style={styles.backButton} onPress={() => setSelectedRace(null)}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#bb86fc",
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});