import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from "react-native";
import { useTheme } from "../styles/themeContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CharacterConfirmationScreen({ route, navigation }) {
  const { styles } = useTheme();
  const { attributes, selectedRace, selectedSubRace, selectedClass } = route.params;

  const [characterName, setCharacterName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = async () => {
    if (!characterName.trim()) {
      Alert.alert("Erro", "Por favor, insira um nome para o personagem.");
      window.alert("Por favor, insira um nome para o personagem.");
      return;
    }

    const userId = await AsyncStorage.getItem("userId"); // Recupera o user_id do armazenamento local

     if (!userId) {
    Alert.alert("Erro", "Usuário não autenticado.");
    return;
    }

    const characterData = {
      char_name: characterName,
      race_id: selectedRace.id,
      subrace_id: selectedSubRace?.id || null,
      class_id: selectedClass.id,
      user_id: userId,
      attributes,
    };

    try {
      await axios.post("http://localhost:3001/characters", characterData);
      Alert.alert("Sucesso", "Personagem criado com sucesso!");
      window.alert("Personagem criado com sucesso!");
      setModalVisible(false);
      navigation.navigate("CharacterManagementScreen"); // Redireciona para a tela de gerenciamento de personagens
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
      Alert.alert("Erro", "Ocorreu um erro ao criar o personagem.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criação de Personagem</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do personagem"
        placeholderTextColor="#aaa"
        value={characterName}
        onChangeText={setCharacterName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      {/* Modal de Confirmação */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirme os Dados do Personagem</Text>
            <Text style={styles.modalMessage}>Nome: {characterName}</Text>
            <Text style={styles.modalMessage}>Classe: {selectedClass.name}</Text>
            <Text style={styles.modalMessage}>Raça: {selectedRace.name}</Text>
            {selectedSubRace && (
              <Text style={styles.modalMessage}>Sub-Raça: {selectedSubRace.name}</Text>
            )}
            <Text style={styles.modalMessage}>Atributos:</Text>
            {Object.entries(attributes).map(([key, value]) => (
              <Text key={key} style={styles.modalMessage}>
                {key.toUpperCase()}: {value}
              </Text>
            ))}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}
              >
                <Text style={styles.confirmButtonText}>Criar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}