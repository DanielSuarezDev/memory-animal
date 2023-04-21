import { FC, useState } from "react";

import { Button } from "../../Atoms/Button";
import { Modal } from "../../Molecules/Modal/Modal";
import { Octopus, Profile, Settings } from "../../../assets";

import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({
  user,
  resetGame,
  pairsCount,
  setPairsCount,
  handlePairsCountSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-3 w-full flex justify-between items-center p-2">
      <div className="flex items-center">
        <img src={Profile} alt="logo" width={30} height={30} className="mr-3" />
        <p className="font-medium text-gray-900">Hola {user}</p>
      </div>

      <img
        src={Settings}
        alt=""
        width={30}
        height={30}
        className="mr-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <Modal isOpen={isOpen} closeModal={setIsOpen}>
          <div>
            <Button>
              <a
                className="flex items-center justify-center"
                href="https://github.com/DanielSuarezDev/memory-animal"
                target="_blank"
              >
                <img src={Octopus} alt="" />
                Github
              </a>
            </Button>

            <Button
              className="bg-white border border-gray-600 w-full h-10 mt-2 rounded-md"
              onClick={resetGame}
            >
              Resetear
            </Button>
            <form onSubmit={handlePairsCountSubmit} className="mt-4 flex">
              <input
                type="number"
                id="pairs-count"
                value={pairsCount}
                onChange={(e) => setPairsCount(parseInt(e.target.value))}
                required
                className="w-24 h-10 border border-gray-600 rounded-md mr-2"
              />
              <Button type="submit">Aceptar</Button>
            </form>
          </div>
        </Modal>
      )}
    </header>
  );
};
