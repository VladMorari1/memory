import styled from "styled-components";

export const StartGameBlock = styled.div`
  padding: 12px;
`;

export const Label = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  width: 600px;
  text-align: center;
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
`;
export const Input = styled.input`
  border: 1px solid #858585;
  width: 100%;
  height: 30px;
  border-radius: 4px;
  padding: 4px;
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
