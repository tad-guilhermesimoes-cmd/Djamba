import { Pressable, StyleSheet, Text, View } from "react-native";
import { Quest } from "../types/domain";
import { colors, difficultyColors, fonts, statusColors } from "../theme";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

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
      <Icon name="mission" size={28} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {quest.title}
        </Text>
        <Text style={styles.metadata}>
          <Text style={{ color: difficultyColor }}>{quest.difficulty}</Text>
          {"  "}
          <Text style={styles.xp}>+{quest.reward.xp} XP</Text>
        </Text>
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
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  pressed: { opacity: 0.75 },
  details: { flex: 1, gap: 3 },
  title: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  metadata: {
    fontFamily: fonts.semibold,
    fontSize: 12,
    lineHeight: 15,
  },
  xp: { color: colors.green },
});
