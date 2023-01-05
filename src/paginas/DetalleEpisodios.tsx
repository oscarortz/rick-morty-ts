import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const DetalleEpisodios = () => {
  const [detallelLocacion, setDetallelLocacion] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getDetalleEpisodios();
  }, []);

  const getDetalleEpisodios = () => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => {
        console.log(response.data);
        setDetallelLocacion(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div>DetalleEpisodios</div>;
};
