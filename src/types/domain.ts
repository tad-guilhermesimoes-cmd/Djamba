export type Role = "player" | "master";

export type Difficulty = "Fácil" | "Média" | "Difícil" | "Chefe";

export type QuestStatus = "Disponível" | "Aceita" | "Enviada";

export type Reward = {
  xp: number;
  coins: number;
  item?: string;
};

export type Quest = {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  status: QuestStatus;
  criteria: string[];
  dueDate?: string;
  reward: Reward;
};

export type Player = {
  name: string;
  characterClass: string;
  role: Role;
  level: number;
  xp: number;
  nextLevelXp: number;
  coins: number;
  streak: number;
  completedQuests: number;
  titles: string[];
};

export type Equipment = {
  name: string;
  slot: string;
  rarity: "Comum" | "Raro" | "Lendário";
  emoji: string;
};

export type TavernItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
};

export type Boss = {
  name: string;
  remainingHealth: number;
  classContribution: number;
};
