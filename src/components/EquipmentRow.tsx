import { StyleSheet, Text, View } from "react-native";
import { Equipment } from "../types/domain";
import { colors, fonts } from "../theme";

type EquipmentRowProps = {
  equipment: Equipment;
};

export function EquipmentRow({ equipment }: EquipmentRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.emoji}>{equipment.emoji}</Text>
      <View style={styles.texts}>
        <Text style={styles.name}>{equipment.name}</Text>
        <Text style={styles.detail}>
          {equipment.slot} ({equipment.rarity})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },
  emoji: { fontSize: 20 },
  texts: { flex: 1, gap: 2 },
  name: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  detail: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 15,
    color: colors.muted,
  },
});
