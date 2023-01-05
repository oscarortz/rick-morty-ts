import React, { useEffect } from "react";

interface personaje {
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
interface filtro {
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
interface Props {
  genero: string;
  setGenero: React.Dispatch<React.SetStateAction<string>>;
  personajes: personaje[];
  setFiltro: React.Dispatch<React.SetStateAction<Array<filtro>>>;
  setPersonajes: React.Dispatch<React.SetStateAction<Array<personaje>>>;
}

export function Filtros({
  genero,
  setGenero,
  personajes,
  setFiltro,
  setPersonajes,
}: Props) {
  useEffect(() => {
    if (genero === "All") {
      setFiltro(personajes);
      return;
    }
    const filtered = personajes.filter((personaje) =>
      personaje.gender.includes(genero)
    );
    //setPersonajes(filtered);
    setFiltro(filtered);
  }, [genero]);

  const setMale = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setGenero("Male");
  };
  const setFemale = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setGenero("Female");
  };
  const setAll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setGenero("All");
  };
  return (
    <div>
      <ul>
        <button onClick={setMale}>masculino</button>
        <button onClick={setFemale}>femenino</button>
        <button onClick={setAll}>todos</button>
      </ul>
    </div>
  );
}
