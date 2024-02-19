import styled from "styled-components";

export const StartGameBlock = styled.div`
  padding: 12px;
  width: 90%;
`;

export const Label = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
  width: 90%;
`;

export const UserListWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
  margin: 6px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const User = styled.div`
  border: 1px solid #858585;
  text-align: center;
  margin: 4px;
  transition: 0.5s;
  border-radius: 6px;
  width: 80%;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 4px;
  width: 60%;
  margin: auto;
  justify-content: center;
`;
export const Input = styled.input`
  border: 1px solid #858585;
  height: 30px;
  border-radius: 4px;
  padding: 4px;
  width: 50%;
`;

export const StartGameButton = styled.button`
  border: 1px solid #929293;
  background-color: rgba(234, 234, 234, 0.36);
  width: 100px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px auto;
  cursor: pointer;
`;
