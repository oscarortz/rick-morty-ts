import { useEffect, useState } from "react";
import axios from "axios";
import Personaje from "./Personaje";
import "../hojas-de-estilos/Cards-contenedor.css";
import { PaginacionPersonajes } from "./PaginacionPersonajes";
import { Filtros } from "./Filtros";

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
            <div key={personaje.id}>
              <Personaje personajes={personajes} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
