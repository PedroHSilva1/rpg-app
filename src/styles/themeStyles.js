import { StyleSheet } from "react-native";

export function createGlobalStyles(theme) {
  return StyleSheet.create({

  // -------------------------
  // CONTAINER E TÍTULOS
  // -------------------------
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.background,
    },
    scrollContent: {
      flexGrow: 1,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.titleColor,
      textAlign: "center",
      marginBottom: 16,
    },
    text: {
      fontSize: 16,
      color: theme.text,
      marginBottom: 5,
    },

  // -------------------------
  // ATRIBUTOS 
  // -------------------------
    attributeRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
    },
    attributeLabel: {
      fontSize: 18,
      color: theme.text,
    },
    attributeValue: {
      fontSize: 18,
      color: theme.text,
    },

  // -------------------------
  // BOTÕES (genéricos)
  // -------------------------
    buttons: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      flexDirection: "row", 
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.buttonText || "#fff", 
    },
    confirmButton: {
      marginTop: 20,
      padding: 15,
      backgroundColor: theme.secondary,
      borderRadius: 5,
      alignItems: "center",
    },
    confirmButtonText: {
      color: "#000",
      fontSize: 18,
      fontWeight: "bold",
    },
    themeButton: {
      backgroundColor: theme.secondary, 
      paddingHorizontal: 20,
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
      backgroundColor: "#FFF",
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
  // CONTEÚDO
  // -------------------------
    contentContainer: {
      backgroundColor: theme.cardBg,
      padding: 10,
      borderRadius: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.sectionTitle,
      marginBottom: 10,
    },

  // -------------------------
  // PICKER / LABELS
  // -------------------------
    pickerContainer: {
      marginBottom: 16,
      backgroundColor: theme.cardBg,
      borderRadius: 8,
      padding: 8,
    },
    label: {
      color: theme.text,
      fontSize: 16,
      marginBottom: 8,
    },
    picker: {
      color: theme.text,
    },

  // -------------------------
  // ESTILOS EXTRAS
  // -------------------------
    noDataText: {
      color: theme.text,
      fontSize: 16,
      textAlign: "center",
      marginTop: 20,
    },
  // -------------------------
  // ESTILOS PARA CARDS
  // -------------------------
    card: {
      backgroundColor: theme.cardBg,
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      color: theme.text,
    },
    cardSubtitle: {
      fontSize: 12,
      color: "#cccccc",
      marginBottom: 8,
    },
    cardImage: {
      width: "100%",
      height: 200,
      borderRadius: 8,
      marginBottom: 8,
    },
    cardDescription: {
      fontSize: 14,
      color: theme.text,
    },
    tabBar: {
      backgroundColor: theme.tabBarBg,
      borderColor: theme.tabBarBorder,
      activeColor: theme.tabBarActive,
      inactiveColor: theme.tabBarInactive,
    },

  // -------------------------
  // Estilos para Login e Cadastro
  // -------------------------
    input: {
      backgroundColor: theme.cardBg,
      borderColor: theme.secondary, 
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      color: theme.text, 
    },
    placeholder: {
      color: theme.text,
    },
    link: {
      color: theme.primary, 
      textDecorationLine: "underline",
      marginTop: 10,
    },

  // -------------------------
  // ESTILOS PARA A LISTA DE PERSONAGENS
  // ------------------------- 
    characterContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.cardBg,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    characterInfo: {
      flex: 1,
    },
    characterText: {
      color: theme.text,
      fontSize: 16,
      marginBottom: 4,
    },
    deleteButton: {
      backgroundColor: theme.danger, // Use uma cor de perigo definida no tema
      padding: 8,
      borderRadius: 8,
    },
    newCharacterButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.primary,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    newCharacterText: {
      color: theme.buttonText,
      fontSize: 16,
      marginLeft: 8,
    },
  });
}