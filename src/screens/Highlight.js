import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import {useTheme} from "../styles/themeContext";

export default function Highlight() {
  const { styles } = useTheme();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <Card
        title="Dyah - Ceifadora do Norte"
        
        description="Dyah é uma entidade poderosa que reina sobre o norte. Sua história está envolta em mistérios."
      />
      <Card
        title="Lumini, Deusa da Luz"
        image={require("../assets/images/godImages/Lumini.jpg")}
        
        description={` Lumini é aquela que traz a luz para o mundo dos mortais.\n\n Cada nascer do dia carrega um sorriso alegre e contagiante da Deusa.\n\n Além de trazer a luz ao mundo, ela também tem a função de iluminar o caminho dos perdidos, trazer felicidade ao mundo humano e combater as criaturas da noite que habitam no submundo.`}
      />
    </ScrollView>
  );
}

