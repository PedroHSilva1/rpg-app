import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Picker } from "react-native";
import Card from "../components/Card";

export default function LocateScreen() {
  const [locations, setLocations] = useState([]); // Estado inicial como array
  const [filter, setFilter] = useState("Todas");

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await fetch("http://localhost:3001/locates"); // Ajuste a URL se necessário
      const data = await response.json();

      if (Array.isArray(data)) {
        setLocations(data);
      } else {
        console.error("Erro: dados de localidades não são um array", data);
        setLocations([]);
      }
    } catch (error) {
      console.error("Erro ao buscar localidades:", error);
      setLocations([]);
    }
  };

  // Filtra as localidades com base na região selecionada.
  const filteredLocations =
    filter === "Todas"
      ? locations
      : locations.filter((location) => location.location === filter);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Localidades</Text>

      {/* Filtro de Localidades */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Filtrar por Região:</Text>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Todas" value="Todas" />
          {Array.isArray(locations) &&
            // Cria um array de regiões únicas usando a propriedade "location"
            [...new Set(locations.map((item) => item.location))].map((regiao, index) => (
              <Picker.Item key={index} label={regiao} value={regiao} />
            ))}
        </Picker>
      </View>

      {filteredLocations.length > 0 ? (
        filteredLocations.map((location) => (
          <Card
            key={location.id}
            title={location.name}
            subtitle={location.subtitle}
            description={location.description}
          />
        ))
      ) : (
        <Text style={styles.noDataText}>Nenhuma localidade encontrada.</Text>
      )}
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
  noDataText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
