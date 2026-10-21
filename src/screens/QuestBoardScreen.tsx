import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FilterTabs } from "../components/FilterTabs";
import { QuestListItem } from "../components/QuestListItem";
import { Screen } from "../components/Screen";
import { ScreenHeader } from "../components/ScreenHeader";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";
import { QuestStatus } from "../types/domain";

type Filter = "Todas" | QuestStatus;

const filters: readonly Filter[] = ["Todas", "Disponível", "Aceita", "Enviada"];

export function QuestBoardScreen() {
  const [filter, setFilter] = useState<Filter>("Todas");

  const visibleQuests =
    filter === "Todas"
      ? quests
      : quests.filter((quest) => quest.status === filter);

  return (
    <Screen section="Missões">
      <ScreenHeader title="Mural de Missões" />
      <FilterTabs options={filters} value={filter} onChange={setFilter} />
      <View style={styles.list}>
        {visibleQuests.map((quest) => (
          <QuestListItem
            key={quest.id}
            quest={quest}
            onPress={() =>
              router.push({ pathname: "/missao/[id]", params: { id: quest.id } })
            }
          />
        ))}
        {visibleQuests.length === 0 && (
          <Text style={styles.empty}>Nenhuma missão com esse status.</Text>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { padding: 20, gap: 12 },
  empty: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 18,
    color: colors.muted,
    textAlign: "center",
    paddingVertical: 24,
  },
});
