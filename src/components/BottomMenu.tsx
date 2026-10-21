import { Href, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

export type MenuSection = "Jornada" | "Missões" | "Taverna" | "Personagem";

type BottomMenuProps = {
  active: MenuSection;
};

const items = [
  { label: "Jornada", icon: "journey", href: "/" },
  { label: "Missões", icon: "quests", href: "/missoes" },
  { label: "Taverna", icon: "tavern", href: "/taverna" },
  { label: "Personagem", icon: "character", href: "/personagem" },
] as const satisfies readonly {
  label: MenuSection;
  icon: string;
  href: Href;
}[];

export function BottomMenu({ active }: BottomMenuProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const selected = item.label === active;

        return (
          <Pressable
            key={item.label}
            // navigate reaproveita a tela se ela já estiver na pilha.
            onPress={() => !selected && router.navigate(item.href)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityState={{ selected }}
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
          >
            <Icon name={item.icon} />
            <Text style={[styles.label, selected && styles.active]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  item: {
    width: 72,
    flexShrink: 1,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  pressed: { opacity: 0.65 },
  label: {
    fontFamily: fonts.semibold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.muted,
  },
  active: { color: colors.purple },
});
