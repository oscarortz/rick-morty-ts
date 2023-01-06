import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext, { AuthProvider } from "../contexto/AuthContext";

interface detalles {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export const DetalleEpisodios = () => {
  const [detalleEpisodios, setDetalleEpisodios] = useState<Array<detalles>>([]);
  const { id } = useParams();
  const Context = useContext(AuthContext);
  useEffect(() => {
    getDetalleEpisodios();
  }, []);

  const getDetalleEpisodios = () => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => {
        console.log(response.data);
        setDetalleEpisodios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(detalleEpisodios);
  return !Context?.auth ? (
    <div>
      <h2>"Logueate para ver el contenido"</h2>
      <Link to="/login">Login</Link>
    </div>
  ) : (
    <div>
      {detalleEpisodios.map((item) => (
        <div key={item.id}>
          <p>Nombre del episodio:</p>
          <h4> {item.name} </h4>
          <p>fecha de transmicion:</p>
          <h4> {item.air_date} </h4>
          <p>Episodio:</p>
          <h4> {item.episode} </h4>
          <p>Fecha de creacion:</p>
          <h4> {item.created} </h4>
        </div>
      ))}
    </div>
  );
};
