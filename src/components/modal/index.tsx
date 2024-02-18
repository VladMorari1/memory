import React from "react";
import ReactDOM from "react-dom";
import { CloseButton, ModalContent, ModalWrapper } from "./styles";
interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  childComponent: React.ReactNode;
}
const Modal = ({ isOpen, onClose, childComponent }: IModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>x</CloseButton>
        <div>{childComponent}</div>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("modal-root") as HTMLElement,
  );
};

export default Modal;
