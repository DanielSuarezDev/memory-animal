import { FC } from "react";

import { ScoreProps } from "./types";

export const Score: FC<ScoreProps> = ({ icon, text, count, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full sm:w-24 h-24 p-2 text-center text-blue-950 bg-white shadow-sm rounded-xl my-5 ${className}`}
    >
      <img src={icon} alt="icon" width={45} height={45} />
      <span>{count}</span>
      <span className="font-bold">{text}</span>
    </div>
  );
};
