import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CoinBalance } from "../components/CoinBalance";
import { Screen } from "../components/Screen";
import { ScreenHeader } from "../components/ScreenHeader";
import { TavernItemCard } from "../components/TavernItemCard";
import { player } from "../mocks/player";
import { tavernItems } from "../mocks/tavern";
import { TavernItem } from "../types/domain";
import { showMessage } from "../utils/showMessage";

export function TavernScreen() {
  // O saldo só vive nesta tela enquanto não existe uma API.
  const [coins, setCoins] = useState(player.coins);

  function handleRedeem(item: TavernItem) {
    if (coins < item.price) {
      showMessage(
        "Moedas insuficientes",
        `Você precisa de ${item.price - coins} moedas a mais para resgatar ${item.name}.`,
      );
      return;
    }

    setCoins(coins - item.price);
    showMessage("Item resgatado!", `${item.name} foi para o seu inventário.`);
  }

  return (
    <Screen section="Taverna">
      <ScreenHeader
        title="Taverna da Guilda"
        subtitle="Melhore sua jornada com benefícios"
        right={<CoinBalance coins={coins} />}
      />
      <View style={styles.grid}>
        {tavernItems.map((item) => (
          <TavernItemCard
            key={item.id}
            item={item}
            onRedeem={() => handleRedeem(item)}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    padding: 20,
  },
});
