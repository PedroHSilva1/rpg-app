import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { races } from '../data/racesData';


export default function RaceSelectionScreen({ route, navigation }) {
  const { selectedClass } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Você escolheu: {selectedClass.name}</Text>
      <Text style={styles.subtitle}>Agora, selecione uma Raça</Text>
      {races.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('CharacterSheetScreen', {
              selectedClass,
              selectedRace: item,
            })
          }
        >
          <Card title={item.nome} description={item.descricao} image={item.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#ccc',
  },
});
