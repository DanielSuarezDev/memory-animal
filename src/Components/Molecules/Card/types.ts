export interface CardProps {
    id: number;
    index: number;
    image: { url: string };
    checkMatch: (id: number, index: number) => void;
    isFlipped: boolean;
  }
  