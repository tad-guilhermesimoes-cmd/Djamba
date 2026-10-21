import { StyleSheet, View } from "react-native";
import { colors } from "../theme";

type MonsterFaceProps = {
  color: string;
};

// Carinha zangada desenhada com Views para poder trocar a cor por dificuldade.
export function MonsterFace({ color }: MonsterFaceProps) {
  return (
    <View style={styles.box}>
      <View style={[styles.face, { borderColor: color }]}>
        <View style={styles.eyes}>
          <View style={[styles.eye, { backgroundColor: color }]} />
          <View style={[styles.eye, { backgroundColor: color }]} />
        </View>
        <View style={[styles.mouth, { borderColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  face: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  eyes: { flexDirection: "row", gap: 5 },
  eye: { width: 3, height: 3, borderRadius: 1.5 },
  mouth: {
    width: 9,
    height: 4,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
