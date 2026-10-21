import { useLocalSearchParams } from "expo-router";
import { QuestDetailScreen } from "../../screens/QuestDetailScreen";

export default function MissaoRoute() {
  // O id chega pela URL, ex.: /missao/goblin-das-props
  const { id } = useLocalSearchParams<{ id: string }>();

  return <QuestDetailScreen questId={id} />;
}
