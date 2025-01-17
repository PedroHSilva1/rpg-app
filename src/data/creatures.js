import { Link } from "@react-navigation/native";

export const creatures = [
    {
      id: 1,
      nome: "Lobisomem",
      tipo: "Hostil",
      localidade: "Reino de Amélia",
      descricao: "Uma criatura feroz que aparece nas noites de lua cheia.",
      image: require("../assets/images/lobisomem.jpg"),
    },
    {
      id: 2,
      nome: "Fada do Lago",
      tipo: "Aliado",
      localidade: "Floresta Encantada",
      descricao: "Uma criatura mágica que ajuda viajantes perdidos.",
      image: require("../assets/images/fada.jpg"),
    },
    {
        id: 3,
        nome: "Carniçal da Madeira",
        tipo: "Hostil",
        localidade: "Floresta Amaldiçoada",
        descricao: "Uma criatura parasita. Reside nas cascas de árvores, sugando sua energia como alimento.",
      },
  ];
  
  