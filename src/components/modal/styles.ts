import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  color: red;
  cursor: pointer;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 16px;
`;
