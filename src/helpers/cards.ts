import { ICard } from "../interfaces/card";

export const duplicateCards = (cards: ICard[]): ICard[] => {
  const doubledCards: ICard[] = [];
  for (const card of cards) {
    const newCard: ICard = { ...card };
    doubledCards.push(newCard);
    const clonedCard: ICard = { ...card };
    doubledCards.push(clonedCard);
  }
  return doubledCards;
};

export const shuffleCards = (cards: ICard[]): ICard[] => {
  const length = cards.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temp;
  }
  return cards;
};
