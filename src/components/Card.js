import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Card({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={typeof image === "string" ? { uri: image } : image}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ffffff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#bbbbbb",
  },
});
