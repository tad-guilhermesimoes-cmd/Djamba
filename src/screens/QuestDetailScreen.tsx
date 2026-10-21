import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Badge } from "../components/Badge";
import { Icon } from "../components/Icon";
import { ParchmentCard } from "../components/ParchmentCard";
import { PrimaryButton } from "../components/PrimaryButton";
import { RewardTile } from "../components/RewardTile";
import { Screen } from "../components/Screen";
import { BackHeader } from "../components/ScreenHeader";
import { quests } from "../mocks/quests";
import { colors, difficultyColors, fonts } from "../theme";
import { QuestStatus } from "../types/domain";
import { showMessage } from "../utils/showMessage";

type QuestDetailScreenProps = {
  questId: string;
};

const actionLabels: Record<QuestStatus, string> = {
  Disponível: "Aceitar Missão",
  Aceita: "Enviar Atividade",
  Enviada: "Aguardando avaliação",
};

function goBack() {
  // Quem abriu o link direto não tem tela anterior na pilha.
  if (router.canGoBack()) {
    router.back();
  } else {
    router.replace("/missoes");
  }
}

export function QuestDetailScreen({ questId }: QuestDetailScreenProps) {
  const quest = quests.find((item) => item.id === questId);
  const [status, setStatus] = useState<QuestStatus>(
    quest?.status ?? "Disponível",
  );

  if (!quest) {
    return (
      <Screen>
        <BackHeader title="Detalhes" onBack={goBack} />
        <Text style={styles.notFound}>Missão não encontrada.</Text>
      </Screen>
    );
  }

  const handleAction = () => {
    if (status === "Disponível") {
      setStatus("Aceita");
      showMessage("Missão aceita!", `"${quest.title}" agora está na sua lista.`);
      return;
    }

    setStatus("Enviada");
    showMessage(
      "Atividade enviada",
      "O mestre da guilda vai avaliar sua entrega em breve.",
    );
  };

  return (
    <Screen
      footer={
        <PrimaryButton
          label={actionLabels[status]}
          onPress={handleAction}
          disabled={status === "Enviada"}
        />
      }
    >
      <BackHeader title="Detalhes" onBack={goBack} />
      <View style={styles.banner}>
        <Icon name="mission" size={64} />
      </View>

      <View style={styles.main}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{quest.title}</Text>
          <Badge
            label={quest.difficulty.toUpperCase()}
            color={difficultyColors[quest.difficulty]}
          />
        </View>

        <ParchmentCard
          description={quest.description}
          criteria={quest.criteria}
          dueDate={quest.dueDate}
        />

        <View style={styles.rewards}>
          <Text style={styles.label}>SPOILS DE BATALHA (RECOMPENSAS)</Text>
          <View style={styles.tiles}>
            <RewardTile
              label="XP"
              value={`+${quest.reward.xp} XP`}
              color={colors.green}
            />
            <RewardTile
              label="OURO"
              value={`+${quest.reward.coins} moedas`}
              color={colors.orange}
            />
            {quest.reward.item && (
              <RewardTile
                label="EQUIPAMENTO"
                value={quest.reward.item}
                color={colors.cyan}
              />
            )}
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  main: { padding: 20, gap: 20 },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  title: {
    flex: 1,
    fontFamily: fonts.extrabold,
    fontSize: 22,
    lineHeight: 27,
    color: colors.text,
  },
  rewards: { gap: 8 },
  label: {
    fontFamily: fonts.bold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.muted,
  },
  tiles: { flexDirection: "row", gap: 8 },
  notFound: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 18,
    color: colors.muted,
    textAlign: "center",
    padding: 24,
  },
});
