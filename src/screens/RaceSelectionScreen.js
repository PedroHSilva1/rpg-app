import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import Card from "../components/Card";

export default function RaceSelectionScreen({ route, navigation }) {
  const [races, setRaces] = useState([]);
  const [subRaces, setSubRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Buscar raças ao carregar o componente
    const fetchRaces = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/races");
        setRaces(response.data);
      } catch (error) {
        console.error("Erro ao buscar raças:", error);
      }
    };
    fetchRaces();
  }, []);

  const handleRaceSelection = async (race) => {
    try {
      setSelectedRace(race);

      // Buscar sub-raças da raça selecionada
      const response = await axios.get(`http://localhost:3001/api/subraces/${race.id}`);
      setSubRaces(response.data);

      // Se não houver sub-raças, navegue direto
      if (response.data.length === 0) {
        handleLoadingAndNavigation(race, null);
      }
    } catch (error) {
      console.error("Erro ao buscar sub-raças:", error);
    }
  };

  const handleSubRaceSelection = (subRace) => {
    handleLoadingAndNavigation(selectedRace, subRace);
  };

  const handleLoadingAndNavigation = (race, subRace) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("CharacterSheetScreen", {
        selectedRace: race,
        selectedSubRace: subRace,
      });
    }, 1000);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#bb86fc" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {selectedRace ? `Selecione uma Sub-Raça para ${selectedRace.name}` : "Selecione uma Raça"}
      </Text>

      {(selectedRace ? subRaces : races).map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            selectedRace ? handleSubRaceSelection(item) : handleRaceSelection(item)
          }
        >
          <Card title={item.name} description={item.description} />
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
