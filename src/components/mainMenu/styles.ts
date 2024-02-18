import styled from "styled-components";
import backgroundImage from "../../assets/images/background.jpg";
export const MainMenuWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  margin: auto;
  border: 4px solid #181313;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const StartGameButton = styled.button`
  width: 300px;
  font-size: 30px;
  font-weight: 700;
  background-color: transparent;
  border: 2px solid rgba(190, 53, 53, 0.94);
  border-radius: 6px;
  cursor: pointer;
  height: 100px;
  backdrop-filter: blur(10px);
  color: white;
`;

export const GameInfo = styled.div`
  width: 8%;
  height: 10%;
  border-radius: 8px;
  padding: 10px;
  position: fixed;
  background-color: antiquewhite;
  left: 6%;
  top: 4%;
`;
