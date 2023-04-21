import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useLogin from '../../hook/useLogin';
import { Login } from './Login'

export const LoginLoad = () => {

  const { user, login } = useLogin();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username);
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <Login setUsername={setUsername} handleLogin={handleLogin} username={username}/>
  )
}
