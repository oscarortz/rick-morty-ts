import axios from "axios";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../contexto/AuthContext";

interface detalles {
  childre: ReactNode;
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
}

export const DetalleDelPersonaje = () => {
  const [detallePersonaje, setDetallePersonaje] = useState<detalles>();
  const { id } = useParams();
  const Context = useContext(AuthContext);
  useEffect(() => {
    getPersonajeById(`https://rickandmortyapi.com/api/character/${id}`);
  }, [id]);

  const getPersonajeById = (url: string) => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        setDetallePersonaje(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(detallePersonaje);
  return (
    <div>
      {Context?.auth ? (
        <div>
          <img src={detallePersonaje?.image} alt={detallePersonaje?.name} />
          <h4>{detallePersonaje?.id}</h4>
          <h4>{detallePersonaje?.name}</h4>
          <h4>{detallePersonaje?.location.name}</h4>
          <h4>{detallePersonaje?.status}</h4>
          <h4>{detallePersonaje?.species}</h4>
          <h4>{detallePersonaje?.gender}</h4>
        </div>
      ) : (
        <div>
          <h2>"Logueate para ver el contenido"</h2>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};
