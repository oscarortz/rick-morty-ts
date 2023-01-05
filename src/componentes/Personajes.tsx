import { useEffect, useState } from "react";
import axios from "axios";
import "../hojas-de-estilos/Cards-contenedor.css";
import { PaginacionPersonajes } from "./PaginacionPersonajes";
import { Filtros } from "./Filtros";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../hojas-de-estilos/Card-personaje.css";

const URL = "https://rickandmortyapi.com/api/character";

export interface personaje {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  episode: Array<string>;
}
export interface filtro {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  episode: Array<string>;
}

export function Personajes() {
  const [personajes, setPersonajes] = useState<Array<personaje>>([]);
  const [pages, setPages] = useState<Record<string, string>>({});
  const [genero, setGenero] = useState<string>("");
  const [filtro, setFiltro] = useState<Array<filtro>>([]);

  useEffect(() => {
    fetchPersonajes(URL);
  }, []);

  const fetchPersonajes = (url: string) => {
    axios
      .get(url)
      .then((resp) => {
        setPersonajes(resp.data.results);
        setPages(resp.data.info);
        setFiltro(resp.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNext = () => {
    fetchPersonajes(pages.next);
  };
  const handlePrev = () => {
    fetchPersonajes(pages.prev);
  };
  console.log(filtro);
  return (
    <div>
      <Filtros
        genero={genero}
        setGenero={setGenero}
        personajes={personajes}
        setFiltro={setFiltro}
        setPersonajes={setPersonajes}
      />
      <PaginacionPersonajes
        handleNext={handleNext}
        handlePrev={handlePrev}
        prev={pages.prev}
        next={pages.next}
      />
      <div className="cards-contenedor">
        {filtro.map((personaje) => {
          return (
            <div key={personaje.id} className="card-personaje">
              <Link to={`/detalleDelPersonaje/${personaje.id}`}>
                <img src={personaje.image} alt={personaje.name} />
              </Link>
              <div>
                <h3>{personaje.name}</h3>
                <div className="status-contenedor">
                  {personaje.status === "Alive" ? <Alive /> : <Dead />}
                  <h5>
                    {personaje.status}-{personaje.species}
                  </h5>
                </div>
                <p>Last know location</p>
                <h5>{personaje.location.name}</h5>
                <h5>{personaje.gender}</h5>

                <Link
                  to={`/detalleEpisodios/${personaje.episode.map(
                    (item: string) => item.slice(40, 43).concat(",")
                  )}`}
                >
                  <p> Episodios donde aparece</p>
                </Link>
                <h6>
                  {personaje.episode.map((item: string) =>
                    item.slice(40, 43).concat(" ")
                  )}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const Alive = styled.div`
  background-color: green;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 5px;
`;

const Dead = styled.div`
  background-color: red;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin: 5px;
`;
