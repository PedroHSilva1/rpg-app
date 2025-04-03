import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from "react-native";
import Card from "../components/Card";
import FilterModal from "../components/FilterModal";
import { useTheme } from "../styles/themeContext";
import axios from "axios";
import { creaturesImages } from "../assets/images/images";

export default function CreaturesScreen() {
  const { styles } = useTheme();
  const [creatures, setCreatures] = useState([]);
  const [filteredCreatures, setFilteredCreatures] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  useEffect(() => {
    fetchCreatures();
  }, []);

  const fetchCreatures = async () => {
    try {
      const response = await axios.get("http://localhost:3001/creatures");
      setCreatures(response.data);
      setFilteredCreatures(response.data);

      // Extrair localizações únicas
      const uniqueLocations = [...new Set(response.data.map((creature) => creature.location))];
      setLocations(uniqueLocations);
    } catch (error) {
      console.error("Erro ao buscar criaturas:", error);
    }
  };

  const applyFilters = (filters) => {
    const { type, location } = filters;

    const filtered = creatures.filter((creature) => {
      const matchesType = type === "Todas" || creature.type === type;
      const matchesLocation = location === "Todas" || creature.location === location;
      return matchesType && matchesLocation;
    });

    setFilteredCreatures(filtered);
    setFilterModalVisible(false); // Fecha o modal após aplicar os filtros
  };

  // Obter dimensões da tela
  const { height } = Dimensions.get("window");
  const modalHeight = height * 0.6; // Define o modal com 60% da altura da tela

  return (
    <View style={styles.container}>
      {/* Botão de Filtro */}
      <TouchableOpacity
        style={[styles.button, { alignSelf: "flex-end", marginBottom: 10 }]}
        onPress={() => setFilterModalVisible(true)}
      >
        <Text style={styles.buttonText}>Filtrar</Text>
      </TouchableOpacity>

      {/* Lista de Criaturas */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {filteredCreatures.map((creature) => (
          <Card
            key={creature.id}
            title={creature.name}
            image={creaturesImages[creature.id]}
            description={creature.description}
          />
        ))}
      </ScrollView>

      {/* Modal de Filtro */}
      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)} // Fecha o modal
        onApply={applyFilters}
        filters={{ locations }}
        modalHeight={modalHeight} // Passa a altura dinâmica para o modal
      />
    </View>
  );
}