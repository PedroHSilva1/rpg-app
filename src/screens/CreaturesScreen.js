import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Picker } from "react-native";
import Card from "../components/Card";
import { creatures } from "../data/creatures";
import {useTheme} from "../styles/themeContext";

export default function CreaturesScreen() {
  const { styles } = useTheme();
  const [filter, setFilter] = useState("Todas");

  const filteredCreatures = filter === "Todas"
    ? creatures
    : creatures.filter((creature) => creature.localidade === filter);

  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.scrollContent}>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Filtrar por Localidade:</Text>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
          style={styles.picker}
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


