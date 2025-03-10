import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import {useTheme} from "../styles/themeContext";

export default function Deities() {
  const { styles } = useTheme();
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.scrollContent}>
      
      <Card
        title="Lumini, Deusa da Luz"
        image={require("../assets/images/godImages/Lumini.jpg")}
        
        description={` Lumini é aquela que traz a luz para o mundo dos mortais.\n\n Cada nascer do dia carrega um sorriso alegre e contagiante da Deusa.\n\n Além de trazer a luz ao mundo, ela também tem a função de iluminar o caminho dos perdidos, trazer felicidade ao mundo humano e combater as criaturas da noite que habitam no submundo.`}
      />

      <Card
        title="Endrius, Deus da Terra"
        image={require("../assets/images/godImages/Endrius.jpg")}
        description={` Endrius é o Deus mais jovem da criação.\n\n Sua função é vital para o mundo, ele é a força da terra e a vida nos bosques, florestas e onde habita o verde.\n\n Protetor dos animais e o mais calmo de todos, sendo também um dos que apoiam a pacificidade, mas que não deixa atos de maldade impunes, ainda mais quando isso afeta o verde.`}
      />

      <Card
        title="Coradia, Deus da Água"
        image={require("../assets/images/godImages/Coradia.jpg")}
        description={` A divindade das águas abençoa este mundo com a magnitude fluvial, fazendo o fluxo do mundo andar para frente.\n\n Ensinou as demais raças o conceito de sabedoria e conhecimento sobre a vida marítima.\n\n Onde a guerra dos nêmesis acontecia, ela teve grande participação curando os aliados feridos, restaurando o equilíbrio mental, e purificando as mentes confusas.`}
      />

      <Card
        title="Ignascia, Deusa do Fogo"
        image={require("../assets/images/godImages/Ignascia.jpg")}
        description={` A Deusa criadora das chamas, a primeira Deusa-Guerreira a existir.\n\n Ensinou os humanos as artes da guerra, lhes deu o discernimento sob a criação de armas e lhes trouxe o calor nas noites frias.\n\n Aquela que trouxe esperança quando não havia mais nenhuma, seu calor envolveu o mundo trazendo a chama da paixão e a motivação para continuar a lutar por aquilo que todos acreditavam:\n\n "Ainda que eu morra em meio aos monstros e o obscuro tente me devorar Continuo queimando e assim trarei um novo amanhã..."`}
      />

      <Card
        title="Zephyria, Deusa dos Ventos"
        image={require("../assets/images/godImages/Zephyria.jpg")}
        description={` Zephyria a força dos ventos e herdeira do trono de Zephyrus, o antigo deus Criador do Vento que se sacrificou em nome do mundo.\n\n Ela traz consigo a resiliência dos céus, pregando liberdade e trazendo justiça aqueles que escravizam ou tomam para si a liberdade do outro.`}
      />
      
    </ScrollView>
  );
}

