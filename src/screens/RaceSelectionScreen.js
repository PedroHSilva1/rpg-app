import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { raceImages } from "../assets/images/images";

const RaceSelectionScreen = () => {
  const [races, setRaces] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        const response = await fetch("http://localhost:3001/races");
        const data = await response.json();
        setRaces(data);
      } catch (error) {
        console.error("Erro ao buscar raças:", error);
      }
    };

    fetchRaces();
  }, []);

  const handleRaceSelection = async (race) => {
    try {
      // Fazemos uma requisição para verificar se há sub-raças
      const response = await fetch(`http://localhost:3001/subraces/race/${race.id}`);
      const data = await response.json();
  
      if (data.length > 0) {
        // Se houver sub-raças, navegamos para a tela de sub-raças
        navigation.navigate("SubRaceSelectionScreen", { raceId: race.id, raceName: race.name });
      } else {
        // Se não houver sub-raças, vá direto para a próxima tela desejada
        navigation.navigate("CharacterSheetScreen", { raceId: race.id, raceName: race.name });
      }
    } catch (error) {
      console.error("Erro ao verificar sub-raças:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Selecione uma Raça</Text>
      
      {races.length > 0 ? (
        races.map((race) => (
          <TouchableOpacity key={race.id} onPress={() => handleRaceSelection(race)}>
            <Card title={race.name} description={race.description} image={raceImages[race.id]} />
          </TouchableOpacity>
        ))
      ) : (
        <Text>Nenhuma raça encontrada</Text>
      )}
    </ScrollView>
  );
};

export default RaceSelectionScreen;
