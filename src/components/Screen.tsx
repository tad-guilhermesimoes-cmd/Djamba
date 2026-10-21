import { ReactNode } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme";
import { BottomMenu, MenuSection } from "./BottomMenu";

type ScreenProps = {
  children: ReactNode;
  // Telas do menu principal mostram o BottomMenu com a aba ativa marcada.
  section?: MenuSection;
  // Conteúdo fixo acima do menu, como o botão de ação do detalhe.
  footer?: ReactNode;
};

export function Screen({ children, section, footer }: ScreenProps) {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          {children}
        </ScrollView>
        {footer && <View style={styles.footer}>{footer}</View>}
        {section && <BottomMenu active={section} />}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 390 : 600,
    backgroundColor: colors.background,
  },
  scroll: { flex: 1 },
  content: { flexGrow: 1 },
  footer: { paddingHorizontal: 20, paddingVertical: 12 },
});
