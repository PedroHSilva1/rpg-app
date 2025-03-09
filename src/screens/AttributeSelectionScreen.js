import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from "../styles/globalStyles.js";

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
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>Distribua os Atributos</Text>

      {Object.keys(attributes).map((attr) => (
        <View key={attr} style={globalStyles.attributeRow}>
          <Text style={globalStyles.attributeLabel}>{attr.toUpperCase()}</Text>
          <View style={globalStyles.buttons}>
            <TouchableOpacity
              style={globalStyles.button}
              onPress={() => handleDecrement(attr)}
            >
              <Text style={globalStyles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={globalStyles.attributeValue}>{attributes[attr]}</Text>
            <TouchableOpacity
              style={globalStyles.button}
              onPress={() => handleIncrement(attr)}
            >
              <Text style={globalStyles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={globalStyles.confirmButton} onPress={handleConfirm}>
        <Text style={globalStyles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

