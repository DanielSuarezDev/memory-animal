import { FC} from "react";

import Money from "../../../assets/images/money.png";

import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
  id,
  index,
  image,
  checkMatch,
  isFlipped,
}) => {
  const handleClick = () => {
    if (!isFlipped) {
      checkMatch(id, index);
    }
  };

  return (
    <div
      className={`relative w-24 h-28 md:w-36 md:h-40 mx-2 my-3 bg-white rounded shadow-md cursor-pointer transform duration-500 ${
        !isFlipped ? "rotate-180" : ""
      }`}
      onClick={handleClick}
    >
      <div className="absolute w-full h-full">
        <img
          src={isFlipped ? image.url : Money}
          alt="Animal"
          className={
            isFlipped
              ? `w-full h-full object-cover rounded`
              : `bg-gray-800 w-full h-full object-cover rounded`
          }
        />
      </div>
    </div>
  );
};
