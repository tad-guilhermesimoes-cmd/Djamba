import { Quest } from "../types/domain";

// Dados locais: os componentes não precisam conhecer uma API para funcionar.
export const quests: Quest[] = [
  {
    id: "goblin-das-props",
    title: "Derrote o Goblin das Props",
    description:
      "Crie um componente QuestCard reutilizável com props tipadas para título, dificuldade, prazo e recompensa.",
    difficulty: "Média",
    status: "Disponível",
    criteria: [
      "Props tipadas com TypeScript",
      "Estilização Dracula Theme fiel",
      "Componente isolado e exportado",
    ],
    dueDate: "15 de agosto",
    reward: { xp: 100, coins: 20, item: "Manto do TS" },
  },
  {
    id: "slime-dos-componentes",
    title: "Slime dos Componentes",
    description:
      "Quebre a tela Jornada em componentes menores, cada um com uma única responsabilidade.",
    difficulty: "Fácil",
    status: "Aceita",
    criteria: [
      "Ao menos três componentes novos",
      "Nenhum estilo duplicado entre eles",
    ],
    dueDate: "22 de agosto",
    reward: { xp: 50, coins: 10 },
  },
  {
    id: "hidra-do-estado",
    title: "Hidra do Estado",
    description:
      "Use o hook useState para filtrar uma lista de missões sem recarregar a tela.",
    difficulty: "Difícil",
    status: "Enviada",
    criteria: [
      "Filtro controlado por useState",
      "Lista renderizada com map e key",
      "Estado vazio tratado",
    ],
    dueDate: "29 de agosto",
    reward: { xp: 200, coins: 40, item: "Coroa de Commits" },
  },
  {
    id: "dragao-da-api",
    title: "Dragão da API",
    description:
      "Navegue entre telas com Expo Router, enviando o id da missão como parâmetro da rota.",
    difficulty: "Difícil",
    status: "Disponível",
    criteria: [
      "Rotas criadas na pasta app",
      "Parâmetro lido com useLocalSearchParams",
      "Botão de voltar funcionando",
    ],
    reward: { xp: 500, coins: 100 },
  },
];
