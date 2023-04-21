/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";

import useStore from "../../../store";
import { Card } from "../../Molecules/Card";

import { GameBoardProps } from "./types";


export const GameBoard: FC<GameBoardProps> = ({ animals, cards, setCards }) => {
  const [selectedCards, setSelectedCards] = useState<{ cardId: any, index: any }[]>([]);

  const {
    matches,
    incrementMatches,
    incrementErrors,
    setGameCompleted,
    incrementAttempts,
  } = useStore((state) => ({
    incrementMatches: state.incrementMatches,
    incrementErrors: state.incrementErrors,
    matches: state.matches,
    setGameCompleted: state.setGameCompleted,
    errors: state.errors,
    attempts: state.attempts,
    gameCompleted: state.gameCompleted,
    incrementAttempts: state.incrementAttempts,
  }));
  

  const checkMatch = (cardId: any, index: any) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, { cardId, index }]);
      setCards(
        cards.map((card: any, cardIndex: any) => {
          if (cardIndex === index) {
            return { ...card, isFlipped: true };
          }
          return card;
        })
      );
    }
  };

useEffect(() => {
    if (!Array.isArray(animals)) return;
  
    const animalCards = animals.map((animal: any, index: any) => ({
      id: `${animal.fields.id}-${index}`,
      image: animal.fields.image,
    }));
    const mixedCards = [...animalCards, ...animalCards].sort(
      () => Math.random() - 0.5
    ).map(card => ({ ...card, isFlipped: false }));
    setCards(mixedCards);
  }, [animals]);
  
  useEffect(() => {
    if (selectedCards.length === 2) {
      const [card1, card2] = selectedCards;
  
      incrementAttempts();
  
      if (card1.cardId === card2.cardId) {
        incrementMatches();
  
        if (matches + 1 === cards.length / 2) {
          setGameCompleted(true);
        }
        setSelectedCards([]);
      } else {
        incrementErrors();
  
        setTimeout(() => {
          setCards(
            cards.map((card: any, index: any) => {
              if (index === card1.index || index === card2.index) {
                return { ...card, isFlipped: false };
              }
              return card;
            })
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);
  
  


  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-1 mx-auto">
      {cards.map((card: any, index: any) => {
      
      return(
        <Card
          key={index}
          id={card.id}
          image={card.image}
          checkMatch={checkMatch}
          index={index}
          isFlipped={card.isFlipped}
        />
      )})}
    </div>
  );
};
