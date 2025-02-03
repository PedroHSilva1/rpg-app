import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Card from "../components/Card";

const SubRaceSelectionScreen = () => {
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

  // ✅ Função para selecionar uma sub-raça e navegar para CharacterSheetScreen
  const handleSubRaceSelection = async (subRace) => {
    try {
      // Buscar os dados completos da raça
      const response = await fetch(`http://localhost:3001/races/${raceId}`);
      const raceData = await response.json();

      // Navegar para a tela de ficha do personagem com os dados da raça e da sub-raça
      navigation.navigate("CharacterSheetScreen", {
        raceId: raceId,
        raceName: raceName,
        subRaceId: subRace.id,   
        subRaceName: subRace.name, // Enviamos todas as informações da sub-raça
      });
    } catch (error) {
      console.error("Erro ao buscar dados da raça:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Selecione uma Sub-Raça para {raceName}
      </Text>

      {subRaces.length > 0 ? (
        subRaces.map((subRace) => (
          <TouchableOpacity key={subRace.id} onPress={() => handleSubRaceSelection(subRace)}>
            <Card title={subRace.name} description={subRace.description} />
          </TouchableOpacity>
        ))
      ) : (
        <Text>Essa raça não possui sub-raças.</Text>
      )}

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.goBack()}>
        <Text style={{ color: "blue" }}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SubRaceSelectionScreen;
