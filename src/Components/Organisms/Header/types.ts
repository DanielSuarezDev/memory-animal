
export interface HeaderProps {
    user: string;
    resetGame: () => void;
    pairsCount: number;
    setPairsCount: (pairsCount: number) => void;
    handlePairsCountSubmit: any
  }