export type PropsLogin = {
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    username: string;
  };