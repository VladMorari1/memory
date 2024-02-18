import React from "react";
import { CardST, CardFace, CardImg } from "./styles";
import { CARD_BACK_IMAGE } from "../../constants/cards-constants";
import { ICard } from "../../interfaces/card";

type Props = {
  onClick: (idx: number) => void;
  card: ICard;
  index: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
};

function Card({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled,
}: Props) {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <CardST onClick={handleClick} isFlipped={isFlipped} isInactive={isInactive}>
      <CardFace>
        <CardImg src={CARD_BACK_IMAGE[0]} alt="card" />
      </CardFace>
      <CardFace className="card-front-face">
        <CardImg src={card.url} alt="card" />
      </CardFace>
    </CardST>
  );
}

export default Card;
