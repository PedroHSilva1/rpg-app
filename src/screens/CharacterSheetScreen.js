import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function CharacterSheetScreen() {
  const [activeTab, setActiveTab] = useState("status");

  const renderContent = () => {
    switch (activeTab) {
      case "status":
        return (
          <View>
            <Text style={styles.sectionTitle}>Status</Text>
            <Text style={styles.text}>Vida: 30</Text>
            <Text style={styles.text}>CA: 15</Text>
            <Text style={styles.text}>Iniciativa: +2</Text>
          </View>
        );
      case "skills":
        return (
          <View>
            <Text style={styles.sectionTitle}>Perícias</Text>
            <Text style={styles.text}>Acrobacia: +4</Text>
            <Text style={styles.text}>Arcanismo: +2</Text>
            <Text style={styles.text}>Furtividade: +5</Text>
          </View>
        );
      case "features":
        return (
          <View>
            <Text style={styles.sectionTitle}>Características</Text>
            <Text style={styles.text}>Força Extraordinária</Text>
            <Text style={styles.text}>Resistência Física</Text>
          </View>
        );
      case "items":
        return (
          <View>
            <Text style={styles.sectionTitle}>Itens</Text>
            <Text style={styles.text}>Espada Longa</Text>
            <Text style={styles.text}>Poção de Cura</Text>
            <Text style={styles.text}>Escudo</Text>
          </View>
        );
      case "spells":
        return (
          <View>
            <Text style={styles.sectionTitle}>Magias</Text>
            <Text style={styles.text}>Bola de Fogo</Text>
            <Text style={styles.text}>Mísseis Mágicos</Text>
          </View>
        );
      default:
        return <Text style={styles.text}>Selecione uma aba.</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Botões na parte superior */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab("status")}>
          <Text style={styles.tabText}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab("skills")}>
          <Text style={styles.tabText}>Perícias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab("features")}>
          <Text style={styles.tabText}>Características</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab("items")}>
          <Text style={styles.tabText}>Itens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab("spells")}>
          <Text style={styles.tabText}>Magias</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo dinâmico */}
      <ScrollView style={styles.contentContainer}>{renderContent()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#333",
    marginHorizontal: 2,
    borderRadius: 5,
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  contentContainer: {
    backgroundColor: "#1c1c1c",
    padding: 10,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#bb86fc",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
});
