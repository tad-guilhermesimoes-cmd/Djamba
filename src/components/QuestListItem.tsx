import { Pressable, StyleSheet, Text, View } from "react-native";
import { Quest } from "../types/domain";
import { colors, difficultyColors, fonts, statusColors } from "../theme";
import { Badge } from "./Badge";
import { MonsterFace } from "./MonsterFace";

type QuestListItemProps = {
  quest: Quest;
  onPress: () => void;
};

export function QuestListItem({ quest, onPress }: QuestListItemProps) {
  const difficultyColor = difficultyColors[quest.difficulty];

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${quest.title}. ${quest.difficulty}. ${quest.status}. Ver detalhes.`}
      style={({ pressed }) => [
        styles.card,
        { borderLeftColor: difficultyColor },
        pressed && styles.pressed,
      ]}
    >
      <MonsterFace color={difficultyColor} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {quest.title}
        </Text>
        <View style={styles.metadata}>
          <Text style={styles.difficulty}>{quest.difficulty}</Text>
          <Text style={styles.xp}>+{quest.reward.xp} XP</Text>
        </View>
      </View>
      <Badge label={quest.status} color={statusColors[quest.status]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  pressed: { opacity: 0.75 },
  details: { flex: 1, gap: 4 },
  title: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  metadata: { flexDirection: "row", alignItems: "center", gap: 8 },
  difficulty: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    color: colors.muted,
  },
  xp: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.green,
  },
});
