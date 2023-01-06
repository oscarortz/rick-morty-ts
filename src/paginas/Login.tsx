import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Autenticacion } from "../componentes/Autenticacion";
import AuthContext from "../contexto/AuthContext";

const Login = () => {
  const Context = useContext(AuthContext);
  return (
    <div>
      <h1>Bienvenido</h1>
      <h2>Logueate para ver el contenido...</h2>
      {Context?.auth ? <Navigate to="/" /> : ""}
      <Autenticacion />
    </div>
  );
};

export default Login;
