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
  personajes: filtro[];
  setFiltro: React.Dispatch<React.SetStateAction<Array<personaje>>>;
}

export const Filtros = ({
  genero,
  setGenero,
  personajes,
  setFiltro,
}: Props) => {
  useEffect(() => {
    if (genero === "All") {
      setFiltro(personajes);
      return;
    }
    const filtered = personajes.filter((personaje) =>
      personaje.gender.includes(genero)
    );
    setFiltro(filtered);
  }, [genero]);

  const setMale = () => {
    setGenero("Male");
  };
  const setFemale = () => {
    setGenero("Female");
  };
  const setAll = () => {
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
};
