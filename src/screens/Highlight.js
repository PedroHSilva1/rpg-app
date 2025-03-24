import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Certifique-se de ter o pacote @expo/vector-icons instalado
import Card from "../components/Card";
import { useTheme } from "../styles/themeContext";

export default function Highlight() {
  const { styles } = useTheme();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
          <Ionicons name="settings-outline" size={24} color={styles.title.color} style={{ marginRight: 16 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, styles.title.color]);

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