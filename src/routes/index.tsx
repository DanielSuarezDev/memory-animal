import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { ROUTES } from "./types";
import useLogin from "../hook/useLogin";
import { HomeLoad } from "../pages/Home";
import { LoginLoad } from "../pages/Login";

const AppRouter = () => {

  const { user} = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeLoad />} />
        <Route path={ROUTES.LOGIN} element={<LoginLoad />} />
      </Routes>
  );
};

export default AppRouter;
