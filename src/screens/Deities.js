import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import {useTheme} from "../styles/themeContext";
import axios from "axios";
import { deitiesImages } from "../assets/images/images";

export default function Deities() {
  const { styles } = useTheme();
  const [deities, setDeities] = useState([]);

    useEffect(() => {
        const fetchDeities = async () => {
            try {
                const response = await axios.get("http://localhost:3001/deities");
                setDeities(response.data);
            } catch (error) {
                console.error("Erro ao buscar divindades:", error);
            }
        };

        fetchDeities();
    }, []);
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.scrollContent}>
      {deities.map((deity) => (
                <Card
                    key={deity.id}
                    title={deity.name}
                    image={deitiesImages[deity.id]}               
                    description={deity.description}
                />
            ))}
            
      
      
    </ScrollView>
  );
}

