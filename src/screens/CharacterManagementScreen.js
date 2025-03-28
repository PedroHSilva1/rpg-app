import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../styles/themeContext";


export default function CharacterManagementScreen({ navigation }) {
  const { styles } = useTheme();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Carrega os personagens do banco de dados
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  const handleCreateCharacter = () => {
    // Navega para o fluxo de criação de personagem
    navigation.navigate("ClassSelectionScreen");
  };

  const handleDeleteCharacter = async (id) => {
    Alert.alert(
      "Deletar Personagem",
      "Tem certeza que deseja deletar este personagem?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: async () => {
            await deleteCharacter(id); // Remove o personagem do banco de dados
            setCharacters((prev) => prev.filter((char) => char.id !== id));
          },
        },
      ]
    );
  };

  const renderCharacter = ({ item }) => (
    <View style={styles.characterContainer}>
      <View style={styles.characterInfo}>
        <Text style={styles.characterText}>{item.name}</Text>
        <Text style={styles.characterText}>{item.class}</Text>
        <Text style={styles.characterText}>{item.race}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteCharacter(item.id)}
      >
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCharacter}
        ListEmptyComponent={
          <TouchableOpacity style={styles.newCharacterButton} onPress={handleCreateCharacter}>
            <Ionicons name="add" size={24} color="white" />
            <Text style={styles.newCharacterText}>Novo Personagem</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}