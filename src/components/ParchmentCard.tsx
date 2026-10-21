import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";

type ParchmentCardProps = {
  description: string;
  criteria: string[];
  dueDate?: string;
};

// O "pergaminho" com as instruções e os critérios de conclusão da missão.
export function ParchmentCard({
  description,
  criteria,
  dueDate,
}: ParchmentCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.section}>
        <Text style={styles.heading}>INSTRUÇÕES DO PERGAMINHO</Text>
        <Text style={styles.text}>{description}</Text>
      </View>

      <View style={[styles.section, styles.divided]}>
        <Text style={styles.heading}>CRITÉRIOS DE CONCLUSÃO</Text>
        {criteria.map((criterion) => (
          <Text key={criterion} style={styles.criterion}>
            ✓ {criterion}
          </Text>
        ))}
      </View>

      {dueDate && (
        <Text style={[styles.dueDate, styles.divided]}>
          ⏳ Prazo final: {dueDate}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    gap: 12,
    borderRadius: 12,
    backgroundColor: colors.parchment,
  },
  section: { gap: 6 },
  divided: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.inkLight,
  },
  heading: {
    fontFamily: fonts.bold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.inkLight,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.ink,
  },
  criterion: {
    fontFamily: fonts.semibold,
    fontSize: 13,
    lineHeight: 18,
    color: colors.ink,
  },
  dueDate: {
    fontFamily: fonts.semibold,
    fontSize: 13,
    lineHeight: 18,
    color: colors.ink,
  },
});
