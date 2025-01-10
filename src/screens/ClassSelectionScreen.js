import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { classes } from '../data/classesData';  // Importação Corrigida

export default function ClassSelectionScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Selecione uma Classe</Text>
      {classes.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('RaceSelectionScreen', { selectedClass: item })}
        >
          <Card title={item.nome} image={item.image} description={item.descricao} />  {/* Propriedades Corrigidas */}
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
    marginBottom: 20,
    color: '#fff',
  },
});
