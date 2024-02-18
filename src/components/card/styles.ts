import styled from "styled-components";

interface CardProps {
  isInactive: boolean;
  isFlipped: boolean;
}

export const CardST = styled.div<CardProps>`
  width: 5vw;
  height: 9vh;
  border-radius: 8px;
  box-shadow: 4px 4px 2px 2px rgba(44, 43, 43, 0.82);
  transition: 0.3s;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
  opacity: ${(props) => (props.isInactive ? 0 : 1)};
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "none")};
`;

export const CardFace = styled.div`
  backface-visibility: hidden; //the back face of the element will not be visible during the rotation
  position: absolute;
  width: 100%;
  height: 100%;

  &.card-front-face {
    transform: rotateY(180deg);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;
