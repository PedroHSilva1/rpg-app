import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import skillsData from "../data/skillData";
import { globalStyles } from "../styles/globalStyles.js";

export default function SkillSelectionScreen({ route, navigation }) {
  const { attributes } = route.params;
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelect = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((item) => item !== skill));
    } else if (selectedSkills.length < 2) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Selecione suas Perícias</Text>
      <FlatList
        data={skillsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              selectedSkills.includes(item) && styles.selectedCard,
            ]}
            onPress={() => handleSelect(item)}
          >
            <Text style={globalStyles.cardTitle}>{item.name}</Text>
            <Text style={globalStyles.cardDescription}>
              Atributo: {item.relatedAttribute}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() =>
          navigation.navigate("SpellSelectionScreen", { attributes, selectedSkills })
        }
      >
        <Text style={globalStyles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedCard: {
    backgroundColor: "#bb86fc",
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
  },
  cardDescription: {
    fontSize: 14,
    color: "#bbb",
  },
  button: {
    backgroundColor: "#bb86fc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
