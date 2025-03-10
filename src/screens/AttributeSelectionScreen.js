import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../styles/themeContext";

export default function AttributeSelectionScreen({ route, navigation }) {
  const { styles } = useTheme();
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

