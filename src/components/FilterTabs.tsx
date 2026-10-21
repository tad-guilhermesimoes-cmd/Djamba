import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { colors, fonts } from "../theme";

type FilterOption<T extends string> = {
  value: T;
  label: string;
};

type FilterTabsProps<T extends string> = {
  options: readonly FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
};

export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
}: FilterTabsProps<T>) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // Sem flexGrow: 0 a lista horizontal estica e ocupa a altura da tela.
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            style={[styles.tab, selected && styles.selected]}
          >
            <Text style={[styles.label, selected && styles.selectedLabel]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 0 },
  container: { alignItems: "center", gap: 8, paddingHorizontal: 20 },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: colors.surface,
  },
  selected: { backgroundColor: colors.purple },
  label: {
    fontFamily: fonts.semibold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.text,
  },
  selectedLabel: { fontFamily: fonts.bold, color: colors.background },
});
