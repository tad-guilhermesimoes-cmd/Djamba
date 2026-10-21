import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";

type RewardTileProps = {
  label: string;
  value: string;
  color: string;
};

export function RewardTile({ label, value, color }: RewardTileProps) {
  return (
    <View style={styles.tile}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    alignItems: "center",
    gap: 2,
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 10,
    lineHeight: 13,
    color: colors.muted,
  },
  value: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
  },
});
