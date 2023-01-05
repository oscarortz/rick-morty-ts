import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* interface detalles {
  id: number;
  name: string;
  status: string;
} */

export const DetalleDelPersonaje = () => {
  const [detallePersonaje, setDetallePersonaje] = useState<
    Record<string, string>
  >({});
  const { id } = useParams();
  useEffect(() => {
    getPersonajeById();
  }, [id]);

  const getPersonajeById = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setDetallePersonaje(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4>{}</h4>
    </div>
  );
};
