import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function AttributeSelectionScreen({ route, navigation }) {
  const { selectedClass, selectedRace, selectedSubRace } = route.params;
  const [attributes, setAttributes] = useState({
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const handleIncrement = (attribute) => {
    setAttributes((prev) => ({
      ...prev,
      [attribute]: prev[attribute] + 1,
    }));
  };

  const handleDecrement = (attribute) => {
    if (attributes[attribute] > 0) {
      setAttributes((prev) => ({
        ...prev,
        [attribute]: prev[attribute] - 1,
      }));
    }
  };

  const handleConfirm = () => {
    navigation.navigate("SkillSelectionScreen", {
      selectedRace,
      selectedSubRace,
      selectedClass,
      attributes,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Distribua os Atributos</Text>

      {Object.keys(attributes).map((attr) => (
        <View key={attr} style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>{attr.toUpperCase()}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDecrement(attr)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.attributeValue}>{attributes[attr]}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleIncrement(attr)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    textAlign: "center",
  },
  attributeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  attributeLabel: {
    fontSize: 18,
    color: "#fff",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#bb86fc",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  attributeValue: {
    fontSize: 18,
    color: "#fff",
  },
  confirmButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#03dac6",
    borderRadius: 5,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
