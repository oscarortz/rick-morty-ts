import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexto/AuthContext";

export const PaginasPrivadas = () => {
  const Context = useContext(AuthContext);
  if (!Context?.auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
