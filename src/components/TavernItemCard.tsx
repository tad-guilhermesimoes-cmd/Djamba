import { StyleSheet, Text, View } from "react-native";
import { TavernItem } from "../types/domain";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";
import { PrimaryButton } from "./PrimaryButton";

type TavernItemCardProps = {
  item: TavernItem;
  onRedeem: () => void;
};

export function TavernItemCard({ item, onRedeem }: TavernItemCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.emojiBox}>
          <Text style={styles.emoji}>{item.emoji}</Text>
        </View>
        <View style={styles.price}>
          <Icon name="coins" size={14} />
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.texts}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <PrimaryButton label="Resgatar" onPress={onRedeem} compact />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexBasis: "47%",
    flexGrow: 1,
    padding: 12,
    gap: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  emojiBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.border,
  },
  emoji: { fontSize: 18 },
  price: { flexDirection: "row", alignItems: "center", gap: 4 },
  priceText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.orange,
  },
  texts: { flex: 1, gap: 2 },
  name: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 14,
    color: colors.muted,
  },
});
