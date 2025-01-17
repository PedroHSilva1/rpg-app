import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import Card from "../components/Card";
import { races } from "../data/racesData";

export default function RaceSelectionScreen({ route, navigation }) {
  const [selectedRace, setSelectedRace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const selectedClass = route.params.selectedClass;

  const filteredRaces = selectedRace
    ? races.filter((race) => race.subRaceOf === selectedRace.id)
    : races.filter((race) => !race.subRaceOf);

  const handleRaceSelection = (race) => {
    const hasSubRaces = races.some((r) => r.subRaceOf === race.id);
    if (hasSubRaces) {
      setSelectedRace(race);
    } else {
      handleLoadingAndNavigation(race, null);
    }
  };

  const handleSubRaceSelection = (subRace) => {
    handleLoadingAndNavigation(selectedRace, subRace);
  };

  const handleLoadingAndNavigation = (race, subRace) => {
    setIsLoading(true); // Ativa o carregamento
    setTimeout(() => {
      // Após 3 segundos, redireciona para a ficha do personagem
      setIsLoading(false);
      navigation.navigate("CharacterSheetScreen", {
        selectedClass,
        selectedRace: race,
        selectedSubRace: subRace,
      });
    }, 3000);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#bb86fc" />
        <Text style={styles.loadingText}>Criando a Ficha do Personagem...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {selectedRace ? `Selecione uma Sub-Raça para ${selectedRace.nome}` : "Selecione uma Raça"}
      </Text>

      {filteredRaces.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            selectedRace ? handleSubRaceSelection(item) : handleRaceSelection(item)
          }
        >
          <Card title={item.nome} description={item.descricao} />
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  loadingText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
  },
});
