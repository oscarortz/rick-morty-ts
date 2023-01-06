import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Personajes } from "../componentes/Personajes";
import AuthContext from "../contexto/AuthContext";
import { Autenticacion } from "../componentes/Autenticacion";

export const Home = () => {
  const Context = useContext(AuthContext);

  return (
    <div>
      <Autenticacion />
      <Personajes />
    </div>
  );
};
