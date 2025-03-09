import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { classes } from '../data/classesData'; 
import { globalStyles } from '../styles/globalStyles.js';

export default function ClassSelectionScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={globalStyles.container}
    style={globalStyles.scrollContent}>
      <Text style={globalStyles.title}>Selecione uma Classe</Text>
      {classes.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('RaceSelectionScreen', { selectedClass: item })}
        >
          <Card title={item.nome} image={item.image} description={item.descricao} />  
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
