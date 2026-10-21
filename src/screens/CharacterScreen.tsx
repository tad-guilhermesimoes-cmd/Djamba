import { Image, StyleSheet, Text, View } from "react-native";
import { Badge } from "../components/Badge";
import { EquipmentRow } from "../components/EquipmentRow";
import { ProgressBar } from "../components/ProgressBar";
import { Screen } from "../components/Screen";
import { ScreenHeader } from "../components/ScreenHeader";
import { equipment, player } from "../mocks/player";
import { colors, fonts } from "../theme";

const titleColors = [colors.purple, colors.red, colors.green];

export function CharacterScreen() {
  const stats = [
    { label: "MOEDAS", value: `🪙 ${player.coins}`, color: colors.orange },
    {
      label: "MISSÕES",
      value: `${player.completedQuests} concluídas`,
      color: colors.text,
    },
    { label: "SEQUÊNCIA", value: `🔥 ${player.streak} dias`, color: colors.red },
  ];

  return (
    <Screen section="Personagem">
      <ScreenHeader title="Personagem" />

      <View style={styles.profile}>
        <View style={styles.avatarRing}>
          <Image
            source={require("../../assets/images/lyra.png")}
            style={styles.avatar}
            resizeMode="cover"
            accessibilityLabel={`Avatar de ${player.name}`}
          />
        </View>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.characterClass}>{player.characterClass}</Text>
        <Badge label={`Nível ${player.level}`} color={colors.orange} />
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>PROGRESSO</Text>
            <Text style={styles.xp}>
              {player.xp} / {player.nextLevelXp} XP
            </Text>
          </View>
          <ProgressBar
            value={player.xp}
            max={player.nextLevelXp}
            color={colors.purple}
            label="Experiência para o próximo nível"
          />
          <View style={styles.row}>
            {stats.map((stat) => (
              <View key={stat.label} style={styles.stat}>
                <Text style={styles.label}>{stat.label}</Text>
                <Text style={[styles.statValue, { color: stat.color }]}>
                  {stat.value}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Títulos Desbloqueados</Text>
          <View style={styles.chips}>
            {player.titles.map((title, index) => (
              <Badge
                key={title}
                label={title}
                color={titleColors[index % titleColors.length]}
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipamento Atual</Text>
          {equipment.map((item) => (
            <EquipmentRow key={item.name} equipment={item} />
          ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profile: { alignItems: "center", gap: 4, paddingVertical: 12 },
  avatarRing: {
    padding: 3,
    marginBottom: 8,
    borderRadius: 64,
    backgroundColor: colors.purple,
  },
  avatar: { width: 112, height: 112, borderRadius: 56 },
  name: {
    fontFamily: fonts.extrabold,
    fontSize: 24,
    lineHeight: 29,
    color: colors.text,
  },
  characterClass: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    lineHeight: 17,
    color: colors.purple,
    marginBottom: 4,
  },
  main: { padding: 20, gap: 20 },
  card: {
    padding: 16,
    gap: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  label: {
    fontFamily: fonts.semibold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.muted,
  },
  xp: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: colors.text,
  },
  stat: { gap: 2 },
  statValue: {
    fontFamily: fonts.bold,
    fontSize: 14,
    lineHeight: 18,
  },
  section: { gap: 10 },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    lineHeight: 20,
    color: colors.text,
  },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
