import React from "react";
import { GameResult, GameResultWrapper } from "./styles";

const GameResultComponent = ({
  result,
  restartGame,
}: {
  result: "win" | "lose";
  restartGame: () => void;
}) => {
  return (
    <GameResultWrapper>
      {result === "win" ? (
        <GameResult>
          <h1>Congratulations, You Won!</h1>
          <button onClick={restartGame}>Back to main menu</button>
        </GameResult>
      ) : (
        <GameResult>
          <h1>Sorry, You Lost!</h1>
          <button onClick={restartGame}>Back to main menu</button>
        </GameResult>
      )}
    </GameResultWrapper>
  );
};

export default GameResultComponent;
