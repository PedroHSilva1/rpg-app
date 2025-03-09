import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Card from "../components/Card";
import { icons } from "../assets/images/images.js"; // Importa os ícones do arquivo externo
import { globalStyles } from "../styles/globalStyles.js";

export default function CharacterSheetScreen() {
  const route = useRoute();
  const { raceId, raceName, subRaceId, subRaceName } = route.params;
  const [activeTab, setActiveTab] = useState("status");
  const [skills, setSkills] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (activeTab === "skills") {
      fetchSkills();
    } else if (activeTab === "features") {
      fetchFeatures();
    }
  }, [activeTab]);

  const fetchSkills = async () => {
    try {
      const response = await fetch("http://localhost:3001/skill");
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Erro ao buscar skills:", error);
    }
  };

  const fetchFeatures = async () => {
    try {
      const response = await fetch(`http://localhost:3001/race_trait/race/${raceId}`);
      const data = await response.json();
      setFeatures(data);
    } catch (error) {
      console.error("Erro ao buscar features:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "status":
        return (
          <View>
            <Text style={globalStyles.sectionTitle}>Status</Text>
            <Text style={globalStyles.text}>Vida: 30</Text>
            <Text style={globalStyles.text}>CA: 15</Text>
            <Text style={globalStyles.text}>Iniciativa: +2</Text>
          </View>
        );
      case "skills":
        return (
          <View>
            <Text style={globalStyles.sectionTitle}>Perícias</Text>
            {skills.length > 0 ? (
              skills.map((skill) => (
                <Text key={skill.id} style={globalStyles.text}>
                  {skill.name}: 0
                </Text>
              ))
            ) : (
              <Text style={globalStyles.text}>Nenhuma perícia encontrada.</Text>
            )}
          </View>
        );
      case "features":
        return (
          <ScrollView>
            <Text style={globalStyles.sectionTitle}>Características</Text>
            {features.length > 0 ? (
              features.map((feature) => (
                <Card key={feature.id} title={feature.name} subtitle={raceName} description={feature.description} />
              ))
            ) : (
              <Text style={globalStyles.text}></Text>
            )}
          </ScrollView>
        );
      case "items":
        return (
          <View>
            <Text style={globalStyles.sectionTitle}>Itens</Text>
            <Text style={globalStyles.text}>Espada Longa</Text>
            <Text style={globalStyles.text}>Poção de Cura</Text>
            <Text style={globalStyles.text}>Escudo</Text>
          </View>
        );
      case "spells":
        return (
          <View>
            <Text style={globalStyles.sectionTitle}>Magias</Text>
            <Text style={globalStyles.text}>Mísseis Mágicos</Text>
          </View>
        );
      default:
        return <Text style={globalStyles.text}>Selecione uma aba.</Text>;
    }
  };

   return (
    <View style={globalStyles.container}>
      {/* Botões na parte superior */}
      <View style={globalStyles.tabContainer}>
        {Object.keys(icons).map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <View style={[globalStyles.iconWrapper, activeTab === tab && globalStyles.activeIconWrapper]}>
              <Image
                source={activeTab === tab ? icons[tab].active : icons[tab].inactive}
                style={globalStyles.icon}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      
      <ScrollView style={globalStyles.contentContainer}>{renderContent()}</ScrollView>
    </View>
  );
}

