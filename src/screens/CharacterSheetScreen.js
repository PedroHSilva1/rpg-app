import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import Card from "../components/Card";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useTheme } from "../styles/themeContext.js";

export default function CharacterSheetScreen() {
  const { styles } = useTheme();
  const route = useRoute();
  const { characterId } = route.params; // Recebe o ID do personagem da tela anterior
  const [characterData, setCharacterData] = useState(null); // Armazena os dados do personagem
  const [activeTab, setActiveTab] = useState("status");
  const [skills, setSkills] = useState([]);
  const [features, setFeatures] = useState([]);

  // Busca os dados do personagem ao carregar a tela
  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/characters/${characterId}`);
        setCharacterData(response.data); // Armazena os dados do personagem
      } catch (error) {
        console.error("Erro ao buscar os dados do personagem:", error);
      }
    };

    fetchCharacterData();
  }, [characterId]);

  // Busca as skills ou features dependendo da aba ativa
  useEffect(() => {
    if (activeTab === "skills") {
      fetchSkills();
    } else if (activeTab === "features") {
      fetchFeatures();
    }
  }, [activeTab]);

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:3001/skill");
      setSkills(response.data); // Armazena as habilidades retornadas pelo backend
    } catch (error) {
      console.error("Erro ao buscar skills:", error);
    }
  };

  const fetchFeatures = async () => {
    try {
        const raceTraits = characterData?.race_id
            ? await axios.get(`http://localhost:3001/race_trait/race/${characterData.race_id}`).then(res => res.data)
            : [];
        
        const subRaceTraits = characterData?.subrace_id
            ? await axios.get(`http://localhost:3001/subraces/race/${characterData.subrace_id}`).then(res => res.data)
            : [];

        const combinedFeatures = [...raceTraits, ...subRaceTraits];
        console.log("Características combinadas:", combinedFeatures);
        setFeatures(combinedFeatures);
    } catch (error) {
        console.error("Erro ao buscar características:", error);
    }
  };

  const renderContent = () => {
    if (!characterData) {
      return <Text style={styles.text}>Carregando dados do personagem...</Text>;
    }

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
            {skills.length > 0 ? (
              skills.map((skill) => (
                <Text key={skill.id} style={styles.text}>
                  {skill.name}: 0
                </Text>
              ))
            ) : (
              <Text style={styles.text}>Nenhuma perícia encontrada.</Text>
            )}
          </View>
        );
        case "features":
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Características</Text>
      {features.length > 0 ? (
        features.map((feature) => (
          <Card
            key={feature.id}
            title={` ${feature.name}`}
            description={feature.description}
          />
        ))
      ) : (
        <Text style={styles.text}>Nenhuma característica encontrada.</Text>
      )}
    </ScrollView>
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
            <Text style={styles.text}>Mísseis Mágicos</Text>
          </View>
        );
      default:
        return <Text style={styles.text}>Selecione uma aba.</Text>;
    }
  };

  const renderIcon = (tab) => {
    const activeColor = styles.tabBar.activeColor;
    const inactiveColor = styles.tabBar.inactiveColor;

    switch (tab) {
      case "status":
        return <FontAwesome5 name="heartbeat" size={24} color={activeTab === tab ? activeColor : inactiveColor} />;
      case "skills":
        return <FontAwesome5 name="book" size={24} color={activeTab === tab ? activeColor : inactiveColor} />;
      case "features":
        return <MaterialIcons name="star" size={24} color={activeTab === tab ? activeColor : inactiveColor} />;
      case "items":
        return <FontAwesome5 name="box" size={24} color={activeTab === tab ? activeColor : inactiveColor} />;
      case "spells":
        return <Ionicons name="flash" size={24} color={activeTab === tab ? activeColor : inactiveColor} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.tabContainer}>
        {["status", "skills", "features", "items", "spells"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <View style={[styles.iconWrapper, activeTab === tab && styles.activeIconWrapper]}>
              {renderIcon(tab)}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.contentContainer}>{renderContent()}</ScrollView>
    </View>
  );
}