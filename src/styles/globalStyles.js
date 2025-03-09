import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // -------------------------
  // CONTAINER E TÍTULOS
  // -------------------------
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },

  // -------------------------
  // ATRIBUTOS (ex: telas de AttributeSelection)
  // -------------------------
  attributeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  attributeLabel: {
    fontSize: 18,
    color: "#fff",
  },
  attributeValue: {
    fontSize: 18,
    color: "#fff",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },

  // -------------------------
  // BOTÕES (genéricos)
  // -------------------------
  button: {
    backgroundColor: "#bb86fc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  // -------------------------
  // BOTÃO DE CONFIRMAÇÃO (se quiser manter separado)
  // -------------------------
  confirmButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#03dac6",
    borderRadius: 5,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  // -------------------------
  // ABA INFERIOR / TABS
  // -------------------------
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  // -------------------------
  // ÍCONES
  // -------------------------
  iconWrapper: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 50,
  },
  activeIconWrapper: {
    backgroundColor: "transparent",
  },
  icon: {
    width: 50,
    height: 50,
  },

  // -------------------------
  // CONTEÚDO (ex: para “cards” ou seções internas)
  // -------------------------
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

  // -------------------------
  // PICKER / LABELS
  // -------------------------
  pickerContainer: {
    marginBottom: 16,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 8,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    color: "black",
  },

  // -------------------------
  // ESTILOS EXTRAS
  // -------------------------
  noDataText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },

  // -------------------------
  // ESTILOS PARA CARDS (ex: tela de Skills)
  // -------------------------
  card: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedCard: {
    backgroundColor: "#bb86fc",
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
  },
  cardDescription: {
    fontSize: 14,
    color: "#bbb",
  },
});
