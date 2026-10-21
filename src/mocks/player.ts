import { Equipment, Player } from "../types/domain";

export const player: Player = {
  name: "Lyra",
  characterClass: "Maga dos Estados",
  role: "player",
  level: 4,
  xp: 430,
  nextLevelXp: 600,
  coins: 120,
  streak: 5,
  completedQuests: 8,
  titles: ["Primeira Missão", "Sequência de 5", "Caçadora de Bugs"],
};

export const equipment: Equipment[] = [
  { name: "Manto do TypeScript", slot: "Costas", rarity: "Raro", emoji: "🧥" },
  { name: "Coroa de Commits", slot: "Cabeça", rarity: "Comum", emoji: "👑" },
];
