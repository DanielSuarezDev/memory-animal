import { FC} from "react";

import { ModalProps } from "./types";


export const Modal: FC<ModalProps> = ({ children, isOpen, closeModal }) => {

    const handleClose = () => {
        closeModal(!isOpen);
    }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg text-center z-50 w-64 relative">
        <button
          className="px-4 py-2 absolute left-2 top-2"
          onClick={handleClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};
