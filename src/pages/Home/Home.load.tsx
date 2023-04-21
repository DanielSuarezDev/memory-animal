/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import useStore from "../../store";
import useLogin from "../../hook/useLogin";
import { Lion, Hen, Dog } from "../../assets";
import useAnimals from "../../hook/useAnimals";
import { useResetGame } from "../../hook/useResetGame";

import { Home } from "./Home";

export const HomeLoad = () => {
  const [isMatchCardAnimated, setIsMatchCardAnimated] = useState(false);
  const { animals, loading, error, loadAnimals } = useAnimals();
  const [pairsCount, setPairsCount] = useState(animals ? animals.entries.length : 6);
  const { matches, errors, attempts, gameCompleted } = useStore((state) => ({
    matches: state.matches,
    errors: state.errors,
    attempts: state.attempts,
    gameCompleted: state.gameCompleted,
  }));
  const [cards, setCards] = useState<any>([]);

  const resetBoard = () => {
    setCards(
      cards.map((card: any) => {
        return { ...card, isFlipped: false };
      })
    );
  };
console.log(animals.entries.length)
  const { resetGame } = useResetGame(resetBoard);

  const { user } = useLogin((state) => ({
    user: state.user,
  }));

  const scoreItems = [
    {
      icon: Lion,
      text: "Intentos",
      count: attempts,
    },
    {
      icon: Hen,
      text: "Aciertos",
      count: matches,
    },
    {
      icon: Dog,
      text: "Errores",
      count: errors,
    },
  ];

  const handlePairsCountSubmit = async (e: any) => {
    e.preventDefault();
    await setPairsCount(pairsCount);
    loadAnimals(pairsCount);
  };
  

  useEffect(() => {
    loadAnimals(pairsCount);
  }, [loadAnimals]);

  useEffect(() => {
    if (matches > 0) {
      setIsMatchCardAnimated(true);
      setTimeout(() => {
        setIsMatchCardAnimated(false);
      }, 1000);
    }
  }, [matches]);

  if (loading) {
    return <div>Loading animals...</div>;
  }

  if (error) {
    return <div>Error loading animals: {error.message}</div>;
  }
  return (
    <Home
      handlePairsCountSubmit={handlePairsCountSubmit}
      pairsCount={pairsCount}
      setPairsCount={setPairsCount}
      animals={animals.entries}
      user={user}
      scoreItems={scoreItems}
      resetGame={resetGame}
      isGameCompleted={gameCompleted}
      showModal={gameCompleted}
      isMatchCardAnimated={isMatchCardAnimated}
      cards={cards}
      setCards={setCards}
    />
  );
};
