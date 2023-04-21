import { useState } from "react";
import useStore from "../store";

export const useResetGame = (resetBoard: () => void) => {
  const [showModal, setShowModal] = useState(false);
  const {
    resetErrors,
    resetMatches,
    resetAttempts,
    setGameCompleted,
  } = useStore((state) => ({
    resetErrors: state.resetErrors,
    resetMatches: state.resetMatches,
    resetAttempts: state.resetAttempts,
    setGameCompleted: state.setGameCompleted,
  }));

  const resetGame = () => {
    resetErrors();
    resetMatches();
    resetAttempts();
    setGameCompleted(false);
    setShowModal(false);
    resetBoard();
  };

  const openModal = () => {
    setShowModal(true);
  };

  return { resetGame, showModal, setShowModal, openModal };
};