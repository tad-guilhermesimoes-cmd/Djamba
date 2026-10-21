import { Difficulty, QuestStatus } from "./types/domain";

// As mesmas cores e famílias de fonte são compartilhadas por todas as telas.
export const colors = {
  background: "#282A36",
  surface: "#343746",
  border: "#44475A",
  text: "#F8F8F2",
  muted: "#6272A4",
  purple: "#BD93F9",
  cyan: "#8BE9FD",
  green: "#50FA7B",
  orange: "#FFB86C",
  red: "#FF5555",
  bossBackground: "#4C283C",
  parchment: "#F1ECC8",
  ink: "#352B24",
  inkLight: "#6D5A50",
};

export const fonts = {
  regular: "Inter_400Regular",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extrabold: "Inter_800ExtraBold",
};

export const difficultyColors: Record<Difficulty, string> = {
  Fácil: colors.purple,
  Média: colors.orange,
  Difícil: colors.red,
  Chefe: colors.red,
};

export const statusColors: Record<QuestStatus, string> = {
  Disponível: colors.cyan,
  Aceita: colors.purple,
  Enviada: colors.orange,
};
