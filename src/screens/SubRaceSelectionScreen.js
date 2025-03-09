import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { globalStyles } from "../styles/globalStyles";

export default function SubRaceSelectionScreen() {
  const [subRaces, setSubRaces] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { raceId, raceName } = route.params; // Pegamos os parâmetros passados

  useEffect(() => {
    const fetchSubRaces = async () => {
      try {
        const response = await fetch(`http://localhost:3001/subraces/race/${raceId}`);
        const data = await response.json();
        setSubRaces(data);
      } catch (error) {
        console.error("Erro ao buscar sub-raças:", error);
      }
    };

    fetchSubRaces();
  }, [raceId]);

  // Função para selecionar uma sub-raça e navegar para CharacterSheetScreen
  const handleSubRaceSelection = async (subRace) => {
    try {
      // Buscar os dados completos da raça (opcional, caso precise de mais detalhes)
      const response = await fetch(`http://localhost:3001/races/${raceId}`);
      const raceData = await response.json();

      // Navegar para a tela de ficha do personagem
      navigation.navigate("CharacterSheetScreen", {
        raceId: raceId,
        raceName: raceName,
        subRaceId: subRace.id,
        subRaceName: subRace.name,
      });
    } catch (error) {
      console.error("Erro ao buscar dados da raça:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>
        Selecione uma Sub-Raça para {raceName}
      </Text>

      {subRaces.length > 0 ? (
        subRaces.map((subRace) => (
          <TouchableOpacity
            key={subRace.id}
            onPress={() => handleSubRaceSelection(subRace)}
          >
            <Card
              title={subRace.name}
              description={subRace.description}
            />
          </TouchableOpacity>
        ))
      ) : (
        <Text style={globalStyles.noDataText}>
          Essa raça não possui sub-raças.
        </Text>
      )}

      <TouchableOpacity
        style={[globalStyles.button, { marginTop: 20 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}



