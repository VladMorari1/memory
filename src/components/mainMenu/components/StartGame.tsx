import React, { useState } from "react";
import { IUser } from "../../../interfaces/user";
import {
  Input,
  InputWrapper,
  Label,
  StartGameBlock,
  StartGameButton,
  User,
  UserListWrapper,
} from "./styles";
import { GameStatusType } from "../../../interfaces/game";

interface StartGameProps {
  userList: IUser[];
  createUser: (username: string) => void;
  setSelectedUser: (username: string) => void;
  startGame: (status: GameStatusType) => void;
  selectedUserName: string;
}

const StartGame: React.FC<StartGameProps> = ({
  userList,
  createUser,
  setSelectedUser,
  startGame,
  selectedUserName,
}) => {
  const [userName, setUserName] = useState<string>("");
  const label = userList.length
    ? "Select your username from list or create a new user to play"
    : "Please set your username!";

  const handleClickAddUser = () => {
    if (userName.length) {
      createUser(userName);
      setUserName("");
    } else {
      console.log("Empty name is not allowed!");
    }
  };
  const handleStartBtn = () => {
    if (selectedUserName.length) {
      startGame("playing");
    }
  };

  return (
    <StartGameBlock>
      <Label>Selected user: {selectedUserName}</Label>
      <Label>{label}</Label>
      <UserListWrapper>
        {userList.map((user) => (
          <User
            onClick={() => setSelectedUser(user.username)}
            key={user.username}
          >
            {user.username}
          </User>
        ))}
      </UserListWrapper>
      <InputWrapper>
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button onClick={handleClickAddUser} type={"button"}>
          Add
        </button>
      </InputWrapper>

      <StartGameButton onClick={handleStartBtn}>Start!</StartGameButton>
    </StartGameBlock>
  );
};

export default StartGame;
