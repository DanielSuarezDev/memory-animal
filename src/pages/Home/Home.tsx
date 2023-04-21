import { FC } from "react";
import Confetti from "react-confetti";

import { Header } from "../../Components";
import { Score } from "../../Components/Molecules/Score/Score";
import { GameBoard } from "../../Components/Organisms/GameBoard/GameBoard";

import { ScoreListProps } from "./types";

export const Home: FC<ScoreListProps> = ({
  animals,
  user,
  scoreItems,
  resetGame,
  isGameCompleted,
  showModal,
  isMatchCardAnimated,
  cards,
      setCards,
  handlePairsCountSubmit,
pairsCount,
setPairsCount
}) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      {isGameCompleted && <Confetti />}
      {showModal && (
        <div className="absolute top-0 left-0 bottom-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center z-50">
            <h2 className="text-2xl font-bold mb-4">¡Ganaste!</h2>
            <p className="mb-6 text-3xl font-bold">{user}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded shadow"
              onClick={resetGame}
            >
              Iniciar nuevamente
            </button>
          </div>
        </div>
      )}
      <Header user={user}
      handlePairsCountSubmit={handlePairsCountSubmit}
      pairsCount={pairsCount}
      setPairsCount={setPairsCount}
      resetGame={resetGame}
      />
      <div className="flex gap-3 w-full">
        {scoreItems.map((item: any, index: number) => (
          <Score
            key={index}
            icon={item.icon}
            text={item.text}
            count={item.count}
            className={
              item.text === "Aciertos" && isMatchCardAnimated
                ? "bg-green-400 transition duration-300"
                : ""
            }
          />
        ))}
      </div>
      <GameBoard animals={animals} cards={cards}
      setCards={setCards} />
    </div>
  );
};
