import { Pressable, StyleSheet, Text } from "react-native";
import { colors, fonts } from "../theme";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  compact?: boolean;
};

export function PrimaryButton({
  label,
  onPress,
  disabled,
  compact,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.button,
        compact && styles.compact,
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          compact && styles.compactLabel,
          disabled && styles.disabledLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: colors.purple,
  },
  compact: {
    minHeight: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.purple,
    backgroundColor: colors.border,
  },
  disabled: { backgroundColor: colors.border, borderColor: colors.border },
  pressed: { opacity: 0.75 },
  label: {
    fontFamily: fonts.bold,
    fontSize: 15,
    lineHeight: 19,
    color: colors.background,
  },
  compactLabel: { fontSize: 13, lineHeight: 16, color: colors.purple },
  disabledLabel: { color: colors.muted },
});
