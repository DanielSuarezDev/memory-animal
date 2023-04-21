export interface ScoreListProps {
  animals: any;
  user: any;
  scoreItems: any;
  resetGame: () => void;
  isGameCompleted: boolean;
  showModal: boolean;
  isMatchCardAnimated: boolean;
  handlePairsCountSubmit: (pairsCount: number) => void;
  pairsCount: number;
  setPairsCount: (pairsCount: number) => void;
  cards: any;
  setCards: (cards: any) => void;
}
