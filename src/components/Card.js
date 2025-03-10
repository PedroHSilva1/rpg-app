import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useTheme } from "../styles/themeContext";

export default function Card({ title, subtitle, image, description, onPress }) {
  const { styles } = useTheme();

  // Se a função onPress existir, use o Pressable; caso contrário, apenas o View
  const CardComponent = onPress ? Pressable : View;

  return (
    <CardComponent onPress={onPress} style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      {image && (
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={styles.cardImage}
          resizeMode="contain"
        />
      )}
      <Text style={styles.cardDescription}>{description}</Text>
    </CardComponent>
  );
}
