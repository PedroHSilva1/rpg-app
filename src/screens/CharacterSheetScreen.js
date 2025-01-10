import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CharacterSheetScreen({ route, navigation }) {
  const { selectedClass, selectedRace } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ficha de Personagem</Text>
      <Text style={styles.info}>Classe: {selectedClass.name}</Text>
      <Text style={styles.info}>Descrição: {selectedClass.description}</Text>
      <Text style={styles.info}>Raça: {selectedRace.name}</Text>
      <Text style={styles.info}>Descrição: {selectedRace.description}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Ficha confirmada!')}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
