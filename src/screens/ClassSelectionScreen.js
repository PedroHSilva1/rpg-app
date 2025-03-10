import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { classes } from '../data/classesData'; 
import {useTheme} from "../styles/themeContext";

export default function ClassSelectionScreen({ navigation }) {
  const { styles } = useTheme();
  return (
    <ScrollView contentContainerStyle={styles.container}
    style={styles.scrollContent}>
      <Text style={styles.title}>Selecione uma Classe</Text>
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
