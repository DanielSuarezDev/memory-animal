import { FC } from "react";

import { Button } from "../../Components";
import Input from "../../Components/Atoms/Input/Input";
import { Expression, LoginScreen, LoginScreenDesktop } from "../../assets";

import { PropsLogin } from "./types";


export const Login: FC<PropsLogin> = ({ handleLogin, setUsername, username }) => {
  return (
    <div className="p-4 flex flex-col items-center h-screen sm:flex-row sm:justify-between sm:items-center">
      <img src={LoginScreen} alt="header" className="w-80 h-2/5 sm:hidden" />
      <img
        src={LoginScreenDesktop}
        alt="header"
        className="w-8/12 h-full object-fill hidden sm:block"
      />

      <div className="p-4 my-4 flex flex-col items-center justify-center text-center sm:w-6/12 sm:h-full">
        <h1 className="text-3xl font-bold text-gray-700 ">MemoryAnimals</h1>
        <form onSubmit={handleLogin}>
          <Input
            className="my-6"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit">
            Empezar el juego
            <img src={Expression} alt="icon" />
          </Button>
        </form>
        <div className="mt-44 text-gray-400">
          con amor 💜 por @danielsuarezdev
        </div>
      </div>
    </div>
  );
};
