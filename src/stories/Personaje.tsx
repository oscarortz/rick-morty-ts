import { useEffect, useState } from "react";
import axios from "axios";
import { personaje } from "../componentes/Personajes";
import "./Personaje.css";

const Personaje = () => {
  const [data, setData] = useState<Array<personaje>>([]);

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character");
  }, []);
  const getData = (url: string) => {
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="tarjetas">
      {data.map((item) => (
        <div key={item.id} className="tarjeta">
          <img src={item.image} alt={item.name} />
          <div className="informacion">
            <p>Nombre:</p>
            <h4>{item.name}</h4>
            <p>Estatus-Species:</p>
            <h4>
              {item.status}-{item.species}
            </h4>
            <p>Genero</p>
            <h4>{item.gender}</h4>

            <p>Episodios:</p>
            <p>{item.episode.map((i) => i.slice(40, 43)).join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personaje;
