import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { useTheme } from "../styles/themeContext";
import { classesImages } from "../assets/images/images";

export default function ClassSelectionScreen() {
  const { styles } = useTheme();
  const [classes, setClasses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:3001/classes");
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error("Erro ao buscar classes:", error);
      }
    };
    fetchClasses();
  }, []);

  const handleClassSelection = (selectedClass) => {
    navigation.navigate("RaceSelectionScreen", { selectedClass });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Text style={styles.title}>Selecione uma Classe</Text>

      {classes.length > 0 ? (
        classes.map((classItem) => (
          <TouchableOpacity
            key={classItem.id}
            onPress={() => handleClassSelection(classItem)}
          >
            <Card
              title={classItem.name}
              description={classItem.description}
              image={classesImages[classItem.id]} // Ajuste se necessário
            />
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noDataText}>Nenhuma classe encontrada</Text>
      )}
    </ScrollView>
  );
}