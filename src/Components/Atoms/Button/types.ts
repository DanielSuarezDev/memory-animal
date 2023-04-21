import { ButtonHTMLAttributes } from "react";

export type PropsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
  };