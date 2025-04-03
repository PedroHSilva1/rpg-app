import { useTheme } from "../styles/themeContext";
import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function FilterModal({ visible, onClose, filters = {}, onApply, modalHeight }) {
  const { styles } = useTheme();
  const [selectedType, setSelectedType] = useState("Todas");
  const [selectedLocation, setSelectedLocation] = useState("Todas");

  const handleApply = () => {
    onApply({ type: selectedType, location: selectedLocation });
    onClose(); // Fecha o modal após aplicar os filtros
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={[styles.container, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}>
        <ScrollView style={[styles.contentContainer, { height: modalHeight }]}>
          <Text style={styles.title}>Filtrar Criaturas</Text>

          {/* Filtro por Tipo */}
          <Text style={styles.label}>Tipo</Text>
          {["Todas", "Dócil", "Hostil", "Neutro"].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.button,
                selectedType === type && { backgroundColor: styles.confirmButton.backgroundColor },
              ]}
              onPress={() => setSelectedType(type)}
            >
              <Text style={styles.buttonText}>{type}</Text>
            </TouchableOpacity>
          ))}

          {/* Filtro por Localização */}
          <Text style={styles.label}>Localização</Text>
          <ScrollView>
            {(filters.locations || []).map((location) => (
              <TouchableOpacity
                key={location}
                style={[
                  styles.button,
                  selectedLocation === location && { backgroundColor: styles.confirmButton.backgroundColor },
                ]}
                onPress={() => setSelectedLocation(location)}
              >
                <Text style={styles.buttonText}>{location}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Botões de Ação */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={handleApply}>
              <Text style={styles.confirmButtonText}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}