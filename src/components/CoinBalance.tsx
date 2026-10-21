import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

type CoinBalanceProps = {
  coins: number;
};

export function CoinBalance({ coins }: CoinBalanceProps) {
  return (
    <View
      style={styles.badge}
      accessible
      accessibilityLabel={`Saldo: ${coins} moedas`}
    >
      <Icon name="coins" size={16} />
      <Text style={styles.text}>{coins} moedas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.orange,
    backgroundColor: colors.surface,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.orange,
  },
});
