import React, { useContext } from "react";
import AuthContext from "../contexto/AuthContext";

export const Autenticacion = () => {
  const Context = useContext(AuthContext);

  return (
    <div>
      <button
        onClick={Context?.login}
        style={{ display: `${Context?.auth ? "none" : "inline"}` }}
      >
        Login
      </button>
      <button
        onClick={Context?.logout}
        disabled={!Context?.auth}
        style={{ display: `${!Context?.auth ? "none" : "inline"}` }}
      >
        Logout
      </button>
    </div>
  );
};
