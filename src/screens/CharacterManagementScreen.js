import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../styles/themeContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CharacterManagementScreen({ navigation }) {
  const { styles } = useTheme();
  const [characters, setCharacters] = useState([]);
  const [userId, setUserId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem("userId");
      console.log("User ID recuperado do AsyncStorage:", storedUserId);
      setUserId(storedUserId);
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchCharacters();
    }
  }, [userId]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get("http://localhost:3001/characters");

      if (!userId) {
        console.error("Erro: userId não está definido.");
        return;
      }

      const userCharacters = response.data.filter((character) => {
        if (!character.user_id) {
          console.error("Erro: character.user_id não está definido para o personagem:", character);
          return false;
        }
        return character.user_id.toString() === userId.toString();
      });

      setCharacters(userCharacters);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  };

  const handleDeleteCharacter = async () => {
    try {
      await axios.delete(`http://localhost:3001/characters/${characterToDelete}`);
      setCharacters((prev) => prev.filter((char) => char.id !== characterToDelete));
      setModalVisible(false);
      setCharacterToDelete(null);
    } catch (error) {
      console.error("Erro ao deletar personagem:", error);
    }
  };

  const handleCharacterPress = (character) => {
    navigation.navigate("CharacterSheetScreen", {
      characterId: character.id,
      raceId: character.race_id, 
      subRaceId: character.subrace_id || null, 
      classId: character.class_id, 
      attributes: character.attributes,
    });
  };

  const renderCharacter = ({ item }) => (
    <TouchableOpacity
      style={styles.characterContainer}
      onPress={() => handleCharacterPress(item)} // Navega para a tela de ficha do personagem
    >
      <View style={styles.characterInfo}>
        <Text style={styles.characterText}>Nome: {item.char_name}</Text>
        <Text style={styles.characterText}>Raça: {item.races?.name || "N/A"}</Text>
        <Text style={styles.characterText}>Sub-Raça: {item.subrace?.name || "N/A"}</Text>
        <Text style={styles.characterText}>Classe: {item.classes?.name || "N/A"}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          setCharacterToDelete(item.id);
          setModalVisible(true);
        }}
      >
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCharacter}
        ListEmptyComponent={
          <Text style={styles.noDataText}>Nenhum personagem encontrado.</Text>
        }
      />

      {/* Modal de Confirmação */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Deletar Personagem</Text>
            <Text style={styles.modalMessage}>
              Tem certeza que deseja deletar este personagem?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleDeleteCharacter}
              >
                <Text style={styles.confirmButtonText}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}