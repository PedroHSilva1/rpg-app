import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import skillsData from "../data/skillData";
import {useTheme} from "../styles/themeContext";

export default function SkillSelectionScreen({ route, navigation }) {
  const { styles } = useTheme();
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
    <View style={styles.container}>
      <Text style={styles.title}>Selecione suas Perícias</Text>
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
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDescription}>
              Atributo: {item.relatedAttribute}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("SpellSelectionScreen", { attributes, selectedSkills })
        }
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
