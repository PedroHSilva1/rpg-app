import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themePalettes } from "./themePallets";
import { createGlobalStyles } from "./themeStyles";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark"); // Define o tema inicial (pode ser "light" também)
  const [styles, setStyles] = useState(createGlobalStyles(themePalettes[theme]));

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("selectedTheme");
      if (savedTheme) {
        setTheme(savedTheme);
        setStyles(createGlobalStyles(themePalettes[savedTheme]));
      }
    };
    loadTheme();
  }, []);

  const changeTheme = async (themeName) => {
    setTheme(themeName);
    setStyles(createGlobalStyles(themePalettes[themeName]));
    await AsyncStorage.setItem("selectedTheme", themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, styles, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
