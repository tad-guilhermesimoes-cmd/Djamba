import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";

type BadgeProps = {
  label: string;
  color: string;
};

// Etiqueta com contorno usada para dificuldade, status e títulos.
export function Badge({ label, color }: BadgeProps) {
  return (
    <View style={[styles.badge, { borderColor: color }]}>
      <Text style={[styles.text, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 11,
    lineHeight: 14,
  },
});
