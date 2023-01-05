import React from "react";

interface Props {
  episodios: Array<{
    id: number;
    name: string;
    air_date: string;
    created: string;
    episode: string;
  }>;
}

export const Episodio = ({ episodios }: Props) => {
  return (
    <div>
      {episodios.map((item) => (
        <div key={item.id}>
          <h4>{item.id}</h4>
          <p>Nombre del episodio</p>
          <h4>{item.name}</h4>
          <h4>{item.air_date}</h4>
          <p>Fecha de Transmision</p>
          <h4>{item.created}</h4>
          <p>Num. del episodio</p>
          <h4>{item.episode}</h4>
        </div>
      ))}
    </div>
  );
};
