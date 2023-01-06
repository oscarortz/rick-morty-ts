import { NavLink } from "react-router-dom";
import "../hojas-de-estilos/NavLink.css";

export const Navegacion = () => {
  return (
    <div className="navLink-contenedor">
      <NavLink to="login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/locacion">Locaciones</NavLink>
      <NavLink to="/episodios">Episodios</NavLink>
    </div>
  );
};
