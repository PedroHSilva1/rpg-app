import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "../styles/themeContext";

export default function AttributeSelectionScreen({ route, navigation }) {
  const { styles } = useTheme();
  const { selectedClass, selectedRace, selectedSubRace } = route.params;

  const [attributes, setAttributes] = useState({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  });

  const [remainingPoints, setRemainingPoints] = useState(27);

  const calculateCost = (value) => {
    if (value <= 13) return value - 8; // 9 costs 1, 10 costs 2, ..., 13 costs 5
    if (value === 14) return 7;
    if (value === 15) return 9;
    return 0;
  };

  const handleIncrement = (attribute) => {
    const currentValue = attributes[attribute];
    const nextValue = currentValue + 1;
    const cost = calculateCost(nextValue);

    if (nextValue <= 15 && remainingPoints >= cost - calculateCost(currentValue)) {
      setAttributes((prev) => ({
        ...prev,
        [attribute]: nextValue,
      }));
      setRemainingPoints((prev) => prev - (cost - calculateCost(currentValue)));
    }
  };

  const handleDecrement = (attribute) => {
    const currentValue = attributes[attribute];
    const nextValue = currentValue - 1;
    const cost = calculateCost(currentValue);

    if (nextValue >= 8) {
      setAttributes((prev) => ({
        ...prev,
        [attribute]: nextValue,
      }));
      setRemainingPoints((prev) => prev + (cost - calculateCost(nextValue)));
    }
  };

  const handleConfirm = () => {
    navigation.navigate("SkillSelectionScreen", {
      selectedRace,
      selectedSubRace,
      selectedClass,
      attributes,
    });
    console.log(selectedClass, selectedRace, selectedSubRace, attributes);
  };

  return (
    <View style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
      <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
        <Text style={styles.title}>Distribua os Atributos</Text>
        <Text style={styles.remainingPoints}>
          Pontos Restantes: {remainingPoints}
        </Text>

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

        <TouchableOpacity
          style={[
            styles.confirmButton,
            remainingPoints === 0 ? styles.confirmButtonEnabled : styles.confirmButtonDisabled,
          ]}
          onPress={handleConfirm}
          disabled={remainingPoints !== 0}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}