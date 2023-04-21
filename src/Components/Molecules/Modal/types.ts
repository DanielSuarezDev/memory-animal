import { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    closeModal: (isOpen: boolean) => void;
    children: ReactNode;
  }
  