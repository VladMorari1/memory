import React, { useEffect, useMemo, useState } from "react";
import { GameStatusType } from "../../interfaces/game";
import { IUser } from "../../interfaces/user";
import Modal from "../modal";
import StartGame from "./components/StartGame";
import { GameInfo, MainMenuWrapper, StartGameButton } from "./styles";
import PlayingGame from "../playingGame";
import { CARDS_GET_LIMIT } from "../../constants/cards-constants";
import GameResultComponent from "../gameResult";

function MainMenu() {
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatusType>("menu");
  const [users, setUsers] = useState<IUser[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const selectedUserName = useMemo(() => {
    const selectedUser = users.find((user) => user.selected);
    return selectedUser ? selectedUser.username : "";
  }, [users]);
  const MOVES_LIMIT = 40; // TODO => make this constant adjustable and set game mode based on it [easy,medium,hard]
  useEffect(() => {
    if (moves >= MOVES_LIMIT) {
    } else if (matches >= CARDS_GET_LIMIT) {
      setGameStatus("win");
    }
  }, [moves]);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const createUser = (username: string) => {
    const existingUser = users.find((_user) => _user.username === username);
    if (existingUser) {
      alert("User with this name already is in the list");
    } else {
      const newUser: IUser = {
        username,
        score: 0,
        isPlaying: false,
        selected: false,
      };
      setUsers((prev) => [...prev, newUser]);
    }
  };
  const changeGameStatus = (status: GameStatusType) => {
    setGameStatus(status);
  };
  const setSelectedUser = (username: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({
        ...user,
        selected: user.username === username,
      })),
    );
  };
  const restartGame = () => {
    setGameStatus("menu");
    setIsOpen(false);
  };
  const getViewByGameStatus = (gameStatus: GameStatusType) => {
    switch (gameStatus) {
      case "playing":
        return <PlayingGame setMoves={setMoves} setMatches={setMatches} />;
      case "lose":
        return (
          <GameResultComponent result={"lose"} restartGame={restartGame} />
        );
      case "win":
        return <GameResultComponent result={"win"} restartGame={restartGame} />;
      case "menu":
        return (
          <div>
            <StartGameButton onClick={openModal}>Start game</StartGameButton>
            <Modal
              isOpen={isOpen}
              onClose={closeModal}
              childComponent={
                <StartGame
                  createUser={createUser}
                  userList={users}
                  setSelectedUser={setSelectedUser}
                  startGame={changeGameStatus}
                  selectedUserName={selectedUserName}
                />
              }
            />
          </div>
        );
    }
  };

  return (
    <MainMenuWrapper>
      {gameStatus === "playing" && (
        <GameInfo>
          <div>User: {selectedUserName}</div>
          <div>Moves: {moves}</div>
          <div>Moves limit: {MOVES_LIMIT}</div>
          <div>Matches: {matches}</div>
        </GameInfo>
      )}
      {getViewByGameStatus(gameStatus)}
    </MainMenuWrapper>
  );
}

export default MainMenu;
