import React, { FC } from "react";
import { PropsButton } from "./types";

export const Button: FC<PropsButton> = ({
  children,
  type = "button",
  ...rest
}) => {
  return (
    <button
      className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center w-full"
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
