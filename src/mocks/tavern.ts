import { TavernItem } from "../types/domain";

export const tavernItems: TavernItem[] = [
  {
    id: "visao-do-oraculo",
    name: "Visão do Oráculo",
    description: "Veja uma dica da missão atual.",
    price: 30,
    emoji: "🔮",
  },
  {
    id: "escudo-contra-bugs",
    name: "Escudo contra Bugs",
    description: "Uma chance extra de reenvio na missão.",
    price: 50,
    emoji: "🛡️",
  },
  {
    id: "pocao-do-tempo",
    name: "Poção do Tempo",
    description: "+24h de prazo extra para entregar.",
    price: 40,
    emoji: "⏳",
  },
  {
    id: "segunda-chance",
    name: "Segunda Chance",
    description: "Refaça uma missão que foi reprovada.",
    price: 60,
    emoji: "🍀",
  },
  {
    id: "conselho-do-mestre",
    name: "Conselho do Mestre",
    description: "Feedback detalhado antecipado do seu código.",
    price: 80,
    emoji: "📜",
  },
];
