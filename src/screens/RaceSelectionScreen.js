import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { raceImages } from "../assets/images/images";
import {useTheme} from "../styles/themeContext";

export default function RaceSelectionScreen() {
  const { styles } = useTheme();
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
      // Verificar se há sub-raças
      const response = await fetch(`http://localhost:3001/subraces/race/${race.id}`);
      const data = await response.json();

      if (data.length > 0) {
        // Navegar para a tela de sub-raças
        navigation.navigate("SubRaceSelectionScreen", {
          raceId: race.id,
          raceName: race.name,
        });
      } else {
        // Sem sub-raças, ir direto para a ficha
        navigation.navigate("CharacterSheetScreen", {
          raceId: race.id,
          raceName: race.name,
        });
      }
    } catch (error) {
      console.error("Erro ao verificar sub-raças:", error);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Text style={styles.title}>Selecione uma Raça</Text>

      {races.length > 0 ? (
        races.map((race) => (
          <TouchableOpacity key={race.id} onPress={() => handleRaceSelection(race)}>
            <Card
              title={race.name}
              description={race.description}
              image={raceImages[race.id]}
            />
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noDataText}>Nenhuma raça encontrada</Text>
      )}
    </ScrollView>
  );
}
