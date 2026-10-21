import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { BossCard } from "../components/BossCard";
import { MissionCard } from "../components/MissionCard";
import { PlayerHeader } from "../components/PlayerHeader";
import { Screen } from "../components/Screen";
import { boss } from "../mocks/boss";
import { player } from "../mocks/player";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";

export function JourneyScreen() {
  const featuredQuest = quests[0];

  return (
    <Screen section="Jornada">
      <PlayerHeader player={player} />
      <View style={styles.main}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            MISSÃO EM DESTAQUE
          </Text>
          <Link href="/missoes" style={styles.seeAll}>
            Ver todas
          </Link>
        </View>
        {featuredQuest && (
          <MissionCard
            quest={featuredQuest}
            onPress={() =>
              router.push({
                pathname: "/missao/[id]",
                params: { id: featuredQuest.id },
              })
            }
          />
        )}
        <BossCard boss={boss} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: { padding: 20, gap: 20 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontFamily: fonts.extrabold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.muted,
  },
  seeAll: {
    fontFamily: fonts.semibold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.purple,
  },
});
